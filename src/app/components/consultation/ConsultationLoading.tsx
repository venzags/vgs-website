// src/components/consultation/ConsultationLoading.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const ConsultationLoading: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm rounded-3xl"
    >
      <div className="flex flex-col items-center gap-4">
        <svg
          className="animate-spin h-10 w-10 text-cyan-400"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        <p className="text-slate-300 text-sm font-medium">Sending your request...</p>
      </div>
    </motion.div>
  );
};

export default ConsultationLoading;