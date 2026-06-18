export default function Portfolio() {
  const projects = [
    {
      title: "AI Business Automation",
      category: "Artificial Intelligence",
      description:
        "Implemented AI-powered workflow automation for enterprise clients.",
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "Cloud Services",
      description:
        "Migrated business systems to scalable cloud environments.",
    },
    {
      title: "Corporate Website Development",
      category: "Web Development",
      description:
        "Designed and developed high-performance corporate websites.",
    },
    {
      title: "Mobile Application Platform",
      category: "Mobile Development",
      description:
        "Built Android and iOS applications with modern technologies.",
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing Solutions",
      description:
        "Managed digital campaigns that increased customer engagement.",
    },
    {
      title: "Cyber Security Assessment",
      category: "Security Solutions",
      description:
        "Conducted security audits and vulnerability assessments.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-5xl font-bold text-center mb-4">
          Portfolio
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Explore some of our featured projects and successful business
          solutions delivered across multiple industries worldwide.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500"></div>

              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>

                <button className="text-blue-600 font-semibold hover:text-cyan-600 transition">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}