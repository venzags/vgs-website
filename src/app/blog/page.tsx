import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      category: "Artificial Intelligence",
      title: "How AI Is Transforming Modern Businesses",
      description:
        "Learn how artificial intelligence helps companies automate operations, improve customer experiences, and make smarter decisions.",
      date: "June 2026",
    },
    {
      category: "Cloud Technology",
      title: "Why Cloud Infrastructure Is Essential for Growth",
      description:
        "A practical overview of scalable cloud systems, security, performance, and cost-efficient business operations.",
      date: "June 2026",
    },
    {
      category: "Cyber Security",
      title: "Cybersecurity Essentials for Growing Companies",
      description:
        "The key security practices every organisation should implement to protect customer data and business systems.",
      date: "May 2026",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            VGS Insights
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Technology, AI & Business Insights
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore practical articles about artificial intelligence, cloud
            technology, cybersecurity, software development, and digital
            transformation.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Latest Articles
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Ideas for digital growth
              </h2>
            </div>

            <Link
              href="/consultation"
              className="inline-flex w-fit rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              Talk to an Expert →
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-sm font-bold text-blue-700">
                  {post.category}
                </p>

                <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-900">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {post.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm text-slate-500">{post.date}</span>

                  <Link
                    href="/contact"
                    className="font-bold text-blue-700 transition group-hover:text-cyan-600"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}