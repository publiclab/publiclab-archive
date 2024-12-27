---
title: "Photoreactive purple dye: can it block wavelengths longer than green?"

tagnames: 'question:spectrometer, question:spectrometry'
author: axman
path: /notes/axman/11-20-2016/photoreactive-purple-dye-can-it-block-wavelengths-longer-than-green.md
nid: 13713
uid: 497547

---

![](https://publiclab.org/public/system/images/photos/000/018/866/original/spectra.png)

# Photoreactive purple dye: can it block wavelengths longer than green?

by [axman](../../../profile/axman) | November 20, 2016 06:11

November 20, 2016 06:11 | Tags: [question:spectrometer](../tag/question:spectrometer), [question:spectrometry](../tag/question:spectrometry)

----

In attempting to calibrate my Desktop Spectrometer, I was challenged:  light with a longer wavelength than green was not visible in the results.

I had followed instructions here:
https://publiclab.org/notes/abdul/10-13-2016/desktop-spectrometry-starter-kit-3-0-instructions

The section on preparting the DVD fragment indicated that removing the purple dye was optional.  I tried using the technique described here:
https://publiclab.org/notes/MrBumper/01-11-2015/preparing-a-dvd-r-to-act-as-a-diffraction-grating

Warm soapy water and gentle swishing and rubbing with fingers did not remove the dye, so I continued on to calibration step.  I thought it was ok, since the step is optional.

Attempting to calibrate, my captured spectra did not show any light to the right of green, which made it difficult to get a good fit.  I tried 2 different CFL bulbs, an old flourescent tube lamp, and a flashlight.  Same results, no light visible beyond green.  Images from those calibration attempts can be seen in spectralworkbench.org.

I then verified that the webcam could actually output red.  I installed guvcview, removed the diffraction grating, and observed captured video.  Red was visible, colors appeared normal.

I then flipped the DVD fragment over and tried again.  Spectra was now showing no light beyond cyan (wavelengths longer than green were not visible.)  I rotated the DVD fragment 180 degrees, same results.

I wondered if the purple dye was "absorbing" the light with longer wavelength than green - sorry if absorbing is incorrect term.

I then used isopropyl alcohol on a tissue, and wiped the DVD fragment clean of purple dye, and tried again.  Now, the full color spectrum appears.  Problem solved.

At the time, I was not aware of the detailed work done by MrBumper here:
https://publiclab.org/notes/MrBumper/02-04-2015/does-leaving-the-dye-on-a-dvd-r-grating-make-any-difference

MrBumper's analysis of the differences (with dye and without dye) seem to indicate that the dye can negatively affect the DVD diffraction grating performance.  Question seems to be outstanding as to how much difference one should expect 'with' and 'without' dye.  The discussion of his analysis in the comments helped me understand a bit more about what is going on. 

What I do not understand is, why did I not see *any* colors beyond green until the dye was removed?  If I read MrBumper's work correctly, I should have seen at least some red, although at reduced intensity.  Perhaps I'm not reading correctly..

In any case, thanks to MrBumper and all those who contribute.

In light of my experience, I would propose that removing the purple dye should be considered compulsory, if one wants to get a decent calibration.  I have not presented hard evidence to support this proposal here, but could, if such work was deemed worthwhile.

