// src/components/consultation/ConsultationFAQ.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is included in the free consultation?",
    answer:
      "The free consultation includes a 30-minute live session with a senior technology consultant. We'll discuss your business goals, technical challenges, and potential solutions. You'll receive a high-level assessment and actionable next steps, completely free of charge.",
  },
  {
    question: "How long does the consultation last?",
    answer:
      "The standard session is 30 minutes. If more time is needed to thoroughly explore your requirements, we can schedule a follow-up session or extend the discussion at no additional cost.",
  },
  {
    question: "Is there any obligation after the consultation?",
    answer:
      "Absolutely not. The consultation is entirely free and obligation-free. There is no commitment required before, during, or after the session. We simply want to understand your needs and see if we can add value.",
  },
  {
    question: "How confidential is the consultation?",
    answer:
      "All discussions are strictly confidential. We are happy to sign a Non-Disclosure Agreement (NDA) prior to the consultation if required. Your business information, project details, and any shared documents are protected and never shared without your explicit consent.",
  },
  {
    question: "What technologies do you cover?",
    answer:
      "Our consultants have expertise across a wide range of technologies: Artificial Intelligence, Machine Learning, Generative AI, cloud infrastructure (AWS, Azure, GCP), web and mobile development, cybersecurity, ERP, CRM, DevOps, data analytics, and digital transformation. If your specific technology isn't listed, feel free to ask.",
  },
  {
    question: "Can I get a written proposal after the consultation?",
    answer:
      "Yes. If after the initial session you'd like a more detailed proposal (scope, timeline, cost estimates), we can prepare one at no charge. This proposal is tailored to your project and comes with no strings attached.",
  },
  {
    question: "What should I prepare before the consultation?",
    answer:
      "To make the most of our time, it's helpful to have a brief overview of your business objectives, any pain points you're experiencing, and examples of similar projects you admire (if any). Don't worry if you're not technical—our consultants will guide the conversation.",
  },
  {
    question: "How quickly can I schedule a consultation?",
    answer:
      "We typically respond within 24 hours of your request. In many cases, we can schedule the consultation within 1-3 business days, depending on your time zone and availability.",
  },
  {
    question: "Who will I be speaking with?",
    answer:
      "You'll speak with a senior consultant who has hands-on experience in your industry or technology domain. All consultants are full-time VGS team members with extensive real-world expertise, not outsourced sales representatives.",
  },
  {
    question: "Is the consultation available globally?",
    answer:
      "Yes. We work with clients worldwide and can accommodate different time zones. Our team is distributed across multiple regions, making it easy to find a convenient meeting time for you.",
  },
  {
    question: "Can I reschedule or cancel?",
    answer:
      "Absolutely. If your availability changes, simply let us know at least 2 hours in advance, and we'll be happy to reschedule. There are no cancellation fees.",
  },
];

const ConsultationFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Find quick answers to common questions about our free consultation process.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-white font-medium pr-4 group-hover:text-cyan-400 transition-colors">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-cyan-400 shrink-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-400 leading-relaxed border-t border-white/5">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationFAQ;