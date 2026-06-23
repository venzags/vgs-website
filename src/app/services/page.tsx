import Link from "next/link";

// ------------------------------------------------------------------
// SVG illustrations for each service (used in the carousel)
// ------------------------------------------------------------------
const serviceSlides = [
  {
    title: "AI Solutions",
    desc: "Intelligent automation, analytics, and decision systems.",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <circle cx="60" cy="45" r="22" fill="none" stroke="#0A66C2" strokeWidth="3" strokeDasharray="6 3" className="animate-[spin_12s_linear_infinite]" />
        <circle cx="60" cy="45" r="14" fill="#0A66C2" opacity="0.15" />
        <circle cx="60" cy="45" r="8" fill="#0A66C2" />
        <line x1="60" y1="23" x2="60" y2="15" stroke="#0A66C2" strokeWidth="2" />
        <line x1="82" y1="45" x2="90" y2="45" stroke="#0A66C2" strokeWidth="2" />
        <line x1="60" y1="67" x2="60" y2="75" stroke="#0A66C2" strokeWidth="2" />
        <line x1="38" y1="45" x2="30" y2="45" stroke="#0A66C2" strokeWidth="2" />
        <text x="60" y="48" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="white" fontWeight="bold">AI</text>
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    desc: "Predictive models, deep learning, and intelligent forecasting.",
    color: "#7C3AED",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <polyline points="10,80 30,60 50,70 70,30 90,50 110,40" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="60" r="4" fill="#7C3AED" />
        <circle cx="50" cy="70" r="4" fill="#7C3AED" />
        <circle cx="70" cy="30" r="4" fill="#7C3AED" />
        <circle cx="90" cy="50" r="4" fill="#7C3AED" />
        <circle cx="110" cy="40" r="4" fill="#7C3AED" />
        <rect x="35" y="85" width="50" height="20" rx="4" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
        <text x="60" y="98" textAnchor="middle" fontSize="9" fill="#7C3AED" fontWeight="bold">ML</text>
      </svg>
    ),
  },
  {
    title: "Software Development",
    desc: "Custom enterprise apps, SaaS, and API integrations.",
    color: "#059669",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <rect x="15" y="25" width="90" height="70" rx="8" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
        <rect x="25" y="35" width="70" height="8" rx="2" fill="#059669" className="animate-pulse" />
        <rect x="25" y="50" width="50" height="8" rx="2" fill="#059669" opacity="0.7" />
        <rect x="25" y="65" width="60" height="8" rx="2" fill="#059669" opacity="0.5" />
        <rect x="25" y="80" width="40" height="8" rx="2" fill="#059669" opacity="0.3" />
        <circle cx="100" cy="90" r="10" fill="#10b981" className="animate-ping" style={{ animationDuration: "2.5s" }} />
        <text x="100" y="94" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">✓</text>
      </svg>
    ),
  },
  {
    title: "Web Development",
    desc: "Modern websites, e‑commerce, and web applications.",
    color: "#D97706",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <rect x="15" y="30" width="90" height="60" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <rect x="25" y="40" width="30" height="18" rx="2" fill="white" />
        <rect x="25" y="65" width="40" height="6" rx="2" fill="#D97706" opacity="0.6" />
        <rect x="65" y="40" width="30" height="18" rx="2" fill="white" />
        <rect x="65" y="65" width="30" height="6" rx="2" fill="#D97706" opacity="0.6" />
        <circle cx="45" cy="55" r="8" fill="#D97706" className="animate-[ping_2s_ease-in-out_infinite]" />
        <text x="45" y="58" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">🌐</text>
      </svg>
    ),
  },
  {
    title: "Mobile Applications",
    desc: "Android & iOS apps with premium user experiences.",
    color: "#E11D48",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <rect x="30" y="15" width="60" height="90" rx="8" fill="#FFE4E6" stroke="#E11D48" strokeWidth="2" />
        <rect x="40" y="25" width="40" height="50" rx="4" fill="white" />
        <circle cx="60" cy="50" r="12" fill="#E11D48" className="animate-pulse" />
        <text x="60" y="54" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">📱</text>
        <rect x="45" y="85" width="30" height="4" rx="2" fill="#E11D48" opacity="0.5" />
        <circle cx="60" cy="92" r="3" fill="#E11D48" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    desc: "Migration, infrastructure, and scalable deployments.",
    color: "#0284C7",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <path d="M30 75 Q 60 60 90 75 Q 105 95 75 95 L45 95 Q 15 95 30 75" fill="none" stroke="#0284C7" strokeWidth="3" />
        <circle cx="40" cy="65" r="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" className="animate-[float_3s_ease-in-out_infinite]" />
        <circle cx="65" cy="55" r="14" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" className="animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: "0.5s" }} />
        <circle cx="90" cy="65" r="12" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" className="animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: "1s" }} />
        <line x1="45" y1="75" x2="45" y2="95" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        <line x1="60" y1="60" x2="60" y2="85" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        <line x1="80" y1="72" x2="80" y2="90" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "IT Consulting",
    desc: "Technology strategy, planning, and digital transformation.",
    color: "#4F46E5",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <circle cx="60" cy="45" r="18" fill="none" stroke="#4F46E5" strokeWidth="3" />
        <path d="M60 27 L60 35 M60 55 L60 63 M42 45 L35 45 M78 45 L85 45" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
        <rect x="30" y="70" width="60" height="30" rx="6" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" />
        <text x="60" y="88" textAnchor="middle" fontSize="10" fill="#4F46E5" fontWeight="bold">STRATEGY</text>
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media, and data‑driven growth strategies.",
    color: "#B45309",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <rect x="20" y="25" width="80" height="70" rx="8" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
        <polyline points="30,80 45,50 60,65 75,30 90,45" fill="none" stroke="#B45309" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="45" cy="50" r="4" fill="#B45309" />
        <circle cx="75" cy="30" r="4" fill="#B45309" />
        <circle cx="90" cy="45" r="4" fill="#B45309" />
        <rect x="35" y="85" width="50" height="10" rx="3" fill="#B45309" opacity="0.2" />
        <text x="60" y="92" textAnchor="middle" fontSize="8" fill="#B45309" fontWeight="bold">GROWTH</text>
      </svg>
    ),
  },
  {
    title: "Cyber Security",
    desc: "Risk assessment, secure infrastructure, and compliance.",
    color: "#0F766E",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <rect x="25" y="20" width="70" height="80" rx="8" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <circle cx="60" cy="50" r="18" fill="none" stroke="#0F766E" strokeWidth="3" strokeDasharray="5 3" className="animate-[spin_10s_linear_infinite]" />
        <path d="M55 40 L65 50 L55 60" fill="none" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="50" y="70" width="20" height="15" rx="3" fill="#0F766E" />
        <text x="60" y="80" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">🔒</text>
      </svg>
    ),
  },
];

