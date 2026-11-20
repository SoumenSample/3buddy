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
    name: "WhatsApp Doctor Booking & Clinic Dashboard",
    description:
      "Conversational WhatsApp appointment booking bot with live Next.js clinic dashboard, automated doctor slot scheduling, n8n webhook pipelines, and real-time Supabase patient sync.",
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
      "Engineered an automated 24/7 WhatsApp booking bot connected via n8n workflows with a live Next.js + Supabase dashboard for real-time doctor availability and patient scheduling.",
    features: [
      "24/7 Automated WhatsApp chatbot appointment booking & slot allocation",
      "Real-time Next.js + Supabase clinic management live dashboard",
      "n8n automated patient reminder & follow-up workflows",
      "Instant doctor schedule sync, cancellation & reschedule handling",
      "Digital prescription delivery & patient visit history tracking",
    ],
  },
];

export const projectCategories = [
  { id: "all", label: "ALL" },
  { id: "fullstack", label: "FULL STACK" },
  { id: "nextjs", label: "NEXT.JS" },
  { id: "frontend", label: "FRONTEND" },
  { id: "saas", label: "SAAS" },
];

export default projects;
