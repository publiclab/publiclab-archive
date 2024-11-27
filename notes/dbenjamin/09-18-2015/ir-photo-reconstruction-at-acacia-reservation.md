---
nid: 12227
title: IR Photo Reconstruction at Acacia Reservation
path: public/static/notes/dbenjamin/09-18-2015/ir-photo-reconstruction-at-acacia-reservation.md
uid: 444468
tagnames: balloon-mapping,kap,opendronemap,saturnv,skyshield
---

# IR Photo Reconstruction at Acacia Reservation

Last week the whole office spent some time flying the helikite at Acacia. We totaled 4 flights and about 20 usable sequences. This time we took some IR photos to get an assessment of the vegetation. The weather was very good for helikite flying: low cloud cover and low wind. Here are some photosynths from a few of the flights: 

<iframe frameborder="0" src="https://photosynth.net/embed.aspx?cid=0773e638-e735-42cc-82b8-eeb7225bd45b&delayLoad=true&slideShowPlaying=false" width="500" height="300"></iframe>

<iframe frameborder="0" src="https://photosynth.net/embed.aspx?cid=13e6e4e2-de66-4f35-99bc-d3cf40538a36&delayLoad=true&slideShowPlaying=false" width="500" height="300"></iframe>

For day 2, I adjusted the title angles in the SkySweep code, to get less sky in the pictures:
```
int tiltAngle5[]= {100, 80, 60, 40, 20};
int tiltAngle4[]= {100, 86, 53, 20};
int tiltAngle3[]= {100, 70, 40};
```

<iframe frameborder="0" src="https://photosynth.net/embed.aspx?cid=64b7e378-bc9a-42fa-ba2b-fe62fbb110fb&delayLoad=true&slideShowPlaying=false" width="500" height="300"></iframe>

This time there were no problems with the Saturn V, but for some reason the GPS logging was disabled on CHDK all the SD cards, so there is no GPS ephemeris in the EXIF for the first 3 flights. That's not a problem for creating panos, but makles it impossible for getting georeferenced orthophotos in OpenDroneMap. Flight 4 (Acacia North) did have georeferenced photos, so I was able to create this [point cloud](https://github.com/cleveland-metroparks/acacia-point-cloud/blob/gh-pages/acacia-north.ply): 

[![acacia-northply.png](https://i.publiclab.org/system/images/photos/000/011/626/medium/acacia-northply.png)](https://i.publiclab.org/system/images/photos/000/011/626/original/acacia-northply.png)

As you can see, there are some issues of completeness in the point cloud, some I can hypothesize the reason:

1. The perimeter region is far from complete. This is very likely due to lack of overlap in the more horizontal tilts. This is easily remedied by adding more angles.

2. The area behind vertical structures (facing away from the camera) are missing points. I'm not certain about this one. Maybe we need to simply go up higher. We should be marking the towline at regular intervals. 

3. The center. I honestly have no clue about this one. There are over a dozen photos containing that area in the 130 photo dataset. 

I think it's hard to say how useful ODM will be for spherical photo datasets. Next I will test some adjustments to SkySweep to increase overlap and try walking the kite along a trail in an open area. 

