import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const WorkPreview: React.FC = () => {
  return (
    <section id="work" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-electric-500" />
            <span>Demonstrated Capability</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Ideas Into <span className="text-electric-600">Experiences.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real capability is proven through the digital platforms and brand systems we architect and build. Explore our featured founder-led projects.
          </p>
        </div>

        {/* 2 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-brandBg rounded-2xl border border-slate-200/90 shadow-soft overflow-hidden hover:shadow-card-hover hover:border-electric-300 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Visual Showcase Top Banner */}
              <div
                className={`relative h-64 sm:h-72 bg-gradient-to-br ${
                  project.id === 'urbanyx'
                    ? 'from-navy-950 via-slate-900 to-navy-900'
                    : 'from-navy-950 via-electric-950 to-navy-900'
                } p-6 sm:p-8 flex flex-col justify-between text-white overflow-hidden`}
              >
                {/* Subtle Grid Accent */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                ></div>

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-lightblue-200 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-electric-400"></span>
                    Founder-led projects
                  </span>

                  <span className="text-xs font-mono text-slate-300">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <div className="relative z-10">
                  <h3 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="relative z-10 flex flex-wrap gap-2 text-[11px]">
                  {project.gallery.slice(0, 3).map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-black/40 backdrop-blur-sm text-slate-300 border border-white/10"
                    >
                      {item.tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Project Overview:
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-5">
                    {project.overview}
                  </p>

                  {/* Services Demonstrated */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Disciplines Demonstrated:
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.servicesDemonstrated.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Case study &amp; deliverables
                  </span>

                  <Link
                    to={`/work/${project.slug}`}
                    className="btn-primary py-2.5 px-4 text-xs font-bold"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accuracy and Ethics Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Authentic Presentation: URBANYX and FETCHR are featured as founder-led projects demonstrating real design, branding and engineering capability. We do not invent external client statistics or fabricated revenue numbers.
          </span>
        </div>
      </div>
    </section>
  );
};
