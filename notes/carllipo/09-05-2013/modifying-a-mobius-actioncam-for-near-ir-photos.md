---
title: Modifying a Mobius ActionCam for Near IR Photos
tagnames: near-infrared-camera, ndvi, infragram, infragram-conversion, infragram-sandbox, mobius-actioncam, rcgroups
author: carllipo
path: /notes/carllipo/09-05-2013/modifying-a-mobius-actioncam-for-near-ir-photos.md
nid: 9293
uid: 170171

---

![](https://publiclab.org/public/system/images/photos/000/001/408/original/mobius.jpg)

# Modifying a Mobius ActionCam for Near IR Photos

by [carllipo](../profile/carllipo) September 05, 2013 19:35

September 05, 2013 19:35 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infragram](../tag/infragram), [infragram-conversion](../tag/infragram-conversion), [infragram-sandbox](../tag/infragram-sandbox), [mobius-actioncam](../tag/mobius-actioncam), [rcgroups](../tag/rcgroups)

----

I have been working on modifying cameras to allow us to be able to take remote photos using our various platforms (quadcopters, fixed wing, etc) in the near-infrared. Doing so gives us an ability to generate NDVI images and study differences in vegetation health (and thus potentially archaeological features ala crop marks, etc.). The criteria we've had is that the cameras have to be (1) light and ideally (2) cheap. We know we can do this for Canon cameras and get good results.  What is required is taking the camera apart and removing the IR filter that is ordinarily placed in front of the CMOS or CCD sensor.  Some cameras are easier than others to modify in this way.  I have done this for a Canon A380 and for a couple of GoPro Hero (Naked and 2). We also sent one of our Ricoh GR III cameras to a commercial service to have this done (this cost a couple of hundred bucks).

With these point-and-shoot cameras there are some drawbacks.  First, they are mechanical and have parts in them that are easy to mess up once you take the cameras apart. Ive screwed up one or two of our cheaper Canon's this way -- once some spring get sprung they can be nearly impossible to reassemble.  Second, they are heavier than they need to be. With remote sensing we are basically focusing on infinity and we want a relatively wide angle view. As a result, we don't need all the focusing mechanics or any optical zooming and what not. This just complicates the entire camera and weighs it down.  Third, they somewhat expensive. Once you start opening up cameras and yanking out parts, it is preferable to have the cameras cost well under $100 each.

Iam Bouret, one of our fantastic collaborators on our [NSF REU program](http://www.csulb.edu/geography/nsf-reu/). suggested that we look into the Mobius ActionCam as a possible candidate for our NIR camera. This camera costs about $70 has a 5MP sensor, is configurable via open firmware and software, is solid-state and easy to take apart.  You can read all about the camera [here](http://www.rcgroups.com/forums/showthread.php?t=1904559).  A windows-based GUI allows the camera to be [customized](http://www.mytempfiles.info/mobius/index.html)). Using this interface one can set the resolution of the images, the default modes, and the intervalometer.  

Taking the camera apart was very easy. If you follow the guide on the  [website](http://www.mytempfiles.info/mobius/index.html) you can follow along. Basically there are a couple of screws holding the case together and the lens is removable by detaching a ribbon cable from the main board. Once you do that you can open the back of the lens and remove the IR filter (its immediately above the CMOS sensor). Then the entire thing goes back together again in the opposite order. There are thankfully no springs or mechanical bits to make the job messy - it really is about a 10 minute job. 

Once you remove the IR filter you have a camera that records images that include a portion of the near-infrared spectrum.  This is great but what you are doing is simply allowing more light in the camera. The results are still split into the RGB bands - there are just additional wavelengths present (this is why the IR filter is used - to just show the visible spectrum).  To isolate the NIR you need add a filter so that you get the near IR to use one of the bands.  In black and white film photography this is usually done with a yellow filter that cuts out the bus and thus shifts the spectrum up in wavelength so that you get nearIR (N), red (R ) and green (G).  An alternative that seems to be preferable for digital images is to use a blue filter to eliminate the red.  What you get then is a file that records just the NGB (the red is removed). Ideally one would take simultaneous shots with a regular color camera to provide 4-band images (NRGB) but that requires 2 cameras and a way of registering the two sets of images. 

Jeffrey Warren sent me a piece of their "infrablue" filter to use with the NIR modified camera. This filter seems to be well suited for removing the red while allowing the near IR band to be collected by the CMOS sensor.  Here is a sample NIR image (compare to the RGB).

Finally, I ran the NIR image through the Infragram sandbox to generate an NDVI. The results look pretty solid, but I'll have to check how the spectra to see if we are getting good separation of the bands.  Apparently the Infragram folks have found that some of the cheap-o CMOS based camera sensors are set up in a way in which there is a lot of blue leaking into the NIR band. Obviously this will screw the image up for analytic purposes. From what I understand this is caused in some cases by the fact that a Bayer RGB filter is not always used to separate the light into 3 bands. So there is a need to search for a cheap camera that still has good properties in terms of splitting the bands.  

Given these results, though, it appears that the Mobius Action cam might do the trick. 

[![IMAG0015.jpg](https://i.publiclab.org/system/images/photos/000/001/403/medium/IMAG0015.jpg)](https://i.publiclab.org/system/images/photos/000/001/403/original/IMAG0015.jpg)


[![IMAG0015-color.jpg](https://i.publiclab.org/system/images/photos/000/001/404/medium/IMAG0015-color.jpg)](https://i.publiclab.org/system/images/photos/000/001/404/original/IMAG0015-color.jpg)


[![index.png](https://i.publiclab.org/system/images/photos/000/001/405/medium/index.png)](https://i.publiclab.org/system/images/photos/000/001/405/original/index.png)


