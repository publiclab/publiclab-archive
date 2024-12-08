---
title: Continued literature review for the Oil Testing Kit
tagnames: spectrometer, spectrum-matching, fluorescence, heavy-metals, matching, closest-match, literature, identifying-oil, oil-testing-kit, lifs, lif, humic-acid, humic, humic-fluorescence, plant-matter
author: warren
path: /notes/warren/08-14-2014/continued-literature-review-for-the-oil-testing-kit.md
nid: 11053
uid: 1

---

# Continued literature review for the Oil Testing Kit

by [warren](../profile/warren) August 14, 2014 22:27

August 14, 2014 22:27 | Tags: [spectrometer](../tag/spectrometer), [spectrum-matching](../tag/spectrum-matching), [fluorescence](../tag/fluorescence), [heavy-metals](../tag/heavy-metals), [matching](../tag/matching), [closest-match](../tag/closest-match), [literature](../tag/literature), [identifying-oil](../tag/identifying-oil), [oil-testing-kit](../tag/oil-testing-kit), [lifs](../tag/lifs), [lif](../tag/lif), [humic-acid](../tag/humic-acid), [humic](../tag/humic), [humic-fluorescence](../tag/humic-fluorescence), [plant-matter](../tag/plant-matter)

##What I want to do

I've been reading and annotating a collection of formal research papers on fluorescence spectroscopy -- an in particular, laser induced fluorescence (LIF) spectroscopy, in order to connect our work with the [Oil Testing Kit](/wiki/oil-testing-kit) with existing literature, as well as to improve and support our techniques. 

I'm going to start collecting them on this wiki page as well: http://publiclab.org/wiki/oil-testing-kit-literature where I'll link from to summaries and excerpted diagrams such as I'm doing in this post. 

##My attempt and results

I took brief notes on each one, and will excerpt illustrations and diagrams where it's helpful. Mostly I focused on their relationship with the techniques we're using or hoping to use. 

###Laser spectroscopy of mineral oils on the water surface

