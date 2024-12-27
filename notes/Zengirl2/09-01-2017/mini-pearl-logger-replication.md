---
title: "Mini Pearl Logger Replication"

tagnames: 'arduino, sensors, data-logging, arduino-pro-mini, mini-pearl-logger, replication:14518'
author: zengirl2
path: /notes/Zengirl2/09-01-2017/mini-pearl-logger-replication.md
nid: 14818
uid: 423961

cids: 17301,17302,17303,17306

---

![](https://publiclab.org/public/system/images/photos/000/021/522/original/MiniPearlLit.jpg)

# Mini Pearl Logger Replication

by [zengirl2](../../../profile/zengirl2) | September 01, 2017 22:25

September 01, 2017 22:25 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [data-logging](../tag/data-logging), [arduino-pro-mini](../tag/arduino-pro-mini), [mini-pearl-logger](../tag/mini-pearl-logger), [replication:14518](../tag/replication:14518)

----

The manual by @cfastie does a good job at explaining the basics of the datalogger. I used the simpler setup since mine was done on a breadboard at the Barn Raising event. Because there are many wires, I actually think this project is best if you just go straight to soldering, especially since two pins in the Arduino are near the center of the board and make them less trustworthy for breadboarding unless you add header pins to them as well. The system works great and I was able to get a read on the built-in temperature sensor both on the serial monitor as well as the SD card. I also fanned the unit to show a change in temperature. Here are my only additions for info:

- Be sure to select the "ATmega 328(3.3v,8MHz)" from Tools menu
- double check the Adafruit library for [https://github.com/adafruit/RTClib/](https://github.com/adafruit/RTClib/) by compiling your code first before uploading. It wouldn't compile for me, but when I used the original RTClib listed for the Cave Pearl logger [https://github.com/MrAlvin/RTClib](https://github.com/MrAlvin/RTClib) it worked fine. @cfastie believes he is using Adafruit's version and they both have the same exact name. So, please do post the library you end up using.

This was a fun build and it's great to see how small the SD card module is.