---
title: "Trying to detect emission lines in flare spectra from Chalmette"

tagnames: 'gulf-coast, spectrometer, louisiana, analysis, emission-spectroscopy, spectral-analysis, spectral-workbench, flare, smoothing, chalmette, response:8946, response:8944, location:blurred, lat:29, lon:-89, place:chalmette-la'
author: warren
path: /notes/warren/10-09-2013/trying-to-detect-emission-lines-in-flare-spectra-from-chalmette.md
nid: 9430
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/001/834/original/Screen_Shot_2013-10-09_at_1.57.17_PM.png)

# Trying to detect emission lines in flare spectra from Chalmette

by [warren](../../../profile/warren) | October 09, 2013 18:15

October 09, 2013 18:15 | Tags: [gulf-coast](../tag/gulf-coast), [spectrometer](../tag/spectrometer), [louisiana](../tag/louisiana), [analysis](../tag/analysis), [emission-spectroscopy](../tag/emission-spectroscopy), [spectral-analysis](../tag/spectral-analysis), [spectral-workbench](../tag/spectral-workbench), [flare](../tag/flare), [smoothing](../tag/smoothing), [chalmette](../tag/chalmette), [response:8946](../tag/response:8946), [response:8944](../tag/response:8944), [location:blurred](../tag/location:blurred), [lat:29](../tag/lat:29), [lon:-89](../tag/lon:-89), [place:chalmette-la](../tag/place:chalmette-la)

----

[![Screen_Shot_2013-10-09_at_1.57.17_PM.png](https://i.publiclab.org/system/images/photos/000/001/840/original/Screen_Shot_2013-10-09_at_1.57.17_PM.png)](https://i.publiclab.org/system/images/photos/000/001/840/original/Screen_Shot_2013-10-09_at_1.57.17_PM.png)

###What I want to do

Following up on the [various attempts to monitor gas refinery flares in Chalmette, LA](/tag/chalmette), I wanted to try smoothing the data (by time-averaging it) to see if we could pick out some emission peaks. 

###My attempt and results

I started with [a spectrum from July 27th by Scott Eustis](https://spectralworkbench.org/analyze/spectrum/10010) from Chalmette, and used the "smooth_nosave" macro (pictured below) to average several seconds of data to smooth out the noise. This wouldn't have worked if the device had been moved at all during that time, since Scott's spectrometer has no slit (so it can't hold a calibration). 

[![Screen_Shot_2013-10-09_at_2.00.28_PM.png](https://i.publiclab.org/system/images/photos/000/001/835/medium/Screen_Shot_2013-10-09_at_2.00.28_PM.png)](https://i.publiclab.org/system/images/photos/000/001/835/original/Screen_Shot_2013-10-09_at_2.00.28_PM.png)

_Click "Run" to run the macro_

[![Screen_Shot_2013-10-09_at_2.01.06_PM.png](https://i.publiclab.org/system/images/photos/000/001/836/medium/Screen_Shot_2013-10-09_at_2.01.06_PM.png)](https://i.publiclab.org/system/images/photos/000/001/836/original/Screen_Shot_2013-10-09_at_2.01.06_PM.png)

I've highlighted the tiny peak in this image, which is marked at 838 nm, but since I believe Scott's device is miscalibrated, that number may not be accurate. If you look at the lead image up top, you can see that the slightly brighter purple line is visible even without graphing. 

[![Screen_Shot_2013-10-09_at_2.04.25_PM.png](https://i.publiclab.org/system/images/photos/000/001/837/medium/Screen_Shot_2013-10-09_at_2.04.25_PM.png)](https://i.publiclab.org/system/images/photos/000/001/837/original/Screen_Shot_2013-10-09_at_2.04.25_PM.png)

###Attempt to replicate

I repeated this with [another spectrum from the same night](https://spectralworkbench.org/analyze/spectrum/10004) and got the same little spike -- not very visible but still there -- and another around 734nm (again, maybe not a good number due to miscalibration):

[![Screen_Shot_2013-10-09_at_2.10.04_PM.png](https://i.publiclab.org/system/images/photos/000/001/838/medium/Screen_Shot_2013-10-09_at_2.10.04_PM.png)](https://i.publiclab.org/system/images/photos/000/001/838/original/Screen_Shot_2013-10-09_at_2.10.04_PM.png)

I then repeated the smoothing technique with [one of the spectra from last Monday's Chalmette trip](https://spectralworkbench.org/analyze/spectrum/13182), but didn't get the same emission line. That could've been because the flame did not have the same elements in it.

[![Screen_Shot_2013-10-09_at_2.06.43_PM.png](https://i.publiclab.org/system/images/photos/000/001/839/medium/Screen_Shot_2013-10-09_at_2.06.43_PM.png)](https://i.publiclab.org/system/images/photos/000/001/839/original/Screen_Shot_2013-10-09_at_2.06.43_PM.png)

###Questions and next steps

Not getting clear lines is not proof that this won't work -- it could also simply be because the elements are only present in trace amounts, or are not there at all on that given night. We should try to get a really solid calibration, and repeat this with all of the Chalmette flare spectra: https://spectralworkbench.org/tag/flare