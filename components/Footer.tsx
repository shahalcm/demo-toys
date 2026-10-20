"use client";

import React from "react";
import Link from "next/link";
import {
  PackageOpen,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { toyCategories } from "@/data/categories";

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Collections", href: "/#collections" },
    { name: "Small to Big Range", href: "/#toy-range" },
    { name: "Why Choose Us", href: "/#why-us" },
    { name: "About Our Business", href: "/#about" },
    { name: "Enquiry & Pricing", href: "/enquiry" },
  ];

  return (
    <footer className="bg-[#1A1A24] text-zinc-300 pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-zinc-800 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div
        className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#635BFF]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/4 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#FFB703]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-zinc-800/80">
          {/* Col 1: Brand & Description (4 cols on lg, 2 cols on sm) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group" aria-label="Footer Home Link">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-[#635BFF] to-[#FF6B6B] flex items-center justify-center text-white shadow-md shadow-[#635BFF]/30 shrink-0">
                <PackageOpen className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-extrabold text-lg text-white tracking-tight group-hover:text-[#635BFF] transition-colors truncate">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] font-medium text-zinc-400 truncate">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 max-w-sm">
              Your dependable wholesale toy partner. Supplying high-demand small toys, die-cast vehicles, plush companions, educational sets, and large outdoor play items to retailers and bulk buyers.
            </p>

            {/* Social Media Link Placeholders */}
            <div className="w-full">
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                Connect With Us
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {["LinkedIn", "Instagram", "Facebook", "WhatsApp"].map((platform) => (
                  <span
                    key={platform}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer border border-zinc-700/50 min-h-[34px] flex items-center"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group py-1"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Toy Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Toy Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {toyCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/enquiry?category=${encodeURIComponent(cat.title)}`}
                    className="text-zinc-400 hover:text-[#635BFF] transition-colors flex items-center justify-between group py-1"
                  >
                    <span className="truncate">{cat.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information Placeholders (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Wholesale Enquiries
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#635BFF] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] text-zinc-500 font-medium">Email Inquiries:</span>
                  <span className="text-zinc-200 break-all">{siteConfig.contact.email}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FFB703] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] text-zinc-500 font-medium">Wholesale Desk:</span>
                  <span className="text-zinc-200">{siteConfig.contact.phone}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B6B] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] text-zinc-500 font-medium">Showroom & Distribution:</span>
                  <span className="text-zinc-200 break-words">{siteConfig.contact.address}, {siteConfig.contact.cityStateZip}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] text-zinc-500 font-medium">Business Hours:</span>
                  <span className="text-zinc-200">{siteConfig.contact.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Demo Notice */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <div>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. B2B Wholesale Toy Showcase.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <Link href="/enquiry" className="hover:text-zinc-300 transition-colors py-1">
              Request Catalog & Pricing
            </Link>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-zinc-500">
              Pricing based on enquiry & volume tiers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
