---
title: "Multispectral analysis for determining plant health"

tagnames: 'spectrography, infrared, spectrometry, photosynthesis, plant-health, plant-biology'
author: btbonval
path: /wiki/multispectral-analysis-for-determining-plant-health.md
nid: 11477
uid: 43229
cids: 
---

# Multispectral analysis for determining plant health

by [btbonval](/profile/btbonval)

December 17, 2014 19:32 | Tags: [spectrography](/tag/spectrography), [infrared](/tag/infrared), [spectrometry](/tag/spectrometry), [photosynthesis](/tag/photosynthesis), [plant-health](/tag/plant-health), [plant-biology](/tag/plant-biology)

----

### Fundamentals

#### Photosynthesis as a health monitor

The efficiency of photosynthesis in a plant could be a good way to determine the plant's health. To measure the process of photosynthesis in a plant, we must first understand how photosynthesis interacts with the environment.

#### Interaction of environmental energy for photosynthesis

[![AbsorbDiagESAcapCit.jpg](//i.publiclab.org/system/images/photos/000/008/412/medium/AbsorbDiagESAcapCit.jpg)](//i.publiclab.org/system/images/photos/000/008/412/original/AbsorbDiagESAcapCit.jpg)

The red numbers in the image above were added by [Mr. Fastie](http://publiclab.org/profile/cfastie). (image and red numbers from [ESA's Mapping Photosynthesis from Space](http://www.esa.int/esapub/bulletin/bullet116/chapter4_bul116.pdf))

[![ExcitationCompAnnRevPlantBio.JPG](//i.publiclab.org/system/images/photos/000/008/413/large/ExcitationCompAnnRevPlantBio.JPG)](//i.publiclab.org/system/images/photos/000/008/413/original/ExcitationCompAnnRevPlantBio.JPG)

The above diagram represents just the light that is absorbed by photosynthetic pigments. There are only three important possible fates of the energy entering this system.

### Measuring photosynthesis

By manipulating a leaf a certain way and then measuring how much it fluoresces, you can learn a lot about that leaf’s potential to do photosynthesis. There are only a few possible fates of the light energy absorbed by plant pigments. If you control or measure all factors except one, you can estimate that remaining one. 

`light source energy = plant reflection + plant transmissance + plant flourescence + heat + photosynthesis`

The general idea is to measure the light source, heat, reflection, transmissance, and subsequent fluorescence. The remaining "missing" energy as an estimate for photosynthesis:

`photosynthesis = light source energy - plant reflection - plant transmissance - plant flourescence - heat`

This estimate can be very accurate and can reveal differences in plant health that are completely invisible to the eye.

#### Spectral analysis

The light fluoresced by green plants is lower energy (longer wavelength) than the light absorbed by the plant pigment. Chlorophyll fluoresces most strongly at 690nm (red) and at 740 nm (near infrared). The red light fluoresced by chlorophyll is easy to see if you shine UV light on an extract of leaves in a darkened lab. Outside, the amount of fluoresced light is trivial compared to the sunlight reflecting off the leaf, so neither the red nor the near infrared emission is noticeable.

[![Chlorophyll_spectra.png](//i.publiclab.org/system/images/photos/000/008/416/medium/Chlorophyll_spectra.png)](//i.publiclab.org/system/images/photos/000/008/416/medium/Chlorophyll_spectra.png)

Different extracts of plant pigments fluoresce at slightly different wavelengths, but this is a typical result for Chlorophyll a (from [Photosynthesis Manual at York U](http://www.yorku.ca/planters/photosynthesis/2014_08_15_lab_manual_static_html/index.html))

[![Fluorescence_of_chlorophyll_under_UV_light.jpg
](//i.publiclab.org/system/images/photos/000/008/415/medium/Fluorescence_of_chlorophyll_under_UV_light.jpg)](//i.publiclab.org/system/images/photos/000/008/415/original/Fluorescence_of_chlorophyll_under_UV_light.jpg)

A chlorophyll extract in alcohol shown under white light (above) and UV light inducing fluorescence (below). The red glow is fluorescence at the peak of 690 nm in the previous figure. (from [wiki commons](http://en.wikipedia.org/wiki/Chlorophyll_fluorescence#mediaviewer/File:Fluorescence_of_chlorophyll_under_UV_light.jpg))

[![Reflect_Fluor.jpg](//i.publiclab.org/system/images/photos/000/008/417/medium/Reflect_Fluor.jpg)](//i.publiclab.org/system/images/photos/000/008/418/original/Reflect.vs.Fluor.jpg)

Fluorescence from plant pigments is inconspicuous compared to reflection of sunlight from plant leaves. Click the image for a full image and detailed caption. (from [Remote sensing of solar-induced chlorophyll fluorescence: Review of methods and applications](http://www.eufar.net/document/publi/meroni_09_a_20091222125051.pdf))

### Examples

[![ArabidopsisFl.jpg](//i.publiclab.org/system/images/photos/000/008/414/large/ArabidopsisFl.jpg)](//i.publiclab.org/system/images/photos/000/008/414/original/ArabidopsisFl.jpg)

Laboratory plant experiment in which seedlings were treated the day before with herbicide. The lower image is an index based entirely on fluorescence and indicates slowing of photosynthesis when the plants still appear healthy (upper photo).