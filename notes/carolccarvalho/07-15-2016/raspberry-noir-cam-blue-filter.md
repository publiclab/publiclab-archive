---
title: 'Raspberry + NoIR cam + Blue filter'
tagnames: ndvi, infrared, raspberry-pi, raspberry, pi-noir, raspberry-pi-infragram, activity:raspberry-pi-infragram
author: carolccarvalho
path: /notes/carolccarvalho/07-15-2016/raspberry-noir-cam-blue-filter.md
nid: 13289
uid: 461381

---

![](https://publiclab.org/public/system/images/photos/000/017/047/original/resultado.png)

# Raspberry + NoIR cam + Blue filter

by [carolccarvalho](../profile/carolccarvalho) July 15, 2016 14:54

July 15, 2016 14:54 | Tags: [ndvi](../tag/ndvi), [infrared](../tag/infrared), [raspberry-pi](../tag/raspberry-pi), [raspberry](../tag/raspberry), [pi-noir](../tag/pi-noir), [raspberry-pi-infragram](../tag/raspberry-pi-infragram), [activity:raspberry-pi-infragram](../tag/activity:raspberry-pi-infragram)

----

###What I want to do
Hi!

I'm a student and I'm trying to make an analysis related to plant health. For this, I'm using a drone to fly over some regions, take pictures and turn them into NDVI with the aid of a Raspberry Pi together with PiNoir camera and blue filter that comes with the camera (Roscolux #2007 Storaro Blue).

Earlier I wrote this note: https://publiclab.org/notes/carolccarvalho/02-18-2016/ndvi-from-pinoir-with-a-blue-filter.
However, I was adopting a wrong method and thanks to Chris Fastie (@cfastie) I could understand these failures and decided to try this analysis otherwise.

I've also read the @LaPa notes that were of great help to better understand what to do and how to do it.

###My attempt and results
As I did not get a way to calibrate the camera during the flight, I wrote a code in shell script that during the flight adjusts random parameters of red and blue using the function "AWB_GAINS" (other parameters such as exposure, shutter speed and ISO for example, are fixed for all images), and then takes pictures in jpg. After taking the pictures I use Matlab to get the NDVI results.

My intention for now is taking over several pictures, separating the red and the blue parameters that provide me a "good" result and then immediately perform another flight with these parameters fixed, to capture more photos. Theoretically with the right fit.
I've separated some results I think make sense (obtained on different days). The images are below.

In the image below I used the equation NDVI = (R-B)/(N+B)

![resultado.png](//i.publiclab.org/system/images/photos/000/017/048/large/resultado.png)

![resultado_ndvi.png](//i.publiclab.org/system/images/photos/000/017/049/large/resultado_ndvi.png)

In the two images below I used the equation NDVI = [(R-B)/(N+B)]+0.25 to "improve" the results. I don't know if it's really right to do this. Can I?

![1.jpg](//i.publiclab.org/system/images/photos/000/017/050/large/1.jpg)

![2.jpg](//i.publiclab.org/system/images/photos/000/017/051/large/2.jpg)

###Questions and next steps
Could someone tell me if these results make sense? Am I going in the right direction?
As my goal is to take pictures with correct parameters of red and blue, I would like to stop taking pictures with different parameters and fix them so that my results are certain. I suppose the camera misses calibrating. I read that to make a precise calibration is required a spectrometer. Unfortunately I don't have access to a spectrometer, is there any other way to calibrate the camera? Such as using a fixed reference?

Already, thank you very much for your help.