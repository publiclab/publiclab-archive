---
title: "Laser Pointers and the LIF Literature"

tagnames: 'spectrometer, uv, laser, fluorescence, oil-testing-kit, literature-review'
author: mathew
path: /notes/mathew/09-17-2014/laser-pointers-and-the-lif-literature.md
nid: 11150
uid: 4
cids: 10409
---

![](https://publiclab.org/public/system/images/photos/000/006/850/original/Screen_Shot_2014-09-17_at_1.04.55_PM.png)

# Laser Pointers and the LIF Literature

by [mathew](/profile/mathew) | September 17, 2014 23:40

September 17, 2014 23:40 | Tags: [spectrometer](/tag/spectrometer), [uv](/tag/uv), [laser](/tag/laser), [fluorescence](/tag/fluorescence), [oil-testing-kit](/tag/oil-testing-kit), [literature-review](/tag/literature-review)

----

*LIF stands for Laser Induced Fluorescence.

###What I want to do
I want to answer three questions through reviewing peer-reviewed journal articles, with short answers below, and add this information to the [oil testing kit literature review](/wiki/oil-testing-kit-literature):

* What equipment in the literature is the [oil testing kit](/wiki/oil-testing-kit) most like? 
  * answer: airborne UV fluorescence LIDAR.
* What results does the equipment in the literature produce? 
  * answer: distinguishing crude oil into 3-8 grades (Hengstermann 1992), distinguishing between humic acid and natural oils and crude.
* Is our equipment similar enough to produce the same results, 
  * answer: probably.
  * Specifically, are the differences in laser frequency between our laser pointer and the gas lasers in the literature going to be a problem?
     * answer: probably not.

###What Equipment in the literature is most similar to the oil testing kit?

####What our equipment isn't able to do
Most of the contemporary articles in the [fluorescence literature](/wiki/oil-testing-kit-literature) (1990-today) focus on two methods, Synchronous Scanning Fluorescence and fluorescent decay.  Synchronous Scanning Fluorescence illuminates a sample with a precise light source from a monochronometer (essentially a reverse spectrometer that allows the selection of just a single color.) and takes a series of measurements at regular intervals, stepping up through the spectrum while also measuring fluorescence at an offset point, 20nm higher, for instance.  Fluorescent decay is the time it takes a material to stop fluorescing after the light source is removed.  This is usually measured in nanoseconds and outside the capability of our spectrometer.   Both techniques can be combined to generate a record of decay across a synchronous scan.

Neither of these methods are within the capabilities of our spectrometer, however there may be techniques similar to synchronous scanning we can empoly, which I'll cover in a followup note.

####What our equipment is is similar to
@warren found an article by [O’neil et al, 1980](/notes/warren/08-14-2014/continued-literature-review-for-the-oil-testing-kit#Laser+spectroscopy+of+mineral+oils+on+the+water+surface) that discussed measuring fluorescence from an airborne LIDAR (Light Induced Detection and Ranging) system flying over oceanic oil spills.  Essentially a laser and a telescope pointing at the same laser point.  An article by [Moise et al](/warren/08-14-2014/continued-literature-review-for-the-oil-testing-kit#Laser+spectroscopy+of+mineral+oils+on+the+water+surface) that also mentioned fluorescence in a lab.  These lab tests were a verification of a LIDAR flourescence system, and this is the equipment our device is most similar too, since it measures just the fluorescence profile of the oil, without either a Synchronous Scanning Fluorescence or the fluorescence decay. 

These airborne LIDAR systems were developed during the seventies and eighties. I was able to find additional articles about this technique.

#####Angle of Laser to Spectrometer

O'Neil's team used a device of this design (O'Neil 865):

[![Screen_Shot_2014-09-17_at_12.55.16_PM.png](https://i.publiclab.org/system/images/photos/000/006/843/medium/Screen_Shot_2014-09-17_at_12.55.16_PM.png)](https://i.publiclab.org/system/images/photos/000/006/843/original/Screen_Shot_2014-09-17_at_12.55.16_PM.png)

The most prominent difference between this and the Public Lab oil testing kit is that a one-way mirror is used to project the laser downwards along the same path as the spectrometer is pointed.  The fluorescence measured is therefore reflected back 180 degrees instead of 90, as in the perpendicular arrangement of our oil testing kit.

[![oil testing kit](//i.publiclab.org/system/images/photos/000/003/153/original/jars-laser-spec.jpg)](//i.publiclab.org/system/images/photos/000/003/153/original/jars-laser-spec.jpg)

This may not be a big deal, as other airborne systems of a similar vintage often put the laser at something less than 180 degrees (Bristow 107):

[![Screen_Shot_2014-09-17_at_1.04.55_PM.png](https://i.publiclab.org/system/images/photos/000/006/845/medium/Screen_Shot_2014-09-17_at_1.04.55_PM.png)](https://i.publiclab.org/system/images/photos/000/006/845/original/Screen_Shot_2014-09-17_at_1.04.55_PM.png)

The different angle may effect our ability to use the backscatter of the laser to measure fluorescence efficiency, which may improve our data, if we can measure it.

#####Intensity and fluorescence efficiency

As noted by Hengstermann:
"all spectra have been normalized to unit total fluorescence intensity observed in the entire spectral range from 311 to 700n.  This has the advantage that the detector system must not be calibrated in absolute units. But the classification of curse does only consider the shape of the spectrum and makes no use of absolute fluorescence intensity."

So we don't need intensity calibrated (which we don't have right now) to get good results , but we may need a linear response to understand the fluorescence efficiency of our measurements... unless normalization of spectra across recorded fluorescences/concentrations is enough, which it may be, as @warren [pointed out](/notes/warren/08-14-2014/continued-literature-review-for-the-oil-testing-kit#Laser+spectroscopy+of+mineral+oils+on+the+water+surface) in his summary of [Patsayeva, S., et al's research](http://eproceedings.org/static/vol01_1/01_1_patsayeva1.pdf)

[![spectral normalization](//i.publiclab.org/system/images/photos/000/006/271/original/normalized.png)](//i.publiclab.org/system/images/photos/000/006/271/original/normalized.png)

#####Laser wavelength
We are using a 405nm laser, while the majority of laser induced fluorescence experiments have been conducted with 337nm nitrogen lasers, and some with XeCl lasers (308nm), Nd:YAG Lasers (355nm) (Patsayeva et al).  Will this dramatically change our results?

This quote from Johnson et. al is echoed elsewhere, but says it the best:

"For the large organic mole­cules of interest here, the relative shape of the fluorescence emission spectrum is independent of the excita­tion wavelength; conversely, the relative shape of the excitation spectrum is independent of the wavelength at which the emission is monitored. If the absorbance of the sample is low enough and the spectral variation of the excitation source is properly ac­counted for, the excitation spectrum will closely resemble the absorption spectrum."

So we are likely to get similar fluorescence even though we've chosen a higher wavelength.  That said we'll probably miss some components.  11 of the 16 polyaromatic hydrocarbons (PAHs) classified as priority pollutants by the EPA have maximum fluorescence peaks below 405nm;
Naphthalene, Acenaphthene, Fluorene, Phenanthrene Pyrene, Anthracene, Benzo[k]fluoranthene, Benzo[a]pyrene, Dibenz[a,h]anthracene Chrysene, Benz[a]anthracene. 
from Table I, Kumke et al.

[![Screen_Shot_2014-09-16_at_6.40.40_PM.png](https://i.publiclab.org/system/images/photos/000/006/849/medium/Screen_Shot_2014-09-16_at_6.40.40_PM.png)](https://i.publiclab.org/system/images/photos/000/006/849/original/Screen_Shot_2014-09-16_at_6.40.40_PM.png)

While this may seem problematic, the overall peak fluorescence of crude oils is above 405nm (equipment in the literature, below). 

#####Conclusions on replication of LIDAR fluorescence devices capabilities
So it seems like we should be able to reproduce the results of early eighties gross fluorescence systems without further improvements in calibration, so long as we can get bright enough spectra. nice!

###What results does the equipment in the literature produce? 

It is repeatedly pointed out how difficult it is to actually isolate a specific component of a hydrocarbon mixture, and how fluorescence alone can't do it:

Bristow:
"Unfortunately, long wave UV excitation of crude oxls produces visible fluorescence emission spectra which are broad and featureless and as such do not provide for unambiguous oil spill identification or char- acterization."

Johnson et al:
"analysis of a sin­gle component will be subject to inter­ferences from other fluorescent components, and that the simultaneous analysis of several components will be frustrated by spectral overlaps."

Kumke:
"The detection of PAC in the environment is usually accompanied by the necessity of multicomponent analysis because most real contaminations consist of complex mixtures, such as, e.g., mineral oils or oil products. "

However, Hengstermann & Reuter point out:

"fluorescence spectra of different oils show characteristic variabilities of their intensity and spectral shape, which allow one to differentiate mineral oils according to the main oil classes (4-11) Examples of fluorescence spectra measured on samples of North Sea crude oil are shwn in Fig. 2. In the same way, these crude oils can be discriminated from heavy fuel, and from less harmful substances like fish oil or vegetable oil, Fig. 3, which can also be responsible for surface slicks resembling those consisting of mineral oil...

Recording the shape of the spectrum obtained at those parts of an oil spill where the optically thick parts of oil can be located provides a method for estimating the oil type. With UV excitation, light oils are characterized by strong fluorescence at blue wavelengths, and the fluorescence yield of heavy oils is markedly re- duced with maximum values in the green part of the spectrum."

This is good news. it means the green-blue shift for determining the grade of crude that @warren discovered in [Patsayeva, S., et al](//publiclab.org/notes/warren/08-14-2014/continued-literature-review-for-the-oil-testing-kit#Laser+spectroscopy+of+mineral+oils+on+the+water+surface) is possible without measuring decay or other more sophisticated methods.  Also, Hoge et al point out that the peak of Venesuela heavy crude is 490nm, while that of light Murban crude is 505nm (table L).  So it appears that this blue/green shift in the peak is well aboce 405nm and won't substantially effect our ability to detect it.  and as Hengstermann points out in 1992, we should be able to determine at least 3 and perhaps as many as 8 grades of crude.

###Questions and next steps

Is the 90 degree measurement of fluorescence to the laser an issue for determining the fluorescence efficiency? Or better-- is normalization of the peaks of spectra enough to compare different measurements without accounting for fluorescence efficiency?


###Citations 

D. W. Johnson,1 J. B. Callis,2 and G. D. Christian1, Rapid Scanning Fluorescence Spectroscopy, Anal. Chem. VOL. 49 NO, 747 A. 8 JULY 1977.[PAYWALL](http://pubs.acs.org/doi/abs/10.1021/ac50016a769)

M P F. BRISTOW, Airborne Monitoring of Surface Water
Pollutants by Fluorescence Spectroscopy, REMOTE SENSING OF ENVIRONMENT 7,105-127, 1978. [PAYWALL](http://www.sciencedirect.com/science/article/pii/0034425778900421)

O’neil, R. A., L. Buja-Bijunas, and D. M. Rayner. "Field performance of a laser fluorosensor for the detection of oil spills." Applied Optics 19.6 (1980): 863-870. ([Google Scholar](http://scholar.google.com/scholar?cluster=9773828603296335587&hl=en&as_sdt=0,22)) - [summary](/notes/warren/08-14-2014/continued-literature-review-for-the-oil-testing-kit#Field+performance+of+a+laser+fluorosensor+for+the+detection+of+oil+spills)

F. E. Hoge and R. N. Swift, Oil film thickness measurement using airborne laser-induced water Raman backscatter, APPLIED OPTICS Vol. 19, No. 19  3269,  1 October 1980.[PAYWALL](https://www.opticsinfobase.org/ao/abstract.cfm?uri=ao-22-23-3778)

[Theo Hengstermann and Rainer Reuter, Lidar fluorosensing of mineral oil spills on the sea surface, APPLIED OPTICS Vol. 29, No. 22, 1 August 1990. ](http://las.physik.uni-oldenburg.de/publications/paper/ao291990.pdf)

Paolo Camagni et. al, Fluorescence response of mineral oils: spectral yield vs absorption and decay time. APPLIED OPTICS Vol. 30, No.,  1 January 1991.

[T. Hengstermann and R. Reuter, Laser Remote Sensing of Pollution of the Sea: a Quantitative Approach, EARSeL Advances in Remote Sensing, Vol. 1, No. 2-II, 1992.](mobile.www.eproceedings.org/Advances/1-2-1992/1-2_09_Henstermann.pdf)

Allen R. Muroski, Karl S. Booksh,† and M. L. Myrick*, Single-Measurement Excitation/Emission Matrix Spectrofluorometer for Determination of Hydrocarbons in Ocean Water. 1. Instrumentation and Background Correction, Anal. Chem. 68, 3534-3538, 1996.

Patsayeva, S., et al. "Laser spectroscopy of mineral oils on the water surface." EARSeL eProceedings 1.1 (2000): 106-114. ([PDF](http://eproceedings.org/static/vol01_1/01_1_patsayeva1.pdf), [Google Scholar](http://scholar.google.com/scholar?cluster=3403704072963690377&hl=en&as_sdt=0,22)) -  [summary](/notes/warren/08-14-2014/continued-literature-review-for-the-oil-testing-kit#Laser+spectroscopy+of+mineral+oils+on+the+water+surface)

Moise, N., Aurelia Vasile, and Mihail-Lucian Pascu. "Measuring of water and soil contamination with oil components using laser-induced fluorescence transmitted through optical fibers." ROMOPTP'94: 4th Conference on Optics. International Society for Optics and Photonics, 1995. ([Google Scholar](http://scholar.google.com/scholar?cluster=5514086661255142525&hl=en&as_sdt=0,22)) - [summary](/notes/warren/08-14-2014/continued-literature-review-for-the-oil-testing-kit#Measuring+of+water+and+soil+contamination+with+oil+components+using+laser-induced+fluorescence+transmitted+through+optical+fibers)

Bublitz, J., et al. "Fiber-optic laser-induced fluorescence probe for the detection of environmental pollutants." Applied optics 34.18 (1995): 3223-3233. ([Google Scholar](http://scholar.google.com/scholar?cluster=821324864754875152&hl=en&as_sdt=0,22)) - [summary](/notes/warren/08-14-2014/continued-literature-review-for-the-oil-testing-kit#Fiber-optic+laser-induced+fluorescence+probe+for+the+detection+of+environmental+pollutants)

Kumke, M. U., H-G. Löhmannsröben, and Th Roch. "Fluorescence spectroscopy of polynuclear aromatic compounds in environmental monitoring." Journal of Fluorescence 5.2 (1995): 139-152. ([Google Scholar](http://scholar.google.com/scholar?cluster=1708176943590633861&hl=en&as_sdt=0,22)) - [summary](/notes/warren/08-14-2014/continued-literature-review-for-the-oil-testing-kit#Fluorescence+spectroscopy+of+polynuclear+aromatic+compounds+in+environmental+monitoring)

###Bonus Jargon!

Just look at all these acronyms. Look at them! From Kumke, et al.

"Abbreviations used: DF, delayed fluorescence; EEM, excitation- emission matrix; EPA, U.S. Environmental Protection Agency; FIA, flow injection analysis; FOCS, fiber optical chemical sensors; FTIR, Fourier transform infrared; LAMMA, laser microprobe mass analysis; LIDAR, light-induced detection and ranging; LIF, laser-induced fluorescence; LOD, limit of detection; MALDI, matrix-assisted laser desorption/ionization; MPI, multiphoton ionization; OSA, optical spectrum analyzer; PAC, polynuclear aromatic compound; PAS, pho- toelectrical aerosol sensor; RAFA, rank annihilation factor analysis; RTP, room-temperature phosphorescence; SDW, soil dry weight; SERS, surface enhanced Raman spectroscopy; SIMS, secondary ion mass spectroscopy; SIT, silicon intensified target; TDGC/MS, thermal desorption-gas chromatography/mass spectrometry; TFA, total fluorescence analysis; THEES, total human environmental exposure study; TTA, triplet-triplet annihilation; UMC, uncorrected matrix correlation; WHO, World Health Organization."