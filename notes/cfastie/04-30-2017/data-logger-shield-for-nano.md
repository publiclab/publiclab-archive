---
title: 'Data logger shield for Nano'
tagnames: arduino, sensors, data-logging, activity:arduino, activity:datalogger, arduino-nano, response:14135, nano-data-logger, bme280, activity:nano-data-logger, bmp280
author: cfastie
path: /notes/cfastie/04-30-2017/data-logger-shield-for-nano.md
nid: 14152
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/020/276/original/NanoLog_20170430-8321ps.jpg)

# Data logger shield for Nano

by [cfastie](../profile/cfastie) April 30, 2017 17:07

April 30, 2017 17:07 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [data-logging](../tag/data-logging), [activity:arduino](../tag/activity:arduino), [activity:datalogger](../tag/activity:datalogger), [arduino-nano](../tag/arduino-nano), [response:14135](../tag/response:14135), [nano-data-logger](../tag/nano-data-logger), [bme280](../tag/bme280), [activity:nano-data-logger](../tag/activity:nano-data-logger), [bmp280](../tag/bmp280)

----

*Above: The data logger shield (left) snaps onto an Arduino Nano (right).*

[**Update**: This data logger is now available as a DIY kit which requires no soldering: http://kaptery.com/product/nano-logger-kit]  

Digital logging of environmental data requires a device that can gather data from sensors and store it. Arduino microcontrollers are well suited for this task when a few components are added:

1. Basic Arduinos cannot store much data, so a microSD card is usually added.
2. Basic Arduinos do not have clocks which keep very good time and they do not remember the time when powered down. So a real time clock (RTC) should be added.
3. Arduinos do not have environmental sensors, so these must be added.
4. Arduinos need a source of power.

[![NanoLog_20170430-8331.JPG](https://publiclab.org/system/images/photos/000/020/277/medium/NanoLog_20170430-8331.JPG)](https://publiclab.org/system/images/photos/000/020/277/original/NanoLog_20170430-8331.JPG)  
*Above: The logging shield includes a slot for a microSD card.*

Enterprising technologists have built custom printed circuit boards (Riffle, Mayfly logger) that combine an Arduino compatible chip with an RTC and a slot for a microSD card. These elegant solutions sell for many times the price of a basic Arduino (e.g., $60.00 compared to $6.00).

[![NanoLog_20170430-8339ps.jpg](https://publiclab.org/system/images/photos/000/020/279/medium/NanoLog_20170430-8339ps.jpg)](https://publiclab.org/system/images/photos/000/020/279/original/NanoLog_20170430-8339ps.jpg)  
*Above: The logging shield includes an RTC chip, a crystal to keep accurate time, and a backup battery so the clock runs when the Arduino is not powered. It's the same things that are inside a cheap digital watch. A clock is required so an accurate time is associated with each data logging event.*

An inexpensive route to building a data logger is to buy individual components and solder them together. The [Cave Pearl Logger](https://edwardmallon.wordpress.com/2015/10/24/diy-arduino-logger-build-instructions-part-1/) is capable of logging in the field for more than year and is made from less than $10.00 worth of electronic components. It takes a few hours of careful soldering to make your own. 

[![NanoLog_20170430-8343.JPG](https://publiclab.org/system/images/photos/000/020/278/medium/NanoLog_20170430-8343.JPG)](https://publiclab.org/system/images/photos/000/020/278/original/NanoLog_20170430-8343.JPG)  
*Above: The logging shield (top) has both male and female headers, so when the Arduino Nano (bottom) is plugged in all of the male pins are still exposed.*

In search of an easier and less expensive route to using an Arduino to log data, I bought a few [logging shields on eBay for $4.00 apiece](http://www.ebay.com/itm/112334998809?_trksid=p2057872.m2749.l2649&ssPageName=STRK%3AMEBIDX%3AIT). This gadget incorporates a microSD card slot and a RTC and allows an Arduino Nano to be attached without soldering. It also allows sensors and power to be connected without soldering. 

[![NanoLog_20170430-8349.JPG](https://publiclab.org/system/images/photos/000/020/280/medium/NanoLog_20170430-8349.JPG)](https://publiclab.org/system/images/photos/000/020/280/original/NanoLog_20170430-8349.JPG)  
*Above: To connect sensors or other devices, Dupont wires can be slid onto the pins on the logging shield.*

It was easy to make logging software run on this device because [I had already figured out how to log data](https://publiclab.org/notes/cfastie/04-25-2017/inexpensive-data-logging) with an Arduino Nano and the individual components included with the logging shield. I had started with a simple version of Ed Mallon's sketch for his [breadboarded Arduino Uno logger](https://edwardmallon.wordpress.com/2015/12/22/arduino-uno-based-data-logger-with-no-soldering/). 

There was one very important difference between the breadboarded version and the Nano logging shield. The shield includes a different RTC than the one commonly sold as a breakout board or built in to data loggers (the DS3231 RTC). The logging shield uses a DS1307 RTC which is missing a key feature -- it does not have alarms. In order for field loggers to collect data for a long time, they must be put to sleep between logging events so the batteries don't run down. To wake up the logger, an alarm is set on the RTC. If the RTC does not do alarms, sleeping can't happen (at least the waking up part can't happen). At least this made the sketch simple because it did not need any of that confusing code about sleeping and waking up.  

[![NanoLog_20170430-8342.JPG](https://publiclab.org/system/images/photos/000/020/281/medium/NanoLog_20170430-8342.JPG)](https://publiclab.org/system/images/photos/000/020/281/original/NanoLog_20170430-8342.JPG)  
*Above: The shield has a screw terminal for connecting power lines. Power lines can also be connected to the VIN and GND pins on the Nano, and the device can also be powered via the USB port on the Nano.*

The lack of alarms would seem to be terminal flaw, but it probably makes very little difference because of another flaw. The Arduino Nano, like the Uno, is hard to put into a sleep that saves very much power (I think) because it has an UART chip (for the USB port) which is always on. So alarms would allow the SD card to be slept, but that saves far less power than is being burned by the UART chip all the time. I'm not too sure about the details, but this seems to be the general situation. The Nano is not the best Arduino to use if you want your logger to continue collecting data for a month or more on battery power.

[![NanoLog_20170430-8328.JPG](https://publiclab.org/system/images/photos/000/020/282/medium/NanoLog_20170430-8328.JPG)](https://publiclab.org/system/images/photos/000/020/282/original/NanoLog_20170430-8328.JPG)  
*Above: A BME280 sensor (right) for pressure, temperature, and humidity is connected with Dupont wires to the shield. The BME280 is an I2C sensor. To connect additional I2C sensors, some soldering is probably required.*

I did a test deployment of the shield logging pressure, temperature, and humidity every five minutes. I was aware that the Nano was going to run the batteries down quickly, so I powered it with six AA batteries. I left it outside and checked in on it periodically to see if the red LEDs were still lit.

[![NanoLog_20170428-8271.JPG](https://publiclab.org/system/images/photos/000/020/283/medium/NanoLog_20170428-8271.JPG)](https://publiclab.org/system/images/photos/000/020/283/original/NanoLog_20170428-8271.JPG)  
*Above: This is the configuration for the test deployment with six AA batteries.*

The device continued to log for longer than the [breadboarded version](https://publiclab.org/notes/cfastie/04-25-2017/inexpensive-data-logging), but only by a couple of hours longer. It logged very reliably for a little more than two days. 

[![XLdata1stDeek.JPG](https://publiclab.org/system/images/photos/000/020/284/large/XLdata1stDeek.JPG)](https://publiclab.org/system/images/photos/000/020/284/original/XLdata1stDeek.JPG)  
*Above: The logger logged for 55.6 hours before the batteries got too low. It logged three variables (plus time stamps) every five minutes (655 logging events).*

This logging shield, and any logger based on an Arduino Nano or Uno, is not going to log for very long on small batteries. But it is a very easy way to log data: load a sketch, plug in a few wires, and turn it on. So in certain situations, the shield can make data logging quite convenient because no soldering is required. This includes places where mains power is available (1. indoors, 2. close to a building, 3. close to any outlet) or where a solar charger or other alternative power source is available. It is also a good solution for remote logging when only a day or two of logging is required. In these situations, the convenience of swapping out sensors using easily plugged in wires can be an important benefit.

There is still one bug in this system that I can't catch. The RTC is not doing everything it is supposed to do. It gets the correct time from the computer when a sketch is loaded onto the Nano, and the sketch gets the current time from the RTC whenever the sketch asks for it. But when the logger is not powered, it does not keep time. This is one of the primary roles of the RTC and the reason it has a coin cell battery. When the logger is powered on again, the clock is reset to the original time the sketch was loaded, even if that was days ago. I have replicated this error many times using all three of the logging shields I bought and three different Nanos. I have also tested the coin cells and tried various other tests. It is possible that the logging shields are defective, but since all three of them do the same thing, it seems more likely that my sketch is causing the error. 

There is one clue about this glitch that should be diagnostic. If I load the sketch onto a Nano at 10:00 AM and run the logger, the logger starts keeping time from 10:00 AM. If I restart the logger an hour later, the logger starts keeping time at 10:00 AM again. If I move that Nano to another logging shield, the logger starts keeping time at 10:00 AM, not the time when new logging shield had it's RTC set. So the Nano is determining the start time for the RTC even though it is the RTC that should be doing this. Somehow data stored on the Nano is being used to start the RTC's timekeeping. This really has me baffled. Here is the sketch I am using:
<a href="https://publiclab.org/system/images/photos/000/020/285/original/Deek2bme.txt"><i class="fa fa-file"></i> Deek2bme.txt</a>

Let me know if you have any ideas about how to make the RTC behave.

[**UPDATE**] I figured out what I was doing wrong with the RTC. See comment below.

[**Update**: This data logger is now available as a DIY kit which requires no soldering: http://kaptery.com/product/nano-logger-kit]  