---
title: "DFRobot TDS sensor first look"

tagnames: 'arduino, water-quality-monitoring, sensors, water-quality, data-logging, water-level, ds18b20, mini-pearl-logger, activity:mini-pearl-logger, series:springhouse-water-level, total-dissolved-solids'
author: cfastie
path: /notes/cfastie/07-19-2018/dfrobot-tds-sensor-first-look.md
nid: 16752
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/025/777/original/TDS_20180711-3087.JPG)

# DFRobot TDS sensor first look

by [cfastie](../../../profile/cfastie) | July 19, 2018 15:05

July 19, 2018 15:05 | Tags: [arduino](../tag/arduino), [water-quality-monitoring](../tag/water-quality-monitoring), [sensors](../tag/sensors), [water-quality](../tag/water-quality), [data-logging](../tag/data-logging), [water-level](../tag/water-level), [ds18b20](../tag/ds18b20), [mini-pearl-logger](../tag/mini-pearl-logger), [activity:mini-pearl-logger](../tag/activity:mini-pearl-logger), [series:springhouse-water-level](../tag/series:springhouse-water-level), [total-dissolved-solids](../tag/total-dissolved-solids)

----

A few people at Public Lab have expressed interest in the [DFRobot TDS sensor](https://www.dfrobot.com/product-1662.html) for Arduino data loggers. This sensor measures the electrical conductivity of water and the analog result can be converted to an estimate of total dissolved solids (TDS). TDS is a common measure of how much material is dissolved or suspended in the water and can be used as an index of water clarity or contamination. The sensor includes a waterproof probe and a circuit board (see main image above). One of the things the circuit board does is produce an alternating current to send to the two electrodes on the probe. This prevents the polarization that happens with direct current which can compromise conductivity readings and corrode the electrodes.

[![TDS_20180711-3079.JPG](/i/25778)](/i/25778)  
_Figure 1\. A [Mini Pearl Logger][1] (on red plate) prepared with an enclosure (peanut butter jar) and two sensors. A DFRobot TDS sensor and DS18B20 temperature sensor (left) are connected to the logger._

An outstanding feature of this product is that it costs only $12.90\. This is a bargain compared to other conductivity sensors including [DFRobot's conductivity sensor](https://www.dfrobot.com/product-1123.html) which costs $70.00\. This price disparity suggests that there is something insufficient about the TDS sensor compared to dedicated conductivity sensors, and I have no idea what this deficiency is. So some testing is required to learn if the inexpensive TDS sensor can provide meaningful results.

I have not done enough testing to know how useful the TDS sensor is, but I have some preliminary results and a warning about the Arduino sketch (program) which DFRobot provides. The Arduino sketch is fragile and appears to have an error.

[![TDS_20180711-3085.JPG](/i/25779)](/i/25779)  
_Figure 2\. Sensor cables were passed through holes in the jar lid and then sealed with silicone goop._

As is common with inexpensive environmental sensors, it helps to read the sensor multiple times in quick succession and use an average to account for noise inherent in the sensor. The DFRobot code uses an IF statement to make these multiple readings every 40 milliseconds. Then another IF statement determines if enough time has elapsed to have collected enough readings and if so computes the median which is used to get a final TDS result.

[![TDS_20180711-3098.JPG](/i/25780)](/i/25780)  
_Figure 3\. The data logger pod ready for deployment._

This approach requires good timing, and if the total elapsed time is not correct for the selected number of sensor readings, the final result can be computed before a complete new set of sensor readings is acquired. That is the fragile part.

[![TDS_20180711-3095.JPG](/i/25782)](/i/25782)  
_Figure 4\. Both the DS18B20 (top) and TDS sensor (bottom) are waterproof, but I added a layer of heat shrink tubing around each and used silicone goop to improve the seal._

The error in the sketch also relates to this timing issue. The number of sensor readings to be taken is a variable which can be changed by the user at the top of the sketch, but the total elapsed time for making the readings is just set to 800 milliseconds deep in the code. For an interval of 40 milliseconds, 20 sensor readings will take 800 milliseconds, but the variable for the number of sensor readings is set to 30\. So as written, the sketch computes a result before 30 new sensor readings have been made and includes older readings from the last cycle (which are blanks as the sketch starts). This seems easy to fix (change the 30 or the 800), although the approach assumes that the microcontroller will take exactly 40 milliseconds to make each sensor reading which I guess might be a safe assumption but I'm not sure.

[![TDS_20180711-3113.JPG](/i/25781)](/i/25781)  
_Figure 5\. The data logger pod deployed in the spring house. The cable on the DFRobot TDS sensor is only about 30 inches long, so the data logger had to be suspended so the sensor would be underwater._

Potential problems with the fragile timing-dependent approach are not critical when the goal is to display a result on the serial monitor. But my goal is to make multiple (e.g., 30) quick sensor readings, compute a single result, and save it to SD card. Those 30 readings should be completed sequentially and then used to compute the result. I am using a [Mini Pearl Logger](https://publiclab.org/wiki/mini-pearl-logger) controlled by a [low-power timer (TPL5110)](https://publiclab.org/tag/log-a-long-timer) which turns the logger on every 12 minutes and saves one result. The main loop in the Arduino sketch is run only once, so the code must do all its work in one pass. Therefore I had to modify the DFRobot sketch which assumed that the main loop would be run repeatedly.

[![July14graph.PNG](/i/25783)](/i/25783)  
_Figure 6\. Spring house water data for two days. Water level in the spring house was measured with a laser rangefinder and logged by a Mini Pearl Logger (top). Two periods of heavy water use are indicated. Another Mini Pearl Logger recorded TDS and water temperature (bottom) for the same two days. One period of lowered TDS followed sustained household water use which increased flow through the spring house. Note that the variation in TDS and temperature are numerically small._

Although computing the mean for multiple sensor readings is easy, the DFRobot sketch computes the median instead. They apparently found that the skew in the distribution of multiple values from this sensor makes the median a better measure of central tendency. Computing the median requires saving all the readings in an array, sorting the array, and finding the value in the middle. While trying to figure out what all this code was doing, I rewrote it to compute the mean instead of the median and to do it with a tidy FOR loop instead of the two timing-fragile IF statements. I don't know how my mean-based results differ from median-based results, but I suspect the difference might be irrelevant to my application of the sensor. So I will continue to use the mean instead of the median unless I learn that the median is much better. My sketch is a lot easier to understand and is designed to work with a logger that turns itself off after each single pass through the main loop.

[![July17graph.PNG](/i/25784)](/i/25784)  
_Figure 7\. Spring house water data for 30 hours. Water level in the spring house was measured with a laser rangefinder and logged by a Mini Pearl Logger (top). Three periods of heavy water use and one rainstorm are indicated. Another Mini Pearl Logger recorded TDS and water temperature (bottom) for the same 30 hours. During this period, increased water flow through the spring house was not associated with lowered TDS. Note that the variation in TDS and temperature are numerically small._

The [Mini Pearl Loggers](https://publiclab.org/wiki/mini-pearl-logger) used here will soon be available as kits in the [Public Lab Store](https://publiclab.myshopify.com/). Until then, kits to build this and other data loggers are available at the [KAPtery](http://kaptery.com/products/data-and-control).

Here is the sketch from DFRobot:
[ TDS.txt](/i/25787)

Here is the sketch I have been using:
[ MiniDS18TDS\_1.3.txt](/i/25786)

  [1]: https://publiclab.org/wiki/mini-pearl-logger