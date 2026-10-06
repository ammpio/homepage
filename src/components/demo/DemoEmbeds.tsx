import { ExternalLink } from "lucide-react";

const SANDBOX = "allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";

const REPORTS = [
  { title: "Financial Impact Report", url: "https://lookerstudio.google.com/embed/reporting/66f72475-f1b3-4fa9-831e-d5fe881b1599/page/p_dlffyreajd", ratio: "3 / 4" },
  { title: "BESS Report", url: "https://lookerstudio.google.com/embed/reporting/2e0596e4-29f3-48b5-9b12-2d2649be14ff/page/p_dlffyreajd", ratio: "16 / 9" },
  { title: "PV Performance Report", url: "https://lookerstudio.google.com/embed/reporting/9b6c97a2-84ab-43e0-95c8-adfea97b0bae/page/p_dlffyreajd", ratio: "16 / 9" },
];

const KEY = "kiosk&key=dfa7d496.1b62571974b53a0b9e99242bae803af0";
const DASHBOARDS = [
  { title: "PV Loss Waterfall", desc: "Visual breakdown of energy losses from potential to actual output", url: `https://public.ammp.io/d/bupnOgSvk/06-system-level-pv-loss-analysis?orgId=402&viewPanel=504&${KEY}` },
  { title: "PV Loss Categories", desc: "Categorized loss analysis by type and source", url: `https://public.ammp.io/d/bupnOgSvk/06-system-level-pv-loss-analysis?orgId=402&viewPanel=505&${KEY}` },
  { title: "PV Loss Breakdown", desc: "Detailed loss breakdown and performance analysis", url: `https://public.ammp.io/d/bupnOgSvk/06-system-level-pv-loss-analysis?orgId=402&viewPanel=512&${KEY}` },
  { title: "Portfolio Real-Time", desc: "Live real-time portfolio monitoring", url: `https://public.ammp.io/d/-YKptx3gPq/02-portfolio-real-time?orgId=402&refresh=5m&viewPanel=4&${KEY}` },
  { title: "Portfolio PV KPIs", desc: "Key performance indicators for solar assets", url: `https://public.ammp.io/d/R-mR42FyL/03-portfolio-pv-kpis?orgId=402&viewPanel=493&${KEY}` },
  { title: "Battery Analysis", desc: "System-level battery performance and state-of-charge analysis", url: `https://public.ammp.io/d/SY8rQ1UIh/07-system-level-battery-analysis?orgId=402&viewPanel=502&${KEY}` },
  { title: "Power Forecast", desc: "Predicted power generation based on weather data", url: `https://public.ammp.io/d/W68FRugvk/10-power-forecast?orgId=402&viewPanel=7&${KEY}` },
];

function Embed({ title, desc, url, ratio = "16 / 9" }: { title: string; desc?: string; url: string; ratio?: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-medium">{title}</h3>
          {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          <ExternalLink className="size-3" /> Full screen
        </a>
      </div>
      <div className="w-full overflow-hidden rounded-lg bg-muted" style={{ aspectRatio: ratio }}>
        <iframe src={url} title={title} className="size-full border-0" allowFullScreen loading="lazy" sandbox={SANDBOX} />
      </div>
    </div>
  );
}

export function SampleReports() {
  return <div className="space-y-6">{REPORTS.map((r) => <Embed key={r.title} {...r} />)}</div>;
}

export function LiveDashboards() {
  return <div className="space-y-6">{DASHBOARDS.map((d) => <Embed key={d.title} {...d} />)}</div>;
}
