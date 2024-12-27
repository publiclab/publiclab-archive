---
title: "Can PM4 be monitored with the MiniVol?"

tagnames: 'wisconsin, dust, silica, frac-sand, pm, particle-sensing, pm-monitoring, minivol, question:minivol, question:silica, question:pm-monitoring, question:dust, question:dust-sampling'
author: mathew
path: /notes/mathew/02-11-2017/can-pm4-be-monitored-with-the-minivol.md
nid: 13922
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/019/528/original/Citrine-sample2.jpg)

# Can PM4 be monitored with the MiniVol?

by [mathew](../../../profile/mathew) | February 11, 2017 01:22

February 11, 2017 01:22 | Tags: [wisconsin](../tag/wisconsin), [dust](../tag/dust), [silica](../tag/silica), [frac-sand](../tag/frac-sand), [pm](../tag/pm), [particle-sensing](../tag/particle-sensing), [pm-monitoring](../tag/pm-monitoring), [minivol](../tag/minivol), [question:minivol](../tag/question:minivol), [question:silica](../tag/question:silica), [question:pm-monitoring](../tag/question:pm-monitoring), [question:dust](../tag/question:dust), [question:dust-sampling](../tag/question:dust-sampling)

----

_Image Source: ["Citrine" by Jarno from Rotterdam, Netherlands, on Wikimedia](https://en.wikipedia.org/wiki/Quartz#/media/File:Citrine-sample2.jpg) CC: BY_

## Can PM4 be monitored effectively with the MiniVol?

I found a note in the [MiniVol](/wiki/minivol) [manual](http://www.airmetrics.com/downloads/MiniVol_TAS_Manual_Web.pdf), section 8.4, about changing the Impactor cutpoint, which would allow the PM2.5 (cutpoint at 2.5μm) and PM10 impactors to select a different size of particles, potentially opening the door to doing [PM4 monitoring for silica](https://publiclab.org/wiki/silica-monitoring#OSHA’s+PM4).

## why/how would this work?
[Impactors use a process called inertial sorting](/wiki/filter-pm#Components+of+a+Filter-based+PM+monitor) to select a size of particles.  Essentially, the air stream takes a tight turn, and heavier particles can't make the turn and crash into a sticky target:

![](https://i.publiclab.org/system/images/photos/000/014/330/original/impactor.png)

Intertial sorting is dependent on the speed of the airstream in which particles are entrained.  For the MiniVol, that speed is 5lpm (liters per minute).  By changing the air speed, the impactor cutpoint can be changed as well. 

In the [MiniVol spreadsheet](/wiki/minivol#how+is+the+MiniVol+used?) the "Impactor Calculator" implements Equation 9 in the MiniVol manual (page 34) in the tab :

[![Screen_Shot_2017-02-10_at_4.27.15_PM.png](https://publiclab.org/system/images/photos/000/019/529/large/Screen_Shot_2017-02-10_at_4.27.15_PM.png)](https://publiclab.org/system/images/photos/000/019/529/original/Screen_Shot_2017-02-10_at_4.27.15_PM.png)


The PM10 impactor could therefore become a PM4 impactor at a flow rate of 31.25lpm, but the MiniVol operates at a maximum of 10lpm. The PM2.5 impactor can become a PM4 impactor at 1.95lpm.

#### Do other monitors work this way? 
In my cursory searching I found a few examples. Several developers appear to use airspeed change to change the selected particle range.  For instance, the [pDR-1500 has a PM10 & PM4 cyclone impactor](http://www.newstarenvironmental.com/air-toxic-monitors/personal-dataramtm-pdr-1500-aerosol-monitor.html), with a speed change changing the impactor cutpoint.  Wisconsin Sand used [a change in speed to use a PM2.5 impactor for PM4.](http://www.wisconsinsand.org/assets/1744-Executive-Summary-MR-Air-Study.pdf)

## Potential issues of changing the MiniVol pump volume

#### Low volume measurement may only work with very high PM levels
The MiniVol's name stands for Mini Volume, because it operates at 5lpm instead of the 16.67lpm Federal Reference Method standard.  The lower volume sampling means the MiniVol is only accurate for moderate to high PM levels.  Going from 5lpm to 1.95lpm to get PM4 would result in a 60% reduction in air sampling volume. 

_What quantities of silica would need to be in the air for measurements to be valid?_

#### changing the speed of the air my change the sharpness to something outside of acceptable levels

The cutpoint of an impactor is never a straight line, it trails off.  The distribution of PM larger than the cutpoint determines the 'sharpness' of the cutpoint:

![sharpness change](https://i.publiclab.org/system/images/photos/000/014/326/original/cutpoint_vs_sharpness.png)

#### Would this method comply with new OSHA rules?

OSHA [released guidance on PM4](https://www.osha.gov/silica/index.html) in 2016, would this speed change method be ok?