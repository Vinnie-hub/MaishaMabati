const PRODUCTS = [
  // ===== ROOFING SHEETS (MABATI) =====

  {
    id: 1,
    urgency: "Only 8 rolls left this month",
    name: "Maisha Aluzinc Mabati (Per Metre)",
    category: "Roofing Sheets",
    price: 520,
    salePrice: 390,
    image: "images/corrugated-roofing-sheet-05.webp",
    images: [
      "images/corrugated-roofing-sheet-04.webp",
      "images/corrugated-roofing-sheet-19.webp",
      "images/corrugated-roofing-sheet-05.webp",
    ],
    description:
      "Quality alu-zinc coated roofing sheets with a clean finish, good durability and excellent value for residential and commercial roofing projects.",
    colors: ["Green", "Tile Red", "Graphite", "Bright Red", "Brick Red"],
    variants: [
      "Gauge 28 — Per Metre",
      "Gauge 30 — Per Metre",
      "Gauge 32 — Per Metre",
    ],
    stock: true,
    featured: true,
    bestSeller: true,
    keywords: ["aluzinc", "mabati", "roofing", "sheets", "corrugated"],
  },

  {
    id: 2,
    urgency: "Selling fast — 12 left",
    name: "Maisha Box Profile Mabati (Per Metre)",
    category: "Roofing Sheets",
    price: 520,
    salePrice: 400,
    image: "images/maisha-box-profile.webp",
    images: [
      "images/maisha-box-profile.webp",
      "images/black-maisha-box-profile.webp",
      "images/blue-maisha-box-profile.webp",
      "images/green-maisha-box-profile.webp",
    ],
    description:
      "Modern box profile mabati with a smart finish, suitable for residential, commercial and general construction projects.",
    colors: ["Green", "Tile Red", "Sky Blue", "Graphite", "Maroon"],
    variants: ["Gauge 28 — Per Metre", "Gauge 30 — Per Metre"],
    stock: true,
    featured: true,
    bestSeller: true,
    keywords: ["box profile", "mabati", "roofing"],
  },

  {
    id: 3,
    name: "Maisha Roman Tile Mabati (Per Metre)",
    category: "Roofing Sheets",
    price: 630,
    salePrice: 490,
    image: "images/corrugated-roofing-sheet-11.webp",
    images: [
      "images/corrugated-roofing-sheet-11.webp",
      "images/corrugated-roofing-sheet-13.webp",
      "images/maisha-roman-tile.webp",
      "images/maisha-roman-tile-marron.webp",
      "images/maisha-roman-tile-red.webp",
    ],
    description:
      "Elegant Roman tile profile roofing sheets offering a premium tiled appearance with the strength and convenience of steel roofing.",
    colors: ["Green", "Tile Red", "Graphite", "Brick Red"],
    variants: ["Gauge 28 — Per Metre", "Gauge 30 — Per Metre"],
    stock: true,
    featured: true,
    bestSeller: false,
    keywords: ["roman tile", "mabati", "roofing", "tile"],
  },

  {
    id: 4,
    name: "Maisha Versatile Mabati (Per Metre)",
    category: "Roofing Sheets",
    price: 630,
    salePrice: 490,
    image: "images/corrugated-roofing-sheet-15.webp",
    images: [
      "images/corrugated-roofing-sheet-15.webp",
      "images/corrugated-roofing-sheet-18.webp",
      "images/red-mabati.webp",
      "images/black-mabati.webp",
    ],
    description:
      "Versatile roofing sheets with a practical profile for modern homes and construction projects. Available in different gauges and colours.",
    colors: ["Green", "Tile Red", "Graphite", "Bright Red"],
    variants: [
      "Gauge 28 — Per Metre",
      "Gauge 30 — Per Metre",
      "Gauge 32 — Per Metre",
    ],
    stock: true,
    featured: false,
    bestSeller: true,
    keywords: ["versatile", "mabati", "cladding"],
  },

  {
    id: 5,
    name: "Maisha Dumuzas Corrugated Mabati (Per Metre)",
    category: "Roofing Sheets",
    price: 520,
    salePrice: 390,
    image: "images/mixed-colour-mabati.webp",
    images: [
      "images/aluzinc-mabati-roofing.webp",
      "images/corrugated-wall.webp",
      "images/mixed-colour-mabati.webp",
      "images/dumuzas-corrugated.webp",
    ],
    description:
      "Affordable corrugated roofing sheets suitable for homes, rentals, sheds and budget-conscious construction projects.",
    colors: ["Green", "Tile Red", "Graphite", "Sky Blue"],
    variants: ["Gauge 28 — Per Metre", "Gauge 30 — Per Metre"],
    stock: true,
    featured: false,
    bestSeller: true,
    keywords: ["dumuzas", "corrugated", "mabati"],
  },

  {
    id: 13,
    name: "Maisha Corrugated Mabati G32 (Per Metre)",
    category: "Roofing Sheets",
    price: 480,
    salePrice: 360,
    image: "images/marroon-corrugated-mabati-g32.webp",
    images: [
      "images/marroon-corrugated-mabati-g32.webp",
      "images/maroon-corrugated-mabati-g32.webp",
      "images/green-corrugated-mabati-g32.webp",
    ],
    description:
      "Economical gauge-32 corrugated mabati designed for affordable roofing projects, rentals and general construction.",
    colors: ["Green", "Tile Red", "Graphite"],
    variants: ["Gauge 32 — Per Metre"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["corrugated", "gauge 32", "mabati", "budget"],
  },

  {
    id: 14,
    urgency: "Only 6 left in stock",
    name: "Maisha Aluzinc G30 Premium (Per Metre)",
    category: "Roofing Sheets",
    price: 580,
    salePrice: 450,
    image: "images/aluzinc-g30-premium.webp",
    images: [
      "images/aluzinc-g30-premium.webp",
      "images/aluzinc-g30-premium-001.webp",
      "images/aluzinc-g30.webp",
      "images/many-aluzinc-g30.webp",
    ],
    description:
      "Quality gauge-30 alu-zinc roofing sheets offering a good balance of strength, appearance and affordability.",
    colors: ["Green", "Tile Red", "Graphite", "Maroon"],
    variants: ["Gauge 30 — Per Metre"],
    stock: true,
    featured: true,
    bestSeller: true,
    keywords: ["aluzinc", "gauge 30", "premium", "mabati"],
  },

  {
    id: 16,
    urgency: "Limited stock — premium finish",
    name: "Maisha Stone Coated Tile (Per Metre)",
    category: "Roofing Sheets",
    price: 900,
    salePrice: 720,
    image: "images/stone-coated-tile.webp",
    images: [
      "images/stone-coated-tile.webp",
      "images/stone-coated-tile-004.webp",
      "images/stone-coated-tile-002.webp",
      "images/stone-coated-tile-005.webp",
    ],
    description:
      "Premium stone-coated steel roofing with an attractive tile appearance, suitable for homeowners looking for a stylish and durable roof.",
    colors: ["Tile Red", "Graphite", "Brick Red", "Maroon"],
    variants: ["Standard — Per Metre"],
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
    price: 760,
    salePrice: 620,
    image: "images/cement-bag.webp",
    images: [
      "images/cement-bag.webp",
      "images/cement.webp",
      "images/cement-store.webp",
      "images/simba-cement.webp",
      "images/simba-cement-002.webp",
    ],
    description:
      "50kg Simba cement suitable for foundations, slabs, masonry, plastering and general construction work.",
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
    name: "Binding Wire (Per Kg)",
    category: "Steel",
    price: 200,
    salePrice: 160,
    image: "images/building-steel-binding-wire.webp",
    images: [
      "images/building-steel-binding-wire.webp",
      "images/building-steel-binding-wire-001.webp",
      "images/building-steel-binding-wire-002.webp",
      "images/building-steel.webp",
      "images/binding-wire.webp",
    ],
    description:
      "Reliable binding wire for tying reinforcement bars and general construction work. Sold by kilogram.",
    colors: [],
    variants: ["1kg", "5kg", "10kg"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["steel", "binding wire", "reinforcement"],
  },

  {
    id: 17,
    name: "Deformed Steel Bars (12m Length)",
    category: "Steel",
    price: 850,
    salePrice: 700,
    image: "images/deformed-steel-bars.webp",
    images: [
      "images/deformed-steel-bars.webp",
      "images/deformed-steel-bars-99.webp",
      "images/deformed-steel-bars-w.webp",
      "images/construction-materials-product-01.webp",
    ],
    description:
      "High-tensile deformed reinforcement bars for concrete construction. Available in common diameters for different structural applications.",
    colors: [],
    variants: ["D6 — 12m", "D8 — 12m", "D10 — 12m", "D12 — 12m"],
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
    image: "images/roofing-material-26.webp",
    images: [
      "images/roofing-material-26.webp",
      "images/roofing-material-27.webp",
      "images/roofing-material-28.webp",
      "images/roofing-material.webp",
    ],
    description:
      "Galvanized roofing nails with washers for secure and durable roofing installation.",
    colors: [],
    variants: ["1kg", "5kg"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["nails", "roofing", "accessories"],
  },

  {
    id: 9,
    name: "Ridge Cover (Per Metre)",
    category: "Roofing Accessories",
    price: 450,
    salePrice: 350,
    image: "images/ridge-cover.webp",
    images: [
      "images/ridge-cover.webp",
      "images/ridge-cover-02.webp",
      "images/ridge-cover-003.webp",
      "images/ridge-cover-005.webp",
    ],
    description:
      "Quality ridge covers for finishing the roof ridge neatly and providing added protection against weather elements.",
    colors: ["Green", "Tile Red", "Graphite", "Maroon"],
    variants: ["1 Metre"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["ridge", "cover", "accessories"],
  },

  {
    id: 15,
    name: "Roofing Screws (100 Pack)",
    category: "Roofing Accessories",
    price: 950,
    salePrice: 750,
    image: "images/roofing-screws.webp",
    images: [
      "images/roofing-screws.webp",
      "images/roofing-screws-001.webp",
      "images/roofing-screws-002.webp",
      "images/roofing-screws-003.webp",
    ],
    description:
      "Self-drilling roofing screws with sealing washers for secure installation of roofing sheets.",
    colors: [],
    variants: ["100 Pack", "500 Pack"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["screws", "roofing", "accessories", "fasteners"],
  },

  {
    id: 18,
    name: "Gutter & Fascia Board (Per 3m Set)",
    category: "Roofing Accessories",
    price: 1500,
    salePrice: 1200,
    image: "images/gutter-fascia-board-set.webp",
    images: ["images/gutter-fascia-board-set.webp", "images/gutters-001.webp"],
    description:
      "Durable gutter and fascia components for efficient rainwater collection and a clean roof finish.",
    colors: ["White", "Grey", "Brown"],
    variants: ["3m Set", "6m Set"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["gutter", "fascia", "rainwater", "accessories"],
  },

  {
    id: 19,
    name: "Roofing Insulation Foil (Per Roll)",
    category: "Roofing Accessories",
    price: 2500,
    salePrice: 2000,
    image: "images/roofing-insulation-foil.webp",
    images: [
      "images/roofing-insulation-foil.webp",
      "images/roofing-insulation-foil-001.webp",
      "images/roofing-insulation-foil-003.webp",
      "images/roofing-insulation-foil-004.webp",
    ],
    description:
      "Heat-reflective roofing insulation foil designed to improve indoor comfort and reduce heat transfer through the roof.",
    colors: [],
    variants: ["1m × 30m Roll"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["insulation", "foil", "roofing", "heat"],
  },

  // ===== HARDWARE =====

  {
    id: 10,
    name: "Heavy Duty Wheelbarrow",
    category: "Hardware",
    price: 4200,
    salePrice: 3400,
    image: "images/wheelbarrow-heavy-duty.webp",
    images: [
      "images/wheelbarrow-heavy-duty.webp",
      "images/wheelbarrow-heavy-duty-002.webp",
      "images/wheelbarrow-001.webp",
      "images/wheelbarrow-2-wheel.webp",
    ],
    description:
      "Heavy-duty wheelbarrow designed for transporting sand, ballast, soil and other construction materials around the site.",
    colors: [],
    variants: ["Standard Unit"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["wheelbarrow", "hardware", "construction"],
  },

  {
    id: 20,
    name: "Shovel & Spade Set (2-Piece)",
    category: "Hardware",
    price: 1500,
    salePrice: 1200,
    image: "images/shovel-spade-set.webp",
    images: [
      "images/shovel-spade-set.webp",
      "images/spade-002.webp",
      "images/shovel-001.webp",
      "images/spade.webp",
    ],
    description:
      "Durable shovel and spade set suitable for digging, mixing, loading and general construction site work.",
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
    salePrice: 1400,
    image: "images/safety-helmet-gloves-combo.webp",
    images: [
      "images/safety-helmet-gloves-combo.webp",
      "images/safety-helmet-gloves-combo-001.webp",
      "images/safety-helmet-gloves-combo-002.webp",
      "images/safety-helmet-gloves-combo-003.webp",
      "images/safety-helmet-gloves-combo-004.webp",
    ],
    description:
      "Essential construction PPE combo featuring a protective safety helmet and durable work gloves.",
    colors: ["Yellow", "White", "Blue"],
    variants: ["Standard", "Large"],
    stock: true,
    featured: false,
    bestSeller: true,
    keywords: ["safety", "helmet", "gloves", "PPE", "hardware"],
  },

  {
    id: 22,
    name: "Measuring Tape & Spirit Level Set",
    category: "Hardware",
    price: 1000,
    salePrice: 800,
    image: "images/measuring-tape-level-set.webp",
    images: [
      "images/measuring-tape-level-set.webp",
      "images/measuring-tape-level.webp",
      "images/measuring-tape.webp",
      "images/measuring-level.webp",
    ],
    description:
      "Practical measuring tape and spirit level set for accurate measurements and alignment during construction and renovation.",
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
    price: 3000,
    salePrice: 2400,
    image: "images/river-sand.webp",
    images: [
      "images/river-sand.webp",
      "images/river-sand-001.webp",
      "images/river-sand-002.webp",
      "images/river-sand-003.webp",
    ],
    description:
      "Clean river sand suitable for plastering, masonry and concrete works. Delivery can be arranged depending on location.",
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
    price: 2400,
    salePrice: 2000,
    image: "images/ballast.webp",
    images: [
      "images/ballast.webp",
      "images/ballast-001.webp",
      "images/ballast-002.webp",
      "images/ballast-003.webp",
      "images/ballast-004.webp",
    ],
    description:
      "Quality crushed stone ballast suitable for concrete mixing, foundations, slabs and general construction.",
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
    price: 5000,
    salePrice: 4000,
    image: "images/machine-cut-stones.webp",
    images: [
      "images/machine-cut-stones.webp",
      "images/machine-cut-stones-001.webp",
      "images/machine-cut-stones-002.webp",
      "images/machine-cut-stones-003.webp",
      "images/machine-cut-stones-004.webp",
    ],
    description:
      "Uniform machine-cut building stones suitable for wall construction, foundations and other masonry work.",
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
    price: 2500,
    salePrice: 2000,
    image: "images/clay-bricks.webp",
    images: [
      "images/clay-bricks.webp",
      "images/clay-bricks-001.webp",
      "images/clay-bricks-002.webp",
      "images/clay-bricks-003.webp",
      "images/clay-bricks-004.webp",
    ],
    description:
      "Strong kiln-fired clay bricks suitable for wall construction, decorative work and general building projects.",
    colors: ["Red", "Brown"],
    variants: ["Per 100 Bricks", "Per 500 Bricks"],
    stock: true,
    featured: false,
    bestSeller: false,
    keywords: ["bricks", "clay", "building materials", "walls"],
  },
];

/* =========================================================
   PRODUCT HELPERS — used across cart, wishlist, compare,
   product detail page and the header "offers" dropdown.
   ========================================================= */

// Look up a single product by its numeric id.
function getProductById(id) {
  id = Number(id);
  return PRODUCTS.find((p) => p.id === id) || null;
}

// Percentage discount for a product (0 if not on sale).
function getDiscountPercent(p) {
  if (!p || !p.salePrice || p.salePrice >= p.price) return 0;
  return Math.round(100 - (p.salePrice / p.price) * 100);
}

// Top N products currently on sale, biggest discount first.
function getTopOffers(count = 6) {
  return PRODUCTS.filter((p) => p.salePrice && p.salePrice < p.price)
    .sort((a, b) => getDiscountPercent(b) - getDiscountPercent(a))
    .slice(0, count);
}
