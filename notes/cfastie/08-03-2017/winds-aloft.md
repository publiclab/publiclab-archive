---
title: 'Winds aloft'
tagnames: balloon-mapping, kite-mapping, arduino, kite-aerial-photography, kite, sensors, wind, saturnv, skyshield, half-spherical, skypod, nano-data-logger, bme280, ublox, response:14551, wind-sensor, rokkaku, series:diy-wind-sensors, skypod-gps-logger, activity:skypod-gps-logger, activity:as220-wind-sensors
author: cfastie
path: /notes/cfastie/08-03-2017/winds-aloft.md
nid: 14713
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/021/283/original/BreadWind_20170730-0322.JPG)

# Winds aloft

by [cfastie](../profile/cfastie) August 03, 2017 01:45

August 03, 2017 01:45 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [arduino](../tag/arduino), [kite-aerial-photography](../tag/kite-aerial-photography), [kite](../tag/kite), [sensors](../tag/sensors), [wind](../tag/wind), [saturnv](../tag/saturnv), [skyshield](../tag/skyshield), [half-spherical](../tag/half-spherical), [skypod](../tag/skypod), [nano-data-logger](../tag/nano-data-logger), [bme280](../tag/bme280), [ublox](../tag/ublox), [response:14551](../tag/response:14551), [wind-sensor](../tag/wind-sensor), [rokkaku](../tag/rokkaku), [series:diy-wind-sensors](../tag/series:diy-wind-sensors), [skypod-gps-logger](../tag/skypod-gps-logger), [activity:skypod-gps-logger](../tag/activity:skypod-gps-logger), [activity:as220-wind-sensors](../tag/activity:as220-wind-sensors)

----

_Above: This seven foot Rokkaku kite lifted a two pound camera rig with EOS M and SkyPod data logger._

