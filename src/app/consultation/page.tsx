// src/app/consultation/page.tsx

import type { Metadata } from "next";

import ConsultationHero from "@/app/components/consultation/ConsultationHero";
import ConsultationBenefits from "@/app/components/consultation/ConsultationBenefits";
import ConsultationForm from "@/app/components/consultation/ConsultationForm";
import ConsultationProcess from "@/app/components/consultation/ConsultationProcess";
import ConsultationFAQ from "@/app/components/consultation/ConsultationFAQ";
import ConsultationSidebar from "@/app/components/consultation/ConsultationSidebar";

export const metadata: Metadata = {
  title: "Free Business Consultation | Venza Global Services",
  description:
    "Book a free business consultation with Venza Global Services to discuss AI, software development, cloud solutions, digital transformation, cybersecurity, enterprise applications and technology strategy.",
  keywords: [
    "Business Consultation",
    "AI Consulting",
    "Digital Transformation",
    "Software Development",
    "Cloud Solutions",
    "Cybersecurity",
    "Enterprise IT",
    "Technology Strategy",
  ],
  alternates: {
    canonical: "https://www.venzags.com/consultation",
  },
  openGraph: {
    title: "Free Business Consultation | Venza Global Services",
    description:
      "Schedule a free consultation with Venza experts to accelerate your business growth.",
    url: "https://www.venzags.com/consultation",
    siteName: "Venza Global Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/consultation/consultation-og.png",
        width: 1200,
        height: 630,
        alt: "Free Business Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Business Consultation | Venza Global Services",
    description:
      "Book a free consultation with Venza experts.",
    images: ["/images/consultation/consultation-og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Venza Global Services",
  url: "https://www.venzags.com/consultation",
  description:
    "Free business consultation for software development, AI, cloud infrastructure and digital transformation.",
};

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <ConsultationHero />

      <ConsultationBenefits />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

          <ConsultationForm />

          <ConsultationSidebar />

        </div>
      </section>

      <ConsultationProcess />

      <ConsultationFAQ />

    </main>
  );
}