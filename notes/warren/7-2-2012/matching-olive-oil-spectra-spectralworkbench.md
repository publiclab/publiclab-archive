---
title: "Matching olive oil spectra in SpectralWorkbench"

tagnames: 'spectrometer, spectrum-matching, spectralworkbench, matching, olive-oil'
author: warren
path: /notes/warren/7-2-2012/matching-olive-oil-spectra-spectralworkbench.md
nid: 2695
uid: 1

cids: 1074,1532,1612

---

![](https://publiclab.org/sites/default/files/match.jpg)

# Matching olive oil spectra in SpectralWorkbench

by [warren](../../../profile/warren) | July 02, 2012 21:21

July 02, 2012 21:21 | Tags: [spectrometer](../tag/spectrometer), [spectrum-matching](../tag/spectrum-matching), [spectralworkbench](../tag/spectralworkbench), [matching](../tag/matching), [olive-oil](../tag/olive-oil)

----

Very exciting, though definitely experimental -- while working last week at Mediamatic in Amsterdam, I managed to implement basic spectral matching, which finds the closest spectrum to any new spectral reading you take. Here's a video showing it correctly distinguishing between 2 types of olive oil:

<iframe width="480" height="360" src="https://www.youtube.com/embed/03VdZU9FeAQ" frameborder="0" allowfullscreen></iframe>

Sadly, the just-released Chrome 20 breaks my code, so it'll be a day or two before I get this running again there. But you can definitely do this with Opera or Opera Mobile for Android.

**Update:** Chrome 21, just out last week, is much more reliable, and I updated the code so now it works very well! It also has a "waterfall" display which makes measurements much easier.