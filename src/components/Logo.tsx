import React, { useState } from 'react';
import logoImg from '../../logo.png';

interface LogoProps {
  className?: string; // Additional classes for custom style
  fallbackBgClass?: string; // Fallback background class when image is missing
  sizeClass?: string; // Sizings (default: 'w-8 h-8')
  logoText?: string; // The character or letter to display in fallback
}

export function Logo({
  className = '',
  fallbackBgClass = 'bg-validation-orange',
  sizeClass = 'w-12 h-12',
  logoText = 'S'
}: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  // Attempt to load the imported logoImg, which Vite resolves as a relative URL.
  // This supports subpath deployment environments like GitHub Pages.
  return (
    <div
      className={`relative rounded flex items-center justify-center overflow-hidden shrink-0 select-none ${sizeClass} ${
        imgFailed ? fallbackBgClass : 'bg-transparent'
      } ${className}`}
    >
      {!imgFailed ? (
        <img
          src={logoImg}
          alt="Soupro Logo"
          className="w-full h-full object-contain pointer-events-none"
          onError={() => setImgFailed(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="font-extrabold text-gray-900 text-xl font-sans tracking-tight">
          {logoText}
        </span>
      )}
    </div>
  );
}
