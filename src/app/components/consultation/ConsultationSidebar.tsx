// src/components/consultation/ConsultationSidebar.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ConsultationSidebar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const contactMethods = [
    {
      label: "Call Us",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: "tel:+1234567890",
    },
    {
      label: "WhatsApp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163a11.965 11.965 0 01-1.601-5.946C.143 5.317 5.46 0 11.936 0c3.156 0 6.121 1.229 8.353 3.461a11.74 11.74 0 013.461 8.353c0 6.476-5.317 11.793-11.793 11.793-2.017 0-3.923-.495-5.633-1.43L.057 24zm6.547-3.777a9.812 9.812 0 005.332 1.604c5.414 0 9.816-4.402 9.816-9.816s-4.402-9.816-9.816-9.816S2.12 6.597 2.12 12.011c0 1.952.57 3.78 1.561 5.309l-1.02 3.727 3.943-.824zm5.332-15.47a8.286 8.286 0 00-8.287 8.287 8.259 8.259 0 001.598 4.88l-.207.756-1.523.397.379-1.383-.211-.378a8.186 8.186 0 01-1.317-4.509 8.567 8.567 0 018.568-8.568 8.567 8.567 0 018.568 8.568 8.567 8.567 0 01-8.568 8.568c-1.561 0-3.041-.422-4.31-1.161l-.338-.2-1.383.38.377-1.379-.233-.34a8.23 8.23 0 01-1.317-4.48 8.568 8.568 0 018.568-8.568z" />
        </svg>
      ),
      href: "https://wa.me/1234567890",
    },
    {
      label: "Email Us",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: "mailto:hello@venzags.com",
    },
    {
      label: "Schedule Meeting",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      href: "#consultation-form",
    },
  ];

  return (
    <>
      {/* Desktop sticky sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 z-40"
      >
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4 text-center">
            Quick Contact
          </p>
          <div className="space-y-3">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800/70 transition-all duration-200 group"
                aria-label={method.label}
              >
                <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {method.icon}
                </span>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  {method.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Mobile floating action button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="mb-4 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-xl"
            >
              <div className="space-y-2">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-slate-800/70 transition-all duration-200 group"
                    aria-label={method.label}
                  >
                    <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                      {method.icon}
                    </span>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      {method.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30"
          aria-label="Toggle contact options"
        >
          <motion.svg
            animate={{ rotate: mobileOpen ? 180 : 0 }}
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            )}
          </motion.svg>
        </motion.button>
      </div>
    </>
  );
};

export default ConsultationSidebar;