---
title: "Shutter timer upgrade"

tagnames: 'balloon-mapping, near-infrared-camera, kite-mapping, triggering, 555-timer, camera-triggering, timer, intervalometer, 555, activity:camera-triggering, activity:intervalometer'
author: cfastie
path: /notes/cfastie/7-12-2012/shutter-timer-upgrade.md
nid: 2785
uid: 554

cids: 1014,1015,1016

---

![](https://publiclab.org/sites/default/files/MK111-20120712-2502a.jpg)

# Shutter timer upgrade

by [cfastie](../../../profile/cfastie) | July 13, 2012 00:17

July 13, 2012 00:17 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [kite-mapping](../tag/kite-mapping), [triggering](../tag/triggering), [555-timer](../tag/555-timer), [camera-triggering](../tag/camera-triggering), [timer](../tag/timer), [intervalometer](../tag/intervalometer), [555](../tag/555), [activity:camera-triggering](../tag/activity:camera-triggering), [activity:intervalometer](../tag/activity:intervalometer)

----

After walking around like a fool for an hour towing a kite lofting the cameras that were not shooting because the <a href="http://publiclaboratory.org/notes/cfastie/7-3-2012/timer-battery-disappoints">timer battery had died after 13 minutes</a>, I decided to try Randy Sargent's modification of the MK111 timer. Randy's suggestions are described in the <a href="http://publiclaboratory.org/notes/cfastie/5-2-2012/no-output-signal-ir-kit-timer">later comments on this note</a>. The modified timer works as expected!

The idea is to build the timer kit without the relay, or remove or disconnect the relay from an assembled timer. Then two wires must be added. The timer then runs on only 6 volts (instead of 12 to 24v), and requires much less current to operate. So a much smaller battery can power the whole thing for a long period. As originally designed, two batteries are required (one to power the timer and one to provide power signal pulse to whatever the timer is controlling). With Randy's mod, just one battery does everything. 

I have not done endurance testing yet, but I think a fresh 4LR44 six volt battery should last plenty long. Other 5-6v battery packs will also work. For example, it runs on 4 AAA alkaline batteries. It does not run on 3 alkaline AAA (4.5v) or 4 NiMH eneloop AAA (which are only 1.2v apiece).  The 4LR44 is tiny and lightweight, so I hope I can get several hundred shots out of one.  
[**Update**: The power supply I use regularly with this timer is 4 AAA alkaline batteries.]