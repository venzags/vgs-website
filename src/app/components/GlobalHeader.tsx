"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
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

export default function GlobalHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Same original VGS logo on every page */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/vgs-logo.png"
              alt="Venza Global Services"
              width={260}
              height={80}
              priority
              className="h-auto w-[190px] sm:w-[230px] lg:w-[250px]"
            />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-700 xl:flex">
            <Link href="/" className="transition hover:text-blue-700">
              Home
            </Link>

            <Link href="/#about" className="transition hover:text-blue-700">
              About
            </Link>

            <Link href="/services" className="transition hover:text-blue-700">
              Services
            </Link>

            <Link href="/#portfolio" className="transition hover:text-blue-700">
              Portfolio
            </Link>

            <Link
              href="/#industries"
              className="transition hover:text-blue-700"
            >
              Industries
            </Link>

            <Link href="/contact" className="transition hover:text-blue-700">
              Contact
            </Link>

            <Link
              href="/consultation"
              className="rounded-xl bg-blue-700 px-5 py-3 text-white shadow-md transition hover:bg-blue-800"
            >
              Free Consultation
            </Link>
          </nav>

          {/* Tablet and mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-2xl font-bold text-slate-800 transition hover:bg-blue-50 hover:text-blue-700 xl:hidden"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Tablet / Mobile side drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="absolute inset-0 h-full w-full bg-slate-950/60"
          />

          <aside className="absolute right-0 top-0 h-full w-[88%] max-w-md overflow-y-auto bg-white shadow-2xl">
            {/* Drawer logo */}
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <Link href="/" onClick={closeMenu} className="flex items-center">
                <Image
                  src="/images/vgs-logo.png"
                  alt="Venza Global Services"
                  width={220}
                  height={70}
                  priority
                  className="h-auto w-[190px]"
                />
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl text-slate-800 transition hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            <nav className="space-y-2 p-5">
              <Link
                href="/"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-4 font-semibold text-slate-800 transition hover:bg-blue-50 hover:text-blue-700"
              >
                🏠 Home
              </Link>

              <Link
                href="/#about"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-4 font-semibold text-slate-800 transition hover:bg-blue-50 hover:text-blue-700"
              >
                ℹ️ About Us
              </Link>

              {/* Services menu */}
              <div className="rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold text-slate-800"
                >
                  <span>⚡ Services</span>
                  <span className="text-xl">{servicesOpen ? "−" : "+"}</span>
                </button>

                {servicesOpen && (
                  <div className="border-t border-slate-200 p-3">
                    <Link
                      href="/services"
                      onClick={closeMenu}
                      className="mb-2 block rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white transition hover:bg-blue-800"
                    >
                      View All Services →
                    </Link>

                    <div className="space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={closeMenu}
                          className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
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
                className="block rounded-xl px-4 py-4 font-semibold text-slate-800 transition hover:bg-blue-50 hover:text-blue-700"
              >
                💼 Portfolio
              </Link>

              <Link
                href="/#industries"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-4 font-semibold text-slate-800 transition hover:bg-blue-50 hover:text-blue-700"
              >
                🏢 Industries
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-4 font-semibold text-slate-800 transition hover:bg-blue-50 hover:text-blue-700"
              >
                ✉️ Contact Us
              </Link>

              <Link
                href="/consultation"
                onClick={closeMenu}
                className="mt-5 block rounded-xl bg-blue-700 px-5 py-4 text-center font-bold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800"
              >
                Free Consultation →
              </Link>
            </nav>

            <p className="px-5 pb-6 pt-2 text-center text-xs text-slate-400">
              © {new Date().getFullYear()} Venza Global Services
            </p>
          </aside>
        </div>
      )}
    </>
  );
}