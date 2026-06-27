import {
  ContactHero,
  ContactForm,
  ContactSidebar,
  ContactFAQ,
  ContactInfo,
} from "@/app/components/contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form + Sidebar */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <ContactForm />
          <ContactSidebar />
        </div>
      </section>

      {/* Company Contact Information (Optional) */}
      <ContactInfo />

      {/* Frequently Asked Questions */}
      <ContactFAQ />
    </main>
  );
}