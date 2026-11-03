import React from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Code2, 
  MessageSquare, 
  Eye, 
  GitBranch, 
  ShieldCheck 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      number: '01',
      title: 'Clear and focused service offerings.',
      description: 'We do not claim to do everything. We focus exclusively on what we do best: building exceptional websites, strengthening visibility across AI-powered search, and creating distinctive brand identities.',
      icon: Layers,
    },
    {
      number: '02',
      title: 'Business-oriented design decisions.',
      description: 'Every design choice, component hierarchy, and content architecture is grounded in real business objectives, user comprehension, and measurable conversion efficiency.',
      icon: CheckCircle2,
    },
    {
      number: '03',
      title: 'Modern technology and implementation.',
      description: 'We build with clean, maintainable, standards-compliant technologies like React, Next.js, TypeScript, and modern headless architectures—ensuring speed, security, and scalability.',
      icon: Code2,
    },
    {
      number: '04',
      title: 'Transparent project communication.',
      description: 'No technical jargon or ambiguous timelines. We provide documented scopes, shared project milestones, clear deliverables, and responsive collaboration across global time zones.',
      icon: MessageSquare,
    },
    {
      number: '05',
      title: 'Attention to detail.',
      description: 'From typography scales and responsive spacing to structured entity schemas and micro-interactions, we obsess over the craft that transforms good work into exceptional assets.',
      icon: Eye,
    },
    {
      number: '06',
      title: 'Structured execution.',
      description: 'A disciplined five-step delivery framework ensures projects move seamlessly from initial discovery to strategic design, technical build, review, and ongoing refinement.',
      icon: GitBranch,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-electric-500" />
            <span>Why UPMARK</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Thoughtful Strategy. <br className="hidden sm:inline" />
            <span className="text-electric-600">Quality Execution.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We partner with businesses worldwide through clarity, technical capability, and reliable delivery without exaggerated marketing claims.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-brandBg rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-card-hover hover:border-electric-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white text-electric-600 flex items-center justify-center border border-slate-200 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
