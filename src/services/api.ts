/**
 * Service layer. All UI reads data through these functions so the mock data
 * source can later be swapped for the ASP.NET Core Web API
 * (/api/businesses, /api/suppliers, /api/franchises, ...) without touching
 * components.
 */
import { businesses, type Business } from "@/data/businesses";
import { suppliers, type Supplier } from "@/data/suppliers";
import { franchises, type Franchise } from "@/data/franchises";

const delay = <T,>(value: T, ms = 220): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

export const businessService = {
  list: () => delay(businesses),
  get: (id: string) => delay(businesses.find((b) => b.id === id) ?? null),
  byIds: (ids: string[]) => delay(ids.map((id) => businesses.find((b) => b.id === id)).filter(Boolean) as Business[]),
};

export const supplierService = {
  list: () => delay(suppliers),
  get: (id: string) => delay(suppliers.find((s) => s.id === id) ?? null),
  byIds: (ids: string[]) => delay(ids.map((id) => suppliers.find((s) => s.id === id)).filter(Boolean) as Supplier[]),
};

export const franchiseService = {
  list: () => delay(franchises),
  get: (id: string) => delay(franchises.find((f) => f.id === id) ?? null),
};

export interface SearchResult {
  type: "Business" | "Supplier" | "Franchise";
  id: string;
  title: string;
  subtitle: string;
  href: string;
}

export const searchService = {
  query: (term: string): SearchResult[] => {
    const q = term.trim().toLowerCase();
    if (!q) return [];
    const results: SearchResult[] = [];
    businesses.forEach((b) => {
      if ([b.name, b.category, b.tagline, ...b.locations].join(" ").toLowerCase().includes(q))
        results.push({ type: "Business", id: b.id, title: b.name, subtitle: b.category, href: `/businesses/${b.id}` });
    });
    franchises.forEach((f) => {
      if ([f.brand, f.category, f.description, ...f.citiesAvailable].join(" ").toLowerCase().includes(q))
        results.push({ type: "Franchise", id: f.id, title: f.brand, subtitle: `${f.category} franchise`, href: "/franchises" });
    });
    suppliers.forEach((s) => {
      if ([s.name, s.category, s.location, ...s.products.map((p) => p.name)].join(" ").toLowerCase().includes(q))
        results.push({ type: "Supplier", id: s.id, title: s.name, subtitle: s.category, href: `/suppliers/${s.id}` });
    });
    return results.slice(0, 12);
  },
};

export interface ApplicationDraft {
  businessId: string;
  budget: number;
  city: string;
  area: string;
  locationType: string;
  model: string;
  support: string[];
}

export interface BusinessApplication extends ApplicationDraft {
  id: string;
  reference: string;
  status: string;
  progress: number;
  createdAt: string;
}

export const applicationService = {
  submit: async (draft: ApplicationDraft): Promise<BusinessApplication> => {
    const reference = `CC-2026-${String(124 + Math.floor(Math.random() * 500)).padStart(5, "0")}`;
    return delay(
      {
        ...draft,
        id: reference,
        reference,
        status: "Request Submitted",
        progress: 12,
        createdAt: new Date().toISOString(),
      },
      500,
    );
  },
};
