---
title: "Noise"

tagnames: 'spectrometer, vermont, analysis, ebert, absorption, sky, fraunhofer'
author: cfastie
path: /notes/cfastie/3-4-2013/noise.md
nid: 6197
uid: 554

---

![](https://publiclab.org/sites/default/files/Noise.PNG)

# Noise

by [cfastie](../../../profile/cfastie) | March 05, 2013 04:32

March 05, 2013 04:32 | Tags: [spectrometer](../tag/spectrometer), [vermont](../tag/vermont), [analysis](../tag/analysis), [ebert](../tag/ebert), [absorption](../tag/absorption), [sky](../tag/sky), [fraunhofer](../tag/fraunhofer)

----

<em>Image above: (Top) Detail of a spectrogram of the sky and a vertically blurred version of it. (Bottom) Intensity curves for the blue and green channels of the original (colored) and blurred (black) images. Vertical dashed lines identify Fraunhofer absorption lines.</em>

Identifying absorption lines in a continuous spectrum requires separating signal from noise.  It was possible to see six fairly convincing [Fraunhofer lines in a spectrum of the sky]( http://publiclaboratory.org/notes/cfastie/3-2-2013/fraunhofer), and there might be more recorded in the image, but some of them are rather subtle.  My reaction was to try to capture a better spectrum next time, but Jeff Warren’s reaction was to try to extract more information from the spectrum we already had. Jeff suggested vertical averaging of the pixel values in Photoshop. 

So I applied a motion blur filter to the image which evened out the color in vertical columns of pixels.  The image above is a detail of that same spectrogram with the original image above and the blurred image below. Below the images are the graphs of the two color channels that contribute to this part of the spectrum. The blue and green lines are the intensity curves that Spectral Workbench extracted from the original image, and the black lines are the curves extracted from the blurred image.  

The curves from the blurred image are smoother -- they have less noise. The dips in the curve at the locations of the Fraunhofer absorption lines are about the same depth. So the effect is weak, but this should help distinguish the signal (Fraunhofer dips) from the noise (higher frequency variation in intensity).

Ideally, a new line could be mathematically fit to the smoothed curves and the deviations of the curves from the new line could be mathematically tested to see if any deviations were unusual enough to be considered signals. This way absorption lines (or emission peaks) could be identified objectively. 

The blurring in Photoshop was done by applying a motion blur filter: Filters/Blur/Motion blur, with angle =90° and distance=300 pixels. Jeff might try to implement a similar vertical averaging feature in Spectral Workbench. The two versions of the spectrograms are at Spectral Workbench: [original](https://spectralworkbench.org/analyze/spectrum/4514) and [blurred](https://spectralworkbench.org/analyze/spectrum/4515).