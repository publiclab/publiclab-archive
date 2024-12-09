---
title: Soaring Riffle
tagnames: arduino, vermont, temperature, kap, photo-rig, gps, sensors, water-quality, riffle, pressure, barnstar:photo-documentation, humidity, saturnv, skyshield, half-spherical, noise, response:13149, barometric, category:field-test, activity:riffle, riffle-examples, s100-gps
author: cfastie
path: /notes/cfastie/06-02-2016/soaring-riffle.md
nid: 13158
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/016/445/original/BreadFail_20160531-5836.jpg)

# Soaring Riffle

by [cfastie](../profile/cfastie) June 02, 2016 15:14

June 02, 2016 15:14 | Tags: [arduino](../tag/arduino), [vermont](../tag/vermont), [temperature](../tag/temperature), [kap](../tag/kap), [photo-rig](../tag/photo-rig), [gps](../tag/gps), [sensors](../tag/sensors), [water-quality](../tag/water-quality), [riffle](../tag/riffle), [pressure](../tag/pressure), [barnstar:photo-documentation](../tag/barnstar:photo-documentation), [humidity](../tag/humidity), [saturnv](../tag/saturnv), [skyshield](../tag/skyshield), [half-spherical](../tag/half-spherical), [noise](../tag/noise), [response:13149](../tag/response:13149), [barometric](../tag/barometric), [category:field-test](../tag/category:field-test), [activity:riffle](../tag/activity:riffle), [riffle-examples](../tag/riffle-examples), [s100-gps](../tag/s100-gps)

----

*Above: Is a flying Riffle a Fliffle?*

It might look like somebody strapped things on to a KAP rig in a haphazard fashion (Figure 1), but if you held that Saturn V Rig by one finger at the base of the Picavet shaft, the entire rig would balance perfectly upright. Nonetheless I had to fly it three times to get much out of it. The first time was a disappointment because when I flipped the power switch for the SkyShield autoKAP controller during the hectic launch a Velcro strap pushed the Riffle power switch to the GEN position. So the Fled kite lofted the Riffle on its maiden one-hour flight with 1000 feet of line out but the Riffle was turned off. 

