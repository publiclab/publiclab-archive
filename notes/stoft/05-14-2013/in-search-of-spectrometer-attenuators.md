---
nid: 7526
title: In Search of Spectrometer Attenuators
path: public/static/notes/stoft/05-14-2013/in-search-of-spectrometer-attenuators.md
uid: 54025
tagnames: spectrometer,intensity-calibration,desktop-spectrometry-kit,slit,improvements,focus,response:7226,response:7507,hdr,attenuation
---

# In Search of Spectrometer Attenuators

As referenced in a previous Note: http://publiclab.org/notes/stoft/05-14-2013/in-search-of-spectrometer-measurement-and-calibration , here are some observations on adding external attenuation for the spectrometer's incoming light. As most have probably observed, it is difficult to adjust the light level to provide a strong signal while avoiding RGB saturation.

These observations all show the relative signal change when adding attenuation. A "reference level" is first established and then attenuation is added while looking for decreasing signal strength.

Neutral Density DSLR Filter
An adjustable neutral density filter was placed a few inches in front of the spectrometer's input slit and the relative spectral attenuation curve was captured for each of a series of 5 arbitrary attenuation filter settings.

DSLR ND Filter Relative Attenuation:
![ND_5-Steps.jpg](https://i.publiclab.org/system/images/photos/000/000/266/medium/ND_5-Steps.jpg)

Notice that simply adding the ND filter produces a transmission response which is clearly quite variable with respect to wavelength. This is not one of the really expensive ND camera filters so non-uniformity is expected. However, note that the curves all have similar shapes. It seems that ND filters have a flatter response from 400-600nm but then peaking at ~700nm. The response plotted here is similar. The obvious question is how the filter response would be calibrated.

Transparency Film Attenuators
Purchasing an expensive ND filter is probably unwarranted for a relatively inexpensive device which is still in development. As a cheap alternative, grey-shaded rectangular areas of InkJet transparency film were printed. The image pattern was created at 600dpi and printed in random-dithering mode for uniformity and the "pattern area colors" were all shades of grey. 8-10 patterns can easily be printed per sheet.

The printed transparency attenuators have the advantages that they are cheap to make and can be "stacked" in combinations and the attenuation values repeated "by the numbers". The downside is again, calibration. At a single wavelength, like ~600nm, a preliminary set of transparency filters appears to show a linear attenuation. In this plot, grey values were referenced to 128 and attenuators of 8, 16, 32, 64 and 96 were added to get variable attenuation settings.

Printed-Transparency Relative Attenuation:
![TransparencyGreySteps_128-224.jpg](https://i.publiclab.org/system/images/photos/000/000/268/medium/TransparencyGreySteps_128-224.jpg)

Other Observations:
1) Neither inexpensive (~$40) DSLR ND filters nor cheap transparency filters have a flat transmission response vs wavelength.
2) For use with this webcam spectrometer, the DSLR ND filter has no clear measurement advantage.
3) Attenuation filters do make setting light levels (to maximize signal and avoid RGB saturation) much easier.
4) No single attenuation is sufficient -- a range of attenuation, to mix-n-match, helps.
5) Amplitude calibration remains a difficulty; even with attenuators.

Dynamic Range and SNR remain a significant issue for the spectrometer but Printed Transparency attenuators might provide cheap means for making measurements easier. However, these are only preliminary results and only represent a starting point.

Cheers,

Dave

Added: 5/15/13
A set of attenuation curves using "known" values could provide some view to system linearity with respect to wavelength. So, a set of Transparency Attenuators were printed with a range of value (16,32,64,128,192) representing specific grey-scale density. If the system is linear, then plots of transparency grey-scale vs measured signal amplitude change should show straight lines even if the sensitivity is wavelength dependent.

So, the signal level change was obtained and the data re-plotted. Notice that this plot looks very similar to the ones above and shows the change in sensitivity over wavelength.

![TransparencyLinearityTest-1.jpg](https://i.publiclab.org/system/images/photos/000/000/283/medium/TransparencyLinearityTest-1.jpg)

Now, for every 50nm over the 300 to 800nm range, the measured signal attenuation is plotted against the transparency attenuator value.

![TransparencyLinearityTest-2.jpg](https://i.publiclab.org/system/images/photos/000/000/284/medium/TransparencyLinearityTest-2.jpg)

Note that there is reasonably consistency in an approximately linear response of the system -- enough so, that I suspect that any non-linearity is not the imager chip but results from a variety of other factors. Transparency film is certainly not equally transparent at all wavelengths, but being extremely thin, those effects are minimized.

Suggestions for printing transparency attenuators:
1 - Use 600 dpi for the image
2 - Use the finest print resolution and use the dithering print setting
3 - Grey levels below 8-16 are of little use
4 - Use increments of 16 or above
5 - Grey levels above 192 may not print uniformly - it would be better to double-up

Dave
 





