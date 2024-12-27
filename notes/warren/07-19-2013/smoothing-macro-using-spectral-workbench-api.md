---
title: "Smoothing macro using Spectral Workbench API"

tagnames: 'spectrometer, spectral-workbench, smoothing, spectral-workbench-api, macros, response:8906'
author: warren
path: /notes/warren/07-19-2013/smoothing-macro-using-spectral-workbench-api.md
nid: 8908
uid: 1
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/000/850/original/Screen_Shot_2013-07-19_at_11.46.10_AM.png)

# Smoothing macro using Spectral Workbench API

by [warren](/profile/warren) | July 19, 2013 15:49

July 19, 2013 15:49 | Tags: [spectrometer](/tag/spectrometer), [spectral-workbench](/tag/spectral-workbench), [smoothing](/tag/smoothing), [spectral-workbench-api](/tag/spectral-workbench-api), [macros](/tag/macros), [response:8906](/tag/response:8906)

----

##What I want to do

We turned off "smoothing" a while ago on the capture interface for [Spectral Workbench](https://spectralworkbench.org) to speed up the interface, but it's still a useful post-processing tool. I wrote a quick macro (using [the Spectral Workbench API](http://publiclab.org/wiki/spectral-workbench-api)) which reproduces smoothing and is configurable. It doesn't yet save, but if it's a popular request, I can add that.

##My attempt and results

You can use this macro by clicking "Tools" to the bottom right of the graph in Spectral Workbench, and then "Macros/Scripting". The macro should be near the bottom of the list. 

Here's the macro on Github: https://gist.github.com/jywarren/6040039

Here's a video of using the macro:

<iframe width="640" height="480" src="//www.youtube.com/embed/XFen5PG037E" frameborder="0" allowfullscreen></iframe>