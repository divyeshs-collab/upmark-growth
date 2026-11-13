import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IconArrowRight, IconArrowUpRight, IconCheck, IconAlert } from '../common/Icons';
import { OfficialServiceOption, ProjectEnquiryData } from '../../types';

interface ProjectEnquiryFormProps {
  initialService?: string;
}

const SERVICE_OPTIONS: OfficialServiceOption[] = [
  'Website Development',
  'E-commerce Development',
  'Custom Web Applications',
  'Business Dashboards',
  'SEO',
  'AEO',
  'GEO',
  'Website Maintenance',
  'Other',
];

const BUDGET_OPTIONS: string[] = [
  'Discuss a Custom Budget',
  '$2,500 to $5,000 USD',
  '$5,000 to $10,000 USD',
  '$10,000 to $25,000 USD',
  '$25,000+ USD',
  'Ongoing Monthly Retainer',
];

const RAW_ENDPOINT =
  (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_ENQUIRY_ENDPOINT || '';

const getSafeHttpsEndpoint = (url: string): string => {
  if (!url) return '/api/enquiry';
  if (url.startsWith('/')) return url;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' ? parsed.toString() : '/api/enquiry';
  } catch {
    return '/api/enquiry';
  }
};

const ENQUIRY_ENDPOINT = getSafeHttpsEndpoint(RAW_ENDPOINT);

const sanitizeText = (value: string, maxLen: number): string => {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').slice(0, maxLen);
};

const isSafeHttpUrl = (raw: string): boolean => {
  const trimmed = raw.trim();
  if (!trimmed) return true;
  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(candidate);
    return (
      (parsed.protocol === 'http:' || parsed.protocol === 'https:') &&
      /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(parsed.hostname)
    );
  } catch {
    return false;
  }
};

const generateSecureReferenceId = (): string => {
  const year = new Date().getFullYear();
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const buf = new Uint32Array(1);
    window.crypto.getRandomValues(buf);
    const num = 1000 + (buf[0] % 9000);
    return `UPM-${year}-${num}`;
  }
  return `UPM-${year}-1042`;
};

