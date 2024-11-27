---
nid: 9406
title: Thermal Fishing Bob Barnraising!!
path: public/static/wiki/thermal-fishing-bob-barnraising.md
uid: 8
tagnames: thermal-fishing-bob
---

# Thermal Fishing Bob Barnraising!!

We worked on a version of thermal fishing bob described here:

[http://publiclab.org/wiki/thermal-fishing-bob](http://publiclab.org/wiki/thermal-fishing-bob)

We found there were problems with the circuit diagram shown in this wiki page.

This version uses a 10K Thermistor from Ada Fruit:

[http://www.adafruit.com/products/372](http://www.adafruit.com/products/372)
It comes with a 1% 10K resistor which you can use as calibration or for a resistor divider

Additional parts:
* 1 [common-anode RGB LED](http://www.sparkfun.com/products/10820)
* wire
* [a breadboard](http://www.sparkfun.com/products/7916) or circuit board & soldering eqmt.
* [Arduino](http://arduino.cc)
* 9v battery and holder

Here is our first draft of the circuit board:
[![Thermal_Fishing_Bob.jpg](https://i.publiclab.org/system/images/photos/000/001/738/medium/Thermal_Fishing_Bob.jpg)](https://i.publiclab.org/system/images/photos/000/001/738/original/Thermal_Fishing_Bob.jpg)

Following the excellent [Ada Fruit instructions](http://learn.adafruit.com/thermistor/using-a-thermistor) changed the board to stabilize the voltage through the circuit:

[![Screen_Shot_2013-10-08_at_3.04.17_PM.png](https://i.publiclab.org/system/images/photos/000/001/813/medium/Screen_Shot_2013-10-08_at_3.04.17_PM.png)](https://i.publiclab.org/system/images/photos/000/001/813/original/Screen_Shot_2013-10-08_at_3.04.17_PM.png)

Here is the arduino sketch:
<script src="https://gist.github.com/dwblair/7277807.js"></script>

We had some successful tests:

<object width="480" height="360"><param name="movie" value="//www.youtube.com/v/ISAgoMXEfDw?version=3&amp;hl=en_US&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="//www.youtube.com/v/ISAgoMXEfDw?version=3&amp;hl=en_US&amp;rel=0" type="application/x-shockwave-flash" width="480" height="360" allowscriptaccess="always" allowfullscreen="true"></embed></object>

[![2013-10-05_20.46.08.jpg](https://i.publiclab.org/system/images/photos/000/001/779/medium/2013-10-05_20.46.08.jpg)](https://i.publiclab.org/system/images/photos/000/001/779/original/2013-10-05_20.46.08.jpg)


[![IMAG2366.jpg](https://i.publiclab.org/system/images/photos/000/001/793/medium/IMAG2366.jpg)](https://i.publiclab.org/system/images/photos/000/001/793/original/IMAG2366.jpg)

The circuit inside its repurposed Kool-Aid enclosure.

[![IMAG2367.jpg](https://i.publiclab.org/system/images/photos/000/001/794/medium/IMAG2367.jpg)](https://i.publiclab.org/system/images/photos/000/001/794/original/IMAG2367.jpg)

We stabilized it with styrofoam cups.

[![IMAG2370.jpg](https://i.publiclab.org/system/images/photos/000/001/795/medium/IMAG2370.jpg)](https://i.publiclab.org/system/images/photos/000/001/795/original/IMAG2370.jpg)

And deployed it in the bathtub.