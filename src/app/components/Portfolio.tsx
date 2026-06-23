import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Business Automation",
      category: "Artificial Intelligence",
      description:
        "Implemented AI-powered workflow automation for enterprise clients.",
      href: "/portfolio/ai-business-automation",
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "Cloud Services",
      description:
        "Migrated business systems to scalable cloud environments.",
      href: "/portfolio/cloud-infrastructure-migration",
    },
    {
      title: "Corporate Website Development",
      category: "Web Development",
      description:
        "Designed and developed high-performance corporate websites.",
      href: "/portfolio/corporate-website-development",
    },
    {
      title: "Mobile Application Platform",
      category: "Mobile Development",
      description:
        "Built Android and iOS applications with modern technologies.",
      href: "/portfolio/mobile-application-platform",
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing Solutions",
      description:
        "Managed digital campaigns that increased customer engagement.",
      href: "/portfolio/digital-marketing-campaign",
    },
    {
      title: "Cyber Security Assessment",
      category: "Security Solutions",
      description:
        "Conducted security audits and vulnerability assessments.",
      href: "/portfolio/cyber-security-assessment",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-slate-950">
          Portfolio
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-gray-600">
          Explore some of our featured projects and successful business
          solutions delivered across multiple industries worldwide.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500" />

              <div className="p-6">
                <span className="text-sm font-semibold text-blue-600">
                  {project.category}
                </span>

                <h3 className="mb-3 mt-2 text-2xl font-bold text-slate-950">
                  {project.title}
                </h3>

                <p className="mb-6 text-gray-600">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className="inline-flex items-center font-semibold text-blue-600 transition hover:text-cyan-600"
                >
                  View Project <span className="ml-1">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex rounded-lg border border-cyan-500 px-7 py-3 font-bold text-cyan-700 transition hover:bg-cyan-500 hover:text-slate-950"
          >
            View Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}