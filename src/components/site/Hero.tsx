import { ArrowRight, ShieldCheck, Timer, Wallet } from "lucide-react";
import heroImage from "@/assets/hero-container-business.jpg";
import { businesses } from "@/data/businesses";
import { suppliers } from "@/data/suppliers";
import { franchises } from "@/data/franchises";
import { formatEGP } from "@/lib/business-utils";

const minInvestment = Math.min(...businesses.map((b) => b.investment));

const stats = [
  { icon: Wallet, label: "Starting from", value: formatEGP(minInvestment) },
  { icon: Timer, label: "Fastest setup", value: `${Math.min(...businesses.map((b) => b.setupDays))} days` },
  { icon: ShieldCheck, label: "Verified suppliers", value: `${suppliers.filter((s) => s.verified).length}` },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-surface">
      <img
        src={heroImage}
        alt="Container business unit ready for operation"
        className="absolute inset-0 size-full object-cover opacity-25"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/40" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-surface-foreground">
          {businesses.length} container business models · {franchises.length} franchise brands
        </span>

        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold leading-[1.03] tracking-tight text-surface-foreground">
          Start a container business without guessing the numbers.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-surface-foreground/75">
          Compare investment, setup time, staffing and equipment for ready-to-run mobile
          units — then connect with verified suppliers and franchise brands.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#browse"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Browse businesses <ArrowRight className="size-4" />
          </a>
          <a
            href="#franchises"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-surface-foreground transition-colors hover:bg-white/10"
          >
            See franchise brands
          </a>
        </div>

        <dl className="mt-14 grid max-w-2xl gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/12 bg-white/[0.06] px-5 py-4"
            >
              <s.icon className="size-5 text-brand" strokeWidth={1.75} />
              <dt className="mt-3 text-xs uppercase tracking-wide text-surface-foreground/60">
                {s.label}
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-surface-foreground">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
