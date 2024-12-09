---
title: Winds aloft: less noise
tagnames: balloon-mapping, kite-mapping, arduino, kite-aerial-photography, kite, gps, sensors, wind, saturnv, skyshield, data-logging, skypod, bme280, ublox, rokkaku, response:14713, series:diy-wind-sensors, skypod-gps-logger, activity:skypod-gps-logger, activity:as220-wind-sensors
author: cfastie
path: /notes/cfastie/08-12-2017/winds-aloft-less-noise.md
nid: 14756
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/021/330/original/wind_20170810-0427.JPG)

# Winds aloft: less noise

by [cfastie](../profile/cfastie) August 12, 2017 16:34

August 12, 2017 16:34 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [arduino](../tag/arduino), [kite-aerial-photography](../tag/kite-aerial-photography), [kite](../tag/kite), [gps](../tag/gps), [sensors](../tag/sensors), [wind](../tag/wind), [saturnv](../tag/saturnv), [skyshield](../tag/skyshield), [data-logging](../tag/data-logging), [skypod](../tag/skypod), [bme280](../tag/bme280), [ublox](../tag/ublox), [rokkaku](../tag/rokkaku), [response:14713](../tag/response:14713), [series:diy-wind-sensors](../tag/series:diy-wind-sensors), [skypod-gps-logger](../tag/skypod-gps-logger), [activity:skypod-gps-logger](../tag/activity:skypod-gps-logger), [activity:as220-wind-sensors](../tag/activity:as220-wind-sensors)

----

