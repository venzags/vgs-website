import Link from "next/link";
import Newsletter from "../components/Newsletter";

const primaryCards = [
    {
        title: "Business Enquiry",
        description:
            "Discuss technology services, digital transformation, AI, cloud, software, and enterprise solutions.",
        href: "/business-enquiry",
        icon: "🏢",
    },
    {
        title: "Partnerships",
        description:
            "Explore strategic partnerships, technology alliances, channel partnerships, and collaboration opportunities.",
        href: "/partnerships",
        icon: "🤝",
    },
    {
        title: "Media Enquiry",
        description:
            "Contact Venza Global Services for media requests, interviews, press information, and company updates.",
        href: "/media-enquiry",
        icon: "📰",
    },
];

const secondaryLinks = [
    { title: "Contact Us", href: "/contact" },
    { title: "Sales Enquiry", href: "/sales-enquiry" },
    { title: "Careers", href: "/careers" },
    { title: "Free Consultation", href: "/consultation" },
    { title: "Website Feedback", href: "/website-feedback" },
];

export default function ConnectVGSPage() {
    return (
        <main className="bg-[#020617] text-white">
            {/* ====== HERO / INTRO SECTION ====== */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                            Connect VGS
                        </p>

                        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                            What&apos;s on your mind?
                        </h1>
                    </div>

                    <p className="max-w-xl text-xl leading-9 text-slate-300">
                        We are here to help. Tell us what you are looking for
                        and we will connect you with the right Venza Global
                        Services team.
                    </p>
                </div>
            </section>

            {/* ====== CONTACT SECTION ====== */}
            <section className="bg-slate-50 px-6 py-20 text-slate-900">
                <div className="mx-auto max-w-7xl">
                    {/* Two-column layout: left text + right cards */}
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                        {/* Left side */}
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-600">
                                Get in Touch
                            </p>

                            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                                Let&apos;s Talk
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Whether it&apos;s a new project, a partnership,
                                or just a question — our team is ready to
                                listen and help.
                            </p>

                            <p className="mt-4 leading-7 text-slate-600">
                                Reach out through any of the channels below and
                                we&apos;ll get back to you within one business
                                day.
                            </p>
                        </div>

                        {/* Right side: contact cards (2x2) */}
                        <div className="grid gap-5 sm:grid-cols-2">
                            {/* Phone */}
                            <a
                                href="tel:+918606435123"
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-3xl">
                                    📞
                                </div>
                                <h3 className="mt-4 text-lg font-bold text-slate-900">
                                    Call Us
                                </h3>
                                <p className="mt-1 text-sm font-medium text-slate-700">
                                    +91 8606435123
                                </p>
                                <p className="mt-2 text-xs text-slate-500">
                                    Mon–Sat, 9:30 AM – 6:30 PM
                                </p>
                                <span className="mt-4 inline-block text-sm font-bold text-cyan-600 transition group-hover:text-cyan-800">
                                    Call now →
                                </span>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:hello@venzags.com"
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-3xl">
                                    ✉️
                                </div>
                                <h3 className="mt-4 text-lg font-bold text-slate-900">
                                    Email Us
                                </h3>
                                <p className="mt-1 text-sm font-medium text-slate-700">
                                    hello@venzags.com
                                </p>
                                <p className="mt-2 text-xs text-slate-500">
                                    We reply within 24 hours
                                </p>
                                <span className="mt-4 inline-block text-sm font-bold text-cyan-600 transition group-hover:text-cyan-800">
                                    Send email →
                                </span>
                            </a>

                            {/* Consultation (featured) */}
                            <a
                                href="/consultation"
                                className="group rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:col-span-2"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-3xl">
                                    📅
                                </div>
                                <h3 className="mt-4 text-lg font-bold">
                                    Free Consultation
                                </h3>
                                <p className="mt-1 text-sm text-blue-50">
                                    Book a 30‑minute call to discuss your
                                    project.
                                </p>
                                <span className="mt-4 inline-block text-sm font-bold text-white">
                                    Book now →
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* ====== ADDRESS (added below "Let's Talk") ====== */}
                    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
                        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📍</span>
                                <span className="text-sm font-medium text-slate-700">
                                    Venza Global Services
                                </span>
                                <span className="hidden text-slate-300 sm:inline">|</span>
                                <span className="text-sm text-slate-600">
                                    236, Kandalloor, Alappuzha, Kerala
                                </span>
                            </div>
                            <span className="text-xs text-slate-400">
                                Office hours: Mon–Sat, 9:30 AM – 6:30 PM
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== PRIMARY CARDS ====== */}
            <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
                <div className="grid gap-6 md:grid-cols-3">
                    {primaryCards.map((card) => (
                        <Link
                            key={card.href}
                            href={card.href}
                            className="group rounded-2xl border border-white/20 bg-white/[0.02] p-8 transition hover:border-cyan-400 hover:bg-cyan-400/10"
                        >
                            <div className="text-4xl">{card.icon}</div>

                            <h2 className="mt-8 text-2xl font-bold">
                                {card.title}
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                {card.description}
                            </p>

                            <div className="mt-8 text-sm font-bold text-cyan-400">
                                Connect with VGS →
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ====== SECONDARY LINKS ====== */}
            <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
                <div>
                    <p className="text-lg text-slate-300">
                        Looking for something else?
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {secondaryLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group flex items-center justify-between border-b border-white/20 pb-5 text-lg font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                {link.title}
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-slate-950 transition group-hover:bg-cyan-400">
                                    →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== NEWSLETTER COMPONENT ====== */}
            <Newsletter />
        </main>
    );
}