// ==========================================
// File: src/app/newsletter/page.tsx
// ==========================================

import type { Metadata } from "next";

import NewsletterSection from "@/app/components/newsletter/NewsletterSection";

export const metadata: Metadata = {
  title: "Newsletter | Venza Global Services",
  description:
    "Subscribe to the Venza Global Services newsletter for AI, Cloud, Cybersecurity, Software Development, Digital Transformation and enterprise technology insights.",
  keywords: [
    "Venza Global Services",
    "Newsletter",
    "Technology Newsletter",
    "AI",
    "Cloud",
    "Cybersecurity",
    "Software Development",
    "Digital Transformation",
    "Enterprise IT",
  ],
  openGraph: {
    title: "VGS Newsletter",
    description:
      "Subscribe for enterprise technology insights from Venza Global Services.",
    type: "website",
    url: "https://www.venzags.com/newsletter",
  },
};

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* Hero + Newsletter Form */}
      <NewsletterSection />

    </main>
  );
}