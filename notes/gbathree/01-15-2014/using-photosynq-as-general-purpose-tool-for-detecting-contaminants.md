---
title: "Using PhotosynQ as general purpose tool for detecting contaminants"

tagnames: 'spectrometer, fluorescence, photosynthesis, photosynq'
author: gbathree
path: /notes/gbathree/01-15-2014/using-photosynq-as-general-purpose-tool-for-detecting-contaminants.md
nid: 9948
uid: 53164

---

# Using PhotosynQ as general purpose tool for detecting contaminants

by [gbathree](../../../profile/gbathree) | January 15, 2014 18:00

January 15, 2014 18:00 | Tags: [spectrometer](../tag/spectrometer), [fluorescence](../tag/fluorescence), [photosynthesis](../tag/photosynthesis), [photosynq](../tag/photosynq)

----

If you haven't heard of PhotosynQ, it's a platform for measing plant health with a focus on plant photosynthesis.  Our group has been working on this problem for 20+ years, so the design is pretty darn good with high accuracy and low noise.  The device itself (we call it the MultispeQ) has 2 pin photodiodes which detect light, one is IR only and the other is visible light only.  It also has room for about 7 LEDs which can be configured on either side of the detector (ie light passes through sample into the detector, or light relfects off the sample back to the detector).

While our goals are to use it specifically for plant fluorescence and absorbance at various wavelengths of interest for plant scientists, the fact is **MultispeQ it is a very low cost and high quality general purpose tool for any method involving fluorescence, absorbance, or transmittance.  **

Jeff gave the example detecting crude oil contamination in water via fluorescence - that would be very easy to do with this tool.   Also, you can distinguish between fluorescence due to organic (photosynthetic) sources like algae, and that due to oil also because the photosynthetic source's fluorescence will change under high light conditions (as long as it's alive).  This would be a great first test to try out.

It might be possible also to integrate the device with a spectrophotometer so or integrate it with a light source which outputs a variety of narrow wavelengths like a monochrometer.  We have some ideas on how to make a monochrometer pretty cheap as LEDs are getting smaller and smaller (we're using Luxeon Zs, which are very bright but <1mm square and ~2 bucks each).  That way you only need a single detector.  Even simpler you can do what we do now - can select the LED types of interest for your measurements - currently we have 520, 850, 940, and 610nm in place but you could put anything in there if you want.

It's hard to know which way is the right way without understanding the methods of interest.  

**So, my question to the community is:

What are the most useful methods which use absorbance, transmittance or fluorescence for detecting environmental contaminants?  I'd like to try some of these out (or have someone else interested try them out) on the MultspeQ device but don't quite know where to start.  **

We are about to start a beta test, so if there's anyone interested in getting a unit and trying out some different methods shoot me an email.  

Also, I'll be posting some data here pretty soon from the device so you see a little more clearly what I'm talking about.

Greg