---
title: "IRCam"\ntagnames: 'near-infrared-camera, ircam, infragram'
author: warren
path: /wiki/ircam.md
nid: 5733
uid: 1

---

# IRCam

by [warren](../profile/warren), [danbeavers](../profile/danbeavers)

January 26, 2013 17:48 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ircam](../tag/ircam), [infragram](../tag/infragram)

----

Planning page for the IRCam project, for a hackable, dual-webcam, Raspberry Pi-based point-and-shoot camera.

Framing: ?garden cam?, educational, on-the-ground point-and-shoot

* appeal to a different demographic
* hackable, "open source gopro"
* NRG images are ?tea leaves? language of power with regulators (see below)

Although *our* use case would primarily be aerial, we should frame the IRCam as a primarily on-the-ground, simple point and shoot camera, and that rather than position it as a niche product for grassroots mappers, we should recast it as a simple camera that lets you see how healthy plants are. This means that our primary audience would potentially be **home gardeners**, and I see that as a great opportunity to reach a less-geeky, less technical demographic.

* a standardized way to script a Pi is great -- drop scripts in a /scripts/ folder, and/or use a web interface to edit the files - this could indeed have broad appeal, also to CHDK types who just like scripting cameras
* pitch the low-hanging cool features with example/default scripts for timelapse, IR compositing, motion detection, and access over WiFi to the live image
* mention aerial use, and build in picavet eyelets, but describe that as an extra, not the central feature
* pitch it as an open-source, completely hackable GoPro, and offer an advanced model in a mini pelican case
  * stu pointed out that we might not benefit from a feature-by-feature comparison to the GoPro on resolution/fps, but we could "beat" them on scriptability, open sourceness, and # of imaging bands
* solar power module?
* a "hacker's kit" with extra sensors and stuff
* Pi-less version for extra cheap -- prob. plenty of Pi owners out there with no idea what to do with them

The main idea though is to imagine a gardener seeing this, rather than an engineer. How can we appeal to that large demographic? Wouldn't it be nice to have lots of gardeners and farmers in addition to all the techies we already attract?

Scott Eustis said something really interesting to me, which was that regulators treat NRG imagery like "the tea leaves", i.e. anyone can walk in with a Google map these days, but somehow NRG is a language of power for coastal management. I'd love to talk about that in the KS pitch.


