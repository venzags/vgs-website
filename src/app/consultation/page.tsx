"use client";
import Link from "next/link";
import type { FormEvent } from "react";

export default function ConsultationPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your own form handling logic later
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900">
      {/* Hero */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
          Free Business Consultation
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
          Schedule a free consultation with our experts and discover how
          Venza Global Services can accelerate your digital transformation,
          AI adoption, software modernisation and business growth journey.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-white text-black rounded-3xl shadow-2xl p-6 sm:p-8 border border-blue-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Request Your Consultation
          </h2>

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              <label htmlFor="service" className="sr-only">Select Service</label>
              <select
                id="service"
                name="service"
                className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition text-gray-900 bg-white text-sm sm:text-base"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-400">Select Service</option>
                <option value="ai-solutions">AI Solutions</option>
                <option value="machine-learning">Machine Learning</option>
                <option value="software-development">Software Development</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-apps">Mobile Applications</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="it-consulting">IT Consulting</option>
                <option value="cyber-security">Cyber Security</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="sr-only">Preferred Date</label>
                <input
                  id="date"
                  type="date"
                  name="preferredDate"
                  className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition text-gray-900 bg-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="time" className="sr-only">Preferred Time</label>
                <input
                  id="time"
                  type="time"
                  name="preferredTime"
                  className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition text-gray-900 bg-white text-sm sm:text-base"
                />
              </div>
            </div>
            <div>
              <label htmlFor="requirements" className="sr-only">Describe Your Project Requirements</label>
              <textarea
                id="requirements"
                name="requirements"
                placeholder="Describe Your Project Requirements"
                rows={5}
                className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 sm:p-4 rounded-xl outline-none transition resize-none text-gray-900 placeholder-gray-400 bg-white text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-blue-200/50 transition"
            >
              Request Free Consultation
            </button>
          </form>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          <a
            href="tel:+919999999999"
            className="bg-gray-50 hover:bg-gray-100 p-5 sm:p-6 rounded-2xl text-center border border-gray-200 transition"
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📞</div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">Call Us</h3>
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 hover:bg-gray-100 p-5 sm:p-6 rounded-2xl text-center border border-gray-200 transition"
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💬</div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">WhatsApp</h3>
          </a>
          <a
            href="mailto:admin@venzags.com"
            className="bg-gray-50 hover:bg-gray-100 p-5 sm:p-6 rounded-2xl text-center border border-gray-200 transition"
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📧</div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">Email Us</h3>
          </a>
        </div>
      </section>
</main>
  );
}