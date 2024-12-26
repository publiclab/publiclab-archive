---
title: "Light Amber"\ntagnames: 'spectrometer, vermont, spectralworkbench, ebert, absorption, syrup, activity:spectrometry, activity:science-fair'
author: cfastie
path: /notes/cfastie/3-13-2013/light-amber.md
nid: 6318
uid: 554

---

![](https://publiclab.org/sites/default/files/Syrup-201334107-2.jpg)

# Light Amber

by [cfastie](../profile/cfastie) | March 13, 2013 19:39

March 13, 2013 19:39 | Tags: [spectrometer](../tag/spectrometer), [vermont](../tag/vermont), [spectralworkbench](../tag/spectralworkbench), [ebert](../tag/ebert), [absorption](../tag/absorption), [syrup](../tag/syrup), [activity:spectrometry](../tag/activity:spectrometry), [activity:science-fair](../tag/activity:science-fair)

----

Maple syrup grades are determined by the color of the syrup. The lightest colors are less common because they generally require sap from the beginning of the sugaring season which often has a higher sugar content.  The color is caused by heat, especially during the later stages of evaporation when sugars are concentrated and the boiling point of the syrup approaches 220° F.  Sap with a higher sugar content can be made into syrup with less heating, and therefore can produce lighter syrup. Efficient processing can also reduce heating time and produce lighter syrup.

<iframe width="510" height="383" src="https://www.youtube.com/embed/W_egOISlZdg?rel=0" frameborder="0" allowfullscreen></iframe>

<div class="caption center">
<a href="https://www.flickr.com/photos/chrisfastie/8554515863/" title="Four Grades by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8248/8554515863_8bf5d7bf53.jpg" width="500" height="312" alt="Four Grades"></a><p></p>
Intensity graphs for four grades of Vermont maple syrup. The darker grades transmit little or no blue light.</div>

The chemical reactions that color syrup cause more absorption of the blue end of the spectrum.  The more syrup is heated and colored, the more blue light it absorbs.  So as syrup gets darker, a greater proportion of red light is transmitted causing dark syrup to have a reddish brown color. The darkest grades transmit little or no violet or blue light (400-500 nm). 

<div class="caption center">
<a href="https://www.flickr.com/photos/chrisfastie/8555626392/" title="Four stages by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8242/8555626392_0175285bc4.jpg" width="500" height="277" alt="Four stages"></a><p></p>
Intensity graphs for four stages in evaporating maple sap into maple syrup. 97% of the water in sap is lost before it becomes syrup.
</div>

As sap is boiled, the color change is slow until the later stages of the process. Boiling away 85% of the water has a minor effect on color, and almost no effect on transmittance of red light.  Evaporating the next 12% of water causes most of the color change.

<strong>Technical notes:</strong>
<em>Averages.</em> To produce a graph of the intensity of each wavelength, Spectral Workbench takes the average of the intensities of each of the three color channels (red, green, blue) recorded by the camera.  These averages incorporate many zero values, and the way the color channels overlap produces some artifacts in the graphs.  The graphs displayed here are not averages, but are the value of the color channel which was highest at each wavelength value. This also produces artifacts, but they seem a little easier to interpret for this type of transmission spectra.

<em>Smoothing.</em> Spectral Workbench presents a graph with an intensity value for each pixel in a transect across an image of a diffraction pattern.  The images I have been uploading have a width of about 1400 pixels in the visible light region of 400 to 700 nm.  That allows more than four values for each nm of wavelength, far greater than the resolution of the spectrometer.  The graphs presented here are smoothed with a running average that combines 10 values into one. This better reflects the resolution of the spectrometer which might approach 2-3 nm.

<em>White balance.</em>  By mistake, I captured the spectra for the two graphs presented here with different camera settings for white balance.  The spectra in the graph of different syrup grades were taken with a fluorescent white balance which suppresses the blue end of the spectrum. The spectra in the graph of stages of boiling sap were taken with a tungsten white balance which suppresses the red end of the spectrum.  So the lopsided shape of those graphs should not be given any meaning related to maple syrup.  The relative relationships within each graph still have validity. This was a good lesson that I need to pay more attention to the camera which is creating the spectral data, something it was not intended to do. It also makes me wonder about spectra captured by cameras using automatic white balance adjustment. 

Two sets at Spectral Workbench include all of the spectra presented here: <a href="https://spectralworkbench.org/sets/show/205">https://spectralworkbench.org/sets/show/205</a> and <a href="https://spectralworkbench.org/sets/show/207">https://spectralworkbench.org/sets/show/207</a>

Below is a <a href="http://www.sciencedirect.com/science/article/pii/S1043452608006049">figure from an article in a food journal</a> of the actual shape of transmission spectra of different grades of maple syrup.

<div class="caption center">
<a href="https://www.flickr.com/photos/chrisfastie/8556087000/" title="Maple syrup spectra by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8225/8556087000_ac80cf78a2.jpg" width="500" height="296" alt="Maple syrup spectra"></a><p></p>
Transmission spectra of maple syrup grades. Color grading is based on transmission at 560 nm.
</div>