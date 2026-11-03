import React, { useState } from 'react';
import { faqData } from '../../data/faqData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // first item open by default

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-brandBg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-electric-500" />
            <span>Clear Answers &bull; Transparent Policies</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Everything you need to know about working with UPMARK across our web, AI search, and creative capabilities.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-navy-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-electric-500 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions box */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-sm text-navy-900">
              Have a specific question about your project?
            </h4>
            <p className="text-xs text-slate-500">
              Our team responds to all international project enquiries within 1 business day.
            </p>
          </div>

          <Link
            to="/contact"
            className="btn-secondary text-xs py-2.5 px-5 font-semibold shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Contact Our Team</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
