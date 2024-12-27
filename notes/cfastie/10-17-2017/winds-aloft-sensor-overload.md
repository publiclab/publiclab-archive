---
title: "Winds aloft: sensor overload"

tagnames: 'arduino, nasa, kite, gps, anemometer, wind-speed-meter, atmosphere, saturnv, skyshield, data-logging, skypod, ublox, wind-sensor, rokkaku, series:diy-wind-sensors, skypod-gps-logger, wind-speed, aeropod, activity:as220-wind-sensors, activity:aren'
author: cfastie
path: /notes/cfastie/10-17-2017/winds-aloft-sensor-overload.md
nid: 15057
uid: 554
cids: 17542,17543,17548,17549,17550,18670,18671
---

![](https://publiclab.org/public/system/images/photos/000/021/955/original/BreadKest_20171013-1397.JPG)

# Winds aloft: sensor overload

by [cfastie](/profile/cfastie) | October 17, 2017 03:01

October 17, 2017 03:01 | Tags: [arduino](/tag/arduino), [nasa](/tag/nasa), [kite](/tag/kite), [gps](/tag/gps), [anemometer](/tag/anemometer), [wind-speed-meter](/tag/wind-speed-meter), [atmosphere](/tag/atmosphere), [saturnv](/tag/saturnv), [skyshield](/tag/skyshield), [data-logging](/tag/data-logging), [skypod](/tag/skypod), [ublox](/tag/ublox), [wind-sensor](/tag/wind-sensor), [rokkaku](/tag/rokkaku), [series:diy-wind-sensors](/tag/series:diy-wind-sensors), [skypod-gps-logger](/tag/skypod-gps-logger), [wind-speed](/tag/wind-speed), [aeropod](/tag/aeropod), [activity:as220-wind-sensors](/tag/activity:as220-wind-sensors), [activity:aren](/tag/activity:aren)

----

I have been including anemometers in the payload of kite flights for a few months ([series of research notes here](https://publiclab.org/tag/series:diy-wind-sensors)), and a goal has been to include two anemometers to compare their results. The [Modern Device Wind Sensor Rev P](https://moderndevice.com/product/wind-sensor-rev-p/) has returned promising results, but the only way to know if the results are accurate is to include a sensor with a known track record on the same flight. Last week my seven foot Rokkaku was able to lift a [NASA Aeropod Air Column Profiler](https://technology.nasa.gov/patent/GSC-TOPS-10) and two [KAPtery SkyPods](http://kaptery.com/product/skypod-kit).

[![BreadKest_20171013-1332.JPG](https://publiclab.org/system/images/photos/000/021/956/medium/BreadKest_20171013-1332.JPG)](https://publiclab.org/system/images/photos/000/021/956/original/BreadKest_20171013-1332.JPG)  
_Figure 1: The NASA Aeropod Profiler has a Kestrel 5500 data logging anemometer with sensors for temperature, humidity, barometric pressure, and a compass (for wind direction)._

[![BreadKest_20171013-1363.JPG](https://publiclab.org/system/images/photos/000/021/957/medium/BreadKest_20171013-1363.JPG)](https://publiclab.org/system/images/photos/000/021/957/original/BreadKest_20171013-1363.JPG)  
_Figure 2\. One of the SkyPods on the [Saturn V Rig](http://kaptery.com/product/saturn-v-rig) had the Wind Sensor Rev P and a BME280 sensor for pressure, temperature, and humidity. The other SkyPod had a GPS (lon, lat, alt) and another BME280\._

If we count the temperature sensors (for internal calibration) on the real time clock and Wind Sensor Rev P, the total sensor count on the flight was 5 temperature, 3 pressure, 3 humidity, 2 wind speed, 1 wind direction, plus GPS (lon, lat, alt). There was a good wind that day, but not enough to lift all those sensors _and_ a camera. So once again my KAP pursuits were set aside for the sake of science.

[![BreadKest_20171013-1362.JPG](https://publiclab.org/system/images/photos/000/021/958/medium/BreadKest_20171013-1362.JPG)](https://publiclab.org/system/images/photos/000/021/958/original/BreadKest_20171013-1362.JPG)  
_Figure 3\. The Aeropod and Saturn V Rig were next to each other on the kite line about 200 feet down the line from the Rokkaku._

Below is a 1.3 minute video about the flight.
<iframe width="720" height="405" src="https://www.youtube.com/embed/Twk_CRrQ7N0" frameborder="0" allowfullscreen=""></iframe>

[![AllAltWind.PNG](https://publiclab.org/system/images/photos/000/021/959/large/AllAltWind.PNG)](https://publiclab.org/system/images/photos/000/021/959/original/AllAltWind.PNG)  
_Figure 4\. The entire flight lasted 1.5 hours, but only the NASA Aeropod was on the line for all that time. I reeled in line and added the Saturn V Rig halfway through when the wind had picked up. You can see the increase in wind speed at altitude with time, and also a good correlation between altitude and wind speed. These results are only from the Kestrel, and the altitude is not accurate because I didn't set the reference sea-level barometric pressure before the flight (I don't know how)._

[![3Altitude.PNG](https://publiclab.org/system/images/photos/000/021/960/large/3Altitude.PNG)](https://publiclab.org/system/images/photos/000/021/960/original/3Altitude.PNG)  
_Figure 5\. Altitude results from barometric pressure measured by three sensors (Kestrel and 2 BME280) during the second half of the flight. The absolute values of the Kestrel data have been linearly adjusted (slid upwards) to match the BME280 results which were computed based on accurate sea level barometric pressure. The superb match among the three datasets suggests that it is easy to measure barometric pressure._

[![5temp.PNG](https://publiclab.org/system/images/photos/000/021/961/large/5temp.PNG)](https://publiclab.org/system/images/photos/000/021/961/original/5temp.PNG)  
_Figure 6\. Temperature measured by five sensors. Two of the sensors are part of the calibration system for the real time clock (RTC, on one of the SkyPods) and Wind Sensor Rev P. The lowest temperature was recorded by the Kestrel which has its sensor completely exposed to the air flow. The BME280 sensors on the SkyPods are both inside the sensor pods (to reduce noise cause by wind), and are 1 to 3 degrees warmer than the Kestrel sensor. All five data series show good negative correlation with altitude. Fortunately for society, most of those who have decided to deny global warming are ignorant of the lesson here that it is really hard to measure the temperature of the atmosphere._

[![2windspeed.PNG](https://publiclab.org/system/images/photos/000/021/962/large/2windspeed.PNG)](https://publiclab.org/system/images/photos/000/021/962/original/2windspeed.PNG)  
_Figure 7\. Wind speed recorded by both anemometers during their 40 minute flight together. Dots are measurements every four seconds (hot wire) or five seconds (Kestrel) and dashed lines are one minute running means. Both anemometers respond similarly to minor variations in wind speed (peaks of the dashed lines are simultaneous). The apparent noise around the mean is similar for both devices. The absolute magnitude of the speed measurements differ substantially. I trust the results from the Kestrel for two reasons: 1) it costs $300 more than the hot wire sensor, and 2) the wind seemed to be about 13 to 16 mph (6 to 7 m/s) during this flight based on how hard the kite was pulling (at least it seemed to be greater than 9 mph (4 m/s))._

When the complete payload ascended for the second flight, I tried to let out line smoothly and also walked upwind steadily to keep the payload rising vertically instead of at an angle. In the video above you can see that I did not walk upwind fast enough to keep the payload from moving downwind as it rose. Next time I will walk backwards faster. The following three graphs are air column profiles for that ascent from 450 to 620 m (1475 to 2030 feet) above sea level. All three of the profiles show a point of inflection at about 540 to 550 m asl. It got windy at that altitude and the kite rose quickly and pulled the payload vertically about 60 or 70 m, but the temperature and humidity did not vary much during that fast ascent. This is totally the best evidence I have seen for government funded chemtrail atmospheric-modification.

[![AltxWind.PNG](https://publiclab.org/system/images/photos/000/021/964/medium/AltxWind.PNG)](https://publiclab.org/system/images/photos/000/021/964/original/AltxWind.PNG)  
_Figure 8\. Air column profile of wind speed. Wind speed data are from the Kestrel, and altitude is from the barometer on a BME280\._

[![AltxTemp.PNG](https://publiclab.org/system/images/photos/000/021/963/medium/AltxTemp.PNG)](https://publiclab.org/system/images/photos/000/021/963/original/AltxTemp.PNG)  
_Figure 9\. Air column profile of temperature from a BME280 sensor._

[![AltxHumid.PNG](https://publiclab.org/system/images/photos/000/021/965/medium/AltxHumid.PNG)](https://publiclab.org/system/images/photos/000/021/965/original/AltxHumid.PNG)  
_Figure 10\. Air column profile of humidity from a BME280 sensor._

I was very pleased to see the similarities between the Modern Device wind sensor and the Kestrel anemometer. The two data series tracked each other well with a similar amount of scatter. The difference in wind speed magnitude recorded by the two does not seem to be a hardware failure but instead is likely a lack of calibration of the hot wire sensor. Paul Badger, the developer of the sensor, [posted in July](https://moderndevice.com/news/calibrating-rev-p-wind-sensor-new-regression/#more-19365) about his attempts to improve the software calibration (the sensor also has internal hardware calibration). I could not get his calibration equation to return meaningful results. Paul suggested he was still working on calibrating the sensor, but nothing further has been posted. I guess I could use the results from this flight to adjust all my future results from the sensor. Or if anyone is interested in trying that, let me know and will post the data here.