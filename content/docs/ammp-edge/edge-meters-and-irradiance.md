---
title: Meters and irradiance sensors
description: Connect a Carlo Gavazzi EM24 energy meter and an IMT irradiance sensor to AMMP Edge.
category: AMMP Edge
order: 50
updated: 2026-10-28
status: current
---

Part of the [AMMP Edge installation](./edge-installation.md).

## Carlo Gavazzi EM24 meter

Wire the meter for your model (65 A direct or 10 A CT-connected) following Carlo Gavazzi's installation sheet.

### Connecting to the datalogger

Connect the meter's RS485 terminals to the datalogger:

| EM24 terminal | Datalogger |
| --- | --- |
| A− (41) | RS485 A |
| B+ (42) | RS485 B |
| GND (43) | GND |

### Meter settings

Enter programming mode by pushing the joystick in for at least 3 seconds (the front knob must not be in the locked position). The default password is 0. Then set:

| Menu | Setting |
| --- | --- |
| 06 SYS | Your electrical system, for example `3P.n` (3-phase with neutral) or `1P` (single phase) |
| 07 Ut rAtio | VT ratio, if voltage transformers are used (for example 5 kV / 100 V = 50) |
| 08 Ct rAtio | CT ratio, if current transformers are used (for example 3000 A / 5 A = 600) |
| 13 AddrESS | **9** for a meter on the load side |
| 13 bAudrAtE | **9600** |

Choose **16 End** to leave programming mode. For all other menus, see the EM24 instruction manual from Carlo Gavazzi.

> [!IMPORTANT]
> If the meter is installed anywhere other than the load side, for example on the grid connection or a generator input, contact [support@ammp.io](mailto:support@ammp.io) before configuring it.

## IMT irradiance sensor

1. Mount the sensor on the roof or a similar spot with the **same orientation as the panels**, and where nothing casts a shadow on it.
2. Run 1.5 mm² 4-core flexible cable from the sensor to the router along the shortest path. Avoid joints; you'll need one extra conductor for the ground.
3. Connect:

   | Sensor wire | Connect to |
   | --- | --- |
   | Red | V+ of the power converter |
   | Grey | V− of the power converter |
   | Thick black | GND of the Strato Pi |
   | Yellow | RS485 A of the Strato Pi |
   | Blue | RS485 B of the Strato Pi |

4. Run a local network scan to check the sensor is detected.
5. In the datalogger interface, use **Custom actions** to change the sensor's Modbus address from 1 to 2.
