import { Container, Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Browse", href: "#browse" },
  { label: "Franchises", href: "#franchises" },
  { label: "Suppliers", href: "#suppliers" },
  { label: "How it works", href: "#how" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-brand text-brand-foreground">
            <Container className="size-5" strokeWidth={1.75} />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
            ContainerCar
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#browse"
            className="hidden rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Find your business
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2.5 text-foreground md:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border px-5 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-sm text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
