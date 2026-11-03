import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, CheckCircle2, ShieldCheck } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-electric-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-lightblue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-navy-700 text-xs font-semibold text-lightblue-300">
          <Globe className="w-3.5 h-3.5 text-electric-400" />
          <span>Building Digital Experiences and Brands Without Boundaries</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Let&apos;s Build <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-lightblue-300 to-white">
            Something Meaningful.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Have an idea, a project or a business that needs a stronger digital presence? Let&apos;s talk.
        </p>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="btn-primary w-full sm:w-auto text-base py-4 px-8 shadow-glow bg-electric-500 hover:bg-electric-600 font-semibold"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-navy-900 hover:bg-navy-800 border border-navy-700 transition-all text-base shadow-soft"
          >
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Global Transparency Strip */}
        <div className="pt-6 border-t border-navy-900 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Responsive Global Collaboration</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-electric-400" />
            <span>Strict Project Confidentiality</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Transparent Milestone-Based Scopes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
