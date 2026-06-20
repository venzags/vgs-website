"use client";
import { motion } from "framer-motion";
import FadeIn from "./components/FadeIn";
import Counter from "./components/Counter";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import VGSNetwork from "./components/VGSNetwork";
import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  

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

  {/* Hero */}
     <section
  id="home"
  className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-32 px-6 transform-gpu"
>
       {/* Animated Background */}
<div className="absolute inset-0 overflow-hidden">

  <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

  <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

  <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

</div>

<div className="relative z-10 max-w-7xl mx-auto">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]lg:min-h-[600px]">

    {/* LEFT SIDE */}
    <div className="text-left order-1">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        AI-Powered Digital Transformation
      </motion.h2>

      <p className="text-sm md:text-xl mb-10">
        Helping businesses worldwide accelerate growth through
        Artificial Intelligence, Cloud Technologies,
        Software Development, and Digital Innovation.
      </p>

      <div className="flex gap-4 flex-wrap">
        <a
  href="/services"
  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold inline-block"
>
  Explore Services
</a>

<a
  href="/contact"
  className="border border-white px-8 py-3 rounded-lg inline-block"
>
  Contact Us
</a>
      </div>

    </div> {/* LEFT SIDE END */}

    {/* RIGHT SIDE */}
    <div className="flex justify-center items-center order-2 lg:order-none">

     <div
  className="relative w-[320px] h-[320px]
             sm:w-[380px] sm:h-[380px]
             md:w-[450px] md:h-[450px]
             lg:w-[500px] lg:h-[500px]
             transform-gpu will-change-transform"
>
  <VGSNetwork />
</div>

    </div>

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

<Services /> 
<Portfolio />
<Industries />
<Testimonials />
<CTA />    

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 pb-28 text-center">
        <p>
          © {new Date().getFullYear()} Venza Global Services. All Rights Reserved.
        </p>
      </footer>
<div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50">
  <div className="grid grid-cols-5 text-center">

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
      href="/contact"
      className="bg-cyan-600 text-white py-4 font-semibold"
    >
      📝
      <div className="text-xs">Contact</div>
    </a>

    <a
      href="/consultation"
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