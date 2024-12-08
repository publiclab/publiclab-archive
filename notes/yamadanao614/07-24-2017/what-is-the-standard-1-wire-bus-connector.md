---
title: What is the standard 1-wire bus connector?
tagnames: question:general
author: yamadanao614
path: /notes/yamadanao614/07-24-2017/what-is-the-standard-1-wire-bus-connector.md
nid: 14676
uid: 511444

---

# What is the standard 1-wire bus connector?

by [yamadanao614](../profile/yamadanao614) July 24, 2017 09:00

July 24, 2017 09:00 | Tags: [question:general](../tag/question:general)

What is the normal connector that people put at the end of a long cable with a MAX31820 / DS18B20 (link deleted by admin) temperature sensor at the other end? What is the normal connector that people solder to the PCB when they intend such a cable to be plugged into that PCB?

I'm making a PCB that will go inside a small refrigerated box that (among other things) measures the temperature at various "interesting" locations inside that box and the ambient temperature outside the box, and drives a Peltier thermoelectric cooler (TEC) to keep that box at the desired setpoint temperature.

The MAX31820 / DS18B20 temperature sensor at each location are all wired in parallel in a 1-wire bus. There will be multiple sensors. (It's actually 3 wires :-).

My Google searches turn up several pages that seem to say "there is now a standard for connector pin-outs" for the 1-wire bus, but each site's explanation of "the" standard seems to contradict the other sites.