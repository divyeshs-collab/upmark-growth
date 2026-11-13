import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionEyebrow } from '../components/common/BrandMotifs';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const getInitialTab = (): 'privacy' | 'terms' => {
    if (location.pathname.includes('terms')) return 'terms';
    return 'privacy';
  };

  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(getInitialTab);

  useEffect(() => {
    setActiveTab(location.pathname.includes('terms') ? 'terms' : 'privacy');
  }, [location.pathname]);

  return (
    <div className="py-16 lg:py-24 bg-[#F8FAFC]">
      <SEO
        title={
          activeTab === 'terms'
            ? 'Terms of Service | UPMARK'
            : 'Privacy Policy | UPMARK'
        }
        description="Privacy Policy and Terms of Service for UPMARK Digital Growth & Technology Agency."
        canonicalPath={activeTab === 'terms' ? '/terms' : '/privacy'}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <SectionEyebrow label="Legal & Governance" variant="light" />
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#051329]">
            {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p className="text-sm text-slate-500">
            UPMARK | Digital Growth &amp; Technology Agency
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border ${
              activeTab === 'privacy'
                ? 'bg-[#051329] text-white border-[#051329]'
                : 'bg-white text-slate-600 border-slate-300 hover:border-[#051329]'
            }`}
          >
            01 &bull; Privacy Policy
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border ${
              activeTab === 'terms'
                ? 'bg-[#051329] text-white border-[#051329]'
                : 'bg-white text-slate-600 border-slate-300 hover:border-[#051329]'
            }`}
          >
            02 &bull; Terms of Service
          </button>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-8 sm:p-12 text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
          {activeTab === 'privacy' ? (
            <div className="space-y-6">
              <h2 className="font-heading text-xl font-bold text-[#051329]">
                01. Overview
              </h2>
              <p>
                UPMARK (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects the privacy of website visitors and prospective business clients. This Privacy Policy describes how we handle information submitted through our website (upmarkgrowth.com) and project enquiry forms.
              </p>

              <h2 className="font-heading text-xl font-bold text-[#051329]">
                02. Information Collected
              </h2>
              <p>
                When you submit a project enquiry, we collect the information you voluntarily provide:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Full name and business email address</li>
                <li>Company name and optional website URL</li>
                <li>Selected service required, estimated budget range, and project description</li>
              </ul>

              <h2 className="font-heading text-xl font-bold text-[#051329]">
                03. Use of Information
              </h2>
              <p>
                We use submitted business information solely to evaluate your project enquiry, communicate with you regarding potential scopes of work, prepare project proposals, and deliver agreed services. We do not sell or rent contact details to third parties.
              </p>

              <h2 className="font-heading text-xl font-bold text-[#051329]">
                04. Contact
              </h2>
              <p>
                For privacy-related questions or requests to delete enquiry records, contact{' '}
                <a href="mailto:hello@upmarkgrowth.com" className="text-[#0D5BEF] font-semibold underline">
                  hello@upmarkgrowth.com
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="font-heading text-xl font-bold text-[#051329]">
                01. Scope of Services
              </h2>
              <p>
                UPMARK provides digital growth and technology services including Website Development, E-commerce Development, Custom Web Applications &amp; Business Dashboards, Search Engine Optimisation (SEO), Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), and Website Maintenance &amp; Technical Support. All client engagements are governed by written project scopes and agreements.
              </p>

              <h2 className="font-heading text-xl font-bold text-[#051329]">
                02. Search &amp; Generative Engine Optimisation Disclaimer
              </h2>
              <p>
                While UPMARK implements technical SEO, structured schema markup (AEO), and entity/authority improvements (GEO) following established industry standards, search engines and generative AI platforms operate proprietary, dynamic algorithms. UPMARK does not promise or guarantee specific organic rankings or guaranteed citations in any search or AI platform.
              </p>

              <h2 className="font-heading text-xl font-bold text-[#051329]">
                03. Concept &amp; Demonstration Portfolio Projects
              </h2>
              <p>
                Projects labelled as Concept, Demonstration, or Founder-Led on this website are presented to illustrate technical capability, interface design, and system architecture.
              </p>

              <h2 className="font-heading text-xl font-bold text-[#051329]">
                04. Intellectual Property
              </h2>
              <p>
                Upon full payment of agreed project fees under a signed client agreement, custom deliverables developed specifically for a client project are assigned to the client in accordance with that agreement.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
