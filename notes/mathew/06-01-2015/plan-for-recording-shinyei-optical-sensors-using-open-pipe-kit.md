---
title: "Plan for recording Shinyei optical sensors using Open Pipe Kit"

tagnames: 'air-quality, dustduino, silica, frac-sand, pm, open-air, particle-sensing, dust-monitoring, openair, with:warren, open-pipe-kit, opk, shinyei, fracsand, parent:frac-sand, air-sensors'
author: mathew
path: /notes/mathew/06-01-2015/plan-for-recording-shinyei-optical-sensors-using-open-pipe-kit.md
nid: 11927
uid: 4
cids: 11835,11836,11842,11843,11884,11897,11909,11910,11911,11912,11913,11933,11935,18478
---

![](https://publiclab.org/public/system/images/photos/000/010/164/original/Screen_Shot_2015-05-19_at_3.51.13_PM.png)

# Plan for recording Shinyei optical sensors using Open Pipe Kit

by [mathew](/profile/mathew) | June 01, 2015 23:47

June 01, 2015 23:47 | Tags: [air-quality](/tag/air-quality), [dustduino](/tag/dustduino), [silica](/tag/silica), [frac-sand](/tag/frac-sand), [pm](/tag/pm), [open-air](/tag/open-air), [particle-sensing](/tag/particle-sensing), [dust-monitoring](/tag/dust-monitoring), [openair](/tag/openair), [with:warren](/tag/with:warren), [open-pipe-kit](/tag/open-pipe-kit), [opk](/tag/opk), [shinyei](/tag/shinyei), [fracsand](/tag/fracsand), [parent:frac-sand](/tag/parent:frac-sand), [air-sensors](/tag/air-sensors)

----

###Goal:
the goal is to read and save the raw output of a [Shinyei PPD42](/notes/Willie/04-01-2014/field-testing-the-shenyei-pm-sensor) [particle sensor](/wiki/particle-sensing) to a local storage on a Raspberry Pi and out to the internet through the [Open Pipe Kit](/wiki/open-pipe-kit). Later on, we'll be trying to translate the raw sensor data to standard presentation formats in um/m3. We want to make that conversion as transparent as possible so that calibrations or modifications to the raw count can be applied retroactively.

the driver is being worked on in [this Github repository.](https://github.com/jywarren/opk-shinyei-ppd42-cli)

###the Raw data:
The data coming out of an Shinyei PPD42 optical sensor is raw count of a particle size cutoff as the particles transit the optical sensor. 

[![ShinyeiPPD42NS_Insides_Labeled_600__1_.jpg](https://i.publiclab.org/system/images/photos/000/010/158/medium/ShinyeiPPD42NS_Insides_Labeled_600__1_.jpg)](https://i.publiclab.org/system/images/photos/000/010/158/original/ShinyeiPPD42NS_Insides_Labeled_600__1_.jpg)

as particles transit, they generate a signal in the photodiode. A circuit reads this signal looking for spikes correlated with larger particles.

[![Screen_Shot_2015-05-19_at_3.51.13_PM.png](https://i.publiclab.org/system/images/photos/000/010/159/medium/Screen_Shot_2015-05-19_at_3.51.13_PM.png)](https://i.publiclab.org/system/images/photos/000/010/159/original/Screen_Shot_2015-05-19_at_3.51.13_PM.png)


Output P1 is all particles above 1.2um and output P2 is all particles bigger than 2.5um.  output P2 therefore contains P1.   These two outputs are designed to be roughly equivalent to PM2.5 and PM10 particle sizes.

###sampling the sensor
Shinyei recommends sampling the sensor by measuring the % of time that particles are transiting the sensor averaged over 30 seconds, for P1 and P2 individually.

[![Screen_Shot_2015-05-19_at_3.58.20_PM.png](https://i.publiclab.org/system/images/photos/000/010/163/medium/Screen_Shot_2015-05-19_at_3.58.20_PM.png)](https://i.publiclab.org/system/images/photos/000/010/163/original/Screen_Shot_2015-05-19_at_3.58.20_PM.png)

Shinyei's documents:
<a href="https://i.publiclab.org/system/images/photos/000/010/160/original/Size_Discrimination%28PPD42NJ%29.pdf"><i class="icon icon-file"></i> Size_Discrimination(PPD42NJ).pdf</a>

<a href="https://i.publiclab.org/system/images/photos/000/010/161/original/Spec_PPD42NJ_Eng_SPP13001V00_20130319.pdf"><i class="icon icon-file"></i> Spec_PPD42NJ_Eng_SPP13001V00_20130319.pdf</a>

###the software strategy:

The goal is to make the data flow as flexible as possible.  We’ll be using an Arduino-based device for PWM sampling of the sensor, bridging using [Firmata](https://github.com/firmata/protocol) to communicate with a Raspberry Pi running [Open Pipe Kit](https://github.com/openpipekit/).

####On the ‘Pi / OPK

[Firmata.js](https://github.com/jgautier/firmata) will be used to sample the sensors and send on to OPK, which will store  the raw particle count,  length of time of count, and timestamp for count start,  calculated PM2.5/PM10 equivalences, and a record of the equivalence calculation.


###Further work: the desired format
we want individual particle counts that correspond to EPA’s PM2.5 and PM10 standards. those standards are based on tools that differentiate between particles by separating them based on their drop in flight, and then weighing collected particles.  our real-time monitor can’t do that, so we’re going to try to calculate an equivalence between Optical particle counts equivalence to the ug/m3 (of air) format of PM standards.  that estimation is based on a calculation of equivalency between the albedo (brightness) and transit of a particle across an optical sensor and the “mass mean aerodynamic diameter,” which is a way of saying particles that fall through the air at the same rate as a perfect sphere of 10um or 2.5um.  This will always be a little fuzzy.

To quote @DavidMack:
The EPA definition of PM fractions can be found in 40 CFR Part 50, seehttp://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title40/40cfr50_main_02.tpl
"particulate matter shall be measured in the ambient air as PM10 (particles with an aerodynamic diameter LESS THAN OR EQUAL to a nominal 10 micrometers)"
and PM2.5 is a "LESS THAN OR EQUAL to a nominal 2.5 micrometers"
The 50% cut point refers to the EFFICIENCY at which particles are removed by the selective inlet at the given size. So for PM10, the inlet removes 50% of particles at 10 microns but above 10 microns the removal efficiency increases and below 10 microns removal efficiency declines. Thus the resultant fraction is not a normal distribution (e.g. 50% above and 50% below) but a skewed distribution (see graph below). Also, the rate at which removal efficiency changes is referred to as the cut point SHARPNESS.

[![pm.jpg](https://i.publiclab.org/system/images/photos/000/010/162/medium/pm.jpg)](https://i.publiclab.org/system/images/photos/000/010/162/original/pm.jpg)