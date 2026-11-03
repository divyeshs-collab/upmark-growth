export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'General' | 'Web Development' | 'AEO' | 'Creative' | 'Pricing';
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    category: 'General',
    question: 'What does UPMARK do?',
    answer: 'UPMARK is a global digital and creative agency based in India. We partner with ambitious businesses worldwide to develop modern websites, strengthen visibility across AI-powered search (AEO), and craft distinctive brand identities.'
  },
  {
    id: 2,
    category: 'General',
    question: 'Which services do you offer?',
    answer: 'We focus on exactly three primary service divisions: Web Development (custom websites, e-commerce, and web applications), AEO Optimisation (Answer Engine Optimisation for AI search platforms like ChatGPT, Google AI, and Copilot), and Creative Agency (brand identity, logo systems, and visual design).'
  },
  {
    id: 3,
    category: 'General',
    question: 'Do you work with international clients?',
    answer: 'Yes. UPMARK serves businesses, startups, and organisations across international markets including the United States, the United Kingdom, Canada, Australia, the United Arab Emirates, India, and other global regions. We collaborate smoothly across time zones using modern project workflows and remote communication.'
  },
  {
    id: 4,
    category: 'General',
    question: 'Where is UPMARK based?',
    answer: 'UPMARK is headquartered in India. From our Indian operations base, we design, engineer, and deliver digital projects for clients across the globe without geographic limitations.'
  },
  {
    id: 5,
    category: 'Web Development',
    question: 'How does your web development process work?',
    answer: 'Our web development process follows five disciplined steps: Discover (understanding goals and requirements), Strategise (defining architecture and scope), Create (UI/UX design and prototyping), Implement (responsive coding, performance optimization, and testing), and Refine (launch review, handover, and ongoing maintenance where agreed).'
  },
  {
    id: 6,
    category: 'AEO',
    question: 'What is Answer Engine Optimisation?',
    answer: 'Answer Engine Optimisation (AEO) is the practice of optimising a business’s technical architecture, entity information, structured data, and content so that AI-powered search engines (such as ChatGPT Search, Google AI Overviews, Perplexity, and Microsoft Copilot) can comprehend, index, and reference your business accurately.'
  },
  {
    id: 7,
    category: 'AEO',
    question: 'Can AEO guarantee AI search recommendations?',
    answer: 'No, and any agency claiming guaranteed AI recommendations is not being honest. AEO is an evolving technical discipline. Because AI model algorithms and generation mechanisms are dynamic, we focus on technical crawlability, structured entity data, answer-focused content clarity, and systematic monitoring rather than unsubstantiated ranking guarantees.'
  },
  {
    id: 8,
    category: 'Creative',
    question: 'What types of creative services do you provide?',
    answer: 'Our Creative Agency division delivers comprehensive brand identity design, logo systems, brand style guides, promotional ad creatives, marketing collateral, product packaging concepts, and short-form video editing to give your brand a distinctive and consistent international identity.'
  },
  {
    id: 9,
    category: 'Pricing',
    question: 'How is project pricing determined?',
    answer: 'We operate on a custom-project pricing model rather than arbitrary rigid packages. Every quote is tailored to the specific business requirements, scope of deliverables, technical complexity, and agreed timeline. Quotes are provided transparently in USD or another mutually agreed international currency.'
  },
  {
    id: 10,
    category: 'General',
    question: 'How do I start a project with UPMARK?',
    answer: 'You can initiate a project by submitting our Project Enquiry form or reaching out directly. We will review your business requirements, schedule a remote consultation if needed, and prepare a tailored project proposal and scope outline.'
  }
];
