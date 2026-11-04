import React from 'react';
import { Hero } from '../components/home/Hero';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessSection } from '../components/home/ProcessSection';
import { WorkPreview } from '../components/home/WorkPreview';
import { AboutSnippet } from '../components/home/AboutSnippet';
import { ProjectEnquiryForm } from '../components/enquiry/ProjectEnquiryForm';
import { FaqSection } from '../components/home/FaqSection';
import { FinalCta } from '../components/home/FinalCta';
import { Sparkles } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <SEO
        title="UPMARK | Global Digital & Creative Agency"
        description="UPMARK builds business websites, improves AI search visibility through AEO and creates distinctive brand experiences for businesses worldwide."
      />
      {/* SECTION 2 — HERO */}
      <Hero />

      {/* SECTION 3 — SERVICES OVERVIEW (Exactly 3 Disciplines) */}
      <ServicesOverview />

      {/* SECTION 4 — WHY UPMARK (Differentiators) */}
      <WhyChooseUs />

      {/* SECTION 5 — OUR PROCESS (5 Steps: Discover, Strategise, Create, Implement, Refine) */}
      <ProcessSection />

      {/* SECTION 6 — FEATURED WORK (URBANYX and FETCHR founder-led projects) */}
      <WorkPreview />

      {/* SECTION 7 — ABOUT UPMARK (Mumbai, India & International Collaboration) */}
      <AboutSnippet />

      {/* SECTION 8 — PROJECT CTA & ENQUIRY */}
      <section id="enquiry" className="py-20 lg:py-28 bg-brandBg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700">
              <Sparkles className="w-3.5 h-3.5 text-electric-500" />
              <span>Direct Collaboration &bull; International Enquiries</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Have a project in mind?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Let&apos;s build something meaningful for your business. Tell us about your goals and requirements.
            </p>
          </div>

          {/* Genuine International Project Enquiry Form */}
          <ProjectEnquiryForm />
        </div>
      </section>

      {/* SECTION 9 — FAQ (7 Specific Questions) */}
      <FaqSection />

      {/* SECTION 10 — FINAL CTA BANNER */}
      <FinalCta />
    </div>
  );
};
