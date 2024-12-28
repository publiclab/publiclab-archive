---
title: "A Method for HDR Imaging"

tagnames: 'spectrometer, spectrometry, raspberry-pi, cameras, hdr, barnstar:basic'
author: jenjimah
path: /notes/jenjimah/06-12-2019/a-method-for-hdr-imaging.md
nid: 19682
uid: 505738
cids: 24773,24775,24776,24778,24779,24780,24781,24783,24787,24788,24791,24792,24793,25453
---

![](https://publiclab.org/public/system/images/photos/000/032/870/original/hdrDVD.png)

# A Method for HDR Imaging

by [jenjimah](/profile/jenjimah) | June 12, 2019 19:15

June 12, 2019 19:15 | Tags: [spectrometer](/tag/spectrometer), [spectrometry](/tag/spectrometry), [raspberry-pi](/tag/raspberry-pi), [cameras](/tag/cameras), [hdr](/tag/hdr), [barnstar:basic](/tag/barnstar:basic)

----

Using a webcam or a pi camera, it quickly becomes clear that a single capture cannot encompass the large range of brightness in the scene, also known as the _dynamic range_. A solution is high dynamic range (HDR) imaging, a process that combines data from multiple exposures into one image that is neither overexposed, nor underexposed.

Previous notes that have discussed HDR include: [HDR: In search of high-er dynamic range](https://publiclab.org/notes/stoft/5-25-2013/hdr-search-high-er-dynamic-range) by [stoft](/profile/stoft) and [High Dynamic Range (HDR) Imaging (revisited)](https://publiclab.org/notes/show/16726#like) by [MaggPi](/profile/MaggPi).

This post extends the method described by MaggPi using the same OpenCV library for python, and focuses only on the Debevec algorithm. Debevec and Malik (1997) wrote an excellent paper on their algorithm that is very helpful to understand the method: [Recovering High Dynamic Range Radiance Maps from Photographs](http://www.pauldebevec.com/Research/HDR/debevec-siggraph97.pdf)

**The Debevec Method**

In brief, the algorithm is based on the principle that camera sensors have a non-linear response to light. That means, if you double the light energy in the environment, the pixel value is not doubled. For research where we are trying to extract information about the world using pixel data, it is super important to know how pixel values map to irradiance in the captured scene.

Debevec and Malik's method produces a function, and when plotted on a graph, the x axis represents pixel values (from 0-255) and the y axis represents sensor exposure, which is a product of scene illuminance (E) and shutter speed (Δt).

The steps include:

1. Taking a series of photographs with known and different exposures of a scene with the same camera position
2. Collect a sampling of pixels from the scene, and determine each pixel's value for every exposure time. This works even though we don't know the actual irradiance value for any pixel, since we assume that the scene irradiance is constant across the photograph set.
3. Use an algorithm to combine the pixel data into a beautiful curve.

While steps 1 and 2 are straightforward, I found the algorithm quite complex which turns the graph below from the left to the one on the right. It's so great that it's already implemented in OpenCV! I mostly followed the code from this tutorial: [https://www.learnopencv.com/high-dynamic-range-hdr-imaging-using-opencv-cpp-python/](https://www.learnopencv.com/high-dynamic-range-hdr-imaging-using-opencv-cpp-python/)

![image description](/i/32861.jpg "Debevec_Curve.JPG")

_Figure from Debevec and Malik 1997_

This curve can then be used for any image set to map pixel values back into irradiance (E) since we know the sensor response function (f), the pixel value, and the shutter time (Δt) where

pixel value = f(E \* Δt)

So what's the catch? In order to produce this sensor response curve, we need a suitable set of images, ideally over a wide range of exposures that overall contain data for each color (r,g,b) ranging from 0 - 255 values. We probably don't want to do this kind of elaborate process all the time, and that's why we can separate it into two steps. First, generate the sensor response curve. Then, save the response curve, and use it in the future to process all of your HDR photos.

The importance of a good photo sample is demonstrated in the 3 images below, ranging from poor to very good:

![image description](/i/32862.png "sensorResponse_charts.png")

The cropped CFL image is better than its uncropped counterpart because the random sampling is more likely to fall on pixels with a greater variety of information. The LED image is much better than the CFL data because it has a broader spectrum, and using a wider exposure range, there is much more data for each color ranging from 0 to 255\.

Just for comparison, here's also a Canon sensor response curve generated from a set of HDR photos found online:

![image description](/i/32863.png "Canon50D_Sensor_Response_chart.png")

_Source images copyright by Wojciech Toman: [http://hdr-photographer.com/hdr-photos-to-play-with/](http://hdr-photographer.com/hdr-photos-to-play-with/%E2%80%9D)_

I don't know if the PublicLab webcam is capable of manual control, but if it is it would be interesting to see its response curve too.

**Generating an HDR image using the sensor response curve**

Now that we have the sensor response curve, we can take any image and map it back into irradiance values. While they won't be representative of absolute irradiance (e.g. energy units) without further calibration, they will be proportionate to each other.

You only need two lines of code from here:

```
mergeDebevec = cv2.createMergeDebevec()
hdrDebevec = mergeDebevec.process(images, times, responseDebevec)
```

where `images` is your image set, `times` is their exposure times, and `responseDebevec` is the .npy array from the response curve we generated earlier. The output, `hdrDebevec` is now a numpy array containing the merged HDR data.

From here we have two choices:

A) Compress the data into an LDR (i.e. remap the values to 0-255) to present as a .png image

B) Directly extract the data from the HDR numpy array

Option A is nice because it's easy and you can see the pretty picture, but Option B will have better data resolution since we are not compressing the irradiance values. Let's compare them. For each, I've extracted data from the same pixel row.

Creating the LDR and saving the image is only 3 more lines of code using the OpenCV library as cv2:

```
tonemap = cv2.createTonemap()
ldr = tonemap.process(hdrDebevec)

cv2.imwrite('hdrHolo1.png',ldr * 255)
```

The uploaded spectrum is available on Spectral Workbench, where I extracted one line of data.
[https://spectralworkbench.org/spectrums/160042](https://spectralworkbench.org/spectrums/160042)

![image description](/i/32865.jpg "DVD_HDR.JPG")

The peaks are sharp and the shape is good, but the final test is the data comparison.

**The HDR Plot **
![image description](/i/32868.png "HDR_plot.png")

_exported from python_

**The LDR Plot **
![image description](/i/32871.jpg "LDR_plot.JPG")

_extracted from the png uploaded to spectral workbench and plotted in Excel_

Wow, for two things. Firstly, the HDR plot looks great. Secondly, a lot of data was lost in the compression stage. After all that work, it's really not worth it to discard all that great data.

So in conclusion, this process is promising, but the best data relies on a) manual control of your camera b) a good dataset for sensor calibration and c) using the HDR data directly without compression.

In further study, I am interested to know if getting the raw RGB data from the pi before jpg compression will be even better, since I am suspecting that certain dips next to the tallest peaks are due to compression.

**Appendix:**

I attached a screenshot of my camera settings on the pi camera web interface:
[IP\_Camera\_Settings\_Pi\_annotated.pdf](/i/32919.pdf)

  [attachment-1]: /i/32922.pdf "IP_Camera_Settings_Pi_annotated.pdf"