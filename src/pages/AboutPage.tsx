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
  CheckCircle2,
  Clock,
  Layers,
  Target
} from 'lucide-react';
import { WhyChooseUs } from '../components/home/WhyChooseUs';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
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

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          UPMARK partners with ambitious businesses worldwide to develop powerful websites, improve visibility across AI-powered search and create distinctive brand identities.
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
                Headquartered in India. <br />
                Partnering With Businesses Worldwide.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                UPMARK is an independent digital and creative studio based in India, built specifically to serve businesses, entrepreneurs, startups, and organisations across international markets.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                We believe that modern digital craftsmanship should have no geographic boundaries. By combining strategic clarity, technical rigor, and thoughtful design from our central base in India, we deliver high-caliber digital assets to clients across the United States, United Kingdom, Canada, Australia, the United Arab Emirates, India, and beyond.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Clock className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Fluid International Collaboration:</strong>
                    <span className="text-slate-400 text-xs">
                      We operate with organized communication windows overlapping key international time zones, ensuring seamless remote consultations, milestone updates, and prompt turnaround.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Direct Asset Ownership:</strong>
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
                Our Three Core Pillars
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3.5 bg-navy-950/80 rounded-xl border border-navy-800 flex items-start gap-3">
                  <Code2 className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">01 &bull; Web Development</strong>
                    <span className="text-slate-400">Websites designed to turn your digital presence into a business asset.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-navy-950/80 rounded-xl border border-navy-800 flex items-start gap-3">
                  <Bot className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">02 &bull; AEO Optimisation</strong>
                    <span className="text-slate-400">Making your business discoverable and well-referenced across AI-powered search.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-navy-950/80 rounded-xl border border-navy-800 flex items-start gap-3">
                  <Palette className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">03 &bull; Creative Agency</strong>
                    <span className="text-slate-400">Distinctive visual identities and compelling creative assets that build equity.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose UPMARK Differentiators */}
      <WhyChooseUs />

      {/* Global Callout CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-heading text-3xl font-extrabold text-navy-900">
          Ready to build your next digital asset?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Contact our agency team to discuss your project requirements, schedule a remote consultation, or request a custom quotation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary py-3.5 px-7 text-sm font-semibold">
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/services" className="btn-secondary py-3.5 px-6 text-sm font-semibold">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
