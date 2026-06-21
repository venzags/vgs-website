import Link from "next/link";
import Image from "next/image";

export default function DigitalMarketingPage() {
  const marketingServices = [
    {
      icon: "🔎",
      title: "SEO Strategy",
      description:
        "Improve your visibility on search engines with keyword research, technical SEO, on-page optimisation, and content planning.",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Build a stronger presence across social platforms with content strategy, campaign planning, audience engagement, and reporting.",
    },
    {
      icon: "🎯",
      title: "Performance Advertising",
      description:
        "Plan and optimise paid campaigns focused on leads, enquiries, website traffic, conversions, and measurable business outcomes.",
    },
    {
      icon: "✍️",
      title: "Content Marketing",
      description:
        "Create useful website content, landing pages, blogs, campaigns, and brand messaging that helps customers trust your business.",
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      description:
        "Track traffic, leads, conversions, campaign performance, customer behaviour, and opportunities for improvement.",
    },
    {
      icon: "🚀",
      title: "Conversion Optimisation",
      description:
        "Improve landing pages, calls to action, forms, user journeys, and website content so more visitors become customers.",
    },
  ];

  const channels = [
    "Google Search",
    "Google Business Profile",
    "SEO",
    "Social Media",
    "Content Strategy",
    "Email Campaigns",
    "Landing Pages",
    "Analytics",
  ];

  const process = [
    {
      number: "01",
      title: "Understand Your Market",
      description:
        "We review your business, target customers, competitors, current online presence, and growth goals.",
    },
    {
      number: "02",
      title: "Build a Strategy",
      description:
        "We create a practical plan covering the right channels, content, campaigns, priorities, and measurable targets.",
    },
    {
      number: "03",
      title: "Launch & Optimise",
      description:
        "We implement campaigns, improve website content, monitor performance, and refine what is working.",
    },
    {
      number: "04",
      title: "Measure Growth",
      description:
        "We track results, identify opportunities, and use data to make smarter marketing decisions over time.",
    },
  ];

  const outcomes = [
    { value: "More", label: "Qualified Leads" },
    { value: "Better", label: "Online Visibility" },
    { value: "Stronger", label: "Brand Trust" },
    { value: "Clearer", label: "Marketing Insights" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* ===== ANIMATED BACKGROUND ORBS (brand blue) ===== */}
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
{/* ===== BREADCRUMB ===== */}
      <section className="px-6 pt-8">
        <div className="mx-auto max-w-7xl text-sm text-[#6B7280] animate-fade-in-up">
          <Link href="/" className="hover:text-[#0A66C2]">Home</Link> /
          <Link href="/services" className="hover:text-[#0A66C2]"> Services</Link> /
          <span className="text-[#1F2937] font-medium"> Digital Marketing</span>
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
              📈 Visibility, leads, trust, and measurable growth
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-up bg-gradient-to-r from-[#0A66C2] to-[#38BDF8] bg-clip-text text-transparent animate-gradient-flow">
            Digital Marketing
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#6B7280] mb-12 animate-fade-in-up">
            Venza Global Services helps businesses improve online visibility,
            attract the right audience, build trust, generate leads, and make
            smarter marketing decisions using data instead of guesswork.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <Link
              href="/consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-7 py-4 font-bold text-white shadow-xl shadow-[#0A66C2]/20 transition hover:bg-[#094e9e] hover:shadow-2xl animate-pulse-soft"
            >
              Plan My Growth Strategy
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

      {/* ===== MARKETING SERVICES GRID (staggered fade-in) ===== */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">Marketing Services</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              Marketing Built Around Business Results
            </h2>
            <p className="mt-4 text-[#6B7280]">
              Good marketing is not just posting content. It is understanding
              your audience, communicating value clearly, improving visibility,
              and turning interest into action.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
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

      {/* ===== CHANNELS ===== */}
      <section className="py-14 px-4 sm:px-6 bg-[#0A66C2]/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2] animate-fade-in-up">Growth Channels</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937] mb-10 animate-fade-in-up">
            The Right Channel Depends on Your Customer
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {channels.map((channel, index) => (
              <span
                key={channel}
                className="rounded-full border border-[#0A66C2]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A66C2] transition hover:scale-110 hover:border-[#0A66C2] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {channel}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A66C2]">Our Process</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#1F2937]">
              From Marketing Activity to Measurable Progress
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

      {/* ===== OUTCOMES ===== */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl text-[#1F2937] animate-fade-in-up">
            What Better Digital Marketing Can Deliver
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome.label}
                className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-3xl sm:text-4xl font-black text-[#0A66C2]">{outcome.value}</p>
                <p className="mt-3 text-sm sm:text-base text-[#6B7280]">{outcome.label}</p>
              </div>
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
              Build a Smarter Growth Plan
            </p>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold animate-fade-in-up">
              Want More Visibility, Better Leads, and Clearer Results?
            </h2>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto animate-fade-in-up">
              Tell us what you sell, who you want to reach, and what is not
              working today. We will help you identify practical next steps for
              your digital marketing.
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