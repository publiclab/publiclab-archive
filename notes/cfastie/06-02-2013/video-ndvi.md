---
title: Video NDVI 
tagnames: near-infrared-camera, ndvi, infragram, infrablue, ffmpeg
author: cfastie
path: /notes/cfastie/06-02-2013/video-ndvi.md
nid: 8016
uid: 554

---

# Video NDVI 

by [cfastie](../profile/cfastie) June 02, 2013 14:01

June 02, 2013 14:01 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [ffmpeg](../tag/ffmpeg)

<em>Image above: Three frames from an infrablue video we are trying to convert to NDVI</em>

Jeff converted a Canon Powershot SD4000 to infrablue and inquired about using the good video it captures to make NDVI movies. I took some [video clips](http://youtu.be/2EdsiGGGXEE) with my infrablue Powershot A810 and made [false color infrared video](http://youtu.be/MzS1zzzFpzU) from it just by switching color channels in Adobe Premiere. Premiere does not seem to know how to do division on pixel values, so it might not be able to make NDVI. Don has been working on using ffmpeg to make [NDVI video](https://www.youtube.com/watch?v=OkC9Gl9vEoo) but is not sure he is getting the correct NDVI values. 

There is not necessarily a correct NDVI value for any plant part, or at least it is very hard to calibrate NDVI that well. So these days we are just trying to get the values in the proper range. The values in Don's video are reasonable, especially considering that the video has been converted in Premiere, then by YouTube, then by ffmpeg, and then by YouTube again, and the values in the color channels could have been tweaked in the process. To provide a baseline for comparison, I captured three frames from the infrablue video I took (above) and ran them through Ned's ImageJ plugin. I used ImageJ to apply a particular color table to the floating point NDVI image made by the plugin, and then displayed a histogram of the values in each frame.  This process also needs some scrutiny because Premiere saved bmp files which I converted to jpg in Photoshop, and also the ImageJ plugin produces different color mapping depending on some variables we are looking into now. But the histograms are revealing about how the infrablue NDVI is related to plant vs non-plant parts of a scene.

![beeinfhista.jpg](https://i.publiclab.org/system/images/photos/000/000/454/large/beeinfhista.jpg)
<p></p><em>NDVI of frame of the bumble bee video clip with histogram of values. The spike for the single value of 255 reaches as high as the tip of the arrow.</em>

![pondinfhista.jpg](https://i.publiclab.org/system/images/photos/000/000/455/large/pondinfhista.jpg)
<p></p><em>NDVI of frame of the pond forest video clip with histogram of values.  The spikes for the single values of 0 and 255 reach as high as the tip of the arrows.</em>

![fusciainfhista.jpg](https://i.publiclab.org/system/images/photos/000/000/456/large/fusciainfhista.jpg)
<p></p><em>NDVI of frame of the fuschia video clip with histogram of values. The spike for the single value of 255 reaches as high as the tip of the arrow.</em>

Although the NDVI values range from -1 to +1, each pixel in these images has a value between 0 and 255 which represents the scaled NDVI values (so 0=-1 and 255=+1).  A color table assigns an arbitrary color to each value to make the color image. The histogram shows how many pixels in the entire image (Y axis) are each color (x axis). These values are in the general range they should be in. Each image has a spike of values equal to 255 which represents an NDVI value of +1.0. These magenta pixels are often in dark parts of the scene (the tree trunks in the forest) but also make weird outlines of the fuschia plant.  The most likely explanation for the NDVI formula (NIR-blue)/(NIR+blue) producing lots of values equal to 1 is that the value for blue in the infrablue photo was zero. So the blue channel was very underexposed (not exposed at all) and the red channel (NIR) was non-zero. There is also a spike of values equal to 0 (NDVI= -1) in the forest frame due to the sky. This must be because the red channel value (NIR) was zero and the blue value was non-zero. 

We have noticed that deep shadows in either two camera or one camera infrared systems often produce anomalously high values for NDVI. It appears that most of these high values are exactly equal to one, and therefore apparently represent extreme underexposure of the visible light channel (blue=0 or red=0). Maybe it would be a good idea to use a color table in which only the value of 255 is magenta (or some other conspicuous color) so this anomaly can be recognized. 

