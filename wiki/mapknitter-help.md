---
title: MapKnitter Help
tagnames: balloon-mapping, mapknitter, hagit-keysar
author: gonzoearth
path: /wiki/mapknitter-help.md
nid: 468
uid: 12

---

# MapKnitter Help

by [warren](../profile/warren), [hagitkeysar](../profile/hagitkeysar), [gonzoearth](../profile/gonzoearth)

September 15, 2011 06:19 | Tags: [balloon-mapping](../tag/balloon-mapping), [mapknitter](../tag/mapknitter), [hagit-keysar](../tag/hagit-keysar)

 Visit https://mapknitter.org to start a new MapKnitter project, view existing maps, or work on one in progress.

###Guide

[MapKnitter Guide](/wiki/mapknitter)

###Troubleshooting

Many questions and problems can be answered/resolved by a careful watching of the "[Introduction to MapKnitter](https://www.youtube.com/watch?v=NOikqxIIFBc)" video

###I can't get these images to fit!

Sometimes it's quite tough to get images to line up; this can be hard if there are steep hills or slopes, if the image was taken from an oblique angle, or if there was motion or lens distortion when the photo was taken (see [Correcting lens distortion](/wiki/mapknitter-correcting-lens-distortion)). If the region has changed a lot, such as in a wetlands area where sand and vegetation change from year to year, [there are also helpful tips you can follow](http://publiclaboratory.org/node/2625). 

There are different approaches to each problem, but a good start is to place the image at roughly the correct scale and rotation before attempting to distort it. Then choose one corner, get it lined up as well as you can, and work clockwise around the other corners, adjusting each one as you go. As you return to the first image, you may have to re-adjust it and repeat the four corners several times. [Watch a video of this process here](/wiki/mapknitter-difficult-image-video)

###The whole map does not export, only some parts of it

This may result from a known issue where your images' average resolution is very high and the combined map would result in a really huge image, typically greater than 75,000 x 75,000 pixels. While [some workarounds](https://github.com/jywarren/mapknitter/issues/39) are being developed, a fast way to fix this is to reduce the average resolution with the provided slider (under options in the export window).
Or - use images which are taken from roughly the same altitude. A single low-altitude or "tiny" image will cause the server to  attempt a much higher resolution final map; if possible avoid large scale change. 


For some helpful tips on a successful export, watch [Exporting maps with MapKnitter](https://www.youtube.com/watch?v=ScysLHc5TFk)

There is a possibility that your map is simply too large for the server to handle. The above-mentioned in-progress workarounds include one where you can select a group of images to export; at that point you'll be able to select just a few images at a time and generate several output maps one section at a time.

###Everything is too slow!###

MapKnitter was developed on a netbook with minimal resources, so it is possible to run it on older, smaller, less powerful computers. It may be helpful to use a more recent browser, such as the latest Firefox (4+), Chrome, or Safari (4+) browser. If your computer is not able to download/install the latest version, we may have a problem. However, many slowness issues result from a slow internet connection. It is possible to run MapKnitter completely on your computer without an internet connection, however a nice, "packaged" version of this is not yet available. Please contact <a href="mailto:team@publiclaboratory.org">the Public Laboratory team</a> for help getting this set up.

###Help Desk

http://publiclab.org/notes/gonzoearth/6-29-2012/help-learning-use-mapknitter