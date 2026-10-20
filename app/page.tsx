import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BusinessHighlights from "@/components/BusinessHighlights";
import CollectionsGrid from "@/components/CollectionsGrid";
import RangeShowcase from "@/components/RangeShowcase";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import WholesaleCTA from "@/components/WholesaleCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF8] selection:bg-[#635BFF]/20 selection:text-[#635BFF]">
      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Section A: Hero */}
        <HeroSection />

        {/* Section B: Trust / Business Highlights */}
        <BusinessHighlights />

        {/* Section C: Explore Our Toy Collections (6 Categories) */}
        <CollectionsGrid />

        {/* Section D: Small Toys to Big Toys (Visual Range Showcase) */}
        <RangeShowcase />

        {/* Section E: Why Choose Us? (4 Benefits) */}
        <WhyChooseUsSection />

        {/* Section F: Featured Product Showcase (8 Products) */}
        <FeaturedProducts />

        {/* Section G: About the Business (Split Layout) */}
        <AboutSection />

        {/* Section H: Wholesale Enquiry CTA Banner */}
        <WholesaleCTA />
      </main>

      {/* Section I: Footer */}
      <Footer />
    </div>
  );
}
