import React from 'react';
import { Hero } from '../components/home/Hero';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessSection } from '../components/home/ProcessSection';
import { WorkPreview } from '../components/home/WorkPreview';
import { AboutSnippet } from '../components/home/AboutSnippet';
import { PricingSection } from '../components/home/PricingSection';
import { ProjectEnquiryForm } from '../components/enquiry/ProjectEnquiryForm';
import { FaqSection } from '../components/home/FaqSection';
import { FinalCta } from '../components/home/FinalCta';
import { Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* SECTION B — HERO */}
      <Hero />

      {/* SECTION C — SERVICES OVERVIEW (3 Disciplines) */}
      <ServicesOverview />

      {/* SECTION D — WHY UPMARK (Thoughtful Strategy. Quality Execution.) */}
      <WhyChooseUs />

      {/* SECTION E — OUR PROCESS (5-Step Lifecycle From Idea to Execution) */}
      <ProcessSection />

      {/* SECTION F — OUR WORK (Ideas Into Experiences - Founder-led projects) */}
      <WorkPreview />

      {/* SECTION G — ABOUT UPMARK (Built Around Better Digital Experiences) */}
      <AboutSnippet />

      {/* SECTION H — CUSTOM PROJECT PRICING (Every Project Has Different Requirements) */}
      <PricingSection />

      {/* SECTION I — PROJECT ENQUIRY (Have a Project in Mind?) */}
      <section id="enquiry" className="py-20 lg:py-28 bg-brandBg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-electric-500" />
              <span>Direct Collaboration &bull; International Enquiries</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
              Have a Project in Mind?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us about your business, your requirements and what you want to achieve. We&apos;ll review your enquiry and get back to you.
            </p>
          </div>

          {/* International Project Enquiry Form */}
          <ProjectEnquiryForm />
        </div>
      </section>

      {/* SECTION J — FAQ (10 Specific Questions) */}
      <FaqSection />

      {/* SECTION K — FINAL CTA (Let's Build Something Meaningful) */}
      <FinalCta />
    </div>
  );
};
