import Image from "next/image";
import Link from "next/link";

export default function CustomWebsitePackagePage() {
  return (
    <main className="bg-[#020617] text-white">
      <section className="bg-gradient-to-br from-[#111827] via-[#16325c] to-[#020617]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              VGS Web Product
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Custom Website Package
            </h1>

            <p className="mt-6 text-xl text-cyan-300">
              Modern. Responsive. Results-Driven.
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              VGS creates modern websites for businesses that need a professional
              online presence. Our websites are designed for mobile users, search
              engines, customer trust, lead generation, and long-term growth.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/consultation"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950"
              >
                Build My Website →
              </Link>

              <Link
                href="/portfolio"
                className="rounded-xl border border-white/30 px-6 py-3 font-bold"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <Image
            src="/images/products/custom-website-package.png"
            alt="Custom Website Package"
            width={900}
            height={700}
            className="rounded-3xl border border-cyan-400/20 shadow-2xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Website Package Includes</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Mobile responsive website design",
            "SEO-friendly page structure",
            "Contact forms and lead capture",
            "Fast and secure deployment",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/5 p-6">
              <p className="font-semibold text-cyan-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Why Your Business Needs It</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Build trust with customers online.</li>
              <li>• Generate enquiries and leads 24/7.</li>
              <li>• Show your services, products, and company profile.</li>
              <li>• Improve visibility on Google search.</li>
              <li>• Create a strong professional brand image.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Suitable For</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Corporate websites.</li>
              <li>• Service businesses.</li>
              <li>• E-commerce websites.</li>
              <li>• Portfolio websites.</li>
              <li>• Startup landing pages.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}