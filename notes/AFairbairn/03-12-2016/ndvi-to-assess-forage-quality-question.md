---
title: NDVI to Assess Forage Quality, Question.
tagnames: near-infrared-camera, ndvi, imagej, infrared-conversion
author: AFairbairn
path: /notes/AFairbairn/03-12-2016/ndvi-to-assess-forage-quality-question.md
nid: 12839
uid: 468688

---

# NDVI to Assess Forage Quality, Question.

by [AFairbairn](../profile/AFairbairn) March 12, 2016 20:57

March 12, 2016 20:57 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [imagej](../tag/imagej), [infrared-conversion](../tag/infrared-conversion)

##Project:
Hello everyone, I am posting this because some may find it interesting and I need some assistance. I am working on a project using a modified DJI Phantom 3 Pro to get NDVI images in order to quantify changes in grazing vegetation quality over time and differences between sites. The imaging portion will be backed up with some other methods, including looking at carbon to nitrogen ratios using stable isotope analysis.

##Testing to date:
So far I have only managed a few test flights and images. I am using Image J and the Photo Monitoring plugin to process my images. Here is one of my test images, I am not getting the resolution I need. I may have to change the height at which I am flying or camera settings. This will require more testing.

[![Color_Index.jpg](//i.publiclab.org/system/images/photos/000/014/796/medium/Color_Index.jpg)](//i.publiclab.org/system/images/photos/000/014/796/original/Color_Index.jpg)

The image is a worn grass field used as a car park in the summer months. The grass is showing up a pretty even value and based on how worn it is I am assuming the grey is a good representation of where bare earth is. Now the evenness of the value may just be due to the characteristics of this particular field, but I am also hoping to see differences within the field itself. I may need to fly lower, currently the autopilot software I am using puts a floor on my flight at 40m. Or something in the camera settings may tease out a bit more detail. The lens is a PaeuProductions lens and the image is using the NDVI_VGYRM Lut.

##Issues:
What I need to be able to do in order to compare images between sites and over time is a way to extract numerical values for the images. What would be ideal is to get a max NDVI value for an image and a mean. This may already be possible, however I cannot locate a plugin, piece of software etc. that would allow me to do this. If someone here has experience with this any assistance would be greatly appreciated.