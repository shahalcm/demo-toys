import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { toyCategories } from "@/data/categories";

export default function CollectionsGrid() {
  return (
    <section id="collections" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div
        className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#635BFF]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#FFB703]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#635BFF] mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB703] fill-[#FFB703] shrink-0" />
            <span>WHOLESALE PRODUCT CATEGORIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#20202A] tracking-tight leading-tight mb-3 sm:mb-4">
            Something Special for Every Age.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#747481] leading-relaxed">
            Explore a diverse range of toys, from small everyday favorites to larger playtime essentials.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {toyCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-zinc-200/90 shadow-xs hover:shadow-xl hover:border-[#635BFF]/30 transition-all duration-300"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-16/10 overflow-hidden bg-zinc-100">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="glass-badge px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#20202A] shadow-xs">
                    {cat.badge}
                  </span>
                </div>

                {/* Category Number Pill */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#20202A] group-hover:text-[#635BFF] transition-colors duration-200 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#747481] leading-relaxed mb-4 line-clamp-3 sm:line-clamp-none">
                    {cat.description}
                  </p>

                  {/* Popular Items Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
                    {cat.popularItems.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-medium bg-zinc-100/90 text-[#20202A]/80 border border-zinc-200/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-3 sm:pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <Link
                    href={`/enquiry?category=${encodeURIComponent(cat.title)}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#635BFF] hover:text-[#5148E5] transition-colors group/link py-1 min-h-[36px]"
                  >
                    <span>Enquire About {cat.title.split("&")[0].trim()}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
