---
title: "Riffle-328p version 0.96 :)"

tagnames: 'water-quality, riffle, open-water'
author: donblair
path: /notes/donblair/03-07-2015/riffle-328p-version-0-96.md
nid: 11662
uid: 43651
cids: 11291,11292,11295,11400,11511
---

![](https://publiclab.org/public/system/images/photos/000/009/215/original/riffle-0.96-top.png)

# Riffle-328p version 0.96 :)

by [donblair](/profile/donblair) | March 07, 2015 19:17

March 07, 2015 19:17 | Tags: [water-quality](/tag/water-quality), [riffle](/tag/riffle), [open-water](/tag/open-water)

----

Quick update on the latest design for the Riffle ...

But first, a quick review:

Several of us have been working on a design for a low-power, open source datalogger for use in environmental monitoring for a while now.  This idea was sparked by a suggestion from Mark Green that we might be able to develop a device that would make it far easier and less expensive to collect hydrological data than is possible with the current array of proprietary sensors.

After a lot of discussions with a lot of clever people, Ben Gamari and Laura Dietz decided to build off the already-flourshing McHck project, and designed a board that they called the Riffle.  The design, based on a solid, well-supported ARM microcontroller -- the Freescale MK20DX128, which has lots of features nicely suited to low-power computing, is nicely documented here: https://github.com/bgamari/riffle, and was initially intended to be used in a PVC enclosure with an elegant, custom 3D printed sensor-array cap (though the form factor of the datalogger itself is so small that it could easily be inserted in any number of off-the-shelf enclosures).  Ben and Laura were even able to create a browser-based system for reading data from the device, graphing it, and setting parameters, and had developed solid firmware for capturing analog readings, using I2C devices, and the basics of what one needs for field data logging.  This remains an exciting platform to explore in the near future, and I hope to write more about it in research notes soon. I'm going to refer to this design as the 'Riffle-K20'. 

Meanwhile, in parallel, we also decided to begin exploring a Riffle design that leverages the Arduino Uno platform, using hardware that leverages the firmware libraries developed for the Atmel 328p -- the chip around which the Arduino Uno is based.  This chip, the 328p, is not nearly as advanced as that used in the Riffle-K20 design; it is not even the most advanced chip supported by the Arduino IDE (the popular way of programming an Arduino).  But the 328p has the advantage of being very well supported by a large online community, with libraries that have been 'battle tested' and documented to an enormous extent.  As a way of introducing open source hardware into the environmental community, then, relying on well-established and supported libraries seems like a useful, parallel approach.  I'm going to call it the "Riffle-328p" (I'd been calling it the "Riffle-ito", before). 

After a few iterations, lots of feedback from many people -- and a shift to considering the use of recycled water bottles as enclosures! -- we've gotten the Riffle-328p to "version 0.96", visualized in PCB mockups from OSHPark:

