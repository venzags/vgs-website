"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  Search,
  X,
  ChevronDown,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  { name: "AI Solutions", href: "/services/ai-solutions" },
  { name: "Machine Learning", href: "/services/machine-learning" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Applications", href: "/services/mobile-applications" },
  { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  { name: "Cyber Security", href: "/services/cyber-security" },
];

const exploreLinks = [
  { name: "Customer Stories", href: "/customer-stories" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Careers", href: "/careers" },
  { name: "Media Enquiry", href: "/media-enquiry" },
  { name: "Business Enquiry", href: "/business-enquiry" },
];

export default function GlobalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setExploreOpen(false);
  };

  return (
    <>
      {/* =========================================================
          DESKTOP HEADER — only desktop. Do not change mobile here.
      ========================================================== */}
      <header className="hidden border-b border-slate-200 bg-white text-slate-900 lg:block">
        <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/images/vgs-logo.png"
              alt="Venza Global Services"
              width={250}
              height={85}
              priority
              className="h-auto w-[230px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="flex items-center gap-7">
            <Link
              href="/"
              className="text-[15px] font-semibold text-slate-800 transition hover:text-cyan-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[15px] font-semibold text-slate-800 transition hover:text-cyan-600"
            >
              About Us
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="group relative py-8">
              <Link
                href="/services"
                className="flex items-center gap-1 text-[15px] font-semibold text-slate-800 transition hover:text-cyan-600"
              >
                Services
                <ChevronDown
                  size={17}
                  className="transition duration-200 group-hover:rotate-180"
                />
              </Link>

              {/* Invisible hover bridge: prevents dropdown closing */}
              <div className="absolute left-0 top-full h-3 w-full" />

              <div className="invisible absolute left-1/2 top-[76px] z-[150] w-[310px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <Link
                  href="/services"
                  className="mb-3 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900 transition hover:bg-cyan-50 hover:text-cyan-700"
                >
                  View All Services
                  <ArrowRight size={17} />
                </Link>

                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* EXPLORE VGS DROPDOWN */}
            <div className="group relative py-8">
              <button
                type="button"
                className="flex items-center gap-1 text-[15px] font-semibold text-slate-800 transition hover:text-cyan-600"
              >
                Explore VGS
                <ChevronDown
                  size={17}
                  className="transition duration-200 group-hover:rotate-180"
                />
              </button>

              {/* Invisible hover bridge */}
              <div className="absolute left-0 top-full h-3 w-full" />

              <div className="invisible absolute left-1/2 top-[76px] z-[150] w-[275px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="space-y-1">
                  {exploreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="text-[15px] font-semibold text-slate-800 transition hover:text-cyan-600"
            >
              Portfolio
            </Link>

            <Link
              href="/industries"
              className="text-[15px] font-semibold text-slate-800 transition hover:text-cyan-600"
            >
              Industries
            </Link>

            <Link
              href="/consultation"
              className="border-2 border-cyan-500 px-5 py-3 text-[15px] font-bold text-cyan-700 transition hover:bg-cyan-500 hover:text-slate-950"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      </header>

      {/* =========================================================
          MOBILE + TABLET HEADER — fixed only below lg desktop.
      ========================================================== */}
      <header className="fixed left-0 top-0 z-[100] w-full border-b border-white/10 bg-[#030712] text-white lg:hidden">
        <div className="mx-auto flex h-[82px] items-center justify-between px-5 sm:px-6">
          <button
            type="button"
            aria-label="Search"
            className="flex h-12 w-12 items-center justify-center text-white"
          >
            <Search size={31} strokeWidth={1.7} />
          </button>

          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
  src="/images/vgs-logo-white-mob.png"
  alt="Venza Global Services"
  width={250}
  height={80}
  priority
  className="h-auto w-[54px] sm:w-[230px]"
/>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-12 w-12 items-center justify-center text-white"
          >
            <Menu size={34} strokeWidth={1.7} />
          </button>
        </div>
      </header>

      {/* Space only for fixed mobile/tablet header */}
      <div className="h-[82px] lg:hidden" />

      {/* =========================================================
          FULL SCREEN MOBILE + TABLET MENU
      ========================================================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] min-h-screen overflow-y-auto bg-[#171d1f] text-white lg:hidden">
          <div className="flex min-h-[105px] items-center justify-between border-b border-white/10 px-7">
            <Link href="/" onClick={closeMenu}>
              <Image
            src="/images/vgs-logo-white-mob.png"
            alt="Venza Global Services"
            width={250}
            height={80}
            priority
            className="h-auto w-[230px]"
            />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="text-white"
            >
              <X size={40} strokeWidth={1.5} />
            </button>
          </div>

          <div className="pb-[175px] px-6 pt-5">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex min-h-[82px] items-center border-b border-white/20 text-[27px] font-light"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="flex min-h-[82px] items-center border-b border-white/20 text-[27px] font-light"
            >
              About Us
            </Link>

            <div className="border-b border-white/20">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex min-h-[82px] w-full items-center justify-between text-left text-[27px] font-light"
              >
                Services
                <ChevronDown
                  size={32}
                  className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="pb-4">
                  <Link
                    href="/services"
                    onClick={closeMenu}
                    className="block py-3 pl-4 text-lg font-semibold text-cyan-300"
                  >
                    View All Services →
                  </Link>

                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenu}
                      className="block py-3 pl-4 text-lg text-slate-300 hover:text-cyan-300"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/20">
              <button
                type="button"
                onClick={() => setExploreOpen(!exploreOpen)}
                className="flex min-h-[82px] w-full items-center justify-between text-left text-[27px] font-light"
              >
                Explore VGS
                <ChevronDown
                  size={32}
                  className={`transition ${exploreOpen ? "rotate-180" : ""}`}
                />
              </button>

              {exploreOpen && (
                <div className="pb-4">
                  {exploreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-3 pl-4 text-lg text-slate-300 hover:text-cyan-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              onClick={closeMenu}
              className="flex min-h-[82px] items-center border-b border-white/20 text-[27px] font-light"
            >
              Portfolio
            </Link>

            <Link
              href="/industries"
              onClick={closeMenu}
              className="flex min-h-[82px] items-center border-b border-white/20 text-[27px] font-light"
            >
              Industries
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex min-h-[82px] items-center border-b border-white/20 text-[27px] font-light"
            >
              Contact Us
            </Link>
          </div>

          <div className="fixed bottom-0 left-0 z-[210] w-full border-t border-white/20 bg-[#171d1f]">
            <button
              type="button"
              className="flex w-full items-center gap-4 border-b border-white/20 px-8 py-5 text-left text-xl font-medium"
            >
              <Globe size={27} />
              Global (En)
            </button>

            <Link
              href="/consultation"
              onClick={closeMenu}
              className="flex w-full items-center justify-center bg-cyan-400 px-8 py-5 text-xl font-bold text-slate-950"
            >
              Free Consultation →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}