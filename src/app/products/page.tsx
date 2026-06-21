import Link from "next/link";

const products = [
  {
    name: "VGS AI Automation",
    description:
      "Custom workflow automation, AI assistants, customer support systems, and internal productivity tools.",
    status: "Available for custom implementation",
  },
  {
    name: "VGS Business Dashboard",
    description:
      "A central dashboard for sales, operations, customer insights, reports, and performance monitoring.",
    status: "Available for custom implementation",
  },
  {
    name: "VGS Cloud Launchpad",
    description:
      "Secure cloud setup, deployment pipelines, monitoring, backups, and infrastructure management.",
    status: "Available for custom implementation",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            VGS Products
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Technology Products Built Around Your Business
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Practical technology accelerators that can be customised for your
            operations, customers, and growth goals.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-bold text-cyan-700">
                {product.status}
              </p>
              <h2 className="mt-4 text-2xl font-bold">{product.name}</h2>
              <p className="mt-4 leading-7 text-slate-600">
                {product.description}
              </p>
              <Link
                href="/consultation"
                className="mt-7 inline-flex font-bold text-blue-700 transition hover:text-cyan-600"
              >
                Request product demo →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}