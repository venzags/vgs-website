"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Counter from "./components/Counter";
import Newsletter from "./components/Newsletter";
import VGSNetwork from "./components/VGSNetwork";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

type PortfolioProject = {
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "AI Solutions",
    description: "Intelligent automation, analytics and decision systems.",
    href: "/services/ai-solutions",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        className="h-16 w-16 sm:h-20 sm:w-20"
      >
        <circle
          cx="60"
          cy="45"
          r="22"
          fill="none"
          stroke="#0A66C2"
          strokeWidth="3"
          strokeDasharray="6 3"
        />
        <circle cx="60" cy="45" r="14" fill="#0A66C2" opacity="0.15" />
        <circle cx="60" cy="45" r="8" fill="#0A66C2" />
        <line x1="60" y1="23" x2="60" y2="15" stroke="#0A66C2" strokeWidth="2" />
        <line x1="82" y1="45" x2="90" y2="45" stroke="#0A66C2" strokeWidth="2" />
        <line x1="60" y1="67" x2="60" y2="75" stroke="#0A66C2" strokeWidth="2" />
        <line x1="38" y1="45" x2="30" y2="45" stroke="#0A66C2" strokeWidth="2" />
        <text
          x="60"
          y="50"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="bold"
        >
          AI
        </text>
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    description: "Predictive models, deep learning and intelligent forecasting.",
    href: "/services/machine-learning",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        className="h-16 w-16 sm:h-20 sm:w-20"
      >
        <polyline
          points="10,80 30,60 50,70 70,30 90,50 110,40"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="30" cy="60" r="4" fill="#7C3AED" />
        <circle cx="50" cy="70" r="4" fill="#7C3AED" />
        <circle cx="70" cy="30" r="4" fill="#7C3AED" />
        <circle cx="90" cy="50" r="4" fill="#7C3AED" />
        <circle cx="110" cy="40" r="4" fill="#7C3AED" />
        <rect
          x="35"
          y="85"
          width="50"
          height="20"
          rx="4"
          fill="#EDE9FE"
          stroke="#7C3AED"
          strokeWidth="2"
        />
        <text
          x="60"
          y="98"
          textAnchor="middle"
          fontSize="9"
          fill="#7C3AED"
          fontWeight="bold"
        >
          ML
        </text>
      </svg>
    ),
  },
  {
    title: "Software Development",
    description: "Custom enterprise applications, SaaS and API integrations.",
    href: "/services/software-development",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        className="h-16 w-16 sm:h-20 sm:w-20"
      >
        <rect
          x="15"
          y="25"
          width="90"
          height="70"
          rx="8"
          fill="#D1FAE5"
          stroke="#059669"
          strokeWidth="2"
        />
        <rect x="25" y="35" width="70" height="8" rx="2" fill="#059669" />
        <rect x="25" y="50" width="50" height="8" rx="2" fill="#059669" opacity="0.7" />
        <rect x="25" y="65" width="60" height="8" rx="2" fill="#059669" opacity="0.5" />
        <rect x="25" y="80" width="40" height="8" rx="2" fill="#059669" opacity="0.3" />
        <circle cx="100" cy="90" r="10" fill="#10B981" />
        <text
          x="100"
          y="94"
          textAnchor="middle"
          fill="white"
          fontSize="8"
          fontWeight="bold"
        >
          ✓
        </text>
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Modern websites, e-commerce and web applications.",
    href: "/services/web-development",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        className="h-16 w-16 sm:h-20 sm:w-20"
      >
        <rect
          x="15"
          y="30"
          width="90"
          height="60"
          rx="6"
          fill="#FEF3C7"
          stroke="#D97706"
          strokeWidth="2"
        />
        <rect x="25" y="40" width="30" height="18" rx="2" fill="white" />
        <rect x="25" y="65" width="40" height="6" rx="2" fill="#D97706" opacity="0.6" />
        <rect x="65" y="40" width="30" height="18" rx="2" fill="white" />
        <rect x="65" y="65" width="30" height="6" rx="2" fill="#D97706" opacity="0.6" />
        <circle cx="45" cy="55" r="8" fill="#D97706" />
      </svg>
    ),
  },
  {
    title: "Mobile Applications",
    description: "Android and iOS applications with premium user experiences.",
    href: "/services/mobile-applications",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        className="h-16 w-16 sm:h-20 sm:w-20"
      >
        <rect
          x="30"
          y="15"
          width="60"
          height="90"
          rx="8"
          fill="#FFE4E6"
          stroke="#E11D48"
          strokeWidth="2"
        />
        <rect x="40" y="25" width="40" height="50" rx="4" fill="white" />
        <circle cx="60" cy="50" r="12" fill="#E11D48" />
        <rect x="45" y="85" width="30" height="4" rx="2" fill="#E11D48" opacity="0.5" />
        <circle cx="60" cy="92" r="3" fill="#E11D48" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Migration, infrastructure and scalable cloud deployments.",
    href: "/services/cloud-solutions",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        className="h-16 w-16 sm:h-20 sm:w-20"
      >
        <path
          d="M30 75 Q 60 60 90 75 Q 105 95 75 95 L45 95 Q 15 95 30 75"
          fill="none"
          stroke="#0284C7"
          strokeWidth="3"
        />
        <circle cx="40" cy="65" r="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
        <circle cx="65" cy="55" r="14" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
        <circle cx="90" cy="65" r="12" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "SEO, social media and data-driven growth strategies.",
    href: "/services/digital-marketing",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        className="h-16 w-16 sm:h-20 sm:w-20"
      >
        <rect
          x="20"
          y="25"
          width="80"
          height="70"
          rx="8"
          fill="#FEF3C7"
          stroke="#B45309"
          strokeWidth="2"
        />
        <polyline
          points="30,80 45,50 60,65 75,30 90,45"
          fill="none"
          stroke="#B45309"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="45" cy="50" r="4" fill="#B45309" />
        <circle cx="75" cy="30" r="4" fill="#B45309" />
        <circle cx="90" cy="45" r="4" fill="#B45309" />
      </svg>
    ),
  },
  {
    title: "IT Consulting",
    description: "Technology strategy, planning and digital transformation.",
    href: "/services/it-consulting",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        className="h-16 w-16 sm:h-20 sm:w-20"
      >
        <circle cx="60" cy="45" r="18" fill="none" stroke="#4F46E5" strokeWidth="3" />
        <path
          d="M60 27 L60 35 M60 55 L60 63 M42 45 L35 45 M78 45 L85 45"
          stroke="#4F46E5"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect
          x="30"
          y="70"
          width="60"
          height="30"
          rx="6"
          fill="#EEF2FF"
          stroke="#4F46E5"
          strokeWidth="2"
        />
        <text
          x="60"
          y="88"
          textAnchor="middle"
          fontSize="10"
          fill="#4F46E5"
          fontWeight="bold"
        >
          PLAN
        </text>
      </svg>
    ),
  },
  {
    title: "Cyber Security",
    description: "Risk assessment, secure infrastructure and compliance.",
    href: "/services/cyber-security",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        className="h-16 w-16 sm:h-20 sm:w-20"
      >
        <rect
          x="25"
          y="20"
          width="70"
          height="80"
          rx="8"
          fill="#CCFBF1"
          stroke="#0F766E"
          strokeWidth="2"
        />
        <circle
          cx="60"
          cy="50"
          r="18"
          fill="none"
          stroke="#0F766E"
          strokeWidth="3"
          strokeDasharray="5 3"
        />
        <path
          d="M55 40 L65 50 L55 60"
          fill="none"
          stroke="#0F766E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="50" y="70" width="20" height="15" rx="3" fill="#0F766E" />
      </svg>
    ),
  },
];

