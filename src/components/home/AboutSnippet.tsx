import React from 'react';
import { SectionEyebrow } from '../common/BrandMotifs';

export const AboutSnippet: React.FC = () => {
  const metrics = [
    { value: '07', label: 'Core Digital Services' },
    { value: '04', label: 'Primary Global Markets' },
    { value: '100%', label: 'Custom Code Handover' },
    { value: '24h', label: 'Scope Response Window' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (Span 5) */}
          <div className="lg:col-span-5 space-y-3">
            <SectionEyebrow label="Introduction" variant="light" />
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.18]">
              Your business deserves more than an online presence.
            </h2>
          </div>

          {/* Right Column (Span 7) */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At UPMARK, we bring together digital development and search visibility to help businesses create better digital experiences, connect with their customers and operate more effectively.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              We partner with startups, SMEs, service businesses, and e-commerce brands across the US, UK, Canada, and Australia, delivering clean engineering, custom operational tools, and structured search foundations.
            </p>
          </div>
        </div>

        {/* Minimal 4-Column Factual Strip */}
        <div className="pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-[#051329]">
                {item.value}
              </div>
              <div className="text-sm text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
