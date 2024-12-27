---
title: "Late-night IRCAM hack"

tagnames: 'near-infrared-camera, near-infrared, ircam, near-ir, irkit, infragram'
author: donblair
path: /notes/donblair/3-5-2013/late-night-ircam-hack.md
nid: 6211
uid: 43651

---

![](https://publiclab.org/sites/default/files/pic_54_1.png)

# Late-night IRCAM hack

by [donblair](../../../profile/donblair) | March 05, 2013 19:09

March 05, 2013 19:09 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [near-infrared](../tag/near-infrared), [ircam](../tag/ircam), [near-ir](../tag/near-ir), [irkit](../tag/irkit), [infragram](../tag/infragram)

----

## Background

Craig Versek rolled into Amherst last week bearing whiskey; clearly, it was time to break out some webcams, a Raspberry Pi, and some shot glasses, and work on near-infrared image capture.

## What we wanted to do

Ultimately, we'd like to get a (Linux-running) Raspberry Pi working as an 'near infrared point and shoot' -- capturing both visible (VIS) and near infrared (NIR) images and combining them into one, nice composite image.  

Right now, we're basically just doing our development on a laptop running Ubuntu with two webcams connected, and trying to make sure that all of the software libraries we're using are easily ported to the Raspberry Pi.  

## What we (sort of) did

The first item of business was to transform one of the webcams into an NIR cam.  So that's what we (sort of) did.  We fetched some of the webcams used in the Public Lab DIY Spectrometer -- boxy little <a href="http://www.amazon.com/Syba-SY-CAM63014-Webcam-Laptop-Microphone/dp/B004BDOR8I">Syba cameras</a> -- and followed Public Lab's instructions for disassembling it.  

First off: it was really quite satisfying / anxiety-producing to take a brand-new, cute little webcam:

<img src="https://raw.github.com/dwblair/irkit/master/report/syba.jpg" width="200" alt="snap!" />

And -- snap it in half! You might find yourself paused in the following stance for several seconds:

<img src="https://raw.github.com/dwblair/irkit/master/report/snap.jpg" width="500" alt="snap!" />

But after a sip or three of whisky, you'll like find that any squeamishness is eventually overcome. This was my experience:

<img src="https://raw.github.com/dwblair/irkit/master/report/pop.jpg" width="500" alt="snap!" />

Above, the half of the webcam that actually contains the circuitry + camera is on the left.  So we discarded the other half (i.e., we piled it on my desk for possible later re-use, next to the aluminum foil and sodium hydroxide), and split open the half that had the goodies inside:

<img src="https://raw.github.com/dwblair/irkit/master/report/split.jpg" width="500" alt="snap!" />

Continuing to follow the Public Lab instructions, we removed the lens, revealing the IR filter (which popped off nicely after being poked at with a knife for a bit):

<img src="https://raw.github.com/dwblair/irkit/master/report/lensR.jpg" width="500" alt="snap!" />

In the above photo, you're seeing the lens on the lower left, and the IR filter on upper left.  (The dangling bit coming off the circuit board is a -- what is it? a microphone? a light sensor? We didn't know.)  Now that we'd unscrewed the lens, we needed to readjust the focus (which is done by screwing the lens back on sufficiently to render the webcam image as in-focus as possible).  This required poking the (mystery dangling bit) back into its original home in the case, while leaving the case semi-open;  not too difficult, even after 5 sips of whiskey.  And this might've been a pointless exercise in any case, as it seems increasingly likely on reflection (and after hearing from Jeff) that it was simply a microphone, which we could have simply snipped off. 

Eventually, we found the best focus we could (which didn't seem to be as good as the original focus, pre-hack ...?).  We didn't have any developed film on-hand to block visible light, so we just snapped the webcam back together, and rubber-band-ed it together with an un-modified version of the same webcam.  We then started taking some snapshots with both of them simultaneously.  You can see the webcams poking above my laptop screen, and a photo we took of Craig lighting a candle:

<img src="https://raw.github.com/dwblair/irkit/master/report/wall-e.jpg" width="500" alt="snap!" />

At this point the whiskey was mostly done; I went to sleep. Craig fetched some beer, and started in on coding.

The results to-date of our coding efforts are <a href="https://github.com/cversek/irkit">here</a>  (Craig's repository) and <a href="https://github.com/dwblair/irkit">here</a> (my repository), based on a nice outline and overview of useful features <a href="https://github.com/jywarren/irkit">here</a> (Jeff Warrens's repository -- see the 'Issues' tab). Jeff suggested early on that we look into using a nice Linux program called 'fswebcam' to capture images, and that's what ended up working very nicely for us.  I'd stumbled upon <a href="http://simplecv.org/">SimpleCV</a> as a nice set of libraries for doing image manipulation (which also seems possible to install on the Raspberry pi).  But Craig surged ahead that night, finding a way of capturing images from two webcams nearly simultaneously (non trivial) and saving the images from each in time-stamped, appropriately-labeled files.

The basic idea here is to be able to capture pictures from both webcams simultaneously of the same thing, and then have the computer overlay the NIR image on the VIS image in a pleasing fashion.  Within a few days, Craig had also figured out how to do this -- which required tweaking the SimpleCV library quite a bit.  Craig's code identifies common features in the two images, and uses these features to calculate an "affine transform" (think: warping) of image A such that the features in image A match positions with the same features in image B.  And: it's working really well!  

(Aside: thanks to <a href="https://sites.google.com/site/ilupythonp/my-updates/demoapplicationforsimplecvgsoc">whomever it was who fixed parts of the SimpleCV libraries, recently</a>!)

I pulled his updated code into my repository so that I could play with it.  I plugged in the webcams, and took a shot of some plants (one dead, one living) on my girlfriend's dresser.  Here's the image from the unmodified, 'visible' webcam:

<img src="https://raw.github.com/dwblair/irkit/master/report/pic_52_2.png" width="500" alt="snap!" />

And here's the image from the webcam that has had its IR filter removed:

<img src="https://raw.github.com/dwblair/irkit/master/report/pic_52_1.png" width="500" alt="snap!" />

Running Craig's code generates this composite image:

<img src="https://raw.github.com/dwblair/irkit/master/report/pic_52_merged_o1_2.png" width="500" alt="snap!" />

Whee!  You can see that the affine transform had to warp the original image by skewing it to the right a bit in order to get the identified features to match up nicely.

##What's next

I guess the next to-do is going to be to find some developed film in order to block visible light to the IR webcam.  Then it might get a bit trickier to identify common features in both images ...

And: we need to see how well this works on the R-Pi!
