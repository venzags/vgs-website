import Image from "next/image";
import Link from "next/link";

export default function CorporateWebsiteDevelopmentPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <Link href="/portfolio" className="text-sm font-bold text-cyan-400 hover:text-cyan-300">
          ← Back to Portfolio
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Web Development
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Corporate Website Development
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              VGS designed and developed high-performance corporate websites
              focused on brand credibility, mobile responsiveness, lead
              generation, service visibility, and fast user experience.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Solution</p>
                <p className="mt-2 font-bold">Corporate Web Platform</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-2 font-bold">Performance and Conversion</p>
              </div>
            </div>

            <Link href="/consultation" className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300">
              Discuss a Similar Project →
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-cyan-400/20">
            <Image
              src="/images/portfolio/corporate-website-development.png"
              alt="Corporate Website Development"
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