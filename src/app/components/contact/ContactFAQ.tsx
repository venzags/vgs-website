"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly will VGS respond to my enquiry?",
    answer:
      "Our team typically responds within 24 business hours. Enterprise and priority enquiries are reviewed as quickly as possible.",
  },
  {
    question: "What services does VGS provide?",
    answer:
      "We provide AI Solutions, Software Development, Web Development, Mobile Apps, Cloud Solutions, Cyber Security, IT Consulting, Digital Transformation, and Digital Marketing.",
  },
  {
    question: "Can VGS work with international clients?",
    answer:
      "Yes. We work remotely with businesses, startups, and enterprise clients worldwide using secure online collaboration tools.",
  },
  {
    question: "Do you provide a free consultation?",
    answer:
      "Yes. Initial consultations are free. We review your requirements and recommend the most suitable approach before starting a project.",
  },
  {
    question: "Is my project information confidential?",
    answer:
      "Yes. All enquiries are handled confidentially. Your information is securely processed and never shared with third parties without your permission.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">
            <HelpCircle className="h-4 w-4 text-cyan-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              FAQ
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-300">
            Find answers to common questions before submitting your enquiry.
          </p>
        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={index}
                layout
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-cyan-300 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/10 px-6 py-5 text-slate-300 leading-7">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}