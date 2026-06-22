"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.includes("@")) {
      setStatus("error");
      return;
    }

    // Temporary frontend success message.
    // Later connect this to Brevo, Resend, Mailchimp, or your API route.
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="bg-[#020617] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 px-6 py-10 shadow-2xl sm:px-10 lg:px-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              VGS Insights
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Stay Ahead with VGS
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Get practical insights on AI, cloud technology, cybersecurity,
              software development, and digital transformation — delivered
              occasionally, without spam.
            </p>
          </div>

          <div className="w-full lg:w-[430px]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus("idle");
                }}
                placeholder="Enter your business email"
                aria-label="Email address"
                required
                className="min-h-14 flex-1 rounded-xl border border-white/15 bg-slate-950/70 px-5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />

              <button
                type="submit"
                className="min-h-14 rounded-xl bg-blue-700 px-6 text-sm font-bold text-white transition hover:bg-cyan-500"
              >
                Subscribe
              </button>
            </form>

            {status === "success" && (
              <p className="mt-3 text-sm font-medium text-green-400">
                Thank you. Your subscription request was received.
              </p>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm font-medium text-red-400">
                Enter a valid email address.
              </p>
            )}

            <p className="mt-3 text-xs leading-5 text-slate-400">
              By subscribing, you agree to receive VGS updates. You can
              unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}