"use client";

import Link from "next/link";
import { useState } from "react";

const serviceLinks = [
  { name: "AI Solutions", href: "/services/ai-solutions" },
  { name: "Machine Learning", href: "/services/machine-learning" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Applications", href: "/services/mobile-applications" },
  { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  { name: "IT Consulting", href: "/services/it-consulting" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Cyber Security", href: "/services/cyber-security" },
];

export default function ServiceNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    setServicesOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-xl backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black shadow-lg shadow-blue-600/30">
              V
            </div>

            <div className="leading-tight">
              <p className="text-base font-bold sm:text-lg">Venza Global</p>
              <p className="text-xs text-slate-400">Technology Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            <Link href="/" className="transition hover:text-cyan-300">
              Home
            </Link>

            <Link href="/#about" className="transition hover:text-cyan-300">
              About
            </Link>

            <Link href="/services" className="transition hover:text-cyan-300">
              Services
            </Link>

            <Link href="/#portfolio" className="transition hover:text-cyan-300">
              Portfolio
            </Link>

            <Link href="/#industries" className="transition hover:text-cyan-300">
              Industries
            </Link>

            <Link href="/contact" className="transition hover:text-cyan-300">
              Contact
            </Link>

            <Link
              href="/consultation"
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
            >
              Free Consultation
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-2xl transition hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Dark overlay */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute inset-0 h-full w-full bg-black/70"
          />

          {/* Drawer */}
          <aside className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-slate-950 p-6 text-white shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-lg font-bold">Venza Global</p>
                <p className="text-sm text-slate-400">Navigation Menu</p>
              </div>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl"
              >
                ✕
              </button>
            </div>

            <nav className="space-y-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-4 text-base font-semibold transition hover:bg-white/10"
              >
                🏠 Home
              </Link>

              <Link
                href="/#about"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-4 text-base font-semibold transition hover:bg-white/10"
              >
                ℹ️ About Us
              </Link>

              {/* Services Accordion */}
              <div className="rounded-xl bg-white/5">
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left text-base font-semibold"
                >
                  <span>⚡ Services</span>
                  <span className="text-xl">{servicesOpen ? "−" : "+"}</span>
                </button>

                {servicesOpen && (
                  <div className="border-t border-white/10 px-3 pb-3">
                    <Link
                      href="/services"
                      onClick={closeMenu}
                      className="mt-2 block rounded-lg bg-blue-600 px-4 py-3 font-semibold"
                    >
                      View All Services →
                    </Link>

                    <div className="mt-2 space-y-1">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={closeMenu}
                          className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/#portfolio"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-4 text-base font-semibold transition hover:bg-white/10"
              >
                💼 Portfolio
              </Link>

              <Link
                href="/#industries"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-4 text-base font-semibold transition hover:bg-white/10"
              >
                🏢 Industries
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-4 text-base font-semibold transition hover:bg-white/10"
              >
                ✉️ Contact Us
              </Link>
            </nav>

            <Link
              href="/consultation"
              onClick={closeMenu}
              className="mt-8 block rounded-xl bg-blue-600 px-5 py-4 text-center font-bold shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Free Consultation →
            </Link>

            <p className="mt-8 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Venza Global Services
            </p>
          </aside>
        </div>
      )}
    </>
  );
}