import Link from "next/link";

const serviceAreas = [
  {
    title: "Business & Financial Consulting",
    description:
      "Strategic guidance for business planning, growth, financial direction, and practical decision-making.",
  },
  {
    title: "Marketing & Brand Strategy",
    description:
      "Brand positioning, market communication, customer engagement, and growth-focused marketing support.",
  },
  {
    title: "Technology & Software Development",
    description:
      "Custom software, websites, cloud systems, digital platforms, automation, and business technology solutions.",
  },
  {
    title: "Web3, AI & Blockchain Innovation",
    description:
      "Future-focused technology initiatives including Web3, blockchain, artificial intelligence, automation, and digital innovation.",
  },
  {
    title: "Education & Workforce Development",
    description:
      "Training, skills development, global workforce preparation, and capability-building initiatives.",
  },
  {
    title: "Infrastructure & Project Management",
    description:
      "Structured planning, coordination, implementation support, and project delivery guidance.",
  },
  {
    title: "Global Business & Investment Facilitation",
    description:
      "Support for business opportunities, partnerships, investment discussions, and cross-border growth initiatives.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Connecting organizations, technology providers, investors, and collaborators for meaningful long-term opportunities.",
  },
];

const ecosystemItems = [
  {
    title: "VGS — Venza Global Services",
    description:
      "The technology-focused wing of VIJLAK, delivering AI, Web3, blockchain, cloud, custom software, websites, mobile applications, cybersecurity, and digital transformation services.",
    href: "/",
    button: "Explore VGS Services",
  },
  {
    title: "GBDeal",
    description:
      "A business-focused initiative designed to connect entrepreneurs, investors, companies, and opportunities across markets.",
    href: "/business-enquiry",
    button: "Business Enquiry",
  },
  {
    title: "Vijlak Foundation",
    description:
      "A social-impact initiative focused on education, sustainability, community development, empowerment, and future-readiness.",
    href: "/partnerships",
    button: "Explore Partnerships",
  },
];

const values = [
  {
    title: "Integrity",
    description:
      "We value honesty, transparency, accountability, and responsible relationships.",
  },
  {
    title: "Innovation",
    description:
      "We combine practical thinking with emerging technology and future-focused ideas.",
  },
  {
    title: "Excellence",
    description:
      "We aim to create useful, high-quality work with long-term value.",
  },
  {
    title: "Global Perspective",
    description:
      "We work with a cross-market mindset designed for a changing global environment.",
  },
  {
    title: "Empowerment",
    description:
      "We help people and organizations become more capable, informed, and ready for growth.",
  },
];

export default function VijlakPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 px-6 py-24 text-white sm:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            The VIJLAK Ecosystem
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight sm:text-6xl">
            Consulting, Technology, Innovation and Strategic Growth
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200">
            VIJLAK is a multi-sector consulting and innovation ecosystem
            supporting businesses, entrepreneurs, institutions, investors, and
            communities through strategy, technology, partnerships, and
            future-focused solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/consultation"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Talk to VIJLAK →
            </Link>

            <Link
              href="/business-enquiry"
              className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Business Enquiry →
            </Link>
          </div>
        </div>
      </section>

      {/* VGS relationship */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-sm sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              VIJLAK and VGS
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Venza Global Services operates under VIJLAK.
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
              VGS — Venza Global Services — is the technology-focused wing of
              the VIJLAK ecosystem. VGS operates under VIJLAK, a legally
              registered entity, and provides technology services including
              Web3, blockchain, artificial intelligence, cloud solutions,
              custom software development, websites, mobile applications,
              cybersecurity, and digital transformation consulting.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              Explore VGS Technology Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Origins */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Established in 2009
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              The Origins of VIJLAK
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              VIJLAK was established in 2009 with a clear ambition: to provide
              reliable, diverse, and forward-thinking consultancy services
              that can adapt to an evolving global environment.
            </p>

            <p>
              Founded by Vijaya Lakshmi, VIJLAK began with a small group of
              clients and a commitment to offer more than advice. The focus was
              partnership, innovation, strategic foresight, and practical
              support.
            </p>

            <p>
              Today, VIJLAK has grown into a wider ecosystem that brings
              together consulting, technology, business development, workforce
              initiatives, investment facilitation, and social-impact work.
            </p>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            What VIJLAK Supports
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold">
            Multi-Sector Consulting for a Changing World
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            VIJLAK brings together different areas of expertise to help clients
            make better decisions, build stronger systems, and prepare for
            future opportunities.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/60 hover:bg-white/10"
              >
                <h3 className="text-lg font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            One Ecosystem, Multiple Initiatives
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            The VIJLAK Ecosystem
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            VIJLAK is not just one company or one service. It is an ecosystem
            of specialized divisions and initiatives focused on consulting,
            technology, business opportunities, partnerships, and social
            impact.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {ecosystemItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-8 inline-flex font-bold text-blue-700 transition hover:text-cyan-600"
              >
                {item.button} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-blue-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Our Foundation
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              The Values Behind VIJLAK
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              VIJLAK is built on principles that guide how we work with
              clients, partners, communities, and future opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-blue-800">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            Connect With VIJLAK
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Build the Future With VIJLAK
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Whether you are building a company, exploring technology,
            developing partnerships, planning an investment opportunity, or
            seeking transformation support, VIJLAK is ready to work with you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/consultation"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Book a Consultation →
            </Link>

            <Link
              href="/partnerships"
              className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Explore Partnerships →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}