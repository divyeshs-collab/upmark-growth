import React from 'react';
import { Link } from 'react-router-dom';
import { HeroVisual } from './HeroVisual';
import { ArrowRight, Globe, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-brandBg/60 to-brandBg">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#0B1F3B 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition (Span 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-50 border border-electric-200/60 text-xs font-semibold text-electric-700 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-electric-500" />
              <span>Global Digital &amp; Creative Agency &bull; Web, AEO &amp; Brand</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.1]">
              Build Better. <br className="hidden sm:inline" />
              Get Discovered. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-600 via-electric-500 to-lightblue-400">
                Stand Out.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl leading-relaxed font-normal">
              Web development, AI search optimisation and creative solutions designed to help businesses build a stronger digital presence.
            </p>

            <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
              UPMARK partners with ambitious businesses worldwide to develop powerful websites, improve visibility across AI-powered search and create distinctive brand identities.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/contact"
                className="btn-primary text-base py-4 px-7 shadow-lg shadow-electric-500/25 group font-semibold"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="btn-secondary text-base py-4 px-6 font-semibold"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Global Capabilities Strip */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-electric-500 shrink-0" />
                <span>Working With Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>3 Focused Disciplines</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-navy-900 shrink-0" />
                <span>Quality Technical Execution</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Representing 3 Disciplines (Span 5) */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
