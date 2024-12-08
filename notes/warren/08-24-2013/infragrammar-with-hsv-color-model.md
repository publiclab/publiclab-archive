---
title: Infragrammar with HSV color model
tagnames: near-infrared-camera, ndvi, infragram, processing, compositing, infragram-sandbox, infragrammar, colormap
author: warren
path: /notes/warren/08-24-2013/infragrammar-with-hsv-color-model.md
nid: 9054
uid: 1

---

# Infragrammar with HSV color model

by [warren](../profile/warren) August 24, 2013 16:12

August 24, 2013 16:12 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infragram](../tag/infragram), [processing](../tag/processing), [compositing](../tag/compositing), [infragram-sandbox](../tag/infragram-sandbox), [infragrammar](../tag/infragrammar), [colormap](../tag/colormap)

A new idea that evolved [in this thread](https://github.com/Pioneer-Valley-Open-Science/infragram-js/issues/14) -- use the **hue, saturation, value** color model to generate colormaps directly with Infragrammar. While this idea is not fully developed and has had some good criticisms from Ben, I thought this proof of concept was interesting enough to continue exploring. 

I used this expression in the HUE field of the HSV input (i tweaked it a bit until it seemed to use an attractive span of the color wheel):

`((R-B)/(R+B)-0.5)*-360`

It accepts a color value from 0-360, and allows for negative values, it seems, like -180, since it's really just an angle on this kind of color wheel: 

![hsl_top.jpg](/system/images/photos/000/001/299/medium/hsl_top.jpg)

I used a maximum value of 1 for each of **Saturation** and **Value**. That resulted in this fairly nice image:

![Screen_Shot_2013-08-24_at_12.09.01_PM.png](/system/images/photos/000/001/300/original/Screen_Shot_2013-08-24_at_12.09.01_PM.png)

Compare that with the build-in colormapping function Ben implemented:

![Screen_Shot_2013-08-24_at_12.11.25_PM.png](/system/images/photos/000/001/301/original/Screen_Shot_2013-08-24_at_12.11.25_PM.png)

