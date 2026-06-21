import Link from "next/link";

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Artificial Intelligence Solutions
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            AI Solutions
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-600">
            Transform your business using Artificial Intelligence,
            Automation, Predictive Analytics, Generative AI,
            Computer Vision, and Intelligent Decision Systems.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-cyan-600">AI Automation</h3>
            <p className="text-gray-600">
              Automate repetitive business processes using
              intelligent AI workflows and smart automation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-cyan-600">Generative AI</h3>
            <p className="text-gray-600">
              Build AI assistants, chatbots, content generators,
              and custom enterprise AI solutions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-cyan-600">Predictive Analytics</h3>
            <p className="text-gray-600">
              Forecast trends, customer behaviour, demand,
              and business performance using AI models.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-cyan-600">Computer Vision</h3>
            <p className="text-gray-600">
              Image recognition, object detection,
              facial recognition, and visual intelligence.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-cyan-600">AI Integration</h3>
            <p className="text-gray-600">
              Integrate AI technologies into your
              existing software, websites, and business systems.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-cyan-600">Enterprise AI</h3>
            <p className="text-gray-600">
              Scalable AI platforms and enterprise-grade
              intelligent solutions for organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our AI Solutions?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold text-cyan-600">95%</h3>
              <p className="text-gray-600 mt-3">Process Automation</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-cyan-600">24/7</h3>
              <p className="text-gray-600 mt-3">AI Operations</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-cyan-600">50+</h3>
              <p className="text-gray-600 mt-3">AI Use Cases</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-cyan-600">100%</h3>
              <p className="text-gray-600 mt-3">Scalable Architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-10 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Implement AI?
          </h2>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Speak with our AI experts and discover how
            Artificial Intelligence can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/consultation"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition shadow"
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