---
title: Absorption lines in flare spectra
tagnames: spectrometer, analysis, spectral-analysis, absorption, spectral-workbench, flare, chalmette, response:8946, response:8944
author: warren
path: /notes/warren/10-09-2013/absorption-lines-in-flare-spectra.md
nid: 9431
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/001/848/original/capture-2.png)

# Absorption lines in flare spectra

by [warren](../profile/warren) October 09, 2013 20:10

October 09, 2013 20:10 | Tags: [spectrometer](../tag/spectrometer), [analysis](../tag/analysis), [spectral-analysis](../tag/spectral-analysis), [absorption](../tag/absorption), [spectral-workbench](../tag/spectral-workbench), [flare](../tag/flare), [chalmette](../tag/chalmette), [response:8946](../tag/response:8946), [response:8944](../tag/response:8944)

----

###What I want to do

There seem to be some distinct lines missing in the [Chalmette flare spectra](https://spectralworkbench.org/tag/flare) folks have been collecting. There's a [separate post on emission spectra](/notes/warren/10-09-2013/trying-to-detect-emission-lines-in-flare-spectra-from-chalmette) in these, which is the primary goal; this is more of a speculative exploration on if we can also measure absorption lines since the flame is a good full-spectrum light source and the steamy/smoky stuff coming out might allow us to detect some molecules. Emission spectra are mostly just for atoms, not full molecules, so this would be a nice secondary technique.

Here's a great example of [an atmospheric spectrum](https://spectralworkbench.org/tag/sky) (of the sky): 

https://spectralworkbench.org/analyze/spectrum/913 (see below)

[![sky.png](https://i.publiclab.org/system/images/photos/000/001/843/medium/sky.png)](https://i.publiclab.org/system/images/photos/000/001/843/original/sky.png)

###My attempt and results

Since we're not sure Scott's spectrometer is well calibrated, I tried to align the spectra visually using the green band as a reference. I compared it to [another spectrum from a Desktop kit](https://spectralworkbench.org/analyze/spectrum/10065), so the scale should be similar. 

[![capture-2.png](https://i.publiclab.org/system/images/photos/000/001/847/medium/capture-2.png)](https://i.publiclab.org/system/images/photos/000/001/847/original/capture-2.png)

_Top, a [Chalmette flare spectrum from July 27](https://spectralworkbench.org/analyze/spectrum/10010). Bottom, a [sky spectrum from Moscow](https://spectralworkbench.org/analyze/spectrum/10065), showing a nice oxygen absorption line at ~760nm_

It seems to me that the faint line in the flare spectrum aligns with the ~760nm O2 line in the sky spectrum. Since that's a particularly strong absorption line (see this [annotated one by Liz](https://spectralworkbench.org/analyze/spectrum/913)), that seems feasible. 

###Questions and next steps

If we can identify some other absorption lines, and clean up the data a bit, we might be able to fingerprint other whole molecules. 

We should also try to figure out what the big missing region (big dip) in the red part of the spectrum is -- I don't think any absorption lines are that wide, so what's going on there (below)? 

[![capture-3.png](https://i.publiclab.org/system/images/photos/000/001/846/medium/capture-3.png)](https://i.publiclab.org/system/images/photos/000/001/846/original/capture-3.png)