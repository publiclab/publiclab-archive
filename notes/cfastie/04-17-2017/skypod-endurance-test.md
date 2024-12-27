---
title: "SkyPod endurance test"

tagnames: 'balloon-mapping, kite-mapping, arduino, kap, gps, sensors, saturnv, skypod, response:14074, ublox'
author: cfastie
path: /notes/cfastie/04-17-2017/skypod-endurance-test.md
nid: 14116
uid: 554

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/020/142/original/IMG_20170415_185404.jpg)

# SkyPod endurance test

by [cfastie](../../../profile/cfastie) | April 17, 2017 00:56

April 17, 2017 00:56 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [arduino](../tag/arduino), [kap](../tag/kap), [gps](../tag/gps), [sensors](../tag/sensors), [saturnv](../tag/saturnv), [skypod](../tag/skypod), [response:14074](../tag/response:14074), [ublox](../tag/ublox)

----

*Above: After letting the SkyPod record data all afternoon in the yard (boring), I took it for a walk to see if the trailing arbutus was blooming. It was, so I took a photo and [posted it to iNaturalist](https://www.inaturalist.org/observations/5737918).*

I have made some progress on the [SkyPod GPS logger](https://publiclab.org/tag/skypod). I found some readily available components that are inexpensive and reliable. The SkyPod can work as an all-purpose data logger, but the primary intended use is to log GPS data (lat, lon, altitude) during kite and balloon flights. For that type of flight, it's also worthwhile logging barometric pressure which provides better altitude information than the GPS receiver. [Update: The SkyPod is now available as a DIY kit: http://kaptery.com/product/skypod-kit.]

[![skypod_20170414-8016.JPG](https://publiclab.org/system/images/photos/000/020/143/large/skypod_20170414-8016.JPG)](https://publiclab.org/system/images/photos/000/020/143/original/skypod_20170414-8016.JPG)  
*Above: The current iteration of the SkyPod logger mounted on a [Saturn V Rig](https://publiclab.myshopify.com/collections/aerial-camera-mounts/products/saturn-v-kite-aerial-photography-rig). I printed it in white to help protect the temperature/humidity sensor from overheating in the sun.*

I have been powering the u-blox NEO-7M GPS board with 3.3v instead of 5v, but the antenna is large and probably sucks some current, so I wanted to test how long the whole thing would log on a set of batteries. The SkyPod can be powered by the six AAA battery pack on the [Saturn V Rig](https://publiclab.myshopify.com/collections/aerial-camera-mounts/products/saturn-v-kite-aerial-photography-rig), but in other situations four AAA should be enough. So I hooked it up to four AAA (eneloop NiMH rechargeable) and let it run outside while I was working in the garden yesterday. The hope was that it would log continuously for several hours -- long enough for a day's worth of aerial photography. 

[![ubloxfritzps.jpg](https://publiclab.org/system/images/photos/000/020/144/large/ubloxfritzps.jpg)](https://publiclab.org/system/images/photos/000/020/144/original/ubloxfritzps.jpg)  
*Above: The current configuration of the SkyPod. An Arduino Nano (center) controls three components: u-blox-NEO7M GPS board (top), Catalex microSD board (left), and BME280 barometric pressure, temperature, and humidity sensor (lower right).*

I did a couple of tests while it was logging. To learn what happens when it loses the GPS satellite fix I covered it with a jacket, but it never lost the fix. So I took it inside and put in a closet for 10 minutes, but it still kept logging. I might have learned something more important than what I wanted to learn.

[![ENDURANCE5hr.jpg](https://publiclab.org/system/images/photos/000/020/145/large/ENDURANCE5hr.jpg)](https://publiclab.org/system/images/photos/000/020/145/original/ENDURANCE5hr.jpg)  
*Above: Results from a five hour logging trial. A) The SkyPod was in the middle of the yard for more than three hours except for a short excursion indoors. B) I covered the SkyPod with a jacket which made it hot but did not cause it to lose the GPS fix. C) I took it inside and put it in a closet which made it cool, but it never lost the GPS fix. D) I went for a walk up a hill which was fun. E) I put the SkyPod inside by a window until it lost the GPS fix which I assume was because the batteries got run down. Note that elevation derived from barometric pressure (red line) crept up all day because pressure was dropping all day (it rained in the evening).*

Logging continued uninterrupted for five hours which is a good result. Data were being written to the uSD card every four seconds, and sensor data were being transferred between writes, so there was no sleeping going on. My photography flights typically last an hour or two, and I use rechargeable batteries, so I almost always start a flight with newly charged batteries. New alkaline batteries might last a little longer and might be good for multiple flights.

[![SatSkyPack.jpg](https://publiclab.org/system/images/photos/000/020/146/large/SatSkyPack.jpg)](https://publiclab.org/system/images/photos/000/020/146/original/SatSkyPack.jpg)  
*Above: I took a walk with two SkyPods. Both were mounted on Saturn V Rigs so I just strapped them to a pack. One SkyPod (upper) was the prototype with an Adafruit GPS board and Adafruit uSD card board.*

To provide a little more stress to the test, I took the SkyPod for a walk late in the afternoon. I also took the original prototype SkyPod with Adafruit components. This allowed me to compare the old BMP180 (pressure and temperature) and DHT22 (humidity and temperature) sensors with the BME280 sensor which senses all three (pressure, temperature, and humidity). 

[![HikeElev.JPG](https://publiclab.org/system/images/photos/000/020/147/large/HikeElev.JPG)](https://publiclab.org/system/images/photos/000/020/147/original/HikeElev.JPG)  
*Above: Elevation results from two SkyPods during an hour long hike. Elevation from GPS satellite data are compared to elevation derived from barometric pressure. The results from pressure are a much better reflection of the elevation changes during the hike. The level part in the middle of the hike is not me walking across a plateau, it's me sitting on the ground taking photos of flowers.*

[![HikeHumid.JPG](https://publiclab.org/system/images/photos/000/020/148/large/HikeHumid.JPG)](https://publiclab.org/system/images/photos/000/020/148/original/HikeHumid.JPG)  
*Above: Humidity results from two SkyPods during an hour long hike. The DHT22 sensor was on the Adafruit prototype SkyPod, and the BME280 sensor was on the newer u-blox SkyPod. There is generally less than two percentage points difference between the two sensors.*

[![HikeTemp.JPG](https://publiclab.org/system/images/photos/000/020/149/large/HikeTemp.JPG)](https://publiclab.org/system/images/photos/000/020/149/original/HikeTemp.JPG)  
*Above: Temperature results from two SkyPods during an hour long hike. The BMP180 and DHT22 sensors were on the prototype Adafruit SkyPod, and the BME280 sensor was on the u-blox SkyPod. There was generally less than 1.5°C difference among the sensors, and some of the difference could be due to sensor location. Temperature traces from the BMP180 and DHT22 sensors are stepped because data were recorded with only one decimal point precision (that might be all those sensors can provide).*

Results from the hour-long hike confirm that elevation results derived from barometric pressure are more useful than GPS elevation results. The sketches I am using allow the current sea level barometric pressure to be entered. A function in the sensor library computes elevation using that information. The two elevation traces derived from pressure differ by about 8 m because pressure was dropping all day and I updated the sea level pressure in the sketch for one of the SkyPods three hours after the other. 

I have ordered some extra components and when they arrive I will make kits available to assemble this version of the SkyPod. I ordered only a few of each part, so let me know if you are interested and maybe I will order some more. [Update: The SkyPod is now available as a DIY kit: http://kaptery.com/product/skypod-kit.]










