---
title: "The Mini Pearl Logger"

tagnames: 'arduino, sensors, data-logging, response:14152, bme280, arduino-pro-mini, mcp9808, mini-pearl-logger, activity:mini-pearl-logger'
author: cfastie
path: /notes/cfastie/06-09-2017/the-mini-pearl-logger.md
nid: 14518
uid: 554
cids: 16901,16915,16917
---

![](https://publiclab.org/public/system/images/photos/000/021/448/original/MiniPearl400.jpg)

# The Mini Pearl Logger

by [cfastie](/profile/cfastie) | June 09, 2017 23:28

June 09, 2017 23:28 | Tags: [arduino](/tag/arduino), [sensors](/tag/sensors), [data-logging](/tag/data-logging), [response:14152](/tag/response:14152), [bme280](/tag/bme280), [arduino-pro-mini](/tag/arduino-pro-mini), [mcp9808](/tag/mcp9808), [mini-pearl-logger](/tag/mini-pearl-logger), [activity:mini-pearl-logger](/tag/activity:mini-pearl-logger)

----

This spring I did some tests with a [data logger based on an Arduino Nano](https://publiclab.org/tag/nano-data-logger) microcontroller. The Nano Logger is very convenient because it requires little or no soldering and can be easily reconfigured, but it is not ideal for unattended long-term field deployment because it does not use battery power efficiently.

[![MiniPearl_20170605-9459.JPG](https://publiclab.org/system/images/photos/000/020/748/medium/MiniPearl_20170605-9459.JPG)](https://publiclab.org/system/images/photos/000/020/748/original/MiniPearl_20170605-9459.JPG)  
_Above: The Arduino Pro Mini is one of the smallest and simplest Arduino boards. It has the same processor, memory, and clock speed as an Arduino Uno or Nano, but lacks a USB port._

To extend the field life, I replaced the Arduino Nano with an Arduino Pro Mini. The Pro Mini can run at 3.3 volts instead of 5 volts, and it does not have a USB port or the associated power hungry serial chip. Including a real time clock (RTC) that can wake up a sleeping processor, this logger should be able to outperform the Nano Logger.

[![MiniPearl_20170605-9447.JPG](https://publiclab.org/system/images/photos/000/020/747/medium/MiniPearl_20170605-9447.JPG)](https://publiclab.org/system/images/photos/000/020/747/original/MiniPearl_20170605-9447.JPG)  
_Above: The main components of the Mini Pearl Logger. The three PCBs are (L to R) RTC, Pro Mini, microSD board. The toothbrush thing is an I2C hub which allows multiple sensors to be connected. An detachable RGB LED (bottom) can indicate operational state if the LEDs on the PCBs have been removed to save power._

Ed Mallon's [Cave Pearl Logger](https://edwardmallon.wordpress.com/2015/10/24/diy-arduino-logger-build-instructions-part-1/) uses a similar combination of components, and Ed has done extensive testing to extend the field longevity to more than a year. I have not yet applied all of the Cave Pearl Logger's hardware and software magic, and hope to try some of them incrementally.

[![MiniPearl_20170605-9466ps.jpg](https://publiclab.org/system/images/photos/000/020/749/medium/MiniPearl_20170605-9466ps.jpg)](https://publiclab.org/system/images/photos/000/020/749/original/MiniPearl_20170605-9466ps.jpg)  
_Above: Seventeen wires must be soldered to the Pro Mini (one is missing here) and four more connect the RTC. Each sensor needs another four wires. It's a lot of soldering, but it's very straightforward to connect everything up._

For my first iteration I did not disable the LEDs on the boards, so two bright LEDs are on all of the time burning power. I assembled the logger without replacing any resistors or adding a voltage divider. So this was a minimalist version of the Cave Pearl Logger which has to be called the Mini Pearl Logger.

[![MiniPearlFritzPS3.jpg](https://publiclab.org/system/images/photos/000/020/753/large/MiniPearlFritzPS3.jpg)](https://publiclab.org/system/images/photos/000/020/753/original/MiniPearlFritzPS3.jpg)  
_Above: Example wiring diagram for the Mini Pearl Logger. The indicator LED is optional but is handy to confirm that operation is normal in the field before deployment. It can then be unplugged._

[![MinPerlFritzneat.png](https://publiclab.org/system/images/photos/000/020/878/large/MinPerlFritzneat.png)](https://publiclab.org/system/images/photos/000/020/878/original/MinPerlFritzneat.png)  
_Above: A simpler wiring diagram for the Mini Pearl Logger. One or more I2C sensors can be connected to the pass through I2C lines on the real time clock board._

I modified one of Ed Mallon's basic sketches to log data from three temperature sensors (MCP9808) and one barometric pressure, temperature, and humidity sensor (BME280). The sketch puts the processor to sleep between data saves. The MCP9808 sensors were also put to sleep individually. The microSD board was not explicitly put to sleep, so I don't know if it is burning lots of power all the time. If anyone can discern that from the sketch below, please let me know.

[![MiniPearl_20170606-9503.JPG](https://publiclab.org/system/images/photos/000/020/754/medium/MiniPearl_20170606-9503.JPG)](https://publiclab.org/system/images/photos/000/020/754/original/MiniPearl_20170606-9503.JPG)  
_Above: The assembled and working Mini Pearl Logger. The sensors are not yet attached._

I tried out the logger in the compost pile, but I did almost everything wrong. The three MCP9808 temperature sensors were placed in long PVC tubes and inserted toward the center of the pile, and the one BME sensor was next to the pile. But I forgot to change the sampling interval from one minute to something more reasonable. And I didn't notice that the MCP9808 sensors were not being read properly, so I didn't get any data from the hot center of the compost pile. And the four AAA batteries lasted only about 55 hours which was disappointing, but collecting no data for 55 hours is probably better than collecting no data for a week.

[![MiniPearl_20170605-9427.JPG](https://publiclab.org/system/images/photos/000/020/755/medium/MiniPearl_20170605-9427.JPG)](https://publiclab.org/system/images/photos/000/020/755/original/MiniPearl_20170605-9427.JPG)  
_Above: The Mini Pearl Logger is in the Nalgene bottle and three 70cm PVC tubes are inserted into the pile (black film vials cover the tube ends). A BME280 sensor and the indicator LED are outside the bottle, so I put a rain cover over it._

I'm not sure if the short battery life was primarily due to the SD card using power or to the two board LEDs using power. I figured out the MCP9808 failure (a delay of 0.25 seconds between waking and reading the sensor is sometimes not enough) and I deployed the device again with the sampling interval at 10 minutes. I guess it will last several days now.

[![TxHcomp2d.PNG](https://publiclab.org/system/images/photos/000/020/756/large/TxHcomp2d.PNG)](https://publiclab.org/system/images/photos/000/020/756/original/TxHcomp2d.PNG)  
_Above: The logger saved data from the BME280 sensor next to the compost pile, so I got 55 hours of temperature, humidity, and pressure data._

I made a second logger, so I plan to disable the LEDs on the boards (apparently easy to do with a soldering iron), and see how long it lasts. I think there are some other tricks I need to learn to extend battery life. With luck, it will eventually take a very long time to learn if my incremental changes improved longevity.

[![MiniPearl_20170606-9521.JPG](https://publiclab.org/system/images/photos/000/020/757/medium/MiniPearl_20170606-9521.JPG)](https://publiclab.org/system/images/photos/000/020/757/original/MiniPearl_20170606-9521.JPG)  
_Above: These are the parts included in the Mini Pearl Logger Kit at the KAPtery (plus some wire). \[Update: a different microSD board and card are now included in the kit.\]_

I have a few extras of the components for this logger, so if you want to try assembling one and see how long you can make it log data, [I can send you a kit for $19.00](http://kaptery.com/product/mini-pearl-logger-kit).

Here is the working sketch I am using on the Mini Pearl now:
[\_\_ Mini\_3MCP\_0.2.txt](https://publiclab.org/system/images/photos/000/020/758/original/Mini_3MCP_0.2.txt)