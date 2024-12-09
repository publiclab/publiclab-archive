---
title: Raspberry + NoIR cam + Sensors to detect water stress of the plants during their growing
tagnames: farming, ir, raspberry-pi, plants, italy, water, rpi, stress, eu, raspberry, images, growing, condition, cultivated, activity:timelapse, activity:infragram, raspberry-pi-infragram, activity:raspberry-pi-infragram, replication:15075
author: LaPa
path: /notes/LaPa/03-31-2016/raspberry-noir-cam-sensors-to-detect-water-stress-of-the-plants-during-their-growing.md
nid: 12900
uid: 457187

---

![](https://publiclab.org/public/system/images/photos/000/015/266/original/IRRPICam.JPG)

# Raspberry + NoIR cam + Sensors to detect water stress of the plants during their growing

by [LaPa](../profile/LaPa) March 31, 2016 13:36

March 31, 2016 13:36 | Tags: [farming](../tag/farming), [ir](../tag/ir), [raspberry-pi](../tag/raspberry-pi), [plants](../tag/plants), [italy](../tag/italy), [water](../tag/water), [rpi](../tag/rpi), [stress](../tag/stress), [eu](../tag/eu), [raspberry](../tag/raspberry), [images](../tag/images), [growing](../tag/growing), [condition](../tag/condition), [cultivated](../tag/cultivated), [activity:timelapse](../tag/activity:timelapse), [activity:infragram](../tag/activity:infragram), [raspberry-pi-infragram](../tag/raspberry-pi-infragram), [activity:raspberry-pi-infragram](../tag/activity:raspberry-pi-infragram), [replication:15075](../tag/replication:15075)

----

###What I want to do
 I'm an agronomist, I'm going to make a IR RaspiCam to do an IR Timelapse in greenhouse. I want add same sensors (temperature, moisture, soil moisture) at the IR Raspicam in order to link environmental condition to Health of the plant.

I wrote this previous research note https://publiclab.org/notes/LaPa/12-03-2015/how-do-i-set-a-costum-white-balance-of-the-noir-modulo-cam

###My attempt and results
 I built a IR camera + blue filter (# 2008) by Raspberry Pi in order to have the time lapse movies of growing plants in greenhouse. I would like especially to detect the water stress or the micro water stress during the stage of growing of the plant o during the day. So I placed the IR camera in a greenhouse at the first stage of growing of the plants of cucumber. The camera use a custom white balance according to https://publiclab.org/notes/LaPa/12-03-2015/how-do-i-set-a-costum-white-balance-of-the-noir-modulo-cam



I posted my first attempts with IR on youtube: the first one portrays 3 water stressed plants of primula just after water supply. Indeed you can see in the time lapse movie the leaves of the plants to increase their turgor as clear demonstration of the reduction of water stress.

Here is the movie by raw IR photo https://www.youtube.com/watch?v=545sW7hBGVM

I use "ImageJ (FiJi)" + "photo monitoring plugin" to elaborate raw IR photos into NDVI by using InfraBlue.lut that you can see here https://www.youtube.com/watch?v=DUKliCFogxA.



Here you can see the transformation into NDVI using VGYRM.lut https://www.youtube.com/watch?v=vs8DS24s9j4



Here the timelapse of the first 7 days of the cucumber plants in greenhouse resulting from raw IR photos https://www.youtube.com/watch?v=PdglYb19DmM



And here that timelapse transformed into NDVI using VGYRM.lut https://www.youtube.com/watch?v=EAuAU7f2NvE 


###Questions and next steps
 Now I am keeping to shoot photos of the growing cucumber plants in greenhouse. I'm going to elaborate those into NDVI again.

Have that sense for my goals? Could this technique be proper for detecting the water stress of the plants?

Am I going in the right direction?

Any suggestions?



If is it necessary I can send some single photos that I used for my time-lapses

If you consider useful to use Raspberry pi for IR green plant analysis, where I can post some images that I shoot?

Thanks in advance



Best regards by LaPa

###Why I'm interested
1) Learn more about IR Images of the plants; 2) to identify by IR Images of the plants best of growing condition or the moments of the worst health (water stress) of the plants during their growth; 3) to use IR Raspicam on aerostatic baloon; 4) To build DIY weather tools by Raspberry Pi






