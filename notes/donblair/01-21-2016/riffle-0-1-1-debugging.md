---
title: Riffle 0.1.1 Debugging
tagnames: riffle, data-logging
author: donblair
path: /notes/donblair/01-21-2016/riffle-0-1-1-debugging.md
nid: 12600
uid: 43651

---

# Riffle 0.1.1 Debugging

by [donblair](../profile/donblair) January 21, 2016 23:32

January 21, 2016 23:32 | Tags: [riffle](../tag/riffle), [data-logging](../tag/data-logging)

Hi All,

Just got back the latest version of the Riffle 0.1.1 board, nicely assembled by the kind folks  [MacroFab](http://macrofab.com). 

[![IMG_20160121_173410295.jpg](//i.publiclab.org/system/images/photos/000/013/750/medium/IMG_20160121_173410295.jpg)](//i.publiclab.org/system/images/photos/000/013/750/original/IMG_20160121_173410295.jpg)

Alas, when I used an ISP programmer to attempt to load a bootloader -- no dice!  Didn't work.

I've been taught by folks that it's usually the case that a 'dead' board design can be brought to life with a few jumper wires ... so, I spent a while using a multimeter to track down the problem, and the main problem seems to be that I made a mistake when wiring up the switch that allows for changing battery chemistries.  

The older, working version of the Riffle -- 0.96 -- had a simpler switch configuration:

[![0.96-switch.png](//i.publiclab.org/system/images/photos/000/013/751/medium/0.96-switch.png)](//i.publiclab.org/system/images/photos/000/013/751/original/0.96-switch.png)

(The full schematic for version 0.96 is [here](https://raw.githubusercontent.com/dwblair/riffle-dev/master/riffle-0.96-schem.png)).

In modifying the board to accommodate two battery chemistries, in version 0.1.1, I think I goofed when assigning pins on the new switch:

[![1.1-switch.png](//i.publiclab.org/system/images/photos/000/013/752/medium/1.1-switch.png)](//i.publiclab.org/system/images/photos/000/013/752/original/1.1-switch.png)

(The full schematic for version 0.1.1 is [here](https://raw.githubusercontent.com/OpenWaterProject/riffle/master/hardware/riffle-beta-0.1.0/riffle-beta-0.1.0-schematic.png))

Basically, I misread the switch datasheet re: which pins on the switch would allow for connecting power appropriately.  Oops.  :(  I'm going to go back and reread the datasheet on the switch device -- I might've confused part numbers or something -- but I can also simply do a compare / contrast between the older schematic + board layout and the current one to make sure that things are wired properly.

By properly connecting power across the switch (from VBAT -- which gets power from the USB via the lipo battery charger -- to VDD), I was easily able to load a bootloader:

[![IMG_20160121_154241610.jpg](//i.publiclab.org/system/images/photos/000/013/755/medium/IMG_20160121_154241610.jpg)](//i.publiclab.org/system/images/photos/000/013/755/original/IMG_20160121_154241610.jpg)

But, after loading a bootloader, was unable to program the board with a sketch in the Arduino IDE, via USB as per normal.  It gave a "avrdude stk500_getsync(): not in sync" error. 

However, after playing around with a *lot* of iterations, I figured out that by connecting a battery to VBAT, I was able to program the board.  Alternatively: if, instead of connecting VDD to VBAT, I connected VDD to to VBUS (i.e., directly to USB), I was also able to program the board successfully:


[![IMG_20160121_165717798.jpg](//i.publiclab.org/system/images/photos/000/013/756/medium/IMG_20160121_165717798.jpg)](//i.publiclab.org/system/images/photos/000/013/756/original/IMG_20160121_165717798.jpg)



So, in addition to fixing the wiring on the switch (straightforward), there's some more subtle issue re: the power wiring on the board. I'm going to do some more testing with the multimeter tonight, and ask around tomorrow.

**Favor** -- anyone who has the time, could you check out the power circuitry on the board, and let me know if you see something dumb? :) 

Onward!

Cheers,
Don

