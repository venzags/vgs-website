import Image from "next/image";
import Link from "next/link";

export default function CyberSecurityAssessmentPage() {
  return (
    <main className="bg-[#020617] text-white">
      <section className="bg-gradient-to-br from-[#1a0a1d] via-[#081d35] to-[#020617]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              VGS Security Product
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Cyber Security Assessment
            </h1>

            <p className="mt-6 text-xl text-cyan-300">
              Protect. Detect. Respond.
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              VGS Cyber Security Assessment identifies security weaknesses in
              websites, cloud systems, business applications, networks, and
              internal digital operations. The goal is to reduce risk before an
              attack causes financial, operational, or reputation damage.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/consultation"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950"
              >
                Request Assessment →
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/30 px-6 py-3 font-bold"
              >
                Contact Security Team
              </Link>
            </div>
          </div>

          <Image
            src="/images/products/cyber-security-assessment.png"
            alt="Cyber Security Assessment"
            width={900}
            height={700}
            className="rounded-3xl border border-cyan-400/20 shadow-2xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Security Assessment Areas</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Website vulnerability review",
            "Cloud security assessment",
            "Network and access review",
            "Security improvement roadmap",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/5 p-6">
              <p className="font-semibold text-cyan-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Business Benefits</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Identify security risks before attackers exploit them.</li>
              <li>• Protect customer information and business data.</li>
              <li>• Improve trust with clients and partners.</li>
              <li>• Reduce downtime caused by cyber incidents.</li>
              <li>• Receive practical recommendations for improvement.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Recommended For</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• E-commerce websites.</li>
              <li>• Financial and service businesses.</li>
              <li>• Companies using cloud platforms.</li>
              <li>• Startups preparing for growth.</li>
              <li>• Organizations handling customer data.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}