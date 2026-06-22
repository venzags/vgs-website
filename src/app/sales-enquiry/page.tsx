"use client";

import { FormEvent, useState } from "react";

export default function SalesEnquiryPage() {
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
            Sales Enquiry
          </p>

          <h1 className="text-4xl font-bold sm:text-6xl">
            Speak With Our Sales Team
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Request pricing, service details, project estimates, solution
            comparisons, or a discussion about your business requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        {submitted ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-green-800">
              Sales enquiry received
            </h2>
            <p className="mt-3 text-green-700">
              Connect this form to your email or CRM before using it for real
              customer leads.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <input required placeholder="Your Name" className="rounded-xl border border-slate-300 px-4 py-3" />
              <input required placeholder="Company Name" className="rounded-xl border border-slate-300 px-4 py-3" />
              <input required type="email" placeholder="Business Email" className="rounded-xl border border-slate-300 px-4 py-3" />
              <input placeholder="Phone / WhatsApp Number" className="rounded-xl border border-slate-300 px-4 py-3" />
            </div>

            <select required className="mt-5 w-full rounded-xl border border-slate-300 px-4 py-3">
              <option value="">Select service interest</option>
              <option>AI Solutions</option>
              <option>Machine Learning</option>
              <option>Software Development</option>
              <option>Web Development</option>
              <option>Mobile Applications</option>
              <option>Cloud Solutions</option>
              <option>Cyber Security</option>
              <option>Digital Marketing</option>
            </select>

            <textarea required rows={6} placeholder="Tell us what you want to buy or build" className="mt-5 w-full rounded-xl border border-slate-300 px-4 py-3" />

            <button className="mt-6 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800">
              Request Sales Contact →
            </button>
          </form>
        )}
      </section>
    </main>
  );
}