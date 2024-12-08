---
title: Testing a Midopt DB660/850 filter: NIR contamination of the red channel
tagnames: near-infrared-camera, ndvi, nir, infrared, near-infrared, filter, testing, plant-health, dualband, midopt, first-time-poster, dng
author: Corymbia
path: /notes/Corymbia/02-19-2019/testing-a-midopt-db660-850-filter-nir-contamination-of-the-red-channel.md
nid: 18394
uid: 572650

---

# Testing a Midopt DB660/850 filter: NIR contamination of the red channel

by [Corymbia](../profile/Corymbia) February 19, 2019 06:16

February 19, 2019 06:16 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [nir](../tag/nir), [infrared](../tag/infrared), [near-infrared](../tag/near-infrared), [filter](../tag/filter), [testing](../tag/testing), [plant-health](../tag/plant-health), [dualband](../tag/dualband), [midopt](../tag/midopt), [first-time-poster](../tag/first-time-poster), [dng](../tag/dng)

Inspired by several research notes in Public Lab (many thanks to nedhorning, cfastie and others for their work), I recently had an Olympus mirrorless camera (E-M10 Mark II) converted to NIR using a **Midopt dual bandpass DB660/850** filter. The filter blocks all wavelengths except for two narrow bands: red and NIR, centered around 660 and 850 nm, respectively. As a result, the blue and green channel record mostly NIR (with a possible contamination with red light), while the red channel records mostly red light, yet contaminated with NIR. Since my aim is to calculate NDVI, I decided to test the NIR contamination of the red channel.

I bought two lens filters:

1\. **Hoya R72 NIR filter** - filter transmitting only light at wavelengths higher than ~720 nm (NIR)

2\. **Hoya IR+UV cut-off filter** - filter transmitting only visible light

I also bought ten ceramic tiles with different colours, including white, grey and black, to serve as reference targets. In a few weeks I will be able to measure their reflectance at 660 and 850 nm using a spectrometer, in order to calibrate the images following nedhorning's advice. At the moment, I used them together with some plant material (dry and healthy grass as well as three leaves) to have a look at the NIR contamination.

![image description](https://publiclab.org/i/29439.jpg "IMG_6818_(1).jpg")

_**Figure 1\. The camera setup**_

  
With the camera on a small tripod (I'll look for a full sized one next time), I took three photos with the same settings (ISO 400, shutter speed 1/80, aperture f/5.0, **white balance set on a red tile**), in the following order:

**Image 1\.** No lens filter (red channel: red+NIR, blue channel: NIR)

**Image 2\.** Hoya R72 filter (red channel: NIR, blue channel: NIR)

**Image 3\.** Hoya IR+UV cut-off filter (red channel: red, blue channel: a little red)

  
![image description](https://publiclab.org/i/29444.jpg "Images123.jpg")

_**Figure 2\. Three images taken with the same settings, with 1) no lens filter on, 2) a Hoya R72 Infrared filter, 3) a Hoya IR+UV cut-off filter.**_

\_  
\_

Using the same exposure settings unavoidably led to a certain over- or under-exposure (at least in some channels).

The white balance was custom set on the red tile, resulting in rather weird colours (Fig. 2, top). In Image 1 (taken without any lens filter on), the tiles are grey (they probably reflect just as much red light as NIR), while the leaves are blueish (they reflect more NIR (blue and green channel) than red light (red channel).

I also tested with white balance set on a white surface, and the resulting colours / pixel values / NDVI values were nearly identical (not surprising, considering that the camera cannot see other "colours" anyway).

The photos were saved in JPEG and RAW which I later converted to DNG using Adobe DNG converter. All six images (three images in both JPEG and DNG) were imported to Matlab following **Rob Sumner**'s fantastic guide 'Processing RAW Images in MATLAB' ([https://rcsumner.net/raw\_guide/RAWguide.pdf](https://rcsumner.net/raw_guide/RAWguide.pdf)).

Finally, I calculated average pixel value in 17 rectangular "regions of interest" representing 17 different targets:

![image description](/i/29442.jpg "Test_setup.jpg")

_**Figure 3\. Reference targets (including 10 ceramic tiles) and the two filters.**_

  
The two tables below include the mean pixel values for the red and blue channels of the JPEG (top) and DNG images, **using custom white balance set on a red tile.** The range of values is 0 to 256, where 0 means no light recorded in that particular channel and 256 means overexposure.

  
_**Table 1\. Average pixel values in the red (first three columns) and blue (last three columns) channels of Images 1-3, saved in JPEG format.**_

![image description](https://publiclab.org/i/29453.jpg "Table1.jpg")

  
  
... and the same for the DNG:  

  
_**Table 2\. Average pixel values in the red (first three columns) and blue (last three columns) channels of Images 1-3, saved in DNG format.**_

![image description](https://publiclab.org/i/29454.jpg "Table2.jpg")

  
**A few things can be noticed:**

**1) When using white balance set on a red tile:** regardless of image format \*\*\*\*\*\*and \*\*reference target, the red channel values in Image 1 (red light + NIR) and Image 3 (red light only) are very similar. This was the case even for vegetation where I expected to see a larger difference due to a strong reflection of NIR compared to red light by plants.

2) Surprisingly, with the R72 lens filter on (the filter reflecting all light except for NIR above 720 nm), the red channel values were close to 0\. This was not the case for the blue and green channels (full data in a link at the end of the note).

3) The blue and green channel values were close to 0 with the IR+UV cut-off filter on (this was expected).

