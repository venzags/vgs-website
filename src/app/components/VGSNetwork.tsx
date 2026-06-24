"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const services = [
  { label: "AI Solutions", color: "#06b6d4" },
  { label: "Machine Learning", color: "#a855f7" },
  { label: "Software Development", color: "#10b981" },
  { label: "Web Development", color: "#f97316" },
  { label: "Mobile Applications", color: "#f43f5e" },
  { label: "Cloud Solutions", color: "#3b82f6" },
  { label: "Digital Marketing", color: "#eab308" },
  { label: "IT Consulting", color: "#6366f1" },
  { label: "Cyber Security", color: "#14b8a6" },
];

type Particle = {
  left: string;
  top: string;
  background: string;
};

type NodeStyle = CSSProperties & {
  "--dx": string;
  "--dy": string;
};

function createSeededRandom(seed: number) {
  let value = seed;

  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, index) => {
    const random = createSeededRandom(index + 100);

    return {
      left: `${(random() * 100).toFixed(2)}%`,
      top: `${(random() * 100).toFixed(2)}%`,
      background: `hsl(${Math.floor(random() * 360)}, 70%, 70%)`,
    };
  });
}

/* Deterministic values: no hydration mismatch */
const particles = generateParticles(45);

export default function VGSNetwork() {
  const centerX = 50;
  const centerY = 50;

  /*
    Larger full network:
    Keep below 45 / 40 so outer nodes do not leave the hero area.
  */
  const radiusX = 42;
  const radiusY = 39;

  const nodes = services.map((service, index) => {
    const angle = (index / services.length) * 2 * Math.PI;

    const x = centerX + radiusX * Math.cos(angle);
    const y = centerY + radiusY * Math.sin(angle);

    const directionX = centerX - x;
    const directionY = centerY - y;
    const length =
      Math.sqrt(directionX * directionX + directionY * directionY) || 1;

    return {
      ...service,
      xPercent: `${x.toFixed(2)}%`,
      yPercent: `${y.toFixed(2)}%`,
      directionX: (directionX / length).toFixed(3),
      directionY: (directionY / length).toFixed(3),
    };
  });

  return (
    /*
      IMPORTANT:
      overflow-visible allows the large network and labels to remain complete.
      Do NOT change this outer wrapper to overflow-hidden.
    */
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {/* Background only: clipping is safe here */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.16),transparent_68%)]" />

        <motion.div
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.8,
            ease: "easeInOut",
          }}
          className="absolute h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <motion.div
          animate={{ scale: [1, 1.18, 1] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 shadow-[0_0_45px_#22d3ee,0_0_80px_#0ea5e9]"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            animate={{
              scale: [1, 1.55],
              opacity: [0.4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + ring * 2,
              ease: "linear",
              delay: ring * 0.9,
            }}
            className="absolute rounded-full border border-white/15"
            style={{
              width: `${radiusX * 2}%`,
              height: `${radiusY * 2}%`,
              left: `${centerX - radiusX}%`,
              top: `${centerY - radiusY}%`,
            }}
          />
        ))}

        {particles.map((particle, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={particle}
            animate={{
              opacity: [0.1, 0.75, 0.1],
              scale: [0.7, 1.45, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + (index % 6),
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          />
        ))}
      </div>

      {/* Nodes are OUTSIDE overflow-hidden background */}
      {nodes.map((node, index) => {
        const nodeStyle: NodeStyle = {
          left: node.xPercent,
          top: node.yPercent,
          transform: "translate(-50%, -50%)",
          "--dx": node.directionX,
          "--dy": node.directionY,
        };

        return (
          <motion.div
            key={node.label}
            className="pointer-events-auto absolute z-10"
            style={nodeStyle}
            animate={{
              x: [0, 6, 0, -6, 0],
              y: [0, -8, 0, 8, 0],
              scale: [1, 1.03, 1, 1.03, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 7 + index * 0.8,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            <motion.div
              className="h-14 w-14 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${node.color}cc, ${node.color})`,
                boxShadow: `0 0 34px ${node.color}, 0 0 62px ${node.color}80`,
              }}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            <span
              className="pointer-events-none absolute left-1/2 top-1/2 whitespace-nowrap text-xs font-bold drop-shadow-lg md:text-sm"
              style={{
                color: node.color,
                transform: `translate(
                  calc(var(--dx) * clamp(28px, 5vw, 54px)),
                  calc(var(--dy) * clamp(28px, 5vw, 54px))
                ) translate(-50%, -50%)`,
              }}
            >
              {node.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}