---
title: "NDVI two camera system calibration"

tagnames: ''
author: gpenzo
path: /notes/gpenzo/05-26-2015/ndvi-two-camera-system-calibration.md
nid: 11840
uid: 420719

---

![](https://publiclab.org/public/system/images/photos/000/010/013/original/pic)

# NDVI two camera system calibration

by [gpenzo](../../../profile/gpenzo) | May 26, 2015 21:25

May 26, 2015 21:25 | Tags: 

----

###What I want to do
I have a [two camera](http://publiclab.org/notes/gpenzo/03-25-2015/ndvi-cape-for-the-beagle-bone) setup to capture NDVI images. Camera works fine.
But I have some issues with calculating NDVI.

###My attempt and results
The current way I calculate is to take pictures on both camera and keep increasing the exposure till I start having over exposure of pixels. Then I go one exposure step back. This way I make sure I have the biggest spread in both my pictures from 0 to 255. Also this way I do not need to do any streching of my channels. Then these pictures I use with the sandaard NDVI formula.
The NDVI pictures look good. But I'm wondering if this is the correct way of doing it. 
Should there be some kind of calibration?
Should the exposure time relation between NIR and RED be constant?
The NDVI formula does not give any restrictions on this.
If I do take pictures of the same piece of grass during diffrent time of day will I get the same result?
Or will the conclusion (health) of the pice of grass be diffrent.
I saw on other notes that the transmission curve of the camera is important.
 
[![wave_length_mono_response.png](https://i.publiclab.org/system/images/photos/000/010/014/medium/wave_length_mono_response.png)](https://i.publiclab.org/system/images/photos/000/010/014/original/wave_length_mono_response.png)
I do not understand yet why.

###Questions and next steps
So much questions, or am I making things more difficult than it really is?
Can any of the NDVI guru, lords, masters here help me with some of these questions.

###Why I'm interested
I spend allot of time making a 2 camera setup. Getting RED and NIR was the easy prart. But I need to know the correct way of calculating NDVI images. Also I'm preparinge to make a 4-5 camera setup to capture other indices and I need to understand NDVI first before I start on the next camera setup.

Many thanks for any help you can give me.
Regards Grayson Penzo

Note picure is of a farm land where nothing is growing except a nice green health patch of grass on the left.