---
title: "How to Connect an ORP Sensor to the Simple Water Sensor Platform"

tagnames: 'arduino, sensors, water-quality, new, orp, water-sensors, activity:water-sensors, activity:new, dfrobot, oil-and-gas-water-trio, oil-and-gas-water-quality, activity:oil-and-gas-water-quality, simple-water-sensor-platform, activity:simple-water-sensor-platform'
author: wmacfarl
path: /notes/wmacfarl/01-11-2020/how-to-connect-an-orp-sensor-to-the-simple-water-sensor-platform.md
nid: 22290
uid: 424597

---

![](https://publiclab.org/public/system/images/photos/000/037/590/original/ORP_sensor_attached.jpg)

# How to Connect an ORP Sensor to the Simple Water Sensor Platform

by [wmacfarl](../../../profile/wmacfarl) | January 11, 2020 19:44

January 11, 2020 19:44 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [water-quality](../tag/water-quality), [new](../tag/new), [orp](../tag/orp), [water-sensors](../tag/water-sensors), [activity:water-sensors](../tag/activity:water-sensors), [activity:new](../tag/activity:new), [dfrobot](../tag/dfrobot), [oil-and-gas-water-trio](../tag/oil-and-gas-water-trio), [oil-and-gas-water-quality](../tag/oil-and-gas-water-quality), [activity:oil-and-gas-water-quality](../tag/activity:oil-and-gas-water-quality), [simple-water-sensor-platform](../tag/simple-water-sensor-platform), [activity:simple-water-sensor-platform](../tag/activity:simple-water-sensor-platform)

----

# Purpose

This is a guide for connecting the [DF Robot ORP (Oxygen Reduction Potential) Sensor][1] to the [Simple Water Sensor Platform][2] described [here][3].

This is part of a series of guides for the [DF Robot series of analog liquid sensors][4].  The general process for assembling and using these sensors is described in ["Building the Simple Water Sensor Platform"][5].  These guides detail any sensor-specific considerations or steps in the process.

# Materials
- [Simple Sensor Kit Platform][6]
- [DF Robot ORP Sensor][7]

## Step 1: Plug in Sensor Probe and Wiring
The ORP Sensor Consists of 3 parts:
- Sensor Probe
- Circuit Board
- Connecting Wires with Plug (BLACK, RED, BLUE)
![image description][8]

Connect the probe to the metal barrel connector on the circuit board by inserting it and twisting it in place.

Then plug the wires into the socket on the circuit board.  It /should/ only plug in one-way.  If you are looking at the board with the writing right-side-up, the wire colors should go, from the top down:

BLACK
RED
BLUE

![image description][9]

## Step 2:  Connect Sensor Circuit Board to Arduino

The BLACK-RED-BLUE wiring cable connects the sensor-probe to our sensor-platform through the circuit board.  [See step 3 in the general build guide for details.][10]

## Step 3:  Connect the Sensor-Select Jumper Wire

This kit is designed to be used with any of the different DF Robot Liquid Sensors and comes pre-loaded with software that can collect data from any of them.

This software needs to know which sensor you have plugged in, though, and it can't figure it out itself. To tell it what sensor we are using we will connect a jumper wire from "Pin 3" on the Arduino to one of the other digital i/o pins.

To select the ORP sensor, we will connect a jumper wire from Pin 3 to Pin 8 on our Arduino.

![image description][11]

## Addendum:  Testing and Calibrating Your Sensor

If you plug in your sensor to your computer using a USB cable, open up a spreadsheet, and turn the switch "On" it should start typing out data that looks something like this:

![image description][12]

More information on the use and calibration of the sensor can be found on [the DF Robot Wiki][13]. 

 At the moment, if you want to follow these calibration instructions you will need to modify the source code of the Arduino program and upload it to your board.  For more information on how to do this see ["How to Set up and Test an Arduino."][14]

  [1]: https://wiki.dfrobot.com/Analog_ORP_Meter_SKU_SEN0165_
  [2]: https://publiclab.org/notes/wmacfarl/01-10-2020/building-the-simple-water-sensor-platform
  [3]: https://publiclab.org/notes/wmacfarl/01-10-2020/building-the-simple-water-sensor-platform
  [4]: https://www.dfrobot.com/blog-1138.html
  [5]: https://publiclab.org/notes/wmacfarl/01-10-2020/building-the-simple-water-sensor-platform
  [6]: https://publiclab.org/notes/wmacfarl/01-10-2020/building-the-simple-water-sensor-platform
  [7]: https://www.dfrobot.com/product-1071.html
  [8]: /i/37584.jpg "ORP_sensor.jpg"
  [9]: /i/37585.jpg "orp_sensor_wired.jpg"
  [10]: https://publiclab.org/notes/wmacfarl/01-10-2020/building-the-simple-water-sensor-platform#Step+3:+Connect+Sensor+Wires+to+Arduino
  [11]: /i/37586.jpg "ORP_jumper.jpg"
  [12]: /i/37589.png "orp_data.png"
  [13]: https://wiki.dfrobot.com/Analog_ORP_Meter_SKU_SEN0165_
  [14]: https://publiclab.org/notes/wmacfarl/10-22-2019/how-to-set-up-and-test-an-arduino