import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    positioning: 'Websites designed to turn your digital presence into a business asset.',
    shortDescription: 'We design and develop modern, responsive websites that communicate your brand, showcase your offerings and make it easier for potential customers to take action.',
    fullDescription: 'Your website is the centerpiece of your global digital presence. We build bespoke, lightning-fast, and responsive digital platforms engineered to represent your business with authority, engage international visitors, and convert attention into qualified project enquiries.',
    iconName: 'Code2',
    deliverables: [
      'Business website development',
      'Custom website design',
      'Landing page development',
      'Responsive website development',
      'E-commerce website development',
      'Website redesign & modernisation',
      'UI/UX design & design systems',
      'Website performance optimisation',
      'Website maintenance, where agreed'
    ],
    keyBenefits: [
      'Tailored digital experiences engineered around specific business objectives rather than generic templates',
      'Flawless responsiveness and fast page-load speeds across desktop, tablet, and mobile devices worldwide',
      'Clean, maintainable modern code architecture built on standard web technologies'
    ],
    idealFor: [
      'Businesses looking to elevate their digital brand and replace outdated websites',
      'Startups and entrepreneurs launching high-impact international digital products',
      'Companies needing bespoke landing pages or high-converting e-commerce storefronts'
    ],
    toolsUsed: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Figma', 'Webflow', 'Shopify'],
    visualDirection: 'Desktop and mobile mockups, modern UI design systems, structured layout grids, interactive web components.'
  },
  {
    id: 'aeo-optimisation',
    slug: 'aeo-optimisation',
    title: 'AEO Optimisation',
    fullName: 'Answer Engine Optimisation',
    positioning: 'Make your business easier to discover across AI-powered search.',
    shortDescription: 'We help businesses improve how their information is understood, discovered and referenced across AI-powered search experiences through technical optimisation, answer-focused content and stronger online business information.',
    fullDescription: 'Search is evolving rapidly toward generative engines and conversational AI models. AEO is the disciplined practice of ensuring your technical infrastructure, entity information, and business content are organized so that AI systems—including ChatGPT Search, Google AI Overviews, Microsoft Copilot, and Perplexity—can accurately comprehend, index, and reference your business.',
    iconName: 'Bot',
    deliverables: [
      'AI search visibility audits',
      'ChatGPT Search readiness',
      'Google AI search readiness',
      'Microsoft Copilot and Bing visibility readiness',
      'Website crawlability and indexing review',
      'Answer-focused content optimisation',
      'Entity and business information optimisation',
      'Relevant structured data implementation',
      'FAQ and service-page optimisation',
      'Competitor visibility analysis',
      'AI citation and visibility monitoring',
      'Monthly performance reporting'
    ],
    keyBenefits: [
      'Structured entity mapping that clarifies what your business does, where it operates, and which questions it answers',
      'Technical crawlability and semantic schemas aligned with major generative search parsers',
      'Ongoing visibility monitoring as generative engine algorithms and citation behavior evolve'
    ],
    idealFor: [
      'Businesses and service providers seeking forward-looking search visibility in the age of generative AI',
      'Initial prospecting specialisation: HVAC businesses and contractors in Texas, USA (covering AC repair, heat pump installation, emergency cooling, and local service questions)',
      'International businesses in high-consideration sectors where customers research solutions through AI chatbots'
    ],
    toolsUsed: ['Schema.org Structured Data', 'OpenAI ChatGPT Search', 'Google Search Console', 'Perplexity', 'Microsoft Bing Webmaster', 'JSON-LD Entity Graphing'],
    visualDirection: 'AI search query simulations, entity knowledge graphs, structured data architectures, crawlability diagrams.',
    initialSpecialisation: 'Initial AEO prospecting specialisation: HVAC businesses & contractors in Texas, USA (available internationally across all suitable industries).'
  },
  {
    id: 'creative-agency',
    slug: 'creative-agency',
    title: 'Creative Agency',
    positioning: 'Creative that gives your brand a distinctive identity.',
    shortDescription: 'We develop strategic visual identities and compelling creative assets that help businesses communicate their value and create a consistent brand experience.',
    fullDescription: 'In crowded international markets, brand perception determines business value. Our creative studio crafts distinctive visual identity systems, logos, typography hierarchies, and promotional assets that convey confidence, clarity, and enduring quality.',
    iconName: 'Palette',
    deliverables: [
      'Brand identity design',
      'Logo design and brand systems',
      'Brand guidelines & design tokens',
      'Graphic design & marketing collateral',
      'Social media creatives & post systems',
      'Advertising creatives & ad variations',
      'Promotional campaigns & product launch assets',
      'Product creatives & packaging concepts',
      'Creative direction & visual strategy',
      'Short-form promotional video editing',
      'Digital campaign design'
    ],
    keyBenefits: [
      'Cohesive visual identity that projects credibility across every digital and print touchpoint',
      'Thoughtful design decisions grounded in brand positioning rather than transient design fads',
      'Production-ready creative assets delivered with complete vector guidelines and color specifications'
    ],
    idealFor: [
      'Businesses rebranding to enter higher-tier international markets',
      'Founders and startups needing a distinctive visual identity from day one',
      'Companies requiring ongoing campaign creative direction and high-polish ad assets'
    ],
    toolsUsed: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro', 'Brand Architecture Systems'],
    visualDirection: 'Brand identity systems, typography specimens, color palette systems, packaging prototypes, campaign artwork.'
  }
];
