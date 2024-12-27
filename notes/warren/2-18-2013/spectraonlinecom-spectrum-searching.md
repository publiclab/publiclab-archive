---
title: "SpectraOnline.com spectrum searching"

tagnames: 'spectrometer, spectralworkbench, matching, search, spectraonline.com'
author: warren
path: /notes/warren/2-18-2013/spectraonlinecom-spectrum-searching.md
nid: 6043
uid: 1

---

![](https://publiclab.org/sites/default/files/spectraonline.png)

# SpectraOnline.com spectrum searching

by [warren](../../../profile/warren) | February 18, 2013 13:36

February 18, 2013 13:36 | Tags: [spectrometer](../tag/spectrometer), [spectralworkbench](../tag/spectralworkbench), [matching](../tag/matching), [search](../tag/search), [spectraonline.com](../tag/spectraonline.com)

----

I was just contacted by a guy from spectraonline.com, which has been absorbed into ThermoFisher -- he came across our work and was duly impressed -- and tried downloading some of our data to run in their old technology demo site, http://spectraonline.com. 

With a small modification, our CSV exports will upload to their site and run in a search against a collection of 8000 spectra, of combined publicly available sources. I modified our CSV export to "just work" on their site (preserving the more compete CSV export as "CSV (raw)") and now you can upload your spectra directly to try searching. Woohoo! Above is [Chris F's neon spectrum](https://spectralworkbench.org/analyze/spectrum/2740) in their uploader.

A few things:

* first click on "By Spectrum Matching" at the bottom of the first section of links
* choose "UV-VIS" -- that range worked best for me
* the site hiccups from time to time -- it was written a while ago
* I imagine it is matching absorption, so we'll need to begin developing a consistent way to measure absorption and generate CSVs before we can expect to get a good match

Post if you get anywhere with this!