---
title: "Infragram Sandbox"\ntagnames: 'near-infrared-camera, ndvi, infrared, infragram, infragram-sandbox, parent:infragram'
author: warren
path: /wiki/infragram-sandbox.md
nid: 9029
uid: 1

---

# Infragram Sandbox

by [liz](../profile/liz), [mathew](../profile/mathew), [warren](../profile/warren), [cfastie](../profile/cfastie)

August 17, 2013 18:56 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [infragram](../tag/infragram), [infragram-sandbox](../tag/infragram-sandbox), [parent:infragram](../tag/parent:infragram)

----

The [Infragram Sandbox](http://infragram.org/sandbox) is a browser based tool for experimenting with image compositing, intended for use with Public Lab [Infragram cameras](/wiki/infragram). 

Read [this research note](/notes/warren/08-17-2013/infragrammar-compositing-infrared-images-with-simple-mathematic-expressions#c6664) and watch this short video to get a quick idea of how to use it:

<iframe width="640" height="480" src="//www.youtube.com/embed/7sQZZoXnLlc" frameborder="0" allowfullscreen></iframe>

##Infragrammar

Infragram Sandbox uses simple math expressions, which are actually written in JavaScript. Here are some examples: 

* [NDVI](/wiki/ndvi) = `(R-B)/(R+B)` for -1..1, or for 0..1 `(((R-B)/(R+B))+1)/2` in the Monochrome input
* ENDVI = `((R+G)-(2*B))/((R+G)+(2*B))` which MaxMax uses for its vegetation stress cameras, in the Monochrome input
* A colormapped NDVI, scaled to emphasize differentiation: `((R-B)/(R+B)-0.2)*-720`, in the Hue input, and tweaking the 0.2 value to between 0.1 and 0.9 ([read more here](/notes/warren/08-24-2013/infragrammar-with-hsv-color-model))
* (add yours here)

###Math

Infragrammar can use [JavaScript math functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math). These include:

* `Math.log()` - logarithms
* `Math.abs()` - absolute value
* `Math.sin()` - sine

###Sliders

You can also link an equation to a slider; for now we are using the letter "X" to represent this value, but in the future, any string represented as {mystring} will generate a slider called "mystring". Move the slider to try different values in real time.

[![infragrammar](http://publiclab.org/system/images/photos/000/001/174/medium/Screen_Shot_2013-08-17_at_11.52.00_AM.png)](http://publiclab.org/system/images/photos/000/001/174/original/Screen_Shot_2013-08-17_at_11.52.00_AM.png)