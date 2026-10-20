"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, PackageOpen } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open & listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Collections", href: "/#collections" },
    { name: "Toy Range", href: "/#toy-range" },
    { name: "Why Choose Us", href: "/#why-us" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/enquiry" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-3 px-3 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      <div
        ref={navRef}
        className={`max-w-7xl mx-auto rounded-2xl md:rounded-full transition-all duration-300 border pointer-events-auto ${
          isScrolled
            ? "glass-nav shadow-[0_12px_36px_rgba(32,32,42,0.12)] border-white/80 py-2 sm:py-2 px-3.5 sm:px-5 md:px-6"
            : "bg-white/90 backdrop-blur-md shadow-sm border-white/60 py-2 sm:py-2.5 px-3.5 sm:px-5 md:px-7"
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Mark & Title */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-w-0"
            aria-label={`${siteConfig.name} Home`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-linear-to-tr from-[#635BFF] via-[#7B73FF] to-[#FF6B6B] text-white shadow-md shadow-[#635BFF]/25 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <PackageOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FFB703] border-2 border-white rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-[#20202A] group-hover:text-[#635BFF] transition-colors truncate">
                  {siteConfig.name}
                </span>
                <span className="hidden xs:inline-block px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wide uppercase bg-[#B7F7D4]/40 text-[#065F46] rounded-md border border-[#B7F7D4] shrink-0">
                  B2B
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-[#747481] tracking-wide -mt-0.5 truncate hidden sm:block">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Center Navigation (hidden below lg to prevent collision on tablets) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 xl:px-3.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#635BFF] bg-[#635BFF]/10 font-bold"
                      : "text-[#20202A]/85 hover:text-[#635BFF] hover:bg-zinc-100/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/enquiry"
              className="hidden md:inline-flex items-center gap-2 px-3.5 lg:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-linear-to-r from-[#635BFF] via-[#7067FF] to-[#8076FF] hover:from-[#5148E5] hover:to-[#6F65FF] shadow-md shadow-[#635BFF]/25 hover:shadow-lg hover:shadow-[#635BFF]/35 active:scale-[0.98] transition-all duration-200 group whitespace-nowrap min-h-10"
              id="nav-get-wholesale-pricing"
            >
              <span>Get Wholesale Pricing</span>
              <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Mobile / Tablet Menu Button (touch target min 44x44) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl text-[#20202A] hover:bg-zinc-100/80 focus:outline-none focus:ring-2 focus:ring-[#635BFF] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#20202A]" /> : <Menu className="w-6 h-6 text-[#20202A]" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden pt-3 pb-2 border-t border-zinc-200/60 mt-3 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-90px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-[#20202A] hover:bg-zinc-100 hover:text-[#635BFF] active:bg-[#635BFF]/10 active:text-[#635BFF] transition-colors min-h-11 flex items-center"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  href="/enquiry"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-bold text-white bg-linear-to-r from-[#635BFF] to-[#5148E5] hover:from-[#5148E5] hover:to-[#4338CA] shadow-md transition-all duration-200 min-h-12"
                >
                  <span>Get Wholesale Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