const portfolioProjects: PortfolioProject[] = [
  {
    category: "Artificial Intelligence",
    title: "AI Business Automation",
    description: "Implemented AI-powered workflow automation for enterprise clients.",
    image: "/images/portfolio/ai-business-automation.png",
    href: "/portfolio/ai-business-automation",
  },
  {
    category: "Cloud Services",
    title: "Cloud Infrastructure Migration",
    description: "Migrated business systems to scalable cloud environments.",
    image: "/images/portfolio/cloud-infrastructure-migration.png",
    href: "/portfolio/cloud-infrastructure-migration",
  },
  {
    category: "Web Development",
    title: "Corporate Website Development",
    description: "Designed and developed high-performance corporate websites.",
    image: "/images/portfolio/corporate-website-development.png",
    href: "/portfolio/corporate-website-development",
  },
  {
    category: "Mobile Development",
    title: "Mobile Application Platform",
    description: "Built Android and iOS applications with modern technologies.",
    image: "/images/portfolio/mobile-application-platform.png",
    href: "/portfolio/mobile-app",
  },
  {
    category: "Marketing Solutions",
    title: "Digital Marketing Campaign",
    description: "Managed digital campaigns that increased customer engagement.",
    image: "/images/portfolio/digital-marketing-campaign.png",
    href: "/portfolio/digital-marketing-campaign",
  },
  {
    category: "Security Solutions",
    title: "Cyber Security Assessment",
    description: "Conducted security audits and vulnerability assessments.",
    image: "/images/portfolio/cyber-security-assessment.png",
    href: "/portfolio/cyber-security-assessment",
  },
];

