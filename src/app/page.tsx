export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 border-b">
        <h1 className="text-2xl font-bold text-blue-600">
          Venza Global Services
        </h1>

        <nav className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h2 className="text-5xl font-bold mb-6">
          Digital Transformation for Modern Business
        </h2>

        <p className="max-w-3xl mx-auto text-xl">
          Venza Global Services delivers AI solutions, software development,
          cloud technologies, and business consulting to help organizations
          scale globally.
        </p>

        <button className="mt-8 px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold">
          Get Free Consultation
        </button>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">
          About VGS
        </h2>

        <p className="text-lg text-center text-gray-600">
          Venza Global Services is a technology and consulting brand focused on
          AI, Machine Learning, Digital Transformation, Cloud Solutions,
          Software Development, and Global Business Services.
        </p>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 px-8 bg-gray-100"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">
              AI Solutions
            </h3>
            <p>
              Artificial Intelligence solutions for business automation,
              analytics, and innovation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">
              Machine Learning
            </h3>
            <p>
              Data-driven machine learning systems for predictive insights and
              smarter decisions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">
              Web Development
            </h3>
            <p>
              Modern websites and enterprise web applications built with the
              latest technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">
              Mobile Applications
            </h3>
            <p>
              Android and iOS application development for startups and
              enterprises.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">
              Cloud Solutions
            </h3>
            <p>
              Scalable cloud infrastructure, deployment, and management
              services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">
              IT Consulting
            </h3>
            <p>
              Strategic consulting to accelerate business growth and digital
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        id="industries"
        className="py-20 px-8 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 border rounded-lg">Healthcare</div>
          <div className="p-6 border rounded-lg">Finance</div>
          <div className="p-6 border rounded-lg">Retail</div>
          <div className="p-6 border rounded-lg">Technology</div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-8 bg-blue-700 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Let's Build Something Great
        </h2>

        <p className="mb-8">
          Contact Venza Global Services for your next technology project.
        </p>

        <button className="px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t">
        © 2026 Venza Global Services. All Rights Reserved.
      </footer>
    </main>
  );
}