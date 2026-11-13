import React from 'react';

interface SectionEyebrowProps {
  label: string;
  variant?: 'light' | 'dark';
  centered?: boolean;
}

/**
 * Clean, minimal editorial eyebrow indicator matching the UPMARK Navy + Royal Blue identity
 */
export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  label,
  variant = 'light',
  centered = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${centered ? 'justify-center' : ''}`}>
      <span
        className={`w-2 h-2 rounded-full ${
          variant === 'dark' ? 'bg-[#3898FF]' : 'bg-[#0D5BEF]'
        }`}
        aria-hidden="true"
      />
      <span
        className={`font-mono text-xs uppercase tracking-[0.16em] font-semibold ${
          variant === 'dark' ? 'text-slate-300' : 'text-[#0D5BEF]'
        }`}
      >
        {label}
      </span>
    </div>
  );
};
