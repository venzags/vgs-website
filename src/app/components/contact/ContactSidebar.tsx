"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Globe2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function ContactSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="sticky top-28"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-300">
            WHY VGS
          </span>
        </div>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Trusted Technology Partner
        </h2>

        <p className="mt-4 text-slate-300 leading-7">
          Whether you need AI solutions, enterprise software,
          cybersecurity, cloud migration or digital transformation,
          our specialists provide practical, scalable and secure
          technology solutions.
        </p>

        <div className="mt-8 space-y-5">

          <div className="flex gap-4">
            <ShieldCheck className="mt-1 h-6 w-6 text-cyan-400" />
            <div>
              <h3 className="font-semibold text-white">
                Enterprise Security
              </h3>
              <p className="text-sm text-slate-400">
                Secure development following modern industry standards.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock3 className="mt-1 h-6 w-6 text-cyan-400" />
            <div>
              <h3 className="font-semibold text-white">
                Fast Response
              </h3>
              <p className="text-sm text-slate-400">
                Initial response typically within 24 business hours.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Globe2 className="mt-1 h-6 w-6 text-cyan-400" />
            <div>
              <h3 className="font-semibold text-white">
                Global Delivery
              </h3>
              <p className="text-sm text-slate-400">
                Supporting startups, SMEs and enterprise clients worldwide.
              </p>
            </div>
          </div>

        </div>

        <div className="my-8 border-t border-white/10" />

        <h3 className="text-lg font-semibold text-white">
          Our Core Services
        </h3>

        <ul className="mt-5 space-y-3">

          {[
            "Artificial Intelligence",
            "Software Development",
            "Web Development",
            "Cloud Solutions",
            "Cyber Security",
            "IT Consulting",
            "Digital Transformation",
            "Digital Marketing",
          ].map((service) => (
            <li
              key={service}
              className="flex items-center gap-3 text-slate-300"
            >
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              {service}
            </li>
          ))}

        </ul>

        <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Free Consultation
          </p>

          <h3 className="mt-3 text-xl font-bold text-white">
            Tell us about your project.
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Complete the contact form and our technical team will review
            your requirements and recommend the most suitable solution.
          </p>

        </div>

      </div>
    </motion.aside>
  );
}