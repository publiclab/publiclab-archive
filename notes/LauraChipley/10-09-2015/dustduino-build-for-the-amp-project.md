---
nid: 12283
title: Dustduino Build for the AMP project
path: public/static/notes/LauraChipley/10-09-2015/dustduino-build-for-the-amp-project.md
uid: 428957
tagnames: particulate-sensing,west-virginia,mountaintop-removal,dustduino,dust,pm,southeast,particulate-monitoring,amp,mtr,shinyei,appalachia,replication:9818,air-sensors
---

# Dustduino Build for the AMP project

[![KD2.MOV.00_14_48_03.Still001.jpg](https://i.publiclab.org/system/images/photos/000/011/886/medium/KD2.MOV.00_14_48_03.Still001.jpg)](https://i.publiclab.org/system/images/photos/000/011/886/original/KD2.MOV.00_14_48_03.Still001.jpg)

_[The KD2 permit near the Kanawha State Forest]_

Particulate matter is a big health concern in the coal fields of West Virginia. On Mountaintop Removal (MTR) sites, approximately 5.5 million pounds of explosives are detonated [every day ](http://acheact.org/). The resulting dust has been linked to a variety of health problems, including [lung cancer](http://pubs.acs.org/doi/abs/10.1021/es504263u). 


###**What I want to do:**
As part of the [Appalachian Mountaintop Patrol](http://publiclab.org/tag/appalachian-mountaintop-patrol) project, we want to install Dustduinos in homes and businesses near MTR permits. In addition to measuring the particulate matter raining down on the community, we would like explore ways to translate Dustduino readings into the narratives of the documentary videos we are working on.


###**My attempt and results:**
Jeff Laut, a PhD candidate at the NYU Polytechnic School of Engineering helped me put together and program the Dustduino from the tutorial on the PL wiki. 

[![jeremy.jpg](https://i.publiclab.org/system/images/photos/000/011/887/medium/jeremy.jpg)](https://i.publiclab.org/system/images/photos/000/011/887/original/jeremy.jpg)


It's complicated to connect a new device to NYU Poly's WiFi. We connected the RN-XV to an extra modem he had lying around in the lab.
As the modem was not password protected, we added the following code to get the RN-XV to connect:

set wlan auth <value>
set wlan join 1

We also noted that it's important to make sure you are running an updated version of Arduino while installing the libraries (Jeff had an out of date version on his computer at first and we couldn't get it to work.)


[![hands.jpg](https://i.publiclab.org/system/images/photos/000/011/889/medium/hands.jpg)](https://i.publiclab.org/system/images/photos/000/011/889/original/hands.jpg)



###**Questions and next steps:**
The next step will be to install the Dustduino at the offices of [Coal River Mountain Watch](http://www.crmw.net/) in November. I'll post more photos, updates and likely, many questions.



[![dustduino22222.jpg](https://i.publiclab.org/system/images/photos/000/011/891/medium/dustduino22222.jpg)](https://i.publiclab.org/system/images/photos/000/011/891/original/dustduino22222.jpg)

