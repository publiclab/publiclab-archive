---
title: "Material used and instructables (for ozone sensor)"

tagnames: ''
author: filimon_k
path: /notes/filimon_k/12-13-2015/material-used-and-instructables-for-ozone-sensor.md
nid: 12510
uid: 460113
cids: 
---

# Material used and instructables (for ozone sensor)

by [filimon_k](/profile/filimon_k) | December 13, 2015 20:20

December 13, 2015 20:20 | Tags: 

----

Ozone sensor:
1) Equipment used: 
-MiCS-2614 sensor in MiCS-2610 footprint (can be purchased from 
http://microcontrollershop.com/product_info.php?products_id=6791)

         ***IMPORTANT: MiCS-2614 must be heated up using the heating circuit for over 3 days with        continuous power supply such as a stationary computer. 

-arduino uno
-breadboard
-USB cable
-82 Ohm resistor (attach to pin 1 [from image], then to ground). This serves as Heating circuit.
-820 Ohm resistor (attach to pin 2, then to another cell in the breadboard, lets call it CELL1*) 
-100k Ohm resistor (attach to CELL1* then to ground)
          **NOTE: take analog reading from CELL1*
-9V batter with connector to arduino
-arduino data logging shield 

2) General information
- During calibration, be absolutely positive you are delivering enough ozone into your chamber. Ozone is highly reactive and will reach away with wires, breadboard plastic and such, therefore, take into account how much is being lost undetected. 
        *Note: If possible, use another well calibrated ozone monitor to measure how much ozone is "exiting" the chamber.
   





