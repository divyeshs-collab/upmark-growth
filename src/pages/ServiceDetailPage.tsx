import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { servicesData, legacyServiceSlugMap } from '../data/servicesData';
import { ServiceVisualArtifact } from '../components/services/ServiceVisualArtifact';
import { IconArrowLeft, IconArrowUpRight, IconArrowRight } from '../components/common/Icons';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug && legacyServiceSlugMap[slug]) {
    return <Navigate to={`/services/${legacyServiceSlugMap[slug]}`} replace />;
  }

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'UPMARK',
      url: 'https://www.upmarkgrowth.com',
    },
    url: `https://www.upmarkgrowth.com/services/${service.slug}`,
  };

  const relatedServices = servicesData.filter((s) => s.id !== service.id).slice(0, 2);

  return (
    <div className="bg-[#F8FAFC]">
      <SEO
        title={`${service.title} | Services | UPMARK`}
        description={`${service.summary} ${service.description}`}
        canonicalPath={`/services/${service.slug}`}
        structuredData={serviceSchema}
      />

      {/* Header */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-slate-500 hover:text-[#051329]"
            >
              <IconArrowLeft className="w-4 h-4" />
              <span>All Services</span>
            </Link>
            <span className="font-mono text-xs font-bold text-[#0D5BEF]">
              SERVICE {service.number} / {service.category}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#051329] tracking-[-0.03em] leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-lg font-medium text-[#051329] leading-relaxed">
                {service.summary}
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                {service.description}
              </p>

              {service.ethicalNote && (
                <div className="p-4 rounded-lg border border-slate-200 bg-[#F8FAFC] text-sm text-slate-700 leading-relaxed">
                  {service.ethicalNote}
                </div>
              )}

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.shortTitle || service.title)}`}
                  className="btn-primary py-3.5 px-7 text-sm"
                >
                  <span>Discuss Your Project</span>
                  <IconArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/work" className="btn-secondary py-3.5 px-6 text-sm">
                  <span>View Related Work</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ServiceVisualArtifact visualType={service.visualType} />
            </div>
          </div>
        </div>
      </section>

      {/* Specification Grid */}
      <section className="py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-200">
            <div className="lg:col-span-4 space-y-2">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#0D5BEF] font-semibold">
                01. Business Context
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#051329]">
                The Business Problem We Solve
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <h3 className="font-heading text-xl font-bold text-[#051329]">
                {service.businessProblem.headline}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {service.businessProblem.description}
              </p>

              <div className="space-y-3 pt-2">
                {service.businessProblem.painPoints.map((pt, idx) => (
                  <div key={idx} className="rounded-xl bg-white border border-slate-200 p-5 flex items-start gap-4">
                    <div className="font-mono text-xs font-bold text-[#0D5BEF] mt-0.5 shrink-0">
                      0{idx + 1}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 rounded-xl bg-white border border-slate-200 p-8 space-y-6">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#0D5BEF] font-semibold">
                02. Scope of Work
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#051329]">
                Specific Deliverables Included
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {service.deliverables.map((deliv, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#F8FAFC] border border-slate-200 text-sm font-medium text-[#051329] flex items-start gap-2.5"
                  >
                    <span className="font-mono text-xs font-bold text-[#0D5BEF] mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl bg-white border border-slate-200 p-8 space-y-5">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#0D5BEF] font-semibold">
                  03. Intended Customers
                </div>
                <h2 className="font-heading text-xl font-bold text-[#051329]">
                  Who This Service Is For
                </h2>
                <ul className="space-y-3">
                  {service.intendedCustomers.map((cust, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D5BEF] mt-2 shrink-0"></span>
                      <span>{cust}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-white border border-slate-200 p-8 space-y-4">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#0D5BEF] font-semibold">
                  04. Technical Capabilities
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technicalCapabilities.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-slate-200 text-[#051329]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services (2-Column Grid) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#051329]">
              Explore Related Services
            </h2>
            <Link
              to="/services"
              className="font-mono text-xs uppercase tracking-[0.14em] text-[#051329] hover:text-[#0D5BEF] inline-flex items-center gap-1"
            >
              <span>View All 07 Services</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.slug}`}
                className="rounded-xl border border-slate-200 p-6 bg-[#F8FAFC] hover:border-[#0D5BEF] flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#0D5BEF]">
                    {rel.number}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#051329] group-hover:text-[#0D5BEF]">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{rel.summary}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#0D5BEF] font-semibold inline-flex items-center gap-1">
                  <span>View Service</span>
                  <IconArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
