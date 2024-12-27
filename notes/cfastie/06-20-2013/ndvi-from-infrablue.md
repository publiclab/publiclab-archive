---
title: "NDVI from Infrablue"

tagnames: 'near-infrared-camera, ndvi, nir, vermont, infrared, new-york, infragram, rosco, infrablue, histogram, response:8190, response:8018, response:8196, response:8224'
author: cfastie
path: /notes/cfastie/06-20-2013/ndvi-from-infrablue.md
nid: 8308
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/542/original/tuples.JPG)

# NDVI from Infrablue

by [cfastie](../../../profile/cfastie) | June 20, 2013 03:55

June 20, 2013 03:55 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [nir](../tag/nir), [vermont](../tag/vermont), [infrared](../tag/infrared), [new-york](../tag/new-york), [infragram](../tag/infragram), [rosco](../tag/rosco), [infrablue](../tag/infrablue), [histogram](../tag/histogram), [response:8190](../tag/response:8190), [response:8018](../tag/response:8018), [response:8196](../tag/response:8196), [response:8224](../tag/response:8224)

----

<em>Image above: All possible pairs of NIR and VIS values that produce NDVI values in the standard range for healthy vegetation (0.2 to 0.8) form a triangular result space.</em>

 There has been concerted recent effort to capture infrablue photos that have a lively orange tint. These infrablue photos of vegetation produce NDVI images with a broad range of values which are in the range considered to be appropriate for healthy vegetation. The figure above delineates this range in the Cartesian space of pairs of near infrared (NIR) and visible light (VIS) values that would describe two of the three color channels in an infrablue pixel. To get NDVI values in this range, the NIR value must be 1.5 to 9 times greater than the VIS value. In other words, the recorded amount of NIR light reflected from healthy vegetation would be1.5 to 9 times greater than the measured amount of blue light.  

![sx230A810infrHisto.jpg](https://i.publiclab.org/system/images/photos/000/000/543/large/sx230A810infrHisto.jpg)
<p></p><em>Two infrablue photos from different infrablue cameras (Powershot SX230 and A810) with Apollo 4400 filters. The histograms for the three color channels for the rectangle of lawn to the right is inset. Note the difference in channel separation between the two photos.</em>

The infrablue photos taken by some cameras are not very orange and do not record the desired ratio of NIR to VIS light. Brenden has taken an exhaustive series of test photos with different cameras and filters, and I have highlighted two of them here. These were taken with Canon Powershots which had their IR block filters removed and had a piece of Apollo 4400 filter in front of the lens. Both cameras were white balanced while pointing at the same white paper. The photo from the SX230 (with a CMOS sensor) is not as colorful as the photo from the A810 (with a CCD sensor). The histograms for the rectangle of grass at the right in these photos shows the difference in separation between the red (NIR) and blue (VIS) channels. More separation generally indicates more saturated colors, and also translates into higher NDVI values. NDVI is a scaled ratio of NIR to VIS for each pixel, and widely separated histograms (graphs of all the pixel values) indicate that an average pixel will have a higher NIR:VIS ratio and therefore a higher NDVI value.

![sx230A810colorhisto.jpg](https://i.publiclab.org/system/images/photos/000/000/544/large/sx230A810colorhisto.jpg)
<p></p><em>Color NDVI images for the two infrablue photos above. The histograms show the range of NDVI values in the lawn area to the right and the color table used to color the images. The A810 image has higher NDVI values and a greater range of values.</em>

The NDVI images for these photos confirm this. The histogram of values in the rectangle of lawn in SX230 NDVI image shows an average value of 167 (the range is 0-255). The average value in the lawn in A810 NDVI image is 199, and the histogram is twice as broad – there is a greater range of values. This greater dynamic range in NDVI makes it possible to discriminate among different levels of plant health.

![sx230A810NDVIhisto.jpg](https://i.publiclab.org/system/images/photos/000/000/545/large/sx230A810NDVIhisto.jpg)
<p></p><em>Floating point grayscale NDVI images for the infrablue photos above. These images use the actual NDVI values (range -1 to +1) instead of the digital numbers (0 to 255) in most jpeg images. The histograms show the range and distribution of NDVI values computed from the digital numbers in the lawn area of the infrablue photos. Note that the NDVI axes are scaled differently.</em>

The actual NDVI values for these images are used to make the floating point grayscale images. The histograms for the lawn area in these images display the mean NDVI values as 0.31 for the SX230 image and 0.56 for the A810 image. The NDVI axes in these histograms are not scaled the same, but the difference in range extent of NDVI values is obvious. In the A810 image, most of the NDVI values are between 0.4 and 0.7, well within the standard range of NDVI values for healthy vegetation. 

Many of the Brenden’s combinations of camera, settings, white balance, and filter did not produce similar results, which is why his efforts are so important. Thanks much to Brenden for his great contributions. 