export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'General' | 'Development' | 'Search & AI' | 'Operations';
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    category: 'General',
    question: 'What services does UPMARK provide?',
    answer:
      'UPMARK provides seven core digital growth and technology services: Website Development, E-commerce Development, Custom Web Applications & Business Dashboards, Search Engine Optimisation (SEO), Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), and Website Maintenance & Technical Support.',
  },
  {
    id: 2,
    category: 'General',
    question: 'Which markets and types of businesses do you work with?',
    answer:
      'We work with international businesses, startups, SMEs, service businesses, and e-commerce brands across the United States, the United Kingdom, Canada, and Australia, as well as other global markets. Our workflows are structured for clear remote collaboration across international time zones.',
  },
  {
    id: 3,
    category: 'Development',
    question: 'Do you build custom web applications and internal business dashboards?',
    answer:
      'Yes. Beyond public-facing websites and online stores, we engineer custom web applications tailored to business operations, including CRM systems, inventory management portals, sales and purchase tracking systems, booking platforms, and administrative analytics dashboards.',
  },
  {
    id: 4,
    category: 'Search & AI',
    question: 'How do SEO, AEO, and GEO differ from one another?',
    answer:
      'Search Engine Optimisation (SEO) focuses on technical site health, page hierarchy, and content relevance for traditional organic search results. Answer Engine Optimisation (AEO) structures FAQs, schema markup, and question-based content so answer engines can extract direct facts accurately. Generative Engine Optimisation (GEO) focuses on brand entity clarity, topical authority, and citation readiness across generative AI search platforms.',
  },
  {
    id: 5,
    category: 'Search & AI',
    question: 'Do you guarantee rankings or citations in generative AI platforms?',
    answer:
      'No. Search algorithms and generative AI synthesis models are proprietary and continuously evolving. We never promise guaranteed rankings or AI citations. Instead, we deliver verifiable technical audits, structured schema implementation, entity alignment, and authoritative content improvements.',
  },
  {
    id: 6,
    category: 'Development',
    question: 'Can you redesign an existing website or e-commerce store without losing search visibility?',
    answer:
      'Yes. When executing a website or e-commerce redesign, we audit your existing URL structure, metadata, and internal linking beforehand, implement clean redirect mapping where URLs change, and build the new interface with semantic HTML and strong Core Web Vitals performance.',
  },
  {
    id: 7,
    category: 'Operations',
    question: 'Do you provide ongoing website maintenance after a project launches?',
    answer:
      'Yes. Our Website Maintenance & Technical Support service covers routine dependency and security updates, bug fixes, performance monitoring, backup verification, content updates, and hosting/deployment assistance.',
  },
  {
    id: 8,
    category: 'General',
    question: 'How are projects scoped and priced?',
    answer:
      'Every project is scoped around your specific business requirements, technical deliverables, and timeline. Following an initial discovery review of your enquiry, we provide a transparent written proposal detailing the exact deliverables, milestones, and investment in USD or your preferred billing currency.',
  },
];
