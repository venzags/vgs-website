import Image from "next/image";
import Link from "next/link";

export default function AIBusinessAutomationPage() {
  return (
    <main className="bg-[#020617] text-white">
      <section className="border-b border-white/10 bg-gradient-to-br from-[#071a3d] via-[#071a30] to-[#020617]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              VGS Digital Product
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              AI Business Automation
            </h1>

            <p className="mt-6 text-xl text-cyan-300">
              Automate. Optimize. Accelerate Growth.
            </p>

            <p className="mt-6 max-w-xl leading-8 text-slate-300">
              AI Business Automation helps organizations reduce repetitive work,
              improve response time, organize customer information, and build
              smarter workflows. Venza Global Services designs automation systems
              that support sales, support, operations, marketing, and internal
              business processes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/consultation"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Request Free Consultation →
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/30 px-6 py-3 font-bold transition hover:bg-white/10"
              >
                Contact VGS
              </Link>
            </div>
          </div>

          <Image
            src="/images/products/ai-business-automation.png"
            alt="AI Business Automation"
            width={900}
            height={700}
            className="rounded-3xl border border-cyan-400/20 shadow-2xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">What This Product Helps You Do</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Automate customer support workflows",
            "Capture and organize sales leads",
            "Create smart follow-up systems",
            "Reduce repetitive manual tasks",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="font-semibold text-cyan-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Key Benefits</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Save time by automating routine business processes.</li>
              <li>• Improve customer response speed and consistency.</li>
              <li>• Reduce operational errors caused by manual work.</li>
              <li>• Build scalable workflows without hiring large teams.</li>
              <li>• Improve lead conversion and customer engagement.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Best For</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Sales teams and lead generation businesses.</li>
              <li>• Customer support and service businesses.</li>
              <li>• E-commerce and online service companies.</li>
              <li>• Small businesses planning digital transformation.</li>
              <li>• Companies needing AI-powered internal workflows.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}