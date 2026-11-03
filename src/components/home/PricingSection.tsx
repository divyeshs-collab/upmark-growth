import React from 'react';
import { Link } from 'react-router-dom';
import { customPricingData } from '../../data/pricingData';
import { 
  FileCheck, 
  ShieldCheck, 
  Layers, 
  Globe, 
  ArrowRight, 
  Sparkles,
  Code2,
  Bot,
  Palette,
  CheckCircle2
} from 'lucide-react';

export const PricingSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    FileCheck,
    ShieldCheck,
    Layers,
    Globe
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-electric-500" />
            <span>Tailored Project Engagements</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            {customPricingData.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {customPricingData.description}
          </p>
        </div>

        {/* 3 Discipline Scope Breakdown Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {customPricingData.disciplines.map((item, idx) => {
            const isAeo = item.service === 'AEO Optimisation';
            return (
              <div
                key={idx}
                className="bg-brandBg rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-card-hover hover:border-electric-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-electric-600 bg-electric-50 px-2.5 py-1 rounded-md">
                      0{idx + 1} &bull; {item.service}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {item.timeline}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-1">
                    {item.service}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 mb-5">
                    Engagement Model: <strong className="text-navy-900">{item.model}</strong>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Typical Scope Considerations:
                    </div>
                    <ul className="space-y-2">
                      {item.typicalScope.map((scope, sIdx) => (
                        <li key={sIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {isAeo && (
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-500 mb-4">
                      * AEO engagements include initial technical audits and defined ongoing monthly visibility monitoring. No false ranking guarantees.
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <Link
                    to={`/contact?service=${encodeURIComponent(item.service)}`}
                    className="btn-secondary w-full text-xs font-bold py-3 justify-center"
                  >
                    <span>Request a Quote for {item.service}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {customPricingData.principles.map((p, idx) => {
            const Icon = iconMap[p.icon] || FileCheck;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft space-y-3">
                <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm text-navy-900">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pricing Notice & Main Request Quote CTA */}
        <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-bold text-base text-navy-900">
              International Pricing Policy
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl">
              {customPricingData.internationalNote} Quotes are provided in USD or another mutually agreed international currency (GBP, EUR, AED, AUD, INR).
            </p>
          </div>

          <Link
            to="/contact"
            className="btn-primary py-3.5 px-7 text-xs sm:text-sm font-bold whitespace-nowrap shadow-md shadow-electric-500/20"
          >
            <span>Request a Project Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
