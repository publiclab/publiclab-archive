---
title: "Web-based fisheye-removal prototype for correcting lens distortion"\ntagnames: 'infragram, fisheye, mobius, mobius-action-cam, javascript, lens-distortion, web-based, browser, response:12201, response:11407, lens-correction, lat:42.38, location:blurred, lon:-71.08'
author: warren
path: /notes/warren/12-30-2016/web-based-fisheye-removal-prototype-for-correcting-lens-distortion.md
nid: 13826
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/019/171/original/Screenshot_2016-12-30_at_4.09.44_PM.png)

# Web-based fisheye-removal prototype for correcting lens distortion

by [warren](../profile/warren) | December 30, 2016 21:18

December 30, 2016 21:18 | Tags: [infragram](../tag/infragram), [fisheye](../tag/fisheye), [mobius](../tag/mobius), [mobius-action-cam](../tag/mobius-action-cam), [javascript](../tag/javascript), [lens-distortion](../tag/lens-distortion), [web-based](../tag/web-based), [browser](../tag/browser), [response:12201](../tag/response:12201), [response:11407](../tag/response:11407), [lens-correction](../tag/lens-correction), [lat:42.38](../tag/lat:42.38), [location:blurred](../tag/location:blurred), [lon:-71.08](../tag/lon:-71.08)

----

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