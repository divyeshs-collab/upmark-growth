import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  linkToHome?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showTagline = true,
  size = 'md',
  className = '',
  linkToHome = true,
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-11 h-11',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-[26px]',
  };

  const taglineSizes = {
    sm: 'text-[8px] tracking-[0.24em]',
    md: 'text-[9px] tracking-[0.28em]',
    lg: 'text-[10px] tracking-[0.3em]',
  };

  const logoContent = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official UPMARK Upward-U Geometric Mark (Matches Uploaded Logo) */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="upmark-arrow-grad" x1="31" y1="2" x2="35" y2="43" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0A52E6" />
              <stop offset="55%" stopColor="#1D74F5" />
              <stop offset="100%" stopColor="#3898FF" />
            </linearGradient>
          </defs>

          {/* Left Midnight Navy Pillar */}
          <path
            d="M6 14L17 21.5V42.5C10.5 41 6 35.5 6 28.5V14Z"
            fill={isLight ? '#93C5FD' : '#051329'}
          />

          {/* Center Royal Blue Angled Facet */}
          <path
            d="M17 34.5L28.5 25V42.8C26.2 43.3 23.8 43.5 21.5 43.3C19.9 43.1 18.4 42.9 17 42.5V34.5Z"
            fill="#0D5BEF"
          />

          {/* Right Upward Arrow Pillar with Blue-to-Sky Gradient */}
          <path
            d="M21.5 14.5L40 2V28.5C40 36.2 35.2 41.5 28.5 42.8V14.5H21.5Z"
            fill="url(#upmark-arrow-grad)"
          />
        </svg>
      </div>

      {/* Wordmark: UPMARK + GROWTH & PERFORMANCE */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-extrabold tracking-[0.03em] ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-[#051329]'
          }`}
        >
          UPMARK
        </span>
        {showTagline && (
          <span
            className={`font-sans font-semibold uppercase mt-1 ${taglineSizes[size]} ${
              isLight ? 'text-slate-400' : 'text-[#64748B]'
            }`}
          >
            Growth &amp; Performance
          </span>
        )}
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        aria-label="UPMARK Home"
        className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5BEF] focus-visible:ring-offset-2 rounded"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
