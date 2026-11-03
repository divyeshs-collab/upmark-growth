import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, Lock, Cookie, Globe } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const getInitialTab = () => {
    if (location.pathname.includes('terms')) return 'terms';
    if (location.pathname.includes('cookies')) return 'cookies';
    return 'privacy';
  };

  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies'>(getInitialTab);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 text-slate-700">
            Legal &amp; Compliance Center
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900">
            UPMARK Governance &amp; Policies
          </h1>
          <p className="text-sm text-slate-500">
            Global Digital &amp; Creative Agency &bull; Governing Standard: International Commercial Practice
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </button>

          <button
            onClick={() => setActiveTab('cookies')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'cookies'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
            }`}
          >
            <Cookie className="w-4 h-4" />
            <span>Cookie Policy</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-soft text-slate-700 text-sm leading-relaxed space-y-6">
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Privacy Policy
              </h2>
              <p>
                UPMARK – Global Digital &amp; Creative Agency (&ldquo;UPMARK&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy of our website visitors, clients, and prospective international partners. This Privacy Policy outlines our procedures concerning the collection, usage, and safeguarding of project inquiry data.
              </p>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                1. Information We Collect
              </h3>
              <p>
                We collect business information that you voluntarily provide when submitting a project enquiry or contacting us. This information may include:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Your full name, business email address, and optional phone number</li>
                <li>Your business or organisation name, website URL, country, and industry</li>
                <li>Project scope description, approximate budget range, and timeline expectations</li>
              </ul>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                2. How We Use Your Information
              </h3>
              <p>
                Information submitted to UPMARK is strictly utilized to evaluate your project requirements, prepare customized proposals and quotations, deliver remote consultations, and coordinate project delivery. We do not sell, rent, or distribute business information to third-party data brokers under any circumstances.
              </p>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                3. Asset &amp; Intellectual Property Ownership
              </h3>
              <p>
                Upon completion of agreed project milestones and settlement of invoices, all bespoke design files, source codes, brand assets, and custom schemas developed for your project become the intellectual property of your business.
              </p>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                4. Contact Information
              </h3>
              <p>
                If you have questions regarding this Privacy Policy or wish to request data deletion, contact us at: <code>privacy@upmarkgrowth.com</code> [Agency Placeholder].
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Terms of Service
              </h2>
              <p>
                Welcome to UPMARK. By accessing our website or retaining our web development, answer engine optimisation (AEO), or creative agency services, you agree to be bound by the following terms.
              </p>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                1. Scope of Services &amp; Custom Project Quotations
              </h3>
              <p>
                UPMARK delivers services across three primary disciplines: Web Development, Answer Engine Optimisation (AEO), and Creative Agency. Projects are executed based on individualized, mutually agreed Statements of Work detailing deliverables, timelines, milestones, and fees.
              </p>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                2. Global Client Engagements &amp; Billing
              </h3>
              <p>
                UPMARK is headquartered in India and partners with clients worldwide. Quotations and invoices are issued in US Dollars (USD) or other mutually agreed currencies (GBP, EUR, AED, AUD, INR) via secure international payment methods.
              </p>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                3. AEO Technical Reality &amp; No Guaranteed AI Rankings
              </h3>
              <p>
                Answer Engine Optimisation is an evolving technical field. UPMARK optimizes crawlability, structured entity data, schema standards, and answer-focused content. We do not guarantee specific AI recommendations or automated ranking results from external AI platforms (ChatGPT, Google AI, Copilot, Perplexity), as their synthesis algorithms are proprietary and variable.
              </p>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                4. Founder-Led Projects &amp; Illustrative Previews
              </h3>
              <p>
                Showcase projects displayed on this website (such as URBANYX and FETCHR) are founder-led initiatives representing our internal design and development capability. They are presented transparently as founder-led projects and are not represented as third-party client performance data.
              </p>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Cookie Policy
              </h2>
              <p>
                This Cookie Policy explains how UPMARK uses cookies and similar tracking technologies to recognize you when you visit our website.
              </p>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                1. What Are Cookies?
              </h3>
              <p>
                Cookies are small data files placed on your computer or mobile device when you browse websites. They are utilized to maintain site functionality and session state.
              </p>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                2. How We Use Cookies
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong>Essential Cookies:</strong> Required to enable core website navigation and form state persistence.</li>
                <li><strong>Analytics Cookies:</strong> Optional aggregated traffic analysis (e.g. Google Analytics 4) activated only after applicable configuration.</li>
              </ul>

              <h3 className="font-heading text-lg font-bold text-navy-900 pt-2">
                3. Controlling Cookies
              </h3>
              <p>
                You can configure your browser settings to accept or refuse cookies at any time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
