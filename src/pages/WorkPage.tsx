import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projectsData';
import { ProjectInteractiveDemo } from '../components/work/ProjectInteractiveDemo';
import { FinalCta } from '../components/home/FinalCta';
import { SectionEyebrow } from '../components/common/BrandMotifs';
import { IconArrowRight, IconCheck } from '../components/common/Icons';

export const WorkPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="Work & Demonstration Portfolio: Websites, E-Commerce & Web Applications | UPMARK"
        description="Explore UPMARK's concept and demonstration projects showcasing residential service websites, e-commerce storefronts, and custom business management dashboards."
        canonicalPath="/work"
      />

      {/* Minimalist Header */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <SectionEyebrow label="Work & Demonstration Portfolio" variant="light" />
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#051329] tracking-[-0.025em] leading-[1.15]">
                Demonstrated Digital Architecture
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Explore interactive concept and demonstration projects below showcasing how UPMARK designs and builds service websites, e-commerce stores, and business dashboards.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-5 rounded-xl bg-white border border-slate-200 text-sm text-slate-600 leading-relaxed space-y-1">
                <div className="font-mono text-xs uppercase tracking-wider text-[#0D5BEF] font-semibold">
                  Portfolio Transparency
                </div>
                <p>
                  All builds below are clearly labelled concept or demonstration projects with zero fabricated client metrics or logos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="bg-white divide-y divide-slate-200 border-b border-slate-200">
        {projectsData.map((project) => (
          <article key={project.id} id={project.slug} className="py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#0D5BEF]">
                      {project.number}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#F8FAFC] text-[#051329] border border-slate-200 font-semibold">
                      {project.label}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#051329] tracking-[-0.025em]">
                    <Link
                      to={`/work/${project.slug}`}
                      className="hover:text-[#0D5BEF]"
                    >
                      {project.title}
                    </Link>
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <Link to={`/work/${project.slug}`} className="btn-secondary py-2.5 px-5 text-sm">
                    <span>Case Study Details</span>
                    <IconArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-5">
                  <p className="text-base text-slate-600 leading-relaxed">
                    {project.overview}
                  </p>

                  <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                      Key Capabilities Demonstrated
                    </h3>
                    <ul className="space-y-2">
                      {project.keyCapabilities.map((cap, idx) => (
                        <li key={idx} className="text-sm text-[#051329] flex items-start gap-2">
                          <IconCheck className="w-4 h-4 text-[#0D5BEF] mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <ProjectInteractiveDemo demoType={project.demoType} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <FinalCta />
    </div>
  );
};
