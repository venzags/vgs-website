"use client";
import Link from "next/link";
import Image from "next/image";
import type { FormEvent } from "react";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your own form handling logic later
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo – now properly sized on mobile */}
          <Link href="/" className="flex items-center shrink-0">
            {/* Desktop Logo (hidden on mobile) */}
            <Image
              src="/images/vgs-logo.png"
              alt="Venza Global Services"
              width={260}
              height={80}
              priority
              className="hidden sm:block h-8 w-auto md:h-auto md:w-auto"
            />
            {/* Mobile Logo (hidden on desktop) – now much bigger */}
            <Image
              src="/images/vgs-logo.png"
              alt="Venza Global Services"
              width={180}
              height={70}
              priority
              className="block sm:hidden h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2 sm:gap-3 ml-4">
            <Link
              href="/"
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm sm:text-base whitespace-nowrap transition"
            >
              Home
            </Link>
            <Link
              href="/consultation"
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base whitespace-nowrap transition"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </header>

      {/* Contact section */}
      <div className="max-w-3xl mx-auto py-20 px-6">
        <div className="bg-white rounded-2xl shadow-2xl border border-blue-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Contact Venza Global Services
            </h1>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto text-sm sm:text-base">
              Have a question, partnership inquiry, or business requirement?
              <br />
              <span className="font-medium text-blue-700">
                Send us a message and our team will get back to you.
              </span>
            </p>
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition text-gray-900 placeholder-gray-400 bg-white text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition text-gray-900 placeholder-gray-400 bg-white text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition text-gray-900 placeholder-gray-400 bg-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="company" className="sr-only">Company Name</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition text-gray-900 placeholder-gray-400 bg-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="inquiryType" className="sr-only">Select Inquiry Type</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition text-gray-900 bg-white text-sm sm:text-base"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400">
                    Select Inquiry Type
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="support">Support Request</option>
                  <option value="project">Project Discussion</option>
                  <option value="career">Career Opportunity</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition resize-none text-gray-900 placeholder-gray-400 bg-white text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-blue-200/50 transition"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        © 2026 Venza Global Services. All Rights Reserved.
      </footer>
    </main>
  );
}