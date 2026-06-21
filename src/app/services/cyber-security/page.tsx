import Link from "next/link";

export default function CyberSecurityPage() {
  const securityServices = [
    {
      icon: "🛡️",
      title: "Security Assessment",
      description:
        "Identify weak points in your website, application, cloud setup, accounts, access controls, and business technology systems.",
    },
    {
      icon: "🔐",
      title: "Website & Application Security",
      description:
        "Improve protection for websites and web applications through secure configuration, access controls, updates, and risk reduction.",
    },
    {
      icon: "☁️",
      title: "Cloud Security",
      description:
        "Secure cloud accounts, servers, storage, databases, permissions, backups, and deployment environments.",
    },
    {
      icon: "👤",
      title: "Identity & Access Management",
      description:
        "Set up stronger login security, role-based access, multi-factor authentication, and safer account management.",
    },
    {
      icon: "💾",
      title: "Backup & Recovery Planning",
      description:
        "Create backup routines and recovery plans so important business data can be restored after accidental loss or an incident.",
    },
    {
      icon: "📋",
      title: "Security Policy & Awareness",
      description:
        "Help teams follow safer practices for passwords, phishing awareness, device access, data handling, and daily operations.",
    },
  ];

  const protectionAreas = [
    {
      title: "Accounts",
      description: "Protect user logins, admin panels, passwords, and access permissions.",
      icon: "🔑",
    },
    {
      title: "Data",
      description: "Reduce the risk of data loss, exposure, unauthorised access, and poor backup practices.",
      icon: "🗄️",
    },
    {
      title: "Applications",
      description: "Improve website, mobile app, API, and software security from development to deployment.",
      icon: "💻",
    },
    {
      title: "Infrastructure",
      description: "Secure cloud servers, hosting, networks, databases, and connected business systems.",
      icon: "🌐",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Assess",
      description:
        "We review your current setup, identify important assets, and look for practical security weaknesses.",
    },
    {
      number: "02",
      title: "Prioritise",
      description:
        "We separate urgent risks from lower-priority improvements so you know what should be fixed first.",
    },
    {
      number: "03",
      title: "Strengthen",
      description:
        "We help improve security controls, access rules, backups, cloud configuration, and safer workflows.",
    },
    {
      number: "04",
      title: "Maintain",
      description:
        "Security is ongoing. We help create a foundation for monitoring, updates, reviews, and future improvement.",
    },
  ];

  const principles = [
    "Secure access and strong authentication",
    "Least-privilege permissions",
    "Reliable backups and recovery readiness",
    "Regular updates and patch management",
    "Clear visibility into critical systems",
    "Practical security for real business operations",
  ];

  // ----- 6 slides for cybersecurity carousel -----
  const securitySlides = [
    {
      title: "Security Assessment",
      desc: "Identify vulnerabilities before attackers do.",
      color: "#0A66C2",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <circle cx="60" cy="45" r="22" fill="none" stroke="#0A66C2" strokeWidth="3" strokeDasharray="6 3" className="animate-[spin_12s_linear_infinite]" />
          <path d="M55 35 L65 45 L55 55" fill="none" stroke="#0A66C2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="30" y="80" width="60" height="15" rx="4" fill="#E0F2FE" />
          <text x="60" y="91" textAnchor="middle" fontSize="8" fill="#0A66C2" fontWeight="bold">AUDIT</text>
        </svg>
      ),
    },
    {
      title: "Website & App Security",
      desc: "Secure configuration, access controls, and updates.",
      color: "#7C3AED",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <rect x="25" y="20" width="70" height="70" rx="8" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
          <rect x="35" y="30" width="50" height="40" rx="4" fill="white" />
          <path d="M50 45 L60 55 L70 40" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="60" cy="55" r="5" fill="#7C3AED" />
          <line x1="40" y1="65" x2="80" y2="65" stroke="#7C3AED" strokeWidth="2" strokeDasharray="3,2" />
        </svg>
      ),
    },
    {
      title: "Cloud Security",
      desc: "Protect servers, storage, and cloud environments.",
      color: "#059669",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <path d="M30 75 Q 60 60 90 75 Q 105 95 75 95 L45 95 Q 15 95 30 75" fill="none" stroke="#059669" strokeWidth="3" />
          <circle cx="45" cy="55" r="10" fill="#D1FAE5" stroke="#059669" strokeWidth="2" className="animate-[float_3s_ease-in-out_infinite]" />
          <circle cx="75" cy="55" r="12" fill="#D1FAE5" stroke="#059669" strokeWidth="2" className="animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: "0.5s" }} />
          <rect x="40" y="70" width="40" height="15" rx="4" fill="#059669" opacity="0.2" />
          <text x="60" y="82" textAnchor="middle" fontSize="8" fill="#059669" fontWeight="bold">SECURE</text>
        </svg>
      ),
    },
    {
      title: "Identity & Access",
      desc: "Strong authentication and least‑privilege controls.",
      color: "#D97706",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <rect x="25" y="25" width="70" height="70" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <circle cx="60" cy="50" r="18" fill="none" stroke="#D97706" strokeWidth="3" strokeDasharray="5 3" className="animate-[spin_10s_linear_infinite]" />
          <path d="M55 45 L65 55 L55 65" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="45" y="75" width="30" height="12" rx="3" fill="#D97706" />
          <text x="60" y="84" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">LOCK</text>
        </svg>
      ),
    },
    {
      title: "Backup & Recovery",
      desc: "Automated backups and disaster recovery plans.",
      color: "#4F46E5",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <rect x="25" y="20" width="70" height="70" rx="8" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" />
          <circle cx="60" cy="50" r="15" fill="none" stroke="#4F46E5" strokeWidth="3" strokeDasharray="6 3" className="animate-[spin_10s_linear_infinite]" />
          <path d="M60 35 V65" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 50 H70" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
          <text x="60" y="85" textAnchor="middle" fontSize="8" fill="#4F46E5" fontWeight="bold">RECOVER</text>
        </svg>
      ),
    },
    {
      title: "Policy & Awareness",
      desc: "Train teams on passwords, phishing, and safe practices.",
      color: "#E11D48",
      icon: (
        <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36">
          <circle cx="60" cy="50" r="22" fill="#FFE4E6" stroke="#E11D48" strokeWidth="2" />
          <text x="60" y="48" textAnchor="middle" fontSize="12" fill="#E11D48" fontWeight="bold">⚠️</text>
          <path d="M60 60 L60 70 M60 75 L60 78" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" />
          <rect x="30" y="85" width="60" height="12" rx="4" fill="#E11D48" />
          <text x="60" y="94" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">AWARE</text>
        </svg>
      ),
    },
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

        /* Security carousel */
        .security-carousel {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }
        .security-carousel .sec-slide {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0;
          animation: carousel-fade 30s infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .security-carousel .sec-slide:nth-child(1) { animation-delay: 0s; }
        .security-carousel .sec-slide:nth-child(2) { animation-delay: 5s; }
        .security-carousel .sec-slide:nth-child(3) { animation-delay: 10s; }
        .security-carousel .sec-slide:nth-child(4) { animation-delay: 15s; }
        .security-carousel .sec-slide:nth-child(5) { animation-delay: 20s; }
        .security-carousel .sec-slide:nth-child(6) { animation-delay: 25s; }

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
          <span className="text-[#1F2937] font-medium"> Cyber Security</span>
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
              🛡️ Practical security for websites, apps, cloud, and business systems
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-up bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] bg-clip-text text-transparent animate-gradient-flow">
            Cyber Security
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#6B7280] mb-12 animate-fade-in-up">
            Venza Global Services helps businesses improve cyber security
            across websites, applications, cloud systems, user accounts,
            backups, and everyday technology operations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <Link
              href="/consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-7 py-4 font-bold text-white shadow-xl shadow-[#0A66C2]/20 transition hover:bg-[#094e9e] hover:shadow-2xl animate-pulse-soft"
            >
              Review My Security
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

      {/* ===== ANIMATED SECURITY CAROUSEL (NEW) ===== */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1F2937] mb-8 animate-fade-in-up">
            Our Security Services
          </h2>
          <div className="security-carousel rounded-3xl shadow-lg border border-gray-100 bg-white">
            {securitySlides.map((slide, idx) => (
              <div key={idx} className="sec-slide">
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

      {/* ===== SECURITY SERVICES GRID (staggered fade-in) ===== */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">
              Security Services
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              Strengthen the Parts of Your Business That Matter Most
            </h2>
            <p className="mt-4 text-[#6B7280]">
              Cyber security is not only for large companies. Any business
              using websites, customer data, cloud tools, online payments, or
              employee accounts needs a sensible security foundation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
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

      {/* ===== PROTECTION AREAS ===== */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">
              What We Help Protect
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              Security Across Your Digital Business
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {protectionAreas.map((area, index) => (
              <article
                key={area.title}
                className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl">{area.icon}</div>
                <h3 className="mt-5 text-xl font-bold text-[#0A66C2]">
                  {area.title}
                </h3>
                <p className="mt-3 text-[#6B7280] leading-relaxed">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECURITY PRINCIPLES ===== */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">
              Security Foundation
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              Strong Security Is Built Through Small, Consistent Improvements
            </h2>
            <p className="mt-5 text-[#6B7280] leading-relaxed">
              There is no single button that makes a business fully secure.
              The goal is to reduce risk through better access control, safer
              systems, backups, awareness, and regular review.
            </p>
            <Link
              href="/consultation"
              className="mt-8 inline-flex rounded-xl border border-[#0A66C2] bg-[#0A66C2]/5 px-6 py-3 font-semibold text-[#0A66C2] transition hover:bg-[#0A66C2]/10"
            >
              Discuss Your Security Needs →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0A66C2]/10 text-sm font-bold text-[#0A66C2]">
                  {index + 1}
                </span>
                <span className="font-medium text-[#1F2937]">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">
              Our Process
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              A Practical Security Improvement Process
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

      {/* ===== CTA (gradient + animations) ===== */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] p-8 sm:p-12 text-center text-white shadow-2xl shadow-[#0A66C2]/20 animate-gradient-flow">
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/20 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite_4s]" />
          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80 animate-fade-in-up">
              Reduce Risk Before It Becomes Damage
            </p>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold animate-fade-in-up">
              Not Sure Whether Your Website, Cloud, or Accounts Are Secure?
            </h2>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto animate-fade-in-up">
              Start with a practical conversation. Explain what systems you use,
              what data you handle, and what concerns you have. VGS can help
              identify sensible next steps.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
              <Link
                href="/consultation"
                className="bg-white text-[#0A66C2] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition shadow animate-pulse-soft"
              >
                Request Security Consultation
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