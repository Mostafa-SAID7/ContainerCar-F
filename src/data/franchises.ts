export interface Franchise {
  id: string;
  brand: string;
  businessId: string;
  category: string;
  description: string;
  investment: number;
  fee: number;
  royalty: number;
  setupDays: number;
  citiesAvailable: string[];
  training: string;
  support: string;
}

export const franchises: Franchise[] = [
  {
    id: "rota-coffee",
    brand: "Rota Coffee",
    businessId: "coffee-truck",
    category: "Coffee & Drinks",
    description:
      "A specialty coffee brand operating container units near universities and business districts, with a fixed menu and supplier contracts already in place.",
    investment: 280000,
    fee: 40000,
    royalty: 5,
    setupDays: 45,
    citiesAvailable: ["Tanta", "Cairo", "Giza", "Mansoura"],
    training: "2 weeks barista and operations training included",
    support: "Ongoing operations support, monthly quality visits",
  },
  {
    id: "shawa-burger",
    brand: "Shawa Burger",
    businessId: "burger-truck",
    category: "Food",
    description:
      "A grilled-burger brand for high-volume evening locations, supplying recipes, packaging, and a central purchasing programme.",
    investment: 350000,
    fee: 55000,
    royalty: 6,
    setupDays: 60,
    citiesAvailable: ["Cairo", "Alexandria", "Giza"],
    training: "3 weeks kitchen and food-safety training included",
    support: "Central purchasing, marketing calendar, area manager visits",
  },
  {
    id: "asir-fresh",
    brand: "Asir Fresh",
    businessId: "juice-truck",
    category: "Coffee & Drinks",
    description:
      "A fresh juice brand focused on university campuses and summer event calendars with a short setup cycle.",
    investment: 195000,
    fee: 25000,
    royalty: 4,
    setupDays: 35,
    citiesAvailable: ["Tanta", "Mansoura", "Alexandria"],
    training: "1 week preparation and hygiene training included",
    support: "Seasonal menu updates and event placement assistance",
  },
  {
    id: "lamsa-wash",
    brand: "Lamsa Mobile Wash",
    businessId: "mobile-car-wash",
    category: "Services",
    description:
      "A low-water car care brand serving residential compounds and office parking through a booking app.",
    investment: 230000,
    fee: 30000,
    royalty: 5,
    setupDays: 30,
    citiesAvailable: ["Cairo", "Giza", "Tanta"],
    training: "1 week technician and booking system training",
    support: "Booking platform, compound access agreements",
  },
];
