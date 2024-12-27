---
title: "Riffle Datalogger: quick development snapshot"

tagnames: 'arduino, water-quality, riffle, open-water'
author: donblair
path: /notes/donblair/08-28-2015/riffle-datalogger-quick-development-snapshot.md
nid: 12178
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/011/313/original/RiffleInBottle.png)

# Riffle Datalogger: quick development snapshot

by [donblair](../../../profile/donblair) | August 28, 2015 14:43

August 28, 2015 14:43 | Tags: [arduino](../tag/arduino), [water-quality](../tag/water-quality), [riffle](../tag/riffle), [open-water](../tag/open-water)

----

## Background

This is an attempt to take a quick snapshot of the Riffle open hardware water monitor project, and to recap some of the history of its development, for context. (I'll be focusing pretty narrowly here on the development of the datalogger itself -- there have been a lot of really great discussions and projects connected to the hardware, but it's too much for one research note!)

The overall goal of the project was to develop an open hardware datalogger capable of monitoring basic water parameters like temperature, conductivity, depth, and turbidity -- useful for water monitoring projects.  These are the parameters that hydrologists and community water monitoring groups often use as ways of determining changes to and impacts on the local water ecosystem; but the current technologies used for these purposes are typically both very expensive ($1000's of dollars) and don't provide easy access to the data collected (special software / hardware is often required). The initial idea was formulated by Mark Green, a hydrologist at Plymouth State in NH.

### Riffle-ARM

The initial prototype for the device, designed by Ben Gamari and Laura Dietz, was an [ARM-based board](https://github.com/bgamari/riffle). 

This device uses an ARM chip (the type of chip used in many phones and tablets tehse days); ARM is likely the bright future of low-power, low-cost microcontrollers.  Ben's design combines pressure, radio, an SD card, serial output, and a conductivity measurement on a compact board, and was designed to be housed inside a PVC container, with an additional 'daughter board' placed outside the PVC and sealed inside epoxy.  Stay tuned for more developments on this board, or check out the above-linked repository to contribute!

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/datalogger_001/assets/ben-riffle-front.png" width=300>

### Riffle-328

The only downside of an ARM-based device at the moment is that it isn't quite compatible with the Arduino IDE, and so it's not quite as accessible as an Arduino-like device would be.  So, in parallel, I set out to develop a device based around the Atmel328p -- the same chip used in the Arduino UNO -- in such a way that it could be programmed via the Arduino IDE.  

The first attempt (with much help from Ben and many others), was called the [Riffle-ito](https://github.com/dwblair/riffle-ito).  It relied on using an FTDI cable for programming, recorded values to a local SD card, and connects to 'daughter boards' for measuring conductivity, temperature, and the like.  The particular shape of the board was designed to fit inside a typical water bottle, in order to leverage the existence of this ubiquitous, waterproof enclosure. 

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/datalogger_001/assets/riffle-ito-front.png" width=300>

### Riffle 0.96

In [this version](https://github.com/OpenWaterProject/riffle/blob/master/hardware/riffle-0.96.sch), we decided to forgo the FTDI cable (expensive, and requires keeping track of yet another object), and include USB capability on the device itself.  This new version of the Riffle has the following features:

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/datalogger_001/assets/riffle-0.96-board.png" width=300>

- a real time clock, for keeping track of the time while the device is asleep (along with a small battery dedicated to the real time clock, so that we still track time when the device is without main battery)
- an on-board lipo battery controller / charger
- a microSD card
- a microUSB port through which the device can be powered / programmed / recharged
- 14 breakout pins located on the end of the board, allowing for connectivity to a wider range of devices (SPI, UART, I2C)
- an on/off switch

We made several of these devices recently, and they seem to work pretty well! One trouble with the board, however, is that the microUSB header isn't as solidly connected to the board as one would like -- we've had a few break off, and it's hard to solder by hand.  

### Riffle-0.96-USB


In [this version](https://github.com/OpenWaterProject/riffle/blob/master/hardware/riffle-0.96-usb-tab.sch) the microUSB header to use the one used in the Arduino Leonardo, which has some features allowing for solder to go through the board and fix the part to the board more securely.  We've ordered a few of these, and we'll see soon how well they work.

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/datalogger_001/assets/riffle-0.96-usb-front.png" width=300>


### Next steps

In parallel, we've been working on the 'sensor boards' associated with the Riffle data logger: boards for conductivity and temperature, thus far, but with depth and conductivity planned soon.  Will try to cover this in another research note ASAP!