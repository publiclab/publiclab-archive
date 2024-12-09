---
title: 'GSoC Final Update for Mapknitter- Rotation and Scaling.'
tagnames: mapknitter, gsoc, developers, gsoc-2014
author: anishshah101
path: /notes/anishshah101/08-15-2014/gsoc-final-update-for-mapknitter-rotation-and-scaling.md
nid: 11059
uid: 421046

---

![](https://publiclab.org/public/system/images/photos/000/006/301/original/1.png)

# GSoC Final Update for Mapknitter- Rotation and Scaling.

by [anishshah101](../profile/anishshah101) August 15, 2014 21:08

August 15, 2014 21:08 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [developers](../tag/developers), [gsoc-2014](../tag/gsoc-2014)

----

The following features for the Leaflet based Edit page are complete:
1) Dragging

[![2.png](https://i.publiclab.org/system/images/photos/000/006/302/medium/2.png)](https://i.publiclab.org/system/images/photos/000/006/302/original/2.png)

2) Rotation

[![3.png](https://i.publiclab.org/system/images/photos/000/006/303/medium/3.png)](https://i.publiclab.org/system/images/photos/000/006/303/original/3.png)


3) Scaling

[![4.png](https://i.publiclab.org/system/images/photos/000/006/304/medium/4.png)](https://i.publiclab.org/system/images/photos/000/006/304/original/4.png)


4) Outline

[![5.png](https://i.publiclab.org/system/images/photos/000/006/305/medium/5.png)](https://i.publiclab.org/system/images/photos/000/006/305/original/5.png)


5) Transparency mode


[![6.png](https://i.publiclab.org/system/images/photos/000/006/306/medium/6.png)](https://i.publiclab.org/system/images/photos/000/006/306/original/6.png)


6) Image Distortion

[![7.png](https://i.publiclab.org/system/images/photos/000/006/307/medium/7.png)](https://i.publiclab.org/system/images/photos/000/006/307/original/7.png)


Mapknitter fork link: https://github.com/anishshah101/mapknitter

Limitations:

1) All these features do not work together as of now. Rotation and Scaling work together. Distortions works separately, so does Dragging. Transparency and outline work with every case. I have kept 3 separate urls to test each functionality individually.

2) The map zoom handler and map dragging handler do not work smoothly with all the functions. I have simply enabled dragging and zooming which occurs through Leaflet, they need to be customized specifically for distorted images.

3) The functions have been tested to work on Firefox + Chrome for desktop and Chrome for Android only. Bugs might appear on other browsers. 

Things to do in the remaining days:

1) Add documentation for the code.
2) Merge the branch with mapknitter master branch.