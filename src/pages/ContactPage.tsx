import React from 'react';
import { ProjectEnquiryForm } from '../components/enquiry/ProjectEnquiryForm';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-semibold text-electric-700 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-electric-500" />
          <span>Project Enquiries &amp; Consultations</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">
          Have a Project <br className="hidden sm:inline" />
          <span className="text-electric-600">in Mind?</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Tell us about your business, your requirements and what you want to achieve. We&apos;ll review your enquiry and get back to you.
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
            100% Confidential Project Evaluation
          </span>
        </div>
      </div>

      {/* Main International Project Enquiry Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectEnquiryForm />
      </div>

      {/* Direct Contact & Operational Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-navy-900 mb-1">
                  General &amp; Project Enquiries
                </h3>
                <span className="text-xs text-slate-700 font-medium block">
                  hello@upmarkgrowth.com
                </span>
                <span className="text-[11px] text-slate-400 italic">
                  [Agency Contact Placeholder]
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-navy-900 mb-1">
                  International Timezone Coverage
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scheduled remote consultations across US, UK, European, Gulf (GST), and Asia-Pacific working hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-navy-900 mb-1">
                  Agency Headquarters
                </h3>
                <span className="text-xs text-slate-700 font-medium block">
                  India (Global Operations Hub)
                </span>
                <span className="text-[11px] text-slate-500">
                  Delivering digital projects worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
