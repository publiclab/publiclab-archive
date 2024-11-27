---
nid: 10294
title: mobius-infragram-erroneous
path: public/static/wiki/mobius-infragram-erroneous.md
uid: 1
tagnames: 
---

# mobius-infragram-erroneous

HSV example: H: `.5-(R-B/B+R)/2`, S: 1, V: 1

In the above example, the .5 value is the additive, and the multiplicative is the "/2", which doesn't change. I only varied the additive by 0.1, which just shifts the scale around the color wheel. 

Here are the processed images, again with webcam first, Mobius second:

`H:0.5-(R-B/B+R)/2` for both:

[![2014-04-10T15_33_16.579Z.png](https://i.publiclab.org/system/images/photos/000/003/593/medium/2014-04-10T15_33_16.579Z.png)](https://i.publiclab.org/system/images/photos/000/003/593/original/2014-04-10T15_33_16.579Z.png) [![2014-04-10T15_34_01.294Z.png](https://i.publiclab.org/system/images/photos/000/003/594/medium/2014-04-10T15_34_01.294Z.png)](https://i.publiclab.org/system/images/photos/000/003/594/original/2014-04-10T15_34_01.294Z.png)
For the record, just storing the **incorrectly done** NDVI alternative originally posted on this note, which have since been corrected: http://publiclab.org/notes/warren/04-10-2014/mobius-action-cam-infragram-tests

Remember: these are WRONG! They essentially only show the red channel; due to order of operations, blue is cancelled out. Boo.

****

`H:0.4-(R-B/B+R)/2` for both:

[![2014-04-10T15_35_29.150Z.png](https://i.publiclab.org/system/images/photos/000/003/595/medium/2014-04-10T15_35_29.150Z.png)](https://i.publiclab.org/system/images/photos/000/003/595/original/2014-04-10T15_35_29.150Z.png) [![2014-04-10T15_36_14.997Z.png](https://i.publiclab.org/system/images/photos/000/003/596/medium/2014-04-10T15_36_14.997Z.png)](https://i.publiclab.org/system/images/photos/000/003/596/original/2014-04-10T15_36_14.997Z.png)

`H:0.5-(R-B/B+R)/2` for the webcam, `H:0.4-(R-B/B+R)/2` for the Mobius:

[![2014-04-10T15_37_29.058Z.png](https://i.publiclab.org/system/images/photos/000/003/597/medium/2014-04-10T15_37_29.058Z.png)](https://i.publiclab.org/system/images/photos/000/003/597/original/2014-04-10T15_37_29.058Z.png) [![2014-04-10T15_37_44.809Z.png](https://i.publiclab.org/system/images/photos/000/003/598/medium/2014-04-10T15_37_44.809Z.png)](https://i.publiclab.org/system/images/photos/000/003/598/original/2014-04-10T15_37_44.809Z.png)
