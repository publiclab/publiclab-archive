---
title: "Stereo Camera"

tagnames: 'dual-camera, agriculture, photo-rig, urban-planning, tool, stereo, land-use, method, land-change'
author: liz
path: /wiki/stereo-camera.md
nid: 47
uid: 7
cids: 
---

![](https://publiclab.org/sites/default/files/IMG_0585.JPG)

# Stereo Camera

by [mathew](/profile/mathew), [Shannon](/profile/Shannon), [warren](/profile/warren), [sara](/profile/sara), [liz](/profile/liz)

January 10, 2011 19:23 | Tags: [dual-camera](/tag/dual-camera), [agriculture](/tag/agriculture), [photo-rig](/tag/photo-rig), [urban-planning](/tag/urban-planning), [tool](/tag/tool), [stereo](/tag/stereo), [land-use](/tag/land-use), [method](/tag/method), [land-change](/tag/land-change)

----

##Basics##

We started developing a stereo camera set-up so that we could capture two images simultaeously -- one visible, one infrared (for more on infrared imaging see our near-infrared camera tool). The visible imagery can be stitched normally, or overlaid with the infrared to create NDVI - Normalized Difference Vegetation Index.

NDVI can be used to identify not only the presence of but also the health of vegetation. Since the 1980's NDVI has become one of the important tools for mapping and monitoring vegetation.

<strong>NDVI = (NIR-RED) / (NIR+RED)</strong>

where, RED and NIR stand for the spectral reflectance measurements acquired in the red and near-infrared regions, respectively.

Only two bands are required: Red channel 0.62 – 0.67 μm, and Near IR channel 0.84–0.87 μm. On the MODIS satellite these are Bands 1 and 2 respectively.

Another use of a stereo camera rig would be for stereoscopy -- a technique which uses two slightly offset images (from two cameras as far apart as human eyes, for instance) to recreate the illusion of depth in a digital image.

###USB/Arduino Version###

How we're doing it: 

* the cameras are controlled by the USB Remote Trigger from the <a href="http://chdk.wikia.com/wiki/CHDK" target="_blank"></a><a href="http://chdk.wikia.com/wiki/USB_Remote_Cable" target="_blank">Canon Hack Development Kit </a>
*  an <a href="http://arduino.cc" target="_blank">arduino</a> is used to simultaeneously send a 5 volt pulse to each camera. <a href="http://chdk.wikia.com/wiki/CHDK" target="_blank"></a>

<a href="https://www.flickr.com/photos/jeffreywarren/5652059819/" title="infrared visible camera rig with chopsticks by jeferonix, on Flickr"><img src="http://farm6.static.flickr.com/5309/5652059819_c24e4d1c44.jpg" width="500" height="376" alt="infrared visible camera rig with chopsticks"></a>

###Easy/cheap/fast version###

The other way to achieve this is to simply attach 2 cameras to the same rig -- the above photo shows this with a pair of stabilizing chopsticks (pencils will work) -- and set them to trigger every second or so in continuous mode with rubber bands over their triggers. You're not guaranteed simultaneous images but there is usually plenty of overlap between your IR and VIS photos.

Pat Coyle's double Ocean Spray juice bottle rig is another solution for a better-protected double camera setup; just bolt two flat-sided bottles together (click to watch video):

<a href="http://youtu.be/tcQzQ9fwwOU"><img src="https://publiclab.org/sites/default/files/Screen shot 2011-09-22 at 12.19.26 PM.png" /></a>

<a href="https://www.flickr.com/photos/jeffreywarren/5499260923/" title="Live video NRG imaging by jeferonix, on Flickr"><img src="http://farm6.static.flickr.com/5053/5499260923_85fcbbbcaf.jpg" width="500" height="404" alt="Live video NRG imaging"></a>

###Live video version###

Above, a version using USB webcams and a [Processing application](https://github.com/jywarren/infrared-visible-video-kit). This allows the use of the stereo camera for [NDVI and NRG](/wiki/ndvi) as described on the [near-infrared camera page](/tool/near-infrared-camera) -- in real time. This is neat, and reduces the feedback loop - you can just put thing in front of the camera and look at them, instead of taking 2 pictures, aligning them, and doing the compositing later, which can be arduous.

**Android version**

What about a version running on an Android phone or tablet, for portability? We need a second camera, or a way to split the image from one camera and account for exposure differences.

It's apparently possible to attach external webcams to some android phones, like the Nexus One. Read more here: http://sven.killig.de/android/N1/2.2/usb_host/ The following are required:

* A USB hub with upstream power, $16 [TM-UH710](http://www.google.com/search?client=safari&rls=en&q=TM-UH710&ie=UTF-8&oe=UTF-8#client=safari&rls=en&q=TM-UH710&oe=UTF-8&um=1&ie=UTF-8&tbo=u&tbs=shop:1&source=og&sa=N&hl=en&tab=wf&biw=1024&bih=655&bav=on.2,or.r_gc.r_pw.&fp=7bd429d28aae1ac), or a Y-cable to "inject" power. Read about [cable options here](http://htc-linux.org/wiki/index.php?title=Msm_Usb_Host)

This is just speculation but it would be very interesting to design an android peripheral which could do this. Another option might be something using a fast board like the Maple, which can do some video.