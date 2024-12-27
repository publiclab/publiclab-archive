---
title: "Set up a Raspberry Pi Camera with Pi Builder"

tagnames: 'balloon-mapping, kite-mapping, nasa, raspberry-pi, infragram, timelapse, pi-camera, activity:timelapse, activity:infragram, aren, location:blurred, activity:pi-camera, kite-, balloon-, infragram-pi, activity:infragram-pi, activity:pi-camera-setup, pin:activity:pi-camera-setup, zoom:6, lat:46, lon:48, place:russia'
author: warren
path: /notes/warren/05-20-2019/set-up-a-raspberry-pi-camera-with-pi-builder.md
nid: 19462
uid: 1

cids: 24214,24243,24266,24267,24299,24300,25042,25049,25050,25052,25058,25060,25071,25078,25090,25178,25179,25230,25537,26488,28849

---

![](https://publiclab.org/public/system/images/photos/000/032/344/original/Screen_Shot_2019-05-17_at_5.20.32_PM.png)

# Set up a Raspberry Pi Camera with Pi Builder

by [warren](../../../profile/warren) | May 20, 2019 15:11

May 20, 2019 15:11 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [nasa](../tag/nasa), [raspberry-pi](../tag/raspberry-pi), [infragram](../tag/infragram), [timelapse](../tag/timelapse), [pi-camera](../tag/pi-camera), [activity:timelapse](../tag/activity:timelapse), [activity:infragram](../tag/activity:infragram), [aren](../tag/aren), [location:blurred](../tag/location:blurred), [activity:pi-camera](../tag/activity:pi-camera), [kite-](../tag/kite-), [balloon-](../tag/balloon-), [infragram-pi](../tag/infragram-pi), [activity:infragram-pi](../tag/activity:infragram-pi), [activity:pi-camera-setup](../tag/activity:pi-camera-setup), [pin:activity:pi-camera-setup](../tag/pin:activity:pi-camera-setup), [zoom:6](../tag/zoom:6), [lat:46](../tag/lat:46), [lon:48](../tag/lon:48), [place:russia](../tag/place:russia)

----

Our [Pi Camera](https://store.publiclab.org/collections/diy-infrared-photography/products/infragram-pi-camera) and [Infragram Pi](https://store.publiclab.org/collections/diy-infrared-photography/products/infragram-pi-camera) kits are simple-to-use cameras designed for #timelapse, #balloon-mapping, or #kite-mapping. They're built using the **Raspberry Pi** educational mini-computer, but whereas usually you have to program and configure these, we've used **Pi Builder** (#pi-builder) to make this as simple and plug-and-play as possible. Here, we'll show how to start using one of these cameras, whether you got one pre-assembled or not.

In the following photos, I'm showing setup that works for either kit, but there are some minor variations depending on the camera version. But, the red film shown in front of the camera is just the extra filter used in the Infragram version of the kit, so if yours is the regular camera, just ignore it!

![image description](/i/32351.png "Screen_Shot_2019-05-17_at_6.08.26_PM.png")

_Plugging in the camera - step one, if it's already assembled._

#### Connecting to the camera

This camera is designed to work over WiFi - once plugged in, it'll start a WiFi network called 00-PiCamera, with password "publiclab", and you just need to connect to it with a laptop or smartphone.

If you need to assemble the camera, see the end of this post, where we walk through it step by step.

The camera will start up a new WiFi network, but it can take a couple minutes to show up. It should be at or near the top of the list:

![image description](/i/32348.png "Screen_Shot_2019-05-20_at_1.39.01_PM.png")

Once you've connected, you may see a popup showing the following welcome menu. However, this can also be opened in a browser window by going to the following address:

> [http://pi.local/](http://pi.local/)

![image description](/i/32342.png "Screenshot_2019-05-20_at_10.44.16_AM.png")

Click `Access the camera` to begin, and you should see the live video streaming as shown below.

**Note to iPhone/iPad users:** Apple doesn't seem to like to let you stay connected to this so if you close the popup and open this in a browser, it doesn't seem to stay connected to the network. You can just keep using it in the popup, but we haven't found a way around this yet -- [chime in on this issue](https://github.com/publiclab/pi-builder/issues/41) if you have suggestions! In the meantime, you can use a laptop without too much trouble.

![image description](/i/32343.png "Screenshot_2019-05-20_at_10.47.10_AM.png")

**Note that the camera I used was out of focus.** See "Focus" below to fix this.

#### Focus

Some of the cameras come from the factory a little out of focus. These tend to be the [Infragram versions](https://store.publiclab.org/collections/diy-infrared-photography/products/infragram-pi-camera "https://store.publiclab.org/collections/diy-infrared-photography/products/infragram-pi-camera") (the Pi Noir camera) -- and there should be a white plastic ring in your camera box, which you can use to focus the camera while looking through it.

![image description](/i/32347.png "Screen_Shot_2019-05-17_at_6.07.38_PM.png")

#### Timelapse

The timelapse start button below the video feed, at the center of the page, will start a timelapse that takes a photo every second. The settings for this (like how often it snaps a photo) can be modified by clicking on `Camera Settings`.

![image description](https://publiclab.org/i/32345.png "Screen_Shot_2019-05-20_at_12.05.02_PM.png")

**Note:** The built-in timelapse feature seems to work reliably. But when you stop the timelapse and go to download the images, sometimes the camera gets stalled because it wants to generate a video from the images, and it's often just too many images for this to work well. In this case, the easiest thing may be to carefully open the Pi Camera and pull out the SD card, and copy them that way. We're [trying to think of solutions](https://github.com/publiclab/pi-builder/issues/35) for this too.

#### For Infragram photos

If you have the [Infragram version](https://store.publiclab.org/collections/diy-infrared-photography/products/infragram-pi-camera) you may want to read more at [https://publiclab.org/infragram](https://publiclab.org/infragram) and [https://publiclab.org/infragram-pi](https://publiclab.org/infragram-pi). But the `Access Infragram software` link should open up a live streaming Infragram NDVI video you can use as you would the normal Infragram website.

---------

## Assembly

We're selling kits that are pre-assembled, so if you have one of these, **just skip this section**. But assembling these isn't super hard; there are only 4 pieces plus the case, or 5 if you have the Infragram filtered version of the camera. 

  
You'll need (and [all of this comes in our kits](https://store.publiclab.org/collections/diy-infrared-photography/)):

- a Raspberry Pi Zero W
- a Raspberry Pi camera
- an adaptor cable from a wider camera ribbon cable to the narrower Pi Zero width (the orange piece below)
- a Raspberry Pi case (or, just tape or screw it all to something?)
- a micro SD card with the Pi Builder default image: these come with your kit, can [be bought separately](https://store.publiclab.org/collections/diy-infrared-photography/products/pi-builder-cards), or see https://publiclab.org/pi-builder to download it

Here's everything except the SD card:

![image description](/i/32350.png "Screen_Shot_2019-05-17_at_6.01.35_PM.png")

Assembling your Pi Camera or Infragram Pi Camera is just a few steps. First, plug in the micro SD card, as shown here:

![image description](/i/32352.png "Screen_Shot_2019-05-17_at_6.02.09_PM.png")

Then, attach the small "adaptor" ribbon cable - the one with 2 different sized ends - by pulling out the black strip to "open" the slot. You can use your fingernails to pull where the two blue arrows indicate in the next image -- pull in the direction shown.

When inserting the ribbon, be sure the metallic pads are "facing" the green circuit board. In this image, they're facing down towards the board, and we see the black, non-metallic side facing towards us. Once it's inserted, you can push the black bar back into place, trapping the ribbon against the green circuitboard. Be sure the ribbon is all the way in - in this image, I'm still pushing it into place. ![image description](/i/32354.png "Screen_Shot_2019-05-17_at_6.02.58_PM.png")

Now we can pull the longer ribbon cable off of the camera, as shown in the next image. You can do the same "opening" of the black bar to release the ribbon:

![image description](/i/32355.png "Screen_Shot_2019-05-17_at_6.03.25_PM.png")

Now, replace that ribbon with the fat end of the short ribbon cable, connecting the camera to the board:![image description](/i/32356.png "Screen_Shot_2019-05-17_at_6.03.36_PM.png")

Now take the whole board + camera, connected by the short ribbon cable, and line up the ports with the matching holes in the bottom of the case, like this, angling the board to get it to pop in (you can press on the middle of the board and it'll "click" into place, but it's a bit tricky):![image description](/i/32357.png "Screen_Shot_2019-05-17_at_6.04.02_PM.png")

Now, align the holes in the camera with the matching holes in the top part of the case, and snap those into place too. For a v2 camera, it'll snap in and hold snugly. **For older v1 camera boards, the fit is not as good;** I've secured it with tape in some cases; the pegs align with the holes, but if you push it all the way in, the really tiny ribbon cable holding the camera in place gets unplugged. ![image description](/i/32358.png "Screen_Shot_2019-05-17_at_6.04.30_PM.png")

Once it's properly seated, you'll be able to close up the case like this:![image description](/i/32359.png "Screen_Shot_2019-05-17_at_6.04.58_PM.png")![image description](/i/32360.png "Screen_Shot_2019-05-17_at_6.05.04_PM.png")

If you're using a normal Raspberry Pi Camera kit, you're done - just plug it in and follow the instructions at the start of this post.

#### Infragram Pi

If you're using an Infragram Pi camera kit, you'll need to do just one more step; adding a red filter (or a blue one, but we recommend red) to the front of your camera. It's pretty easy; just cut out a square of the red filter, trying not to get fingerprints or dust on it:

![image description](/i/32362.png "Screen_Shot_2019-05-17_at_6.06.23_PM.png")

Then, tape it in place. If you'd like to protect it better, you could try adding some kind of ring in front, but carrying this in a soft bag has been enough to keep it in good shape, in my experience. ![image description](/i/32363.png "Screen_Shot_2019-05-17_at_6.07.21_PM.png")

Now you're done!

### Turn it on

Now, just plug in the camera with a Micro-USB cable, and wait for it to start up. See "Connecting to the camera" above for how to take photos!

---------

This work was supported in part by [NASA](https://science.nasa.gov/stem-activation-team "https://science.nasa.gov/stem-activation-team") through the [AREN project](https://www.globe.gov/web/aren-project/ "https://www.globe.gov/web/aren-project/"), which focuses on educational uses of kite aerial photography for photographic and sensor data collection. Read more at #aren.