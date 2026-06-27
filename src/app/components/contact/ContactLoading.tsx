"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function ContactLoading() {
  return (
    <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#020617]/90 p-10 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10">
          <Loader2 className="h-10 w-10 animate-spin text-cyan-400" />
        </div>

        <h2 className="text-2xl font-bold text-white">
          Sending Your Enquiry...
        </h2>

        <p className="mt-3 max-w-md text-slate-400">
          Please wait while we securely process your request and submit it to
          the Venza Global Services team.
        </p>

        <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "linear",
            }}
          />
        </div>

        <p className="mt-5 text-sm text-slate-500">
          Secure transmission in progress...
        </p>
      </motion.div>
    </div>
  );
}