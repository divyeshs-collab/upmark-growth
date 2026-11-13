import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { servicesData } from '../data/servicesData';
import { ServiceVisualArtifact } from '../components/services/ServiceVisualArtifact';
import { ProcessSection } from '../components/home/ProcessSection';
import { FinalCta } from '../components/home/FinalCta';
import { SectionEyebrow } from '../components/common/BrandMotifs';
import { IconArrowRight, IconCheck } from '../components/common/Icons';

export const ServicesPage: React.FC = () => {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'UPMARK Digital Growth & Technology Services',
    itemListElement: servicesData.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
        url: `https://www.upmarkgrowth.com/services/${s.slug}`,
      },
    })),
  };

  return (
    <div>
      <SEO
        title="Services: Website Development, E-Commerce, Web Apps, SEO, AEO & GEO | UPMARK"
        description="Explore UPMARK's seven core services: Website Development, E-commerce Development, Custom Web Applications & Business Dashboards, SEO, AEO, GEO, and Website Maintenance."
        canonicalPath="/services"
        structuredData={servicesSchema}
      />

      {/* Minimalist Page Header */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <SectionEyebrow label="Services (01 to 07)" variant="light" />
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.15]">
              Digital Development &amp; Search Visibility
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Select a service below to review the business problem it solves, included deliverables, and intended customer profile.
            </p>
          </div>

          {/* Quick Jump Index */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#${s.slug}`}
                className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 hover:border-[#0D5BEF] inline-flex items-center gap-2 text-xs sm:text-sm"
              >
                <span className="font-mono text-xs font-bold text-[#0D5BEF]">{s.number}</span>
                <span className="font-medium text-[#051329]">{s.shortTitle || s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Service Sections */}
      <div className="divide-y divide-slate-200">
        {servicesData.map((service, index) => {
          const isAlternatingBg = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.slug}
              className={`py-16 lg:py-20 scroll-mt-20 ${
                isAlternatingBg ? 'bg-[#F8FAFC]' : 'bg-white'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column (Span 5) */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="space-y-2.5 border-b border-slate-200 pb-4">
                      <SectionEyebrow
                        label={`Service ${service.number}: ${service.category}`}
                        variant="light"
                      />
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.15]">
                        {service.title}
                      </h2>
                      <p className="text-base text-slate-600 pt-1 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {service.ethicalNote && (
                      <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700">
                        {service.ethicalNote}
                      </div>
                    )}

                    {/* Business Problem Solved */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
                      <div className="font-mono text-xs uppercase tracking-wider text-[#0D5BEF] font-semibold">
                        Business Problem Solved
                      </div>
                      <h3 className="font-heading text-base font-bold text-[#051329]">
                        {service.businessProblem.headline}
                      </h3>
                      <ul className="space-y-2">
                        {service.businessProblem.painPoints.map((pt, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0D5BEF] mt-2 shrink-0"></span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service Specification Link */}
                    <div className="pt-1">
                      <Link
                        to={`/services/${service.slug}`}
                        className="btn-secondary py-2.5 px-5 text-sm"
                      >
                        <span>View Full Specification</span>
                        <IconArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual + Deliverables + Intended Customers (Span 7) */}
                  <div className="lg:col-span-7 space-y-5">
                    <ServiceVisualArtifact visualType={service.visualType} />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                      <div className="md:col-span-7 rounded-xl border border-slate-200 bg-white p-6 space-y-3.5">
                        <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                          Specific Deliverables
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="text-sm text-[#051329] flex items-start gap-2">
                              <IconCheck className="w-4 h-4 text-[#0D5BEF] mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-5 rounded-xl border border-slate-200 bg-white p-6 space-y-3.5">
                        <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                          Intended Customer Type
                        </h3>
                        <ul className="space-y-2.5">
                          {service.intendedCustomers.map((cust, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              &bull; {cust}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <ProcessSection />
      <FinalCta />
    </div>
  );
};
