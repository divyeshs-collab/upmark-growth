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
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const taglineSizes = {
    sm: 'text-[9px] tracking-[0.22em]',
    md: 'text-[10px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.28em]',
  };

  const logoContent = (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Dynamic Geometric Mark Icon */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Background Rounded Shield/Tile */}
          <rect width="44" height="44" rx="10" fill={isLight ? '#FFFFFF' : '#0B1F3B'} />
          
          {/* Subtle Grid Accent */}
          <path d="M10 22H34M22 10V34" stroke={isLight ? '#0B1F3B' : '#FFFFFF'} strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 2" />

          {/* Stepped Performance Bars */}
          <rect x="11" y="27" width="5" height="7" rx="1.5" fill={isLight ? '#0B1F3B' : '#60A5FA'} fillOpacity={isLight ? '0.4' : '0.6'} />
          <rect x="18" y="21" width="5" height="13" rx="1.5" fill={isLight ? '#2563EB' : '#60A5FA'} />
          <rect x="25" y="15" width="5" height="19" rx="1.5" fill={isLight ? '#0B1F3B' : '#2563EB'} />

          {/* Upward Growth Arrow Trajectory */}
          <path
            d="M13 25L21 17L27 21L33 11"
            stroke={isLight ? '#2563EB' : '#FFFFFF'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Arrow Tip */}
          <path
            d="M27 11H33V17"
            stroke={isLight ? '#2563EB' : '#FFFFFF'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="33" cy="11" r="2" fill={isLight ? '#2563EB' : '#60A5FA'} />
        </svg>
      </div>

      {/* Typography: Wordmark + Tagline */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span
            className={`font-heading font-extrabold tracking-tight ${titleSizes[size]} ${
              isLight ? 'text-white' : 'text-navy-900'
            }`}
          >
            UPMARK
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-electric-500 mb-0.5 inline-block"></span>
        </div>
        {showTagline && (
          <span
            className={`font-sans font-semibold uppercase mt-0.5 ${taglineSizes[size]} ${
              isLight ? 'text-lightblue-300/90' : 'text-slate-500'
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
      <Link to="/" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 rounded-lg">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
