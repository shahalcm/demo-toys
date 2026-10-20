"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const heroSlides = [
  {
    id: "slide-1",
    src: "/images/hero-toys.jpg",
    alt: "Assorted wholesale toys collection showcasing vehicles, plush toys, and modular play sets",
  },
  {
    id: "slide-2",
    src: "/images/small-toys-banner.jpg",
    alt: "High-volume pocket toys, mini die-cast vehicles, fidget novelties and wooden figures",
  },
  {
    id: "slide-3",
    src: "/images/big-toys-banner.jpg",
    alt: "Luxury electric ride-on cars, outdoor scooters and pedal go-karts",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through the 3 full-length background images every 2 seconds (2000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-36 pb-20 sm:pt-28 sm:pb-20"
    >
      {/* Full-Length Background Images Carousel (3 images changing every 2 seconds) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {heroSlides.map((slide, idx) => (
          <div
            key={`bg-${slide.id}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } transition-all duration-1000`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Directional Cinematic Gradient: Text on left is 100% readable while toys on right are bright and vibrant */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 via-45% to-transparent lg:via-50%" />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/35" />
      </div>

      {/* Content Container (Perfect text alignment & vertical balance) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-20 w-full mt-2 sm:mt-0">
        <div className="max-w-2xl flex flex-col items-start text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold uppercase tracking-wider text-white mb-4 sm:mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB703] fill-[#FFB703] shrink-0" />
            <span className="truncate">YOUR TRUSTED WHOLESALE TOY PARTNER</span>
          </div>

          {/* Large Responsive Headline with Intentional Editorial Wrap */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 sm:mb-5 drop-shadow-lg">
            Big Smiles Start With <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#A5B4FC] via-[#C084FC] to-[#FDE047]">
              The Right Toys.
            </span>
          </h1>

          {/* Supporting Headline / Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-100/90 leading-relaxed max-w-xl mb-7 sm:mb-8 font-normal drop-shadow-sm">
            From everyday little toys to exciting big play essentials, discover a wide variety of toys for retailers, resellers, and bulk buyers — all in one place.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="#collections"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-white bg-linear-to-r from-[#635BFF] via-[#7067FF] to-[#5148E5] hover:from-[#5148E5] hover:to-[#4338CA] shadow-xl shadow-[#635BFF]/35 hover:shadow-2xl hover:scale-102 active:scale-[0.99] transition-all duration-200 min-h-12 sm:min-h-12.5"
              id="hero-explore-collections-btn"
            >
              <span>Explore Our Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 shadow-md hover:shadow-lg hover:scale-102 transition-all duration-200 min-h-12 sm:min-h-12.5"
              id="hero-request-pricing-btn"
            >
              <span>Request Wholesale Pricing</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

