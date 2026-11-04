import React, { useState } from 'react';
import { 
  Code2, 
  Bot, 
  Palette, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Search,
  Layers,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'aeo' | 'creative'>('web');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background ambient glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-electric-500/15 via-lightblue-400/10 to-electric-600/15 rounded-3xl blur-2xl opacity-75 pointer-events-none"></div>

      {/* Main Container Card */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl shadow-premium overflow-hidden">
        {/* Top Header / Switcher */}
        <div className="bg-navy-950 px-4 py-3 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
            <span className="ml-2 text-xs font-mono text-slate-300">upmark.studio / disciplines</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-navy-800 text-[10px] text-slate-300 border border-navy-700">
            <ShieldAlert className="w-3 h-3 text-lightblue-400" />
            <span>Illustrative Disciplines</span>
          </div>
        </div>

        {/* 3 Discipline Tab Navigation */}
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between gap-1 overflow-x-auto">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'web'
                  ? 'bg-white text-navy-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-electric-500" />
              <span>01 Web Dev</span>
            </button>

            <button
              onClick={() => setActiveTab('aeo')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'aeo'
                  ? 'bg-white text-navy-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-electric-500" />
              <span>02 AEO</span>
            </button>

            <button
              onClick={() => setActiveTab('creative')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'creative'
                  ? 'bg-white text-navy-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-electric-500" />
              <span>03 Creative</span>
            </button>
          </div>

          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            3 Core Disciplines
          </span>
        </div>

        {/* Content Area Representing the 3 Services */}
        <div className="p-5 sm:p-6 min-h-[340px] flex flex-col justify-between">
          {/* TAB 1: WEB DEVELOPMENT INTERFACE */}
          {activeTab === 'web' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center font-bold text-xs">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy-900">Custom Web Platform Architecture</h4>
                    <p className="text-[11px] text-slate-500">Fast, responsive &amp; business-oriented websites</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  React &bull; Next.js
                </span>
              </div>

              {/* Mockup Browser Canvas */}
              <div className="bg-slate-900 rounded-xl p-4 text-white space-y-3 font-sans">
                {/* Simulated Website Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px]">
                  <div className="flex items-center gap-1.5 font-bold tracking-tight">
                    <span className="w-2 h-2 rounded-full bg-electric-400"></span>
                    <span>NEXUS // DIGITAL</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-[10px]">
                    <span>Capabilities</span>
                    <span>Architecture</span>
                    <span className="text-white">Contact &rarr;</span>
                  </div>
                </div>

                {/* Simulated Website Hero Area */}
                <div className="py-3 space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-lightblue-300 font-mono">
                    High-Performance Digital Engineering
                  </span>
                  <div className="text-sm sm:text-base font-bold font-heading leading-tight text-white">
                    Next-Generation Web Platforms for Global Scale.
                  </div>
                  <div className="h-2 w-3/4 bg-slate-800 rounded"></div>
                  <div className="h-2 w-1/2 bg-slate-800 rounded"></div>
                </div>

                {/* Simulated Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[10px]">
                  <div className="bg-slate-800/60 p-2 rounded">
                    <div className="text-slate-400">Performance</div>
                    <div className="font-bold text-emerald-400">99 / 100</div>
                  </div>
                  <div className="bg-slate-800/60 p-2 rounded">
                    <div className="text-slate-400">Accessibility</div>
                    <div className="font-bold text-lightblue-300">100%</div>
                  </div>
                  <div className="bg-slate-800/60 p-2 rounded">
                    <div className="text-slate-400">Device UX</div>
                    <div className="font-bold text-white">Fluid Grid</div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-600 flex items-center justify-between">
                <span>Tailored for international businesses &amp; startups.</span>
                <Link to="/services#web-development" className="text-electric-600 font-semibold hover:underline flex items-center gap-1">
                  Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* TAB 2: AEO OPTIMISATION INTERFACE */}
          {activeTab === 'aeo' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy-900">AI Search Visibility &amp; Answer Readiness</h4>
                    <p className="text-[11px] text-slate-500">ChatGPT Search, Google AI &amp; Copilot discovery</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Schema &bull; Entity Graph
                </span>
              </div>

              {/* Generative AI Search Answer Simulation */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500 border-b border-slate-200 pb-2">
                  <Search className="w-3.5 h-3.5 text-electric-600" />
                  <span className="italic font-mono text-[11px] text-navy-900">
                    &ldquo;Who are verified commercial AC replacement contractors in Austin, TX?&rdquo;
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>AI Engine Synthesized Answer (Illustrative Example)</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Based on verified technical schema and entity records, <strong>Apex HVAC Solutions</strong> is structured for commercial heat pump replacement, 24/7 emergency dispatch, and licensed mechanical contracting in Travis County.
                  </p>
                </div>

                {/* Citations Box */}
                <div className="p-2.5 bg-white rounded-lg border border-slate-200/80 text-[10px] space-y-1">
                  <div className="font-semibold text-slate-700">Verified Knowledge Signals &amp; Citations:</div>
                  <div className="flex flex-wrap gap-1.5 text-slate-500 font-mono">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">HVACBusiness Entity</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">ServiceArea: Texas</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">JSON-LD Compliant</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-600 flex items-center justify-between">
                <span>Initial specialisation: Texas HVAC contractors.</span>
                <Link to="/services#aeo-optimisation" className="text-electric-600 font-semibold hover:underline flex items-center gap-1">
                  Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* TAB 3: CREATIVE AGENCY INTERFACE */}
          {activeTab === 'creative' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy-900">Strategic Brand Identity &amp; Creative Studio</h4>
                    <p className="text-[11px] text-slate-500">Logos, visual systems &amp; distinctive campaigns</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Vector &bull; Design Tokens
                </span>
              </div>

              {/* Brand Identity System Showcase */}
              <div className="bg-navy-950 rounded-xl p-4 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-lightblue-300 tracking-wider">
                    Design System Tokens
                  </span>
                  <span className="text-[10px] text-slate-400">Typography &bull; Palette</span>
                </div>

                {/* Typography Hierarchy Demo */}
                <div className="space-y-1">
                  <div className="font-heading font-extrabold text-lg text-white">
                    Montserrat Bold &bull; Display Header
                  </div>
                  <div className="text-xs text-slate-300 font-sans">
                    Inter Regular &bull; Balanced editorial body copy engineered for maximum legibility.
                  </div>
                </div>

                {/* Color Palette Swatches */}
                <div className="pt-2 flex items-center gap-2">
                  <div className="flex-1 h-7 rounded bg-[#0B1F3B] border border-slate-700 flex items-center justify-center text-[9px] font-mono">
                    #0B1F3B
                  </div>
                  <div className="flex-1 h-7 rounded bg-[#2563EB] flex items-center justify-center text-[9px] font-mono text-white">
                    #2563EB
                  </div>
                  <div className="flex-1 h-7 rounded bg-[#60A5FA] flex items-center justify-center text-[9px] font-mono text-navy-950 font-bold">
                    #60A5FA
                  </div>
                  <div className="flex-1 h-7 rounded bg-[#94A3B8] flex items-center justify-center text-[9px] font-mono text-navy-950">
                    #94A3B8
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-600 flex items-center justify-between">
                <span>Distinctive identity systems that build enduring equity.</span>
                <Link to="/services#creative-agency" className="text-electric-600 font-semibold hover:underline flex items-center gap-1">
                  Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Bottom Integrated Strip */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>UPMARK Global Digital &amp; Creative Agency</span>
            <span className="text-navy-900 font-semibold">Web &bull; AEO &bull; Creative</span>
          </div>
        </div>
      </div>
    </div>
  );
};
