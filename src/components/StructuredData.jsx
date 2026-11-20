export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://3buddy.me";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${baseUrl}/#organization`,
        name: "3buddy",
        alternateName: ["3buddy Studio", "Three Buddy", "3buddy Development"],
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${baseUrl}/#logo`,
          url: `${baseUrl}/icon-512.png`,
          contentUrl: `${baseUrl}/icon-512.png`,
          caption: "3buddy Studio Logo",
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          "@id": `${baseUrl}/#primaryimage`,
          url: `${baseUrl}/og-image.png`,
          contentUrl: `${baseUrl}/og-image.png`,
          caption: "3buddy — Full Stack Developers & Digital Studio",
          width: 1200,
          height: 630,
        },
        description:
          "Passionate team of full-stack developers in Kolkata, India crafting modern web applications, scalable APIs, SaaS platforms, and custom software systems.",
        slogan: "We build digital experiences that solve real problems.",
        email: "3buddysolutions@gmail.com",
        telephone: ["+91 9800166299", "+91 9883756335", "+91 7601802441"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "700001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "22.5726",
          longitude: "88.3639",
        },
        sameAs: [
          "https://github.com/3buddy",
          "https://linkedin.com/company/3buddy",
          "https://twitter.com/3buddy",
        ],
        priceRange: "$$",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
        founder: [
          {
            "@type": "Person",
            name: "Soumen Maji",
            jobTitle: "Full Stack Developer",
            telephone: "+91 9800166299",
            sameAs: [
              "https://github.com/3buddy",
              "https://linkedin.com/company/3buddy",
              "https://twitter.com/3buddy",
            ],
          },
          {
            "@type": "Person",
            name: "Abhijit Kayal",
            jobTitle: "Software Developer (SDE)",
            telephone: "+91 9883756335",
            sameAs: [
              "https://github.com/3buddy",
              "https://linkedin.com/company/3buddy",
              "https://twitter.com/3buddy",
            ],
          },
          {
            "@type": "Person",
            name: "Shivam Kumar Rai",
            jobTitle: "Software Development Engineer (SDE)",
            telephone: "+91 7601802441",
            sameAs: [
              "https://github.com/3buddy",
              "https://linkedin.com/company/3buddy",
              "https://twitter.com/3buddy",
            ],
          },
        ],
        knowsAbout: [
          "Full Stack Web Development",
          "Next.js",
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "Supabase",
          "RESTful APIs",
          "Tailwind CSS",
          "Framer Motion",
          "SaaS Architecture",
          "Decentralized Applications (DApps)",
          "Automation & n8n Workflows",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "3buddy Engineering Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full Stack Web & SaaS Development",
                description:
                  "End-to-end development of custom modern web apps and SaaS platforms using Next.js, React, Node.js, and cloud databases.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Scalable REST APIs & Backend Engineering",
                description:
                  "Clean, fast, documented, and secure API architectures, database schemas, and microservices.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Enterprise Software Systems",
                description:
                  "Bespoke business management software including Inventory, Billing/GST, CRM, Clinic Management, and Field Operations.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WhatsApp Automations & Chatbots",
                description:
                  "Conversational booking bots and automated scheduling dashboards powered by WhatsApp Cloud API.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "3buddy — Full Stack Developers & Digital Studio",
        description:
          "Official portfolio of 3buddy, full-stack developers and digital studio in Kolkata, India.",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "3buddy — Full Stack Developers & Digital Studio | Kolkata, India",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#organization`,
        },
        primaryImageOfPage: {
          "@id": `${baseUrl}/#primaryimage`,
        },
        description:
          "Portfolio of 3buddy, a creative team of full-stack developers building digital experiences that solve real problems. Explore our journey, skills, and services.",
        inLanguage: "en-US",
        breadcrumb: {
          "@id": `${baseUrl}/#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${baseUrl}/#about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Team",
            item: `${baseUrl}/#team`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Skills",
            item: `${baseUrl}/#skills`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: `${baseUrl}/#contact`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
