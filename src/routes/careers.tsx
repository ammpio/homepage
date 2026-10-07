import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Globe, Heart, Lightbulb, Quote } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import teamLighthouse from "@/assets/team/team-lighthouse.jpeg";
import teamCycling from "@/assets/team/team-cycling.jpeg";
import teamGames from "@/assets/team/team-games.jpeg";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [
    { title: "Careers at AMMP — Build the operating system for clean energy" },
    { name: "description", content: "Join the team building an AI coworker and the operating layer renewable energy operators depend on every day." },
    { property: "og:title", content: "Careers at AMMP" },
    { property: "og:description", content: "Be part of something really great. Help us build the operating system for clean energy." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const quotes = [
  { quote: "A great opportunity to grow as a citizen of the world who wants to make a change.", role: "Team Member" },
  { quote: "Technically interesting, challenging and being on the right side of business (sustainability).", role: "Team Member" },
  { quote: "To contribute, learn and be part of something really great.", role: "Team Member" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help us put AI coworker to work across"
        highlight="the renewable energy transition."
        intro="Be part of something really great. Help us build the operating system for clean energy—and the AI coworker that run on top of it."
        primary={{ label: "View open positions", to: "/careers" }}
        secondary={{ label: "Talk to us", to: "/contact" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="A fast-paced startup on a mission" intro="We're a fast-paced startup on a mission to accelerate the global transition to clean energy." center />
        <FeatureGrid
          columns={4}
          features={[
            { icon: Heart, title: "Impact-driven", text: "Be part of the clean energy transition and make a real difference in sustainability." },
            { icon: Lightbulb, title: "Technically challenging", text: "Work on complex problems at the intersection of energy, data, and software." },
            { icon: Globe, title: "Global & remote-friendly", text: "Join a distributed team spanning multiple continents and time zones." },
            { icon: Clock, title: "Flexibility first", text: "We trust our team to manage their time and deliver great results." },
          ]}
        />
      </Band>

      <Band tone="white">
        <SectionHeading title="What our team says" center />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6">
              <Quote className="size-6 text-primary/40" />
              <p className="mt-4 italic text-sm leading-6">"{q.quote}"</p>
              <p className="mt-4 text-sm text-muted-foreground">— {q.role}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading title="Life at AMMP" intro="We're a global, remote-first team that comes together for collaboration, adventure, and fun." center />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <img src={teamLighthouse} alt="AMMP team at company offsite" className="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
          <img src={teamCycling} alt="Team cycling together" className="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
          <img src={teamGames} alt="Team game night" className="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
        </div>
      </Band>

      <Band tone="white">
        <SectionHeading title="Open positions" intro="Explore our current openings and find your next opportunity." center />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-xl border border-border bg-card">
          <iframe src="https://app.dover.com/jobs/ammp?embed=1" width="100%" height="700" title="AMMP Careers - Open Positions" className="min-h-[700px] w-full" loading="lazy" />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Can't see the positions?{" "}
          <a href="https://app.dover.com/jobs/ammp" target="_blank" rel="noreferrer" className="text-primary hover:underline">View on Dover →</a>
        </p>
      </Band>

      <Band tone="grey">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Don't see a fit?</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">We're always looking for talented people. Get in touch and tell us how you can contribute.</p>
          <Link to="/contact" className="button button-ghost mt-8">Contact us <ArrowRight className="size-4" /></Link>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
