---
title: Router and datalogger setup
description: Configure the site router's DHCP range, power and connect the AMMP Edge datalogger, and check it's visible on the network.
category: AMMP Edge
order: 20
updated: 2026-10-28
status: current
---

Part of the [AMMP Edge installation](./edge-installation.md).

## Router setup

1. Connect and power up the router.
2. Connect your laptop to the router by cable or Wi-Fi.
3. Set the router's DHCP range to start at `192.168.1.101`. Check this on older installations too. Ask your company's IT contact if you need help. Save the settings and reboot the router.
4. Reconnect to the router.
5. Check that the router has an internet connection.

## Datalogger setup

1. Power the datalogger from a DC supply: connect its V+ and V− terminals to a 24 V output.
2. Connect the datalogger's Ethernet port to the site router with a crimped RJ45 cable. This lets it reach the other equipment on site.

## Checking the datalogger is on the network

Connect a laptop to the site network and use any of these:

- **Router:** log in to the router (usually `192.168.1.1`), open the list of wired clients and look for `ammp-edge`.
- **ARP table:** in a terminal, run `arp -a` and look for `ammp-edge`.
- **Network scan:** install [nmap](https://nmap.org/) and run:

  ```bash
  nmap 192.168.1.* -p 22,80,443,502
  ```

  This lists every device on the network with SSH, web or Modbus TCP ports open, including the datalogger, DSE modules, inverters and any home manager.
