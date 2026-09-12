/* =========================================================
   PRODUCT DATA — extended with more items & better specs 
   ========================================================= */
const PRODUCTS = [
  {
    id: 1,
    name: "Maisha Aluzinc Mabati",
    category: "Roofing Sheets",
    price: 350,
    salePrice: 250,
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=85",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=85",
    ],
    description:
      "Premium alu-zinc coated roofing sheet — rustproof, heat reflective and durable for all Kenyan weather conditions. KEBS certified with a 15-year performance warranty.",
    colors: ["Green", "Tile Red", "Graphite", "Bright Red", "Brick Red"],
    variants: ["Gauge 28", "Gauge 30", "Gauge 32"],
    stock: true,
    featured: true,
    bestSeller: true,
    keywords: ["aluzinc", "mabati", "roofing", "sheets", "corrugated"],
  },
  {
    id: 2,
    name: "Maisha Box Profile",
    category: "Roofing Sheets",
    price: 500,
    salePrice: 440,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=85",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85",
    ],
    description:
      "Modern box profile roofing sheet with high gloss finish. Scratch resistant, long-lasting and available in a wide range of colours.",
    colors: ["Green", "Tile Red", "Sky Blue", "Graphite", "Maroon"],
    variants: ["Gauge 28", "Gauge 30"],
    stock: true,
    featured: true,
    bestSeller: true,
    keywords: ["box profile", "mabati", "roofing"],
  },
  {
    id: 3,
    name: "Maisha Roman Tile",
    category: "Roofing Sheets",
    price: 555,
    salePrice: 500,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=85",
    ],
    description:
      "Roman tile profile — classic look with modern strength. Ideal for residential homes and premium commercial buildings.",
    colors: ["Green", "Tile Red", "Graphite", "Brick Red"],
    variants: ["Gauge 28", "Gauge 30"],
    stock: true,
    featured: true,
    bestSeller: false,
    keywords: ["roman tile", "mabati", "roofing", "tile"],
  },
  {
    id: 4,
    name: "Maisha Versatile Mabati",
    category: "Roofing Sheets",
    price: 700,
    salePrice: 600,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85",
    ],
    description:
      "Versatile profile suitable for both roofing and cladding applications. Strong, durable, and available in multiple gauges.",
    colors: ["Green", "Tile Red", "Graphite", "Bright Red"],
    variants: ["Gauge 28", "Gauge 30", "Gauge 32"],
    stock: true,
    featured: false,
    bestSeller: true,
    keywords: ["versatile", "mabati", "cladding"],
  },
  {
    id: 5,
    name: "Maisha Dumuzas Corrugated",
    category: "Roofing Sheets",
    price: 450,
    salePrice: 350,
    image:
      "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?w=800&q=85",
    ],
    description:
      "Traditional corrugated mabati with modern coating. Affordable and reliable — the go-to choice for Kenyan homes.",
    colors: ["Green", "Tile Red", "Graphite", "Sky Blue"],
    variants: ["Gauge 28", "Gauge 30"],
    stock: true,
    featured: false,
    bestSeller: true,
    keywords: ["dumuzas", "corrugated", "mabati"],
  },
  {
    id: 6,
    name: "SIMBA CEMENT 50KG",
    category: "Cement",
    price: 600,
    salePrice: null,
    image:
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&q=85",
    ],
    description:
      "High-strength 50kg cement bag. Ideal for foundations, slabs, plastering and general construction.",
    colors: [],
    variants: ["50kg Bag"],
    stock: true,
    featured: true,
    bestSeller: true,
    keywords: ["cement", "simba", "construction"],
  },
  {
    id: 7,
    name: "Building Steel & Binding Wire",
    category: "Steel",
    price: 210,
    salePrice: null,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=85",
    ],
    description:
      "Heavy-duty binding wire for reinforcement and construction work. Corrosion-resistant galvanised finish.",
    colors: [],
    variants: ["1kg Roll", "5kg Roll", "10kg Roll"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["steel", "binding wire", "reinforcement"],
  },
  {
    id: 8,
    name: "Roofing Nails (Per Kg)",
    category: "Roofing Accessories",
    price: 180,
    salePrice: 150,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=85",
    ],
    description:
      "Galvanized roofing nails with rubber washers. Corrosion-resistant and reliable.",
    colors: [],
    variants: ["1kg", "5kg"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["nails", "roofing", "accessories"],
  },
  {
    id: 9,
    name: "Ridge Cover (Per Meter)",
    category: "Roofing Accessories",
    price: 400,
    salePrice: 350,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
    ],
    description:
      "Color-matched ridge cover for a clean roofline finish. Available in all our standard colours.",
    colors: ["Green", "Tile Red", "Graphite", "Maroon"],
    variants: ["1 Meter"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["ridge", "cover", "accessories"],
  },
  {
    id: 10,
    name: "Wheelbarrow Heavy Duty",
    category: "Hardware",
    price: 5500,
    salePrice: 4800,
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85",
    ],
    description:
      "Rugged construction wheelbarrow for site work. Heavy-duty frame and puncture-proof tyre.",
    colors: [],
    variants: ["Standard"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["wheelbarrow", "hardware", "construction"],
  },
  {
    id: 11,
    name: "River Sand (Per Tonne)",
    category: "Building Materials",
    price: 2200,
    salePrice: null,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=85",
    ],
    description:
      "Clean river sand for plastering and concrete works. Delivered countrywide.",
    colors: [],
    variants: ["1 Tonne", "7 Tonnes"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["sand", "river sand", "building materials"],
  },
  {
    id: 12,
    name: "Ballast (Per Tonne)",
    category: "Building Materials",
    price: 1800,
    salePrice: null,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=85",
    ],
    description:
      "Crushed stone ballast for concrete mixing. Available in 1-tonne and 7-tonne loads.",
    colors: [],
    variants: ["1 Tonne", "7 Tonnes"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["ballast", "aggregate", "building materials"],
  },
  {
    id: 13,
    name: "Maisha Corrugated Mabati G32",
    category: "Roofing Sheets",
    price: 320,
    salePrice: 280,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    ],
    description:
      "Economical gauge-32 corrugated mabati. Perfect for budget-conscious projects and rentals.",
    colors: ["Green", "Tile Red", "Graphite"],
    variants: ["Gauge 32"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["corrugated", "gauge 32", "mabati", "budget"],
  },
  {
    id: 14,
    name: "Maisha Aluzinc G30 Premium",
    category: "Roofing Sheets",
    price: 420,
    salePrice: 380,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85",
    ],
    description:
      "Premium gauge-30 alu-zinc roofing sheet with extended warranty. The perfect balance of strength and value.",
    colors: ["Green", "Tile Red", "Graphite", "Maroon"],
    variants: ["Gauge 30"],
    stock: true,
    featured: true,
    bestSeller: true,
    keywords: ["aluzinc", "gauge 30", "premium", "mabati"],
  },
  {
    id: 15,
    name: "Roofing Screws (100 Pack)",
    category: "Roofing Accessories",
    price: 850,
    salePrice: 750,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=85",
    ],
    description:
      "Self-drilling roofing screws with EPDM washers. Rust-proof, colour-matched to your roofing.",
    colors: [],
    variants: ["100 Pack", "500 Pack"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["screws", "roofing", "accessories", "fasteners"],
  },
  {
    id: 16,
    name: "Maisha Stone Coated Tile",
    category: "Roofing Sheets",
    price: 950,
    salePrice: 850,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    ],
    description:
      "Premium stone-coated steel tile. Luxury look of traditional tiles with the strength and lightness of steel.",
    colors: ["Tile Red", "Graphite", "Brick Red", "Maroon"],
    variants: ["Standard"],
    stock: true,
    featured: true,
    bestSeller: false,
    keywords: ["stone coated", "tile", "premium", "luxury"],
  },
];

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}
