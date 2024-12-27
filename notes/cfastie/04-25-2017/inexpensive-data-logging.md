---
title: "Inexpensive data logging"

tagnames: 'arduino, sensors, datalogger, data-logging, nano, nano-data-logger, activity:nano-data-logger, bmp280'
author: cfastie
path: /notes/cfastie/04-25-2017/inexpensive-data-logging.md
nid: 14135
uid: 554

cids: 16604,16606,16607,16611,16614

---

![](https://publiclab.org/public/system/images/photos/000/020/175/original/NanoLog_20170422-8066.JPG)

# Inexpensive data logging

by [cfastie](../../../profile/cfastie) | April 25, 2017 03:20

April 25, 2017 03:20 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [datalogger](../tag/datalogger), [data-logging](../tag/data-logging), [nano](../tag/nano), [nano-data-logger](../tag/nano-data-logger), [activity:nano-data-logger](../tag/activity:nano-data-logger), [bmp280](../tag/bmp280)

----

*Above: These two little breakout boards are the key to using an Arduino to log data. A microSD card board (right) allows the data to be saved. A real time clock (left) keeps track of time (basic Arduinos don't remember what time it is when you turn them off).*

A few weeks ago I noticed a product that allowed an Arduino Nano to be used for logging data ([thread here](https://groups.google.com/forum/#!topic/plots-waterquality/uDOlAqW9LVw)). It added a real time clock (RTC) and a microSD card slot to the Arduino Nano microcontroller, and made it possible to construct a working data logger with sensors without doing any soldering. I ordered a few of these and in the meantime started playing with the standalone versions of the components this device combined. 

[![NanoLog_20170423-8075.JPG](https://publiclab.org/system/images/photos/000/020/176/medium/NanoLog_20170423-8075.JPG)](https://publiclab.org/system/images/photos/000/020/176/original/NanoLog_20170423-8075.JPG)  
*Above: The four components of a data logger which records environmental data every few seconds or every several minutes. Left to right: Arduino Nano, RTC board, BMP280 temperature and barometric pressure sensor, microSD board. All four can be purchased on eBay for as little as $6.00 total, including shipping from Asia. This is sort of an outrageous and hard to ignore feature of the world today.*

I wanted to know if an Arduino Nano could log data for an extended time like a Riffle, Mayfly logger, or Cave Pearl Logger. So I made what is essentially a simple version of [Ed Mallon's breadboarded logger](https://edwardmallon.wordpress.com/2015/12/22/arduino-uno-based-data-logger-with-no-soldering/) but with a Nano instead of an Arduino Uno. Ed's Uno logger is intended for classroom use where power can be supplied by a computer or wall wart. But the sketch Ed recommends has power saving features (e.g., it puts the SD card board to sleep between logging events), so I was hoping it might be able log for a week or two on a good battery pack. 

[![NanoLog_20170422-8059.JPG](https://publiclab.org/system/images/photos/000/020/177/medium/NanoLog_20170422-8059.JPG)](https://publiclab.org/system/images/photos/000/020/177/original/NanoLog_20170422-8059.JPG)  
*Above: The six dollars worth of components wired together and powered by a battery (off screen) and recording environmental data at regular intervals.* 

I think one major limitation to long term logging with either the Uno or Nano is that both have a USB port driven by a serial hardware (uart) chip that is always powered. Another limitation is that the Uno and Nano are 5 volt boards, not 3.3 volts like the Pro Mini boards that Ed uses in his field loggers. I think there are some other limitations I don't quite grasp. Ed makes modifications to the off-the-shelf boards he uses to reduce power consumption, and the Riffle has some hardware features built in to deal with these issues. The goal I was chasing was to use unmodified off-the-shelf components that cost less than $20.00 and did not require (much if any) soldering to make a data logger that would run on batteries for a couple of weeks.

[![CavePearlNano.jpg](https://publiclab.org/system/images/photos/000/020/178/large/CavePearlNano.jpg)](https://publiclab.org/system/images/photos/000/020/178/original/CavePearlNano.jpg)  
*Above: A wiring diagram of the test logger. The photos above include a BMP280 sensor, not the BME280 sensor shown here. But any I2C sensor or several of them could be added to this circuit.*

I first tried to run this test logger with a version of the sketch written for the Riffle. But the Riffle has different hardware (including a mosfet that I think was being used by the sketch) and it didn't work (it did log data, it just did so three times a second and never put anything to sleep). I then tried Ed Mallon's simple sketch for the Uno breadboard logger and was able to get that to work well. The sketch puts some components (SD card, others?) to sleep between data writes and uses the alarm feature of the DS3231 RTC to wake everything up when it's time to log data again. That was encouraging, so a couple of days ago I hooked up four AAA eneloop batteries and put the whole little breadboarded thing outside. It was logging temperature (from the RTC and the BMP280 sensor) and also barometric pressure every five minutes. Here is the sketch it was running: 
<a href="https://publiclab.org/system/images/photos/000/020/181/original/CavePearlNano.txt"><i class="fa fa-file"></i> CavePearlNano.txt</a>

[![CPNt_p1st2day.PNG](https://publiclab.org/system/images/photos/000/020/180/large/CPNt_p1st2day.PNG)](https://publiclab.org/system/images/photos/000/020/180/original/CPNt_p1st2day.PNG)  
*Above: Temperature and pressure data from 32 hours of logging. The record starts at 10:30 PM when I put the logger outside, runs all through the next day, then ends at 6:30 AM the next morning when I assume the batteries failed to supply the required power.*

The batteries did not last for two days. The batteries were the same ones I had been using to test the logger for a couple of days, so they were not fully charged at the start of the trial. This logger could probably do better, but I am a long way from my goal of two weeks of logging. The easy changes to make are fresher batteries, bigger batteries (AA instead of AAA) and more batteries (six instead of four). I'm not sure whether there are other obvious things to do to extend the logging life. 

[![NanoLog_20170423-8080.JPG](https://publiclab.org/system/images/photos/000/020/182/medium/NanoLog_20170423-8080.JPG)](https://publiclab.org/system/images/photos/000/020/182/original/NanoLog_20170423-8080.JPG)  
*Above: The Nano logger shields arrived two days ago (17 days after ordering) and I am figuring out how to make them work.*

