import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Strategic Consulting",
    text: "We help organizations make clearer decisions, identify opportunities, and create practical growth roadmaps.",
  },
  {
    number: "02",
    title: "Technology and Innovation",
    text: "Through VGS, the technology wing of VIJLAK, we support software, Web3, blockchain, AI, cloud, and digital transformation.",
  },
  {
    number: "03",
    title: "Global Collaboration",
    text: "We work across industries, markets, and partnerships with a long-term view of business growth and capability building.",
  },
];

const values = [
  "Integrity and transparency",
  "Practical innovation",
  "Long-term partnerships",
  "Global perspective",
  "Responsible growth",
  "Continuous learning",
];

export default function WhoWeArePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 px-6 py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Venza Global Services
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Who We Are
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200">
            Venza Global Services is a technology-focused consulting brand
            helping businesses use digital systems, software, AI, cloud, and
            innovation to grow with confidence.
          </p>
        </div>
      </section>

      {/* VGS introduction */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Our Purpose
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Technology should solve real business problems.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              VGS helps organizations move from manual, disconnected, and
              outdated processes toward practical digital systems that improve
              efficiency, customer experience, security, and decision-making.
            </p>

            <p>
              Our work includes AI solutions, custom software, websites,
              mobile applications, cloud systems, cybersecurity, automation,
              and technology consulting.
            </p>

            <p>
              We focus on clear strategy and useful execution rather than
              unnecessary complexity or technology that does not create value.
            </p>
          </div>
        </div>
      </section>

      {/* VIJLAK clickable card */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/vijlak"
            className="group block rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl sm:p-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Part of the VIJLAK Ecosystem
                </p>

                <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  VGS operates under VIJLAK.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-700">
                  VIJLAK is the wider consulting and innovation ecosystem
                  established in 2009. Venza Global Services is its
                  technology-focused wing, supporting Web3, blockchain,
                  artificial intelligence, cloud technologies, custom software,
                  and digital transformation.
                </p>
              </div>

              <div className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white transition group-hover:bg-cyan-600">
                Explore VIJLAK
                <span className="text-xl">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            What We Stand For
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold">
            A practical approach to digital transformation.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <p className="text-sm font-bold text-cyan-300">
                  {pillar.number}
                </p>

                <h3 className="mt-5 text-2xl font-bold">{pillar.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Principles behind every engagement.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We aim to combine innovation with responsibility, delivering
              solutions that are useful, realistic, scalable, and aligned with
              long-term business value.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold shadow-sm"
              >
                <span className="mr-3 text-cyan-600">✓</span>
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            Explore how VGS can support your technology, business, or digital
            transformation journey.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/consultation"
              className="rounded-xl bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-cyan-100"
            >
              Book a Consultation →
            </Link>

            <Link
              href="/vijlak"
              className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Discover VIJLAK →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}