import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "All Services", href: "/services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Industries", href: "/#industries" },
  { name: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { name: "AI Solutions", href: "/services/ai-solutions" },
  { name: "Machine Learning", href: "/services/machine-learning" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Applications", href: "/services/mobile-applications" },
];

const solutionLinks = [
  { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  { name: "IT Consulting", href: "/services/it-consulting" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Cyber Security", href: "/services/cyber-security" },
];

const legalLinks = [
  { name: "Privacy Notice", href: "/privacy-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Accessibility Declaration", href: "/accessibility" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Security Policy", href: "/security-policy" },
  { name: "Customize Cookies", href: "/customize-cookies" },
];

export default function GlobalFooter() {
  return (
    <footer className="bg-[#020617] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="rounded-xl bg-white p-4">
                <Image
                  src="/images/vgs-logo.png"
                  alt="Venza Global Services"
                  width={250}
                  height={80}
                  className="h-auto w-[220px]"
                />
              </div>
            </Link>

            <p className="mt-7 max-w-xs text-sm leading-7 text-slate-300">
              Venza Global Services delivers AI, cloud, software development,
              cybersecurity, consulting, and digital transformation solutions.
            </p>

            <Link
              href="/consultation"
              className="mt-7 inline-flex rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Free Consultation →
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Company</h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Services</h3>

            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Solutions */}
          <div>
            <h3 className="mb-5 text-lg font-bold">More Solutions</h3>

            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/consultation"
              className="mt-6 inline-flex text-sm font-bold text-cyan-400 transition hover:text-cyan-300"
            >
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </div>

      {/* Legal links area */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-center text-sm text-slate-400">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Venza Global Services. All Rights
            Reserved.
          </p>

          <Link
            href="/contact"
            className="font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            Contact Support →
          </Link>
        </div>
      </div>
    </footer>
  );
}