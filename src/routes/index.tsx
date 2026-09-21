import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, BarChart3, BatteryCharging, Bell, Bot, Check, ChevronRight, Code, Database,
  DollarSign, FileBarChart, FileOutput, FileText, Gauge, LockKeyhole, MessageSquare, Monitor,
  Network, Plug, PlugZap, Radio, Server, Settings, Sparkles, Sun, Ticket, Wrench,
} from "lucide-react";
import alertsDashboard from "@/assets/alerts-dashboard.png";
import ammpIntelligence from "@/assets/ammp-intelligence.png";
import financialReport from "@/assets/financial-impact-report.png";
import integrationsImage from "@/assets/integrations.png";
import energyMix from "@/assets/energy-mix.png";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AMMP — AI coworkers for renewable energy portfolios" },
    { name: "description", content: "AMMP combines renewable energy portfolio software with AI coworkers that investigate, prioritise and prepare work." },
    { property: "og:title", content: "AMMP — AI coworkers for renewable energy portfolios" },
    { property: "og:description", content: "Give every portfolio team AI coworkers grounded in the same trusted operational context." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ScaleBand />
      <AgentsSection />
      <CoworkersSection />
      <SharedByDesign />
      <BrainSection />
      <PlatformSection />
      <TwoInterfaces />
      <PlatformGrid />
      <ResultsSection />
      <PageCta />
    </>
  );
}

/* 1 — Opening section (AMMP AI Co-Pilots) */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="site-container grid items-center gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
          </div>
          <h1 className="mt-6 max-w-[13ch] text-balance font-display text-5xl font-bold leading-[1.02] md:text-6xl lg:text-7xl">
             Put AI to work across your renewable energy portfolio
          </h1>
          <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-muted-foreground">
            AI coworkers grounded in your portfolio data—ready to investigate, prioritise, prepare and collaborate alongside your team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="button button-primary">Meet your coworkers <ArrowRight className="size-4" /></Link>
            <Link to="/ai" className="button button-ghost">See how it works</Link>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span>10,000+ sites</span><span aria-hidden="true">/</span><span>35+ countries</span><span aria-hidden="true">/</span><span>30+ integrations</span>
          </div>
        </div>
        <WorkspacePanel />
      </div>
    </section>
  );
}

function WorkspacePanel() {
  const [completed, setCompleted] = useState(false);
  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
          <div className="flex items-center gap-2">
            <MessageSquare className="size-4 text-muted-foreground" />
            <span className="text-sm font-medium"># portfolio-ops</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">· shared workspace</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-primary"><span className="size-1.5 rounded-full bg-primary" />4 coworkers online</div>
        </div>
        <div className="space-y-5 p-4 sm:p-5">
          <div className="flex gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-md bg-muted text-xs font-semibold">MO</span>
            <div>
              <div className="text-xs text-muted-foreground"><span className="font-medium text-foreground">M. Okafor</span> · 09:41</div>
              <p className="mt-1 text-sm">Why is the East Mesa array underproducing this week?</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary"><Radio className="size-4" /></span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-primary">Portfolio analyst</span>
                <span className="size-1.5 rounded-full bg-primary" />09:41
              </div>
              <div className="mt-2 rounded-md border border-border bg-background p-4">
                <p className="text-sm leading-relaxed">Yield is <strong className="font-semibold text-primary">6.8% below model</strong>. The pattern points to inverter IV-204 on block C.</p>
                <div className="mt-4 rounded-md border border-border bg-muted/30 p-3">
                  <div className="flex justify-between text-[11px] text-muted-foreground"><span>Root-cause evidence</span><span>3 sources</span></div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full w-[68%] rounded-full bg-primary" /></div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                    <span>Irradiance <b className="font-medium text-foreground">0.94</b></span>
                    <span>Soiling <b className="font-medium text-foreground">12%</b></span>
                    <span>SLA <b className="font-medium text-primary">risk</b></span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button type="button" onClick={() => setCompleted(true)} className="button button-primary min-h-9 text-xs">
                    {completed ? <Check className="size-3.5" /> : <Wrench className="size-3.5" />}{completed ? "Work order opened" : "Open work order"}
                  </button>
                  <button type="button" className="button button-ghost min-h-9 text-xs">View evidence</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Every request, source, and next action stays visible to the whole team.</p>
    </div>
  );
}

