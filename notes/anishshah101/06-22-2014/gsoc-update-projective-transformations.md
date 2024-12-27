---
title: "GSoC Update- Projective Transformations"

tagnames: 'mapknitter, gsoc, developers, gsoc-2014'
author: anishshah101
path: /notes/anishshah101/06-22-2014/gsoc-update-projective-transformations.md
nid: 10601
uid: 421046

cids: 9237,9317,9320,9321,9350,9351,9369

---

![](https://publiclab.org/public/system/images/photos/000/004/920/original/4.png)

# GSoC Update- Projective Transformations

by [anishshah101](../../../profile/anishshah101) | June 22, 2014 06:45

June 22, 2014 06:45 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [developers](../tag/developers), [gsoc-2014](../tag/gsoc-2014)

----

Following up from my last update about how the projective transformations were possible in the current Mapknitter tool, a live demo for projective transformations can be viewed here: http://128.199.208.55 . The github code: https://github.com/anishshah101/ImageDistortLeaflet/blob/master/DivDistort2.html

[![1.PNG](https://i.publiclab.org/system/images/photos/000/004/916/medium/1.PNG)](https://i.publiclab.org/system/images/photos/000/004/916/original/1.PNG)

The corners can be clicked and dragged to see the effect of distortions.

[![2.PNG](https://i.publiclab.org/system/images/photos/000/004/917/medium/2.PNG)](https://i.publiclab.org/system/images/photos/000/004/917/original/2.PNG)

These transformations are different from the one taking place through Cartagen in the existing Mapknitter tool. Instead of the image getting subdivided into triangles, the image gets transformed using the matrix3d property of webkits. Refer [here](http://www.w3.org/TR/css-transforms-1/#three-d-transform-functions) for how this works. The transforms are applied on a div like the below image:
 
[![3.png](https://i.publiclab.org/system/images/photos/000/004/918/medium/3.png)](https://i.publiclab.org/system/images/photos/000/004/918/original/3.png)

While we distort the image, the position of corners is updated using the padding of the image from the parent div.

[![4.png](https://i.publiclab.org/system/images/photos/000/004/919/medium/4.png)](https://i.publiclab.org/system/images/photos/000/004/919/original/4.png)

The transformations are not entirely smooth as now and behaves weirdly when values lose meaning in the code. Will need to modify some code to achieve that.

Things to be done:

1) Since the transformations are taking place on a div, matrix3d class can be used but the same can't be used on an image inside the canvas. To implement these transitions on a canvas, I am working on 2 possibilities:

   1.1)  By creating DOM elements on a canvas (Refer [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Canvas/Drawing_DOM_objects_into_a_canvas)) and then transforming them.

   1.2) By using WebGL on canvas.

2) Connecting the canvas with Leaflet.js.