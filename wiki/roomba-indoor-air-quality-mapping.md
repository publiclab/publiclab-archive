---
title: "Roomba indoor air quality mapping"\ntagnames: 'dust, roomba, air-quality-projects'
author: warren
path: /wiki/roomba-indoor-air-quality-mapping.md
nid: 409
uid: 1

---

# Roomba indoor air quality mapping

by [warren](../profile/warren)

July 23, 2011 14:01 | Tags: [dust](../tag/dust), [roomba](../tag/roomba), [air-quality-projects](../tag/air-quality-projects)

----

##Experiment 1:##

sensitivity of both sensors: Formaldehyde (https://docs.google.com/viewer?a=v&pid=explorer&chrome=true&srcid=1-K4gN6A1gRYLsO2pzVizXIoSoCyiftA6V7rD1s2Al2PFQR6CPSpR_hqFQdIf&hl=en_US) and VOCs (http://www.futurlec.com/Datasheet/Sensor/MQ-135.pdf)
* empirically vs. datasheet

**Test ideas:**

a. home you homes, carpet and furniture
b. Positive and negative control. 

**Positive control** -- shows sensor is working: VOC-alcohol, Formaldehyde-? NatureLab keeps samples in Formaldehyde--Jae Ok (Don’t take sample home!)-* Methanol positive control? Cholrine reduces the reading of Formaldehyde reading.
**Negative control** -- shows sensor is permanently working: control water? Something with no VOCs or Formaldehyde.

**Range of sensitivity** --

At what distance does the sensor start responding?
And how long does it take to respond?
vary the humidity and temperature in the room to be tested.

###Ideas to set up:###

set up a sample and gradually move the sensor closer and be recording the data visually as well as numerically from the sensor.

###Experiment 2:###

Work on controlling the roomba, through hacking.  Programmable roomba doesn’t have vacuum function so think we should hack our roombas. To deal with the latency of sensor.
Can we make Roomba pause when it senses something? How does Roomba work?

##Syncing sensor and roomba?##

a. identify fast sensors
b. adjusting final image to reflect when the sensor started sensing?
c. take a video? because can assign image to 100 frames earlier?  Need to know rate per/second, if latency is 30 seconds, need to go back that number of frames to find out what it’s responding to.
* problems we don’t know if the sensor latency is regular.
d. making the roomba go slower? - http://www.societyofrobots.com/robotforum/index.php?topic=9968.0  Roomba measures speed using an optical encoder, it is a black and white pin wheel that spins and gives sense of speed? Can we hack this to make roomba thinks its moving faste--i.e. we swoop out encoder.
	- roomba hackers: http://parasol.tamu.edu/people/jack/myRoomba/
	- http://www.ifixit.com/pdf/ifixit/guide_4153_en.pdf - step 10-12 - optical encoder hub

If the Roomba moves at ~20 cm/s , and the sensor has 15 s latency
300cm - roomba travels 3 m before the reading comes through
If 20cm is the ideal? then we would like it to move 15x slower.

Also always keep a positive control in the room that is being tested.

##Tracking Roomba behavior?##

Look at Flickr image galleries of Roomba--it has three states-wall following, spiralling, stoping and starting.
Think about the bumper? Because this makes the roomba stop.

Alternative for carrying sensors:
1. someone walking around.
2. remote control vehicle?


Byeongwon:
Interested in wireless? Roomba as member of the family? Kind of human

http://www.byeongwonha.com/Roomba_Project_01.html

Natalie Jermijenko--Feral Robot Dogs

making some kind of movie? Sacrifice device?

Jae Ok:
How do we relate this research to own art practices? 

##Equipment##

What do we have:
2 roombas--one needs a battery
3 VOCs sensors
2 Formaldehyde sensors
RGB LEDs 8-10
Arduino boards
Camera that does long exposure
Canon--CHDK 

At very least battery pack?
At least 2 more Roombas? 
More VOC and Formaldehyde sensors?
Other sensors? NOXs, CO2 sensor, Natural Gas, Radon? 

Public lab to fund an exhibition? Work together to design exhibition? A static section and active research piece? Measuring sensitivity--
People could bring in things to test?
Collaborate with Nature/Lab?
AS220?

Map rooms around RISD--
* Harvard guys with laser cutter project?
* AS220? 

##Workspace##

D+M room access and workspaces--Formal workspace--go to pirate shipe--Jeff runs a workspace in Boston. 

Hackathon next week at pirate ship next week??

CHDK for long exposure with a cheap camera: 

* https://www.flickr.com/photos/chromedecay/2405572904/
* http://chdk.wikia.com/wiki/UBASIC/Scripts:Long_Exposure_Intervalometer
* http://chdk.wikia.com/wiki/UBASIC/Scripts:_Shutter_Speed_Stack_(AllBest_build)

possible sensor lists? or sensing forums?