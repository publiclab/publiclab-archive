---
title: DustDuino Sketches 
tagnames: arduino, particulate-sensing, air-quality, programmers, code, dustduino, dust, shinyei, activity:dustduino, activity:data-logging, air-sensors
author: willie
path: /notes/Willie/07-31-2015/dustduino-sketches.md
nid: 12109
uid: 235174

---

![](https://publiclab.org/public/system/images/photos/000/010/944/original/IMG_20150520_142421933.jpg)

# DustDuino Sketches 

by [willie](../profile/willie) July 31, 2015 14:23

July 31, 2015 14:23 | Tags: [arduino](../tag/arduino), [particulate-sensing](../tag/particulate-sensing), [air-quality](../tag/air-quality), [programmers](../tag/programmers), [code](../tag/code), [dustduino](../tag/dustduino), [dust](../tag/dust), [shinyei](../tag/shinyei), [activity:dustduino](../tag/activity:dustduino), [activity:data-logging](../tag/activity:data-logging), [air-sensors](../tag/air-sensors)

----

The DustDuino is a customization of Arduino designed to help makers create low-power, highly customizable sensor projects. By basing the system on Arduino, the DustDuino can use “out of the box” block of code to program the device to do a number of tasks. Those blocks of code are known as libraries. 

The DustDuino website (DustDuino.org) has a variety of custom code needed to process, transmit, and store particulate matter data. These DustDuino or Arduino programs are referred to as a “sketches,” and each configuration recipe listed below has a corresponds to a sketch available to download and install on your DustDuino. Sketches that are built inside the Arduino IDE may be saved with the “.ino” file extension, and this is how most DustDuino sketches are saved. 

###DustDuino Serial

Just want to get your DustDuino up and running as quick as possible? Or maybe you want to check if your DustDuino's dust sensor is on the fritz? Or maybe you even want to use a computer application to work with DustDuino's data? The DustDuinoSerial sketch is a simple solution that outputs the sensor readings to your serial port.

[Fork on Github](https://github.com/dustduino/dustduinoserial)

###DustDuino Wi-Fi

The preferred choice for those who want to watch their DustDuino readings from anywhere. The DustDuinoWiFly sketch was developed so that users could set up a DustDuino indoors that connects to the home's WiFi network, and sends readings to an [Open Dust Map](http://www.opendustmap.com) server, or the Xively internet of things service. Compatible with most WiFi modules that use the Xbee form factor and the Roving Networks RN-171 module, such as the Sparkfun RN-XV. Repository includes the required WiFly library

[Fork On GitHub](https://github.com/dustduino/dustduinowifly)

###DustDuino SD

If there's no wireless network available, or if you simply want to store your DustDuino data locally, the SD card setup is a handy solution. Was originally developed during an Earth Journalism Network training session, to log dust readings while walking around downtown San Francisco.

[Fork On GitHub](https://github.com/dustduino/dustduinosd)

###DustDuino Solar

Feeling experimental? This is the current repository for our Arduino sketches for the solar-powered DustDuino units. Contains two sketches, one for a solar-powered transmitter, and one for a mains-powered receiver. The transmitter will sleep for a period before collecting data on dust and battery voltage, and will compose a message from that data, which is sent using an Xbee RF module. The receiver gets the message from its own Xbee RF module, parses the message, calculates the dust value, and then sends that data to Xively for all to view. Was developed for an Earth Journalism Network deployment in Mongolia. More info inside the repository.

[Fork On GitHub](https://github.com/dustduino/dustduinosolar)