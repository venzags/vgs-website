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

export default function GlobalFooter() {
  return (
    <footer className="bg-[#020617] pb-24 text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
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

          {/* Company links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Company</h3>

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

          {/* Services links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Services</h3>

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

          {/* More solutions */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              More Solutions
            </h3>

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

      {/* Bottom copyright section */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Venza Global Services. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-cyan-400"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}