// src/components/consultation/ConsultationHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const trustBadges = [
  "Free Strategy Session",
  "No Obligation",
  "Certified Experts",
  "Secure & Confidential",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ConsultationHero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#020617] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/consultation/consultation-bg.webp')" }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-[#020617]/50" />

      {/* Cyan and blue glow blobs */}
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase">
            💬 FREE CONSULTATION
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Free Business Consultation
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-slate-300 max-w-3xl mx-auto text-lg sm:text-xl mb-10 leading-relaxed"
        >
          Schedule a free consultation with our experts and discover how Venza Global Services can accelerate your digital transformation, AI adoption, software modernisation and business growth journey.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <a
            href="#consultation-form"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Request Free Consultation
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/70 border border-white/10 text-white font-semibold rounded-xl hover:bg-slate-700/70 transition-all duration-300"
          >
            Explore Services
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 sm:gap-8"
        >
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-slate-300">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConsultationHero;