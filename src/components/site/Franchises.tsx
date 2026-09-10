import { MapPin, Percent, Banknote, GraduationCap } from "lucide-react";
import { franchises } from "@/data/franchises";
import { formatEGP } from "@/lib/business-utils";

export function Franchises() {
  return (
    <section id="franchises" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Franchise brands
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Established brands with recipes, training and supplier contracts already in place.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {franchises.map((f) => (
            <article
              key={f.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{f.brand}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {f.category}
                  </p>
                </div>
                <span className="rounded-md bg-brand-soft px-2.5 py-1 text-xs font-semibold text-foreground">
                  {f.setupDays} days setup
                </span>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{f.description}</p>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm sm:grid-cols-3">
                <div>
                  <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Banknote className="size-3.5" /> Investment
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">{formatEGP(f.investment)}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Percent className="size-3.5" /> Royalty
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">{f.royalty}%</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <GraduationCap className="size-3.5" /> Franchise fee
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">{formatEGP(f.fee)}</dd>
                </div>
              </dl>

              <p className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
                <MapPin className="mt-0.5 size-3.5 shrink-0" />
                {f.citiesAvailable.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