/* 2 — Scale band */
function ScaleBand() {
  const metrics = [
    ["10,000+", "Sites monitored across the portfolio"],
    ["35+", "Countries connected through one data layer"],
    ["30+", "Integrations across devices and workflows"],
  ] as const;
  return (
    <section className="border-b border-border bg-secondary/40" aria-label="AMMP portfolio scale">
      <div className="site-container grid gap-7 py-8 md:grid-cols-3">
        {metrics.map(([value, label]) => (
          <div key={label}>
            <div className="font-display text-3xl font-bold">{value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 3 — Your team, plus a few more (AMMP Home A) */
const agents = [
  { name: "Portfolio analyst", role: "Your analyst in AMMP OS, Slack and Teams", body: "Investigates underperformance and explains what changed, with evidence." },
  { name: "Alarm triage", role: "The checker that never sleeps", body: "Ranks issues by operational and commercial impact before they become noise." },
  { name: "Reporting coworker", role: "Recurring outputs, prepared for review", body: "Prepares recurring reports, narratives and source detail for review." },
  { name: "Compliance coworker", role: "Obligations tracked portfolio-wide", body: "Checks obligations, deadlines and portfolio-wide contract performance." },
] as const;

function AgentsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="site-container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Your team, plus a few more</h2>
          <p className="mt-4 text-lg text-muted-foreground">Each coworker has a clear job. They add capacity to the people you already have.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {agents.map((agent) => (
            <div key={agent.name} className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <p className="text-lg font-semibold text-foreground">{agent.name}</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{agent.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{agent.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Every coworker reads the same portfolio, under your existing AMMP permissions.</p>
      </div>
    </section>
  );
}

/* 4 — Coworkers: proactive / on demand (AMMP AI Co-Pilots) */
function CoworkersSection() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="site-container py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <div>
             <p className="eyebrow">THE COWORKERS</p>
            <h2 className="mt-4 max-w-[19ch] text-balance font-display text-4xl font-semibold leading-[1.08] lg:text-5xl">Proactive when you don’t ask. On demand when you do.</h2>
          </div>
          <p className="max-w-[42ch] text-sm leading-relaxed text-muted-foreground">AI handles routine work continuously and transparently, while people stay in control of decisions and action.</p>
        </div>
        <div className="mt-12 grid overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2 lg:gap-px">
          <Capability proactive />
          <Capability />
        </div>
      </div>
    </section>
  );
}

function Capability({ proactive = false }: { proactive?: boolean }) {
  const entries = [["East Mesa · inverter IV-204", "Needs review"], ["Ridge 2 · soiling pattern", "Watching"], ["Site 14 · SOC drift", "Resolved"]] as const;
  return (
    <div className="bg-background p-6 lg:p-9">
      <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="size-1.5 rounded-full bg-primary" />{proactive ? "Proactive · portfolio triage" : "On demand · ask anything"}</div>
      <h3 className="mt-4 font-display text-2xl font-semibold">{proactive ? "Ranks what needs a human first" : "Answers with evidence, not guesswork"}</h3>
      <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">{proactive ? "Continuously scans the fleet and surfaces the issues that deserve attention before they grow." : "Ask in Slack or Teams for a diagnosis, contract check, report, or exploration of your portfolio data."}</p>
      {proactive ? (
        <div className="mt-6 space-y-2.5">
          {entries.map(([site, state], index) => (
            <div key={site} className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm">
              <span>{site}</span>
              <span className={index === 2 ? "text-muted-foreground" : "text-primary"}>{state}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 space-y-2.5">
          <div className="rounded-md border border-border bg-card px-4 py-3"><div className="text-xs text-muted-foreground">You</div><p className="mt-1 text-sm">Is Q3 PPA compliance on track for Ridge 2?</p></div>
          <div className="rounded-md border border-primary/30 bg-primary/5 px-4 py-3"><div className="text-xs font-medium text-primary">Compliance coworker</div><p className="mt-1 text-sm leading-relaxed">On track. I found two curtailment events, checked their treatment, and prepared the supporting detail for review.</p></div>
        </div>
      )}
    </div>
  );
}

/* 5 — 03 · Shared by design (AMMP AI Co-Pilots) */
function SharedByDesign() {
  const outcomes = [
    { icon: BarChart3, title: "Asset managers", text: "See what needs attention first and move from symptom to root cause faster." },
    { icon: Wrench, title: "O&M teams", text: "Receive prioritised issues with the context needed to plan the right response." },
    { icon: FileText, title: "Reporting teams", text: "Turn standardised portfolio data into clear, reviewable reporting outputs." },
  ];
  return (
    <section className="border-b border-border bg-background">
      <div className="site-container py-20 lg:py-28">
         <p className="eyebrow">SHARED BY DESIGN</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <h2 className="max-w-[16ch] text-balance font-display text-4xl font-semibold leading-[1.08] lg:text-5xl">Same workspace. Same evidence. Humans stay in control.</h2>
            <p className="mt-5 max-w-[45ch] leading-relaxed text-muted-foreground">Everyone can see what was requested, review the work, and add their own knowledge. Capabilities spread naturally because the learning happens together.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {outcomes.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background p-6">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <ChevronRight className="mt-5 size-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 6 — AMMP AI has the context to be useful (v2 brain diagram) */
function BrainSection() {
  const sources = [
    { icon: Sun, label: "Assets and alerts" },
    { icon: BatteryCharging, label: "PV, BESS and hybrid" },
    { icon: Gauge, label: "KPIs and obligations" },
    { icon: Activity, label: "Time-series data" },
  ];
  return (
    <section className="bg-secondary/35 py-20 md:py-28">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Context, not guesswork</p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">AMMP AI has the context to be useful.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">AI can only work with what it understands. AMMP provides a unified view of sites, technologies, KPIs, contracts, timeseries and operating history.</p>
        </div>
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
            <div className="grid grid-cols-2 gap-3">
              {sources.map(({ icon: Icon, label }) => (
                <div key={label} className="flex min-h-28 flex-col justify-between rounded-md border border-border bg-card p-4 shadow-sm">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm font-semibold">{label}</p>
                </div>
              ))}
            </div>
            <div className="hidden items-center lg:flex"><ArrowRight className="h-5 w-5 text-primary" /></div>
            <div className="flex min-h-64 flex-col items-center justify-center rounded-lg border border-primary/30 bg-card p-8 text-center shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-primary text-primary-foreground"><Database className="h-7 w-7" /></div>
              <h3 className="mt-5 text-2xl font-bold">AMMP AI</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">One structured operational context across your entire renewable energy portfolio.</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-xs font-medium text-muted-foreground"><LockKeyhole className="h-3.5 w-3.5" />Permission-aware</div>
            </div>
            <div className="hidden items-center lg:flex"><ArrowRight className="h-5 w-5 text-primary" /></div>
            <div className="grid gap-3">
              <div className="rounded-md border border-border bg-card p-5"><Bot className="h-5 w-5 text-primary" /><p className="mt-4 font-semibold">AI coworkers</p><p className="mt-1 text-sm text-muted-foreground">Slack · Teams · AMMP</p></div>
              <div className="rounded-md border border-border bg-card p-5"><PlugZap className="h-5 w-5 text-primary" /><p className="mt-4 font-semibold">Your software tools</p><p className="mt-1 text-sm text-muted-foreground">Dashboards, reports and workflows</p></div>
            </div>
          </div>
          <div className="mt-8 text-center"><Link to="/ai" className="button button-ghost">See how AI works at AMMP <ArrowRight className="size-4" /></Link></div>
        </div>
      </div>
    </section>
  );
}

/* 7 — AI can only work with what it understands (v2 platform) */
function PlatformSection() {
  const [active, setActive] = useState(0);
  const modules = [
    { key: "operate", title: "Monitor and act", desc: "Live performance, intelligent alerts and ticketing across every site.", icon: Activity, image: alertsDashboard },
    { key: "report", title: "Report and explain", desc: "Consistent KPIs, commercial logic and reports built from one source of truth.", icon: FileBarChart, image: financialReport },
    { key: "connect", title: "Connect every system", desc: "Vendor-agnostic integrations spanning solar, storage, meters and generators.", icon: Network, image: integrationsImage },
    { key: "explore", title: "Explore with AI", desc: "Ask questions, build visualisations and investigate portfolio behaviour with live context.", icon: Sparkles, image: ammpIntelligence },
  ];
  const current = modules[active] ?? modules[0]!;
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="site-container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">AI built on an operating platform</p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">AI can only work with what it understands</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">Underneath every coworker is the monitoring, workflow and data infrastructure AMMP has built across thousands of renewable energy systems.</p>
        </div>
        <div className="mt-12 grid overflow-hidden rounded-lg border border-border lg:grid-cols-[0.78fr_1.22fr]">
          <div className="divide-y divide-border bg-card">
            {modules.map(({ key, title, desc, icon: Icon }, index) => (
              <button key={key} type="button" onClick={() => setActive(index)} className={`flex w-full items-start gap-4 p-5 text-left transition-colors md:p-6 ${active === index ? "bg-primary text-primary-foreground" : "hover:bg-secondary/60"}`}>
                <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${active === index ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className={`mt-1 text-sm leading-relaxed ${active === index ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{desc}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="flex min-h-96 items-center bg-secondary/50 p-5 md:p-8">
            <div className="overflow-hidden rounded-md border border-border bg-card shadow-xl">
              <img key={current.key} src={current.image} alt={`AMMP ${current.title}`} className="w-full object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 border-y border-border py-7">
          <Link to="/integrations" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">View all integrations<ArrowRight className="ml-1 h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

/* 8a — A screen when you're watching (AI Co-Pilot Homepage) */
function TwoInterfaces() {
  return (
    <section className="overflow-hidden bg-secondary/35 py-20 lg:py-28">
      <div className="site-container">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">One system of record. Two ways to use it.</p>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold sm:text-5xl">A screen when you’re watching. A coworker when you’re not.</h2>
          </div>
          <Link to="/product" className="group flex items-center gap-2 text-sm font-bold text-primary">Explore the platform <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
            <div className="p-7 sm:p-9">
              <span className="eyebrow text-muted-foreground">For the team on shift</span>
              <h3 className="mt-3 font-display text-3xl font-semibold">AMMP OS</h3>
              <p className="mt-3 max-w-md text-muted-foreground">Live portfolio views, alarms, performance analytics, and drill-down to the asset.</p>
            </div>
            <div className="mt-auto overflow-hidden border-t border-border bg-secondary"><img src={energyMix} alt="AMMP OS energy mix dashboard" className="h-auto w-full" /></div>
          </article>
          <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
            <div className="p-7 sm:p-9">
              <span className="eyebrow">For the work nobody gets to</span>
              <h3 className="mt-3 font-display text-3xl font-semibold">AMMP AI coworkers</h3>
              <p className="mt-3 max-w-md text-muted-foreground">Portfolio-aware coworkers that explore, analyse, report, and keep the team ahead.</p>
            </div>
            <div className="mt-auto overflow-hidden border-t border-border bg-secondary"><img src={ammpIntelligence} alt="AMMP AI intelligence with portfolio dashboard" className="h-auto w-full" /></div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* 8b — AMMP OS is still all here (AMMP Home A) */
const modulesGrid = [
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

function PlatformGrid() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="site-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
             <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">AMMP OS when you need it</h2>
             <p className="mt-4 text-lg text-muted-foreground">The dashboards, tickets and reports your team uses every day. The coworkers sit on top of them.</p>
          </div>
          <Link to="/product" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:underline">Full product tour <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modulesGrid.map((m) => (
            <Link key={m.title} to="/product" className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md">
              <m.icon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-foreground">{m.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{m.body}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 9 — Results (v2) */
function ResultsSection() {
  const results = [
    { value: "99.9%", label: "platform uptime", customer: "Daystar Power" },
    { value: "Minutes", label: "to portfolio insight", customer: "SolarSaver" },
    { value: "170+", label: "sites in one portal", customer: "Broadreach" },
  ];
  return (
    <section className="bg-secondary/35 py-20 md:py-28">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Results already delivered</p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">Proven across live portfolios.</h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {results.map((result) => (
            <div key={result.customer} className="bg-card p-7 text-center md:p-9">
              <p className="font-display text-4xl font-bold text-foreground">{result.value}</p>
              <p className="mt-3 text-sm text-muted-foreground">{result.label}</p>
              <Link to="/case-studies" className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:underline">{result.customer}<ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
