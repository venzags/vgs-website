import Link from "next/link";
import Image from "next/image";
import ServiceNavbar from "../components/ServiceNavbar";

export default function ServicesPage() {
  const services = [
    {
      title: "🤖 AI Solutions",
      href: "/services/ai-solutions",
      description: "AI-powered automation, analytics, and intelligent business solutions.",
    },
    {
      title: "🧠 Machine Learning",
      href: "/services/machine-learning",
      description: "Predictive analytics, deep learning, and intelligent decision systems.",
    },
    {
      title: "💻 Software Development",
      href: "/services/software-development",
      description: "Custom software solutions built for performance and scalability.",
    },
    {
      title: "🌐 Web Development",
      href: "/services/web-development",
      description: "Modern websites and web applications using latest technologies.",
    },
    {
      title: "📱 Mobile Applications",
      href: "/services/mobile-applications",
      description: "Android and iOS applications with premium user experiences.",
    },
    {
      title: "☁️ Cloud Solutions",
      href: "/services/cloud-solutions",
      description: "Cloud migration, infrastructure management and scalable deployments.",
    },
    {
      title: "📊 IT Consulting",
      href: "/services/it-consulting",
      description: "Technology planning, strategy and digital transformation consulting.",
    },
    {
      title: "📈 Digital Marketing",
      href: "/services/digital-marketing",
      description: "SEO, social media marketing and online growth strategies.",
    },
    {
      title: "🔒 Cyber Security",
      href: "/services/cyber-security",
      description: "Enterprise-grade security solutions and cyber risk protection.",
    },
  ];

  return (
    <>
      <ServiceNavbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white">
        {/* ===== ANIMATED BACKGROUND ORBS (adjusted for dark) ===== */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0A66C2]/10 rounded-full filter blur-3xl animate-[float_10s_ease-in-out_infinite]" />
            <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#38BDF8]/15 rounded-full filter blur-3xl animate-[float_12s_ease-in-out_infinite_2s]" />
            <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-[#0A66C2]/8 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite_4s]" />
          </div>
        </div>

        {/* ===== KEYFRAMES ===== */}
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

        {/* ===== HEADER (still present, you can remove if ServiceNavbar replaces it) ===== */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
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

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-gray-300">
              <Link href="/" className="hover:text-[#38BDF8] transition">Home</Link>
              <Link href="/#about" className="hover:text-[#38BDF8] transition">About</Link>
              <Link href="/services" className="text-[#38BDF8] font-semibold">Services</Link>
              <Link href="/#portfolio" className="hover:text-[#38BDF8] transition">Portfolio</Link>
              <Link href="/#industries" className="hover:text-[#38BDF8] transition">Industries</Link>
              <Link href="/testimonials" className="hover:text-[#38BDF8] transition">Testimonials</Link>
              <Link href="/contact" className="hover:text-[#38BDF8] transition">Contact</Link>
            </nav>

            <Link
              href="/consultation"
              className="bg-[#0A66C2] hover:bg-[#094e9e] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold shadow-md shadow-[#0A66C2]/20 transition animate-pulse-soft"
            >
              Free Consultation
            </Link>
          </div>
          <div className="lg:hidden overflow-x-auto pb-2 px-6">
            <div className="flex gap-4 text-sm font-medium text-gray-300">
              <Link href="/" className="whitespace-nowrap hover:text-[#38BDF8]">Home</Link>
              <Link href="/#about" className="whitespace-nowrap hover:text-[#38BDF8]">About</Link>
              <Link href="/services" className="whitespace-nowrap text-[#38BDF8] font-semibold">Services</Link>
              <Link href="/#portfolio" className="whitespace-nowrap hover:text-[#38BDF8]">Portfolio</Link>
              <Link href="/#industries" className="whitespace-nowrap hover:text-[#38BDF8]">Industries</Link>
              <Link href="/testimonials" className="whitespace-nowrap hover:text-[#38BDF8]">Testimonials</Link>
              <Link href="/contact" className="whitespace-nowrap hover:text-[#38BDF8]">Contact</Link>
            </div>
          </div>
        </header>

        {/* ===== HERO (dark theme version) ===== */}
        <section className="pt-24 pb-16 px-6 text-center relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 animate-fade-in-up">
              Venza Global Services
            </h1>

            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-[#0A66C2]/20 text-[#38BDF8] text-sm font-semibold mb-6 border border-[#38BDF8]/20">
                ⚡ Your Technology Partner
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-up bg-gradient-to-r from-[#38BDF8] to-[#0A66C2] bg-clip-text text-transparent animate-gradient-flow">
              VGS Technology Services
            </h2>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 mb-12 animate-fade-in-up">
              Explore our complete portfolio of AI Solutions, Machine Learning,
              Software Development, Cloud Solutions, Digital Marketing,
              Cyber Security, and IT Consulting services designed to accelerate
              business growth and digital transformation.
            </p>
          </div>
        </section>

        {/* ===== SERVICES GRID (glass cards for dark bg) ===== */}
        <section className="pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-md border border-white/10 
                             transition-all duration-500 
                             hover:shadow-2xl hover:shadow-[#38BDF8]/20 
                             hover:-translate-y-2 
                             hover:border-[#38BDF8]/40 
                             animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#38BDF8] transition-all duration-500 pointer-events-none" />
                  <div className="text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-[bounce_1s_ease-in-out_infinite]">
                    {service.title.split(" ")[0]}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#38BDF8] mb-4 group-hover:text-[#0A66C2] transition-colors">
                    {service.title.substring(service.title.indexOf(" ") + 1)}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-[#38BDF8] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg
                      className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="pb-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-[#0A66C2]/20 animate-gradient-flow relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite]" />
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/20 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite_4s]" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 animate-fade-in-up">
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

        {/* ===== FOOTER ===== */}
        <footer className="bg-[#0f172a] text-white px-6 py-8 text-center text-sm">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2026 Venza Global Services. All Rights Reserved.</p>
            <div className="flex gap-5">
              <Link href="/" className="hover:text-[#38BDF8] transition">Home</Link>
              <Link href="/services" className="hover:text-[#38BDF8] transition">Services</Link>
              <Link href="/contact" className="hover:text-[#38BDF8] transition">Contact</Link>
              <Link href="/consultation" className="hover:text-[#38BDF8] transition">Consultation</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}