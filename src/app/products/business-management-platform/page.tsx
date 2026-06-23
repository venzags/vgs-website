import Image from "next/image";
import Link from "next/link";

export default function BusinessManagementPlatformPage() {
  return (
    <main className="bg-[#020617] text-white">
      <section className="bg-gradient-to-br from-[#071a3d] via-[#0a2540] to-[#020617]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              VGS Digital Product
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Business Management Platform
            </h1>

            <p className="mt-6 text-xl text-cyan-300">
              Manage. Monitor. Grow.
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              A centralized platform designed to help businesses manage customers,
              projects, sales, tasks, invoices, reports, teams, and operational
              data from one secure dashboard. VGS can customize the platform based
              on your company workflow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/consultation"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950"
              >
                Request Demo →
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/30 px-6 py-3 font-bold"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <Image
            src="/images/products/business-management-platform.png"
            alt="Business Management Platform"
            width={900}
            height={700}
            className="rounded-3xl border border-cyan-400/20 shadow-2xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Platform Features</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Customer and lead management",
            "Task and project tracking",
            "Reports and business analytics",
            "Team collaboration dashboard",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/5 p-6">
              <p className="font-semibold text-cyan-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Benefits</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Keep all important business information in one place.</li>
              <li>• Improve team productivity and accountability.</li>
              <li>• Track sales, operations, customers, and projects.</li>
              <li>• Make faster decisions using real-time business reports.</li>
              <li>• Build a system that grows with your company.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Ideal For</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• SMEs and growing companies.</li>
              <li>• Consulting businesses.</li>
              <li>• Service companies.</li>
              <li>• Real estate and sales organizations.</li>
              <li>• Businesses with multiple teams and projects.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}