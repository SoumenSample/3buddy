import "./globals.css";

export const metadata = {
  title: "3buddy — Full Stack Developers & Digital Studio",
  description:
    "Portfolio of 3buddy, a creative team of full-stack developers building digital experiences that solve real problems. Explore our journey, skills, and projects.",
  keywords: [
    "3buddy",
    "developers",
    "full stack",
    "portfolio",
    "web developers",
    "software engineering",
    "Next.js",
    "React",
    "Node.js",
  ],
  authors: [{ name: "3buddy" }],
  openGraph: {
    title: "3buddy — Full Stack Developers & Digital Studio",
    description:
      "Portfolio of 3buddy, a creative team of full-stack developers building digital experiences that solve real problems.",
    url: "https://3buddy.com",
    siteName: "3buddy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3buddy — Full Stack Developers & Digital Studio",
    description:
      "Portfolio of 3buddy, a creative team of full-stack developers building digital experiences that solve real problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-paper text-black selection:bg-yellow selection:text-black font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
