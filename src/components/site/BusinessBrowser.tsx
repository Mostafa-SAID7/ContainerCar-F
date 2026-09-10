import { useMemo, useState } from "react";
import { Clock, Users, Gauge, Heart } from "lucide-react";
import { businesses, type BusinessCategory } from "@/data/businesses";
import { budgetFit, formatEGP } from "@/lib/business-utils";

const categories: (BusinessCategory | "All")[] = [
  "All",
  "Food",
  "Coffee & Drinks",
  "Services",
  "Retail",
];

const budgetSteps = [150000, 250000, 350000, 500000];

export function BusinessBrowser() {
  const [category, setCategory] = useState<BusinessCategory | "All">("All");
  const [budget, setBudget] = useState<number>(500000);
  const [saved, setSaved] = useState<string[]>([]);

  const list = useMemo(
    () =>
      businesses
        .filter((b) => category === "All" || b.category === category)
        .sort((a, b) => a.investment - b.investment),
    [category],
  );

  const toggleSaved = (id: string) =>
    setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <section id="browse" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Browse container businesses
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Every model shows the full investment, setup time and staffing so you can
            judge fit before committing.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-1.5">
          {budgetSteps.map((b) => (
            <button
              key={b}
              onClick={() => setBudget(b)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                budget === b
                  ? "bg-brand text-brand-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ≤ {Math.round(b / 1000)}K
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              category === c
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((b) => {
          const fit = budgetFit(budget, b.investment);
          return (
            <article
              key={b.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={b.image}
                  alt={b.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  onClick={() => toggleSaved(b.id)}
                  aria-label={saved.includes(b.id) ? `Unsave ${b.name}` : `Save ${b.name}`}
                  className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-background/90 text-foreground backdrop-blur"
                >
                  <Heart
                    className={`size-4 ${saved.includes(b.id) ? "fill-brand text-brand" : ""}`}
                  />
                </button>
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  {b.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground">{b.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {b.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-xs">
                  <div>
                    <dt className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="size-3.5" /> Setup
                    </dt>
                    <dd className="mt-1 font-semibold text-foreground">{b.setupDays} days</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1 text-muted-foreground">
                      <Users className="size-3.5" /> Staff
                    </dt>
                    <dd className="mt-1 font-semibold text-foreground">
                      {b.staffMin}–{b.staffMax}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1 text-muted-foreground">
                      <Gauge className="size-3.5" /> Level
                    </dt>
                    <dd className="mt-1 font-semibold text-foreground">{b.complexity}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Total investment</p>
                    <p className="font-display text-lg font-bold text-foreground">
                      {formatEGP(b.investment)}
                    </p>
                  </div>
                  <span
                    className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${
                      fit.status === "within"
                        ? "bg-success-soft text-foreground"
                        : fit.status === "slightly-above"
                          ? "bg-brand-soft text-foreground"
                          : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {fit.label}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
