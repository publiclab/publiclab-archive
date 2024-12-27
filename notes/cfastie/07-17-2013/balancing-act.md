---
title: "Balancing act"

tagnames: 'near-infrared-camera, vermont, white-balance, infragram, infrablue, cmos, response:8869, ccd, a810, potato'
author: cfastie
path: /notes/cfastie/07-17-2013/balancing-act.md
nid: 8900
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/821/original/BlueOrig.jpg)

# Balancing act

by [cfastie](../../../profile/cfastie) | July 17, 2013 01:15

July 17, 2013 01:15 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [vermont](../tag/vermont), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [cmos](../tag/cmos), [response:8869](../tag/response:8869), [ccd](../tag/ccd), [a810](../tag/a810), [potato](../tag/potato)

----

<em>Image above: The famous blue origami paper I have been using to custom white balance my infrablue camera. All the photos of paper below are this piece of paper.</em>

Brenden has done some extensive testing of infrablue cameras to find good combinations of camera, filter, camera color settings, and white balance method. [He has reported two important observations]( http://publiclab.org/notes/geobduffy/07-13-2013/i-got-the-cmos-infrablues-decrypting-custom-white-balance-settings): 1) CMOS cameras  behave differently from CCD cameras, and 2) CMOS cameras behave better when a custom white balance is done on an overcast day instead of in direct sunlight.

I don’t have a CMOS point & shoot, so I have not been able to confirm these observations. My initial tests suggested that my CCD camera performed better when a custom white balance was done in the sun rather than the shade, which seemed contradictory to Brenden’s finding for CMOS cameras.

All of the photos here were taken with a Canon A810 with Rosco #74 filter (the camera’s IR block filter was removed). All of the custom white balancing was done by filling the view with the same blue origami paper (above) which is the paper in all the photos of paper below. The A810 does not have any preset color settings if a custom color balance is used. Histograms were made in Adobe Lightroom on just the part of the photo with the paper or the potato foliage. 

![_74WBshae_sunPots.jpg](https://i.publiclab.org/system/images/photos/000/000/822/medium/_74WBshae_sunPots.jpg)
<p></p><em>Infrablue photos of Brussels sprouts and potato plants with the RGB histograms from an area of potato foliage. The Canon A810 was custom white balanced on blue origami paper in the shade (left) or in direct sunlight (right). The richer orange color resulting from white balance in the sun is reflected in the greater separation of the three channel histograms. July 10, 2013.</em>

On a day with clouds and sunny breaks, I did a white balance in both direct sun and cloud filtered sun, and the most saturated infrablue photos of plants were produced after white balance in direct sunlight (above). The more saturated orange photos tend to produce NDVI images with a wider range of NDVI values which are more often in the correct range for healthy plants.

Several days later when it was sunny and blue, I did more careful tests. I white balanced the camera on the blue paper in the sun, and then used the camera to take a photo of the blue paper. In this photo the blue paper looks like an 18% grey card because that is exactly what the camera’s white balance algorithm does. It assumes that you are pointing the camera at a colorless, light surface, and adjusts to make it appear so in the photos. The histogram for the paper in this photo shows that all three channels have the same values, they overlap completely. I then shaded the blue paper by blocking all direct sunlight and took another photo. This one looks slightly blue because the paper was still illuminated by a bright blue sky, but not by direct sunlight which was less blue. The histogram confirms that there is now more blue light compared to green and red (the red channel is mostly NIR in this camera). Eliminating the direct sunlight shifted the color balance. A photo of the potatoes had a nice orange hue which would probably make a good NDVI image.

![_74WBsunblueskyShotsun_shotshade_Pots.jpg](https://i.publiclab.org/system/images/photos/000/000/823/large/_74WBsunblueskyShotsun_shotshade_Pots.jpg)
<p></p><em>Infrablue photos after the camera had been white balanced on blue paper in the sun.  The blue paper is colorless in a photo taken after the white balance was done (left), but appears bluer when direct sunlight is blocked (center). Potato leaves appear orange and have good separation among the channel histograms (right). July 15, 2013.</em>

On that same blue day, I did another custom white balance, this time while blocking direct sunlight from the blue paper. Again, in a photo taken of the paper, it looks colorless and the histogram shows complete channel overlap. However, another photo of the paper in direct sunlight appears yellowish, and the histograms show that there is more red light (NIR) compared to blue and green. The addition of the direct sunlight shifted the color balance. A photo of the potatoes is even more orange than before, and the histogram shows slightly more separation among the channels.

![_74WBshadebluesky_shotsun_Pot.jpg](https://i.publiclab.org/system/images/photos/000/000/825/large/_74WBshadebluesky_shotsun_Pot.jpg)
<p></p><em> Infrablue photos after the camera had been white balanced on blue paper under a blue sky but with no direct sunlight on it.  The blue paper is colorless in a photo taken after the white balance was done (left), but appears yellowish when direct sunlight shines on it (center). Potato leaves appear orange and have slightly better separation among the channel histograms than before (right). July 15, 2013</em>

This result for my CCD camera is consistent with what Brenden found for his CMOS camera -- a custom white balance when no direct sunlight illuminates the paper produced oranger infrablue photos compared to when the paper was in the sun. But this is not always the case for my CCD camera. This suggests that the light illuminating the paper has more than two states: sunny vs. not sunny. The color of daylight varies greatly with time of day, cloud cover, shade from buildings, and transmittance through tree canopies, among other things.  Adding or subtracting direct sunlight from the daylight mix can affect color balance differently on different days or in different places. With infrablue cameras it is confusing to understand exactly how direct sun or clouds affect color balance because one of the three color channels (red) captures mostly infrared light.

Fortunately for users of CCD infrablue cameras, all of the potato photos here would make meaningful NDVI images. In fact, the most interpretable NDVI results may not come from the orangest photo – it is possible for an infrablue photo to be too orange. With too much separation between the blue and red (NIR) values, NDVI values can be higher than the typical range for healthy plants. But consistent with Brenden’s findings with a CMOS camera, the orangest photo was made when the blue paper was not in sunlight. 

I have been using blue paper for custom white balance because it seems to work consistently, and I [tested other colors]( http://publiclab.org/notes/cfastie/06-17-2013/white-balance) and found that a particular blue resulted in the most useful infrablue photos. But my comparisons were done on one day with some particular sky conditions, and now I know that other colors might work just as well when used for custom balance in other light conditions.  

However, a pattern has emerged. In white balance tests so far with a CCD camera, blue paper in blue light has made the most orange infrablue photos. It appears that the bluer the light entering the camera during the white balance process, the oranger the resulting infrablue photos will be. This might be essentially the same result observed by Brenden with a CMOS camera. But more testing is called for. 

And it’s really easy to do these tests. Point your infrablue camera at some color while doing a custom white balance and then take a photo of some plants. Does it look orange?  Try another white balance on another color. Are the photos of plants more orange?  Repeat. Report. (Research Note or it didn't happen.)

Did you notice how much the potatoes grew in five days?