---
title: NIR image enhancement (&thinking out loud)
tagnames: near-infrared-camera, image-interpretation, spectral-imaging, first-time-poster
author: ttaylor
path: /notes/ttaylor/4-21-2013/nir-image-enhancement-thinking-outloud-0.md
nid: 6956
uid: 58398

---

# NIR image enhancement (&thinking out loud)

by [ttaylor](../profile/ttaylor) April 21, 2013 21:00

April 21, 2013 21:00 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [image-interpretation](../tag/image-interpretation), [spectral-imaging](../tag/spectral-imaging), [first-time-poster](../tag/first-time-poster)

Hi All, newbie here. In another context I've been thinking about what the color channels for NIR filtered consumer-grade color cameras mean. Someone directed me to the PublicLaboratory <a href="http://publiclaboratory.org/place/new-york-city">NYC site</a>, and I've started playing around with ir image at <a href="http://publiclaboratory.org/notes/liz/8-3-2011/infrared-balloon-image-reveals-gowanus-plume">Liz Barry's 8-3-2011 note</a>, from which I ripped the <a href="http://mapmill.org/sites/2011-7-31-brooklyn-gowanus-vis-b/IMG_2090.JPG">color image</a> and <a href="http://mapmill.org/sites/2011-7-31-brooklyn-gowanus-ir/IMG_2039.JPG">nir image</a>.  

As a teaser for the nerd-talk in the rest of this note, above is a very false color image I made purely by monkeying with the NIR image.   Note that in addition to the plume visible in the original NIR and composite image, there there *seems* to be a sequence of regularly-spaced interesting red spots close the shoreline above and to the left of the plume--closer to the shoreline than the posts or buoys or whatever they are.  I say "seems" because  I've taken some mathematical liberties that I am pretty sure will amplify noise and image compression artifacts and that I haven't kept careful track of.  On the other hand, much of the color detail in tracks nicely with features and material differences in the visible and NIR, so I'm hopeful. 

Next is my thinking out loud piece.  There is a lot of information about color response on this site that I have not yet digested, so if I say something ignorant please direct me to the relevant source. In the(my)lack of detailed information about the camera used and the way it was setup, I used whatever information I could find, and hope that it applies.

1) the ccd arrays used in standard digital cameras have a quite a large <a href="http://evolvingbeauty.com/images/uploads/2_CCD_RESPONSE.gif">spectral sensitivity</a> in the near IR.

2) A good IR filter conversion for digital cameras such as the <a href="http://www.lifepixel.com/infrared-filters-choices">standard filter at life pixel</a> have a <a href="http://www.lifepixel.com/wp-content/uploads/2011/01/standardinfraredfilter.png">very flat response</a> down to below 1100nm.

3) On the other hand, the response of the Bayer array color filters (p3 of <a href="http://www.1stvision.com/cameras/AVT/dataman/ibis5_a_1300_8.pdf">this</a>) on a RGB ccd array are 1) almost identical below about 800nm, but 2) in the nearest NIR between 720 and 800nm there is a significant difference in response between the R and GB channels, and much smaller but perhaps still useful response between the G and B.  This means that at each pixel in a NIR filtered camera the three color channels have a common baseline due to illumination in the 800-1100nm range, plus a differential spectral response to illumination in the 700-800nm band. This to say that there is spectral information in those RGB channels that can be utilized.

What I did (in increasing level of mathematical sophistication):
A) For each color channel I computed the mean intensity over the whole image. (I used the mathematica software package-for which I have a license through my daytime job-for all of this, but a lot if not all could be done in ImageJ, and a decent programmer--i.e. not me--could make a plugin. I'd be willing to help)
B) subtract the mean from each channel, and compute the covariance matrix of the (all 7,990,272) three dimensional vectors of pixel RGB values.  If  you're interested, this happens to be 
(0.101457, 0.0731181, 0.109591
0.0731181, 0.0562355,0.0779212
0.109591, 0.0779212, 0.119208)
C)"whiten" the data by multiplying by the inverse symmetric square root of the covariance matrix times each RGB vector.  This has the effect of amplifying slight variations in tint in the NIR image to get a more robust color map.  An unwanted possible side effect is that it might also amplify noise and image compression artifacts to extent that they could be confused with features in the image--though if this is happening with this image it isn't apparent to me.
 