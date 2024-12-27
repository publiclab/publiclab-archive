---
title: "Getting Started with the Riffle Beta Test"

tagnames: 'riffle, riffle-beta, depth-sensor, riffle-examples'
author: ddileona
path: /notes/ddileona/05-28-2016/getting-started-with-the-riffle-beta-test.md
nid: 13151
uid: 436738

cids: 14700,14706

---

![](https://publiclab.org/public/system/images/photos/000/016/385/original/20160525_203932.jpg)

# Getting Started with the Riffle Beta Test

by [ddileona](../../../profile/ddileona) | May 28, 2016 03:33

May 28, 2016 03:33 | Tags: [riffle](../tag/riffle), [riffle-beta](../tag/riffle-beta), [depth-sensor](../tag/depth-sensor), [riffle-examples](../tag/riffle-examples)

----

##Getting the Riffle

Last week I was on my way to a Public Lab depth sensor build and came home to find that I received my Riffle kit! 

[![20160525_204147.jpg](//i.publiclab.org/system/images/photos/000/016/389/large/20160525_204147.jpg)](//i.publiclab.org/system/images/photos/000/016/389/original/20160525_204147.jpg)

This was really exciting because I am hoping to use the Public Lab depth sensor with the Riffle. 

##Installing the Driver

This seemed straightforward at first, but then I couldn't view the port for the Riffle in the Arduino software. The first time I plugged the Riffle into my computer, Windows said that it was installing a driver, but I guess it didn't do it properly because I still couldn't find the port. @cfastie suggested unplugging the Riffle and plugging it back in a few times. 

The second time I plugged in the Riffle, Windows took much longer to install the driver, and now I could see the Riffle port.

I've noticed with other Arduinos that it seems like the driver gets re-installed every time it is disconnected and reconnected to a computer, especially if a different USB port is used. Maybe on the first connect, there was a bug in the driver installation. I'll have to see if the problem reoccurs.

One important note is that even if you have the driver installed properly, if the Riffle is not connected to the computer, the port will not be available in the Arduino software. 

##Install the Libraries

I've used an Arduino before, but I haven't installed many libraries. This Arduino help page has really easy to follow instructions. 

**Arduino Library Install Instructions**

[https://www.arduino.cc/en/Guide/Libraries](https://www.arduino.cc/en/Guide/Libraries)

I was able to install the Low Power library from inside the IDE without downloading any files separately. I had to download the other libraries separately as .zip files, but the library install was still surprisingly easy.


##Setting the Clock

After I was able to connect the Riffle to my computer, the next thing was to set the Riffle clock. I downloaded the sketch from github and loaded it onto the RIffle. I've only ever used the serial monitor in the Arduino to read out sensor readings, never to send information back. I thought this method of setting the clock was very clever.

[![Riffle_set_clock.PNG](//i.publiclab.org/system/images/photos/000/016/391/large/Riffle_set_clock.PNG)](//i.publiclab.org/system/images/photos/000/016/391/original/Riffle_set_clock.PNG)

**A tip for anyone who has never set an instrument clock: **
Type in an even time that occurs in the future by at least 15 or 20 seconds (like 10,03,30 or something similar)
Then just wait for your clock to count up to the time and hit enter.

This is much easier than trying to rush to type in the current time.

##Depth Sensor

As I said I am really excited to try out the Public Lab depth sensor with the Riffle, but I need more info on the proto boards before I can try to build the circuit.

Here are a few photos from the depth sensor build.

[![20160518_200731.jpg](//i.publiclab.org/system/images/photos/000/016/393/large/20160518_200731.jpg)](//i.publiclab.org/system/images/photos/000/016/393/original/20160518_200731.jpg)
The depth sensor circuit from @donblair.


[![20160518_200710.jpg](//i.publiclab.org/system/images/photos/000/016/392/large/20160518_200710.jpg)](//i.publiclab.org/system/images/photos/000/016/392/original/20160518_200710.jpg)
The depth sensor circuit on a breadboard.


[![20160518_202051.jpg](//i.publiclab.org/system/images/photos/000/016/390/large/20160518_202051.jpg)](//i.publiclab.org/system/images/photos/000/016/390/original/20160518_202051.jpg)
@eustatic builds a really long depth sensor.