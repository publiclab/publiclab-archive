---
title: "Turbidity Sensor"\ntagnames: 'water-quality, turbidity, optical-sensor, barnstar:basic, waterquality, activity:turbidity, sensor-enclosures, water-sensors'
author: bhickman
path: /notes/bhickman/05-09-2016/turbidity-sensor.md
nid: 13092
uid: 201929

---

![](https://publiclab.org/public/system/images/photos/000/016/036/original/image001.png)

# Turbidity Sensor

by [bhickman](../profile/bhickman) | May 09, 2016 06:08

May 09, 2016 06:08 | Tags: [water-quality](../tag/water-quality), [turbidity](../tag/turbidity), [optical-sensor](../tag/optical-sensor), [barnstar:basic](../tag/barnstar:basic), [waterquality](../tag/waterquality), [activity:turbidity](../tag/activity:turbidity), [sensor-enclosures](../tag/sensor-enclosures), [water-sensors](../tag/water-sensors)

----

##Overview
The goal of this project was to make a reliable, quantitative turbidity sensor from easily accessible parts. The construction of the sensor involves a few pieces of PVC fittings that can be found at any hardware store, a 3D printed head to hold the optics in place, and an LED and photodarlington as the light source and detector. 

##Sensor Head
The sensor head is made from a 3D printed design. The head simply holds the [LED](https://www.digikey.com/product-detail/en/honeywell-sensing-and-productivity-solutions/SE5470-004/480-1984-ND/679395) light source and the [detector](https://www.digikey.com/product-detail/en/honeywell-sensing-and-productivity-solutions/SD3410-002/480-5622-ND/2513149) (photodarlington) at a 90 degree angle from each other.

[![image001.png](//i.publiclab.org/system/images/photos/000/016/035/medium/image001.png)](//i.publiclab.org/system/images/photos/000/016/035/original/image001.png)

[![image002.jpg](//i.publiclab.org/system/images/photos/000/016/037/medium/image002.jpg)](//i.publiclab.org/system/images/photos/000/016/037/original/image002.jpg)

 
The LED and photodarlington detector are placed into their slots and epoxied into place. Once the LED and detector are in place, an [acrylic window](http://www.tapplastics.com/product/plastics/cake_circles/clear_acrylic_circles/140)  (0.118” thick, 2” diameter) is epoxied on to the front of the sensor head. 

 
[![image003.jpg](//i.publiclab.org/system/images/photos/000/016/038/medium/image003.jpg)](//i.publiclab.org/system/images/photos/000/016/038/original/image003.jpg)

[![image004.jpg](//i.publiclab.org/system/images/photos/000/016/039/medium/image004.jpg)](//i.publiclab.org/system/images/photos/000/016/039/original/image004.jpg)

Wires are soldered on to the pins of the LED and detector. These wires will run to the signal amplifier board and micronctroller. 

Once the wires are attached to the LED and detector, and the acrylic window is in place, then the sensor head is inserted into the end of a length of 2” PVC pipe (I used about a 4” length).The 3D printed head should fit snugly into the PVC pipe. The acrylic window has a slightly smaller diameter then the 3D printed head; this allows a ring of epoxy to be applied around the acrylic window to seal the head in place. 


[![image005.jpg](//i.publiclab.org/system/images/photos/000/016/040/medium/image005.jpg)](//i.publiclab.org/system/images/photos/000/016/040/original/image005.jpg)


 
[![image006.jpg](//i.publiclab.org/system/images/photos/000/016/041/medium/image006.jpg)](//i.publiclab.org/system/images/photos/000/016/041/original/image006.jpg)



Since the sensor is sensitive to outside light sources, a shade cap was made from a 2” to 3” PVC adapter and an approximately four inch piece of 3” PVC pipe with some holes drilled in it. Although the picture does not show it, there is also a hole drilled in the slanted part of the 2” to 3” adapter. This hole is directly in line with the bottom edge of the sensor head when it’s inserted. This allows any air bubbles to escape.
 

[![image007.jpg](//i.publiclab.org/system/images/photos/000/016/042/medium/image007.jpg)](//i.publiclab.org/system/images/photos/000/016/042/original/image007.jpg)



Next a threaded end cap was attached to the back of the sensor. The wires from the detector and LED were run though a hole drilled in the end cap, which was then sealed with copious amounts of epoxy (sorry, no good pictures here).
 

[![image008.jpg](//i.publiclab.org/system/images/photos/000/016/044/medium/image008.jpg)](//i.publiclab.org/system/images/photos/000/016/044/original/image008.jpg)



##Amplifier Circuit

I have not made a printed circuit board for the turbidity sensor yet, but the circuit I have been using on a bread board is shown below.	 


[![image009.png](//i.publiclab.org/system/images/photos/000/016/043/medium/image009.png)](//i.publiclab.org/system/images/photos/000/016/043/original/image009.png)

For turbidity solutions containing zero to one hundred NTU, I found that a two stage amplifier circuit worked best. I’m still playing with the circuit design so that different ranges of turbidity values can be accommodated. Updates should follow…

##Acnoledgements
Thanks to [Dr. Summers](https://publiclab.org/profile/JSummers) (WCU) and Brian Chee (UH) for the 3D printing.