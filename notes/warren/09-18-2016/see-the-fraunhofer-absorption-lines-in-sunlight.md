---
title: "See the Fraunhofer absorption lines in sunlight"

tagnames: 'spectrometer, ecohack, spectrometry, activity:spectrometry, difficulty:easy, activity:dssk, activity:foldable-spec, category:verify, category:observe, time:1h, response:6168, status:draft, activity:education, activity:science-fair, activity:classroom, activity:papercraft-spec, pin:spectrometry'
author: warren
path: /notes/warren/09-18-2016/see-the-fraunhofer-absorption-lines-in-sunlight.md
nid: 13460
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/018/067/original/ecohack.JPG)

# See the Fraunhofer absorption lines in sunlight

by [warren](../../../profile/warren) | September 18, 2016 14:44

September 18, 2016 14:44 | Tags: [spectrometer](../tag/spectrometer), [ecohack](../tag/ecohack), [spectrometry](../tag/spectrometry), [activity:spectrometry](../tag/activity:spectrometry), [difficulty:easy](../tag/difficulty:easy), [activity:dssk](../tag/activity:dssk), [activity:foldable-spec](../tag/activity:foldable-spec), [category:verify](../tag/category:verify), [category:observe](../tag/category:observe), [time:1h](../tag/time:1h), [response:6168](../tag/response:6168), [status:draft](../tag/status:draft), [activity:education](../tag/activity:education), [activity:science-fair](../tag/activity:science-fair), [activity:classroom](../tag/activity:classroom), [activity:papercraft-spec](../tag/activity:papercraft-spec), [pin:spectrometry](../tag/pin:spectrometry)

----

_This is a draft -- still in progress, based on [this note](https://publiclab.org/notes/cfastie/3-2-2013/fraunhofer)_

I'm still working on:

* a graph of replications (could be added later)
* references, from https://publiclab.org/wiki/spectrometer-curriculum

****

## Goals

One thing spectrometers can be used for is to detect gases, but an experimental setup for this is actually pretty hard, because gases are **so transparent.** Think about how little light is blocked by the air when you can look across a mountain valley. 

How much of a given gas would you need to look "through" to actually see certain colors blocked -- say, if you looked at a full spectrum (incandescent or halogen) light bulb with your spectrometer? Turns out, the width of the Earth's atmosphere is more than enough.

In this activity, **we'll just point a spectrometer at the sky** to (ideally) see iron, calcium, hydrogen, sodium, as well as water and C02, as dark "blocked" bands in the spectrum of the sun, which would otherwise be smooth and continuous. (above image by @liz, at #ecohack)

## Activities to do first

* [wavelength calibrate your spectrometer](/notes/warren/09-01-2016/calibrating-your-spectrometer-in-spectral-workbench)

## What you'll need

* [a Desktop Spectrometry Starter Kit](https://publiclab.org/wiki/desktop-spectrometry-kit-3-0) or a [foldable mini-spectrometer](https://publiclab.org/wiki/foldable-spec)
* sunlight
* a laptop and a window, or an outdoor space to work
* an account on [SpectralWorkbench.org](https://SpectralWorkbench.org)
* two people are really helpful -- one to point the spectrometer, one to operate the laptop

### Background

You can read more about the Fraunhofer lines, why they're called that, and why the sun makes a good full-spectrum light source in @cfastie's great post here, [entitled Fraunhofer](https://publiclab.org/notes/cfastie/3-2-2013/fraunhofer). 

****

[![8059478028_f204b0164f_k.jpg](https://i.publiclab.org/system/images/photos/000/005/498/medium/8059478028_f204b0164f_k.jpg)](https://i.publiclab.org/system/images/photos/000/005/498/original/8059478028_f204b0164f_k.jpg)

_Photo by @donblair - pointing a DIY spectrometer from the roof of a building._

### Step 1

If you haven't recently, [calibrate your spectrometer again](#Activities+to+do+first) to ensure it hasn't drifted.

### Step 2

Find a spot outside or on a window sill where you can point your spectrometer at the sky -- not at the sun directly (that's too bright) but at a cloud, or at the blue part of the sky. 

It's helpful if you can affix the spectrometer, like with a tripod, or rubber banding or zip-tying it to something pointable, like a microphone stand or even a desk lamp. Having a second person to "manage" the pointing is really helpful while you're using the laptop.

### Step 3

Go to https://spectralworkbench.org/capture, plug in your spectrometer, and capture a spectrum. 

### Step 4

Copy your last calibration with the `Copy calibration` button. Tag your spectrum with: `sunlight` and `fraunhofer` so we can find it!

**Bonus:** tweet out a picture of yourself pointing your spectrometer at the sky!

### Step 5

Post links to your spectra here so we can see how consistently people are able to find these. Please note what the weather was like, what time of day it was, and anything else that might 

Adding a photo of yourself (like the lead image of this post) to show your setup and the weather is a great way to show your experimental setup. It'll help with troubleshooting, and help others see how to do this activity themselves. 

[![window.jpg](//i.publiclab.org/system/images/photos/000/018/082/large/window.jpg)](//i.publiclab.org/system/images/photos/000/018/082/original/window.jpg)

****

### Common pitfalls

The sun is **so bright**!!! It's easy to overpower your camera and cause clipping -- where brightness in any of the three color channels of the camera reaches 100% and the top of the graph just gets flattened out. Try pointing further away from the sun, or even the sun's reflection off a piece of white paper (though this may change your spectrum!). 

Direct vs. diffuse sunlight may yield different spectra, as [explored in this note](https://publiclab.org/notes/viechdokter/04-07-2016/direct-sunlight-vs-diffuse-sunlight). An example of clipping is here, in the blue area to the left, where the brightness curve gets flattened against the top:

[![Screenshot_2016-09-18_at_11.00.57_AM.png](//i.publiclab.org/system/images/photos/000/018/068/large/Screenshot_2016-09-18_at_11.00.57_AM.png)](//i.publiclab.org/system/images/photos/000/018/068/original/Screenshot_2016-09-18_at_11.00.57_AM.png)



****

## What outcome you should get

Post your results in a response below -- you should be able to see some faint black bands through your spectrum as in this image:

<iframe width='100%' height='450px' style='border:none;' src='//spectralworkbench.org/spectrums/embed2/85787'></iframe>

See many other peoples' attempts at this here -- some are overexposed in the visible range, but have interesting absorption lines in the infrared range: https://spectralworkbench.org/tags/sunlight

Here's one which shows clear black lines in the infrared range, to the right side; if you [remove the infrared blocking filter from your webcam](https://publiclab.org/wiki/webcam-filter-removal), you can record these wavelengths too:

![infrared](https://i.publiclab.org/system/images/photos/000/005/455/original/sky.png)