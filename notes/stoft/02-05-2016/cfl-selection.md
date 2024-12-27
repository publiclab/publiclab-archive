---
title: "CFL Selection"

tagnames: 'spectrometer, cfl, spectrometer-calibration, response:12656'
author: stoft
path: /notes/stoft/02-05-2016/cfl-selection.md
nid: 12658
uid: 54025

---

![](https://publiclab.org/public/system/images/photos/000/014/082/original/CFL-COMPARE.gif)

# CFL Selection

by [stoft](../../../profile/stoft) | February 05, 2016 07:54

February 05, 2016 07:54 | Tags: [spectrometer](../tag/spectrometer), [cfl](../tag/cfl), [spectrometer-calibration](../tag/spectrometer-calibration), [response:12656](../tag/response:12656)

----

**Introduction**

Wavelength calibration of a PLab spectrometer requires a stable light source with a spectra containing at least two stable and easily identifiable peaks. The most readily available source is the common CFL with a violet peak at 435.8nm and second green double-peak at 546.0nm. However, there are many CFLs and many brands available; each with many ratings numbers and technical terminology on the package. Which one is best for calibration?

Reminded (by [@dhaffnersr's](https://publiclab.org/profile/dhaffnersr) recent experiments and by [@Liz's](https://publiclab.org/profile/liz) questions -- Thanks!) and remembering that I had a few CFLs under the bench, performing a comparison was an obvious test I should have done. Fortunately, several of the CFLs were of the same brand with similar wattage rating so the only difference would be color temperature.

The Short Answer: Selecting a "warm" CFL with a LOW color temperature (usually 2300K) will be better suited for use in wavelength calibration of a PLab spectrometer than "cooler" HIGHER color temperatures CFLs such as "cool daylight" at 6500K. For PLab spectrometer wavelength calibration, low temperature (2300K) and low wattage (14W) is probably best. If someone finds a 2300K CFL brand with a stronger 435nm spectral line, that would be better still.

**Color Temperature**

The reason is that in order to simulate the spectra of daylight, the CFL manufacturers enhance the violet-blue 400-550nm band. Unfortunately, this affects the resolution of the "violet" and "green" peaks as well. Yes, CFL spectra can vary between brands, but within one brand (mostly) the effect is clear and their spectra are compared in the plot shown below:

[![CFL-COMPARE-DETAIL.gif](//i.publiclab.org/system/images/photos/000/014/083/medium/CFL-COMPARE-DETAIL.gif)](//i.publiclab.org/system/images/photos/000/014/083/original/CFL-COMPARE-DETAIL.gif)

The trend is obvious; as the color temperature increases from 2300K to 6500K, a significant "hump" in the 400-550nm portion of the spectrum appears. The violet peak at 435.8 nm and second green peak at 546.0 nm are what is of interest but this "hump" affects both peaks. Admittedly, SWB performs well with most CFLs, but, if you have the choice, it should be easier and possibly more accurate to use a "warm white" CFL at 2300K. It is also possible that at 2300K, another brand may provide a stronger 435.8nm spectral line than the ones tested here.

[ Note: While I do not have an array of various Lumen levels of CFLs, all with the same color temperature to compare, I wouldn't expect a significant correlation related to wavelength calibration. The light from a 100W CFL will just require significantly more attenuation so as to not overload the spectrometer's camera. The spectral lines of a CFL are determined by the chemistry inside, not the power applied. So, a low wattage CFL is likely the better option. ]

**Appendix: Terms and Numbers**

CFL packages often label the lamps as "warm", "cool", "daylight" etc. and advertise their efficiency. However, you must look at all the numbers to know what you are buying. The numbers can include: wattage (energy consumed), wattage ("equivalency" to an incandescent"), Lumens (intensity), color temperature (in deg-K) and, less frequently, CRI (a color index) and CCT (color related temperature). Here's a quick overview of each of these.

- Wattage: A 14W (usage) CFL may advertise it is 60W replacement. The 60 watts is the visual intensity they claim the bulb will provide (as a simulation of an incandescent bulb of that wattage) while only consuming 14 watts of electrical power.

- Lumens: An incandescent bulb is typically 5-12 lumens/watt and a CFL is typically 46-75 lumens/watt. A typical 800 lumen CFL using 14W is typically about 57 lumens/watt which is therefore about 4x more efficient than an incandescent. While true, that is a limited comparison as their spectra are entirely different!

- Color Temperature: This is the "apparent color" of the light relative to an ideal "black body" thermal radiator -- an incandescent light is similar as the filament emits light when heated. With a CFL, which has such a sparse spectral density curve relative to an incandescent, the rated color temperature (in deg-K) is more related to how our eyes perceive the light reflected from objects than its exact spectrum. Below is a graphic of the typical Planckian black body radiation within a wide color space. In the graphic, point [A] shown very close to the Planckian locus line is for a standard tungsten filament light bulb.

[![CFL-PLANCKIAN.gif](//i.publiclab.org/system/images/photos/000/014/087/medium/CFL-PLANCKIAN.gif)](//i.publiclab.org/system/images/photos/000/014/087/original/CFL-PLANCKIAN.gif)

- CRI (Color Rendering Index): This is not an intensity or color, but a rating which attempts to give a linear percentage describing how accurately a light source illuminates (and thus reveals) the colors of objects; relative to "natural light.". An incandescent/halogen lamp is given a 100 CRI, a "warm" fluorescent lamp has ~73 CRI and "cool" CFL is ~62 CRI. The graphic (from NLPIP) below demonstrates some typical light sources and their color range (gamut) as it relates to the ideal black body curve within the larger color space. Notice that the incandescent and fluorescent gamuts are not the same but they do significantly overlap.

[![CFL-TYPE-CRI.gif](//i.publiclab.org/system/images/photos/000/014/086/medium/CFL-TYPE-CRI.gif)](//i.publiclab.org/system/images/photos/000/014/086/original/CFL-TYPE-CRI.gif)

- CCT (Correlated Color Temperature): This the closest color temperature, on the Planckian black body radiation curve, which matches the perceived color of light at the same intensity and viewing conditions. A graphic (from NLPIP) of this color range (below) shows the 'lines' of color temperature as they relate to the black body temperature curve within CIE color space. The lines labeled in deg-K represent what you might expect for the spectra from an ideal source with that rated temperature.

[![CFL-CHROMATICITY.gif](//i.publiclab.org/system/images/photos/000/014/085/medium/CFL-CHROMATICITY.gif)](//i.publiclab.org/system/images/photos/000/014/085/original/CFL-CHROMATICITY.gif)

However, the plot also shows the limitations of the CCT value as both points [A] and [B] are for sources rated at the same 3000K CCT; yet the two sources would have very different chromaticities (color spectra) so their light would appear different to the eye. Worse yet, the chromaticities of CFLs with the same deg-K rating are additionally affected by their sparsely populated spectra of narrow-band energies.

Obviously, CFL light sources do not match the color temperature ideals, but are simply similar in terms of how our eyes perceive the color of the light and the color of object illuminated.
