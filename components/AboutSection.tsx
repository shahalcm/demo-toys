import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, HeartHandshake, Package } from "lucide-react";

export default function AboutSection() {
  const availableProductTypes = [
    "Small pocket toys, novelties & checkout impulse counters",
    "Die-cast vehicles, construction haulers & friction racers",
    "Huggable plush companions & poseable fashion dolls",
    "Montessori wooden sorters & STEM early learning kits",
    "Interlocking building blocks & creative magnetic tiles",
    "Large electric ride-ons & outdoor activity playsets",
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left Column: Warehouse / Shop Display Photography */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative mx-auto max-w-135 lg:max-w-none w-full">
              {/* Back subtle glow container */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#635BFF]/10 via-[#FFB703]/10 to-[#10B981]/10 rounded-2xl sm:rounded-3xl transform -rotate-1 scale-102 filter blur-sm pointer-events-none" />

              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white aspect-4/3 bg-zinc-100 w-full">
                <Image
                  src="/images/about-toy-store.jpg"
                  alt="Colorful toy store display shelves and wholesale warehouse collection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glass Tag inside image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-card border border-white/80">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#635BFF] text-white flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-[#20202A] truncate">Dedicated B2B Toy Supply</div>
                      <div className="text-[10px] sm:text-xs text-[#747481] truncate">Curated for Retailers, Resellers & Bulk Buyers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Info & Editable Placeholder Copy */}
          <div className="lg:col-span-6 flex flex-col items-start w-full">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#635BFF] mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB703] fill-[#FFB703] shrink-0" />
              <span>ABOUT OUR BUSINESS</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#20202A] tracking-tight leading-tight mb-4 sm:mb-5">
              Bringing More Joy to Every Toy Shelf.
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-[#747481] leading-relaxed mb-3 sm:mb-4">
              We operate as a business-to-business wholesale toy supplier serving independent retail stores, regional toy shops, supermarket toy aisles, party distributors, and institutional bulk buyers.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#747481] leading-relaxed mb-6">
              Our mission is to make wholesale toy procurement straightforward, reliable, and rewarding. We curate an extensive portfolio that bridges high-volume pocket novelties with premium large-scale play equipment, giving buyers a consolidated source for all their toy merchandising needs.
            </p>

            {/* List of Product Types Available */}
            <div className="w-full mb-6 sm:mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#20202A] mb-3 flex items-center gap-2">
                <Package className="w-4 h-4 text-[#635BFF] shrink-0" />
                <span>Available Product Categories Include:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {availableProductTypes.map((type, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#20202A]/85 font-medium leading-snug">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#635BFF] hover:bg-[#5148E5] shadow-lg shadow-[#635BFF]/25 hover:shadow-xl transition-all duration-200 min-h-[48px]"
              id="about-get-in-touch-btn"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
