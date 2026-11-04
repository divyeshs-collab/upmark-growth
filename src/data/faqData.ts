export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'Services' | 'Global' | 'Web Development' | 'AEO' | 'Pricing' | 'Process';
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    category: 'Services',
    question: 'What services does UPMARK offer?',
    answer: 'UPMARK offers exactly three core disciplines: Web Development (modern business websites, custom web applications, landing pages, and e-commerce platforms), AEO Optimisation (Answer Engine Optimisation to help businesses become accurately understood and discoverable across AI-powered search engines such as ChatGPT, Google AI, and Microsoft Bing), and Creative Agency (brand identity systems, logo design, visual guidelines, advertising creatives, and creative direction).'
  },
  {
    id: 2,
    category: 'Global',
    question: 'Does UPMARK work with international clients?',
    answer: 'Yes. UPMARK is based in Mumbai, India, and works with ambitious businesses worldwide, including clients in the United States, United Kingdom, Canada, Australia, the United Arab Emirates, and India. We manage project communications across overlapping international time zones through clear documentation, video calls, and asynchronous milestones.'
  },
  {
    id: 3,
    category: 'Web Development',
    question: 'How does the website development process work?',
    answer: 'Our website development process follows a disciplined five-step framework: Discover (understanding business goals, audience, and technical requirements), Strategise (defining architecture, user flows, and project milestones), Create (UI/UX design, visual prototyping, and content structure), Implement (responsive engineering, performance optimization, and rigorous testing), and Refine (launch verification, handover, and ongoing support where agreed).'
  },
  {
    id: 4,
    category: 'AEO',
    question: 'What is Answer Engine Optimisation?',
    answer: 'Answer Engine Optimisation (AEO) is the discipline of structuring your technical website data, entity information, and answer-focused content so that generative AI engines (including ChatGPT Search, Google AI search experiences, and Microsoft Copilot) can comprehend, index, and cite your business accurately. We do not guarantee rankings or recommendations, as AI algorithms evolve dynamically; we focus on rigorous technical discoverability and entity clarity.'
  },
  {
    id: 5,
    category: 'Services',
    question: 'Can I enquire about multiple services?',
    answer: 'Yes, absolutely. Many of our international clients engage UPMARK for integrated projects—for example, developing a custom website alongside brand identity creation and an initial AEO technical audit. On our project enquiry form, you can select one, several, or all three disciplines.'
  },
  {
    id: 6,
    category: 'Pricing',
    question: 'How is project pricing determined?',
    answer: 'Every project is different. Our pricing is determined individually based on your specific requirements, project scope, technical complexity, deliverables, and objectives. We provide transparent, itemized proposals in USD or another mutually agreed international currency, with zero hidden fees.'
  },
  {
    id: 7,
    category: 'Process',
    question: 'How do I get started?',
    answer: 'Getting started is straightforward: submit your requirements through our Project Enquiry form or email us at divyesh@upmarkgrowth.com. We will review your project details and respond within 1 business day to discuss scope, timeline, and next steps.'
  }
];
