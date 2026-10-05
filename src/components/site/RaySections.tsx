import { useRef, useState } from "react";
import { AlertTriangle, ArrowRight, Check, FileText, Play, Sun, Wind, Battery, Wrench, Scale, BarChart3 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import rayVideo from "@/assets/ray-overview.mp4.asset.json";
import rayPoster from "@/assets/ray-video-poster.jpg";
import rayAvatar from "@/assets/ray-avatar.png";

const h2Class = "font-display text-4xl font-medium leading-[1.1] tracking-[-0.015em] sm:text-5xl";

const chapters = [
  { t: 0, label: "07:02 morning check" },
  { t: 14, label: "Meet Ray" },
  { t: 22, label: "Performance vs. plan" },
  { t: 34, label: "Maintenance priorities" },
  { t: 44, label: "SLA compliance" },
  { t: 52, label: "Investor reporting" },
];

/* Video player with chapters */
export function RayPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const jump = (t: number) => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = t;
    setStarted(true);
    void v.play();
  };
  return (
<div className="glass-strong overflow-hidden rounded-3xl p-2 sm:p-3">
    <div className="relative overflow-hidden rounded-2xl bg-foreground/5">
      <video
        ref={ref}
        src={rayVideo.url}
        poster={rayPoster}
        controls={started}
        playsInline
        preload="metadata"
        className="aspect-video w-full"
        onPlay={() => setStarted(true)}
      />
      {!started && (
        <button
          type="button"
          onClick={() => jump(0)}
          aria-label="Play the Ray overview video"
          className="group absolute inset-0 grid place-items-center"
        >
          <span className="grid size-20 place-items-center rounded-full bg-foreground text-background shadow-xl transition-transform group-hover:scale-105">
            <Play className="ml-1 size-8 fill-current" />
          </span>
        </button>
      )}
    </div>
    <div className="flex flex-wrap justify-center gap-2 p-3">
      {chapters.map((c) => (
        <button key={c.t} type="button" onClick={() => jump(c.t)} className="glass-soft rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
          <span className="tabular-nums text-foreground">{Math.floor(c.t / 60)}:{String(c.t % 60).padStart(2, "0")}</span> · {c.label}
        </button>
      ))}
    </div>
  </div>
  );
}

/* Video showcase */
export function RayVideo() {
  return (
    <section id="ray-demo" className="relative scroll-mt-24 py-16 lg:py-24">
      <div className="site-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass-soft inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-primary"><span>Meet Ray</span></div>
            <h2 className={`mt-3 ${h2Class}`}>The coworker your team has been waiting for</h2>
            <p className="mt-5 text-lg text-muted-foreground">Built on 10 years of experience operating 10,000+ renewable energy sites. Works in Slack, Microsoft Teams and AMMP OS.</p>
          </div>
        </Reveal>
        <Reveal delay={120}><div className="mx-auto mt-12 max-w-5xl"><RayPlayer /></div></Reveal>
      </div>
    </section>
  );
}

/* A day with Ray: four responsibilities */
const tabs = [
  { id: "plan", label: "Performance vs. plan", icon: BarChart3 },
  { id: "maint", label: "Maintenance priorities", icon: Wrench },
  { id: "sla", label: "SLA compliance", icon: Scale },
  { id: "report", label: "Investor reporting", icon: FileText },
] as const;

function RayMsg({ time, children }: { time: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <img src={rayAvatar} alt="Ray" className="size-9 shrink-0 rounded-full object-cover ring-1 ring-primary/25" />
      <div className="min-w-0 flex-1">
        <div className="text-xs text-muted-foreground"><span className="font-medium text-primary">Ray</span> · {time}</div>
        <div className="mt-1 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function HumanMsg({ name, role, time, initials, children }: { name: string; role: string; time: string; initials: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="glass-soft grid size-9 shrink-0 place-items-center rounded-xl text-xs font-semibold">{initials}</span>
      <div>
        <div className="text-xs text-muted-foreground"><span className="font-medium text-foreground">{name}</span> · {role} · {time}</div>
        <p className="mt-1 text-sm">{children}</p>
      </div>
    </div>
  );
}

