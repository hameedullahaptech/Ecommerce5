export const products = [
  {
    id: "vrt-001",
    name: "Architectural Wool Overcoat",
    category: "Outerwear",
    price: 490,
    oldPrice: 580,
    rating: 4.9,
    reviews: 42,
    badge: "BEST SELLER",
    stock: 8,
    featured: true,
    isNew: false,
    description: "A double-breasted coat masterfully tailored from heavyweight Italian virgin wool. Features clean structured shoulders, notched lapels, and a sweeping longline silhouette engineered for cold-weather elegance.",
    details: {
      material: "100% Virgin Wool (Italian Mill)",
      lining: "100% Cupro Satin",
      fit: "Relaxed tailored fit. Fits true to size.",
      care: "Dry clean only by leather & coat specialist."
    },
    colors: [
      { name: "Charcoal Black", hex: "#1C1C1E" },
      { name: "Oatmeal Beige", hex: "#D8C3A5" },
      { name: "Deep Camel", hex: "#9E6B4B" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-002",
    name: "Merino Cashmere High-Neck Knit",
    category: "Knitwear",
    price: 240,
    oldPrice: 280,
    rating: 4.8,
    reviews: 36,
    badge: "NEW ARRIVAL",
    stock: 15,
    featured: true,
    isNew: true,
    description: "Ultra-soft ribbed sweater spun from 70% extra-fine merino wool and 30% Mongolian cashmere. Sculpted mock collar with ribbed cuffs and dropped shoulders for effortless daily warmth.",
    details: {
      material: "70% Merino Wool, 30% Mongolian Cashmere",
      fit: "Slightly oversized silhouette. Take one size down for a slim fit.",
      care: "Hand wash cold with wool detergent or dry clean."
    },
    colors: [
      { name: "Ivory White", hex: "#F5F5F0" },
      { name: "Ebony Black", hex: "#121212" },
      { name: "Sage Green", hex: "#8A9A86" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-003",
    name: "Double-Pleated Wide Leg Trousers",
    category: "Tailored Trousers",
    price: 210,
    oldPrice: 250,
    rating: 4.7,
    reviews: 29,
    badge: "POPULAR",
    stock: 12,
    featured: true,
    isNew: false,
    description: "Fluid tailored trousers crafted from breathable wool-viscose blend fabric. Cut with a high waist, double front pleats, and a wide fluid leg that drapes impeccably over shoes.",
    details: {
      material: "65% Wool, 33% Viscose, 2% Elastane",
      fit: "High-waisted, wide leg. True to size.",
      care: "Machine wash delicate or dry clean."
    },
    colors: [
      { name: "Charcoal", hex: "#2B2B2B" },
      { name: "Taupe Sand", hex: "#B8A99A" },
      { name: "Midnight Navy", hex: "#1A2530" }
    ],
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-004",
    name: "Minimalist Calfskin Crossbody Bag",
    category: "Accessories",
    price: 380,
    oldPrice: 420,
    rating: 4.9,
    reviews: 58,
    badge: "LIMITED",
    stock: 5,
    featured: true,
    isNew: true,
    description: "Clean sculptural handbag crafted from vegetable-tanned Italian calfskin. Features magnetic flap closure, interior zipped pocket, and custom brush-gold brass hardware.",
    details: {
      material: "100% Full-Grain Italian Leather",
      hardware: "Brushed Solid Brass",
      dimensions: "24cm x 16cm x 7cm",
      care: "Treat with natural leather conditioner annually."
    },
    colors: [
      { name: "Noir", hex: "#0D0D0D" },
      { name: "Espresso", hex: "#3B2F2F" },
      { name: "Cognac", hex: "#8C4A27" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-005",
    name: "Sculpted Leather Trench Coat",
    category: "Outerwear",
    price: 680,
    oldPrice: 790,
    rating: 5.0,
    reviews: 19,
    badge: "EXCLUSIVE",
    stock: 4,
    featured: false,
    isNew: true,
    description: "An iconic luxury centerpiece. Soft supple lambskin leather trench coat with waist-cinching belt, shoulder epaulets, storm flap, and deep jet pockets.",
    details: {
      material: "100% Lambskin Leather",
      lining: "100% Viscose",
      fit: "Relaxed tailored fit.",
      care: "Specialist leather care only."
    },
    colors: [
      { name: "Deep Onyx", hex: "#111111" },
      { name: "Dark Chocolate", hex: "#2E1F18" }
    ],
    sizes: ["S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-006",
    name: "Seamless Heavyweight Cotton Tee",
    category: "Knitwear",
    price: 95,
    oldPrice: 110,
    rating: 4.6,
    reviews: 74,
    badge: "ESSENTIAL",
    stock: 30,
    featured: false,
    isNew: false,
    description: "Heavyweight 280 GSM organic combed cotton t-shirt with subtle drop shoulders and a sturdy bound neckband that maintains shape over years of wash and wear.",
    details: {
      material: "100% Organic Combed Cotton (280 GSM)",
      fit: "Relaxed modern fit.",
      care: "Machine wash cold inside out, hang dry."
    },
    colors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Washed Black", hex: "#222222" },
      { name: "Heather Gray", hex: "#9E9E9E" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-007",
    name: "Tailored Single-Breasted Blazer",
    category: "Outerwear",
    price: 360,
    oldPrice: 420,
    rating: 4.8,
    reviews: 23,
    badge: "NEW ARRIVAL",
    stock: 9,
    featured: true,
    isNew: true,
    description: "Versatile unstructured blazer cut from a refined hopsack wool weave. Features natural shoulders, horn buttons, dual back vents, and functional interior welt pockets.",
    details: {
      material: "85% Wool, 15% Linen",
      fit: "Tailored slim fit.",
      care: "Dry clean only."
    },
    colors: [
      { name: "Slate Blue", hex: "#3A4B58" },
      { name: "Off Black", hex: "#1F1F1F" }
    ],
    sizes: ["38R", "40R", "42R", "44R"],
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-008",
    name: "Chunky Chelsea Boots in Calfskin",
    category: "Accessories",
    price: 340,
    oldPrice: 390,
    rating: 4.9,
    reviews: 47,
    badge: "BEST SELLER",
    stock: 11,
    featured: true,
    isNew: false,
    description: "Contemporary Chelsea boots featuring smooth European calfskin uppers, twin elastic gores, and a durable lightweight Vibram lug sole designed for all-day comfort.",
    details: {
      material: "Full Grain Calfskin Leather",
      sole: "Vibram Rubber Lug Sole",
      fit: "True to size. Half sizes round up.",
      care: "Clean with damp cloth & treat with shoe cream."
    },
    colors: [
      { name: "Matt Black", hex: "#181818" },
      { name: "Dark Walnut", hex: "#3D2B1F" }
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-009",
    name: "Pure Silk Oversized Button-Down",
    category: "Knitwear",
    price: 260,
    oldPrice: 300,
    rating: 4.7,
    reviews: 31,
    badge: "LUXURY",
    stock: 7,
    featured: false,
    isNew: true,
    description: "Lustrous 19mm crepe de chine silk shirt with mother-of-pearl buttons, exaggerated barrel cuffs, and a fluid curved hem that tucks effortlessly.",
    details: {
      material: "100% Mulberry Silk",
      fit: "Fluid relaxed silhouette.",
      care: "Hand wash cold or gentle dry clean."
    },
    colors: [
      { name: "Champagne Silk", hex: "#F3E8D8" },
      { name: "Jet Black", hex: "#0F0F0F" }
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-010",
    name: "Pleated Tapered Wool Chinos",
    category: "Tailored Trousers",
    price: 185,
    oldPrice: 220,
    rating: 4.6,
    reviews: 18,
    badge: "NEW ARRIVAL",
    stock: 14,
    featured: false,
    isNew: true,
    description: "Modern smart-casual pants with subtle single pleats, side adjustable waist tabs, and a gentle taper toward the ankle.",
    details: {
      material: "100% Lightweight Tropical Wool",
      fit: "Tapered fit.",
      care: "Dry clean only."
    },
    colors: [
      { name: "Olive Khaki", hex: "#4A5240" },
      { name: "Charcoal", hex: "#333333" }
    ],
    sizes: ["29", "31", "33", "35"],
    images: [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-011",
    name: "Handwoven Alpaca Wool Scarf",
    category: "Accessories",
    price: 120,
    oldPrice: 150,
    rating: 4.9,
    reviews: 64,
    badge: "WINTER SALE",
    stock: 20,
    featured: false,
    isNew: false,
    description: "Featherlight yet immensely cozy scarf woven in Peru from 100% baby alpaca wool. Finished with tactile fringed ends.",
    details: {
      material: "100% Peruvian Baby Alpaca",
      dimensions: "200cm x 45cm",
      care: "Hand wash in cold water."
    },
    colors: [
      { name: "Cream Camel", hex: "#E3D3C1" },
      { name: "Charcoal Melange", hex: "#404040" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-012",
    name: "Structured Canvas Utility Jacket",
    category: "Outerwear",
    price: 295,
    oldPrice: 340,
    rating: 4.7,
    reviews: 25,
    badge: "POPULAR",
    stock: 10,
    featured: false,
    isNew: false,
    description: "Durable Japanese cotton canvas jacket with four utility flap pockets, internal drawcord waist adjustment, and matte silver hardware.",
    details: {
      material: "100% Japanese Heavyweight Cotton Canvas",
      fit: "Boxy utility cut.",
      care: "Machine wash cold."
    },
    colors: [
      { name: "Desert Sand", hex: "#C2B280" },
      { name: "Washed Navy", hex: "#2C3E50" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-013",
    name: "Relaxed Raw Denim Trousers",
    category: "Tailored Trousers",
    price: 175,
    oldPrice: 200,
    rating: 4.8,
    reviews: 51,
    badge: "ESSENTIAL",
    stock: 18,
    featured: false,
    isNew: false,
    description: "13.5oz Japanese selvedge raw denim jeans with a comfortable mid-rise and straight leg contour that ages gracefully with custom whiskers over time.",
    details: {
      material: "100% Japanese Selvedge Cotton Denim",
      fit: "Straight mid-rise fit.",
      care: "Wash sparingly inside out."
    },
    colors: [
      { name: "Indigo Blue", hex: "#1C2D42" },
      { name: "Deep Slate", hex: "#252B33" }
    ],
    sizes: ["28", "30", "32", "34"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-014",
    name: "Minimalist Italian Leather Cardholder",
    category: "Accessories",
    price: 85,
    oldPrice: 105,
    rating: 4.9,
    reviews: 82,
    badge: "BESTSELLER",
    stock: 25,
    featured: false,
    isNew: false,
    description: "Slim profile pocket accessory featuring 4 card slots, a central note slip compartment, and hand-painted burnished edges.",
    details: {
      material: "Full Grain Leather",
      dimensions: "10cm x 7cm",
      care: "Wipe with soft leather cloth."
    },
    colors: [
      { name: "Nero", hex: "#000000" },
      { name: "Cognac", hex: "#8C4A27" },
      { name: "Tan", hex: "#C68B59" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-015",
    name: "Organic Fine-Gauge Cardigan",
    category: "Knitwear",
    price: 195,
    oldPrice: 230,
    rating: 4.7,
    reviews: 14,
    badge: "NEW ARRIVAL",
    stock: 11,
    featured: false,
    isNew: true,
    description: "Lightweight V-neck cardigan featuring genuine horn buttons, deep ribbed hem, and subtle contrast stitching at the cuff.",
    details: {
      material: "100% Organic Pima Cotton",
      fit: "Relaxed tailored fit.",
      care: "Hand wash cold."
    },
    colors: [
      { name: "Warm Taupe", hex: "#A89F91" },
      { name: "Ink Black", hex: "#141416" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "vrt-016",
    name: "Architectural Wool Tailored Coat",
    category: "Outerwear",
    price: 520,
    oldPrice: 600,
    rating: 4.9,
    reviews: 30,
    badge: "LIMITED",
    stock: 6,
    featured: true,
    isNew: false,
    description: "Minimalist stand-collar long coat crafted from dense double-faced wool. Concealed front button placket and deep welt side pockets.",
    details: {
      material: "100% Double-Faced Virgin Wool",
      fit: "Clean straight silhouette.",
      care: "Dry clean only."
    },
    colors: [
      { name: "Pebble Gray", hex: "#8E8E93" },
      { name: "Midnight Black", hex: "#0C0C0C" }
    ],
    sizes: ["S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];
