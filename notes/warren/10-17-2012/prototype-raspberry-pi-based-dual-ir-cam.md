---
title: 'Prototype Raspberry Pi-based dual IR cam'
tagnames: near-infrared-camera, nrg, ndvi, raspberry-pi, ircam
author: warren
path: /notes/warren/10-17-2012/prototype-raspberry-pi-based-dual-ir-cam.md
nid: 4471
uid: 1

---

![](https://publiclab.org/sites/default/files/IMG_0923.JPG)

# Prototype Raspberry Pi-based dual IR cam

by [warren](../profile/warren) October 17, 2012 20:35

October 17, 2012 20:35 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nrg](../tag/nrg), [ndvi](../tag/ndvi), [raspberry-pi](../tag/raspberry-pi), [ircam](../tag/ircam)

----

Working on this prototype for the upcoming Barnraising -- i want to have a point-and-shoot IR-VIS camera which is light and can be sent up on a balloon, and which auto-composites image pairs. More progress soon, I'm starting to collect code here: 

https://github.com/jywarren/irkit/

https://github.com/jywarren/irkit/issues/1

Parts so far:

* 2x USB Webcam (SYBA, same as in the DIY Spectrometry Kit), one modified for near-infrared
* 1 Raspberry Pi
* 2 USB > Mini-USB cables
* 1 SD card
* 1 cardboard box
* 1 USB power supply, i'm ordering one that runs on AA batteries, and using a Micro-USB power supply for now.

The camera's internals can be seen below:

<a href="https://www.flickr.com/photos/jeffreywarren/8097984844/" title="Public Lab IRCAM prototype by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8045/8097984844_e760e32349.jpg" width="500" height="375" alt="Public Lab IRCAM prototype"></a>

<a href="https://www.flickr.com/photos/jeffreywarren/8097979456/" title="Public Lab IRCAM prototype by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8471/8097979456_a22c77cd8c.jpg" width="500" height="375" alt="Public Lab IRCAM prototype"></a>

The idea is that for relatively low cost ($60) we could make a "hacker's camera" with both infrared and regular webcams built around a raspberry pi, which when you take a picture, auto-composites the two images into NDVI and NRG. So you're left with an SD card with precomposited images, as if it were a regular digital camera.

Later, we could add all sorts of other functionality -- 

* auto-timelapse/intervalometer -- 10 second auto-triggering
* put it in a waterproof box for a DIY GoPro
* add a mini USB wifi dongle and watch the video feed live from your phone/laptop
* add corner eyebolts for an easy Picavet suspension
* make an easy scripting system -- put any python script in the /scripts/ folder

I really like the idea that the first version is built into a small cardboard box, so I used a small Sparkfun box. 

Anyhow, I'm kind of stuck at the step of taking a single snapshot from the commandline on the Raspberry Pi (debian image). See here, I could def. use some help: https://github.com/jywarren/irkit/issues/1

**Update:** First images taken! Woohoo!

<a href="https://www.flickr.com/photos/jeffreywarren/8100908493/" title="IRCam first image pair by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8472/8100908493_c02a5a4138.jpg" width="352" height="288" alt="IRCam first image pair"></a>
<a href="https://www.flickr.com/photos/jeffreywarren/8100908441/" title="IRCam first image pair by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8463/8100908441_88222431ea.jpg" width="352" height="288" alt="IRCam first image pair"></a>