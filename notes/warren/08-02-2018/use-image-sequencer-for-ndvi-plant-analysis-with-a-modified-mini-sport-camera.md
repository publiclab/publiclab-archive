---
title: "Use Image Sequencer for NDVI plant analysis with a modified mini sport camera"\ntagnames: 'near-infrared-camera, ndvi, multispectral, nasa, infragram, mobius, infragram-point-shoot, filters, difficulty:easy, time:15m, status:review-me, category:observe, activity:multispectral-imaging, activity:infragram, multispectral-imaging, activity:ndvi, response:13742, aren, activity:infrared-camera-conversion, infrared-camera-conversion, activity:image-sequencer, activity:aren, sport-camera, camera-hacking'
author: warren
path: /notes/warren/08-02-2018/use-image-sequencer-for-ndvi-plant-analysis-with-a-modified-mini-sport-camera.md
nid: 16843
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/026/050/original/Screen_Shot_2018-08-02_at_6.17.50_PM.png)

# Use Image Sequencer for NDVI plant analysis with a modified mini sport camera

by [warren](../profile/warren) | August 02, 2018 22:38

August 02, 2018 22:38 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [multispectral](../tag/multispectral), [nasa](../tag/nasa), [infragram](../tag/infragram), [mobius](../tag/mobius), [infragram-point-shoot](../tag/infragram-point-shoot), [filters](../tag/filters), [difficulty:easy](../tag/difficulty:easy), [time:15m](../tag/time:15m), [status:review-me](../tag/status:review-me), [category:observe](../tag/category:observe), [activity:multispectral-imaging](../tag/activity:multispectral-imaging), [activity:infragram](../tag/activity:infragram), [multispectral-imaging](../tag/multispectral-imaging), [activity:ndvi](../tag/activity:ndvi), [response:13742](../tag/response:13742), [aren](../tag/aren), [activity:infrared-camera-conversion](../tag/activity:infrared-camera-conversion), [infrared-camera-conversion](../tag/infrared-camera-conversion), [activity:image-sequencer](../tag/activity:image-sequencer), [activity:aren](../tag/activity:aren), [sport-camera](../tag/sport-camera), [camera-hacking](../tag/camera-hacking)

----

This tutorial shows how to use [Image Sequencer](https://publiclab.org/image-sequencer) to take a DIY multispectral image (using [this mini waterproof sport camera](https://publiclab.myshopify.com/collections/mapping-kits/products/waterproof-mini-camera), with [a blue filter such as from this kit](https://publiclab.myshopify.com/collections/education/products/infragram-diy-filter-pack)) and composite them [into an NDVI image](https://publiclab.org/ndvi). (For instructions on doing this with a 2-camera system, [click here](https://publiclab.org/notes/warren/05-30-2018/use-image-sequencer-for-ndvi-plant-analysis-with-2-images))

(Made with support from the #AREN project at NASA.)

[Image Sequencer](https://publiclab.org/image-sequencer) is an online tool for image processing -- based on the idea of a storyboard. Each modification makes a new copy of the image, resulting in a series of images showing each step. It is designed for use in browsers, as well as on the Raspberry Pi.

By doing NDVI analysis in Image Sequencer (although it is still under development), you can see each step separately, and re-use the whole sequence of steps on different images. To try this yourself, use the link below, and the test images from the comments section of this post: [https://publiclab.org/notes/warren/12-24-2010/ndvi-test-lima-peru](https://publiclab.org/notes/warren/12-24-2010/ndvi-test-lima-peru)

### Process your image

Image Sequencer takes a starting image, and goes through several steps to produce a final output image.

Use this link to open an Image Sequencer sequence which can take you step by step through this process:

  
\> https://sequencer.publiclab.org/image-sequencer/examples/#steps=ndvi(filter:blue),brightness(brightness:160),colormap(colormap:stretched)  

  
Be aware, it can take a while with larger (\>1 megabyte) images!

### Example image

Try this out using this example image:

![image description](/i/26049.jpg "20180516_060620A_2.jpg")

### Results

You should get the following image as an output:

![image description](/i/26048.png "download-3.png")

### Adjustments

These cameras are very affordable, but they aren't as good as a nicer point-and-shoot camera, or even a #Mobius camera for this purpose, and we have inserted a "boost" step to increase the NDVI value by 60%.

You can adjust the amount of "boost" (a coefficient) in the Image Sequencer interface, and may have to for different lighting conditions.

This adjustment means that you can't compare these NDVI-like images directly with those of other cameras -- it's a relative tool, rather than an absolute measurement.

You can read more about how this could be used in crop assessment, and some of the factors that can go into adjusting white balance or NDVI adjustment, see this post:

[https://publiclab.org/notes/Claytonb/08-13-2016/plant-health-ndvi-white-balance](https://publiclab.org/notes/Claytonb/08-13-2016/plant-health-ndvi-white-balance)

You can read a LOT more about this project and other ways to do this [on the Infragram page](/infragram)!