---
title: Counter-intuitive NDVI values in drought-stressed plants? (RPi NoIR v.2 with a red filter and artificial lighting)
tagnames: ndvi, question:ndvi, first-time-poster
author: tumakin
path: /notes/tumakin/11-11-2020/counter-intuitive-ndvi-values-in-drought-stressed-plants-rpi-noir-v-2-with-a-red-filter-and-artificial-lighting.md
nid: 25044
uid: 729147

---

# Counter-intuitive NDVI values in drought-stressed plants? (RPi NoIR v.2 with a red filter and artificial lighting)

by [tumakin](../profile/tumakin) November 11, 2020 14:38

November 11, 2020 14:38 | Tags: [ndvi](../tag/ndvi), [question:ndvi](../tag/question:ndvi), [first-time-poster](../tag/first-time-poster)

----

Hello PublicLab community!

I'm currently working on a relatively large dataset which I recently produced for my master's thesis, and I'm having some issues with processing the data and interpreting the results. The experiment was conducted using a self-made, rudimentary growth chamber-setup built around a Raspberry Pi model 4 and Node-Red (Fig. 1). The system involved sensors and actuators for environmental humidity & temperature control, artificial LED-lighting with three controllable wavelengths (blue, red, NIR) and a RPi NoIR v2\. camera system with a red filter. The aim of this project was to
find out how NDVI values correspond to drought stress in plants,
which could be helpful in developing automated stress detection systems
for e.g. indoor farming systems. The experiment was replicated three
times to ensure better statistical significance.

![image description](/i/41726.jpg "IMG_20200117_172035.jpg")

Figure 1\. Growth chamber with connected peripherals.

**Illumination & filtering**

The LED-panel had three channels which could be independently switched on or off by the RPi: blue (452nm), red (637nm) and NIR (843nm). I do not have data on the absolute light intensities of these channels, but their measured peak wavelengths are displayed in the figure below. Two "illumination modes" were programmed into the system: 1\. "grow mode", in which red and blue were used for promoting photosynthesis and 2\. "image capture mode", in which red and NIR were used to provide sufficient light for NDVI image capture. The camera module was RPi NoIR v.2 and the filter was a Rosco Primary Red #106, which transmits wavelengths longer than 580nm and seems to have similar characteristics as some other red filters mentioned here in PublicLab.

![image description](/i/41729.png "drg.png")

**Camera settings & image calibration**

