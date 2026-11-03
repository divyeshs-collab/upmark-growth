import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ProcessSection } from '../components/home/ProcessSection';
import { 
  Code2, 
  Bot, 
  Palette, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Bot,
  Palette,
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-electric-500" />
          <span>Three Primary Service Divisions</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">
          Three Disciplines. <br className="hidden sm:inline" />
          <span className="text-electric-600">One Digital Partner.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Focused digital and creative services to help businesses build, improve and communicate their online presence across international markets.
        </p>

        {/* Global Positioning Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-navy-900 shadow-xs">
            <Globe className="w-3.5 h-3.5 text-electric-600" />
            Working With Ambitious Businesses Worldwide
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-navy-900 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Custom Project Scopes &bull; Zero Fluff
          </span>
        </div>
      </div>

      {/* 3 Detailed Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {servicesData.map((service, index) => {
          const Icon = iconMap[service.iconName] || Code2;
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.slug}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-7 sm:p-12 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left/Main Column (Span 7) */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        DISCIPLINE 0{index + 1}
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-electric-700 font-semibold">
                    {service.positioning}
                  </p>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Initial Specialisation Note for AEO */}
                  {service.initialSpecialisation && (
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1">
                      <strong className="text-navy-900 block font-heading">Market Specialisation:</strong>
                      <p>
                        {service.initialSpecialisation}
                      </p>
                    </div>
                  )}

                  {/* Key Benefits */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Why It Matters for Your Business:
                    </h3>
                    <ul className="space-y-2">
                      {service.keyBenefits.map((b, bIdx) => (
                        <li key={bIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="btn-primary py-3 px-6 text-xs font-bold"
                    >
                      <span>View Full {service.title} Specification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="text-xs font-bold text-slate-600 hover:text-navy-900 underline underline-offset-4"
                    >
                      Enquire About {service.title}
                    </Link>
                  </div>
                </div>

                {/* Right Deliverables Column (Span 5) */}
                <div className={`lg:col-span-5 bg-brandBg rounded-2xl p-7 sm:p-8 border border-slate-200/90 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Complete Scope of Deliverables:
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Technology &amp; Standards:
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {service.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5-Step Process Section */}
      <ProcessSection />

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 text-center space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Ready to discuss your project?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Whether you need a new web platform, AI search optimization, or a complete brand identity, we develop a custom scope around your objectives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link to="/contact" className="btn-primary py-3.5 px-7 text-sm font-semibold">
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/work" className="btn-secondary py-3.5 px-6 text-sm font-semibold">
              <span>Explore Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