// ------------------------------------------------------------------
// Services data – icons now match the carousel size
// ------------------------------------------------------------------
const services = [
  {
    title: "AI Solutions",
    href: "/services/ai-solutions",
    description: "AI-powered automation, analytics, and intelligent business solutions.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <circle cx="60" cy="45" r="22" fill="none" stroke="#0A66C2" strokeWidth="3" strokeDasharray="6 3" className="animate-[spin_12s_linear_infinite]" />
        <circle cx="60" cy="45" r="14" fill="#0A66C2" opacity="0.15" />
        <circle cx="60" cy="45" r="8" fill="#0A66C2" />
        <line x1="60" y1="23" x2="60" y2="15" stroke="#0A66C2" strokeWidth="2" />
        <line x1="82" y1="45" x2="90" y2="45" stroke="#0A66C2" strokeWidth="2" />
        <line x1="60" y1="67" x2="60" y2="75" stroke="#0A66C2" strokeWidth="2" />
        <line x1="38" y1="45" x2="30" y2="45" stroke="#0A66C2" strokeWidth="2" />
        <text x="60" y="48" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="white" fontWeight="bold">AI</text>
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    href: "/services/machine-learning",
    description: "Predictive analytics, deep learning, and intelligent decision systems.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <polyline points="10,80 30,60 50,70 70,30 90,50 110,40" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="60" r="4" fill="#7C3AED" />
        <circle cx="50" cy="70" r="4" fill="#7C3AED" />
        <circle cx="70" cy="30" r="4" fill="#7C3AED" />
        <circle cx="90" cy="50" r="4" fill="#7C3AED" />
        <circle cx="110" cy="40" r="4" fill="#7C3AED" />
        <rect x="35" y="85" width="50" height="20" rx="4" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
        <text x="60" y="98" textAnchor="middle" fontSize="9" fill="#7C3AED" fontWeight="bold">ML</text>
      </svg>
    ),
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    description: "Custom software solutions built for performance, scalability, and growth.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <rect x="15" y="25" width="90" height="70" rx="8" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
        <rect x="25" y="35" width="70" height="8" rx="2" fill="#059669" className="animate-pulse" />
        <rect x="25" y="50" width="50" height="8" rx="2" fill="#059669" opacity="0.7" />
        <rect x="25" y="65" width="60" height="8" rx="2" fill="#059669" opacity="0.5" />
        <rect x="25" y="80" width="40" height="8" rx="2" fill="#059669" opacity="0.3" />
        <circle cx="100" cy="90" r="10" fill="#10b981" className="animate-ping" style={{ animationDuration: "2.5s" }} />
        <text x="100" y="94" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">✓</text>
      </svg>
    ),
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    description: "Modern websites and web applications built with current technologies.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <rect x="15" y="30" width="90" height="60" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <rect x="25" y="40" width="30" height="18" rx="2" fill="white" />
        <rect x="25" y="65" width="40" height="6" rx="2" fill="#D97706" opacity="0.6" />
        <rect x="65" y="40" width="30" height="18" rx="2" fill="white" />
        <rect x="65" y="65" width="30" height="6" rx="2" fill="#D97706" opacity="0.6" />
        <circle cx="45" cy="55" r="8" fill="#D97706" className="animate-[ping_2s_ease-in-out_infinite]" />
        <text x="45" y="58" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">🌐</text>
      </svg>
    ),
  },
  {
    title: "Mobile Applications",
    href: "/services/mobile-applications",
    description: "Android and iOS applications with smooth, premium user experiences.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <rect x="30" y="15" width="60" height="90" rx="8" fill="#FFE4E6" stroke="#E11D48" strokeWidth="2" />
        <rect x="40" y="25" width="40" height="50" rx="4" fill="white" />
        <circle cx="60" cy="50" r="12" fill="#E11D48" className="animate-pulse" />
        <text x="60" y="54" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">📱</text>
        <rect x="45" y="85" width="30" height="4" rx="2" fill="#E11D48" opacity="0.5" />
        <circle cx="60" cy="92" r="3" fill="#E11D48" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    description: "Cloud migration, infrastructure management, and scalable deployments.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <path d="M30 75 Q 60 60 90 75 Q 105 95 75 95 L45 95 Q 15 95 30 75" fill="none" stroke="#0284C7" strokeWidth="3" />
        <circle cx="40" cy="65" r="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" className="animate-[float_3s_ease-in-out_infinite]" />
        <circle cx="65" cy="55" r="14" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" className="animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: "0.5s" }} />
        <circle cx="90" cy="65" r="12" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" className="animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: "1s" }} />
        <line x1="45" y1="75" x2="45" y2="95" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        <line x1="60" y1="60" x2="60" y2="85" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        <line x1="80" y1="72" x2="80" y2="90" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "IT Consulting",
    href: "/services/it-consulting",
    description: "Technology strategy, planning, and digital transformation consulting.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <circle cx="60" cy="45" r="18" fill="none" stroke="#4F46E5" strokeWidth="3" />
        <path d="M60 27 L60 35 M60 55 L60 63 M42 45 L35 45 M78 45 L85 45" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
        <rect x="30" y="70" width="60" height="30" rx="6" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" />
        <text x="60" y="88" textAnchor="middle" fontSize="10" fill="#4F46E5" fontWeight="bold">STRATEGY</text>
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "SEO, social media marketing, content strategy, and online growth.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <rect x="20" y="25" width="80" height="70" rx="8" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
        <polyline points="30,80 45,50 60,65 75,30 90,45" fill="none" stroke="#B45309" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="45" cy="50" r="4" fill="#B45309" />
        <circle cx="75" cy="30" r="4" fill="#B45309" />
        <circle cx="90" cy="45" r="4" fill="#B45309" />
        <rect x="35" y="85" width="50" height="10" rx="3" fill="#B45309" opacity="0.2" />
        <text x="60" y="92" textAnchor="middle" fontSize="8" fill="#B45309" fontWeight="bold">GROWTH</text>
      </svg>
    ),
  },
  {
    title: "Cyber Security",
    href: "/services/cyber-security",
    description: "Security solutions, cyber-risk protection, and safer digital systems.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
        <rect x="25" y="20" width="70" height="80" rx="8" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <circle cx="60" cy="50" r="18" fill="none" stroke="#0F766E" strokeWidth="3" strokeDasharray="5 3" className="animate-[spin_10s_linear_infinite]" />
        <path d="M55 40 L65 50 L55 60" fill="none" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="50" y="70" width="20" height="15" rx="3" fill="#0F766E" />
        <text x="60" y="80" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">🔒</text>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      {/* ===== ANIMATED BACKGROUND ORBS ===== */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0A66C2]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#38BDF8]/15 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-[#0A66C2]/8 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite_4s]" />
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
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
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
        .carousel {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }
        .carousel-slide {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0;
          animation: carousel-fade 45s infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .carousel-slide:nth-child(1) { animation-delay: 0s; }
        .carousel-slide:nth-child(2) { animation-delay: 5s; }
        .carousel-slide:nth-child(3) { animation-delay: 10s; }
        .carousel-slide:nth-child(4) { animation-delay: 15s; }
        .carousel-slide:nth-child(5) { animation-delay: 20s; }
        .carousel-slide:nth-child(6) { animation-delay: 25s; }
        .carousel-slide:nth-child(7) { animation-delay: 30s; }
        .carousel-slide:nth-child(8) { animation-delay: 35s; }
        .carousel-slide:nth-child(9) { animation-delay: 40s; }

        @keyframes carousel-fade {
          0%, 9.5% { opacity: 1; }
          12.5%, 100% { opacity: 0; }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; opacity: 0; }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease infinite;
        }
        .animate-pulse-soft { animation: pulse-soft 2.5s infinite; }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="pt-20 pb-12 px-6 text-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            ⚡ Your Technology Partner
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Venza Global Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300">
            Explore our complete portfolio of AI, Machine Learning, Software Development,
            Cloud, Digital Marketing, Cyber Security, and IT Consulting services.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/consultation" className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
              Book Free Consultation
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ANIMATED SERVICE CAROUSEL ===== */}
      <section className="pb-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1F2937] mb-6 animate-fade-in-up">
            Our Core Services
          </h2>
          <div className="carousel rounded-3xl shadow-lg border border-gray-100 bg-white">
            {serviceSlides.map((slide, idx) => (
              <div key={idx} className="carousel-slide">
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

      {/* ===== SERVICES GRID ===== */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-xl hover:shadow-[#0A66C2]/10 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              >
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A66C2] mb-3 group-hover:text-[#094e9e] transition-colors">
                  {service.title}
                </h2>
                <p className="text-[#6B7280] text-sm sm:text-base">{service.description}</p>
                <div className="mt-6 text-[#0A66C2] font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl shadow-[#0A66C2]/20 animate-gradient-flow relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full filter blur-2xl animate-float" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/20 rounded-full filter blur-2xl animate-float" style={{ animationDelay: "-4s" }} />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-fade-in-up">
              Need Expert Technology Consultation?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up">
              Discuss your project requirements with our specialists and
              discover the right technology solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
              <Link
                href="/consultation"
                className="bg-white text-[#0A66C2] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition shadow animate-pulse-soft"
              >
                Free Consultation
              </Link>
              <Link
                href="/contact"
                className="border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}