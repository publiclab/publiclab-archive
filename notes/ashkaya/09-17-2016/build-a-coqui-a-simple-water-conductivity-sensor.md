---
title: "Build a Coquí: A Simple Water Conductivity Sensor (version 1)"

tagnames: 'water, tutorial, conductivity, open-water, with:kanarinka, coqui, tutorials, difficulty:easy, status:review-me, category:build, time:1h, activity:coqui'
author: akshaya
path: /notes/ashkaya/09-17-2016/build-a-coqui-a-simple-water-conductivity-sensor.md
nid: 13459
uid: 472548

---

![](https://publiclab.org/public/system/images/photos/000/018/066/original/13.jpg)

# Build a Coquí: A Simple Water Conductivity Sensor (version 1)

by [akshaya](../../../profile/akshaya) | September 17, 2016 23:21

September 17, 2016 23:21 | Tags: [water](../tag/water), [tutorial](../tag/tutorial), [conductivity](../tag/conductivity), [open-water](../tag/open-water), [with:kanarinka](../tag/with:kanarinka), [coqui](../tag/coqui), [tutorials](../tag/tutorials), [difficulty:easy](../tag/difficulty:easy), [status:review-me](../tag/status:review-me), [category:build](../tag/category:build), [time:1h](../tag/time:1h), [activity:coqui](../tag/activity:coqui)

----

# This is a beginner's guide to assembling the Coquí

NOTE: a new version of this tutorial [can be found here](https://publiclab.org/notes/warren/03-01-2019/build-a-sound-generating-coqui-conductivity-sensor).

The Coquí is a simple water conductivity sensor designed by @donblair that is designed for use in an educational context. The coquí is a simple circuit assembled on a breadboard that has a speaker that outputs high frequency sound when the water conductivity is higher and lower frequency sounds when the conductivity is lower.

_This post, originally by @akshaya and @kanarinka, is being reposted from [this wiki page](https://publiclab.org/wiki/coqui-a-simple-water-conductivity-sensor) in order to integrate with the new [activities system](https://publiclab.org/notes/warren/09-17-2016/what-makes-a-good-activity)_

Want to measure something other than water conductivity? With simple modifications a Coquí can measure temperature, ambient light and LED light. [Check out Don's original post to learn how](https://publiclab.org/notes/donblair/09-30-2014/coqui-bbv1-0).

## Who is this for?

Buillding a coquí is a great way to introduce principles of water monitoring, DIY hardware, and sensors to new audiences. @kanarinka and [John Keefe](https://publiclab.org/notes/donblair/10-19-2015/monongahela-monitoring-marathon-part-i) use coquís to teach workshops in [sensor journalism](https://en.wikipedia.org/wiki/Sensor_journalism). The coquí is featured in the Educator's Guide to Sensor Journalism pamphlet by @kanarinka ([download here](https://www.dropbox.com/s/y8664oab0zu2cd8/Sensor%20Journalism%20Final.pdf?dl=0)).

![image description](https://publiclab.org/system/images/photos/000/023/786/large/Screenshot_2018-03-01_18.05.55.png "Screenshot_2018-03-01_18.05.55.png")

## Duration

Assembly will take around 30-45 minutes for a novice, including troubleshooting and debugging.

## Ingredients

![Ingredients01.jpg](//i.publiclab.org/system/images/photos/000/016/865/large/Ingredients01.jpg)

\##Step-by-step guide to assembling the Coquí

#### 1\. Attach the 555 chip on the breadboard.

![1.jpg](//i.publiclab.org/system/images/photos/000/017/180/large/1.jpg)

#### 2\. Connect pin #4 to VCC.

![2.jpg](//i.publiclab.org/system/images/photos/000/017/181/large/2.jpg)

\####3\. Connect pin #8 to VCC.

![3.jpg](//i.publiclab.org/system/images/photos/000/017/182/large/3.jpg)

#### 4\. Connect pin #2 to pin #6\.

![4.jpg](//i.publiclab.org/system/images/photos/000/017/183/large/4.jpg)

#### 5\. Connect the speaker to pin #3 and GND.

![5.jpg](//i.publiclab.org/system/images/photos/000/017/184/large/5.jpg)

#### 6\. Connect pin #3 to some row.

![6.jpg](//i.publiclab.org/system/images/photos/000/017/185/large/6.jpg)

#### 7\. Connect pin #2 to a row right below previous.

![7.jpg](//i.publiclab.org/system/images/photos/000/017/186/large/7.jpg)

#### 8\. Add a capacitor from previous pin to GND.

![8.jpg](//i.publiclab.org/system/images/photos/000/017/187/large/8.jpg)

#### 9\. Connect pin #1 to GND.

![9.jpg](//i.publiclab.org/system/images/photos/000/017/188/large/9.jpg)

#### 10\. Using a photocell as a sensor: add the photocell between the previous two wires.

![10.jpg](//i.publiclab.org/system/images/photos/000/017/189/large/10.jpg)

#### 11\. Connect the battery (positive / red to VCC, negative / black to GND).

![11.jpg](//i.publiclab.org/system/images/photos/000/017/191/large/11.jpg)

#### 12\. Place an LED between VCC and GND to make sure there's power, when debugging (Optional).

![LED_copy.jpg](//i.publiclab.org/system/images/photos/000/017/683/large/LED_copy.jpg)

#### 13\. Wave your hand above the photocell - you should hear the coquí make a sound. As the light level changes, the resistance changes and the sound changes.
<iframe width="560" height="315" src="https://www.youtube.com/embed/kZbOOJCJMdM" frameborder="0" allowfullscreen=""></iframe>

\####14\. Now, replace the photocell with your water probe (see below for instructions to make one if you do not have one) and dip its two screws into a cup of water.
<iframe width="560" height="315" src="https://www.youtube.com/embed/eFiavvMAseQ" frameborder="0" allowfullscreen=""></iframe>

## DONE! Start testing water samples!

## Step by Step Instructions for Making the Coqui's Probe

The probe is the part of the coquí that you dip in water to measure its conductivity. The coquí actually passes a low-voltage electric current through the water and the two screws in the water bottle cap measure the resistance of that current. You can fashion a simple DIY probe using the following materials:

1. Plastic water bottle with plastic cap
2. Scissors or Xacto knife
3. 2 screws of the same size

#### Cut the top part off the water bottle using the scissors or knife

![cutbottle.jpg](//i.publiclab.org/system/images/photos/000/016/802/large/cutbottle.jpg)

#### Screw the two screws into the top of the water bottle.

![Bottle_with_screw.jpg](//i.publiclab.org/system/images/photos/000/016/804/large/Bottle_with_screw.jpg)

#### Attach the alligator clips leading from the coquí to the bottom of the two screws

![probe_with_clip.jpg](//i.publiclab.org/system/images/photos/000/016/805/large/probe_with_clip.jpg)

## Now you have your probe!

## Learn more about the Coquí in context

- [Don Blair's original post](https://publiclab.org/notes/donblair/09-30-2014/coqui-bbv1-0), including more technical information and modifications
- [A round-up of John Keefe's use of the Coquí in West Virginia with Journalism students](https://publiclab.org/notes/donblair/10-19-2015/monongahela-monitoring-marathon-part-i)
- [Photos of building the Coquí](https://publiclab.org/notes/liz/02-09-2016/photos-of-building-coquis-in-hong-kong) with @liz in Hong Kong
- Journalism student @mattmullen [reflects on the potentials and pitfalls of sensor journalism](https://publiclab.org/notes/mattmullen/02-25-2015/some-thoughts-on-sensor-journalism)

## Are you more advanced? Check out this circuit diagram

![buzzerDiagram.png](//i.publiclab.org/system/images/photos/000/016/800/large/buzzerDiagram.png)