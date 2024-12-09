---
title: 'Thermal Flashlight REVA -- first tests'
tagnames: thermal-photography, arduino, thermal-flashlight, thermal-fishing-bob, pcb
author: donblair
path: /notes/donblair/03-02-2014/thermal-flashlight-reva-first-tests.md
nid: 10094
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/003/111/original/thermalll.png)

# Thermal Flashlight REVA -- first tests

by [donblair](../profile/donblair) March 02, 2014 00:12

March 02, 2014 00:12 | Tags: [thermal-photography](../tag/thermal-photography), [arduino](../tag/arduino), [thermal-flashlight](../tag/thermal-flashlight), [thermal-fishing-bob](../tag/thermal-fishing-bob), [pcb](../tag/pcb)

----

###What I want to do

Test out a design for the Thermal Flashlight project.  

To measure from the IR sensor, I'm using the Adafruit library, here: https://github.com/adafruit/Adafruit-MLX90614-Library

The current firmware on the thermal flashlight device is here:
https://gist.github.com/dwblair/9297914

###My attempt and results

A big shout out to Rui Wang of http://rayshobby.net/ -- not only did I base my thermal flashlight design on the innards of his awesome (open source) [SquareWear](https://github.com/rayshobby/squarewear) project, but he showed me how to assemble the resultant board (for which he had most of the components readily available) -- he did it nearly completely himself, including working around some goof-ups in my design.

Also -- thanks to Jake Wheeler of [Hacker Farm](http://hackerfarm01007.org) for sifting through HF's stockpile of electronics on short notice, and finding the crucial 32u4 processor part for this device!

And the result of all of this collaboration is ... *it works!*

Here's a video that describes the design, and shows a basic demo of the flashlight in action:

<iframe width="560" height="315" src="//www.youtube.com/embed/fVsut3pU_j8?rel=0" frameborder="0" allowfullscreen></iframe>

Issues with the design (to be fixed in the next iteration):

- The "reset" pin on the ISP programmer part of the board (necessary to load the bootloader onto the chip) was disconnected -- Rui found a way around it by connecting to the RESET pin on the reset button

- I left solder mask on top of the IR sensor pads (was able to scrape it off).  Need to fix that.
###Questions and next steps

- Need to write more sophisticated code for testing out the board, and try it out with the web app that has been written for this purpose. 

- Test out the geiger counter-like buzzer. 

###Why I'm interested

A thermal flashlight device would be a super cool way to assess e.g. thermal leaks in the home. 