import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { servicesData } from '../data/servicesData';
import { FinalCta } from '../components/home/FinalCta';
import { SectionEyebrow } from '../components/common/BrandMotifs';
import { IconArrowRight, IconCheck } from '../components/common/Icons';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="About UPMARK | Digital Growth & Technology Agency"
        description="UPMARK is a digital growth and technology agency focused on helping businesses create better digital experiences and build systems that support their growth."
        canonicalPath="/about"
      />

      {/* Minimalist Hero Header */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <SectionEyebrow label="About UPMARK" variant="light" />
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.15]">
              Digital Development &amp; Search Visibility Under One Roof
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              UPMARK is a digital growth and technology agency focused on helping businesses create better digital experiences and build systems that support their growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <SectionEyebrow label="Our Approach" variant="light" />
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#051329]">
                Thoughtful Design, Clean Engineering, and Practical Business Systems
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                We work with businesses that want a stronger online presence, better search visibility, and practical digital solutions tailored to their operations.
              </p>
              <p>
                Rather than separating website development from search performance and internal operations, we approach them as connected parts of a single commercial system, ensuring your website is fast, structured for organic and AI search discovery, and aligned with how your team manages leads and orders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Clarity Over Clutter',
                body: 'Minimalist, editorial layouts that communicate what your business does clearly and guide visitors toward action.',
              },
              {
                num: '02',
                title: 'Tailored Business Tools',
                body: 'Custom web applications, CRM portals, and dashboards engineered around your actual operational workflows.',
              },
              {
                num: '03',
                title: 'Search & AI Readiness',
                body: 'Semantic HTML, Schema.org markup, and entity structure built for SEO, AEO, and GEO visibility.',
              },
              {
                num: '04',
                title: 'Transparent Delivery',
                body: 'Written project scopes, clear milestones, and 100% client ownership of custom code upon completion.',
              },
            ].map((belief) => (
              <div key={belief.num} className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 space-y-2.5">
                <div className="font-mono text-sm font-bold text-[#0D5BEF]">
                  {belief.num}
                </div>
                <h3 className="font-heading text-lg font-bold text-[#051329]">
                  {belief.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {belief.body}
                </p>
              </div>
            ))}
          </div>

          {/* Quality Standards */}
          <div className="rounded-2xl bg-[#051329] text-white p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <SectionEyebrow label="Quality Standards" variant="dark" />
              <h3 className="font-heading text-2xl font-bold text-white">
                Engineering &amp; Delivery Benchmarks
              </h3>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Responsive across desktop, tablet & mobile',
                'Semantic HTML5 & accessible contrast',
                'Structured Schema.org JSON-LD markup',
                'Full codebase handover & documentation',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-4 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-200">
                  <IconCheck className="w-4 h-4 text-[#3898FF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 Official Services Directory */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <SectionEyebrow label="Service Catalogue (01 to 07)" variant="light" />
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#051329]">
                Seven Core Capabilities
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#051329] hover:text-[#0D5BEF]"
            >
              <span>View Full Services Page</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-xl overflow-hidden bg-white border border-slate-200 divide-y divide-slate-200">
            {servicesData.map((s) => (
              <div key={s.id} className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#F8FAFC]">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-[#0D5BEF] w-6 shrink-0">
                    {s.number}
                  </span>
                  <div>
                    <Link
                      to={`/services/${s.slug}`}
                      className="font-heading font-bold text-base text-[#051329] hover:text-[#0D5BEF]"
                    >
                      {s.title}
                    </Link>
                    <p className="text-sm text-slate-500 hidden md:block">{s.summary}</p>
                  </div>
                </div>
                <div className="flex items-center shrink-0">
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-xs font-semibold text-slate-600 hover:text-[#0D5BEF] inline-flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
};
