---
title: "A DIY low power timer"

tagnames: 'arduino, timer, barnstar:photo-documentation, data-logging, mini-pearl-logger, tpl5110, low-power-logging, log-a-long-timer, activity:log-a-long-timer'
author: cfastie
path: /notes/cfastie/01-24-2018/a-diy-low-power-timer.md
nid: 15604
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/023/334/original/TPL_20180124-2559.JPG)

# A DIY low power timer

by [cfastie](../../../profile/cfastie) | January 24, 2018 22:41

January 24, 2018 22:41 | Tags: [arduino](../tag/arduino), [timer](../tag/timer), [barnstar:photo-documentation](../tag/barnstar:photo-documentation), [data-logging](../tag/data-logging), [mini-pearl-logger](../tag/mini-pearl-logger), [tpl5110](../tag/tpl5110), [low-power-logging](../tag/low-power-logging), [log-a-long-timer](../tag/log-a-long-timer), [activity:log-a-long-timer](../tag/activity:log-a-long-timer)

----

[UPDATE (III/1/18): I found an easier way to build this timer. see: https://publiclab.org/notes/cfastie/03-01-2018/low-power-timer-upgrade]

[Adding a low power timer to a data logger](https://publiclab.org/notes/cfastie/01-23-2018/new-data-loggers-for-long-term-logging) has great promise as an easy way to extend the time the logger can operate on small batteries. [Rough calculations](https://publiclab.org/notes/cfastie/12-21-2017/log-all-the-data-with-adafruit-s-tpl5110-low-power-timer) suggest that a few AA batteries can power an Arduino-based logger for a year or more when a TLP5110 timer controls the current flowing to the logger.

[![TPL_20180116-2493-2.JPG](https://publiclab.org/system/images/photos/000/023/327/medium/TPL_20180116-2493-2.JPG)](https://publiclab.org/system/images/photos/000/023/327/original/TPL_20180116-2493-2.JPG)  
_Figure 1\. A p-channel mosfet (left) and TPL5110 timer (right). These are the two key components of a timer device that can allow an Arduino-based data logger to operate for many months on small batteries. Ruler hatch marks are 1 mm._

The [Adafruit Low Power Logger](https://www.adafruit.com/product/3435) costs $4.95 (plus shipping) which adds a substantial proportion to the cost of a DIY Arduino-based data logger. So I investigated making my own timer using the same components. The only components needed are the [TPL5110 timer IC](https://www.digikey.com/product-detail/en/texas-instruments/TPL5110DDCT/296-38830-1-ND/5130150), a [mosfet](https://www.digikey.com/product-detail/en/diodes-incorporated/DMG3415U-7/DMG3415UDICT-ND/2052799), and a resistor. Not including shipping, these cost $1.25 per set if you buy 10 of each. So I did.

[![TPL_20180115-2464.JPG](https://publiclab.org/system/images/photos/000/023/328/medium/TPL_20180115-2464.JPG)](https://publiclab.org/system/images/photos/000/023/328/original/TPL_20180115-2464.JPG)  
_Figure 2\. A SOIC8 to DIP8 adapter (obverse and reverse). These tiny PCBs are intended to allow a surface-mount eight-legged integrated-circuit to be soldered on so it can be used in a circuit on a breadboard. I didn't have an eight-legged IC and didn't want to use it on a breadboard, but otherwise it was the perfect thing (and I had a bunch of them)._

Ideally, these components would be soldered to a custom PCB, but that costs a little too much to have manufactured, and I don't have the setup to make my own PCBs. Fortunately, the swag bag from last year's Open Hardware Summit included several SOIC8 to DIP8 adapters which are almost exactly what you need for this project. I didn't attend OHS, but I ended up with some of the swag which saved me a dollar or two per timer.

[![TPL_20180115-2463-2.JPG](https://publiclab.org/system/images/photos/000/023/329/medium/TPL_20180115-2463-2.JPG)](https://publiclab.org/system/images/photos/000/023/329/original/TPL_20180115-2463-2.JPG)  
_Figure 3\. The TPL5110 and mosfet soldered to the PCB. The traces in the PCB connect each leg of the TPL5110 to one of the header holes on the edge of the PCB. Traces connect two legs of the mosfet (top) to the appropriate two legs of the TPL5110\. An added wire (top left) connects the third leg of the mosfet to an unused pin (that's the DRIVE pin which will power the Arduino)._

It is a bit of a challenge to solder surface-mount components (they are really tiny) but not too bad when there are just a few to do. In addition to the two ICs, a resistor to set the timer interval is needed. A surface mount resistor would have been neater, but I had only through-hole resistors. I also added a second resistor to calm the DONE line, but testing suggests it is not required.

[![TPL_20180116-2484.JPG](https://publiclab.org/system/images/photos/000/023/330/medium/TPL_20180116-2484.JPG)](https://publiclab.org/system/images/photos/000/023/330/original/TPL_20180116-2484.JPG)  
_Figure 4\. A completed timer. Five wires must be connected to header pins (two from the battery and three to the Arduino logger). Using smaller surface-mount resistors (and eliminating the second resistor) would make it a very neat package._

This DIY timer does not have all the features of the Adafruit version. It is completely up to the task of efficiently controlling a data logger even though there is no potentiometer, tactile button, or LED like on the Adafruit version. But I can't compete with the Adafruit version on price--if I had to buy the little red PCB, the cost of parts would be almost as much as the retail price of the Adafruit product. I'm really impressed that Adafruit can sell their full-featured TPL5110 timer for only $4.95\. It's a bargain.

[![TPL_20180124-2575.JPG](https://publiclab.org/system/images/photos/000/023/331/medium/TPL_20180124-2575.JPG)](https://publiclab.org/system/images/photos/000/023/331/original/TPL_20180124-2575.JPG)  
_Figure 5\. I made a few versions trying different configurations. The next one will be even better. These three function as expected._

I tested the three timers I made and they all work just like the Adafruit version. I'm glad I tried this, although had I instead spent my time driving for Lyft I could have bought all the Adafruit timers I will ever need.

[![FreezerCycles.PNG](https://publiclab.org/system/images/photos/000/023/332/large/FreezerCycles.PNG)](https://publiclab.org/system/images/photos/000/023/332/original/FreezerCycles.PNG)  
_Figure 6\. One of my DIY timers was controlling a Mini Pearl Logger in my freezer the other day. A 61.9kΩ resistor set the logging interval at 12 minutes. The graph includes 10 hours of data. My freezer temperature varies a lot more than I thought it would._

[![MiniPro_20180121-2514.JPG](https://publiclab.org/system/images/photos/000/023/333/medium/MiniPro_20180121-2514.JPG)](https://publiclab.org/system/images/photos/000/023/333/original/MiniPro_20180121-2514.JPG)  
_Figure 7\. Is anyone interested in a kit to make one of these timers? It won't be any cheaper than the Adafruit product, but it is guaranteed to build character and impress your friends._