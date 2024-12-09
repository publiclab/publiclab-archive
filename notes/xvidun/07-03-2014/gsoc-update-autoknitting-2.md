---
title: 'GSoC Update - AutoKnitting 2'
tagnames: mapknitter, gsoc, gsoc-2014, exif, response:10594
author: xvidun
path: /notes/xvidun/07-03-2014/gsoc-update-autoknitting-2.md
nid: 10648
uid: 421168

---

![](https://publiclab.org/public/system/images/photos/000/005/102/original/Update_2-1.png)

# GSoC Update - AutoKnitting 2

by [xvidun](../profile/xvidun) July 03, 2014 05:47

July 03, 2014 05:47 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014), [exif](../tag/exif), [response:10594](../tag/response:10594)

----

###My attempt and results
Continuing from my previous auto-knitting update, I have gone further successfully able to correct image based on rotation and scale. 

Results.

[![Update_2-1.png](https://i.publiclab.org/system/images/photos/000/005/099/medium/Update_2-1.png)](https://i.publiclab.org/system/images/photos/000/005/099/original/Update_2-1.png)

The selected image had it's EXIF removed, so it follows "regular placement".

Different sample.

[![Update_2_-1.png](https://i.publiclab.org/system/images/photos/000/005/100/medium/Update_2_-1.png)](https://i.publiclab.org/system/images/photos/000/005/100/original/Update_2_-1.png)

The rotation correction is not perfect for this sample as the above image uses "Magnetic North" as it's reference unlike "True North" which is used by most modern GPS. Finding "magnetic declination" looks difficult to solve for now, so I've left it aside.

I've tested scale correction based on altitude with ranges from 200's-500's m, it works well, I'm not sure how it is going to respond to extreme altitudes, someone will probably get their balloon really high!!.

Also for altitude correction I'm using FileReader API to get the original dimensions of the images, See [Supported browsers](https://developer.mozilla.org/en-US/docs/Web/API/FileReader#Browser_compatibility).

Code: [auto-placement](https://github.com/xvidun/mapknitter/tree/autoPlace)

###Next steps
1. Update "create map" page to support GPS data from images, from the discussion.
2. Try to work on "Magnetic reference".
3. Move the "new mapknitter" to beta pages.

I've been a little slow for a few days for travelling and going some places, I'll work on catching up.