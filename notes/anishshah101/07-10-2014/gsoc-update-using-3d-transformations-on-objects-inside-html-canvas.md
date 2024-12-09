---
title: GSoC Update- Using 3d transformations on objects inside html canvas.
tagnames: mapknitter, gsoc, developers, gsoc-2014
author: anishshah101
path: /notes/anishshah101/07-10-2014/gsoc-update-using-3d-transformations-on-objects-inside-html-canvas.md
nid: 10673
uid: 421046

---

# GSoC Update- Using 3d transformations on objects inside html canvas.

by [anishshah101](../profile/anishshah101) July 10, 2014 19:34

July 10, 2014 19:34 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [developers](../tag/developers), [gsoc-2014](../tag/gsoc-2014)

----

In my previous update I had suggested 2 possibilities of incorporating 3d transformations on objects inside canvas in a manner similar to the one applied on divs.

1) By creating DOM elements on a canvas (Refer here) and then transforming them.
2) By using WebGL on canvas.

However, there are problems associated with the two methods:

In 1) in creating DOM elements on canvas, the DOM element which gets created is in the form of an SVG image and so I can't run any script on it. So even when I get the overlay image on the top of the canvas, we can't distort it.

In 2) Simpler 3d transforms like translation and rotation are done: http://www.html5rocks.com/en/tutorials/webgl/webgl_orthographic_3d/ , I am unable to find anything relating to distortion transforms for images. Secondly, if we use Webgl, then the support gets limited to desktop browsers which is a problem since we want it to work on mobile browsers as well.

As an alternate, me and Bryan discussed of an alternate solution in which we could try to have an overlay div on top of the canvas. So the web page will be divided in parts.
i) The base map tiles.
ii) The overlay canvas on top of base map tiles.
iii) A overlay div element on top of canvas.

In this approach, the div element will be activated(shown)/deactivated(hidden) using buttons(event handlers). When the user clicks on the distort image button, the image will gets placed over a div and distortions will be possible. When the distortion is complete, the distorted image on the div will be redrawn on the canvas layer through the use of control points and can be navigated like the usual map.

If anyone has tried something similar or sees any problems with this method, please leave comments.