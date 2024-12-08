---
title: Who will win in a world of...LASER DEPTHS?
tagnames: arduino, water-sensing, laser, sensors, battery, data-logging, mini-pearl-logger, activity:mini-pearl-logger, series:springhouse-water-level, low-power-logging, log-a-long-timer, range-finder, vl53lox
author: cfastie
path: /notes/cfastie/09-22-2018/who-will-win-in-a-world-of-laser-depths.md
nid: 17155
uid: 554

---

# Who will win in a world of...LASER DEPTHS?

by [cfastie](../profile/cfastie) September 22, 2018 04:08

September 22, 2018 04:08 | Tags: [arduino](../tag/arduino), [water-sensing](../tag/water-sensing), [laser](../tag/laser), [sensors](../tag/sensors), [battery](../tag/battery), [data-logging](../tag/data-logging), [mini-pearl-logger](../tag/mini-pearl-logger), [activity:mini-pearl-logger](../tag/activity:mini-pearl-logger), [series:springhouse-water-level](../tag/series:springhouse-water-level), [low-power-logging](../tag/low-power-logging), [log-a-long-timer](../tag/log-a-long-timer), [range-finder](../tag/range-finder), [vl53lox](../tag/vl53lox)

Last spring I [installed a water level data logger](https://publiclab.org/notes/cfastie/03-10-2018/installing-the-water-level-monitor) in my spring house. The water level was measured using a float connected to a tilting arm and an accelerometer to measure the tilt angle. A [Mini Pearl Logger](https://publiclab.org/wiki/mini-pearl-logger) computed the water depth and logged the result every five minutes.

![image description](/i/26643.jpg "IMG_20180722_134437023_(1).jpg")  
_Above: There have been three Mini Pearl Loggers in the spring house for most of the summer. They have been logging (left to right) total dissolved solids, water depth via tilting arm, and water depth via laser range-finder._

I noticed that a laser range-finder on a little PCB cost as little as $6.00 on eBay, so I bought a few. The range of these little units is about one meter, so their utility is limited, but it was exactly what I needed for the spring house. The video below is my proof of concept (the concept being that a $6.00 laser toy could measure something).
<iframe width="560" height="315" src="https://www.youtube.com/embed/Kt_MSMpxy7Y" frameborder="0" allowfullscreen=""></iframe>
*Above: The prototype in the video uses an Adafruit Feather, but the logger I installed in the spring house used a Mini Pearl Logger.*

[![MiniLox_20180531-3037.JPG](/i/26644)](/i/26644)  
_Above: This is the $5.33 VL53LOX PCB. An integrated circuit (near the screw head) generates the laser pulse and senses the reflection of the pulse. I assume distance is determined by measuring the time it takes the near infrared light to travel back and forth. That means this thing is measuring the speed of light. We are alive at the right time._

[![MiniLox_20180531-3044.JPG](/i/26645)](/i/26645)  
_Above: A Mini Pearl Logger connected to the laser range-finder (right). The range-finder PCB is mounted on a piece of plastic._

[![lox_20180713-3134.JPG](/i/26646)](/i/26646)  
_Above: The laser range-finder on it's plastic mount in place in the spring house. The laser-generating IC on the PCB is pointed down at the surface of the water which is about 70 cm below. The Mini Pearl Logger knows how high the sensor is above the bottom of the spring house and computes the water depth. Measurements are saved to microSD card every five minutes._

![image description](/i/26663.png "noisyLox.PNG")   
_Above: The first trial of the laser range-finder in the spring house revealed a flaw. The surface of the water is not a stable enough surface to produce reliable reflections. Actual water depth varied between 80 cm and 120 cm during this two week period, and all of the readings below about 80 cm are noise. A modification was required._

[![lox_20180713-3131.JPG](/i/26648)](/i/26648)  
_Above: The white styrofoam raft floats in the spring house under the laser range-finder. A taught length of fishing line runs vertically through a hole in the corner of the styrofoam to keep it in place. This eliminated the erroneous readings._

[![Tilt_Lox.PNG](/i/26649)](/i/26649)  
_Above: Two records of spring house water depth logged by Mini Pearl Loggers for the same 16 days in August. Depth from tilt angle (accelerometer) is at top and depth from laser range-finder is below. The absolute water depths differ between the two records because the loggers have only approximate values for the distance to the bottom of the springhouse (I never bothered to enter the correct numbers). The high frequency variation caused by household water use and rainfall events is captured similarly by both devices. There is a low frequency variation in the tilt angle data that is exaggerated in the laser range-finder data (see fitted curves). I assume the cause of the low frequency variation is non-linearity in one or both of the systems (probably the tilt arm thing)._

[![7weeks.PNG](/i/26650)](/i/26650)  
_Above: Seven weeks of spring house water-depth data from the laser range-finder. Major rainfall events are indicated by icons. Downward spikes are household water use events. Weeks four and five differ from earlier and later weeks because nobody was living in the house then. Those two weeks are expanded in the next figure._

[![AkTrip.PNG](/i/26651)](/i/26651)  
_Above: Two weeks of water depth data from the laser range-finder. The house was not occupied during these weeks and no water was drawn out of the spring house except on day 10 when a neighbor used my hose to water my patio plants and save them from certain death by drought. Rainfall events (icons) were meager during this period._

The surprising result of the final figure above is the diurnal pattern of water depth when no water was withdrawn from the spring house and rainfall was minimal. Water level typically rises about 5 mm each night and drops a similar amount during daylight hours. This is most likely caused by the trees in the watershed uphill from the spring house (see lead image above). Sunlight powers the rise of water up the trunks by driving evapotranspiration from the leaves. This draws soil water into the roots to compensate for the loss through leaf stomata. This water movement stops at night when there is no sunlight to power it and no sunlight to power photosynthesis. When photosynthesis is not happening leaves do not need CO2 so stomata can be closed and no water is lost. At night water is not drawn into roots and the soil water or shallow groundwater can be recharged.

I am pleased with the success of both water depth devices. Both capture the patterns I was hoping to learn about, and were sensitive and precise enough to detect the subtle groundwater dynamics driven by tree evapotranspiration. The laser range-finder does not require construction of a tilting arm contraption so is the preferred approach.

I am less pleased to learn that every rainfall event is recorded by a water depth increase indicating that my water supply includes very young groundwater. Some of the water entering the spring house apparently travels underground very quickly and maybe for only several meters before becoming my drinking water.

I am very pleased with the operation of the Mini Pearl Loggers. They are being controlled by TPL5110 timers which power up the loggers only long enough to read sensors and save the data. I have lost count of how long the loggers have been running, but the same four AA batteries have powered them for at least three months.

Kits to build Mini Pearl Loggers are available at the [KAPtery](http://kaptery.com/product/mini-pearl-logger-kit) and the [Public Lab Store](https://store.publiclab.org/collections/water-monitoring/products/mini-pearl-pro-logger-kit?variant=12516481400941).

There are lots of research notes about [using Mini Pearl Loggers](https://publiclab.org/tag/mini-pearl-logger).

Here is the [sketch running on the Arduino Pro Mini](/i/26654.txt).