import Image from "next/image";
import Link from "next/link";

export default function CloudInfrastructureMigrationPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <Link href="/portfolio" className="text-sm font-bold text-cyan-400 hover:text-cyan-300">
          ← Back to Portfolio
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Cloud Services
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Cloud Infrastructure Migration
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              VGS supported the migration of business systems to scalable cloud
              infrastructure, helping improve availability, security, monitoring,
              backup processes, and future growth capacity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Solution</p>
                <p className="mt-2 font-bold">Cloud Migration Strategy</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-2 font-bold">Scalability and Reliability</p>
              </div>
            </div>

            <Link href="/consultation" className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300">
              Discuss a Similar Project →
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-cyan-400/20">
            <Image
              src="/images/portfolio/cyber-security-assessment.png"
              alt="Cloud Infrastructure Migration"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}