import Link from "next/link";

export default function AISolutionsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 overflow-hidden">
      {/* ===== INJECT CUSTOM KEYFRAMES ===== */}
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
        @keyframes brain-pulse {
          0%, 100% { fill: #06b6d4; }
          50% { fill: #3b82f6; }
        }
        @keyframes data-flow {
          0% { width: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2.5s infinite; }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease infinite;
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-brain-pulse { animation: brain-pulse 2s ease-in-out infinite; }
        .animate-data-flow { animation: data-flow 3s ease-in-out infinite; }
      `}</style>

      {/* ===== AI BACKGROUND ORBS & NETWORK LINES ===== */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "-5s" }} />
        {/* Subtle neural network background */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="30%" y1="40%" x2="70%" y2="10%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="8,4" className="animate-pulse" style={{ animationDelay: "2s" }} />
          <line x1="50%" y1="90%" x2="80%" y2="30%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="6,3" className="animate-pulse" style={{ animationDelay: "4s" }} />
          <circle cx="10%" cy="20%" r="3" fill="#06b6d4" className="animate-ping" style={{ animationDuration: "4s" }} />
          <circle cx="90%" cy="80%" r="3" fill="#3b82f6" className="animate-ping" style={{ animationDuration: "5s", animationDelay: "1s" }} />
          <circle cx="70%" cy="10%" r="3" fill="#06b6d4" className="animate-ping" style={{ animationDuration: "6s", animationDelay: "2s" }} />
          <circle cx="80%" cy="30%" r="3" fill="#3b82f6" className="animate-ping" style={{ animationDuration: "4s", animationDelay: "3s" }} />
        </svg>
      </div>

      {/* Breadcrumb */}
      <section className="relative px-6 pt-8">
        <div className="mx-auto max-w-7xl text-sm text-gray-500 animate-fade-in-up">
          <Link href="/" className="transition hover:text-cyan-600">Home</Link> /
          <Link href="/services" className="transition hover:text-cyan-600"> Services</Link> /
          <span className="text-gray-800">AI Solutions</span>
        </div>
      </section>

      {/* Hero */}
      <section className="relative py-24 px-6">
        {/* Animated data stream line behind hero */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 overflow-hidden">
          <div className="h-full bg-cyan-400 animate-data-flow"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            🤖 Artificial Intelligence Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent animate-gradient-flow">
            AI Solutions
          </h1>
          <p className="max-w-4xl mx-auto text-xl text-gray-600 animate-fade-in-up">
            Transform your business using Artificial Intelligence,
            Automation, Predictive Analytics, Generative AI,
            Computer Vision, and Intelligent Decision Systems.
          </p>
        </div>
      </section>

      {/* ===== AI + HUMAN VISUAL FRAME (under hero) ===== */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex items-center justify-center animate-fade-in-up">
            {/* Human figure (left) */}
            <svg className="w-32 h-32 sm:w-40 sm:h-40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="30" r="15" fill="#475569" />
              <ellipse cx="50" cy="70" rx="20" ry="25" fill="#475569" />
              <line x1="35" y1="45" x2="20" y2="30" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
              <line x1="65" y1="45" x2="80" y2="30" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
              <line x1="35" y1="85" x2="25" y2="100" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
              <line x1="65" y1="85" x2="75" y2="100" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
            </svg>

            {/* Connecting lines */}
            <svg className="w-24 h-24 sm:w-32 sm:h-32 mx-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <line x1="10" y1="50" x2="90" y2="50" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: "1s" }} />
              <circle cx="50" cy="50" r="8" fill="#06b6d4" className="animate-brain-pulse" />
              <circle cx="20" cy="30" r="4" fill="#3b82f6" className="animate-ping" style={{ animationDuration: "3s" }} />
              <circle cx="80" cy="70" r="4" fill="#3b82f6" className="animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
            </svg>

            {/* AI / brain figure (right) */}
            <svg className="w-32 h-32 sm:w-40 sm:h-40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="25" width="60" height="50" rx="10" fill="#e0f2fe" stroke="#06b6d4" strokeWidth="3" />
              <circle cx="50" cy="50" r="15" fill="#06b6d4" className="animate-brain-pulse" />
              <line x1="30" y1="35" x2="15" y2="20" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" className="animate-float" style={{ animationDelay: "0.5s" }} />
              <line x1="70" y1="35" x2="85" y2="20" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" className="animate-float" style={{ animationDelay: "1s" }} />
              <line x1="30" y1="65" x2="15" y2="80" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" className="animate-float" style={{ animationDelay: "1.5s" }} />
              <line x1="70" y1="65" x2="85" y2="80" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" className="animate-float" style={{ animationDelay: "2s" }} />
              <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="bold" fill="white">AI</text>
            </svg>
          </div>
          {/* Caption */}
          <p className="text-center text-lg text-gray-500 mt-6 animate-fade-in-up">
            Artificial Intelligence working hand in hand with people to build a better future.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "AI Automation", desc: "Automate repetitive business processes using intelligent AI workflows and smart automation." },
            { title: "Generative AI", desc: "Build AI assistants, chatbots, content generators, and custom enterprise AI solutions." },
            { title: "Predictive Analytics", desc: "Forecast trends, customer behaviour, demand, and business performance using AI models." },
            { title: "Computer Vision", desc: "Image recognition, object detection, facial recognition, and visual intelligence." },
            { title: "AI Integration", desc: "Integrate AI technologies into your existing software, websites, and business systems." },
            { title: "Enterprise AI", desc: "Scalable AI platforms and enterprise-grade intelligent solutions for organizations." },
          ].map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:shadow-cyan-200/30 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle glowing ring on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/40 transition-all duration-500 pointer-events-none" />
              {/* AI chip icon (abstract) */}
              <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 text-3xl font-black transform transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                {["⚙️","✨","📊","👁️","🔗","🏢"][index]}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-600 group-hover:text-blue-700 transition-colors">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
              {/* Animated bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
            Why Choose Our AI Solutions?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "95%", label: "Process Automation" },
              { value: "24/7", label: "AI Operations" },
              { value: "50+", label: "AI Use Cases" },
              { value: "100%", label: "Scalable Architecture" },
            ].map((item, index) => (
              <div key={item.label} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <h3 className="text-5xl font-bold text-cyan-600 mb-3 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700">
                  {item.value}
                </h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-10 sm:p-12 text-center text-white shadow-2xl shadow-cyan-500/20 overflow-hidden animate-gradient-flow">
          {/* Floating particles */}
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Implement AI?
          </h2>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Speak with our AI experts and discover how
            Artificial Intelligence can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <Link
              href="/consultation"
              className="relative bg-white text-blue-700 hover:bg-cyan-50 px-8 py-4 rounded-xl font-semibold transition shadow animate-pulse-glow"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}