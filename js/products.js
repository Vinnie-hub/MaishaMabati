const PRODUCTS = [
  // ===== ROOFING SHEETS (Mabati) =====
  {
    id: 1,
    urgency: "Only 8 rolls left this month",
    name: "Maisha Aluzinc Mabati",
    category: "Roofing Sheets",
    price: 350,
    salePrice: 250,
    image:
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    urgency: "Selling fast — 12 left",
    name: "Maisha Box Profile",
    category: "Roofing Sheets",
    price: 500,
    salePrice: 440,
    image:
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    id: 13,
    name: "Maisha Corrugated Mabati G32",
    category: "Roofing Sheets",
    price: 320,
    salePrice: 280,
    image:
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    urgency: "Only 6 left in stock",
    name: "Maisha Aluzinc G30 Premium",
    category: "Roofing Sheets",
    price: 420,
    salePrice: 380,
    image:
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    id: 16,
    urgency: "Limited stock — premium finish",
    name: "Maisha Stone Coated Tile",
    category: "Roofing Sheets",
    price: 950,
    salePrice: 850,
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
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

  // ===== CEMENT =====
  {
    id: 6,
    urgency: "High demand — order early",
    name: "SIMBA CEMENT 50KG",
    category: "Cement",
    price: 600,
    salePrice: null,
    image:
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
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

  // ===== STEEL =====
  {
    id: 7,
    name: "Building Steel & Binding Wire",
    category: "Steel",
    price: 210,
    salePrice: null,
    image:
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    id: 17,
    name: "Deformed Steel Bars (D6–D12)",
    category: "Steel",
    price: 850,
    salePrice: 780,
    image:
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "High-tensile deformed steel bars for reinforced concrete. Available in D6, D8, D10 and D12 diameters.",
    colors: [],
    variants: ["D6", "D8", "D10", "D12"],
    stock: true,
    featured: false,
    bestSeller: true,
    keywords: ["steel bars", "rebar", "reinforcement", "construction"],
  },

  // ===== ROOFING ACCESSORIES =====
  {
    id: 8,
    name: "Roofing Nails (Per Kg)",
    category: "Roofing Accessories",
    price: 180,
    salePrice: 150,
    image:
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    id: 15,
    name: "Roofing Screws (100 Pack)",
    category: "Roofing Accessories",
    price: 850,
    salePrice: 750,
    image:
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    id: 18,
    name: "Gutter & Fascia Board Set",
    category: "Roofing Accessories",
    price: 1200,
    salePrice: 1050,
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Complete gutter and fascia board set for rainwater management. Durable PVC with UV protection.",
    colors: ["White", "Grey", "Brown"],
    variants: ["3 Meter Set", "6 Meter Set"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["gutter", "fascia", "rainwater", "accessories"],
  },
  {
    id: 19,
    name: "Roofing Insulation Foil (Per Roll)",
    category: "Roofing Accessories",
    price: 2200,
    salePrice: 1950,
    image:
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Heat-reflective roofing insulation foil. Reduces indoor temperature and improves energy efficiency.",
    colors: [],
    variants: ["1m x 30m Roll"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["insulation", "foil", "roofing", "heat"],
  },

  // ===== HARDWARE =====
  {
    id: 10,
    name: "Wheelbarrow Heavy Duty",
    category: "Hardware",
    price: 5500,
    salePrice: 4800,
    image:
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    id: 20,
    name: "Shovel & Spade Set",
    category: "Hardware",
    price: 1500,
    salePrice: 1300,
    image:
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Heavy-duty shovel and spade set with fibreglass handles. Ideal for digging, mixing and site work.",
    colors: [],
    variants: ["2-Piece Set"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["shovel", "spade", "hardware", "tools"],
  },
  {
    id: 21,
    name: "Safety Helmet & Gloves Combo",
    category: "Hardware",
    price: 1800,
    salePrice: 1500,
    image:
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Complete site safety combo — hard hat and reinforced work gloves. Essential PPE for construction.",
    colors: ["Yellow", "White", "Blue"],
    variants: ["Standard", "Large"],
    stock: true,
    featured: false,
    bestSeller: true,
    keywords: ["safety", "helmet", "gloves", "PPE", "hardware"],
  },
  {
    id: 22,
    name: "Measuring Tape & Level Set",
    category: "Hardware",
    price: 950,
    salePrice: 820,
    image:
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Professional measuring tape and spirit level set. Accurate, durable and rust-resistant.",
    colors: [],
    variants: ["5m Tape + 60cm Level"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["measuring tape", "level", "tools", "hardware"],
  },

  // ===== BUILDING MATERIALS =====
  {
    id: 11,
    name: "River Sand (Per Tonne)",
    category: "Building Materials",
    price: 2200,
    salePrice: null,
    image:
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      "https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    id: 23,
    name: "Machine Cut Stones (Per 100)",
    category: "Building Materials",
    price: 4500,
    salePrice: 4200,
    image:
      "https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Precision machine-cut building stones for walls and foundations. Uniform size, ready for laying.",
    colors: [],
    variants: ["Per 100 Stones", "Per 500 Stones"],
    stock: true,
    featured: false,
    bestSeller: true,
    keywords: ["stones", "machine cut", "building materials", "blocks"],
  },
  {
    id: 24,
    name: "Clay Bricks (Per 100)",
    category: "Building Materials",
    price: 3800,
    salePrice: 3500,
    image:
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6474342/pexels-photo-6474342.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691612/pexels-photo-5691612.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Kiln-fired clay bricks for durable walls and decorative finishes. Strong, weather-resistant and long-lasting.",
    colors: ["Red", "Brown"],
    variants: ["Per 100 Bricks", "Per 500 Bricks"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["bricks", "clay", "building materials", "walls"],
  },
];

/* =========================================================
   PRODUCT HELPERS — shared across all pages
   ========================================================= */

/** Find a single product by its numeric id. Returns undefined if not found. */
function getProductById(id) {
  id = Number(id);
  return PRODUCTS.find((p) => p.id === id);
}

/** Discount percentage (0-100, rounded) for a product, or 0 if not on sale. */
function getDiscountPercent(p) {
  if (!p || !p.salePrice || p.salePrice >= p.price) return 0;
  return Math.round(100 - (p.salePrice / p.price) * 100);
}

/**
 * This week's top offers: discounted, in-stock products, best sellers first,
 * biggest discount first. Used by the header "Top Offers" dropdown.
 */
function getTopOffers(limit = 6) {
  return PRODUCTS.filter((p) => p.stock && getDiscountPercent(p) > 0)
    .sort((a, b) => {
      if (a.bestSeller !== b.bestSeller) return a.bestSeller ? -1 : 1;
      return getDiscountPercent(b) - getDiscountPercent(a);
    })
    .slice(0, limit);
}
