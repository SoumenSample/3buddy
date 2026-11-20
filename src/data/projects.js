const projects = [
  {
    id: 1,
    name: "Lokenath Enterprise",
    description:
      "Modern corporate and showcase web platform for Lokenath Enterprise, a premier civil works and building construction contractor with 10+ years of contracting excellence and ₹3.65 Cr+ turnover.",
    shortDescription: "Civil engineering & building construction corporate platform.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    category: ["frontend", "nextjs", "fullstack"],
    github: null,
    live: "https://lokenathenterprise.vercel.app/",
    image: "/projects/lokenath.jpg",
    featured: true,
    problem:
      "A leading civil engineering contractor needed an authoritative, modern digital platform to showcase large-scale construction projects, equipment capacity, and contracting credentials.",
    solution:
      "We engineered a high-performance responsive web platform with interactive project galleries, company turnover milestones, and direct client project consultation workflows.",
    features: [
      "High-impact dark modern construction showcase",
      "Civil works & infrastructure portfolio",
      "Company turnover & track-record highlights",
      "Direct project estimation & consultation request system",
      "Optimized Core Web Vitals & mobile-first architecture",
    ],
  },
  {
    id: 2,
    name: "Divyanshi Saksharta Mission Foundation",
    description:
      "Official digital portal for Divyanshi Saksharta Mission Foundation (DSMF), a verified Section 8 non-profit organization driving Pan-India educational missions, student onboarding, community initiatives, and secure donations.",
    shortDescription: "Section 8 non-profit education & empowerment portal.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    category: ["frontend", "nextjs", "fullstack"],
    github: null,
    live: "https://www.divyanshisakshartamissionfoundation.in/",
    image: "/projects/divyanshi.jpg",
    featured: false,
    problem:
      "A nationwide Section 8 foundation required a unified web platform to showcase mission objectives, coordinate Pan-India student initiatives, and collect verified donations securely.",
    solution:
      "We engineered an accessible, modern, high-speed web application with transparent project milestones, online donation integrations, and dedicated student & volunteer registration gateways.",
    features: [
      "Section 8 Foundation compliance & verified non-profit showcase",
      "Pan-India flagship educational mission tracking",
      "Secure online donation and campaign contribution portal",
      "Student registration and volunteer onboarding workflows",
      "Accessible, mobile-first design optimized for all screen sizes",
    ],
  },
  {
    id: 3,
    name: "Sreeyalaxmi Financial Services",
    description:
      "Corporate financial services web application for Sreeyalaxmi Financial Services Pvt. Ltd., delivering transparent customer-first financial planning, loan solutions, and business empowerment across Bengal and India.",
    shortDescription: "Trusted, transparent and customer-focused financial solutions platform.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    category: ["frontend", "nextjs", "fullstack"],
    github: null,
    live: "https://www.sreeyalaxmi.in/",
    image: "/projects/sreeyalaxmi.jpg",
    featured: false,
    problem:
      "A regional financial services provider needed an approachable, bilingual digital presence to build customer trust, detail service offerings, and streamline client inquiries.",
    solution:
      "We developed a high-trust responsive platform featuring clean service discovery, dual-language cultural messaging, and direct consultation booking channels.",
    features: [
      "Customer-first financial services & planning showcase",
      "Bilingual family & business trust messaging",
      "Direct inquiry, loan consultation & advisory booking",
      "High-performance mobile-first UX with bank-grade aesthetics",
      "Fast response time & secure contact infrastructure",
    ],
  },
  {
    id: 4,
    name: "HelloPe",
    description:
      "Modern fintech and digital payments web application engineered for instant global peer-to-peer transfers, expense tracking, and card management through an intuitive unified dashboard.",
    shortDescription: "Instant money transfer & personal finance SaaS platform.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Framer Motion"],
    category: ["fullstack", "saas", "nextjs", "frontend"],
    github: null,
    live: "https://hello-pay.vercel.app/",
    image: "/projects/hellopay.jpg",
    featured: false,
    problem:
      "Modern users face fragmented banking interfaces, slow transaction confirmation times, and complicated expense analytics.",
    solution:
      "Built a sleek, high-speed fintech dashboard with real-time analytics graphs, instant transfer simulation, and responsive cross-device card management.",
    features: [
      "Instant global send & receive money workflows",
      "Real-time visual spending & income analytics",
      "Multi-card management and virtual card balance tracking",
      "Interactive pricing & multi-tier account features",
      "Ultra-responsive mobile-first dashboard experience",
    ],
  },
  {
    id: 5,
    name: "Scrapi",
    description:
      "Eco-tech logistics and recycling web platform connecting households and businesses with verified doorstep scrap pickup agents, transparent live scrap rates, and instant digital payouts.",
    shortDescription: "Doorstep scrap collection & recycling logistics web platform.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    category: ["fullstack", "saas", "nextjs", "frontend"],
    github: null,
    live: "https://www.scrapi.in/",
    image: "/projects/scrapi.jpg",
    featured: false,
    problem:
      "Households and commercial units struggle with unorganized scrap pickers, unverified weighing scales, and opaque pricing for recyclables.",
    solution:
      "Developed a reliable on-demand doorstep scrap collection portal with live scrap rate tracking, online schedule booking, and automated collection confirmation.",
    features: [
      "On-demand doorstep scrap pickup scheduling & time slot booking",
      "Live transparent scrap rate cards for paper, metal, e-waste & plastic",
      "Pickup partner verification & certified weighing scale guarantee",
      "Fast digital post-collection payout workflows",
      "Zero-waste circular economy impact metrics",
    ],
  },
  {
    id: 6,
    name: "Startup Naksha",
    description:
      "Interactive ecosystem intelligence and mapping platform charting hundreds of active startups, funding stages, hiring hotspots, and news across Kolkata and West Bengal.",
    shortDescription: "Interactive geospatial startup ecosystem map & hiring directory.",
    techStack: ["Next.js", "React", "Leaflet", "Tailwind CSS", "OpenStreetMap"],
    category: ["frontend", "nextjs", "fullstack", "saas"],
    github: null,
    live: "https://www.startupnaksha.page/",
    image: "/projects/startupnaksha.jpg",
    featured: false,
    problem:
      "Founders, investors, and job seekers lacked a centralized, visual directory to navigate Kolkata's rapidly growing startup ecosystem, discovering local tech ventures and hiring opportunities.",
    solution:
      "Engineered a high-performance interactive map interface with geospatial clustering, sector/stage filtering, live news integration, and hiring alert pipelines.",
    features: [
      "Interactive geospatial map with cluster visualization (Leaflet/OSM)",
      "Multi-dimensional filters: sector, funding stage, area & startup type",
      "Curated 'Who's Hiring' job board and alert notification system",
      "Real-time ecosystem news feed and funding announcements",
      "Responsive Neumorphic & warm map UI optimized for desktop and touch",
    ],
  },
  {
    id: 7,
    name: "MessDekho",
    description:
      "Full-stack student & professional accommodation discovery platform featuring verified PG listings, transparent rental pricing, authentic resident reviews, and home-cooked mess meal plan tracking across India.",
    shortDescription: "Student & professional PG, hostel, and mess discovery platform.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    category: ["fullstack", "saas", "nextjs", "frontend"],
    github: null,
    live: "https://www.messdekho.me/",
    image: "/projects/messdekho.jpg",
    featured: false,
    problem:
      "Students and young professionals relocating to new cities face misleading PG broker photos, hidden deposit fees, unhygienic mess food, and zero reliable reviews.",
    solution:
      "Engineered a verified student housing marketplace with geo-location search, transparent amenities checklists, verified mess menus, and instant direct landlord connections.",
    features: [
      "Location-based PG and hostel search with interactive filters",
      "Verified mess service menus, meal quality ratings & meal plans",
      "Transparent rent structures with zero broker markups",
      "Real verified resident reviews and photographic tours",
      "Direct contact and instant room booking consultation workflows",
    ],
  },
  {
    id: 8,
    name: "Atelier Kasama",
    description:
      "Haute ébénisterie web experience for Atelier Kasama featuring immersive 3D furniture rendering, interactive spatial showroom controls, material customization, and architectural consultation booking across Mumbai, Delhi, and Bengaluru.",
    shortDescription: "Luxury bespoke furniture & 3D interactive showroom platform.",
    techStack: ["Three.js", "React", "Next.js", "Tailwind CSS", "WebGL"],
    category: ["frontend", "nextjs", "fullstack"],
    github: null,
    live: "https://furniture-three-blue.vercel.app/",
    image: "/projects/atelier-kasama.jpg",
    featured: false,
    problem:
      "High-end bespoke furniture ateliers struggle to convey custom wood grains, fine brass inlays, and true 3D spatial proportions through standard 2D catalogs.",
    solution:
      "Engineered an interactive 3D WebGL showroom allowing interior designers and private clients to orbit furniture pieces in real-time 3D, inspect material finishes, and book bespoke studio consultations.",
    features: [
      "Interactive 3D WebGL showroom with 360-degree orbit & spatial lighting",
      "High-fidelity material shaders for wood grains, brass inlays, and marble",
      "Haute ébénisterie collection catalog with bespoke sizing specs",
      "Private design consultation and custom commission request gateway",
      "Optimized 60 FPS rendering pipeline across desktop and mobile devices",
    ],
  },
  {
    id: 9,
    name: "WhatsApp Doctor Booking & Clinic Dashboard",
    description:
      "Conversational WhatsApp appointment booking bot with live clinic dashboard, automated doctor slot scheduling and real-time patient sync.",
    shortDescription: "WhatsApp doctor appointment booking & real-time clinic dashboard.",
    techStack: ["Next.js", "Supabase", "n8n", "WhatsApp Cloud API", "Tailwind CSS"],
    category: ["fullstack", "saas", "nextjs"],
    github: null,
    live: "#contact",
    image: null,
    featured: false,
    problem:
      "Clinics and practitioners lose 30%+ of potential appointments due to busy phone lines, chaotic manual WhatsApp chats, and high patient no-show rates.",
    solution:
      "Engineered an automated 24/7 WhatsApp booking bot connected via n8n workflows with a live dashboard for real-time doctor availability and patient scheduling.",
    features: [
      "24/7 Automated WhatsApp chatbot appointment booking & slot allocation",
      "Real-time  clinic management live dashboard",
      "n8n automated patient reminder & follow-up workflows",
      "Instant doctor schedule sync, cancellation & reschedule handling",
      "Digital prescription delivery & patient visit history tracking",
    ],
  },
  {
    id: 10,
    name: "Custom Enterprise & Business Management Software Systems",
    shortDescription: "Combined suite of 8+ ready-to-deploy business management solutions built by 3buddy.",
    description:
      "A comprehensive, unified showcase of production-ready business management softwares engineered by 3buddy. From high-speed retail billing and field technician dispatch to multi-branch clinic and pharmacy operations, each system is crafted for reliability, local compliance, role-based security, and custom operational needs.",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "Prisma"],
    category: ["fullstack", "saas", "nextjs"],
    github: null,
    live: "#contact",
    image: null,
    featured: true,
    isSoftwareSuite: true,
    problem:
      "Businesses often get locked into inflexible, expensive subscription ERPs that fail to fit their exact ground realities — such as fast counter billing, technician job assignment, specific GST formats, or local offline requirements.",
    solution:
      "We build and deploy robust, tailored web and cloud management software systems with role-based access control, zero unnecessary bloat, real-time analytics, and lifetime software ownership.",
    softwareTypes: [
      {
        id: "inventory",
        title: "Inventory Management System",
        tag: "Stock & Warehouses",
        icon: "Package",
        description:
          "Live stock valuation, multi-warehouse sync, SKU barcode scanning, automated re-order thresholds, vendor purchase orders, and shrinkage audits.",
        features: [
          "Multi-warehouse & batch tracking",
          "Low stock alerts & automated PO generation",
          "Barcode & QR code generation",
          "Dead stock & wastage reports",
        ],
      },
      {
        id: "store",
        title: "Store & Retail Management System",
        tag: "Retail & POS Billing",
        icon: "Store",
        description:
          "Lightning-fast counter Point-of-Sale (POS), barcode reader integration, daily cash drawer reconciliation, customer loyalty tracking, and instant GST invoice printing.",
        features: [
          "Ultra-fast billing (<3 seconds per bill)",
          "Cash, UPI & card reconciliation",
          "Thermal printer receipt support",
          "Daily sales, profit & ledger reports",
        ],
      },
      {
        id: "technician",
        title: "Technician & Field Service Management",
        tag: "Field Operations & AMC",
        icon: "Wrench",
        description:
          "Work order ticketing, live technician dispatching, on-site GPS logs, spare parts usage tracking, customer feedback, and digital sign-off approvals.",
        features: [
          "Task allocation & mobile engineer queue",
          "Parts & materials consumption logs",
          "Customer e-signatures on completion",
          "AMC & warranty service tracking",
        ],
      },
      {
        id: "hrms",
        title: "HR & Payroll Management (HRMS)",
        tag: "Workforce & Payroll",
        icon: "Users",
        description:
          "Centralized employee master database, biometric & geo-fenced attendance logs, shift rosters, leave requests, and automated one-click monthly payroll generation.",
        features: [
          "Biometric & shift attendance sync",
          "Automated salary slips & PF/ESI deductions",
          "Leave approval & calendar workflows",
          "Employee self-service records",
        ],
      },
      {
        id: "ecommerce",
        title: "E-Commerce & Digital Storefronts",
        tag: "Online Retail & B2B",
        icon: "ShoppingBag",
        description:
          "Scalable B2C storefronts and B2B ordering portals with dynamic catalogs, cart engines, instant payment gateway integration (Razorpay, Stripe), and automated shipping sync.",
        features: [
          "Custom storefronts & product catalog variants",
          "Instant UPI / card checkout gateways",
          "Discount vouchers & coupons engine",
          "Automated order packing & logistics dispatch",
        ],
      },
      {
        id: "pharmacy",
        title: "Pharmacy & Chemist Management",
        tag: "Healthcare & Pharma",
        icon: "Pill",
        description:
          "Strict medicinal batch and expiry date management, Schedule H & H1 drug sale registers, instant generic substitute search, and compliant GST medical billing.",
        features: [
          "Batch number & expiry date auto-alerts",
          "Substitute / molecule search engine",
          "Schedule H drug compliance register",
          "Distributor purchase ledgers",
        ],
      },
      {
        id: "restaurant",
        title: "Restaurant & Food Outlet Management",
        tag: "Dining, Cafes & QSR",
        icon: "UtensilsCrossed",
        description:
          "Interactive floor table management, captain order taking, live Kitchen Order Tickets (KOT) on kitchen display systems, split bill settlements, and recipe inventory deduction.",
        features: [
          "Table & room occupancy layout",
          "Real-time kitchen order tickets (KOT)",
          "Touchscreen quick billing for QSR",
          "Recipe costing & ingredient tracking",
        ],
      },
      {
        id: "clinic",
        title: "Clinic & Hospital Practice Management",
        tag: "Doctors & OPD Centers",
        icon: "Stethoscope",
        description:
          "Multi-doctor appointment schedules, walk-in OPD queue tokens, digital electronic health records (EHR), prescription generator, and automated WhatsApp appointment reminders.",
        features: [
          "OPD appointment & token queue display",
          "Fast prescription printing & symptom templates",
          "Patient history & diagnostic test records",
          "Automated WhatsApp appointment updates",
        ],
      },
    ],
    features: [
      "Modular design — pick any standalone module or run an integrated ERP",
      "Role-Based Access Control (Admin, Branch Manager, Billing Clerk, Field Tech)",
      "Automated GST invoicing, E-Way bills & financial summaries",
      "Offline-first architecture with automatic cloud synchronization",
      "Real-time WhatsApp, SMS & Email alerts for operations",
      "Instant data export to Excel, CSV, PDF, and Tally-compatible ledgers",
    ],
  },
];

export const projectCategories = [
  { id: "all", label: "ALL" },
  { id: "fullstack", label: "FULL STACK" },
  { id: "saas", label: "SAAS & ERP" },
  { id: "nextjs", label: "NEXT.JS" },
  { id: "frontend", label: "FRONTEND" },
];

export default projects;
