---
title: Drone Archaeology | Tomb Hunting Using NDVI, NIR Threshold with Bitwise NOT in Python
tagnames: ndvi, infrared, image-processing, archaeology, mapping, near-infrared, drone, aerial, python, github, ireland, zoom:6, lat:53, contour, plot, tomb, lon:-7
author: ektopyrotic
path: /notes/ektopyrotic/01-03-2022/drone-archaeology-tomb-hunting-using-ndvi-nir-threshold-with-bitwise-not-in-python.md
nid: 28618
uid: 699450

---

# Drone Archaeology | Tomb Hunting Using NDVI, NIR Threshold with Bitwise NOT in Python

by [ektopyrotic](../profile/ektopyrotic) January 03, 2022 21:48

January 03, 2022 21:48 | Tags: [ndvi](../tag/ndvi), [infrared](../tag/infrared), [image-processing](../tag/image-processing), [archaeology](../tag/archaeology), [mapping](../tag/mapping), [near-infrared](../tag/near-infrared), [drone](../tag/drone), [aerial](../tag/aerial), [python](../tag/python), [github](../tag/github), [ireland](../tag/ireland), [zoom:6](../tag/zoom:6), [lat:53](../tag/lat:53), [contour](../tag/contour), [plot](../tag/plot), [tomb](../tag/tomb), [lon:-7](../tag/lon:-7)

Video description here: [https://www.youtube.com/watch?v=iGgtG44AXw4](https://www.youtube.com/watch?v=iGgtG44AXw4)

Coding used in Repository here:[https://github.com/MuonRay/Drone\_Archaeology](https://github.com/MuonRay/Drone_Archaeology)
Here I showcase recent developments I have made in using Near-Infrared imaging with drones in order to perform feature detection in the environment, in this case for archaeological examination. Python coding was used to process drone-captured Near-Infrared Images into Normalised Differential Vegetation Index (NDVI) greyscale images which are further processed using both a segmentation of ndvi around the tomb region followed by a contour overlay in the perimeter of the tombs. 
The lower values of NIR reflectance can be caused by plant growth stress, itself potentially caused by partially or completely submerged rock from a tomb, wall, cairn or road. The image processing technique makes use of the bitwise xor function to highlight the lower regions of NIR reflectance, segmenting them using a threshold mask. By highlighting the low NIR regions and performing NDVI on these regions, we can create a clear image feature in which we can draw a clear contour around using an automated contour tracer.
Version 2 uses a standard contour, Version 4 is an attempt, with limited success, to overlay feature boxes over the tomb images with the intent to extend the code into more automated feature detection of individual boulders, cairn formations and other features. 
Updates to this last step will be ongoing, with hopes to combine with other indexes, such as ENDVI, to allow for better segmentation of ancient structures that may create vegetation stress that can be sensed remotely. Drones specifically designed to use NDVI can make use of more calibrated NIR captures that can provide greater accuracy however we have found the modified DJI Mavic Pro 2 offers unparalleled image resolution, having a 20MP camera as compared to more standard 5MP NDVI cameras on the market.