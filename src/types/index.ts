export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  fullName?: string;
  positioning: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  keyBenefits: string[];
  idealFor: string[];
  toolsUsed: string[];
  visualDirection?: string;
  initialSpecialisation?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  tagline: string;
  isFounderLed: boolean;
  overview: string;
  challenge: string;
  strategy: string;
  creativeExecution: string;
  servicesDemonstrated: string[];
  deliverables: string[];
  gallery: {
    title: string;
    description: string;
    tag: string;
    aspectRatio?: string;
    previewBg?: string;
  }[];
}

export interface ProjectEnquiryData {
  fullName: string;
  businessEmail: string;
  country: string;
  countryCode: string;
  phoneNumber: string;
  companyName: string;
  websiteUrl?: string;
  servicesRequired: string[]; // Multi-choice: Web Development, AEO Optimisation, Creative Agency, Multiple Services
  projectDescription: string;
  approximateBudget?: string;
  expectedTimeline?: string;
  preferredCommunication?: string;
  privacyConsent: boolean;
}
