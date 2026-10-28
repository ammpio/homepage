---
title: Meet Ray
description: Ray is AMMP's AI coworker for renewable portfolios. What Ray does, where it works, and how it differs from a general-purpose chatbot.
category: AMMP AI
order: 10
updated: 2026-10-28
status: current
---

Ray is AMMP's AI coworker, built for running renewable energy portfolios. Ray is part of the **AMMP AI** module. It analyses data across your solar, storage and hybrid sites, triages issues before your team logs on, answers operational questions with evidence, and drafts reports.

## Where Ray works

Ray works where your team already does: in **Microsoft Teams**, in **Slack** and in **AMMP OS**. You mention Ray in a channel or chat, just as you would a colleague, and Ray replies in the conversation.

## What Ray does

| Job | What Ray does |
| --- | --- |
| Morning triage | Checks yesterday's performance across every site before the team starts, and flags which issues need a person |
| Performance vs. plan | Compares each site with your financial model or target yield, and separates bad weather from real problems |
| Alarm triage | Ranks open issues by what they put at risk commercially, so the team fixes the most expensive problem first, not the loudest one |
| Root-cause diagnosis | Combines inverter readings, string comparisons, alarm history and site metadata to explain why a site underperforms |
| Contract and SLA checks | Checks availability and performance against contract terms and guarantees |
| Reports and updates | Drafts stakeholder and investor updates, exports and charts |

See [What you can ask Ray](./ray-use-cases.md) for examples.

## How Ray is different from a general chatbot

- **Grounded in your data.** Ray works from the same data and KPI definitions as AMMP OS: assets and metadata, computed KPIs, active and historical alerts, and raw time series.
- **Shows its evidence.** Every answer cites what it's based on, such as inverter readings, string comparisons, alarm history or contract terms. When the evidence is incomplete, Ray says so instead of guessing.
- **Remembers your context.** Ray keeps context about your portfolio and your team, and learns from your feedback over time.
- **Read-only.** Ray investigates, explains and drafts. It can't control hardware or change setpoints, and people keep every decision. See [Ray: data, permissions and security](./ray-data-and-security.md).

## Ray and AMMP OS

Ray runs on AMMP OS's data foundation, but you don't need AMMP OS Platform to use Ray. If you already use another monitoring platform, such as Meteocontrol or Power Factors, Ray can work on top of it. Talk to [sales@ammp.io](mailto:sales@ammp.io) about connecting your existing stack.

## Ray and the MCP server

Ray uses the [AMMP MCP server](./ammp-mcp-server.md) to read your portfolio. The same server is available as an add-on, so Claude, Copilot or your own agent can use the same portfolio context. You can use Ray, your own assistant, or both.

## Getting Ray

Ray comes with the AMMP AI module, priced per MWp per year. Email [sales@ammp.io](mailto:sales@ammp.io) for a walkthrough or a proposal. Once you're signed up, see [Working with Ray](./working-with-ray.md).
