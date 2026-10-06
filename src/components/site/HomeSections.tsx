import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  Activity, ArrowDown, ArrowRight, BarChart3, BatteryCharging, Bell, ChevronRight, Code, Database, DollarSign,
  FileOutput, FileText, Gauge, LockKeyhole, Monitor, Plug, PlugZap, Server, Settings, Sun, Ticket, Wrench,
  Sparkles } from "lucide-react";
import { PageCta } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { HeroVideo, RayEverywhere } from "@/components/site/RaySections";
import { RayIcon } from "@/components/site/RayIcon";

const h2Class = "font-display text-3xl font-medium leading-[1.1] tracking-[-0.015em] sm:text-4xl lg:text-5xl";

export function HomePage() {
  return (
    <div className="relative overflow-x-clip">
      <Hero />
      <StatsBar className="lg:hidden" />
      <BeforeLogin />
      <ProactiveOnDemand />
      <RayEverywhere />
      <Details />
      <Results />
      <PageCta />
    </div>
  );
}

/* Centered theater hero: copy on top, wide video below, stats right after — no empty gaps on big screens. */
/* Desktop: the video starts small enough to fit the first screen, then grows to full width as you scroll. */
function useHeroGrow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!desktop.matches || reduced.matches) { el.style.transform = ""; return; }
      let docTop = 0; let n: HTMLElement | null = el;
      while (n) { docTop += n.offsetTop; n = n.offsetParent as HTMLElement | null; }
      const h = el.offsetHeight, vh = window.innerHeight;
      const s0 = Math.min(1, Math.max(0.45, (vh - docTop - 24) / h));
      const p = Math.min(1, Math.max(0, window.scrollY / (vh * 0.5)));
      const e = 1 - Math.pow(1 - p, 2);
      el.style.transform = `scale(${s0 + (1 - s0) * e})`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, []);
  return ref;
}

export function Hero() {
  const videoRef = useHeroGrow();
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-[1280px] px-4 pb-10 pt-10 text-center sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
        <Reveal delay={90}>
          <h1 className="mx-auto max-w-[22ch] text-balance font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl xl:text-[3.75rem]">
            Put AI to work across your renewable energy portfolio
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-5 max-w-[56ch] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Meet Ray, our AI coworker grounded in your portfolio data, ready to investigate, prioritize and prepare work alongside your team.
          </p>
        </Reveal>
        <Reveal delay={270}>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link to="/ai" className="button button-primary w-full justify-center rounded-full px-5 sm:w-auto">Meet your coworker <ArrowRight className="size-4" /></Link>
            <Link to="/mcp" className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">See how it works <ArrowRight className="size-4" /></Link>
          </div>
        </Reveal>
        <div ref={videoRef} className="mx-auto mt-10 max-w-4xl origin-top will-change-transform lg:mt-12 lg:max-w-5xl 2xl:max-w-6xl">
          <Reveal delay={360}><HeroVideo /></Reveal>
        </div>
      </div>
      <div className="hidden pb-8 lg:block"><StatsBar /></div>
    </section>
  );
}

