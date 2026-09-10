export interface SupplierProduct {
  name: string;
  startingPrice: number;
  leadTimeDays: number;
}

export interface Supplier {
  id: string;
  name: string;
  category: string;
  verified: boolean;
  location: string;
  rating: number;
  productCount: number;
  startingPrice: number;
  leadTime: string;
  minimumOrder: string;
  about: string;
  products: SupplierProduct[];
  supportedBusinesses: string[];
  reviews: { author: string; text: string; rating: number }[];
}

export const suppliers: Supplier[] = [
  {
    id: "cairo-coffee-equipment",
    name: "Cairo Coffee Equipment",
    category: "Coffee equipment",
    verified: true,
    location: "Nasr City, Cairo",
    rating: 4.8,
    productCount: 12,
    startingPrice: 4500,
    leadTime: "7–14 days",
    minimumOrder: "1 unit",
    about:
      "Importer and service provider for espresso machines, grinders, and brewing equipment, with on-site installation for mobile units.",
    products: [
      { name: "2-group espresso machine", startingPrice: 26000, leadTimeDays: 10 },
      { name: "Commercial grinder", startingPrice: 6000, leadTimeDays: 7 },
      { name: "Water filtration kit", startingPrice: 4500, leadTimeDays: 5 },
    ],
    supportedBusinesses: ["coffee-truck"],
    reviews: [
      { author: "Sample review — Ahmed S.", text: "Installation on the unit was handled in one day.", rating: 5 },
      { author: "Sample review — Nour M.", text: "Service visit came within the promised window.", rating: 4 },
    ],
  },
  {
    id: "masr-kitchen-co",
    name: "Masr Kitchen Co.",
    category: "Kitchen equipment",
    verified: true,
    location: "10th of Ramadan City",
    rating: 4.6,
    productCount: 28,
    startingPrice: 4000,
    leadTime: "10–21 days",
    minimumOrder: "1 unit",
    about:
      "Manufacturer of stainless steel cooking equipment, prep counters, and extraction systems sized for container kitchens.",
    products: [
      { name: "Flat-top grill", startingPrice: 28000, leadTimeDays: 14 },
      { name: "Double deep fryer", startingPrice: 18000, leadTimeDays: 12 },
      { name: "Stone gas oven", startingPrice: 45000, leadTimeDays: 21 },
    ],
    supportedBusinesses: ["burger-truck", "pizza-truck", "juice-truck"],
    reviews: [{ author: "Sample review — Mahmoud K.", text: "Build quality is solid for daily use.", rating: 5 }],
  },
  {
    id: "delta-cooling",
    name: "Delta Cooling Systems",
    category: "Refrigeration",
    verified: true,
    location: "Tanta, Gharbia",
    rating: 4.7,
    productCount: 16,
    startingPrice: 9000,
    leadTime: "5–12 days",
    minimumOrder: "1 unit",
    about: "Refrigeration and cold chain equipment with maintenance contracts across the Delta region.",
    products: [
      { name: "Under-counter refrigerator", startingPrice: 9000, leadTimeDays: 7 },
      { name: "Display chiller", startingPrice: 12000, leadTimeDays: 9 },
      { name: "Upright freezer", startingPrice: 16000, leadTimeDays: 10 },
    ],
    supportedBusinesses: ["coffee-truck", "burger-truck", "juice-truck", "pizza-truck"],
    reviews: [{ author: "Sample review — Sara A.", text: "Maintenance response was quick.", rating: 5 }],
  },
  {
    id: "nile-power-systems",
    name: "Nile Power Systems",
    category: "Generators",
    verified: true,
    location: "Giza",
    rating: 4.5,
    productCount: 9,
    startingPrice: 8000,
    leadTime: "3–10 days",
    minimumOrder: "1 unit",
    about: "Silent generators and power distribution panels configured for mobile business units.",
    products: [
      { name: "Silent generator 3kVA", startingPrice: 8000, leadTimeDays: 3 },
      { name: "Silent generator 5kVA", startingPrice: 12000, leadTimeDays: 5 },
      { name: "Silent generator 8kVA", startingPrice: 18000, leadTimeDays: 7 },
    ],
    supportedBusinesses: ["coffee-truck", "burger-truck", "juice-truck", "pizza-truck", "mobile-car-wash", "mobile-barber"],
    reviews: [{ author: "Sample review — Hossam R.", text: "Noise level is acceptable in residential areas.", rating: 4 }],
  },
  {
    id: "smartpos-egypt",
    name: "SmartPOS Egypt",
    category: "POS systems",
    verified: true,
    location: "Maadi, Cairo",
    rating: 4.9,
    productCount: 7,
    startingPrice: 5000,
    leadTime: "2–5 days",
    minimumOrder: "1 terminal",
    about: "Point-of-sale terminals, receipt printers, and inventory software with Arabic and English interfaces.",
    products: [
      { name: "Countertop POS terminal", startingPrice: 8000, leadTimeDays: 3 },
      { name: "Handheld POS", startingPrice: 5000, leadTimeDays: 2 },
      { name: "Receipt printer", startingPrice: 2200, leadTimeDays: 2 },
    ],
    supportedBusinesses: ["coffee-truck", "burger-truck", "juice-truck", "pizza-truck", "mobile-car-wash", "mobile-barber"],
    reviews: [{ author: "Sample review — Dina F.", text: "Setup and staff training were included.", rating: 5 }],
  },
  {
    id: "mobile-unit-builders",
    name: "Mobile Unit Builders",
    category: "Vehicle builders",
    verified: true,
    location: "Obour City",
    rating: 4.7,
    productCount: 11,
    startingPrice: 90000,
    leadTime: "25–45 days",
    minimumOrder: "1 unit",
    about: "Container conversion workshop producing service windows, insulated interiors, and electrical fit-outs.",
    products: [
      { name: "2.5m container unit", startingPrice: 90000, leadTimeDays: 25 },
      { name: "3m container unit", startingPrice: 150000, leadTimeDays: 35 },
      { name: "4m kitchen container unit", startingPrice: 165000, leadTimeDays: 45 },
    ],
    supportedBusinesses: ["coffee-truck", "mobile-car-wash", "mobile-barber"],
    reviews: [{ author: "Sample review — Karim T.", text: "Delivered close to the quoted timeline.", rating: 4 }],
  },
  {
    id: "delta-packaging",
    name: "Delta Packaging & Branding",
    category: "Branding & packaging",
    verified: false,
    location: "Mansoura, Dakahlia",
    rating: 4.3,
    productCount: 24,
    startingPrice: 1200,
    leadTime: "5–15 days",
    minimumOrder: "500 units",
    about: "Printed cups, boxes, vehicle wraps, and signage produced for mobile food and service businesses.",
    products: [
      { name: "Branded cups (1000 pcs)", startingPrice: 3500, leadTimeDays: 7 },
      { name: "Vehicle wrap", startingPrice: 12000, leadTimeDays: 12 },
      { name: "Illuminated menu board", startingPrice: 6500, leadTimeDays: 10 },
    ],
    supportedBusinesses: ["coffee-truck", "burger-truck", "juice-truck", "pizza-truck", "mobile-barber"],
    reviews: [{ author: "Sample review — Youssef H.", text: "Print quality was good, timeline slipped slightly.", rating: 4 }],
  },
];

export const supplierCategories = [
  "Vehicle builders",
  "Kitchen equipment",
  "Coffee equipment",
  "Refrigeration",
  "Generators",
  "POS systems",
  "Branding & packaging",
];
