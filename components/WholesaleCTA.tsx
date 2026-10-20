import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Mail, FileText } from "lucide-react";

export default function WholesaleCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Rounded Gradient Container */}
        <div className="relative rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden bg-linear-to-r from-[#635BFF] via-[#5850EC] to-[#4338CA] p-6 sm:p-10 md:p-14 lg:p-16 text-white shadow-2xl border border-white/20">
          {/* Subtle Background Glows and Shapes */}
          <div
            className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FFB703]/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FF6B6B]/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start text-left w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white mb-4 sm:mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB703] fill-[#FFB703] shrink-0" />
                <span>START YOUR WHOLESALE PARTNERSHIP</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3 sm:mb-4">
                Looking for the Right Toys for Your Business?
              </h2>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mb-6 sm:mb-8">
                Tell us what you need, and our team can help you enquire about products, bulk requirements, and wholesale pricing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-[#20202A] bg-white hover:bg-zinc-100 shadow-lg active:scale-[0.99] transition-all duration-200 min-h-12"
                  id="cta-send-enquiry-btn"
                >
                  <FileText className="w-4 h-4 text-[#635BFF] shrink-0" />
                  <span>Send an Enquiry</span>
                  <ArrowRight className="w-4 h-4 text-[#635BFF] shrink-0" />
                </Link>
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all duration-200 min-h-12"
                  id="cta-contact-team-btn"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>

            {/* Right Decorative Glass Card */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-end">
              <div className="w-full max-w-xs p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#FFB703]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-white/70">Fast Quote Turnaround</div>
                    <div className="text-sm font-extrabold text-white">Within 24 Hours</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 text-xs text-white/90 leading-relaxed border border-white/10">
                  Custom carton quantities, combined category shipments, and direct business assistance for your store shelves.
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
                  <span>Transparent Pricing</span>
                  <span className="font-bold text-[#B7F7D4]">B2B Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
