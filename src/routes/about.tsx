import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Handshake, Sparkles, Target, Compass, Wrench, UserCheck } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, QuoteBand, Prose } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { RayIcon } from "@/components/site/RayIcon";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About AMMP — an AI coworker for the energy transition" },
    { name: "description", content: "AMMP started in Tanzania's mini-grids and now gives renewable energy teams an AI coworker grounded in real portfolio data." },
    { property: "og:title", content: "About AMMP — an AI coworker for the energy transition" },
    { property: "og:description", content: "Meet the company building an AI coworker on top of a trusted operating layer for renewable energy portfolios." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About AMMP"
        title="AI coworker, built on a decade of"
        highlight="portfolio operating experience."
        intro="AMMP gives renewable energy teams an AI coworker that investigates, prioritises and prepares work—grounded in the same operational context we've been building since 2016."
        primary={{ label: "Meet your coworker", to: "/contact" }}
        secondary={{ label: "See the platform", to: "/product" }}
      />

      <Band tone="grey">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Our story" title="From mini-grids in Tanzania to 10,000+ sites worldwide" />
          <Prose plain className="mt-6">
            <p>AMMP was founded in 2016 by Svet, Stine and Hendrik, three entrepreneurs who met while building and operating mini-grids in rural Tanzania with Rafiki Power.</p>
            <p>Working in the field, they experienced firsthand the challenges of managing distributed energy systems in remote locations: unreliable connectivity, diverse equipment from multiple vendors, and the need for real-time visibility to keep systems running efficiently.</p>
            <p>They built AMMP to solve these problems, not just for themselves, but for the entire distributed energy sector. Today, AMMP monitors over 10,000 sites across 30+ countries, helping solar developers, operators, and asset managers scale their portfolios with confidence—and now adding an AI coworker on top of that same trusted data.</p>
          </Prose>
        </div>
      </Band>

      <Band tone="white">
        <QuoteBand quote="A world that runs on reliable and sustainable energy." author="Our mission" />
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="What drives us" title="The values behind the platform" center />
        <FeatureGrid
          columns={3}
          features={[
            { icon: Sparkles, title: "Impact first", text: "Every feature we build is designed to help our customers deliver more clean energy to more people." },
            { icon: Target, title: "Built for scale", text: "From 10 sites to 10,000, our platform grows with you, handling complexity so you can focus on growth." },
            { icon: Handshake, title: "Customer obsessed", text: "We work closely with our customers, adapting our platform to their real-world operational needs." },
          ]}
        />
      </Band>

      <Band tone="white">
        <SectionHeading eyebrow="How we work with you" title="Strategic customers get a dedicated team" intro="Across account management, product, and engineering. The platform then keeps pace with your portfolio." />
        <FeatureGrid
          columns={3}
          features={[
            { icon: UserCheck, title: "Dedicated account lead", text: "A single point of contact who knows your portfolio, your contracts and your priorities." },
            { icon: Compass, title: "Product partnership", text: "Your operational needs feed directly into our roadmap, so the platform evolves with your fleet." },
            { icon: Wrench, title: "Direct engineering access", text: "Complex integrations and edge cases go straight to the engineers building the platform. No ticket queues." },
          ]}
        />
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="One global team" title="Energy, software and data specialists across markets" intro="AMMP is a distributed team working across technologies and time zones, building with the operators and asset managers doing the work every day." center />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 flex gap-4 items-start">
            <Globe2 className="size-6 text-primary shrink-0" />
            <p className="text-sm leading-6 text-muted-foreground">A global team spanning multiple continents, close to the field where distributed energy actually gets built and operated.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 flex gap-4 items-start">
            <RayIcon className="size-10 shrink-0 ring-2 ring-primary/20" />
            <p className="text-sm leading-6 text-muted-foreground">The next chapter: a trusted operating system with an AI coworker built on top of real portfolio context.</p>
          </div>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
