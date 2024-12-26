---
title: "Horticultural Spectrometer - Assembly"\ntagnames: 'spectrometer, spectrometry, lego, lego-spectrometer, horticulture, response:18991'
author: jenjimah
path: /notes/jenjimah/05-30-2019/horticultural-spectrometer-assembly.md
nid: 19565
uid: 505738

---

![](https://publiclab.org/public/system/images/photos/000/032/528/original/IMG-20190529-WA0001.jpeg)

# Horticultural Spectrometer - Assembly

by [jenjimah](../profile/jenjimah) | May 30, 2019 05:57

May 30, 2019 05:57 | Tags: [spectrometer](../tag/spectrometer), [spectrometry](../tag/spectrometry), [lego](../tag/lego), [lego-spectrometer](../tag/lego-spectrometer), [horticulture](../tag/horticulture), [response:18991](../tag/response:18991)

----

This is an update to the main project: [Horticultural Spectrometer Upgrade - Planning](https://publiclab.org/notes/jenjimah/04-07-2019/horticultural-spectroscope-upgrade-planning).

**Recent accomplishments:**

- Acquiring most of the hardware parts
- Setting up the Raspberry pi to interface with the computer over USB and successfully viewing the camera output on the raspberrypi.local/html web address.

This article describes the fun part, hardware assembly!

For the most part, I followed the steps in [Assembling the Public Lab Lego Spectrometer](https://publiclab.org/notes/warren/12-13-2017/assembling-the-public-lab-lego-spectrometer) until I found out my pi NoIR camera was oriented differently, so I had to alter the lego structure. See all steps below:

![image description](/i/32530.jpg "20190529_133144.jpg")

**1\. Confirm Pi Zero W and Pi NoIR camera are successfully set up to be "plug and play" with the computer**

This step was extremely important for me, as I didn't want to be fiddling around with the SD card or the pi, or the camera after it was set up inside the spectrometer.

![image description](/i/32531.jpg "20190529_133737.jpg")**2\. Layout lego pieces**

All the pieces are organized and in the correct number. Great!

![image description](/i/32550.jpg "20190530_000611.jpg")

I also cleaned each individual lego piece with a brush to minimize the
amount of dust that would get locked into the spectrometer. Any dust
inside the housing could later end up on the diffraction grating or
camera lens, or even the slit, which would be undesirable.

![image description](/i/32532.jpg "20190529_152103.jpg")

**3\. Assemble the lego, glue in the camera**

With the first three layers assembled, I used gorilla superglue dabbed around the camera breakout (not on the electronics parts! Just around the edges near the screw holes and on the back of the camera connector, which has a big flat piece of plastic). Little did I know I'd soon have to pry the camera off due to this camera having a different orientation!!

![image description](https://publiclab.org/i/32533.jpg "20190529_153422.jpg")

---------

**4\. Focus the camera**

To focus the camera, I first cut a piece of card the same length as the distance between the camera lens and the front of the spectrometer, where the slit would go. That's because I ultimately wanted to focus the camera on the slit.

Then, I used this piece of card to align a picture directly ahead of the camera, using a metal arm device. The idea was that if I focused on the photograph, it should be akin to focusing on the slit since they are the same distance from the camera (just that the diffraction grating redirects the light from the slit into the camera from a different angle).

![image description](/i/32534.jpg "20190529_153845.jpg")

I focused the lens using the little plastic tool that came with the pi NoIR.

Here you can see the screenshot on my computer of the before and after:![image description](/i/32535.jpg "20190529_153851.jpg")![image description](/i/32536.jpg "20190529_154728.jpg")

**5\. A big problem with the camera orientation!**

It was here that I started realizing something was wrong. In real life, the public lab image was upright, but in my computer, it was upside down. I expected it to be sideways. Being upside down, it meant that the diffraction grating was going to deflect the spectrum from bottom of the camera sensor to top, not left to right. I consider this to be a major error, as due to "rolling shutter", the camera reads data from the sensor in horizontal lines one at a time. It is MUCH more strategic to have the entire spectrum readable from one single horizontal line.

I had to now rip off the camera from the plastic and make the cable come out the side of the spectrometer.

This is how the modified version looks:
![image description](/i/32537.jpg "20190529_181909.jpg")

Parallel to this, I prepared the diffraction grating:  
![image description](/i/32538.jpg "20190529_161343.jpg")

**6\. Diffraction Grating**

I used the thin diffraction grating film provided by PublicLab rather than the DVD.
First, I dug through my recycling bin and found a very stiff clothing tag to become the frame for the diffraction grating. With a knife I cut it into the correct dimensions with a small hole just big enough to fit the camera lens.

Being very careful to only handle the gratings by the edges, and only place them on clean, dust free surfaces, I cut them into pieces with scissors.

![image description](/i/32539.jpg "20190529_163254.jpg")

I chose the cleanest piece with least visible scratches/dust, and taped it onto the card frame. This I had to attempt twice, to try to get it as flat as possible. The film warps easily, and I didn't want that negatively affecting my measurements.

![image description](/i/32540.jpg "20190529_164448.jpg")

When I hold the grating up, you can see the reflection of my window blinds. It should be perfectly straight, but it's not. That's because the diffraction grating is a bit warped, but it was the best I could do.

![image description](/i/32541.jpg "20190529_181909.jpg")

**7\. Nearing final assembly**

Here the build is nearly complete. I've put in the black card to prevent reflections, but I still haven't put in the slit. I also haven't fixed the diffraction grating in place. That was a lot of work for one day and I'll finish this post when it's done.

For now, I checked on the camera feed to see what the spectrum looks like, just from light coming in the window. For having no slit, I'm pretty happy with it and I hope it will look better when the slit is in place. Time to go buy some razors...

![image description](/i/32542.jpg "cam_pic_noslit.php.jpg")

**Update**:

The next steps can be found at [Horticultural Spectrometer - Assembly II](https://publiclab.org/notes/jenjimah/06-02-2019/horticultural-spectrometer-assembly-ii?_=1559501232)