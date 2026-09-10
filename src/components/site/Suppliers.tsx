import { BadgeCheck, MapPin, Star, Truck } from "lucide-react";
import { suppliers } from "@/data/suppliers";
import { formatEGP } from "@/lib/business-utils";

export function Suppliers() {
  return (
    <section id="suppliers" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Verified suppliers
      </h2>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Equipment, fit-out and fabrication partners with published lead times and starting
        prices.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {suppliers.map((s) => (
          <article
            key={s.id}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-foreground">{s.name}</h3>
              {s.verified && (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-success-soft px-2 py-1 text-[11px] font-semibold text-foreground">
                  <BadgeCheck className="size-3.5" /> Verified
                </span>
              )}
            </div>

            <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
              {s.category}
            </p>

            <p className="mt-4 line-clamp-3 text-sm text-muted-foreground">{s.about}</p>

            <ul className="mt-5 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="size-3.5" /> {s.location}
              </li>
              <li className="flex items-center gap-2">
                <Truck className="size-3.5" /> Lead time {s.leadTime}
              </li>
              <li className="flex items-center gap-2">
                <Star className="size-3.5 fill-warning text-warning" /> {s.rating} ·{" "}
                {s.productCount} products
              </li>
            </ul>

            <p className="mt-5 border-t border-border pt-4 text-sm">
              <span className="text-muted-foreground">From </span>
              <span className="font-display font-bold text-foreground">
                {formatEGP(s.startingPrice)}
              </span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
