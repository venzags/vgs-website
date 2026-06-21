import Link from "next/link";

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Venza Global Services
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            What We Do
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We help businesses use technology to improve operations, build
            digital products, strengthen security, and create sustainable
            growth.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Services
            </Link>

            <Link
              href="/consultation"
              className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-extrabold">Technology Built for Business Results</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-blue-700">Build</h3>
            <p className="mt-3 text-slate-600">
              Websites, mobile apps, software platforms, and cloud systems.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-blue-700">Improve</h3>
            <p className="mt-3 text-slate-600">
              Automation, AI, analytics, operational efficiency, and customer experience.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-blue-700">Protect</h3>
            <p className="mt-3 text-slate-600">
              Cybersecurity, risk reduction, secure infrastructure, and data protection.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}