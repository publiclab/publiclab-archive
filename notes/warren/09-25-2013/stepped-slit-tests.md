---
title: "Stepped slit tests"

tagnames: 'spectrometer, slit, clipping, response:9366, stepped-slit, slit-width'
author: warren
path: /notes/warren/09-25-2013/stepped-slit-tests.md
nid: 9373
uid: 1
cids: 7020,7021,7023,7028,19553,19559,19560,19561
---

![](https://publiclab.org/public/system/images/photos/000/001/681/original/Screen_Shot_2013-09-25_at_9.10.33_AM.png)

# Stepped slit tests

by [warren](/profile/warren) | September 25, 2013 13:42

September 25, 2013 13:42 | Tags: [spectrometer](/tag/spectrometer), [slit](/tag/slit), [clipping](/tag/clipping), [response:9366](/tag/response:9366), [stepped-slit](/tag/stepped-slit), [slit-width](/tag/slit-width)

----

##What I want to do

Following up on [Mathew Lippincott's](/profile/mathew) [printed slit tests](/notes/mathew/09-25-2013/photo-printed-collimation-slit-for-the-backpack-spectrometer), Dave Stoft and I had [hoped to test if a stepped slit would provide un-clipped data](/notes/stoft/05-14-2013/in-search-of-spectrometer-attenuators) in the center (narrower) zone due to the neighboring (wider) slit zones providing a lot more light. This is hard to test without a nicely diffused light source, but Mathew's tests from yesterday with a new kind of slit printing used the stepped concept and I was able to take a close look at the data. I took [Mathew's 0.09mm slit test as a sample](https://spectralworkbench.org/spectra/show/13009).

##Our attempt and results

Although it seems like the light source may have been a bit varied -- maybe a CFL? -- and we should repeat these tests with a very even, diffused source, it seemed fairly clear where the 3 zones were, with the WIDE-NARROW-WIDE pattern. The lead image shows a cross section of the spectrum brightness. I'm not sure why the center zone seemed to have similar brightness to the side zones, but it probably has to do with either the image brightness adjustment algorithms evening things out, or perhaps the center zone was pointed at a brighter area of the bulb. This is a big unknown we'll have to test.

Still, I was able to take two sample rows, saving them as the following two spectra, and the "bright" zone was definitely hitting 100% more than the dimmer zone. In part because the smartphone camera is pretty good, it still wasn't really clipping, but I think that a lower quality would have at those points. 

Wider slit spectrum (line 1444): https://spectralworkbench.org/analyze/spectrum/13029

[![Screen_Shot_2013-09-25_at_9.22.41_AM.png](https://i.publiclab.org/system/images/photos/000/001/682/large/Screen_Shot_2013-09-25_at_9.22.41_AM.png)](https://i.publiclab.org/system/images/photos/000/001/682/original/Screen_Shot_2013-09-25_at_9.22.41_AM.png)

Narrower slit spectrum (line 1101): https://spectralworkbench.org/analyze/spectrum/13030

[![Screen_Shot_2013-09-25_at_9.23.04_AM.png](https://i.publiclab.org/system/images/photos/000/001/683/large/Screen_Shot_2013-09-25_at_9.23.04_AM.png)](https://i.publiclab.org/system/images/photos/000/001/683/original/Screen_Shot_2013-09-25_at_9.23.04_AM.png)

And a comparison in a single graph (although RGB are averaged here so you don't see the clipping effect as well):

[![Screen_Shot_2013-09-25_at_9.41.17_AM.png](https://i.publiclab.org/system/images/photos/000/001/685/large/Screen_Shot_2013-09-25_at_9.41.17_AM.png)](https://i.publiclab.org/system/images/photos/000/001/685/original/Screen_Shot_2013-09-25_at_9.41.17_AM.png)

##Questions and next steps

So while it does seem that the lower-exposed areas, corresponding to at least part of the narrow slit region of the spectrum, are less likely to clip, we haven't really demonstrated that this was **because** of the brighter zones to each side. In addition, we need to repeat tests with very even, diffuse illumination -- perhaps also with continuous spectrum light, which is more likely to clip in general, if you look at lots of existing data at SpectralWorkbench.org.