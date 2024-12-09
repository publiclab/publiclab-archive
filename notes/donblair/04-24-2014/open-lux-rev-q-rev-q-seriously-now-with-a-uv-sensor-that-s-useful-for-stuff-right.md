---
title: Open-Lux:: REV-Q! (REV Q. Seriously?) Now with a UV sensor. That's useful for stuff, right?
tagnames: thermal-flashlight, openlux
author: donblair
path: /notes/donblair/04-24-2014/open-lux-rev-q-rev-q-seriously-now-with-a-uv-sensor-that-s-useful-for-stuff-right.md
nid: 10352
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/003/851/original/open-lux-revq-osh-front.png)

# Open-Lux:: REV-Q! (REV Q. Seriously?) Now with a UV sensor. That's useful for stuff, right?

by [donblair](../profile/donblair) April 24, 2014 04:31

April 24, 2014 04:31 | Tags: [thermal-flashlight](../tag/thermal-flashlight), [openlux](../tag/openlux)

----

###What I want to do

Jeff had asked:  does the Open-Lux design allow for multiple configurations, so that we don't need to place all the components (which, frankly, have grown to cover a slightly scattered array of use-cases),  all the time?  Which prompted me to reconsider the design a bit.


###My attempt and results

I'm not sure y'all are ready for this level of awesome.

So first, I realized -- what about UV?  I had placed sensors for RGB and NIR, but not UV!  So I found a nice [UV sensor on Sparkfun](https://www.sparkfun.com/products/12705), and promptly downloaded the (open source) schematic.  The [datasheet](https://cdn.sparkfun.com/datasheets/Sensors/LightImaging/ML8511_3-8-13.pdf) for the sensor shows that it has the following response to UV light:

[![ML8511-characteristics.png](https://i.publiclab.org/system/images/photos/000/003/847/medium/ML8511-characteristics.png)](https://i.publiclab.org/system/images/photos/000/003/847/original/ML8511-characteristics.png)

But then I recalled (vaguely -- then Mathew confirmed this) that UV emission was less straightforward than RGB or NIR.  So then I thought: maybe we should allow for some alternative source of illumination that is 'behind' the OpenLux.  

Then I thought -- well, gosh, shouldn't we also be worried that our source of emission (LEDs on the board, say) are really close to our sensors, which are on the board right next to the LEDs? 

So *then* I thought:  **we can do something about this.**

Check it out:

[![open-lux-revq-osh-front.png](https://i.publiclab.org/system/images/photos/000/003/848/medium/open-lux-revq-osh-front.png)](https://i.publiclab.org/system/images/photos/000/003/848/original/open-lux-revq-osh-front.png)

You see those lines of headers that are in the middle of the ring of LEDs?  Those allow for **swap-able shields**!

**Furthermore**: (and I'm going to continue with arbitrary bold-face and italics emphasis):  by placing these shields at the same height above the shield as an (as-yet-imaginary) 3D case, we can *collimate* the light from LEDs on the board, and (somewhat) avoid the LED light entering the sensors directly -- it will have to reflect off the surface being sensed before the sensor will register it. Whee!

So I re-positioned the IR LEDs so that they are on the same ring as the RGB LEDs.  The idea is that the OpenLux enclosure will have a circular hole whose diameter matches the *outer* diameter of this ring of LEDs; and the 'sensor shields' will consist of PCBs whose diameter matches the *inner* diameter of that same ring.

For example, here's the "UV-VIS-NIR" shield:

[![open-lux-rgb-nir-uv-stalk-osh-front.png](https://i.publiclab.org/system/images/photos/000/003/849/medium/open-lux-rgb-nir-uv-stalk-osh-front.png)](https://i.publiclab.org/system/images/photos/000/003/849/original/open-lux-rgb-nir-uv-stalk-osh-front.png)

Note that it has two parallel header rows.  These headers fit into one pair of headers that are inside the LED ring; the other pair of headers inside the ring allows us to place a similar shield on the bottom of the OpenLux, facing in the opposite direction, to allow for albedo measurements.

Also note: the spacing between the header rows allows us to situate this breakout board across the 'divider midline' of a typical breadboard, making it easy to play around with this breakout board with other microcontrollers.

Finally, note:  there's a crescent-shaped gap in the top of the breakout board.  This is to accommodate the hole that is now drilled into the main OpenLux board -- so that if we do e.g. have a UV lamp or e.g. a laser handy, we can situate the lamp / laser behind the OpenLux, shine it through this hole, and still have the sensor register the light that resultant light reflecting off a surface in front of the OpenLux.  

**What about the thermal flashlight use-case?** -- you ask, with mild impatience.  We've got you covered:

[![open-lux-thermal-osh-front.png](https://i.publiclab.org/system/images/photos/000/003/850/medium/open-lux-thermal-osh-front.png)](https://i.publiclab.org/system/images/photos/000/003/850/original/open-lux-thermal-osh-front.png)

For the thermal flashlight, it's not clear that we even need a breakout board -- the relevant sensor has long-wire pins, and they might readily fit in the headers on the OpenLux, directly.

###Questions and next steps

The more I've been thinking about it -- and I may be in my own little electronics design world, here, but I'm enjoying it for the time being -- it seems to me that it's nice to have a basic little Arduino-compatible board that comes with a ring of RGB LEDs, a buzzer, and allows for serial connections, along with a few analog and digital pins; as well as an optional LCD display, storage to a micro SD card, and a few buttons.

We can now use open hardware to make measure important stuff -- like temperature and optical characteristics of things we care about.  But historically, the devices that have been designed for this purpose have tended to focus on generating tables of numbers -- a time series of temperature data, say -- in ways that aren't so engaging to folks who aren't super excited about 'tables of numbers' (I count myself among such folks).  This is a shame.  

Note that in every film depiction of a computer or electronics device -- watch any science fiction film, spy film, or even mundane soap opera -- computer interfaces in these films make "bloop bleep BLOOP" sounds, or have flashing, blinky lights.  This is because 99% of humanity doesn't respond to a list of floating point numbers.  We want something fun to look at / listen to -- and why not?  If such visual / auditory presentations can facilitate our cognitive processes when we're in the course of doing serious science, then it's a shame not to use them.

The more I think about it, I like the idea of using a circle of LEDs to a) illuminate a sample, and b) indicate the 'level' of a particular sensor reading.  A circle of 10 LEDs is nice, because when we map some sensor value onto a "1..10" scale, having the corresponding LEDs light up in a circle allows us to see, immediately the extent of the scale -- we can see, even in the dark, what "10" would mean, by following an implied gap in the arc of lights.  That's nicely intuitive. 

With the analog, digital, and serial breakouts, we could use this basic board as a way of displaying all sorts of quantitative information in intuitive ways.  We can even use the buzzer to play back the most recent sensor values -- e.g., if the temperature values over the last two days were fairly constant, we could easily discern this from a relative monotone; if they were quite variable, the variability in tone would also be easy to detect.

###Why I'm interested

I'm obsessed with this OpenLux idea. Clearly.