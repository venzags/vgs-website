import Link from "next/link";

const roles = [
  "Software Developer",
  "Frontend Developer",
  "AI / Machine Learning Engineer",
  "Cloud Engineer",
  "Digital Marketing Specialist",
  "Business Development Executive",
];

export default function CareersPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Careers at VGS
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Build Technology That Creates Real Impact
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We are building a team of curious, practical, and ambitious people
            who want to solve meaningful business problems with technology.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">Areas We Hire For</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            We welcome applications from experienced professionals, motivated
            graduates, freelancers, and remote collaborators.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {roles.map((role) => (
              <div
                key={role}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="font-bold">{role}</span>
                <span className="text-blue-700">→</span>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-bold">Interested in joining VGS?</h3>
            <p className="mt-3 text-slate-300">
              Send your resume, portfolio, and a short introduction to our
              team.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              Contact Careers Team →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}