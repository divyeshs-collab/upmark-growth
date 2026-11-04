import React from 'react';
import { ProjectEnquiryForm } from '../components/enquiry/ProjectEnquiryForm';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Globe, 
  Sparkles, 
  ShieldCheck,
  Lock,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEO
        title="Contact UPMARK | Start Your Project"
        description="Get in touch with UPMARK for web development, AEO optimisation and creative projects."
      />
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-electric-500" />
          <span>Project Enquiries &amp; Consultations</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-4">
          Let&apos;s Start Something Great.
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Tell us about your project and let&apos;s explore how UPMARK can help.
        </p>

        {/* Global Assurance */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-electric-500" />
            Working With Ambitious Businesses Worldwide
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Strict Client Confidentiality
          </span>
        </div>
      </div>

      {/* Main International Project Enquiry Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectEnquiryForm />
      </div>

      {/* Direct Contact & Operational Details Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Official Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
                  Official Email
                </h3>
                <a
                  href="mailto:divyesh@upmarkgrowth.com"
                  className="text-xs sm:text-sm font-semibold text-navy-900 hover:text-electric-600 transition-colors block break-all"
                >
                  divyesh@upmarkgrowth.com
                </a>
                <span className="text-[11px] text-slate-500 block">
                  Primary business contact
                </span>
              </div>
            </div>

            {/* 2. Direct Phone */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
                  Direct Phone
                </h3>
                <a
                  href="tel:+919653397875"
                  className="text-xs sm:text-sm font-semibold text-navy-900 hover:text-electric-600 transition-colors block"
                >
                  +91 9653397875
                </a>
                <span className="text-[11px] text-slate-500 block">
                  International calling line
                </span>
              </div>
            </div>

            {/* 3. WhatsApp Direct Contact */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/919653397875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors block font-mono"
                >
                  +91 9653397875
                </a>
                <a
                  href="https://wa.me/919653397875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-bold hover:underline"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 4. Business Location */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
                  Business Location
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-navy-900 block">
                  Mumbai, India
                </span>
                <span className="text-[11px] text-slate-500 block">
                  Serving clients globally
                </span>
              </div>
            </div>
          </div>

          {/* Privacy Enquiries Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                For privacy compliance, data access or deletion requests:
              </span>
            </div>
            <a
              href="mailto:ghshirva@gmail.com"
              className="text-navy-900 font-semibold hover:text-electric-600 transition-colors"
            >
              ghshirva@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
