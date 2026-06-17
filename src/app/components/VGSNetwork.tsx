"use client";

import { motion } from "framer-motion";

export default function VGSNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Node 1 */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute top-20 left-20 w-8 h-8 bg-cyan-400 rounded-full shadow-[0_0_40px_#22d3ee]"
      />

      {/* Node 2 */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute top-40 right-40 w-6 h-6 bg-blue-400 rounded-full shadow-[0_0_30px_#60a5fa]"
      />

      {/* Node 3 */}
      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute bottom-32 left-1/3 w-6 h-6 bg-indigo-400 rounded-full shadow-[0_0_30px_#818cf8]"
      />

      {/* Node 4 */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute bottom-20 right-1/4 w-5 h-5 bg-cyan-300 rounded-full shadow-[0_0_30px_#67e8f9]"
      />

      {/* Connection Lines */}
      <div className="absolute top-24 left-24 w-64 h-px bg-cyan-400/30 rotate-12"></div>

      <div className="absolute top-52 left-80 w-80 h-px bg-blue-400/20 -rotate-12"></div>

      <div className="absolute bottom-32 left-1/3 w-72 h-px bg-indigo-400/20 rotate-6"></div>

      {/* Floating Labels */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-28 left-48 text-cyan-400/40 text-xl font-semibold"
      >
        AI Solutions
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-52 right-56 text-blue-400/40 text-xl font-semibold"
      >
        Cloud Services
      </motion.div>

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-28 left-1/3 text-indigo-400/40 text-xl font-semibold"
      >
        Software Development
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-40 right-32 text-cyan-300/40 text-xl font-semibold"
      >
        Digital Marketing
      </motion.div>

    </div>
  );
}