import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projectsData';
import { ProjectInteractiveDemo } from '../components/work/ProjectInteractiveDemo';
import { IconArrowLeft, IconArrowUpRight, IconArrowRight } from '../components/common/Icons';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const otherProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="bg-[#F8FAFC]">
      <SEO
        title={`${project.title} | ${project.label} | UPMARK`}
        description={project.summary}
        canonicalPath={`/work/${project.slug}`}
      />

      {/* Top Header */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-slate-500 hover:text-[#051329]"
            >
              <IconArrowLeft className="w-4 h-4" />
              <span>All Portfolio Projects</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0D5BEF]">
                PROJECT {project.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.12em] px-2.5 py-0.5 rounded bg-[#F8FAFC] text-[#051329] border border-slate-200">
                {project.label}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
                {project.clientContext} &bull; {project.category}
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#051329] tracking-[-0.03em] leading-[1.1]">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/contact" className="btn-primary py-3.5 px-7 text-sm">
                <span>Discuss a Similar Project</span>
                <IconArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#0D5BEF] font-semibold">
                Interactive Interface Walkthrough
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#051329]">
                Use the tabs inside the frame below to inspect each module
              </h2>
            </div>
            <span className="font-mono text-xs text-slate-500">
              {project.label}
            </span>
          </div>

          <ProjectInteractiveDemo demoType={project.demoType} />
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#0D5BEF] font-semibold">
                  01. Project Overview
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#051329]">
                  Concept &amp; Scope
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-200">
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#0D5BEF] font-semibold">
                  02. Commercial Problem
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#051329]">
                  Business Context
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {project.businessContext}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-200">
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#0D5BEF] font-semibold">
                  03. System Design
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#051329]">
                  Architecture &amp; Technical Approach
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {project.architectureAndApproach}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl bg-[#F8FAFC] border border-slate-200 p-7 space-y-5">
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#0D5BEF] font-semibold">
                  Demonstrated Capabilities
                </div>
                <ul className="space-y-3">
                  {project.keyCapabilities.map((cap, idx) => (
                    <li key={idx} className="text-sm text-[#051329] flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#0D5BEF] mt-0.5">0{idx + 1}</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-[#F8FAFC] border border-slate-200 p-7 space-y-5">
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#0D5BEF] font-semibold">
                  Deliverables Illustrated
                </div>
                <ul className="space-y-2.5">
                  {project.deliverables.map((deliv, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D5BEF] mt-2 shrink-0"></span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white text-sm text-slate-600 leading-relaxed">
                <strong className="text-[#051329] block mb-1">Transparency Note:</strong>
                This project is presented as a {project.label.toLowerCase()} to illustrate UPMARK&apos;s interface design, engineering, and information architecture standards. No fabricated client statistics are claimed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Portfolio Projects */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#051329]">
              More Demonstration Projects
            </h2>
            <Link
              to="/work"
              className="font-mono text-xs uppercase tracking-[0.14em] text-[#051329] hover:text-[#0D5BEF] inline-flex items-center gap-1"
            >
              <span>All Work</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((other) => (
              <Link
                key={other.id}
                to={`/work/${other.slug}`}
                className="rounded-xl bg-white border border-slate-200 p-7 hover:border-[#0D5BEF] flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-[#0D5BEF]">
                      PROJECT {other.number}
                    </span>
                    <span className="text-xs text-slate-500">{other.label}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#051329] group-hover:text-[#0D5BEF]">
                    {other.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{other.summary}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#0D5BEF] font-semibold inline-flex items-center gap-1">
                  <span>View Project</span>
                  <IconArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
