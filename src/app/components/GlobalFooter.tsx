import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
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

export default function GlobalFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* VGS Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/vgs-logo.png"
                alt="Venza Global Services"
                width={250}
                height={80}
                className="h-auto w-[220px] rounded-lg bg-white p-2"
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Venza Global Services delivers AI, cloud, software development,
              cybersecurity, consulting, and digital transformation solutions.
            </p>

            <Link
              href="/consultation"
              className="mt-6 inline-block rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Free Consultation →
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Company</h3>

            <div className="space-y-3 text-sm">
              <Link href="/" className="block text-slate-300 transition hover:text-cyan-400">
                Home
              </Link>

              <Link href="/#about" className="block text-slate-300 transition hover:text-cyan-400">
                About Us
              </Link>

              <Link href="/services" className="block text-slate-300 transition hover:text-cyan-400">
                All Services
              </Link>

              <Link href="/#portfolio" className="block text-slate-300 transition hover:text-cyan-400">
                Portfolio
              </Link>

              <Link href="/#industries" className="block text-slate-300 transition hover:text-cyan-400">
                Industries
              </Link>

              <Link href="/contact" className="block text-slate-300 transition hover:text-cyan-400">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services Column 1 */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Services</h3>

            <div className="space-y-3 text-sm">
              {serviceLinks.slice(0, 5).map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block text-slate-300 transition hover:text-cyan-400"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services Column 2 */}
          <div>
            <h3 className="mb-5 text-lg font-bold">More Solutions</h3>

            <div className="space-y-3 text-sm">
              {serviceLinks.slice(5).map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block text-slate-300 transition hover:text-cyan-400"
                >
                  {service.name}
                </Link>
              ))}

              <Link
                href="/consultation"
                className="mt-5 block font-bold text-cyan-400 transition hover:text-cyan-300"
              >
                Talk to an Expert →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Venza Global Services. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>

            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>

            <Link href="/consultation" className="transition hover:text-white">
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}