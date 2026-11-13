import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'home-services-website',
    number: '01',
    slug: 'home-services-website',
    label: 'Concept & Demonstration Project',
    title: 'Kensington & Co.: Residential Painting & Exterior Finishes',
    clientContext: 'Demonstration Project: Home Services Website',
    category: 'Website Development & Local SEO Structure',
    subtitle: 'High-trust digital architecture for a regional residential painting contractor.',
    summary:
      'A complete service-business website demonstration showing how local contractors can present their workmanship, structure regional service-area pages, and capture qualified estimate requests across desktop and mobile.',
    overview:
      'Residential service businesses often rely on dated websites that fail to communicate craftsmanship or make requesting an estimate straightforward. This demonstration project architects a refined, structured web presence for a fictional residential painting contractor, combining clear service specifications, dedicated location pages for local search visibility, and an interactive project estimate request flow.',
    businessContext:
      'Homeowners researching residential contractors evaluate trust, clarity of scope, and service coverage within seconds. The objective of this concept build is to demonstrate how thoughtful information architecture, transparent process breakdowns, and structured estimate forms turn local search visitors into qualified enquiries.',
    architectureAndApproach:
      'Designed around a modular page system: an authoritative homepage introducing core capabilities, dedicated interior and exterior service pages structured for search intent, regional location landing pages with clear service boundaries, and a multi-step estimate request interface optimised for mobile homeowners.',
    keyCapabilities: [
      'Professional homepage with clear service positioning',
      'Dedicated service pages (Interior, Exterior, Cabinetry & Restoration)',
      'Structured regional location pages built for local search clarity',
      'Interactive estimate request functionality with room/surface scope',
      'Fully responsive mobile and desktop layout architecture',
    ],
    deliverables: [
      'Responsive Homepage & Navigation System',
      'Service Specification Pages',
      'Regional Location Landing Page Templates',
      'Interactive Estimate Request Calculator & Form',
      'LocalBusiness & Service Schema Structure',
    ],
    demoType: 'home-services',
    screens: [
      {
        id: 'homepage',
        title: 'Homepage & Trust Architecture',
        caption: 'Clear value proposition, service categories, preparation standards, and direct estimate entry point.',
        tag: 'Homepage',
      },
      {
        id: 'services',
        title: 'Dedicated Service Specification Pages',
        caption: 'Detailed breakdown of surface preparation, primer systems, finish grades, and project phases.',
        tag: 'Service Pages',
      },
      {
        id: 'locations',
        title: 'Regional Service-Area Pages',
        caption: 'Location-specific pages structured for local search relevance and neighbourhood service clarity.',
        tag: 'Location Pages',
      },
      {
        id: 'estimate',
        title: 'Interactive Estimate Request Flow',
        caption: 'Structured scope selector allowing homeowners to specify property type, surfaces, and preferred timeline.',
        tag: 'Estimate Request',
      },
    ],
  },
  {
    id: 'ecommerce-experience',
    number: '02',
    slug: 'ecommerce-experience',
    label: 'Concept & Demonstration Project',
    title: 'Atelier Nord: Architectural Homeware & Lighting Store',
    clientContext: 'Demonstration Project: E-Commerce Experience',
    category: 'E-commerce Development & Catalogue UX',
    subtitle: 'Editorial product presentation paired with a frictionless cart and checkout experience.',
    summary:
      'A demonstration online store illustrating structured product listings, detailed specification pages, persistent cart state, and a streamlined checkout interface.',
    overview:
      'Online retail requires balancing brand presentation with operational clarity. This demonstration storefront showcases an end-to-end e-commerce architecture for a homeware and lighting brand, demonstrating category filtering, variant selection, technical specification drawers, live shopping cart management, and a clean checkout flow.',
    businessContext:
      'Many e-commerce stores suffer from cluttered product grids and jarring checkout transitions. This concept project demonstrates how calm editorial typography, clear stock and shipping indicators, and an intuitive cart-to-checkout progression improve the buying experience across devices.',
    architectureAndApproach:
      'Built around a four-stage commerce flow: (1) Filterable product catalogue with clear pricing and finish indicators, (2) Product detail page (PDP) with finish selection, dimensions, and shipping details, (3) Interactive cart summary with quantity controls, and (4) Structured checkout interface with delivery and payment steps.',
    keyCapabilities: [
      'Filterable product listings with category and material taxonomy',
      'Product detail pages with variant selection and technical specifications',
      'Interactive shopping cart experience with real-time subtotal calculation',
      'Streamlined checkout interface with shipping and payment structure',
    ],
    deliverables: [
      'Product Catalogue & Filtering Interface',
      'Responsive Product Detail Page (PDP) Architecture',
      'Slide-Over & Inline Shopping Cart System',
      'Multi-Step Checkout Interface Design',
      'Product Schema & Inventory State UI',
    ],
    demoType: 'ecommerce',
    screens: [
      {
        id: 'catalogue',
        title: 'Product Listings & Category Filtering',
        caption: 'Structured grid displaying lighting and architectural objects with material tags and stock state.',
        tag: 'Product Listings',
      },
      {
        id: 'pdp',
        title: 'Product Detail Page (PDP)',
        caption: 'Finish selector, dimensional specifications, lead-time transparency, and direct cart actions.',
        tag: 'Product Detail',
      },
      {
        id: 'cart',
        title: 'Shopping Cart Experience',
        caption: 'Line-item management, quantity adjustment, shipping threshold calculation, and order summary.',
        tag: 'Cart Experience',
      },
      {
        id: 'checkout',
        title: 'Checkout Interface',
        caption: 'Clean customer details, shipping method selection, and payment gateway integration layout.',
        tag: 'Checkout UI',
      },
    ],
  },
  {
    id: 'business-management-dashboard',
    number: '03',
    slug: 'business-management-dashboard',
    label: 'Concept & Demonstration Project',
    title: 'Meridian Ops: Commercial Inventory, Sales & Purchase Portal',
    clientContext: 'Demonstration Project: Business Management Dashboard',
    category: 'Custom Web Applications & Business Dashboards',
    subtitle: 'Unified operational web application for inventory control, order tracking, and administrative oversight.',
    summary:
      'A demonstration business application showing how custom web software centralises inventory tracking, sales orders, supplier purchases, commercial analytics, and role-based administration.',
    overview:
      'Growing distribution and service businesses frequently outgrow disconnected spreadsheets. Meridian Ops is a concept business management application designed to demonstrate how UPMARK engineers clean, utilitarian internal tools that give operational teams a single source of truth across stock, sales, purchasing, and reporting.',
    businessContext:
      'Internal software should prioritise information density, scannability, and fast task execution over decorative chrome. This demonstration illustrates a modular operational workspace where staff can monitor low-stock alerts, log customer orders, track supplier purchase orders, and manage user permissions.',
    architectureAndApproach:
      'Structured around five core operational modules accessible from a unified workspace: Inventory Management (SKU tracking, warehouse stock levels, reorder alerts), Sales Orders (invoice status, fulfilment pipeline), Purchase Orders (vendor restocking, delivery ETA), Analytics (category movement, operational KPIs), and Administrative Controls (user roles, audit logs, warehouse locations).',
    keyCapabilities: [
      'Real-time inventory ledger with SKU status and reorder thresholds',
      'Sales order management and customer fulfilment tracking',
      'Purchase order workflow and supplier restock scheduling',
      'Operational analytics and stock-movement reporting',
      'Administrative functions including role permissions and system configuration',
    ],
    deliverables: [
      'Inventory Management Module & Stock Ledger UI',
      'Sales & Purchase Order Management Views',
      'Commercial Analytics & Reporting Workspace',
      'Role-Based Administrative Control Panel',
      'Responsive Data Table & Filter Component System',
    ],
    demoType: 'dashboard',
    screens: [
      {
        id: 'inventory',
        title: 'Inventory Control & Stock Ledger',
        caption: 'SKU-level tracking across warehouse zones with automated low-stock indicators and unit valuation.',
        tag: 'Inventory',
      },
      {
        id: 'sales',
        title: 'Sales Order Pipeline',
        caption: 'Customer order tracking from quotation and payment confirmation through dispatch.',
        tag: 'Sales',
      },
      {
        id: 'purchases',
        title: 'Supplier Purchase Orders',
        caption: 'Vendor procurement workflows, expected arrival dates, and receiving reconciliation.',
        tag: 'Purchases',
      },
      {
        id: 'analytics',
        title: 'Commercial Analytics & Admin Controls',
        caption: 'Structured operational summaries and role-based access management for internal teams.',
        tag: 'Analytics & Admin',
      },
    ],
  },
  {
    id: 'urbanyx',
    number: '04',
    slug: 'urbanyx',
    label: 'Founder-Led Concept Project',
    title: 'URBANYX: Contemporary Apparel Digital Storefront',
    clientContext: 'Founder-Led Concept Project: Fashion & E-Commerce',
    category: 'E-commerce Development & Brand Architecture',
    subtitle: 'Minimalist digital storefront and capsule release architecture for an independent apparel concept.',
    summary:
      'A founder-led e-commerce and digital brand concept exploring editorial lookbook presentation, mobile-first product pages, and structured sizing navigation.',
    overview:
      'URBANYX is an internal concept project developed to explore minimalist fashion e-commerce architecture. Rather than relying on cluttered promotional banners, the storefront organises seasonal releases around structured typography, garment specification tables, and rapid mobile size selection.',
    businessContext:
      'Apparel brands require clear garment specifications, fabric care transparency, and fast mobile browsing. This concept demonstrates how a disciplined editorial grid supports both brand storytelling and straightforward product selection.',
    architectureAndApproach:
      'Combines an editorial lookbook grid with modular product cards, garment measurement tables, and a clean slide-over bag summary.',
    keyCapabilities: [
      'Editorial capsule collection layouts',
      'Mobile-first Product Detail Page (PDP) with garment sizing matrix',
      'Minimalist typographic hierarchy and design system tokens',
      'Streamlined bag and checkout preview',
    ],
    deliverables: [
      'Responsive Storefront Layouts',
      'Mobile-First Product Detail Templates',
      'Garment Sizing & Specification Component',
      'Design System & Typography Guidelines',
    ],
    demoType: 'brand-commerce',
    screens: [
      {
        id: 'lookbook',
        title: 'Editorial Collection Grid',
        caption: 'Asymmetric product showcase pairing garment photography with technical fabric notes.',
        tag: 'Storefront',
      },
      {
        id: 'garment-pdp',
        title: 'Garment Specification & Sizing UI',
        caption: 'Clear measurement matrix and fit guidance designed to reduce sizing uncertainty.',
        tag: 'Product Page',
      },
    ],
  },
  {
    id: 'fetchr',
    number: '05',
    slug: 'fetchr',
    label: 'Founder-Led Concept Project',
    title: 'FETCHR: Connected Pet Identification & Recovery Web App',
    clientContext: 'Founder-Led Concept Project: Custom Web Application',
    category: 'Custom Web Applications & Mobile Interface UX',
    subtitle: 'Browser-based QR scan interface and owner management dashboard for pet safety.',
    summary:
      'A founder-led web application concept demonstrating an instant mobile scan screen for lost-pet recovery alongside an owner profile management dashboard.',
    overview:
      'FETCHR is a concept web application designed around QR-enabled pet identification tags. When a tag is scanned with any smartphone camera, it loads a fast, zero-install web profile displaying emergency owner contact options and critical veterinary notes, paired with an owner portal for updating profile records.',
    businessContext:
      'Emergency utility interfaces must load immediately on mobile networks and present clear actions without requiring app store downloads or account creation from the person scanning the tag.',
    architectureAndApproach:
      'Dual-interface web architecture: a high-contrast mobile emergency scan view optimised for immediate comprehension, and a structured owner dashboard for managing pet profiles, medical notes, and contact preferences.',
    keyCapabilities: [
      'Zero-install mobile web interface triggered via QR scan',
      'One-tap owner contact and location sharing workflow',
      'Owner dashboard for managing pet profiles and veterinary records',
      'Responsive mobile-first web application architecture',
    ],
    deliverables: [
      'Mobile Emergency Scan Web Interface',
      'Pet Owner Profile & Medical Record Dashboard',
      'Tag Activation & Onboarding Flow',
      'Component Library & Interface Specifications',
    ],
    demoType: 'connected-platform',
    screens: [
      {
        id: 'scan-view',
        title: 'Instant Mobile Scan Interface',
        caption: 'High-clarity emergency screen allowing a finder to contact the owner immediately via browser.',
        tag: 'Mobile Web UI',
      },
      {
        id: 'owner-portal',
        title: 'Owner Profile & Medical Dashboard',
        caption: 'Structured portal for updating contact numbers, veterinary clinic details, and dietary/medical notes.',
        tag: 'Web Application',
      },
    ],
  },
];
