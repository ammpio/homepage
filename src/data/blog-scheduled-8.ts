import type { BlogBlock } from "./blog-posts";
import cover from "@/assets/blog-single-player-ai-cover.jpg.asset.json";
import { assetUrl } from "@/lib/assets";

export const covers8 = {
  singlePlayer: { src: assetUrl(cover), alt: "One person working alone with a private AI chat, next to a team sharing an open channel with an AI agent at its centre" },
};

// Svet Bajlekov's "Single-player AI" post. English text approved word for word by Svet — do not edit.
export const singlePlayerBody: BlogBlock[] = [
  { type: "paragraph", text: "Most of us use AI every day at work. Almost all of it happens in private." },
  { type: "paragraph", text: "Someone needs a summary for the monthly portfolio review. They paste a raw data export into Claude, fiddle with the prompt a bit, and when they’re happy with the output, copy the result into a shared document. A couple of other colleagues make final tweaks. On Thursday it goes to the investment committee." },
  { type: "paragraph", text: "By then nobody can say what parts were written by the AI vs a human, what numbers were sense-checked by a person - or indeed which raw export this was based on. The original chat sits in one person's account." },
  { type: "paragraph", text: "Next month someone else does the same thing, with a different export and a different set of prompts." },
  { type: "paragraph", text: "I call this single-player AI. It's how most teams work today, including - until recently - ours." },
  { type: "paragraph", text: "For personal work it's fine; I use AI this way every day. But doing it in a team setting sooner or later leads to a world of pain." },
  { type: "paragraph", text: "You can't retrace any of the work. A private chat keeps the reasoning on one laptop - so when a number looks off, tracing the logic becomes an exercise in digital archeology. Did the person who pasted in the figures cross-check them? Do they stand behind them? In a shared document, “drafted by a model” and “checked by Anna” look the same." },
  { type: "paragraph", text: "Not just that, but everyone starts from scratch, taking their own agent on their individual AI journey. Each person explains the portfolio to their own assistant: site conventions, contract terms…which inverters were swapped last year, and why. Five people end up with five slightly different versions of the truth." },
  { type: "heading", text: "Multiplayer AI" },
  { type: "paragraph", text: "The alternative is to treat AI agents as members of the team. Bring them into the team's existing communication channels, where everyone collaborates. Make the agents a part of that. Give them an identity, a workspace, appropriate access rights." },
  { type: "paragraph", text: "The human’s prompting and the agent’s work happen in the open. The brief, the raw data, the reasoning, and the outputs – available for all to see. The agent can create documents and own them. Hand-off is explicit and transparent. Everything can be traced, easily verified, and replayed the next time." },
  { type: "rich", parts: [
    "That's how we built ",
    { a: "Ray, our AI coworker", href: "/ray" },
    ". He lives in our customers' ",
    { a: "Microsoft Teams or Slack channels", href: "/blog/solar-battery-alerts-microsoft-teams-slack" },
    ". His morning check of the portfolio is posted in the channel, with the evidence attached. Questions to him, and his answers, stay in the thread. When he drafts a report or an O&M claim, someone approves it, and the thread shows who. If data is missing, he says so.",
  ] },
  { type: "paragraph", text: "Ray learns on the job, and brings his learnings the next time a related assignment or task comes up. His unified data connections and skills are a source of truth shared across the team. What’s more, team members get to learn from each other, and share best practices." },
  { type: "heading", text: "Where to start" },
  { type: "paragraph", text: "You don't need new software to get out of single-player mode. Four habits help:" },
  { type: "list", items: [
    "When posting AI-assisted work, include details on how it was derived – e.g. based on what prompts and data sources.",
    "Connect assistants to shared data instead of feeding them exports.",
    "Clearly label what was AI generated vs crafted by a human.",
    "Specify what has been reviewed and approved, vs what still needs a closer look.",
  ] },
  { type: "paragraph", text: "In some sense most of the technology is already there. What's usually missing is a team agreement on how people and AI work together. Though ultimately, I do see a rapidly shifting landscape in terms of where and how this collaboration takes place. When it comes to streamlining this, I think we’re just getting started!" },
  { type: "rich", parts: ["More on Ray: ", { a: "/ray", href: "/ray" }] },
];
