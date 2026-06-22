import Link from "next/link";

const values = [
  {
    title: "Business First",
    text: "We choose technology based on business value, not trends or unnecessary complexity.",
  },
  {
    title: "Built for Growth",
    text: "Our solutions are designed to scale with your customers, operations, and future plans.",
  },
  {
    title: "Clear Communication",
    text: "We explain technical decisions in practical language so teams can make confident choices.",
  },
  {
    title: "Long-Term Partnership",
    text: "We support businesses beyond launch through optimisation, security, and continuous improvement.",
  },
];

export default function WhoWeArePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-black px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Who We Are
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl md:text-6xl">
            Your Technology Partner for Practical Digital Growth
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Venza Global Services is a technology consulting company focused on
            AI, cloud, software development, cybersecurity, and digital
            transformation.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Technology should make business simpler.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              We work with businesses that need more than a website or an app.
              They need reliable systems, better processes, secure technology,
              and a roadmap that supports long-term growth.
            </p>
            <Link
              href="/consultation"
              className="mt-8 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              Start a Conversation →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}