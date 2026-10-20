import React from "react";
import { Sparkles, Store, Calculator, Headphones, CheckCircle2 } from "lucide-react";
import { whyChooseBenefits, WhyChooseBenefit } from "@/data/highlights";

export default function WhyChooseUsSection() {
  const getIcon = (name: WhyChooseBenefit["iconName"]) => {
    switch (name) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#635BFF]" />;
      case "Store":
        return <Store className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFB703]" />;
      case "Calculator":
        return <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-[#10B981]" />;
      case "Headphones":
        return <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B6B]" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#635BFF]" />;
    }
  };

  const getBadgeStyle = (name: WhyChooseBenefit["iconName"]) => {
    switch (name) {
      case "Sparkles":
        return "bg-[#635BFF]/10 border-[#635BFF]/20";
      case "Store":
        return "bg-[#FFB703]/15 border-[#FFB703]/30";
      case "Calculator":
        return "bg-[#10B981]/15 border-[#10B981]/30";
      case "Headphones":
        return "bg-[#FF6B6B]/15 border-[#FF6B6B]/30";
      default:
        return "bg-[#635BFF]/10 border-[#635BFF]/20";
    }
  };

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-white">
      {/* Background Subtle Gradient Blobs */}
      <div
        className="absolute top-1/3 right-1/4 -z-10 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#635BFF]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 -z-10 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#FFB703]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#635BFF] mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB703] fill-[#FFB703] shrink-0" />
            <span>COMMERCIAL ADVANTAGES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#20202A] tracking-tight leading-tight mb-3 sm:mb-4">
            Why Choose Us?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#747481] leading-relaxed">
            A wholesale toy partner dedicated to helping you stock high-demand toys with personalized pricing and dependable service.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {whyChooseBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-[#FFFDF8] border border-zinc-200/80 hover:border-[#635BFF]/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 mb-4 sm:mb-5">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border shadow-xs shrink-0 ${getBadgeStyle(
                      benefit.iconName
                    )}`}
                  >
                    {getIcon(benefit.iconName)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#20202A] tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#635BFF] line-clamp-1">
                      {benefit.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-[#747481] leading-relaxed mb-5 sm:mb-6">
                  {benefit.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-3 sm:pt-4 border-t border-zinc-200/60 space-y-2 sm:space-y-2.5">
                {benefit.bulletPoints.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#20202A]/85 font-medium leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
