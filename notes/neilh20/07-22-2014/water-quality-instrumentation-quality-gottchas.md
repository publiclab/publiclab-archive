---
title: "Water quality instrumentation quality gottchas"

tagnames: 'standards, openhardware, water-quality, measurement, riffle, validation, specification, traceability, quality-matrix, first-time-poster'
author: neilh20
path: /notes/neilh20/07-22-2014/water-quality-instrumentation-quality-gottchas.md
nid: 10945
uid: 425914
cids: 9591,9592,9645
---

# Water quality instrumentation quality gottchas

by [neilh20](/profile/neilh20) | July 22, 2014 19:11

July 22, 2014 19:11 | Tags: [standards](/tag/standards), [openhardware](/tag/openhardware), [water-quality](/tag/water-quality), [measurement](/tag/measurement), [riffle](/tag/riffle), [validation](/tag/validation), [specification](/tag/specification), [traceability](/tag/traceability), [quality-matrix](/tag/quality-matrix), [first-time-poster](/tag/first-time-poster)

----

A research note:  
For quality digital data to be produced by an instrument, it needs to be stability tested - that is it needs to be running in a stable test environment for some months measuring a defined standard. 
This is standard practice for any device that has embedded software.

For a quality measurement - the numbers of that measurement need to have units, and for units to be meaningful they need to be traceable to a standard. 
The quality matrix is usually defined at the design stage of an instrument - called its specification - and its very important to understand and manage the specification.
In my experience, it is better to define the specification and final tests at the beginning when thinking of the instruments design. There is nothing wrong with defining a low accuracy low cost instrument - so long as that fits with what is needed - and helps in the discussion of what are the costs in the instrument.

For water depth measurement, - a measuring rod purchased at the local hardware store is probably a good enough "standard" - especially if in mm. Units for measurement though can be in - inches (metric), feet (metric), meters. That is is the following are all equal measurements with different units  3.50inches- 0.29166' feet - 89.6mm/ 
Typically the range of the measurement also needs to be defined - for length  it could be a 3ft measuring rod, 250' measuring tape .... And then there is accuracy - usually thought of as a % over the range chosen, and the resolution of the measurement,
For water depth the USGS generates data that is at least 0.1% accuracy over 10' over temperature range of interest if 0-20C

Most scales are arbitrary - that is someone came up with a standard, and often over time the standard evolves - eg for length there has been  feet inches meters - as well as fathoms, rods, links and a few dozen others - all have a defined relationship to each other.
 
For temperature - the modern Celsius scale can be locally determined at sea level by freezing water and boiling water - though there is a more accurate modern definition for those who need it. http://en.wikipedia.org/wiki/Celsius
If you aren't close to sea level you need to determine what the local water boiling point is.

For other measurable quantities eg conductivity of water,pH, salinity, dissolved oxygen, there are defined scales - some easy to implement and some not so easy.

The measurement of turbidity is a challenge and is not easyly measurable accurately by a digital instrument - however it may not need to be measured and defined accurately for some measurements to be useful.

Measurement techniques can also be interrelated. When measuring water depth with a metal rod, its perhaps easy to understand that the rod will expand as it gets warmer - but really that isn't enough to be noticeable.
If measuring depth with a pressure sensor, the pressure diaphragms change with temperature (usually called its Temperature Coefficient) needs to be adjusted for.

All physical sensors drift over time - this needs to be negligible over the time period being looked at.

Some sensors can be fouled by the medium they are in and possible measurement techniques and geography. Eg if a conductivity sensor is in warm water in Louisiana, bio-films are likely to grow over it interfering with the current flow. If in Quebec - much colder waters - this bio-film interference is unlikely to happen. 
For conductivity sensors, that are measuring the flow of ions(current) through the water, if that water is still  - say in a glass jar - it can become polarized over time.
For conductivity sensors, some types of metals will dissolve into water with the transport of the current.

Some measuring sensors - by their nature and that of the environment in them drift and need to be regularly calibrated. One example is some of the dissolved oxygen sensors.

The gottcha for any "Water Quality" measurements, is that there needs to be stable and traceable measurements across time. These may not need to be highly accurate, but the accuracy needs to be understood,

Neil Hancock
Software Engineer