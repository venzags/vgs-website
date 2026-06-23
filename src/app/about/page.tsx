import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Cloud,
  Code2,
  Globe2,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const services = [
  {
    title: "AI Solutions",
    description:
      "Practical artificial intelligence systems that help businesses automate workflows, improve decision-making, and create better customer experiences.",
    icon: BrainCircuit,
  },
  {
    title: "Machine Learning",
    description:
      "Data-driven machine learning models designed to identify patterns, forecast outcomes, and support smarter business operations.",
    icon: Lightbulb,
  },
  {
    title: "Software Development",
    description:
      "Modern, scalable software products built around real business needs, operational efficiency, and long-term growth.",
    icon: Code2,
  },
  {
    title: "Cloud Services",
    description:
      "Cloud-ready infrastructure, applications, migration support, and scalable digital systems for growing organizations.",
    icon: Cloud,
  },
];

const values = [
  {
    title: "Reliable Delivery",
    description:
      "We focus on practical solutions, clear communication, secure execution, and work that supports measurable business outcomes.",
    icon: ShieldCheck,
  },
  {
    title: "Global Mindset",
    description:
      "VGS works with a global perspective, helping organizations adapt technology solutions for different markets, customers, and business models.",
    icon: Globe2,
  },
  {
    title: "Partnership Approach",
    description:
      "We do not treat technology as a one-time project. We aim to become a long-term technology partner for our clients.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-600 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              About Venza Global Services
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Technology built for{" "}
              <span className="text-cyan-300">real business growth.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Venza Global Services is a technology-focused consulting brand
              delivering AI solutions, Machine Learning, Software Development,
              Cloud Services, and Business Transformation solutions to clients
              across the globe.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Start a Consultation
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-4 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Explore Services
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A global IT solutions provider with a practical approach.
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-300">
              <p>
                Venza Global Services (VGS) is a global IT solutions provider
                focused on delivering modern, scalable, and result-driven
                digital services. We support businesses that need stronger
                technology foundations, better digital operations, and
                intelligent systems that can grow with them.
              </p>

              <p>
                VGS operates under VIJLAK, a legally registered entity. This
                structure allows VGS to bring together technology, consulting,
                business strategy, partnerships, and innovation under one
                broader ecosystem.
              </p>

              <p>
                Our work is designed for businesses that want more than a
                website or software product. We help clients think through
                their digital direction, identify operational gaps, select the
                right technology, and build solutions that are useful beyond
                launch day.
              </p>

              <p>
                From early-stage businesses to established organizations, VGS
                focuses on creating systems that are secure, adaptable, and
                easier to manage. We believe technology should reduce
                complexity, not add more of it.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-7 shadow-xl shadow-cyan-950/20">
              <BadgeCheck className="text-cyan-300" size={34} />
              <h3 className="mt-5 text-xl font-bold">Modern Technology</h3>
              <p className="mt-3 leading-7 text-slate-300">
                AI, cloud, automation, software engineering, cybersecurity,
                and digital transformation capabilities for modern businesses.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-slate-900 p-7 shadow-xl shadow-blue-950/20">
              <Users className="text-blue-300" size={34} />
              <h3 className="mt-5 text-xl font-bold">Client Focused</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Every solution should solve a real business problem, improve
                operations, or create a measurable opportunity.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-400/20 bg-slate-900 p-7 shadow-xl shadow-violet-950/20 sm:col-span-2">
              <Globe2 className="text-violet-300" size={34} />
              <h3 className="mt-5 text-xl font-bold">Built for Global Growth</h3>
              <p className="mt-3 leading-7 text-slate-300">
                VGS is designed with a global outlook. We support clients
                across industries and regions with scalable digital services,
                strategic technology guidance, and long-term innovation
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              What We Deliver
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Technology services that support transformation.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              VGS combines consulting thinking with practical implementation.
              The goal is not to use technology because it is popular. The
              goal is to use the right technology for the business problem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-cyan-400/60"
                >
                  <Icon size={34} className="text-cyan-300" />
                  <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-slate-900 p-8 sm:p-10">
            <Target size={42} className="text-cyan-300" />
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Our Mission
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              Reliable technology that empowers businesses.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              To provide reliable, scalable IT solutions that empower
              businesses. We aim to help organizations use technology with
              clarity, confidence, and a focus on long-term value.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-slate-900 p-8 sm:p-10">
            <Globe2 size={42} className="text-blue-300" />
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
              Our Vision
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              A globally trusted technology partner.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              To become a globally trusted technology partner by delivering
              responsible innovation, scalable digital systems, and dependable
              consulting support for businesses navigating change.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Clear thinking. Responsible delivery. Long-term value.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-slate-950 p-7"
                >
                  <Icon size={34} className="text-cyan-300" />
                  <h3 className="mt-5 text-xl font-bold">{value.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIJLAK link */}
      <section className="border-t border-white/10 bg-gradient-to-r from-blue-950 via-slate-950 to-cyan-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              The VIJLAK Ecosystem
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              VGS operates under VIJLAK.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              Explore VIJLAK to understand the wider consulting, technology,
              innovation, partnership, and business ecosystem behind Venza
              Global Services.
            </p>
          </div>

          <Link
            href="/vijlak"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore VIJLAK
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to build something scalable?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Talk with VGS about your technology needs, business transformation
          goals, software project, cloud strategy, or AI opportunity.
        </p>

        <Link
          href="/consultation"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Request Free Consultation
          <ArrowRight size={19} />
        </Link>
      </section>
    </main>
  );
}