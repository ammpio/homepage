---
title: Data management
description: Manage assets, asset groups, performance ratio inputs and inverter AC/DC capacities in the AMMP OS Portal.
category: Data and administration
order: 10
updated: 2026-10-28
status: current
---

The Data Management section of the AMMP OS Portal holds the information AMMP uses to calculate your KPIs: your assets, how they're grouped, and their performance settings. Tariffs are covered in [Energy Savings Hub and Tariff Management](./energy-savings-hub.md), and data exports in the [Export Center](./export-center.md).

## Assets

The **Assets** page lists every asset in your organisation. Search by name, or page through the list.

Click an asset to open its details:

| Tab | Contents |
| --- | --- |
| Asset | Metadata: name, organisation, grid type, installed PV capacity, location, modelled loss and more |
| Devices | Devices connected to the asset |
| Gateways | Gateways connected to the asset |
| Target Yield | Expected energy yield, daily or monthly |
| Datasource Selection | Preferred data source for specific fields |
| Share Access | Users with access to this asset |
| Time of Operation | The asset's operating hours |
| Audit Log | History of changes (Editor and Admin only) |

### Editing an asset

> [!NOTE]
> Requires Editor or Admin permissions.

1. Click the pencil icon on the asset page.
2. Change the fields you need.
3. Click the save icon.

## Asset groups

Asset groups let you group assets by location, customer, EPC or any structure that suits you. Groups can then be used as filters across AMMP OS, such as in [Alerting](./alerting.md).

- **Find a group:** search by name, or page through the list.
- **See a group's assets:** click the arrow next to the group name.
- **Edit a group:** click the group, change the name or select and deselect assets, and click **Save**.
- **Create a group:** click **Create Asset Group**, enter a name, select the assets, and click **Save**.

## Performance metadata

The Performance Metadata page has two tabs.

### Performance Ratio Input

| Field | Description |
| --- | --- |
| PV Capacity | Installed PV capacity (read-only) |
| Target PR | The performance ratio you expect from the system |
| Modelled Loss | Expected system losses, such as shading and soiling |
| Target Yield | Whether expected yield values have been uploaded |
| PR Algorithm | Which weather correction to use for PR |

To edit: click the pencil icon on the row, change the Target PR, Modelled Loss or PR Algorithm, and click the save icon. See [KPI calculations](./kpi-calculations.md) for how these inputs are used.

### PV Inverter Metadata

Each row is a PV inverter in your portfolio, with its AC and DC capacity. Accurate capacities give more precise loss classification and performance calculations.

- **Find an inverter:** search by site name, inverter name or serial number.
- **Edit capacities:** click the pencil icon, enter the AC and/or DC capacity, and click the save icon.
