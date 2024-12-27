---
title: "Spectrometer testing"

tagnames: 'spectrometer, grating, diffraction-grating, cfl, compact-fluorescent, entrance-slit'
author: cfastie
path: /notes/cfastie/12-3-2012/spectrometer-testing.md
nid: 5098
uid: 554

cids: 2676,2681,2695,2699,2700,2702,2704,2705,2706,2707,16445

---

![](https://publiclab.org/sites/default/files/spectrometer-20121203-2041ps.jpg)

# Spectrometer testing

by [cfastie](../../../profile/cfastie) | December 04, 2012 04:41

December 04, 2012 04:41 | Tags: [spectrometer](../tag/spectrometer), [grating](../tag/grating), [diffraction-grating](../tag/diffraction-grating), [cfl](../tag/cfl), [compact-fluorescent](../tag/compact-fluorescent), [entrance-slit](../tag/entrance-slit)

----

<em>Image above: Taking good photos of the spectra produced by the Public Laboratory fold-up paper spectrometer.</em>

Seeing [Mathew's note](http://publiclaboratory.org/notes/mathew/11-30-2012/final-fold-mini-spectrometer-print-files-and-instructions) about taking delivery on 2000 fold-up spectrometers put me over the top and I finally made one.  I printed it on black construction paper, super-glued it together, and tried two different gratings: a piece of DVD-R and a piece of 1000 lines/mm diffraction grating film that I bought from (Edmund) Scientifics several years ago (it took me an hour to find it).  I tried it with the only webcam I have (Microsoft LifeCam VX-6000) with acceptable results, but then I tried to figure out how each component contributes to the quality of the spectra.  So I eliminated the webcam and took really good photos of the spectra with a DSLR and Micro-NIKKOR 55mm 1:3.5 lens. I tried three different entrance slits and both gratings and recorded spectra of my compact fluorescent desk lamp. The photos were uploaded to [Spectral Workbench](https://spectralworkbench.org/spectra/search?q=clf_cfl) to make spectrographs (search for "clf_cfl").

The conclusion of the entrance slit trials is that narrower is better.  The narrowest slit I made was about 0.2 mm wide. The 0.5 mm slit blurred the peaks quite a bit. The slit below is cut in black heat-shrink tubing material (not a great choice for flame spectroscopy).

<a href="https://www.flickr.com/photos/chrisfastie/8243616906/" title="spectrometer-20121203-4624 by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8479/8243616906_dfc14d707c.jpg" width="200" height="195" alt="spectrometer-20121203-4624"></a>

The conclusion of the grating trials is that the DVD-R is almost as good as the grating film. I bought a square foot of the film for less than $10 ([similar to this](http://www.scientificsonline.com/holographic-diffraction-grating-film-10036.html)), so I have enough for 100-200 spectrometers.  The spectrum displayed by the film is brighter than the DVD spectra, and I had trouble finding the first  mercury line (404.7 nm) in the DVD spectra. But almost all the standard peaks below 650 nm are distinguishable with either material. 

<a href="https://www.flickr.com/photos/chrisfastie/8243620250/" title="CFL_peaks_DVD1500 by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8060/8243620250_f2d8d33ff3.jpg" width="500" height="290" alt="CFL_peaks_DVD1500"></a><p></p>
<em>Above: Spectrum of CFL bulb with the PLOTS paper spectrometer with DVD-R grating. Note the curved lines. Peaks are identified below.</em>

<a href="https://www.flickr.com/photos/chrisfastie/8242550299/" title="CFL_peaks_1klpi1500 by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8342/8242550299_da5b79de69.jpg" width="500" height="289" alt="CFL_peaks_1klpi1500"></a><p></p>
<em>Above: Spectrum of CFL bulb with the PLOTS paper spectrometer with 1000 L/mm grating film. Peaks are identified below.</em>

The spectrum below was made with an Ocean Optics HR2000 spectrometer that costs $4200. All of the peaks to the left of 650 nm are more or less distinguishable in the spectrum I made with the 1000 lines per mm grating film (peaks above 700 nm are in the infrared and are invisible to my DSLR).  Only a couple of the peaks  are missing only in the DVD spectrum.  The calibration of the two spectra above differs by up to 5-10 nm (I guess because Spectral Workbench does a linear calibration and uses peaks 2 and 5).

<a href="https://www.flickr.com/photos/chrisfastie/8242549545/" title="Fluorescent_lighting_spectrum_peaks_labelled by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8207/8242549545_729a1897be.jpg" width="500" height="306" alt="Fluorescent_lighting_spectrum_peaks_labelled"></a><p></p>
<em> Above: CFL spectrum from a $4200 spectrometer. [See source](http://en.wikipedia.org/wiki/File:Fluorescent_lighting_spectrum_peaks_labelled.gif)

###Numbered Peaks above 
|Peak number|Species producing peak|Correct wavelength (nm)
|:---------------------------------------------|:----------------------|:------------------------:
|1	|mercury|    404.656
|2	|mercury|	435.833
|3	|terbium from Tb3+|   ~485 to 490
|4	|terbium from Tb3+|   ~543 to 544
|5	|mercury|	 546.074
|6	|likely terbium from Tb3+ or mercury|    576.960 for Hg or ~578 for Tb
|7	|mercury or terbium from Tb3+|    579.066 for Hg or ~580 for Tb
|8	|possibly terbium from Tb3+ or europium in Eu+3:Y2O3|	~580
|9	|likely europium in Eu+3:Y2O3 |   ~587
|10	|likely europium in Eu+3:Y2O3|    ~593
|11	|likely europium in Eu+3:Y2O3|    ~598
|12	|europium in Eu+3:Y2O3|    ~611
|13	|likely terbium from Tb3+|    ~625
|14	|likely europium in Eu+3:Y2O3|    ~630
|15	|likely europium in Eu+3:Y2O3|    ~650
|16	|likely europium in Eu+3:Y2O3|   ~661
|17	|likely europium in Eu+3:Y2O3|    ~687-688
|18	|likely europium in Eu+3:Y2O3|    ~693
|19	|likely europium in Eu+3:Y2O3|    ~707 and ~709
|20	|likely europium in Eu+3:Y2O3|    ~712
|21	|likely argon|    758.9315 or 763.5106 (??)
|22	|likely argon|    811.531
