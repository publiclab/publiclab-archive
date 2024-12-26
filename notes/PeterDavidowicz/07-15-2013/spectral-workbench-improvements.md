---
title: "Spectral Workbench Improvements"\ntagnames: 'spectrometer, spectral-workbench'
author: PeterDavidowicz
path: /notes/PeterDavidowicz/07-15-2013/spectral-workbench-improvements.md
nid: 8886
uid: 169614

---

![](https://publiclab.org/public/system/images/photos/000/000/803/original/1x1.gif)

# Spectral Workbench Improvements

by [PeterDavidowicz](../profile/PeterDavidowicz) | July 15, 2013 06:01

July 15, 2013 06:01 | Tags: [spectrometer](../tag/spectrometer), [spectral-workbench](../tag/spectral-workbench)

----

Suggestions to improve the spectral workbench software

Automatically calibrate EVERY row of pixels this way. If you have a bayered image, either bin the 4 pixels together into a single pixel, or apply a debayering algorithm to get at the raw pixels.

Detect peak pixels (pixels where the light is the strongest, and falls off on either side), add each occurrence to an array with its value and position. 

According to the highest expected spectral peaks (I'm thinking the five highest), assign each of these five highest pixels their expected wavelength, do a little bit of error checking ie. all wavelengths follow pixel locations lowest to highest.

Use each of these 'points' to calculate an equation that maps the expected wavelength for each pixel. It should be close to linear but might not be due to distortions in the CD.

Using that equation, calculate the expected wavelength for each pixel, and store it in a global list of [wavelength, pixel x, pixel y]. You'll sort this list by wavelength later.

Repeat for every row of pixels. If a row is too underexposed, or doesn't error check to the spectrum, throw it out. (count and possible list these throwouts for bug detection) Add every good pixel's wavelength, x, y to the global list.

Now sort your global wavelength list.

Divide the total entries in your wavelength list by how many pixels of accuracy you want per wavelength, or alternately by the number of wavelength spots you want. (could also have a pre-set list of important wavelengths) This is the number of 'bins' you will have, each 'bin' corresponding to a frequency (if you are binning by preset # of pixels per bin, you'll have to calculate the median frequency). Add the closest pixels by their estimated wavelength to the correct bins.

For each bin, save the bin's wavelength and list of pixel locations (x,y,x,y) in that bin. This is the 'calibration file'. You can dump the rest of the data.

Now when you go to take a reading or a sample, for each frequency bin in the calibration file, sum up the readings for each pixel. If pixels are overexposed, you can extrapolate what it's actual strength should be based on number of overexposed pixels vs not, and the reading from non over-exposed pixels in the group (You could specifically calibrate this too if you have software exposure control over the camera).

Now you have a very accurate summed intensity for each wavelength :D You could display this on the graph, adjusted to have the highest reading fit the screen, with the wavelengths graphed at the bottom. It's also a much smaller data format to store than the pictures themselves.

You could further increase accuracy by 'stacking' multiple images by just continuously summing the bins for each image, then dividing by the number of images stacked.

