import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Bot, 
  Palette, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  ShieldCheck,
  CheckCircle2,
  Search,
  Layers,
  Monitor,
  Smartphone,
  ShoppingBag,
  Flame,
  FileCheck,
  TrendingUp,
  Cpu,
  Eye,
  Sliders,
  DollarSign
} from 'lucide-react';
import { ProcessSection } from '../components/home/ProcessSection';
import { SEO } from '../components/common/SEO';

export const ServicesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-24">
      <SEO
        title="Our Services | Web Development, AEO & Creative Agency | UPMARK"
        description="Explore UPMARK's web development, Answer Engine Optimisation and creative services for ambitious businesses."
      />
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-electric-500" />
          <span>Three Dedicated Service Disciplines</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">
          Three Disciplines. <br className="hidden sm:inline" />
          <span className="text-electric-600">One Global Digital Partner.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          UPMARK offers exactly three core services: Web Development, Answer Engine Optimisation (AEO), and Creative Agency. Explore our complete scope of capabilities below.
        </p>

        {/* Global Nav Anchors */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#web-development"
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-navy-900 hover:border-electric-400 hover:text-electric-600 shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5 text-electric-600" />
            <span>01 Web Development</span>
          </a>
          <a
            href="#aeo-optimisation"
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-navy-900 hover:border-electric-400 hover:text-electric-600 shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Bot className="w-3.5 h-3.5 text-emerald-600" />
            <span>02 AEO Optimisation</span>
          </a>
          <a
            href="#creative-agency"
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-navy-900 hover:border-electric-400 hover:text-electric-600 shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Palette className="w-3.5 h-3.5 text-purple-600" />
            <span>03 Creative Agency</span>
          </a>
          <a
            href="#pricing"
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:text-navy-900 shadow-xs transition-colors"
          >
            <span>Project Pricing</span>
          </a>
        </div>
      </div>

      {/* DISCIPLINE 1: WEB DEVELOPMENT */}
      <section id="web-development" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-8 sm:p-14 space-y-12">
          {/* Section Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-electric-600 bg-electric-50 px-2.5 py-1 rounded-md">
                  DISCIPLINE 01
                </span>
                <span className="text-xs text-slate-400 font-medium">Digital Engineering &amp; Architecture</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900">
                Web Development
              </h2>
              <p className="text-base text-electric-600 font-semibold">
                Build powerful digital experiences designed around your business.
              </p>
            </div>

            <Link
              to="/contact?service=Web%20Development"
              className="btn-primary py-3.5 px-6 text-xs font-bold whitespace-nowrap self-start md:self-auto"
            >
              <span>Enquire About Web Development</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Overview & Business Value */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Business Value &amp; Approach
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                We create modern, responsive and business-focused digital experiences. Your website is the central hub of your international digital presence. Rather than relying on generic templates, we build custom web platforms tailored around your brand positioning, designed to communicate value, build trust, and help convert visitors into qualified customers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-heading font-bold text-sm text-navy-900 mb-1">
                    Value-Driven UX Architecture
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed around buyer decision journeys, intuitive navigation, and frictionless conversion pathways.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-heading font-bold text-sm text-navy-900 mb-1">
                    Global Speed &amp; Standards
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clean, maintainable code architectures with exceptional load performance across international networks.
                  </p>
                </div>
              </div>

              {/* Complete Deliverables List */}
              <div className="pt-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Web Development Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Business websites',
                    'Custom website development',
                    'Landing page development',
                    'E-commerce websites',
                    'Website redesign & modernisation',
                    'UI/UX design & design systems',
                    'Responsive development (Mobile, Tablet, Desktop)',
                    'Website performance optimisation',
                    'Website maintenance where agreed in scope'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Interfaces Gallery */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Visual Formats &amp; Interfaces Delivered
              </h3>

              <div className="space-y-3">
                {/* Visual 1: Desktop Business Website */}
                <div className="bg-slate-900 rounded-2xl p-4 text-white border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 font-bold text-slate-200">
                      <Monitor className="w-3.5 h-3.5 text-electric-400" />
                      Desktop Website Platform
                    </span>
                    <span className="font-mono text-[10px] bg-slate-800 px-2 py-0.5 rounded">1440px / 1280px</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl space-y-2 border border-slate-800/80">
                    <div className="flex items-center justify-between text-[10px]">
                      <div className="font-bold text-white tracking-wide">ENTERPRISE CLOUD SUITE</div>
                      <div className="text-slate-400">Platform &bull; Pricing &bull; Book Demo</div>
                    </div>
                    <div className="text-xs font-bold text-electric-400">High-Converting Hero Architecture</div>
                    <div className="h-1.5 w-4/5 bg-slate-800 rounded"></div>
                    <div className="h-1.5 w-3/5 bg-slate-800 rounded"></div>
                  </div>
                </div>

                {/* Visual 2: E-commerce Interface */}
                <div className="bg-navy-950 rounded-2xl p-4 text-white border border-navy-800 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-navy-800 pb-2">
                    <span className="flex items-center gap-1.5 font-bold text-slate-200">
                      <ShoppingBag className="w-3.5 h-3.5 text-purple-400" />
                      E-Commerce Storefront Interface
                    </span>
                    <span className="font-mono text-[10px] bg-navy-900 px-2 py-0.5 rounded">Catalog &bull; Cart</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2.5 bg-navy-900/80 rounded-lg border border-navy-800">
                      <div className="text-slate-300 font-semibold">Structured Product Grid</div>
                      <div className="text-slate-500 text-[9px] mt-0.5">Quick-view, variant select</div>
                    </div>
                    <div className="p-2.5 bg-navy-900/80 rounded-lg border border-navy-800">
                      <div className="text-slate-300 font-semibold">Frictionless Checkout</div>
                      <div className="text-slate-500 text-[9px] mt-0.5">Global currency &amp; cards</div>
                    </div>
                  </div>
                </div>

                {/* Visual 3: Mobile & Landing Page */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-700">
                    <span className="flex items-center gap-1.5 font-bold text-navy-900">
                      <Smartphone className="w-3.5 h-3.5 text-electric-600" />
                      Mobile UX &amp; Dedicated Landing Pages
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 font-bold">100% Responsive</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Touch-friendly components, fluid typography, and single-objective landing pages built for campaign conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINE 2: AEO OPTIMISATION */}
      <section id="aeo-optimisation" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-8 sm:p-14 space-y-12">
          {/* Section Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  DISCIPLINE 02
                </span>
                <span className="text-xs text-slate-400 font-medium">Generative AI Search Visibility</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900">
                AEO Optimisation
              </h2>
              <p className="text-base text-emerald-700 font-semibold">
                Strengthen your visibility across AI-powered search experiences.
              </p>
            </div>

            <Link
              to="/contact?service=AEO%20Optimisation"
              className="btn-primary py-3.5 px-6 text-xs font-bold whitespace-nowrap self-start md:self-auto bg-emerald-600 hover:bg-emerald-700"
            >
              <span>Enquire About AEO Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Deep-Dive Explanation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  What is Answer Engine Optimisation (AEO)?
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Search engines are evolving from ten blue links into direct synthesized answers generated by Large Language Models. AEO is the disciplined optimization practice of structuring your website content, crawlability, entity data, and technical markup so that AI assistants—including <strong>ChatGPT Search, Google AI search experiences, and Microsoft Bing</strong>—can accurately parse, index, and cite your business when buyers seek solutions.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Why AI-Powered Discovery Matters
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  High-intent buyers increasingly ask AI engines questions like <em>&ldquo;Who are licensed commercial contractors in Dallas?&rdquo;</em> or <em>&ldquo;Which platform handles custom B2B workflows?&rdquo;</em> If your business entity is not cleanly organized in structured schema, AI models either overlook your brand or hallucinate incorrect details.
                </p>
              </div>

              {/* What UPMARK Evaluates & Process */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-heading font-bold text-sm text-navy-900 mb-1">
                    What We Evaluate:
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li>&bull; AI crawler bot access &amp; indexing status</li>
                    <li>&bull; Schema.org and JSON-LD entity graph coverage</li>
                    <li>&bull; Answer clarity on core service and FAQ pages</li>
                    <li>&bull; Competitor citations across AI answer engines</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-heading font-bold text-sm text-navy-900 mb-1">
                    What Clients Receive:
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li>&bull; Comprehensive AI Search Visibility Audit</li>
                    <li>&bull; Entity schema implementation files</li>
                    <li>&bull; Answer-optimized copy recommendations</li>
                    <li>&bull; Ongoing visibility tracking and reporting</li>
                  </ul>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Complete AEO Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {[
                    'AI search visibility audits',
                    'Answer-focused content optimisation',
                    'Website crawlability and indexing reviews',
                    'Business and entity information optimisation',
                    'FAQ and service page optimisation',
                    'Relevant structured data implementation',
                    'Competitor visibility analysis',
                    'AI search citation and visibility monitoring',
                    'Reporting and ongoing optimisation'
                  ].map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Initial Specialisation Note */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 space-y-1">
                <strong className="text-navy-900 font-heading block">Market Specialisation Note:</strong>
                <p>
                  UPMARK&apos;s initial sales specialisation includes HVAC businesses in Texas, USA. However, our AEO methodology and technical frameworks are available to work with businesses across industries and countries worldwide.
                </p>
              </div>

              {/* Mandatory Honest Disclaimer */}
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                <strong className="font-heading block">Ethical AEO Standard &amp; Disclaimer:</strong>
                <p>
                  Answer Engine Optimisation is an evolving discipline. UPMARK does not guarantee AI search rankings, specific citations, or automated recommendations, nor do we claim that any schema markup guarantees AI visibility. We focus on rigorous technical discoverability, verified knowledge signals, and systematic monitoring.
                </p>
              </div>
            </div>

            {/* AEO Visual Demonstration Card */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                AI Synthesis &amp; Entity Architecture
              </h3>

              <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-5 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-emerald-400" />
                    <span className="font-heading font-bold text-sm">AI Search Query Simulation</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Parsed
                  </span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
                  <Search className="w-3.5 h-3.5 text-slate-400 inline mr-2" />
                  &ldquo;Commercial HVAC retrofit contractors in Austin, TX with emergency response&rdquo;
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Structured AI Citation Model</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                    &ldquo;Based on verified JSON-LD entity graph data, [Client Business] provides 24/7 commercial HVAC mechanical contracting across Travis County, verified heat pump installations, and emergency rooftop unit replacements.&rdquo;
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400">Technical Signal Stack:</div>
                  <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                    <span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Organization Schema</span>
                    <span className="bg-slate-800 px-2 py-1 rounded text-slate-300">HVACBusiness Entity</span>
                    <span className="bg-slate-800 px-2 py-1 rounded text-slate-300">GeoCoordinates</span>
                    <span className="bg-slate-800 px-2 py-1 rounded text-slate-300">FAQPage Structured Data</span>
                    <span className="bg-slate-800 px-2 py-1 rounded text-slate-300">GPTBot Crawl Friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINE 3: CREATIVE AGENCY */}
      <section id="creative-agency" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-8 sm:p-14 space-y-12">
          {/* Section Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                  DISCIPLINE 03
                </span>
                <span className="text-xs text-slate-400 font-medium">Brand Strategy &amp; Visual Communication</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900">
                Creative Agency
              </h2>
              <p className="text-base text-purple-700 font-semibold">
                Create distinctive brand identities and digital experiences.
              </p>
            </div>

            <Link
              to="/contact?service=Creative%20Agency"
              className="btn-primary py-3.5 px-6 text-xs font-bold whitespace-nowrap self-start md:self-auto bg-purple-600 hover:bg-purple-700"
            >
              <span>Enquire About Creative Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Deep-Dive Explanation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Visual Identities and Creative Assets
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  UPMARK develops visual identities and creative assets that help businesses communicate consistently. In competitive international markets, strong visual design commands attention, establishes trust, and differentiates your business from competitors.
                </p>
              </div>

              {/* Scope of Production */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Creative Capabilities &amp; Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {[
                    'Brand identity development',
                    'Logo and visual identity design',
                    'Brand guidelines & design tokens',
                    'Graphic design & layout systems',
                    'Social media creatives',
                    'Advertising creatives & ad variations',
                    'Digital campaign creatives',
                    'Marketing collateral & pitch decks',
                    'Product creatives & packaging concepts',
                    'Creative direction & visual strategy',
                    'Short-form video editing'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explicit Scope Boundary Note */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1">
                <strong className="text-navy-900 font-heading block">Service Scope Boundary:</strong>
                <p>
                  UPMARK specializes in strategic creative production, visual identity, and asset design. We do not provide ongoing social media management, paid advertising media buying, or ad account spend management.
                </p>
              </div>
            </div>

            {/* Creative Visual Asset Demo */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Design System &amp; Creative Assets
              </h3>

              <div className="bg-navy-950 rounded-2xl p-6 text-white space-y-5 border border-navy-800">
                <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-purple-400" />
                    <span className="font-heading font-bold text-sm">Design System Hierarchy</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300">Vector Tokens</span>
                </div>

                <div className="p-4 bg-navy-900 rounded-xl space-y-3 border border-navy-800">
                  <div className="text-[10px] font-mono uppercase text-lightblue-300">
                    Typography System
                  </div>
                  <div className="font-heading font-extrabold text-lg text-white">
                    Montserrat Bold &bull; Headings
                  </div>
                  <div className="text-xs text-slate-300 font-sans">
                    Inter Regular &bull; Balanced body copy designed for effortless reading.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-400">Curated Harmonious Palette:</div>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                    <div className="p-2 rounded bg-[#0B1F3B] border border-slate-700 text-slate-300">#0B1F3B</div>
                    <div className="p-2 rounded bg-[#2563EB] text-white">#2563EB</div>
                    <div className="p-2 rounded bg-[#60A5FA] text-navy-950 font-bold">#60A5FA</div>
                    <div className="p-2 rounded bg-[#94A3B8] text-navy-950">#94A3B8</div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400">
                  Every asset is delivered in vector format with master guidelines ready for digital and print execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <ProcessSection />

      {/* PRICING SECTION WITHIN SERVICES PAGE */}
      <section id="pricing" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-14 border border-navy-800 shadow-xl space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900 text-xs font-mono font-semibold text-lightblue-300 border border-navy-700">
              <DollarSign className="w-3.5 h-3.5 text-electric-400" />
              Transparent Engagement Model
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Project Pricing
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium">
              &ldquo;Every project is different. Our pricing is based on your requirements, scope, complexity and objectives.&rdquo;
            </p>

            <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We do not publish invented or arbitrary flat packages. Instead, we evaluate your specific business goals and deliver an itemized, transparent project proposal tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800 space-y-3">
              <h3 className="font-heading font-bold text-base text-white">
                Web Development
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Priced by website complexity, page count, custom functionality, e-commerce requirements, and integration needs.
              </p>
            </div>

            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800 space-y-3">
              <h3 className="font-heading font-bold text-base text-white">
                AEO Optimisation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structured around initial technical audit, schema implementation, content restructuring, and optional monthly visibility monitoring.
              </p>
            </div>

            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800 space-y-3">
              <h3 className="font-heading font-bold text-base text-white">
                Creative Agency
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Priced by brand deliverables, design systems, visual asset variations, and campaign creative volume.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/contact"
              className="btn-primary py-4 px-8 text-sm font-bold inline-flex items-center gap-2 shadow-lg shadow-electric-500/25 bg-electric-500 hover:bg-electric-600"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
