"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Globe,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CONTACT INFORMATION
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Get in Touch with VGS
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            We're here to answer your questions, discuss your project,
            and help you find the right technology solution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* Email */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <Mail className="mb-5 h-10 w-10 text-cyan-400" />

            <h3 className="text-lg font-semibold text-white">
              Email
            </h3>

            <p className="mt-3 text-slate-400">
              hello@venzags.com
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Business enquiries
            </p>
          </div>

          {/* Website */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <Globe className="mb-5 h-10 w-10 text-cyan-400" />

            <h3 className="text-lg font-semibold text-white">
              Website
            </h3>

            <p className="mt-3 text-slate-400">
              www.venzags.com
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Global IT Solutions
            </p>
          </div>

          {/* Response */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <Clock3 className="mb-5 h-10 w-10 text-cyan-400" />

            <h3 className="text-lg font-semibold text-white">
              Response Time
            </h3>

            <p className="mt-3 text-slate-400">
              Within 24 Hours
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Monday – Friday
            </p>
          </div>

          {/* Security */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <ShieldCheck className="mb-5 h-10 w-10 text-cyan-400" />

            <h3 className="text-lg font-semibold text-white">
              Secure Enquiries
            </h3>

            <p className="mt-3 text-slate-400">
              Protected with Cloudflare
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Privacy First
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}