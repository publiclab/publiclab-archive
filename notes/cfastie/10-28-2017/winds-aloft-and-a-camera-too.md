---
title: Winds aloft: and a camera too
tagnames: kite-mapping, arduino, kite-aerial-photography, nasa, kite, anemometer, wind-speed-meter, sensors, wind, saturnv, skyshield, data-logging, skypod, ublox, series:diy-wind-sensors, skypod-gps-logger, activity:skypod-gps-logger, wind-speed, aeropod, activity:wind-speed, activity:as220-wind-sensors, activity:aren
author: cfastie
path: /notes/cfastie/10-28-2017/winds-aloft-and-a-camera-too.md
nid: 15125
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/022/134/original/sfmCrown_20171023-1457.JPG)

# Winds aloft: and a camera too

by [cfastie](../profile/cfastie) October 28, 2017 04:15

October 28, 2017 04:15 | Tags: [kite-mapping](../tag/kite-mapping), [arduino](../tag/arduino), [kite-aerial-photography](../tag/kite-aerial-photography), [nasa](../tag/nasa), [kite](../tag/kite), [anemometer](../tag/anemometer), [wind-speed-meter](../tag/wind-speed-meter), [sensors](../tag/sensors), [wind](../tag/wind), [saturnv](../tag/saturnv), [skyshield](../tag/skyshield), [data-logging](../tag/data-logging), [skypod](../tag/skypod), [ublox](../tag/ublox), [series:diy-wind-sensors](../tag/series:diy-wind-sensors), [skypod-gps-logger](../tag/skypod-gps-logger), [activity:skypod-gps-logger](../tag/activity:skypod-gps-logger), [wind-speed](../tag/wind-speed), [aeropod](../tag/aeropod), [activity:wind-speed](../tag/activity:wind-speed), [activity:as220-wind-sensors](../tag/activity:as220-wind-sensors), [activity:aren](../tag/activity:aren)

----

