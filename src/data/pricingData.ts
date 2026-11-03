export interface CustomPricingStructure {
  heading: string;
  description: string;
  principles: {
    title: string;
    description: string;
    icon: string;
  }[];
  disciplines: {
    service: string;
    model: string;
    typicalScope: string[];
    timeline: string;
  }[];
  internationalNote: string;
}

export const customPricingData: CustomPricingStructure = {
  heading: 'Every Project Has Different Requirements.',
  description: 'Whether you need a new website, stronger AI search visibility or a complete creative direction, we develop a scope around your business objectives.',
  principles: [
    {
      title: 'Defined Business Requirements',
      description: 'We evaluate the unique technical and creative scope required to achieve your objectives before presenting a quote.',
      icon: 'FileCheck'
    },
    {
      title: 'Zero Hidden Costs',
      description: 'Clear, documented deliverable specifications with agreed milestones, assets, and delivery schedules.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Flexible Engagement Models',
      description: 'Milestone-based project fees for websites and branding, with defined ongoing monthly retainers available for AEO monitoring.',
      icon: 'Layers'
    },
    {
      title: 'Global Currency & Terms',
      description: 'Quotations issued transparently in USD, GBP, EUR, AED, AUD or INR depending on client preference and billing location.',
      icon: 'Globe'
    }
  ],
  disciplines: [
    {
      service: 'Web Development',
      model: 'Fixed-Scope Project Investment',
      typicalScope: [
        'Custom responsive architecture',
        'UI/UX design & interactive prototypes',
        'CMS or e-commerce integration',
        'Performance & mobile optimisation',
        'Deployment & post-launch support'
      ],
      timeline: 'Typically 3–8 weeks depending on complexity'
    },
    {
      service: 'AEO Optimisation',
      model: 'Audit & Ongoing Retainer',
      typicalScope: [
        'Initial AI search visibility audit',
        'Structured entity & schema deployment',
        'Answer-focused content optimization',
        'Crawlability & technical indexing review',
        'Monthly citation & visibility monitoring'
      ],
      timeline: 'Initial audit in 10 business days; monthly advisory'
    },
    {
      service: 'Creative Agency',
      model: 'Milestone / Deliverable Package',
      typicalScope: [
        'Brand identity & visual guidelines',
        'Logo design and vector system',
        'Typography and colour tokens',
        'Marketing & advertising collateral',
        'Promotional campaign artwork'
      ],
      timeline: 'Typically 2–5 weeks'
    }
  ],
  internationalNote: 'UPMARK works with clients internationally. Project scope and pricing are tailored to business requirements and location.'
};