export function StatsBar({ className = "" }: { className?: string }) {
  const metrics = [["10,000+", "Sites"], ["35+", "Countries"], ["30+", "Integrations"]] as const;
  return (
    <section aria-label="AMMP portfolio scale" className={className}>
      <div className="site-container">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-2 border-y border-border/60 py-6 text-center sm:gap-6 sm:py-8">
          {metrics.map(([value, label]) => (
            <div key={label} className="min-w-0">
              <div className="font-display text-2xl font-medium tabular-nums tracking-[-0.02em] sm:text-3xl">{value}</div>
              <div className="mt-1 truncate text-xs text-muted-foreground sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeLogin() {
  return (
    <section className="py-16 lg:py-32">
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
    <section className="py-16 lg:py-32">
      <div className="site-container">
        <h2 className={`max-w-3xl ${h2Class}`}>Proactive when you don’t ask.<br />On demand when you do.</h2>
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="font-display text-2xl font-medium tracking-[-0.015em]">Ranks what needs a human first</h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-muted-foreground">Ray scans the fleet continuously and surfaces the issues worth your attention, ranked by operational and commercial impact, before they grow.</p>
            <Reveal>
              <div className="mt-8 rounded-2xl border border-border/60 bg-background/70 p-5">
                <p className="text-xs text-muted-foreground">Fleet triage · ranked by daily impact</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 p-3">
                    <div className="flex gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden />
                      <div>
                        <p className="text-sm font-medium">Brightwater Solar · INV-03</p>
                        <p className="text-xs text-muted-foreground">−38% yield vs neighbours</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-sm font-medium">−€420/day</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 p-3 opacity-80">
                    <div className="flex gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden />
                      <div>
                        <p className="text-sm font-medium">Kalahari Solar · Tracker 02</p>
                        <p className="text-xs text-muted-foreground">Tracker stalled</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-sm text-muted-foreground">−€35/day</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div>
            <h3 className="font-display text-2xl font-medium tracking-[-0.015em]">Answers with evidence</h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-muted-foreground">Ask in Slack, Teams or AMMP OS for a diagnosis, a contract check or a report. Every answer shows the data behind it, and people stay in control of the decision.</p>
            <Reveal>
              <div className="mt-8 rounded-2xl border border-border/60 bg-background/70 p-5">
                <p className="ml-auto w-fit rounded-xl bg-muted px-3 py-2 text-sm">Why is Brightwater Solar underperforming?</p>
                <div className="mt-4 flex gap-3">
                  <RayIcon className="size-8 shrink-0 ring-2 ring-primary/20" />
                  <div>
                    <p className="text-sm leading-relaxed">INV-03 shows a fan fault, producing 38% less than its neighbours. SunServe clause 7.2 applies.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Telemetry · 2 min ago", "Inverter logs", "SunServe contract"].map((s) => (
                        <span key={s} className="rounded-full border border-border/60 px-2.5 py-1 text-xs text-muted-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Details() {
  const useCases = [
    { icon: BarChart3, title: "Asset managers", text: "See what needs attention first and move from symptom to root cause faster.", to: "/use-cases/asset-managers" as const },
    { icon: Wrench, title: "O&M teams", text: "Receive prioritised issues with the context needed to plan the right response.", to: "/use-cases/om-providers" as const },
    { icon: FileText, title: "Reporting teams", text: "Turn standardised portfolio data into clear, reviewable reporting outputs.", to: "/use-cases/reporting-teams" as const },
  ];
  const tech = ["Solar PV", "Battery storage", "Hybrid and mini-grids", "Wind", "Diesel gensets", "Meters and weather stations"];
  const vendors = ["Huawei", "SMA", "SolarEdge", "Sungrow", "Fronius", "Victron", "GoodWe", "Solis", "Deye", "Growatt", "AlphaESS", "SigEnergy"];
  const sources = [
    { icon: Sun, label: "Assets and alerts" },
    { icon: BatteryCharging, label: "PV, BESS and hybrid" },
    { icon: Gauge, label: "KPIs and obligations" },
    { icon: Activity, label: "Time-series data" },
  ];
  const modules = [
    { icon: Monitor, title: "Monitoring", body: "Live performance across every site and device." },
    { icon: Ticket, title: "Ticketing", body: "Work tracked from fault to resolution." },
    { icon: Bell, title: "Alerting", body: "Rules that reach the right person quickly." },
    { icon: FileOutput, title: "Reporting", body: "Scheduled operational and investor reports." },
    { icon: DollarSign, title: "Commercials", body: "Savings, billing and contract performance." },
    { icon: Plug, title: "Integrations", body: "30+ vendors and third-party tools." },
    { icon: Settings, title: "Customisations", body: "Dashboards, KPIs and views built to fit." },
    { icon: Code, title: "API", body: "Your data in your own systems." },
    { icon: Server, title: "MCP server", body: "Portfolio context for any AI assistant." },
  ];
  const arrow = (label: string, delay = "0s") => (
    <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground lg:gap-0">
      <ArrowDown className="arrow-pulse h-5 w-5 text-primary lg:hidden" style={{ animationDelay: delay }} />
      <span className="lg:hidden">{label}</span>
      <ArrowRight className="arrow-pulse hidden h-5 w-5 text-primary lg:block" style={{ animationDelay: delay }} />
    </div>
  );
  return (
    <>
      <section className="py-16 lg:py-32">
        <div className="site-container">
          <h2 className={h2Class}>Built for every portfolio team</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {useCases.map(({ icon: Icon, title, text, to }, i) => (
              <Reveal key={title} delay={i * 100} className="h-full">
                <Link to={to} className="glass group flex h-full flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="size-5" /></span>
                  <h3 className="mt-5 font-display text-lg font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  <ChevronRight className="mt-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-32">
        <div className="site-container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className={`max-w-3xl text-balance ${h2Class}`}>AI can only work with what it understands</h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">Underneath Ray is the monitoring, workflow and data infrastructure AMMP has built across thousands of renewable energy systems.</p>
          </div>
          <div className="mx-auto mt-14 max-w-6xl">
            <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1.3fr_auto_1fr]">
              <div className="grid grid-cols-2 gap-3">
                {sources.map(({ icon: Icon, label }, i) => (
                  <Reveal key={label} delay={i * 90} className="h-full">
                    <div className="glass flex h-full items-center gap-2 rounded-2xl p-3 lg:min-h-28 lg:flex-col lg:items-start lg:justify-between lg:p-4">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <p className="text-sm font-semibold">{label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              {arrow("Feeds into")}
              <div className="glass-strong relative flex min-h-64 flex-col items-center justify-center rounded-3xl p-8 text-center">
                <div aria-hidden className="glow-orb absolute inset-x-10 top-6 h-24 bg-glow-magenta/70" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-background/70 text-foreground/80 shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-sm"><Database className="h-7 w-7" strokeWidth={1.25} /></div>
                <h3 className="relative mt-5 font-display text-2xl font-medium">AMMP OS</h3>
                <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">One structured operational context across your entire renewable energy portfolio.</p>
                <div className="glass-soft relative mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground"><LockKeyhole className="h-3.5 w-3.5" />Permission-aware</div>
              </div>
              {arrow("Powers", "1.3s")}
              <div className="grid gap-3">
                <Reveal delay={550}><div className="glass rounded-2xl p-5"><Sparkles className="h-5 w-5 text-primary" /><p className="mt-4 font-semibold">Ray, your AI coworker</p><p className="mt-1 text-sm text-muted-foreground">Slack · Teams · AMMP OS</p></div></Reveal>
                <Reveal delay={680}><div className="glass rounded-2xl p-5"><PlugZap className="h-5 w-5 text-primary" /><p className="mt-4 font-semibold">AMMP OS tools</p><p className="mt-1 text-sm text-muted-foreground">Dashboards, reports and workflows</p></div></Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-32">
        <div className="site-container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className={h2Class}>Everything in the platform</h2>
            <Link to="/product" className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">Product tour <ArrowRight className="size-4" /></Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 90}>
                <Link to="/product" className="glass flex items-start gap-3 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1">
                  <m.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{m.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{m.body}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            <div className="glass rounded-3xl p-7">
              <h3 className="font-display text-xl font-medium">Supported technologies</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {tech.map((t) => <span key={t} className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-sm">{t}</span>)}
              </div>
            </div>
            <div className="glass rounded-3xl p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-medium">Integrations</h3>
                <Link to="/integrations" className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">All 30+ <ArrowRight className="size-4" /></Link>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {vendors.map((v) => <span key={v} className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-center text-sm">{v}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Results() {
  const results = [
    { value: "99.9%", label: "platform uptime", customer: "Daystar Power" },
    { value: "Minutes", label: "to portfolio insight", customer: "SolarSaver" },
    { value: "170+", label: "sites in one portal", customer: "Broadreach" },
  ];
  return (
    <section className="py-16 lg:py-32">
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
