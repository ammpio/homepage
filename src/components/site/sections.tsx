import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Minus, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/* Shared building blocks for every content page.
   Bands alternate between white (bg-background) and soft grey (bg-secondary/35). */

export function Band({ tone = "white", className = "", children }: { tone?: "white" | "grey"; className?: string; children: ReactNode }) {
  return (
    <section className={`${tone === "grey" ? "bg-secondary" : "bg-background"} border-b border-border/70 py-16 md:py-24 ${className}`}>
      <div className="site-container">{children}</div>
    </section>
  );
}

export function PageHero({ eyebrow, title, highlight, titleEnd, intro, primary, secondary, aside }: {
  eyebrow?: string; title: string; highlight?: string; titleEnd?: string; intro: string;
  primary?: { label: string; to: string }; secondary?: { label: string; to: string }; aside?: ReactNode;
}) {
  return (
    <section className="border-b border-border/70 bg-background py-16 md:py-24">
      <div className={`site-container ${aside ? "grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]" : ""}`}>
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {title} {highlight && <span className="text-primary">{highlight}</span>} {titleEnd}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{intro}</p>
          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary && <Link to={primary.to} className="button button-primary">{primary.label}<ArrowRight className="size-4" /></Link>}
              {secondary && <Link to={secondary.to} className="button button-ghost">{secondary.label}</Link>}
            </div>
          )}
        </div>
        {aside}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, center = false }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-8 text-muted-foreground">{intro}</p>}
    </div>
  );
}

export type Feature = { title: string; text: string; icon?: LucideIcon; items?: string[] };

export function FeatureGrid({ features, columns = 3 }: { features: Feature[]; columns?: 2 | 3 | 4 }) {
  const cols = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";
  return (
    <div className={`mt-10 grid gap-5 ${cols}`}>
      {features.map(({ title, text, icon: Icon, items }) => (
        <article key={title} className="rounded-xl border border-border bg-card p-6">
          {Icon && <Icon className="size-5 text-primary" />}
          <h3 className="mt-4 text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
          {items && (
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

export function SplitFeature({ eyebrow, title, text, bullets, image, imageAlt, reverse = false }: {
  eyebrow?: string; title: string; text: string; bullets?: string[]; image?: string; imageAlt?: string; reverse?: boolean;
}) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{text}</p>
        {bullets && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => <li key={b} className="flex gap-3 text-sm leading-6"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{b}</li>)}
          </ul>
        )}
      </div>
      {image && <img src={image} alt={imageAlt ?? title} className="w-full rounded-xl border border-border bg-card shadow-sm" loading="lazy" />}
    </div>
  );
}

export function StatStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ value, label }) => (
        <div key={label} className="bg-card p-6">
          <p className="text-3xl font-semibold text-primary">{value}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{label}</p>
        </div>
      ))}
    </div>
  );
}

export function StepList({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="mt-10 grid gap-5 md:grid-cols-3">
      {steps.map(({ title, text }, i) => (
        <li key={title} className="rounded-xl border border-border bg-card p-6">
          <span className="text-xs font-semibold text-primary">0{i + 1}</span>
          <h3 className="mt-3 text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
        </li>
      ))}
    </ol>
  );
}

export function QuoteBand({ quote, author }: { quote: string; author?: string }) {
  return (
    <figure className="mx-auto max-w-3xl text-center">
      <blockquote className="text-2xl font-medium leading-relaxed sm:text-3xl">“{quote}”</blockquote>
      {author && <figcaption className="mt-5 text-sm text-muted-foreground">{author}</figcaption>}
    </figure>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
      {items.map(({ q, a }) => (
        <details key={q} className="group p-6">
          <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">{q}</summary>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{a}</p>
        </details>
      ))}
    </div>
  );
}

export type CompareRow = { feature: string; ammp: string | boolean; other: string | boolean };

export function CompareTable({ otherLabel, rows }: { otherLabel: string; rows: CompareRow[] }) {
  const cell = (v: string | boolean) =>
    typeof v === "boolean" ? (v ? <Check className="size-4 text-primary" /> : <Minus className="size-4 text-muted-foreground" />) : <span>{v}</span>;
  return (
    <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="border-b border-border bg-secondary/40">
          <tr><th className="p-4 font-semibold">Capability</th><th className="p-4 font-semibold text-primary">AMMP</th><th className="p-4 font-semibold">{otherLabel}</th></tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r) => (
            <tr key={r.feature}><td className="p-4 font-medium">{r.feature}</td><td className="p-4 text-muted-foreground">{cell(r.ammp)}</td><td className="p-4 text-muted-foreground">{cell(r.other)}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-muted-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground">{children}</div>;
}
