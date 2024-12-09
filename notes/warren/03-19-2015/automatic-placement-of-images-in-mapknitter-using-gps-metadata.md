---
title: 'Automatic placement of images in MapKnitter using GPS metadata'
tagnames: mapknitter, gps, gsoc, gsoc-2014, auto-placement, response:10999
author: warren
path: /notes/warren/03-19-2015/automatic-placement-of-images-in-mapknitter-using-gps-metadata.md
nid: 11693
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/009/324/original/auto-gps.png)

# Automatic placement of images in MapKnitter using GPS metadata

by [warren](../profile/warren) March 19, 2015 21:05

March 19, 2015 21:05 | Tags: [mapknitter](../tag/mapknitter), [gps](../tag/gps), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014), [auto-placement](../tag/auto-placement), [response:10999](../tag/response:10999)

----

After a long wait, I've finally integrated @xvidun's feature of [automatically placing images](http://publiclab.org/notes/xvidun/07-31-2014/gsoc-upadate-upload-interface) on a MapKnitter map if they have GPS EXIF metadata -- that is, if they've been taken from a smartphone or camera with a GPS. I implemented only placement in latitude/longitude so far, but we should be able to expand this to figure out rough compass heading and altitude with a bit of extra work. 

To use this new feature, just drag images which have GPS EXIF data in them onto a MapKnitter map, then click "Auto-place with GPS". [MapKnitter](https://mapknitter.org) does the rest! 

Watch this video to see it in action, or try it yourself:

<iframe width="640" height="480" src="//www.youtube.com/embed/ARUjq12WQok?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>