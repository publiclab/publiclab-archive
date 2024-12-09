---
title: MapKnitter: Exporting 
tagnames: mapknitter, help, needs-revision, tutorial, parent:mapknitter, exporting
author: gonzoearth
path: /wiki/mapknitter-exporting-your-map.md
nid: 918
uid: 12

---

# MapKnitter: Exporting 

by [warren](../profile/warren), [olafur](../profile/olafur), [gonzoearth](../profile/gonzoearth)

March 11, 2012 07:33 | Tags: [mapknitter](../tag/mapknitter), [help](../tag/help), [needs-revision](../tag/needs-revision), [tutorial](../tag/tutorial), [parent:mapknitter](../tag/parent:mapknitter), [exporting](../tag/exporting)

----

Learn how to export your completed maps in GeoTiff, TMS/OpenLayers, and JPG formats, and how to tune your export resolution to optimize for size. Learn to use advanced options to see the range of possible resolutions, and avoid exporting at excessively high resolutions.

### Cloud Exporting

We now have a new form of exporting, which offloads the heavy export process to Google Cloud. 

[Read about the MapKnitter Cloud Exporter here](/mapknitter-cloud-exporter
)

### Do you need to?

One consideration when using MapKnitter (especially since the 2.0 launch) is whether you need to export at all. Since you can now embed un-exported maps, and they can display dozens of images on even low-power computers or even smartphones, consider whether you need a full-resolution JPG or GeoTiff of your data, since it may take some time and require changes to your map. Of course, if you need to print the map, exporting is the way to go. 

### Export resolution

Choose a good export resolution for your purposes; too high a resolution may stall the export if the resulting file is too big, while too low a resolution causes lots of processing to resize the images. A reasonable range for many balloon maps is 5-15 cm/px. 


### Per-image exporting

MapKnitter also features a per-image download which bypasses the sometimes tedious map exporting process. Instead of generating a full-size merged map, you can individually download images in their distorted state, using the button next to the image in the Images tab, as shown below. Note that generating the full-resolution download may take a little while depending on your computer's specs. This is made possible using the client-side [webgl-distort module](https://github.com/jywarren/webgl-distort).

[![Screenshot_2016-04-07_at_11.30.21_AM.png](//i.publiclab.org/system/images/photos/000/015/400/medium/Screenshot_2016-04-07_at_11.30.21_AM.png)](//i.publiclab.org/system/images/photos/000/015/400/original/Screenshot_2016-04-07_at_11.30.21_AM.png)


****

### Older exporting documentation

## Video tutorial

<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/loieyIbVsGs" frameborder="0" allowfullscreen></iframe>

Watch the video above for a quick narrated overview of exporting in MapKnitter. For faster downloading, please see [per-image exporting](#Per-image+exporting) below.


###Export resolution

Choose a good export resolution with the slider under the "Advanced options" tab (as shown below); too high a resolution may stall the export if the resulting file is too big, while too low a resolution causes lots of processing to resize the images. A reasonable range for many balloon maps is 5-15 cm/px. 

[![mk-options.png](https://i.publiclab.org/system/images/photos/000/009/457/medium/mk-options.png)](https://i.publiclab.org/system/images/photos/000/009/457/original/mk-options.png)

The default you'll see on the slider is the average resolution of the images you've laid out, but it rounds up to 5 cm/px if your images are too detailed. You can override this, however.

[![mk-resolution.png](https://i.publiclab.org/system/images/photos/000/009/458/medium/mk-resolution.png)](https://i.publiclab.org/system/images/photos/000/009/458/original/mk-resolution.png)

Also consider that if your images are from very different heights, some will have to be resized dramatically as they're all combined into a single-resolution composite. So it's easier for MapKnitter to process images which are at roughly the same resolution, which typically means roughly the same altitude. 

[![mk-different-sizes.png](https://i.publiclab.org/system/images/photos/000/009/460/medium/mk-different-sizes.png)](https://i.publiclab.org/system/images/photos/000/009/460/original/mk-different-sizes.png)

_Images of different sizes can force MapKnitter to do a lot of resizing and resampling, which can cause an export to fail._

****

##Troubleshooting

###My export takes forever

If your map has very high resolution images, more than 20 images, or images which are far apart on the base map, the resulting output image might be **huge**. If one image is 10 megapixels, or 10,000,000 pixels, 30 of those could be 30 million, and if they're spaced out, that number could be a lot higher. MapKnitter can run out of memory, or just get stuck trying to create such a large output image.

Here are some things you can do:

* change the export resolution -- see [Export resolution](#Export-resolution) above.
* reduce the # of images, or breaking a map up into multiple sub-maps of <20 images each
* break a map up into multiple maps can help if your images are really spread out
* take fewer pictures in the future -- try to get your camera high enough that you only need 2-6 photos of the area you want. A high resolution camera makes each image capture more detail.
* keep your images at similar sizes/resolutions -- see [Export resolution](#Export-resolution) above for more on this


[![mk-far-away.png](https://i.publiclab.org/system/images/photos/000/009/459/medium/mk-far-away.png)](https://i.publiclab.org/system/images/photos/000/009/459/original/mk-far-away.png)

_Images spaced far apart can cause extremely large export sizes, and may fail._

###My export fails

Some exports are so big or high resolution, they just don't make it -- the computer runs out of memory, or just gets stuck trying to create such a large output image. We do have a script checking if exports get "too big" and cancelling those exports. See "My export takes forever" above to try reducing the size or complexity of your export.

###My export came out wrong

If images were skipped or distorted incorrectly in your export, please contact web@publiclab.org or -- if white edges appear displacing your map images (as shown below), please [take a look at this bug report and add your input](https://github.com/publiclab/mapknitter/issues/88).

![white-edges](https://cloud.githubusercontent.com/assets/7490478/6067948/f47cab76-ad3d-11e4-968b-466ec7c7b6da.png)
[![mapknitter-export.gif](/i/33578)](/i/33578?s=o)

