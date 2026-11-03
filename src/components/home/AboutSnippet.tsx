import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, ShieldCheck, Sparkles, Layers, Target } from 'lucide-react';

export const AboutSnippet: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-semibold text-lightblue-300">
              <Globe className="w-3.5 h-3.5 text-electric-400" />
              <span>Global Digital &amp; Creative Studio</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built Around Better <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-lightblue-300 to-white">
                Digital Experiences.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              UPMARK is a global digital and creative agency based in India, partnering with businesses worldwide to develop websites, strengthen AI search visibility and create distinctive brands.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
              We operate without geographical boundaries, collaborating with clients across the United States, United Kingdom, Canada, Australia, the United Arab Emirates, India and other international markets. Our approach combines strategic clarity, clean engineering, and purposeful design.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/about"
                className="btn-primary py-3.5 px-6 text-sm font-semibold bg-electric-500 hover:bg-electric-600"
              >
                <span>Read About Our Approach</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary py-3.5 px-6 text-sm font-semibold bg-navy-900 text-white border-navy-700 hover:bg-navy-800"
              >
                <span>Start a Project</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Values & Global Working Model (Span 5) */}
          <div className="lg:col-span-5 bg-navy-900/80 rounded-2xl p-7 border border-navy-800 space-y-4">
            <h3 className="font-heading font-bold text-base text-white mb-2">
              Our Core Working Model
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3.5 bg-navy-950/80 rounded-xl border border-navy-800 space-y-1">
                <span className="text-lightblue-300 font-bold block">1. Global Collaboration</span>
                <p className="text-slate-400 leading-relaxed">
                  Remote-first workflows, transparent documentation, and overlapping communication windows across international time zones.
                </p>
              </div>

              <div className="p-3.5 bg-navy-950/80 rounded-xl border border-navy-800 space-y-1">
                <span className="text-lightblue-300 font-bold block">2. Three Focused Disciplines</span>
                <p className="text-slate-400 leading-relaxed">
                  Web Development, AEO Optimisation, and Creative Agency services designed to reinforce one another effectively.
                </p>
              </div>

              <div className="p-3.5 bg-navy-950/80 rounded-xl border border-navy-800 space-y-1">
                <span className="text-lightblue-300 font-bold block">3. Authentic Engagement</span>
                <p className="text-slate-400 leading-relaxed">
                  Zero fabricated metrics or exaggerated guarantees. We provide tailored scopes and realistic, professional execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
