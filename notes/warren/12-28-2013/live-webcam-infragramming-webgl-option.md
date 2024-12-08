---
title: Live webcam Infragramming, WebGL option
tagnames: near-infrared-camera, infragram, infragram-sandbox, infragrammar, webgl
author: warren
path: /notes/warren/12-28-2013/live-webcam-infragramming-webgl-option.md
nid: 9917
uid: 1

---

# Live webcam Infragramming, WebGL option

by [warren](../profile/warren) December 28, 2013 20:03

December 28, 2013 20:03 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [infragram](../tag/infragram), [infragram-sandbox](../tag/infragram-sandbox), [infragrammar](../tag/infragrammar), [webgl](../tag/webgl)

Working from Piotr's [great WebGL code](https://github.com/pfoltyn/infragram-js/) (which uses your GPU to accelerate Infragram calculations) theres now a WebGL option on [Infragram Sandbox](http://infragram.org/static/sandbox/):

[![webgl-option.png](https://i.publiclab.org/system/images/photos/000/002/460/medium/webgl-option.png)](https://i.publiclab.org/system/images/photos/000/002/460/original/webgl-option.png)

Also, I was able to get webcam access working, which means that you can take Infragram photos directly from a modified webcam, and even view the output of the webcam *live* through whatever processing you're doing. 

I set it to update every quarter second, which is not super fast, but still workable on my little netbook. The hope is that this will allow people also to modify smartphones for Infragramming, and see the output live on their screen. Neat!

Thanks for the contributions from Piotr, and tell us how it goes! If the WebGL version works for most people, we would like to make it the default.
