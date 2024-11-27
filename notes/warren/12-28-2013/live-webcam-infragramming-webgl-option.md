---
nid: 9917
title: Live webcam Infragramming, WebGL option
path: public/static/notes/warren/12-28-2013/live-webcam-infragramming-webgl-option.md
uid: 1
tagnames: near-infrared-camera,infragram,infragram-sandbox,infragrammar,webgl
---

# Live webcam Infragramming, WebGL option

Working from Piotr's [great WebGL code](https://github.com/pfoltyn/infragram-js/) (which uses your GPU to accelerate Infragram calculations) theres now a WebGL option on [Infragram Sandbox](http://infragram.org/static/sandbox/):

[![webgl-option.png](https://i.publiclab.org/system/images/photos/000/002/460/medium/webgl-option.png)](https://i.publiclab.org/system/images/photos/000/002/460/original/webgl-option.png)

Also, I was able to get webcam access working, which means that you can take Infragram photos directly from a modified webcam, and even view the output of the webcam *live* through whatever processing you're doing. 

I set it to update every quarter second, which is not super fast, but still workable on my little netbook. The hope is that this will allow people also to modify smartphones for Infragramming, and see the output live on their screen. Neat!

Thanks for the contributions from Piotr, and tell us how it goes! If the WebGL version works for most people, we would like to make it the default.
