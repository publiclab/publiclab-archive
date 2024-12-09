---
title: Recover your balance
tagnames: near-infrared-camera, ndvi, vermont, infrared, infragram, infragram-sandbox
author: cfastie
path: /notes/cfastie/08-20-2013/white-balance-recovery.md
nid: 9038
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/001/216/original/Lettuce_Infrared.jpg)

# Recover your balance

by [cfastie](../profile/cfastie) August 20, 2013 05:28

August 20, 2013 05:28 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [vermont](../tag/vermont), [infrared](../tag/infrared), [infragram](../tag/infragram), [infragram-sandbox](../tag/infragram-sandbox)

----

Greg asked about getting useful information from photos taken with an Infragram camera that had not been [custom white balanced](http://publiclab.org/wiki/infrablue-white-balance). If photos are taken with such a camera, plants and most other things appear purplish. The red and blue histograms of these photos are mostly overlapping, so computing NDVI, which highlights the difference between the red and blue channels, often produces unhelpful results. However the red channel still records mostly near infrared light, which by itself has very useful information about plant health. Healthy foliage appears bright in images of the isolated red channel of these photos. To highlight this information, you can colorize the NIR image by applying a color table like the ones we have been using to colorize NDVI images. This makes a "heat map" with more intense colors where there is more near infrared light being reflected.

I used the new [Infragram Sandbox](http://infragram.org/static/sandbox/) to try different variants of NDVI to find one that seemed to distinguish plants from non plants in these Infragrams. By entering (R-B)/(R+B) in the formula box, you can produce an NDVI image of the Infragram you have uploaded.  In the formula, R, G, and B refer to the red, green, and blue channels. This formula does not produce a very meaningful image for Infragrams from cameras that have not been custom white balanced. One formula that seemed to produce a somewhat meaningful image is ((R*3)-(B-G))/(R+(B+3)). This formula is completely arbitrary and is probably quite hard to defend biologically. But foliage in the resulting image is lighter than some other things. To highlight this pattern, I colorized the images just as we colorize NDVI images. The result looks superficially like an NDVI image, and just might have as much biological meaning as some. 

This exercise would have been much harder without the new Infragram Sandbox. It's a great way to experiment with Infragram photos. Jeff has posted a [video about how to use it](http://publiclab.org/notes/warren/08-17-2013/infragrammar-compositing-infrared-images-with-simple-mathematic-expressions). The monochrome images downloaded from there were colorized in Fiji. Click the image above for a bigger view.

And do a [custom white balance on your infrablue camera](http://publiclab.org/notes/warren/08-15-2013/white-balancing-a-canon-camera-for-infragram-photography).
