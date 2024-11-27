---
nid: 12179
title: Riffle: sensor board approach
path: public/static/notes/donblair/08-28-2015/riffle-sensor-board-approach.md
uid: 43651
tagnames: riffle,open-water
---

# Riffle: sensor board approach

One idea that came up in Colombia (and, really, in various forms earlier, at LEAFFEST and elsewhere -- gosh, it's so hard to credit all of the folks who've contributed all of these cool ideas! Need to make a looooong list ASAP) was that of making through-hole versions of the conductivity + temperature 'daughter boards' we're hoping to use with the Riffle datalogger. 

To recap:  the Riffle is a datalogger intended to be used in water (or other enviornmental) monitoring.  The design is modular:  the 'main board' contains the electronics required for recording to an SD card, managaging a lipo battery, and interfacing with various input / output pins;  sensors are intended to be added via a 'daughter board'.

The electronics for assembling the main board are likely going to be surface mount components -- which tend to be more finicky to assemble than through-hole, for most people.  While it's possible to design a board that would use through-hole components, it would likely be much bulkier and costlier.  Still, it would be nice if communities could make the board themselves ...

On the other hand, the sensor board designs are likely going to be less complex, involving fewer components; and the current approach we're taking to measuring temperature and conductivity -- using a 555 timer and a thermistor with a voltage divider -- are very simple designs, quite amenable to a through-hole board approach.

So, here's the idea we're playing with (and, again, has been the community in various forms, for a while now -- in particular, Katie and Will at Parts and Crafts have already jammed on this idea -- and the initial idea for this approach is due to Jeff Warren):  focus on solidifying the main datalogger board design, with the idea that this design remains relatively 'fixed' for relatively longer periods of time (it's really just a datalogger, after all).  This design is probably easiest to assemble using some manufacturer with the equipment to pump out lots of them at once (though it's still possible to assemble locally, with some practice).  Further: keeping the pinout and interface on this board 'standard' across several versions makes it easier for the wider community to develop for the board.

Meanwhile, focus on making 'daughter board' designs that are as easy as possible to assemble and modify. In the case of the conductivity and temperature sensor we've been working on, this suggested that we make a 'through-hole' version, so that it could be assembled with a soldering iron, and the same parts could be used on abreadboard for prototyping (and adding features!).

For example: the [conductivity + temperature](https://github.com/OpenWaterProject/riffle-plugin-CTL) sensor board we've been developing for the riffle has thus far been a surface mount design:

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/daughterboards_001/assets/riffle-CTL-front.png" width=300>

I recently submitted a through-hole version of this to OSHPark.com (the design is located in the same repository, above):

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/daughterboards_001/assets/daughter-dip-front.png" width=300>

This version should be easy to use as a breakout board with other microcontrollers, while still being easy for folks to assemble themselves ...

Will report back when we get the new boards in!