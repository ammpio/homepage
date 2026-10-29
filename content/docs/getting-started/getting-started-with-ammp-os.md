---
title: Getting started with AMMP OS
description: AMMP's two modules, how the AMMP OS Portal is organised, user profiles and permissions, and where to start.
category: Getting started
order: 10
updated: 2026-10-29
status: current
---

AMMP helps you run solar, battery, hybrid, wind and genset portfolios from one place. It has two modules. You can use either one on its own, or both together.

| Module | What it is | Where you use it |
| --- | --- | --- |
| **AMMP AI** | Ray, an AI coworker grounded in your portfolio data. Ray checks performance, triages alarms, audits contracts and drafts reports, and shows the evidence behind every answer. | Microsoft Teams, Slack and AMMP OS |
| **AMMP OS Platform** | The monitoring and operations platform: dashboards, alerting, ticketing, reporting, energy savings and tariffs, data management and integrations. | The AMMP OS Portal in your browser |

Both modules sit on the same data foundation. AMMP collects data from your inverters, batteries, meters, sensors and gensets (through vendor APIs or the [AMMP Edge](./edge-installation.md) datalogger), standardises it and calculates the same KPIs for people and for Ray.

Ray also works without AMMP OS. If you already use another monitoring platform, such as Meteocontrol or Power Factors, Ray can work on top of it.

## How the portal is organised

The AMMP OS Portal is where you reach every module for monitoring, operating, reporting on and billing your portfolio. The left sidebar groups it into five sections.

| Section | What you'll find there |
| --- | --- |
| Technical Operations | [Monitoring Center](./monitoring-center.md), [Alerting](./alerting.md) and [Ticketing](./ticketing.md) |
| Commercial Operations | [Reporting Studio](./reporting-studio.md), the [Energy Savings Hub and Tariff Management](./energy-savings-hub.md) and the [Stakeholder Portal](./stakeholder-portal.md) |
| External Apps | [Google Reporting](./google-reporting.md), built on Looker Studio |
| Data Management | Assets, Asset Groups, Performance Metadata and the [Export Center](./export-center.md). See [Data management](./data-management.md). |
| User Management | Users and API keys. See [User management](./user-management.md). |

For how AMMP calculates performance ratio, PV potential and energy losses, see [KPI calculations](./kpi-calculations.md).

## User profiles

AMMP OS has two user profiles.

| Profile | Intended for | What they see |
| --- | --- | --- |
| Standard User | Your own team | The full AMMP OS Portal, including the Monitoring Center and the Stakeholder Portal. Usually given organisation-level access. |
| Limited Viewer | Clients, investors or EPC partners | Only the [Stakeholder Portal](./stakeholder-portal.md). They're sent there automatically when they sign in. |

## Permissions

Every user gets one of three permission levels for each organisation, asset group or asset they can access.

| Permission | Can do |
| --- | --- |
| Viewer | Read data |
| Editor | Read and write data |
| Admin | Read and write data, and change other users' permissions |

Some actions in these guides need Editor or Admin rights; each page says so where it applies.

## AMMP AI and add-ons

Ray reads the same data and KPIs you see in the portal, so you can ask "why is this site underperforming?" instead of digging through dashboards. See [Meet Ray](./meet-ray.md) and [Working with Ray](./working-with-ray.md).

Two add-ons work with either module:

- **[MCP server](./ammp-mcp-server.md):** connect Claude, Copilot or your own AI agent to your portfolio data through the open Model Context Protocol. Ray runs on the same server.
- **Data API:** all your energy data through one REST API. See [Connect Excel and Google Sheets](./excel-and-google-sheets.md) for a no-code example.

## Where to start

| If you want to… | Start here |
| --- | --- |
| Understand what Ray does | [Meet Ray](./meet-ray.md) |
| Start working with Ray | [Working with Ray](./working-with-ray.md) |
| See what to ask Ray | [What you can ask Ray](./ray-use-cases.md) |
| Know how Ray handles your data | [Ray: data, permissions and security](./ray-data-and-security.md) |
| Connect Claude, Copilot or your own agent | [AMMP MCP server](./ammp-mcp-server.md) |
| Install AMMP Edge on site | [AMMP Edge installation](./edge-installation.md) |

## Getting help

For a quick tour, watch the [video tutorial](https://www.loom.com/share/da4c8529416544c3b264730142638d01).

Email [support@ammp.io](mailto:support@ammp.io), or use the Help icon in the AMMP OS Portal. For pricing or a walkthrough, email [sales@ammp.io](mailto:sales@ammp.io).
