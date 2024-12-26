---
title: "White balance and NIR photography"\ntagnames: 'near-infrared-camera, nir, infrared, white-balance'
author: nedhorning
path: /notes/nedhorning/11-3-2012/white-balance-and-nir-photography.md
nid: 4759
uid: 133

---

![](https://publiclab.org/sites/default/files/MixedNIR.jpg.png)

# White balance and NIR photography

by [nedhorning](../profile/nedhorning) | November 03, 2012 12:00

November 03, 2012 12:00 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nir](../tag/nir), [infrared](../tag/infrared), [white-balance](../tag/white-balance)

----

When I first saw the near-infrared (NIR) photos acquired from DIY modifications [<a href="http://publiclaboratory.org/tool/near-infrared-camera">1</a>] on the PLOTS website I was curious why they had a magenta hue to them. Initially I thought the NIR filter was letting in non-NIR light but later realized it was due to improper white balance. This note provides an overview of what white balance is and has some suggestions on how to use white balance in NIR images.  


<strong>What is white balance?</strong>
White balance [<a href="http://www.cambridgeincolour.com/tutorials/white-balance.htm">2</a>] is a process in which an adjustment is made to an image to correct for variations in the quality of light so that objects that are white in the scene appear white in the image. You may have noticed that when you look at colors under florescent lights (for example paint samples in a store) they look different when you look at them outside or under incandescent lights. That's because the light coming out of a florescent bulb has different spectral characteristics than sunlight or an incandescent bulb so colors will appear different. This effect is usually more noticeable in photos from a digital camera. Have you ever taken a picture and the colors came out quite different from what your eye perceived? That is usually due to an inaccurate white balance. 

<strong>How do cameras deal with it?</strong>
Most cameras have some capacity to deal with white balance issues. The simpler cameras have options that include different illumination sources such as florescent, daylight, tungsten and most offer an auto white balance option. More advanced cameras have a manual white balance option that allows the photographer to easily set a custom white balance to adjust for just about any lighting situation. A problem occurs with NIR cameras because the camera is trying to do a white balance correction but it is assuming only visible light is hitting the sensor. This produces a nonsense correction which in most cases seems to create an image with primarily magenta tones.  

 
<strong>How to use white balance with NIR photos</strong>
Since the cameras we use for NIR photography are not calibrated for dealing with white balance in the NIR spectrum the predefined and auto options will not work properly so some sort of custom adjustment is the only option. If you camera has an option to make a custom white balance adjustment that is quite easy. You need to take a picture of a reference that you expect to have a even response across the three sensor channels. For visible photography people use a white or gray card. I have experimented with an 18% gray card and the results look good. I have also used green grass which seems to work quite well. If you don't have a gray or white card with you you can look for a substitute such as a painted wall. 

If you don't have the option to set a custom white balance in your camera you can adjust it after the image is acquired using image processing software such as Photoshop or Gimp with the UFRaw plugin as long as you acquire the images in RAW mode. Most low-end cameras do not have a RAW option but if you own a Canon camera there is a good chance that you can add that capability using CHDK [<a href="http://chdk.wikia.com/wiki/CHDK">3</a>]. The process to do white balance corrections using software is similar to the in-camera process. You need to have an image with a feature in it that can be used as a reference. For example, you could take a photo of a gray card under the same lighting conditions as the images you want to correct and then using the software you can define the reference and use that to correct the other images. There are tutorials on the Internet that explain how to do this software correction using different types of software. 

<strong>How important is it?</strong>
I'm not really sure how important this really is but I think it's a good idea to be aware of it. I personally prefer to do white balance corrections since it provides a “truer” rendering of what is being imaged. The magenta images give the impression that there is more information in the image than there really is. I also happen to like the way the corrected images look. 

<strong>Examples:</strong>
At the top of this note are a few examples of images using different white balance settings. I took these during a cloudy day but they provide an indication the effects of white balancing. The camera is a Canon A2200 that was converted at LEAFFEST [<a href="http://publiclaboratory.org/notes/nedhorning/9-25-2012/canon-a2200-nir-conversion">4</a>]. From left to right:
1) Color image using auto-white balancing
2) NIR image using auto-white balancing
3) NIR image using an 18% gray card as a reference for camera-based custom white balance
4) NIR image using grass as a reference for camera-based custom white balance


[1] <a href="http://publiclaboratory.org/tool/near-infrared-camera">http://publiclaboratory.org/tool/near-infrared-camera</a>
[2] <a href="http://www.cambridgeincolour.com/tutorials/white-balance.htm">http://www.cambridgeincolour.com/tutorials/white-balance.htm</a>
[3] <a href="http://chdk.wikia.com/wiki/CHDK">http://chdk.wikia.com/wiki/CHDK</a>
[4] <a href="http://publiclaboratory.org/notes/nedhorning/9-25-2012/canon-a2200-nir-conversion">http://publiclaboratory.org/notes/nedhorning/9-25-2012/canon-a2200-nir-conversion</a>