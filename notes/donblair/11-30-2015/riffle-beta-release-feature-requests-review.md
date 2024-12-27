---
title: "Riffle Beta Release: Feature Requests / Review? "

tagnames: 'air-quality, water-quality, water, datalogger, logging, riffle, logger'
author: donblair
path: /notes/donblair/11-30-2015/riffle-beta-release-feature-requests-review.md
nid: 12464
uid: 43651

cids: 12984,12994,13001,13002,13003,13005,13008,13012,13013,13014,13016,13017,13018,13019,13021,13023,13025,13026,13027,13028,13029,13030,13031,13789,13792

---

![](https://publiclab.org/public/system/images/photos/000/013/105/original/riffle-twohole.png)

# Riffle Beta Release: Feature Requests / Review? 

by [donblair](../../../profile/donblair) | November 30, 2015 23:27

November 30, 2015 23:27 | Tags: [air-quality](../tag/air-quality), [water-quality](../tag/water-quality), [water](../tag/water), [datalogger](../tag/datalogger), [logging](../tag/logging), [riffle](../tag/riffle), [logger](../tag/logger)

----

Hi All!

We're wrapping up a bunch of conversations about the design of the board, in order get a "Beta Release" out to people for testing, hopefully sometime in the next few weeks. I'm right now trying to incorporate the additional features we wanted to get into the Beta release, and 

(Aside: in order to keep with common practice, should we name the Beta version "0.9" something, rather than "1.0"? )

The current main datalogger board features include:

- RTC for accurately measuring the time between 'sleep' cycles
- Lithium battery charging circuitry
- Onboard 'charging status' LED, as well as 'indicator LED' that can be used to provide the user with visual feedback
- an EEPROM memory storage 
- a microUSB port for programming and charging the device
- a 2x7 subset of pins brought out at the end of the device

I'm about to wrap up a design iteration of the board, with the following changes:

- the addition of two M4 screw holes in the board, to allow for mounting
- a rearrangement of the pins brought out at the end of the board
- (potentially) adding a connector for easily attaching AA batteries (another JST connector, perhaps)
- moving all non-throughole parts to the 'top' of the board to allow for less expensive manufacture
- the ability to wake up the microcontroller using the RTC 'alarm' function, so that the device can be put into deep sleep mode

I know there are only a few of you out there who've as yet even been able to *play* with one of these boards, but for those of you who have -- or who've been interested -- are there any particular features you're interested in, that I've missed?

Some example questions:

- What pins do you think *must* be on the 2x7 connector at the end of the board?  This is where any sensors or other devices would connect, and is akin to the double-row 'mounting headers' on an Arduino UNO that are used by Arduino shields.  

- Is I2C EEPROM a useful feature (for storing e.g. device settings, or even data)?  Would e.g. an SPI memory module be a better idea (high capacity, but takes up an additional digital pin)?

The main repo for the Riffel is here: https://github.com/OpenWaterProject/riffle

The latest (unfinished) design is here:

- Eagle board file:
https://github.com/OpenWaterProject/riffle/blob/master/hardware/riffle-0.97.brd

- Eagle schematic:
https://github.com/OpenWaterProject/riffle/blob/master/hardware/riffle-0.97.sch

Cheers!
Don
