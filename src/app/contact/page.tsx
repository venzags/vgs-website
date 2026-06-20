"use client";
import Link from "next/link";
import type { FormEvent } from "react";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your own form handling logic later
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
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
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
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
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition text-gray-900 placeholder-gray-400 bg-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="company" className="sr-only">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition text-gray-900 placeholder-gray-400 bg-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="inquiryType" className="sr-only">
                  Select Inquiry Type
                </label>
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
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
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
      {/* ===== FOOTER ===== */}
      <footer className="bg-[#1F2937] text-white px-6 py-8 text-center text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-300">© 2026 Venza Global Services. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-[#38BDF8] transition">Home</Link>
            <Link href="/services" className="hover:text-[#38BDF8] transition">Services</Link>
            <Link href="/contact" className="hover:text-[#38BDF8] transition">Contact</Link>
            <Link href="/consultation" className="hover:text-[#38BDF8] transition">Consultation</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}