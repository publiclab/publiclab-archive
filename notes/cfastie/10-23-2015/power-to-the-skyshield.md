---
title: Power to the SkyShield
tagnames: kite-mapping, vermont, kite, saturnv, skyshield, response:12323
author: cfastie
path: /notes/cfastie/10-23-2015/power-to-the-skyshield.md
nid: 12330
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/012/085/original/notiltsky.JPG)

# Power to the SkyShield

by [cfastie](../profile/cfastie) October 23, 2015 18:43

October 23, 2015 18:43 | Tags: [kite-mapping](../tag/kite-mapping), [vermont](../tag/vermont), [kite](../tag/kite), [saturnv](../tag/saturnv), [skyshield](../tag/skyshield), [response:12323](../tag/response:12323)

----

*Above: The dreaded result when the SkyShield batteries get too low to drive the servos correctly. After eight shots of mostly sky, the Saturn V Rig should be tilting down for 17 shots of mostly earth. With low batteries the tilting rarely happens and most of the photos are of sky. Pretty, but mostly useless.*

As it got colder this fall, the batteries on the [SkyShield autoKAP controller](http://kaptery.com/product/skyshield-autokap-controller) began to fail after an hour or less of continuous pan/tilt operation. I assume this is due to the faster voltage drop when batteries are used at lower temperatures.

[![Procell-AA-Constant-Temperature-at-100-mA.jpg](https://i.publiclab.org/system/images/photos/000/012/088/medium/Procell-AA-Constant-Temperature-at-100-mA.jpg)](https://i.publiclab.org/system/images/photos/000/012/088/original/Procell-AA-Constant-Temperature-at-100-mA.jpg)  
*Alkaline batteries supply less current when it is cold. [Source](https://www.batteriesinc.net/aa-alkaline-batteries/duracell-pc1500/)*

Four alkaline AAA batteries provide 6 volts (4 x 1.5V) when they are fresh. Voltage drops as the batteries are used, and drops faster when they are cold. When the voltage supplied to the Arduino Nano in the SkyShield drops toward 5 volts, the servos misbehave. It was acceptable to get an hour or two of operation from the SkyShield, but less than an hour is shorter than most of my KAP flights. Two ways to solve this problem include using a more powerful battery pack and using a smarter voltage regulator.

###Moar batteries

When using four alkaline AAA batteries, voltage does not have to drop very far (from 6V to 5V) to cause servo troubles. Adding additional AAA batteries can help. Six alkaline AAA provide 9 volts (6 x 1.5V) so it takes much longer for the voltage to drop to the inadequate level. It is easy to find cases for four AAA, but hard to find cases for six AAA (especially with on/off switches). So I wired up two cases for four AAA so I could try six batteries. 

[![6BattSkySh-678-6a.jpg](https://i.publiclab.org/system/images/photos/000/012/093/large/6BattSkySh-678-6a.jpg)](https://i.publiclab.org/system/images/photos/000/012/093/original/6BattSkySh-678-6a.jpg)  
*Above: A couple of extra solder points allows six batteries to be used.*

In a controlled test, the same batteries that had already powered the Saturn V Rig for more than an hour lasted another 5.3 hours when six of them were used together. The test was at 50°F, not 40°F like the actual KAP flight, but the servos were still working perfectly after 5.3 hours -- I stopped the test because it got dark. The results suggest that six batteries will completely solve the problem.

[![6BattSkySh-678-21ps.jpg](https://i.publiclab.org/system/images/photos/000/012/094/large/6BattSkySh-678-21ps.jpg)](https://i.publiclab.org/system/images/photos/000/012/094/original/6BattSkySh-678-21ps.jpg)  
*Above: Two battery cases just fit on the Saturn V Rig. The batteries are the densest part of the rig, so they should be as close to the center of the rig as possible to make it easier to balance everything.*

[![6BattSkySh-678-14a.jpg](https://i.publiclab.org/system/images/photos/000/012/095/medium/6BattSkySh-678-14a.jpg)](https://i.publiclab.org/system/images/photos/000/012/095/original/6BattSkySh-678-14a.jpg)  
*Above: A new hole is needed for the extra wires.*

[![6or8BattSkySh.jpg](https://i.publiclab.org/system/images/photos/000/012/096/medium/6or8BattSkySh.jpg)](https://i.publiclab.org/system/images/photos/000/012/096/original/6or8BattSkySh.jpg)  
*It's also easy to wire up two cases so either six or eight batteries can be used. Eight batteries might be needed for winter KAP sessions, but the extra weight is probably not justified in the summer. This is a mock-up, I haven't tried this yet.*

[![BH26AAW.jpg](https://i.publiclab.org/system/images/photos/000/012/097/medium/BH26AAW.jpg)](https://i.publiclab.org/system/images/photos/000/012/097/original/BH26AAW.jpg)  
*Above: This case for six AAA costs $1.50 but does not have a switch. This configuration of three on top of three allows the mass to be placed closer to the center of the rig.*

[![ThingAAA.JPG](https://i.publiclab.org/system/images/photos/000/012/098/medium/ThingAAA.JPG)](https://i.publiclab.org/system/images/photos/000/012/098/original/ThingAAA.JPG)  
*Above: There is a customizable thing on Thingiverse that could be 3D printed. But then all the battery contacts would have to be installed. And for rig balance it is better to stack the batteries so the mass can be closer to the center.*

Another advantage of using more than four AAA batteries is that rechargeables can be used. Typical NiMH AAAs supply only 1.2 volts each instead of 1.5 volts for alkaline. So four of them was never enough, but six provide 7.2 volts which should work well.  I have lots of eneloop AAA and a good charger, so that would eliminate lots of alkaline battery waste and expense. 

###Switching regulator

Electronics can also solve this problem. Ten years ago, Adafruit industries got famous for the Minty Boost, a kit to make a device that could charge a phone or iPod with only two AA batteries. It all fit in an Altoids tin (for a product which Altoids does not sell anymore, so Adafruit now sells similar tins). The kit includes a clever little integrated circuit called a boost converter that can output more voltage than you put into it. The boost converter IC costs less than a dollar, but I think to make it work you also need 10 other components (resistors, capacitors, diode, inductor). This is more components than the entire SkyShield has. We considered integrating this into the circuit of the SkyShield, but it might increase the cost and size by some 30-50%. It would definitely reduce the flying weight of the rig by reducing the number of batteries required.

[![stepupschematic.JPG](https://i.publiclab.org/system/images/photos/000/012/099/medium/stepupschematic.JPG)](https://i.publiclab.org/system/images/photos/000/012/099/original/stepupschematic.JPG)  
*Above: The circuit required to implement a boost converter. The boost converter IC is labeled MC34063A/E.*

The boost converter circuit would replace some components already on the SkyShield ([design here](http://kaptery.com/guides/)), so maybe a clever circuit designer could integrate the two without increasing the cost or size too much. 

Until then, using six batteries is recommended when it's cold, and even when it is warm, use fresh alkaline batteries for every flight.
