"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import VGSNetwork from "./components/VGSNetwork";
import Newsletter from "./components/Newsletter";
import Counter from "./components/Counter";

// ---------------------------------------------------------------------------
// SERVICES DATA (unchanged – smooth SVGs)
// ---------------------------------------------------------------------------
const services = [
  {
    title: "AI Solutions",
    desc: "Intelligent automation, analytics & decision systems.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20">
        <circle cx="60" cy="45" r="22" fill="none" stroke="#0A66C2" strokeWidth="3" strokeDasharray="6 3" />
        <circle cx="60" cy="45" r="14" fill="#0A66C2" opacity="0.15" />
        <circle cx="60" cy="45" r="8" fill="#0A66C2" />
        <line x1="60" y1="23" x2="60" y2="15" stroke="#0A66C2" strokeWidth="2" />
        <line x1="82" y1="45" x2="90" y2="45" stroke="#0A66C2" strokeWidth="2" />
        <line x1="60" y1="67" x2="60" y2="75" stroke="#0A66C2" strokeWidth="2" />
        <line x1="38" y1="45" x2="30" y2="45" stroke="#0A66C2" strokeWidth="2" />
        <text x="60" y="50" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">AI</text>
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    desc: "Predictive models, deep learning & intelligent forecasting.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20">
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
    desc: "Custom enterprise apps, SaaS & API integrations.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20">
        <rect x="15" y="25" width="90" height="70" rx="8" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
        <rect x="25" y="35" width="70" height="8" rx="2" fill="#059669" />
        <rect x="25" y="50" width="50" height="8" rx="2" fill="#059669" opacity="0.7" />
        <rect x="25" y="65" width="60" height="8" rx="2" fill="#059669" opacity="0.5" />
        <rect x="25" y="80" width="40" height="8" rx="2" fill="#059669" opacity="0.3" />
        <circle cx="100" cy="90" r="10" fill="#10b981" />
        <text x="100" y="94" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">✓</text>
      </svg>
    ),
  },
  {
    title: "Web Development",
    desc: "Modern websites, e‑commerce & web applications.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20">
        <rect x="15" y="30" width="90" height="60" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <rect x="25" y="40" width="30" height="18" rx="2" fill="white" />
        <rect x="25" y="65" width="40" height="6" rx="2" fill="#D97706" opacity="0.6" />
        <rect x="65" y="40" width="30" height="18" rx="2" fill="white" />
        <rect x="65" y="65" width="30" height="6" rx="2" fill="#D97706" opacity="0.6" />
        <circle cx="45" cy="55" r="8" fill="#D97706" />
        <text x="45" y="59" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">🌐</text>
      </svg>
    ),
  },
  {
    title: "Mobile Applications",
    desc: "Android & iOS apps with premium user experiences.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20">
        <rect x="30" y="15" width="60" height="90" rx="8" fill="#FFE4E6" stroke="#E11D48" strokeWidth="2" />
        <rect x="40" y="25" width="40" height="50" rx="4" fill="white" />
        <circle cx="60" cy="50" r="12" fill="#E11D48" />
        <text x="60" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">📱</text>
        <rect x="45" y="85" width="30" height="4" rx="2" fill="#E11D48" opacity="0.5" />
        <circle cx="60" cy="92" r="3" fill="#E11D48" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    desc: "Migration, infrastructure & scalable deployments.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20">
        <path d="M30 75 Q 60 60 90 75 Q 105 95 75 95 L45 95 Q 15 95 30 75" fill="none" stroke="#0284C7" strokeWidth="3" />
        <circle cx="40" cy="65" r="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
        <circle cx="65" cy="55" r="14" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
        <circle cx="90" cy="65" r="12" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
        <line x1="45" y1="75" x2="45" y2="95" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        <line x1="60" y1="60" x2="60" y2="85" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        <line x1="80" y1="72" x2="80" y2="90" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media & data‑driven growth strategies.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20">
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
    title: "IT Consulting",
    desc: "Technology strategy, planning & digital transformation.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20">
        <circle cx="60" cy="45" r="18" fill="none" stroke="#4F46E5" strokeWidth="3" />
        <path d="M60 27 L60 35 M60 55 L60 63 M42 45 L35 45 M78 45 L85 45" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
        <rect x="30" y="70" width="60" height="30" rx="6" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" />
        <text x="60" y="88" textAnchor="middle" fontSize="10" fill="#4F46E5" fontWeight="bold">STRATEGY</text>
      </svg>
    ),
  },
  {
    title: "Cyber Security",
    desc: "Risk assessment, secure infrastructure & compliance.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20">
        <rect x="25" y="20" width="70" height="80" rx="8" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <circle cx="60" cy="50" r="18" fill="none" stroke="#0F766E" strokeWidth="3" strokeDasharray="5 3" />
        <path d="M55 40 L65 50 L55 60" fill="none" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="50" y="70" width="20" height="15" rx="3" fill="#0F766E" />
        <text x="60" y="80" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">🔒</text>
      </svg>
    ),
  },
];

