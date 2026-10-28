---
title: Fuel level sensors
description: Install Gamicos ultrasonic, Holykell pressure and AKCP pressure sensors for fuel tank monitoring with AMMP Edge.
category: AMMP Edge
order: 40
updated: 2026-10-28
status: current
---

Part of the [AMMP Edge installation](./edge-installation.md).

> [!IMPORTANT]
> Use 1.5 mm² 4-core flexible cable to extend sensor cables, not CAT6.

## Gamicos ultrasonic sensor

1. With a local welder, drill a 7.5 cm round hole in the top of the tank, at least 30 cm from the edge.
2. Mount the sensor in the hole from the top, pointing down at the fuel, and fasten the holder so the sensor sits firmly. The welder should seal any gap around it.
3. Extend the sensor cable with 1.5 mm² 4-core flexible cable to a 24 V DC power supply (the power converter works):

   | Sensor wire | Extension wire |
   | --- | --- |
   | Red | Red |
   | Black | Grey |
   | White | Yellow |
   | Blue | Blue |

4. In the power room, connect:

   | Extension wire | Connect to |
   | --- | --- |
   | Red | V+ of the power converter |
   | Grey | V− of the power converter |
   | Yellow | RS485 A of the Strato Pi |
   | Blue | RS485 B of the Strato Pi |

The Gamicos sensor uses Modbus address 1.

## Holykell pressure sensor

1. Make a hole in the top of the tank, a few centimetres from the wall.
2. Lower the probe into the fuel. Leave a **5 mm blind zone** between the probe and the bottom of the tank.
3. Extend the sensor cable with 1.5 mm² 4-core flexible cable to a 24 V DC power supply:

   | Sensor wire | Extension wire |
   | --- | --- |
   | Red | Red |
   | Green | Yellow |
   | Blue | Blue |
   | Black | Grey |

   The sensor's yellow wire is the shield.

4. In the power room, connect red to V+ and grey to V− of the power converter, yellow to RS485 A and blue to RS485 B of the Strato Pi.

### Changing the Holykell address

Address 1 is reserved for the Gamicos sensor, so the Holykell must move to address 7 (or 8 for a second Holykell). In the datalogger interface, open **Custom actions** and run **Change (1st) Holykell sensor address from 1 to 7**.

> [!WARNING]
> No other device may be on address 1 while you do this. If a Gamicos sensor is already installed: disconnect the Gamicos, connect the Holykell and change its address, then reconnect the Gamicos.

Run a local scan afterwards to check both devices are detected.

## AKCP pressure sensor with sensorProbe2+

The AKCP setup has two parts: the pressure sensor, and the sensorProbe2+ (SP2+) it plugs into, which talks to AMMP Edge over the network.

**You'll need** an RJ45 CAT5 crossover cable and a laptop with an Ethernet port and administrator rights.

### Installing the sensor

1. Make a hole in the top of the tank, a few centimetres from the wall.
2. Lower the probe into the fuel, leaving a **5 mm blind zone** above the bottom.
3. Connect the sensor to port 1 of the SP2+.
4. Connect the SP2+ to the router via its Ethernet port.
5. Check the LEDs on the SP2+: **ETH** should blink green and **Sensor 1** should be steady green.

### Setting the IP address

The SP2+ ships with IP address `192.168.0.100`, which usually isn't on the site's subnet, so the network scan won't find it. Change it to a free address in `192.168.1.x`:

1. Connect the SP2+ directly to your laptop and open `192.168.0.100` in a browser.
2. Open the menu (three bars, top left) → **Settings → Network** and set the new address. See section "Setting up unit's IP address" in AKCP's SP Introduction Manual for details.

> [!WARNING]
> Pick an address no other device on the site network is using.

### Configuring the tank

1. Open the SP2+ web interface at its new IP address and click **Main board**.
2. The sensor should show on port 1. If it doesn't, check the sensor connection.
3. Click **Tank Configuration** and set the sensor type (Depth Pressure), tank level increasing, fluid type, tank type (if non-linear) and dimensions. Save.
4. Under **Advanced**, set the unit to **L** and **Value at Max Level** to the tank's total capacity in litres. Save.
5. Check that the level shown matches the level you see on site.
