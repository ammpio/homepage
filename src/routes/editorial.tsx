import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, BarChart3, BatteryCharging, Bell, Bot, Brain, Check, ChevronRight, Code,
  DollarSign, FileOutput, FileText, Gauge, LockKeyhole, MessageSquare, Monitor,
  Plug, PlugZap, Radio, Server, Settings, Sun, Ticket, Wrench,
} from "lucide-react";
import { PageCta } from "@/components/site/SiteShell";

const SERIF = "'Playfair Display', Georgia, serif";
const MONO = "'IBM Plex Mono', ui-monospace, monospace";

export const Route = createFileRoute("/editorial")({
  head: () => ({
    meta: [
      { title: "AMMP — an AI coworker for renewable energy portfolios" },
      { name: "description", content: "AMMP combines renewable energy portfolio software with an AI coworker that investigates, prioritizes and prepares work." },
      { property: "og:title", content: "AMMP — an AI coworker for renewable energy portfolios" },
      { property: "og:description", content: "Give every portfolio team an AI coworker grounded in the same trusted operational context." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,600;0,700;1,500;1,600&display=swap" },
    ],
  }),
  component: EditorialHome,
});

function EditorialHome() {
  return (
    <div className="bg-[#FDFDFD] text-slate-950">
      <Hero />
      <ScaleBand />
      <AgentsSection />
      <CoworkersSection />
      <SharedByDesign />
      <ContextPlatformSection />
      <PlatformOverview />
      <ResultsSection />
      <PageCta />
    </div>
  );
}

const monoLabel = "text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400";
const h2Class = "text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl";
const serif = { fontFamily: SERIF } as const;
const mono = { fontFamily: MONO } as const;

function SectionIndex({ n, label }: { n: string; label: string }) {
  return (
    <p className={monoLabel} style={mono}>
      {n} <span className="mx-2 text-slate-300">//</span> {label}
    </p>
  );
}

/* 1 — Hero */
function Hero() {
  return (
    <section className="border-b border-slate-200">
      <div className="site-container grid items-start gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className={`${monoLabel} mb-6 flex items-center gap-2`} style={mono}>
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Ray, live in your portfolio
          </p>
          <h1 className="max-w-[15ch] text-balance text-5xl font-bold leading-[1.0] tracking-tight md:text-7xl" style={serif}>
            Put AI to work across your <em className="font-medium">renewable energy portfolio</em>
          </h1>
          <p className="mt-7 max-w-[48ch] text-pretty text-lg leading-relaxed text-slate-600">
            An AI coworker grounded in your portfolio data, ready to investigate, prioritize, prepare and collaborate alongside your team.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-950 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-slate-800">
              Meet your coworker <ArrowRight className="size-4" />
            </Link>
            <Link to="/ai" className="inline-flex items-center gap-2 border border-slate-200 px-7 py-3.5 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-50">
              See how it works
            </Link>
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
      <div className="border border-slate-200 bg-white p-1 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.06)]">
        <div className="border border-slate-100">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider" style={mono}># portfolio-ops</span>
              <span className="hidden text-[10px] uppercase tracking-wider text-slate-400 sm:inline" style={mono}>· shared workspace</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400" style={mono}>Ray online</span>
          </div>
          <div className="space-y-6 p-5 sm:p-7">
            <div className="flex gap-3">
              <span className="grid size-9 shrink-0 place-items-center border border-slate-200 bg-slate-50 text-xs font-semibold">MO</span>
              <div>
                <div className="text-xs text-slate-400"><span className="font-medium text-slate-900">M. Okafor</span> · 09:41</div>
                <p className="mt-1 text-sm">Why is the East Mesa array underproducing this week?</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="grid size-9 shrink-0 place-items-center border border-slate-900 bg-slate-950 text-white"><Radio className="size-4" /></span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="font-medium text-slate-900">Portfolio analyst</span>
                  <span className="size-1.5 rounded-full bg-emerald-500" />09:41
                </div>
                <div className="mt-2 border border-slate-200 p-4">
                  <p className="text-sm leading-relaxed">Yield is <strong className="font-semibold">6.8% below model</strong>. The pattern points to inverter IV-204 on block C.</p>
                  <div className="mt-4 border border-slate-100 bg-slate-50 p-3">
                    <div className="flex justify-between text-[10px] uppercase tracking-wider text-slate-400" style={mono}><span>Root-cause evidence</span><span>3 sources</span></div>
                    <div className="mt-2 flex h-4 items-end gap-1" aria-hidden>
                      {["w-full bg-slate-900", "w-[72%] bg-slate-900", "w-[55%] bg-slate-300", "w-[38%] bg-slate-300", "w-[24%] bg-slate-200"].map((c, i) => (
                        <div key={i} className={`h-full w-1 flex-1 ${c.split(" ").pop()}`} />
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500">
                      <span>Irradiance <b className="font-medium text-slate-900" style={mono}>0.94</b></span>
                      <span>Soiling <b className="font-medium text-slate-900" style={mono}>12%</b></span>
                      <span>SLA <b className="font-medium text-slate-900" style={mono}>risk</b></span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button type="button" onClick={() => setCompleted(true)} className="inline-flex min-h-9 items-center gap-1.5 bg-slate-950 px-4 text-xs font-medium text-white transition-colors hover:bg-slate-800">
                      {completed ? <Check className="size-3.5" /> : <Wrench className="size-3.5" />}{completed ? "Work order opened" : "Open work order"}
                    </button>
                    <button type="button" className="inline-flex min-h-9 items-center border border-slate-200 px-4 text-xs font-medium text-slate-900 transition-colors hover:bg-slate-50">View evidence</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-400">Every request, source, and next action stays visible to the whole team.</p>
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
    <section aria-label="AMMP portfolio scale" className="border-b border-slate-200">
      <div className="site-container grid gap-px bg-slate-200 md:grid-cols-3">
        {metrics.map(([value, label]) => (
          <div key={label} className="bg-[#FDFDFD] py-10 pr-8">
            <div className="text-4xl font-semibold italic tracking-tight" style={serif}>{value}</div>
            <div className="mt-2 text-[11px] uppercase tracking-widest text-slate-500" style={mono}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 3 — Your team just got a new coworker */
const agents = [
  { name: "Portfolio analyst", role: "Your analyst in AMMP OS, Slack and Teams", body: "Investigates underperformance and explains what changed, with evidence." },
  { name: "Alarm triage", role: "The checker that never sleeps", body: "Ranks issues by operational and commercial impact before they become noise." },
  { name: "Reporting coworker", role: "Recurring outputs, prepared for review", body: "Prepares recurring reports, narratives and source detail for review." },
  { name: "Compliance coworker", role: "Obligations tracked portfolio-wide", body: "Checks obligations, deadlines and portfolio-wide contract performance." },
] as const;

function AgentsSection() {
  return (
    <section className="border-b border-slate-200 py-20 md:py-24">
      <div className="site-container">
        <SectionIndex n="01" label="The coworker" />
        <div className="mt-5 max-w-5xl">
          <h2 className={h2Class} style={serif}>Your team just got a new coworker</h2>
          <p className="mt-4 text-lg text-slate-600 lg:whitespace-nowrap">Each coworker has a clear job. They add capacity to the people you already have.</p>
        </div>
        <div className="mt-12 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
          {agents.map((agent, i) => (
            <div key={agent.name} className="group bg-[#FDFDFD] p-8 transition-colors hover:bg-slate-50">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{agent.name}</p>
                <span className="text-[10px] font-medium text-slate-400" style={mono}>[ 0{i + 1} ]</span>
              </div>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-slate-400" style={mono}>{agent.role}</p>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">{agent.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">Every coworker reads the same portfolio, under your existing AMMP permissions.</p>
      </div>
    </section>
  );
}

/* 4 — Proactive / on demand */
function CoworkersSection() {
  return (
    <section className="border-b border-slate-200">
      <div className="site-container py-20 lg:py-24">
        <SectionIndex n="02" label="AMMP AI agents" />
        <div className="mt-5">
          <h2 className={h2Class} style={serif}>Proactive when you don’t ask.<br />On demand when you do.</h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-600 lg:whitespace-nowrap">AI handles routine work continuously and transparently, while people stay in control of decisions and action.</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
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
    <div className="border border-slate-200 bg-white p-7 lg:p-9">
      <div className={`flex items-center gap-2 ${monoLabel}`} style={mono}>
        <span className="size-1.5 rounded-full bg-emerald-500" />
        {proactive ? "Proactive · portfolio triage" : "On demand · ask anything"}
      </div>
      <h3 className="mt-4 text-2xl font-bold tracking-tight" style={serif}>{proactive ? "Ranks what needs a human first" : "Answers with evidence, not guesswork"}</h3>
      <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-slate-600">{proactive ? "Continuously scans the fleet and surfaces the issues that deserve attention before they grow." : "Ask in Slack or Teams for a diagnosis, contract check, report, or exploration of your portfolio data."}</p>
      {proactive ? (
        <div className="mt-6 divide-y divide-slate-100 border border-slate-200">
          {entries.map(([site, state], index) => (
            <div key={site} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
              <span>{site}</span>
              <span className={index === 2 ? "text-[11px] uppercase tracking-wider text-slate-400" : "text-[11px] font-medium uppercase tracking-wider text-slate-900"} style={mono}>{state}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 space-y-2.5">
          <div className="border border-slate-200 px-4 py-3"><div className="text-[10px] uppercase tracking-wider text-slate-400" style={mono}>You</div><p className="mt-1 text-sm">Is Q3 PPA compliance on track for Ridge 2?</p></div>
          <div className="border border-slate-900 bg-slate-950 px-4 py-3 text-white"><div className="text-[10px] font-medium uppercase tracking-wider text-emerald-400" style={mono}>Compliance coworker</div><p className="mt-1 text-sm leading-relaxed">On track. I found two curtailment events, checked their treatment, and prepared the supporting detail for review.</p></div>
        </div>
      )}
    </div>
  );
}

/* 5 — Shared by design */
function SharedByDesign() {
  const outcomes = [
    { icon: BarChart3, title: "Asset managers", text: "See what needs attention first and move from symptom to root cause faster.", href: "/use-cases/asset-managers" as const },
    { icon: Wrench, title: "O&M teams", text: "Receive prioritized issues with the context needed to plan the right response.", href: "/use-cases/om-providers" as const },
    { icon: FileText, title: "Reporting teams", text: "Turn standardized portfolio data into clear, reviewable reporting outputs.", href: "/use-cases/reporting-teams" as const },
  ];
  return (
    <section className="border-b border-slate-200">
      <div className="site-container py-20 lg:py-24">
        <SectionIndex n="03" label="Shared by design" />
        <div className="mt-5 grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <h2 className={h2Class} style={serif}>Same workspace.<br />Same evidence.<br />Humans stay in control.</h2>
            <p className="mt-5 max-w-[45ch] leading-relaxed text-slate-600">Everyone can see what was requested, review the work, and add their own knowledge. Capabilities spread naturally because the learning happens together.</p>
          </div>
          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">
            {outcomes.map(({ icon: Icon, title, text, href }) => (
              <Link key={title} to={href} aria-label={title} className="group flex flex-col bg-[#FDFDFD] p-6 text-left transition-colors hover:bg-slate-50">
                <span className="grid size-10 place-items-center border border-slate-200 text-slate-700"><Icon className="size-5" /></span>
                <h3 className="mt-5 text-lg font-bold tracking-tight" style={serif}>{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
                <ChevronRight className="mt-auto size-4 pt-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-slate-900" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 6 — AI built on an operating platform */
function ContextPlatformSection() {
  const sources = [
    { icon: Sun, label: "Assets and alerts" },
    { icon: BatteryCharging, label: "PV, BESS and hybrid" },
    { icon: Gauge, label: "KPIs and obligations" },
    { icon: Activity, label: "Time-series data" },
  ];
  return (
    <section className="border-b border-slate-200 py-20 md:py-24">
      <div className="site-container">
        <SectionIndex n="04" label="AI built on an operating platform" />
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className={`text-balance ${h2Class}`} style={serif}>AI can only work with what it understands</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">Underneath every coworker is the monitoring, workflow and data infrastructure AMMP has built across thousands of renewable energy systems.</p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
            <div className="grid grid-cols-2 gap-px border border-slate-200 bg-slate-200">
              {sources.map(({ icon: Icon, label }) => (
                <div key={label} className="flex min-h-28 flex-col justify-between bg-[#FDFDFD] p-4">
                  <Icon className="h-5 w-5 text-slate-400" />
                  <p className="text-sm font-semibold">{label}</p>
                </div>
              ))}
            </div>
            <div className="hidden items-center lg:flex"><ArrowRight className="h-5 w-5 text-slate-900" /></div>
            <div className="relative flex min-h-64 flex-col items-center justify-center border border-slate-950 bg-slate-950 p-8 text-center text-white">
              <div className="flex h-14 w-14 items-center justify-center border border-white/25"><Brain className="h-7 w-7" /></div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight" style={serif}>AMMP AI</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">One structured operational context across your entire renewable energy portfolio.</p>
              <div className="mt-5 inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-slate-300" style={mono}><LockKeyhole className="h-3.5 w-3.5" />Permission-aware</div>
            </div>
            <div className="hidden items-center lg:flex"><ArrowRight className="h-5 w-5 text-slate-900" /></div>
            <div className="grid gap-px border border-slate-200 bg-slate-200">
              <div className="bg-[#FDFDFD] p-5"><Bot className="h-5 w-5 text-slate-900" /><p className="mt-4 font-semibold">AI coworker</p><p className="mt-1 text-sm text-slate-500" style={mono}>Slack · Teams · AMMP</p></div>
              <div className="bg-[#FDFDFD] p-5"><PlugZap className="h-5 w-5 text-slate-900" /><p className="mt-4 font-semibold">Your software tools</p><p className="mt-1 text-sm text-slate-500">Dashboards, reports and workflows</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 7 — AMMP OS + AI coworker */
const modulesGrid = [
  { icon: Monitor, title: "Monitoring", body: "Live performance across every site and device." },
  { icon: Ticket, title: "Ticketing", body: "Work tracked from fault to resolution." },
  { icon: Bell, title: "Alerting", body: "Rules that reach the right person quickly." },
  { icon: FileOutput, title: "Reporting", body: "Scheduled operational and investor reports." },
  { icon: DollarSign, title: "Commercials", body: "Savings, billing and contract performance." },
  { icon: Plug, title: "Integrations", body: "30+ vendors and third-party tools." },
  { icon: Settings, title: "Customizations", body: "Dashboards, KPIs and views built to fit." },
  { icon: Code, title: "API", body: "Your data in your own systems." },
  { icon: Server, title: "MCP server", body: "Portfolio context for any AI assistant." },
];

const interfaces = [
  { eyebrow: "For the team on shift", title: "AMMP OS", body: "Live portfolio views, alarms, performance analytics, and drill-down to the asset.", icon: Monitor },
  { eyebrow: "For the work nobody gets to", title: "AMMP AI coworker", body: "A portfolio-aware coworker that explores, analyzes, reports and keeps the team ahead.", icon: Bot },
];

function PlatformOverview() {
  return (
    <section className="border-b border-slate-200 py-20 lg:py-24">
      <div className="site-container">
        <SectionIndex n="05" label="One system of record. Two ways to use it." />
        <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className={h2Class} style={serif}>A screen when you’re watching.<br />A coworker when you’re not.</h2>
          <Link to="/product" className="group flex items-center gap-2 border-b border-slate-950 pb-1 text-[11px] font-bold uppercase tracking-widest" style={mono}>Explore the platform <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
        <div className="mt-12 grid gap-px border border-slate-200 bg-slate-200 lg:grid-cols-2">
          {interfaces.map(({ eyebrow, title, body, icon: Icon }, index) => (
            <article key={title} className={`flex flex-col p-7 sm:p-9 ${index === 0 ? "bg-[#FDFDFD]" : "bg-slate-950 text-white"}`}>
              <div className={`flex items-center gap-2 ${monoLabel} ${index === 1 ? "text-slate-400" : ""}`} style={mono}>
                <span className="size-1.5 rounded-full bg-emerald-500" />{eyebrow}
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold tracking-tight" style={serif}>{title}</h3>
                <span className={`grid size-10 shrink-0 place-items-center border ${index === 0 ? "border-slate-200 text-slate-700" : "border-white/25 text-white"}`}><Icon className="size-5" /></span>
              </div>
              <p className={`mt-3 max-w-md text-sm leading-relaxed ${index === 0 ? "text-slate-600" : "text-slate-400"}`}>{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={monoLabel} style={mono}>Inside AMMP OS</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl" style={serif}>AMMP OS when you need it</h3>
            <p className="mt-3 text-lg text-slate-600 xl:whitespace-nowrap">The dashboards, tickets and reports your team uses every day. Ray sits on top of them.</p>
          </div>
          <Link to="/product" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">Full product tour <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {modulesGrid.map((m) => (
            <Link key={m.title} to="/product" className="flex items-start gap-3 bg-[#FDFDFD] p-4 transition-colors hover:bg-slate-50">
              <m.icon className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold">{m.title}</span>
                <span className="mt-1 block text-sm text-slate-500">{m.body}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8 — Results */
function ResultsSection() {
  const results = [
    { value: "99.9%", label: "platform uptime", customer: "Daystar Power" },
    { value: "Minutes", label: "to portfolio insight", customer: "SolarSaver" },
    { value: "170+", label: "sites in one portal", customer: "Broadreach" },
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="site-container">
        <SectionIndex n="06" label="Results already delivered" />
        <div className="mx-auto mt-5 max-w-3xl text-center">
          <h2 className={`text-balance ${h2Class}`} style={serif}>Proven across live portfolios.</h2>
        </div>
        <div className="mt-12 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">
          {results.map((result) => (
            <div key={result.customer} className="bg-[#FDFDFD] p-7 text-center transition-colors hover:bg-slate-50 md:p-9">
              <p className="text-4xl font-semibold italic tracking-tight" style={serif}>{result.value}</p>
              <p className="mt-3 text-sm text-slate-500">{result.label}</p>
              <Link to="/case-studies" className="mt-5 inline-flex items-center text-[11px] font-bold uppercase tracking-widest hover:underline" style={mono}>{result.customer}<ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
