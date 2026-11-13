import React from 'react';
import { SEO } from '../components/common/SEO';
import { ProjectEnquiryForm } from '../components/enquiry/ProjectEnquiryForm';
import { SectionEyebrow } from '../components/common/BrandMotifs';
import { IconArrowUpRight } from '../components/common/Icons';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Contact & Project Enquiry | Discuss Your Project | UPMARK"
        description="Contact UPMARK to discuss website development, e-commerce development, custom web applications, business dashboards, SEO, AEO, GEO, or website maintenance."
        canonicalPath="/contact"
      />

      {/* Minimalist Header */}
      <section className="py-14 lg:py-16 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <SectionEyebrow label="Contact & Project Enquiries" variant="light" />
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.15]">
              Discuss Your Project
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us about your business and what you need. We will review your requirements and get back to you with the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Enquiry Layout */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sidebar Details (Span 4) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 space-y-6">
                <div className="space-y-1.5">
                  <div className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    Direct Email
                  </div>
                  <a
                    href="mailto:hello@upmarkgrowth.com"
                    className="font-heading text-base sm:text-lg font-bold text-[#051329] hover:text-[#0D5BEF] inline-flex items-center gap-1.5"
                  >
                    <span>hello@upmarkgrowth.com</span>
                    <IconArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-sm text-slate-600">
                    For project briefs, specifications, and general enquiries.
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200 space-y-1.5">
                  <div className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    International Collaboration
                  </div>
                  <div className="font-heading text-base font-bold text-[#051329]">
                    US, UK, Canada &amp; Australia
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We collaborate with businesses remotely through structured written scopes, milestone updates, and scheduled video consultations.
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200 space-y-2.5">
                  <div className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    Next Steps
                  </div>
                  <ol className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#0D5BEF] mt-0.5">01</span>
                      <span>We review your project requirements and any existing website URL.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#0D5BEF] mt-0.5">02</span>
                      <span>We respond via email to clarify details or arrange a discovery call.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#0D5BEF] mt-0.5">03</span>
                      <span>We provide a written scope of deliverables, timeline, and pricing.</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Right Form Column (Span 8) */}
            <div className="lg:col-span-8">
              <ProjectEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
