import Link from "next/link";
import Image from "next/image";

export default function WebDevelopmentPage() {
  const services = [
    {
      number: "01",
      title: "Business Websites",
      description:
        "Professional company websites that clearly explain your services, build trust, and generate enquiries.",
    },
    {
      number: "02",
      title: "E-Commerce Stores",
      description:
        "Fast online stores with product catalogues, secure payments, order flows, and mobile-first shopping experiences.",
    },
    {
      number: "03",
      title: "Web Applications",
      description:
        "Custom portals, dashboards, booking systems, customer platforms, and business workflow applications.",
    },
    {
      number: "04",
      title: "Website Redesign",
      description:
        "Modernise outdated websites with stronger branding, clearer user journeys, better performance, and improved conversions.",
    },
    {
      number: "05",
      title: "SEO-Ready Development",
      description:
        "Clean structure, semantic content, performance improvements, and technical foundations that support search visibility.",
    },
    {
      number: "06",
      title: "Website Maintenance",
      description:
        "Ongoing updates, security checks, bug fixes, content changes, monitoring, and continuous improvements.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discover",
      text: "We understand your business, audience, goals, competitors, and the actions you want visitors to take.",
    },
    {
      step: "02",
      title: "Design",
      text: "We shape the visual identity, page structure, user journey, mobile layout, and conversion-focused interface.",
    },
    {
      step: "03",
      title: "Build",
      text: "We develop a fast, secure, responsive website using modern tools and clean, scalable code.",
    },
    {
      step: "04",
      title: "Launch",
      text: "We test across devices, optimise performance, deploy the website, and support future growth.",
    },
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "API Integration",
    "Cloud Deployment",
    "SEO Optimisation",
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      {/* ===== BRAND BACKGROUND ORBS (using primary & secondary) ===== */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 animate-[float_8s_ease-in-out_infinite] rounded-full bg-[#0A66C2]/10 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 animate-[float_10s_ease-in-out_infinite] rounded-full bg-[#38BDF8]/15 blur-3xl" style={{ animationDelay: "-4s" }} />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-[float_9s_ease-in-out_infinite] rounded-full bg-[#0A66C2]/8 blur-3xl" style={{ animationDelay: "-2s" }} />
      </div>

      {/* ===== INJECT CUSTOM KEYFRAMES ===== */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes pulse-soft {
          0%, 100% { box-shadow: 0 0 0 0 rgba(10, 102, 194, 0.5); }
          50% { box-shadow: 0 0 0 20px rgba(10, 102, 194, 0); }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        @keyframes card-lift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 2.5s infinite; }
        .animate-gradient-flow { background-size: 200% 200%; animation: gradient-flow 4s ease infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; opacity: 0; }
        .animate-tilt { animation: tilt 8s ease-in-out infinite; }
        .animate-card-lift { animation: card-lift 5s ease-in-out infinite; }
      `}</style>

      {/* ===== HEADER (white background, brand colors) ===== */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/vgs-logo.png"
              alt="Venza Global Services"
              width={260}
              height={80}
              priority
              className="hidden sm:block h-8 w-auto md:h-auto md:w-auto"
            />
            <Image
              src="/images/vgs-logo.png"
              alt="Venza Global Services"
              width={180}
              height={70}
              priority
              className="block sm:hidden h-10 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-[#1F2937]">
            <Link href="/" className="hover:text-[#0A66C2] transition">Home</Link>
            <Link href="/#about" className="hover:text-[#0A66C2] transition">About</Link>
            <Link href="/services" className="hover:text-[#0A66C2] transition">Services</Link>
            <Link href="/#portfolio" className="hover:text-[#0A66C2] transition">Portfolio</Link>
            <Link href="/#industries" className="hover:text-[#0A66C2] transition">Industries</Link>
            <Link href="/testimonials" className="hover:text-[#0A66C2] transition">Testimonials</Link>
            <Link href="/contact" className="hover:text-[#0A66C2] transition">Contact</Link>
          </nav>

          <Link
            href="/consultation"
            className="rounded-xl bg-[#0A66C2] px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-bold text-white shadow-md shadow-[#0A66C2]/20 transition hover:bg-[#094e9e] hover:shadow-lg"
          >
            Start a Project
          </Link>
        </div>
        <div className="lg:hidden overflow-x-auto pb-2 px-6">
          <div className="flex gap-4 text-sm font-medium text-[#1F2937]">
            <Link href="/" className="whitespace-nowrap hover:text-[#0A66C2]">Home</Link>
            <Link href="/#about" className="whitespace-nowrap hover:text-[#0A66C2]">About</Link>
            <Link href="/services" className="whitespace-nowrap hover:text-[#0A66C2]">Services</Link>
            <Link href="/#portfolio" className="whitespace-nowrap hover:text-[#0A66C2]">Portfolio</Link>
            <Link href="/#industries" className="whitespace-nowrap hover:text-[#0A66C2]">Industries</Link>
            <Link href="/testimonials" className="whitespace-nowrap hover:text-[#0A66C2]">Testimonials</Link>
            <Link href="/contact" className="whitespace-nowrap hover:text-[#0A66C2]">Contact</Link>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-sm text-[#6B7280] animate-fade-in">
            <Link href="/" className="hover:text-[#0A66C2]">Home</Link> /
            <Link href="/services" className="hover:text-[#0A66C2]"> Services</Link> /
            <span className="text-[#1F2937] font-medium"> Web Development</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/20 bg-[#0A66C2]/5 px-4 py-2 text-sm font-semibold text-[#0A66C2] animate-fade-in-up">
                <span className="h-2 w-2 animate-ping rounded-full bg-[#0A66C2]" />
                Websites built to perform, convert and grow
              </div>

              <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-[#1F2937] animate-fade-in-up">
                Web experiences that make your business{" "}
                <span className="bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] bg-clip-text text-transparent animate-gradient-flow">
                  impossible to ignore.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#6B7280] sm:text-xl animate-fade-in-up">
                Venza Global Services designs and develops fast, modern,
                mobile-first websites and web applications that turn visitors
                into enquiries, customers, and long-term opportunities.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row animate-fade-in-up">
                <Link
                  href="/consultation"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-7 py-4 font-bold text-white shadow-xl shadow-[#0A66C2]/20 transition hover:bg-[#094e9e] hover:shadow-2xl animate-pulse-soft"
                >
                  Build My Website
                  <span className="transition duration-300 group-hover:translate-x-1">→</span>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-[#1F2937] transition hover:border-[#0A66C2] hover:bg-[#F0F7FF]"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            {/* Browser Mockup (recolored) */}
            <div className="relative mx-auto w-full max-w-xl animate-tilt">
              <div className="absolute -inset-6 animate-[pulse_5s_ease-in-out_infinite] rounded-[2.5rem] bg-gradient-to-r from-[#0A66C2]/20 to-[#38BDF8]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-3 shadow-2xl animate-card-lift">
                <div className="flex items-center gap-2 border-b border-gray-100 px-3 pb-3">
                  <span className="h-3 w-3 rounded-full bg-gray-300" />
                  <span className="h-3 w-3 rounded-full bg-gray-300" />
                  <span className="h-3 w-3 rounded-full bg-gray-300" />
                  <div className="ml-3 h-7 flex-1 rounded-lg bg-gray-100 px-3 py-1 text-xs text-[#6B7280]">
                    your-business.com
                  </div>
                </div>

                <div className="space-y-4 p-4">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 rounded bg-[#0A66C2]/70" />
                    <div className="flex gap-2">
                      <div className="h-2 w-7 rounded bg-gray-200" />
                      <div className="h-2 w-7 rounded bg-gray-200" />
                      <div className="h-2 w-7 rounded bg-gray-200" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#38BDF8] p-6 animate-pulse">
                    <div className="h-4 w-3/4 rounded bg-white/80" />
                    <div className="mt-3 h-3 w-full rounded bg-white/30" />
                    <div className="mt-2 h-3 w-5/6 rounded bg-white/30" />
                    <div className="mt-5 h-9 w-28 rounded-xl bg-white" />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="animate-[pulse_3s_ease-in-out_infinite] rounded-xl border border-gray-100 bg-gray-50 p-3"
                        style={{ animationDelay: `${item * 0.35}s` }}
                      >
                        <div className="h-8 rounded-lg bg-[#0A66C2]/20" />
                        <div className="mt-3 h-2 w-3/4 rounded bg-gray-200" />
                        <div className="mt-2 h-2 w-full rounded bg-gray-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 sm:-left-10 rounded-2xl border border-[#0A66C2]/20 bg-white p-4 shadow-xl animate-fade-in-up">
                <p className="text-xs text-[#6B7280]">Designed for</p>
                <p className="mt-1 font-bold text-[#0A66C2]">Real business growth</p>
              </div>
              <div className="absolute -right-3 top-12 sm:-right-8 rounded-2xl border border-[#38BDF8]/20 bg-white p-4 shadow-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <p className="text-xs text-[#6B7280]">Built with</p>
                <p className="mt-1 font-bold text-[#0A66C2]">Modern technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID (white cards, blue accents) ===== */}
      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center animate-fade-in">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">What We Create</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">More than a website. A digital business asset.</h2>
            <p className="mt-4 text-[#6B7280]">Every project is designed around your users, your business goals, and the next action you want visitors to take.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-[#0A66C2]/40 hover:shadow-xl hover:shadow-[#0A66C2]/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute right-5 top-5 text-5xl font-black text-[#0A66C2]/5 transition duration-500 group-hover:text-[#0A66C2]/10">
                  {service.number}
                </div>
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#0A66C2]/10 text-lg font-bold text-[#0A66C2] transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {service.number}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937]">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-[#6B7280]">{service.description}</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#0A66C2] transition-all duration-500 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS (light cards, blue number) ===== */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">The VGS Process</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">Clear process. No confusion. Better outcomes.</h2>
            </div>
            <Link href="/consultation" className="inline-flex w-fit items-center gap-2 font-semibold text-[#0A66C2] transition hover:text-[#094e9e] animate-pulse-soft">
              Start with a free consultation <span>→</span>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <article
                key={item.step}
                className="relative rounded-3xl border border-gray-200 bg-white p-7 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-5xl font-black text-[#0A66C2]/25 animate-float">{item.step}</p>
                <h3 className="mt-6 text-xl font-bold text-[#1F2937]">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-[#6B7280]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY MARQUEE (brand blue background) ===== */}
      <section className="border-y border-gray-100 bg-[#0A66C2]/5 px-6 py-14">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-7 text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2] animate-fade-in">Built with modern technology</p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="rounded-full border border-[#0A66C2]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A66C2] transition hover:scale-110 hover:border-[#0A66C2] animate-pulse-soft"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION (primary blue gradient) ===== */}
      <section className="px-6 py-24 bg-white">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#0A66C2]/20 bg-gradient-to-br from-[#0A66C2] to-[#38BDF8] p-8 text-center shadow-2xl shadow-[#0A66C2]/20 sm:p-14 animate-gradient-flow">
          <div className="absolute -left-20 -top-20 h-56 w-56 animate-float rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-64 w-64 animate-float rounded-full bg-white/20 blur-3xl" style={{ animationDelay: "-5s" }} />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80 animate-fade-in">Your next digital move starts here</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-5xl text-white animate-fade-in-up">Ready for a website that works as hard as you do?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 animate-fade-in-up">
              Tell us your idea, current problem, or business goal. We will help you choose the right website or web application solution.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row animate-fade-in-up">
              <Link href="/consultation" className="rounded-xl bg-white px-8 py-4 font-bold text-[#0A66C2] transition hover:bg-gray-100 shadow-lg animate-pulse-soft">
                Request Free Consultation
              </Link>
              <Link href="/contact" className="rounded-xl border border-white/30 bg-transparent px-8 py-4 font-bold text-white transition hover:bg-white/10">
                Contact VGS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER (dark slate) ===== */}
      <footer className="bg-[#1F2937] text-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center text-sm text-gray-300 md:flex-row md:text-left">
          <p>© 2026 Venza Global Services. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/" className="transition hover:text-[#38BDF8]">Home</Link>
            <Link href="/services" className="transition hover:text-[#38BDF8]">Services</Link>
            <Link href="/contact" className="transition hover:text-[#38BDF8]">Contact</Link>
            <Link href="/consultation" className="transition hover:text-[#38BDF8]">Consultation</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}