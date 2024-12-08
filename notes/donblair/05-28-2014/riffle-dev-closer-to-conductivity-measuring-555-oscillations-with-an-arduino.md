---
title: Riffle dev: 'Closer to Conductivity: Measuring 555 Oscillations with an Arduino'
tagnames: water-quality, riffle, open-water, 555
author: donblair
path: /notes/donblair/05-28-2014/riffle-dev-closer-to-conductivity-measuring-555-oscillations-with-an-arduino.md
nid: 10515
uid: 43651

---

# Riffle dev: 'Closer to Conductivity: Measuring 555 Oscillations with an Arduino'

by [donblair](../profile/donblair) May 28, 2014 18:23

May 28, 2014 18:23 | Tags: [water-quality](../tag/water-quality), [riffle](../tag/riffle), [open-water](../tag/open-water), [555](../tag/555)

###What I want to do

As explained in an earlier research note, we're looking to [measure the conductivity of water using a 555 timer](http://publiclab.org/notes/donblair/05-28-2014/riffle-dev-fun-w-five-five-fives).  The ideal frequency range of our setup is around 1 kHz, and we're going to need to be able to measure oscillations of this frequency with an Arduino -- which might require some tricks.  I'm going to build this research note out as I go along, but for now, I'm just collecting a bunch of "Reference" links online that seemed relevant (sorry it's all jumbled, for now) ...


[![555timer.png](https://i.publiclab.org/system/images/photos/000/004/486/medium/555timer.png)](https://i.publiclab.org/system/images/photos/000/004/486/original/555timer.png)

([Source](http://www.tingiant.com/blog/wp-content/uploads/2013/02/555timer.png) for this fantastic depiction of the 555's internals.)

[UPDATE]

I think I've got working code now!  I'll need to come back and document this more fully, but the wiring is more or less as described in the linked-to-research-note above, and the code is fairly well commented, here:

https://gist.github.com/dwblair/30c3378906cd15288e22

### References

https://www.pjrc.com/teensy/td_libs_TimerOne.html

http://arduino.cc/en/Reference/attachInterrupt

http://techosapien.blogspot.com/2010/02/arduino-digital-pulse-counter.html

http://www.bot-thoughts.com/2010/09/arduino-avr-analog-comparator.html

http://www.gammon.com.au/forum/?id=11504

http://electronics.stackexchange.com/questions/57130/arduino-alternate-pwm-input-method

http://arduino.cc/en/Reference/pulseIn

https://www.inkling.com/read/arduino-cookbook-michael-margolis-2nd/chapter-12/recipe-12-3

http://www.fiz-ix.com/2012/01/introduction-to-arduino-interrupts-and-the-atmega328-analog-comparator/

https://plus.google.com/photos/albums/p39ra64jjmluej5eucqhuf31naffh0ori?pid=6017069827728718642&oid=105318100930050285890

http://electronics.stackexchange.com/questions/76723/how-to-find-electrical-conductivity-from-frequency-in-my-plc-project
http://www.emesystems.com/OL2mhos.htm

http://www.practicalmaker.com/ec/diy-ec-probe
or this http://www.practicalmaker.com/products/arduino-shields/bnc-sensor-shield-assembled

RC time:
http://www.instructables.com/id/Arduino-Basics-RCtime/

http://students.washington.edu/jojo83/ground_moisture_sensor.html

1 μS/cm is then equivalent to about 0.64 mg of NaCl per kg of water.

two metal screws about a bottle cap away in water seem to have a resistivity of ~ 160 kOhms

"151" cap is 0.015 uF