import { Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, FileText, Wrench } from "lucide-react";

/* Wording reused from the homepage "Details" section and the /use-cases pages. */
const teams = [
  { icon: BarChart3, title: "Asset managers", text: "See what needs attention first and move from symptom to root cause faster.", points: ["Performance benchmarking against expected yields", "PPA/Lease tracking with our tariff engine", "Automated technical and savings reports"], to: "/use-cases/asset-managers" as const },
  { icon: Wrench, title: "O&M teams", text: "Receive prioritized issues with the context needed to plan the right response.", points: ["SLA tracking for uptime and response times", "Preventive maintenance planned across your fleet", "Client dashboards for asset owners"], to: "/use-cases/om-providers" as const },
  { icon: FileText, title: "Reporting teams", text: "Turn standardized portfolio data into clear, reviewable reporting outputs.", points: ["Every site in the same data model", "Report templates generated on schedule", "Every figure traces back to site data"], to: "/use-cases/reporting-teams" as const },
];

export function TeamUseCases({ compact = false }: { compact?: boolean } = {}) {
  return (
    <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3">
      {teams.map(({ icon: Icon, ...t }) => (
        <div key={t.title} className="glass flex flex-col rounded-2xl p-6 text-center">
          <Icon className="mx-auto size-6 text-primary" />
          <p className="mt-3 font-medium">{t.title}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
          {!compact && <ul className="mt-4 space-y-2 text-sm">{t.points.map((p) => <li key={p}>{p}</li>)}</ul>}
          <Link to={t.to} className="mt-5 inline-flex items-center justify-center gap-1 text-sm font-medium hover:underline">Learn more <ArrowRight className="size-4" /></Link>
        </div>
      ))}
    </div>
  );
}

const tech = ["Solar PV", "Battery storage", "Hybrid and mini-grids", "Wind", "Diesel gensets", "Meters and weather stations"];
const vendors = ["Huawei", "SMA", "SolarEdge", "Sungrow", "Fronius", "Victron", "GoodWe", "Solis", "Deye", "Growatt", "AlphaESS", "SigEnergy"];

export function TechCoverage({ oem = false }: { oem?: boolean } = {}) {
  return (
    <div className="mx-auto mt-10 max-w-4xl space-y-6 text-center">
      <div className="flex flex-wrap justify-center gap-2">{tech.map((t) => <span key={t} className="glass rounded-full px-3 py-1 text-sm">{t}</span>)}</div>
      {!oem && <div className="flex flex-wrap justify-center gap-2">{vendors.map((v) => <span key={v} className="rounded-full border border-border/60 bg-background px-3 py-1 text-sm text-muted-foreground">{v}</span>)}</div>}
      <p className="text-sm text-muted-foreground">10,000+ sites · 30+ countries · 30+ integrations · <Link to="/integrations" className="underline">All integrations</Link></p>
    </div>
  );
}
