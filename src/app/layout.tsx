import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const siteTitle = `${portfolio.hero.name} | Full-Stack Engineer`;
const siteDescription =
  "Backend-leaning full-stack engineer in Barcelona building SaaS systems across frontend, APIs, databases, DevOps, Linux, and security-minded architecture.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: portfolio.hero.name }],
  creator: portfolio.hero.name,
  publisher: portfolio.hero.name,
  keywords: [
    "Aditya Singh",
    "Full-Stack Engineer",
    "Backend Engineer",
    "Product Engineer",
    "Founding Engineer",
    "Next.js",
    "TypeScript",
    "SaaS",
    "APIs",
    "PostgreSQL",
    "DevOps",
    "Linux",
    "Security",
    "Barcelona",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Aditya Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
