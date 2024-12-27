---
title: "Analysis of Dual-Bandpass NDVI Filters using Python "

tagnames: 'ndvi, nir, infrared, analysis, research, camera, histogram, python, filters, spectrum, graphs, zoom:6, lat:53.349805, lon:-6.260309, plotting, scientific'
author: ektopyrotic
path: /notes/ektopyrotic/06-28-2020/analysis-of-dual-bandpass-ndvi-filters-using-python.md
nid: 24053
uid: 699450
cids: 27070,31139
---

![](https://publiclab.org/public/system/images/photos/000/039/987/original/ScientificPlottingPython.png)

# Analysis of Dual-Bandpass NDVI Filters using Python 

by [ektopyrotic](/profile/ektopyrotic) | June 28, 2020 00:00

June 28, 2020 00:00 | Tags: [ndvi](/tag/ndvi), [nir](/tag/nir), [infrared](/tag/infrared), [analysis](/tag/analysis), [research](/tag/research), [camera](/tag/camera), [histogram](/tag/histogram), [python](/tag/python), [filters](/tag/filters), [spectrum](/tag/spectrum), [graphs](/tag/graphs), [zoom:6](/tag/zoom:6), [lat:53.349805](/tag/lat:53.349805), [lon:-6.260309](/tag/lon:-6.260309), [plotting](/tag/plotting), [scientific](/tag/scientific)

----

Full article detailed here:[http://muonray.blogspot.com/2020/06/plotting-for-scientific-and-engineering.html](http://muonray.blogspot.com/2020/06/plotting-for-scientific-and-engineering.html)

coding is available here:[https://github.com/MuonRay/PythonScientificPlotting](https://github.com/MuonRay/PythonScientificPlotting)In this article I share some research notes on the examination of 2 of the dual bandpass filters I use in my NDVI imaging research and compare with the color channel histogram plots of images taken in the NIR vs RGB.

  
I also go over some details regarding the plotting of NIR vs the Blue (leveraging) channel to create the characteristic spectrum plot which can be used in combination with a contour overlay in identifying the density of vegetation-marking pixels and to connect this information with a threshold plot of the NDVI image. 

  
Spectrum graphs themselves of NDVI threshold images allow as a useful introduction to image classification and it is hoped that comining this technique with machine learning will allow for fast segmentation of an image int classified regions for labelling using software such as QGIS with its Orfeo toolbox and others.