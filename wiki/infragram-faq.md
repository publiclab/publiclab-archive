---
title: "Infragram FAQ"\ntagnames: 'near-infrared-camera, faq, infragram, parent:infragram'
author: liz
path: /wiki/infragram-faq.md
nid: 7864
uid: 7

---

# Infragram FAQ

by [warren](../profile/warren), [ShintoSunrise](../profile/ShintoSunrise), [cfastie](../profile/cfastie), [liz](../profile/liz), [donblair](../profile/donblair)

May 23, 2013 16:03 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [faq](../tag/faq), [infragram](../tag/infragram), [parent:infragram](../tag/parent:infragram)

----

_Long form, community generated answers to frequently asked questions about the [Infragram](/wiki/infragram) project [on Kickstarter]()_


[infragram](../../tag/question:infragram)



****

## Older questions

**Note:** we are working to move these into the newer Questions system. Please copy them in if you can!

**Can this be used as a thermal imager? For example, to find hot and cold spots around my home?**

The short answer is that no, it cannot be used as a thermal imager--however, we have been working on a project that does just that: http://publiclab.org/wiki/thermal-camera

**Is the square of DIY filter large enough to attach to a SLR lens?**

Yes, we are sending a 4"x4" square of filter.

**Could it be used to help identify pigments or in some case reveal hidden things under drawings or paintings?**

We're not sure! Can you link to any examples of this sort of use? If we know the desired wavelengths, we could better answer the question.

**What's the infrared wavelength you are using? Do you plan to add far infrared filters in the 750. 850 and 950 infrared spectrum?**

The bands are quite wide - you can see the actual spectrum of one of the test filters in this post: http://publiclab.org/notes/cfastie/04-21-2013/rosco

Because of the interest in photosynthesis, we're not targeting a narrow band, but maximizing infrared sensitivity with a broad band filter.

**What is the sensitivity of the CMOS sensor you are using, how many lumins?**

We're not sure about this, in part because we haven't made a final camera selection. We'll post the specs we have on the webcam version soon, though it is a consumer-grade webcam and may not offer raw image capture.

**Is it possible to stack filters with your camera?**

See above -- we haven't made a final camera choice yet, but since we'll be selecting a very inexpensive one, the likelihood is not high that we'll have a standard filter screw. We are looking at some standard lens mounts which could help, however... more soon.

**When I take a plant photograph, where is the information to help me analyzing or interpreting the color of a photo regarding the plant health?**

You can start by looking at the breadth of research by Public Lab members here: http://publiclab.org/tag/ndvi and http://publiclab.org/wiki/near-infrared-camera. We'll be collaboratively building out that documentation (Wikipedia-style) as we go.

**Is the web cam level capable of doing infra red out of the box? Meaning if I take it, plug it into my laptop or what have you, I will be able to go out in my backyard and take shots with it infrared style?**

If you remove the filter and add your own infrared pass (visible block) filter you'll be able to take infrared photos, yes. We have some documentation on the website to guide you on that too: http://publiclab.org/wiki/infragram-convertible-cameras

**Can you put the filters on a pair of glasses, and use them without needing a camera?**

No, because your eyes cannot see near-infrared. A CCD or CMOS camera can, but only after we remove the infrared-blocking filter.

**Which cameras can be converted with an Infragram filter?**

We're creating a list here: http://publiclab.org/wiki/infragram-convertible-cameras

**I was wondering if it is possible to get more than one [anything]?**

Kickstarter rules state "only one reward per pledge." If you would like to get more than one kit, this will require making additional pledges. After we have completed and fulfilled this campaign, and have the product in our store, you will be able to buy multiple kits there. Specifically for the filter kit however, please note that the 4"x4" piece of superblue is big enough to convert multiple cameras. 

**I would prefer to incorporate the camera into a watering system, i.e. take picture, evaluate plant, water if necessary. Do you have any plans to move in this direction?**

Yes! we are developing Infragram processing software for the Raspberry Pi. With some programming and a Raspberry Pi or other Arm Linux board, you could totally incorporate the camera.

**Can this be used with a smartphone camera, such as iPhone or Galaxy S III?**

We would love to have this functionality on cell phone cameras, but you would have to permanently modify your cell phone to capture near infrared. We can't confirm that the infrared filter is removable on any particular phone.

**looks like an awesome project! How much more work for a camera that can do Ultra Violet?**

