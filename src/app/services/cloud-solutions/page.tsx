import Link from "next/link";
import Image from "next/image";

export default function CloudSolutionsPage() {
  const cloudServices = [
    {
      icon: "☁️",
      title: "Cloud Migration",
      description:
        "Move websites, applications, databases, and business systems from traditional hosting or legacy servers to secure cloud infrastructure.",
    },
    {
      icon: "🖥️",
      title: "Cloud Infrastructure",
      description:
        "Design scalable cloud servers, storage, networking, backups, access controls, and environments built for your business needs.",
    },
    {
      icon: "⚙️",
      title: "DevOps & Deployment",
      description:
        "Automate deployment workflows, testing, monitoring, updates, and release processes for faster and safer software delivery.",
    },
    {
      icon: "🔐",
      title: "Cloud Security",
      description:
        "Protect your cloud systems with access control, encryption, backups, security monitoring, and best-practice configuration.",
    },
    {
      icon: "📈",
      title: "Performance & Scaling",
      description:
        "Improve speed, reliability, uptime, and capacity so your website or application can handle more users and business growth.",
    },
    {
      icon: "💾",
      title: "Backup & Disaster Recovery",
      description:
        "Create reliable backup strategies and recovery plans to protect critical data and reduce downtime during unexpected incidents.",
    },
  ];

  const benefits = [
    {
      title: "Pay for What You Use",
      description:
        "Avoid unnecessary hardware investment and scale resources based on your real business demand.",
    },
    {
      title: "Access From Anywhere",
      description:
        "Enable secure access to systems, data, dashboards, and applications from any location.",
    },
    {
      title: "Better Reliability",
      description:
        "Use modern cloud infrastructure with monitoring, backups, redundancy, and high availability options.",
    },
    {
      title: "Ready to Scale",
      description:
        "Increase storage, computing power, and application capacity as your users and business grow.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Cloud Assessment",
      description:
        "We review your current systems, hosting, applications, data, costs, security needs, and business goals.",
    },
    {
      number: "02",
      title: "Cloud Architecture",
      description:
        "We plan the right cloud setup, including servers, storage, databases, security, backups, and deployment workflows.",
    },
    {
      number: "03",
      title: "Migration & Setup",
      description:
        "We move your systems carefully, configure the environment, test performance, and minimise business disruption.",
    },
    {
      number: "04",
      title: "Monitor & Optimise",
      description:
        "We improve performance, manage updates, monitor reliability, control costs, and support future growth.",
    },
  ];

  const platforms = [
    "Cloud Hosting",
    "Serverless Functions",
    "Cloudflare",
    "Vercel",
    "Netlify",
    "AWS",
    "Google Cloud",
    "Microsoft Azure",
    "Docker",
    "CI/CD",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* ===== ANIMATED BACKGROUND ORBS (brand colors) ===== */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0A66C2]/10 rounded-full filter blur-3xl animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#38BDF8]/15 rounded-full filter blur-3xl animate-[float_12s_ease-in-out_infinite_2s]" />
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-[#0A66C2]/8 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite_4s]" />
        </div>
      </div>

      {/* ===== CUSTOM KEYFRAMES ===== */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-25px) scale(1.05); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-soft {
          0%, 100% { box-shadow: 0 0 0 0 rgba(10, 102, 194, 0.5); }
          50% { box-shadow: 0 0 0 15px rgba(10, 102, 194, 0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 2.5s infinite;
        }
      `}</style>

      {/* ===== HEADER (brand colors, full nav) ===== */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
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
            className="bg-[#0A66C2] hover:bg-[#094e9e] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold shadow-md shadow-[#0A66C2]/20 transition animate-pulse-soft"
          >
            Cloud Consultation
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
        <div className="mx-auto max-w-7xl text-sm text-[#6B7280] animate-fade-in-up">
          <Link href="/" className="hover:text-[#0A66C2]">Home</Link> /
          <Link href="/services" className="hover:text-[#0A66C2]"> Services</Link> /
          <span className="text-[#1F2937] font-medium"> Cloud Solutions</span>
        </div>
      </section>

      {/* ===== HERO ===== */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#1F2937] mb-4 animate-fade-in-up">
            Venza Global Services
          </h1>

          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] text-sm font-semibold mb-6 border border-[#0A66C2]/20">
              ☁️ Secure, scalable, cloud‑ready infrastructure
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-up bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] bg-clip-text text-transparent animate-gradient-flow">
            Cloud Solutions
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#6B7280] mb-12 animate-fade-in-up">
            Venza Global Services helps businesses migrate, deploy, secure,
            scale, and manage cloud infrastructure for websites,
            applications, databases, and digital operations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <Link
              href="/consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-7 py-4 font-bold text-white shadow-xl shadow-[#0A66C2]/20 transition hover:bg-[#094e9e] hover:shadow-2xl animate-pulse-soft"
            >
              Plan My Cloud Setup
              <span className="transition duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-[#1F2937] transition hover:border-[#0A66C2] hover:bg-[#F0F7FF]"
            >
              Talk to Cloud Experts
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID (staggered fade-in) ===== */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">Cloud Services</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              Cloud Infrastructure Built Around Your Business
            </h2>
            <p className="mt-4 text-[#6B7280]">
              From a simple website deployment to a full cloud migration, we
              create cloud solutions that are secure, manageable, and ready for
              the next stage of growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <article
                key={service.title}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0A66C2]/20 hover:-translate-y-2 hover:border-[#0A66C2] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0A66C2] transition-all duration-500 pointer-events-none" />
                <div className="text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-[bounce_1s_ease-in-out_infinite]">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A66C2] mb-4 group-hover:text-[#094e9e] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#0A66C2] transition-all duration-500 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">Why Cloud?</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              More Flexibility. Less Infrastructure Stress.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-bold text-[#0A66C2]">{benefit.title}</h3>
                <p className="mt-4 text-[#6B7280] leading-relaxed">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">Our Cloud Process</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              A Clear Path to the Cloud
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <article
                key={step.number}
                className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-4xl font-black text-[#0A66C2]/30 animate-[float_6s_ease-in-out_infinite]">
                  {step.number}
                </p>
                <h3 className="mt-5 text-xl font-bold text-[#1F2937]">{step.title}</h3>
                <p className="mt-3 text-[#6B7280] leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY PLATFORMS ===== */}
      <section className="py-14 px-4 sm:px-6 bg-[#0A66C2]/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2] animate-fade-in-up">
            Technology & Platforms
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937] mb-10 animate-fade-in-up">
            Modern Cloud Tools for Modern Businesses
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((platform, index) => (
              <span
                key={platform}
                className="rounded-full border border-[#0A66C2]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A66C2] transition hover:scale-110 hover:border-[#0A66C2] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA (gradient + animations) ===== */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] p-8 sm:p-12 text-center text-white shadow-2xl shadow-[#0A66C2]/20 animate-gradient-flow">
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/20 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite_4s]" />
          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80 animate-fade-in-up">
              Your Cloud Journey Starts Here
            </p>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold animate-fade-in-up">
              Ready to Make Your Systems More Secure and Scalable?
            </h2>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto animate-fade-in-up">
              Whether you need cloud hosting, migration, deployment, security,
              backups, or a full cloud strategy, VGS can help you choose the
              right setup.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
              <Link
                href="/consultation"
                className="bg-white text-[#0A66C2] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition shadow animate-pulse-soft"
              >
                Request Free Consultation
              </Link>
              <Link
                href="/services"
                className="border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
</main>
  );
}