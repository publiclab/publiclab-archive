---
title: "Using imageJ to adjust threshold using mode Entropy "

tagnames: 'passive-pm'
author: damarquis
path: /notes/Damarquis/10-20-2015/using-imagej-to-analyze-threshold-and-saving-results-on-windows-10.md
nid: 12322
uid: 450903

---

![](https://publiclab.org/public/system/images/photos/000/012/067/original/Thesholding.PNG)

# Using imageJ to adjust threshold using mode Entropy 

by [damarquis](../../../profile/damarquis) | October 20, 2015 21:26

October 20, 2015 21:26 | Tags: [passive-pm](../tag/passive-pm)

----

What I want to do document the manual steps to properly adjust the threshold option, the goal is take a full-color microscope image when converting to a high-contrast black and white image through "thresholding". [See this note](http://publiclab.org/notes/mathew/09-19-2015/using-imagej-to-process-passive-particle-monitor-samples#Thresholding+the+image)

Steps:
**Thresholding the image**

First, convert the image to greyscale by going to Image > Type > 8 bit

Now we want to threshold the image to a binary image. Go to Image > Adjust > Threshold

[![Thesholding1.PNG](https://i.publiclab.org/system/images/photos/000/012/146/medium/Thesholding1.PNG)](https://i.publiclab.org/system/images/photos/000/012/146/original/Thesholding1.PNG)


As you see there are numerous modes to select, options  B&W and MaxEntropy seem to produce a decent binary image if the brightness is adjusted correctly.

**Comparing Modes **


[![Thesholding_Intermode.PNG](https://i.publiclab.org/system/images/photos/000/012/149/medium/Thesholding_Intermode.PNG)](https://i.publiclab.org/system/images/photos/000/012/149/original/Thesholding_Intermode.PNG)   Image > Adjust > Threshold > Intermodes









 

[![Thesholding_MaxEntropy.PNG](https://i.publiclab.org/system/images/photos/000/012/152/medium/Thesholding_MaxEntropy.PNG)](https://i.publiclab.org/system/images/photos/000/012/152/original/Thesholding_MaxEntropy.PNG)  Image > Adjust > Threshold > MaxEntropy



You want to select a threshold mode that isolates particles without including noise,  MaxEntropy seem to be the best option of the two. This important because it should be the same threshold options used universally during the processing of multiply images.  


 