/**
 * RIM STUDIO — Product catalogue
 * Sourced from thewheelcartel.co.za only. No invented products or prices.
 */

const PRODUCTS = [
  {
    id: "twc-11222",
    name: "22” Forged Satin Black Multi-Spoke Land Rover",
    category: "mags",
    price: 70000,
    wasPrice: 180000,
    size: "22\"",
    boltPattern: "5/120",
    quantity: "Set of 5",
    finish: "Satin Black",
    brandFit: "Range Rover Sport, Defender, Vogue, Discovery",
    description: "A bold, modern forged alloy with a sharp multi-spoke pattern and deep satin black finish. Full set of 5 (rare). Stronger and lighter than cast wheels.",
    tag: "SALE",
    featured: true,
    image: "images/products/twc-11222.jpg"
  },
  {
    id: "twc-11555",
    name: "22″ Range Rover Vogue Turbine Style – Gloss Black",
    category: "mags",
    price: 40000,
    size: "22\"",
    boltPattern: "5×120",
    quantity: "Set of 4",
    finish: "Gloss Black",
    brandFit: "Range Rover, Defender, Discovery, Vogue",
    description: "Premium 22″ turbine-style wheels finished in gloss black. Clean OEM+ look that transforms stance and presence.",
    featured: true,
    image: "images/products/twc-11555.jpg"
  },
  {
    id: "twc-11332",
    name: "20″ Audi RS6 Style Gloss Black Wheels & Tyres",
    category: "mags",
    price: 27000,
    size: "20\"",
    boltPattern: "—",
    quantity: "Set of 4 + tyres",
    finish: "Gloss Black",
    brandFit: "Audi A4, A5, A6, A7, A8, S5, Q3, Q5, Q7",
    description: "20″ Audi RS6-style gloss black wheels supplied with tyres. Aggressive concave profile with premium finish.",
    featured: true,
    image: "images/products/twc-11332.jpg"
  },
  {
    id: "twc-11327",
    name: "20″ OEM Nissan Skyline GTR – Bronze Finish",
    category: "mags",
    price: 28000,
    size: "20\"",
    boltPattern: "—",
    quantity: "Set of 4",
    finish: "Bronze",
    brandFit: "Nissan Skyline GT-R (OEM)",
    description: "Genuine OEM Nissan Skyline GTR wheels finished in sprayed bronze. Rare and distinctive.",
    image: "images/products/twc-11327.jpg"
  },
  {
    id: "twc-11323",
    name: "22″ Limited Edition Bronze-Gold Audi Wheels",
    category: "mags",
    price: 28000,
    size: "22\"",
    boltPattern: "—",
    quantity: "Set of 4",
    finish: "Bronze-Gold",
    brandFit: "Audi Q5, Q7, Q8, RS6, RS7",
    description: "Limited edition 22″ wheels in bronze-gold finish. Distinctive colour that remains sophisticated.",
    featured: true,
    image: "images/products/twc-11323.jpg"
  },
  {
    id: "twc-11312",
    name: "17″ Black Multi-Spoke Bakkie Mags & Tyres",
    category: "mags",
    price: 19900,
    size: "17\"",
    boltPattern: "—",
    quantity: "Package with tyres",
    finish: "Black",
    brandFit: "Ford Ranger, Toyota Hilux, Isuzu D-Max, VW Amarok (bakkie)",
    description: "Complete 17″ black multi-spoke wheel and tyre package for bakkies. Practical and ready to fit.",
    image: "images/products/twc-11312.jpg"
  },
  {
    id: "twc-11304",
    name: "21″ Porsche Cayenne OEM + Continental Tyres",
    category: "mags",
    price: 47000,
    size: "21\"",
    boltPattern: "—",
    quantity: "Set of 4",
    finish: "OEM",
    brandFit: "Porsche Cayenne",
    description: "Genuine OEM Porsche Cayenne 21″ wheels complete with Continental tyres. Like-new condition.",
    featured: true,
    image: "images/products/twc-11304.jpg"
  },
  {
    id: "twc-11298",
    name: "19″ Satin Black Multi-Spoke (5×112) Mercedes Staggered",
    category: "mags",
    price: 22500,
    size: "19\"",
    boltPattern: "5×112",
    quantity: "Staggered set",
    finish: "Satin Black with Machined Face",
    brandFit: "Mercedes A-Class, C-Class, E-Class, V-Class, Vito, Viano",
    description: "Premium 19-inch satin black multi-spoke alloy wheels with gloss-machined face. Staggered fitment (8J front / 9J rear).",
    featured: true,
    image: "images/products/twc-11298.jpg"
  },
  {
    id: "twc-11268",
    name: "22” & 23” G63 Monoblock Wheels with Tyres",
    category: "mags",
    price: 65000,
    size: "22\" / 23\"",
    boltPattern: "—",
    quantity: "Package with tyres",
    finish: "G63 Style Monoblock",
    brandFit: "Mercedes G350, G400d, G500, G63 AMG (G-Class)",
    description: "G63-style monoblock wheels available in 22″ (from R65 000) and 23″ configurations, supplied with brand new tyres.",
    featured: true,
    image: "images/products/twc-11268.jpg"
  },
  {
    id: "twc-8891",
    name: "22” OEM G63 Wheels with Continental Tyres",
    category: "mags",
    price: 55000,
    wasPrice: 250000,
    size: "22\"",
    boltPattern: "—",
    quantity: "Set of 4 + tyres",
    finish: "OEM",
    brandFit: "Mercedes G-Class / G63",
    description: "Genuine OEM G63 wheels fitted with Continental tyres. Significant saving versus agent pricing.",
    tag: "SALE",
    featured: true,
    image: "images/products/twc-8891.jpg"
  },
  {
    id: "twc-11261",
    name: "23″ Urban Defender Mag Wheels and Pirelli Tyres",
    category: "mags",
    price: 50000,
    wasPrice: 150000,
    size: "23\"",
    boltPattern: "—",
    quantity: "Package with tyres",
    finish: "Urban Defender Style",
    brandFit: "Land Rover Defender, Range Rover",
    description: "23″ Urban Defender style mag wheels supplied with Pirelli tyres. Two designs available.",
    tag: "SALE",
    featured: true,
    image: "images/products/twc-11261.jpg"
  },
  {
    id: "twc-11219",
    name: "275/45/21 Fullrun Tyres – Special Offer",
    category: "tyres",
    price: 2350,
    wasPrice: 3800,
    size: "275/45 R21",
    boltPattern: "—",
    quantity: "Per tyre",
    finish: "—",
    brandFit: "Vehicles requiring 275/45 R21",
    description: "275/45 R21 Fullrun tyres on special offer. Quality option for this size.",
    tag: "SALE",
    image: "images/products/twc-11219.jpg"
  },
  {
    id: "nk-ar1-275-35-r19",
    name: "Nankang AR-1 Semi Slick – 275/35R19",
    category: "nankang",
    price: 5449,
    size: "275/35R19",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-275-35r19.jpg", featured: true
  },
  {
    id: "nk-ar1-235-35-r19",
    name: "Nankang AR-1 Semi Slick – 235/35R19",
    category: "nankang",
    price: 4599,
    size: "235/35R19",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-235-35r19.jpg", featured: true
  },
  {
    id: "nk-ar1-265-35-r18",
    name: "Nankang AR-1 Semi Slick – 265/35R18",
    category: "nankang",
    price: 4499,
    size: "265/35R18",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-265-35r18.jpg"
  },
  {
    id: "nk-ar1-245-40-r18",
    name: "Nankang AR-1 Semi Slick – 245/40R18",
    category: "nankang",
    price: 4399,
    size: "245/40R18",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-245-40r18.jpg"
  },
  {
    id: "nk-ar1-235-40-r18",
    name: "Nankang AR-1 Semi Slick – 235/40R18",
    category: "nankang",
    price: 4199,
    size: "235/40R18",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-235-40r18.jpg"
  },
  {
    id: "nk-ar1-235-45-r17",
    name: "Nankang AR-1 Semi Slick – 235/45R17",
    category: "nankang",
    price: 4049,
    size: "235/45R17",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-235-45r17.jpg"
  },
  {
    id: "nk-ar1-225-45-r17",
    name: "Nankang AR-1 Semi Slick – 225/45R17",
    category: "nankang",
    price: 3899,
    size: "225/45R17",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-225-45r17.jpg"
  },
  {
    id: "nk-ar1-225-45-r15",
    name: "Nankang AR-1 Semi Slick – 225/45R15",
    category: "nankang",
    price: 3849,
    size: "225/45R15",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-225-45r15.jpg"
  },
  {
    id: "nk-ar1-205-50-r15",
    name: "Nankang AR-1 Semi Slick – 205/50R15",
    category: "nankang",
    price: 3299,
    size: "205/50R15",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-205-50r15.jpg"
  },
  {
    id: "nk-ar1-195-50-r15",
    name: "Nankang AR-1 Semi Slick – 195/50R15",
    category: "nankang",
    price: 2649,
    size: "195/50R15",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-195-50r15.jpg"
  },
  {
    id: "nk-ar1-205-60-r13",
    name: "Nankang AR-1 Semi Slick – 205/60R13",
    category: "nankang",
    price: 2899, wasPrice: 3150,
    size: "205/60R13",
    finish: "Road Legal Semi-Slick",
    brandFit: "Track days, club racing, time attack, performance road",
    description: "Nankang AR-1 road-legal semi-slick motorsport tyre. Track-proven dry grip and precision steering response.",
    image: "images/nankang/ar1-205-60r13.jpg", tag: "SALE"
  }
];





function formatZAR(n) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(n);
}

function getProductById(id) {
  return PRODUCTS.find(function (p) { return p.id === id; }) || null;
}

function getProductsByCategory(cat) {
  if (cat === "mags") return PRODUCTS.filter(function (p) { return p.category === "mags"; });
  if (cat === "tyres") return PRODUCTS.filter(function (p) { return p.category === "tyres"; });
  if (cat === "nankang") return PRODUCTS.filter(function (p) { return p.category === "nankang"; });
  return PRODUCTS.slice();
}

function getFeaturedProducts(limit) {
  var featured = PRODUCTS.filter(function (p) { return p.featured; });
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}
