// ===============================
// File: NewsletterLoading.tsx
// ===============================
"use client";
import React from "react";
import { motion } from "framer-motion";

const NewsletterLoading: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="w-16 h-16 rounded-full border-4 border-cyan-500/30 border-t-cyan-400"
      />
      <p className="mt-6 text-slate-400 text-lg font-medium">Subscribing…</p>
    </motion.div>
  );
};

export default NewsletterLoading;