4) Particularly in case of the DNG, some areas in images 1 and 3 (mainly the white, red and yellow tiles) were unfortunately overexposed in the red channel. This was difficult to avoid when keeping the settings unchanged among the three photos. The overexposure may also to some extent be a result of incorrect image processing in Matlab.

5) Surprisingly, in the DNG image, blue channel values in Image 2 (taken with R72 filter) are nearly twice as high as in Image 1 (with no lens filter on). This is not the case with the JPEG images. I haven't figured out the reason yet, but I'm quite sure it must be in my code :) If any of you have an idea what I might have done wrong, please share.

  
Finally, I calculated NDVI based on pixel values in Image 1 (Fig. 4 for DNG below). The highest values were around 0.8-0.9 (for well-watered grass and a healthy leaf), and the lowest around -0.6 for some of the tiles - and dead grass. As you can see, the camera had some trouble with black and blue tiles (first two from the left in the upper row plus the first in the bottom row) where NDVI ranges between -0.1 and +0.2\. I'm also surprised by mostly negative NDVI values for dry grass (I expected low positive).

  
![image description](/i/29449.jpg "NDVI_DNG.jpg")

**_Figure 4\. NDVI calculated from DNG image (with white balance set on a red tile)._**

  
Despite getting reasonable NDVI values, I couldn't stop thinking about why why the contamination with NIR of the red channel seems so low, particularly for vegetation which reflects NIR to a much higher extent than red light.

This made me think about the role of white balance. In the DNG file's metadata, a set of three white balance coefficients is saved. These coefficients are used when importing images to Matlab, to give pictures a 'proper' colour. For this reason, I went back to this step and processed the DNG images again, this time changing all white balance coefficients to 1, and thus (correct me if I'm wrong) skipping the white balancing altogether.

This gave me the following results:

  
_**Table 3\. Average pixel values in the red (first three columns) and blue (last three columns) channels of Images 1-3, saved in DNG format, without white balacing.**_

![image description](https://publiclab.org/i/29452.jpg "Table3.jpg")  

\*\*

What can we see this time?

\*\*

1) **Without white balancing**, the red channel values are again rather similar between images 1 and 3 (althouth less so than in the previous example) - but not for vegetation. In particular, red channel values for healthy vegetation in Image 3 (red light only) amounted to only half of those in Image 1 (red light + NIR). This is what I expected to see - healthy vegetation reflects more NIR than red light, which, as far as I understand, leads to a stronger contamination of the red channel with NIR compared to objects with a constant reflectivity across the spectrum.

2) With the R72 Infrared filter on, the values in all three channels were similar. This is not surprising, since the camera could only see NIR (around 850 nm), and the red, green and blue pixels are all similarly sensitive to it.

3) In all three images and for all reference targets, values in the red channel were higher than in the blue channel (as far as I understand, because the red channel could always see more light than the blue channel - either NIR or visible). Result? Only negative NDVI values, as the numerator (NIR-VIS) is negative:

  
![image description](/i/29448.jpg "NDVI_DNG_noWB.jpg")

_**Figure 5\. NDVI calculated from DNG image (without white balancing).**_

  
I'm planning more tests, mainly to see the influence of different exposure settings (exposure compensation, but also shutter speed/aperture pairs) on the NDVI values. As I mentioned earlier, I will also test the reflectance of my tiles with a spectrometer, and try to calibrate the images following nedhorning's research notes.

Will the calibration "cancel out" the effect the white balancing had on NDVI values? I can't say. Until then, I'm planning to always set custom white balance using a red (or white) card before taking a new set of pictures. Modifying white balance coefficients in image processing is easy; finding out what the light conditions were at the time of taking the images can prove more difficult :)

All the images and data used in this note can be downloaded from my Google drive:

[https://drive.google.com/drive/folders/1Qodov4Ci1DRXekC4vlHuVSVFWA3QlWZj?usp=sharing](https://drive.google.com/drive/folders/1Qodov4Ci1DRXekC4vlHuVSVFWA3QlWZj?usp=sharing)

The Matlab code for importing DNG images can also be downloaded from the drive. I'll also try to upload the one for JPEG images when I clean it up (the only differences are the lack of all the DNG pre-processing and slightly different mask coordinates).

**Any comments / advice / questions welcome!**