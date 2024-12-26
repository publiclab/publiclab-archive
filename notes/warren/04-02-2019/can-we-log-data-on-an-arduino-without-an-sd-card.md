---
title: "Can we log data on an Arduino without an SD card?"\ntagnames: 'arduino, webjack, data-logging, question:data-logging, plantower, p5js, question:simple-air-sensor, simple-air-sensor'
author: warren
path: /notes/warren/04-02-2019/can-we-log-data-on-an-arduino-without-an-sd-card.md
nid: 18936
uid: 1

---

# Can we log data on an Arduino without an SD card?

by [warren](../profile/warren) | April 02, 2019 15:06

April 02, 2019 15:06 | Tags: [arduino](../tag/arduino), [webjack](../tag/webjack), [data-logging](../tag/data-logging), [question:data-logging](../tag/question:data-logging), [plantower](../tag/plantower), [p5js](../tag/p5js), [question:simple-air-sensor](../tag/question:simple-air-sensor), [simple-air-sensor](../tag/simple-air-sensor)

----

I've been thinking about the #simple-air-sensor and how we could extend it to log without increasing the cost much -- I do think we could make a Raspberry Pi variant that'd have some advantages, but I also remembered that there is some very small amount of EEPROM memory on the Arduino -- I looked it up and it has 1024 bytes of memory. 

  
If each reading of PM 2.5 is, say, 3 bytes (could be less, depending on how we store it) and we want to store roughly each half hour, we'd have about 166 hours of logging time. 166 hours is almost 7 days -- that is, ~6.9 days .

  
Note that there's no real-time clock (RTC) on the basic Arduino Nano, so we'd want to record a marker whenever it's started up, so you can see when the last "run" started (i.e. how long it's been running uninterrupted)

  
We could have it output the data whenever you start up the device, as fast as it can over serial, OR using #webjack, potentially. Then it'd start logging again. 

  
When it reached the end of 166 hours, it'd start recording over old data, like a CCTV camera. When you see all the data, it'd be broken up by the markers to show each "run" of recording.

  
If we wanted to store PM1, PM2.5, and PM10 (all three sizes the #Plantower sensors can detect), we'd have 1/3 the storage. If we recorded every hour instead of every half hour, we'd have double. 

  
Anyways, this'd take some coding on the Arduino to make it work, so I opened an issue here:

  
https://github.com/jywarren/p5js-webjack-sensor/issues/1

  
It's not perfect, but it would be possible without any additional cost, which is pretty nice.