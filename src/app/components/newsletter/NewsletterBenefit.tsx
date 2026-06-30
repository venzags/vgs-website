// ===============================
// File: NewsletterBenefits.tsx
// ===============================
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Shield,
  Code,
  TrendingUp,
  Lightbulb,
  FileText,
  Megaphone,
} from "lucide-react";

const benefits = [
  { icon: BrainCircuit, text: "AI Insights" },
  { icon: Cloud, text: "Cloud Computing" },
  { icon: Shield, text: "Cybersecurity" },
  { icon: Code, text: "Software Development" },
  { icon: TrendingUp, text: "Digital Transformation" },
  { icon: Lightbulb, text: "Business Technology Trends" },
  { icon: FileText, text: "Exclusive Resources" },
  { icon: Megaphone, text: "Product Announcements" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const NewsletterBenefits: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
    >
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <motion.div
            key={benefit.text}
            variants={itemVariants}
            className="flex flex-col items-center gap-2 p-4 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-400/30 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Icon size={20} />
            </div>
            <span className="text-sm text-slate-300 font-medium">{benefit.text}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default NewsletterBenefits;