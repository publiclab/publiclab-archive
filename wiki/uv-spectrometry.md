---
title: Ultraviolet spectrometry
tagnames: spectrometer, uv, ultraviolet, uv/visible, spectrometry, grating, holographic, reflective
author: Fernando
path: /wiki/uv-spectrometry.md
nid: 3837
uid: 43374

---

# Ultraviolet spectrometry

by [warren](../profile/warren), [Fernando](../profile/Fernando)

September 17, 2012 13:20 | Tags: [spectrometer](../tag/spectrometer), [uv](../tag/uv), [ultraviolet](../tag/ultraviolet), [uv/visible](../tag/uv/visible), [spectrometry](../tag/spectrometry), [grating](../tag/grating), [holographic](../tag/holographic), [reflective](../tag/reflective)

This page will sum-up as much information as possible on the subject of ultraviolet or UV/visible spectrometry. It will concentrate on the task of improving the methods to collect data in the 350 - 400nm and possibly below 350nm wavelengths, cameras and gratings permitting 

###CMOS camera sensors###

[some data](http://publiclaboratory.org/notes/warren/12-12-2010/can-we-use-back-illuminated-cmos-video-cameras-uv-imaging) shows that rear- or back-illuminated CMOS sensors are sensitive down past 200nm in the ultraviolet. 

![CMOS graph](https://publiclab.org/sites/default/files/imagecache/default/Screen%20shot%202010-12-12%20at%207.54.59%20PM.png)

###Non-glass optics###

Presumably glass lenses will cut off anything below 350nm, so to take full advantage of this we might consider using a pinhole instead of a glass lens. Luckily webcam lenses just unscrew. Please post here if you try this!

**Quartz lenses**

[Mathew](/profile/mathew) sez:  Quartz UV passing lenses are available from Universe Kogaku. http://Ukaoptics.com The m12 mount ones for security/industrial cams are small and probably cheaper.

> Jack Summers sez: According to these guys: http://dx.doi.org/10.1016/j.aca.2006.09.001,  you can detect CO2 at 193 nm... You would, however, need a specialized lamp to do absorbance measurements, and things like plastic and normal glass optics are not going to work at that wavelength.

> ToF sez: Pyrex-Lenses should work, but between 200 and 150nm the O2 in the air is very absorbing.

Below comparative specta for Borosilicate glass (Pyrex, BK7...) plotted against regular Soda-Lime glass:

<img src="http://3dprinter.wikidot.com/local--files/dlp-projectors-optics/Borofloat-vs-soda-glass_transmission.gif" alt="Borosilicate vs Soda-Lime Glass absorption spectra" />

We see that regular glass lenses and optics would start curring off significantly below 350nm where Borosilicate glasses would start filtering below 335nm

And now the absorption spectra of PMMA (Polymethylmetacrylate, Lexan, Plexyglass..) and PC (Polycarbonate, the DVD material)

<img src="http://www.zeonex.com/lib/images/charts/diagnostic_light-transmittance.gif" alt="Absorption spectra of PMMA and PC" />

In comparison, the almost perfect transmittance of Fused Silica down to 175nm 

<img src="http://www.escoproducts.com/assets/images/material-s1-uv02.gif" alt="Fused Silica transmittance" />


###UV light tests###

Recent tests have shown that 360nm and higher is possible, by calibrating a spectrometer and then pointing it at an ultraviolet light. The spectrometer was near-IR capable (had been modified). These tests were based on [this work from Feb 2012](http://publiclaboratory.org/notes/warren/2-14-2012/ultraviolet-spectroscopy-test-350nm) and were done with glass optics still in place.

<iframe width='500px' height='400px' border='0' src='https://spectralworkbench.org/spectra/embed/709'></iframe>

<iframe width='500px' height='200px' border='0' src='https://spectralworkbench.org/sets/embed/33'></iframe>

####Lamp emission comparison####

Spectra Metal Halide vs sunlight and Halogen lamps.

<img  width='500px' height='210px' src="http://3dprinter.wikidot.com/local--files/dlp-projectors-optics/MH-halogen_spectrum_plot.jpg" alt="Spectra Metal Halide vs sunlight and Halogen lamps" />

Spectra of Tungsten Halogen lamps (household halogen lamps)

<img  width='500px' height='300px' src="http://3dprinter.wikidot.com/local--files/dlp-projectors-optics/tungsten-halogen-20W.gif" alt="Spectra of Tungsten Halogen lamps (household halogen lamps)" />

Spectra of DLP projector UHP lamps vs Xenon lamps

<img  width='500px' height='300px' src="http://3dprinter.wikidot.com/local--files/dlp-projectors-optics/UHP_vs_Xenon_lamps_spectra.png" alt="Spectra of DLP projector UHP lamps vs Xenon lamps" />
