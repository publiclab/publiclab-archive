---
title: 'White balancing a 4 channel RAW image?'
tagnames: near-infrared-camera, ndvi, white-balance
author: Fi156
path: /notes/Fi156/05-25-2015/white-balancing-a-4-channel-raw-image.md
nid: 11835
uid: 442424

---

![](https://publiclab.org/public/system/images/photos/000/010/002/original/Screenshot.png)

# White balancing a 4 channel RAW image?

by [Fi156](../profile/Fi156) May 25, 2015 12:14

May 25, 2015 12:14 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [white-balance](../tag/white-balance)

----

##What I want to do


In the long run I want to create NDVI-like images from a multi camera setup to monitor crop health from an UAV.
At the moment I am evaluating the possibilities of these methods in a theoretical manner.

##What I did


I decided to use a **dual camera setup** and capture **RAW image data**:
Thus I will be able to get a RGB image _and_ the NIR channel for NDVI-like images.

In one camera the UV/NIR Filter was removed (converted to "full spectrum") and I plan to use a standard 720nm filter in front of the lens. 
Both cameras where triggered simultaneously with a interval enabled Remote shutter (for testing), or by the processing unit of the UAV.

At the moment I am a little bit concerned about the post processing steps:

Numerous notes on Public Lab have shown that **white balance** is indeed a very _important factor_.

Therefore I planned to use a white balance target, which reflects in the NIR spectrum equally to the visible spectrum.
Since Spektralon(R) is very expensive, I want to go with **Bariumsulfate** (BaSO4) **paint***.

The post processing steps will be something like:

-White balance, exposure equalization and conversion to tif or jpeg as linear images.
-Feeding the data into the OpenDroneMap Project
-Further processing with tools like Grass or OTB.

*= http://www.triticeaecap.org/wp-content/uploads/2011/12/Barium_Sulfate.pdf
Thanks to  funkycbj:
http://publiclab.org/notes/nedhorning/10-25-2013/calibrating-diy-nir-cameras-part-3#c7371a/bariunma///


##Further steps


-The UAV will be ready in approx. 2 weeks.
-Camera setup will be available for testing in 3-4 days.

##Questions 


Tools like _dcraw_ are able to provide an easy way to calculate a white balance for 3 channel images (RGB).

By digging deeper into the topic, I came across this post:
"Unfortunately this way of operation is more didactic than practical, because as we already indicated in the beginning to _adjust the white balance after the RAW development is not recommended as_** demosaicing algorithms are optimised to interpolate an already white balanced image**."
Taken from: http://www.guillermoluijk.com/tutorial/dcraw/index_en.htm


My biggest problem at the moment: 
**How can I get  the white balance factors for a 4 channel image?**

I do not think, that it is sufficient to calculate the white balance for both images separately, because the values depends relatively on the other channels...


Any thoughts about the project, or especially on the white balance issue?



