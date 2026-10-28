---
title: AMMP Edge installation and acceptance test
description: Install an AMMP Edge datalogger (Strato Pi or UniPi) on site, run the network scan and complete the acceptance test.
category: AMMP Edge
order: 10
updated: 2026-10-28
status: current
---

AMMP Edge is AMMP's on-site datalogger. It reads equipment that has no cloud API, such as generator controllers, fuel sensors, meters and irradiance sensors, and sends the data to AMMP. It runs on a Strato Pi or UniPi device.

This guide is for installers. The add-on guides cover specific equipment:

- [Router and datalogger setup](./edge-router-and-datalogger.md)
- [Generator controllers](./edge-generator-controllers.md) (DSE, SDMO, Cummins)
- [Fuel level sensors](./edge-fuel-sensors.md) (Gamicos, Holykell, AKCP)
- [Meters and irradiance sensors](./edge-meters-and-irradiance.md) (Carlo Gavazzi EM24, IMT)

## Required materials

- A laptop
- A Strato Pi or UniPi server device
- AC power supply
- MicroSD card, 8 GB or larger
- Wired Ethernet connection with internet access, for example a router
- 24 V DC power supply
- Digital multimeter
- 1.5 mm² 4-core shielded flexible cable
- LAN tester

## Installation

1. Check that you have all the materials above.
2. Download the AMMP Edge SD card image:
   - Strato Pi: [www.ammp.io/stratopi-image](https://www.ammp.io/stratopi-image)
   - UniPi: [www.ammp.io/unipi-image](https://www.ammp.io/unipi-image)
3. Write the image to the MicroSD card with [balenaEtcher](https://etcher.balena.io/) (Windows, macOS or Linux).
4. Insert the card into the datalogger's SD card slot. If in doubt, see the [Strato Pi user guide](https://www.sferalabs.cc/files/strato/doc/stratopi-base-user-guide.pdf) or the [UniPi knowledge base](https://kb.unipi.technology/).
5. Install the datalogger and router. See [Router and datalogger setup](./edge-router-and-datalogger.md).
6. Install any generators, fuel sensors, meters or irradiance sensors using the add-on guides above.

## Acceptance test

1. Request the AMMP acceptance test (AT) document from [support@ammp.io](mailto:support@ammp.io).
2. Open the datalogger interface at `http://192.168.4.1:8000/`. It shows the Node ID and basic diagnostics, such as online status.
3. Run a **full site scan** and let the datalogger generate its configuration automatically.
4. Confirm the configuration.
5. Run any custom actions needed, for example changing a sensor's Modbus address (see the add-on guides).
6. Check that the real-time readings match what you see on site.
7. Fill in the AT document with all the requested information and the scan results.
8. Send the completed AT report to AMMP.

> [!NOTE]
> Every device installed on site should appear in the full scan. If one is missing, check its wiring and address before completing the AT.
