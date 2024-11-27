---
nid: 13195
title: *FIXED* Riffle SD card Power Consumption
path: public/static/notes/kinasmith/06-14-2016/fixed-riffle-sd-card-power-consumption.md
uid: 445906
tagnames: riffle
---

# *FIXED* Riffle SD card Power Consumption

After some sleuthing, I figured out the culprit for why the Riffle was consuming so much power, as detailed [in this Research Note](https://publiclab.org/notes/kinasmith/06-09-2016/riffle-power-consumption). 


##Bugs!!

Turns out there is a bug in the SD Card Library included with the Arduino IDE that doesn't let the SD Card sleep.

I found [this thread in the Arduino Forums](http://forum.arduino.cc/index.php?topic=149504.0), which says this about the SD Library included with the Arduino IDE. 

>SD.h has not added bug fixes from SdFat for about three years and the Adruino developers have added their own bugs.  I tried SD.h with my tests and found cards pulled from 15 to 28 ma when idle.

That was posted 3 years ago, and is about what I was experiencing with the Riffle.

As suggested in the thread, I switched over to using the [sdFat Library](https://github.com/greiman/SdFat) and the sleeping current consumption dropped to about to 0.5mA, which is what the literature suggests. The Riffle sleeping consumes about 300µA, and the SD card consumes about 200µA. 

I also discovered the [Open Source Building Science Sensors](http://www.osbss.com/) project. They are using the sdFat Library to successfully and stably power cycle the SD card itself.

I was successfully able to power cycle the SD Card using the MOSFET switch included on the board. Not sure if it really makes much of a difference power wise....but it seems pretty stable over the last hour at a logging interval of 15 seconds. 

Updated code is [in the Github Repo](https://github.com/kinasmith/publicLab/tree/master/Riffle/Power_Testing/SD_LowPwr_pwrDwn).

Currently, the sleeping current is 0.487mA, which is a theoretical battery life of about 3-4 months depending on logging interval. 

Better than 9 days!