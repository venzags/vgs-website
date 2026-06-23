"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FileText,
  FileSpreadsheet,
  FileType2,
  Globe2,
  ImageIcon,
  Presentation,
  Play,
  Video,
  Code2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type GalleryCategory =
  | "All"
  | "Presentation"
  | "Photo"
  | "Video"
  | "Docs"
  | "Sheet"
  | "Website"
  | "Software"
  | "Cover Page";

type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  description: string;
  image: string;
  href: string;
  type: "image" | "video" | "document" | "website" | "software";
};

const categories: GalleryCategory[] = [
  "All",
  "Presentation",
  "Photo",
  "Video",
  "Docs",
  "Sheet",
  "Website",
  "Software",
  "Cover Page",
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "VGS AI Business Automation",
    category: "Presentation",
    description: "Business automation strategy and AI implementation presentation.",
    image: "/images/gallery/ai-business-presentation.png",
    href: "/products/ai-business-automation",
    type: "document",
  },
  {
    id: 2,
    title: "Venza Global Services Brand Cover",
    category: "Cover Page",
    description: "Official VGS company profile and digital transformation cover.",
    image: "/images/gallery/vgs-cover-page.png",
    href: "/about",
    type: "image",
  },
  {
    id: 3,
    title: "AI Solutions Product Demo",
    category: "Video",
    description: "Short overview of VGS AI automation and machine learning services.",
    image: "/images/gallery/ai-solutions-video.png",
    href: "/services/ai-solutions",
    type: "video",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Project",
    category: "Photo",
    description: "Cloud deployment, infrastructure planning, and modern technology workflow.",
    image: "/images/gallery/cloud-infrastructure.png",
    href: "/portfolio/cloud-infrastructure-migration",
    type: "image",
  },
  {
    id: 5,
    title: "VGS Business Proposal",
    category: "Docs",
    description: "Business proposal, technology consultation, and implementation document.",
    image: "/images/gallery/business-proposal.png",
    href: "/consultation",
    type: "document",
  },
  {
    id: 6,
    title: "Business Growth Financial Sheet",
    category: "Sheet",
    description: "Business planning, project budget, and digital growth analysis sheet.",
    image: "/images/gallery/business-growth-sheet.png",
    href: "/business-enquiry",
    type: "document",
  },
  {
    id: 7,
    title: "Venza Global Services Website",
    category: "Website",
    description: "Modern VGS website built for global technology and consulting services.",
    image: "/images/gallery/vgs-website.png",
    href: "/",
    type: "website",
  },
  {
    id: 8,
    title: "Business Management Platform",
    category: "Software",
    description: "Scalable software platform for operations, teams, reporting, and growth.",
    image: "/images/gallery/business-management-platform.png",
    href: "/products/business-management-platform",
    type: "software",
  },
  {
    id: 9,
    title: "Cyber Security Assessment",
    category: "Presentation",
    description: "Security audit presentation for risk analysis and protection planning.",
    image: "/images/gallery/cyber-security-presentation.png",
    href: "/products/cyber-security-assessment",
    type: "document",
  },
  {
    id: 10,
    title: "Corporate Website Development",
    category: "Website",
    description: "High-performance corporate website project with modern UI and SEO structure.",
    image: "/images/gallery/corporate-website.png",
    href: "/portfolio/corporate-website-development",
    type: "website",
  },
  {
    id: 11,
    title: "Digital Growth Toolkit",
    category: "Software",
    description: "Digital tools for marketing, automation, lead generation, and analytics.",
    image: "/images/gallery/digital-growth-toolkit.png",
    href: "/products/digital-growth-toolkit",
    type: "software",
  },
  {
    id: 12,
    title: "VGS Technology Team",
    category: "Photo",
    description: "Venza Global Services technology, consulting, and project collaboration team.",
    image: "/images/gallery/vgs-team.png",
    href: "/about",
    type: "image",
  },
];

function getCategoryIcon(category: GalleryCategory) {
  const iconClass = "h-4 w-4";

  switch (category) {
    case "Presentation":
  return <Presentation className={iconClass} />;
    case "Photo":
      return <ImageIcon className={iconClass} />;
    case "Video":
      return <Video className={iconClass} />;
    case "Docs":
      return <FileText className={iconClass} />;
    case "Sheet":
      return <FileSpreadsheet className={iconClass} />;
    case "Website":
      return <Globe2 className={iconClass} />;
    case "Software":
      return <Code2 className={iconClass} />;
    case "Cover Page":
      return <FileType2 className={iconClass} />;
    default:
      return null;
  }
}

function getItemIcon(type: GalleryItem["type"]) {
  const iconClass = "h-5 w-5";

  switch (type) {
    case "video":
      return <Play className={iconClass} fill="currentColor" />;
    case "document":
      return <FileText className={iconClass} />;
    case "website":
      return <Globe2 className={iconClass} />;
    case "software":
      return <Code2 className={iconClass} />;
    default:
      return <ImageIcon className={iconClass} />;
  }
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("All");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / itemsPerPage)
  );

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  }, [currentPage, filteredItems]);

  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
            Venza Global Services
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Our <span className="text-blue-600">Gallery</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Explore VGS presentations, photos, videos, documents, software,
            websites, project cover pages, and business technology work.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition ${
                  active
                    ? "border-slate-950 bg-slate-950 text-white shadow-lg"
                    : "border-slate-200 bg-white text-slate-600 hover:border-cyan-400 hover:text-cyan-700"
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-900 backdrop-blur">
                    {item.category}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg">
                    {getItemIcon(item.type)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:text-cyan-600"
                >
                  View Details
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {paginatedItems.length === 0 && (
          <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-lg font-bold text-slate-900">
              No gallery items available in this category yet.
            </p>
            <p className="mt-2 text-slate-600">
              Add future photos, videos, documents, presentations, websites,
              or software projects here.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.max(1, page - 1))
              }
              disabled={currentPage === 1}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`h-11 min-w-11 rounded-xl px-4 text-sm font-bold transition ${
                    currentPage === page
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:text-cyan-600"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={currentPage === totalPages}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}