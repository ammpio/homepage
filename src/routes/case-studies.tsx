import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, MapPin, Quote } from "lucide-react";
import { Band, PageHero, SectionHeading } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import daystarPowerLogo from "@/assets/daystar-power-logo.png";
import solarsaverLogo from "@/assets/solarsaver-logo.png";
import broadreachLogo from "@/assets/broadreach-logo.png";
import { RayIcon } from "@/components/site/RayIcon";

export const Route = createFileRoute("/case-studies")({
  head: () => ({ meta: [
    { title: "Customer Success Stories — AMMP" },
    { name: "description", content: "See how C&I solar developers across Africa use AMMP and AI coworkers to scale their operations and deliver exceptional results." },
    { property: "og:title", content: "Customer Success Stories — AMMP" },
    { property: "og:description", content: "Trusted by Daystar Power (a Shell company), Broadreach Energy, SolarSaver, and more." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

type Study = {
  id: number; company: string; logo?: string; region: string; countries: string; industry: string;
  portfolio: string; result: string; description: string; quote?: string; author?: string; role?: string;
  highlights: string[]; downloadLink?: string;
  engagement?: { title: string; items: string[] }; contactCta?: string;
};

const caseStudies: Study[] = [
  {
    id: 1, company: "Daystar Power", logo: daystarPowerLogo, region: "West Africa", countries: "Nigeria, Ghana, Togo, Senegal",
    industry: "C&I Hybrid Solar", portfolio: "200+ sites", result: "99.9% uptime achieved",
    description: "Managing 200+ hybrid solar systems across West Africa with real-time monitoring and remote diagnostics.",
    quote: "AMMP is a crucial tool in maintaining and operating our power systems across West Africa. It allows us to monitor all critical aspects of our operations in real time, enabling us to intervene immediately if and when necessary.",
    author: "Jasper Graf Von Hardenberg", role: "Former CEO, Daystar Power",
    highlights: ["Real-time visibility across 4 countries", "Reduced reactive maintenance", "Centralised NOC operations"],
    downloadLink: "https://share.hsforms.com/1nsuX_VqnQEOrgDDjG-A1Kg2rhet",
  },
  {
    id: 2, company: "SolarSaver", logo: solarsaverLogo, region: "Southern Africa", countries: "South Africa, Namibia, Botswana",
    industry: "C&I Rooftop Solar (PPA/Rent-to-own)", portfolio: "700+ systems", result: "Reporting reduced from 1 month to 1 day",
    description: "Streamlined billing and reporting for a distributed portfolio of C&I rooftop installations across Southern Africa.",
    quote: "The AMMP solutions have not only streamlined our reporting but also simplified billing processes, marking a significant reduction in our monthly reporting time.",
    author: "Chris Robinson", role: "Head of Maintenance and Reporting, SolarSaver",
    highlights: ["Reduced reporting from 2+ FTE to 1 person", "Automated billing data extraction", "Simplified multi-site management"],
    downloadLink: "https://share.hsforms.com/1BfxC8QB3SjiKPI2Nnc62TA2rhet",
  },
  {
    id: 3, company: "Broadreach Energy", logo: broadreachLogo, region: "South Africa", countries: "South Africa",
    industry: "C&I Solar (PPA, Solarleases, Shared Savings)", portfolio: "170+ sites, 30+ MW", result: "Simplified monitoring of 170+ sites in 1 portal",
    description: "Broadreach Energy manages a diverse portfolio of commercial solar installations across South Africa, requiring unified monitoring across multiple business models and client types.",
    quote: "It has been a pleasure to work with AMMP... Their willingness to work with us to understand our needs, and to modify their systems to cater for our requirements, is invaluable.",
    author: "Adam Bekker", role: "Managing Director, Broadreach Energy",
    highlights: ["Single portal for 170+ diverse sites", "Custom reporting for different business models", "Scalable platform as portfolio grows"],
    downloadLink: "https://share.hsforms.com/1TvpUWYnvS8i4x3iVH7qz_g2rhet",
  },
  {
    id: 5, company: "UNHCR", region: "Global (humanitarian operations)", countries: "UNHCR field offices",
    industry: "Humanitarian / Hybrid Power", portfolio: "~50 sites", result: "Centralised monitoring across UNHCR's hybrid power portfolio",
    description: "Following a competitive tender (RFQ 1808), UNHCR selected AMMP to monitor its hybrid power portfolio. AMMP aggregates data from existing OEM and EMS systems, with AMMP Edge dataloggers used at sites without on-site APIs.",
    highlights: ["Aggregates PV, batteries, gensets and grid in one portal", "EU-hosted, ISO 27001 certified", "CO₂ and sustainability reporting"],
    engagement: {
      title: "Engagement at a glance",
      items: [
        "3-year term, with two 1-year extension options",
        "Approximately 50 hybrid power sites",
        "Data residency in the EU (AWS Amsterdam / Frankfurt)",
        "Integrates with existing OEM/EMS systems; AMMP Edge for sites without APIs",
      ],
    },
    contactCta: "Discuss a similar engagement",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Customer results"
        title="Customer"
        highlight="success stories"
        intro="See how C&I solar developers across Africa use AMMP, and now AI coworkers grounded in that same operating data, to scale their operations and deliver exceptional results."
      />


      {caseStudies.map((study, index) => (
        <Band key={study.id} tone={index % 2 === 0 ? "grey" : "white"}>
          <div className="grid overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" /><span>{study.region}</span><span className="text-border">•</span><span>{study.industry}</span>
              </div>
              <div className="mb-2 flex items-center gap-3">
                {study.logo && <img src={study.logo} alt={study.company} className="h-8 w-auto object-contain" />}
                <h2 className="text-2xl font-bold">{study.company}</h2>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{study.countries} • {study.portfolio}</p>
              <p className="mb-4 text-3xl font-bold text-primary">{study.result}</p>
              <p className="mb-6 text-muted-foreground">{study.description}</p>
              <div className="mb-6 space-y-2">
                {study.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm"><div className="size-1.5 rounded-full bg-primary" />{h}</div>
                ))}
              </div>
              {study.downloadLink ? (
                <a href={study.downloadLink} target="_blank" rel="noreferrer" className="button button-primary"><Download className="size-4" />Download case study</a>
              ) : (
                <Link to="/contact" className="button button-ghost">{study.contactCta}<ArrowRight className="size-4" /></Link>
              )}
            </div>
            <div className="flex flex-col justify-center bg-secondary/40 p-8 lg:p-12">
              {study.quote ? (
                <>
                  <Quote className="mb-4 size-10 text-primary/30" />
                  <blockquote className="mb-6 text-lg italic">“{study.quote}”</blockquote>
                  <div><p className="font-semibold">{study.author}</p><p className="text-sm text-muted-foreground">{study.role}</p></div>
                </>
              ) : study.engagement ? (
                <>
                  <h3 className="mb-4 text-xl font-semibold">{study.engagement.title}</h3>
                  <ul className="space-y-3">
                    {study.engagement.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm"><div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" /><span>{item}</span></li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        </Band>
      ))}

      <Band tone="white">
        <SectionHeading eyebrow="What's next" title="The same evidence, now with a coworker attached" center />
        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-card p-6">
          <RayIcon className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-muted-foreground">Every result above started with AMMP OS data. Ray, our AI coworker, now works on that same data, investigating and preparing the reporting these teams used to do by hand.</p>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
