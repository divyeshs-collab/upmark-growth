import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    positioning: 'Build powerful digital experiences designed around your business.',
    shortDescription: 'We create modern, responsive and business-focused digital experiences that communicate value, build trust and help convert visitors into customers.',
    fullDescription: 'Your website is the foundation of your digital credibility. We design and develop custom, high-performance web experiences engineered to articulate your value proposition clearly, establish confidence with international prospects, and drive qualified business enquiries.',
    iconName: 'Code2',
    deliverables: [
      'Business websites',
      'Custom website development',
      'Landing page development',
      'E-commerce websites',
      'Website redesign',
      'UI/UX design',
      'Responsive development',
      'Website performance optimisation',
      'Website maintenance where agreed in project scope'
    ],
    keyBenefits: [
      'Built around business goals rather than generic, bloated templates',
      'Fast, accessible and responsive across desktop, tablet and mobile devices',
      'Clean modern technology stack built for longevity, ease of updates and security'
    ],
    idealFor: [
      'Established businesses upgrading an outdated online presence',
      'High-growth startups launching digital products or SaaS solutions',
      'Brands needing high-converting marketing landing pages or modern e-commerce storefronts'
    ],
    toolsUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js', 'Figma', 'Web Standards'],
    visualDirection: 'Desktop website mockups, mobile website mockups, e-commerce interfaces, landing page examples.'
  },
  {
    id: 'aeo-optimisation',
    slug: 'aeo-optimisation',
    title: 'AEO Optimisation',
    fullName: 'Answer Engine Optimisation',
    positioning: 'Strengthen your visibility across AI-powered search experiences.',
    shortDescription: 'We position your business as a trusted source across modern AI search engines by structuring entity data, answer-focused content and technical crawlability.',
    fullDescription: 'Search behavior is undergoing a generational shift toward conversational AI engines. Answer Engine Optimisation (AEO) is an evolving technical discipline focused on helping AI engines—such as ChatGPT Search, Google AI search experiences, and Microsoft Bing—understand your business entity, crawl your core information, and cite your answers when prospects inquire about your solutions.',
    iconName: 'Bot',
    deliverables: [
      'AI search visibility audits',
      'Answer-focused content optimisation',
      'Website crawlability and indexing reviews',
      'Business and entity information optimisation',
      'FAQ and service page optimisation',
      'Relevant structured data implementation',
      'Competitor visibility analysis',
      'AI search citation and visibility monitoring',
      'Reporting and ongoing optimisation'
    ],
    keyBenefits: [
      'Structured entity mapping for clear comprehension by generative search parsers',
      'Answer-first content structure answering the exact questions potential buyers ask AI assistants',
      'Transparent ongoing monitoring without deceptive claims or false ranking promises'
    ],
    idealFor: [
      'Forward-thinking businesses preparing for the transition from traditional search to AI-synthesized answers',
      'Initial sales specialisation: HVAC businesses in Texas, USA (with full availability for businesses across industries and countries worldwide)',
      'Service companies needing clear knowledge graph entities and schema authority'
    ],
    toolsUsed: ['Schema.org', 'JSON-LD', 'ChatGPT Search', 'Google AI Overviews', 'Microsoft Bing', 'Crawl Audits'],
    visualDirection: 'AI search query simulations, entity knowledge graphs, structured data schemas, crawlability reviews.',
    initialSpecialisation: 'Initial sales specialisation: HVAC businesses in Texas, USA (available to work with businesses across industries and countries worldwide).'
  },
  {
    id: 'creative-agency',
    slug: 'creative-agency',
    title: 'Creative Agency',
    positioning: 'Create distinctive brand identities and digital experiences.',
    shortDescription: 'We develop visual identities and creative assets that help businesses communicate consistently, command attention and build enduring equity.',
    fullDescription: 'In competitive global markets, cohesive design defines perceived value. Our creative studio crafts distinctive brand identity systems, logos, design guidelines, and campaign creative assets that communicate authority and build trust across every touchpoint.',
    iconName: 'Palette',
    deliverables: [
      'Brand identity development',
      'Logo and visual identity design',
      'Brand guidelines',
      'Graphic design',
      'Social media creatives',
      'Advertising creatives',
      'Digital campaign creatives',
      'Marketing collateral',
      'Product creatives',
      'Creative direction',
      'Short-form video editing'
    ],
    keyBenefits: [
      'Cohesive visual identity that differentiates your brand from competitors',
      'Strategic design decisions based on business positioning rather than short-lived fads',
      'Production-ready vector assets and design tokens ready for immediate deployment'
    ],
    idealFor: [
      'Companies rebranding to compete at an international standard',
      'Founders requiring an authoritative, unified visual identity from launch',
      'Brands requiring creative asset production and visual direction without bloated agency retainers'
    ],
    toolsUsed: ['Figma', 'Adobe Creative Cloud', 'Vector Systems', 'Design Tokens', 'Video Production'],
    visualDirection: 'Brand identity systems, typography specimens, design tokens, campaign creatives, packaging concepts.'
  }
];
