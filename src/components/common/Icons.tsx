import React from 'react';

interface IconProps {
  className?: string;
}

export const IconArrowRight: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
    />
  </svg>
);

export const IconArrowUpRight: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
    />
  </svg>
);

export const IconArrowLeft: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M13 8H3M3 8L7.5 3.5M3 8L7.5 12.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
    />
  </svg>
);

export const IconCheck: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 8.5L6.5 12L13 4.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
    />
  </svg>
);

export const IconPlus: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M8 3V13M3 8H13"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
    />
  </svg>
);

export const IconMinus: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 8H13"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
    />
  </svg>
);

export const IconMenu: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 5.5H17M3 10H17M3 14.5H17"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
    />
  </svg>
);

export const IconClose: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4.5 4.5L15.5 15.5M15.5 4.5L4.5 15.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
    />
  </svg>
);

export const IconAlert: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 5V8.5M8 11H8.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
  </svg>
);

