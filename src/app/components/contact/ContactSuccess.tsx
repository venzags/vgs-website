"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#020617]/95 p-10 shadow-2xl backdrop-blur-xl"
    >
      {/* Success Icon */}
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10">
        <CheckCircle2 className="h-12 w-12 text-emerald-400" />
      </div>

      {/* Heading */}
      <h2 className="mt-8 text-center text-4xl font-bold text-white">
        Thank You!
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-slate-300">
        Your enquiry has been submitted successfully.
        <br />
        Thank you for contacting
        <span className="font-semibold text-cyan-400">
          {" "}
          Venza Global Services
        </span>
        .
      </p>

      {/* Information */}
      <div className="mt-10 rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6">
        <h3 className="mb-4 text-lg font-semibold text-cyan-400">
          What happens next?
        </h3>

        <ul className="space-y-4 text-slate-300">
          <li className="flex gap-3">
            <span className="text-cyan-400">✓</span>
            Your enquiry has been securely delivered to our team.
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">✓</span>
            You'll receive a confirmation email shortly.
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">✓</span>
            Our specialists will review your requirements.
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">✓</span>
            We aim to respond within 24 business hours.
          </li>
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl border border-cyan-500/30 px-6 py-3 text-center font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/10"
        >
          Return Home
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
        >
          Explore Services
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-center text-sm text-slate-500">
        Need urgent assistance?
        <span className="ml-1 text-cyan-400">
          hello@venzags.com
        </span>
      </p>
    </motion.div>
  );
}