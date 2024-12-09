---
title: 'CrocusCam'
tagnames: near-infrared-camera, nrg, ndvi, nir, vermont, infragram, plant-health, timelapse, category:observe, activity:timelapse, difficulty:hard, time:10h
author: cfastie
path: /notes/cfastie/04-20-2013/crocuscam.md
nid: 6924
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/096/original/Rosco-201335583.jpg)

# CrocusCam

by [cfastie](../profile/cfastie) April 20, 2013 04:50

April 20, 2013 04:50 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nrg](../tag/nrg), [ndvi](../tag/ndvi), [nir](../tag/nir), [vermont](../tag/vermont), [infragram](../tag/infragram), [plant-health](../tag/plant-health), [timelapse](../tag/timelapse), [category:observe](../tag/category:observe), [activity:timelapse](../tag/activity:timelapse), [difficulty:hard](../tag/difficulty:hard), [time:10h](../tag/time:10h)

----

<em>Image above: Ned Horning dropped by while the CrocusCam was doing its crocus camera thing. I spread vermiculite around the plants to reduce the difference in albedo between the soil and the flowers. The little Sanm cameras do not have much dynamic range.</em>

The current model of the public Lab near-infrared camera consists of two cameras -- one takes a normal photo and the other takes an infrared photo.  Data from the two cameras is combined by matching pixel to pixel, if possible, when registering the two images on top of one another. A limitation of this design is that getting close to your subject introduces parallax error.  If there is much difference in the angle at which the two cameras are capturing the scene, the two photos will not register well.  A partial solution to that problem is afforded by really tiny cameras, like the Sanm laptop webcam modules Mathew has been testing. 

![crocuscam-201335302.jpg](https://i.publiclab.org/system/images/photos/000/000/097/medium/crocuscam-201335302.jpg)
<p></p><em>The two cameras are attached to the bottom of the piece of gray plastic.</em>
<p></p>

I used my [double Sanm camera infrared setup]( http://publiclab.org/notes/cfastie/4-14-2013/sanm-leafkam) to make a timelapse sequence of some crocuses waking up on Wednesday morning. The cameras were about 35 cm from the flowers and the cameras are 8 mm apart, so there was some parallax error, but it's not too noticeable. The sequence started at 9:30 AM and ended at 4:10 PM. About 900 photos were taken by each camera, one every 20 seconds. The cameras were each connected to a laptop via separate USB cables, and controlled by different freeware or shareware programs. The programs did not do a very good job of timing the photos, or managing to take one during every interval.  That might have been because the system could not handle two data streams well, although I thought such problems were solved in the 90s. So it took some work to get a set of 792 matched pairs of RGB and NIR photos. The pairs are rarely synchronous, but are always less than 11 seconds apart, and the plants did not do too much in 10 seconds so the pairs registered well. 

<iframe width="853" height="480" src="https://www.youtube.com/embed/QCvCH0-Deq0?rel=0" frameborder="0" allowfullscreen></iframe>
<p></p>

The RGB and NIR image pairs were processed into NRG and NDVI images in Ned Horning's ImageJ plugin. A nice feature of that plugin is that after registering the images, it crops them to a rectangle within the area of overlap. This cropping is not the same for all images, and that was a problem. To use the multispectral images as frames in a video, the subject in the images can't shift back and forth between frames. So I made an emergency call to Ned who was packing to leave town for a week and he modified the plugin by commenting out the cropping routine.  It worked perfectly, leaving an overlap border on one or more edges of most images. The video format I chose (1280 x 720) was much smaller than the images captured by the Sanm cameras (1600x1200) so the video images are cropped anyway. That also conveniently removes the worst of the vignetting and soft focus at the image edges. I was originally capturing 640x480 images because I thought the tiny lens and sensor could not exploit any more pixels. But the jpeg compression done in the cameras is heavy handed, and is much less noticeable in the 1600x1200 photos.

At 18 seconds into the video, the lighting changes in the NIR, NRG, and NDVI images. After the sun emerged from behind some branches around noon, I noticed that the NIR camera was overexposing all of its photos. So I changed the exposure using the utility in the timelapse software. The NIR photos did not get much better because the little cameras apparently could not handle such a bright or contrasty scene. The RGB images from the unmodified camera were a little bright, but still looked okay, so I did not adjust their exposure. The resulting NRG images change color, and the NDVI images just go all purple. But the show continued for another several hours. 

The frame interval and frame rate are pretty constant throughout the video, so any changes in the rate of action are biological. The crocus flowers close at night when they are young and it is still chilly, and then slowly open in the morning. When the sun finally hit them full force around 11:00 (12 seconds into the video) they just went for it. 

I searched some at YouTube, but could not find any other NDVI or NRG timelapse close-up videos of plants blooming. Is this the first time it has ever been done? It won't be the last, although my next attempt might be with [Superblue](http://publiclab.org/notes/cfastie/04-20-2013/superblue).

Update: Here is my first [single-camera superblue NDVI video attempt](http://publiclab.org/notes/cfastie/04-24-2013/daffycam).