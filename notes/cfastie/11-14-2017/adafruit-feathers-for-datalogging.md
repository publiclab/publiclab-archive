---
title: "Adafruit Feathers for datalogging"

tagnames: 'sensors, datalogger, riffle, data-logging, mini-pearl-logger, location:blurred, adafruit, feather, mayfly, place:india, lat:22, datalogger-option, lon:76, zoom:6'
author: cfastie
path: /notes/cfastie/11-14-2017/adafruit-feathers-for-datalogging.md
nid: 15181
uid: 554

cids: 17719,17720,17755,26068,26082,26083,26102,26154

---

![](https://publiclab.org/public/system/images/photos/000/022/382/original/Feather_20171112-1556-2.JPG)

# Adafruit Feathers for datalogging

by [cfastie](../../../profile/cfastie) | November 14, 2017 02:22

November 14, 2017 02:22 | Tags: [sensors](../tag/sensors), [datalogger](../tag/datalogger), [riffle](../tag/riffle), [data-logging](../tag/data-logging), [mini-pearl-logger](../tag/mini-pearl-logger), [location:blurred](../tag/location:blurred), [adafruit](../tag/adafruit), [feather](../tag/feather), [mayfly](../tag/mayfly), [place:india](../tag/place:india), [lat:22](../tag/lat:22), [datalogger-option](../tag/datalogger-option), [lon:76](../tag/lon:76), [zoom:6](../tag/zoom:6)

----

###The Feather ecosystem  

Two years ago, Adafruit introduced a new line of Arduino compatible microcontroller boards. The [Adafruit Feather boards]( https://www.adafruit.com/feather) were intended to be an upgrade from the typical Arduino boards used by hobbyists and create a new standard of power, usability, and expandability. They were designed by Limor Fried who knew the types of things people did with Arduino boards, having designed and manufactured hardware for the hobby and educational communities for a decade. 

[![Feather_20171112-1566.JPG](https://publiclab.org/system/images/photos/000/022/383/medium/Feather_20171112-1566.JPG)](https://publiclab.org/system/images/photos/000/022/383/original/Feather_20171112-1566.JPG)  
*Above: Two Feathers with different microprocessors. Left, the Feather 32u4 Basic Proto. Right, the Feather M0 Adalogger which has a more powerful processor and an integrated microSD card socket. The Feather 32u4 has extra space on the PCB so additional 3V and GND pins are provided and you can use the "prototyping" area to add extra pins for sensors or add a component.*

There are now more than two dozen different Feather boards with different components including radios and microSD socket. They are all the same compact size--a little bigger than an Arduino Nano--which provides enough space to include an accessory component directly on the board. They all have the same set of pins which standardizes connections. Many components can be connected by using FeatherWings--snap-on “shields” with components such as GPS receivers, clocks, motor controllers, displays, and relays. There are about three dozen different Featherwings which can be snapped on to almost any Feather. Other hardware, including environmental sensors, can be connected the same way you connect them to standard Arduinos. 

[![Feather_20171112-1571.JPG](https://publiclab.org/system/images/photos/000/022/384/medium/Feather_20171112-1571.JPG)](https://publiclab.org/system/images/photos/000/022/384/original/Feather_20171112-1571.JPG)  
*Above: Two FeatherWings. These don't have microprocessors so they must couple with Feathers. Left, DS3231 Precision RTC FeatherWing. Right, Adalogger FeatherWing which has an RTC and a microSD socket.*

One of the things Limor Fried knew people did with Arduinos was make dataloggers to collect and save environmental or other data from sensors. So there are several Feathers and FeatherWings to make this easy. I have been trying to figure out how these Feather-based dataloggers compare to dataloggers assembled from standard Arduinos and to dedicated Arduino-based loggers like the Riffle or Mayfly Data Logger. There are still some big gaps in my understanding of these loggers, so please let me know if you notice something I missed.

All Feather boards do not have the same processor. The first Feather was built around the Atmega 32u4, and had about the same processing power as a standard Arduino (Table 1). A month later, in December 2015, the Feather M0 (M zero) was announced with several times the speed, memory, and power. The Feather M0 is a substantial upgrade from the typical Arduino or the 32u4 Feather and probably has more power than is needed for basic datalogging. Some Feathers have even bolder processors including the formidable ESP8266 with integrated WiFi and one or two orders of magnitude more processing power than the Apollo Guidance Computer that went to the moon and back (really). 

[![Table1.PNG](https://publiclab.org/system/images/photos/000/022/385/large/Table1.PNG)](https://publiclab.org/system/images/photos/000/022/385/original/Table1.PNG)

###Feather dataloggers

Microcontroller boards are not dataloggers until they have a sensor, a clock, and someplace to store the data:
 
*Sensors.* Sensors are not supplied as part of the Feather ecosystem, so you just connect whatever sensors you want. All Feathers are compatible with I2C, SPI, and one-wire sensors, and will work with many other types.  

*Clocks*. All microcontrollers can count seconds, but they are not very precise, and most don’t know anything about minutes, hours, days, or months, and they forget the time whenever they are powered down. Adding a separate “real-time” clock (RTC) with a coin battery is standard practice so you know exactly when each data point was captured. The best real-time clocks sense the temperature and make corrections to increase precision. They also support alarms to wake up a sleeping processor so battery power can be conserved between logging events.

*Storage.* Most DIY dataloggers store the data on microSD cards because transferring data from a microcontroller’s memory is tricky. But some of the microcontrollers have plenty of memory and that’s also an option.

**Is soldering required?**

Feathers and FeatherWings snap together without solder, but only after the headers have been soldered onto the boards. Some can be purchased with the headers soldered on, but some can’t. If you want to connect a sensor, there might be additional soldering to do. So the Feather system is generally easier than making loggers from standard Arduino and hobbyist components, but it does not always eliminate soldering.

[![Feather_20171112-1560.JPG](https://publiclab.org/system/images/photos/000/022/386/medium/Feather_20171112-1560.JPG)](https://publiclab.org/system/images/photos/000/022/386/original/Feather_20171112-1560.JPG)  
*Above: Top to bottom: female headers, male headers, stacking headers. Which ones you solder onto a Feather or FeatherWing determines how they will stack together. The stacking headers allow more than one FeatherWing to be stacked onto a Feather.*

**Note on prices**

I include the current prices without shipping below for Adafruit products, but shipping is included in the prices for eBay parts. To operate any of these standalone loggers you will also need a battery to power it, a microSD card, and a coin cell for the RTC. Those can add about $10.00 to the cost, which could triple the price of the Mini Pearl Logger.

**Loggers with the Feather 32u4 **

*[Feather 32u4 Basic Proto]( https://www.adafruit.com/product/2771) and [Adalogger FeatherWing]( https://www.adafruit.com/product/2922) ($36.00)*  
The simplest Feather datalogger starts with the low-end Feather 32u4 and adds a microSD socket and real-time clock via the convenient Adalogger FeatherWing. This is a really easy way to make a datalogger, but the real-time clock on the FeatherWing is not temperature compensated so it might accumulate errors of a couple of seconds every week. The functionality of the datalogger is similar to that of the [Nano Data Logger]( https://publiclab.org/wiki/nano-data-logger) built from a $3.00 Arduino Nano clone and a $5.00 datalogging shield. The Feather version is tidier, smarter, and probably lasts longer on battery power, but costs $36.00.  For less than $5.00, you can buy on eBay the main components to make a [Mini Pearl Logger]( https://publiclab.org/wiki/mini-pearl-logger) which has similar power, a temperature compensated real-time clock, and can last for many weeks or months on small batteries. So this Feather combination is a relatively expensive route to a less than perfect logger.

[![Feather_20171112-1590-2.JPG](https://publiclab.org/system/images/photos/000/022/398/medium/Feather_20171112-1590-2.JPG)](https://publiclab.org/system/images/photos/000/022/398/original/Feather_20171112-1590-2.JPG)  
*Above: Assembled datalogger. An Adalogger FeatherWing (with microSD and RTC) is stacked on top of a Feather 32u4 Basic Proto. It is powered by three AAA in the case and has an IR sensor attached with Dupont wires on pins soldered onto the Feather in the prototyping area. This is the option described above. A better RTC is available with the less expensive option below.*

_[Feather 32u4 Adalogger]( https://www.adafruit.com/product/2795) and [DS3231 FeatherWing]( https://www.adafruit.com/product/3028) ($34.00)_  
This is a better way to use the 32u4 as a datalogger. This Feather has an integrated microSD socket, and the FeatherWing has a real-time clock which is temperature compensated. The functionality is similar to the Mini Pearl Logger ($5.00 for parts on eBay) but it is easier to solder together and the final result will be smarter and tidier. For some applications the benefits might be worth the extra $29.00.

**Loggers with the Feather M0**

_[Feather M0 Adalogger]( https://www.adafruit.com/product/2796) by itself ($19.95)_  
This more advanced Feather has the beefy M0 processor and a microSD card socket on the board. The Feather alone does not have a battery powered real-time clock, but the M0 processor has a RTC integrated into the chip. It will forget the time and date when it is not powered, and it is not temperature compensated, but it does know about days, weeks, and months. I assume the RTC cannot control alarms to wake the sleeping processor if the RTC is part of that processor, so that battery saving trick might not work. For some applications these features might be sufficient, although those applications might be oddball ones if they require a powerful processor plus imprecise, inconvenient clock. If that works for you, this is a very tidy package, ready to connect sensors to and start logging. 

_[Feather M0 Adalogger]( https://www.adafruit.com/product/2796) and [DS3231 FeatherWing]( https://www.adafruit.com/product/3028) ($34.00)_  
This combination starts with a Feather M0 which has a microSD socket onboard (same as the one above). Then snap on a FeatherWing with a temperature compensated real-time clock. For some reason this costs the same as the 32u4 Adalogger version, even though the M0 version is much smarter. The ample memory and speed of the M0 processor make programming easier and complex computations possible, although for basic datalogging tasks all that memory and speed might not be needed. The alternative route of spending $5 for the parts of a Mini Pearl Logger (Pro Mini, microSD, RTC) could be a better choice if you don’t need extra power, are willing to do more soldering and assembly, and can wait three weeks to get the parts from eBay sellers in Asia.

[![Feather_20171112-1602.JPG](https://publiclab.org/system/images/photos/000/022/388/medium/Feather_20171112-1602.JPG)](https://publiclab.org/system/images/photos/000/022/388/original/Feather_20171112-1602.JPG)  
*Above: Assembled datalogger. A DS3231 Precision RTC FeatherWing is stacked on top of a Feather M0 Adalogger (with M0 microcontroller and microSD socket). Dupont wires for the BME280 sensor were soldered directly to the holes along the rows of duplicate pinouts on the underside of the FeatherWing.*

_[Feather M0]( https://www.adafruit.com/product/2772) and [Adalogger FeatherWing]( https://www.adafruit.com/product/2922) ($29.00)_  
This is the basic Feather M0 (without a microSD socket) combined with the FeatherWing which has both microSD and real-time clock (same as the one paired with the 32u4 above). But the clock is not temperature compensated, so there are better options above for a few extra dollars. And there are always the non-Feather options with similar potential at a fraction of the price if you are willing to do more soldering. 

**Radios**  

Lots of Feathers and FeatherWings have radios including WiFi, Bluetooth, LoRa, cellular, packet, and other “wireless” solutions. I am not including the radio options here because if your datalogger has a radio, it does not have to be a datalogger because the data can be sent somewhere else to be stored. There are some good reasons to use radios with your sensing Feathers, for example a cluster of radio-enabled Feathers could send their sensor data back to a central Feather for storage or transport to somewhere else via longer-range radio or wired connection. Transmitting radio signals requires a lot of power and can run down a battery faster than stand-alone dataloggers. Incorporating radios into your data collection system is a big step but has obvious benefits, especially when your sensor data can be live on the internet in real time.

**Libraries and Code ** 

Adafruit encouraged the popularity of microcontrollers and other DIY electronics by creating excellent resources for getting started with their products. These are provided for free and include tutorials, circuit diagrams, sample code, and code libraries. Unfortunately, there is not much supporting code or libraries for many of the Feather products. Some material can be found elsewhere on the Web, but it’s not always obvious whether a hobbyist like me will be able to figure out how to use a particular Feather or FeatherWing. Maybe they are still working on these resources.

###Are Feathers the way to fly?

The Feather ecosystem is carefully thought out. The board designs reflect a good understanding of the things people do with microcontrollers. For example:

1. The boards are small and easy to fit in tight places or in weatherproof enclosures. 
2. The compact integration of microcontroller with accessories allows very small and tidy builds.
3. The modular system makes it easy to add or replace components.
4. The ample memory of the Feather M0, HUZZAH, and WICED makes programming easier. Every datalogging sketch I have used on a Nano, Pro Mini, or Riffle needed tedious pruning to fit in the limited memory.
5. The Feather M0 has a higher clock speed than most official Arduinos (I think only the huge Due is faster), and other Feathers are even faster.
6. Some Feathers and most FeatherWings have duplicate pins making assembly easier. There will be much less need to solder multiple wires to one pin (a messy requirement with Nanos and Pro Minis). 
7. Feathers have USB ports so loading sketches does not require an FTDI cable as it does on the Pro Mini. The USB hardware on Feathers is integrated into the processor, so there is no power-hungry FTDI chip on the board to run the battery down as there is on the Uno or Nano.
8. Feathers are 3.3 volts so they use less power than 5 volt Arduinos like the Uno or Nano. When a Feather is plugged into USB it will automatically charge a connected 3.7/4.2 volt LiPo or LiPoly battery. Feathers include a circuit for measuring battery voltage. (You can also power Feathers with 3 AAA, but bad things are likely to happen if you connect to USB power and the Feather tries to charge your alkaline batteries.)

These features make it easy to build very capable dataloggers. Compared to loggers built from eBay components (e.g. Arduino, microSD, and RTC), a Feather plus FeatherWing is easier to assemble, smaller, and can have much more processing power. 

There are two downsides to these Feather loggers: 

1. They cost four or five times more than the component parts of DIY loggers which are adequate for many projects. 
2. Although Feathers have smart power management features, there was no specific design goal to allow a low-current sleep state. So long-term logging on battery power is probably not a strength of these loggers. I don’t know of any attempts to do long-term logging with a Feather on battery power, but my impression is that a Feather datalogger could last for a few weeks on small batteries, but not for multiple months. This is similar to my early results with the Mini Pearl Logger, but far short of Ed Mallon’s result with his Pro Mini based Cave Pearl Logger. I am still searching for better techniques of conserving power with these boards.

[![Feather_20171112-1584-2.JPG](https://publiclab.org/system/images/photos/000/022/399/medium/Feather_20171112-1584-2.JPG)](https://publiclab.org/system/images/photos/000/022/399/original/Feather_20171112-1584-2.JPG)  
*Above: How do these two dataloggers differ? Left, A Mini Pearl Logger soldered together from $5.00 worth of eBay parts (Pro Mini, RTC, microSD) plus a sensor, LED, and I2C hub. Right, a working datalogger with Feather, FeatherWing, and sensor. With some effort, the messy thing on the left could be assembled into a much tidier package, but the Feather logger is inherently tidy (really tidy).*

The [Riffle]( https://publiclab.org/wiki/riffle) and the [Mayfly Data Logger]( https://envirodiy.org/mayfly/) were designed specifically for unattended long-term datalogging. The Riffle has a minimalist design that will fit in narrow enclosures, and the Mayfly is a large PCB which allows easy connection of different types of sensors, wireless modules, and solar chargers. These are both single boards with everything integrated (processor, microSD, RTC) so they are tidy and require minimal assembly and little or no soldering. They both compare favorably with the Feather solutions for convenience. 

The Riffle is similar in processing power to the Feather 32u4, and the Mayfly is better, but not as powerful as the Feather M0 (Table 1). Both can be put in low-power sleep modes (about 0.5mA), but I am not familiar with tests of either logger during actual long-term monitoring on battery power with sensors attached. So I can’t conclude much about how long they could log unattended, but they both might do better than Feathers. They both cost almost twice as much ($60.00) as a Feather/FeatherWing combo, but if you really need one of their features it might be worth it. 

Dataloggers based on Feather/FeatherWing combos fill an important niche (Table 2).  If you need a lot of computing power or speed and the potential to easily snap on additional components (radio, GPS, display) their moderate price could make them the smart choice. They might not be the best choice if your goal is year-long unattended logging. If you want to save money and are willing to spend time soldering everything together, you should buy parts on eBay or a [kit to build a Mini Pearl Logger]( http://kaptery.com/product/mini-pearl-logger-kit). If you don’t want to do any soldering at all, try a Mayfly or Riffle. The Mayfly is ready to plug in Grove sensors, a solar panel, and an Xbee radio--a great convenience if that’s what you need.

[![Table2.PNG](https://publiclab.org/system/images/photos/000/022/390/large/Table2.PNG)](https://publiclab.org/system/images/photos/000/022/390/original/Table2.PNG)

