import Link from "next/link";
import Image from "next/image";

export default function MobileApplicationsPage() {
  const appServices = [
    {
      icon: "📱",
      title: "Android App Development",
      description:
        "Fast, reliable Android applications built for customers, employees, sales teams, delivery teams, and business operations.",
    },
    {
      icon: "🍎",
      title: "iOS App Development",
      description:
        "Premium iPhone and iPad app experiences designed with clean interfaces, strong performance, and secure user journeys.",
    },
    {
      icon: "⚡",
      title: "Cross-Platform Apps",
      description:
        "Build one powerful application for Android and iOS while reducing development time, cost, and maintenance effort.",
    },
    {
      icon: "🛒",
      title: "E-Commerce Apps",
      description:
        "Mobile shopping apps with products, carts, payments, orders, offers, customer accounts, and push notifications.",
    },
    {
      icon: "📊",
      title: "Business & Dashboard Apps",
      description:
        "Internal business apps for teams, reporting, sales, inventory, customer management, and workflow tracking.",
    },
    {
      icon: "🔗",
      title: "API & System Integration",
      description:
        "Connect your mobile app with payment gateways, websites, CRM tools, cloud databases, logistics, and third-party services.",
    },
  ];

  const features = [
    "Mobile-first user experience",
    "Android and iOS support",
    "Secure login and user accounts",
    "Payment gateway integration",
    "Push notifications",
    "Cloud database integration",
    "Admin dashboard connection",
    "Scalable architecture",
  ];

  const process = [
    {
      number: "01",
      title: "App Strategy",
      description:
        "We understand your business idea, users, app features, monetisation model, and technical requirements.",
    },
    {
      number: "02",
      title: "UI/UX Design",
      description:
        "We create app screens, user flows, wireframes, navigation, and a simple experience for your customers.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "We build the application, connect APIs, create databases, test features, and optimise performance.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "We prepare your app for release, support future updates, fix issues, and help your product grow.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      {/* ===== BRAND BACKGROUND ORBS ===== */}
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

      {/* ===== HEADER (white, brand colors) ===== */}
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
            Start App Project
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

      {/* ===== BREADCRUMB ===== */}
      <section className="px-6 pt-8">
        <div className="mx-auto max-w-7xl text-sm text-[#6B7280] animate-fade-in">
          <Link href="/" className="hover:text-[#0A66C2]">Home</Link> /
          <Link href="/services" className="hover:text-[#0A66C2]"> Services</Link> /
          <span className="text-[#1F2937] font-medium"> Mobile Applications</span>
        </div>
      </section>

      {/* ===== HERO ===== */}
      <section className="px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white">
        <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/20 bg-[#0A66C2]/5 px-4 py-2 text-sm font-semibold text-[#0A66C2] animate-fade-in-up">
              <span className="h-2 w-2 animate-ping rounded-full bg-[#0A66C2]" />
              Android • iOS • Cross-Platform Applications
            </div>

            <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl text-[#1F2937] animate-fade-in-up">
              Mobile Applications That Keep Your Business{" "}
              <span className="bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] bg-clip-text text-transparent animate-gradient-flow">
                In Your Customer&apos;s Pocket.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#6B7280] sm:text-xl animate-fade-in-up">
              Venza Global Services develops powerful mobile applications for
              startups, businesses, e-commerce brands, service companies, and
              enterprise teams that need a fast, secure, and modern mobile
              experience.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row animate-fade-in-up">
              <Link
                href="/consultation"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-7 py-4 font-bold text-white shadow-xl shadow-[#0A66C2]/20 transition hover:bg-[#094e9e] hover:shadow-2xl animate-pulse-soft"
              >
                Build My Mobile App
                <span className="transition duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-[#1F2937] transition hover:border-[#0A66C2] hover:bg-[#F0F7FF]"
              >
                Discuss Your Idea
              </Link>
            </div>
          </div>

          {/* Mobile App Visual (recolored) */}
          <div className="relative mx-auto w-full max-w-md animate-tilt">
            <div className="absolute -inset-8 animate-[pulse_6s_ease-in-out_infinite] rounded-[3rem] bg-gradient-to-r from-[#0A66C2]/20 to-[#38BDF8]/20 blur-3xl" />
            <div className="relative mx-auto w-72 rounded-[3rem] border-8 border-gray-200 bg-white p-3 shadow-2xl animate-card-lift">
              <div className="mb-3 flex justify-center">
                <div className="h-5 w-24 rounded-full bg-gray-200" />
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-[#0A66C2] to-[#38BDF8] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/70">Welcome back</p>
                    <p className="text-lg font-bold text-white">Your Business App</p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white">
                    ✨
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white/15 p-4">
                  <p className="text-xs text-white/70">Today&apos;s growth</p>
                  <p className="mt-1 text-3xl font-bold text-white">+28.4%</p>
                  <div className="mt-4 flex items-end gap-1">
                    {[35, 50, 42, 70, 58, 90, 76].map((height, index) => (
                      <div
                        key={index}
                        className="w-full rounded-t bg-white/80"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/15 p-3">
                    <p className="text-xs text-white/70">Orders</p>
                    <p className="mt-1 text-lg font-bold text-white">1,248</p>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-3">
                    <p className="text-xs text-white/70">Users</p>
                    <p className="mt-1 text-lg font-bold text-white">8.9K</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-2 px-2 pb-2">
                {["⌂", "◉", "▣", "☻"].map((icon) => (
                  <div
                    key={icon}
                    className="grid h-10 place-items-center rounded-xl text-sm text-[#0A66C2]"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -left-10 bottom-16 rounded-2xl border border-[#0A66C2]/20 bg-white p-4 shadow-xl animate-fade-in-up">
              <p className="text-xs text-[#6B7280]">Available on</p>
              <p className="mt-1 font-bold text-[#0A66C2]">Android + iOS</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID (white cards, blue accents) ===== */}
      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center animate-fade-in">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">What We Build</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">Mobile Apps Built Around Real Business Needs</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {appServices.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#0A66C2]/40 hover:shadow-xl hover:shadow-[#0A66C2]/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-5 text-4xl transition duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A66C2]">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-[#6B7280]">{service.description}</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#0A66C2] transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES (brand blue accents) ===== */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="animate-fade-in">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">App Features</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">Designed for Users. Built for Growth.</h2>
              <p className="mt-5 leading-relaxed text-[#6B7280]">
                Your app should not only look good. It should be fast, secure,
                easy to use, and ready to connect with the systems your
                business already uses.
              </p>
              <Link
                href="/consultation"
                className="mt-8 inline-flex rounded-xl border border-[#0A66C2] bg-[#0A66C2]/5 px-6 py-3 font-semibold text-[#0A66C2] transition hover:bg-[#0A66C2]/10 animate-pulse-soft"
              >
                Plan Your App Features →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0A66C2]/10 text-sm font-bold text-[#0A66C2]">
                    {index + 1}
                  </span>
                  <span className="font-medium text-[#1F2937]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS (light cards, blue number) ===== */}
      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center animate-fade-in">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">Development Process</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">From App Idea to Launch</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.number}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-4xl font-black text-[#0A66C2]/30 animate-float">{step.number}</p>
                <h3 className="mt-5 text-xl font-bold text-[#1F2937]">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-[#6B7280]">{step.description}</p>
              </article>
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
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80 animate-fade-in">Let&apos;s Build Something Useful</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-5xl text-white animate-fade-in-up">Have a Mobile App Idea?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 animate-fade-in-up">
              Whether you need an e-commerce app, booking app, delivery app,
              customer portal, or internal business application, VGS can help
              you plan and build it.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row animate-fade-in-up">
              <Link
                href="/consultation"
                className="rounded-xl bg-white px-8 py-4 font-bold text-[#0A66C2] transition hover:bg-gray-100 shadow-lg animate-pulse-soft"
              >
                Request Free Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/30 bg-transparent px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                View All Services
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