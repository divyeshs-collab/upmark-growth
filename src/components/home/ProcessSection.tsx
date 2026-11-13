import React from 'react';
import { SectionEyebrow } from '../common/BrandMotifs';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Audit',
      summary: 'We review your business objectives, target audience, and existing technical setup.',
    },
    {
      step: '02',
      title: 'Scope & Architecture',
      summary: 'We prepare a clear written proposal defining deliverables, timeline, and investment.',
    },
    {
      step: '03',
      title: 'Design & Development',
      summary: 'We design and engineer your website, store, or custom web application on staging.',
    },
    {
      step: '04',
      title: 'Launch & Optimisation',
      summary: 'We deploy to production with technical SEO, schema markup, and full code handover.',
    },
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 max-w-2xl">
          <SectionEyebrow label="How We Work (01 to 04)" variant="light" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.15]">
            A Structured Delivery Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.step}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 space-y-3"
            >
              <div className="font-mono text-sm font-bold text-[#0D5BEF]">
                {st.step}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#051329]">
                {st.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {st.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
