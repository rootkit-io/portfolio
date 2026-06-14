import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { cn } from "@/lib/utils";
import { CursorProvider, Cursor } from '@/components/animate-ui/components/animate/cursor';

export const metadata: Metadata = {
  title: "Web Development · Web Apps · Technical Partner",
  description:
    "I build fast, beautiful websites and web apps for founders and companies who value quality. Next.js, React, TypeScript, Go, and more.",
  keywords: [
    "Web Developer",
    "Website Development",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Apps",
    "Founding Engineer",
    "Freelance Developer",
  ],
  openGraph: {
    title: "Web Development · Web Apps · Technical Partner",
    description:
      "I build fast, beautiful websites and web apps for founders and companies who value quality.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Web Development · Web Apps · Technical Partner",
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
    <html lang="en" className={cn(spaceGrotesk.variable, inter.variable)}>
      <body>
        <SmoothScrollProvider>
          <CursorProvider>
            <Cursor className="hidden md:block" />
            {children}
          </CursorProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
