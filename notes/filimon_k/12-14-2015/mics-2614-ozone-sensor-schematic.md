---
nid: 12512
title: MiCS-2614 Ozone sensor schematic
path: public/static/notes/filimon_k/12-14-2015/mics-2614-ozone-sensor-schematic.md
uid: 460113
tagnames: sensing,ozone
---

# MiCS-2614 Ozone sensor schematic

This is the current circuit we are using for our MiCS-2614 Ozone sensors. 

We are generally getting good results, with voltage dropping from nearly 5v across the sensing circuit, to below 2v at around 500ppb ozone concentrations. But there can be considerable variation from unit to unit.

We are registering sensitivity at concentrations below 100ppb, but our ozone monitor isn't registering these lower concentrations, so calibration may prove to be tricky.

[![Mics_Ozone_Sensor_Schematic.png](//i.publiclab.org/system/images/photos/000/013/303/medium/Mics_Ozone_Sensor_Schematic.png)](//i.publiclab.org/system/images/photos/000/013/303/original/Mics_Ozone_Sensor_Schematic.png)

We are using a board which is an adapter for the footprint of the obsolete Mics-2610 sensor. Manufacturer info is here. The pinout of this footprint is below, with pins 1 and 3 being the heating circuit, and the measurement circuit is through pins 2 and 4.

The adapter manufacturer is here http://microcontrollershop.com/product_info.php?products_id=6791




[![micsadaptpinout.gif](//i.publiclab.org/system/images/photos/000/013/302/medium/micsadaptpinout.gif)](//i.publiclab.org/system/images/photos/000/013/302/original/micsadaptpinout.gif)
