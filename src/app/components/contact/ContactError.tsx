"use client";

import { motion } from "framer-motion";
import { AlertTriangle, RotateCcw, Mail } from "lucide-react";

interface ContactErrorProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ContactError({
  title = "Submission Failed",
  message = "We couldn't send your enquiry at the moment. Please check your internet connection and try again. If the problem continues, contact us directly.",
  onRetry,
}: ContactErrorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-3xl border border-red-500/20 bg-[#020617]/95 p-10 shadow-2xl backdrop-blur-xl"
    >
      {/* Error Icon */}
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
        <AlertTriangle className="h-12 w-12 text-red-400" />
      </div>

      {/* Heading */}
      <h2 className="mt-8 text-center text-4xl font-bold text-white">
        {title}
      </h2>

      {/* Message */}
      <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-slate-300">
        {message}
      </p>

      {/* Help Box */}
      <div className="mt-10 rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6">
        <h3 className="mb-4 text-lg font-semibold text-cyan-400">
          Possible Reasons
        </h3>

        <ul className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Internet connection was interrupted.
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Cloudflare Turnstile verification expired.
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            The server is temporarily unavailable.
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Brevo email service is temporarily unreachable.
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
        >
          <RotateCcw className="h-5 w-5" />
          Try Again
        </button>

        <a
          href="mailto:hello@venzags.com"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 px-6 py-3 font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/10"
        >
          <Mail className="h-5 w-5" />
          Contact by Email
        </a>
      </div>

      {/* Footer */}
      <p className="mt-8 text-center text-sm text-slate-500">
        If this issue continues, please email us directly at{" "}
        <span className="font-medium text-cyan-400">
          hello@venzags.com
        </span>
      </p>
    </motion.div>
  );
}