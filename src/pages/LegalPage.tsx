import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FileText, Lock, Cookie, ShieldCheck, Mail, Globe, MapPin } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const getInitialTab = () => {
    if (location.pathname.includes('terms')) return 'terms';
    if (location.pathname.includes('cookies')) return 'cookies';
    return 'privacy';
  };

  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies'>(getInitialTab);

  const getPageTitle = () => {
    if (activeTab === 'terms') return 'Terms of Service | UPMARK';
    if (activeTab === 'cookies') return 'Cookie Policy | UPMARK';
    return 'Privacy Policy | UPMARK';
  };

  return (
    <div className="py-12 sm:py-16">
      <SEO
        title={getPageTitle()}
        description="UPMARK agency governance, privacy practices, data handling and terms of service."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 text-slate-700">
            Legal &amp; Transparency Center
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900">
            UPMARK Policies &amp; Governance
          </h1>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            UPMARK &bull; Global Digital &amp; Creative Agency &bull; Mumbai, India
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 border-b border-slate-200 pb-4">
          <Link
            to="/privacy-policy"
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy</span>
          </Link>

          <Link
            to="/terms"
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </Link>

          <Link
            to="/cookies"
            onClick={() => setActiveTab('cookies')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'cookies'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
            }`}
          >
            <Cookie className="w-4 h-4" />
            <span>Cookie Policy</span>
          </Link>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft text-slate-700 text-sm leading-relaxed space-y-8">
          {/* PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900">
                  Privacy Policy
                </h2>
                <span className="text-xs text-slate-400">Effective Date: November 2026 &bull; Location: Mumbai, India</span>
              </div>

              <p>
                UPMARK – Global Digital &amp; Creative Agency (&ldquo;UPMARK&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an independent agency based in Mumbai, India, serving business clients internationally. We take data protection seriously. This Privacy Policy outlines what information we collect through our website, how that data is processed, and your rights concerning your personal and commercial data.
              </p>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  1. Information We Collect
                </h3>
                <p>
                  When you submit an enquiry through our Project Enquiry form or communicate with us directly via email or phone, we collect the following information:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                  <li><strong>Contact Details:</strong> Your full name, business email address, phone number with country calling code, and country of operation.</li>
                  <li><strong>Business Details:</strong> Company or organization name, existing website URL, and industry sector.</li>
                  <li><strong>Project Requirements:</strong> Scope of services required (Web Development, AEO Optimisation, Creative Agency), approximate budget, expected delivery timeline, and project description.</li>
                  <li><strong>Technical Usage Data:</strong> Standard server logs, IP addresses, browser types, and operating systems collected automatically for site security and performance.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  2. Purpose of Processing
                </h3>
                <p>
                  We collect and process your information exclusively for legitimate commercial purposes:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                  <li>Evaluating your project specifications and preparing customized proposals and cost estimates.</li>
                  <li>Communicating with you regarding scheduled remote discovery calls, scope clarification, and milestone updates.</li>
                  <li>Drafting Statements of Work and contractual project agreements.</li>
                  <li>Ensuring the technical security and reliable operation of our website.</li>
                </ul>
                <p className="font-semibold text-navy-900">
                  We do not sell, rent, lease, or monetize client or prospect data with third-party data brokers or marketing lists under any circumstances.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  3. Third-Party Service Providers &amp; International Processing
                </h3>
                <p>
                  UPMARK operates from Mumbai, India, and collaborates with clients internationally (including the United States, United Kingdom, Canada, Australia, and the UAE). We utilize trusted, enterprise-grade cloud infrastructure to operate our agency, which may process data on secure servers:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                  <li><strong>Hosting &amp; Edge Delivery:</strong> Vercel Inc. (global edge CDN and serverless functions).</li>
                  <li><strong>Email &amp; Communications:</strong> Google Workspace / transactional email gateways for responding to project enquiries.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  4. Data Security &amp; Retention
                </h3>
                <p>
                  All data transmitted through our website is encrypted using 256-bit Transport Layer Security (HTTPS). Form submissions and project records are retained only as long as necessary to fulfill project evaluation, deliver agreed agency services, or maintain accounting records as required by applicable laws in India.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  5. Your Rights &amp; Privacy Contact
                </h3>
                <p>
                  You have the right to request access to the personal data we hold about you, request corrections to inaccurate details, or request permanent deletion of your project enquiry records from our active systems at any time.
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-xs">
                  <div className="font-bold text-navy-900">Dedicated Privacy Enquiries Contact:</div>
                  <div>Email: <a href="mailto:ghshirva@gmail.com" className="text-electric-600 underline font-semibold">ghshirva@gmail.com</a></div>
                  <div>Agency Operations Base: Mumbai, India</div>
                </div>
              </div>
            </div>
          )}

          {/* TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900">
                  Terms of Service
                </h2>
                <span className="text-xs text-slate-400">Governing Standard: Commercial Project Agreements &bull; Mumbai, India</span>
              </div>

              <p>
                These Terms of Service govern your access to the UPMARK website (https://www.upmarkgrowth.com/) and define the preliminary framework for commissioning our Web Development, Answer Engine Optimisation (AEO), and Creative Agency services.
              </p>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  1. Website Use &amp; Intellectual Property of Agency Materials
                </h3>
                <p>
                  The content, design systems, vector iconography, logotypes, brand assets, and copywriting displayed on this website are the proprietary property of UPMARK. You may view and reference our materials for the purpose of evaluating our agency services. You may not scrape, reproduce, replicate, or re-brand our website code or agency assets without prior written consent.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  2. Service Enquiries &amp; Individual Project Agreements
                </h3>
                <p>
                  Submitting a project enquiry or receiving an estimate does not constitute a binding contract to provide services. Actual project engagements, milestone deliverables, specific timelines, and payment terms are governed by an individualized Statement of Work (SOW) or written client agreement signed by both parties.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  3. Deliverables &amp; Client Intellectual Property Ownership
                </h3>
                <p>
                  Upon completion of agreed project milestones and full settlement of corresponding invoices, all bespoke source code, website architectures, vector brand marks, design guidelines, and structured schemas created specifically for your project become the exclusive intellectual property of your business.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  4. AEO Technical Realities &amp; No Ranking Guarantees
                </h3>
                <p>
                  Answer Engine Optimisation is an evolving technical field. UPMARK optimizes crawlability, structured entity data, schema standards, and answer-focused content. We do not guarantee specific AI recommendations or automated ranking results from external AI platforms (ChatGPT, Google AI, Copilot, Perplexity), as their synthesis algorithms are proprietary and variable.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  5. Showcase Projects &amp; Founder-Led Work
                </h3>
                <p>
                  Projects highlighted in our portfolio (such as URBANYX and FETCHR) are founder-led initiatives created to demonstrate our internal design, branding, and technical capabilities. They are presented transparently as founder-led projects and are not represented as third-party client performance data.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  6. Limitation of Liability &amp; Jurisdiction
                </h3>
                <p>
                  In no event shall UPMARK be liable for any indirect, incidental, or consequential damages resulting from the use of this website. All commercial agreements and terms shall be construed in accordance with the laws of India, subject to the jurisdiction of the courts in Mumbai, India.
                </p>
              </div>
            </div>
          )}

          {/* COOKIE POLICY */}
          {activeTab === 'cookies' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900">
                  Cookie Policy
                </h2>
                <span className="text-xs text-slate-400">Cookie Management &amp; Technical Preferences</span>
              </div>

              <p>
                This Cookie Policy explains how UPMARK uses cookies and similar technologies when you visit our website at https://www.upmarkgrowth.com/.
              </p>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  1. What Are Cookies?
                </h3>
                <p>
                  Cookies are small data files placed on your browser or device by websites you visit. They are commonly used to remember preferences, enable website security, and ensure seamless navigation.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  2. Categories of Cookies We Use
                </h3>
                <div className="space-y-3 pt-1">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-navy-900 block font-heading text-sm mb-1">
                      A. Strictly Essential Technical Cookies (Always Active)
                    </strong>
                    <p className="text-xs text-slate-600">
                      These cookies are necessary for the website to function properly. They enable routing, security tokens, anti-spam validation on forms, and session state. They do not store personally identifiable data.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-navy-900 block font-heading text-sm mb-1">
                      B. Performance &amp; Analytics Cookies (Optional)
                    </strong>
                    <p className="text-xs text-slate-600">
                      Where configured, these cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. All information collected is aggregated and anonymous. We do not activate non-essential tracking without proper visitor consent.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-navy-900 block font-heading text-sm mb-1">
                      C. Marketing &amp; Advertising Cookies
                    </strong>
                    <p className="text-xs text-slate-600">
                      UPMARK does not employ cross-site tracking cookies, behavioral remarketing cookies, or third-party ad networks on this website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-900">
                  3. Managing Your Cookie Preferences
                </h3>
                <p>
                  You can set or modify your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though access to some functionality may be limited.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                For questions regarding cookies or website technology, email <a href="mailto:ghshirva@gmail.com" className="text-electric-600 underline font-semibold">ghshirva@gmail.com</a>.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
