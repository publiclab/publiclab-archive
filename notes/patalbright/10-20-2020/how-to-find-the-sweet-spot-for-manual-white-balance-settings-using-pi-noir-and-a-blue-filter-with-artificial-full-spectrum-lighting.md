---
title: How to find the sweet spot for manual white balance settings using Pi NoIR and a blue filter with artificial (full spectrum) lighting
tagnames: ndvi, white-balance, infragram, question:ndvi, question:infragram, question:white-balance, whitebalance, raspberrypi, noir, first-time-poster, infragram-pi, question:infragram-pi, question:raspberrypi, bluefilter, question:whitebalance, question:noir, question:bluefilter
author: patalbright
path: /notes/patalbright/10-20-2020/how-to-find-the-sweet-spot-for-manual-white-balance-settings-using-pi-noir-and-a-blue-filter-with-artificial-full-spectrum-lighting.md
nid: 24774
uid: 719087

---

# How to find the sweet spot for manual white balance settings using Pi NoIR and a blue filter with artificial (full spectrum) lighting

by [patalbright](../profile/patalbright) October 20, 2020 09:56

October 20, 2020 09:56 | Tags: [ndvi](../tag/ndvi), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [question:ndvi](../tag/question:ndvi), [question:infragram](../tag/question:infragram), [question:white-balance](../tag/question:white-balance), [whitebalance](../tag/whitebalance), [raspberrypi](../tag/raspberrypi), [noir](../tag/noir), [first-time-poster](../tag/first-time-poster), [infragram-pi](../tag/infragram-pi), [question:infragram-pi](../tag/question:infragram-pi), [question:raspberrypi](../tag/question:raspberrypi), [bluefilter](../tag/bluefilter), [question:whitebalance](../tag/question:whitebalance), [question:noir](../tag/question:noir), [question:bluefilter](../tag/question:bluefilter)

Hi publiclab community :)

First off - thanks a lot for your great effort in bringing some light into these super interesting topics. I dug through a lot of articles, comments and questions on here but there is still one thing that I seem to miss or are not able to find (even tough there are a lot of posts regarding white balancing).

In my setting I use a Pi NoIR camera with a blue filter but in the end I guess this does not matter so much. I learned that a white balance setting can be done (e.g. with a DSLR) by pointing the camera at a specific sheet of paper and saving this WB setting for later pictures. However, by applying this tequnique one does not exactly know what the settings have been. Also they change from time to time due to changes in the lighting conditions. However, with the Pi camera - this is not possible because I need to adjust the AWB gains (blue, red) manually. Also my setup has static lighting conditions since it is within my apartment in a tent with artificial (full spectrum) lighting.

Now when it comes down to adjusting the settings - I am still not quite sure on what to focus most importantly.

**a) Should all the colors within the picture look as natural as possible while having yellowish/orange looking plants? Would it help to add more reference cards in other colors (yellow, green)?**

**b) What should I look for when analyzing the color histogram of the pictures taken (without NDVI analysis / postprocessing)?**

**Example 1:** Picture without processing looks very greenish. Blue can almost not be found on the color histogram. Lot of "noise" in the images after NDVI processing.

![image description](/i/41172.jpg "Example_1.JPG")

**Example 2:** Picture looks blueish - Color histogram shows more balance on blue. Red shows a peak in low numbers. Still a lot of "noise" in the processed image (grey dots) but the infragram image (to the right) looks already promising.

![image description](/i/41173.jpg "Example_2.JPG")

**Example 3:** Picture already looks almost natural (in my opinion). Plants have a strong orange look. Blue and red reference cards look more or less authentic. Color histogramm shows that all colors stretch over the entire spectrum (0-255).

![image description](/i/41174.jpg "Example_3.JPG")

**Example 4:** Colors look a bit "cooler" than in example 3\. Plants have a strong orange look. Compared to example 3 only red correction was raised/adjusted a bit resulting in the histogram to look a bit more "pointy" -\> especially the blue one

![image description](/i/41175.jpg "Example_4.JPG")

Any hints on whether I am making progress or have found a good whitebalance already would be very appreciated! I then would also try to setup a guide for other "newbies" like me in regards to white balance.

Best,
Patrick