---
title: Thermal Flashlight from hacked, off-the-shelf Pocket IR Thermometer 
tagnames: thermal-photography, thermal-flashlight, thermal-camera, tool, activity:thermal-flashlight, upgrade:thermal-flashlight, activity:thermal-flashlight-assembly
author: ajawitz
path: /notes/code4maine/01-03-2014/thermal-flashlight-from-hacked-off-the-shelf-pocket-ir-thermometer.md
nid: 9922
uid: 294634

---

# Thermal Flashlight from hacked, off-the-shelf Pocket IR Thermometer 

by [ajawitz](../profile/ajawitz) January 03, 2014 21:10

January 03, 2014 21:10 | Tags: [thermal-photography](../tag/thermal-photography), [thermal-flashlight](../tag/thermal-flashlight), [thermal-camera](../tag/thermal-camera), [tool](../tag/tool), [activity:thermal-flashlight](../tag/activity:thermal-flashlight), [upgrade:thermal-flashlight](../tag/upgrade:thermal-flashlight), [activity:thermal-flashlight-assembly](../tag/activity:thermal-flashlight-assembly)

###What I want to do
I would like to hack an off-the-shelf IR Thermometer found at any Radio Shack (link and image below) for use as a cheaper an more accessible component in the thermal flashlight build.
In northeastern states like Maine, it goes without saying that home heating is a major concern.  Ever since installing a small Pellet Stove in my basement, I've been looking for ways to increase its effectiveness by controlling the household airflow.  While our reliance on propane fuel has decreased dramatically, without any cost effective means of visualizing and/or controlling airflow, we're more or less flying blind.
 The long term solution is to build a wireless sensor network via wifi and XBee's that will log temperature readings from various fixed locations around the house while also allowing for remote control of things like fans, electric heaters and even the pellet stove itself!
 Before that can happen though I need to get a better idea of where to set up the sensors.  For this I need a thermal imager of some sort.  Obviously, I'm not about to fork out +$1000 for a proper flir cam, so I was happy to see the [thermal camera work done here on PublicLab. ](http://publiclab.org/wiki/thermal-camera)
 Yet, Its been many months since I first found the Thermal Camera build instructions and I still havent gone anywhere with it.  Why?  At $20 for a required minimum of two  [Melexis IR Sensor](http://www.futureelectronics.com/en/technologies/semiconductors/analog/sensors/temperature/Pages/6314181-MLX90614ESF-DAA.aspx) is a tad pricey for for something I'm not likely to use in any other projects.  If it was something I could just pick up at the local Radio Shack, it would be a different story however.  So when I noticed Radio Shack selling their own commercial "[Pocket IR Thermometer](http://www.radioshack.com/product/index.jsp?productId=4288088)" for $10, this is precisely what I had in mind!

###My attempt and results
  Before doing anything I thought I would search the usual places (Instructables, Hack-A-Day etc...) for any existing hacks but searches for "Radio Shack IR Thermometer" turned up a lot of nothing.  The user manual covers the basics but nothing more than how to turn it on and where the batteries go.  
   The cover came off relatively easily, and the circuitry resembles a long stick of gum with a sensor on the end that looks suspiciously similar to the Melexis MLX14.   I was able to make out the words "ZyTemp TNOpm2" and this turned out to be the clue I was hoping for! Not only was I able to find the full detailed datasheet at- http://www.zytemp.com/products/tn0pm2.asp but thanks to some savvy EV enthusiasts (over on endless-sphere) I was able to find a detailed post outlining the pinouts to get a serial connection with an Arduino- http://endless-sphere.com/forums/viewtopic.php?f=7&t=49058
  The instructions on the thread are for a different model however, so I didnt know if it would work for mine.  The pinouts were big enough for me to easily add a header and the assignments appear to be the same as the endless-sphere build-

V= Vdd
G = GND
D = Data (serial)
C = Clock (for data)
A = Action Pin (pull to GND to take a measurement. Shorting to ground will make it do continuous measurements)

 


[![IRTempDemo.png](https://i.publiclab.org/system/images/photos/000/002/480/medium/IRTempDemo.png)](https://i.publiclab.org/system/images/photos/000/002/480/original/IRTempDemo.png)



###Questions and next steps
  Having worked endless hours trying to get an Arduino IDE on Ubuntu to recognize the serial port of a Leonardo-type (Software Serial) device, simply getting a read-out on a serial monitor is a huge win!  Now the next step is for it to make sense.  
  Right now the Serial Monitor seems to be spitting out an uncalibrated number in both Celsius and Fahrenheit-

    99.00 C 210.20 F
    99.00 C 210.20 F....
    
 I'm guessing, I have to mess with the software interrupts a little bit so the ss knows what to grab.
  Once thats taken care of, it should be relatively straight-forward to either merge with the current Thermal Flashlight sketch, or configure my own range of RGB LED outputs.  
  Thus Far the baseline sketch I've been using is based on "[http://dorkbotpdx.org/blog/scott_d/inexpensive_ir_based_temperature_sensor_for_microprocessors](http://dorkbotpdx.org/blog/scott_d/inexpensive_ir_based_temperature_sensor_for_microprocessors)"
   The small form factor of the Arduino Micro allows for any number of cam/controller combinations.  Depending on the usage I might try it with the new Adafruit "Trinket" ATTiny85 microcontrollers which would almost allow it to fit back into its original case.



    