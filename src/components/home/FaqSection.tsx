import React, { useState } from 'react';
import { faqData } from '../../data/faqData';
import { SectionEyebrow } from '../common/BrandMotifs';
import { IconPlus, IconMinus } from '../common/Icons';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <SectionEyebrow label="FAQ" variant="light" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.15]">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Clear answers regarding our services, technical approach, international collaboration, and search visibility work.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
            {faqData.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-start justify-between gap-6 focus:outline-none"
                  >
                    <span className="font-heading font-semibold text-base sm:text-lg text-[#051329]">
                      {faq.question}
                    </span>
                    <span className="w-6 h-6 rounded flex items-center justify-center text-[#0D5BEF] shrink-0 mt-0.5">
                      {isOpen ? <IconMinus className="w-4 h-4" /> : <IconPlus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
