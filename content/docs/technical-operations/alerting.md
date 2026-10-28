---
title: Alerting
description: Find, filter and act on alerts in AMMP OS, create tickets from alerts, set up suppression rules, export alerts and manage Standard Alerts.
category: Technical operations
order: 20
updated: 2026-10-28
status: current
---

AMMP Alerting collects the anomalies and performance issues across your assets and devices in one place, so your team can spot and act on problems quickly. Open it via **Alerts** under **Technical Operations** in the left sidebar.

## The Alerts page

Two summary cards at the top show your portfolio's health for the selected period:

- **Open:** the number of alerts with status Open.
- **Error:** the number of alerts with severity Error.

Both counts follow the date range and any asset or group filters you've applied. Below them are the filters and search, then the **Active Alerts** list.

## Filtering and finding alerts

- **Asset groups and assets:** pick one or more asset groups; the asset list then narrows to the assets in those groups, and you can pick individual assets.
- **Search:** matches the alert content, asset name or device name as you type.
- **Origin:** the source that raised the alert, such as SMA Event, VRM Event or AMMP Event. The list only shows origins present in your data.
- **Severity:** see the severity levels below.
- **Status:** Open, Escalated, Ignored or Closed.
- **Date range:** the default is the last 7 days. Enter a start and end date, or use the calendar presets: Today, Yesterday, This Week, Last Week, This Month, Last Month, This Year or All Time.
- **Refresh:** reloads the list with the latest data.

## Understanding alerts

Each alert row shows:

| Field | Description |
| --- | --- |
| Severity | Colour-coded severity badge |
| Asset | Asset name, plus the date and time the alert was triggered |
| Device | The device that raised the alert, and its origin |
| Content | Description of the alert |
| Status | Current acknowledgement status |

Where available, the last acknowledgement (date, user, comment and ticket link) is shown on the row too.

### Severity levels

| Severity | Meaning |
| --- | --- |
| OK | The condition that triggered the alert has cleared |
| Info | Informational; no action needed |
| Warning | A condition needs attention |
| Error | A condition needs action |
| Critical | A severe condition needing urgent action |

### Statuses

| Status | Meaning |
| --- | --- |
| Open | Triggered and not yet acknowledged |
| Escalated | Passed on for investigation or action |
| Ignored | Archived; hidden from the default Active Alerts view |
| Closed | Resolved |

## Acting on an alert

Any AMMP OS user can act on alerts.

1. Click the status button on the right of the alert row.
2. Choose **Escalate**, **Ignore** or **Close**.
3. In the **Acknowledge Alert** window, add an optional comment and click **Acknowledge**.

You can move an alert between any statuses in any order, for example from Ignored back to Open.

> [!TIP]
> Use the comment to record who is investigating or what should happen next. Comments are saved with the alert and included in CSV exports and in tickets created from the alert.

### Escalating and creating a ticket

When you escalate, tick **Create Ticket** before clicking **Acknowledge** to open a ticket in [Ticketing](./ticketing.md) at the same time. The ticket link then appears on the alert row, with the name of the person who escalated it and when.

## Bulk actions

To act on several alerts at once:

1. Tick the checkbox on each alert row, or the checkbox at the top of the list to select every alert shown.
2. Choose **Escalate**, **Create Ticket**, **Ignore** or **Close**.
3. Add an optional comment, which applies to every selected alert, and click **Acknowledge**.

A bulk escalation with **Create Ticket** ticked creates one ticket for all the selected alerts, and links it on each alert row.

## Alert suppression

Suppression rules hide alerts you don't need to act on, such as expected alerts during planned maintenance or noisy, low-value vendor alerts. Suppressed alerts aren't deleted; they're only filtered out of the Active Alerts view.

### Creating a suppression rule from an alert

1. Click the three-dot **Actions** button on the alert row and choose **Suppress**.
2. A pre-filled window shows the alert's data source (for example SMA), its content, its status level and the suppression scope.
3. Click **Save** to activate the rule.

Click **Customise rule** before saving to change:

- **Content:** the keywords to match.
- **Status level:** one specific level (Warning, Error and so on) or all levels.
- **Scope:** your whole portfolio, or specific assets or asset groups.

### Managing suppression rules

The **Suppression Rules** tab lists all active and past rules for your organisation.

## Exporting alerts

Click **Export** at the top right to download the alerts currently shown as a CSV file. The export follows your active filters.

| Column | Description |
| --- | --- |
| Time | When the alert was triggered |
| Asset Name | Associated asset |
| Device Name | Associated device |
| Alert Origin | Source or vendor |
| State | Severity |
| Content | Alert description |
| Acknowledgement | Current status |
| Acknowledged By | Email of the last person who acted on it |
| Last Acknowledged | Date and time of the last action |
| Comment | Comment from the last action |

## Managing Standard Alerts

Standard Alerts are pre-configured alerts available to every AMMP customer. They cover common conditions such as communication failures, battery state of charge and PV generation performance. Open them with **Manage Standard Alerts** at the top right of the Alerts page.

> [!NOTE]
> Managing Standard Alerts requires Admin permissions.

| Column | Description |
| --- | --- |
| Alert Name | Name of the alert |
| Thresholds | Warning and/or Error thresholds, where they apply |
| Status | Whether the alert is enabled |
| Last Updated | When the alert was last changed |

- **Enable or disable** an alert with the toggle in the Status column.
- **Change thresholds:** click the pencil icon next to the values, edit the Warning and/or Error threshold, and click **Save**. Logic-based alerts have no thresholds and show N/A.

## Alert notifications

AMMP can also send alerts as messages, for example to a Slack channel, so you hear about them on your desktop or phone. Each notification shows the alert name, its state, the site, the parameter and its value, and the date and time. A red marker means the alert has just been triggered; a green one means the condition has cleared.

## Custom alerts

To set up custom alerts, or to route notifications to email, Microsoft Teams, Slack or a webhook, email [support@ammp.io](mailto:support@ammp.io).
