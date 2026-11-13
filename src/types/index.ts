export interface ServiceItem {
  id: string;
  number: string;
  code: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: 'Development & Engineering' | 'Search & AI Visibility' | 'Operations & Support';
  summary: string;
  description: string;
  businessProblem: {
    headline: string;
    description: string;
    painPoints: string[];
  };
  deliverables: string[];
  intendedCustomers: string[];
  technicalCapabilities: string[];
  ethicalNote?: string;
  visualType:
    | 'website-architecture'
    | 'ecommerce-system'
    | 'business-dashboard'
    | 'seo-structure'
    | 'aeo-schema'
    | 'geo-entity'
    | 'maintenance-lifecycle';
}

export interface ProjectItem {
  id: string;
  number: string;
  slug: string;
  label: string;
  title: string;
  clientContext: string;
  category: string;
  subtitle: string;
  summary: string;
  overview: string;
  businessContext: string;
  architectureAndApproach: string;
  keyCapabilities: string[];
  deliverables: string[];
  demoType: 'home-services' | 'ecommerce' | 'dashboard' | 'brand-commerce' | 'connected-platform';
  screens: {
    id: string;
    title: string;
    caption: string;
    tag: string;
  }[];
}

export type OfficialServiceOption =
  | 'Website Development'
  | 'E-commerce Development'
  | 'Custom Web Applications'
  | 'Business Dashboards'
  | 'SEO'
  | 'AEO'
  | 'GEO'
  | 'Website Maintenance'
  | 'Other';

export interface ProjectEnquiryData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  websiteUrl?: string;
  serviceRequired: OfficialServiceOption;
  estimatedBudget: string;
  projectDescription: string;
}
