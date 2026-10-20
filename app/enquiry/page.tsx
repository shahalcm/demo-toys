import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Building2,
  PackageOpen,
  Loader2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Request Wholesale Pricing & Catalog | ToyWorld Wholesale",
  description:
    "Let's find the right toys for your business. Submit your requirements to receive custom wholesale pricing, carton minimums, and inventory availability.",
};

export default function EnquiryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF8]">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Soft Background Accents */}
        <div
          className="absolute top-12 left-1/4 -z-10 w-80 sm:w-125 h-80 sm:h-125 rounded-full bg-[#635BFF]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-4 sm:right-10 -z-10 w-72 sm:w-112.5 h-72 sm:h-112.5 rounded-full bg-[#FFB703]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home Link */}
          <div className="mb-4 sm:mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#635BFF] hover:text-[#5148E5] transition-colors py-2 px-3 rounded-full hover:bg-zinc-100/70 w-fit min-h-11"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Heading & Supporting Text */}
          <div className="max-w-3xl mb-8 sm:mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#635BFF] mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB703] fill-[#FFB703] shrink-0" />
              <span>WHOLESALE PARTNER DESK</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#20202A] tracking-tight leading-tight mb-3 sm:mb-4">
              Let&apos;s Find the Right Toys for Your Business.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#747481] leading-relaxed">
              Share your requirements with us, and enquire about toy collections, bulk quantities, and wholesale pricing.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Spacious Form Panel (7 cols on lg, full width on mobile/tablet) */}
            <div className="lg:col-span-7 w-full">
              <Suspense
                fallback={
                  <div className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200 flex flex-col items-center justify-center text-zinc-400 gap-3 min-h-100">
                    <Loader2 className="w-8 h-8 animate-spin text-[#635BFF]" />
                    <span className="text-sm">Loading enquiry form...</span>
                  </div>
                }
              >
                <EnquiryForm />
              </Suspense>
            </div>

            {/* Right Column: Toy Imagery Collage & Business Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6 w-full">
              {/* Showcase Image Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200/80 aspect-16/10 bg-zinc-100 w-full">
                <Image
                  src="/images/enquiry-hero.jpg"
                  alt="Wholesale toy inventory and curated children play sets"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl glass-card border border-white/80">
                  <div className="text-xs font-bold text-[#20202A]">B2B Direct Supply Desk</div>
                  <div className="text-[10px] sm:text-[11px] text-[#747481]">Consolidated shipping & multi-category fulfillment</div>
                </div>
              </div>

              {/* Wholesale Process Perks */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-4">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#20202A] flex items-center gap-2">
                  <PackageOpen className="w-4 h-4 text-[#635BFF] shrink-0" />
                  <span>How Wholesale Inquiries Work</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#20202A]">Submit Requirements</h4>
                      <p className="text-xs text-[#747481] leading-relaxed">Specify interested categories, products, or estimated volume.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FFB703]/20 text-[#B45309] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#20202A]">Custom Price Sheet</h4>
                      <p className="text-xs text-[#747481] leading-relaxed">We prepare volume-tiered quotation sheets and verify lead times.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#10B981]/15 text-[#047857] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#20202A]">Direct Consultation</h4>
                      <p className="text-xs text-[#747481] leading-relaxed">Our team answers all questions to finalize order delivery.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Placeholders */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/80 shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#20202A] mb-4 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#635BFF] shrink-0" />
                  <span>Wholesale Contact Desk</span>
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#635BFF] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase text-[#747481]">Business Email</div>
                      <div className="font-semibold text-[#20202A] break-all">{siteConfig.contact.email}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#FFB703] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase text-[#747481]">Phone / WhatsApp</div>
                      <div className="font-semibold text-[#20202A]">{siteConfig.contact.phone}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#FF6B6B] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase text-[#747481]">Showroom & Distribution</div>
                      <div className="font-semibold text-[#20202A] wrap-break-word">
                        {siteConfig.contact.address}, {siteConfig.contact.cityStateZip}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase text-[#747481]">Business Hours</div>
                      <div className="font-semibold text-[#20202A]">{siteConfig.contact.hours}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
