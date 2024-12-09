---
title: 'PhenoPi: beta software installer release'
tagnames: webcam, pi, phenopi, phenology, imaging, raspberry
author: khufkens
path: /notes/khufkens/05-03-2015/phenopi-beta-software-installer-release.md
nid: 11779
uid: 438931

---

![](https://publiclab.org/public/system/images/photos/000/009/740/original/Screen_Shot_2015-04-23_at_21.03.23.png)

# PhenoPi: beta software installer release

by [khufkens](../profile/khufkens) May 03, 2015 03:28

May 03, 2015 03:28 | Tags: [webcam](../tag/webcam), [pi](../tag/pi), [phenopi](../tag/phenopi), [phenology](../tag/phenology), [imaging](../tag/imaging), [raspberry](../tag/raspberry)

----

Hi everyone, I'm releasing a first version of my PhenoPi software installation package onto the world.

The goal of the set of scripts is to minimize the amount of time spend on setting up a PhenoPi camera. The current set of scripts should be run on a clean raspberry pi to ensure a proper setup. Any volunteers to test the code are welcome (but do this on a non operational pi as it might mess with your stuff). Currently no images will be uploaded to the PhenoPi server, so everything is stored in the phenopi_images folder.

New additions to the code are a privacy filter so images do not include up to the bottom half of the image in those uploaded for scientific research. This to avoid privacy issues when overlooking gardens when I'm primarily interested in the vegetation higher up or in the distance.

####**update (2015/05/05):** 
The latest code now includes support for a toggle switch which allows for taking private snapshots as well as cleanly powering down the raspberry pi. Feedback is provided through an LED which will flash 5 times when taking a snapshot, or burn continuously until power down. I consider the software as good as finished. Optimizations will be made to speed up processing or increase consistency but all basic functionality is now available. Over the next few weeks I'll probably include screening for the presence of a hardware clock and call the necessary installation routines if present. However, if hooked up to a permanent internet connection the lack of a hardware clock should not be an issue. This is only a feature added for people in remote locations or to build standalone applications (potentially powered by solar or battery installations).

## Installation

In your raspberry pi home directory (/home/pi) clone the project to your raspberry pi using the following command (with git installed)

	git clone https://khufkens@bitbucket.org/khufkens/phenopi.git

all files will be cloned into a directory called phenopi

## Use

To run the basic install using the following command

	sh /home/pi/phenopi/install_phenopi.sh site_name privacy_value
	
or

	./install_phenopi.sh site_name privacy_value

in the /home/pi/phenopi directory

with "site_name"  the name of the site (no spaces allowed) and "privacy_value" how much of the bottom of the image in % you want to see removed (0, 25 or 50 are accepted values, default is 0)

After the installation your camera should be up and running and you should be able to find a website displaying constantly updating image at

	http://IP:8080

This website will look like this (see below) showing the current image stream as well as the latest uploaded image (at night the colours are strange due to reflections of status LEDs and long exposures).

[![Screen_Shot_2015-05-02_at_22.47.15.png](https://i.publiclab.org/system/images/photos/000/009/739/medium/Screen_Shot_2015-05-02_at_22.47.15.png)](https://i.publiclab.org/system/images/photos/000/009/739/original/Screen_Shot_2015-05-02_at_22.47.15.png)

## Notes

Make sure that your raspberry pi camera is enabled, a description on how to enable your camera is provided on [the raspberry pi site](https://www.raspberrypi.org/documentation/usage/camera/)