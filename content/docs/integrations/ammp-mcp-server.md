---
title: AMMP MCP server
description: Connect Claude, Claude Code or another AI assistant to your AMMP data through the AMMP MCP server.
category: Integrations
order: 10
updated: 2026-10-28
status: current
---

The AMMP MCP server lets an AI assistant read your AMMP data directly: site and device details, power and energy time series, KPIs, alert status and raw device data. It uses the [Model Context Protocol](https://modelcontextprotocol.io) (MCP), an open standard supported by Claude, Claude Code and a growing number of other AI tools.

You ask in plain language, for example "Which sites had the lowest performance ratio last month?", and the assistant picks the right AMMP tools, runs the queries and answers with your data.

## Server details

| Setting | Value |
| --- | --- |
| Server URL | `https://mcp.ammp.io/mcp` |
| Transport | Streamable HTTP over HTTPS |
| Authentication | OAuth 2.1 with dynamic client registration and PKCE |
| Access | Read-only |

## Sign-in and permissions

Every user signs in with their own AMMP account. The server passes that sign-in on to AMMP's data services, so the assistant sees the same organisations, sites and devices your account sees in AMMP OS, and nothing else.

All tools are read-only. The assistant can't change settings, alerts, tickets or data in AMMP OS.

Sessions refresh automatically in the background. When a session eventually expires, your AI tool asks you to sign in again.

## Connect Claude (web, desktop and mobile)

1. In Claude, open **Settings → Connectors**.
2. Select **Add custom connector**.
3. Enter a name, such as `AMMP`, and the server URL `https://mcp.ammp.io/mcp`.
4. Select **Connect** and sign in with your AMMP account.
5. In a chat, check that the AMMP connector is switched on in the tools menu.

On Claude Team and Enterprise plans, an owner may need to add the connector for the whole organisation first. Menu names can differ slightly between Claude versions.

## Connect Claude Code

Add the server from your terminal:

```bash
claude mcp add --transport http ammp https://mcp.ammp.io/mcp
```

Then run `/mcp` inside Claude Code, select **ammp** and sign in with your AMMP account.

## Other AI tools

Any MCP client that supports remote servers over Streamable HTTP with OAuth can connect. Add `https://mcp.ammp.io/mcp` as a remote MCP server and sign in when prompted.

> [!IMPORTANT]
> Some enterprise platforms, such as Gemini Enterprise, need a pre-registered OAuth client instead of dynamic client registration. If your platform asks for a client ID and secret, contact your AMMP account manager.

## What you can ask

- "List my sites in Kenya with their PV capacity."
- "Show daily energy for Site X over the last 30 days."
- "Which sites have open alerts right now?"
- "Break down last month's energy losses for Site X into downtime, clipping, soiling and curtailment."
- "Export 15-minute power data for every site in group Y for September as a CSV."

## Large results and exports

Small results come back directly in the conversation. Larger tables are stored for a short time and returned as a summary with sample rows. The assistant can then turn a stored table into a CSV or Parquet download link. These links are temporary, so save the file once it's ready.

For every tool and option, see the [MCP tools reference](./mcp-tools-reference.md).
