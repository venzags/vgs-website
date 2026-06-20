import Link from "next/link";

const services = [
  {
    icon: "🤖",
    title: "AI Solutions",
    href: "/services/ai-solutions",
    description:
      "AI-powered automation, analytics, and intelligent business solutions.",
  },
  {
    icon: "🧠",
    title: "Machine Learning",
    href: "/services/machine-learning",
    description:
      "Predictive analytics, deep learning, and intelligent decision systems.",
  },
  {
    icon: "💻",
    title: "Software Development",
    href: "/services/software-development",
    description:
      "Custom software solutions built for performance, scalability, and growth.",
  },
  {
    icon: "🌐",
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Modern websites and web applications built with current technologies.",
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    href: "/services/mobile-applications",
    description:
      "Android and iOS applications with smooth, premium user experiences.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    description:
      "Cloud migration, infrastructure management, and scalable deployments.",
  },
  {
    icon: "📊",
    title: "IT Consulting",
    href: "/services/it-consulting",
    description:
      "Technology strategy, planning, and digital transformation consulting.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "SEO, social media marketing, content strategy, and online growth.",
  },
  {
    icon: "🔒",
    title: "Cyber Security",
    href: "/services/cyber-security",
    description:
      "Security solutions, cyber-risk protection, and safer digital systems.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            ⚡ Your Technology Partner
          </p>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Venza Global Services
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore practical technology services built to help businesses
            automate operations, build better digital products, strengthen
            security, and grow with confidence.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/consultation"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Book Free Consultation
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </p>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Technology Services for Modern Business
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Choose a service to explore our approach, capabilities, and how
              VGS can support your next project.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-blue-700">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-bold text-blue-700">
                  Explore Service
                  <span className="transition duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 px-7 py-12 text-center text-white shadow-xl sm:px-12">
          <h2 className="text-3xl font-extrabold">
            Have a Technology Project in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-50">
            Tell us what you want to build, improve, automate, or secure. We
            will help you identify the right next step.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/consultation"
              className="rounded-xl bg-white px-7 py-3 font-bold text-blue-700 transition hover:bg-slate-100"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/50 px-7 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Contact VGS
            </Link>
          </div>
        </div>
      </section>

      {/* Footer – now correctly inside the component */}
      <footer className="bg-[#1F2937] text-white px-6 py-8 text-center text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-300">© 2026 Venza Global Services. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-[#38BDF8] transition">Home</Link>
            <Link href="/services" className="hover:text-[#38BDF8] transition">Services</Link>
            <Link href="/contact" className="hover:text-[#38BDF8] transition">Contact</Link>
            <Link href="/consultation" className="hover:text-[#38BDF8] transition">Consultation</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}