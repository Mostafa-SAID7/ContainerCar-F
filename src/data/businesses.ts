export type BusinessCategory = "Food" | "Coffee & Drinks" | "Services" | "Retail";
export type BusinessModel = "Independent" | "Franchise" | "Franchise-ready" | "Turnkey";
export type Complexity = "Low" | "Medium" | "High";

export interface CostLine {
  label: string;
  amount: number;
}

export interface EquipmentItem {
  name: string;
  quantity: number;
  price: number;
  supplierId: string;
  included: boolean;
}

export interface StaffRole {
  role: string;
  count: number;
}

export interface FranchiseTerms {
  brand: string;
  fee: number;
  royalty: number;
  contractYears: number;
  trainingIncluded: boolean;
  brandingIncluded: boolean;
  operationalSupport: boolean;
}

export interface Business {
  id: string;
  name: string;
  category: BusinessCategory;
  tagline: string;
  description: string;
  investment: number;
  setupDays: number;
  staffMin: number;
  staffMax: number;
  operatingCost: number;
  complexity: Complexity;
  models: BusinessModel[];
  badges: string[];
  image: string;
  investmentBreakdown: CostLine[];
  setupSections: { title: string; items: string[] }[];
  equipment: EquipmentItem[];
  locations: string[];
  locationRequirements: {
    space: string;
    electricity: string;
    water: string;
    access: string;
    footTraffic: string;
    restrictions: string;
  };
  staff: {
    roles: StaffRole[];
    experience: string;
    shifts: string;
    monthlyCost: number;
  };
  operatingBreakdown: CostLine[];
  franchise?: FranchiseTerms;
  supplierIds: string[];
}

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=1200&q=70`;

export const businesses: Business[] = [
  {
    id: "coffee-truck",
    name: "Coffee Truck",
    category: "Coffee & Drinks",
    tagline: "Specialty coffee served from a compact mobile unit.",
    description:
      "A container-built coffee unit designed for high-footfall spots such as universities and business districts. Compact footprint, fast service cycle, and an entry-level friendly team of two to three baristas.",
    investment: 280000,
    setupDays: 45,
    staffMin: 2,
    staffMax: 3,
    operatingCost: 42000,
    complexity: "Medium",
    models: ["Independent", "Franchise", "Turnkey"],
    badges: ["Popular", "Franchise Available", "Turnkey"],
    image: img("photo-1554118811-1e0d58224f24"),
    investmentBreakdown: [
      { label: "Container vehicle", amount: 150000 },
      { label: "Equipment", amount: 65000 },
      { label: "Branding", amount: 20000 },
      { label: "POS system", amount: 8000 },
      { label: "Initial inventory", amount: 15000 },
      { label: "Licensing / setup", amount: 12000 },
    ],
    setupSections: [
      {
        title: "Vehicle",
        items: ["3m container unit", "Insulated interior", "Service window", "Electrical panel + wiring"],
      },
      {
        title: "Equipment",
        items: ["Espresso machine", "Under-counter refrigeration", "Silent generator", "Water tank + sink"],
      },
      { title: "Branding", items: ["Exterior wrap", "Menu board", "Illuminated signage", "Staff uniforms"] },
      { title: "Launch", items: ["Opening inventory", "Cups & packaging", "Barista training", "2 weeks setup support"] },
    ],
    equipment: [
      { name: "Espresso machine (2 group)", quantity: 1, price: 26000, supplierId: "cairo-coffee-equipment", included: true },
      { name: "Coffee grinder", quantity: 2, price: 6000, supplierId: "cairo-coffee-equipment", included: true },
      { name: "Under-counter refrigerator", quantity: 1, price: 9000, supplierId: "delta-cooling", included: true },
      { name: "Water tank (120L)", quantity: 1, price: 2500, supplierId: "mobile-unit-builders", included: true },
      { name: "Sink unit", quantity: 1, price: 3000, supplierId: "mobile-unit-builders", included: true },
      { name: "Silent generator 5kVA", quantity: 1, price: 12000, supplierId: "nile-power-systems", included: true },
      { name: "POS terminal", quantity: 1, price: 8000, supplierId: "smartpos-egypt", included: true },
      { name: "Storage shelving", quantity: 3, price: 1500, supplierId: "mobile-unit-builders", included: false },
    ],
    locations: ["Universities", "Business districts", "Shopping areas", "Residential communities", "Events"],
    locationRequirements: {
      space: "12–16 m² including customer queue area",
      electricity: "5kVA supply or on-board generator",
      water: "Clean water tank, 120L per shift",
      access: "Paved parking with vehicle access for daily positioning",
      footTraffic: "High — 800+ passers-by per day recommended",
      restrictions: "Municipal street-vending permit required; noise limits near residential zones",
    },
    staff: {
      roles: [
        { role: "Barista", count: 2 },
        { role: "Cashier", count: 1 },
      ],
      experience: "Entry-level friendly with 1 week of training",
      shifts: "Two shifts, 8 hours each, 6 days per week",
      monthlyCost: 22000,
    },
    operatingBreakdown: [
      { label: "Staff", amount: 22000 },
      { label: "Rent / location", amount: 8000 },
      { label: "Utilities", amount: 3500 },
      { label: "Supplies", amount: 6500 },
      { label: "Maintenance", amount: 2000 },
    ],
    franchise: {
      brand: "Rota Coffee",
      fee: 40000,
      royalty: 5,
      contractYears: 3,
      trainingIncluded: true,
      brandingIncluded: true,
      operationalSupport: true,
    },
    supplierIds: ["cairo-coffee-equipment", "nile-power-systems", "smartpos-egypt", "delta-packaging"],
  },
  {
    id: "burger-truck",
    name: "Burger Truck",
    category: "Food",
    tagline: "Full kitchen unit for high-volume street food.",
    description:
      "A fully equipped mobile kitchen for grilled food service. Higher investment and a larger team, suited to events, corniche locations, and evening high-traffic areas.",
    investment: 350000,
    setupDays: 60,
    staffMin: 3,
    staffMax: 4,
    operatingCost: 60000,
    complexity: "High",
    models: ["Independent", "Franchise"],
    badges: ["Franchise Available", "High Volume"],
    image: img("photo-1565299624946-b28f40a0ae38"),
    investmentBreakdown: [
      { label: "Container vehicle", amount: 165000 },
      { label: "Kitchen equipment", amount: 105000 },
      { label: "Branding", amount: 24000 },
      { label: "POS system", amount: 9000 },
      { label: "Initial inventory", amount: 25000 },
      { label: "Licensing / setup", amount: 18000 },
    ],
    setupSections: [
      { title: "Vehicle", items: ["4m container unit", "Stainless interior", "Extraction hood", "Gas + electrical system"] },
      { title: "Equipment", items: ["Flat-top grill", "Deep fryer", "Freezer + chiller", "Generator 8kVA"] },
      { title: "Branding", items: ["Exterior wrap", "Backlit menu board", "Signage", "Uniforms"] },
      { title: "Launch", items: ["Opening inventory", "Packaging", "Kitchen training", "Food safety onboarding"] },
    ],
    equipment: [
      { name: "Flat-top grill", quantity: 1, price: 28000, supplierId: "masr-kitchen-co", included: true },
      { name: "Double deep fryer", quantity: 1, price: 18000, supplierId: "masr-kitchen-co", included: true },
      { name: "Upright freezer", quantity: 1, price: 16000, supplierId: "delta-cooling", included: true },
      { name: "Chiller counter", quantity: 1, price: 14000, supplierId: "delta-cooling", included: true },
      { name: "Extraction hood", quantity: 1, price: 11000, supplierId: "masr-kitchen-co", included: true },
      { name: "Generator 8kVA", quantity: 1, price: 18000, supplierId: "nile-power-systems", included: true },
      { name: "POS terminal", quantity: 1, price: 9000, supplierId: "smartpos-egypt", included: true },
    ],
    locations: ["Business districts", "Events", "Shopping areas", "Gas stations"],
    locationRequirements: {
      space: "18–22 m² including service queue",
      electricity: "8kVA supply or on-board generator",
      water: "200L clean water + grey water tank",
      access: "Paved area with truck turning space",
      footTraffic: "High — evening peak locations recommended",
      restrictions: "Food handling licence and gas safety inspection required",
    },
    staff: {
      roles: [
        { role: "Grill cook", count: 2 },
        { role: "Prep assistant", count: 1 },
        { role: "Cashier", count: 1 },
      ],
      experience: "At least one experienced cook recommended",
      shifts: "Two shifts, evening peak weighted",
      monthlyCost: 34000,
    },
    operatingBreakdown: [
      { label: "Staff", amount: 34000 },
      { label: "Rent / location", amount: 10000 },
      { label: "Utilities", amount: 5000 },
      { label: "Supplies", amount: 8000 },
      { label: "Maintenance", amount: 3000 },
    ],
    franchise: {
      brand: "Shawa Burger",
      fee: 55000,
      royalty: 6,
      contractYears: 4,
      trainingIncluded: true,
      brandingIncluded: true,
      operationalSupport: true,
    },
    supplierIds: ["masr-kitchen-co", "delta-cooling", "nile-power-systems", "delta-packaging"],
  },
  {
    id: "mobile-car-wash",
    name: "Mobile Car Wash",
    category: "Services",
    tagline: "Waterless and low-water washing at the customer's location.",
    description:
      "A service business with low inventory needs and a fast setup. The unit travels to compounds, office parking, and malls to serve customers where their cars already are.",
    investment: 220000,
    setupDays: 30,
    staffMin: 2,
    staffMax: 2,
    operatingCost: 28000,
    complexity: "Low",
    models: ["Independent", "Turnkey", "Franchise-ready"],
    badges: ["Fast Setup", "Budget Friendly", "Turnkey"],
    image: img("photo-1607860108855-64acf2078ed9"),
    investmentBreakdown: [
      { label: "Service vehicle", amount: 135000 },
      { label: "Washing equipment", amount: 42000 },
      { label: "Branding", amount: 15000 },
      { label: "POS system", amount: 6000 },
      { label: "Initial supplies", amount: 10000 },
      { label: "Licensing / setup", amount: 8000 },
    ],
    setupSections: [
      { title: "Vehicle", items: ["Compact service van", "Shelving interior", "Water tank mount", "12V electrical system"] },
      { title: "Equipment", items: ["High-pressure washer", "Vacuum system", "Water recovery mat", "Generator 3kVA"] },
      { title: "Branding", items: ["Vehicle wrap", "Service price board", "Uniforms"] },
      { title: "Launch", items: ["Chemicals and detailing supplies", "Technician training", "Booking setup"] },
    ],
    equipment: [
      { name: "High-pressure washer", quantity: 1, price: 14000, supplierId: "mobile-unit-builders", included: true },
      { name: "Industrial vacuum", quantity: 1, price: 8000, supplierId: "mobile-unit-builders", included: true },
      { name: "Water tank (400L)", quantity: 1, price: 6000, supplierId: "mobile-unit-builders", included: true },
      { name: "Generator 3kVA", quantity: 1, price: 8000, supplierId: "nile-power-systems", included: true },
      { name: "Detailing kit", quantity: 2, price: 3000, supplierId: "delta-packaging", included: true },
      { name: "POS terminal", quantity: 1, price: 6000, supplierId: "smartpos-egypt", included: false },
    ],
    locations: ["Residential communities", "Business districts", "Shopping areas", "Gas stations"],
    locationRequirements: {
      space: "2 parking bays",
      electricity: "3kVA generator, no fixed supply needed",
      water: "400L on-board tank, refilled daily",
      access: "Vehicle access to parking levels",
      footTraffic: "Not traffic dependent — booking driven",
      restrictions: "Compound and mall management approval required",
    },
    staff: {
      roles: [
        { role: "Wash technician", count: 2 },
      ],
      experience: "Entry-level friendly, 3 days of training",
      shifts: "One shift, 9 hours, 6 days per week",
      monthlyCost: 14000,
    },
    operatingBreakdown: [
      { label: "Staff", amount: 14000 },
      { label: "Rent / location", amount: 5000 },
      { label: "Utilities", amount: 2000 },
      { label: "Supplies", amount: 5000 },
      { label: "Maintenance", amount: 2000 },
    ],
    supplierIds: ["mobile-unit-builders", "nile-power-systems", "smartpos-egypt"],
  },
  {
    id: "juice-truck",
    name: "Juice Truck",
    category: "Coffee & Drinks",
    tagline: "Fresh juice and smoothies with a short setup cycle.",
    description:
      "A light beverage unit with simple equipment and a two-person team. Strong fit for universities, corniche walkways, and summer event calendars.",
    investment: 190000,
    setupDays: 35,
    staffMin: 2,
    staffMax: 2,
    operatingCost: 35000,
    complexity: "Low",
    models: ["Independent", "Turnkey"],
    badges: ["Budget Friendly", "Fast Setup"],
    image: img("photo-1600271886742-f049cd451bba"),
    investmentBreakdown: [
      { label: "Container vehicle", amount: 110000 },
      { label: "Equipment", amount: 42000 },
      { label: "Branding", amount: 15000 },
      { label: "POS system", amount: 6000 },
      { label: "Initial inventory", amount: 10000 },
      { label: "Licensing / setup", amount: 7000 },
    ],
    setupSections: [
      { title: "Vehicle", items: ["2.5m container unit", "Washable interior", "Service window", "Electrical panel"] },
      { title: "Equipment", items: ["Commercial juicers", "Blenders", "Display chiller", "Generator 4kVA"] },
      { title: "Branding", items: ["Exterior wrap", "Menu board", "Uniforms"] },
      { title: "Launch", items: ["Opening fruit inventory", "Cups and packaging", "Team training"] },
    ],
    equipment: [
      { name: "Commercial citrus juicer", quantity: 2, price: 7000, supplierId: "masr-kitchen-co", included: true },
      { name: "Heavy-duty blender", quantity: 2, price: 4500, supplierId: "masr-kitchen-co", included: true },
      { name: "Display chiller", quantity: 1, price: 12000, supplierId: "delta-cooling", included: true },
      { name: "Ice machine", quantity: 1, price: 9000, supplierId: "delta-cooling", included: true },
      { name: "Generator 4kVA", quantity: 1, price: 10000, supplierId: "nile-power-systems", included: true },
      { name: "POS terminal", quantity: 1, price: 6000, supplierId: "smartpos-egypt", included: true },
    ],
    locations: ["Universities", "Shopping areas", "Residential communities", "Events"],
    locationRequirements: {
      space: "10–14 m²",
      electricity: "4kVA supply or generator",
      water: "100L clean water per shift",
      access: "Paved parking with daily access",
      footTraffic: "Medium to high, seasonal peaks in summer",
      restrictions: "Street-vending permit; cold chain compliance for fruit storage",
    },
    staff: {
      roles: [
        { role: "Juice preparer", count: 1 },
        { role: "Cashier", count: 1 },
      ],
      experience: "Entry-level friendly",
      shifts: "One long shift with weekend cover",
      monthlyCost: 15000,
    },
    operatingBreakdown: [
      { label: "Staff", amount: 15000 },
      { label: "Rent / location", amount: 7000 },
      { label: "Utilities", amount: 3000 },
      { label: "Supplies", amount: 8000 },
      { label: "Maintenance", amount: 2000 },
    ],
    supplierIds: ["masr-kitchen-co", "delta-cooling", "delta-packaging", "smartpos-egypt"],
  },
  {
    id: "pizza-truck",
    name: "Pizza Truck",
    category: "Food",
    tagline: "Stone-oven pizza built into a mobile kitchen.",
    description:
      "A mid-to-high investment food unit centred on a stone oven. Works well for events, weekend markets, and residential compound catering.",
    investment: 320000,
    setupDays: 55,
    staffMin: 3,
    staffMax: 4,
    operatingCost: 52000,
    complexity: "High",
    models: ["Independent", "Franchise-ready"],
    badges: ["Events Ready"],
    image: img("photo-1513104890138-7c749659a591"),
    investmentBreakdown: [
      { label: "Container vehicle", amount: 160000 },
      { label: "Oven & equipment", amount: 90000 },
      { label: "Branding", amount: 22000 },
      { label: "POS system", amount: 8000 },
      { label: "Initial inventory", amount: 22000 },
      { label: "Licensing / setup", amount: 15000 },
    ],
    setupSections: [
      { title: "Vehicle", items: ["4m container unit", "Heat-rated interior", "Extraction system", "Gas installation"] },
      { title: "Equipment", items: ["Stone gas oven", "Dough chiller", "Prep counter", "Generator 6kVA"] },
      { title: "Branding", items: ["Exterior wrap", "Menu board", "Signage", "Uniforms"] },
      { title: "Launch", items: ["Opening inventory", "Boxes and packaging", "Dough training"] },
    ],
    equipment: [
      { name: "Stone gas oven", quantity: 1, price: 45000, supplierId: "masr-kitchen-co", included: true },
      { name: "Refrigerated prep counter", quantity: 1, price: 18000, supplierId: "delta-cooling", included: true },
      { name: "Dough mixer", quantity: 1, price: 12000, supplierId: "masr-kitchen-co", included: true },
      { name: "Generator 6kVA", quantity: 1, price: 15000, supplierId: "nile-power-systems", included: true },
      { name: "POS terminal", quantity: 1, price: 8000, supplierId: "smartpos-egypt", included: true },
    ],
    locations: ["Events", "Residential communities", "Shopping areas", "Business districts"],
    locationRequirements: {
      space: "18–20 m²",
      electricity: "6kVA supply or generator",
      water: "150L clean water per shift",
      access: "Paved area with turning space",
      footTraffic: "Medium to high, evening weighted",
      restrictions: "Food handling licence, gas safety inspection, extraction compliance",
    },
    staff: {
      roles: [
        { role: "Pizza chef", count: 1 },
        { role: "Prep assistant", count: 2 },
        { role: "Cashier", count: 1 },
      ],
      experience: "Experienced pizza chef required",
      shifts: "Evening weighted, 6 days per week",
      monthlyCost: 30000,
    },
    operatingBreakdown: [
      { label: "Staff", amount: 30000 },
      { label: "Rent / location", amount: 9000 },
      { label: "Utilities", amount: 4500 },
      { label: "Supplies", amount: 6000 },
      { label: "Maintenance", amount: 2500 },
    ],
    supplierIds: ["masr-kitchen-co", "delta-cooling", "nile-power-systems", "delta-packaging"],
  },
  {
    id: "mobile-barber",
    name: "Mobile Barber",
    category: "Services",
    tagline: "A grooming studio built into a compact unit.",
    description:
      "A low-complexity service business with a small team and predictable supply costs. Operates on appointment cycles in residential compounds and business parks.",
    investment: 150000,
    setupDays: 25,
    staffMin: 1,
    staffMax: 2,
    operatingCost: 22000,
    complexity: "Low",
    models: ["Independent", "Turnkey"],
    badges: ["Budget Friendly", "Fast Setup"],
    image: img("photo-1503951914875-452162b0f3f1"),
    investmentBreakdown: [
      { label: "Container vehicle", amount: 90000 },
      { label: "Studio equipment", amount: 32000 },
      { label: "Branding", amount: 12000 },
      { label: "POS system", amount: 5000 },
      { label: "Initial supplies", amount: 6000 },
      { label: "Licensing / setup", amount: 5000 },
    ],
    setupSections: [
      { title: "Vehicle", items: ["2.5m container unit", "Climate control", "Mirror wall", "Electrical panel"] },
      { title: "Equipment", items: ["Barber chairs", "Wash basin", "Water heater", "Generator 3kVA"] },
      { title: "Branding", items: ["Exterior wrap", "Signage", "Uniforms"] },
      { title: "Launch", items: ["Grooming supplies", "Booking setup", "Team onboarding"] },
    ],
    equipment: [
      { name: "Barber chair", quantity: 2, price: 9000, supplierId: "mobile-unit-builders", included: true },
      { name: "Wash basin + heater", quantity: 1, price: 7000, supplierId: "mobile-unit-builders", included: true },
      { name: "Clipper and tool set", quantity: 2, price: 3500, supplierId: "delta-packaging", included: true },
      { name: "Generator 3kVA", quantity: 1, price: 8000, supplierId: "nile-power-systems", included: true },
      { name: "POS terminal", quantity: 1, price: 5000, supplierId: "smartpos-egypt", included: false },
    ],
    locations: ["Residential communities", "Business districts", "Universities"],
    locationRequirements: {
      space: "8–10 m²",
      electricity: "3kVA generator or fixed supply",
      water: "80L clean water per day",
      access: "Parking bay with daily access",
      footTraffic: "Low dependency — appointment driven",
      restrictions: "Health and hygiene permit; compound management approval",
    },
    staff: {
      roles: [{ role: "Barber", count: 2 }],
      experience: "Experienced barber required",
      shifts: "One shift with weekend peak cover",
      monthlyCost: 12000,
    },
    operatingBreakdown: [
      { label: "Staff", amount: 12000 },
      { label: "Rent / location", amount: 5000 },
      { label: "Utilities", amount: 1800 },
      { label: "Supplies", amount: 2200 },
      { label: "Maintenance", amount: 1000 },
    ],
    supplierIds: ["mobile-unit-builders", "nile-power-systems", "delta-packaging"],
  },
];