// ---------------------------------------------------------------------------
// PORTFOLIO DATA – six projects with placeholder images
// ---------------------------------------------------------------------------
const portfolioProjects = [
  {
    category: "Artificial Intelligence",
    title: "AI Business Automation",
    description: "Implemented AI-powered workflow automation for enterprise clients.",
    image: "/images/portfolio/ai-business-automation.png",
    link: "/portfolio/ai-business-automation",
  },
  {
    category: "Cloud Services",
    title: "Cloud Infrastructure Migration",
    description: "Migrated business systems to scalable cloud environments.",
    image: "/images/portfolio/cloud-infrastructure-migration.png",
    link: "/portfolio/cloud-infrastructure-migration",
  },
  {
    category: "Web Development",
    title: "Corporate Website Development",
    description: "Designed and developed high-performance corporate websites.",
    image: "/images/portfolio/corporate-website-development.png",
    link: "/portfolio/corporate-website-development",
  },
  {
    category: "Mobile Development",
    title: "Mobile Application Platform",
    description: "Built Android and iOS applications with modern technologies.",
    image: "/images/portfolio/mobile-application-platform.png",
    link: "/portfolio/mobile-app",
  },
  {
    category: "Marketing Solutions",
    title: "Digital Marketing Campaign",
    description: "Managed digital campaigns that increased customer engagement.",
    image: "/images/portfolio/digital-marketing-campaign.png",
    link: "/portfolio/digital-marketing-campaign",
  },
  {
    category: "Security Solutions",
    title: "Cyber Security Assessment",
    description: "Conducted security audits and vulnerability assessments.",
    image: "/images/portfolio/cyber-security-assessment.png",
    link: "/portfolio/cyber-security-assessment",
  },
];

const industriesList = [
  "Healthcare",
  "Finance",
  "Retail",
  "Technology",
  "Manufacturing",
  "Education",
];

const testimonials = [
  {
    quote: "VGS transformed our legacy systems. We now operate with AI speed.",
    author: "Dr. A. Sharma",
    role: "CTO, HealthBridge",
  },
  {
    quote: "The cloud migration was seamless. Zero downtime, 40% cost savings.",
    author: "R. Menon",
    role: "CFO, FinCorp",
  },
  {
    quote: "Their mobile app boosted our customer engagement by 200%.",
    author: "K. Patel",
    role: "Product Manager, RetailX",
  },
];

// ---------------------------------------------------------------------------
// HELPER
// ---------------------------------------------------------------------------
function getIndustryEmoji(name: string): string {
  const map: Record<string, string> = {
    Healthcare: "🏥",
    Finance: "💰",
    Retail: "🛍️",
    Technology: "💻",
    Manufacturing: "🏭",
    Education: "🎓",
  };
  return map[name] || "🌐";
}

