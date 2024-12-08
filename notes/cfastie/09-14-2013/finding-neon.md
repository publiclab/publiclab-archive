---
title: Finding Neon
tagnames: spectrometer, spectralworkbench, ebert, gsoc, gsoc-2013
author: cfastie
path: /notes/cfastie/09-14-2013/finding-neon.md
nid: 9326
uid: 554

---

# Finding Neon

by [cfastie](../profile/cfastie) September 14, 2013 00:38

September 14, 2013 00:38 | Tags: [spectrometer](../tag/spectrometer), [spectralworkbench](../tag/spectralworkbench), [ebert](../tag/ebert), [gsoc](../tag/gsoc), [gsoc-2013](../tag/gsoc-2013)

*Image above: The spectra of the red tubes in these six neon signs are at SpectralWorkbench. You can now search for similar spectra, so these make a good test.*  

Sreyanth Chary Mora, one of Public Lab's Google Summer of Code students, is finishing work on a new feature at [SpectralWorkbench](https://spectralworkbench.org/). You can now click "Find Similar" on the analyze page and Sreyanth's code will search the entire database for other spectra that are similar and therefore might be from the same material. I tried this out with a straightforward test.

[![6neonSignSet_Bud.jpg](https://i.publiclab.org/system/images/photos/000/001/556/large/6neonSignSet_Bud.jpg)](https://i.publiclab.org/system/images/photos/000/001/556/original/6neonSignSet_Bud.jpg)  
*A set at SpectralWorkbench with the six neon spectra in the main image. Two of the included spectra (Bobcat and Budweiser [which is shown in lower panel]) were dimmer and did not include all the peaks.*  

There are [six spectra of neon signs](http://publiclab.org/notes/cfastie/2-23-2013/neon) at SpectralWorkbench, all taken with the same [spectrometer](http://publiclab.org/notes/cfastie/2-19-2013/ebert). I just recalibrated these spectra with Jeff's handy macro on the spectral peaks at 616.4 nm and 659.9 nm so they are all lined up pretty well. When I click "Find Similar" from the analyze page of the Echo red tube, the code returns four of the five other neon sign spectra. The missing one is one of the two that were dimmer and did not have all the major peaks. It also returned six other spectra that were not very similar except that they had the highest values in the 580 to 670 nm region where the neon peaks are. There is a "fit" parameter that can be entered to improve the search results, and this was set to 35 to get these results. The default setting for this search was 30 which was not as successful. 

[![Echo_ne_4match35a.jpg](https://i.publiclab.org/system/images/photos/000/001/557/large/Echo_ne_4match35a.jpg)](https://i.publiclab.org/system/images/photos/000/001/557/original/Echo_ne_4match35a.jpg)  
*A search for spectra similar to the Echo red tube returned four of the five neon spectra taken by Ebert, and some false positives.*  

Searching for spectra similar to the Shindaiwa and Craft spectra returned only three of the five others, not returning the two dimmer spectra, and returning four false positives. The fit parameter had to be set to either 35 or 40 to get these results.

[![Shin_ne_3match40a.jpg](https://i.publiclab.org/system/images/photos/000/001/558/large/Shin_ne_3match40a.jpg)](https://i.publiclab.org/system/images/photos/000/001/558/original/Shin_ne_3match40a.jpg)  
*Results for searching for spectra similar to the Shindaiwa sign.*  

[![Craft_ne_3match35a.jpg](https://i.publiclab.org/system/images/photos/000/001/559/large/Craft_ne_3match35a.jpg)](https://i.publiclab.org/system/images/photos/000/001/559/original/Craft_ne_3match35a.jpg)  
*Results for searching for spectra similar to the Craft sign.*  

Searches for matches for either of the dimmer spectra (Bud and Bobcat) return each other, but not the brighter neon spectra, and also return some false positives.  So if somebody takes a spectrum of a red discharge tube and wants to know whether it is neon or not, they might be able to find one or more of these neon spectra. They will probably also find lots of other spectra that are not neon. They would have to try different fit parameters and sort through the results to know what they had. If they don't have a good idea what the source of their original spectrum is, it might be hard to decide which of the returned spectra were a valid match. It might be good to know if some of the returned matches are really good matches, so you can check those out first.

This a really cool addition to Spectral Workbench. Thanks to Sreyanth for all the hard work.

A [set with the six neon sign spectra](https://spectralworkbench.org/sets/show/574) is at Spectral Workbench.






