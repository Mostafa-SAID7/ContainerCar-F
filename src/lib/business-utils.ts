import type { Business } from "@/data/businesses";

export const formatEGP = (value: number) =>
  new Intl.NumberFormat("en-EG", { maximumFractionDigits: 0 }).format(value) + " EGP";

export const formatShort = (value: number) =>
  value >= 1000 ? `${Math.round(value / 1000)}K` : String(value);

export const sum = (lines: { amount: number }[]) => lines.reduce((t, l) => t + l.amount, 0);

export type BudgetStatus = "within" | "slightly-above" | "significantly-above";

export interface BudgetFit {
  percent: number;
  status: BudgetStatus;
  label: string;
}

export function budgetFit(budget: number, investment: number): BudgetFit {
  if (!budget) return { percent: 0, status: "within", label: "Set a budget" };
  if (investment <= budget) {
    const headroom = (budget - investment) / budget;
    const percent = Math.round(100 - headroom * 6);
    return { percent: Math.min(100, Math.max(90, percent)), status: "within", label: "Within budget" };
  }
  const over = (investment - budget) / budget;
  if (over <= 0.2) {
    return { percent: Math.round(100 - over * 130), status: "slightly-above", label: "Slightly above budget" };
  }
  return {
    percent: Math.max(35, Math.round(100 - over * 130)),
    status: "significantly-above",
    label: "Significantly above budget",
  };
}

export interface FitPreferences {
  budget: number;
  setupPreferenceDays?: number;
  staffAvailability?: number;
  locationType?: string;
  franchisePreference?: "Independent" | "Franchise" | "Any";
}

export interface FitBreakdown {
  total: number;
  parts: { label: string; score: number }[];
}

export function businessFit(business: Business, prefs: FitPreferences): FitBreakdown {
  const budgetScore = budgetFit(prefs.budget, business.investment).percent;

  const setupTarget = prefs.setupPreferenceDays ?? 60;
  const setupScore = Math.max(
    50,
    Math.min(100, Math.round(100 - Math.max(0, business.setupDays - setupTarget) * 1.2)),
  );

  const staffAvail = prefs.staffAvailability ?? business.staffMax;
  const staffScore = staffAvail >= business.staffMax ? 100 : Math.max(55, 100 - (business.staffMax - staffAvail) * 15);

  const locationScore =
    !prefs.locationType || prefs.locationType === "Any"
      ? 90
      : business.locations.includes(prefs.locationType)
        ? 100
        : 65;

  const complexityScore = business.complexity === "Low" ? 95 : business.complexity === "Medium" ? 80 : 68;

  const franchiseScore =
    !prefs.franchisePreference || prefs.franchisePreference === "Any"
      ? 90
      : prefs.franchisePreference === "Franchise"
        ? business.franchise
          ? 100
          : 60
        : 95;

  const parts = [
    { label: "Budget compatibility", score: budgetScore },
    { label: "Setup timeline", score: setupScore },
    { label: "Staff requirements", score: staffScore },
    { label: "Location compatibility", score: locationScore },
    { label: "Business complexity", score: complexityScore },
    { label: "Business model preference", score: franchiseScore },
  ];

  const total = Math.round(parts.reduce((t, p) => t + p.score, 0) / parts.length);
  return { total, parts };
}

export const DISCLAIMER =
  "Actual costs and business performance vary based on location, supplier pricing, operating model, demand, staffing, and other factors. ContainerCar does not guarantee profitability.";
