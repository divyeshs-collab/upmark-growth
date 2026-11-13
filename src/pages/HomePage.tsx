import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { AboutSnippet } from '../components/home/AboutSnippet';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WorkPreview } from '../components/home/WorkPreview';
import { ProcessSection } from '../components/home/ProcessSection';
import { ProjectEnquiryForm } from '../components/enquiry/ProjectEnquiryForm';
import { FaqSection } from '../components/home/FaqSection';
import { SectionEyebrow } from '../components/common/BrandMotifs';
import { faqData } from '../data/faqData';

export const HomePage: React.FC = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'UPMARK',
    url: 'https://www.upmarkgrowth.com/',
    description:
      'UPMARK helps businesses build powerful digital experiences, improve search visibility and streamline operations through thoughtful design and technology.',
  };

  return (
    <div>
      <SEO
        title="UPMARK | Digital Growth & Technology Agency | Web Development, E-Commerce, Custom Web Apps & Search Visibility"
        description="UPMARK helps businesses build powerful digital experiences, improve search visibility (SEO, AEO, GEO) and streamline operations through custom websites, e-commerce, and business dashboards."
        canonicalPath="/"
        structuredData={[websiteSchema, faqSchema]}
      />

      {/* Section 01: Hero */}
      <Hero />

      {/* Section 02: Introduction */}
      <AboutSnippet />

      {/* Section 03: Services Overview */}
      <ServicesOverview />

      {/* Section 04: Selected Work & Live Demos */}
      <WorkPreview />

      {/* Section 05: How We Work */}
      <ProcessSection />

      {/* Section 06: Project Enquiry & Scope Builder */}
      <section
        id="project-funnel"
        className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-5">
              <SectionEyebrow label="Project Enquiry" variant="light" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.15]">
                Discuss Your Project
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Tell us about your business, the website or system you want to build, and your goals. We will review your requirements and prepare a structured scope.
              </p>

              <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-3 text-sm">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  What You Receive
                </div>
                <div className="space-y-2.5 text-[#051329]">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#0D5BEF]">01</span>
                    <span>Recommended technical architecture</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#0D5BEF]">02</span>
                    <span>Clear deliverable breakdown</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#0D5BEF]">03</span>
                    <span>Timeline &amp; milestone quotation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ProjectEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section 07: FAQ */}
      <FaqSection />
    </div>
  );
};
