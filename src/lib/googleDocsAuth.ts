import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets');
provider.addScope('https://www.googleapis.com/auth/documents');
provider.addScope('https://www.googleapis.com/auth/gmail.send');

let isSigningIn = false;
let cachedAccessToken: string | null = typeof window !== 'undefined' ? localStorage.getItem('sou_google_access_token') : null;

// Initialize auth state listener.
export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (!cachedAccessToken && typeof window !== 'undefined') {
        cachedAccessToken = localStorage.getItem('sou_google_access_token');
      }
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // If logged in under firebase but token is expired or not cached, 
        // fallback to need configuration or login.
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('sou_google_access_token');
      }
      if (onAuthFailure) onAuthFailure();
    }
  });
};

// Start Google sign in popup
export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Failed to get access token from Google Auth');
    }

    cachedAccessToken = credential.accessToken;
    if (typeof window !== 'undefined') {
      localStorage.setItem('sou_google_access_token', credential.accessToken);
    }
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Sign in error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

type GetAccessTokenResult = string | null;

export const getAccessToken = async (): Promise<GetAccessTokenResult> => {
  return cachedAccessToken;
};

export const logout = async () => {
  await auth.signOut();
  cachedAccessToken = null;
  if (typeof window !== 'undefined') {
    localStorage.removeItem('sou_google_access_token');
  }
};

/**
 * Google Sheets API integration helper methods
 */

// Create a new Google Sheet (Spreadsheet) containing a 'Leads' worksheet
export async function createGoogleSheet(
  accessToken: string,
  title: string
): Promise<{ spreadsheetId: string; title: string; spreadsheetUrl: string }> {
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title: title
      },
      sheets: [
        {
          properties: {
            title: 'Leads'
          },
          data: [
            {
              startRow: 0,
              startColumn: 0,
              rowData: [
                {
                  values: [
                    { userEnteredValue: { stringValue: 'Creator Email' } },
                    { userEnteredValue: { stringValue: 'Booked At' } }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Create Google Sheet error response:', errorBody);
    throw new Error(`Failed to create Google Sheet: ${response.statusText}`);
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;
  const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  return {
    spreadsheetId,
    title: data.properties?.title || title,
    spreadsheetUrl
  };
}

// Append email log to the 'Leads' tab/sheet
export async function appendEmailToSheet(
  accessToken: string,
  spreadsheetId: string,
  email: string
): Promise<any> {
  const formattedTime = new Date().toLocaleString('en-US', {
    timeZoneName: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  // Try appending to general range 'A:B' using Sheets API v4
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Leads!A:B:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        range: "Leads!A:B",
        majorDimension: "ROWS",
        values: [
          [email, formattedTime]
        ]
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Append email to Google Sheet (Leads!A:B) failed, trying fallback:', errorBody);
    
    // Fallback: append to default sheet
    const responseFallback = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:B:append?valueInputOption=USER_ENTERED`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          range: "A:B",
          majorDimension: "ROWS",
          values: [
            [email, formattedTime]
          ]
        }),
      }
    );

    if (!responseFallback.ok) {
      const fallbackError = await responseFallback.text();
      console.error('Append fallback also failed:', fallbackError);
      throw new Error(`Failed to append email to Google Sheet: ${responseFallback.statusText}`);
    }
    return responseFallback.json();
  }

  return response.json();
}

/**
 * Google Docs API integration helper methods (kept for full compatibility)
 */

// Create a new Google Document with a custom title
export async function createGoogleDoc(accessToken: string, title: string): Promise<{ documentId: string; title: string }> {
  const response = await fetch('https://docs.googleapis.com/v1/documents', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Create Google Doc error response:', errorBody);
    throw new Error(`Failed to create Google Document: ${response.statusText}`);
  }

  return response.json();
}

// Append email log to an existing Google Document
export async function appendEmailToDoc(accessToken: string, documentId: string, email: string): Promise<any> {
  const formattedTime = new Date().toLocaleString('en-US', {
    timeZoneName: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  const insertText = `• Creator Email: ${email} | Booked At: ${formattedTime}\n`;

  const response = await fetch(`https://docs.googleapis.com/v1/documents/${documentId}:batchUpdate`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: [
        {
          insertText: {
            text: insertText,
            endOfSegmentLocation: {
              segmentId: ''
            }
          }
        }
      ]
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Append email to Google Doc error response:', errorBody);
    throw new Error(`Failed to append email to Google Document: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Sends an automated HTML confirmation email via the Gmail API.
 */
export async function sendConfirmationEmail(
  accessToken: string,
  recipientEmail: string,
  targetTitle: string
): Promise<any> {
  const subject = `Booking Confirmed: Live Orientation Session`;
  const body = `
    <div style="font-family: sans-serif; padding: 24px; color: #1e293b; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
      <div style="text-align: center; margin-bottom: 24px;">
        <h2 style="color: #059669; font-size: 24px; margin: 0; font-weight: 700;">Orientation Slot Confirmed</h2>
        <p style="color: #64748b; margin: 4px 0 0 0; font-size: 14px;">Thank you for reserving your seat!</p>
      </div>
      
      <p style="margin: 0 0 16px 0;">Hello,</p>
      <p style="margin: 0 0 20px 0;">Your live demonstration and orientation session has been scheduled successfully. Here are the booking records registered for your session:</p>
      
      <div style="background-color: #f8fafc; padding: 18px; border-radius: 8px; border: 1px solid #f1f5f9; margin-bottom: 24px;">
        <h4 style="margin: 0 0 12px 0; color: #334155; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Reservation Details:</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 4px 0; color: #64748b; width: 120px; font-weight: 500;">Event Type:</td>
            <td style="padding: 4px 0; color: #0f172a; font-weight: 600;">Live Orientation & Onboarding Demo</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Your Email:</td>
            <td style="padding: 4px 0; color: #0f172a; font-weight: 600;">${recipientEmail}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Lead Tracker:</td>
            <td style="padding: 4px 0; color: #0f172a; font-weight: 600;">${targetTitle || 'Leads Sheet'}</td>
          </tr>
        </table>
      </div>
      
      <p style="margin: 0 0 16px 0;">The interactive link to join your live demonstration slot, along with reference guides and next steps, will be provided by your organizer shortly.</p>
      
      <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 24px 0;" />
      <p style="font-size: 11px; color: #94a3b8; text-align: center; margin: 0;">This is an automated operational system message sent securely using your connected Workspace service integration.</p>
    </div>
  `;

  // Construct RFC 2822 email
  const emailContent = [
    `From: "Soupro Digital Services" <me>`,
    `To: ${recipientEmail}`,
    `Subject: ${subject}`,
    `Content-Type: text/html; charset=utf-8`,
    `MIME-Version: 1.0`,
    ``,
    body
  ].join('\r\n');

  // Raw base64url encoding safe for UTF-8
  const encodedEmail = btoa(unescape(encodeURIComponent(emailContent)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      raw: encodedEmail
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Failed to send confirmation email via Gmail API:', errorBody);
    throw new Error(`Gmail API failed to send confirmation: ${response.statusText}`);
  }

  return response.json();
}
