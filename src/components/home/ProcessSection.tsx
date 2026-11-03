import React from 'react';
import { 
  Search, 
  Compass, 
  Palette, 
  Code2, 
  Sparkles, 
  ArrowRight,
  GitBranch
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      tagline: 'Understanding & Alignment',
      description: 'Understand the business, requirements, objectives and audience. We analyze your existing digital touchpoints, industry context, and technical specifications.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Strategise',
      tagline: 'Scope & Architecture',
      description: 'Develop the project approach and define scope and deliverables. We map sitemaps, entity structures, design frameworks, and milestones before execution begins.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Create',
      tagline: 'Design & Visual Strategy',
      description: 'Design the visual experience, content and technical solution. We craft high-fidelity UI/UX layouts, brand identities, and answer-focused content structures.',
      icon: Palette,
    },
    {
      step: '04',
      title: 'Implement',
      tagline: 'Engineering & Optimisation',
      description: 'Build, optimise, review and deliver the agreed scope. Modern code standards, cross-device responsiveness, structured data schemas, and speed optimization are completed.',
      icon: Code2,
    },
    {
      step: '05',
      title: 'Refine',
      tagline: 'Review & Ongoing Support',
      description: 'Make agreed improvements and provide ongoing support where applicable. We ensure seamless deployment, technical verification, and ongoing monitoring.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-brandBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-3">
            <GitBranch className="w-3.5 h-3.5 text-electric-500" />
            <span>Structured Delivery Framework</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            A Clear Process <br className="hidden sm:inline" />
            <span className="text-electric-600">From Idea to Execution.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every engagement follows a proven five-step methodology to ensure creative excellence, technical rigor, and predictable milestones.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card-hover hover:border-electric-300 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-navy-50 text-navy-900 border border-navy-100">
                      Step {st.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-electric-500 group-hover:scale-125 transition-transform"></span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-navy-900 flex items-center justify-center mb-4 group-hover:bg-electric-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-navy-900 mb-1">
                    {st.title}
                  </h3>

                  <div className="text-xs font-semibold text-electric-600 mb-2">
                    {st.tagline}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-electric-600 transition-colors"
          >
            <span>Have a project in mind? Tell us about your requirements</span>
            <ArrowRight className="w-4 h-4 text-electric-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};
