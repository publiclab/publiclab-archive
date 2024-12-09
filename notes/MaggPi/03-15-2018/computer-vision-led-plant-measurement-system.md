---
title: Computer Vision/LED Plant Measurement System
tagnames: multispectral, raspberry-pi, plant-health, gardening, python, activity:multispectral-imaging, computer-vision, first-time-poster
author: MaggPi
path: /notes/MaggPi/03-15-2018/computer-vision-led-plant-measurement-system.md
nid: 15957
uid: 501996

---

![](https://publiclab.org/public/system/images/photos/000/024/059/original/Multi_led_exposure.png.jpg)

# Computer Vision/LED Plant Measurement System

by [MaggPi](../profile/MaggPi) March 15, 2018 06:57

March 15, 2018 06:57 | Tags: [multispectral](../tag/multispectral), [raspberry-pi](../tag/raspberry-pi), [plant-health](../tag/plant-health), [gardening](../tag/gardening), [python](../tag/python), [activity:multispectral-imaging](../tag/activity:multispectral-imaging), [computer-vision](../tag/computer-vision), [first-time-poster](../tag/first-time-poster)

----

The project incorporates a digital camera, light emitting diodes (LEDs), and software image analysis tools to conduct non-contact plant growth analysis. The system measures growth parameters such as leaf size and leaf reflectance. Plant growth characteristics can then be used to regulate the spectral and temporal output of the LED grow lights. The goal of the system is
to provide real time feedback to optimize plant development with minimum
energy.

I believe this project directly relates to the climate change and food shortage challenges. Combining LED and computer vision technology creates the opportunity to develop plant light algorithms that can simultaneously improve plant yield and greenhouse energy efficiency.

[Attached video](https://youtu.be/Y6Vz6sSnXhY),[https://youtu.be/Y6Vz6sSnXhY](https://youtu.be/Y6Vz6sSnXhY), shows computer vision measurements of a basil plant over a 30 day period. The goal was to understand computer vision
performance for the LED plant measurement system. Images show the ability of computer vision to measure small features less than 1mm without contact. Computer vision software (SimpleCV) extracts basil plant 'blob' features from soil background and counts number of pixels in each plant 'blob'.

 Video info: Unprocessed Image (right), computer vision processed image (left) marks counted pixels in green. Text below displays # of pixels in area/ length/width and perimeter for each image. Images are scaled/calibrated by ruler - 1 pixel measures .6mm x .6mm. ![blob measurement ][1]

Materials for the project are listed here: ![Materials][2]
Project schematic is available at: ![Schematic][3]

It is also possible to conduct multi spectral observations by  sequencing the camera with different LED colors. The objective is to see if reflectance at different wavelengths provide useful information about plant health.  Attached figure shows
 different images  ![Mulitspactral[4] of the same basil plant  illuminated by different LED wavelengths. Top left is a computer vision enhanced image.  Top right is white light image.  Images below are for ultraviolet (uv1),ultraviolet (uv2), blue(blu), green (grn), red and infrared (ir).  Remaining images are processed images that highlight color contrast.  

 Looking for collaborators to adapt raspberry pi / computer vision  tech to conduct real time spatial/spectral analysis.   Please respond if you are  interested in applying CV techniques to real time grating spectroscopy or  multi-spectral imaging systems.   

Thank You,
MaggPI 

  [1]: https://publiclab.org/system/images/photos/000/024/063/large/blob_measurement.jpg "blob_measurement.jpg"
  [2]: https://publiclab.org/system/images/photos/000/024/061/large/material_v2.jpg "material_v2.jpg"
  [3]: https://publiclab.org/system/images/photos/000/024/062/large/schematic_v2.jpg "schematic_v2.jpg"
  [4]: https://publiclab.org/system/images/photos/000/024/069/large/Multi_led_exposure.png.jpg "Multi_led_exposure.png.jpg"