My first results from a [Modern Device wind sensor](https://moderndevice.com/product/wind-sensor-rev-p/) were [very noisy](https://publiclab.org/notes/cfastie/08-03-2017/winds-aloft). So I made a couple of modifications and collected some more data. 

[![wind_20170810-0436.JPG](https://publiclab.org/system/images/photos/000/021/331/medium/wind_20170810-0436.JPG)](https://publiclab.org/system/images/photos/000/021/331/original/wind_20170810-0436.JPG)  
*Above: The wind sensor (Rev P) mounted on the Picavet cross of a [Saturn V Rig](http://kaptery.com/product/saturn-v-rig). That [SkyPod ](http://kaptery.com/product/skypod-kit)has a real time clock and microSD card. Another SkyPod data logger is mounted on the shoulder of the camera rig. The lower SkyPod is the standard configuration with GPS receiver and microSD card for logging data. Both SkyPods are operated by Arduino Nanos and have BME280 sensors for barometric pressure, temperature, and humidity.* 

The two primary changes are:

1. The wind sensor was separated from the GPS receiver. The GPS antenna uses a lot of power, and the GPS module sends data every second to the Arduino. Just in case this activity on the circuit interfered with the wind sensor, this change might reveal that. 
2. The Saturn V camera rig rotates 360° every 45 seconds (faster for lower camera tilt angles). When the wind sensor is on the rig, its orientation to the wind changes constantly. The sensor is also in the lee of the Picavet cross for 5-15 seconds every minute. Mounting the sensor on the Picavet cross puts the hot wire above everything except the Picavet lines and keeps its orientation to the wind constant.

[![wind_20170809-0396-2.JPG](https://publiclab.org/system/images/photos/000/021/332/medium/wind_20170809-0396-2.JPG)](https://publiclab.org/system/images/photos/000/021/332/original/wind_20170809-0396-2.JPG)  
*Above: The upper SkyPod with the wind sensor has a real time clock (blue PCB) and is powered by a 9 volt lithium battery. The lower SkyPod has the GPS antenna on top and rotates with the camera rig. It is powered by the same battery pack (6 eneloop AAA) that powers the [SkyShield autoKAP controller](http://kaptery.com/product/skyshield-autokap-controller) (and the servos).*

Another difference between the first and second tests is that there was less wind the second time. There was not enough wind for my biggest kite, a seven foot Rokkaku, to lift the Saturn V Rig with Canon EOS M, so I removed the camera. This is the first time I have ever flown a KAP rig without a camera and it seemed a little disingenuous, like playing tennis without the ball (you could run around swinging the racket and get good exercise, but you would know something was missing). I powered the SkyShield and SkyPod GPS logger so the empty camera rig panned and tilted normally.

[![wind_20170810-0452.JPG](https://publiclab.org/system/images/photos/000/021/333/large/wind_20170810-0452.JPG)](https://publiclab.org/system/images/photos/000/021/333/original/wind_20170810-0452.JPG)  
*Above: The empty Saturn V Rig with two SkyPods. Without the camera and legs, the rig weight is reduced from almost two pounds to about 1.1 pounds. There are three Arduino Nanos on the rig.*

Apparently one of the differences this time resulted in much less noise in the wind speed data. Because all three variables were altered simultaneously, I can't be sure which one was responsible. Fortunately, the scientific method is out of favor these days, so I hereby conclude that it's because the sensor was not rotating around the Picavet cross. 

[![windElev.PNG](https://publiclab.org/system/images/photos/000/021/334/large/windElev.PNG)](https://publiclab.org/system/images/photos/000/021/334/original/windElev.PNG)  
*Above: Wind speed at the KAP rig during a 25 minute flight (upper). Elevation of the KAP rig during the flight from the barometric pressure data (lower).*

The wind speed was measured at about 6-8 mph during most of the flight. A wind gust starting at about 14:14 allowed the kite to pull the rig to its highest elevation, but the high times did not last long. For a few minutes, the rig stayed about 240 m (820 feet) above the ground. The rig was about 100 feet down the line from the Rokkaku and about 1000 feet of kite line was out for that short time. The kite was flying at a high angle when it was at its apogee (see video below). 

There is still a lot of noise in the data, but it is reduced from the first test. I have no way of calibrating the absolute values being returned by the sensor, but they seem to be reasonable. Also, the variations in the data during the flight match well with my observations.

[![3Elevation.PNG](https://publiclab.org/system/images/photos/000/021/335/large/3Elevation.PNG)](https://publiclab.org/system/images/photos/000/021/335/original/3Elevation.PNG)  
*Above: Three records of KAP rig elevation during the flight derived from the GPS and the barometric pressure from two BME280 sensors on the rig. The real time clock on the non-GPS SkyPod was not synchronized with the GPS time.*

The short term variations match extremely well among three records of KAP rig elevation recorded during the flight. The absolute values of the two records derived from barometric pressure ("BME elevation") match almost perfectly. Those two records of BME elevation are offset in time from each other because they were recorded on different SkyPods which kept time differently. The GPS satellites provide the time for the data on the SkyPod with GPS, and the real time clock on the other SkyPod was not synchronized with the GPS signal. The elevation data from the GPS is consistently about 50 meters greater than the BME280 elevation data derived from pressure. I don't know why that is so.

[![TempHumd.PNG](https://publiclab.org/system/images/photos/000/021/336/large/TempHumd.PNG)](https://publiclab.org/system/images/photos/000/021/336/original/TempHumd.PNG)  
*Above: Temperature and humidity data from BME280 sensors on two SkyPods on the KAP rig. The BME2 records are of shorter duration because that SkyPod was powered only during the flight and the other SkyPod was on before and after the flight.*

Although the short term variations in temperature and humidity match well between the two BME280 sensors on the KAP rig, there is considerable difference in absolute values. Humidity differs by about 10% and temperature by 3° or 4°C.  The sensors were in separate SkyPod sensor chambers, but the chambers were similar and were just a few inches from each other. The same sensors produced extremely similar records of barometric pressure (see above), so I don't have a good explanation for these differences.  

<iframe width="853" height="480" src="https://www.youtube.com/embed/eJ5HfBxoNfQ" frameborder="0" allowfullscreen></iframe>  
*Above: Animation of the flight from GPS data collected by a SkyPod logger. The kite was about 100 feet higher than the GPS receiver on the rig which reached a maximum elevation of about 820 feet above the ground. The ascent is in yellow and the descent is in green. The faint traces from last week's flight are also visible.*

I also deployed the base station with the wind sensor Rev C as in the first trial. The only change was to use four AA alkaline batteries (4x1.5=6 volts) instead of four AA eneloops (4x1.2=4.8 volts). The LCD was clearly legible in the sunlight so I could ensure that the BME280 sensor was sending data. But the wind sensor was not sending data. I thought I had confirmed that four alkaline batteries worked with the wind sensor, but I did not do adequate pre-deployment checks. So powering the Nano with 9v or 6v does not work with the Rev C wind sensor. Powering the Nano with 4.8v does work, but the LCD does not get enough power to be easily legible in sunlight. There is still a lot of work to do with the Rev C wind sensor.

But the Rev P wind sensor seems to be promising. 




