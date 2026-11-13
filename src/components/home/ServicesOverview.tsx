import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { SectionEyebrow } from '../common/BrandMotifs';
import { IconArrowRight, IconCheck } from '../common/Icons';

export const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <SectionEyebrow label="Services (01 to 07)" variant="light" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.15]">
              Digital Development &amp; Search Visibility
            </h2>
          </div>

          <Link
            to="/services"
            className="btn-secondary py-2.5 px-5 text-sm self-start sm:self-auto"
          >
            <span>Full Service Specifications</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Clean Editorial List of All 7 Official Services */}
        <div className="divide-y divide-slate-200 border-b border-slate-200">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="py-8 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              {/* Number & Category (Span 2) */}
              <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start justify-between gap-2">
                <span className="font-mono text-sm font-bold text-[#0D5BEF]">
                  {service.number}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {service.category}
                </span>
              </div>

              {/* Service Title & Summary (Span 4) */}
              <div className="lg:col-span-4 space-y-2">
                <h3 className="font-heading text-xl font-bold text-[#051329]">
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-[#0D5BEF]"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.summary}
                </p>
                {service.ethicalNote && (
                  <p className="text-xs text-slate-500 pt-1">
                    We do not promise guaranteed citations or rankings in any AI platform.
                  </p>
                )}
              </div>

              {/* Key Deliverables (Span 4) */}
              <div className="lg:col-span-4">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {service.deliverables.slice(0, 6).map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <IconCheck className="w-3.5 h-3.5 text-[#0D5BEF] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link (Span 2) */}
              <div className="lg:col-span-2 flex lg:justify-end">
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#051329] hover:text-[#0D5BEF]"
                >
                  <span>View Details</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
