---
title: Generator controllers
description: Connect DSE, SDMO APM303 and Cummins PS0600 / PC1.2 generator controllers to AMMP Edge, including Modbus addresses and settings.
category: AMMP Edge
order: 30
updated: 2026-10-28
status: current
---

Part of the [AMMP Edge installation](./edge-installation.md). Make sure the generator isn't running while you connect anything to its controller.

## DSE module (DSE855 or DSE890 WebNet)

### Cabling

1. Run a single RJ45 CAT6 cable from the generator to the router, along the shortest path. Don't join cables.
2. Crimp both ends using the T568B colour order: white-orange, orange, white-green, blue, white-blue, green, white-brown, brown.
3. Test the cable with a LAN tester: all eight lights should blink in sequence.
4. Connect one end to the LAN port of the DSE855 or DSE890 (labelled **L**) and the other to the router.
5. Connect the USB end of the printer cable to the port labelled **P**.
6. With a small flat screwdriver, connect a flexible cable to battery terminals 1 and 2.
7. Connect the other ends of the flexible cable and the printer cable to the generator's DeepSea controller.

### Switching the DSE to DHCP

This avoids IP address conflicts on the site network.

1. Connect the DSE's Ethernet port directly to your laptop (a straight-through or crossover cable both work), and give your laptop a fixed IP address in the `192.168.1.x` range.
2. In a browser, open `192.168.1.100` and sign in with the DSE's default credentials (user `admin`, password `Password1234`).
3. Click **Configuration**.
4. Under **LAN**, tick **DHCP Enabled** and click **Update**.
5. Click **Save Config**, then **Reboot**.

## SDMO (APM303 controller)

1. Fit a 120 Ω resistor across terminals A and B.
2. Connect terminal A of the APM303 to RS485 A on the AMMP Edge.
3. Connect terminal B to RS485 B.

### Two SDMO generators

Change the second generator's Modbus address from 5 to 6:

1. On the home screen, press and hold **STOP**, then press **UP**.
2. Press and hold **STOP**, then press **AUTO**.
3. Use **UP** or **DOWN** to scroll to **COM**, and press **START** to enter.
4. Scroll **DOWN** to **M04** and press **START**.
5. Press **UP** to change M04 from 5 to 6, and press **START** to save.
6. Press **STOP** twice to return to the home screen.

## Cummins (PS0600 and PC1.2 controllers)

Enable Modbus on the controller first.

### PS0600

1. Press and hold **Reset** and **OK** for about 5 seconds.
2. Press **Auto** to scroll to the config page (2/4) and press **OK**.
3. Press **Auto** to scroll to **MODBUS SETUP** and press **OK**.
4. Change **TB15 UART PROTOCOL** from **MON** to **MODBUS** and press **OK**.
5. Press **Reset** to go back, then **Auto** to scroll to **MODBUS SETUP (2/2)** and press **OK**.
6. Change **BAUD RATE** from 19200 to 9600 and press **OK**.
7. Scroll to **NODE ADDRESS**, change it from 1 to 4 and press **OK**.
8. Press **Reset** until you're asked to save, then press **OK**.

The screen then shows "TB15 MODBUS PROTOCOL IS ENABLED".

### PC1.2

1. Press **Home** and choose **Setup**.
2. Enter the setup password (default `00574`). If it doesn't work, ask the site owner or the generator's service provider.
3. Scroll to **Modbus Setup** and press **OK**.
4. Set **Modbus Enable** to Enable, **Node Address** to 4, **Baud Rate** to 9600 and **Parity** to None.

### Two Cummins generators

Set the second generator's node address to 3 instead of 4.

### Wiring to the datalogger

| Controller terminal | Strato Pi |
| --- | --- |
| TB15-1 | GND |
| TB15-3 | A |
| TB15-4 | B |
