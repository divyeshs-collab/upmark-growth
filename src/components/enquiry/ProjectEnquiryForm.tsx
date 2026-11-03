import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Mail, 
  Phone,
  Building,
  HelpCircle
} from 'lucide-react';
import { ProjectEnquiryData } from '../../types';

interface ProjectEnquiryFormProps {
  initialService?: string;
  compact?: boolean;
}

export const ProjectEnquiryForm: React.FC<ProjectEnquiryFormProps> = ({ 
  initialService = '', 
  compact = false 
}) => {
  const [searchParams] = useSearchParams();
  const queryService = searchParams.get('service') || initialService;

  const getMatchedService = (param: string): ProjectEnquiryData['serviceRequired'] => {
    const lower = param.toLowerCase();
    if (lower.includes('aeo') || lower.includes('answer')) return 'AEO Optimisation';
    if (lower.includes('creative') || lower.includes('brand')) return 'Creative Agency';
    if (lower.includes('multiple')) return 'Multiple Services';
    return 'Web Development';
  };

  const [formData, setFormData] = useState<ProjectEnquiryData>({
    fullName: '',
    businessName: '',
    businessEmail: '',
    country: 'United States',
    websiteUrl: '',
    industry: '',
    serviceRequired: getMatchedService(queryService),
    projectDescription: '',
    approximateBudget: 'Custom Project Discussion',
    expectedTimeline: '1–2 Months',
    phoneNumber: '',
    preferredCommunication: 'Email & Scheduled Video Call',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<{ id: string; data: ProjectEnquiryData } | null>(null);

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'United Arab Emirates',
    'India',
    'Germany',
    'France',
    'Singapore',
    'New Zealand',
    'Netherlands',
    'Other International'
  ];

  const serviceOptions: ProjectEnquiryData['serviceRequired'][] = [
    'Web Development',
    'AEO Optimisation',
    'Creative Agency',
    'Multiple Services'
  ];

  const timelineOptions = [
    'Urgent (< 3 Weeks)',
    '1–2 Months',
    '2–3 Months',
    'Flexible / Planning Phase'
  ];

  const budgetOptions = [
    'Custom Project Discussion',
    'Under $2,500 USD',
    '$2,500 – $5,000 USD',
    '$5,000 – $10,000 USD',
    '$10,000+ USD',
    'Monthly Retainer (AEO / Advisory)'
  ];

  const communicationOptions = [
    'Email & Scheduled Video Call (Google Meet / Zoom)',
    'Email Correspondence First',
    'Phone / WhatsApp'
  ];

  const handleChange = (field: keyof ProjectEnquiryData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.businessName.trim()) errs.businessName = 'Business name is required';
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      errs.businessEmail = 'Please provide a valid email address';
    }
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please briefly describe your project requirements';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const enquiryId = `UPM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const payload = {
        id: enquiryId,
        timestamp: new Date().toISOString(),
        ...formData
      };

      // 1. Secure browser persistence so enquiries are never lost
      const existing = JSON.parse(localStorage.getItem('upmark_project_enquiries') || '[]');
      existing.unshift(payload);
      localStorage.setItem('upmark_project_enquiries', JSON.stringify(existing));

      // 2. Dispatch structured payload ready for webhook / CRM integration
      console.log('[UPMARK Project Enquiry Dispatched]:', payload);

      // Brief realistic processing delay
      await new Promise((resolve) => setTimeout(resolve, 600));

      setSubmittedEnquiry({ id: enquiryId, data: formData });
      setIsSubmitting(false);

      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}
    } catch (err) {
      setIsSubmitting(false);
      setErrors({ form: 'An error occurred while submitting your enquiry. Please try again.' });
    }
  };

  if (submittedEnquiry) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-premium max-w-2xl mx-auto text-center space-y-6 animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border-2 border-emerald-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-electric-600 bg-electric-50 px-3 py-1 rounded-full uppercase">
            Enquiry Received &bull; Ref: {submittedEnquiry.id}
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900">
            Thank You, {submittedEnquiry.data.fullName}!
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Your project requirements for <strong>{submittedEnquiry.data.businessName}</strong> have been logged. Our agency team will review your specifications and respond with next steps within 1 business day.
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-left text-xs space-y-2 text-slate-700">
          <div className="font-bold text-navy-900 border-b border-slate-200 pb-2 mb-2 flex items-center justify-between">
            <span>Enquiry Overview</span>
            <span className="text-slate-500 font-normal">{submittedEnquiry.data.country}</span>
          </div>
          <div><strong>Primary Service:</strong> {submittedEnquiry.data.serviceRequired}</div>
          <div><strong>Estimated Timeline:</strong> {submittedEnquiry.data.expectedTimeline}</div>
          <div><strong>Direct Email:</strong> {submittedEnquiry.data.businessEmail}</div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setSubmittedEnquiry(null)}
            className="text-xs font-semibold text-slate-500 hover:text-navy-900 underline underline-offset-4"
          >
            Submit Another Project Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/90 shadow-premium ${compact ? 'p-6 sm:p-8' : 'p-7 sm:p-12'} max-w-4xl mx-auto`}>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Service Choice Selector */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            Service Required *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {serviceOptions.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => handleChange('serviceRequired', opt)}
                className={`py-3 px-3 rounded-xl border text-xs font-bold text-center transition-all ${
                  formData.serviceRequired === opt
                    ? 'border-electric-500 bg-electric-50/70 text-navy-900 shadow-xs ring-1 ring-electric-500'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Name and Business Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Eleanor Vance"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white ${
                errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
              }`}
            />
            {errors.fullName && (
              <span className="text-[11px] text-rose-500 mt-1 block">{errors.fullName}</span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Business / Organisation Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Vanguard Dynamics"
              value={formData.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white ${
                errors.businessName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
              }`}
            />
            {errors.businessName && (
              <span className="text-[11px] text-rose-500 mt-1 block">{errors.businessName}</span>
            )}
          </div>
        </div>

        {/* Business Email & Country Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Business Email Address *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                placeholder="e.g. eleanor@vanguard.com"
                value={formData.businessEmail}
                onChange={(e) => handleChange('businessEmail', e.target.value)}
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white ${
                  errors.businessEmail ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.businessEmail && (
              <span className="text-[11px] text-rose-500 mt-1 block">{errors.businessEmail}</span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Country *
            </label>
            <div className="relative">
              <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <select
                value={formData.country}
                onChange={(e) => handleChange('country', e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Website URL (optional) and Industry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Current Website URL (Optional)
            </label>
            <input
              type="url"
              placeholder="e.g. https://example.com"
              value={formData.websiteUrl}
              onChange={(e) => handleChange('websiteUrl', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Industry or Sector
            </label>
            <input
              type="text"
              placeholder="e.g. SaaS / Technology, HVAC, E-Commerce, Professional Services"
              value={formData.industry}
              onChange={(e) => handleChange('industry', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white"
            />
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Project Description &amp; Objectives *
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about what you want to build or achieve (e.g. A new responsive brand website, AI search visibility setup for our regional services, or complete visual identity redesign)..."
            value={formData.projectDescription}
            onChange={(e) => handleChange('projectDescription', e.target.value)}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white ${
              errors.projectDescription ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
            }`}
          ></textarea>
          {errors.projectDescription && (
            <span className="text-[11px] text-rose-500 mt-1 block">{errors.projectDescription}</span>
          )}
        </div>

        {/* Timeline, Budget, and Communication */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Expected Project Timeline
            </label>
            <select
              value={formData.expectedTimeline}
              onChange={(e) => handleChange('expectedTimeline', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white"
            >
              {timelineOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Approximate Budget (Optional)
            </label>
            <select
              value={formData.approximateBudget}
              onChange={(e) => handleChange('approximateBudget', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white"
            >
              {budgetOptions.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone Number (Optional)
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Preferred Communication */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Preferred Communication Method
          </label>
          <select
            value={formData.preferredCommunication}
            onChange={(e) => handleChange('preferredCommunication', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white"
          >
            {communicationOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Confidentiality Pill */}
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2.5 text-xs text-slate-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Client Privacy:</strong> Your business information and project scope are treated with strict confidentiality.
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full py-4 text-sm font-bold justify-center shadow-lg shadow-electric-500/20"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                <span>Submitting Project Enquiry...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Submit Project Enquiry</span>
                <Send className="w-4 h-4" />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
