import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Mail, 
  Phone,
  Building,
  AlertCircle,
  MessageSquare,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { ProjectEnquiryData } from '../../types';

interface ProjectEnquiryFormProps {
  initialService?: string;
  compact?: boolean;
}

// Complete list of international countries with calling codes
const INTERNATIONAL_COUNTRIES = [
  { name: 'United States', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Canada', code: '+1' },
  { name: 'Australia', code: '+61' },
  { name: 'United Arab Emirates', code: '+971' },
  { name: 'India', code: '+91' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Singapore', code: '+65' },
  { name: 'Netherlands', code: '+31' },
  { name: 'Switzerland', code: '+41' },
  { name: 'Ireland', code: '+353' },
  { name: 'New Zealand', code: '+64' },
  { name: 'Saudi Arabia', code: '+966' },
  { name: 'Qatar', code: '+974' },
  { name: 'Spain', code: '+34' },
  { name: 'Italy', code: '+39' },
  { name: 'Sweden', code: '+46' },
  { name: 'Norway', code: '+47' },
  { name: 'Denmark', code: '+45' },
  { name: 'South Africa', code: '+27' },
  { name: 'Other International', code: '+' }
];

export const ProjectEnquiryForm: React.FC<ProjectEnquiryFormProps> = ({ 
  initialService = '', 
  compact = false 
}) => {
  const [searchParams] = useSearchParams();
  const queryService = searchParams.get('service') || initialService;

  const getInitialServices = (param: string): string[] => {
    const lower = param.toLowerCase();
    if (lower.includes('aeo') || lower.includes('answer')) return ['AEO Optimisation'];
    if (lower.includes('creative') || lower.includes('brand')) return ['Creative Agency'];
    if (lower.includes('multiple')) return ['Web Development', 'AEO Optimisation', 'Creative Agency'];
    if (lower.includes('web')) return ['Web Development'];
    return ['Web Development'];
  };

  const [formData, setFormData] = useState<ProjectEnquiryData>({
    fullName: '',
    businessEmail: '',
    country: '',
    countryCode: '+1',
    phoneNumber: '',
    companyName: '',
    websiteUrl: '',
    servicesRequired: getInitialServices(queryService),
    projectDescription: '',
    approximateBudget: 'Custom Project Discussion',
    expectedTimeline: '1–2 Months',
    preferredCommunication: 'Email & Scheduled Video Call',
    privacyConsent: false
  });

  const [botField, setBotField] = useState<string>(''); // Honeypot anti-spam
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [enquiryRef, setEnquiryRef] = useState<string>('');

  const serviceChoices = [
    'Web Development',
    'AEO Optimisation',
    'Creative Agency',
    'Multiple Services'
  ];

  const handleServiceToggle = (choice: string) => {
    setFormData((prev) => {
      let current = [...prev.servicesRequired];
      if (choice === 'Multiple Services') {
        return {
          ...prev,
          servicesRequired: ['Web Development', 'AEO Optimisation', 'Creative Agency', 'Multiple Services']
        };
      }
      if (current.includes(choice)) {
        current = current.filter((s) => s !== choice && s !== 'Multiple Services');
      } else {
        current.push(choice);
      }
      if (errors.servicesRequired) {
        setErrors((e) => {
          const next = { ...e };
          delete next.servicesRequired;
          return next;
        });
      }
      return { ...prev, servicesRequired: current };
    });
  };

  const handleCountryChange = (countryName: string) => {
    const matched = INTERNATIONAL_COUNTRIES.find((c) => c.name === countryName);
    setFormData((prev) => ({
      ...prev,
      country: countryName,
      countryCode: matched ? matched.code : prev.countryCode
    }));
    if (errors.country) {
      setErrors((e) => {
        const next = { ...e };
        delete next.country;
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }
    if (!formData.companyName.trim()) {
      errs.companyName = 'Company or business name is required.';
    }
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      errs.businessEmail = 'Please provide a valid email address.';
    }
    if (!formData.country) {
      errs.country = 'Please select your country.';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number with country code is required.';
    }
    if (formData.servicesRequired.length === 0) {
      errs.servicesRequired = 'Please select at least one required service.';
    }
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe your project requirements and objectives.';
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must agree to the privacy policy before submitting.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        _botField: botField
      };

      // Real server-side submission endpoint
      // Priority 1: Vercel serverless function /api/enquiry
      // Priority 2: Custom environment form endpoint (VITE_FORM_ENDPOINT) if configured
      const endpoint = (import.meta as any).env?.VITE_FORM_ENDPOINT || '/api/enquiry';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== false) {
        setEnquiryRef(data.enquiryId || `UPM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
        setSubmissionSuccess(true);
      } else {
        throw new Error(data.error || 'Server rejected submission.');
      }
    } catch (err: any) {
      console.warn('[Enquiry Submission Notice]:', err);
      // Honest failure state with immediate direct fallback options
      setSubmissionError(
        'We were unable to deliver your enquiry automatically to our email queue. Please email us directly at divyesh@upmarkgrowth.com or message via WhatsApp at +91 9653397875 with your project details.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS CONFIRMATION STATE
  if (submissionSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft max-w-2xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border-2 border-emerald-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-electric-600 bg-electric-50 px-3.5 py-1.5 rounded-full uppercase">
            Enquiry Received &bull; Ref: {enquiryRef}
          </span>

          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900">
            Thank You, {formData.fullName}!
          </h3>

          <p className="text-sm sm:text-base text-slate-700 max-w-lg mx-auto leading-relaxed">
            Thank you for reaching out to UPMARK. Your project enquiry has been received. We&apos;ll review your requirements and get back to you.
          </p>
        </div>

        {/* Verified Submission Card */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-left text-xs space-y-2.5 text-slate-700">
          <div className="font-bold text-navy-900 border-b border-slate-200 pb-2 flex items-center justify-between">
            <span>Enquiry Summary</span>
            <span className="text-slate-500 font-normal">{formData.country}</span>
          </div>
          <div><strong>Company / Organisation:</strong> {formData.companyName}</div>
          <div><strong>Business Email:</strong> {formData.businessEmail}</div>
          <div><strong>Contact Phone:</strong> {formData.countryCode} {formData.phoneNumber}</div>
          <div><strong>Services Selected:</strong> {formData.servicesRequired.join(', ')}</div>
          <div><strong>Notification Target:</strong> divyesh@upmarkgrowth.com</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setSubmissionSuccess(false);
              setFormData({
                fullName: '',
                businessEmail: '',
                country: '',
                countryCode: '+1',
                phoneNumber: '',
                companyName: '',
                websiteUrl: '',
                servicesRequired: ['Web Development'],
                projectDescription: '',
                privacyConsent: false
              });
            }}
            className="text-xs font-semibold text-slate-600 hover:text-navy-900 underline underline-offset-4"
          >
            Submit Another Project Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/90 shadow-soft ${compact ? 'p-6 sm:p-8' : 'p-7 sm:p-12'} max-w-4xl mx-auto`}>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Anti-spam honeypot (hidden from human users) */}
        <input
          type="text"
          name="_botField"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          style={{ display: 'none' }}
          aria-hidden="true"
        />

        {/* Failure Banner */}
        {submissionError && (
          <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm space-y-3">
            <div className="flex items-start gap-2.5 font-bold">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <span>{submissionError}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`mailto:divyesh@upmarkgrowth.com?subject=Project Enquiry from ${encodeURIComponent(formData.companyName || formData.fullName)}&body=Name: ${encodeURIComponent(formData.fullName)}%0D%0ACompany: ${encodeURIComponent(formData.companyName)}%0D%0AEmail: ${encodeURIComponent(formData.businessEmail)}%0D%0APhone: ${encodeURIComponent(formData.countryCode + ' ' + formData.phoneNumber)}%0D%0AServices: ${encodeURIComponent(formData.servicesRequired.join(', '))}%0D%0A%0D%0AProject Requirements:%0D%0A${encodeURIComponent(formData.projectDescription)}`}
                className="btn-primary py-2 px-4 text-xs font-bold inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Pre-filled Email to divyesh@upmarkgrowth.com</span>
              </a>
              <a
                href="https://wa.me/919653397875"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-2 px-4 text-xs font-bold inline-flex items-center gap-1.5 text-emerald-700 border-emerald-300 hover:bg-emerald-50"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Message on WhatsApp (+91 9653397875)</span>
              </a>
            </div>
          </div>
        )}

        {/* Service Choice Multi-Selector */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Services Required * <span className="font-normal text-slate-400 normal-case">(select all that apply)</span>
            </label>
            <span className="text-[11px] text-slate-400">Multiple selection enabled</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {serviceChoices.map((choice) => {
              const isSelected = formData.servicesRequired.includes(choice);
              return (
                <button
                  type="button"
                  key={choice}
                  onClick={() => handleServiceToggle(choice)}
                  className={`py-3 px-3 rounded-xl border text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'border-electric-500 bg-electric-50/80 text-navy-900 ring-2 ring-electric-500 shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[10px] ${
                    isSelected ? 'bg-electric-600 text-white border-electric-600' : 'border-slate-300 bg-white'
                  }`}>
                    {isSelected && '✓'}
                  </span>
                  <span>{choice}</span>
                </button>
              );
            })}
          </div>
          {errors.servicesRequired && (
            <span className="text-[11px] text-rose-500 mt-1 block">{errors.servicesRequired}</span>
          )}
        </div>

        {/* Name and Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. John Miller"
              value={formData.fullName}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                if (errors.fullName) setErrors((err) => ({ ...err, fullName: '' }));
              }}
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
              Company / Business Name *
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="e.g. Apex Mechanical Solutions"
                value={formData.companyName}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, companyName: e.target.value }));
                  if (errors.companyName) setErrors((err) => ({ ...err, companyName: '' }));
                }}
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white ${
                  errors.companyName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.companyName && (
              <span className="text-[11px] text-rose-500 mt-1 block">{errors.companyName}</span>
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
                placeholder="e.g. contact@business.com"
                value={formData.businessEmail}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, businessEmail: e.target.value }));
                  if (errors.businessEmail) setErrors((err) => ({ ...err, businessEmail: '' }));
                }}
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
                onChange={(e) => handleCountryChange(e.target.value)}
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white ${
                  errors.country ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                }`}
              >
                <option value="">-- Select Your Country --</option>
                {INTERNATIONAL_COUNTRIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>
            </div>
            {errors.country && (
              <span className="text-[11px] text-rose-500 mt-1 block">{errors.country}</span>
            )}
          </div>
        </div>

        {/* Phone Number with Calling Code & Optional Website */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone Number (with Country Code) *
            </label>
            <div className="flex gap-2">
              <span className="px-3 py-2.5 rounded-xl border border-slate-300 text-sm font-mono text-slate-600 bg-slate-50 shrink-0">
                {formData.countryCode || '+'}
              </span>
              <div className="relative flex-1">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="tel"
                  placeholder="e.g. 555 123 4567"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }));
                    if (errors.phoneNumber) setErrors((err) => ({ ...err, phoneNumber: '' }));
                  }}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white ${
                    errors.phoneNumber ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                  }`}
                />
              </div>
            </div>
            {errors.phoneNumber && (
              <span className="text-[11px] text-rose-500 mt-1 block">{errors.phoneNumber}</span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Current Website URL (Optional)
            </label>
            <input
              type="url"
              placeholder="e.g. https://yourbusiness.com"
              value={formData.websiteUrl}
              onChange={(e) => setFormData((prev) => ({ ...prev, websiteUrl: e.target.value }))}
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
            placeholder="Tell us about your project requirements, goals and what you would like UPMARK to deliver (e.g. New company web platform, AEO optimization audit, or full brand identity design)..."
            value={formData.projectDescription}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, projectDescription: e.target.value }));
              if (errors.projectDescription) setErrors((err) => ({ ...err, projectDescription: '' }));
            }}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 bg-white ${
              errors.projectDescription ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
            }`}
          ></textarea>
          {errors.projectDescription && (
            <span className="text-[11px] text-rose-500 mt-1 block">{errors.projectDescription}</span>
          )}
        </div>

        {/* Privacy Consent Checkbox (Strictly NOT pre-ticked) */}
        <div className="pt-1">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.privacyConsent}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, privacyConsent: e.target.checked }));
                if (errors.privacyConsent) setErrors((err) => ({ ...err, privacyConsent: '' }));
              }}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-electric-600 focus:ring-electric-500 cursor-pointer"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              I consent to UPMARK processing my submitted details to evaluate my project requirements and respond with a proposal in accordance with the{' '}
              <Link to="/privacy-policy" className="text-electric-600 font-semibold hover:underline" target="_blank">
                Privacy Policy
              </Link>
              . We do not sell or share business details.
            </span>
          </label>
          {errors.privacyConsent && (
            <span className="text-[11px] text-rose-500 mt-1 block">{errors.privacyConsent}</span>
          )}
        </div>

        {/* Security & Direct Delivery Note */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Direct delivery to <strong>divyesh@upmarkgrowth.com</strong> &bull; Mumbai, India
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">256-bit SSL</span>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full py-4 text-sm font-bold justify-center shadow-lg shadow-electric-500/20"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                <span>Transmitting Project Enquiry...</span>
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
