import React from "react";
import { Boxes, Truck, Layers, FileText } from "lucide-react";
import { businessHighlights, BusinessHighlight } from "@/data/highlights";

export default function BusinessHighlights() {
  const getIcon = (name: BusinessHighlight["iconName"]) => {
    switch (name) {
      case "Boxes":
        return <Boxes className="w-5 h-5 text-[#635BFF]" />;
      case "Truck":
        return <Truck className="w-5 h-5 text-[#FFB703]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#10B981]" />;
      case "FileText":
        return <FileText className="w-5 h-5 text-[#FF6B6B]" />;
      default:
        return <Boxes className="w-5 h-5 text-[#635BFF]" />;
    }
  };

  const getBgStyle = (name: BusinessHighlight["iconName"]) => {
    switch (name) {
      case "Boxes":
        return "bg-[#635BFF]/10 text-[#635BFF] border-[#635BFF]/20";
      case "Truck":
        return "bg-[#FFB703]/15 text-[#B45309] border-[#FFB703]/30";
      case "Layers":
        return "bg-[#10B981]/15 text-[#047857] border-[#10B981]/30";
      case "FileText":
        return "bg-[#FF6B6B]/15 text-[#E11D48] border-[#FF6B6B]/30";
      default:
        return "bg-[#635BFF]/10 text-[#635BFF] border-[#635BFF]/20";
    }
  };

  return (
    <section className="py-4 sm:py-6 border-y border-zinc-200/70 bg-white/70 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {businessHighlights.map((item) => (
            <div
              key={item.id}
              className="group p-3.5 sm:p-4 md:p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-[#635BFF]/30 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-3 sm:gap-4"
            >
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 border ${getBgStyle(
                  item.iconName
                )} group-hover:scale-105 transition-transform duration-200`}
              >
                {getIcon(item.iconName)}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#747481] block mb-0.5">
                  {item.tag}
                </span>
                <h3 className="text-sm md:text-base font-bold text-[#20202A] tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#747481] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
