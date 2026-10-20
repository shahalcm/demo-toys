"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Send } from "lucide-react";
import { featuredProducts, ProductItem } from "@/data/products";

export default function FeaturedProducts() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const categories = [
    { label: "All Showcase Items", value: "all" },
    { label: "Toy Cars & Vehicles", value: "vehicles" },
    { label: "Building Blocks", value: "building-blocks" },
    { label: "Dolls & Soft Toys", value: "dolls-soft-toys" },
    { label: "Educational", value: "educational" },
    { label: "Big Toys & Outdoor", value: "big-outdoor" },
  ];

  const filteredProducts =
    selectedFilter === "all"
      ? featuredProducts
      : featuredProducts.filter((p) => p.categorySlug === selectedFilter);

  // Ensure enough items so that half of the scrolling track is wide enough to loop seamlessly
  const repeatMultiplier = Math.max(1, Math.ceil(8 / Math.max(filteredProducts.length, 1)));
  const displayList = Array(repeatMultiplier).fill(filteredProducts).flat();

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        {/* Section Heading - Updated to match continuous moving showcase */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#635BFF] mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB703] fill-[#FFB703] shrink-0" />
            <span>LIVE WHOLESALE PRODUCT REEL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#20202A] tracking-tight leading-tight mb-3 sm:mb-4">
            Top Wholesale Toys, <span className="text-[#635BFF]">Always in Motion.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#747481] leading-relaxed max-w-2xl mx-auto">
            Explore our continuously revolving showcase of high-demand retail toys. Hover over any item to pause the reel, inspect packaging specifications, or enquire directly for wholesale pricing.
          </p>
        </div>

        {/* Filter Tabs & Live Reel Status */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 no-scrollbar w-full sm:w-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 whitespace-nowrap min-h-9.5 sm:min-h-10 flex items-center justify-center cursor-pointer ${
                  selectedFilter === tab.value
                    ? "bg-[#635BFF] text-white shadow-md shadow-[#635BFF]/25 font-bold"
                    : "bg-white text-[#747481] hover:text-[#20202A] hover:bg-zinc-100 border border-zinc-200/80 active:bg-zinc-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Reel Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-zinc-200/80 text-[11px] sm:text-xs font-medium text-[#747481] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
            <span>Continuous Auto-Scroll &bull; Hover over any card to pause</span>
          </div>
        </div>
      </div>

      {/* Continuous Moving Row (Marquee Ribbon) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Soft Edge Gradient Blurs for Luxury Broadcast Look */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-linear-to-r from-[#FFFDF8] via-[#FFFDF8]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-linear-to-l from-[#FFFDF8] via-[#FFFDF8]/80 to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <div className="animate-marquee-infinite flex gap-4 sm:gap-6 px-4">
          {/* First Loop Track */}
          {displayList.map((product, idx) => (
            <ProductReelCard key={`reel-track-1-${product.id}-${idx}`} product={product} />
          ))}
          {/* Second Seamless Loop Track */}
          {displayList.map((product, idx) => (
            <ProductReelCard key={`reel-track-2-${product.id}-${idx}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductReelCard({ product }: { product: ProductItem }) {
  return (
    <div className="group w-70 sm:w-80 md:w-85 shrink-0 flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-zinc-200/90 shadow-xs hover:shadow-2xl hover:border-[#635BFF]/35 transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 280px, 340px"
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Badge */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
          <span className="glass-badge px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold text-[#20202A]">
            {product.badge}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#635BFF] block mb-1">
            {product.category}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#20202A] tracking-tight group-hover:text-[#635BFF] transition-colors mb-1.5 sm:mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-[#747481] leading-relaxed line-clamp-2 mb-3 sm:mb-4">
            {product.description}
          </p>

          <div className="py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-zinc-50 border border-zinc-100 mb-4 sm:mb-5">
            <div className="text-[9px] sm:text-[10px] uppercase font-bold text-[#747481] tracking-wider">Packaging</div>
            <div className="text-xs font-semibold text-[#20202A] truncate">{product.packaging}</div>
          </div>
        </div>

        {/* Enquire Button linking to Enquiry with preselected product */}
        <Link
          href={`/enquiry?product=${encodeURIComponent(product.name)}`}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold text-[#635BFF] bg-[#635BFF]/10 hover:bg-[#635BFF] hover:text-white border border-[#635BFF]/20 hover:border-transparent transition-all duration-200 group/btn min-h-11"
          id={`enquire-${product.id}`}
        >
          <Send className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          <span>Enquire About This Product</span>
        </Link>
      </div>
    </div>
  );
}
