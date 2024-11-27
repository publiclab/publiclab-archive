---
nid: 10549
title: WebGL flavored infragram.org
path: public/static/notes/pfoltyn/06-10-2014/webgl-flavored-infragram-org.md
uid: 264346
tagnames: near-infrared-camera,infragram,infragram-sandbox,webgl,barnstar:basic
---

# WebGL flavored infragram.org

###What I want to do
[Infragram.org](http://infragram.org) is an amazing utility that thanks to some clever JavaScript code can process [infrablue](http://publiclab.org/tag/infrablue) image into a [NDVI](http://publiclab.org/wiki/ndvi) map. Even though JavaScript processing speed is very good on standard PCs, it might not be adequate on mobile devices. I want to use [WebGL](http://en.wikipedia.org/wiki/WebGL) to speed up NDVI map generation to the point it can be used in real-time on mobile devices.

###My attempt and results
Thanks to [numerous](http://learningwebgl.com/blog/?page_id=1217) [examples](http://www.webglacademy.com/) available on the internet I've been able to implement simple WebGL application that achieves satisfactory performance results even on [mobile phones](https://www.youtube.com/watch?v=y4rl-y2Lpp8). Application got merged to the [main git repository](https://github.com/p-v-o-s/infragram-js) and is available in beta version on [infragram.org](http://infragram.org/sandbox/?webgl=true).

###How it works
Application draws a rectangle consisting of two triangles on [HTML5 canvas element](http://en.wikipedia.org/wiki/Canvas_element) using WebGL calls. The rectangle is [textured](http://en.wikipedia.org/wiki/Texture_mapping) using an infrablue image provided by user. Graphics card [renders](http://en.wikipedia.org/wiki/Rendering_(computer_graphics%29) NDVI map using [fragment shader](http://en.wikipedia.org/wiki/Shader) written specially for that task. The NDVI-calculating fragment shader executes concurrently on multiple pixels at once, effectively providing a massive speed-up in processing time.