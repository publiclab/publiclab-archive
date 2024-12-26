---
title: "GSoC Update - AutoKnitting"\ntagnames: 'mapknitter, gsoc, gsoc-2014, exif, response:10138'
author: xvidun
path: /notes/xvidun/06-20-2014/gsoc-upadate-autoknitting.md
nid: 10594
uid: 421168

---

![](https://publiclab.org/public/system/images/photos/000/004/900/original/Map-cuas-marked.png)

# GSoC Update - AutoKnitting

by [xvidun](../profile/xvidun) | June 20, 2014 10:59

June 20, 2014 10:59 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014), [exif](../tag/exif), [response:10138](../tag/response:10138)

----

###Recent work:

It's been sometime since I've posted an update as it took some time to actually figure things out for  implementing the auto-knitting feature.
For the past weeks I have been refining the upload interface and beginning works on implementing the "AutoKnitting" feature for mapknitter with good progress. Although the implementation of the "Management Tool" in the upload interface from the discussions is stalled for now where I am trying to complete the core component for implenting auto-knitting. This way I can integrate this feature into the upload interface later on.

###My attempt and results
So for implementing auto-knitting(using GPS data from images) I've been using [cuas-ballon-mapping](https://mapknitter.org/map/view/cuas-balloon-mapping) for reference as it contains all the necessary GPS data.

I'll use two sample images that are almost overlapping to demonstrate the results.

The map for the above reference image. I have marked the approximate positions for the sample images used.

[![Map-cuas-marked.png](https://i.publiclab.org/system/images/photos/000/004/905/medium/Map-cuas-marked.png)](https://i.publiclab.org/system/images/photos/000/004/905/original/Map-cuas-marked.png)



So when I try to upload the images I get the following result.

[![Knit1.png](https://i.publiclab.org/system/images/photos/000/004/903/medium/Knit1.png)](https://i.publiclab.org/system/images/photos/000/004/903/original/Knit1.png)

[![Knit2.png](https://i.publiclab.org/system/images/photos/000/004/904/medium/Knit2.png)](https://i.publiclab.org/system/images/photos/000/004/904/original/Knit2.png)

Which is almost close to the actual region, I have positioned the image only based on lat/long so correction of image based on rotation and scale does not happen - I will be looking into those in the coming days. 

Ideally right now I must be able to perfectly knit just by rotation and scale but for the above sample images that does not happen, which comes down to either my error in calculation or GPS data accuracy which I will investigate in the coming days. Also to verify my results it would be great if some one could share additional images(with GPS data).

When the zoom level is decreased there seem to be a marginal error in the placement, the image however overlaps the required region - looking to verify this.

###Questions and next steps
In the coming days I will work on implementing the image correction based on rotation, alritude and tilt data. 

Also since some work has been accomplished I'm curious about the progress on Anish's project so that we can discuss on integration.

EDIT:
Forgot to link code: [AutoPlace](https://github.com/xvidun/mapknitter/tree/autoPlace)