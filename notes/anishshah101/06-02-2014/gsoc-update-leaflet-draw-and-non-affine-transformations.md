---
title: GSoC Update- Leaflet.draw and Non affine transformations
tagnames: mapknitter, gsoc, leaflet, developers, gsoc-2014
author: anishshah101
path: /notes/anishshah101/06-02-2014/gsoc-update-leaflet-draw-and-non-affine-transformations.md
nid: 10524
uid: 421046

---

# GSoC Update- Leaflet.draw and Non affine transformations

by [anishshah101](../profile/anishshah101) June 02, 2014 22:21

June 02, 2014 22:21 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [leaflet](../tag/leaflet), [developers](../tag/developers), [gsoc-2014](../tag/gsoc-2014)

Work done till now:

1) Used Leaflet to create a toolbar which could draw polylines, polygons, rectangles, circles and markers to a map and then edit or delete those objects as desired. This was done using a leaflet plugin Leaflet.draw which has a github source [here](https://github.com/Leaflet/Leaflet.draw).
Although this was not a part of my project, I thought it was important to get familiar with the use of a leaflet plugin as I plan to prepare one myself. The main image and the following one demonstrates it's use.

[![draw-02.png](https://i.publiclab.org/system/images/photos/000/004/505/medium/draw-02.png)](https://i.publiclab.org/system/images/photos/000/004/505/original/draw-02.png)

2) Understanding and preparing mathematical equations for non-affine/projective transformations of images. 

The different kinds of transformations are as follows:

[![geometric-transformations.jpg](https://i.publiclab.org/system/images/photos/000/004/507/medium/geometric-transformations.jpg)](https://i.publiclab.org/system/images/photos/000/004/507/original/geometric-transformations.jpg)


Problems faced:

1) All the above transformations are a part of the Mapknitter tool currently. While the transformations involving translation, rotation and scaling are easy to implement and are also currently available in the form of Leaflet plugins, projective transformations are difficult to implement because of the mathematics involved. To prepare the javascript code from the existing algorithms is a difficult task which I am struggling with.

Community help:

1) In case somebody is familiar with the mathematics of non-affine/projective transformations, it would be really handy if I could have a quick hangout on the topic.