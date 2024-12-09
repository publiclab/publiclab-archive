---
title: 'One way of using the RTC Alarms to schedule logging on the Riffle'
tagnames: riffle, riffle-examples, first-time-poster
author: kinasmith
path: /notes/kinasmith/06-07-2016/one-way-of-using-the-rtc-alarms-to-schedule-logging-on-the-riffle.md
nid: 13171
uid: 445906

---

![](https://publiclab.org/public/system/images/photos/000/016/517/original/petting-my-cat-wallpaper-660x3301.jpg)

# One way of using the RTC Alarms to schedule logging on the Riffle

by [kinasmith](../profile/kinasmith) June 07, 2016 04:51

June 07, 2016 04:51 | Tags: [riffle](../tag/riffle), [riffle-examples](../tag/riffle-examples), [first-time-poster](../tag/first-time-poster)

----

#OK!
This is my first research note. I'll get used to the formatting in a minute. 
I finally got to dig into my Riffle a little bit and was super excited to figure out how to use the Alarms in the DS3231 Real Time Clock to schedule sensor reading events...or any other events for that matter.

###Why this matters? 

##Power Consumption!!!

The ATmega328 consumes power, obviously. When it's just churning through code, or stuck in a delay() it just sits there drawing something around 20mA. That's not good if you want to have a battery powered device that lasts a long time. Putting the MCU to sleep saves lots of power. There have been projects dedicated to exactly that which have reduced consumption to around 1µA. I'm pretty sure you generate more energy than that when petting a cat on a dry day. But that's another project. 

The issue with putting the ATmega to sleep is that you have to wake it up, which isn't really that much of a problem, because there are libraries for it. [Low Power Lab](https://github.com/rocketscream/Low-Power) and [Jeelib](http://jeelabs.org/pub/docs/jeelib/classSleepy.html) have excellent and easy to use libraries. BUT...we can save MORE power if we disable the things that allow it to wake up and completely rely on an external device to do the waking. Plus wouldn't it be nice just to say...

>"Hay, you..thing. Just do another thing in 23 minutes and 17 seconds" 

instead of having to worry about logging at times divisible by 8 seconds.  

## The Real Time Clock

There is this real time clock on the Riffle, the DS3231. It tells time. But it also has alarms that you can set. At intervals....or for a specific time. When the alarm triggers, it pulls its INT pin low, which is conveniently attached to Pin 5 on the ATmega. We can use that connection and behavior to cause the action to wake the ATmega from a DEEP sleep. Make it do something, then go back to sleep again. This can happen once per second, or once per month, or once per year, and while it's waiting it consumes a very VERY small amount of power. 

##This is the code. Try it out!
It uses three libraries:

* [Pin Change Interrupt Library](https://github.com/GreyGnome/EnableInterrupt)
* [DS3231 Library I modified](https://github.com/kinasmith/DS3231)
* [LowPower Library from RocketScream](https://github.com/rocketscream/Low-Power)

Be aware too, that there are a wide array of confusing libraries for the DS3231 which are all named the same thing, so make sure you keep them organized and differentiated in your Arduino Libraries folder. 

[Simple Code Here](https://github.com/kinasmith/publicLab/tree/master/Riffle/RTCAlarm_Scheduler)

[Datalogger using the SHT21 sensor here](https://github.com/kinasmith/publicLab/tree/master/Riffle/SHT21_Logger)