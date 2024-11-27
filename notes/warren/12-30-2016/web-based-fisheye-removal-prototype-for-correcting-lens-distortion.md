---
nid: 13826
title: Web-based fisheye-removal prototype for correcting lens distortion
path: public/static/notes/warren/12-30-2016/web-based-fisheye-removal-prototype-for-correcting-lens-distortion.md
uid: 1
tagnames: infragram,fisheye,mobius,mobius-action-cam,javascript,lens-distortion,web-based,browser,response:12201,response:11407,lens-correction,lat:42.38,location:blurred,lon:-71.08
---

# Web-based fisheye-removal prototype for correcting lens distortion

Hi, all - I'd been meaning to for some time, but I finally got a quick prototype up for in-browser #fisheye correction:

**[https://jywarren.github.io/fisheyegl/example/](https://jywarren.github.io/fisheyegl/example/)**

**Update (July 16):** this is now functioning with full-resolution images and also both rectangular and square images. Give it a try!

**Update 2 (Aug 2017):** now with a guide and video tutorial: https://publiclab.org/n/14792

You can drag your own images onto the example image to correct distortions on anything.

It doesn't currently do full-size correction, but I think that'd be pretty easy to add, similarly to how the [webgl-distort library worked](https://github.com/jywarren/webgl-distort).

Source code: [https://github.com/jywarren/fisheyegl](https://github.com/jywarren/fisheyegl)

I'd love to know if anyone uploads a #mobius image with some straight/gridded lines, and identifies the correct settings to fix Mobius images for the different lenses folks have. This could make it much easier to use MapKnitter on them. Please write back if you manage to get it working with some Mobius images.

If this seems to work, we could try to set it up to run on a batch of images as well.

Thanks!