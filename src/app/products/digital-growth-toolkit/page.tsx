import Image from "next/image";
import Link from "next/link";

export default function DigitalGrowthToolkitPage() {
  return (
    <main className="bg-[#020617] text-white">
      <section className="bg-gradient-to-br from-[#11113d] via-[#063d4c] to-[#020617]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              VGS Growth Product
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Digital Growth Toolkit
            </h1>

            <p className="mt-6 text-xl text-cyan-300">
              Market. Engage. Grow.
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Digital Growth Toolkit is designed for businesses that need stronger
              online visibility, lead generation, customer engagement, social media
              systems, analytics, and digital marketing support.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/consultation"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950"
              >
                Grow Your Business →
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
            src="/images/products/digital-growth-toolkit.png"
            alt="Digital Growth Toolkit"
            width={900}
            height={700}
            className="rounded-3xl border border-cyan-400/20 shadow-2xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Toolkit Features</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Lead generation systems",
            "Social media marketing",
            "SEO and website optimization",
            "Analytics and performance reports",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/5 p-6">
              <p className="font-semibold text-cyan-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Growth Benefits</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Generate more qualified business leads.</li>
              <li>• Improve visibility on Google and social media.</li>
              <li>• Track marketing performance clearly.</li>
              <li>• Build stronger customer engagement.</li>
              <li>• Create repeatable digital growth systems.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Best For</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• New businesses launching online.</li>
              <li>• Local businesses expanding digitally.</li>
              <li>• E-commerce brands.</li>
              <li>• Consultants and service providers.</li>
              <li>• Companies needing more online leads.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}