export const ProjectEnquiryForm: React.FC<ProjectEnquiryFormProps> = ({ initialService = '' }) => {
  const [searchParams] = useSearchParams();
  const queryService = searchParams.get('service') || initialService;

  const matchServiceOption = (raw: string): OfficialServiceOption => {
    if (!raw) return 'Website Development';
    const lower = raw.toLowerCase().slice(0, 64);
    if (lower.includes('e-commerce') || lower.includes('ecommerce')) return 'E-commerce Development';
    if (lower.includes('dashboard')) return 'Business Dashboards';
    if (lower.includes('custom web') || lower.includes('web app')) return 'Custom Web Applications';
    if (lower === 'seo' || lower.includes('search engine')) return 'SEO';
    if (lower === 'aeo' || lower.includes('answer engine')) return 'AEO';
    if (lower === 'geo' || lower.includes('generative engine')) return 'GEO';
    if (lower.includes('maintenance') || lower.includes('support')) return 'Website Maintenance';
    if (lower.includes('other')) return 'Other';
    return 'Website Development';
  };

  const [formData, setFormData] = useState<ProjectEnquiryData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    websiteUrl: '',
    serviceRequired: matchServiceOption(queryService),
    estimatedBudget: 'Discuss a Custom Budget',
    projectDescription: '',
  });

  // Anti-bot honeypot field
  const [honeypot, setHoneypot] = useState<string>('');

  useEffect(() => {
    if (queryService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: matchServiceOption(queryService),
      }));
    }
  }, [queryService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedRecord, setSubmittedRecord] = useState<{
    id: string;
    deliveryMode: 'remote-webhook' | 'local-staging';
    data: ProjectEnquiryData;
  } | null>(null);

  const handleChange = (field: keyof ProjectEnquiryData, value: string) => {
    const limits: Record<keyof ProjectEnquiryData, number> = {
      fullName: 100,
      businessEmail: 150,
      companyName: 120,
      websiteUrl: 250,
      serviceRequired: 80,
      estimatedBudget: 80,
      projectDescription: 2000,
    };
    const cleaned = sanitizeText(value, limits[field]);
    setFormData((prev) => ({ ...prev, [field]: cleaned }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (submitError) setSubmitError(null);
  };

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.businessEmail.trim()) {
      nextErrors.businessEmail = 'Please enter your business email address.';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.businessEmail.trim())) {
      nextErrors.businessEmail = 'Please enter a valid email address.';
    }
    if (!formData.companyName.trim()) {
      nextErrors.companyName = 'Please enter your company name.';
    }
    if (formData.websiteUrl && formData.websiteUrl.trim().length > 0 && !isSafeHttpUrl(formData.websiteUrl)) {
      nextErrors.websiteUrl = 'Please enter a valid http/https website URL.';
    }
    if (!SERVICE_OPTIONS.includes(formData.serviceRequired)) {
      nextErrors.serviceRequired = 'Please select a valid service.';
    }
    if (!BUDGET_OPTIONS.includes(formData.estimatedBudget)) {
      nextErrors.estimatedBudget = 'Please select a valid budget option.';
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
      nextErrors.projectDescription = 'Please briefly describe what you need (at least 10 characters).';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Honeypot check: silently reject automated bot fills
    if (honeypot.trim().length > 0) {
      return;
    }

    if (!validate()) return;

    // Rate-limit check (15s cooldown in sessionStorage without storing PII)
    try {
      const lastTs = Number(sessionStorage.getItem('upmark_last_enquiry_ts') || '0');
      if (Date.now() - lastTs < 15000) {
        setSubmitError('Please wait a few seconds before submitting another enquiry.');
        return;
      }
    } catch {
      // Ignore storage access errors in private browsing
    }

    setIsSubmitting(true);

    const referenceId = generateSecureReferenceId();
    const sanitizedData: ProjectEnquiryData = {
      fullName: formData.fullName.trim(),
      businessEmail: formData.businessEmail.trim(),
      companyName: formData.companyName.trim(),
      websiteUrl: formData.websiteUrl?.trim() || '',
      serviceRequired: formData.serviceRequired,
      estimatedBudget: formData.estimatedBudget,
      projectDescription: formData.projectDescription.trim(),
    };

    const payload = {
      referenceId,
      submittedAt: new Date().toISOString(),
      ...sanitizedData,
    };

    try {
      try {
        sessionStorage.setItem('upmark_last_enquiry_ts', String(Date.now()));
      } catch {
        // Ignore storage errors
      }

      let remoteConfigured = false;
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        const response = await fetch(ENQUIRY_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
          credentials: 'omit',
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const json = await response.json().catch(() => null);
          if (json && json.configured === true) {
            remoteConfigured = true;
          }
        }
      } catch {
        // Fallback to local-staging email brief if running locally without serverless function
      }

      setSubmittedRecord({
        id: referenceId,
        deliveryMode: remoteConfigured ? 'remote-webhook' : 'local-staging',
        data: sanitizedData,
      });
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? `Unable to transmit enquiry (${err.message}). Please try again or email hello@upmarkgrowth.com.`
          : 'An unexpected error occurred. Please email hello@upmarkgrowth.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedRecord) {
    const mailtoSubject = encodeURIComponent(
      `Project Enquiry [${submittedRecord.id}]: ${submittedRecord.data.companyName} (${submittedRecord.data.serviceRequired})`
    );
    const mailtoBody = encodeURIComponent(
      `Reference: ${submittedRecord.id}\nName: ${submittedRecord.data.fullName}\nCompany: ${submittedRecord.data.companyName}\nEmail: ${submittedRecord.data.businessEmail}\nWebsite: ${submittedRecord.data.websiteUrl || 'N/A'}\nService Required: ${submittedRecord.data.serviceRequired}\nEstimated Budget: ${submittedRecord.data.estimatedBudget}\n\nProject Description:\n${submittedRecord.data.projectDescription}`
    );

    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1.5">
            <div className="font-mono text-xs uppercase tracking-wider text-[#0D5BEF] font-semibold">
              Enquiry Logged &bull; Ref: {submittedRecord.id}
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#051329]">
              Thank you, {submittedRecord.data.fullName}.
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Your project enquiry for <strong>{submittedRecord.data.companyName}</strong> has been prepared.
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#0D5BEF] text-white flex items-center justify-center shrink-0">
            <IconCheck className="w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg bg-[#F8FAFC] border border-slate-200 p-5 text-sm text-slate-700">
          <div>
            <span className="font-mono text-xs uppercase text-slate-400 block">Company</span>
            <span className="font-semibold text-[#051329]">{submittedRecord.data.companyName}</span>
          </div>
          <div>
            <span className="font-mono text-xs uppercase text-slate-400 block">Business Email</span>
            <span className="font-semibold text-[#051329]">{submittedRecord.data.businessEmail}</span>
          </div>
          <div>
            <span className="font-mono text-xs uppercase text-slate-400 block">Service Required</span>
            <span className="font-semibold text-[#051329]">{submittedRecord.data.serviceRequired}</span>
          </div>
          <div>
            <span className="font-mono text-xs uppercase text-slate-400 block">Estimated Budget</span>
            <span className="font-semibold text-[#051329]">{submittedRecord.data.estimatedBudget}</span>
          </div>
        </div>

        {submittedRecord.deliveryMode === 'local-staging' && (
          <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-5 text-sm text-slate-600 space-y-2.5">
            <div className="font-semibold text-[#051329]">
              Transmit Formatted Project Brief via Email
            </div>
            <p>
              Click below to send this formatted project brief directly to our team:
            </p>
            <a
              href={`mailto:hello@upmarkgrowth.com?subject=${mailtoSubject}&body=${mailtoBody}`}
              className="btn-primary py-2.5 px-5 text-sm"
            >
              <span>Send Enquiry via Email</span>
              <IconArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        <div>
          <button
            type="button"
            onClick={() => setSubmittedRecord(null)}
            className="text-sm font-medium text-slate-600 hover:text-[#051329] underline underline-offset-4"
          >
            &larr; Submit Another Project Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="bg-[#051329] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <span className="font-heading text-sm font-semibold text-white">
          Project Enquiry &amp; Scope Request
        </span>
        <span className="font-mono text-xs text-[#3898FF]">
          Response Within 1 Business Day
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 space-y-6">
        {/* Hidden Honeypot Input for Bot Mitigation */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="enquiry-company-confirm">Do not fill this field</label>
          <input
            id="enquiry-company-confirm"
            name="companyWebsiteConfirm"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {submitError && (
          <div
            role="alert"
            className="p-4 rounded-lg border border-rose-300 bg-rose-50 text-rose-900 text-sm flex items-start gap-3"
          >
            <IconAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>{submitError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="enquiry-fullName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              Full Name <span className="text-[#0D5BEF]">*</span>
            </label>
            <input
              id="enquiry-fullName"
              name="fullName"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              placeholder="Claire Sterling"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#051329] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0D5BEF] ${errors.fullName ? 'border-rose-500 bg-rose-50/40' : 'border-slate-200'
                }`}
            />
            {errors.fullName && (
              <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="enquiry-businessEmail"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              Business Email <span className="text-[#0D5BEF]">*</span>
            </label>
            <input
              id="enquiry-businessEmail"
              name="businessEmail"
              type="email"
              required
              maxLength={150}
              autoComplete="email"
              placeholder="claire@company.com"
              value={formData.businessEmail}
              onChange={(e) => handleChange('businessEmail', e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#051329] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0D5BEF] ${errors.businessEmail ? 'border-rose-500 bg-rose-50/40' : 'border-slate-200'
                }`}
            />
            {errors.businessEmail && (
              <p className="text-xs text-rose-600 mt-1">{errors.businessEmail}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="enquiry-companyName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              Company Name <span className="text-[#0D5BEF]">*</span>
            </label>
            <input
              id="enquiry-companyName"
              name="companyName"
              type="text"
              required
              maxLength={120}
              autoComplete="organization"
              placeholder="Sterling Logistics Ltd"
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#051329] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0D5BEF] ${errors.companyName ? 'border-rose-500 bg-rose-50/40' : 'border-slate-200'
                }`}
            />
            {errors.companyName && (
              <p className="text-xs text-rose-600 mt-1">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="enquiry-websiteUrl"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              Website URL <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id="enquiry-websiteUrl"
              name="websiteUrl"
              type="url"
              maxLength={250}
              placeholder="https://www.example.com"
              value={formData.websiteUrl}
              onChange={(e) => handleChange('websiteUrl', e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#051329] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0D5BEF] ${errors.websiteUrl ? 'border-rose-500 bg-rose-50/40' : 'border-slate-200'
                }`}
            />
            {errors.websiteUrl && (
              <p className="text-xs text-rose-600 mt-1">{errors.websiteUrl}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="enquiry-serviceRequired"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              Service Required <span className="text-[#0D5BEF]">*</span>
            </label>
            <select
              id="enquiry-serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={(e) =>
                handleChange('serviceRequired', e.target.value as OfficialServiceOption)
              }
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-[#051329] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0D5BEF]"
            >
              {SERVICE_OPTIONS.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="enquiry-estimatedBudget"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              Estimated Budget <span className="text-[#0D5BEF]">*</span>
            </label>
            <select
              id="enquiry-estimatedBudget"
              name="estimatedBudget"
              value={formData.estimatedBudget}
              onChange={(e) => handleChange('estimatedBudget', e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-[#051329] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0D5BEF]"
            >
              {BUDGET_OPTIONS.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="enquiry-projectDescription"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
          >
            Project Description <span className="text-[#0D5BEF]">*</span>
          </label>
          <textarea
            id="enquiry-projectDescription"
            name="projectDescription"
            rows={4}
            required
            maxLength={2000}
            placeholder="Briefly describe your business, what you want to build or improve, and your desired timeline..."
            value={formData.projectDescription}
            onChange={(e) => handleChange('projectDescription', e.target.value)}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#051329] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0D5BEF] ${errors.projectDescription ? 'border-rose-500 bg-rose-50/40' : 'border-slate-200'
              }`}
          />
          {errors.projectDescription && (
            <p className="text-xs text-rose-600 mt-1">{errors.projectDescription}</p>
          )}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200">
          <div className="text-xs sm:text-sm text-slate-500">
            Direct email:{' '}
            <a href="mailto:hello@upmarkgrowth.com" className="text-[#051329] font-semibold underline">
              hello@upmarkgrowth.com
            </a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary py-3 px-7 text-sm shrink-0"
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Discuss Your Project</span>
                <IconArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
