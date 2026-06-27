"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('/images/contact/contact-bg.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-[#020617]/70" />

      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 backdrop-blur"
        >
          <MessageCircle className="h-4 w-4 text-cyan-300" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CONTACT VGS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Let's Build Your Next{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Digital Solution
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-slate-300"
        >
          Tell us about your business goals, project requirements,
          software development needs, cloud migration, AI initiatives,
          cybersecurity challenges, or enterprise digital transformation.
          Our specialists will review your enquiry and respond with the
          most suitable solution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <p className="text-sm text-slate-400">
              Typical Response
            </p>
            <p className="mt-1 font-semibold text-white">
              Within 24 Hours
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <p className="text-sm text-slate-400">
              Global Clients
            </p>
            <p className="mt-1 font-semibold text-white">
              25+ Countries
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <p className="text-sm text-slate-400">
              Consultation
            </p>
            <p className="mt-1 font-semibold text-white">
              Free Initial Discussion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}