---
title: "LEAFFEST Infragram camboard batch tests"

tagnames: 'near-infrared-camera, ndvi, leaffest, infragram, cameras, photo-monitoring-plugin, infragram-conversion, leaffest2013'
author: warren
path: /notes/warren/09-13-2013/leaffest-infragram-camboard-batch-tests.md
nid: 9325
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/001/543/original/leaffest-tests.jpg)

# LEAFFEST Infragram camboard batch tests

by [warren](../../../profile/warren) | September 13, 2013 15:52

September 13, 2013 15:52 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [leaffest](../tag/leaffest), [infragram](../tag/infragram), [cameras](../tag/cameras), [photo-monitoring-plugin](../tag/photo-monitoring-plugin), [infragram-conversion](../tag/infragram-conversion), [leaffest2013](../tag/leaffest2013)

----

Above is a compilation of all [the camera board tests](/notes/warren/09-08-2013/infragram-webcam-test-raw-images) we did at [LEAFFEST 2013](/wiki/leaffest) last weekend; I combined them into a single image to batch process with the [Photo Monitoring Plugin](/wiki/photo-monitoring-plugin) for Fiji. Here are the results, with a well-organized PSD file at the end. The lead image is the "raw" version -- i.e. just what we got from the cameras.

This is the greyscale NDVI (click for full size):

[![leaffest-tests-grey-ndvi.jpg](https://i.publiclab.org/system/images/photos/000/001/546/large/leaffest-tests-grey-ndvi.jpg)](https://i.publiclab.org/system/images/photos/000/001/546/original/leaffest-tests-grey-ndvi.jpg)

This used the built-in "16color-lut" lookup table to colorize NDVI (click for full size):

[![leaffest-tests-16color-lut.jpg](https://i.publiclab.org/system/images/photos/000/001/545/large/leaffest-tests-16color-lut.jpg)](https://i.publiclab.org/system/images/photos/000/001/545/original/leaffest-tests-16color-lut.jpg)

Here's the full Photoshop file: <a href="https://i.publiclab.org/system/images/leaffest-tests.png"><i class="icon icon-file"></i> leaffest-tests.psd</a> (89 MB)

I'd like to use Chris Fastie's LUT which shows a clear cutoff between positive and negative values. In particular, the "JANE" camera did well on these tests, and that LUT tends to make that clear -- see how the dead leaves in the mixed sun JANE with Rosco 74 are negative, but the grass they're sitting on is positive -- while the bench is negative but the moss on the bench is positive:

[![Screen_Shot_2013-09-13_at_11.46.29_AM.png](https://i.publiclab.org/system/images/photos/000/001/547/large/Screen_Shot_2013-09-13_at_11.46.29_AM.png)](https://i.publiclab.org/system/images/photos/000/001/547/original/Screen_Shot_2013-09-13_at_11.46.29_AM.png)

That's encouraging -- it's distinguishing dead from healthy leaves, and moss from bench, which you can see in this normal image of the same scene at within a half hour of the JANE photo:

[![S100-normal.JPG](https://i.publiclab.org/system/images/photos/000/001/548/medium/S100-normal.JPG)](https://i.publiclab.org/system/images/photos/000/001/548/original/S100-normal.JPG)

Here's a full breakdown of the JANE-74 image from mixed sun -- see how although dead leaves and grass are bright in the near infrared channel, the leaves are not absorbing much visible light, and are reflective in the blue channel:

[![Screen_Shot_2013-09-13_at_11.51.11_AM.png](https://i.publiclab.org/system/images/photos/000/001/549/large/Screen_Shot_2013-09-13_at_11.51.11_AM.png)](https://i.publiclab.org/system/images/photos/000/001/549/original/Screen_Shot_2013-09-13_at_11.51.11_AM.png)

(http://infragram.org/show/JANE-74.jpg)

Where can I get a copy of Chris's LUT?

###Update

Got the LUT from Chris/Ned via the [plots-infrared mailing list](/wiki/mailing-lists). It's here: <a href="https://i.publiclab.org/system/images/photos/000/001/551/original/NDVIBlu2RedWB.lut"><i class="icon icon-file"></i> NDVIBlu2RedWB.lut</a> Great:


[![leaffest-tests-custom-ndvi-lut.jpg](https://i.publiclab.org/system/images/photos/000/001/550/large/leaffest-tests-custom-ndvi-lut.jpg)](https://i.publiclab.org/system/images/photos/000/001/550/original/leaffest-tests-custom-ndvi-lut.jpg)

Also, here's an animated GIF swapping between NDVI and raw, for the right half of the images:

![animated gif](https://i.publiclab.org/system/images/photos/000/001/552/original/3391790.gif)

