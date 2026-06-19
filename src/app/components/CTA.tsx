import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Start Your Project Today
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Partner with VGS Global Services to accelerate your business growth
          through Artificial Intelligence, Cloud Technologies, Software
          Development, Digital Marketing, and Enterprise Solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Link to Consultation Page */}
          <Link
            href="/consultation"
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block"
          >
            Get Free Consultation
          </Link>

          {/* Link to Contact Page */}
          <Link
            href="/contact"
            className="border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">100+</h3>
            <p className="text-gray-300">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
            <p className="text-gray-300">Global Clients</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
            <p className="text-gray-300">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}