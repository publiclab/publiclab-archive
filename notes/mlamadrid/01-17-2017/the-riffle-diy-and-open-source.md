---
title: "The Riffle: DIY and Open Source"

tagnames: 'water-quality, riffle, with:mathew, with:donblair, communityscienceforum, riffle-examples'
author: mlamadrid
path: /notes/mlamadrid/01-17-2017/the-riffle-diy-and-open-source.md
nid: 13856
uid: 45586

---

![](https://publiclab.org/public/system/images/photos/000/019/289/original/Riffle_20160527-5700.jpg)

# The Riffle: DIY and Open Source

by [mlamadrid](../../../profile/mlamadrid) | January 17, 2017 22:24

January 17, 2017 22:24 | Tags: [water-quality](../tag/water-quality), [riffle](../tag/riffle), [with:mathew](../tag/with:mathew), [with:donblair](../tag/with:donblair), [communityscienceforum](../tag/communityscienceforum), [riffle-examples](../tag/riffle-examples)

----

Article by [Mathew Lippincott][1] and [Don Blair][2] for [Community Science Forum: Water][3]

## Design Philosophy

The Riffle is a design for an open source hardware water monitor. While water monitors are put to many uses, the Riffle project has focused on monitoring indicators of pollution to identify changing water conditions. Temperature, Conductivity, Depth, and Turbidity indicate changes in water flow and content rather than specific pollutants, providing the baseline information needed to pinpoint sources of pollution.

## Motivation

The initial concept for the Riffle came out of conversations with Mark Green, a Professor of Hydrology at Plymouth State, and Don Blair, a Public Lab Fellow, about 1) the current technologies used for water monitoring and 2) an assessment of existing field temperature loggers by forest ecologist Chris Fastie. Mark identified several challenges presented by existing commercial designs:

- Proprietary data formats: Data can only be decoded by a
manufacturer's proprietary software.
- Proprietary software suites: Hardware is locked to software and
platforms supported by the manufacturer. Software can be
discontinued, or new versions must be purchased to keep using
hardware.
- Proprietary hardware: Special hardware interfaces are required to
load data off of devices. Devices are not extensible with new
sensors, and sensor designs are not documented.
- Single-use devices: Chris Fastie identified that many long-term
systems lack the ability to log multiple sensor measurements at the
same time and may even have non-replaceable batteries, making them
essentially disposable.

## Goals

As a result, we decided to begin a project to develop an "open hardware water monitor" useful for some common water monitoring applications. We sought to make something which would have the following characteristics:

- Open and accessible data formats: Data is recorded in a common data
format, such as Comma Separated Value (CSV), using accessible data
storage media such as SD cards.
- Rich software ecosystem: Build on platforms with modular, open source
software, so that the platform does not require much software
expertise to extend.
- Open Sensor designs: Sensors should be built around analog
electronics and accessible materials, so that sensing projects are
not dependent on a single manufacturer.
- Accessible materials: The waterproof enclosure and other parts should
be broadly available and repairable locally.
- Low power: Capable of monitoring at a remote locations for many days
---weeks, at least --- on a rechargeable or interchangeable battery.

![Fastie's Riffle in a Nalgene bottle measuring temperature and humidity.][4]

\*\*  
\*\*

[1]: https://publiclab.org/profile/mathew
[2]: https://publiclab.org/profile/donblair
[3]: https://publiclab.org/forum
[4]: https://publiclab.org/system/images/photos/000/019/292/large/Riffle_20160527-5689.jpg "Riffle_20160527-5689.jpg"