Patsayeva, S., et al. "Laser spectroscopy of mineral oils on the water surface." EARSeL eProceedings 1.1 (2000): 106-114. ([PDF](http://eproceedings.org/static/vol01_1/01_1_patsayeva1.pdf), [Google Scholar](http://scholar.google.com/scholar?cluster=3403704072963690377&hl=en&as_sdt=0,22))

* in-situ, of oil sheens, with 308 and 355 nanometer lasers (well below our 405nm)
* explored different kinds of spectroscopy, including lifetime decay (fading over a few nanoseconds) and "fluorescence saturation"
* showed normalizing to peak height -- peak of fluorescence, not laser -- in comparing different sheen thicknesses of same oil (very important -- see figure below and [this note on normalization](/notes/warren/07-30-2014/equalizing-area-of-spectral-graphs-for-comparison))
* "fluorescence saturation" - shining so much light in that light generating processes for some colors are limited by "slower emission kinetics" -- in particular red -- and there is a shift of the emission (fluorescence) peak towards the shorter, blue end of the spectrum. The amount of shift depended on the weight, or type, of the oil, and humic acid (not sure if this is related to plant matter?) shifted, interestingly, towards the red end. Could this be used to distinguish organic matter vs. fluorescence from petroluem, or is that not what "humic" means? (see below; the answer is yes)

[![normalized.png](https://i.publiclab.org/system/images/photos/000/006/271/large/normalized.png)](https://i.publiclab.org/system/images/photos/000/006/271/original/normalized.png)

###Measuring of water and soil contamination with oil components using laser-induced fluorescence transmitted through optical fibers

Moise, N., Aurelia Vasile, and Mihail-Lucian Pascu. "Measuring of water and soil contamination with oil components using laser-induced fluorescence transmitted through optical fibers." ROMOPTP'94: 4th Conference on Optics. International Society for Optics and Photonics, 1995. ([Google Scholar](http://scholar.google.com/scholar?cluster=5514086661255142525&hl=en&as_sdt=0,22))

* nitrogen pulsed laser at 337.1nm (well below our 405nm), looking at both laser induced fluorescence (LIF/LIFS) and fluorescence lifetime/decay
* nice diversity of curve/peak shapes between 420-480nm (see figure below)
* discussion of crude absorbing strongly under 400nm, so need for shorter optical lengths ~1mm instead of 5-10mm (related to [sample container discussion](/notes/warren/08-14-2014/sample-container-search))
* experimentally derived emission maxima for Black Sea "East Swan" crude at 460nm, diesel oil at 438nm, and kerosene at 408nm in various mixes with soil -- these are in the visible range, so we could detect them if we could generate them with our 405 nm laser.

[![moise.png](https://i.publiclab.org/system/images/photos/000/006/272/large/moise.png)](https://i.publiclab.org/system/images/photos/000/006/272/original/moise.png)


###Field performance of a laser fluorosensor for the detection of oil spills

O’neil, R. A., L. Buja-Bijunas, and D. M. Rayner. "Field performance of a laser fluorosensor for the detection of oil spills." Applied Optics 19.6 (1980): 863-870. ([Google Scholar](http://scholar.google.com/scholar?cluster=9773828603296335587&hl=en&as_sdt=0,22))

* airborne, remote detection from a distance (a telescope pointed at the same point as a laser)
* tested in a dye spill vs. two crude oil spills, vs. background ocean water
* 380-700nm range sensing -- visible range and within our [spectrometer's abilities](/wiki/spectrometer)
* UV filter removes laser backscatter, so you don't see a spike where the UV is
* 337nm exitation (nitrogen laser) -- well below our 405nm laser. 
* plot of flight path vs. intensity at 20nm intervals, nice (see below)

[![flight.png](https://i.publiclab.org/system/images/photos/000/006/273/medium/flight.png)](https://i.publiclab.org/system/images/photos/000/006/273/original/flight.png)


###Fiber-optic laser-induced fluorescence probe for the detection of environmental pollutants

Bublitz, J., et al. "Fiber-optic laser-induced fluorescence probe for the detection of environmental pollutants." Applied optics 34.18 (1995): 3223-3233. ([Google Scholar](http://scholar.google.com/scholar?cluster=821324864754875152&hl=en&as_sdt=0,22))

* 337nm laser
* studied oil and sewer contamination, and a gas station
* organic matter fluoresced at 350-600, but up to 10mg/L addition of engine oil did not significantly change intensity -- so for small amounts of oil, organic matter could be a false positive
* looked at time-resolved laser induced fluorescence (LIF), which means brightness decay over time, did help to quantify hydrocarbons, as measured in <100 nanoseconds (way shorter than we can measure with a webcam)
* humic acid is indeed from humic substances, and shows fluorescence between 350-600nm


###Fluorescence spectroscopy of polynuclear aromatic compounds in environmental monitoring

Kumke, M. U., H-G. Löhmannsröben, and Th Roch. "Fluorescence spectroscopy of polynuclear aromatic compounds in environmental monitoring." Journal of Fluorescence 5.2 (1995): 139-152. ([Google Scholar](http://scholar.google.com/scholar?cluster=1708176943590633861&hl=en&as_sdt=0,22))

* discussion of effects of polynuclear aromatic compounds (PAC, related to PAH), on human health
* "soil cleanup threshold" published by the World Health Organization and Dutch regulations: >200mg/kg
* "natural background" of PACs in rural soils estimated at <0.1mg/kg, highly contaminated sites >400mg/kg
* explains uses of in-situ monitoring: interest in high sensitivity, selectivity, discrimination from background environmental signals, speed of procedure, nonintrusive remote measurement at good spatial resolution, compact and rugged for field use


###Monitoring and assessment of toxic metals in Gulf War oil spill contaminated soil using laser-induced breakdown spectroscopy

Hussain, T., and M. A. Gondal. "Monitoring and assessment of toxic metals in Gulf War oil spill contaminated soil using laser-induced breakdown spectroscopy." Environmental monitoring and assessment 136.1-3 (2008): 391-399. ([Google Scholar](http://scholar.google.com/scholar?cluster=12655124871648727308&hl=en&as_sdt=0,22))

This one wasn't really related to the Oil Testing Kit, and is a different kind of spectrometry, but since folks have been interested in [detecting heavy metals](/tag/heavy-metals), I thought we ought to look into it sometime. I think a ~1100nm laser (which is what a green laser is, with a frequency doubling crystal on the front) could be found strong enough to make sparks...?

* firing 1 joule of 1064nm laser at a compressed pellet of solid sample to detect aluminum, magnesium, calcium, chromium, titanium, strontium, iron, barium, sodium, potassium, zirconium, and vanadium
* it generates sparks and plasma, and detected peaks in the 390-650nm range
* good citations, worth another look

###Detection of metals in the environment using a portable laser-induced breakdown spectroscopy instrument

Yamamoto, Karen Y., et al. "Detection of metals in the environment using a portable laser-induced breakdown spectroscopy instrument." Applied spectroscopy 50.2 (1996): 222-233. ([Google Scholar](http://scholar.google.com/scholar?cluster=16558665767639502569&hl=en&as_sdt=0,22))

Same deal; unrelated but really cool way to detect metals!

* uses a 15kg instrument, 46x33x24cm, 115v AC
* Ba, Be, Pb, and Sr in soils
* Pb in paint, Be and Pb particles on filters
* ppm detection limits in soils: 265 Ba, 9.3 Be, 298 Pb, 42 Sr
* 8000ppm for Pb in paint, 0.052mg/cm^2, but using 220.35nm Pb(II) line instead of stronger 405.78nm line
* detection limit for particles on filters was 5.6ug/cm^2

###Questions and next steps

More reading and summarizing! All of this led me to many more papers. But it also brought lots of insights and things we should try out. It refocused attention on beam path through the sample -- inspiring some of the nanodrop and narrow beampath containers in the other note I published today, and had encouraging details about fluorescence data in the visible range where our device can work. Also we learned a bit about humic fluorescence from plant matter, and to watch out for it messing with our results! In particular, the article near the top (and the lead image) discussed "fluorescence saturation" and that humic fluorescence has a red shift when you hit it with "lots" of light, whereas heavier petroleums have a blue shift. Among other things we learned that fluorescence lifetime (how it fades over time) is a great technique for distinguishing oils, but happens too fast (<100 nanoseconds) for us to be able to use it. Maybe the [Photosynq could do it?](/tag/photosynq)

Lots of papers talked about how great synchronous scanning fluorescence spectroscopy (SFS) is, but that'd require some major advances over our current design. I did have an interesting idea about stacking 2 spectrometers, one at 90 degrees from the other, and using the first to generate differentiated light along the slit of the second, resulting in a 2D matrix of exitation/emission data, but getting enough light into the sample to actually produce fluorescence would be quite difficult. Worth a try someday!

###Why I'm interested

We'd really like to situate the [Oil Testing Kit](/wiki/oil-testing-kit) better in the scientific literature, and this is also a great way to get new ideas for methodologies, etc.