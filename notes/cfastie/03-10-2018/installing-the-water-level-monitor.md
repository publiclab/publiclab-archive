---
title: "Installing the water-level monitor"

tagnames: 'arduino, sensors, datalogger, data-logging, water-level, bme280, ds18b20, mini-pearl-logger, activity:mini-pearl-logger, mma8451, series:springhouse-water-level, log-a-long-timer, activity:log-a-long-timer'
author: cfastie
path: /notes/cfastie/03-10-2018/installing-the-water-level-monitor.md
nid: 15911
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/023/947/original/spouts2.gif)

# Installing the water-level monitor

by [cfastie](../../../profile/cfastie) | March 10, 2018 01:07

March 10, 2018 01:07 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [datalogger](../tag/datalogger), [data-logging](../tag/data-logging), [water-level](../tag/water-level), [bme280](../tag/bme280), [ds18b20](../tag/ds18b20), [mini-pearl-logger](../tag/mini-pearl-logger), [activity:mini-pearl-logger](../tag/activity:mini-pearl-logger), [mma8451](../tag/mma8451), [series:springhouse-water-level](../tag/series:springhouse-water-level), [log-a-long-timer](../tag/log-a-long-timer), [activity:log-a-long-timer](../tag/activity:log-a-long-timer)

----

I did not think it would take this long to get the [water-level monitor](https://publiclab.org/tag/series:springhouse-water-level) installed. I [figured out the trigonometry part](https://publiclab.org/notes/cfastie/12-29-2017/will-trigonometry-help-an-arduino-measure-water-depth) last year and started building the contraption to put into the spring house. Part of the delay was due to a cold spell in January which left a three inch layer of ice in the spring house, and then I got distracted for a while.

![image description](https://publiclab.org/system/images/photos/000/023/935/medium/Springhouse_17o22_2k.jpg "Springhouse_17o22_2k.jpg")  
_Figure 1\. On January 6, 2018 there was a solid layer of ice on top of the water in the spring house. This was not compatible with my idea to measure water depth with a tilting arm floating on the water surface. A week later a warm rain storm eliminated the ice and raised the water level to the two overflow pipes in the wall to the left (see lead image)._

![image description](https://publiclab.org/system/images/photos/000/023/936/medium/spring_20180305-2752.JPG "spring_20180305-2752.JPG")  
_Figure 2\. The completed contraption ready for installation. The tilt of the arm depends on the height of the white packing material which will float on the water surface._

![image description](https://publiclab.org/system/images/photos/000/023/937/medium/spring_20180305-2739.JPG "spring_20180305-2739.JPG")  
_Figure 3\. The blue box houses an accelerometer which senses the angle of the tilting arm. A [Mini Pearl Logger](http://kaptery.com/product/mini-pearl-logger-kit) is in the peanut butter jar._

![image description](https://publiclab.org/system/images/photos/000/023/938/medium/spring_20180305-2732.JPG "spring_20180305-2732.JPG")  
_Figure 4\. The accelerometer is solidly attached inside the blue box, but the box can be easily detached from the tilting arm so the electronics can be removed separately from the mechanical contraption. Both the upper and lower hinges are tubes which rotate around fixed dowels._

![image description](https://publiclab.org/system/images/photos/000/023/939/medium/spring_20180305-2748.JPG "spring_20180305-2748.JPG")  
_Figure 5\. The float is an intact piece of packing material from the shipment of some appliance. The black tube is glued where it passes through the wooden arm and rotates freely around the wooden dowel._

![image description](https://publiclab.org/system/images/photos/000/023/940/medium/spring_20180306-2783.JPG "spring_20180306-2783.JPG")  
_Figure 6\. The whole thing installed in the spring house._

![image description](https://publiclab.org/system/images/photos/000/023/941/medium/spring_20180306-2790.JPG "spring_20180306-2790.JPG")  
_Figure 7\. Phone cables have four wires so are perfect for I2C sensors. Two I2C sensors (the accelerometer and a BME280) send their data back to the Mini Pearl Logger via phone cable. The black cable connects to a DS18B20 temperature sensor in the water._

![image description](https://publiclab.org/system/images/photos/000/023/942/medium/spring_20180306-2789.JPG "spring_20180306-2789.JPG")  
_Figure 8\. The lid of the peanut butter jar has two [Hull Penetrators](http://kaptery.com/product/hull-penetrator) made from brass lamp parts which pass all three data cables. Some silicone sealant at the top of the brass tubes seals them, but I did not pot the entire tube because this is not intended for submersion. The Mini Pearl Logger has a [Log-a-Long Timer](http://kaptery.com/product/logalong-timer-kit) set to turn on the logger every five minutes so it can collect data and save it to the microSD card. Data saved include air and water temperature, humidity, barometric pressure, tilt angle of the arm, and water level (height above the spring house bottom). The Arduino computes water level from constants (arm length, height of the upper hinge above the spring house bottom, height of the lower hinge above the water) and the variable tilt angle of the arm._

![image description](https://publiclab.org/system/images/photos/000/023/943/medium/spring_20180306-2756.JPG "spring_20180306-2756.JPG")  
_Figure 9\. The DS18B20 sensor is intended for submersion, but the waterproofing seems to be just one piece of heat shrink tubing (bottom). So I added a second piece of heat shrink tubing and some silicone sealant at the ends of the tubing (top)._

![image description](https://publiclab.org/system/images/photos/000/023/944/medium/spring_20180306-2762.JPG "spring_20180306-2762.JPG")  
_Figure 10\. A BME280 sensor for temperature, humidity, and barometric pressure is suspended near the roof of the spring house. It is under cover but otherwise completely exposed to the air. Every electrical connection in the water-level monitor is soldered to avoid corrosion issues in the damp environment._

![image description](https://publiclab.org/system/images/photos/000/023/946/medium/IMG_20180208_132522958_2k.jpg "IMG_20180208_132522958_2k.jpg")  
_Figure 11\. The spring house was not overflowing through the pipes (left) for a short period in early February. The water flow was high and the level was just a few inches below the overflow pipes. Other than this period, water has been flowing through the overflow pipes most of the time since mid January._

There should be a couple of days worth of data on the microSD card by now, but it will be rather boring because the water flow has been high enough that the level is determined by the overflow pipes. That might be the case for a while, but eventually I will report on how everything is working.

[Here is the sketch running on the Arduino Pro Mini](https://publiclab.org/system/images/photos/000/023/945/original/Mini_spring.txt "Mini_spring.txt")