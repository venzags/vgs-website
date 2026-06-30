// src/components/consultation/ConsultationProcess.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Submit Request",
    description:
      "Fill out the consultation form with your business details, project requirements, and preferred meeting time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Consultant Review",
    description:
      "A senior technology consultant reviews your requirements and prepares a tailored agenda for the discussion.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Schedule Meeting",
    description:
      "We coordinate with you to confirm the meeting date and time, sending a calendar invite with all details.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Free Consultation",
    description:
      "A 30-minute live consultation via your preferred channel (video call, phone, or chat) with actionable insights.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-2m2-4h6a2 2 0 012 2v2a2 2 0 01-2 2H8v4l-4-4H4a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Proposal (Optional)",
    description:
      "If you see a fit, we can prepare a detailed proposal with scope, timeline, and cost estimates—no commitment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const ConsultationProcess: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Consultation Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From your first request to a detailed proposal, our process is transparent, efficient, and designed around your schedule.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/20 via-cyan-400/40 to-cyan-400/20" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content block */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-cyan-400 text-sm font-bold tracking-widest">{step.step}</span>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>

                {/* Center dot for desktop */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shrink-0 relative z-10">
                  {step.icon}
                </div>

                {/* Spacer for layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationProcess;