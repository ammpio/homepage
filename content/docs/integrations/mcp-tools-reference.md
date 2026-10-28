---
title: MCP tools reference
description: Every tool the AMMP MCP server offers, what each returns, and how IDs, results and exports work.
category: Integrations
order: 20
updated: 2026-10-28
status: current
---

Your AI assistant picks these tools for you, so you don't call them by hand. Use this page to see what the assistant can do and to check its work. For setup, see [AMMP MCP server](./ammp-mcp-server.md).

## IDs and names

AMMP uses short IDs (UIDs) that start with a letter for the type: `O` for organisations, `G` for asset groups, `A` for assets (sites) and `D` for devices, for example `D3N1P6RWM0`. Most tools also accept a site name and match it even when it isn't spelled exactly.

Times use ISO 8601 with a UTC offset, such as `2026-10-01T00:00:00Z`.

## Find organisations, sites and devices

| Tool | What it returns |
| --- | --- |
| `list_orgs` | Organisations your account can access, including sub-organisations |
| `list_asset_groups` | Asset groups, with an optional name search |
| `list_assets` | Sites, filtered by name or group, with location, country and PV capacity (kWp) |
| `get_asset_detail` | One site's timezone, grid type, coordinates, PV capacity, expected PR, modelled loss, tilt, azimuth and tags |
| `list_devices` | A site's inverters, meters, batteries and gensets, with model, manufacturer, serial number, rated capacity and when data last arrived |
| `list_edge_xnodes` | Third-party data gateways linked to a site (AMMP Edge dataloggers aren't listed here) |

## Time series, KPIs and alerts

| Tool | What it returns |
| --- | --- |
| `query_time_series` | Power, energy, battery or environment data for one or more sites or groups |
| `get_kpis` | KPIs for one or more sites or groups (see the KPI types below) |
| `get_status` | Current alert status, one row per alert |
| `query_device_data` | Data for a single inverter, meter, battery system or genset, at 5- or 15-minute resolution |

Time steps for `query_time_series`:

| Metric type | Available intervals |
| --- | --- |
| `power` | 15 minutes, 1 hour |
| `energy` | 1 hour, 1 day, 1 month, or automatic |
| `battery` | 15 minutes, 1 hour |
| `environment` | 5 minutes, 15 minutes, 1 hour, 1 day, or automatic |

KPI types for `get_kpis`:

| KPI type | Contents |
| --- | --- |
| `pv_performance` | Performance including expected PV power or energy, based on the site's weather correction and modelled loss |
| `pv_yield_losses` | Grid and plant downtime, and the energy lost to each |
| `loss_waterfall` | Losses split into downtime, inverter losses, clipping, soiling and curtailment, with the main loss category per period |
| `financial_impact` | Financial results per hour, day or month |
| `environmental_impact` | Environmental impact per period |
| `time_of_operation` | Daily operating time |

Requests for many sites run in pages of 100 sites, so a question about a whole portfolio takes a few round trips. If some sites fail, the others still return and the failures come back as warnings.

## Raw device data

| Tool | What it does |
| --- | --- |
| `raw_data_schema` | Lists the raw fields available for a site's devices. The assistant calls this first. |
| `query_raw_data` | Returns raw or aggregated values for the chosen fields and devices |
| `influx_query` | Runs an advanced InfluxQL query for one organisation, for cases the tools above can't cover |

Raw data comes in two naming schemes: `standard`, the AMMP data model that's the same across all vendors, and `source`, the field names used by the device's own vendor system.

## Data API access

| Tool | What it does |
| --- | --- |
| `list_endpoints` | Lists all AMMP Data API endpoints |
| `query_endpoint` | Calls any Data API read (GET) endpoint directly |

## Results and exports

Table results can come back in several ways. The assistant usually chooses, but you can ask for a specific one.

| Mode | Behaviour |
| --- | --- |
| `auto` (default) | Small results come back in full; large ones are stored and returned as a summary with sample rows |
| `preview` | Column names and a few sample rows only |
| `reference` | Always stores the result and returns its ID |
| `inline` | Returns every row, up to a size limit |
| `download` | Returns a temporary CSV or Parquet download link |

`persist_result` turns a stored result into a CSV or Parquet download link. Stored results and download links are temporary.

> [!NOTE]
> All tools are read-only and only return data your AMMP account is allowed to see.
