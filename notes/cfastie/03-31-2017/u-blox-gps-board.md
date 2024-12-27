---
title: "U-blox GPS board"

tagnames: 'arduino, gps, sensors, altitude, data-logging, skypod, response:14036, ublox'
author: cfastie
path: /notes/cfastie/03-31-2017/u-blox-gps-board.md
nid: 14074
uid: 554
cids: 16562,16563,16583,27972
---

![](https://publiclab.org/public/system/images/photos/000/019/988/original/3tracksallps.jpg)

# U-blox GPS board

by [cfastie](/profile/cfastie) | March 31, 2017 23:09

March 31, 2017 23:09 | Tags: [arduino](/tag/arduino), [gps](/tag/gps), [sensors](/tag/sensors), [altitude](/tag/altitude), [data-logging](/tag/data-logging), [skypod](/tag/skypod), [response:14036](/tag/response:14036), [ublox](/tag/ublox)

----

_Above: I walked this loop which is about two miles long. The route in the upper and upper left part of the image is in a steep valley where reception from many GPS satellites could be blocked._

I have been working on a [data logger](https://publiclab.org/tag/skypod) to record GPS location and altitude information and data from other sensors. My goal is to fly the logger on a KAP or balloon rig to document the location and environment where each photo is taken. I have been using a GPS board from Adafruit which was handy because they have good online documentation about how it works. But it costs $40 which makes the parts for the logger as expensive as some commercial GPS loggers. So I ordered one of cheapest GPS boards I could find on eBay to see if it was an acceptable substitute.

[![_ublox_20170331-7789.JPG](https://publiclab.org/system/images/photos/000/019/981/large/_ublox_20170331-7789.JPG)](https://publiclab.org/system/images/photos/000/019/981/original/_ublox_20170331-7789.JPG)  
_Above: The Adafruit Ultimate GPS Breakout Board (left) costs $40 and performs well. The u-blox Neo-7M (right) costs less than $15\. The square antenna on the u-blox is considerably bigger than the Adafruit antenna. I guess that's a good thing._

I didn't know anything about the u-blox Neo-7M GPS board I ordered. I just picked one that an eBay seller wanted to mail to me from China. I did not expect it to be a drop-in replacement for the friendly Adafruit board, but it is. I swapped out the Adafruit board on my existing logger, turned on the power, and it started writing GPS data to the microSD card. I didn't make any changes to the sketch on the Arduino Nano. This little success turned out to be a lot luckier than it seems because unlike the Adafruit board, the u-blox board runs on 3 volts, not the 5 volts supplied by my data logger. But I don't think any damage was done even during a hour long field test. [Update: The u-blox NEO-7M board can be powered with either 3.3 or 5 volts. See the third comment below.]

To see whether the data from the u-blox board were any good, I took a walk with my Garmin GPSmap76CSx and my phone running the Geo Tracker app. All three devices were recording new GPS data about every four seconds. The antennae of the u-blox and Garmin were exposed on my backpack and the phone was in my coat pocket.

[![PineHillCircle640.gif](https://publiclab.org/system/images/photos/000/019/984/large/PineHillCircle640.gif)](https://publiclab.org/system/images/photos/000/019/984/original/PineHillCircle640.gif)  
_Above: This Google Earth animation of the route was made with the help of a [utility here](https://www.gearthblog.com/blog/archives/2017/03/google-earth-tour-builder-part-1-circling.html)._

In general it appears that the new GPS board is about as good as any other GPS device I have used. Three tracks were recorded and differed from each other by as much as 100 feet for short sections, but that was mostly when I was in a steep valley where satellite reception should be poor. The u-blox board produced results which appeared to be accurate when mapped in Google Earth.

[![3trackscircleps.jpg](https://publiclab.org/system/images/photos/000/019/985/large/3trackscircleps.jpg)](https://publiclab.org/system/images/photos/000/019/985/original/3trackscircleps.jpg)  
_Above: I walked in a circle around a couple of features that I knew could be seen in Google Earth. The u-blox board seems to have done a slightly better job recording my route than the other two devices._

It seems that the new GPS board is is as good or better than the Adafruit board. I learned that u-blox boards are popular with drone makers and very capable. There is a lot of information about them online and u-blox supplies very good documentation and a comprehensive utility for configuring the board. I have not used that utility, but a YouTuber has described how he used it to dramatically reduce the Arduino memory needed to get the data he needed. So the u-blox board seems to be a solid and well supported product.

[![Elev4sensor.JPG](https://publiclab.org/system/images/photos/000/019/986/large/Elev4sensor.JPG)](https://publiclab.org/system/images/photos/000/019/986/original/Elev4sensor.JPG)  
_Above: The elevation data from three GPS devices and a barometric pressure sensor (BMP180) on the SkyPod logger._

I was curious to compare the elevation results from the three devices. The results confirmed my [findings from the last trial](https://publiclab.org/notes/cfastie/03-18-2017/the-great-gps-ski-off) that the Garmin GPS receiver seems to base the elevation result it reports primarily on barometric pressure, not satellite GPS data. The Garmin GPSr has a barometer and a clever algorithm for automatically calibrating its elevation result using both pressure and GPS information. This is an important lesson for kite and balloon photographers who want to know the altitude of their camera. Especially for short flights, a $3.00 pressure sensor will provide much better altitude data than a GPS receiver.

[![_tempHumid.JPG](https://publiclab.org/system/images/photos/000/019/987/medium/_tempHumid.JPG)](https://publiclab.org/system/images/photos/000/019/987/original/_tempHumid.JPG)

*Above: During the walk, the BMP pressure/temperature sensor was inside a backpack pocket and took a long time to equilibrate to the outside air temperature. The DHT22 sensor was exposed and gave noisier but presumably more accurate data on air conditions.*

The next step is to replace the $8.00 Adafruit microSD board with a $1.00 version from an eBay seller in China. Then replace the two temperature/humidity/pressure sensors with a single BME280 sensor. Also, I really should remember next time to hook up the u-blox board to the 3 volt output on the Nano.