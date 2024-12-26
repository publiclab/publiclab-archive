---
title: "Attaching a Raspberry Pi Camera to a Microscope Objective Lens"\ntagnames: 'raspberry-pi, with:kgradow1, with:warren, microscope, pi-camera, microscopes, with:wmacfarl, with:bmela, activity:basic-microscope, basic-microscope, series:basic-microscope'
author: partsandcrafts
path: /notes/partsandcrafts/02-15-2018/2-attaching-your-raspberry-pi-camera-to-a-microscope-objective-lens.md
nid: 15739
uid: 66014

---

![](https://publiclab.org/public/system/images/photos/000/023/562/original/image21.jpg)

# Attaching a Raspberry Pi Camera to a Microscope Objective Lens

by [partsandcrafts](../profile/partsandcrafts) | February 15, 2018 01:26

February 15, 2018 01:26 | Tags: [raspberry-pi](../tag/raspberry-pi), [with:kgradow1](../tag/with:kgradow1), [with:warren](../tag/with:warren), [microscope](../tag/microscope), [pi-camera](../tag/pi-camera), [microscopes](../tag/microscopes), [with:wmacfarl](../tag/with:wmacfarl), [with:bmela](../tag/with:bmela), [activity:basic-microscope](../tag/activity:basic-microscope), [basic-microscope](../tag/basic-microscope), [series:basic-microscope](../tag/series:basic-microscope)

----

# What are we trying to see?

For a full overview of this project, go to [Raspberry Pi Microscope Build](https://docs.google.com/document/d/1mqeOz84TwVzDMsIloGuxewtNV1DpC2f5Dz0_d74bzfw/edit#).

Our goal in this microscope project is to be able to look at and identify respirable particles with diameters between 1um and 10um. Most DIY digital microscopes that we've found are made by flipping the lens from a camera and holding it further away from the sensor using an extension tube of some kind. The Open Flexure Microscope uses this method.

![](https://lh6.googleusercontent.com/QCjUevhUn7MuHt40rya4GDM9YCySxm-4u9Yzj0J13JsHPe_9zQ8zxxmObAVy5npkZz3S0BOqfwqHM_eJRt1PASKlLbGW4bk6fRHOGKsfZAnFMt4lHUBLwUGdpC5evdkTo1qZmDuS)

This is a technique that's also very common in macro photography. With normal photography you are trying to project the image of a large object on a relatively tiny sensor. With microscopy and macro photography we are doing the opposite -- projecting the image of a very tiny object on a comparatively large sensor, so we just need to reverse the lens.

![](https://lh3.googleusercontent.com/ugyjvDUvuexNYsPNDbUaIfhVssp5MQxfjGDTDmrZmOYRVyWype5_TCyc4769IRE7Ra1YIdVRBbDEFMn21E6CedtIQPPqHkz9-gZE8nn93xBn6NjUkMC_fHPvotkrvZSVP4OFRgdo)![](https://lh3.googleusercontent.com/cviszbf_3R5ZKJLUIs_B2tKEJ2_Fvu0kb02ziPKq8x5ujw4KI5ByvjDXl7YJwHk6qVcF6MvkpTvCd1IsueCsRl6Frexf-CTCItV_aoK5qYSD5tZk_axbUubbgR0eJ6X2MYx2jM1c)

This flipped-lens technique works reasonably well and can give us images that are in the size range we're looking for, but if we want to be able to identify particles by shape we believe we will need better magnification that we can get from a traditional microscope objective lens.

### Why Not the OpenFlexure Microscope?

The OpenFlexure microscope is an extremely high quality DIY digital microscope that we have based a lot of our designs on. This project should be studied and considered by anyone interested in DIY microscopy. Given the existence of this project, why are we making a new Raspberry Pi Microscope design?

We found that the process of building the OpenFlexure Microscope was difficult and daunting for even relatively experienced builders and tinkerers. A well-built OpenFlexure microscope is an incredibly robust and precise tool with features that our design does not have (finer focus and a movable stage). We feel that some of this quality and precision comes at the cost of a significantly more complex and difficult build process and that there is room for and value in a more beginner-friendly, easier, somewhat less powerful project.

### Remixing the Open Flexure optics module with Hackteria stage

### Adding a traditional microscope objective

This microscope uses a Raspberry Pi camera as the sensor to capture images and send them to a computer for processing. We use a 3D printed optics tube for a 60 mm objective from the Open Flexure project. Everything is mounted to the frame from the Hackteria microscope stand.

---------

# How to Set Up Your Optics

## Step 1: Setting up the camera:

We use a Raspberry Pi camera (v2) attached to a Raspberry Pi Zero W computer to stream our images and take photographs/videos. The Raspberry Pi Zero W is a very small computer with built-in WIFI and bluetooth capabilities and the camera is an 8MP digital camera.

![](https://lh3.googleusercontent.com/5CrsI0VWxwR4KH9m64K3ftKQtHL24VQQBj_DfvO23MX-Ic2Z8vxn2I4U-LDqN-ywdCUeu9BQ2iaa9_fgW1EpNJRWPmm8EmXE8WH2CkixTMJbz3wy4ENyqOQEzbUzmMvJ2OALtEdx)![](https://lh4.googleusercontent.com/26hdKTCdz5aHWjrgWrjC3fWZwjOSgu1CNAc10hIaswM3tYP4kPLgkLe8a7Jc8sRYFNnGxDkdhtDRzvmQWs-co8EWsO47rjX1cMSr02SbgnKEZRX8GjbVnLsH1W1KULzmUdU2ORL-)

Wikimedia Commons [www.raspberrypi.org](http://www.raspberrypi.org)

We use this camera+computer setup because our research suggests that this is one of the more suitable digital camera sensors available at this price-point (because it is a high resolution sensor that is physically quite small) and because there is a lot of already existing work in DIY microscopy built around the Raspberry Pi camera for us to build from.

See also: [Setting Up the Raspberry Pi and Camera for Wireless Streaming](https://drive.google.com/open?id=1xECw2X7kmwC6qS3ZHyaIXIV70mSQ1Lwzdcgop_QP43g)

---------

## Step 2: Choose a microscope objective

Because we are trying to make a low-cost device, we are using the cheapest objective lenses we could find from Amscope -- [http://www.amscope.com/accessories/objective/100x-oil-achromatic-microscope-objective-for-compound-microscopes.html](http://www.amscope.com/accessories/objective/100x-oil-achromatic-microscope-objective-for-compound-microscopes.html). You can use either the 40x or 100x objective for this project.

![](https://lh3.googleusercontent.com/kn8Imc4MYQbJ6YUG9IWpga8b_ND1phMKGsSmnSOk0f8_hyxV17MqgZsOGU-r4ijHYUlXsVW0s77A9DFcqO_ziSQ2oeR_3C2MB6JVuXdVV5aCGTARS-NV7Chi2zaECYjKNwUnwplx)

These lenses are "RMS Threaded", which stands for "Royal Microscopy Society" and is the most common threading for microscope objective lenses. To mount the lenses onto the Raspberry Pi we use a 3D printed adapter modified from a design created by the OpenFlexure microscope project -- [https://github.com/rwb27/openflexure\_microscope](https://github.com/rwb27/openflexure_microscope)

---------

## Step 3: 3D print the tube

To attach the lens to the camera, we use a 3D printed part based on this design from the OpenFlexure project -- [https://github.com/rwb27/openflexure\_microscope/blob/master/stl/optics\_picam2\_rms.stl](https://github.com/rwb27/openflexure_microscope/blob/master/stl/optics_picam2_rms.stl)![image description](https://publiclab.org/system/images/photos/000/023/701/large/Screen_Shot_2018-02-23_at_9.51.25_AM.png "Screen_Shot_2018-02-23_at_9.51.25_AM.png")

This model is an adapter that snugly fits the Raspberry Pi camera in the bottom, facing upwards into a tube that you can screw RMS threaded microscope lenses into the top of.

![](https://lh3.googleusercontent.com/qnc7nGzGF84_l0d8rexi9spYquUIOCdPmUe05CJG_Ogl6Dt7Gr-GSL8KJ1ajKaGBLfwxmV23x7hkbGiRsWPjrBvWddSBAg47X_GWmLd5TgnVM_BJBLMhrQ1YUheBcI_rk5_VJL3c)

It's worth exploring the Open Flexure github page if you want to experiment with different tube lengths. Our version -- [http://partsandcrafts.org/pi\_microscope/optics\_modified\_partsandcrafts.stl](http://partsandcrafts.org/pi_microscope/optics_modified_partsandcrafts.stl) -- is modified so as to have a shorter tube length and to remove some extraneous elements that are designed to interface with the rest of the OpenFlexure build.

## Why A Shorter Tube?

We don't know right now! The lenses that we are using are specified to have a tube length of 160mm. The microscope stand is much smaller than that, so the OpenFlexure tube file is designed to fit an additional lens to correct for this shorter distance. More detail about this, as well as other magnification and resolution issues is available here --

[https://github.com/rwb27/openflexure\_microscope/wiki/Magnification,-Resolution,-and-Field-of-View](https://github.com/rwb27/openflexure_microscope/wiki/Magnification,-Resolution,-and-Field-of-View)

By shortening the tube length we are decreasing the amount of magnification we're getting out of the objective, but maybe this decrease in quality is worth the additional ease-of-use. The OpenFlexure project has you place an additional lens in the tube to correct for the shortened length. This method seems to work, but we've actually had perfectly good success using an even shorter tube then the one they use without any kind of corrective lens at all. More experimentation with tube lengths and lenses will help us find an ideal combination.

We found this tube length through trial and error experimentation, so don't have an explanation as to why it works well, but the initial results are somewhat promising so it's a good starting point for further experimentation.

Adding an additional quality lens to the project increases the cost by about $25, which isn't an enormous amount, but is enough of a price increase that I'd rather consider it an optional upgrade if the performance with the shorter tube and no lens is adequate.

Even so, this is a big area of open questions for the project and we would love insight into the following:

1. Is there an "ideal" tube length to use without a lens?
2. What are the advantages of having an additional tube length correcting lens?
3. Is there an adequate cheap lens available to use for tube length correction?
4. Is there an "ideal" combination of tube length and correcting lens? What happens when we increase/decrease the tube length? What happens when we increase/decrease the focal length of the correcting lens?

---------

# Design Files

We based our designs for the 3D printed tube and camera holder on the OpenFlexure designs. The OpenFlexure project provides a wonderful set of well-documented OpenSCAD files that generate all of the pieces of the project for 3D printing. We modified these OpenSCAD files to produce our 3D models in the following ways:

1. We found that the bottom of the Raspberry Pi Camera cover didn't quite fit the ribbon cable so we removed a bit of material to make enough space for it.
2. We removed the dovetail on the side of the tube which was designed to hold an illumination stand because we decided to use a separate light to illuminate the sample.
3. We increased the size of the holes for bolting the camera to the holder + baseplate to fit the bolts we are using
4. We shortened the tube to move the objective closer to the camera sensor (as described in the section above)

The 2 OpenSCAD files that we used are "optics.scad" and "picamera\_2\_cover.scad" We modified them in a very haphazard "make changes and see what happens" way, so these modified versions aren't the best, but they are doing the job for now. Our modified versions are labelled "modified" and the changes are somewhat documented in the .scad files.

Because these files reference other files in the OpenFlexure openscad folder you should downlaod the whole zip file which contains all of the files including the ones we modified. This file also contains the 3d printable lens remover tool.

[http://partsandcrafts.org/pi\_microscope/openscad.zip](http://partsandcrafts.org/pi_microscope/openscad.zip)

These OpenSCAD files can be used to generate 3D model files (.stl) for 3D printing. These files are here:

[http://partsandcrafts.org/pi\_microscope/optics\_modified\_partsandcrafts.stl](http://partsandcrafts.org/pi_microscope/optics_modified_partsandcrafts.stl)

[http://partsandcrafts.org/pi\_microscope/picamera\_2\_cover\_modified.stl](http://partsandcrafts.org/pi_microscope/picamera_2_cover_modified.stl)

[http://partsandcrafts.org/pi\_microscope/picam2\_lens\_gripper.stl](http://partsandcrafts.org/pi_microscope/picam2_lens_gripper.stl)

[http://partsandcrafts.org/pi\_microscope/picam2\_lens\_remover.stl](http://partsandcrafts.org/pi_microscope/picam2_lens_remover.stl)

# Build It!

To attach the lens to the camera you need the 3D printed camera holder bottom, the 3D printed camera holder/tube adapter, the Raspberry Pi camera v2 itself, and the baseplate of your microscope stand.

# 1\. Remove the Lens

In order to remove the stock lens from the Raspberry Pi camera, you will also need the 3D printed lens removal tool or a pair of pliers and a very steady hand.

![](https://lh4.googleusercontent.com/qSZu6Jhgihgg_ZBWCGdSgbUEKmpHwjfqDBbgOAVbq0WsuEmR3yyomRQ1sSxk-q8sBOAPuve5Zh4IlIpYDaRRgPdGafCZYKx8aigeqlf86hNuPXIQR5Eex8chqcFrvFr2tV_1LcVL) ![](https://lh3.googleusercontent.com/Sc2_smOyGhhkPUVTbSAz4T-KUn4-eALjfphMPXcjzSqZH4aWZWo48RJasrjsMOawJgo9955eNXYAtDQM5IazD9naGmCpUSnOrKx3cnxHuaHa3dOcOWImyqY8sTr9ls53lo69w5kv)

The lens removal tool fits around the lens in the Raspberry Pi camera, and with a small amount of force you should be able to unscrew the lens and remove it, exposing the sensor. Once the sensor is exposed you need to be very careful not to get dust on it -- any dust on the sensor will show up on and mess up your pictures.

![image description](https://publiclab.org/system/images/photos/000/023/702/large/Screen_Shot_2018-02-23_at_9.52.39_AM.png "Screen_Shot_2018-02-23_at_9.52.39_AM.png")

# 2\. Attach camera holder base to baseplate

You will want your camera firmly attached to the baseplate of your microscope so that it doesn't move around at all when you adjust your sample or your focus. To do this we use 2 16mm M3 bolts to bolt the 3D printed camera holder bottom to the baseplate.

  
![image description](https://publiclab.org/system/images/photos/000/023/703/large/Screen_Shot_2018-02-23_at_9.53.34_AM.png "Screen_Shot_2018-02-23_at_9.53.34_AM.png")

  
  
![](https://lh4.googleusercontent.com/n7WyNfEcPLYPnW5UlM2WZhP81m9iRe10qoleOcf3u5_H9eZpKP8E3HY8vPgs4d8fP4aWQ3DYp6h6FGEArP9wGQoreawnot2PmVsPhDWEzi2hP_AejfzTqpOo_zFsQ9IlBfDbKkwa)

# 3\. Attach the camera to the camera holder

The Raspberry Pi camera has 4 holes drilled into the PCB that you can use for mounting it. We will use the two middle holes which should line up with the bolts in the camera holder bottom and baseplate. One side of the camera holder bottom has an angled edge and a wall cut out for the ribbon to come out of. Make sure that the slot for the ribbon in the camera is lined up with this side.

![](https://lh6.googleusercontent.com/2Pgr0pTvoFyusXeYjpkoi1E1j20_Npemcs5fQ6rZ_yNRgp88PuTX7iawKtC2hDDnATbzfTBLJIRCj_UZcoE4HgyNA27wW08InBeG4Ln90OGMfqC5WjnQZ5B6C6KegAN4Z_3Ud0xE) ![](https://lh4.googleusercontent.com/rZyOt3LvqHIUWOLfZcXgaZvZ4oDUeO0mtW-ydhMEGT5WIcJc31K8PnW430cMEieZLZmbTX5IBH76rBrwWFVmq-PpA4Ujj3azstXoBpwTv1nNs8P1bYOjov5Chdwopzc-n-DLvBv7)

# 4\. Attach tube to camera + holder

The bottom of the tube contains a cut out section to snugly fit the Raspberry Pi camera. Place it over top of the camera and screw it into place.

![](https://lh4.googleusercontent.com/BxjmGf_GGL4Q2Kedb-wE60fP3TFctOjx1ogUNI6WPuyYfIRf6H0qZswRM9cAIo9cVslibLAYmuKkOw8pNZg1Rwz-UIUU1n7y6evBYuDEIuaDdHFRixxwqTE32Sd6S7EfvdekmiYd)

# 5\. Plug it all in

If you have not done so already, plug the camera into the Raspberry Pi and the Raspberry Pi into power. This is described in [Setting Up the Raspberry Pi and Camera for Wireless Streaming](https://drive.google.com/open?id=1xECw2X7kmwC6qS3ZHyaIXIV70mSQ1Lwzdcgop_QP43g)

![](https://lh3.googleusercontent.com/PxMD4jgRErhF7HUAfDAix3YRSAE7zWaiky0TrgfIl9VQtAjSNwLeieWfp0m17GszEFiTXARwej41nk7wtMuqUbXkZ8LKc4_mC9Ncy9rW1TWx5HHYTQKApN5chDfwFuUV11LNPA4y)

# 6\. Attach an Objective Lens

You should be able to screw the RMS threaded objective lens of your choice into the top of the tube. Be careful to line the lens up so that it ends up being perfectly flush with the top of the tube. For initial tests we recommend a 40x objective.

# 7\. Test it out!

If you have set everything up right you should be able to go to raspberrypi.local and see a blurry grey image from your camera. If you are careful and you are using a sufficiently small level of magnification (like 40x) you should be able to get an image just by carefully holding a well-lit slide just above the top of the lens and adjusting it to get it into focus. Keeping it in focus like this is obviously impossible, which is why we need to build the microscope stage next.

NOTE: The Quick Build instructions for this project have you attaching the optics and the camera in sync with building the stage. You may find it easier to build the stage with the objective unscrewed and the Raspberry Pi Zero W unplugged. If that's the case, back it up to Step 4 and start building the stage!