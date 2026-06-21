import Link from "next/link";

export default function ITConsultingPage() {
  const consultingServices = [
    {
      icon: "🧭",
      title: "Technology Strategy",
      description:
        "Create a clear technology roadmap that connects your business goals with the right software, cloud, AI, security, and digital tools.",
    },
    {
      icon: "🔍",
      title: "IT Assessment",
      description:
        "Review your current systems, websites, software, workflows, security risks, costs, and technical gaps before investing further.",
    },
    {
      icon: "⚙️",
      title: "Digital Transformation",
      description:
        "Modernise manual processes, outdated tools, disconnected systems, and customer experiences using practical technology solutions.",
    },
    {
      icon: "📊",
      title: "Business Process Automation",
      description:
        "Identify repetitive work and design smarter workflows using automation, integrations, dashboards, and AI-powered systems.",
    },
    {
      icon: "🛡️",
      title: "Security & Risk Planning",
      description:
        "Improve access controls, backups, data protection, cloud security, and operational resilience before problems become expensive.",
    },
    {
      icon: "🚀",
      title: "Project Planning",
      description:
        "Turn an idea into a realistic project plan with scope, features, technology choices, priorities, budget direction, and launch phases.",
    },
  ];

  const outcomes = [
    {
      number: "01",
      title: "Clear Direction",
      description:
        "Know what technology to invest in, what to avoid, and what should be prioritised first.",
    },
    {
      number: "02",
      title: "Lower Risk",
      description:
        "Reduce wasted spending, poor technology choices, security gaps, and project delays.",
    },
    {
      number: "03",
      title: "Better Efficiency",
      description:
        "Improve workflows, reduce manual work, and connect systems that currently operate separately.",
    },
    {
      number: "04",
      title: "Growth Ready",
      description:
        "Build a technology foundation that supports future customers, employees, products, and expansion.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Understand Your Business",
      text: "We learn how your business operates, where the problems are, and what outcomes you want to achieve.",
    },
    {
      step: "02",
      title: "Review Current Systems",
      text: "We assess your existing software, website, cloud setup, workflows, data, security, and technology costs.",
    },
    {
      step: "03",
      title: "Create a Practical Plan",
      text: "We recommend realistic priorities, tools, architecture, timelines, and next actions based on your needs.",
    },
    {
      step: "04",
      title: "Support Implementation",
      text: "VGS can help execute the plan through software development, cloud setup, AI, security, websites, or integrations.",
    },
  ];

  // --- 6 slides for IT Consulting visual carousel ---
  const consultingSlides = [
    {
      title: "Technology Strategy",
      desc: "Roadmaps that align technology with business growth goals.",
      color: "#0A66C2",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <circle cx="60" cy="45" r="20" fill="none" stroke="#0A66C2" strokeWidth="3" strokeDasharray="6 3" className="animate-[spin_12s_linear_infinite]" />
          <polygon points="60,30 68,48 88,48 72,58 78,76 60,64 42,76 48,58 32,48 52,48" fill="#0A66C2" />
          <rect x="30" y="85" width="60" height="15" rx="4" fill="#E0F2FE" />
          <text x="60" y="95" textAnchor="middle" fontSize="8" fill="#0A66C2" fontWeight="bold">STRATEGY</text>
        </svg>
      ),
    },
    {
      title: "IT Assessment",
      desc: "Deep dive into systems, security, and processes to uncover gaps.",
      color: "#7C3AED",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <rect x="15" y="25" width="90" height="70" rx="8" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
          <line x1="30" y1="40" x2="90" y2="40" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />
          <line x1="30" y1="55" x2="85" y2="55" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
          <line x1="30" y1="70" x2="75" y2="70" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" style={{ animationDelay: "1s" }} />
          <circle cx="100" cy="30" r="8" fill="#7C3AED" className="animate-ping" style={{ animationDuration: "2s" }} />
          <text x="100" y="34" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">✓</text>
        </svg>
      ),
    },
    {
      title: "Digital Transformation",
      desc: "Modernise processes, tools, and customer experiences.",
      color: "#059669",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <rect x="20" y="30" width="80" height="60" rx="8" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
          <path d="M40 50 L60 30 L80 50" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="60" cy="30" r="4" fill="#059669" />
          <circle cx="40" cy="50" r="4" fill="#059669" />
          <circle cx="80" cy="50" r="4" fill="#059669" />
          <line x1="60" y1="50" x2="60" y2="80" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
          <rect x="40" y="78" width="40" height="12" rx="4" fill="#059669" />
          <text x="60" y="86" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">NEW</text>
        </svg>
      ),
    },
    {
      title: "Process Automation",
      desc: "Streamline repetitive tasks with intelligent workflows.",
      color: "#D97706",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <rect x="15" y="35" width="90" height="50" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <circle cx="40" cy="60" r="8" fill="#D97706" />
          <circle cx="60" cy="60" r="8" fill="#D97706" />
          <circle cx="80" cy="60" r="8" fill="#D97706" />
          <line x1="48" y1="60" x2="52" y2="60" stroke="#D97706" strokeWidth="3" />
          <line x1="68" y1="60" x2="72" y2="60" stroke="#D97706" strokeWidth="3" />
          <path d="M30 45 L60 35 L90 45" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="3,2" />
          <text x="60" y="20" textAnchor="middle" fontSize="8" fill="#D97706" fontWeight="bold">AUTO</text>
        </svg>
      ),
    },
    {
      title: "Security & Risk Planning",
      desc: "Protect data, access, and systems before incidents happen.",
      color: "#E11D48",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <rect x="25" y="25" width="70" height="70" rx="8" fill="#FFE4E6" stroke="#E11D48" strokeWidth="2" />
          <circle cx="60" cy="60" r="15" fill="none" stroke="#E11D48" strokeWidth="3" strokeDasharray="5 3" className="animate-[spin_10s_linear_infinite]" />
          <path d="M55 55 L65 60 L55 65" fill="none" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="45" y="75" width="30" height="12" rx="3" fill="#E11D48" />
          <text x="60" y="84" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">LOCK</text>
        </svg>
      ),
    },
    {
      title: "Project Planning",
      desc: "Turn ideas into clear, actionable technology projects.",
      color: "#4F46E5",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <rect x="20" y="30" width="80" height="60" rx="6" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" />
          <line x1="30" y1="45" x2="90" y2="45" stroke="#4F46E5" strokeWidth="2" strokeDasharray="3,2" />
          <line x1="30" y1="55" x2="80" y2="55" stroke="#4F46E5" strokeWidth="2" strokeDasharray="3,2" />
          <line x1="30" y1="65" x2="70" y2="65" stroke="#4F46E5" strokeWidth="2" strokeDasharray="3,2" />
          <circle cx="95" cy="45" r="8" fill="#4F46E5" />
          <text x="95" y="49" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">→</text>
        </svg>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* ===== ANIMATED BACKGROUND ORBS ===== */}
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
        /* Carousel */
        .consulting-carousel {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }
        .consulting-carousel .consulting-slide {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0;
          animation: carousel-fade 30s infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .consulting-carousel .consulting-slide:nth-child(1) { animation-delay: 0s; }
        .consulting-carousel .consulting-slide:nth-child(2) { animation-delay: 5s; }
        .consulting-carousel .consulting-slide:nth-child(3) { animation-delay: 10s; }
        .consulting-carousel .consulting-slide:nth-child(4) { animation-delay: 15s; }
        .consulting-carousel .consulting-slide:nth-child(5) { animation-delay: 20s; }
        .consulting-carousel .consulting-slide:nth-child(6) { animation-delay: 25s; }

        @keyframes carousel-fade {
          0%, 14.28% { opacity: 1; }
          18%, 100%  { opacity: 0; }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease infinite;
        }
        .animate-pulse-soft { animation: pulse-soft 2.5s infinite; }
      `}</style>

      {/* ===== BREADCRUMB ===== */}
      <section className="px-6 pt-8">
        <div className="mx-auto max-w-7xl text-sm text-[#6B7280] animate-fade-in-up">
          <Link href="/" className="hover:text-[#0A66C2]">Home</Link> /
          <Link href="/services" className="hover:text-[#0A66C2]"> Services</Link> /
          <span className="text-[#1F2937] font-medium"> IT Consulting</span>
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
              🧭 Practical technology advice for business growth
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-up bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] bg-clip-text text-transparent animate-gradient-flow">
            IT Consulting
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#6B7280] mb-12 animate-fade-in-up">
            Venza Global Services helps businesses choose the right
            technology, improve operations, reduce risks, plan digital
            transformation, and turn complex IT decisions into a clear
            action plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <Link
              href="/consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-7 py-4 font-bold text-white shadow-xl shadow-[#0A66C2]/20 transition hover:bg-[#094e9e] hover:shadow-2xl animate-pulse-soft"
            >
              Get IT Guidance
              <span className="transition duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-[#1F2937] transition hover:border-[#0A66C2] hover:bg-[#F0F7FF]"
            >
              Talk to VGS
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ANIMATED CONSULTING CAROUSEL (NEW) ===== */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1F2937] mb-8 animate-fade-in-up">
            Our Consulting Services
          </h2>
          <div className="consulting-carousel rounded-3xl shadow-lg border border-gray-100 bg-white">
            {consultingSlides.map((slide, idx) => (
              <div key={idx} className="consulting-slide">
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
                  <div className="rounded-2xl bg-gray-50 p-4 shadow-sm">
                    {slide.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-extrabold" style={{ color: slide.color }}>
                      {slide.title}
                    </h3>
                    <p className="mt-2 text-gray-600 max-w-md">{slide.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONSULTING SERVICES GRID ===== */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">Consulting Services</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              Advice That Leads to Real Progress
            </h2>
            <p className="mt-4 text-[#6B7280]">
              We do not recommend technology just because it is popular. We
              focus on what solves your business problem, fits your budget, and
              supports your future growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
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

      {/* ===== OUTCOMES ===== */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">What You Gain</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              Better Decisions Create Better Results
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <article
                key={outcome.number}
                className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-4xl font-black text-[#0A66C2]/30 animate-[float_6s_ease-in-out_infinite]">
                  {outcome.number}
                </p>
                <h3 className="mt-5 text-xl font-bold text-[#0A66C2]">{outcome.title}</h3>
                <p className="mt-3 text-[#6B7280] leading-relaxed">{outcome.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">Consulting Process</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              From Confusion to a Clear Technology Plan
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <article
                key={item.step}
                className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-4xl font-black text-[#0A66C2]/30 animate-[float_6s_ease-in-out_infinite]">
                  {item.step}
                </p>
                <h3 className="mt-5 text-xl font-bold text-[#1F2937]">{item.title}</h3>
                <p className="mt-3 text-[#6B7280] leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] p-8 sm:p-12 text-center text-white shadow-2xl shadow-[#0A66C2]/20 animate-gradient-flow">
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/20 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite_4s]" />
          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80 animate-fade-in-up">
              Get Clarity Before You Build
            </p>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold animate-fade-in-up">
              Not Sure What Technology Your Business Actually Needs?
            </h2>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto animate-fade-in-up">
              Start with a consultation. Tell us your business challenge, and
              we will help you identify practical technology options and the
              right next step.
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