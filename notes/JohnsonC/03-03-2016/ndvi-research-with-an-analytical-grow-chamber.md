---
title: "NDVI Research with an Analytical Grow Chamber"

tagnames: 'ndvi, infrared, filter, infragram, led, stress, sensor, blue, 8-bit, yawcam, tableau'
author: JohnsonC
path: /notes/JohnsonC/03-03-2016/ndvi-research-with-an-analytical-grow-chamber.md
nid: 12768
uid: 467223

cids: 13784,13793,13794,13795,13796,13797,13800,13839,13845,13848,13853,13856,13864,13956,13957

---

![](https://publiclab.org/public/system/images/photos/000/014/636/original/IMG_3034.JPG)

# NDVI Research with an Analytical Grow Chamber

by [JohnsonC](../../../profile/JohnsonC) | March 03, 2016 00:11

March 03, 2016 00:11 | Tags: [ndvi](../tag/ndvi), [infrared](../tag/infrared), [filter](../tag/filter), [infragram](../tag/infragram), [led](../tag/led), [stress](../tag/stress), [sensor](../tag/sensor), [blue](../tag/blue), [8-bit](../tag/8-bit), [yawcam](../tag/yawcam), [tableau](../tag/tableau)

----

###What I want to do
My goal is to develop a series of experiments that accurately prove that the NDVI values of growing leaves change over time compared to that of controls when I introduce a stress on a system.

For instance, compared to a healthy control leaf, I apply a fungal pathogen to the soil that attacks the roots of a test plant. This in turn will decrease the uptake of water and nutrient transport of the xylem and phloem, lower the leaves' pigmentation, and hopefully produce a lower NDVI value. Other stresses that I may work with may include over-watering, drought, heat, pH, or even introducing pests such as thrips.

My goal is not to simply take images and produce a slideshow over time, but to create graphical visualizations that analyses each individual pixel of a NDVI image to better understand the effects of stress upon a plant's leaves.

My experiments are only to be representative of what indoor growers are attempting to do.

###My attempt and results

[![20160129_152452_1_.jpg](//i.publiclab.org/system/images/photos/000/014/638/medium/20160129_152452_1_.jpg)](//i.publiclab.org/system/images/photos/000/014/638/original/20160129_152452_1_.jpg)

Here's a good look at the device I am working with (the chamber on the left). This was at a trade show promoting this project. The cool thing about this device is that it has a lot of 8-bit sensors everywhere so it really lets one tailor their experiments to their own needs. You can measure parameters such as green reflectance, temperature, or humidity amongst others. The ultimate goal is through the use of a bunch of relatively cheap micro-controllers and smart algorithms to be able to do what a really expensive product can do. Something a lot more affordable but accomplishes the same task and then some.

[![20160107_175226_1_.jpg](//i.publiclab.org/system/images/photos/000/014/639/medium/20160107_175226_1_.jpg)](//i.publiclab.org/system/images/photos/000/014/639/original/20160107_175226_1_.jpg)

Here's a look at the wiring process during the development of the chamber. As you can see there are many LED channels, however I only use select channels when working with NDVI images. The wavelengths of such channels are of the **deep red LEDs at 660nm, blue  at460nm, IR at 850nm, and UV  at 385nm**.


[![20160301_132059_1_.jpg](//i.publiclab.org/system/images/photos/000/014/637/medium/20160301_132059_1_.jpg)](//i.publiclab.org/system/images/photos/000/014/637/original/20160301_132059_1_.jpg)

Above is one of the main cameras that I work with. I believe it is a webcam that is found on the Public Lab Store:

https://store.publiclab.org/collections/spectrometry/products/webcam-dsk-3-0

However I am not 100% sure as I came on the project after all the parts were bought. I was also told that this camera had a pre-installed blue filter.


[![visible_healthy_mar_1.jpg](//i.publiclab.org/system/images/photos/000/014/642/medium/visible_healthy_mar_1.jpg)](//i.publiclab.org/system/images/photos/000/014/642/original/visible_healthy_mar_1.jpg)

I mainly work work with radishes, as they grow fast and their cotyledons are easy to monitor. I usually conclude my experiments after the true leaves begin to emerge as I've found that the requirements for effects on those leaves are different than that of seed leaves. 

[![ndvi_healthy_mar_1.jpg](//i.publiclab.org/system/images/photos/000/014/640/medium/ndvi_healthy_mar_1.jpg)](//i.publiclab.org/system/images/photos/000/014/640/original/ndvi_healthy_mar_1.jpg)

I use a free webcam software program called Yawcam to create and save time-lapse NDVI images. I used the program to also turn off the auto white balance and be able to toggle the exposure setting.

I've found that using a camera with a blue filter:

-Changing the **red** LED settings has little effect on a NDVI image

-Changing the **blue** LED settings has a big effect on a NDVI image (too low relative to IR results in image artifacting; too high results in an increase in negative or neutral NDVI values)

-Changing the **IR** LED settings has a big effect on a NDVI image (main contributor to the IR reflectivity of a healthy or unhealthy leaf)

-Changing the **UVA** LED settings has no effect on a NDVI image (used solely for the purpose of better theoretical leaf colouration)

So basically a balance of the IR and blue settings along with proper exposure contribute to good images with my setup.


[![visible_healthy_mar_1.png](//i.publiclab.org/system/images/photos/000/014/643/medium/visible_healthy_mar_1.png)](//i.publiclab.org/system/images/photos/000/014/643/original/visible_healthy_mar_1.png)

When this image is uploaded to infragram for a quick visualisation, one can see that it is very uniform, yet not possessing much variation. Note that the right side has some scattering. This is mainly due to the placement of the IR LEDs above, so that area should be avoided during analysis (for now).


[![20160301_152724.jpg](//i.publiclab.org/system/images/photos/000/014/644/medium/20160301_152724.jpg)](//i.publiclab.org/system/images/photos/000/014/644/original/20160301_152724.jpg)

I then took an image of radishes subjected to some heat stress. Clear yellowing of leaves can be observed.

Using the Infragram tool to quickly visualize this :

[![ndvi_yellow_mar_1.jpg](//i.publiclab.org/system/images/photos/000/014/645/medium/ndvi_yellow_mar_1.jpg)](//i.publiclab.org/system/images/photos/000/014/645/original/ndvi_yellow_mar_1.jpg) 
[![ndvi_yellowing_mar_1.png](//i.publiclab.org/system/images/photos/000/014/647/medium/ndvi_yellowing_mar_1.png)](//i.publiclab.org/system/images/photos/000/014/647/original/ndvi_yellowing_mar_1.png)

Once again little variation between the leaves are seen. This presents a problem, as I was expecting the yellow leaves to have a different NDVI value due to its colouring.

Using a tool that applies the NDVI formula (for blue = (red channel - blue channel)/(red channel + blue channel) upon each pixel of a NDVI image, I then use a visual analytic tool known as Tableau (specifically Tabeau Public), to plot the processed image.

https://public.tableau.com/views/IR10Blue5YellowingRadishesMarch12016/Dashboard1?:embed=y&:display_count=yes&:showTabs=y

This is where I run into my main issue: I am finding that it is difficult to obtain a nice variation in NDVI values even when leaves are are clearly different in their colour. Furthermore, false positives such as exposed soil and shadows present a problem with accuracy when I want to analyse large sections of an image.

###Questions and next steps

I may be a little confused on how a blue filter works with the camera used in this setup. So is the "NIR" variable of the equation a summation of both the reflected red and NIR channels when using a blue filter? Because our custom software tool processes each pixel using its 8-bit integer (0-255) of the red and blue, yet when I toggle the red LED brightness my NDVI images hardly change. Or does only NIR become red and red becomes something else?

Is there something I am missing or have gotten wrong that prevents me from getting a nice NDVI image? I find that the really high NDVI values (~0.8-1.0) are only found from false positives such as dirt or shadows.

For my next experiments I plan to alter our tool so that from the start any pixels that are not related to plant matter are removed. So say with an image under white light (visible image), a pixel of an unhealthy leaf that possesses a green value of 161 will be kept, while anything under that would be presumed not to be photosynthetic and thus removed or set to black. Then by superimposing a NDVI image on top and matching the pixels by location (X, Y), removal of the same pixels from the NDVI image will then hopefully provide a more accurate composite.

###Why I'm interested

I've never known about NDVI before coming onto this project. Ever since however I have been really intrigued and it is a really useful concept that I think we will see more of in the future with climate change and current implementations on devices such as drones.