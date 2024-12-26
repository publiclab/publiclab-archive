---
title: "Low-power timer upgrade"\ntagnames: 'arduino, sensors, activity:data-logging, mini-pearl-logger, activity:data-logging-power, tpl5110, low-power-logging, log-a-long-timer, activity:log-a-long-timer'
author: cfastie
path: /notes/cfastie/03-01-2018/low-power-timer-upgrade.md
nid: 15841
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/023/767/original/miniPearl_20180225-2670-2ps.jpg)

# Low-power timer upgrade

by [cfastie](../profile/cfastie) | March 01, 2018 01:30

March 01, 2018 01:30 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [activity:data-logging](../tag/activity:data-logging), [mini-pearl-logger](../tag/mini-pearl-logger), [activity:data-logging-power](../tag/activity:data-logging-power), [tpl5110](../tag/tpl5110), [low-power-logging](../tag/low-power-logging), [log-a-long-timer](../tag/log-a-long-timer), [activity:log-a-long-timer](../tag/activity:log-a-long-timer)

----

The [Log-a-Long Timer](https://publiclab.org/tag/log-a-long-timer) is a home-made circuit for controlling data loggers and other electronics which can be powered down between discrete events. Data loggers can last a long time on small batteries if they use power only when they are reading sensors and saving data to an SD card. Arduino-based data loggers work well with this type of timer because they start running their program (sketch) as soon as they are turned on, and can tolerate having the power cut abruptly.

The Log-a-Long Timer uses a TPL5110 low power timer IC which is designed to consume very little power when the only thing it is doing is waiting until it is time to turn on another device. The TPL5110 works with a p-mosfet which is a switch which can be controlled electronically. The TPL5110, the mosfet, and a single resistor are the only components needed to build the timer. I have built a new version of the timer with all surface-mount components and a new PCB which is better suited to this circuit.

[![logalong_20180228-2705ps.JPG](https://publiclab.org/system/images/photos/000/023/768/medium/logalong_20180228-2705ps.JPG)](https://publiclab.org/system/images/photos/000/023/768/original/logalong_20180228-2705ps.JPG)  
_Figure 1\. The parts included in the Log-a-Long Timer Kit. Five surface mount resistors are included (bottom). Each one produces a different timer interval so you select your interval and include that resistor in the circuit. [Update 5/30/18 Eight surface mount resistors are now included in the kit for eight different intervals.]_

The new PCB is a SOIC8 to DIP8 adapter like the one in the previous build but is designed differently. The two sides allow different sized ICs to be used. More importantly, the solder pads are oriented differently in relation to the pin holes at the edge. This allows the Log-a-Long Timer to be built without any jumper wires. [The last build on the Sparkfun PCB](https://publiclab.org/notes/cfastie/01-26-2018/how-to-make-a-low-power-timer) required two jumpers.

[![miniPearl_20180218-2616.JPG](https://publiclab.org/system/images/photos/000/023/769/medium/miniPearl_20180218-2616.JPG)](https://publiclab.org/system/images/photos/000/023/769/original/miniPearl_20180218-2616.JPG)  
_Figure 2\. Both sides of the PCB. I built the circuit on the side with larger solder pads (right)._

By chance, the juxtaposition of the solder pads and pin holes makes it really easy to build this circuit by just soldering three components directly to the PCB. Five wires must also connect the timer to a power source and an Arduino. It makes a very compact, simple, and sturdy build.

[![miniPearl_20180224-2659ps.jpg](https://publiclab.org/system/images/photos/000/023/770/medium/miniPearl_20180224-2659ps.jpg)](https://publiclab.org/system/images/photos/000/023/770/original/miniPearl_20180224-2659ps.jpg)  
_Figure 3\. A completed Log-a-Long Timer. The surface-mount components are small, but it is easy to solder them on with a normal soldering iron. The 43KΩ resistor ("4302") produces a timing interval of five minutes. This build did not use header pins because the five wires are soldered directly to the holes._

It's not really true that no jumper wires are required in this build. Two connections must be made to the Enable leg of the TPL5110, and the existing PCB traces can't do both. But the solder pad for the Enable leg is adjacent to the pin hole it must be connected to, so a big solder blob is all that's needed. Good fortune makes this a very tidy build.

[![TPLDIYgreen2.jpg](https://publiclab.org/system/images/photos/000/023/771/medium/TPLDIYgreen2.jpg)](https://publiclab.org/system/images/photos/000/023/771/original/TPLDIYgreen2.jpg)  
_Figure 4\. Build diagram for the new Log-a-Long Timer Kit. The new PCB allows all the connections between the TPL5110 (purple text), the p-mosfet (green text), and the
resistor to be made with the existing copper traces and one solder blob._

These timers work really well with the [Mini Pearl Loggers](https://publiclab.org/wiki/mini-pearl-logger) which are based on a 3.3 volt Arduino Pro Mini. They don't work with 5 volt Arduinos which really like to get about 6 volts. The TPL5110 timer IC can't tolerate more than 5.5 volts.

[Kits to build your own Log-a-Long Timer](http://kaptery.com/product/logalong-timer-kit) with all the new components are available at the KAPtery for $7.00 including US shipping. Step-by-step instructions to build the kit are available at the [KAPtery Guides page](http://kaptery.com/guides/). A [parts list is on the wiki page](https://publiclab.org/wiki/log-a-long-timer).