I adjusted the camera WB and exposure settings using [petter\_mansson1](https://publiclab.org/profile/petter_mansson1) 's GUI script method ([https://publiclab.org/notes/petter\_mansson1/04-09-2019/low-cost-ndvi-analysis-using-raspberrypi-and-pinoir](https://publiclab.org/notes/petter_mansson1/04-09-2019/low-cost-ndvi-analysis-using-raspberrypi-and-pinoir "https://publiclab.org/notes/petter_mansson1/04-09-2019/low-cost-ndvi-analysis-using-raspberrypi-and-pinoir")). Unfortunately, I seem to have lost the original python script files which included the exact custom gain
settings, but if I recall correctly, the setting for the
blue channel was higher than for the red channel. The camera settings remained the same during the entire experiment. Nevertheless, I still managed to get decent
images to calculate the NDVI.

I calibrated the captured images using [nedhorning ](https://publiclab.org/profile/nedhorning)'s ImageJ/Fiji calibration plugin ([https://publiclab.org/notes/nedhorning/07-22-2015/introducing-the-calibration-plugin-for-imagej-fiji](https://publiclab.org/notes/nedhorning/07-22-2015/introducing-the-calibration-plugin-for-imagej-fiji "https://publiclab.org/notes/nedhorning/07-22-2015/introducing-the-calibration-plugin-for-imagej-fiji")). For calibration, I used a piece of white printing paper, a red office filing folder and a board painted with matte black paint. These may not be the best options, but were the most easily accessible items at the time.

---------

**Data**

The raw dataset consists of image
sequences of young sweet basil (_O. basilicum_) plants (fig. 2) with two treatments: plants which were regularly watered (C1, C2, C3, C4) and plants which were only watered once (T1, T2, T3, T4) in the beginning of the experiment. Images were captured continuously during day and night at three
hour
intervals until the non-watered plants had all wilted. The "wilting
timepoint" for each non-watered plant was determined as the point in
time
which the leafs clearly drooped down, which to my interpretation
translates to a drop in turgor pressure in the plants (see fig. 3). This
visual attribute represented a "human-eye" reference point in
the data.

The images were segmented and processed into NDVI pixel intensity histograms using ImageJ macros and the photomonitoring plugins developed by [nedhorning](https://publiclab.org/profile/nedhorning). Based on the extracted data, various parameters for each plant were calculated, such as average NDVI and rough estimations on leaf area based on pixel count.

![image description](https://publiclab.org/i/41718.png "Picture1.png")

Figure 2\.
Each replication of the experiment had 8 basil plant cuttings, which had been rooted in rockwool
cubes. Four plants (C1, C2, C3, C4) were watered and the remaining four (T1, T2, T3, T4) were not. Plants were arranged in the same fashion in every replication.

![image description](/i/41732.png "wilting_point.png")

Figure 3\. Position of leafs indicating the "wilting point" for a non-watered plant.

---------

**Different wilting timepoints**

The non-watered plants wilted at slightly different timepoints in all replications, which was the first challenge to overcome when interpreting the data. To get another perspective on the data during statistical analysis, I marked the wilting point of each of the non-watered plants and created a sort of reversed timeline which counted down to the wilting point in hours. As a result, the datapoints were organized in such a way that the emphasis was on the changes in the NDVI values _before_ the wilting point for each plant.

![image description](https://publiclab.org/i/41728.gif "s1.gif")Timelapse
animation of a sequence of 52 processed NDVI-images from the first replication of the experiment. Leaf "waving" motion is most likely a result of
a natural day-night cycle of the plants. Note the different wilting timepoints
of the plants. LUT: 16colors.

---------

**Counter-intuitive NDVI-values**

While the system itself performed well enough to allow for reliable
image capture and replication, some weird and
rather counter-intuitive patterns emerged from the data. For example, in the first replication of the experiment the non-watered plants seemed to have **higher **NDVI values on average than the watered control plants (fig. 4). However, these differences were not statistically significant until wilting point. A similar trend appeared in the other two replications as well. Shouldn't it be the opposite?

![image description](/i/41725.png "sdfgs.png")

\_

Figure 4\. Processed images and corresponding average NDVI values extracted from histogram data displayed in a box-and-whisker plot from the first replication of the experiment. X-axis represents the time until wilting point in three-hour intervals. (Note: for clearer visualisation, the plants in this figure are in different order than in figure 2.)

---------

**Why are drought-stressed plants expressing higher NDVI values**?

Here are some thoughts I came up with.

1 Changes in photosynthetical reactions:

I have not yet had the time to dig into the literature regarding e.g. the
biochemical aspects of this phenomenon and have not come up with an explanation for this.

2 Illumination gradients:

Could inconsistent lighting conditions in the scene influence the plant tissue absorptance/reflectance properties captured by the camera and thus somehow skew the resulting NDVI values?

3 Narrow-bandwidth vs. broad spectrum lighting:

The illumination source used in this project was a custom-made LED-panel. The only wavelenghts during image capture were red (637nm) and NIR (843nm) with very narrow SPDs. The blue light (452nm) was switched off because of possible leakage to other channels in the IMX219 sensor. Maybe the narrow bandwidths of the LEDs don't provide "enough" information regarding the stress levels? Or the peak wavelenghts were "off the mark"?

4 Filter type (red/blue):

Could red and blue filters have differences in their ability to detect drought stress, specifically?

5 Image post-processing:

Some image enhancements e.g. histogram stretching, vignetting or exposure corrections could
be done in the raw data, but at the moment have not been
implemented.

...

p.s. Unfortunately, the setup in which this experiment was conducted has
already been disassembled, so any further replications with the same
hardware may not be done.

---------

I would like to thank everyone who have contributed to developing these
NDVI-imaging solutions in the PublicLab community. The information I
have found on this site has been absolutely essential in progressing my master's
thesis. I figured it was time to reach out
to the community to share my work and gather some thoughts and ideas to help me finish the project.\_

---------

\_