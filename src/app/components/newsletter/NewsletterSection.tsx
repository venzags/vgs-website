// ===============================
// File: NewsletterSection.tsx
// ===============================
"use client";
import React from "react";
import { motion } from "framer-motion";
import NewsletterForm from "./NewsletterForm";
import NewsletterBenefit from "./NewsletterBenefit";

const NewsletterSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            📬 Newsletter
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Ahead with Technology Insights
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
            Subscribe to receive enterprise technology insights, cybersecurity updates, AI trends, cloud innovations, software engineering best practices, and VGS announcements.
          </p>
        </motion.div>

        {/* Form */}
        <NewsletterForm />

        {/* Benefits */}
        <NewsletterBenefit />
      </div>
    </section>
  );
};

export default NewsletterSection;