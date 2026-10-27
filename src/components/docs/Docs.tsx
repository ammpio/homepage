import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { groupByCategory } from "@/lib/docs-core";
import type { DocSummary } from "@/lib/docs.functions";

const ENGLISH_ONLY: Record<string, string> = {
  pt: "Esta documentação está disponível apenas em inglês.",
  es: "Esta documentación está disponible solo en inglés.",
};

/** Shown only to Portuguese/Spanish visitors; docs content itself is English-only. */
export function EnglishOnlyNote() {
  const { language } = useLanguage();
  const text = ENGLISH_ONLY[language];
  if (!text) return null;
  return (
    <p data-no-translate className="glass-soft mb-6 rounded-xl px-4 py-2 text-sm text-muted-foreground">
      {text}
    </p>
  );
}

export function formatDocDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export function filterDocs(docs: DocSummary[], q: string) {
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return docs;
  return docs.filter((d) => {
    const hay = `${d.title} ${d.description} ${d.category}`.toLowerCase();
    return words.every((w) => hay.includes(w));
  });
}

export function DocsSearchInput({ value, onChange, className = "" }: { value: string; onChange: (v: string) => void; className?: string }) {
  return (
    <label className={`relative block ${className}`}>
      <span className="sr-only">Search documentation</span>
      <Search aria-hidden className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search documentation"
        className="h-10 w-full rounded-xl border border-border bg-card pl-9 pr-3 text-sm outline-none focus:border-foreground/40"
      />
    </label>
  );
}

export function DocCards({ docs }: { docs: DocSummary[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {docs.map((d) => (
        <Link key={d.slug} to="/product/documentation/$slug" params={{ slug: d.slug }} className="glass-card group flex flex-col rounded-2xl p-5 transition-colors hover:border-foreground/30">
          <h3 className="font-display text-lg font-medium">{d.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{d.description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
            Read <ArrowRight className="size-4" />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function DocsSidebar({ docs, current }: { docs: DocSummary[]; current?: string }) {
  const [q, setQ] = useState("");
  const groups = useMemo(() => groupByCategory(filterDocs(docs, q)), [docs, q]);
  return (
    <nav aria-label="Documentation" data-no-translate className="text-sm">
      <DocsSearchInput value={q} onChange={setQ} className="mb-5" />
      {groups.length === 0 && <p className="text-muted-foreground">No pages match.</p>}
      {groups.map((g) => (
        <div key={g.category} className="mb-5">
          <p className="eyebrow mb-2">{g.category}</p>
          <ul className="space-y-1">
            {g.docs.map((d) => (
              <li key={d.slug}>
                <Link
                  to="/product/documentation/$slug"
                  params={{ slug: d.slug }}
                  aria-current={d.slug === current ? "page" : undefined}
                  className={`block rounded-lg px-3 py-1.5 ${d.slug === current ? "bg-muted font-medium text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function DocsToc({ headings }: { headings: { depth: 2 | 3; text: string; id: string }[] }) {
  if (!headings.length) return null;
  return (
    <nav aria-label="On this page" data-no-translate className="text-sm">
      <p className="eyebrow mb-2">On this page</p>
      <ul className="space-y-1.5">
        {headings.map((h) => (
          <li key={h.id} className={h.depth === 3 ? "pl-3" : ""}>
            <a href={`#${h.id}`} className="text-muted-foreground hover:text-foreground">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
