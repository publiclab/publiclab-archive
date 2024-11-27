---
nid: 11151
title: Air Quality Indoors and in Tent at LEAFFEST 2014
path: public/static/notes/cversek/09-18-2014/air-quality-indoors-and-in-tent-at-leaffest-2014.md
uid: 48275
tagnames: indoor-air-quality-mapping,vermont,farming,leaffest,pvos,air-quality,riffle,northeast,leaffest2014,riffle-examples
---

# Air Quality Indoors and in Tent at LEAFFEST 2014

AKA "The Rough-looking Muffle Tent Poll"

###What I want to do
I wanted to measure temperature, relative humidity, and carbon dioxide concentration in my tent during the [LEAFFEST 2014](http://publiclab.org/notes/cfastie/08-26-2014/l-e-a-f-f-e-s-t) gathering using the [Riffle-ito](http://publiclab.org/wiki/riffle) data logger board from the Public Lab [Open Water Project](http://openwaterproject.io/).  We are half-seriously calling this a prototype for the MUFFLE (Mushroom Urban Farming Factors Logger Electronics) project, a spoof on the name RIFFLE (Remote Independent Friendly Field Logger Electronics). Why? See below...

###My attempt and results

[![IMAG0230.jpg](https://i.publiclab.org/system/images/photos/000/006/855/medium/IMAG0230.jpg)](https://i.publiclab.org/system/images/photos/000/006/855/original/IMAG0230.jpg)

Here are the parts that I cobbled together, from the left:  an Enercell 9V alkaline battery; one of the early riffle-ito (Arduino compatible) prototypes which has an [ATmega328P MCU](http://www.atmel.com/devices/atmega328p.aspx), [DS3231 real-time clock](http://www.maximintegrated.com/en/products/digital/real-time-clocks/DS3231.html), and microSD card slot; a hand-crafted sensor pin breakout board with screw terminals; a Riffle project add-on sensor board with a surface-mounted [SHT21 humidity and temperature sensor](http://www.sensirion.com/en/products/humidity-temperature/humidity-sensor-sht2x/) which communicates via I2C; a [SainSmart MH-Z14 NDIR carbon dioxide sensor module](http://www.sainsmart.com/sensors/eco/sainsmart-mh-z14-infrared-carbon-dioxide-sensor-module-for-arduino.html) which speaks serial UART among other protocols and gives calibrated values in ppm; and a [4x4 in. Carlon marine conduit box](http://www.homedepot.com/p/Carlon-4-in-x-4-in-Junction-Box-E987NR/100404095).  Most of the wiring and soldering was completed in my home lab in Providence before the trip up to Salisbury, VT, but I had to fix some flaky connections on the breadboard at the last moment.  On the other hand, the majority of the Arduino firmware was hacked together that Saturday night in the chilly garage while others were merry making music by the fireplace with some traditional instruments and the [Coqui](http://pvos.org/coqui/) conductivity probe by poking at some fruits, vegetables, and fungi.  Much thanks goes to Don Blair for pioneering the accessible riffle-ito platform and to Rui Wang who patiently helped me debug a problem that we had with using the Arduino SoftwareSerial library - all while dealing with my failing laptop onto which I had previously spilled my beer.  I'd love for this note to be truly open source, but unfortunately my dying laptop may have swallowed the exact version of the firmware we used - which was badly in need of a redo anyway ;)

[![IMAG0219.jpg](https://i.publiclab.org/system/images/photos/000/006/856/medium/IMAG0219.jpg)](https://i.publiclab.org/system/images/photos/000/006/856/original/IMAG0219.jpg)

After the prototype was assembled and running, I paraded it from the drafty garage into the fireplace-warmed living room, and back to the garage (I forgot my flash light), and then back into the living room, and then outside into my tent.  You can see the effects of my wandering between climatic zones within the first 15 minutes of the data record below.  The 9V battery actually lasted for 2 hours, but I am showing a cleaned-up version of the first hour of the record.

[![Temp-RH-CO2_time_series.png](https://i.publiclab.org/system/images/photos/000/006/863/medium/Temp-RH-CO2_time_series.png)](https://i.publiclab.org/system/images/photos/000/006/863/original/Temp-RH-CO2_time_series.png)

<a href="https://i.publiclab.org/system/images/photos/000/006/862/original/Temp-RH-CO2_time_series.svg"><i class="icon icon-file"></i> Temp-RH-CO2_time_series.svg</a>

If you are interested, the raw data and Python plotting code can be found in this [repository location](https://github.com/p-v-o-s/muffle/tree/master/data/2014-09-14_LEAFFEST_tent_poll).

###Questions and next steps
During the wandering between rooms, the sensors show an interesting dynamic response: RH seems to change quickly and discontinuously at inflections of the temperature, carbon dioxide readings lag behind temperature and RH changes.  As might be expected, the carbon dioxide levels spike some time after entering the room with the fireplace.  We should devise some experiments to more carefully measure sensor dynamics in these rapidly changing environmental conditions.  Perhaps with some more careful documentation procedures and an LCD readout for user feedback, a similar portable logger system can be used to sniff out indoor air quality issues.

During the period when I am sleeping peacefully in my tent (after ~25 mins), the RH and CO2 readings seem to fluctuate in a correlated way.  Could this be caused by breathing patterns?  Might this be a interesting way to monitor sleeping behavior and metabolism? 

The Riffle was designed to be a low power remote data logger which fits inside a plastic water bottle.  How should we optimize the Muffle for cost and function in an indoor farming context where we probably have access to mains power and maybe even a wireless network?

###Why I'm interested
Eventually, I want to make robust data logging and web-connected open source sensor devices that are targeted to growroom environments, especially urban mushroom farms - like the startup [Mycopolitan Mushroom Company](http://mycopolitan.com/) that my brother is co-founding.  The parameters of interest are similar to indoor air quality monitoring, but the high humidity and spore-laden environment of mushroom farms is particularly challenging for long-term sensor installations.  Temperature, relative humidity, carbon dioxide, oxygen and particulate concentration (increasing during fungal sporulation) are possibly the most interesting factors to investigate in these semi-controlled environments.