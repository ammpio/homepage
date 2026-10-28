---
title: Energy Savings Hub and Tariff Management
description: Track your clients' energy and demand-charge savings in the Energy Savings Hub, and create, edit and assign grid and PPA tariffs.
category: Commercial operations
order: 20
updated: 2026-10-28
status: current
---

The Energy Savings Hub (ESH) calculates and tracks your end clients' electricity costs and savings. Use it to back up invoices and reports, and to spot further savings from demand-side management, batteries or solar expansion. Tariff Management is where you set up the grid and PPA tariffs the ESH calculates with.

## Using the Energy Savings Hub

Open it via **Energy Savings Hub** in the left sidebar of the AMMP OS Portal.

> [!IMPORTANT]
> An asset only appears in the ESH once it has both a grid tariff and a PPA tariff assigned. See [Assigning a tariff](#assigning-a-tariff-to-an-asset).

### Dashboards

Switch dashboards with the names along the top, and filter with the asset and time range selectors.

| Dashboard | What it shows |
| --- | --- |
| Energy Savings | Energy cost savings based on time-of-use tariff rates. Supports fixed tariffs and time-of-use PPAs. |
| Demand Charge Savings | For assets whose grid tariff has a demand charge, how much solar has reduced the monthly peak demand charge and what that saved. |

Demand charge savings only appear for assets with a demand-charge tariff assigned. Email [support@ammp.io](mailto:support@ammp.io) if you need help setting this up.

### Exporting savings data

1. Click the panel title and choose **Inspect → Data**.
2. Expand **Data options** and switch on **Apply panel transformations**, so the export matches the dashboard. Switch on **Download for Excel** for an Excel-friendly CSV.
3. Click **Download CSV**.

## Tariff Management

Open it via **Tariff Management** in the left sidebar. It has three tabs: **Tariff Assignments**, **Grid Tariffs** and **PPAs**.

### Viewing tariff assignments

The Tariff Assignments tab lists the grid and PPA tariff for each asset. Hover over a tariff name to see its schedule and rates.

### Assigning a tariff to an asset

1. Find the asset and click the pencil icon next to the tariff.
2. Select the grid or PPA tariff from the dropdown.
3. Click the save icon.

### Choosing a savings algorithm

1. Click the pencil icon on the asset's row.
2. Under **Savings algorithm**, choose **PV Savings Only** or **Tariff Arbitrage**.
3. Save.

### Creating a tariff

1. Click **Create Tariff** at the top right of the Tariff Assignments tab.
2. Fill in the tariff name, tariff type (Grid or PPA), currency and energy charge type (Fixed or Time-of-Use).
3. Click **Save**. The tariff appears in the Grid Tariffs or PPAs tab, where you add its schedule and rates.

### Editing a tariff

Click a tariff in the Grid Tariffs or PPAs tab, then click **Edit** at the top right to add, change or remove schedules and rates. If you need a schedule that isn't in the **Schedule** dropdown, contact the Customer Success team.

### PPA options

**Fixed monthly charge:** a flat monthly amount billed to the offtaker regardless of consumption, on top of the per-kWh PPA rate. Combined with a zero PPA rate, this models a fixed lease contract.

**Minimum offtake:** the minimum kWh the offtaker must pay for each month. AMMP bills the greater of actual consumption and the minimum offtake at the PPA rate.

## Getting help

Email [support@ammp.io](mailto:support@ammp.io), or use the Help icon in the AMMP OS Portal.
