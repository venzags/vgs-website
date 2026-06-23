import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "AI Business Automation",
    category: "AI & Automation",
    description:
      "Custom AI automation systems for customer support, workflow automation, lead management, and business operations.",
    image: "/images/products/ai-business-automation.png",
  },
  {
    name: "Business Management Platform",
    category: "Software Products",
    description:
      "A scalable dashboard for managing customers, projects, teams, reports, and day-to-day business processes.",
    image: "/images/products/business-management-platform.png",
  },
  {
    name: "Cloud Infrastructure Setup",
    category: "Cloud Solutions",
    description:
      "Secure cloud deployment, hosting, backup, monitoring, and scalable infrastructure for growing businesses.",
    image: "/images/products/cloud-infrastructure.png",
  },
  {
    name: "Cyber Security Assessment",
    category: "Security Products",
    description:
      "Security review, vulnerability assessment, access controls, and recommendations to protect your digital systems.",
    image: "/images/products/cyber-security-assessment.png",
  },
  {
    name: "Digital Growth Toolkit",
    category: "Digital Marketing",
    description:
      "A practical package for websites, SEO, lead generation, analytics, campaign tracking, and digital growth.",
    image: "/images/products/digital-growth-toolkit.png",
  },
  {
    name: "Custom Website Package",
    category: "Web Development",
    description:
      "Modern responsive business websites built for performance, credibility, lead generation, and future expansion.",
    image: "/images/products/custom-website-package.png",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,_#0e7490_0%,_#0f172a_42%,_#020617_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Venza Global Services
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Products Built for Modern Business Growth
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore VGS digital products, business platforms, AI automation,
            cloud services, security solutions, and growth-focused technology
            packages.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/consultation"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Discuss Your Requirement →
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Contact VGS
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            VGS Solutions Catalogue
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Technology Products and Service Packages
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Every VGS product can be customized based on your business size,
            industry, target market, technical requirements, and growth goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/[0.07]"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                  {product.category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {product.description}
                </p>

                <Link
                  href="/consultation"
                  className="mt-6 inline-flex font-bold text-cyan-300 transition hover:text-cyan-200"
                >
                  Request Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-6 py-14 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Need a custom solution?
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Let VGS build the right product for your business.
            </h2>
          </div>

          <Link
            href="/consultation"
            className="whitespace-nowrap rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Free Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}