import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Code2, 
  Bot, 
  Palette, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin,
  CheckCircle2,
  Workflow,
  Target
} from 'lucide-react';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { SEO } from '../components/common/SEO';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      <SEO
        title="About UPMARK | Global Digital & Creative Agency"
        description="Discover UPMARK, a Mumbai-based digital and creative agency working with businesses worldwide."
      />
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-electric-500" />
          <span>Global Digital &amp; Creative Agency</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">
          Building Digital Experiences and <br className="hidden sm:inline" />
          <span className="text-electric-600">Brands Without Boundaries.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
          UPMARK is a digital and creative agency based in Mumbai, India, working with ambitious businesses worldwide.
        </p>

        <p className="text-base text-slate-500 max-w-2xl mx-auto mt-3">
          We combine thoughtful strategy, modern engineering, and purposeful design to help international businesses build digital experiences, strengthen AI search visibility, and create brands that stand out.
        </p>
      </div>

      {/* Global Agency Identity & Model */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-14 border border-navy-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-electric-500/20 text-lightblue-300 border border-electric-400/30">
                Agency Background &amp; Operations
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white">
                Based in Mumbai, India. <br />
                Collaborating With Businesses Worldwide.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                UPMARK is an independent digital and creative agency based in Mumbai, India, serving businesses internationally across the United States, United Kingdom, Canada, Australia, the United Arab Emirates, and India.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                We believe that first-class digital craftsmanship has no physical boundaries. From our central operational hub in Mumbai, we manage end-to-end web engineering, AEO search architecture, and visual creative systems through structured collaboration, transparent milestones, and fluid communication.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Globe className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Global Collaboration:</strong>
                    <span className="text-slate-400 text-xs">
                      We collaborate seamlessly with international teams through modern asynchronous documentation and overlapping video consultation windows.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Workflow className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Practical Execution &amp; Business-Oriented Solutions:</strong>
                    <span className="text-slate-400 text-xs">
                      Every deliverable is grounded in business objectives, user comprehension, and measurable conversion efficiency rather than agency fluff.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-lightblue-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Complete Asset Ownership:</strong>
                    <span className="text-slate-400 text-xs">
                      All web platforms, source codes, design tokens, vector brand guidelines, and structured schemas created for you belong 100% to your business upon completion.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: 3 Disciplines Summary (Span 5) */}
            <div className="lg:col-span-5 bg-navy-900/90 rounded-2xl p-6 sm:p-8 border border-navy-800 space-y-4">
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                Our Three Core Capabilities
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3.5 bg-navy-950/80 rounded-xl border border-navy-800 flex items-start gap-3">
                  <Code2 className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">01 &bull; Web Development</strong>
                    <span className="text-slate-400">Websites designed to communicate value, build trust and help convert visitors into customers.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-navy-950/80 rounded-xl border border-navy-800 flex items-start gap-3">
                  <Bot className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">02 &bull; AEO Optimisation</strong>
                    <span className="text-slate-400">Answer Engine Optimisation helping businesses improve discoverability across AI-powered search.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-navy-950/80 rounded-xl border border-navy-800 flex items-start gap-3">
                  <Palette className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">03 &bull; Creative Agency</strong>
                    <span className="text-slate-400">Strategic brand identity systems, logo design and visual assets that create lasting equity.</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-navy-950/60 rounded-xl border border-navy-800 text-[11px] text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-electric-400 shrink-0" />
                <span>Headquarters: Mumbai, India (Serving international clients)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose UPMARK Differentiators */}
      <WhyChooseUs />

      {/* Callout CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-heading text-3xl font-extrabold text-navy-900">
          Have a project in mind?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Let&apos;s build something meaningful for your business. Contact our team in Mumbai to schedule a remote consultation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary py-3.5 px-7 text-sm font-semibold">
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/services" className="btn-secondary py-3.5 px-6 text-sm font-semibold">
            <span>Explore Our Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