// ---------------------------------------------------------------------------
// HOME PAGE
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-32 px-6"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] lg:min-h-[600px]">
            <div className="text-left order-1">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                AI‑Powered Digital Transformation
              </motion.h2>
              <p className="text-lg md:text-xl mb-10 text-slate-300">
                Helping businesses worldwide accelerate growth through
                Artificial Intelligence, Cloud Technologies, Software
                Development, and Digital Innovation.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="/services"
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold inline-block hover:bg-blue-50 transition"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="border border-white px-8 py-3 rounded-lg inline-block hover:bg-white/10 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center order-2 lg:order-none">
              <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                <VGSNetwork />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-700">
                <Counter end={150} />+
              </h3>
              <p className="text-gray-600 mt-2">Projects</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-700"><Counter end={25} />+</h3>
              <p className="text-gray-600 mt-2">Countries</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-700"><Counter end={50} />+</h3>
              <p className="text-gray-600 mt-2">Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-700"><Counter end={98} />%</h3>
              <p className="text-gray-600 mt-2">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="about"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-8">About VGS</h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
          Venza Global Services is a technology‑focused consulting brand
          delivering AI solutions, Machine Learning, Software Development,
          Cloud Services, and Business Transformation solutions to clients
          across the globe.
        </p>
      </motion.section>

      {/* ================= SERVICES – BRAND COLORED CARDS ================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Core Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Click on any service to learn more. Hover over the icons to see them
            come alive.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.a
                key={s.title}
                href={`/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                // VGS brand gradient replacing white
                className="group block bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-blue-100"
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {s.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-center mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">{s.desc}</p>
                <div className="mt-6 text-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= PORTFOLIO – WITH IMAGE FRAMES ================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Portfolio</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Explore some of our featured projects and successful business solutions
            delivered across multiple industries worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500/60 transition-all duration-300 pointer-events-none rounded-2xl" />
                </div>

                <div className="p-6">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    View Project
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
            >
              View Full Portfolio →
            </a>
          </div>
        </div>
      </motion.section>

      {/* ================= INDUSTRIES – ANIMATED ICONS ================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-600 mb-16">
            Expertise built across diverse sectors.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industriesList.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-3xl">{getIndustryEmoji(ind)}</span>
                </motion.div>
                <p className="font-semibold text-gray-800">{ind}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= TESTIMONIALS – SCALE ON HOVER ================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What Clients Say</h2>
          <p className="text-center text-gray-600 mb-16">
            Trusted by leaders across the globe.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                <p className="text-gray-600 italic mb-6">“{t.quote}”</p>
                <div>
                  <h4 className="font-bold text-gray-900">{t.author}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= WHY CHOOSE VGS ================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Why Choose VGS</h2>
          <p className="text-slate-300 mb-16">
            We combine technology and strategy to deliver measurable results.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Global", desc: "Worldwide service delivery", icon: "🌍" },
              { title: "AI", desc: "Future-ready AI solutions", icon: "🧠" },
              { title: "Cloud", desc: "Scalable cloud infrastructure", icon: "☁️" },
              { title: "Growth", desc: "Business-focused strategy", icon: "📈" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-4xl">{item.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Build Something Great</h2>
          <p className="text-gray-600 mb-10">
            Ready to transform your business with cutting‑edge technology?
          </p>
          <a
            href="/consultation"
            className="bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Book a Free Consultation →
          </a>
        </div>
      </section>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white shadow-lg lg:hidden">
        <div className="grid grid-cols-5 text-center">
          <a href="tel:+919999999999" className="bg-blue-600 text-white py-4 font-semibold">
            📞 <div className="text-xs">Call</div>
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="bg-green-500 text-white py-4 font-semibold"
          >
            💬 <div className="text-xs">WhatsApp</div>
          </a>
          <a
            href="mailto:admin@venzags.com"
            className="bg-purple-600 text-white py-4 font-semibold"
          >
            📧 <div className="text-xs">Email</div>
          </a>
          <a
            href="/contact"
            className="bg-cyan-600 text-white py-4 font-semibold"
          >
            📝 <div className="text-xs">Contact</div>
          </a>
          <a
            href="/consultation"
            className="bg-orange-500 text-white py-4 font-semibold"
          >
            📅 <div className="text-xs">Book</div>
          </a>
        </div>
      </div>

      {/* ================= NEWSLETTER ================= */}
      <Newsletter />
    </main>
  );
}