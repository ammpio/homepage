---
title: "Ray: data, permissions and security"
description: What data Ray can see, how Ray's access is controlled, whether your data trains AI models, and why Ray can't control hardware.
category: AMMP AI
order: 40
updated: 2026-10-28
status: current
---

Ray works with your operational data, so it follows the same access rules as the rest of AMMP.

## What Ray can see

Ray reads your portfolio through the [AMMP MCP server](./ammp-mcp-server.md):

- Assets, devices and site metadata
- Computed KPIs, such as production, performance ratio, availability and yield, at the same definitions as your dashboards
- Active and historical alerts
- Raw time series at native resolution
- Context your team shares with Ray, such as financial models, contract terms and tariffs

## Who controls Ray's access

Ray has its own AMMP account. Your AMMP admin decides which organisations, asset groups or assets it can access, exactly as for any other user. Ray can only see data within that scope. See [User management](./user-management.md).

Conversations happen in the channels Ray has been added to. Choose those channels with the same care as you would for a new team member.

## Read-only by design

Ray investigates, explains and drafts. It **can't** send control commands to equipment or change setpoints, and it doesn't change your settings in AMMP OS. Ray prepares tickets, work orders and reports; people review them and decide what happens.

## Your data and AI training

Your portfolio data, operational logs and conversations stay private to your organisation. They are **never used to train external or public AI models**.

## Accuracy

Ray works from AMMP's standardised data and KPI calculations, and cites its evidence. When the evidence is incomplete, Ray says so instead of guessing. Check important figures before you send them outside your organisation, as you would with any colleague's work.

## Security

AMMP is certified to ISO/IEC 27001:2022. See [ammp.io/security](https://www.ammp.io/security) for how your data is stored, protected and returned to you.

Questions about data handling: [support@ammp.io](mailto:support@ammp.io).
