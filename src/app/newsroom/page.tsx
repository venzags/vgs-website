import Link from "next/link";

const updates = [
  {
    date: "June 2026",
    title: "VGS Expands Its AI and Automation Services",
    text: "New AI workflow and business automation capabilities are now available for growing companies.",
  },
  {
    date: "May 2026",
    title: "New Cloud Infrastructure Consulting Program",
    text: "VGS introduces a practical cloud migration and infrastructure support program for modern businesses.",
  },
  {
    date: "April 2026",
    title: "VGS Launches Digital Transformation Advisory",
    text: "A structured consulting offering for companies planning technology upgrades and business process improvement.",
  },
];

export default function NewsroomPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            VGS Newsroom
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            News, Announcements & Company Updates
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Follow the latest updates from Venza Global Services, including
            service launches, technology initiatives, and business news.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-6">
          {updates.map((update) => (
            <article
              key={update.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-bold text-blue-700">{update.date}</p>
              <h2 className="mt-3 text-2xl font-bold">{update.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{update.text}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex font-bold text-cyan-700 hover:text-blue-700"
              >
                Media enquiry →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}