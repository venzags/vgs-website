import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Venza Global Services
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Our Portfolio
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore selected technology, AI, cloud, software development, and
            digital transformation projects delivered by Venza Global Services.
          </p>

          <Link
            href="/consultation"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start Your Project →
          </Link>
        </div>
      </section>

      {/* Portfolio cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-bold text-cyan-300">AI & Automation</p>
            <h2 className="mt-3 text-2xl font-bold">
              Intelligent Business Automation
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              AI-driven workflow automation designed to reduce repetitive work,
              improve speed, and support smarter decisions.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-bold text-cyan-300">
              Software Development
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Enterprise Management Platform
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Secure web-based business systems for operations, reporting,
              customer management, and internal teams.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-bold text-cyan-300">
              Cloud Infrastructure
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Cloud Modernisation
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Scalable cloud solutions for companies moving from legacy systems
              to modern, secure infrastructure.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-bold text-cyan-300">
              Digital Transformation
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Business Digitalisation
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              End-to-end transformation projects combining strategy, design,
              software, automation, and customer experience.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-bold text-cyan-300">
              Cyber Security
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Security & Risk Assessment
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Security reviews, risk reduction planning, and protection for
              digital systems, data, and business operations.
            </p>
          </article>

          <article className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-7">
            <p className="text-sm font-bold text-cyan-300">Your Project</p>
            <h2 className="mt-3 text-2xl font-bold">
              Build Something Meaningful
            </h2>
            <p className="mt-4 leading-7 text-slate-200">
              Tell us what you want to build. VGS can help with planning,
              technology, design, development, and long-term support.
            </p>

            <Link
              href="/consultation"
              className="mt-6 inline-flex font-bold text-cyan-300 hover:text-cyan-200"
            >
              Request Consultation →
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}