const industries = [
  { name: "Healthcare", icon: "🏥" },
  { name: "Finance", icon: "💰" },
  { name: "Retail", icon: "🛍️" },
  { name: "Technology", icon: "💻" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Education", icon: "🎓" },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business goals, current challenges, users and technology requirements.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create a practical roadmap covering strategy, design, technology, timeline and delivery.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team develops, tests and refines your website, software, cloud, AI or automation solution.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy the solution, monitor performance, provide support and help your business scale.",
    icon: "🚀",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white pb-24 text-gray-900 lg:pb-0">
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 py-16 text-white md:py-20 lg:py-24"
      >
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid min-h-[420px] grid-cols-1 items-center gap-8 lg:min-h-[470px] lg:grid-cols-2 lg:gap-12">
            <div className="order-2 flex items-center justify-center lg:order-1">
              <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] md:h-[370px] md:w-[370px] lg:h-[410px] lg:w-[410px]">
                <VGSNetwork />
              </div>
            </div>

            <div className="order-1 text-left lg:order-2">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
              >
                AI-Powered Digital Transformation
              </motion.h1>

              <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl">
                Helping businesses worldwide accelerate growth through Artificial
                Intelligence, Cloud Technologies, Software Development and Digital
                Innovation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-lg bg-white px-7 py-3 font-semibold text-blue-800 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Explore Services
                </Link>

                <Link
                  href="/contact"
                  className="rounded-lg border border-white px-7 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" aria-label="VGS highlights">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="text-4xl font-bold text-blue-700">
                <Counter end={20} />+
              </p>
              <p className="mt-2 text-gray-700">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-700">
                <Counter end={5} />+
              </p>
              <p className="mt-2 text-gray-700">Countries Reached</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-700">
                <Counter end={8} />+
              </p>
              <p className="mt-2 text-gray-700">Clients Supported</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-700 md:text-4xl">
                End-to-End
              </p>
              <p className="mt-2 text-gray-700">Project Support</p>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">
          About VGS
        </h2>
        <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-gray-700">
          Venza Global Services is a technology-focused consulting brand delivering
          AI solutions, Machine Learning, Software Development, Cloud Services and
          Business Transformation solutions to clients across the globe.
        </p>
      </motion.section>

      <motion.section
        id="services"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Our Core Services
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-gray-700">
            Explore VGS technology and consulting services built to support
            transformation, operations and business growth.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  href={service.href}
                  className="group block rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-lg transition-shadow hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                >
                  <div className="mb-6 flex justify-center">{service.icon}</div>
                  <h3 className="mb-3 text-center text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                    {service.title}
                  </h3>
                  <p className="text-center leading-relaxed text-gray-700">
                    {service.description}
                  </p>
                  <p className="mt-6 text-center font-semibold text-blue-700">
                    Learn More <span aria-hidden="true">→</span>
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="portfolio"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Portfolio
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-gray-700">
            Explore selected VGS project concepts and business technology solutions
            across multiple industries.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-2xl bg-gray-50 shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                    {project.category}
                  </p>
                  <h3 className="mb-3 mt-2 text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-700">
                    {project.description}
                  </p>
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1 font-semibold text-blue-700 transition-colors hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                  >
                    View Project <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
            >
              View Full Portfolio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="industries"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Industries We Serve
          </h2>
          <p className="mb-16 text-gray-700">
            Technology and consulting expertise built for diverse sectors.
          </p>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  aria-hidden="true"
                  className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl shadow-md"
                >
                  {industry.icon}
                </div>
                <p className="font-semibold text-gray-800">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Our Process
            </p>
            <h2 className="mb-5 text-4xl font-bold text-gray-900">
              How VGS Delivers Digital Solutions
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We follow a structured process to understand business needs, build the
              right technology solution and support long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-2xl text-white shadow-lg"
                  >
                    {step.icon}
                  </div>
                  <span aria-hidden="true" className="text-4xl font-black text-blue-100">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="leading-relaxed text-gray-700">{step.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
            >
              Start Your Project Discussion <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-4xl font-bold">Why Choose VGS</h2>
          <p className="mb-16 text-slate-200">
            Technology and strategy combined for practical business outcomes.
          </p>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { title: "Global", description: "Worldwide service delivery", icon: "🌍" },
              { title: "AI", description: "Future-ready AI solutions", icon: "🧠" },
              { title: "Cloud", description: "Scalable cloud infrastructure", icon: "☁️" },
              { title: "Growth", description: "Business-focused strategy", icon: "📈" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-4xl"
                >
                  {item.icon}
                </div>
                <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                <p className="text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            Let’s Build Something Great
          </h2>
          <p className="mb-10 text-gray-700">
            Ready to transform your business with modern technology solutions?
          </p>
          <Link
            href="/consultation"
            className="inline-flex rounded-xl bg-blue-700 px-10 py-4 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
          >
            Book a Free Consultation <span aria-hidden="true">&nbsp;→</span>
          </Link>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white shadow-lg lg:hidden">
        <nav aria-label="Mobile quick actions" className="grid grid-cols-5 text-center">
          <a
            href="tel:+918606435123"
            aria-label="Call Venza Global Services"
            className="bg-blue-700 py-4 font-semibold text-white"
          >
            <span aria-hidden="true">📞</span>
            <span className="block text-xs">Call</span>
          </a>

          <a
            href="https://wa.me/918606435123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Venza Global Services on WhatsApp"
            className="bg-green-600 py-4 font-semibold text-white"
          >
            <span aria-hidden="true">💬</span>
            <span className="block text-xs">WhatsApp</span>
          </a>

          <a
            href="mailto:hello@venzags.com"
            aria-label="Email Venza Global Services"
            className="bg-purple-700 py-4 font-semibold text-white"
          >
            <span aria-hidden="true">📧</span>
            <span className="block text-xs">Email</span>
          </a>

          <Link
            href="/contact"
            aria-label="Open VGS contact page"
            className="bg-cyan-700 py-4 font-semibold text-white"
          >
            <span aria-hidden="true">📝</span>
            <span className="block text-xs">Contact</span>
          </Link>

          <Link
            href="/consultation"
            aria-label="Book a free consultation"
            className="bg-orange-600 py-4 font-semibold text-white"
          >
            <span aria-hidden="true">📅</span>
            <span className="block text-xs">Book</span>
          </Link>
        </nav>
      </div>

      <Newsletter />
    </div>
  );
}