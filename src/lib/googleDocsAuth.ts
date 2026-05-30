import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets');
provider.addScope('https://www.googleapis.com/auth/documents');

let isSigningIn = false;
let cachedAccessToken: string | null = null;

// Initialize auth state listener.
export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // If logged in under firebase but token is expired or not cached, 
        // fallback to need configuration or login.
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
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
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Sign in error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const logout = async () => {
  await auth.signOut();
  cachedAccessToken = null;
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
