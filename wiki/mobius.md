---
title: 'Mobius'
tagnames: infrared-camera, infragram, mobius-actioncam, mobius, pendulum-rig
author: tonyc
path: /wiki/mobius.md
nid: 12617
uid: 447491

---

# Mobius

by [warren](../profile/warren), [Clash](../profile/Clash), [tonyc](../profile/tonyc)

January 25, 2016 22:07 | Tags: [infrared-camera](../tag/infrared-camera), [infragram](../tag/infragram), [mobius-actioncam](../tag/mobius-actioncam), [mobius](../tag/mobius), [pendulum-rig](../tag/pendulum-rig)

----

The Public Lab community has been using variants of the Mobius ActionCam for aerial photography purposes for some time, and has also used this as the basis of our Infragram Point and Shoot camera.

The purpose of this page is to provide an overview of operation for these cameras, specifically as an aerial mapping tool.

## Questions

[mobius](../../tag/question:mobius)

## Activities

[mobius](../../tag/activity:mobius)

****

## Lenses

### Model A

From the factory, the Mobius has a couple options, including the Model A, which has an 87-degree field of view. This is the __least__ fisheye option from the sales channels, such as Amazon or Mobius-USA websites. We offer this camera in the PL store, and this is the model we have modified as part of the Infragram Point and Shoot camera (where they remove the IR cut filter at the factory, and replace with our red gel for NDVI photography.

### M12 Security Camera Lenses
The Mobius was designed to take a standard "M12" threaded lens, which makes it simple to swap out the kit lens for any of a number of lenses available online. @pcoyle posted some research around finding the best options for aerial mapping, and you can find those notes [here](https://publiclab.org/notes/patcoyle/08-01-2015/mobius-non-fish-eye-lens-conversion).

Based on this research, we decided to offer Mobius cameras pre-fitted with 6mm lenses [found here](http://store.publiclab.org/collections/mobius-actioncam), installed at the factory. We also offer 8mm lenses as an alternate. 

## Exchanging Lenses

this involves opening the camera, then using the small hex driver (provided) to loosen a set screw. This will allow the original lens to be unthreaded and exchanged. 

Photos and tutorial on exchanging lenses to be created soon, but for now, you can find this information readily on youtube, examples [here](https://www.youtube.com/watch?v=-dZRjscVtkA) and [here](https://www.youtube.com/watch?v=c0rfPHh01NA).

In order to focus the lens, you can view the camera in a live-view mode, a.k.a. webcam mode, and manually adjust the focus. Once the focus is set, you can choose to lock the focus in place, or to leave it unlocked before closing the camera body housing. Locking it will prevent accidental loss of focus, but will limit you to the one focal setting. In aerial applications, this is preferable, leaving focus locked at infinity. In some operations, you may want ability to focus on nearer objects.

## Camera Operation

[![mobius-demo.jpg](//i.publiclab.org/system/images/photos/000/013/845/medium/mobius-demo.jpg)](//i.publiclab.org/system/images/photos/000/013/845/original/mobius-demo.jpg)

This is the basic instructions we ship with the camera, explaining the custom default settings we install, and enough info to get you going.


The Mobius has three main modes of operation. You can toggle between these modes by pressing the "Mode" button (signified by "M" on the button).

The modes are:

* Photo mode (Red)
* 1080p Video (Yellow)
* 720p Video (Blue)

We modify the firmware and system configuration before selling these cameras to optimize them for aerial mapping purposes. Specifically we:

* set the default mode to "Photo"
* set the photo mode to a 5-second intervelometer, at highest resolution
* allow locking white balance and exposure by pressing and holding "mode" button for 3 seconds
* setting camera to turn off automatically after 2 minutes of down time.
* turning off the time/date stamp

###Setting balance and exposure

It is ideal to lock both white balance and exposure prior to taking a large series of photos, especially if you plan to later "stitch" these photos together, as inconsistencies in the exposure settings can make the job much more difficult.

You can set custom white balance and exposure for the duration of an entire flight by simply aiming the camera at the grey card provided (or any 18% grey card or equivalent), in lighting conditions as close to your flight as possible. Make sure the camera is turned on, and in standby mode (not taking photos). Top LED should be a solid red. Then hold down the "Mode" button for 3 seconds, until the camera LED light turns off. Release the "mode" button, and your exposure is now set.

## Mounting the Mobius camera for flight

There are many ways to attach a camera such as the Mobius to a flying line; one of the biggest advantages of such a camera is that its light weight and tiny form factor allow it to be easily rigged up.

Here we will give a couple of the most direct options, using common materials. You can post your own solutions, and find many others under development, by looking at Public Lab research notes with the tag: pendulum-rig.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3bVAKGaXiUk" frameborder="0" allowfullscreen></iframe>

## Customizing the configuration file and firmware.

We ship the camera with the current version of firmware. You can find the most up-to-date version here, and if you see a discrepency between this and our version, please let us know by emailing kits@publiclab.org. We might have missed the update!

The coinfiguration file can be edited in a few ways. There are graphical tools available to let you edit the configuation file on your camera, available for Mac and Windows systems. 

The most direct way is to edit the file directly using a text editor program, such as Notepad for Windows

## accessories

some accessories that look promising, currently available from third-party vendors (links provided as example, not we don't actually recommend anyone in particular).

###lens extension cable

###silicon housing

###AV Out cable (for live view applications)

##other relevant links and notes
link here to other links and tags on PL and beyond.