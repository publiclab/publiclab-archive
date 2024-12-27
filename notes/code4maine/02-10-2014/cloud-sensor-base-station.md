---
title: "Cloud Sensor Base-Station"

tagnames: 'garden, datalogger, hydroponics, gardening, data-logging, datalogging'
author: ajawitz
path: /notes/code4maine/02-10-2014/cloud-sensor-base-station.md
nid: 10025
uid: 294634

---

![](https://publiclab.org/public/system/images/photos/000/002/865/original/LeoWRT.jpg)

# Cloud Sensor Base-Station

by [ajawitz](../../../profile/ajawitz) | February 10, 2014 23:15

February 10, 2014 23:15 | Tags: [garden](../tag/garden), [datalogger](../tag/datalogger), [hydroponics](../tag/hydroponics), [gardening](../tag/gardening), [data-logging](../tag/data-logging), [datalogging](../tag/datalogging)

----

###What I want to do
I want to create a platform with the capacity to control a large number of sensors and actuators necessary for the hydronponics system outlined in[ this wiki](http://publiclab.org/wiki/new-concepts-for-oshw-in-indoor-gardening), and to serve as the central gateway to a cloud-enabled dashboard.  The basis for this experiment is the new [Arduino Yun](http://arduino.cc/en/Main/ArduinoBoardYun) which combines an OpenWRT/Linux wifi processor with an Arduino Leonardo Microcontroller.  However, the complexity of the Open Source Hydroponics Platform is such that it will likely require multiple microcontrollers to adequately handle the tasks involved.  


[![BridgeInShort.png](https://i.publiclab.org/system/images/photos/000/002/862/medium/BridgeInShort.png)](https://i.publiclab.org/system/images/photos/000/002/862/original/BridgeInShort.png)


The new ATmega32u4 Microcontroller chip utilized by the Arduino Yun/Leonardo etc... has proven to be a popular platform for dedicated platforms like the [Visualight](www.visualight.org) (discussed on[ these forums)](http://publiclab.org/notes/warren/11-15-2013/visualight-board-for-thermal-flashlights) and the [LeoPhi](http://www.sparkyswidgets.com/portfolio-item/leophi-usb-arduino-ph-sensor/) Ph Sensor.

My concept would retain the same basic structure utilized by the Arduino Yun, only instead of being limited to one microcontroller, it will allow 3 or 4 connections simultaneously.

###Background
The Yun is based on the [Atheros AR 9331 ](http://wiki.openwrt.org/toh/tp-link/tl-wr703n/ar9331_pinout) System-on-a-Chip (SOC).  The same chip drives the [TP-Link WR703n](http://wiki.openwrt.org/toh/tp-link/tl-wr703n) travel router, which when flashed with a custom OpenWRT firmware has been beloved by hackers as a cheap means of adding wifi to arduino projects. 
As a consumer product howevr,  TL-WR703n is not optimized for additional inputs and outputs and lacks sufficient memory for anything close to the tasks we'd need it for, so a dedicated development board is needed for the AR 9331.  Luckily, this board exists in the form of the [_Dragino](http://www.dragino.com/)_.
The Dragino is basically an OpenWRT router with ample I/O ports to make it more hacker friendly.  


[![DRagino_Bridge_Diagram1.png](https://i.publiclab.org/system/images/photos/000/002/863/medium/DRagino_Bridge_Diagram1.png)](https://i.publiclab.org/system/images/photos/000/002/863/original/DRagino_Bridge_Diagram1.png)



While my experience with similar products has been hit or miss in the past, the Dragino developers have done a fantastic job keeping up-to-date documentation and software upgrades.  In fact, they've not only gone through all the work porting the Arduino Yun firmware to their board, but they even give you the option to ship with the Yun firmware included by default!

.  Setting it up was surprisingly straightforward following the [ step-by-step walk though](http://wiki.dragino.com/index.php?title=Main_Page#Getting_Start_with_Arduino_Yun) on the Dragino Wiki.  Once an Arduino Leonardo has been connected through the UART, it can be programmed just as if it were a Yun.

###My attempt and results

I connected the Leonardo to Dragino following the image below, and it worked as advertised.


[![Ms14_leonardo.jpg](https://i.publiclab.org/system/images/photos/000/002/864/medium/Ms14_leonardo.jpg)](https://i.publiclab.org/system/images/photos/000/002/864/original/Ms14_leonardo.jpg)



###Questions and next steps

The next step will be to connect the [Arduino Micro](http://arduino.cc/en/Main/ArduinoBoardMicro) as its also based on an ATmega32u4 and has a much smaller footprint.  Next, I will try connecting purpose-built boards like the Visualight to see if anything more needs to be modified.
The final test will be to see if the Dragino can indeed control 2 or more Leonardos simultaneously.
###Why I'm interested
 See Project Wiki at [http://publiclab.org/wiki/new-concepts-for-oshw-in-indoor-gardening](http://publiclab.org/wiki/new-concepts-for-oshw-in-indoor-gardening) full a full overview of the Hydroponics project.