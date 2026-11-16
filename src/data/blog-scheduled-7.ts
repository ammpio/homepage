import type { BlogBlock } from "./blog-posts";
import podcastCover from "@/assets/blog-podcast-agents-cover.jpg.asset.json";
import { assetUrl } from "@/lib/assets";

const EPISODE = "https://engwith.ai/episodes/svet-bajlekov-discovered-agents-in-his-slack";

export const covers7 = {
  podcast: { src: assetUrl(podcastCover), alt: "A podcast microphone, a chat thread with two AI agents, and a solar panel with a rising performance line" },
};

export const podcastAgentsBody: BlogBlock[] = [
  { type: "paragraph", text: "Svet Bajlekov on the Engineering with AI podcast" },
  { type: "rich", parts: [
    { a: "Svet Bajlekov", href: "https://www.linkedin.com/in/bajlekov/" },
    ", AMMP's co-founder and CEO, recently joined Kyle Hodgson on the ",
    { a: "Engineering with AI podcast", href: EPISODE },
    ". Kyle knows the industry from the operator side: he worked on solar in Africa at Odyssey Energy. The conversation covered how AMMP started, the AI agents that now work alongside our team, and what that taught us when we built Ray. Here are the parts we think matter most for anyone running renewable assets.",
  ] },
  { type: "heading", text: "From mini-grids to C&I portfolios" },
  { type: "paragraph", text: "Svet started in physics, moved into management consulting, and in 2013–14 went into renewables in emerging markets: first a mini-grid company in Kenya, then Rafiki Power, E.ON's mini-grid business in Tanzania and Sierra Leone, where he became CTO. In 2018 he and a few colleagues spun the software side out as AMMP." },
  { type: "paragraph", text: "The early focus was rural electrification. Within a year or two it shifted to commercial and industrial (C&I) solar and storage, which is still the core today: sites from a few hundred kilowatts to tens of megawatts, many of them in sub-Saharan Africa, with customers now moving into larger and utility-scale sites as well." },
  { type: "heading", text: "Agents with names, in shared threads" },
  { type: "paragraph", text: "The part of the episode Kyle kept coming back to was how AMMP's own team works with AI. Until a few months ago, everyone used their own coding assistant locally. Work showed up as a pull request, but nobody else could see the prompts, the context or who had actually written what." },
  { type: "paragraph", text: "The change was to bring agents into Slack. Each one has its own workspace, its own tools and its own identity. Sparky triages: when an error appears in the alerts channel, anyone can ask her to look into it, and she reads the logs and the code and reports back in the thread. Coda writes code: he picks up Sparky's findings from the same thread, makes the fix, has it reviewed and opens a pull request that links back to the conversation that started it." },
  { type: "quote", text: "The audit trail becomes a lot easier,” Svet said. “It's allowed us a much greater level of transparency as to who is doing what, and how it's being built." },
  { type: "paragraph", text: "One small setting made a big difference: teaching the agents to stay quiet unless someone actually asks them something. An agent that answers every message in a busy thread gets muted within a week." },
  { type: "heading", text: "The same idea, pointed at energy systems" },
  { type: "paragraph", text: "Ray applies that way of working to customers' portfolios. He lives in the team's Microsoft Teams or Slack channels and works on the same live data as the rest of AMMP OS." },
  { type: "paragraph", text: "Svet was candid about why this only became practical recently. Energy systems produce time series, and language models are poor at reading long columns of numbers. What changed is that agents can now write and run their own analysis code: they inspect the data, then crunch it with proper tools, and only bring the result back into the conversation." },
  { type: "paragraph", text: "In practice, a morning with Ray looks like this. Someone asks what happened across the portfolio since yesterday, or Ray runs the check on a schedule before the team logs on. He triages the alerts, checks performance ratio and battery state of charge, and looks at whether an alert actually cost production or was just noise. Then he ranks what's left by lost revenue, using the site's tariff or PPA price, and can tag the person responsible for a site or draft the O&M ticket." },
  { type: "paragraph", text: "On a portfolio of hundreds of sites, that ranking is the point. A string disconnect on one site can matter far more than a critical-looking alarm on another, and the only way to know is to put a number on each." },
  { type: "heading", text: "Data quality decides everything" },
  { type: "paragraph", text: "Svet's main caveat was the one we hear least often in AI conversations: the output is only as good as the data underneath." },
  { type: "quote", text: "There's often an expectation that AI will magically solve these things. Just sprinkle it on top.", author: "Svet Bajlekov" },
  { type: "paragraph", text: "That's why so much of AMMP's work over the years has gone into reliable data feeds from many different vendors, none of which follow the same standard. And it's where Ray is surprisingly useful in a different way: asked for a monthly production report, he states what the data quality was and flags the sites where gaps might affect the numbers. He also catches metadata that doesn't add up, like a site producing 2.5 MW when it's registered at 1.5 MW, usually because someone typed a capacity into a spreadsheet years ago." },
  { type: "heading", text: "What comes next" },
  { type: "paragraph", text: "Two threads to watch from the conversation. First, proper evaluations: replaying solved problems against different models, to replace gut feeling with evidence. Svet's view for now is that the model matters less than it used to; good instructions, good tools and good data matter more. Second, smaller classification models that could sort the alert stream before a language model ever sees it, which would make triage cheaper and more reliable." },
  { type: "paragraph", text: "And asked what he'd changed his mind about, Svet had an honest answer for an engineer who's been coding for years: a year ago he wouldn't have believed he'd mostly stop reading code line by line, and hand the review to other agents." },
  { type: "rich", parts: [
    "Listen to the full episode on ",
    { a: "Engineering with AI", href: EPISODE },
    ". To see how Ray works on your own portfolio, start at ",
    { a: "ammp.io/ray", href: "/ray" },
    ".",
  ] },
];
