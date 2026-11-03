import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { faqData } from '../data/faqData';
import { 
  Code2, 
  Bot, 
  Palette, 
  Check, 
  ArrowRight, 
  ChevronLeft, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  FileCheck,
  AlertCircle
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Bot,
  Palette,
};

const problemSolvedMap: Record<string, { title: string; points: string[] }> = {
  'web-development': {
    title: 'The Challenge We Solve in Web Development',
    points: [
      'Generic website templates that fail to communicate brand credibility or product value to international buyers.',
      'Slow, bloated page speeds and poor mobile responsiveness that cause visitors to bounce before taking action.',
      'Rigid or poorly maintained web setups that make updating offerings or tracking conversion metrics painful.'
    ]
  },
  'aeo-optimisation': {
    title: 'The Challenge We Solve in Answer Engine Optimisation (AEO)',
    points: [
      'Businesses are invisible across ChatGPT, Google AI Overviews, Copilot and Perplexity because their technical data lacks entity relationships.',
      'Traditional keyword-stuffing SEO fails to provide the structured, answer-focused content that generative AI models require for citation.',
      'Competitors capturing conversational recommendation real estate while local service contractors and businesses remain unindexed in AI models.'
    ]
  },
  'creative-agency': {
    title: 'The Challenge We Solve in Creative Agency',
    points: [
      'Inconsistent visual presentation across social, web, and ad channels that damages customer trust and brand recall.',
      'Lookalike template graphics and amateur logos that force companies to compete solely on cheap pricing.',
      'Lack of clear brand guidelines, typography systems, and high-impact creative direction to enter higher-tier markets.'
    ]
  }
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.iconName] || Code2;
  const problemData = problemSolvedMap[service.slug] || {
    title: 'The Challenge We Solve',
    points: [
      'Fragmented digital execution that fails to generate business value.',
      'Lack of clear positioning in an international competitive landscape.'
    ]
  };

  // Filter FAQs relevant to this service or general
  const relevantFaqs = faqData.filter((f) => {
    if (service.slug === 'web-development') return f.category === 'Web Development' || f.category === 'General';
    if (service.slug === 'aeo-optimisation') return f.category === 'AEO' || f.category === 'General';
    if (service.slug === 'creative-agency') return f.category === 'Creative' || f.category === 'General';
    return true;
  });

  const [openFaq, setOpenFaq] = useState<number | null>(relevantFaqs[0]?.id || null);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-navy-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="w-14 h-14 rounded-2xl bg-electric-50 text-electric-600 flex items-center justify-center">
              <Icon className="w-7 h-7" />
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 text-slate-700">
              UPMARK Primary Discipline
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            {service.title}
          </h1>

          <p className="text-xl sm:text-2xl text-electric-600 font-semibold leading-relaxed">
            {service.positioning}
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {service.shortDescription}
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            {service.fullDescription}
          </p>

          {/* Initial Specialisation Callout for AEO */}
          {service.initialSpecialisation && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1">
              <span className="font-bold text-navy-900 block font-heading">Initial Market Focus:</span>
              <p>
                {service.initialSpecialisation}
              </p>
              <p className="text-slate-500 pt-1">
                Typical queries: AC repair, emergency heat pump troubleshooting, HVAC installation, maintenance plans, and local Texas contractor evaluations.
              </p>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="btn-primary py-3.5 px-7 text-sm font-semibold w-full sm:w-auto shadow-md shadow-electric-500/20"
            >
              <span>Enquire About {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/work"
              className="btn-secondary py-3.5 px-6 text-sm font-semibold w-full sm:w-auto"
            >
              <span>View Related Work</span>
            </Link>
          </div>
        </div>

        {/* The Problem Being Solved Box */}
        <div className="bg-slate-50 rounded-3xl p-7 sm:p-10 border border-slate-200 space-y-4">
          <h2 className="font-heading text-xl font-bold text-navy-900">
            {problemData.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {problemData.points.map((pt, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <span className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center">
                  !
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Deliverables & Visual Direction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Deliverables Column (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-soft space-y-6">
            <h2 className="font-heading text-xl font-bold text-navy-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-electric-600" />
              <span>Full Scope of Deliverables</span>
            </h2>

            <ul className="space-y-3">
              {service.deliverables.map((d, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            {service.slug === 'aeo-optimisation' && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-500 space-y-1">
                <strong className="text-navy-900 block font-heading">Ethical AEO Standard:</strong>
                <span>
                  We do not promise artificial ranking hacks or guaranteed AI recommendations. We explain and execute AEO through technical accessibility, structured schema, useful answer-focused content, entity clarity, and ongoing monitoring.
                </span>
              </div>
            )}
          </div>

          {/* Tools & Ideal For Column (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-soft space-y-4">
              <h3 className="font-heading text-base font-bold text-navy-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-electric-600" />
                <span>Ideal For</span>
              </h3>

              <ul className="space-y-2.5">
                {service.idealFor.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-500 mt-1.5 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Technology &amp; Standards:
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {service.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Discipline FAQs */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft space-y-6">
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Frequently Asked Questions Regarding {service.title}
          </h2>

          <div className="space-y-3">
            {relevantFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 text-left font-bold text-sm text-navy-900 flex items-center justify-between gap-3"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Project Enquiry Card */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              Ready to start your {service.title} project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              We work with clients worldwide. Send us your requirements for a comprehensive, customized project scope and quote.
            </p>
          </div>

          <Link
            to={`/contact?service=${encodeURIComponent(service.title)}`}
            className="btn-primary py-3.5 px-7 text-xs font-bold whitespace-nowrap bg-electric-500 hover:bg-electric-600"
          >
            <span>Request a Project Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
