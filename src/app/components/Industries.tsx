export default function Industries() {
  const industries = [
    {
      title: "Healthcare",
      description:
        "Digital solutions, patient management systems, and healthcare technology services.",
    },
    {
      title: "Finance",
      description:
        "Secure fintech solutions, automation, analytics, and cloud infrastructure.",
    },
    {
      title: "Retail",
      description:
        "E-commerce platforms, customer engagement systems, and digital transformation.",
    },
    {
      title: "Technology",
      description:
        "Scalable software development, AI integration, and cloud-native solutions.",
    },
    {
      title: "Manufacturing",
      description:
        "Smart factory systems, process automation, and operational efficiency tools.",
    },
    {
      title: "Education",
      description:
        "E-learning platforms, student management systems, and digital education services.",
    },
  ];

  return (
    <section
      id="industries"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Industries We Serve
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          We help organizations across multiple industries accelerate growth
          through innovation, technology, and digital transformation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-slate-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                {industry.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}