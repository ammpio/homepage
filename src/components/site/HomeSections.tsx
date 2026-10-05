import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageCta } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { HeroVideo, RayEverywhere } from "@/components/site/RaySections";
import { RayIcon } from "@/components/site/RayIcon";

const h2Class = "font-display text-4xl font-medium leading-[1.1] tracking-[-0.015em] sm:text-5xl";

export function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <StatsBar />
      <BeforeLogin />
      <ProactiveOnDemand />
      <RayEverywhere />
      <Details />
      <Results />
      <PageCta />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative">
      <div className="site-container pb-12 pt-16 lg:pb-16 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={90}>
            <h1 className="mx-auto max-w-[18ch] text-balance font-display text-5xl font-medium leading-[1.03] tracking-[-0.02em] md:text-6xl">
              Put AI to work across your renewable energy portfolio
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-[52ch] text-pretty text-lg leading-relaxed text-muted-foreground">
              Meet Ray, an AI coworker grounded in your portfolio data, ready to investigate, prioritise and prepare work alongside your team.
            </p>
          </Reveal>
          <Reveal delay={270}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <Link to="/ai" className="button button-primary rounded-full px-5">Meet your coworker <ArrowRight className="size-4" /></Link>
              <Link to="/mcp" className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">See how it works <ArrowRight className="size-4" /></Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={360}><div className="mx-auto mt-14 max-w-5xl"><HeroVideo /></div></Reveal>
      </div>
    </section>
  );
}

export function StatsBar() {
  const metrics = [["10,000+", "Sites"], ["35+", "Countries"], ["30+", "Integrations"]] as const;
  return (
    <section aria-label="AMMP portfolio scale">
      <div className="site-container">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 border-y border-border/60 py-8 text-center">
          {metrics.map(([value, label]) => (
            <div key={label}>
              <div className="font-display text-3xl font-medium tracking-[-0.02em]">{value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeLogin() {
  return (
    <section className="py-24 lg:py-32">
      <div className="site-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className={h2Class}>Working before anyone’s logged in</h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted-foreground">
            By the time your team opens Slack, Ray has already checked yesterday’s performance across every site, found what changed and opened the tickets that need a human.
          </p>
          <p className="mt-4 max-w-[48ch] leading-relaxed text-muted-foreground">
            It adds capacity to the people you already have, without adding another dashboard to watch.
          </p>
        </div>
        <Reveal>
          <div className="rounded-2xl border border-border/60 bg-background/70 p-6">
            <p className="text-xs text-muted-foreground"># portfolio-ops · 07:02</p>
            <div className="mt-4 flex gap-3">
              <RayIcon className="size-10 shrink-0 ring-2 ring-primary/20" />
              <div>
                <p className="text-sm"><span className="font-semibold">Ray</span> <span className="text-muted-foreground">· 07:02</span></p>
                <p className="mt-1 text-sm leading-relaxed">Morning team. I checked yesterday’s performance across all 142 sites. INV-03 at Brightwater Solar produced 38% less than its neighbours, likely a failing fan. I’ve opened a ticket and asked Tom to take a look today.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProactiveOnDemand() {
  return (
    <section className="py-24 lg:py-32">
      <div className="site-container">
        <h2 className={`max-w-3xl ${h2Class}`}>Proactive when you don’t ask.<br />On demand when you do.</h2>
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="font-display text-2xl font-medium tracking-[-0.015em]">Ranks what needs a human first</h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-muted-foreground">Ray scans the fleet continuously and surfaces the issues worth your attention, ranked by operational and commercial impact, before they grow.</p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-medium tracking-[-0.015em]">Answers with evidence</h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-muted-foreground">Ask in Slack, Teams or AMMP OS for a diagnosis, a contract check or a report. Every answer shows the data behind it, and people stay in control of the decision.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Details() {
  const useCases = [
    { title: "Asset managers", text: "See what needs attention first and move from symptom to root cause faster.", to: "/use-cases/asset-managers" as const },
    { title: "O&M teams", text: "Receive prioritised issues with the context to plan the right response.", to: "/use-cases/om-providers" as const },
    { title: "Reporting teams", text: "Turn standardised portfolio data into reviewable reporting outputs.", to: "/use-cases/reporting-teams" as const },
  ];
  const tech = ["Solar PV", "Battery storage", "Hybrid and mini-grids", "Wind", "Diesel gensets", "Meters and weather stations"];
  const vendors = ["Huawei", "SMA", "SolarEdge", "Sungrow", "Fronius", "Victron", "GoodWe", "Solis", "Deye", "Growatt"];
  const features = [
    "Monitoring", "Alerting", "Ticketing", "Reporting", "Commercials", "Custom dashboards and KPIs",
    "Long-term memory of your context", "Reports, exports and charts on request", "Data API", "MCP server",
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="site-container space-y-20">
        <div>
          <h2 className={h2Class}>Built for every portfolio team</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {useCases.map((u) => (
              <Link key={u.title} to={u.to} className="group block">
                <h3 className="flex items-center gap-2 font-display text-xl font-medium">{u.title}<ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" /></h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{u.text}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="grid gap-16 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-medium tracking-[-0.015em]">Supported technologies</h3>
            <ul className="mt-5 space-y-2 text-muted-foreground">{tech.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div>
            <h3 className="font-display text-2xl font-medium tracking-[-0.015em]">Integrations</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">{vendors.join(" · ")} and 20+ more.</p>
            <Link to="/integrations" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">All integrations <ArrowRight className="size-4" /></Link>
          </div>
          <div>
            <h3 className="font-display text-2xl font-medium tracking-[-0.015em]">Features</h3>
            <ul className="mt-5 space-y-2 text-muted-foreground">{features.map((f) => <li key={f}>{f}</li>)}</ul>
            <Link to="/product" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">Product tour <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Results() {
  const results = [
    { value: "99.9%", label: "platform uptime", customer: "Daystar Power" },
    { value: "Minutes", label: "to portfolio insight", customer: "SolarSaver" },
    { value: "170+", label: "sites in one portal", customer: "Broadreach" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="site-container">
        <h2 className={`mx-auto max-w-3xl text-center text-balance ${h2Class}`}>Proven across live portfolios</h2>
        <div className="mx-auto mt-14 grid max-w-4xl gap-10 text-center md:grid-cols-3">
          {results.map((r) => (
            <div key={r.customer}>
              <p className="font-display text-4xl font-medium tracking-[-0.02em]">{r.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{r.label}</p>
              <Link to="/case-studies" className="mt-3 inline-block text-sm font-medium text-foreground hover:underline">{r.customer}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
