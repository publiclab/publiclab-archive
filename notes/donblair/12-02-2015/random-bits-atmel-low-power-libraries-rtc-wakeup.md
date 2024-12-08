---
title: Random Bits: Atmel Low Power Libraries & RTC wakeup
tagnames: riffle, low-power
author: donblair
path: /notes/donblair/12-02-2015/random-bits-atmel-low-power-libraries-rtc-wakeup.md
nid: 12471
uid: 43651

---

# Random Bits: Atmel Low Power Libraries & RTC wakeup

by [donblair](../profile/donblair) December 02, 2015 19:14

December 02, 2015 19:14 | Tags: [riffle](../tag/riffle), [low-power](../tag/low-power)

Quick notes from the last several days -- sorry it'll be a bit of a ramble -- just trying to capture some ideas here quickly. 

@mathew had pointed out that it'd be nice to be able to wake up the Riffle (based on the Arduino's Atmel 328p) using the RTC, so that it could sleep as deeply as possible and only wake up when it really needed to. I'd been looking into modifying the Riffle so that the RTC could wake the device up from sleep. 

Background: 

When it comes to sleeping to save power, the library we've been using on the Riffle is the JeeLib library (https://github.com/jcw/jeelib).  It basically puts the microcontroller into a deep sleep state (there are several -- I haven't looked into which one the jeelib uses).  The maximum time for the library to sleep is 60 seconds; if you want to sleep for longer, you simply loop.  My impression is that there is not much extra energy consumption used by waking up and immediately going back to sleep due to that loop structure; don't really know, though.  In the end, the JeeLib library has been used to run a 328p JeeNode for months on a coin cell, so it seems like it's definitely in the ballpark we're hoping for with environmental monitors.   For that reason, I wasn't yet convinced that the additional functionality of having the RTC wake up the monitor at a specified time was really worth sacrificing an additional 'interrupt' pin on the Arduino -- especially since we're already using the two interrupt pins for other things (conductivity via a 555, and depth via a 555) ... (BUT WAIT: PUNCHLINE COMING UP BELOW :))

Yesterday, working with Carlos Artyuro Sanchez at U. Los Andes, we found that the monitoring nodes we'd been setting up had started to include so much code that the 328p's memory was maxed out (specifically, we were running into stability issues after getting 'low memory' warnings -- NOTE: always pay attention when the compiler tells you that stability might be a problem :)  It can lead to really weird behavior that is hard to debug). In trying to save space, I looked for other low-power sleep libraries.  I came across this:

http://www.rocketscream.com/blog/2011/07/04/lightweight-low-power-arduino-library/

Which is the library used in another great project, the Moteino.  When I tried it, I found that it only saved about 7 bytes vs. using the JeeLib library -- not much, but sometimes those last bytes are important :)   

However, one of the nice things about the library is that they include a lot of low-level options, if you want them -- options for turning off the ADC, and dialing into whatever particular sleep mode you're interested in.  Also, they include functionality for waking the device from an interrupt pin, as per @mathew's idea:  the RTC has an alarm function that can pull an alarm pin HIGH at some specified time, waking up the microcontroller.  

There are some nice charts on rocketscream trying to assess the typical uA power consumption at various sleep levels.  And here are some additional nice resources:

http://gadgetmakersblog.com/arduino-power-consumption/
https://evothings.com/watchdog-timers-how-to-reduce-power-usage-in-your-arduino-projects/
http://www.element14.com/community/thread/40538/l/arduino-sleep-pin-interrupt?displayFullThread=true

I was curious to find a little tutorial on waking up the device from an interrupt pin, and ran across this:

http://www.megunolink.com/wake-on-serial-message/

**Woah!  Is this true!?**  Almost any pin on the Atmel328p can have an interrupt attached to it, to wake the device from sleep?

If this is true, then this is really awesome -- basically, we can have a sleeping Riffle wake up on *any* particular signal -- e.g., it receives a radio packet, a switch / button is triggered, it receives something on the serial port.

I'm still not sure that in the "sleep X minutes, wake up & record a measurement, repeat ..." mode that has been standard for our Riffle application ideas thus far that the RTC pin wakeup is going to save much power.  I suppose one metric would be:  is the increase in battery lifetime more than the self-discharge of a lipo battery (these battery will lose charge over time even if there is no load)?  

BUT:  now I'm very interested to explore this interrupt functionality, knowing that it might be possible to wake up from a variety of signals.  For now, what I'm imagining is: exposing the RTC alarm pin on the board, and then people can run a wire from whichever interrupt pin they chose to the RTC alarm (if they're interested in waking up that way), or to another pin on the board (e.g. a serial pin) to wake up another way (e.g. from a switch, or button, or radio signal).  


