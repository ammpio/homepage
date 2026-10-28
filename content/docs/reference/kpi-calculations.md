---
title: KPI calculations
description: How AMMP calculates yield target ratio, performance ratio and PV potential, and how it classifies PV energy losses into eight event types.
category: Reference
order: 10
updated: 2026-10-28
status: current
---

This page explains how AMMP calculates its key performance indicators and classifies PV losses. It's a technical reference for the numbers in the Monitoring Center, the loss waterfall and Sankey charts, and reports.

## Yield target ratio (YTR)

How much energy a plant delivered relative to its target yield.

`YTR = actual energy / target yield`

The target yield is usually based on PVsyst simulation results for the asset. It's set per asset under **Target Yield** (see [Data management](./data-management.md)).

## Performance ratio (PR)

PR is calculated according to IEC 61724-1. AMMP supports a non-weather-corrected and a weather-corrected variant. In both, timestamps with irradiance below **50 W/m²** are excluded.

**Non-weather-corrected PR** compares the AC energy produced with what the installed DC capacity would produce at the measured plane-of-array irradiance:

`PR = E_AC / (P_DC × H_POA / G_STC)`

where `E_AC` is the AC energy produced, `P_DC` the installed DC capacity, `H_POA` the plane-of-array irradiation over the period and `G_STC` = 1,000 W/m².

**Weather-corrected PR** also corrects for module temperature, so it reflects plant health independent of the weather:

`PR_corr = Σ E_AC,i / Σ [ P_DC × (G_POA,i / G_STC) × (1 + β × (T_mod,i − T_ref)) × Δt ]`

| Parameter | Meaning | Default |
| --- | --- | --- |
| `T_ref` | Module reference temperature | 25 °C |
| `β` | Maximum power temperature coefficient of the modules (from the datasheet) | −0.4 %/°C |

Choose which variant an asset uses with **PR Algorithm** under Performance Metadata.

## PV potential

The theoretical output of the plant under the actual irradiance, in a non-weather-corrected and a weather-corrected variant, following the same logic as PR.

## Losses and underperformance

- **Remaining loss (underperformance):** the gap between PV potential and actual production.
- **Irradiance underperformance:** the gap between PV potential and target yield, reflecting how actual irradiance differed from the simulation.

## PV loss classification

AMMP runs a decision tree on every timestamp of PV output. Each timestamp gets exactly one event type, and the energy lost is calculated. This powers the waterfall and Sankey charts in the PV Loss Analysis dashboard.

| # | Event type | In short |
| --- | --- | --- |
| 1 | Grid downtime | The grid is down, so the plant can't export |
| 2 | Plant downtime | No PV output although the grid is available |
| 3 | Unclear downtime | No PV output, and grid status unknown (no voltage data) |
| 4 | Equipment loss (inverter-specific) | Local equipment issues affecting fewer than 70% of inverters |
| 5 | Plant soiling | Plant-wide loss; output follows irradiance but stays below potential |
| 6 | Plant curtailment | Plant-wide loss; output doesn't follow irradiance |
| 7 | Plant clipping | Plant AC capacity is the limit |
| 8 | Unclassified loss | Can't be attributed to a specific cause |

### 1. Grid downtime

**Rule:** PV power = 0 during daytime and the `grid_down` flag is true.

The `grid_down` flag comes from per-phase AC voltage: true when any phase drops below the configured threshold, false when all phases are above it, and empty when there's no voltage data.

**Data needed:** plant DC capacity; irradiance, PV power, grid voltage and grid power.

### 2. Plant downtime

**Rule:** PV power = 0 (or at most 1% of plant AC capacity) during daytime, and either grid power ≠ 0 or `grid_down` is false.

- **Trickle detection:** PV power above 0 but at most 1% of AC capacity is treated as zero, so trickle output from inverters doesn't hide real downtime.
- **All inverters down:** if inverter data is available and 100% of inverters are at or below 1% of their capacity, the timestamp is treated as downtime even when plant power is slightly above zero. The loss is capped at PV potential minus PV power, to avoid double counting.

**Data needed:** plant DC capacity; irradiance, PV power, grid voltage and grid power.

### 3. Unclear downtime

**Rule:** PV power = 0 during daytime, `grid_down` is empty (no voltage data), and grid power is 0 or missing.

**Data needed:** plant DC capacity; irradiance and PV power.

### 4. Equipment loss (inverter-specific)

AMMP checks each inverter and classifies it as:

- **Inverter downtime:** power missing, or at most 1% of reference capacity.
- **Inverter underperformance:** power positive but below expected output (its share of DC capacity × a 95% PR threshold), and below AC capacity.
- **Inverter clipping:** below expected output but within ±2% of AC capacity.

**Rule:** plant PV power > 0, PR < 95%, and fewer than 70% of inverters underperforming.

Only *underperforming* inverters count towards the 70% threshold; inverters in downtime don't. Even if 95% of inverters are down, the timestamp is still equipment loss, unless all of them are down (see plant downtime). Inverter losses are scaled so they add up to the plant-level loss.

**Data needed:** plant DC capacity, inverter AC and DC capacity; irradiance, plant PV power and inverter PV power.

### 5. Plant soiling

**Rule:** more than 70% of inverters underperforming, and the rolling Pearson correlation between PV power and PV potential (5-interval window) is at least 0.80.

**Data needed:** as for equipment loss.

### 6. Plant curtailment

**Rule:** more than 70% of inverters underperforming, and that correlation is below 0.80. If the correlation can't be calculated (fewer than 2 valid points in the window), the event is labelled soiling/curtailment (unresolved).

**Data needed:** as for equipment loss.

### 7. Plant clipping

**Rule:** PV power > 0, PR < 95%, and PV power within ±2% of plant AC capacity. Clipping of individual inverters is handled at inverter level and counted under equipment loss.

**Data needed:** plant AC and DC capacity; irradiance and plant PV power.

### 8. Unclassified loss

- **Data issue:** irradiance missing, PV power invalid (negative or not a number), or required capacity metadata missing.
- **Satellite irradiance mode:** losses that depend on precise irradiance can't be classified reliably (see below).
- **Residual:** small gaps in the energy balance, for example a "no loss" timestamp where PV power is slightly below potential.

## Satellite irradiance mode

When irradiance comes from satellite data instead of an on-site sensor, AMMP restricts the classification:

- **Still classified:** grid downtime, plant downtime, unclear downtime and plant AC clipping.
- **Reported as unclassified:** plant soiling, plant curtailment and inverter underperformance.

This avoids false soiling or curtailment results caused by satellite inaccuracies.

## Days with sparse data

If more than 30% of a day's irradiated intervals are missing, that whole day's loss is reported as unclassified.

## Data needed for the full loss waterfall

| Metadata | Time series |
| --- | --- |
| Plant DC capacity | Irradiance |
| Inverter AC capacity (per inverter) | Plant PV power |
| Inverter DC capacity (per inverter) | Inverter PV power (per inverter) |
| | Grid voltage |
| | Grid power |

Set capacities under [Performance metadata](./data-management.md#performance-metadata). For help with KPI setup, email [support@ammp.io](mailto:support@ammp.io).
