---
title: 'NDVI from the PLOTS IR camera kit'
tagnames: balloon-mapping, near-infrared-camera, kite-mapping, nrg, ndvi, infrared, infragram, infrablue, parent:infragram, multispectral-imaging
author: cfastie
path: /wiki/ndvi-plots-ir-kit.md
nid: 1781
uid: 554

---

# NDVI from the PLOTS IR camera kit

by [cfastie](../profile/cfastie)

April 25, 2012 17:33 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [kite-mapping](../tag/kite-mapping), [nrg](../tag/nrg), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [parent:infragram](../tag/parent:infragram), [multispectral-imaging](../tag/multispectral-imaging)

----

*This page introduces the scientific background of NDVI and its application to the original [PLOTS visible/infrared camera tool](/wiki/dual-camera-kit-guide).*

![Par_action_spectrum.jpg](https://i.publiclab.org/system/images/photos/000/000/324/medium/Par_action_spectrum.jpg)
<p></p>_Figure 1. The absorption of different wavelengths of visible light by photosynthetic pigments and the resulting spectral response of photosynthetic rate. Leaves appear green because the pigments do not absorb as much green as other wavelengths and more green is reflected back to us. Modified from [here](http://en.wikipedia.org/wiki/File:Par_action_spectrum.gif)_

Vegetation is green because plant leaves reflect green light -- they don't use much of it for photosynthesis (Figure 1). Instead they use lots of the blue and red wavelengths in sunlight. The pigments in leaves absorb this light to power photosynthesis which converts CO<sub>2</sub>, water, and nutrients into carbohydrates (food). In general, you can estimate the productivity or vigor of vegetation by how much blue and red light it is absorbing. Photosynthetic pigments do not use the longer, invisible wavelengths of near infrared light and reflect almost all of it away. 

Shortly after the launch of the first Landsat satellite in 1972, scientists began using the data from its sensors to estimate the productivity of vegetation by comparing the amount of red light reflected (there is not much from healthy plants) to the amount of near infrared (NIR) light reflected (there is a lot from healthy plants). The amount of infrared light reflected from vegetation is a good indicator of how bright the sunlight was at any moment (leaves reflect almost all NIR). Comparing that to the amount of reflected red light can suggest what proportion of the sunlight was being absorbed by the plants.

![NDVI_is_eq.jpg](https://i.publiclab.org/system/images/photos/000/000/325/medium/NDVI_is_eq.jpg)
<p><em>Figure 2. The equation for computing NDVI, the Normalized Difference Vegetation Index.</em></p>

That relationship is a good measure of the amount of photosynthetically active biomass. They quickly settled on an index of plant productivity called NDVI for Normalized Difference Vegetation Index.  Instead of just using the difference between the amounts of red and near infrared light, they normalized that difference by dividing it by the total amount of red plus infrared light (Figure 2).  That allowed the index from different areas and different times of the day or year to be compared with each other.

![Sensorbands.jpg](https://i.publiclab.org/system/images/photos/000/000/326/medium/Sensorbands.jpg)
<p></p> _Figure 3. The width of the red and near infrared bands sensed by different satellites and used to calculate NDVI. The earliest satellites are to the left. At far right are the approximate bands captured by the visible/IR camera pair developed for the 2012 PLOTS KickStarter campaign. Data from [here](http://rangeview.arizona.edu/Glossary/ndvi.html) and elsewhere._

It was soon demonstrated that NDVI was a pretty good proxy for vegetation health or the amount of photosynthetically active biomass. Dozens of subsequent satellites have returned data about the red and near infrared light reflected from Earth's surface, and for 40 years NDVI computed from these two bands has been a standard way of describing vegetation health or productivity.  Over the years, the exact bands of wavelengths used to compute NDVI differed from satellite to satellite (Figure 3), but the index remained a fairly robust indicator of primary productivity. The most recent satellites sense relatively narrow bands of red and near infrared light.

![color-camera-bayer-filter.png](https://i.publiclab.org/system/images/photos/000/000/327/medium/color-camera-bayer-filter.png)
<p></p> _Figure 4. A Bayer filter array allowing each pixel on the silicon sensor to record information from either red, green, or blue light._

It is possible to produce a good approximation of NDVI by using a normal consumer grade digital camera to capture visible light (including red), and another similar camera modified to capture only near infrared light. Silicon sensors (both CCD and CMOS) are more or less sensitive to all visible wavelengths, but by themselves cannot distinguish among different colors.  So red, green, or blue filters are placed over each pixel to record information about just one color (Figure 4).  An algorithm then assigns information about all three color channels to each pixel in the image file (several million pixels each get a number for red, green, and blue) .

![NikonD200_SpectralResponseCCD.jpg](https://i.publiclab.org/system/images/photos/000/000/328/medium/NikonD200_SpectralResponseCCD.jpg)
<p></p> _Figure 5.  The spectral sensitivity of a typical silicon sensor with the IR block filter removed.  All three color channels include some information about infrared light (wavelengths greater than 700 nm). [Source](http://www.maxmax.com/spectral_response.htm)_

Unlike the human eye, the silicon-based sensors in digital cameras are sensitive to both visible and near infrared light (Figure 5). To prevent infrared light from being recorded in standard digital cameras, a filter opaque to NIR is placed in front of the sensor. The resulting color sensitivity of digital cameras mimics human vision (Figure 6).  Photo manipulation software can isolate the red channel in a digital image file and, along with other data about infrared light, use the values for each pixel to compute NDVI. 

![CCDSpectResp.jpg](https://i.publiclab.org/system/images/photos/000/000/329/medium/CCDSpectResp.jpg)
<p></p> _Figure 6. Typical spectral sensitivities of digital camera sensors with an IR block filter in place. The three colors are recorded separately in channels, and each can be used individually. Information about infrared light is not included in any channel. The red and blue channels often include some information about green light (530-600 nm). [Source](http://www.dxomark.com/index.php/Publications/DxOMark-Insights/Canon-500D-T1i-vs.-Nikon-D5000/Color-blindness-sensor-quality)_

By opening up the camera, removing the IR block filter, and replacing it with a filter that blocks all visible light but passes IR light, a consumer grade digital camera can be made to record only near infrared light.  Inexpensive material suitable for such a filter is exposed and developed color negative film (Figure 7), or unexposed developed color slide film.  <a href="http://publiclaboratory.org/wiki/dual-camera-kit-guide">The original PLOTS IR cameras</a> had small rectangles of color negative film placed in front of the sensors. Better filters can be purchased to do this more precisely. Any one or any combination of the color channels from this camera could be used for NIR information, although more NIR light might be available in one of the channels. 

![KRtransmit.jpg](https://i.publiclab.org/system/images/photos/000/000/330/medium/KRtransmit.jpg)
<p></p> _Figure 7.  Spectral transmission of exposed and developed Kodacolor negative film.  All visible light is blocked, and most near infrared light passes through. This type of filter replaced the IR block filter in the Canon A495 cameras modified for the 2012 PLOTS KickStarter campaign. [Data from here.](http://www.northcountryradio.com/Articles/irfltr.htm)_

It is also possible to capture all the information needed to compute NDVI in just one camera. If the standard IR block filter is replaced with a filter that passes NIR and blocks only red light, then the red channel will record mostly NIR light. The blue channel which will record mostly blue light (some NIR light will also be captured in each channel) can be used to represent wavelengths that are absorbed by plants. Good filters are available for this purpose (Figure 8), and this approach eliminates major difficulties with the two camera approach described above -- only one camera is needed, and that eliminates synchronizing camera shutters and aligning the pairs of images. A shortcoming of this approach is that only NDVI images can be produced -- no normal color images or traditional false color infrared images are possible. Another shortcoming is that the channel used for visible light will be contaminated with NIR light.

![BG3curve.JPG](https://i.publiclab.org/system/images/photos/000/000/331/medium/BG3curve.JPG)
<p></p> _Figure 8.  Spectral transmission of a "superblue" filter.  Most red light (600 to 700 nm) is blocked, but other visible light and most near infrared light (> 700 nm) passes through. This type of filter can replace the IR block filter to allow NDVI to be produced from a single camera. The red channel in the image file will record mostly infrared light, and the blue channel will record light that plants use for photosynthesis._  
.  
Instead of using a blue filter, using a red filter can produce better results (Figure 9). Red filters with precise spectral cut-offs are common photography tools and are readily available in inexpensive materials (e.g., gel, polyester).  While the blue filter allows NIR to be captured in the camera's red channel, a red filter blocks all visible light except for red, so the blue channel captures a very pure NIR signal. To compute NDVI, the blue channel is used for NIR and the red channel is used for red visible light, just as has been done with satellite data for 40 years. Interpreting vegetation health is often more straightforward when the red channel is used to represent the light that plants use for photosynthesis, and red light is not scattered by the atmosphere as much as blue.  
.  

[![BG3_W25A_curve2k.jpg](https://i.publiclab.org/system/images/photos/000/002/196/medium/BG3_W25A_curve2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/196/original/BG3_W25A_curve2k.jpg)  
*Figure 9. Transmission curves for the Schott BG3 (infrablue) filter and the Wratten 25A (red) filter. The BG3 filter blocks most red and green light, allowing near infrared (NIR) to be captured in the camera's red and green channels. The Wratten 25A filter blocks almost all green and blue light allowing NIR to be captured in the green and blue channels.*  
.  

An early goal of work with the PLOTS infrared camera kit was to learn how interpretable its version of NDVI is.  Figure 3 suggests that the red and NIR bands produced by the cameras are wider than the satellite bands commonly used. The red band probably extends into the green wavelengths (which plants reflect along with NIR), which could complicate the interpretation of the NDVI values.  There may also be some overlap of the red and NIR bands, although the exact spectral response of the normal and modified Powershot cameras is not known. There are similar limitations with the single camera approach. The available superblue filters do not block all red light, so the channel used for infrared light will be contaminated with visible red wavelengths. The blue channel which is used to represent wavelengths absorbed by photosynthetic pigments will also record some green light and probably some infrared light. Much testing is required to learn the biological meaning of these versions of NDVI.