import React, { useState } from 'react';

interface LogoProps {
  className?: string; // Additional classes for custom style
  fallbackBgClass?: string; // Fallback background class when image is missing
  sizeClass?: string; // Sizings (default: 'w-8 h-8')
  logoText?: string; // The character or letter to display in fallback
}

export function Logo({
  className = '',
  fallbackBgClass = 'bg-validation-orange',
  sizeClass = 'w-8 h-8',
  logoText = 'S'
}: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  // Attempt to load "/logo.png". If a user uploads their logo to either /public/logo.png
  // or /public/logo.svg, it will load correctly here.
  return (
    <div
      className={`relative rounded flex items-center justify-center overflow-hidden shrink-0 select-none ${sizeClass} ${
        imgFailed ? fallbackBgClass : 'bg-transparent'
      } ${className}`}
    >
      {!imgFailed ? (
        <img
          src="/logo.png"
          alt="Soupro Logo"
          className="w-full h-full object-contain pointer-events-none"
          onError={() => setImgFailed(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="font-bold text-gray-900 text-base font-sans tracking-tight">
          {logoText}
        </span>
      )}
    </div>
  );
}
