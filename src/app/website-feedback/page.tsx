"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function WebsiteFeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    // Temporary frontend-only success message.
    // Later connect this to EmailJS, Brevo, Supabase, or your API route.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      event.currentTarget.reset();
    }, 900);
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <section className="relative overflow-hidden">
        {/* Background image area */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-[#020617]/45" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          {/* Left content */}
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-cyan-300">
              <span className="text-2xl">💬</span>
              WEBSITE FEEDBACK
            </p>

            <h1 className="mt-10 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Help us improve the Venza Global Services website.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Tell us what worked well, what was confusing, or what you would
              like us to improve. Your feedback helps VGS create a better
              experience for visitors, clients, and partners.
            </p>

            <form onSubmit={handleSubmit} className="mt-12 space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-3 block text-lg font-medium text-white"
                  >
                    First name <span className="text-red-400">*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Your first name"
                    className="w-full border-b border-slate-500 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-3 block text-lg font-medium text-white"
                  >
                    Last name <span className="text-red-400">*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Your last name"
                    className="w-full border-b border-slate-500 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-lg font-medium text-white"
                >
                  Email address <span className="text-red-400">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-slate-500 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="feedbackType"
                  className="mb-3 block text-lg font-medium text-white"
                >
                  Feedback category
                </label>

                <select
                  id="feedbackType"
                  name="feedbackType"
                  className="w-full border-b border-slate-500 bg-[#020617] px-0 py-3 text-white outline-none transition focus:border-cyan-400"
                >
                  <option value="general">General website feedback</option>
                  <option value="design">Website design</option>
                  <option value="content">Content or information</option>
                  <option value="bug">Technical problem / bug</option>
                  <option value="mobile">Mobile website issue</option>
                  <option value="suggestion">New feature suggestion</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-lg font-medium text-white"
                >
                  How can we improve? <span className="text-red-400">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1500}
                  rows={5}
                  placeholder="Write your feedback, suggestion, issue, or comment..."
                  className="w-full resize-none border-b border-slate-500 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-5 w-5 rounded border-slate-500 bg-transparent accent-cyan-400"
                />

                <span>
                  I consent to Venza Global Services processing my submitted
                  information for the purpose of reviewing and responding to my
                  website feedback.{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-cyan-300 underline hover:text-cyan-200"
                  >
                    Privacy Notice
                  </Link>
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-cyan-500 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending Feedback..." : "Send Feedback →"}
              </button>

              {submitted && (
                <div className="rounded-xl border border-green-400/30 bg-green-400/10 p-4 text-sm text-green-200">
                  Thank you. Your website feedback has been received.
                </div>
              )}
            </form>
          </div>

          {/* Right information panel */}
          <aside className="hidden rounded-3xl border border-white/10 bg-slate-950/40 p-8 backdrop-blur-md lg:block">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
              Your feedback matters
            </p>

            <h2 className="mt-5 text-3xl font-bold">
              Help VGS build a better digital experience.
            </h2>

            <ul className="mt-8 space-y-5 text-slate-300">
              <li className="flex gap-3">
                <span className="text-cyan-300">✓</span>
                Report broken links, errors, or technical issues.
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-300">✓</span>
                Suggest services, pages, features, or content improvements.
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-300">✓</span>
                Share feedback about desktop, mobile, tablet, or accessibility.
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-300">✓</span>
                Tell us if any information is unclear or outdated.
              </li>
            </ul>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-sm text-slate-400">
                For business enquiries, projects, and consultations:
              </p>

              <Link
                href="/consultation"
                className="mt-3 inline-flex font-bold text-cyan-300 transition hover:text-cyan-200"
              >
                Book a Free Consultation →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}