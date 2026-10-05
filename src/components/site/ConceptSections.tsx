import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Activity, ArrowRight, Check, ChevronDown, Code, FileText, KeyRound, Loader2, LockKeyhole,
  MessageSquare, Server, ShieldCheck, Workflow,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { RayIcon } from "@/components/site/RayIcon";

const h2Class = "font-display text-3xl font-medium leading-[1.1] tracking-[-0.015em] sm:text-4xl lg:text-5xl";

/* 1 — Split quote & proof lockup */
export function ProofLockup() {
  return (
    <section className="pt-16 md:pt-20">
      <div className="site-container">
        <div className="glass grid gap-10 rounded-3xl p-8 md:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Trusted at portfolio scale</p>
            <h2 className={`mt-4 ${h2Class}`}>10,000+ sites in 35+ countries run on AMMP</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { q: "We sustain 99.9% uptime across our commercial and industrial fleet.", who: "Daystar Power", stat: "99.9% uptime" },
              { q: "Monthly reporting went from hours per site to minutes.", who: "SolarSaver", stat: "Minutes, not hours" },
            ].map((t, i) => (
              <Reveal key={t.who} delay={i * 120}>
                <figure className="h-full rounded-2xl border border-border/60 bg-background/60 p-6">
                  <p className="font-display text-2xl font-medium text-primary">{t.stat}</p>
                  <blockquote className="mt-3 text-sm leading-relaxed text-foreground">“{t.q}”</blockquote>
                  <figcaption className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">{t.who}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 2 — Agent execution trace */
const steps = [
  { label: "Polled 24 string inverters on Site Alpha", t: "0.4s" },
  { label: "Detected 18% clipping on Inverter 03 vs. expected irradiance", t: "1.1s" },
  { label: "Cross-referenced satellite irradiance and ambient temperature", t: "1.4s" },
  { label: "Drafted dispatch work order for the O&M technician", t: "0.9s" },
];

export function ExecutionTrace() {
  return (
    <section className="py-20 md:py-24">
      <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Watch a coworker work</p>
          <h2 className={`mt-4 ${h2Class}`}>Every step visible. Every source linked.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Ray shows exactly what it checked, what it found, and what it prepared — so your team can review and approve in seconds.</p>
          <Link to="/ai" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">Meet your coworker <ArrowRight className="size-4" /></Link>
        </div>
        <Reveal>
          <div className="glass-strong rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <RayIcon className="size-9 shrink-0 ring-1 ring-primary/25" />
                <div>
                  <p className="text-sm font-semibold">Ray · Underperformance check</p>
                  <p className="text-xs text-muted-foreground">Site Alpha · 2.4 MWp</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="status-pulse size-1.5 rounded-full bg-primary" /> Running
              </span>
            </div>
            <ol className="mt-5 space-y-3">
              {steps.map((s) => (
                <li key={s.label} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-3" /></span>
                  <span className="flex-1 text-foreground">{s.label}</span>
                  <span className="text-xs tabular-nums text-muted-foreground">{s.t}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Loader2 className="mt-0.5 size-5 shrink-0" />
                <span>Waiting for your approval to send</span>
              </li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Inverter 03 telemetry", "Satellite irradiance", "Work order #4821"].map((src) => (
                <span key={src} className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground">{src}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 3 — Multi-mode interaction deck */
const modes = [
  { icon: Activity, title: "Live monitoring", body: "Real-time telemetry and smart alerting across every site for O&M operations.", points: ["Live device status", "Alarm suppression", "Fault-to-ticket flow"] },
  { icon: MessageSquare, title: "AI coworker", body: "Ask Ray in Slack, Teams or AMMP OS. He builds the chart and explains what he found.", points: ["Natural-language questions", "Charts on demand", "Evidence attached"] },
  { icon: Workflow, title: "Automated workflows", body: "Data freezes, monthly reports and recurring checks that run without anyone pressing go.", points: ["Monthly data freeze", "Scheduled investor reports", "Proactive QA"] },
  { icon: Code, title: "MCP & API", body: "Query live portfolio data from Claude, Cursor or your own scripts and BI tools.", points: ["MCP server", "Data API", "Your permissions apply"] },
];

export function ModeDeck() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-24">
      <div className="site-container">
        <div className="max-w-3xl">
          <h2 className={h2Class}>Work with AMMP the way your team works</h2>
        </div>
        <div className="mt-10 max-w-4xl space-y-3">
          {modes.map((mode, i) => {
            const isOpen = open === i;
            return (
              <div key={mode.title} className={`glass rounded-2xl ${isOpen ? "glass-active" : ""}`}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <mode.icon className={`size-5 shrink-0 ${isOpen ? "text-primary" : "text-primary/70"}`} />
                  <p className="flex-1 font-semibold">{mode.title}</p>
                  <ChevronDown className={`size-4 shrink-0 text-muted-foreground ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground">{mode.body}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {mode.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs">
                          <Check className="size-3 text-primary" />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 4 — Enterprise bento with UI artifacts */
const vendors = ["Huawei", "SMA", "SolarEdge", "Sungrow", "GoodWe", "Fronius", "Solis", "Victron", "Deye", "Growatt", "AlphaESS", "SigEnergy"];

export function TrustBento() {
  const [role, setRole] = useState<"am" | "om">("am");
  const perms = role === "am"
    ? [["Financial KPIs", true], ["Investor reports", true], ["Work orders", true], ["Device settings", false]]
    : [["Financial KPIs", false], ["Investor reports", false], ["Work orders", true], ["Device settings", true]];
  return (
    <section className="py-20 md:py-24">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow">Built for enterprise portfolios</p>
          <h2 className={`mt-4 ${h2Class}`}>Open, secure and ready to brand</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="glass flex flex-col justify-center rounded-3xl p-7 lg:col-span-2">
            <p className="font-semibold">Hardware agnostic</p>
            <p className="mt-1 text-sm text-muted-foreground">One data model, whatever is on site.</p>
            <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
              {vendors.map((v) => (
                <span key={v} className="rounded-full border border-border/70 bg-background/70 px-3 py-2 text-center text-sm">{v}</span>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-7">
            <div className="flex items-center gap-2"><LockKeyhole className="size-4 text-primary" /><p className="font-semibold">Role-based access</p></div>
            <div className="mt-4 inline-flex rounded-full border border-border/70 bg-background/70 p-1 text-xs">
              {([["am", "Asset manager"], ["om", "O&M contractor"]] as const).map(([k, l]) => (
                <button key={k} type="button" onClick={() => setRole(k)} className={`rounded-full px-3 py-1 ${role === k ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{l}</button>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {perms.map(([name, ok]) => (
                <li key={name as string} className="flex items-center justify-between">
                  <span>{name as string}</span>
                  <span className={ok ? "text-primary" : "text-muted-foreground"}>{ok ? "Allowed" : "Hidden"}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-2 text-xs">
              <span className="flex items-center gap-1 rounded-full border border-border/70 px-2.5 py-1"><KeyRound className="size-3" />SSO</span>
              <span className="flex items-center gap-1 rounded-full border border-border/70 px-2.5 py-1"><ShieldCheck className="size-3" />Tenant isolation</span>
            </div>
          </div>
          <div className="glass rounded-3xl p-7">
            <div className="flex items-center gap-2"><FileText className="size-4 text-primary" /><p className="font-semibold">White-label reporting</p></div>
            <div className="mt-4 rounded-xl border border-border/60 bg-background/80 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">YOUR BRAND</span>
                <span className="text-[10px] text-muted-foreground">Monthly report</span>
              </div>
              <div className="mt-3 flex h-16 items-end gap-1.5">
                {[60, 75, 50, 85, 70, 92, 80].map((h, i) => <div key={i} className="flex-1 rounded-t bg-primary/70" style={{ height: `${h}%` }} />)}
              </div>
              <p className="mt-2 text-[10px] text-muted-foreground">Performance ratio · Availability · Revenue</p>
            </div>
          </div>
          <div className="glass rounded-3xl p-7 lg:col-span-2">
            <div className="flex items-center gap-2"><Server className="size-4 text-primary" /><p className="font-semibold">Open MCP server</p></div>
            <p className="mt-1 text-sm text-muted-foreground">Bring portfolio context to any AI assistant.</p>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="status-pulse size-1.5 rounded-full bg-primary" /><span className="font-medium">Connected · mcp.ammp.io</span>
            </div>
            <div className="mt-4 grid gap-2 font-mono text-xs sm:grid-cols-2">
              {["get_assets", "get_kpis", "get_alerts", "get_timeseries"].map((t) => (
                <div key={t} className="rounded-lg border border-border/60 bg-background/70 px-3 py-2">{t}()</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