Inexpensive digital cameras like the one's we've been building our platform around are typically sensitive down to 350 nm, depending on the particular brand; some back-illuminated CMOS sensors can register as low as around 200nm. To see more discussion on this, check out our wiki, here: http://publiclab.org/wiki/uv-spectrometry

**The "click and go" edition, is that coming with Sdcard slot? **

Most likely, yes -- most of the point and shoot models we've been looking at using have a micro SD card slot, useful for storing and transferring images.

**What is different about your filter to available Infrared filters that can mount on DSL lens or modified existing filter to a Infrared filter?**

We've been honing in on the particular filter we're going to use via this dicussion, here:
http://publiclab.org/notes/cfastie/04-20-2013/superblue -- it's likely going to be a "SuperBlue" filter; and there may already be DSL-mountable filters with these particular block- and pass- properites, but we're planning on simply using a 4 in x 4 in square of the material and modifying the camera in a DIY fashion.

**Can I get the software that runs on my own computer?**

Yes, there is a free ImageJ-based plugin developed by Ned Horning [available here](http://publiclab.org/wiki/near-infrared-camera#How+to+process+your+images:).

**What exact range of wavelength you are covering? Up to 1000nm, 1200nm or even more?**

The sensitivity of most inexpensive, consumer digital cameras (the sorts we're targeting in this project) seems to drop off pretty sharply beyond 800nm, or so (a limit which works well for generating NDVI imagery associated with plant health). A typical spectrum associated with a Canon Elph (which is likely close to the sensitivity of the point-and-shoot we'll be using) is here: http://publiclab.org/notes/cfastie/04-20-2013/superblue 

**Can the point-and-shoot model take only infra-red pictures? Or can it take normal ones also?**

The point-and-shoot camera will be modified so that it will be capturing infrared light, which will affect the "red channel" of the images you'll capture. So, the usual RGB pictures you'd expect will look different, and won't be "normal".  That said, infrared photography is quite beautiful in its own right, and something that many photographers are interested in -- check out the images captured with a similarly-modified camera, here:  http://publiclab.org/notes/cfastie/05-09-2013/invisible-light

**@kate guberg -- great to hear!  A Raspberry Pi and an EEE PC should both work well with the webcam option.

**If the camera is setup with the proper filters for Near IR, then what is the online processing for? 
Why is the image right off the camera not useful directly?**

In order to generate information about plant health, the incoming RGB data needs to be processed in a particular way in software (actually quite straightforward, and similar manipulations can be done manually, in Photoshop -- we're just looking to provide an easy, one-step, online process).  For more info about the processing required, check here: http://publiclab.org/wiki/near-infrared-camera

**Is there a picture or mock-up of what the final camera will look like for the Infragram webcam option? is it just a retail webcam with a filter swap?**

We haven't yet settled on the particular webcam, so no mockup as yet, but yes: it'll likely just be an inexpensive retail webcam, with a filter swap.  

**How does shade affect this kind of photography?**

The values of NDVI can be different in shady areas compared to sunny areas for two reasons:
1) The color of light illuminating shady areas is different from that illuminating sunny areas. NDVI is based on the difference between colors, so that could cause NDVI results for shade and sun to differ.
2) The amount of each color recorded by the camera depends in part on exposure. If shady areas are dark in the photos (underexposed), the values for some or all colors will be very low. The computed values for NDVI will be more sensitive to random or other variation when two very small values are compared than when two larger values are compared. 

NDVI values in shady parts of aerial images are discussed in these notes:
http://publiclab.org/notes/cfastie/5-15-2012/ndvi-out-shadows
http://publiclab.org/notes/cfastie/05-23-2013/multigrain-ndvi

**I heard that infrared filters can be used on cameras without removing the factory infrared block filter. It just requires much longer shutter speeds. Is that true of the Kickstarter infrablue filter?**

That probably won't work with the Kickstarter filter. The infrablue filter passes near infrared, but also blue and green light. So keeping the shutter open long enough to adequately expose the red channel with infrared light will overexpose the blue and green channels and the photo will not be useful. In general, an Infragram camera must have it's IR block filter removed so there is more or less equal sensitivity to infrared and blue and green light. 

[yet unanswered...]

**For the $10 pledge, instead of the blue filter paper, could I get one of the used IR blocking filters that you are removing from camaras? If they are a flat plate, not a coating on a lens.**

**Do you all have any experience using EigenCam software? **