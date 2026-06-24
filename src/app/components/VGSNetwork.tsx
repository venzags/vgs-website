"use client";

import { motion } from "framer-motion";

const services = [
  { label: "AI Solutions", color: "#06b6d4" },       // cyan-500
  { label: "Machine Learning", color: "#a855f7" },    // purple-500
  { label: "Software Development", color: "#10b981" }, // emerald-500
  { label: "Web Development", color: "#f97316" },      // orange-500
  { label: "Mobile Applications", color: "#f43f5e" },  // rose-500
  { label: "Cloud Solutions", color: "#3b82f6" },      // blue-500
  { label: "Digital Marketing", color: "#eab308" },     // yellow-500
  { label: "IT Consulting", color: "#6366f1" },         // indigo-500
  { label: "Cyber Security", color: "#14b8a6" },        // teal-500
];

export default function VGSNetwork() {
  const centerX = 50;
  const centerY = 50;
  const radiusX = 38;
  const radiusY = 34;

  const nodes = services.map((service, i) => {
    const angle = (i / services.length) * 2 * Math.PI;
    const xPercent = centerX + radiusX * Math.cos(angle);
    const yPercent = centerY + radiusY * Math.sin(angle);
    // direction from node to center (normalized)
    const dirX = centerX - xPercent;
    const dirY = centerY - yPercent;
    const len = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
    const nx = dirX / len;
    const ny = dirY / len;

    return {
      ...service,
      xPercent,
      yPercent,
      nx,
      ny,
    };
  });

  return (
    <div className="absolute inset-0 overflow-visible pointer-events-none">
      {/* Deep space background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-60" />

        {/* Central core */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
          className="absolute w-20 h-20 rounded-full bg-white/10 blur-3xl"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 shadow-[0_0_40px_#22d3ee,0_0_60px_#0ea5e9]"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        />

        {/* Expanding rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={`ring-${i}`}
            animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 5 + i * 2, ease: "linear", delay: i * 0.9 }}
            className="absolute rounded-full border border-white/20"
            style={{
              width: `${radiusX * 2}%`,
              height: `${radiusY * 2}%`,
              left: `${centerX - radiusX}%`,
              top: `${centerY - radiusY}%`,
            }}
          />
        ))}

        {/* Cosmic particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: `hsl(${Math.random() * 360}, 70%, 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1], scale: [0.7, 1.5, 0.7] }}
            transition={{ repeat: Infinity, duration: 4 + Math.random() * 6, ease: "easeInOut", delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Nodes & labels */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute"
          style={{
            left: `${node.xPercent}%`,
            top: `${node.yPercent}%`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "auto",
            // CSS custom properties for responsive label offset
            "--dx": node.nx,
            "--dy": node.ny,
          } as React.CSSProperties}
          animate={{
            x: [0, 6, 0, -6, 0],
            y: [0, -8, 0, 8, 0],
            scale: [1, 1.03, 1, 1.03, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 7 + i * 0.8,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          {/* Glowing node */}
          <motion.div
            className="w-12 h-12 rounded-full shadow-lg"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${node.color}cc, ${node.color})`,
              boxShadow: `0 0 30px ${node.color}, 0 0 50px ${node.color}80`,
            }}
            whileHover={{ scale: 1.6 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Label – responsive offset using CSS clamp */}
          <span
            className="absolute text-xs md:text-sm font-bold whitespace-nowrap drop-shadow-lg pointer-events-none"
            style={{
              color: node.color,
              // Responsive offset: 20px on small screens, up to 45px on large screens
              transform: `translate(
                calc(var(--dx) * clamp(20px, 5vw, 45px)),
                calc(var(--dy) * clamp(20px, 5vw, 45px))
              )`,
              left: "50%",
              top: "50%",
              // Center the label on itself
              translate: "-50% -50%",
            }}
          >
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}