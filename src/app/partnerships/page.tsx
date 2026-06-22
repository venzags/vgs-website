"use client";

import { FormEvent, useState } from "react";

export default function PartnershipsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Partner With VGS
          </p>

          <h1 className="text-4xl font-bold sm:text-6xl">
            Build Better Digital Solutions Together
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We welcome technology providers, agencies, consultants, service
            partners, resellers, and business collaborators.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        {submitted ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-green-800">
              Partnership enquiry received
            </h2>
            <p className="mt-3 text-green-700">
              This is currently a frontend demo. Connect this form to an email
              service or backend before using it publicly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold">Partnership Enquiry</h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <input required placeholder="Full Name" className="rounded-xl border border-slate-300 px-4 py-3" />
              <input required placeholder="Company Name" className="rounded-xl border border-slate-300 px-4 py-3" />
              <input required type="email" placeholder="Business Email" className="rounded-xl border border-slate-300 px-4 py-3" />
              <input placeholder="Phone Number" className="rounded-xl border border-slate-300 px-4 py-3" />
            </div>

            <select required className="mt-5 w-full rounded-xl border border-slate-300 px-4 py-3">
              <option value="">Select partnership type</option>
              <option>Technology Partner</option>
              <option>Agency Partner</option>
              <option>Referral Partner</option>
              <option>Reseller Partner</option>
              <option>Business Collaboration</option>
            </select>

            <textarea required rows={6} placeholder="Tell us about your partnership idea" className="mt-5 w-full rounded-xl border border-slate-300 px-4 py-3" />

            <button className="mt-6 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800">
              Submit Partnership Enquiry →
            </button>
          </form>
        )}
      </section>
    </main>
  );
}