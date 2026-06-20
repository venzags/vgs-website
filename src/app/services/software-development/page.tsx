import Link from "next/link";
import Image from "next/image";

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Build secure, scalable, and high-performance software tailored to your business operations and growth goals.",
    },
    {
      title: "Enterprise Applications",
      description:
        "Develop internal business platforms, ERP systems, dashboards, workflow tools, and enterprise applications.",
    },
    {
      title: "SaaS Product Development",
      description:
        "Launch subscription-based software products with user accounts, billing, dashboards, analytics, and cloud infrastructure.",
    },
    {
      title: "API Development & Integration",
      description:
        "Connect payment gateways, CRM platforms, cloud services, third-party APIs, and internal business systems.",
    },
    {
      title: "Software Modernisation",
      description:
        "Upgrade outdated systems, improve performance, strengthen security, and migrate legacy software to modern technology.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Receive ongoing software updates, bug fixes, security improvements, monitoring, and technical support.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "We understand your business process, users, goals, required features, and technical requirements.",
    },
    {
      number: "02",
      title: "UI/UX & Architecture",
      description:
        "We create the software structure, user experience, database plan, and technical architecture.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Our team builds, tests, secures, and improves your software through structured development stages.",
    },
    {
      number: "04",
      title: "Launch & Growth",
      description:
        "We deploy your software, monitor performance, provide support, and help you scale as your business grows.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900">
      {/* ===== INJECT ANIMATION KEYFRAMES ===== */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-soft {
          0%, 100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4); }
          50% { box-shadow: 0 0 0 15px rgba(6, 182, 212, 0); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>

      {/* ===== HEADER – full navigation menu ===== */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-700 transition">Home</Link>
            <Link href="/#about" className="hover:text-blue-700 transition">About</Link>
            <Link href="/services" className="hover:text-blue-700 transition">Services</Link>
            <Link href="/#portfolio" className="hover:text-blue-700 transition">Portfolio</Link>
            <Link href="/#industries" className="hover:text-blue-700 transition">Industries</Link>
            <Link href="/testimonials" className="hover:text-blue-700 transition">Testimonials</Link>
            <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
          </nav>

          <Link
            href="/consultation"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold transition shadow-md"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Navigation – scrollable */}
        <div className="lg:hidden overflow-x-auto pb-2 px-6">
          <div className="flex gap-4 text-sm font-medium text-gray-600">
            <Link href="/" className="whitespace-nowrap hover:text-blue-700 transition">Home</Link>
            <Link href="/#about" className="whitespace-nowrap hover:text-blue-700 transition">About</Link>
            <Link href="/services" className="whitespace-nowrap hover:text-blue-700 transition">Services</Link>
            <Link href="/#portfolio" className="whitespace-nowrap hover:text-blue-700 transition">Portfolio</Link>
            <Link href="/#industries" className="whitespace-nowrap hover:text-blue-700 transition">Industries</Link>
            <Link href="/testimonials" className="whitespace-nowrap hover:text-blue-700 transition">Testimonials</Link>
            <Link href="/contact" className="whitespace-nowrap hover:text-blue-700 transition">Contact</Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="px-6 pt-8">
        <div className="mx-auto max-w-7xl text-sm text-gray-500 animate-fade-in">
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="transition hover:text-blue-600">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Software Development</span>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Animated badge */}
          <span className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 animate-fade-in-up">
            Scalable Digital Products & Business Platforms
          </span>

          {/* Animated gradient heading */}
          <h1 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            Software Development Services
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl animate-fade-in-up">
            Venza Global Services builds modern software, enterprise platforms,
            SaaS products, internal business tools, and secure digital systems
            designed for performance, scalability, and long-term growth.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row animate-fade-in-up">
            <Link
              href="/consultation"
              className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition shadow-md animate-pulse-soft"
            >
              Start Your Software Project
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid – with staggered fade-in and hover float */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center animate-fade-in">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              What We Build
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">
              Software Solutions for Modern Businesses
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="mb-4 text-xl font-bold text-blue-700">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process – floating numbered steps */}
      <section className="border-y border-gray-200 bg-gray-50/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center animate-fade-in">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              How We Work
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">
              From Idea to Reliable Software
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.number}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="mb-5 text-3xl font-bold text-blue-600 animate-float">
                  {step.number}
                </p>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack – animated tags */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 animate-fade-in">
            Modern Technology Stack
          </p>

          <h2 className="mb-8 text-3xl font-bold sm:text-4xl text-gray-900 animate-fade-in">
            Built for Performance, Security & Scale
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js",
              "React",
              "Node.js",
              "TypeScript",
              "Python",
              "Cloud Infrastructure",
              "APIs",
              "Databases",
              "Cyber Security",
              "DevOps",
            ].map((technology, index) => (
              <span
                key={technology}
                className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – gradient with subtle animation */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-center text-white sm:p-12 shadow-xl animate-gradient bg-[length:200%_200%]">
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl animate-fade-in-up">
            Have a Software Idea or Business Problem to Solve?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-blue-50 animate-fade-in-up">
            Tell us what you need. We can help you plan, design, develop, and
            launch the right software solution for your business.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row animate-fade-in-up">
            <Link
              href="/consultation"
              className="rounded-xl bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 font-semibold transition shadow animate-pulse-soft"
            >
              Request Free Consultation
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Venza Global Services. All Rights Reserved.
      </footer>
    </main>
  );
}