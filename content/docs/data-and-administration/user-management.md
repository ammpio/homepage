---
title: User management
description: Invite users to AMMP OS, set their profile, permissions and access scope, remove users, and create API keys.
category: Data and administration
order: 20
updated: 2026-10-28
status: current
---

The User Management section is where Admins control who can use AMMP OS and what they can see. For an overview of profiles and permission levels, see [Getting started with AMMP OS](./getting-started-with-ammp-os.md).

> [!NOTE]
> The Users page is only visible to users with Admin permissions.

## Inviting a user

1. Open **Users** and click **Invite New User**.
2. Enter the email address, select your organisation and choose the user profile: **Standard User** for your team, **Limited Viewer** for clients and investors.
3. Click **Send Invitation**. The user receives an email invitation.
4. On the next page, under **Access Control**, click **Edit**.
5. Select the permission (Viewer, Editor or Admin), the scope type and the scope name. Standard Users should normally get organisation-level access.
6. Click **Save**.

## Finding a user

Search by email address. Results show the email and the user profile. Click a user to see their access.

## Changing a user's access

1. Open the user and click **Edit**.
2. Change the permission, scope type and scope name. Click **Delete** on a row to remove that permission.
3. Click **Save**.

## Removing a user

Open the user, click **Delete User** at the top right, and click **Confirm**.

## API keys

The **API Keys** page lists your organisation's API keys.

To create one:

1. Click **+ New API Key**.
2. Click **Copy API Key** and store it somewhere safe.

> [!WARNING]
> Copy the key when it's created and keep it secure. Treat it like a password.

To connect AI assistants to your data without an API key, see [AMMP MCP server](./ammp-mcp-server.md).
