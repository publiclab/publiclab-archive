---
title: "Portable Energy Scavenging Kit 0.1a"

tagnames: 'pvos, portable-energy-scavenging-kit'
author: donblair
path: /notes/donblair/12-17-2012/portable-energy-scavenging-kit-01a.md
nid: 5229
uid: 43651

cids: 2754,2768,2790,2791,2806,2809,2811

---

![](https://publiclab.org/sites/default/files/escavenger_cef08a60dc_0.jpg)

# Portable Energy Scavenging Kit 0.1a

by [donblair](../../../profile/donblair) | December 17, 2012 23:57

December 17, 2012 23:57 | Tags: [pvos](../tag/pvos), [portable-energy-scavenging-kit](../tag/portable-energy-scavenging-kit)

----

Quick update on an early prototype of the "Portable Energy Scavenging Kit", after a intense hackathon this weekend with Ben Garmari:

This first version of the kit is able to charge phones that require 5 Volts, 500 mA, and it can also power a small LED light (suitable for lighting a small space, or usable as a flashlight). It uses a rechargeable battery (the amount of energy the battery can store is 6600 mAh -- a typical smart phone battery capacity is about 1500 mAh) which can be charged either by house current (via an adapter), or via a small solar panel (3.4 Watts, 6 Volts).  We haven't yet tested how long it takes to charge fully a battery of this size; but the panel typically outputs 500 mA in bright sunlight, so acquiring 1500 mAh (one smart phone battery's worth) should take around 3-4 hours.

More photos here:
https://www.flickr.com/photos/80184146@N06/sets/72157632268859995/

Ingredients:
* 3.4 Watt 6 Volt Solar Panel ($30, voltaicsystems.com)
* Solar / DC / LiPo charger ($25, adafruit.com)
* MintyBoost v3 kit ($20, adafruit.com)
* A 6600 mAh LiPo battery ($40, adafruit.com)
* Buck Puck DC Power ($20, superbrighleds.com)
* A 1 Watt LED ($3, adafruit.com)
* Piece of PVC junction ($.49 at hardware store)
* USB Mini-B, USB Micro cables ($1 ea on Ebay)
* Altoids-like tin (< $2)

Next steps:
* Design a custom PCB.  The next version will simply combine the MintyBoost, Solar Lipo, and Buck Puck charger circuitry in order to reduce costs. And hopefully subsequent version will use an Arduino-like chip to allow for charging other battery chemistries and for optional output of, e.g., the 700 mA that a Raspberry Pi prefers.
* Design a case for the battery and electronics














 