---
title: "Thermal Flashlight Using MLX90614 IR Evaluation Board From Sparkfun "

tagnames: 'thermal-photography, thermal-flashlight, thermal-camera, tool, response:9922, activity:thermal-flashlight, upgrade:thermal-flashlight'
author: ajawitz
path: /notes/code4maine/01-22-2014/thermal-flashlight-using-mlx90614-ir-evaluation-board-from-sparkfun.md
nid: 9962
uid: 294634

---

![](https://publiclab.org/public/system/images/photos/000/002/601/original/SparkfunEval.jpg)

# Thermal Flashlight Using MLX90614 IR Evaluation Board From Sparkfun 

by [ajawitz](../../../profile/ajawitz) | January 22, 2014 19:44

January 22, 2014 19:44 | Tags: [thermal-photography](../tag/thermal-photography), [thermal-flashlight](../tag/thermal-flashlight), [thermal-camera](../tag/thermal-camera), [tool](../tag/tool), [response:9922](../tag/response:9922), [activity:thermal-flashlight](../tag/activity:thermal-flashlight), [upgrade:thermal-flashlight](../tag/upgrade:thermal-flashlight)

----

###What I want to do
I would like to build a Thermal Flashlight that is very similar to the current recommended method on- http://publiclab.org/wiki/thermal-camera only instead of wiring in a standalone IR sensor, I would like to use the [Evaluation Board for MLX90614 IR Thermometer](https://www.sparkfun.com/products/10740) from Sparkfun.  

[![SparkfunEval.jpg](https://i.publiclab.org/system/images/photos/000/002/598/medium/SparkfunEval.jpg)](https://i.publiclab.org/system/images/photos/000/002/598/original/SparkfunEval.jpg)

The advantage of using the evaluation board over the standalone component is the board includes its own ATMega328 chip.  In other words, you don't need to connect it to an Arduino Uno because it already has one embedded into it on a much smaller footprint.  This should make it much easier to do what this guy was trying to do on Instructables-http://www.instructables.com/id/Build-a-Thermal-Flashlight-Light-Painting-with-T/ only without having to stuff an entire Arduino Uno into the flashlight body. 
  Additionally, it might help with the [Visualight ](http://publiclab.org/notes/warren/11-15-2013/visualight-board-for-thermal-flashlights) project by serving as a template for replacing the ATMega328 with a USB-capable chip like the ATMega32u4 or an ATTiny84.  

###Questions  
Even though the included "example sketch" from Sparkfun isn't even written for Arduino, it works out of the box with the same sketch that the Thermal Flashlight is based on at- http://bildr.org/2011/02/mlx90614-arduino/  
Because the ATMega328 can not communicate via USB by itself, it has to be connected through an FTDI-Serial adapter like Adafruit's "FTDI Friend" or SeeedStudio's  "UArtsBee" which is what I'm using. The Arduino IDE must be set to connect to an "Arduino Pro/Pro Mini (3.3v 8 MHz)w/ATmega328" and the temperature readings will start streaming to the serial monitor at 9600 Baud.  So far so good.  Now the tricky part is outputting these values to the RGB LEDs.  Sparkfun did include at least four analog/digital outputs labelled "PC0-PC4" along with "SCL" and "SDA' for serial.  Unfortunately, simply changing the "int REDPin" from "6" to "PC2" etc...  in the Arduino Sketch didn't seem to work.  

[![IRboard.jpg](https://i.publiclab.org/system/images/photos/000/002/599/medium/IRboard.jpg)](https://i.publiclab.org/system/images/photos/000/002/599/original/IRboard.jpg)

However, I was able to use the eval board as if it were a standalone sensor by connecting  3.3v + GND, SCL to A5 on the Arduino and SDA to A4 on the Arduino.


###Next Steps

EDIT: While I've been able to complete the circuit by connecting the eval board to an Arduino Uno as if it were a standalone sensor, this still doesn't achieve my goal of reducing the overall footprint so as to fit inside a modified flashlight.
As an interim step, I'll see if I can replace an Arduino Uno with an Arduino Micro which will reduce the footprint significantly, though not as much as if I can finally figure out how to enable the Eval Boards outputs for the RGB LEDs.

As the Micro is based on an ATmega32u4, it will also help test any hypothesis about upgrading the Eval Board to work with USB support.

There is a Schematic for the IR Eval Board-


[![MLX90614-IR_Eval-v16.png](https://i.publiclab.org/system/images/photos/000/002/602/medium/MLX90614-IR_Eval-v16.png)](https://i.publiclab.org/system/images/photos/000/002/602/original/MLX90614-IR_Eval-v16.png)



Or it can be found at [this link](https://docs.google.com/viewer?url=http%3A%2F%2Fdlnmh9ip6v2uc.cloudfront.net%2Fdatasheets%2FSensors%2FTemp%2FMLX90614-IR_Eval-v16.pdf).  

