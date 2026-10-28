---
title: Connect Excel and Google Sheets to the Data API
description: Pull AMMP data into Excel with AMMP's Power Query templates, or into Google Sheets with the SyncWith add-on.
category: Integrations
order: 30
updated: 2026-10-28
status: current
---

You can pull data from the [AMMP Data API](https://data-api.ammp.io/docs) straight into Excel or Google Sheets for your own analysis and reports, and refresh it on demand. You'll need an API key; see [User management](./user-management.md#api-keys).

To query AMMP data from an AI assistant instead, see [AMMP MCP server](./ammp-mcp-server.md).

## Excel

There are two ways to connect: start from an AMMP template, or add the AMMP queries to an existing workbook. A [video walkthrough](https://www.loom.com/share/c91704479a2542e38a4403145655a9b2) shows the template route.

### Using the AMMP template

1. Ask [support@ammp.io](mailto:support@ammp.io) for the latest template. There are templates for different data, such as historic energy or power; the matching endpoints are listed in the [Data API docs](https://data-api.ammp.io/docs).
2. Open the template, and click **Enable Editing** and **Enable Content**.
3. Go to **Data → Get Data → Query Options → Current Workbook (Privacy)** and select **Ignore privacy levels**, so Excel can fetch external data.
4. Click **Launch Power Query Editor**.
5. Under **Input Parameters**, open **Enter your API key** and paste your key.
6. Set the start date in **Date From** (`yyyy-MM-dd`). In the power template, use **Enter Starting Time** (`yyyy-MM-dd hh:mm:ss`, with a space before the time).
7. Set the end date in **Date To** the same way.
8. Set **Interval**: `1d` for daily or `1M` for monthly energy; `1h` or `15m` in the power template.
9. Click **Refresh All**. Your assets load into **Step 5: Select the Assets**. If a yellow bar with **Edit credentials** appears, click it and then **Connect**.
10. To use only some assets, filter the `asset_id` column.
11. Check the result under **Output → Output**.
12. Click **Close & Load**, then **Data → Queries & Connections**.
13. Right-click **Output** and choose **Load To…** to put the data on a sheet.

### Troubleshooting

- **Firewall error:** repeat step 3 (Ignore privacy levels).
- **No assets shown:** in Power Query, switch on **View → Query Settings**, select **Step 5: Select the Assets**, and delete any **Filtered Rows** step under Applied Steps.
- **Updating the period:** open **Data → Queries & Connections**, double-click the parameter, change it, click **Close & Load**, then click **Refresh All** twice (two separate clicks).

### Adding AMMP data to an existing workbook

1. Open your workbook and the AMMP template, and launch the Power Query Editor in both.
2. Copy all queries from the template and paste them into your workbook's query list.
3. Continue from step 2 of the template instructions.

## Google Sheets

Google Sheets has no template, because each user installs the API add-on themselves.

1. Install the **SyncWith | Any API** add-on, then open **Extensions → SyncWith | Any API → Launch sidebar**.
2. Choose **Custom** at the bottom of the list.
3. Create a `POST` request to the Data API's token endpoint (see the [Data API docs](https://data-api.ammp.io/docs)) with two headers: `accept: application/json` and `x-api-key: <your API key>`.
4. Click **Preview** to check it returns a token, then **Insert** it into the first sheet.
5. Create further requests for the endpoints you need, using cell references for the token and query parameters. See SyncWith's guide to [cell references](https://syncwith.com/tutorials/cell-references-eEJGhm1VBrYCeasxndZv86).

> [!TIP]
> A cell reference that points to a range, such as a column of asset IDs, makes one API call per cell. That's an easy way to pull data for many assets at once.

You can also [schedule refreshes](https://syncwith.com/p/scheduled-api-refreshes-eAbzcD89VFwNpHNUNwSSVT). Tokens expire, so make sure the schedule refreshes the token request before the data requests.
