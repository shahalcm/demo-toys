import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Check, Package, Zap } from "lucide-react";
import { rangeShowcaseData } from "@/data/range-showcase";

export default function RangeShowcase() {
  const { headline, subheadline, smallToys, bigToys } = rangeShowcaseData;

  return (
    <section id="toy-range" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-white via-[#FFFDF8] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#635BFF] mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB703] fill-[#FFB703] shrink-0" />
            <span>FULL INVENTORY SPECTRUM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#20202A] tracking-tight leading-tight mb-3 sm:mb-4">
            {headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#747481] leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* Two Large Feature Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Panel 1: Small Toys */}
          <div className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-linear-to-br from-indigo-50/70 via-white to-purple-50/40 border border-[#635BFF]/20 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Image banner with overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                <Image
                  src={smallToys.image}
                  alt="Colorful small toys, pocket toys, and novelty items"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="glass-badge px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#635BFF] shadow-xs">
                    {smallToys.badge}
                  </span>
                </div>
              </div>

              {/* Content area */}
              <div className="p-5 sm:p-7 md:p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#635BFF] mb-1">
                  <Package className="w-4 h-4 shrink-0" />
                  <span className="truncate">{smallToys.subtitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#20202A] tracking-tight mb-2 sm:mb-3">
                  {smallToys.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#747481] leading-relaxed mb-5 sm:mb-6">
                  {smallToys.description}
                </p>

                {/* Specific 4 Items from Prompt */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                  {smallToys.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl sm:rounded-2xl bg-white/90 border border-zinc-200/80 shadow-xs flex items-start gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-[#20202A] truncate">{item.name}</div>
                        <div className="text-[10px] sm:text-[11px] text-[#747481]">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Enquiry CTA */}
            <div className="px-5 pb-5 sm:px-7 sm:pb-7 md:px-8 md:pb-8 pt-0">
              <Link
                href={`/enquiry?category=${encodeURIComponent("Small Toys & Pocket Toys")}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm text-white bg-[#635BFF] hover:bg-[#5148E5] shadow-md shadow-[#635BFF]/20 hover:shadow-lg transition-all duration-200 min-h-12"
              >
                <span>Enquire on Small Toys Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Panel 2: Big Toys */}
          <div className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-linear-to-br from-amber-50/70 via-white to-orange-50/40 border border-[#FFB703]/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Image banner with overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                <Image
                  src={bigToys.image}
                  alt="Big toys, ride-ons, and outdoor play equipment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="glass-badge px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#B45309] shadow-xs">
                    {bigToys.badge}
                  </span>
                </div>
              </div>

              {/* Content area */}
              <div className="p-5 sm:p-7 md:p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B45309] mb-1">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span className="truncate">{bigToys.subtitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#20202A] tracking-tight mb-2 sm:mb-3">
                  {bigToys.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#747481] leading-relaxed mb-5 sm:mb-6">
                  {bigToys.description}
                </p>

                {/* Specific 4 Items from Prompt */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                  {bigToys.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl sm:rounded-2xl bg-white/90 border border-zinc-200/80 shadow-xs flex items-start gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#FFB703]/20 text-[#B45309] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-[#20202A] truncate">{item.name}</div>
                        <div className="text-[10px] sm:text-[11px] text-[#747481]">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Enquiry CTA */}
            <div className="px-5 pb-5 sm:px-7 sm:pb-7 md:px-8 md:pb-8 pt-0">
              <Link
                href={`/enquiry?category=${encodeURIComponent("Big Toys & Outdoor Play")}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm text-[#20202A] bg-[#FFB703] hover:bg-[#F59E0B] shadow-md shadow-[#FFB703]/20 hover:shadow-lg transition-all duration-200 min-h-12"
              >
                <span>Enquire on Big Toys Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
