---
title: "IR/Visible light camera dreams & parts"

tagnames: 'near-infrared-camera, ircam, near-ir'
author: mathew
path: /notes/mathew/3-11-2013/irvisible-light-camera-dreams-parts.md
nid: 6294
uid: 4
cids: 4016,4017,4021,4029,4038,4138,4139,4142,4149,4474
---

![](https://publiclab.org/sites/default/files/2013-03-11_18-45-18_446.jpg)

# IR/Visible light camera dreams & parts

by [mathew](/profile/mathew) | March 12, 2013 02:31

March 12, 2013 02:31 | Tags: [near-infrared-camera](/tag/near-infrared-camera), [ircam](/tag/ircam), [near-ir](/tag/near-ir)

----

I've been trying to envision what an Visible Light/IR camera would look like as a product.  the sketch above is of a weatherproof tupperware-like case with a battery holder and a means of wiring external sensors.

####Cases####
I can't find any outdoor-specific cases for the Pi, and none I'd like to mount a camera to.  thats why I envisioned my own.  The bottom part is easy, as its made out of acrylic and could be glued up by hand.  the top part I envision as polypropylene, like tupperware, because then it could have hinges.  A part like that would need to be molded.  For now I'll stick to tupperware, the [cases on the raspberry pi site](http://www.raspberrypi.org/archives/tag/cases) weren't intriguing enough.

####Camera strategies:####

#####Camera Pairs#####
Currently, Public Lab IR/Visible light cameras are [created with a pair of cameras](/notes/donblair/3-5-2013/late-night-ircam-hack). 

<b>Advantages</b> This is awesome for photographing things that are at enough of a distance to ignore the different lens positions, but not all that great up close.  Its also as fast as the lens, and webcams are cheap.  Can do video.

<b>Disadvantages</b> Aligning two cameras while prototyping can be tough.  Up close objects like bugs and animals--[which are great to look at in Near IR](https://edit.ethz.ch/kp.ipw.agrl/people/michaemi/Insect)-- are hard to photograph with two lenses. keeping the settings and focus of two cameras in synch can be hard.

<b>[Raspberry Pi foundation has demoed two of their upcoming camera boards running in 720p video](http://www.raspberrypi.org/archives/3376)</b>

#####Single Camera with filter switch#####
I'm going to pursue a different strategy than camera pairs, using a solenoid-driven filter switcher like those found in security cameras.  [Here is one for $50, half way down the page](http://www.naturalpoint.com/optitrack/products/v120-slim/buy.html).  I'm seeking a cheaper one, [they're available in quantity for $2 or less](http://www.made-in-china.com/showroom/zonhensolenoid/product-detailToWnPzuVsvRL/China-Dual-Filter-Switch-for-Monitor-IR-Cut-SZHS-0505-ZHS-.html)  The term I've found to search is "Dual-filter swing solenoid."

<b>Advantages</b>
potentially cheaper than using two cameras, no alignment problems, can take close-up images.  Will make a genuine mechanical clicking sound when used.

<b>Disadvantages</b> less than half as fast- has to take two images every time.  Unlikely to be able to do video.  Introduces another circuit into the control system.


####Raspberry Pi as a camera####
The [Rasberry Pi](http://raspberrypi.org) is a powerful board for the price, but it leaves several things to be desired as a camera platform.  

The Pi has no clock-- it therefore can't keep track of time when turned off, which is a pain because photos can end up improperly time-stamped.  Without a clock the Pi also can't work for time lapse in the field without a really, really hefty battery.

the Pi is particularly finicky about power and needs a steady power supply.  A regulator is needed to attach a battery. lack of a regulated power supply can make attaching sensors difficult.

The Pi doesn't have any power protection on its GPIO, so plugging in sensors is potentially dangerous.

There are a few extension boards to deal with these problems.  [2-Watt Elements Raspy Juice](http://www.2wattelements.com/) is promising because it combines power regulation and a real-time clock with an ATmega 168 (like the older arduinos), solving all these issues.  But its $42 for some otherwise quite cheap components.

here are [two](http://www.abelectronics.co.uk/products/3/Raspberry-Pi/15/RTC-Pi-Real-time-Clock-Module) [other](http://www.yadom.fr/rpi-shield/carte-rpi-rtc.html) RTCs.

The [Slice of Pi](http://shop.ciseco.co.uk/k002-slice-of-pi-o/) is the cheapest ad-on for extended I/O capabilities but doesn't add power management or an RTC, which are what we really need for a camera.

A [full list of RaspPi expansion boards is here.](http://elinux.org/RPi_Expansion_Boards)