---
title: "Spectrometry discussion across the web"

tagnames: 'spectrometer'
author: warren
path: /notes/warren/8-27-2012/spectrometry-discussion-across-web.md
nid: 3501
uid: 1
cids: 1320,1598,1613,1676,1716,1718,1722,1723,4008,4010,4013
---

# Spectrometry discussion across the web

by [warren](/profile/warren) | August 27, 2012 21:11

August 27, 2012 21:11 | Tags: [spectrometer](/tag/spectrometer)

----

I wanted to jot down these URLs for a couple forums where there's been some really good thinking-out-loud on DIY spectrometry and the challenges we face. One is from a while back, on the OpenSpectrometer.com forum:

> http://www.openspectrometer.com/forum/index.php?p=/discussion/1/how-would-you-use-use-an-openspectrometers

###Hacker News: Uses for spectrometry###

The other is on Hacker News, in response to the [Kickstarter](http://kck.st/PI9XOq) we launched today:

> http://hackerne.ws/item?id=4439127

Hacker News discussion has been generating some great ideas:

> [tomkinstinch](http://news.ycombinator.com/user?id=tomkinstinch): If you can transmit light through a sample curvette to the spectrometer, you could use it to measure optical density (i.e. the amount of stuff in the way that blocks or scatters light). You could use that to measure the concentration of particulate in engine oil, or the strength of coffee.
> If you can detect at 405nm, you could measure blood coagulation time/extent (separate blood cells from plasma, measure attenuation at 405nm though plasma).
> You could cludge together a pulse oximeter if you can detect at 660nm and NIR (905, 910, 940nm) and have light sources to emit at these wavelengths. Absorbtion at these wavelengths changes as hemoglobin picks up and loses oxygen. The ratio at 660nm and one of the other wavelengths could be used to show blood oxygenation.
If you were into photography or cinema, you could measure the emission spectrum of a light source and fit a blackbody curve to it to find its color temperature--useful for white balancing.
If you wanted to match paint colors, you could use a spectrometer to do (along with some additional calculation and knowledge about your pigments).
> If you perform a flame test, you could use a spectrometer to learn about elemental composition.

###Hackaday: Radiometric calibration###

Hackaday has also been generating [some great ideas](http://hackaday.com/2012/08/27/turning-a-webcam-into-a-spectrometer). We've been discussing and working on many of these issues, but some are new and it's just great to hear other folks picking away at these challenges! Take a look:

> **AE5PH:** While it is important to have a spectral library, it is also necessary to calibrate the spectrometer. Calibration comes in two forms; spectral calibration and radiometric calibration.
> Spectral calibration is required in order to know that each pixel represents a particular range of light wavelengths. This is usually performed by exposing the spectrometer to a light source with absorption and emission bands at known wavelengths, such as a neon gas lamp. Where these bands of absorption and emission fall on the detectors tells you what wavelengths each detector represents.
> Radiometric calibration is required in order to know the actual intensity of light falling on each detector according to the number value (counts) returned. Three factors that affect this are the spectral response of the detectors, the linearity of the detector outputs, and the spectral characteristics of the light source.
> The spectral response of the detectors indicates how they respond to light at different wavelengths. Given that most USB webcams use inexpensive silicon detectors, the response will not be the same for all wavelengths in the visible and infrared wavelengths. The peak will be around 600 nanometers and fall off with shorter and longer wavelengths. The same intensity of light at different wavelengths will yield different number values (counts) from the same detector.
> The linearity of the detector response needs to be known in order establish a relationship between the intensity of the light and the number of counts provided by the detectors. A doubling of the light intensity should result in a doubling of the counts value.
> The characteristics of the light source need to be known because few (if any) light sources have uniform intensity over all wavelengths of light. A light source, such as an incandescent or tungsten-halogen lamp, have characteristic black body spectral signatures, which are vastly different from fluorescent lamps. The spectral characteristics of the light source will weight the spectral characteristics of the reflectance spectral signature of the target material. This weighting will need to be compensated in order to retrieve the actual spectral signature of the target material.

###Blue-ray discs###

Finally, I found this interesting discussion from a while ago about whether Blue-ray disks would make better DIY spectrometers:

http://astro.u-strasbg.fr/~koppen/spectro/bluraye.html

That link also mentions the moire effect from the spectrum aliasing with the pixels of the webcam. I wonder if that's related to what's happening in the following spectrum, where there is a wobble mixed in with the spectrum which gets longer towards the infrared end of the spectrum:

<a href="https://www.flickr.com/photos/jeffreywarren/7876264252/" title="Spectral Workbench new interface by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8434/7876264252_9004126f5b.jpg" width="500" height="304" alt="Spectral Workbench new interface"></a>