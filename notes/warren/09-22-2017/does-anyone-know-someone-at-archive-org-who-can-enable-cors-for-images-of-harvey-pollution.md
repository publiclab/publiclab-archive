---
title: "Does anyone know someone at Archive.org who can enable CORS for images of Harvey pollution?"

tagnames: 'archive, leaflet, exif, answered, photo-sharing, archive.org, question:photo-sharing'
author: warren
path: /notes/warren/09-22-2017/does-anyone-know-someone-at-archive-org-who-can-enable-cors-for-images-of-harvey-pollution.md
nid: 14933
uid: 1

---

# Does anyone know someone at Archive.org who can enable CORS for images of Harvey pollution?

by [warren](../../../profile/warren) | September 22, 2017 04:16

September 22, 2017 04:16 | Tags: [archive](../tag/archive), [leaflet](../tag/leaflet), [exif](../tag/exif), [answered](../tag/answered), [photo-sharing](../tag/photo-sharing), [archive.org](../tag/archive.org), [question:photo-sharing](../tag/question:photo-sharing)

----

I'm trying to set up a workflow for reporters of damaged industrial sites that may be polluting after Harvey and other storms and disasters. Currently people often upload large batches of files to Flickr or Google Drive, but [Archive.org](http://Archive.org) is a more sustainable place with a better API.

But I'm also trying to get aerial photos of affected sites (like the flooded oil and gas facilities shown below) to appear on a Leaflet map by using the [Archive.org JSON API](https://archive.org/help/json.php), which is great.

To make a map on the fly, I'm using `exif-js` ([https://www.npmjs.com/package/exif-js](https://www.npmjs.com/package/exif-js)) to access the EXIF metadata of images from [Archive.org](http://Archive.org). But when I do that, I get this error, because `exif-js` uses _XMLHttpRequest_ to get the exif data:

```
XMLHttpRequest cannot load https://archive.org/download/grn-harvey/a-img_6340-pert-coke-overflow_36263420874_o_thumb.jpg. Redirect from 'https://archive.org/download/grn-harvey/a-img_6340-pert-coke-overflow_36263420874_o_thumb.jpg' to 'https://ia601501.us.archive.org/35/items/grn-harvey/a-img_6340-pert-coke-overflow_36263420874_o_thumb.jpg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8000' is therefore not allowed access.
```

I tried a non-redirecting URL, but then I get:

```
XMLHttpRequest cannot load https://ia601501.us.archive.org/35/items/grn-harvey/a-img_6856-active-pump-oyster-marsh-restoration-cameron-parish_36701894030_o_thumb.jpg. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8000' is therefore not allowed access.
```

Enabling an 'Access-Control-Allow-Origin' header is relatively straightforward. Does anyone know someone at [Archive.org](http://Archive.org) who can help with this?

  
My map code is here: https://github.com/publiclab/leaflet-archive

Demo here: http://publiclab.github.io/leaflet-archive/ (not completely online yet but should be shortly)

Example Harvey image from our [current workflow](https://publiclab.org/notes/warren/09-20-2017/compile-screenshots-and-urls-for-aerial-images-of-harvey-damages-in-a-spreadsheet-for-reporting):

![image description](https://publiclab.org/system/images/photos/000/021/734/large/Screenshot_2017-09-20_at_10.42.37_AM.png "Screenshot_2017-09-20_at_10.42.37_AM.png")