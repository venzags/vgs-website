import Link from "next/link";

const capabilities = [
  {
    title: "Artificial Intelligence",
    description:
      "AI automation, intelligent workflows, analytics, chatbots, and business decision systems.",
    href: "/services/ai-solutions",
  },
  {
    title: "Software Engineering",
    description:
      "Web platforms, mobile applications, internal tools, APIs, and scalable business software.",
    href: "/services/software-development",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Cloud migration, deployment systems, secure infrastructure, monitoring, and performance optimisation.",
    href: "/services/cloud-solutions",
  },
  {
    title: "Digital Growth",
    description:
      "SEO, digital marketing, conversion-focused websites, and technology strategy for business growth.",
    href: "/services/digital-marketing",
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            What We Do
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Technology That Moves Businesses Forward
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Venza Global Services helps organisations use technology to
            automate work, improve customer experience, reduce risk, and grow
            with confidence.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 md:grid-cols-2">
            {capabilities.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
                <p className="mt-6 font-bold text-blue-700 group-hover:text-cyan-600">
                  Explore service →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}