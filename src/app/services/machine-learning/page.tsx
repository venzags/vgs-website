import Link from "next/link";

export default function MachineLearningPage() {
  const capabilities = [
    {
      title: "Predictive Analytics",
      description:
        "Forecast demand, revenue, customer behavior, inventory needs, and business outcomes using data-driven models.",
    },
    {
      title: "Recommendation Systems",
      description:
        "Build personalized product, content, and service recommendations that improve engagement and conversions.",
    },
    {
      title: "Customer Intelligence",
      description:
        "Analyze customer data to identify churn risk, buying patterns, customer segments, and growth opportunities.",
    },
    {
      title: "Fraud Detection",
      description:
        "Detect unusual transactions, suspicious behavior, and potential fraud using intelligent anomaly detection models.",
    },
    {
      title: "Forecasting Models",
      description:
        "Use machine learning to forecast sales, demand, operational capacity, pricing, and market trends.",
    },
    {
      title: "Data Classification",
      description:
        "Automatically classify documents, emails, images, customer requests, and business data at scale.",
    },
  ];

  const benefits = [
    { value: "Faster", label: "Business Decisions" },
    { value: "Smarter", label: "Predictions" },
    { value: "Scalable", label: "Data Intelligence" },
    { value: "24/7", label: "Automated Insights" },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 overflow-hidden">
      {/* ===== INJECT KEYFRAMES ===== */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.6); }
          50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.3), 0 0 60px rgba(34, 211, 238, 0.2); }
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
        @keyframes data-flow {
          0% { width: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
        @keyframes node-pulse {
          0%, 100% { r: 4; fill: #06b6d4; }
          50% { r: 6; fill: #3b82f6; }
        }
        @keyframes dendrite-grow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2.5s infinite; }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease infinite;
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-data-flow { animation: data-flow 3s ease-in-out infinite; }
        .animate-node-pulse { animation: node-pulse 2s ease-in-out infinite; }
        .animate-dendrite {
          stroke-dasharray: 100;
          animation: dendrite-grow 2s ease-out forwards;
        }
      `}</style>

      {/* ===== BACKGROUND ORBS & NETWORK LINES ===== */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "-5s" }} />
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="30%" x2="90%" y2="70%" stroke="url(#mlGrad)" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="30%" y1="10%" x2="70%" y2="90%" stroke="url(#mlGrad)" strokeWidth="1" strokeDasharray="8,4" className="animate-pulse" style={{ animationDelay: "2s" }} />
          <line x1="50%" y1="80%" x2="80%" y2="20%" stroke="url(#mlGrad)" strokeWidth="1" strokeDasharray="6,3" className="animate-pulse" style={{ animationDelay: "4s" }} />
          <circle cx="15%" cy="25%" r="3" fill="#06b6d4" className="animate-ping" style={{ animationDuration: "4s" }} />
          <circle cx="85%" cy="65%" r="3" fill="#3b82f6" className="animate-ping" style={{ animationDuration: "5s", animationDelay: "1s" }} />
          <circle cx="75%" cy="15%" r="3" fill="#06b6d4" className="animate-ping" style={{ animationDuration: "6s", animationDelay: "2s" }} />
          <circle cx="25%" cy="75%" r="3" fill="#3b82f6" className="animate-ping" style={{ animationDuration: "4s", animationDelay: "3s" }} />
        </svg>
      </div>

      {/* Breadcrumb */}
      <section className="relative px-6 pt-8">
        <div className="mx-auto max-w-7xl text-sm text-gray-500 animate-fade-in-up">
          <Link href="/" className="transition hover:text-cyan-600">Home</Link> /
          <Link href="/services" className="transition hover:text-cyan-600"> Services</Link> /
          <span className="text-gray-800">Machine Learning</span>
        </div>
      </section>

      {/* Hero */}
      <section className="relative px-6 py-20 sm:py-24">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 overflow-hidden">
          <div className="h-full bg-cyan-400 animate-data-flow"></div>
        </div>
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 animate-fade-in-up">
            Data-Driven Intelligence for Business Growth
          </span>
          <h1 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-cyan-700 to-blue-600 bg-clip-text text-transparent animate-gradient-flow">
            Machine Learning Solutions
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl animate-fade-in-up">
            Turn your business data into practical insights, accurate
            predictions, and intelligent automation with scalable machine
            learning solutions from Venza Global Services.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row animate-fade-in-up">
            <Link
              href="/consultation"
              className="rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700 shadow-md animate-pulse-glow"
            >
              Discuss Your ML Project
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:border-cyan-300 hover:bg-cyan-50"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MACHINE LEARNING VISUAL FRAME (CSS ILLUSTRATION) ===== */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {/* Left: Data points flowing in */}
              <svg className="w-40 h-40 sm:w-48 sm:h-48" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                {/* Scattered data nodes */}
                {[
                  [20, 30], [50, 20], [80, 40],
                  [30, 60], [60, 70], [90, 90],
                  [10, 80], [70, 50], [40, 90]
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="4" fill="url(#dataGrad)" className="animate-node-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
                {/* Connecting lines */}
                <line x1="20" y1="30" x2="50" y2="20" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" className="animate-dendrite" />
                <line x1="50" y1="20" x2="80" y2="40" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" className="animate-dendrite" style={{ animationDelay: "0.5s" }} />
                <line x1="30" y1="60" x2="60" y2="70" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" className="animate-dendrite" style={{ animationDelay: "1s" }} />
                <line x1="60" y1="70" x2="90" y2="90" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" className="animate-dendrite" style={{ animationDelay: "1.5s" }} />
                <line x1="10" y1="80" x2="30" y2="60" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" className="animate-dendrite" style={{ animationDelay: "2s" }} />
                <line x1="70" y1="50" x2="90" y2="90" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" className="animate-dendrite" style={{ animationDelay: "2.5s" }} />
              </svg>

              {/* Center: Machine Learning brain / model */}
              <svg className="w-40 h-40 sm:w-48 sm:h-48" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="40" fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse" />
                <circle cx="60" cy="60" r="30" fill="#e0f2fe" />
                <path d="M30 50 Q 60 20 90 50 Q 100 80 60 90 Q 20 80 30 50" fill="none" stroke="#3b82f6" strokeWidth="3" className="animate-dendrite" />
                <circle cx="60" cy="60" r="12" fill="#06b6d4" className="animate-brain-pulse" />
                <text x="60" y="60" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="bold" fill="white">ML</text>
                {/* Incoming data arrows */}
                <line x1="10" y1="40" x2="30" y2="50" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowCyan)" className="animate-float" style={{ animationDelay: "0.5s" }} />
                <line x1="10" y1="80" x2="30" y2="70" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" className="animate-float" style={{ animationDelay: "1s" }} />
                <defs>
                  <marker id="arrowCyan" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#06b6d4" />
                  </marker>
                  <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
                  </marker>
                </defs>
              </svg>

              {/* Right: Output / predictions */}
              <svg className="w-40 h-40 sm:w-48 sm:h-48" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="40" width="80" height="50" rx="8" fill="#f0f9ff" stroke="#06b6d4" strokeWidth="2" />
                <line x1="30" y1="60" x2="90" y2="60" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,2" className="animate-pulse" />
                <line x1="30" y1="70" x2="80" y2="70" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4,2" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                <line x1="30" y1="80" x2="70" y2="80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,2" className="animate-pulse" style={{ animationDelay: "1s" }} />
                <circle cx="100" cy="45" r="8" fill="#06b6d4" className="animate-node-pulse" />
                <text x="100" y="45" textAnchor="middle" dominantBaseline="central" fontSize="8" fill="white" fontWeight="bold">✓</text>
                <text x="60" y="105" textAnchor="middle" fontSize="10" fill="#475569" fontWeight="bold">Predictions</text>
              </svg>
            </div>
            {/* Caption */}
            <p className="text-center text-lg text-gray-500 mt-6 animate-fade-in-up">
              Machine learning transforms raw data into intelligent predictions and automated decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center animate-fade-in-up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">What We Build</p>
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">Machine Learning Capabilities</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="group relative bg-white rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-xl hover:shadow-cyan-200/20 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/40 transition-all duration-500 pointer-events-none" />
                <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 text-2xl font-black transform transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-cyan-700 mb-3 group-hover:text-blue-700 transition-colors">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-gray-200 bg-gray-50/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">Our Approach</p>
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">From Data to Business Impact</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Data Assessment", "Review your data quality, sources, business goals, and readiness."],
              ["02", "Model Development", "Build and test machine learning models for your specific use case."],
              ["03", "Integration", "Connect the solution with your website, software, cloud, or business workflow."],
              ["04", "Monitoring", "Track performance, improve accuracy, and scale the solution over time."],
            ].map(([number, title, description], index) => (
              <div
                key={number}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="mb-5 text-3xl font-bold text-cyan-600 animate-float">{number}</p>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl text-gray-900 animate-fade-in-up">
            Why Businesses Use Machine Learning
          </h2>
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.label}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-3xl font-bold text-cyan-600 sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.value}
                </p>
                <p className="mt-3 text-sm text-gray-600 sm:text-base">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-8 text-center text-white sm:p-12 shadow-xl animate-gradient-flow relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/40 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 1.5}s`,
                }}
              />
            ))}
          </div>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl animate-fade-in-up">
            Ready to Turn Data Into Better Decisions?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-50 animate-fade-in-up">
            Tell us what data you have, what problem you want to solve, and
            where you want to improve. Our team will help identify the right
            machine learning approach.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row animate-fade-in-up">
            <Link
              href="/consultation"
              className="rounded-xl bg-white text-cyan-700 px-8 py-4 font-semibold transition hover:bg-blue-50 shadow animate-pulse-glow"
            >
              Request Free Consultation
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Contact VGS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}