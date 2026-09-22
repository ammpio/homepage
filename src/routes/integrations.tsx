import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bot, Cloud, HardDrive, Plug, Search, X, Zap } from "lucide-react";
import { Band, PageHero } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { BrandGrid } from "@/components/site/BrandGrid";
import { apiIntegrations, softwareAddons, edgeFeatures, type Brand } from "@/data/integrations";

export const Route = createFileRoute("/integrations")({
  head: () => ({ meta: [
    { title: "Integrations & Add-ons — AMMP" },
    { name: "description", content: "Connect any device, any brand. AMMP integrates with leading manufacturers through cloud-to-cloud APIs, plus AMMP Edge for non-API equipment, giving your AI coworkers one grounded view of every system." },
    { property: "og:title", content: "Integrations & Add-ons — AMMP" },
    { property: "og:description", content: "30+ integrations across inverters, meters, batteries, EMS and data services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const tabs = [
  { key: "api", label: "API integrations", short: "API", icon: Cloud },
  { key: "software", label: "Software add-ons", short: "Software", icon: Plug },
  { key: "edge", label: "AMMP Edge", short: "Edge", icon: HardDrive },
] as const;

function Page() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("api");
  const [query, setQuery] = useState("");

  const filter = (brands: Brand[]) => {
    const q = query.trim().toLowerCase();
    return q ? brands.filter((b) => b.name.toLowerCase().includes(q)) : brands;
  };
  const groups = [
    { title: "Inverters & hybrid systems", brands: filter(apiIntegrations.inverters) },
    { title: "Smart meters", brands: filter(apiIntegrations.meters) },
    { title: "Battery systems", brands: filter(apiIntegrations.batteries) },
    { title: "Energy management systems", brands: filter(apiIntegrations.energyManagementSystems) },
    { title: "Data services", brands: filter(apiIntegrations.dataServices) },
  ];
  const hasResults = groups.some((g) => g.brands.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Every system feeds the same"
        highlight="grounded context."
        intro="Connect any device, any brand. AMMP integrates with leading manufacturers through cloud-to-cloud APIs, plus AMMP Edge for non-API equipment, so your AI coworkers and your team work from the same unified data, not fragmented vendor portals."
        primary={{ label: "Contact sales", to: "/contact" }}
        secondary={{ label: "Try the demo", to: "/demo" }}
      />

      <Band tone="grey">
        <div className="mx-auto grid max-w-xl grid-cols-3 gap-1 rounded-lg border border-border bg-card p-1">
          {tabs.map(({ key, label, short, icon: Icon }) => (
            <button key={key} type="button" onClick={() => setTab(key)}
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors ${tab === key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}>
              <Icon className="size-4 shrink-0" />
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">{short}</span>
            </button>
          ))}
        </div>

        {tab === "api" && (
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="text-center">
              <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-primary/10"><Cloud className="size-8 text-primary" /></div>
              <h2 className="mt-4 text-2xl font-bold">Cloud-to-cloud API integrations</h2>
              <p className="mt-3 text-muted-foreground">AMMP connects directly to manufacturer cloud platforms, pulling data automatically without additional hardware. Zero configuration at the site level.</p>
            </div>
            <div className="relative mx-auto mb-10 mt-8 max-w-md">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for your equipment brand…" aria-label="Search integrations"
                className="h-11 w-full rounded-md border border-border bg-card pl-10 pr-10 text-sm outline-none focus:border-primary" />
              {query && (
                <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="size-4" />
                </button>
              )}
            </div>
            {!hasResults && query && (
              <p className="mb-8 text-center text-muted-foreground">
                No integrations found for "{query}". <Link to="/contact" className="text-primary hover:underline">Contact us</Link> and we'll look into it.
              </p>
            )}
            <div className="space-y-10">
              {groups.map((g) => <BrandGrid key={g.title} title={g.title} brands={g.brands} />)}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Don't see your equipment? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>, we're adding new integrations regularly.
            </p>
          </div>
        )}

        {tab === "software" && (
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="text-center">
              <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-primary/10"><Plug className="size-8 text-primary" /></div>
              <h2 className="mt-4 text-2xl font-bold">Software add-ons & integrations</h2>
              <p className="mt-3 text-muted-foreground">Extend AMMP with specialised tools for analytics, maintenance, notifications, and reporting.</p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {softwareAddons.map((addon) => (
                <div key={addon.name} className="w-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]">
                  <p className="text-xs font-medium text-primary">{addon.category}</p>
                  <h3 className="mt-1 font-semibold">{addon.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "edge" && (
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="text-center">
              <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-primary/10"><HardDrive className="size-8 text-primary" /></div>
              <h2 className="mt-4 text-2xl font-bold">AMMP Edge data logger</h2>
              <p className="mt-3 text-muted-foreground">AMMP Edge is a hardware gateway that interfaces with on-site devices and connects them to the AMMP platform.</p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {edgeFeatures.map((f) => (
                <div key={f.title} className="w-full rounded-xl border border-border bg-card p-6 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]">
                  <div className="flex items-center gap-2"><Zap className="size-4 text-primary" /><h3 className="font-semibold">{f.title}</h3></div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Band>

      <Band>
        <div className="mx-auto max-w-2xl text-center">
          <Bot className="mx-auto size-8 text-primary" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Ready to optimise your portfolio?</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">Join hundreds of operators monitoring gigawatts of clean energy every day. No credit card required to start.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="button button-primary">Contact sales <ArrowRight className="size-4" /></Link>
            <Link to="/demo" className="button button-ghost">Try the demo</Link>
          </div>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
