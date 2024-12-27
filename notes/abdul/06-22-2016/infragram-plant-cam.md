---
title: "Infragram Plant Cam"

tagnames: 'infragram, infragram-point-shoot, infragram-plant-cam, first-time-poster'
author: abdul
path: /notes/abdul/06-22-2016/infragram-plant-cam.md
nid: 13232
uid: 479194
cids: 
---

# Infragram Plant Cam

by [abdul](/profile/abdul) | June 22, 2016 22:19

June 22, 2016 22:19 | Tags: [infragram](/tag/infragram), [infragram-point-shoot](/tag/infragram-point-shoot), [infragram-plant-cam](/tag/infragram-plant-cam), [first-time-poster](/tag/first-time-poster)

----

The **Infragram Plant Cam **is a handheld, battery powered mini camera (a modified Mobius Action Cam) for doing plant analysis. It ships from the factory with a standard infrared-blocking filter and we ship an additional a red filter that, when installed on the camera, effectively exchanges its blue light channel for infrared light. This is based on a great deal of [research by Public Lab contributors](http://publiclab.org/tag/infragram) and was initially pioneered in our community by @nedhorning and @cfastie. See especially [these](http://publiclab.org/notes/cfastie/04-22-2014/mobius-ir-conversion) [two](http://publiclab.org/notes/cfastie/04-18-2014/mobius-filter-o-matic) research notes.  

Vineyards, large farms, and NASA all use [near-infrared photography](http://publiclab.org/wiki/near-infrared-camera) for assessing plant health, usually by mounting expensive sensors on airplanes and satellites. At [Public Lab](http://publiclab.org), we've developed a Do-It-Yourself way to take these kinds of photos, enabling us to monitor our environment through quantifiable data.

[![5412520298_93873f36d0_o.png](https://i.publiclab.org/system/images/photos/000/005/386/medium/5412520298_93873f36d0_o.png)](https://i.publiclab.org/system/images/photos/000/005/386/original/5412520298_93873f36d0_o.png)

Our technique uses a modified digital camera to capture near-infrared and red light in the same image, but in different color channels. We then post-process the image to attempt to infer how much plants are photosynthesizing. This allows us to better understand and quantify how much of the available light plants are using to produce sugar via photosynthesis.

###Basics

Before you begin, to take useful plant analysis photos, you'll have to modify your camera's white balance, so that vegetation looks "bluish" but there is not an overall red tinge to the images. You can achieve this with a custom config file, as described below. As of 6/22/16, cameras purchased on the public lab store come with preconfigured white balance installed on the micro SD card.

Some cameras may require a firmware upgrade to v1.20. If you've gotten your Infragram Point & Shoot from Public Lab's Kits initiative (through [Kickstarter](http://kickstarter.com/projects/publiclab/infragram-the-infrared-photography-project) or the [Public Lab store](http://store.publiclab.org)), both the config file and the v1.20 firmware should be on the SD card provided (in addition to this documentation!). However, you'll still have to load up the white balance file as described in "Installing config file" below.

###Troubleshooting

If you have trouble, please [post on this site](/post?tags=question:infragram&template:question) or [join the infrared discussion list](/lists). 

For any information, support, or troubleshooting not covered here, please look to [this epic thread about the Mobius Action Cam at RCGroups.com](http://www.rcgroups.com/forums/showthread.php?t=1904559) which contains a great deal of information about using and modifying the camera. An official manual for the Mobius Action Cam can also be found here: <a href="https://www.mobius-actioncam.com/downloads-info/" target="_blank" > https://www.mobius-actioncam.com/downloads-info// </a>
###Using the camera

There are three basic modes to the camera, which you can switch through with the **M** button, and each shows a different color on the main LED. 

[![modes.png](https://i.publiclab.org/system/images/photos/000/005/381/medium/modes.png)](https://i.publiclab.org/system/images/photos/000/005/381/original/modes.png)

_(Artwork based on: http://publiclab.org/notes/mathew/05-10-2014/illustrating-infragram-point-shoot-instructions)_
Once you've loaded the custom white balance in the config file (see below) and charged up the camera, you're ready to use it -- just turn it on, press **M** twice, until you see a RED light. Then you can use the "Shutter" button which looks like: <i class="icon icon-video-camera"></i>, to take photos. The red light will blink. 

Images should look roughly like the "GOOD" example below -- vegetation should appear generally pastel blue. An incorrectly white-balanced image such as the "BAD" example below may appear with an overall reddish tint. This means the camera probably has not accepted your config file, possibly due to misformatting or incorrect uploading. 

[![good-bad.png](https://i.publiclab.org/system/images/photos/000/005/383/medium/good-bad.png)](https://i.publiclab.org/system/images/photos/000/005/383/original/good-bad.png)

###Installing config file

As of 6/22/16 cameras shipped from the Public Lab store have firmware and config file uploaded onto the installed micro SD card.

If your camera did not ship with a config file or you are using a new SD card, **follow these steps to get your Infragram Point & Shoot to take properly white-balanced images**, necessary for post processing at [Infragram.org](http://infragram.org). This is also relevant for anyone who has a Mobius Action Cam and wants to script or customize its settings. 

The config file may also be used to set up **Timelapse Mode** -- see below at [the Timelapse section](#Timelapse).

Note: The WB setting in the config file should be "7" but occasionally we've found that some cameras require an "8" -- if you have trouble, please [post to the plots-infrared list](/lists).

1. turn the camera on with the "Power" button *while* also pressing "Mode" until the red light blinks 3 times (5-6 secons) to generate a config
2. plug it in via USB and wait for the disk to appear
3. replace the generated config file with this one in the home directory: <a href="https://i.publiclab.org/system/images/photos/000/005/385/original/SYSCFG.TXT"><i class="icon icon-file"></i> SYSCFG.TXT</a> or <a href="https://i.publiclab.org/system/images/photos/000/005/225/original/SYSCFG.TXT"><i class="icon icon-file"></i> SYSCFG.TXT</a> for a 2-second timelapse mode. 
4. repeat turn on pressing mode.

###Timelapse

To set the camera to Timelapse mode, you'll need to follow the above instructions for uploading a custom config file; you can use this one to have a 2-second timelapse, or tweak the `Set Time Lapse Shooting` line for an interval you prefer: <a href="https://i.publiclab.org/system/images/photos/000/005/225/original/SYSCFG.TXT"><i class="icon icon-file"></i> SYSCFG.TXT</a> 

To start timelapse mode:

1. Turn on the camera
2. Press **M** twice to enter Photo Mode
3. Press the shutter button (<i class="icon icon-video-camera"></i>) to start the timer, and look for the blinking red light:

[![timelapse.png](https://i.publiclab.org/system/images/photos/000/005/384/medium/timelapse.png)](https://i.publiclab.org/system/images/photos/000/005/384/original/timelapse.png)

_(Artwork based on: http://publiclab.org/notes/mathew/05-10-2014/illustrating-infragram-point-shoot-instructions)_

###Updating firmware

v1.20 firmware: 

<a href="https://i.publiclab.org/system/images/photos/000/005/103/original/Mobius_FW_V1.20.zip"><i class="icon icon-file"></i> Mobius_FW_V1.20.zip</a>

Excerpted from [RCGroups.com](http://www.rcgroups.com/forums/showthread.php?t=1904559):

    1. Download the firmware .zip archive file and un-zip it. Copy the actual firmware file (always named FWTLCAM.BIN as noted above) from it's identifying folder into the camera's flash card root directory (the one that opens when the camera connects as a removable drive). This can be done with the card in the camera connected to the computer as a Removable Drive, or externally in a card reader. But do NOT rename the file. If you do, the camera will not install it!
    2. Disconnect the camera and turn it off.
    3. Insert the flash card containing the new firmware file into the camera (if not already in the camera).
    4. Press the Power button until the BLUE LED turns on and begins to flash. RELEASE THE POWER BUTTON AS SOON AS LED FLASHING BEGINS! If you keep pressing it longer, you may turn off the camera before the update process is done. DO NOT PRESS ANY BUTTONS WHILE THE INSTALLATION IS IN PROGRESS (about 20 sec. to complete)
    5. To confirm the firmware is being loaded into the camera, the BLUE LED will continue to blink during the upload process.
    6. When the FW installation is complete, the BLUE LED will turn off for about 2 sec. and the YELLOW LED will then turn on solid, indicating the FW file is has been automatically deleted from the memory card.
    7. You're done! The camera will be in the normal start-up standby mode ready for use.`

###Resources

Kit insert: <a href="https://i.publiclab.org/system/images/photos/000/005/388/original/infragram-ps-insert.pdf"><i class="icon icon-file"></i> infragram-ps-insert.pdf</a>

<a href="https://i.publiclab.org/system/images/photos/000/005/390/original/timelapse.svg"><i class="icon icon-file"></i> timelapse.svg</a>

<a href="https://i.publiclab.org/system/images/photos/000/005/389/original/modes.svg"><i class="icon icon-file"></i> modes.svg</a>