![ircam.jpg](https://i.publiclab.org/system/images/photos/000/000/016/medium/ircam.jpg)


###Quick links

* GitHub page: https://github.com/jywarren/irkit (no code yet, [but issues](https://github.com/jywarren/irkit/issues/))
* [timed camera triggering](https://github.com/jywarren/irkit/issues/1)
* Parts list: [IRCam materials](/wiki/ircam-materials)
* [Prototype photos & info](/notes/warren/10-17-2012/prototype-raspberry-pi-based-dual-ir-cam)
* [Early sketches](/notes/warren/9-23-2012/leaffest-brainstorm-raspberry-pi-based-dual-webcam-kit-0)
* [Script from old Spectrometer Kickstarter](/notes/warren/8-1-2012/spectrometer-kickstarter-script) for reference

The idea is that for relatively low cost ($60) we could make a "hacker's camera" with both infrared and regular webcams built around a raspberry pi, which when you take a picture, auto-composites the two images into NDVI and NRG. So you're left with an SD card with precomposited images, as if it were a regular digital camera. 

For basic use, it's dead simple -- its a point and shoot camera that takes infrared composites. Later, we could add all sorts of other functionality:

* auto-timelapse/intervalometer -- 10 second auto-triggering
* put it in a waterproof box for a DIY GoPro
add a mini USB wifi dongle and watch the video feed live from your phone/laptop
* add corner eyebolts for an easy Picavet suspension
* make an easy scripting system -- put any python script in the /scripts/ folder, or even make a web-based editor on the WiFi network

<a href="https://www.flickr.com/photos/jeffreywarren/8412812124/" title="IRCam draft box by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8323/8412812124_d0472718ed.jpg" width="500" height="375" alt="IRCam draft box"></a>

###Case design

Case will probably be approx 3"x5"x2". There could be several cases:

* a printed and die-cut cardboard case for the early-shipping DIY kit
* an injection-molded or 3d-printable plastic case for the more finished camera
* a shockproof and waterproof case comparable to a GoPro
* a splash resistant and boyant case

All 4 might have built-in eye-bolts for hanging from a camera and/or building a Picavet suspension.

###To-do/Questions
 * What is the status of the Pi Camera? Info here: http://www.raspberrypi.org/archives/1254 and here: http://www.raspberrypi.org/phpBB3/viewtopic.php?f=43&t=6120

###Video storyboarding ideas...

<a href="https://www.flickr.com/photos/jeffreywarren/8446957711/" title="Infracam storyboard by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8373/8446957711_1c5204691f.jpg" width="500" height="375" alt="Infracam storyboard"></a>

###Video clips we can use

* NASA Landsat false-color US Northwest video: http://www.nasa.gov/multimedia/videogallery/index.html?media_id=158346181
* Herschel discovering infrared light (corny animation for kids): http://www.nasa.gov/multimedia/videogallery/index.html?media_id=152095761
* "Science off the Sphere: Earth in infrared" - feature with hacked IR camera on the Int. Space Station: http://www.nasa.gov/multimedia/videogallery/index.html?media_id=141104181
* Las Vegas NIR timelapse: http://www.nasa.gov/multimedia/videogallery/index.html?media_id=134899141
* Mt. St. Helens: http://www.nasa.gov/multimedia/videogallery/index.html?media_id=143881251
* Landsat Gallery: http://svs.gsfc.nasa.gov/search/Series/Landsat7.html

**NASA Earth Observatory:**

* Dubai NRG timelapse: https://www.youtube.com/watch?v=F6d11Q14A5A

**CC-BY licensed videos:**

* Tomato timelapse: https://www.youtube.com/watch?v=4Mn0-dJY32Q
* Wheat seed timelapse (section): https://www.youtube.com/watch?v=oJDzNrE0CXA
* Pine seed timelapse: https://www.youtube.com/watch?v=lqYXJD_Kvpo
* Watering neglected plant timelapse: https://www.youtube.com/watch?v=ojQJzrJm3ow

##Rewards planning

###Superlow pricepoint

can we do a papercraft thing???

###Low pricepoint

($40/80 - DIY kit minus the raspberry pi)

$70/$150 - DIY Kit - the camera parts thrown in a box, cardboard designed printed enclosure
The camera - ideal price point, ideal product

$150/$300 - Centerpiece: built camera + NDVI software, nice enclosure, fund development, nicer cameras??(yes)

###High pricepoint

$400-500 - waterproof competitor for GoPro (tiny pelican cases, replacement lenses for gopro)

Common parts: $10 webcam, $35 raspberry pi, $4 wifi

##Version brainstorm

###Keychain-cam based version

* no scripting, only one camera
* could cost as little as $5 for the camera and board; writes to SD card
* must use a [filter swapper](/notes/mathew/3-12-2013/ir-filter-switchers) or a [beamsplitter](/notes/warren/3-10-2012/infraredvisible-single-camera-beamsplitter-setup)

###[Arduino-based version](/notes/mathew/3-12-2013/open-sourcehackable-camera-platforms)

* custom board would drive down board price to <$10 vs RPi's $25
* probably lower power requirements, does it have an onboard clock for 24h+ timelapse?
* can attach to sensors more easily than RPi

###Raspberry Pi-based version

* script it by putting simple Python scripts into /scripts/ folder
* gets OpenCV for on-board compositing
* can do WiFi remote (live) viewing and control
* can do video (can arduino? not sure)