[![Bread-5860.jpg](//i.publiclab.org/system/images/photos/000/016/446/medium/Bread-5860.jpg)](//i.publiclab.org/system/images/photos/000/016/446/original/Bread-5860.jpg)  
*Figure 1. A Riffle and its battery strapped to a [Saturn V Rig](http://kaptery.com/product/saturn-v-rig) to go where no Riffle has gone before.*

The next day a second flight under a [PFK Nighthawk](https://publiclab.org/notes/cfastie/10-12-2015/pfk-nighthawk-debut-at-leaffest) kite lasted five minutes because there was not as much wind as I thought there was. I switched to a Levitation Delta kite and let out 1000 feet of line over the Breadloaf Campus in Ripton, VT (Figure 2). The Riffle was logging data from two sensors about every five seconds and the PowerShot S100 was taking photos with GPS data about every four seconds. 

[![BreadFail_20160531-5842.jpg](//i.publiclab.org/system/images/photos/000/016/447/medium/BreadFail_20160531-5842.jpg)](//i.publiclab.org/system/images/photos/000/016/447/original/BreadFail_20160531-5842.jpg)  
*Figure 2. The Riffle-laden Saturn V Rig follows the Levitation Delta skyward.*

I did not change the three eneloop batteries powering the SkyShield after the first flight because [tests with the switching regulator]( https://publiclab.org/notes/cfastie/04-13-2016/tiny-boost) suggested that the servos would be happy for more than four hours of operation. They were not happy after about ten minutes into the flight, so only a few complete cycles of 25 photos covering the half sphere were captured. The camera continued to shoot every four seconds and thereby record GPS data in each of the photos, which were otherwise useless pictures of blue sky.

[![Bread-6068_14o14_2k.jpg](//i.publiclab.org/system/images/photos/000/016/448/medium/Bread-6068_14o14_2k.jpg)](//i.publiclab.org/system/images/photos/000/016/448/original/Bread-6068_14o14_2k.jpg)  
*Figure 3. Very few of the 720 photos taken were of much photographic value, but 14 of them were stitched into this panorama.*

The sensors sending data to the Riffle were a DHT22 humidity and temperature sensor and a BMP180 barometric pressure and temperature sensor. These each cost $3.00 on ebay (including shipping from China). To get the GPS data out of the photos and into Excel, I used [ExifTool as described here](http://kaptery.com/article/kap-gps/), and then deleted every ninth GPS entry so I had 642 entries each of GPS data and sensor data with timestamps which matched up with varying precision. The GPS data include altitude as well as latitude and longitude.

[![Alt_Tem.JPG](//i.publiclab.org/system/images/photos/000/016/449/medium/Alt_Tem.JPG)](//i.publiclab.org/system/images/photos/000/016/449/original/Alt_Tem.JPG)  
*Figure 4. Altitude of the camera from its GPS during the 50 minute flight and the temperature data from the DHT22 sensor.*

The GPS data suggest that at the camera’s apogee it was 185 m (620 feet) higher than its launch point (Figures 4 and 5). The DHT22 sensor data suggests that it was 5°C (9°F) cooler (Figure 4) and a few percent more humid up there (Figure 5). The temperature decline with altitude is similar to that predicted by the adiabatic lapse rate, except for the part of the flight within about 40 m (130 feet) of the ground (Figure 6).

[![Alt_Hum.JPG](//i.publiclab.org/system/images/photos/000/016/450/medium/Alt_Hum.JPG)](//i.publiclab.org/system/images/photos/000/016/450/original/Alt_Hum.JPG)  
*Figure 5. Altitude from the camera GPS and humidity from the DHT22 sensor.*


[![AltvsTemp.JPG](//i.publiclab.org/system/images/photos/000/016/461/medium/AltvsTemp.JPG)](//i.publiclab.org/system/images/photos/000/016/461/original/AltvsTemp.JPG)  
*Figure 6. The relationship between altitude (from the camera GPS) and temperature from the DHT22 sensor.*

The BMP180 data are not as tidy as the DHT22 data and have lots of apparently erroneous low readings for both pressure and temperature. Comparing the temperatures from the BMP180 and DHT22 sensors (Figure 7) suggests that the erroneous readings are all low, and that only the highest readings from the BMP180 should be considered. 

[![Alltemp.JPG](//i.publiclab.org/system/images/photos/000/016/452/medium/Alltemp.JPG)](//i.publiclab.org/system/images/photos/000/016/452/original/Alltemp.JPG)  
*Figure 7. Temperature data from three sensors. The real time clock (RTC) on the Riffle was reading higher than the two external sensors. The DHT22 sensor tracked the maximum readings of the very noisy BMP180 sensor.*

The BMP180 pressure data suggest that the pressure change during the flight (Figure 8) was about 20 millibars (0.6 inches of mercury), but it’s hard to know whether the running max is a reliable way to interpret the data. 

[![BMPpressureMax.JPG](//i.publiclab.org/system/images/photos/000/016/453/medium/BMPpressureMax.JPG)](//i.publiclab.org/system/images/photos/000/016/453/original/BMPpressureMax.JPG)  
*Figure 8. Atmospheric pressure data from the BMP180 sensor (points) and the six point running maximum values (line).*

A six-point running maximum pressure crudely converted to altitude resembles the altitude from the camera’s GPS sensor (Figure 9), but was not corrected for current conditions. The GPS altitude trace seems to lag the pressure altitude trace by about 1.5 minutes early on and then track better later. [UPDATE: I manually matched time stamps between the camera GPS data and Riffle sensor data and improved the temporal alignment. Figure 9 now displays very good synchrony between GPS altitude and altitude computed from barometric pressure.]

[![AltitudeCompShift.JPG](//i.publiclab.org/system/images/photos/000/016/460/medium/AltitudeCompShift.JPG)](//i.publiclab.org/system/images/photos/000/016/460/original/AltitudeCompShift.JPG)    
*Figure 9. Altitude from the camera GPS compared to the running max of altitude computed from barometric pressure (and not corrected or calibrated) from the BMP180 sensor.*

The scattered, erroneous readings from the BMP180 sensor probably did not result from power fluctuations because the DHT22 was using the same power pins, but it could have been an intermittent connection somewhere. Or this noise could be a characteristic of the $3.00 sensor. More tests are called for.

<iframe width="640" height="360" src="https://www.youtube.com/embed/e29-ODBK09w?rel=0" frameborder="0" allowfullscreen></iframe>  
*The video above is an animation of the flight track of the KAP rig with temperature data displayed with colors.*

I used Google Earth to display the flight track of the payload with temperature data from the DHT22 sensor displayed as color along the track (video above). I have not yet figured out how to display more detail of the sensor data, so only one degree C increments are represented. I converted a csv file of GPS coordinates into a KML file, and made separate files (with different colored lines) for each part of the track where temperature was within one degree. If anyone knows how to use KML to display more detail please let me know.

[![Bread6171_24o25flat.jpg](//i.publiclab.org/system/images/photos/000/016/455/large/Bread6171_24o25flat.jpg)](//i.publiclab.org/system/images/photos/000/016/455/original/Bread6171_24o25flat.jpg)  
*Figure 10. Of the 720 photos taken there was one set of 24 photos that stitched into a half spherical panorama. This is the stereographic projection of that panorama.*



