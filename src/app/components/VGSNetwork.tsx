"use client";

import { motion } from "framer-motion";

export default function VGSNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* AI Core Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-cyan-400/20 blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      {/* Main Nodes */}

      <motion.div
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-16 left-16 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]"
      />

      <motion.div
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-32 right-24 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_#60a5fa]"
      />

      <motion.div
        animate={{ scale: [1, 1.6, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-28 left-1/4 w-4 h-4 bg-indigo-400 rounded-full shadow-[0_0_20px_#818cf8]"
      />

      <motion.div
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-20 right-20 w-4 h-4 bg-cyan-300 rounded-full shadow-[0_0_20px_#67e8f9]"
      />

      {/* Extra Network Nodes */}

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + i * 0.3,
          }}
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={{
            left: `${10 + i * 6}%`,
            top: `${15 + (i % 4) * 18}%`,
          }}
        />
      ))}

      {/* Animated Connection Lines */}

      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-20 left-20 w-72 h-px bg-cyan-400/40 rotate-12"
      />

      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-40 left-60 w-80 h-px bg-blue-400/30 -rotate-12"
      />

      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-32 left-1/4 w-72 h-px bg-indigo-400/30 rotate-6"
      />

      {/* Data Pulse 1 */}

      <motion.div
        animate={{
          x: [0, 250],
          opacity: [0, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
        className="absolute top-20 left-20 w-2 h-2 rounded-full bg-white shadow-[0_0_15px_white]"
      />

      {/* Data Pulse 2 */}

      <motion.div
        animate={{
          x: [0, 300],
          opacity: [0, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
        className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]"
      />

      {/* Floating Labels */}

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-24 left-32 text-cyan-300/70 font-semibold"
      >
        AI Solutions
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-48 right-32 text-blue-300/70 font-semibold"
      >
        Cloud Services
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-32 left-1/4 text-indigo-300/70 font-semibold"
      >
        Software Development
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-44 right-20 text-cyan-300/70 font-semibold"
      >
        Digital Marketing
      </motion.div>

      {/* Particles */}

      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            opacity: [0.1, 1, 0.1],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i * 0.2,
          }}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/50"
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 11) % 100}%`,
          }}
        />
      ))}
    </div>
  );
}