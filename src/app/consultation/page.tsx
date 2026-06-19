import Link from "next/link";

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white">

      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <Link href="/" className="text-2xl font-bold text-blue-400">
            Venza Global Services
          </Link>

          <div className="flex gap-4">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
            >
              Home
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Free Business Consultation
        </h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Schedule a free consultation with our experts and discover
          how Venza Global Services can accelerate your digital
          transformation journey.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="bg-white text-black rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
            Request Your Consultation
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-4 rounded-xl"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 p-4 rounded-xl"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-300 p-4 rounded-xl"
            />

            <select className="w-full border border-gray-300 p-4 rounded-xl">
              <option>Select Service</option>
              <option>AI Solutions</option>
              <option>Machine Learning</option>
              <option>Software Development</option>
              <option>Web Development</option>
              <option>Mobile Applications</option>
              <option>Cloud Solutions</option>
              <option>Digital Marketing</option>
              <option>IT Consulting</option>
              <option>Cyber Security</option>
            </select>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="date"
                className="border border-gray-300 p-4 rounded-xl"
              />

              <input
                type="time"
                className="border border-gray-300 p-4 rounded-xl"
              />

            </div>

            <textarea
              placeholder="Describe Your Project Requirements"
              rows={6}
              className="w-full border border-gray-300 p-4 rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg"
            >
              Request Free Consultation
            </button>

          </form>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        © 2026 Venza Global Services. All Rights Reserved.
      </footer>

    </main>
  );
}