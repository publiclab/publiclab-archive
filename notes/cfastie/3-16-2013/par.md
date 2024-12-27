---
title: "PAR"

tagnames: 'spectrometer, vermont, ebert, absorption, par, photosynthesis, chlorophyll, pigments'
author: cfastie
path: /notes/cfastie/3-16-2013/par.md
nid: 6372
uid: 554
cids: 1,3814,3820,3821,3822,3823,3825,3832,3834,3837,3840,3842,3986
---

![](https://publiclab.org/sites/default/files/PAR-201334430.jpg)

# PAR

by [cfastie](/profile/cfastie) | March 17, 2013 03:23

March 17, 2013 03:23 | Tags: [spectrometer](/tag/spectrometer), [vermont](/tag/vermont), [ebert](/tag/ebert), [absorption](/tag/absorption), [par](/tag/par), [photosynthesis](/tag/photosynthesis), [chlorophyll](/tag/chlorophyll), [pigments](/tag/pigments)

----

Chlorophyll and other pigments in green plants absorb blue and red light to power photosynthesis, and reflect away green light.  The combination of colors used by plants is referred to as photosynthetically active radiation (PAR). We don't really know why the only pigments plants have don't use much green light, but it might be related to the presence in Earth's early oceans of microbes that used green light as an energy source and had it monopolized.  The earliest green plants might have been [better able to compete with ancient purple Archaea](http://www.livescience.com/1398-early-earth-purple-study-suggests.html) by exploiting the unused blue and red wavelengths.  Some surviving Archaea still use green light today, but the photosynthetic pathways supported by the pigments in green plants are much more efficient.

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/6966937848/" title="PAR action spectrum by Chris Fastie, on Flickr"><img src="https://farm8.staticflickr.com/7273/6966937848_ff06a680ed_n.jpg" width="240" height="320" alt="PAR action spectrum">
</a><p></p>The absorption of different wavelengths of visible light by photosynthetic pigments and the resulting spectral response of photosynthetic rate.  Leaves appear green because the pigments do not absorb green wavelengths and reflect them for us to see. Modified from: en.wikipedia.org/wiki/File:Par_action_spectrum.gif</div>

We do have a good understanding of which wavelengths of light are used by plant pigments today. A standard high school or college lab exercise is to extract the pigments from plant leaves and separate them using chromatography or describe them using spectroscopy.  The extraction is typically done with nasty solvents, and one lab manual calls for a mixture of petroleum ether, cyclohexane, ethyl acetate, acetone, and methanol. I'm sure there is a reason to use those solvents, but this afternoon I put a handful of spinach leaves in the blender with some cold water and made a lovely green slurry.  I filtered it through a gold tea strainer, diluted it, and put a jar of the emerald liquid in front of [Ebert's](http://publiclaboratory.org/notes/cfastie/2-19-2013/ebert) entrance slit. I also captured a spectrum of an identical jar of water.

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/8563001299/" title="Absorption of spinach extract by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8387/8563001299_f6237976b3.jpg" width="500" height="310" alt="Absorption of spinach extract"></a><p></p>The relative absorption of visible wavelengths by an extract of spinach leaves. These values are the difference between the transmission through water and the transmission through a water extract of spinach leaves, both captured by Ebert.</div>

I uploaded both images to Spectral Workbench and then downloaded the raw data and put it in Excel.  I used the same data procedure that I used on the maple syrup results: for each wavelength value I used the intensity value for whichever color channel was highest, then I smoothed the series with a 10 value running mean. To represent how much light of each wavelength the green spinach liquid was absorbing, I subtracted the spinach transmission intensity values from the clear water transmission values.   

The result looks a little bit like the standard absorption curve for plant pigments. It certainly depicts less absorption by green light, and more by both blue and red.  I am not sure why the absorption at the red end of the spectrum is not as great as in the standard curve. Maybe there was not as much chlorophyll a as chlorophyll b.  Or maybe the white balance of the digital image is to blame. Or maybe the artifacts associated with combining the three color channels are responsible. Or maybe I need more toxic solvents to extract the pigments.