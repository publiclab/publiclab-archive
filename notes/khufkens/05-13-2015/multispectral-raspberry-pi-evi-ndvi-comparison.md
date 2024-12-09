---
title: 'Multispectral raspberry pi: EVI - NDVI comparison'
tagnames: ndvi, multiple-camera, raspberry-pi, vegetation, multipspectral, evi
author: khufkens
path: /notes/khufkens/05-13-2015/multispectral-raspberry-pi-evi-ndvi-comparison.md
nid: 11808
uid: 438931

---

![](https://publiclab.org/public/system/images/photos/000/009/878/original/Screen_Shot_2015-05-12_at_23.30.04.png)

# Multispectral raspberry pi: EVI - NDVI comparison

by [khufkens](../profile/khufkens) May 13, 2015 03:49

May 13, 2015 03:49 | Tags: [ndvi](../tag/ndvi), [multiple-camera](../tag/multiple-camera), [raspberry-pi](../tag/raspberry-pi), [vegetation](../tag/vegetation), [multipspectral](../tag/multipspectral), [evi](../tag/evi)

----

Today two filters arrived in my mailbox, one filter is a bandpass filter from [400-710nm](http://www.thorlabs.com/thorproduct.cfm?partnumber=FGS900), the other filter is a longpass filter with the cut-off at [721nm](http://www.thorlabs.com/thorproduct.cfm?partnumber=FGL9). [Narrower band pass filters are available](http://www.thorlabs.com/thorproduct.cfm?partnumber=FGS600) and I might order one to see if this further improves image quality.

Using this setup of two NoIR raspberry pi cameras allows me to have 4 channels. Where the NIR, red and the blue probably are relatively well separated in wavelength domain and the green mixes in a bit. As I do not restrict myself to a two band setup I can calculate an additional vegetation index (VI) in addition to the standard [NDVI VI](https://en.wikipedia.org/wiki/Normalized_Difference_Vegetation_Index).

With the addition of a blue band I can calculate the [EVI](https://en.wikipedia.org/wiki/Enhanced_vegetation_index) which relies on this band to reduce some of the canopy background (soil) effects. Doing so increases the dynamic range for high biomass regions. Below I show both the NDVI and EVI as calculated from my multispectral raspberry pi camera and a scatterplot plotting the VI against each other. Out of range values (> 1.5 or < -1.5) of the EVI (which is not bound by a finite -1/1 range) were mapped to -1.5 and 1.5 respectively (which renders the sky blue).

The increased dynamic range is visible for the EVI as the EVI shows a non linear relationship with the NDVI, where smaller increments in higher NDVI values (especially >0.4) map to more widely spaced EVI values (Figure, bottom panel). Although no saturating NDVI values are shown in the image the effect should only become more pronounced for higher NDVI values.

Also note that the different non vegetative structures are more easily separated using the EVI. Mulch (indicated by the red dot) shows up clearly in the EVI image while it is hard to distinguish from asphalt (black square) in the NDVI image. Again this shows the advantage of the extra band for some applications. [As shown earlier](http://publiclab.org/n/11805) however, the blue channel is sensitive to Raleigh scattering so a distance effect might creep into the EVI index causing noise and higher uncertainties on the retrieved VI.

![comparison](https://farm9.staticflickr.com/8807/17397000800_d09a4c03fe_k_d.jpg)