"use client";

export default function Services() {
  const services = [
    {
      title: "🤖 AI Solutions",
      description:
        "Intelligent AI-powered automation, analytics, and business transformation solutions.",
    },
    {
      title: "🧠 Machine Learning",
      description:
        "Advanced machine learning models for prediction, optimization, and decision making.",
    },
    {
      title: "💻 Software Development",
      description:
        "Custom software solutions designed for performance, scalability, and business growth.",
    },
    {
      title: "🌐 Web Development",
      description:
        "Modern responsive websites and web applications built using the latest technologies.",
    },
    {
      title: "📱 Mobile Applications",
      description:
        "Cross-platform Android and iOS applications with premium user experiences.",
    },
    {
      title: "☁️ Cloud Solutions",
      description:
        "Secure cloud infrastructure, migration services, and scalable deployments.",
    },
    {
      title: "📈 Digital Marketing",
      description:
        "SEO, social media marketing, content strategy, and online growth solutions.",
    },
    {
      title: "📊 IT Consulting",
      description:
        "Professional consulting services for technology planning and implementation.",
    },
    {
      title: "🔒 Cyber Security",
      description:
        "Enterprise-grade security solutions to protect your systems and data.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-100 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}