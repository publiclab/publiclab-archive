---
title: 'The Great GPS Ski-off'
tagnames: arduino, gps, sensors, data-logging, skypod, response:14020
author: cfastie
path: /notes/cfastie/03-18-2017/the-great-gps-ski-off.md
nid: 14036
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/019/888/original/gpsOff_20170317-7678ps.jpg)

# The Great GPS Ski-off

by [cfastie](../profile/cfastie) March 18, 2017 23:56

March 18, 2017 23:56 | Tags: [arduino](../tag/arduino), [gps](../tag/gps), [sensors](../tag/sensors), [data-logging](../tag/data-logging), [skypod](../tag/skypod), [response:14020](../tag/response:14020)

----

_Above: The GPS capabilities of these four devices were compared in a non-definitive and poorly controlled real-world test. Left to right: SkyPod datalogger, Android app, Garmin GPSmap76CSx, Canon PowerShot S100\._

The tentatively named SkyPod datalogger is in the [working prototype stage](https://publiclab.org/notes/cfastie/03-15-2017/a-standalone-aerial-sensor-pod). For the first field test, I carried it with three other devices capable of logging GPS location data. Two feet of snow from Winter Storm Stella has made it challenging to walk around in the woods here in Vermont but has provided the best conditions in two or three years for cross country skiing in the Green Mountain National Forest.

[![Shannie_20170317-1440.JPG](https://publiclab.org/system/images/photos/000/019/859/medium/Shannie_20170317-1440.JPG)](https://publiclab.org/system/images/photos/000/019/859/original/Shannie_20170317-1440.JPG)  
_Figure 1\. About 10 miles of ungroomed ski trails are maintained here by the USFS and local groups for non-motorized use. The conditions were excellent this week, and I was the first skier on the trails._

The four devices I compared are:

1. [SkyPod datalogger](https://publiclab.org/notes/cfastie/03-15-2017/a-standalone-aerial-sensor-pod): An Arduino Nano controlling a GPS board, microSD board, and two sensors (BMP180 pressure and temperature, and DHT22 temperature and humidity). [Now available here](http://kaptery.com/product/skypod-kit).
2. [Geo Tracker app](https://play.google.com/store/apps/details?id=com.ilyabogdanovich.geotracker&hl=en): (Android or iOS) A free app for smartphones that seems to be very capable. No ads, no gimmicks, no undue permissions requested. Used with an old low-end Moto G phone.
3. [Garmin GPSmap76CSx](https://www.amazon.com/Garmin-GPSMAP-Waterproof-Discontinued-Manufacturer/dp/B000CSQRYS): A discontinued, ~12 year old GPS receiver which was a workhorse of Garmin's line for many years (MSRP ~$450). Still works perfectly, but Garmin's new software requires that you tell it which GPSr you are using, and it doesn't seem to acknowledge that this product ever existed. So it is becoming very tricky to work with the excellent data it captures.
4. [Canon PowerShot S100](http://www.kenrockwell.com/canon/s100.htm): The S100 has integrated GPS and can tag each photo with GPS data or create a separate log of your GPS track. The track includes a fix only every 15 seconds which is a little slow for my uses. But CHDK allows logging at any interval. I had not tried this before so this was my first experience with it. I should have tested it more before this test.

[![Shannie_20170317-1413.JPG](https://publiclab.org/system/images/photos/000/019/865/large/Shannie_20170317-1413.JPG)](https://publiclab.org/system/images/photos/000/019/865/original/Shannie_20170317-1413.JPG)  
_Figure 2\. I broke trail for a couple of miles and then got to ski in some of my own tracks. It was hard work carrying all of that GPS gear._

I have an external antenna for the Garmin GPSr which rode on my hat, so the Garmin had the best view of the satellite filled sky. The SkyPod was poking out of my daypack and had good exposure but my torso blocked a lot of the sky. The S100 was around my neck and against my upper chest, so its exposure was similar to the SkyPod. The phone was in the pants pocket where it always is, so it might have had the worst reception.

[![Shanna_20170316-1391-2.JPG](https://publiclab.org/system/images/photos/000/019/867/medium/Shanna_20170316-1391-2.JPG)](https://publiclab.org/system/images/photos/000/019/867/original/Shanna_20170316-1391-2.JPG)  
_Figure 3\. The SkyPod rode in the rear pocket of the daypack with the antenna exposed. The DHT22 sensor (white, center) was flopping around in the open air, and the BMP180 sensor was well inside the SkyPod housing with limited airflow._

I discovered a fatal flaw in my SkyPod housing design. Scrunching it into the pack pushed the microSD card into the card slot, which is how you remove the card. So the card got released without me knowing it until after the two hour ski expedition. It was devastating for me to realize that my devotion to the pursuit of knowledge would require that I return to the ski trails the following day. A simple addition to the housing design is in the works.

[![AboveFull.JPG](https://publiclab.org/system/images/photos/000/019/868/medium/AboveFull.JPG)](https://publiclab.org/system/images/photos/000/019/868/original/AboveFull.JPG)  
_Figure 4\. Three GPS tracks from the second day of skiing. The entire route (from the road at far right around the loop and back) is about two miles long._

The agreement among three of the GPS tracks from the second day is quite impressive. The lack of a fourth track is due to my failure to figure out how to use the CHDK GPS functions on the PowerShot. After a day of playing with it I still can't make it work. So this is really a comparison of three devices, not four.

[![Shannie_20170317-Intx.JPG](https://publiclab.org/system/images/photos/000/019/869/medium/Shannie_20170317-Intx.JPG)](https://publiclab.org/system/images/photos/000/019/869/original/Shannie_20170317-Intx.JPG)  
_Figure 5\. Close up of Figure 4 where the loop meets the trail back to the road. pink=SkyPod, green=Garmin, blue=phone. The horizontal dimension of this view is 190 m (620 feet). The largest separation between simultaneous tracks in this view and in the entire route is 13 m (43 feet)._

This trial has little power to test the accuracy of these devices, because the wooded trails I followed do not show up in Google Earth. So we can primarily evaluate their precision by comparing the tracks to one another. At a few places, simultaneous tracks were separated by 13 m (43 feet). The error for most of the route is less than that, but if you use only one device at a time, you never know when the error is 13 m.

[![FromSWest.JPG](https://publiclab.org/system/images/photos/000/019/870/medium/FromSWest.JPG)](https://publiclab.org/system/images/photos/000/019/870/original/FromSWest.JPG)  
_Figure 6\. An oblique view of the route with the crest of the Green Mountains in the distance. The difference between the highest and lowest point on the route is about 55 m (180 feet). These tracks were "clamped to ground" in Google Earth, so elevation data in the tracks are not depicted._

In general, the agreement of the tracks is reassuring These are three very different devices which were deployed in different ways. I was especially impressed that a phone in my pocket could match the performance of a dedicated GPSr with a well exposed antenna.

[![3Eleva.jpg](https://publiclab.org/system/images/photos/000/019/871/large/3Eleva.jpg)](https://publiclab.org/system/images/photos/000/019/871/original/3Eleva.jpg)  
_Figure 7\. Elevation from three devices. The Garmin and SkyPod have good agreement for the first two thirds of the route and then deviate. The phone app is graphed separately because its elevation readings were about 45 m (150 feet) lower than the other two. Results from the SkyPod and the phone app are from GPS satellite data, but the Garmin results are not (see below)._

The elevation data recorded by the devices are not as impressive as the latitude/longitude data. Elevation derived from GPS satellite data is notoriously poor, and the elevation results from these devices confirm that. The phone results were especially disappointing (Fig. 7), but there was substantial disagreement between the Garmin and SkyPod. The Garmin result looks much better (based on when I was skiing uphill vs. downhill) than the SkyPod. The Garmin has a barometer which is used along with the GPS data, so it makes sense that it delivered the best result.

[![Elev_Elev.JPG](https://publiclab.org/system/images/photos/000/019/872/medium/Elev_Elev.JPG)](https://publiclab.org/system/images/photos/000/019/872/original/Elev_Elev.JPG)  
_Figure 8\. Elevation results from the SkyPod. Elevation from GPS data is compared to elevation crudely derived from barometric pressure (from the BMP180 sensor). Neither result is calibrated, but the two traces roughly track each other for much of the route. There is a substantial deviation starting at about 19:30 where the result based on pressure is more realistic._

The SkyPod elevation result has an anomaly near the end of the route which might be due to poor satellite reception or some other problem. Elevation derived from barometric pressure (from the BMP180 sensor) tracked reality much better than the GPS elevation (Fig. 8).

[![GArmElevXBMPelev.JPG](https://publiclab.org/system/images/photos/000/019/877/large/GArmElevXBMPelev.JPG)](https://publiclab.org/system/images/photos/000/019/877/original/GArmElevXBMPelev.JPG)  
_Figure 9\. Elevation from the Garmin GPSr (blue) and elevation computed from the barometric pressure from the BMP180 on the SkyPod (red). The absolute values differ by about 80 feet (note different vertical axes), but the two series track each other very well._

The elevation from the Garmin GPSr and the elevation derived from the barometric pressure logged by the SkyPod are suspiciously similar (Fig. 9). The correspondence of these traces indicates that the elevation reported by the Garmin GPSr is derived primarily from its internal barometer and not from GPS satellite information. Both sources of information are used to produce the Garmin result for elevation, but I assumed that the pressure data was just used to adjust the GPS information. Maybe it's the other way around. The library for the BMP180 sensor includes a function to convert pressure to elevation, and that result is graphed in Fig. 9\. This result strongly indicates that the Garmin elevation result is also derived primarily from pressure.

[![TempxElev.JPG](https://publiclab.org/system/images/photos/000/019/874/medium/TempxElev.JPG)](https://publiclab.org/system/images/photos/000/019/874/original/TempxElev.JPG)  
_Figure 10\. Elevation and temperature results from the SkyPod. Elevation is from BMP180 barometric pressure data and temperature is from the DHT22 sensor. Although there is some inverse relationship (temperature is low when elevation is high) other variables (sunlight, aspect, evergreen cover) obscure the expected adiabatic relationship._

[![TempxTemp2.JPG](https://publiclab.org/system/images/photos/000/019/873/medium/TempxTemp2.JPG)](https://publiclab.org/system/images/photos/000/019/873/original/TempxTemp2.JPG)  
_Figure 11\. Temperature results from the SkyPod. The BMP180 sensor was well protected inside the daypack pocket and stayed 5° to 10°C warmer than the exposed DHT22 sensor._

[![TempXRH.JPG](https://publiclab.org/system/images/photos/000/019/875/medium/TempXRH.JPG)](https://publiclab.org/system/images/photos/000/019/875/original/TempXRH.JPG)  
_Figure 12\. Temperature and humidity results from the SkyPod. The one big peak in humidity (around 18:30) is unexplained but might be snow falling from a tree branch onto the sensor._

The barometric pressure, temperature, and humidity results from the SkyPod don't reveal any startling patterns. There was not much variation in any of those parameters, so the expected relationships are difficult to discern from noise. But it is good to see that the little $3.00 sensors can produce meaningful results in active real world deployments.

And now the final results from the independent panel of judges:

###First Place
##SkyPod  
[Now available here](http://kaptery.com/product/skypod-kit).  
Reasons for decision:

1. I made it myself.
2. It also logs sensor data!
3. I made it myself.
4. It's open source!
5. I made it myself.

###First Runner Up
##Geo Tracker phone app
Reasons for decision:

1. It's a free app.
2. It was in my pocket the whole time.
3. I don't know why the elevation results were so far off.

###Second Runner Up (AKA the loser)
##Garmin GPSmap76CSx
Reasons for decision:

1. The elevation results are good, but they are not derived primarily from GPS data.
2. The lat/lon results are probably as good as the other two.
3. It's still reliable, but Garmin's policies are making it hard to use.

###Failure to Launch
##Canon PowerShot S100
Reasons for decision:

1. I'll keep working on this.
2. It would be good to know if it can log reliable GPS data.
3. I think I should install the latest version of CHDK -- GPS functionality has improved since my version.

[![16_17.JPG](https://publiclab.org/system/images/photos/000/019/876/large/16_17.JPG)](https://publiclab.org/system/images/photos/000/019/876/original/16_17.JPG)  
_Figure 13\. The red and yellow tracks are from the first day of skiing. I broke trail along a section that I bypassed on the second day. It is good to see that the location data are in agreement on different days. You can't even distinguish all five tracks for parts of the route because they overlay each other. Which is the result we want._