[![riffle-0.96-top.png](https://i.publiclab.org/system/images/photos/000/009/210/medium/riffle-0.96-top.png)](https://i.publiclab.org/system/images/photos/000/009/210/original/riffle-0.96-top.png)

[![riffle-0.96-bottom.png](https://i.publiclab.org/system/images/photos/000/009/211/medium/riffle-0.96-bottom.png)](https://i.publiclab.org/system/images/photos/000/009/211/original/riffle-0.96-bottom.png)

The schematic for the board is here:

[![riffle-0.96-schem.png](https://i.publiclab.org/system/images/photos/000/009/212/medium/riffle-0.96-schem.png)](https://i.publiclab.org/system/images/photos/000/009/212/original/riffle-0.96-schem.png)

Here are the core features of the current design:

- It is programmed as an Arduino UNO in the Arduino IDE, and thus should be compatible with most libraries used on the Arduino UNO;
- The power circuitry is designed in such a way that it should allow for low power usage when sleeping.  Without additional sensors attached, we're estimating that it should require tens of micro amps;
- It contains an RTC (real time clock) for keeping track of the time while asleep, to allow for accurate timestamps on sensor data;
- It contains a microSD holder and on-board eeprom memory, for data storage;
- It has an on-board voltage divider circuit for monitoring battery level;
- It has on-board Li-ion battery charging circuitry, and a JST connector for a Li-ion battery (it also has an additional battery port to allow for different battery chemistries)
- It is designed to have a width of 18 mm, so that it will fit through a standard 20 mm diameter water bottle mouth, in order to use a recycled water bottle as an enclosure
- It is programmed and the battery can be charged via a microUSB cable (like the Riffle-K20, and instead of requiring an additional FTDI cable, as in the previous Riffle-328p versions)

The most recent shift in the design, however, concerned the consideration of adding radio to the project.  On the advice of George Gallant and Rui Wang, I'd looked into placing an RFM69 radio chip on the board, as is done with in the fabulous 'Moteino' project. After fiddling with various configurations of pins, I ended up deciding that rather than place the radio on the main Riffle board, I would simply break out all of the pins required in order to connect to a radio externally.

I'm really excited about the result, because I think this makes the Riffle-328p a more versatile device than it had been previously, and easier to develop around.  Now, the board simply has one, large connector on the end, with the following pins exposed:

[![rifflePinoutCloseup.png](https://i.publiclab.org/system/images/photos/000/009/213/medium/rifflePinoutCloseup.png)](https://i.publiclab.org/system/images/photos/000/009/213/original/rifflePinoutCloseup.png)

What you're looking at in that above schematic is the 2x7 connector at the end of the Riffle-328p board.  

- The first thing you might notice is this odd spaghetti structure in the top left.  This is basically a 'power switch' so that when we're powering add-on sensors, which have their own drain on the battery, we can shut them all off when we're asleep (this was Ben's clever idea, originally implemented in the Riffle-K20).  
- On the left column of pins we have all of the pins necessary for talking to our latest design for the basic contingent of sensors for water monitoring:  temperature, conductivity, depth, and light level:  D2 and D3 as hardware interrupt pins for measuring frequency counts (we're using a 555 timer to measure conductivity and depth), A0 as a 10 bit ADC for measuring thermistor values (temperature), and SDA and SCL (the 'I2C' bus) for interfacing with one of the many light sensors out there that use the I2C protocol.  
- On the right column,  we're including the SPI bus interface (MISO, MOSI, SCK) that the RFM69 radio (as well as many other sensors) speak; as well as RX and TX to expose the serial interface, and the raw voltage coming directly from the battery (rather than the regulated 3.3V that is controlled by the 'power switch' in the other column).  

As an example of using these pins for fun things, I quickly whipped up a design for a high-resolution (16 bit), 4-channel ADC and environmental parameter plug-in board, which cobbles together a bunch of sensors and chips from various nice open source boards on Sparkfun and Adafruit:

[![riffle-thpr-v0.1-board.png](https://i.publiclab.org/system/images/photos/000/009/214/medium/riffle-thpr-v0.1-board.png)](https://i.publiclab.org/system/images/photos/000/009/214/original/riffle-thpr-v0.1-board.png)

Here, we've got:

- an RFM69 radio on the back of the board;
- four screw terminals for measuring voltages at 16 bit resolution (here, I'm imagining using this to measure voltages from devices like the DustTrakII, a set of temperature probes, etc)
- an SHT21 humidity sensor
- a BMP180 pressure sensor; and 
- a TLS2561 light sensor

This would be useful as a stand-alone, battery-powered monitoring node, which could also broadcast its values back to e.g. a Raspberry Pi that has a Moteino on a USB port.  

Because we are also exposing the serial interface via two additional screw terminals, we could alternatively use RX and TX to talk to Adafruit's nice new [FONA](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/overview) GSM modem, in lieu of the RFM69, to get our data online.  

So, I'm excited about this version of the design!  I'm hoping that providing Eagle CAD files like the above for these 'breakout boards' might allow folks to consider their own constellations of sensors, useful for particular projects.  

There are still issues to work out in the layout -- I'm still learning the basics of PCB design, and there are plenty of things that I think will be appear obviously sub-optimal for someone who has experience -- but I'm sure we'll get to a good design, collectively, bit by bit!

I'm planning to hit 'print' on the Riffle-328p v-0.96 PCB within the day, unless someone sees something obviously wrong with it ... 

Cheers!
Don
