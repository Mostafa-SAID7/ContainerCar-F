import { DISCLAIMER } from "@/lib/business-utils";

const steps = [
  {
    title: "Set your budget",
    body: "Pick a spending range and see which container models fit comfortably and which stretch you.",
  },
  {
    title: "Compare the real numbers",
    body: "Investment breakdown, setup time, staffing, operating cost and equipment lists for every model.",
  },
  {
    title: "Choose independent or franchise",
    body: "Run your own brand, or join an established one with training, recipes and supplier contracts.",
  },
  {
    title: "Connect with suppliers",
    body: "Request quotes from verified equipment and fit-out partners with published lead times.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-surface-foreground sm:text-4xl">
          How it works
        </h2>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="font-display text-4xl font-extrabold text-brand">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-surface-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-surface-foreground/70">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-14 max-w-3xl border-t border-white/12 pt-6 text-xs leading-relaxed text-surface-foreground/55">
          {DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
