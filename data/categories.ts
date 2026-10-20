export interface ToyCategory {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  popularItems: string[];
  accentColor: string;
  bgPastel: string;
}

export const toyCategories: ToyCategory[] = [
  {
    id: "small-toys",
    title: "Small Toys & Pocket Toys",
    slug: "small-toys",
    tagline: "High-Margin Counter & Impulse Favorites",
    description:
      "Pocket-sized fidgets, collectible figurines, mini spinners, and fun party-favor novelties designed for fast retail turnover.",
    image: "/images/small-pocket-toys.jpg",
    badge: "Impulse & Counter Picks",
    popularItems: ["Fidget cubes & spinners", "Mini action figures", "Squishies & keychains", "Pocket puzzles"],
    accentColor: "#635BFF",
    bgPastel: "from-indigo-50/80 to-purple-50/40",
  },
  {
    id: "vehicles",
    title: "Toy Cars & Vehicles",
    slug: "vehicles",
    tagline: "Die-Cast, Friction & RC Wonders",
    description:
      "Vibrant die-cast racers, heavy-duty construction haulers, emergency service fleets, and friction-powered stunt racers.",
    image: "/images/cat-vehicles.jpg",
    badge: "Best Seller Category",
    popularItems: ["Die-cast scale models", "Construction diggers & haulers", "Friction pullback cars", "Speed track sets"],
    accentColor: "#FFB703",
    bgPastel: "from-amber-50/80 to-yellow-50/40",
  },
  {
    id: "dolls-soft-toys",
    title: "Dolls & Soft Toys",
    slug: "dolls-soft-toys",
    tagline: "Huggable Plushes & Fashion Doll Collections",
    description:
      "Ultra-soft cuddly plush animals, classic heirloom bears, poseable fashion dolls, and playset accessories loved across all ages.",
    image: "/images/cat-dolls-plush.jpg",
    badge: "Year-Round Staples",
    popularItems: ["Plush heirloom teddy bears", "Fashion & dress-up dolls", "Fantasy stuffed creatures", "Doll accessories"],
    accentColor: "#FF6B6B",
    bgPastel: "from-rose-50/80 to-pink-50/40",
  },
  {
    id: "educational",
    title: "Educational & Learning Toys",
    slug: "educational",
    tagline: "Montessori, STEM & Early Development",
    description:
      "Wooden sensory sorting boards, STEM robotics kits, alphabet counters, and brain-teasing developmental play sets.",
    image: "/images/cat-educational.jpg",
    badge: "Parent & School Approved",
    popularItems: ["Montessori wooden boards", "STEM science discovery kits", "Number & shape sorters", "Interactive flash cards"],
    accentColor: "#10B981",
    bgPastel: "from-emerald-50/80 to-teal-50/40",
  },
  {
    id: "building-blocks",
    title: "Building Blocks & Creative Toys",
    slug: "building-blocks",
    tagline: "Interlocking Bricks & Architectural Sets",
    description:
      "Vibrant interlocking modular bricks, magnetic tile sets, and architectural build packages that foster limitless imagination.",
    image: "/images/cat-building-blocks.jpg",
    badge: "High Repeat Demand",
    popularItems: ["Interlocking brick kits", "3D magnetic builder tiles", "Creative marble runs", "Giant foam soft blocks"],
    accentColor: "#635BFF",
    bgPastel: "from-violet-50/80 to-blue-50/40",
  },
  {
    id: "big-outdoor",
    title: "Big Toys & Outdoor Play",
    slug: "big-outdoor",
    tagline: "Ride-Ons, Playhouses & Garden Fun",
    description:
      "Electric & pedal ride-on vehicles, collapsible toddler slides, multi-activity wagons, and durable outdoor sporting gear.",
    image: "/images/cat-big-outdoor.jpg",
    badge: "Flagship Showcase",
    popularItems: ["Electric ride-on buggies", "Balance bikes & trikes", "Garden slide play centers", "Teepees & play tunnels"],
    accentColor: "#F59E0B",
    bgPastel: "from-orange-50/80 to-amber-50/40",
  },
];
