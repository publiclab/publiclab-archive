---
title: 'Mobius and NIR'
tagnames: near-infrared-camera, ndvi, infrared, infragram, histogram, led, infragram-sandbox, mobius-actioncam, frosted-globe, response:10291, mobius
author: cfastie
path: /notes/cfastie/04-17-2014/mobius-and-nir.md
nid: 10324
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/003/699/original/MobSpyLED.jpg)

# Mobius and NIR

by [cfastie](../profile/cfastie) April 17, 2014 17:39

April 17, 2014 17:39 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [infragram](../tag/infragram), [histogram](../tag/histogram), [led](../tag/led), [infragram-sandbox](../tag/infragram-sandbox), [mobius-actioncam](../tag/mobius-actioncam), [frosted-globe](../tag/frosted-globe), [response:10291](../tag/response:10291), [mobius](../tag/mobius)

----

_Above: The Mobius ActionCam (top), one of the earlier "spy" cams (lower), and LEDs for testing._

The Mobius ActionCam is the latest in a long line of tiny "spy" cameras. Most cameras in the line cost between $5 and $40 and take still photos and video of variable quality. Until the Mobius was released last summer, all the models were cleverly disguised as car keyless entry remotes. The Mobius breaks into a new form factor with a bigger case and rectangular shape. The image quality, battery life, controls, and support have improved, and the price has jumped to $70\. The Mobius is being marketed as an action cam which can be mounted on a helmet, dashboard, handle bars, or ski pole. A camera needs no viewfinder for these applications, and like the predecessors, the Mobius has no viewfinder or screen -- it really is a point and shoot.

The sensors in all of these small cameras (and also in all web cams) are built with CMOS sensors, not the CCD sensors that most low-end Powershots use. When converted for use as infrared cameras, cameras with CMOS sensors give different results. To figure out how to get the best information about plant health from an IR converted Mobius camera, I have started a series of tests.

Before I removed the IR block filter from the camera, I wanted to see how its response to infrared light differed from a typical unmodified PowerShot with a CCD sensor. In a completely dark room, I took some still photos of the light from single LEDs reflected from a frosted white lamp globe. I have [done this before for similar reasons](http://publiclab.org/tag/frosted-globe). I used a regular red LED and two near infrared ones: one which emitted light around 850 nm, and one around 950 nm. The results from the red LED below are just to remind you what color histograms mean. It is an unwritten rule of the photographic priesthood that "Neither axis of the the histogram graph shall ever be labelled." There is [more explanation here](http://publiclab.org/notes/cfastie/06-13-2013/histograms), but basically farther to the right of the graph means that color is brighter. In the photo of a red LED, the red channel has much brighter values than the blue or green channels, as we would expect.

[![RedHistUM.JPG](https://i.publiclab.org/system/images/photos/000/003/700/medium/RedHistUM.JPG)](https://i.publiclab.org/system/images/photos/000/003/700/original/RedHistUM.JPG)  
_Histogram for the reflected light (square marquee) from a red LED. For each pixel in the selected area, the red channel in the jpeg has much higher brightness values than the blue or green channels._

The near infrared LEDs are harder to photograph because the light is invisible to me, and not very bright to cameras that have infrared block filters installed. The Canon S95 has a live view on the LCD so I can see whatever NIR light it could sense, but the Mobius I had to just point and shoot in complete darkness. Both cameras used the "Sunny" white balance setting. Although the histograms display the light recorded by each channel as red, green, or blue, in the photos below 100% of the light is completely invisible near-infrared light that is being recorded in all three of the color channels (in spite of the factory IR-block filter installed).

[![850nmhists.jpg](https://i.publiclab.org/system/images/photos/000/003/701/medium/850nmhists.jpg)](https://i.publiclab.org/system/images/photos/000/003/701/original/850nmhists.jpg)  
_Color histograms of homogeneous areas (marquees) of parts of photos taken by a Canon PowerShot S95 (top) and a Mobius ActionCam (bottom) of the light from a 850 nm LED reflected from white frosted glass._

[![950nmhists.jpg](https://i.publiclab.org/system/images/photos/000/003/702/medium/950nmhists.jpg)](https://i.publiclab.org/system/images/photos/000/003/702/original/950nmhists.jpg)  
_Color histograms of homogeneous areas (marquees) of parts of photos taken by a Canon PowerShot S95 (top) and a Mobius ActionCam (bottom) of the light from a 950 nm LED reflected from white frosted glass._

There is not much difference between the photos using the 850 nm and 950 nm LEDs. For each camera, exposures were the same for both LEDs. This suggests that each camera does not differ much in its sensitivity to NIR light at 850 versus 950 nm.

For either LED, there is a big difference between the histogram from the two cameras. The S95 photo is brighter, so the values in the histogram are farther to the right. That is just an artifact of the way I took the photos and the smarter exposure controls on the S95\. There is more color in the S95 photos, so the three channels are more separated in the S95 histograms (the green channel is much darker than the red and blue). Like the human eye, inexpensive cameras have poor color response when there is not much light. But those differences are probably not relevant to the question of how NDVI derived from either camera might differ after the IR block filters are removed.

NDVI is computed from the difference between values from an NIR channel and a visible light channel. For example, an infrablue filter (e.g., Rosco 2007) in a camera with no IR block filter allows NIR light to be recorded in the red channel, and normal blue light to be recorded in the blue channel. So the difference in brightness between those two channels is critical. The results above suggest that both cameras record more NIR light (either 850 or 950 nm) in the blue channel than in the red channel (the blue histogram is farther to the right than the red). For some reason, the blue channel is getting more NIR light than the other two channels. But most importantly, there is essentially no difference between the PowerShot and the Mobius in the relationship between the NIR sensitivity of the blue and red channels. In both cameras, the blue channel is getting a little more NIR light than the red channel.

So the blue channel might be better for recording NIR light because it appears to be more sensitive to NIR. If the blue channel is used to record visible light, it might be harder to prevent some NIR light from contaminating the visible light signal, compared to using the red channel for visible light.

But these results shed no light on the difference between CMOS and CCD cameras for producing NDVI images. It is now time to remove the IR block filter from the Mobius ActionCam and repeat this exercise.