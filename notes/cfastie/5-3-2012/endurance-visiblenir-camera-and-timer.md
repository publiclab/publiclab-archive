---
title: 'Endurance of visible/NIR camera and timer'
tagnames: near-infrared-camera, triggering, troubleshooting
author: cfastie
path: /notes/cfastie/5-3-2012/endurance-visiblenir-camera-and-timer.md
nid: 1894
uid: 554

---

![](https://publiclab.org/sites/default/files/MK111endurance.jpg)

# Endurance of visible/NIR camera and timer

by [cfastie](../profile/cfastie) May 03, 2012 05:54

May 03, 2012 05:54 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [triggering](../tag/triggering), [troubleshooting](../tag/troubleshooting)

----

With Jeff's help I found workable power supplies for the MK111 timer and tried the first endurance test of the system.  The timer was sending a weak 4v to 4.5v signal from three button cells to the USB ports of the two Canon A495 cameras.  Eight AAA batteries powered the timer itself.  We hope to reduce the mass of this power supply because it almost equals that of a camera. However, the timer would not function on only 6 or 7 AAA batteries (its supposed to have 12v). The cameras had two freshly charged eneloop AA batteries. The cameras were firing simultaneously every 12 seconds using the synch features of CHDK (the timer was closing the relay every 6 seconds).

###Endurance results:###
* IR camera powered down after 3 hr, 20 min, 1027 photos taken
* Visible camera down after 3 hr, 40 min, 1099 photos taken
* AAA batteries powering the timer still going after 4 hr, 55 min
* Button batteries powering the output circuit were still going when the last camera ran out of battery.

I have to stop the timer now so I can charge all of my AAA cells in case I need them tomorrow. 

###END OF TEST###