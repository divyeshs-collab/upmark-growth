import React from 'react';
import { PricingSection } from '../components/home/PricingSection';
import { FaqSection } from '../components/home/FaqSection';
import { ProjectEnquiryForm } from '../components/enquiry/ProjectEnquiryForm';
import { Sparkles, Globe, ShieldCheck } from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-electric-500" />
          <span>Tailored Scopes &bull; International Projects</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">
          Every Project Has <br className="hidden sm:inline" />
          <span className="text-electric-600">Different Requirements.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Whether you need a new website, stronger AI search visibility or a complete creative direction, we develop a scope around your business objectives.
        </p>
      </div>

      {/* Main Pricing Framework Component */}
      <PricingSection />

      {/* Embedded Project Quote Request */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2">
            Request a Project Quote
          </h2>
          <p className="text-sm text-slate-600">
            Tell us about your requirements and we will prepare a tailored proposal.
          </p>
        </div>
        <ProjectEnquiryForm />
      </div>

      {/* Pricing FAQs */}
      <FaqSection />
    </div>
  );
};
