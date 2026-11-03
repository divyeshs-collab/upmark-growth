import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { 
  ChevronLeft, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Eye
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-navy-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Project Hero Header */}
        <div
          className={`rounded-3xl p-8 sm:p-14 text-white bg-gradient-to-br ${
            project.id === 'urbanyx'
              ? 'from-navy-950 via-slate-900 to-navy-900'
              : 'from-navy-950 via-electric-950 to-navy-900'
          } shadow-xl border border-navy-800 space-y-6 relative overflow-hidden`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-lightblue-200 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-electric-400"></span>
              Founder-led projects
            </span>

            <span className="text-xs font-mono text-slate-300">
              Category: {project.category}
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-slate-200 font-medium max-w-2xl">
            {project.subtitle}
          </p>

          <p className="text-sm text-slate-400 max-w-3xl">
            {project.tagline}
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {project.servicesDemonstrated.map((s, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-slate-200 border border-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Project Case Study Deep-Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Case Study Text (Span 8) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-soft space-y-4">
              <h2 className="font-heading text-xl font-bold text-navy-900">
                Project Overview &amp; Concept
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-soft space-y-4">
              <h2 className="font-heading text-xl font-bold text-navy-900">
                The Core Challenge
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-soft space-y-4">
              <h2 className="font-heading text-xl font-bold text-navy-900">
                Strategic Framework &amp; Positioning
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {project.strategy}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-soft space-y-4">
              <h2 className="font-heading text-xl font-bold text-navy-900">
                Creative &amp; Technical Execution
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {project.creativeExecution}
              </p>
            </div>
          </div>

          {/* Sidebar Deliverables (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft space-y-4">
              <h3 className="font-heading text-base font-bold text-navy-900 uppercase tracking-wider text-xs">
                Key Deliverables Produced
              </h3>

              <ul className="space-y-3">
                {project.deliverables.map((deliv, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-950 text-white rounded-2xl p-6 space-y-4">
              <h3 className="font-heading font-bold text-base">
                Build this caliber of digital experience for your brand
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need bespoke web development, AEO setup, or strategic creative direction, our agency delivers this exact standard.
              </p>
              <Link
                to="/contact"
                className="btn-primary w-full py-3 text-xs font-bold justify-center"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Visual Showcase Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-900">
                Visual Showcase Gallery
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Design systems, responsive components, and digital artwork.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {project.gallery.length} Modules
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((item, gIdx) => (
              <div
                key={gIdx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between hover:border-electric-300 transition-all duration-200"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${
                    item.previewBg || 'from-navy-900 to-slate-800'
                  } p-6 flex flex-col justify-between text-white relative`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-black/40 backdrop-blur-sm text-[10px] font-mono text-lightblue-300 border border-white/10">
                      {item.tag}
                    </span>
                    <Eye className="w-4 h-4 text-slate-300" />
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-lg text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Integrity Note */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center text-xs text-slate-500">
          <p>
            * Transparency Disclosure: {project.title} is a founder-led project representing brand strategy, web design, and digital architecture capability. In accordance with UPMARK’s integrity guidelines, no fictitious revenue or fabricated customer metrics are presented.
          </p>
        </div>
      </div>
    </div>
  );
};
