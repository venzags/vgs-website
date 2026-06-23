import Image from "next/image";
import Link from "next/link";

export default function CloudInfrastructurePage() {
  return (
    <main className="bg-[#020617] text-white">
      <section className="bg-gradient-to-br from-[#06162f] via-[#082f49] to-[#020617]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              VGS Digital Product
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Cloud Infrastructure
            </h1>

            <p className="mt-6 text-xl text-cyan-300">
              Scalable. Secure. Reliable.
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              VGS Cloud Infrastructure services help businesses deploy, manage,
              secure, and scale applications in the cloud. We support cloud
              migration, hosting, backup systems, server monitoring, and secure
              infrastructure planning.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/consultation"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950"
              >
                Move to Cloud →
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/30 px-6 py-3 font-bold"
              >
                Contact VGS
              </Link>
            </div>
          </div>

          <Image
            src="/images/products/cloud-infrastructure.png"
            alt="Cloud Infrastructure"
            width={900}
            height={700}
            className="rounded-3xl border border-cyan-400/20 shadow-2xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Cloud Services Included</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Cloud deployment and hosting",
            "Data backup and recovery",
            "Server monitoring and support",
            "Cloud migration planning",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/5 p-6">
              <p className="font-semibold text-cyan-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Why Cloud Infrastructure?</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Scale your systems as your business grows.</li>
              <li>• Reduce dependency on local hardware.</li>
              <li>• Improve data security and backup readiness.</li>
              <li>• Access systems securely from anywhere.</li>
              <li>• Improve uptime and application reliability.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Use Cases</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Business website hosting.</li>
              <li>• SaaS applications.</li>
              <li>• E-commerce platforms.</li>
              <li>• Remote workforce systems.</li>
              <li>• Secure company data storage.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}