I have made [four kite flights with anemometers](https://publiclab.org/tag/series:diy-wind-sensors) hanging from the line, but there was not enough wind during the last three flights to lift a camera with the payload. This week a strong south wind allowed my first flight with a [Saturn V Rig](http://kaptery.com/product/saturn-v-rig) with Canon EOS M, two [SkyPod data loggers](https://publiclab.org/tag/skypod-gps-logger), and the NASA Aeropod air column profiler. One of the SkyPods included a [Modern Device Rev P wind speed sensor](https://moderndevice.com/product/wind-sensor-rev-p/) and the other had a GPS receiver (and both SkyPods had BME280 sensors).

[![sfmCrown_20171023-1431.JPG](https://publiclab.org/system/images/photos/000/022/135/large/sfmCrown_20171023-1431.JPG)](https://publiclab.org/system/images/photos/000/022/135/original/sfmCrown_20171023-1431.JPG)  
_Figure 1\. The SkyPod on the Picavet cross includes a Modern Device wind sensor. The Picavet cross maintains its orientation to the wind via dual attachments to the kite line. The Aeropod profiler depends on its tail to keep it mostly pointed into the wind._

While getting the Saturn V Rig ready, I carelessly snapped off the business end of the Modern Device sensor. I assumed that was the end of this wind business for me, but I tried a repair that seems to have worked.

[![MDRevP4pan.jpg](https://publiclab.org/system/images/photos/000/022/136/large/MDRevP4pan.jpg)](https://publiclab.org/system/images/photos/000/022/136/original/MDRevP4pan.jpg)  
_Figure 2\. The Rev P wind sensor has a fragile loop which must be well exposed to the air, so it is hard to protect it during flight. It's easier to protect it at other times, but I still broke it. Then I epoxied a strip of carbon fiber to the back of it and soldered both the broken trace and the separated resistor._

The flight I made had two goals: 1) compare the repaired Rev P sensor with the Kestrel 5500 on the NASA Aeropod, and 2) try a new mode on the [SkyShield autoKAP controller](http://kaptery.com/product/skyshield-autokap-controller). The new mode is optimized for capturing photos for making structure from motion models. It takes only nadir and low oblique photos to capture the ground surface well below the horizon. These photos can be used to construct a three dimensional model of the topography.

[![parde7o7.jpg](https://publiclab.org/system/images/photos/000/022/137/large/parde7o7.jpg)](https://publiclab.org/system/images/photos/000/022/137/original/parde7o7.jpg)  
_Figure 3\. Aerial panorama of the 1759 British Fort at Crown Point, NY, stitched from 7 photos. Photos at higher angles were not taken (unless timed with a swinging rig)._

I chose a site with interesting topography for this flight. The ruins of the British Fort at Crown Point are a raised star-shaped outline marking the remains of the parapet and banquette. I walked the kite over the entire structure allowing a minute or two at each of three or four dozen different locations for the SkyShield to point and shoot the camera about 20 times.

[![GEoblique.PNG](https://publiclab.org/system/images/photos/000/022/144/large/GEoblique.PNG)](https://publiclab.org/system/images/photos/000/022/144/original/GEoblique.PNG)  
_Figure 4\. The two hour track I followed walking around the fort (gold, from a GPS app on my phone) and the track the SkyPod GPS Logger followed in the air (blue) including the ascent and descent. I never changed the length of kite line between the ascent and descent. The camera battery died about 10 minutes before the descent._

[![sfmCrown_20171023-1685-4.JPG](https://publiclab.org/system/images/photos/000/022/138/medium/sfmCrown_20171023-1685-4.JPG)](https://publiclab.org/system/images/photos/000/022/138/original/sfmCrown_20171023-1685-4.JPG)  
_Figure 5\. There is a smaller, earlier star fort at this site -- the 1734 Fort Saint-Frederic. Behind it is the Crown Point Bridge, 2011\. This is one of the few photos from the flight that include the horizon._

[![sfmCrown_20171023-2310.JPG](https://publiclab.org/system/images/photos/000/022/139/medium/sfmCrown_20171023-2310.JPG)](https://publiclab.org/system/images/photos/000/022/139/original/sfmCrown_20171023-2310.JPG)  
_Figure 6\. Flying the Levitation Delta from the Princess of Wales Bastion._

[![Alt_wind.PNG](https://publiclab.org/system/images/photos/000/022/140/large/Alt_wind.PNG)](https://publiclab.org/system/images/photos/000/022/140/original/Alt_wind.PNG)  
_Figure 7\. Continuous data from the Modern Device Rev P wind sensor and one of the BME280 sensors during the two hour flight. There was lot of walking around happening during those two hours, so some of the wind speed data is likely influenced by my moving the rig upwind or downwind._

[![Humid3.PNG](https://publiclab.org/system/images/photos/000/022/141/large/Humid3.PNG)](https://publiclab.org/system/images/photos/000/022/141/original/Humid3.PNG)  
_Figure 8\. Humidity results for two BME280 sensors and the Kestrel 5500\. The Kestrel turns itself off after one hour and there does not seem to be any way to avoid that._

[![Wind2.PNG](https://publiclab.org/system/images/photos/000/022/142/large/Wind2.PNG)](https://publiclab.org/system/images/photos/000/022/142/original/Wind2.PNG)  
_Figure 9\. Wind speed results for the first hour of the flight when both anemometers were operating. The dots are measurements every five seconds and the lines are one minute running averages._

The biggest surprise of the flight was that the Kestrel has an auto shutdown feature with a one hour maximum delay. I have not found a way to turn that off or extend the delay. So only the Modern Device sensor captured wind speed data for the entire flight. That was a disappointment, but I got an hour of parallel data from both sensors.

The best result is that the repair to the Modern Device wind sensor seems to be good. The two wind speed series (especially the one minute running means) track each other really well considering that they are both being buffeted around by the strong wind. So both sensors seem to be capturing wind speed variation very well. Both series include a lot of variation, and the Modern Device series has slightly more variation than the Kestrel (Table 1).

**_Table 1\. Mean and standard deviation of wind speed for the 1590 measurements by two devices during the high altitude part of the common flight._**  
[![mean_sd.PNG](https://publiclab.org/system/images/photos/000/022/143/medium/mean_sd.PNG)](https://publiclab.org/system/images/photos/000/022/143/original/mean_sd.PNG)

As was the case during the [first comparison of these two sensors](https://publiclab.org/notes/cfastie/10-17-2017/winds-aloft-sensor-overload), the Modern Device sensor recorded wind speed which was consistently lower than the Kestrel. However, the absolute difference between the two sensors was 2 to 3 mph this time, about half of the difference last time (5.5 to 6.5 mph). The improvement could be due to the repair I made or to the greater wind speeds this time (17 to 18 mph vs. 11 to 15 mph last time).

So there remains a need for better calibration of the Modern Device sensor. If that can happen, the remaining weakness of the sensor will be the weakness of the sensor when confronted with clumsy handling. The strengths of the Modern Device sensor include its cost ($24 plus an Arduino data logger) compared to the Kestrel ($300), its convenient size and weight, and the lack of proprietary limits on configuration (e.g., the apparent one hour time limit).

I am still working on transferring the GPS data to the EXIF headers of each of the 1860 photos taken during the flight. Then I can select a hundred or so photos to use for a structure from motion model (if the photos have GPS data, the model will be scaled correctly).