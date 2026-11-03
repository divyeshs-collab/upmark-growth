import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WorkPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-electric-500" />
          <span>Demonstrated Creative &amp; Technical Capability</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">
          Ideas Into <span className="text-electric-600">Experiences.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Real capability is demonstrated by building products from zero to launch. Explore our featured founder-led projects showcasing web development, digital brand systems, and user experience design.
        </p>
      </div>

      {/* Projects Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden hover:shadow-card-hover transition-all duration-300"
          >
            {/* Visual Hero Banner */}
            <div
              className={`p-8 sm:p-12 text-white bg-gradient-to-br ${
                project.id === 'urbanyx'
                  ? 'from-navy-950 via-slate-900 to-navy-900'
                  : 'from-navy-950 via-electric-950 to-navy-900'
              } relative overflow-hidden`}
            >
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              ></div>

              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-lightblue-200 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-electric-400"></span>
                    Founder-led projects
                  </span>

                  <span className="text-xs font-mono text-slate-300">
                    {project.category}
                  </span>
                </div>

                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
                  {project.title}
                </h2>

                <p className="text-base sm:text-lg text-slate-300 font-medium">
                  {project.subtitle} &bull; {project.tagline}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 sm:p-12 space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Overview, Challenge, Strategy (Span 7) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Project Overview
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                      <h4 className="font-heading font-bold text-sm text-navy-900 mb-2">
                        The Challenge
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                      <h4 className="font-heading font-bold text-sm text-navy-900 mb-2">
                        Strategic Solution
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {project.strategy}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Creative &amp; Technical Execution
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {project.creativeExecution}
                    </p>
                  </div>
                </div>

                {/* Right: Deliverables & Capabilities (Span 5) */}
                <div className="lg:col-span-5 bg-brandBg rounded-2xl p-7 border border-slate-200 space-y-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Disciplines &amp; Capabilities Demonstrated:
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.servicesDemonstrated.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-navy-900 shadow-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Project Deliverables:
                    </h3>
                    <ul className="space-y-2">
                      {project.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <Link
                      to={`/work/${project.slug}`}
                      className="btn-primary w-full py-3.5 text-xs font-bold justify-center"
                    >
                      <span>Explore Detailed Case Study &amp; Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Gallery Previews */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Visual Architecture Highlights:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.gallery.map((item, gIdx) => (
                    <div
                      key={gIdx}
                      className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-electric-300 transition-colors"
                    >
                      <span className="text-[10px] font-mono font-bold text-electric-600 uppercase">
                        {item.tag}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-navy-900 mt-1 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Ethics Strip */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5 text-electric-600 shrink-0" />
          <span>
            <strong>Authentic Presentation:</strong> URBANYX and FETCHR are presented as founder-led brand-building and web platform projects. We do not invent external client statistics or fabricated revenue metrics.
          </span>
        </div>
      </div>
    </div>
  );
};
