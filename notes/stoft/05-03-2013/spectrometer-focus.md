---
title: "Spectrometer focus"

tagnames: 'spectrometer, desktop-spectrometry-kit, slit, improvements, focus, first-time-poster'
author: stoft
path: /notes/stoft/05-03-2013/spectrometer-focus.md
nid: 7226
uid: 54025

cids: 4612,4614,13444,13445,13519,13520,13521,13522,13524,13525,13526,13527,13528,13529,13530,13531

---

![](https://publiclab.org/public/system/images/photos/000/000/166/original/ProtoBench.jpg)

# Spectrometer focus

by [stoft](../../../profile/stoft) | May 03, 2013 20:02

May 03, 2013 20:02 | Tags: [spectrometer](../tag/spectrometer), [desktop-spectrometry-kit](../tag/desktop-spectrometry-kit), [slit](../tag/slit), [improvements](../tag/improvements), [focus](../tag/focus), [first-time-poster](../tag/first-time-poster)

----

An area of concern for me in rebuilding my spectrometer has been the camera focus. The spectrometer's slit provides pseudo-collimated light so the camera lens should be focused on the slit for best resolution. This is more difficult than it might appear. So, I'm posting two sets of observations:

Setup:
- My prototype "bench" setup where I can move components mounted on magnets - movable but stable (what's not shown in the photo is the black cloth cover)
- A CFL (EcoSmart 5000k 27W at 5-ft)
- A very narrow slit (exacto-blade prototype)
- The camera positioned immediately next to the dvd grating
- The default Syba camera viewer software with resolution set to 1280x1024

1) First, I used the default technique of the kit to adjust the Syba lens for "9 inches" using room light and small-font text on a card -- the DOF is high so this is very hard to do with any accuracy, so it was just my best guess. Then, I adjusted the slit distance while observing the spectrum. The first attached photo shows that the optimal slit distance for this specific default focus is actually close to 4-inches. This is about double the distance provided by the kit.

![NarrowSlitDistanceSpectra-1.jpg](https://i.publiclab.org/system/images/photos/000/000/169/medium/NarrowSlitDistanceSpectra-1.jpg)

[Caveat: I did not take the additional step to re-adjust the intensity for each distance to make them all uniform amplitude. This likely is the reason for the general intensity change over this extreme distance range. I expect to re-test and compensate for this. However I still believe there is enough evidence to support obtaining a good focus.]

2) Then, I did a series of lens adjustments based on using a mechanical reference -- the point where the lens "bottoms out" in it's travel. I plotted the adjustment position (# turns) vs distance to the slit where the spectra shows the best resolution. The second attached image shows a simple data plot. Note that a) there are downsides to both ends of the adjustment range and b) the mid-point of the more linear adjustment region turns out to be a 6-inch focus. A very narrow slit helps considerably with saturation and appears to provide the best resolution at 6-inches from the dvd grating.



![FocusAdjust-1.jpg](https://i.publiclab.org/system/images/photos/000/000/172/medium/FocusAdjust-1.jpg)



My own conclusion is that since manufacturing methods for mass produced parts, like the optics for the webcam, are very repeatable, adjusting the lens focus by noting the # turns (or partial turn in this case) from a mechanical stop is a much more precise means for setting focus. As this experiment suggests, setting a proper focus at an optimal distance for the slit of abut 6-inches can be rewarded with better spectral resolution.

With a bit more work, this adjustment can likely be refined and improved but hopefully this is a good first step.

Dave


