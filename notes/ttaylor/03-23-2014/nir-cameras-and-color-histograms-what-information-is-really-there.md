---
title: NIR cameras and color histograms: what information is really there?
tagnames: near-infrared-camera, infrared, infragram, infrablue, histogram, response:8190, histograms
author: ttaylor
path: /notes/ttaylor/03-23-2014/nir-cameras-and-color-histograms-what-information-is-really-there.md
nid: 10218
uid: 58398

---

![](https://publiclab.org/public/system/images/photos/000/003/370/original/43x36clip.png)

# NIR cameras and color histograms: what information is really there?

by [ttaylor](../profile/ttaylor) March 23, 2014 21:50

March 23, 2014 21:50 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [infrared](../tag/infrared), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [histogram](../tag/histogram), [response:8190](../tag/response:8190), [histograms](../tag/histograms)

----

###What I want to do
Along the lines of [Chris Fastie's post last September](http://publiclab.org/notes/cfastie/09-11-2013/infrared-behavior-of-a810), I've been wondering what real spectral information is in the color channels of an ir-converted point and shoot camera.  This post is a data-dump of what I've learned and what I'm thinking.

Ned Hornung's [post last September](http://publiclab.org/notes/nedhorning/09-11-2013/characterizing-camera-sensors-first-step) had a pay-walled link to a nice academic paper with an NIR spectral characterization of digital cameras, [this link](http://users.ugent.be/~pfsmet/papers/A1_33%202009%20GV%20PFS%20IEEE%20Geosc%20RemSens.pdf) seems to be a free version.  This paper is very informative, and also validates my own thinking on the subject, which ought to be worth a free beer.

A natural photo-processing technique for making an image with good color contrast is to adjust the white balance, which I understand as a simple digital scaling of the brightness in the different color channels. I am interested in something a different--the camera ccd sensor, the Bayer array, and the camera or digital negative development software white balance settings were all designed by some smart engineers who assume certain specifications about the sensor, the illumination and the relationship between the two.  These are specifications are no longer valid when using the camera for NIR imaging, and with a little reverse engineering we might be able to re-imagine the low level image processing to better suit our needs.

###What I did
I took a photo of weeds and dirt road (lots of that around here) using my canon sd1100, with the hot filter replaced with a life pixel standard ir filter, running CHDK, and saved as DNG.  When I open this image in [Raw Therapee](http://rawtherapee.com/), with the white balance setting as "Camera" I get the standard IR-ish pink-purple image

[![Weeds_DirtRoad.jpg](https://i.publiclab.org/system/images/photos/000/003/371/medium/Weeds_DirtRoad.jpg)](https://i.publiclab.org/system/images/photos/000/003/371/original/Weeds_DirtRoad.jpg)

Raw Therapee also gives me the histograms associated with this image, a screen shot of this is below.

[![camera_white_balance.png](https://i.publiclab.org/system/images/photos/000/003/373/medium/camera_white_balance.png)](https://i.publiclab.org/system/images/photos/000/003/373/original/camera_white_balance.png)

Note that the green histogram indicates a much less bright intensity distribution that the blue, which is less than the red--which nicely sums up the color of the image.

However when I toggle the raw histogram button as pictured here,a different story is told.

[![rawHistogram.png](https://i.publiclab.org/system/images/photos/000/003/374/medium/rawHistogram.png)](https://i.publiclab.org/system/images/photos/000/003/374/original/rawHistogram.png)

Now it seems that the blue channel has the smallest intensity, the green is intermediate and the red is the brightest.

Hoping to get to the bottom of this, I went searching for software that will let me read out the honest raw sensor values, and I found the shareware [RawDigger](http://www.rawdigger.com/) which offers a 30 day free trial, which very nicely lets me pull out the non-demosaiced separate channels in the Bayer array of the raw image, which it denotes R, G, B, G2.--there are two green channels, reflecting that every 2x2 block in the [Bayer array](http://en.wikipedia.org/wiki/Bayer_filter) has one red, two green and one blue pixel.  RawDigger also has a tooltip readout of the pixel intensities in the raw image, which suggest that the two greens have approximately the same intensities, the red has intensity about 50% more and the blue has 40% less.  RawDigger also allows me the functionality of exporting the each individual channels of the Bayer array image as a separate tiff, with the pixels for the other channels zeroed. I can then open these tiff images in ImageJ, add the two green channels to make a single green image, make a stack with this and the red and blue channel tiffs and convert to RGB to obtain

[![stack2.png](https://i.publiclab.org/system/images/photos/000/003/377/medium/stack2.png)](https://i.publiclab.org/system/images/photos/000/003/377/original/stack2.png)

Now the histogram is this,

[![rawhist.png](https://i.publiclab.org/system/images/photos/000/003/378/medium/rawhist.png)](https://i.publiclab.org/system/images/photos/000/003/378/original/rawhist.png)


However, a 43x36pixel chip of this image is the main image of this post above, and we see that the reason for the greenish cast of the image, in spite of the fact that the measured red intensity is larger than the green intensities, is that there are two green pixels for every red or blue, and that the eye is gauging the averaged color intensities at a scale larger than the single pixel. Essentially the eye is demosaicing the image for the brain, although not if we zoom in sufficiently far.

###Questions and next steps
I could speculate on why camera white balance is so strongly kills off the green the way it does, for instance based on the way the visible spectral response of camera hot filter attenuates the intensity of blue and red light hitting the Bayer array while passing green light so well:

<img src="http://www.astrosurf.com/luxorion/Physique/spectral-response-ccd.jpg">

More to my purpose though is the question for which I have fewer answers: how should the strong red channel, be combined with the even stronger green channel (courtesy of the double green pixels), and the weaker blue channel to provide the most informative images?  I intend to try something along the lines of the channel sums and differences proposed by the Verhoven spectral characterization to obtain non-overlapping (or less overlapping) bands, though I could do that more precisely if I know more precisely what the spectral response of the bands of my camera really are--which takes us back to what Chris Fastie was trying to do last September.

Also, though it's devoted to visible photography, I should point out the beautiful, detailed open source digital darkroom blog [ninedegreesbelow](http://ninedegreesbelow.com/); I wonder if the noise/graininess I find in the green channel of some of my ir images developed with standard parameters isn't due to the kind of channel-chopping described [here](http://ninedegreesbelow.com/photography/negative-primaries.html).







