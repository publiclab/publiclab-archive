---
title: 'Removing a Raspberry Pi camera IR filter (learn from my mistakes)'
tagnames: raspberry-pi, infragram, infragram-conversion, activity:raspberry-pi-infragram
author: mathew
path: /notes/mathew/06-04-2013/removing-a-raspberry-pi-camera-ir-filter-learn-from-my-mistakes.md
nid: 8049
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/000/472/original/Screen_shot_2013-06-04_at_10.33.37_AM.png)

# Removing a Raspberry Pi camera IR filter (learn from my mistakes)

by [mathew](../profile/mathew) June 04, 2013 17:34

June 04, 2013 17:34 | Tags: [raspberry-pi](../tag/raspberry-pi), [infragram](../tag/infragram), [infragram-conversion](../tag/infragram-conversion), [activity:raspberry-pi-infragram](../tag/activity:raspberry-pi-infragram)

----

##What I want to do
I wanted to remove the IR filter from the [Raspberry Pi Camera](http://www.raspberrypi.org/archives/tag/camera-board).

I looked a the problem and thought "huh, I'll probably break this thing trying to open it up." [The schemes on the Raspberry Pi forums](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=43&t=44339) just seemed to confirm my suspicions.  Then the [lovely folks at the Reading Hackerspace made a video and some demo shots](http://rlab.org.uk/wiki/Remove_IR_filter_from_Raspberry_Pi_Camera) , and I thought-- what the heck? I'll try it.  I read the[ Hackaday comments on the subject](http://hackaday.com/2013/05/27/adding-night-vision-to-the-raspberry-pi-camera/), and watched [Barnaby Shearer's attempt to get some closeup shots](https://www.youtube.com/watch?v=e7MOb1vp5JU), and watched for [advice on the Raspberry Pi blog](http://www.raspberrypi.org/archives/4088).

##My attempt and results
I destroyed one Raspberry Pi camera in the process, then succeeded with the second one... almost.  I pulled out my[ video microscope](http://www.celestron.com/science_education/deluxe-handheld-digital-microscope.html) and went to town, trying to integrate everything I learned from the internet, and from my first attempt that destroyed the sensor cable:
<iframe width="420" height="315" src="https://www.youtube.com/embed/HtjkNyEt4xU" frameborder="0" allowfullscreen></iframe>

##Questions and next steps
I would have succeeded if I'd used PVA glue to stick the lens assembly down, as recommended by some of the last comments on Hackaday.  I avoided the superglue that Reading folks used because many people on the comments were saying that superglue can offgas and screw up CCDs and coatings.  I used hot melt, and it came off.  Then I reached over to the powered CCD (never do this) and put the lens back on, shorting out the CCD in the process.