function Tag({ tone, children }: { tone: "action" | "watch" | "resource"; children: React.ReactNode }) {
  const cls = tone === "action" ? "bg-primary/10 text-primary" : tone === "watch" ? "bg-glow-amber/25 text-foreground" : "bg-secondary text-muted-foreground";
  return <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${cls}`}>{children}</span>;
}

export function RayDay() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("plan");
  return (
    <section className="relative py-16 lg:py-24">
      <div className="site-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass-soft inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-primary"><span>A day with Ray</span></div>
            <h2 className={`mt-3 ${h2Class}`}>Working before anyone's logged in</h2>
            <p className="mt-5 text-lg text-muted-foreground">Seven a.m. Ray has already checked yesterday's performance across every site — and knows which issues need a human.</p>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} role="tab" aria-selected={tab === id} type="button" onClick={() => setTab(id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${tab === id ? "bg-foreground text-background" : "glass-soft text-muted-foreground hover:text-foreground"}`}>
              <Icon className="size-4" />{label}
            </button>
          ))}
        </div>

        <div className="glass-strong mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl">
          <div className="flex items-center justify-between border-b border-white/50 px-5 py-3.5 text-sm">
            <span className="font-medium">{tab === "report" ? "# finance-reporting" : tab === "plan" ? "# portfolio-ops" : "Mark de Vries, Tom Visser, Ray"}</span>
            <span className="flex items-center gap-2 text-xs font-medium text-primary"><span className="status-pulse size-1.5 rounded-full bg-primary" />Ray is online</span>
          </div>
          <div key={tab} className="msg-in space-y-5 p-5 sm:p-7">
            {tab === "plan" && (<>
              <RayMsg time="07:02">September vs. financial model: portfolio <strong className="text-primary">−3.1%</strong>. Here's what's behind it:</RayMsg>
              <div className="space-y-2 pl-12">
                {[
                  { icon: Wind, site: "Westerkamp Wind · DE", v: "−6.2%", note: "Wind speed 11% below P50. No fault found.", tone: "resource" as const, tag: "Resource" },
                  { icon: Sun, site: "Brightwater Solar · US", v: "−14.8%", note: "INV-03 −38% vs. neighbours since Sep 18.", tone: "action" as const, tag: "Action" },
                  { icon: Battery, site: "Pine Ridge Storage · US", v: "95.8%", note: "Availability vs. 98.0% target (PCS trips).", tone: "watch" as const, tag: "Watch" },
                ].map((r) => (
                  <div key={r.site} className="glass-soft flex flex-wrap items-center gap-3 rounded-xl p-3 text-sm">
                    <r.icon className="size-4 text-muted-foreground" />
                    <span className="font-medium">{r.site}</span>
                    <span className="font-semibold tabular-nums text-primary">{r.v}</span>
                    <span className="flex-1 text-muted-foreground">{r.note}</span>
                    <Tag tone={r.tone}>{r.tag}</Tag>
                  </div>
                ))}
              </div>
              <RayMsg time="07:03">@Mark de Vries want me to dig into Brightwater?</RayMsg>
              <p className="text-center text-sm text-muted-foreground">Every month, Ray checks each site against your financial model — and tells bad weather from real problems.</p>
            </>)}

            {tab === "maint" && (<>
              <RayMsg time="09:05">Ranked by monthly revenue at risk, based on recurring alarms:</RayMsg>
              <ol className="space-y-2 pl-12">
                {[
                  ["Brightwater Solar — INV-03 over-temperature", "11 trips in 60 days · under warranty", "€6.1k / mo"],
                  ["Pine Ridge Storage — PCS trips", "14 trips in 30 days", "€8.4k / mo"],
                  ["Valle Soleado Solar — soiling", "PR down 3.4% since July", "€3.2k / mo"],
                ].map(([t, s, v], i) => (
                  <li key={t} className="glass-soft flex items-center gap-3 rounded-xl p-3 text-sm">
                    <span className="grid size-6 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary">{i + 1}</span>
                    <div className="flex-1"><div className="font-medium">{t}</div><div className="text-xs text-muted-foreground">{s}</div></div>
                    <span className="font-semibold tabular-nums">{v}</span>
                  </li>
                ))}
              </ol>
              <HumanMsg name="Tom Visser" role="O&M lead" time="09:08" initials="TV">The INV-03 fans at Brightwater were replaced in May. Should still be under warranty.</HumanMsg>
              <RayMsg time="09:08">Good catch, Tom. I've moved it to #1 and drafted a warranty claim to the OEM.</RayMsg>
            </>)}

            {tab === "sla" && (<>
              <RayMsg time="09:12">SunServe missed its availability guarantee at Valle Soleado in September. Draft LDs per clause 7.2:</RayMsg>
              <div className="glass-soft ml-12 rounded-xl p-4 text-sm">
                <div className="mb-3 flex items-center gap-2 font-medium"><AlertTriangle className="size-4 text-primary" />Contract availability (clause 7.2)</div>
                {[["Guaranteed availability", "98.0%"], ["Actual availability", "97.1%"], ["Shortfall × LD rate (€4,000 per pp)", "0.9 pp × €4,000"]].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-border/50 py-2"><span className="text-muted-foreground">{k}</span><span className="tabular-nums">{v}</span></div>
                ))}
                <div className="flex justify-between pt-3 font-semibold"><span>Liquidated damages</span><span className="text-primary tabular-nums">€3,600</span></div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="button glass rounded-full px-4 text-foreground">Review draft</span>
                  <span className="button button-primary rounded-full px-4">Send to SunServe</span>
                </div>
              </div>
              <RayMsg time="09:12">@Mark de Vries can you review the notice before I send it?</RayMsg>
              <p className="text-center text-sm text-muted-foreground">Ray keeps your O&M contractors accountable — checking every SLA and drafting the follow-up for your approval.</p>
            </>)}

            {tab === "report" && (<>
              <RayMsg time="16:40">Q3 investor report: first draft is ready. I pulled in the generation data, @Tom Visser's O&M notes and @Anna Kowalski's revenue vs. budget figures.</RayMsg>
              <div className="ml-12 grid grid-cols-3 gap-2">
                {[["Generation", "42.6 GWh"], ["Availability", "98.4%"], ["vs. budget", "−2.6%"]].map(([k, v]) => (
                  <div key={k} className="glass-soft rounded-xl p-3 text-center"><div className="text-lg font-medium tabular-nums">{v}</div><div className="text-xs text-muted-foreground">{k}</div></div>
                ))}
              </div>
              <HumanMsg name="Anna Kowalski" role="Finance" time="16:52" initials="AK">Looks great, let's send it to the investors.</HumanMsg>
              <RayMsg time="16:53">Here it is, in whatever format you need:</RayMsg>
              <div className="flex flex-wrap gap-2 pl-12">
                {["Q3 Investor Report.docx", "Investor deck.pptx", "Q3 Report.pdf", "KPI data.csv"].map((f) => (
                  <span key={f} className="glass-soft flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium"><FileText className="size-3.5 text-primary" />{f}</span>
                ))}
              </div>
            </>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Where Ray works + CTA */
export function RayEverywhere() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="site-container">
        <div className="glass mx-auto max-w-4xl rounded-3xl p-8 text-center md:p-12">
          <h2 className={h2Class}>Wherever your team already works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">In Slack, Microsoft Teams, or right inside AMMP OS — same Ray, same evidence, humans in control.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Slack", "Microsoft Teams", "AMMP OS"].map((p) => (
              <span key={p} className="glass-soft flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"><Check className="size-4 text-primary" />{p}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/contact" className="button button-primary rounded-full px-5">Book a walkthrough <ArrowRight className="size-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
