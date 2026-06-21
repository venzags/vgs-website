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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900">
      {/* Breadcrumb */}
      <section className="px-6 pt-8">
        <div className="mx-auto max-w-7xl text-sm text-gray-500">
          <Link href="/" className="transition hover:text-cyan-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="transition hover:text-cyan-600">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Machine Learning</span>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            Data-Driven Intelligence for Business Growth
          </span>

          <h1 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-cyan-700 to-blue-600 bg-clip-text text-transparent">
            Machine Learning Solutions
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Turn your business data into practical insights, accurate
            predictions, and intelligent automation with scalable machine
            learning solutions from Venza Global Services.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/consultation"
              className="rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700 shadow-md"
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

      {/* Capabilities */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
              What We Build
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">
              Machine Learning Capabilities
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-md hover:shadow-lg hover:border-cyan-300 transition duration-300 hover:-translate-y-1"
              >
                <h3 className="mb-4 text-xl font-bold text-cyan-700">
                  {capability.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-gray-200 bg-gray-50/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
              Our Approach
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">
              From Data to Business Impact
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Data Assessment", "Review your data quality, sources, business goals, and readiness."],
              ["02", "Model Development", "Build and test machine learning models for your specific use case."],
              ["03", "Integration", "Connect the solution with your website, software, cloud, or business workflow."],
              ["04", "Monitoring", "Track performance, improve accuracy, and scale the solution over time."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="mb-5 text-3xl font-bold text-cyan-600">
                  {number}
                </p>
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
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl text-gray-900">
            Why Businesses Use Machine Learning
          </h2>

          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.label}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-3xl font-bold text-cyan-600 sm:text-4xl">
                  {benefit.value}
                </p>
                <p className="mt-3 text-sm text-gray-600 sm:text-base">
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-8 text-center text-white sm:p-12 shadow-xl">
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            Ready to Turn Data Into Better Decisions?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-blue-50">
            Tell us what data you have, what problem you want to solve, and
            where you want to improve. Our team will help identify the right
            machine learning approach.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/consultation"
              className="rounded-xl bg-white text-cyan-700 px-8 py-4 font-semibold transition hover:bg-blue-50 shadow"
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