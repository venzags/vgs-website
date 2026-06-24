"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Menu,
  Package,
  Search,
  X,
} from "lucide-react";

const services = [
  { name: "View All Services", href: "/services" },
  { name: "AI Solutions", href: "/services/ai-solutions" },
  { name: "Machine Learning", href: "/services/machine-learning" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Applications", href: "/services/mobile-applications" },
  { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  { name: "Cyber Security", href: "/services/cyber-security" },
  { name: "IT Consulting", href: "/services/it-consulting" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

const exploreLinks = [
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Industries", href: "/industries" },
  { name: "VIJLAK Ecosystem", href: "/vijlak" },
  { name: "Customer Stories", href: "/customer-stories" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Careers", href: "/careers" },
  { name: "Media Enquiry", href: "/media-enquiry" },
  { name: "Business Enquiry", href: "/business-enquiry" },
  { name: "Connect VGS", href: "/connect-vgs" },
];

const productLinks = [
  { name: "All Products", href: "/products" },
  { name: "AI Business Automation", href: "/products/ai-business-automation" },
  {
    name: "Business Management Platform",
    href: "/products/business-management-platform",
  },
  { name: "Cloud Infrastructure", href: "/products/cloud-infrastructure" },
  {
    name: "Cyber Security Assessment",
    href: "/products/cyber-security-assessment",
  },
  {
    name: "Digital Growth Toolkit",
    href: "/products/digital-growth-toolkit",
  },
  {
    name: "Custom Website Package",
    href: "/products/custom-website-package",
  },
];

const languageLinks = [
  { name: "Global (English)", href: "/" },
  { name: "India (English)", href: "/" },
  { name: "UAE (English)", href: "/" },
  { name: "Middle East (English)", href: "/" },
];

const searchItems = [
  { name: "Home", href: "/", type: "Page" },
  { name: "About Us", href: "/about", type: "Page" },
  { name: "Services", href: "/services", type: "Page" },
  { name: "Products", href: "/products", type: "Page" },
  { name: "Portfolio", href: "/portfolio", type: "Page" },
  { name: "Gallery", href: "/gallery", type: "Page" },
  { name: "Industries", href: "/industries", type: "Page" },
  { name: "VIJLAK Ecosystem", href: "/vijlak", type: "Page" },
  { name: "Connect VGS", href: "/connect-vgs", type: "Page" },
  { name: "Free Consultation", href: "/consultation", type: "Page" },
  ...services.map((item) => ({ ...item, type: "Service" })),
  ...productLinks.map((item) => ({ ...item, type: "Product" })),
  ...exploreLinks.map((item) => ({ ...item, type: "Explore" })),
];

type DesktopMenu = "services" | "explore" | "products" | "language" | null;

type DesktopDropdownProps = {
  menuName: Exclude<DesktopMenu, null>;
  isOpen: boolean;
  width?: string;
  children: ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function DesktopDropdown({
  menuName,
  isOpen,
  width = "w-[310px]",
  children,
  onMouseEnter,
  onMouseLeave,
}: DesktopDropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      id={`${menuName}-dropdown`}
      role="menu"
      aria-label={`${menuName} menu`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-1/2 top-full z-[150] mt-3 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl ${width}`}
    >
      {children}
    </div>
  );
}

export default function GlobalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const closeDesktopMenusImmediately = useCallback(() => {
    clearCloseTimeout();
    setDesktopMenu(null);
  }, [clearCloseTimeout]);

  const delayedClose = useCallback(() => {
    clearCloseTimeout();

    closeTimeoutRef.current = setTimeout(() => {
      setDesktopMenu(null);
      closeTimeoutRef.current = null;
    }, 150);
  }, [clearCloseTimeout]);

  const openDesktopMenu = useCallback(
    (menu: Exclude<DesktopMenu, null>) => {
      clearCloseTimeout();
      setDesktopMenu(menu);
    },
    [clearCloseTimeout]
  );

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileExploreOpen(false);
    setMobileProductsOpen(false);
    setMobileLanguageOpen(false);
  }, []);

  const closeEverything = useCallback(() => {
    closeDesktopMenusImmediately();
    closeMobileMenu();
    setSearchOpen(false);
    setSearchTerm("");
  }, [closeDesktopMenusImmediately, closeMobileMenu]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeDesktopMenusImmediately();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeDesktopMenusImmediately]);

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen || searchOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen, searchOpen]);

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, [clearCloseTimeout]);

  const filteredSearchResults = useMemo(() => {
    const uniqueItems = searchItems.filter(
      (item, index, array) =>
        array.findIndex(
          (searchItem) =>
            searchItem.name === item.name && searchItem.href === item.href
        ) === index
    );

    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) return [];

    return uniqueItems
      .filter((item) => item.name.toLowerCase().includes(normalizedSearch))
      .slice(0, 10);
  }, [searchTerm]);

  const toggleDesktopMenu = (menu: Exclude<DesktopMenu, null>) => {
    clearCloseTimeout();
    setDesktopMenu((currentMenu) => (currentMenu === menu ? null : menu));
  };

  return (
    <>
      {/* DESKTOP HEADER */}
      <header
        ref={headerRef}
        className="sticky top-0 z-[100] hidden w-full border-b border-slate-200 bg-white text-slate-900 lg:block"
      >
        <div className="mx-auto flex h-[92px] max-w-[1600px] items-center px-6 xl:px-10">
          <Link
            href="/"
            aria-label="Venza Global Services home"
            className="mr-auto flex shrink-0 items-center"
          >
            <Image
              src="/images/vgs-logo.png"
              alt="Venza Global Services"
              width={250}
              height={90}
              priority
              className="h-auto w-[190px] xl:w-[210px]"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="ml-6 flex items-center gap-4 xl:gap-5"
          >
            <Link
              href="/"
              className="whitespace-nowrap text-[14px] font-semibold text-slate-800 transition hover:text-cyan-600"
            >
              Home
            </Link>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => openDesktopMenu("services")}
              onMouseLeave={delayedClose}
            >
              <button
                type="button"
                onClick={() => toggleDesktopMenu("services")}
                aria-expanded={desktopMenu === "services"}
                aria-controls="services-dropdown"
                className="flex items-center gap-1 whitespace-nowrap text-[14px] font-semibold text-slate-800 transition hover:text-cyan-600"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition ${
                    desktopMenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <DesktopDropdown
                menuName="services"
                isOpen={desktopMenu === "services"}
                width="w-[310px]"
                onMouseEnter={() => openDesktopMenu("services")}
                onMouseLeave={delayedClose}
              >
                {services.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={closeDesktopMenusImmediately}
                    className={`block rounded-xl px-4 py-3 text-sm transition hover:bg-cyan-50 hover:text-cyan-700 ${
                      index === 0
                        ? "mb-2 bg-slate-100 font-bold text-slate-900"
                        : "text-slate-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </DesktopDropdown>
            </div>

            {/* Explore VGS */}
            <div
              className="relative"
              onMouseEnter={() => openDesktopMenu("explore")}
              onMouseLeave={delayedClose}
            >
              <button
                type="button"
                onClick={() => toggleDesktopMenu("explore")}
                aria-expanded={desktopMenu === "explore"}
                aria-controls="explore-dropdown"
                className="flex items-center gap-1 whitespace-nowrap text-[14px] font-semibold text-slate-800 transition hover:text-cyan-600"
              >
                Explore VGS
                <ChevronDown
                  size={16}
                  className={`transition ${
                    desktopMenu === "explore" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <DesktopDropdown
                menuName="explore"
                isOpen={desktopMenu === "explore"}
                width="w-[300px]"
                onMouseEnter={() => openDesktopMenu("explore")}
                onMouseLeave={delayedClose}
              >
                {exploreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={closeDesktopMenusImmediately}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </DesktopDropdown>
            </div>

            {/* Products */}
            <div
              className="relative"
              onMouseEnter={() => openDesktopMenu("products")}
              onMouseLeave={delayedClose}
            >
              <button
                type="button"
                onClick={() => toggleDesktopMenu("products")}
                aria-expanded={desktopMenu === "products"}
                aria-controls="products-dropdown"
                className="flex items-center gap-1 whitespace-nowrap text-[14px] font-semibold text-slate-800 transition hover:text-cyan-600"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition ${
                    desktopMenu === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <DesktopDropdown
                menuName="products"
                isOpen={desktopMenu === "products"}
                width="w-[330px]"
                onMouseEnter={() => openDesktopMenu("products")}
                onMouseLeave={delayedClose}
              >
                {productLinks.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={closeDesktopMenusImmediately}
                    className={`block rounded-xl px-4 py-3 text-sm transition hover:bg-cyan-50 hover:text-cyan-700 ${
                      index === 0
                        ? "mb-2 bg-slate-100 font-bold text-slate-900"
                        : "text-slate-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </DesktopDropdown>
            </div>

            <Link
              href="/portfolio"
              className="whitespace-nowrap text-[14px] font-semibold text-slate-800 transition hover:text-cyan-600"
            >
              Portfolio
            </Link>

            <Link
              href="/industries"
              className="whitespace-nowrap text-[14px] font-semibold text-slate-800 transition hover:text-cyan-600"
            >
              Industries
            </Link>

            <button
              type="button"
              onClick={() => {
                closeDesktopMenusImmediately();
                setSearchTerm("");
                setSearchOpen(true);
              }}
              aria-label="Open search"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-800 transition hover:bg-slate-100 hover:text-cyan-600"
            >
              <Search size={20} />
            </button>

            {/* Language */}
            <div
              className="relative"
              onMouseEnter={() => openDesktopMenu("language")}
              onMouseLeave={delayedClose}
            >
              <button
                type="button"
                onClick={() => toggleDesktopMenu("language")}
                aria-expanded={desktopMenu === "language"}
                aria-controls="language-dropdown"
                className="flex items-center gap-1.5 whitespace-nowrap text-[14px] font-semibold text-slate-800 transition hover:text-cyan-600"
              >
                <Globe2 size={18} />
                <span>Global (EN)</span>
                <ChevronDown
                  size={16}
                  className={`transition ${
                    desktopMenu === "language" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <DesktopDropdown
                menuName="language"
                isOpen={desktopMenu === "language"}
                width="w-[245px]"
                onMouseEnter={() => openDesktopMenu("language")}
                onMouseLeave={delayedClose}
              >
                <p className="px-4 pb-2 pt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Regions &amp; Languages
                </p>

                {languageLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    role="menuitem"
                    onClick={closeDesktopMenusImmediately}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </DesktopDropdown>
            </div>

            <Link
              href="/consultation"
              className="ml-1 whitespace-nowrap border-2 border-cyan-500 px-4 py-2.5 text-[13px] font-bold text-cyan-700 transition hover:bg-cyan-500 hover:text-slate-950 xl:px-5"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      </header>

      {/* MOBILE / TABLET HEADER */}
      <header className="fixed left-0 top-0 z-[100] flex h-[82px] w-full items-center justify-between border-b border-white/10 bg-[#050b16] px-5 text-white lg:hidden">
        <button
          type="button"
          onClick={() => {
            setSearchTerm("");
            setSearchOpen(true);
          }}
          aria-label="Open search"
          className="flex h-12 w-12 items-center justify-center"
        >
          <Search size={30} strokeWidth={1.8} />
        </button>

        <Link
          href="/"
          aria-label="Venza Global Services home"
          onClick={closeEverything}
        >
          <Image
            src="/images/vgs-logo-white-mob.png"
            alt="Venza Global Services"
            width={250}
            height={85}
            priority
            className="h-auto w-[220px]"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          className="flex h-12 w-12 items-center justify-center"
        >
          <Menu size={33} strokeWidth={1.8} />
        </button>
      </header>

      <div className="h-[82px] lg:hidden" />

      {/* MOBILE FULL SCREEN MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] flex min-h-screen flex-col bg-[#171d1f] text-white lg:hidden">
          <div className="flex h-[88px] items-center justify-between border-b border-white/10 px-6">
            <Link
              href="/"
              aria-label="Venza Global Services home"
              onClick={closeEverything}
            >
              <Image
                src="/images/vgs-logo-white-mob.png"
                alt="Venza Global Services"
                width={250}
                height={85}
                className="h-auto w-[220px]"
              />
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="flex h-12 w-12 items-center justify-center"
            >
              <X size={35} strokeWidth={1.8} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-[180px] pt-4">
            <Link
              href="/"
              onClick={closeEverything}
              className="flex min-h-[76px] items-center border-b border-white/20 text-[25px] font-light"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeEverything}
              className="flex min-h-[76px] items-center border-b border-white/20 text-[25px] font-light"
            >
              About Us
            </Link>

            <MobileAccordion
              label="Services"
              open={mobileServicesOpen}
              onToggle={() => setMobileServicesOpen((value) => !value)}
            >
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeEverything}
                  className="block rounded-lg px-4 py-3 text-base text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                >
                  {item.name}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="Explore VGS"
              open={mobileExploreOpen}
              onToggle={() => setMobileExploreOpen((value) => !value)}
            >
              {exploreLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeEverything}
                  className="block rounded-lg px-4 py-3 text-base text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                >
                  {item.name}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="Products"
              open={mobileProductsOpen}
              onToggle={() => setMobileProductsOpen((value) => !value)}
              icon={<Package size={24} />}
            >
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeEverything}
                  className="block rounded-lg px-4 py-3 text-base text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                >
                  {item.name}
                </Link>
              ))}
            </MobileAccordion>

            <Link
              href="/portfolio"
              onClick={closeEverything}
              className="flex min-h-[76px] items-center border-b border-white/20 text-[25px] font-light"
            >
              Portfolio
            </Link>

            <Link
              href="/industries"
              onClick={closeEverything}
              className="flex min-h-[76px] items-center border-b border-white/20 text-[25px] font-light"
            >
              Industries
            </Link>

            <Link
              href="/connect-vgs"
              onClick={closeEverything}
              className="flex min-h-[76px] items-center border-b border-white/20 text-[25px] font-light"
            >
              Connect VGS
            </Link>

            <Link
              href="/contact"
              onClick={closeEverything}
              className="flex min-h-[76px] items-center border-b border-white/20 text-[25px] font-light"
            >
              Contact Us
            </Link>

            <MobileAccordion
              label="Global (EN)"
              open={mobileLanguageOpen}
              onToggle={() => setMobileLanguageOpen((value) => !value)}
              icon={<Globe2 size={25} />}
              labelClassName="text-[22px]"
            >
              {languageLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeEverything}
                  className="block rounded-lg px-4 py-3 text-base text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                >
                  {item.name}
                </Link>
              ))}
            </MobileAccordion>
          </div>

          <div className="border-t border-white/20 bg-[#171d1f] p-5">
            <Link
              href="/consultation"
              onClick={closeEverything}
              className="flex w-full items-center justify-center rounded-xl bg-cyan-400 px-5 py-4 text-lg font-bold text-slate-950"
            >
              Free Consultation →
            </Link>
          </div>
        </div>
      )}

      {/* SEARCH OVERLAY */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[300] overflow-y-auto bg-slate-950/80 px-4 pt-20 backdrop-blur-sm sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-5 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <Search className="shrink-0 text-slate-500" size={24} />

              <input
                autoFocus
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search Venza Global Services..."
                className="w-full border-0 bg-transparent text-lg text-slate-900 outline-none"
              />

              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchTerm("");
                }}
                aria-label="Close search"
                className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
              >
                <X size={25} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto py-3">
              {searchTerm.trim() === "" ? (
                <p className="px-3 py-6 text-sm text-slate-500">
                  Type a page, service, product, or VGS topic to search.
                </p>
              ) : filteredSearchResults.length > 0 ? (
                filteredSearchResults.map((item) => (
                  <Link
                    key={`${item.type}-${item.href}`}
                    href={item.href}
                    onClick={closeEverything}
                    className="flex items-center justify-between rounded-xl px-4 py-4 transition hover:bg-cyan-50"
                  >
                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-cyan-700">
                        {item.type}
                      </p>
                    </div>

                    <ArrowRight size={19} className="text-cyan-600" />
                  </Link>
                ))
              ) : (
                <p className="px-3 py-6 text-sm text-slate-500">
                  No matching result found. Try words like AI, cloud, website,
                  portfolio, products, or consultation.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type MobileAccordionProps = {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
  icon?: ReactNode;
  labelClassName?: string;
};

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
  icon,
  labelClassName = "text-[25px]",
}: MobileAccordionProps) {
  return (
    <div className="border-b border-white/20">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`flex min-h-[76px] w-full items-center justify-between text-left font-light ${labelClassName}`}
      >
        <span className="flex items-center gap-3">
          {icon}
          {label}
        </span>

        <ChevronDown
          size={28}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}