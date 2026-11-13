import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import { ProjectInteractiveDemo } from '../work/ProjectInteractiveDemo';
import { SectionEyebrow } from '../common/BrandMotifs';
import { IconArrowRight, IconCheck } from '../common/Icons';

export const WorkPreview: React.FC = () => {
  const featuredProjects = projectsData.slice(0, 3);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProject = featuredProjects[selectedIdx] || featuredProjects[0];

  return (
    <section id="work" className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Switcher Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3">
            <SectionEyebrow label="Selected Work (01 to 03)" variant="light" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.15]">
              Interactive Demonstration Builds
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {featuredProjects.map((proj, idx) => {
              const isCurrent = idx === selectedIdx;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border ${
                    isCurrent
                      ? 'bg-[#051329] text-white border-[#051329]'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-[#051329]'
                  }`}
                >
                  <span className="font-mono mr-1.5 text-[#3898FF]">{proj.number}</span>
                  {proj.clientContext.replace('Demonstration Project: ', '')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Demo Split */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Brief Card (Span 4) */}
          <div className="lg:col-span-4 space-y-5 bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded bg-[#F8FAFC] text-[#051329] border border-slate-200 font-semibold">
                {activeProject.label}
              </span>
              <span className="font-mono text-sm font-bold text-[#0D5BEF]">
                {activeProject.number}
              </span>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-1">
                {activeProject.category}
              </div>
              <h3 className="font-heading text-xl font-bold text-[#051329] leading-snug">
                {activeProject.title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeProject.summary}
            </p>

            <ul className="space-y-2 pt-3 border-t border-slate-200">
              {activeProject.keyCapabilities.slice(0, 4).map((cap, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                  <IconCheck className="w-4 h-4 text-[#0D5BEF] mt-0.5 shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-200">
              <Link to={`/work/${activeProject.slug}`} className="btn-secondary py-2.5 px-4 text-xs sm:text-sm w-full justify-center">
                <span>View Case Study</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Interactive Demo (Span 8) */}
          <div className="lg:col-span-8">
            <ProjectInteractiveDemo demoType={activeProject.demoType} compact={false} />
          </div>
        </div>
      </div>
    </section>
  );
};
