import "./globals.css";
import StructuredData from "@/components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://3buddy.me";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "3buddy — Full Stack Developers & Digital Studio | Kolkata, India",
    template: "%s | 3buddy",
  },
  description:
    "Portfolio of 3buddy — A creative team of full-stack developers in Kolkata, India crafting high-performance web applications, scalable REST APIs, SaaS platforms, and bespoke business software systems.",
  applicationName: "3buddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "3buddy",
    "3buddy Studio",
    "three buddy",
    "full stack developers",
    "full stack developers Kolkata",
    "web development studio India",
    "Next.js developers",
    "React developers",
    "Node.js backend engineers",
    "MERN stack developers",
    "SaaS product development",
    "custom software development",
    "website development Kolkata",
    "website developer",
    "website development company",
    "REST API development",
    "DApps developers",
    "Three.js 3D web development",
    "freelance full stack team",
    "Soumen Maji",
    "Abhijit Kayal",
    "Shivam Kumar Rai",
  ],
  authors: [
    { name: "3buddy", url: siteUrl },
    { name: "Soumen Maji" },
    { name: "Abhijit Kayal" },
    { name: "Shivam Kumar Rai" },
  ],
  creator: "3buddy",
  publisher: "3buddy",
  category: "technology",
  classification: "Portfolio & Software Engineering Studio",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "3buddy Portfolio",
    title: "3buddy — Full Stack Developers & Digital Studio",
    description:
      "A creative team of full-stack developers in Kolkata, India building high-impact web apps, scalable APIs, SaaS products, and custom business management software.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "3buddy — Full Stack Developers & Digital Studio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@3buddy",
    creator: "@3buddy",
    title: "3buddy — Full Stack Developers & Digital Studio",
    description:
      "A creative team of full-stack developers in Kolkata, India building high-impact web apps, scalable APIs, SaaS products, and custom business management software.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kolkata",
    "geo.position": "22.5726;88.3639",
    ICBM: "22.5726, 88.3639",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "3buddy",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        <link rel="canonical" href={siteUrl} />
        <link
          rel="alternate"
          type="text/plain"
          href={`${siteUrl}/llms.txt`}
          title="LLM Context"
        />
        <link
          rel="sitemap"
          type="application/xml"
          href={`${siteUrl}/sitemap.xml`}
          title="Sitemap"
        />
        <StructuredData />
      </head>
      <body className="min-h-screen bg-paper text-black selection:bg-yellow selection:text-black font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