When I report on a KAP session I try to include the wind speed, but I have never measured the speed. Instead I look at the local weather records and interpret how a particular kite flew (or didn't) and compare all that to previous KAP sessions and produce a scientific estimate (AKA wild guess). So I was intrigued when Jeff related that he had been gifted some digital wind sensors, I guess by Paul Badger, the guy who made them (Jeff hangs out with interesting folks). These sensors can be hooked up to an Arduino like lots of other little sensors and the data can be logged. Adding a wind sensor to the SkyPod GPS data logger on a KAP rig seemed to me like a really worthy project, and Jeff apparently agreed because two wind sensors arrived in the mail a week later.

![image description](https://publiclab.org/system/images/photos/000/021/270/medium/BreadWind_20170729-0248.JPG "BreadWind_20170729-0248.JPG")  
_The Modern Device Wind Sensor Rev. C (right) has been around for several years. The Wind Sensor Rev. P (left) is much newer and a smarter design. I put the Rev. P on the SkyPod on a Saturn V Rig and put the Rev. C on a tripod. These are very much awesome little PCBs._

These wind sensors are made by [Modern Device](https://moderndevice.com/) and are open hardware. They don't have any moving parts and measure wind speed using the hot wire technique:

1. Pass a current through a wire until it gets hot.
2. Measure the current and the temperature of the wire.
3. When cooler air blows across the wire it will cool down.
4. Adjust the current so the wire temperature stays constant.
5. The current required will be proportional to the wind speed and the air temperature.
6. So measure the air temperature too.

I think the newer [Rev. P sensor](https://moderndevice.com/product/wind-sensor-rev-p/) does a better job measuring air temperature and has a more precise heating element than the [Rev. C sensor](https://moderndevice.com/product/wind-sensor/). They are both sort of picky about the current which powers them and should probably be calibrated for different power supplies. The newer Rev. P sensor is especially picky and must have at least 8 volts (the site also says at least 10v, so I'm not sure), so you can't power it from an Arduino. I tried to power it directly from a 9v battery, but that failed, so I powered the Arduino Nano with a 9v battery and powered the sensor from VIN and GND on the Arduino. That seemed to work. I powered the Rev. C from the 5V pin on an Arduino Nano which was powered by four eneloop AA (4.8v) after it failed to work when the Nano was powered by six eneloop AA (7.2v). This was all very trial-and-error and confusing but I was able to get some preliminary data.

![image description](https://publiclab.org/system/images/photos/000/021/272/medium/BreadWind_20170730-0331.JPG "BreadWind_20170730-0331.JPG")  
_Above: The Wind Sensor Rev. P installed on a SkyPod GPS logger on a Saturn V Rig. The "hot wire" part is on the loop extending above the sensor. The SkyPod was saving GPS coordinates, barometric pressure, temperature, humidity, and wind speed every six seconds during the flight._

While I flew the Rev. P wind sensor, the Rev. C sensor was deployed on the ground as part of a base station logging wind speed, barometric pressure, temperature, and humidity. I used a [Nano Logger](http://kaptery.com/product/nano-logger-kit), which is based on a data logging shield for an Arduino Nano. This logger had a BME280 sensor and a little LCD monitor so I could tell if everything was working.

![image description](https://publiclab.org/system/images/photos/000/021/274/large/BreadWind_20170730-0256.JPG "BreadWind_20170730-0256.JPG")  
_Above: The base station with a wind speed sensor and BME280 sensor._

Unfortunately, the 4.8 volt battery pack was too weak to make the LCD easily visible outdoors in bright sunshine. So I didn't notice that the BME280 stopped sending data while I was arranging everything and I only got wind speed data from the base station. This logger uses Dupont wires instead of soldered connections, and one of the wires must have wiggled loose.

![image description](https://publiclab.org/system/images/photos/000/021/273/large/BreadWind_20170730-0263ps.jpg "BreadWind_20170730-0263ps.jpg")  
_Above: The base station with Rev. C wind sensor sat in the field while I flew the Rev. P wind sensor. Note how I carefully arranged the BME280 sensor so it was in the shade, a move which wiggled a connection with the result that no pressure, temperature, or humidity data were logged._

![image description](https://publiclab.org/system/images/photos/000/021/275/large/BreadWind_20170730-0308.JPG "BreadWind_20170730-0308.JPG")  
_Above: The new seven foot Rokkaku lifted the two pound rig well enough to pull out 900 feet of kite line. This was a great result because I think none of my other kites could have lifted that heavy rig in those winds._

![image description](https://publiclab.org/system/images/photos/000/021/276/medium/BreadWind_20170730-0301.JPG "BreadWind_20170730-0301.JPG")  
_Above: The [Saturn V Rig](http://kaptery.com/product/saturn-v-rig) carried three battery packs: for the camera, the [SkyShield autoKAP controller](http://kaptery.com/product/skyshield-autokap-controller), and the [SkyPod data logger](http://kaptery.com/product/skypod-kit). The Canon is an EOS M mirrorless camera with prime "pancake" lens._

![image description](https://publiclab.org/system/images/photos/000/021/277/large/ElevTraces.PNG "ElevTraces.PNG")![image description](https://publiclab.org/system/images/photos/000/021/278/large/BMETempTrace.PNG "BMETempTrace.PNG")  
_Above: A. Elevation above sea level of the camera rig during the entire flight. From the GPS and from barometric pressure. The sketch running on the SkyPod Nano computed elevation from pressure based on the current sea level barometric pressure which I entered before the flight, so I can't explain the 15-20m difference between the two results. The kite was pulled in 30 minutes into the flight to check on the camera, and then the rig was lofted again for a second excursion. B. Air temperature during the flight from the BME280 sensor on the rig. I don't quite understand why temperature begins to drop before the rig gains altitude at the start of the flight._

![image description](https://publiclab.org/system/images/photos/000/021/279/large/LoftWindSpeed.PNG "LoftWindSpeed.PNG")  
_Above: Wind speed from the Rev. P sensor on the camera rig. The range of values recorded is reasonable, and the data show lower wind speed near the ground at the beginning, middle, and end of the flight, as expected. But there is more variability than I would have expected. There are a lot of possible causes of this variability:_

1. _The wind speed actually varied some._
2. _When the wind speed varied, the kite and the rig climbed or fell through the air which rushed past the sensor._
3. _The Saturn V Rig was making 360° panning rotations every 20 seconds which changed the orientation of the wind sensor to the wind and also periodically put the sensor in the lee of the rig._
4. _I was walking the kite around sometimes which changes the effective wind speed at the rig._
5. _There were other things connected to this circuit (GPS, BME280 sensor, uSD card)._
6. _I don't really understand how to calibrate this sensor._

![image description](https://publiclab.org/system/images/photos/000/021/280/large/BaseWindSpeed.PNG "BaseWindSpeed.PNG")  
_Above: Wind speed from the base station logger with Rev. C wind sensor. These wind speeds are not reasonable results. The wind speeds near the ground were probably between 3 and 8 mph. The regular excursions to values between 20 and 40 mph suggest that the calibration was not done very well._

![image description](https://publiclab.org/system/images/photos/000/021/281/large/Adiabatic.PNG "Adiabatic.PNG")  
_Above: Scatter plots of the relationship between elevation and air temperature during the two parts of the kite flight. The blue line is the dry adiabatic lapse rate, an approximation of the expected relationship. The first half of the flight (upper) roughly follows the expected rate of cooling during ascent and then warming during the descent. During the second ascent (lower) the sensor cooled more slowly than the lapse rate would predict. That could be due to a lag in the sensor equilibrating with the cooling air temperature, which is likely considering that the second ascent was very fast (see earlier figure)._

<iframe width="853" height="480" src="https://www.youtube.com/embed/8ag_Ie5LQi4" frameborder="0" allowfullscreen></iframe>  
_Above: A 15 second animation of the path of the camera rig during the first (green) and second (yellow) parts of the KAP flight. This uses the GPS coordinates for latitude, longitude, and altitude collected every five seconds during the flight by the SkyPod logger._

![image description](https://publiclab.org/system/images/photos/000/021/282/large/Wind_531_33o39sph2k.jpg "Wind_531_33o39sph2k.jpg")  
_Above: Stereographic projection of a spherical panorama stitched from 33 photos taken during a two minute pan/tilt sequence of the Saturn V Rig. During the one hour flight, 907 photos were taken by the EOS M. These are my favorite 33\._

So the Modern Device wind sensors were a little harder to figure out than your average Adafruit sensor. I probably have to spend a lot more time calibrating them and probably trying different ways to power everything. Paul Badger posted some [results of calibration trials for the Rev. P sensor](https://moderndevice.com/uncategorized/calibrating-rev-p-wind-sensor-new-regression/?preview=true) last month, but I couldn't quite figure out how to implement his new knowledge. Even so, the Rev. P's first trial by flight was fairly promising. I'm glad I got a chance to try it.

[Sketch running on the SkyPod](https://publiclab.org/system/images/photos/000/021/288/original/SkyPod_BME_WindP2.txt)

[Sketch running on the base station Nano Logger](https://publiclab.org/system/images/photos/000/021/287/original/DeekWindLCD_BME.txt)

[Sketch running on the SkyShield](https://publiclab.org/system/images/photos/000/021/289/original/SkySweepEOS_01_5_.txt)