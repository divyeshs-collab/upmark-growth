import React from 'react';
import { ServiceItem } from '../../types';

interface ServiceVisualArtifactProps {
  visualType: ServiceItem['visualType'];
}

interface VisualSpec {
  number: string;
  label: string;
  pillars: { code: string; title: string; detail: string }[];
}

const VISUAL_SPECS: Record<ServiceItem['visualType'], VisualSpec> = {
  'website-architecture': {
    number: '01',
    label: 'Web Platform Architecture',
    pillars: [
      { code: '01', title: 'Brand & UI', detail: 'Clear positioning & layout' },
      { code: '02', title: 'Service Structure', detail: 'Focused conversion pathways' },
      { code: '03', title: 'Clean Engineering', detail: 'Responsive & fast-loading' },
      { code: '04', title: 'CMS & Handover', detail: 'Maintainable page templates' },
    ],
  },
  'ecommerce-system': {
    number: '02',
    label: 'Commerce Storefront Flow',
    pillars: [
      { code: '01', title: 'Catalogue', detail: 'Structured product taxonomy' },
      { code: '02', title: 'Cart & PDP', detail: 'Clear variant & price state' },
      { code: '03', title: 'Checkout', detail: 'Payment gateway integration' },
      { code: '04', title: 'Inventory Sync', detail: 'Stock & order alignment' },
    ],
  },
  'business-dashboard': {
    number: '03',
    label: 'Custom Operational Software',
    pillars: [
      { code: '01', title: 'CRM & Clients', detail: 'Centralised account records' },
      { code: '02', title: 'Inventory & Sales', detail: 'Stock & order tracking' },
      { code: '03', title: 'Admin & Analytics', detail: 'Role-based KPI dashboards' },
      { code: '04', title: 'Booking & Workflows', detail: 'Internal operational tools' },
    ],
  },
  'seo-structure': {
    number: '04',
    label: 'Technical & On-Page SEO',
    pillars: [
      { code: '01', title: 'Technical Audit', detail: 'Crawlability & hierarchy' },
      { code: '02', title: 'On-Page Intent', detail: 'Keyword & metadata alignment' },
      { code: '03', title: 'Internal Linking', detail: 'Structured site architecture' },
      { code: '04', title: 'Local & Monitoring', detail: 'Regional signals & tracking' },
    ],
  },
  'aeo-schema': {
    number: '05',
    label: 'Answer Engine Structure',
    pillars: [
      { code: '01', title: 'Schema Markup', detail: 'Service & FAQ JSON-LD' },
      { code: '02', title: 'Direct Answers', detail: 'Question-based formatting' },
      { code: '03', title: 'Entity Clarity', detail: 'Consistent brand facts' },
      { code: '04', title: 'Intent Mapping', detail: 'Structured content hierarchy' },
    ],
  },
  'geo-entity': {
    number: '06',
    label: 'Generative AI Visibility',
    pillars: [
      { code: '01', title: 'Visibility Audit', detail: 'AI representation review' },
      { code: '02', title: 'Entity Authority', detail: 'Clear service & brand signals' },
      { code: '03', title: 'Topic Coverage', detail: 'Citation gap research' },
      { code: '04', title: 'Competitor Analysis', detail: 'AI visibility benchmarking' },
    ],
  },
  'maintenance-lifecycle': {
    number: '07',
    label: 'Maintenance & Support',
    pillars: [
      { code: '01', title: 'Security & Updates', detail: 'Dependencies & bug fixes' },
      { code: '02', title: 'Backups & Uptime', detail: 'Scheduled recovery & speed' },
      { code: '03', title: 'Content Updates', detail: 'Routine page & asset edits' },
      { code: '04', title: 'Hosting Support', detail: 'Deployment & technical help' },
    ],
  },
};

export const ServiceVisualArtifact: React.FC<ServiceVisualArtifactProps> = ({ visualType }) => {
  const spec = VISUAL_SPECS[visualType] || VISUAL_SPECS['website-architecture'];

  return (
    <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
          {spec.label}
        </span>
        <span className="font-mono text-xs font-bold text-[#0D5BEF]">
          {spec.number}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {spec.pillars.map((pillar) => (
          <div
            key={pillar.code}
            className="rounded-lg bg-white border border-slate-200 p-4 space-y-1"
          >
            <div className="font-mono text-xs font-bold text-[#0D5BEF]">{pillar.code}</div>
            <div className="font-heading font-bold text-[#051329] text-sm">{pillar.title}</div>
            <div className="text-xs text-slate-600 leading-relaxed">{pillar.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
