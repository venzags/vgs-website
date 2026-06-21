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

  const industries = [
    {
      icon: "🏥",
      name: "Healthcare",
      description:
        "Digital solutions, patient management systems, and healthcare technology services.",
    },
    {
      icon: "💰",
      name: "Finance",
      description:
        "Secure fintech solutions, automation, analytics, and cloud infrastructure.",
    },
    {
      icon: "🛒",
      name: "Retail",
      description:
        "E-commerce platforms, customer engagement systems, and digital transformation.",
    },
    {
      icon: "💻",
      name: "Technology",
      description:
        "Scalable software development, AI integration, and cloud-native solutions.",
    },
    {
      icon: "🏭",
      name: "Manufacturing",
      description:
        "Smart factory systems, process automation, and operational efficiency tools.",
    },
    {
      icon: "🎓",
      name: "Education",
      description:
        "E-learning platforms, student management systems, and digital education services.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900">
      {/* ===== INJECT ANIMATION KEYFRAMES ===== */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-soft {
          0%, 100% { box-shadow: 0 0 0 0 rgba(10, 102, 194, 0.4); }
          50% { box-shadow: 0 0 0 15px rgba(10, 102, 194, 0); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes code-typing {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes cloud-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Slider */
        .slider {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }
        .slide {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0;
          animation: sliderFade 30s infinite;
        }
        .slide:nth-child(1) { animation-delay: 0s; }
        .slide:nth-child(2) { animation-delay: 5s; }
        .slide:nth-child(3) { animation-delay: 10s; }
        .slide:nth-child(4) { animation-delay: 15s; }
        .slide:nth-child(5) { animation-delay: 20s; }
        .slide:nth-child(6) { animation-delay: 25s; }

        @keyframes sliderFade {
          0%, 14.28% { opacity: 1; }
          20%, 100%  { opacity: 0; }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in { animation: fadeIn 1.2s ease-out forwards; opacity: 0; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 2s infinite; }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-cloud-float { animation: cloud-float 4s ease-in-out infinite; }
        .animate-code-typing { animation: code-typing 2s steps(20) forwards; }
      `}</style>

      {/* ===== AUTO‑SLIDING INDUSTRY CAROUSEL ===== */}
      <section className="slider mb-10">
        {industries.map((ind, idx) => (
          <div key={idx} className="slide flex items-center justify-center px-6 py-10">
            <div className="max-w-2xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-6xl mb-4">{ind.icon}</div>
              <h2 className="text-3xl font-extrabold text-[#1F2937] mb-3">{ind.name}</h2>
              <p className="text-lg text-gray-600">{ind.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Breadcrumb */}
      <section className="px-6 pt-4 pb-2">
        <div className="mx-auto max-w-7xl text-sm text-gray-500 animate-fade-in">
          <Link href="/" className="transition hover:text-blue-600">Home</Link> /
          <Link href="/services" className="transition hover:text-blue-600">Services</Link> /
          <span className="text-gray-800">Software Development</span>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 animate-fade-in-up">
            Scalable Digital Products & Business Platforms
          </span>
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

      {/* ===== SOFTWARE DEVELOPMENT VISUAL FRAME (CSS ILLUSTRATION) ===== */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 animate-fade-in-up">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {/* Left: Code editor with typing animation */}
              <svg className="w-36 h-36 sm:w-44 sm:h-44" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="15" width="100" height="90" rx="8" fill="#1e293b" />
                <rect x="20" y="30" width="80" height="8" rx="2" fill="#06b6d4" className="animate-pulse" />
                <rect x="20" y="48" width="50" height="8" rx="2" fill="#38bdf8" />
                <rect x="20" y="66" width="65" height="8" rx="2" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                <rect x="20" y="84" width="45" height="8" rx="2" fill="#38bdf8" />
                <circle cx="95" cy="95" r="8" fill="#10b981" className="animate-ping" style={{ animationDuration: "2s" }} />
                <text x="95" y="98" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">✓</text>
              </svg>

              {/* Center: Gears / Cloud */}
              <svg className="w-36 h-36 sm:w-44 sm:h-44" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="55" r="28" fill="none" stroke="#06b6d4" strokeWidth="4" strokeDasharray="8 4" className="animate-spin-slow" />
                <circle cx="60" cy="55" r="18" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="6 3" className="animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "8s" }} />
                <circle cx="60" cy="55" r="8" fill="#06b6d4" />
                <text x="60" y="58" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">SD</text>
                <path d="M30 90 Q60 100 90 90" fill="none" stroke="#e2e8f0" strokeWidth="6" strokeLinecap="round" className="animate-cloud-float" />
                <circle cx="45" cy="90" r="10" fill="#e2e8f0" className="animate-cloud-float" style={{ animationDelay: "0.3s" }} />
                <circle cx="75" cy="90" r="12" fill="#e2e8f0" className="animate-cloud-float" style={{ animationDelay: "0.7s" }} />
              </svg>

              {/* Right: Devices / Cloud connection */}
              <svg className="w-36 h-36 sm:w-44 sm:h-44" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="30" width="35" height="45" rx="4" fill="#f8fafc" stroke="#06b6d4" strokeWidth="2" />
                <rect x="22" y="38" width="21" height="25" rx="2" fill="#e0f2fe" />
                <circle cx="32" cy="70" r="3" fill="#06b6d4" />
                <rect x="65" y="40" width="35" height="45" rx="4" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" />
                <rect x="72" y="48" width="21" height="25" rx="2" fill="#e0f2fe" />
                <circle cx="82" cy="80" r="3" fill="#3b82f6" />
                <line x1="50" y1="52" x2="65" y2="60" stroke="#06b6d4" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse" />
                <line x1="50" y1="65" x2="65" y2="70" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: "1s" }} />
                <circle cx="55" cy="58" r="4" fill="#10b981" className="animate-ping" style={{ animationDuration: "2s", animationDelay: "0.5s" }} />
              </svg>
            </div>
            <p className="text-center text-lg text-gray-500 mt-6 animate-fade-in-up">
              From clean code to scalable cloud deployments — we build software that powers your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid – with staggered fade-in */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center animate-fade-in">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">What We Build</p>
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">Software Solutions for Modern Businesses</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="mb-4 text-xl font-bold text-blue-700">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process – floating numbered steps */}
      <section className="border-y border-gray-200 bg-gray-50/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center animate-fade-in">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">How We Work</p>
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">From Idea to Reliable Software</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.number}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="mb-5 text-3xl font-bold text-blue-600 animate-float">{step.number}</p>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FIVE ANIMATED TECHNOLOGY MARQUEES (different colours) ===== */}
      {/* 1️⃣ System & Enterprise Frameworks (Indigo) */}
      <section className="border-y border-gray-100 bg-[#4F46E5]/5 px-6 py-14">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-7 text-sm font-bold uppercase tracking-[0.22em] text-[#4F46E5] animate-fade-in">
            System & Enterprise Application Frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Spring Boot (Java)",
              "ASP.NET Core 9.0 (C#)",
              "Jakarta EE (Java)",
              "Qt (C++/QML)",
              "Electron (JS/TS)",
              "Languages: Java, C#, C++, TypeScript",
            ].map((tech, index) => (
              <span
                key={tech}
                className="rounded-full border border-[#4F46E5]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#4F46E5] transition hover:scale-110 hover:border-[#4F46E5] animate-pulse-soft"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2️⃣ Cross‑Platform & Desktop Frameworks (Emerald) */}
      <section className="border-y border-gray-100 bg-[#059669]/5 px-6 py-14">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-7 text-sm font-bold uppercase tracking-[0.22em] text-[#059669] animate-fade-in">
            Cross‑Platform & Desktop Frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Flutter (Dart)",
              ".NET MAUI (C#)",
              "GTK (C)",
              "Kivy (Python)",
              "SwiftUI (Swift)",
              "Languages: Dart, C#, C, Python, Swift",
            ].map((tech, index) => (
              <span
                key={tech}
                className="rounded-full border border-[#059669]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#059669] transition hover:scale-110 hover:border-[#059669] animate-pulse-soft"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Backend & API Frameworks (Rose) */}
      <section className="border-y border-gray-100 bg-[#E11D48]/5 px-6 py-14">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-7 text-sm font-bold uppercase tracking-[0.22em] text-[#E11D48] animate-fade-in">
            Backend & API Frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "NestJS (Node.js/TS)",
              "Express.js 5.0 (JS)",
              "Django 5.1 (Python)",
              "FastAPI (Python)",
              "Laravel 11 (PHP)",
              "Go Fiber / Gin",
              "Actix / Rocket (Rust)",
              "Languages: TS, JS, Python, PHP, Go, Rust",
            ].map((tech, index) => (
              <span
                key={tech}
                className="rounded-full border border-[#E11D48]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#E11D48] transition hover:scale-110 hover:border-[#E11D48] animate-pulse-soft"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Embedded Systems & High‑Performance (Amber) */}
      <section className="border-y border-gray-100 bg-[#D97706]/5 px-6 py-14">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-7 text-sm font-bold uppercase tracking-[0.22em] text-[#D97706] animate-fade-in">
            Embedded Systems & High‑Performance Frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "C/C++ Standard Libraries",
              "Rust (Tokio, Actix)",
              "Go (Gin, Echo)",
              "Unreal Engine / Unity",
              "CUDA (C++)",
              "Languages: C, C++, Rust, Go",
            ].map((tech, index) => (
              <span
                key={tech}
                className="rounded-full border border-[#D97706]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#D97706] transition hover:scale-110 hover:border-[#D97706] animate-pulse-soft"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Data, AI & Emerging Tech (Sky) */}
      <section className="border-y border-gray-100 bg-[#0284C7]/5 px-6 py-14">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-7 text-sm font-bold uppercase tracking-[0.22em] text-[#0284C7] animate-fade-in">
            Data, AI & Emerging Tech Frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TensorFlow / PyTorch (Python)",
              "LangChain / LlamaIndex (Python/JS)",
              "Apache Spark (Scala/Java/Python)",
              "Supabase (PostgreSQL)",
              "Blockchain/Web3 (Solidity, Hardhat, Truffle)",
              "MATLAB / R",
              "Languages: Python, Scala, Java, Solidity, R, MATLAB",
            ].map((tech, index) => (
              <span
                key={tech}
                className="rounded-full border border-[#0284C7]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0284C7] transition hover:scale-110 hover:border-[#0284C7] animate-pulse-soft"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – gradient */}
      <section className="px-6 pb-24 pt-16">
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
    </main>
  );
}