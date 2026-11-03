import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { 
  Code2, 
  Bot, 
  Palette, 
  ArrowRight, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Bot,
  Palette,
};

export const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-brandBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-electric-500" />
            <span>Three Focused Disciplines</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Three Disciplines. <br className="hidden sm:inline" />
            <span className="text-electric-600">One Digital Partner.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Focused digital and creative services to help businesses build, improve and communicate their online presence.
          </p>
        </div>

        {/* Exactly THREE Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Code2;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-card-hover hover:border-electric-400/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center group-hover:bg-electric-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Concise Description */}
                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2 group-hover:text-electric-600 transition-colors">
                    {service.title}
                  </h3>

                  <div className="text-xs font-semibold text-electric-600 mb-3">
                    {service.positioning}
                  </div>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* 3 to 5 Key Deliverables */}
                  <div className="pt-4 border-t border-slate-100 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.slice(0, 5).map((d, dIdx) => (
                        <li key={dIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-electric-600 hover:text-electric-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Learn More About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Engagement Banner */}
        <div className="mt-14 bg-navy-950 text-white rounded-2xl p-8 border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-heading text-lg sm:text-xl font-bold">
              Looking for an integrated digital solution?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              We frequently combine custom web development with answer engine optimization and distinctive creative direction for international brands.
            </p>
          </div>

          <Link
            to="/contact"
            className="btn-primary whitespace-nowrap bg-electric-500 hover:bg-electric-600 text-white py-3.5 px-6 text-sm font-semibold"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
