// src/components/consultation/ConsultationSuccess.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const ConsultationSuccess: React.FC = () => {
  return (
    <motion.div
      key="consultation-success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      {/* Animated success icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30"
      >
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      {/* Success heading */}
      <h3 className="text-2xl font-bold text-white mb-2">
        Consultation Request Sent
      </h3>

      {/* Success message */}
      <p className="text-slate-400 max-w-md">
        Our team will review your request and contact you within 24 hours to confirm the meeting. We look forward to discussing your business goals.
      </p>

      {/* Return button */}
      <button
        onClick={() => window.location.reload()}
        className="mt-8 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        Submit Another Request
      </button>
    </motion.div>
  );
};

export default ConsultationSuccess;