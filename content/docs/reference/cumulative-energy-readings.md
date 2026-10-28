---
title: Daily and monthly energy from cumulative readings
description: How AMMP turns cumulative meter readings from AMMP Edge into daily and monthly energy, and how it handles data gaps.
category: Reference
order: 20
updated: 2026-10-28
status: current
---

Most equipment read by [AMMP Edge](./edge-installation.md) reports only a cumulative energy counter. AMMP converts these readings into daily and monthly energy values. The examples below use daily values; monthly values work the same way.

## No data gaps

Daily energy for a day is the last cumulative reading of that day minus the last reading of the day before.

## A gap within one day

Gaps that start and end on the same day don't matter. The same calculation applies.

## A gap across midnight

If a gap starts on one day and ends on another, it's impossible to know on which day the energy in the gap was produced or consumed. AMMP:

1. Calculates how much energy was produced or consumed during the gap.
2. Calculates a provisional daily value for the day.
3. Keeps that value only if the energy in the gap is small enough that the daily value is at most **10%** inaccurate.

If it isn't, no daily value is stored for that day. This keeps every published daily value within 10% accuracy.
