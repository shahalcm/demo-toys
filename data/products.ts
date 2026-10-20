export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  badge: string;
  description: string;
  image: string;
  highlights: string[];
  packaging: string;
  suggestedRetailType: string;
}

export const featuredProducts: ProductItem[] = [
  {
    id: "mini-toy-cars",
    name: "Mini Toy Cars",
    category: "Toy Cars & Vehicles",
    categorySlug: "vehicles",
    badge: "Fast Mover",
    description:
      "Vibrant die-cast alloy friction cars with smooth rolling wheels, resilient paint finishes, and counter display-ready blister packs.",
    image: "/images/prod-mini-cars.jpg",
    highlights: ["Die-cast alloy metal body", "Blister & counter display box packs", "Assorted models per carton"],
    packaging: "Display box of 24 units",
    suggestedRetailType: "Toy shops, convenience stores & gift corners",
  },
  {
    id: "colorful-building-blocks",
    name: "Colorful Building Blocks",
    category: "Building Blocks & Creative Toys",
    categorySlug: "building-blocks",
    badge: "Evergreen",
    description:
      "Precision-molded interlocking building bricks in vivid primary and pastel palettes, compatible with standard building systems.",
    image: "/images/prod-building-blocks.jpg",
    highlights: ["BPA-free durable ABS plastic", "Storage tubs & retail cartons available", "Multiple piece count configurations"],
    packaging: "Storage bucket / boxed cartons",
    suggestedRetailType: "Educational supply, supermarkets & specialty toy stores",
  },
  {
    id: "plush-teddy-bears",
    name: "Plush Teddy Bears",
    category: "Dolls & Soft Toys",
    categorySlug: "dolls-soft-toys",
    badge: "Top Huggable",
    description:
      "Ultra-soft plush companion bears with reinforced embroidery eyes, hypoallergenic poly-fill, and charming satin neck ribbon details.",
    image: "/images/prod-plush-teddy.jpg",
    highlights: ["Hypoallergenic plush microfiber", "Safety tested for all ages", "Available in assorted classic shades"],
    packaging: "Individually bagged / Master carton of 12",
    suggestedRetailType: "Boutique gift shops, nursery retailers & event supply",
  },
  {
    id: "educational-learning-sets",
    name: "Educational Learning Sets",
    category: "Educational & Learning Toys",
    categorySlug: "educational",
    badge: "STEM Favorite",
    description:
      "Montessori-inspired wooden shape sorting cubes and tactile counting puzzles finished in non-toxic water-based child-safe paint.",
    image: "/images/prod-montessori-set.jpg",
    highlights: ["Sustainably sourced natural wood", "Non-toxic child-safe finishes", "Designed for cognitive fine motor skills"],
    packaging: "Sturdy color gift box with retail handle",
    suggestedRetailType: "Kindergarten suppliers, bookstore gift sections & toy shops",
  },
  {
    id: "fashion-dolls",
    name: "Fashion Dolls",
    category: "Dolls & Soft Toys",
    categorySlug: "dolls-soft-toys",
    badge: "High Repeat",
    description:
      "Articulated poseable fashion dolls featuring interchangeable designer outfits, soft brushable hair, and miniature accessory packs.",
    image: "/images/dolls-fashion-collection.jpg",
    highlights: ["Articulated poseable joints", "Multi-outfit accessory bundles", "Window display packaging"],
    packaging: "Window box packaging / 12 per case",
    suggestedRetailType: "Toy retailers, department stores & family boutiques",
  },
  {
    id: "toy-construction-vehicles",
    name: "Toy Construction Vehicles",
    category: "Toy Cars & Vehicles",
    categorySlug: "vehicles",
    badge: "Heavy Duty",
    description:
      "Rugged excavators, front-end loaders, dumpers, and mobile cement mixers with movable mechanical arms and heavy-tread wheels.",
    image: "/images/construction-vehicles-toys.jpg",
    highlights: ["Movable hydraulic-action booms", "High-impact shatter-resistant polymer", "Indoors and outdoor sandbox durability"],
    packaging: "Open-touch retail box / 6 per carton",
    suggestedRetailType: "Hardware toy sections, garden centers & hobby retailers",
  },
  {
    id: "large-ride-on-toys",
    name: "Large Ride-On Toys",
    category: "Big Toys & Outdoor Play",
    categorySlug: "big-outdoor",
    badge: "Flagship",
    description:
      "Ergonomic rechargeable battery-operated and foot-to-floor ride-on cruisers with safety belt, steering horn sounds, and smooth tires.",
    image: "/images/ride-on-vehicles-showcase.jpg",
    highlights: ["Reinforced anti-tip safety chassis", "Sound & light steering console", "High showroom curb appeal"],
    packaging: "Individual reinforced carton / Dropship friendly",
    suggestedRetailType: "Baby & kids mega-stores, outdoor retailers & showrooms",
  },
  {
    id: "outdoor-play-sets",
    name: "Outdoor Play Sets",
    category: "Big Toys & Outdoor Play",
    categorySlug: "big-outdoor",
    badge: "Active Play",
    description:
      "All-weather backyard activity play centers including lightweight folding slides, sports basketball hoops, and climbing step ladders.",
    image: "/images/prod-outdoor-play.jpg",
    highlights: ["UV-resistant high-density polyethylene", "Tool-free fast assembly", "Indoor playroom & backyard versatile"],
    packaging: "Flat-pack heavy grade distribution carton",
    suggestedRetailType: "Sporting goods retailers, outdoor living stores & toy megastores",
  },
];
