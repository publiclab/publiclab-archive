---
title: Mapping Curriculum Activity Lens Calculation
tagnames: balloon-mapping, curriculum, lens
author: warren
path: /wiki/mapping-curriculum-activity-lens-calculation.md
nid: 78
uid: 1

---

# Mapping Curriculum Activity Lens Calculation

by [warren](../profile/warren)

February 08, 2011 18:27 | Tags: [balloon-mapping](../tag/balloon-mapping), [curriculum](../tag/curriculum), [lens](../tag/lens)

##Activity: basic lens calculation technique##

Step 1 : Set your camera with intended lens and either no zoom or a static value.

Step 2: Stick a tape measure on a flat wall in a horizontal direction. Use a level if possible.

Step 3: Stand perpendicularly to the wall and aim at the middle of the tape measure. It is ok if some of the tape is not in the frame. It is better than having “white space” on the left or right. Before you pull the trigger make sure you will be able to measure exactly the distance to the wall. The best way is to use a tripod. If you do not have one (go buy one...) you can do the following : make a pendulum with a very flexible string and a weight and hold it right below your camera. Look down and mark on the ground the camera position right after you took the picture. Or position the camera on a table or some type of raised platform.

For Thermal cameras, you will not be able to “take a picture” as described above. Instead of a tape measure, apply 2 fingers on the wall at a known distance from each other and on a horizontal line. You can also take a picture of a door or window, it will have a significant spectral signature for width measurement.

Step 4: Measure the distance between the wall and the camera using the tripod position or the mark on the ground. In this case case the distance is 105.5 cm from the wall.

Step 5: Open the picture on your computer, it should look like this :
Image reduced in size, measuring tape visible at 100%

Now we are going to count how many centimeters we have in our picture : Here it starts at 33.5 cm and finishes at 146 cm so we have 146-33.5= 112.5 cm in the frame.

Step 6: now with some very basic math we are going to calculate a distance (height) / width (swath) ratio. In my case 112.5 / 105.5 = 1.06635. As often when using default settings we almost have a 1 to 1 ratio.
We are now going to apply this ratio to a regular mission.You plan to fly at 200 meters above ground your swath will be 200 x ratio, in my case for example it will be 200 x 1.06635 = 213,27 meters. You can now apply this ratio and find out what is the best elevation to cover your area of interest. 

Step 7: Inspect the results of image overlays to improve the ratio after the initial shooting by measuring the actual swath size with associated GPS values. 

For example the picture I am going to use for calibration was taken at 11:05:50. Aircraft absolute (GPS) height was 1897 meters. Ground altitude below this point is 610 meters. Therefore height above ground (was distance to the wall above) is 1897 - 610 = 1287m. 
Next,  overlay of the corresponding image in Google Earth.

Measuring the width of the overlayed image = 571m. that was previously how
many cm of tape measure we had in the frame) Therefore my ratio is 571 / 1287 : 0.4437 In this case it is below 1. This means that I used a zoom.

Step 8: Calculating theoretical image resolution. From the EXIF data the image is 3648 x 2736 pixels. To find image resolution, 3648pixels represent 571m horizontal ground distance. Therefore 1 pixel measures 571 / 3648 = 0.1565 meters.Image resolution is about 15 cm.

This same ratio can be used to determine the height of the camera without GPS by from the HFOV ground distance of an image.
