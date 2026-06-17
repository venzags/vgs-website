"use client";
import { motion } from "framer-motion";
import FadeIn from "./components/FadeIn";
import Counter from "./components/Counter";
import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const services = [
    "AI Solutions",
    "Machine Learning",
    "Web Development",
    "Mobile Applications",
    "Cloud Solutions",
    "IT Consulting",
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Retail",
    "Technology",
    "Manufacturing",
    "Education",
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <nav className="hidden md:flex gap-8 font-medium">
 
</nav>

<button
  className="md:hidden text-3xl mr-3"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
  <div className="flex items-center">
  {/* Desktop Logo */}
  <Image
    src="/images/vgs-logo.png"
    alt="Venza Global Services"
    width={260}
    height={80}
    priority
    className="hidden md:block"
  />

  {/* Mobile Logo */}
  <Image
    src="/images/vgs-logo.png"
    alt="Venza Global Services"
    width={150}
    height={50}
    priority
    className="block md:hidden"
  />
</div></div>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold transition">
  Get Consultation
</button>
        </div>
        <header>
  {menuOpen && (
  <div className="md:hidden bg-white shadow-lg">
    <a
      href="#home"
      onClick={() => setMenuOpen(false)}
      className="block p-4 border-b"
    >
      Home
    </a>

    <a
      href="#services"
      onClick={() => setMenuOpen(false)}
      className="block p-4 border-b"
    >
      Services
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="block p-4 border-b"
    >
      About
    </a>

    <a
      href="#industries"
      onClick={() => setMenuOpen(false)}
      className="block p-4 border-b"
    >
      Industries
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="block p-4"
    >
      Contact
    </a>
  </div>
)}
</header>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-28 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">

  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-5xl md:text-6xl font-bold mb-6"
  >
    AI-Powered Digital Transformation
  </motion.h2>

  <p className="text-xl mb-10">
    Helping businesses worldwide accelerate growth through Artificial
    Intelligence, Cloud Technologies, Software Development, and Digital
    Innovation.
  </p>

<div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold">
              Explore Services
            </button>

            <button className="border border-white px-8 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
{/* Statistics */}
<section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-4xl font-bold text-blue-700">
  <Counter end={150} />+
</h3>
        <p className="text-gray-600 mt-2">Projects</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-700"><Counter end={25} />+</h3>
        <p className="text-gray-600 mt-2">Countries</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-700"><Counter end={50} />+</h3>
        <p className="text-gray-600 mt-2">Clients</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-700"><Counter end={98} />%</h3>
        <p className="text-gray-600 mt-2">Satisfaction</p>
      </div>

    </div>
  </div>
</section>
      {/* About */}
<FadeIn>
  <section
    id="about"
    className="max-w-6xl mx-auto px-6 py-20"
  >
    <h2 className="text-4xl font-bold text-center mb-8">
      About VGS
    </h2>

    <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
      Venza Global Services is a technology-focused consulting brand
      delivering AI solutions, Machine Learning, Software Development,
      Cloud Services, and Business Transformation solutions to clients
      across the globe.
    </p>
  </section>
</FadeIn>

      {/* Services */}
      <section
        id="services"
        className="bg-gray-100 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  {service}
                </h3>

                <p className="text-gray-600">
                  Professional solutions tailored to modern business needs and
                  scalable digital growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VGS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose VGS
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-3xl font-bold text-blue-700">
                Global
              </h3>
              <p>Worldwide service delivery.</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-700">
                AI
              </h3>
              <p>Future-ready AI solutions.</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-700">
                Cloud
              </h3>
              <p>Scalable cloud infrastructure.</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-700">
                Growth
              </h3>
              <p>Business-focused strategy.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        id="industries"
        className="bg-gray-100 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-white p-8 rounded-xl shadow text-center font-semibold"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="bg-blue-800 text-white py-24 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Ready To Transform Your Business?
        </h2>

        <p className="max-w-2xl mx-auto mb-8">
          Let's discuss how Venza Global Services can help your organization
          achieve digital growth and innovation.
        </p>

        <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold">
          Contact VGS
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>
          © 2026 Venza Global Services. All Rights Reserved.
        </p>
      </footer>
<div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50">
  <div className="grid grid-cols-4 text-center">

    <a
      href="tel:+919999999999"
      className="bg-blue-600 text-white py-4 font-semibold"
    >
      📞
      <div className="text-xs">Call</div>
    </a>

    <a
      href="https://wa.me/919999999999"
      target="_blank"
      className="bg-green-500 text-white py-4 font-semibold"
    >
      💬
      <div className="text-xs">WhatsApp</div>
    </a>

    <a
      href="mailto:admin@venzags.com"
      className="bg-purple-600 text-white py-4 font-semibold"
    >
      📧
      <div className="text-xs">Email</div>
    </a>

    <a
      href="#contact"
      className="bg-orange-500 text-white py-4 font-semibold"
    >
      📅
      <div className="text-xs">Book</div>
    </a>

  </div>
</div>
    </main>
  );
}