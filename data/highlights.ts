export interface BusinessHighlight {
  id: string;
  title: string;
  description: string;
  iconName: "Boxes" | "Truck" | "Layers" | "FileText";
  tag: string;
}

export const businessHighlights: BusinessHighlight[] = [
  {
    id: "wide-selection",
    title: "Wide Toy Selection",
    description: "From affordable pocket novelties to premium large outdoor play systems.",
    iconName: "Boxes",
    tag: "Extensive Catalog",
  },
  {
    id: "bulk-supply",
    title: "Wholesale & Bulk Supply",
    description: "Built specifically to fulfill regular inventory orders for retail and distribution.",
    iconName: "Truck",
    tag: "Flexible Volume",
  },
  {
    id: "multiple-categories",
    title: "Multiple Toy Categories",
    description: "STEM, vehicles, plush, Montessori, blocks, and active ride-on toys under one roof.",
    iconName: "Layers",
    tag: "6 Core Verticals",
  },
  {
    id: "enquiry-ordering",
    title: "Enquiry-Based Ordering",
    description: "Direct business consultations, custom quotation sheets, and clear availability checks.",
    iconName: "FileText",
    tag: "Transparent Terms",
  },
];

export interface WhyChooseBenefit {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "Sparkles" | "Store" | "Calculator" | "Headphones";
  bulletPoints: string[];
}

export const whyChooseBenefits: WhyChooseBenefit[] = [
  {
    id: "variety",
    title: "Wide Product Variety",
    subtitle: "A diverse selection of toys in different sizes and categories",
    description:
      "Stock your shelves with everything from pocket-money impulse toys to showcase playground sets without juggling dozens of fragmented vendors.",
    iconName: "Sparkles",
    bulletPoints: [
      "Curated for high child appeal and repeat purchase frequency",
      "Regular catalog refreshes covering year-round demand",
      "Multiple price tiers suitable for independent shops and retail chains",
    ],
  },
  {
    id: "wholesale-service",
    title: "Wholesale-Focused Service",
    subtitle: "A business-oriented experience for retailers and bulk buyers",
    description:
      "We understand wholesale logistics, retail margins, carton packing specifications, and prompt order processing needed by commercial buyers.",
    iconName: "Store",
    bulletPoints: [
      "Trade-friendly order minimums and multi-carton options",
      "Barcode and retail packaging readiness across catalog items",
      "Dedicated focus on B2B reliability and continuous inventory support",
    ],
  },
  {
    id: "enquiry-purchasing",
    title: "Enquiry-Based Purchasing",
    subtitle: "Ask about products, availability, and wholesale pricing",
    description:
      "Instead of rigid checkout carts with arbitrary pricing, we evaluate your requirements and offer customized wholesale tiers based on volume.",
    iconName: "Calculator",
    bulletPoints: [
      "Tailored quotation sheets within 24 business hours",
      "Clear stock availability and lead-time schedules upfront",
      "No automated payment surprises or unexpected fee additions",
    ],
  },
  {
    id: "personal-assistance",
    title: "Personal Assistance",
    subtitle: "Make it easy for customers to contact the business about their requirements",
    description:
      "Work directly with experienced wholesale representatives who know product trends, safety guidelines, and the fastest-moving toy categories.",
    iconName: "Headphones",
    bulletPoints: [
      "Direct phone, email, and digital inquiry lines",
      "Recommendations tailored to your store demographic",
      "Responsive follow-up from product inquiry to bulk fulfillment",
    ],
  },
];
