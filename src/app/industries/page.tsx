import Link from "next/link";

const industries = [
  {
    title: "Healthcare & Wellness",
    description:
      "Digital systems, secure data workflows, appointment platforms, patient communication, and operational automation.",
  },
  {
    title: "Finance & FinTech",
    description:
      "Secure platforms, financial dashboards, automation, compliance-focused workflows, and customer-facing digital products.",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Online stores, inventory systems, customer engagement tools, payment integrations, and data-driven growth solutions.",
  },
  {
    title: "Education & EdTech",
    description:
      "Learning platforms, student portals, online assessments, training systems, and digital education infrastructure.",
  },
  {
    title: "Real Estate & Construction",
    description:
      "Property platforms, lead management, project dashboards, site operations tools, and digital customer journeys.",
  },
  {
    title: "Travel & Hospitality",
    description:
      "Booking systems, guest experience platforms, travel operations tools, marketing automation, and customer support solutions.",
  },
  {
    title: "Manufacturing & Logistics",
    description:
      "Supply-chain visibility, inventory management, operational dashboards, process automation, and connected business systems.",
  },
  {
    title: "Government & Public Sector",
    description:
      "Citizen-facing portals, service delivery platforms, secure workflows, digital records, and modern public infrastructure.",
  },
  {
    title: "Startups & Growing Businesses",
    description:
      "MVP development, product strategy, scalable cloud systems, AI adoption, digital marketing, and long-term technology support.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Venza Global Services
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Industries We Serve
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            VGS helps organisations across industries use AI, cloud, software,
            cybersecurity, automation, and digital strategy to build stronger,
            smarter, and more scalable businesses.
          </p>

          <Link
            href="/consultation"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Discuss Your Industry Needs →
          </Link>
        </div>
      </section>

      {/* Industry cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Sector Expertise
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Technology designed around real business challenges
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            We do not sell generic technology packages. Every industry has
            different risks, customers, workflows, regulations, and growth
            opportunities. VGS designs solutions around those realities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <h3 className="text-xl font-bold text-white">
                {industry.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {industry.description}
              </p>

              <Link
                href="/consultation"
                className="mt-6 inline-flex font-bold text-cyan-300 transition hover:text-cyan-200"
              >
                Explore Solutions →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            VGS Industry Solutions
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
            Your industry has unique problems. Your technology should reflect
            that.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Talk with Venza Global Services about your business model,
            operational challenges, digital goals, and technology roadmap.
          </p>

          <Link
            href="/consultation"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}