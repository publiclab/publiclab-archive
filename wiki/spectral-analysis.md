---
title: "Spectral analysis"

tagnames: 'spectrometer, spectrometry, methodologies, location:blurred, lat:-32, zoom:7, place:argentina, lon:-64'
author: warren
path: /wiki/spectral-analysis.md
nid: 3394
uid: 1
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/015/478/original/tmp_3803-Screenshot_2015-07-30_at_11.12.17_AM1710726510.png)

# Spectral analysis

by [warren](/profile/warren), [jamesbond007](/profile/jamesbond007), [Jasonchoi82222](/profile/Jasonchoi82222), [chongyukwai](/profile/chongyukwai), [mchapman87501](/profile/mchapman87501)

August 22, 2012 16:31 | Tags: [spectrometer](/tag/spectrometer), [spectrometry](/tag/spectrometry), [methodologies](/tag/methodologies), [location:blurred](/tag/location:blurred), [lat:-32](/tag/lat:-32), [zoom:7](/tag/zoom:7), [place:argentina](/tag/place:argentina), [lon:-64](/tag/lon:-64)

----

##Intro

This is a page to compile, share, and publish research about near-ultraviolet, visible, and near-infrared spectroscopy/spectrometry analysis techniques. Not all will be applicable to our DIY spectrometer, but many are a good starting point for investigation. **If you want to publish research, post it on the Public Lab site and you can add it here too.** 

If you'd like to try applying some of this research, take a look at the [Spectrometry Activities page](/wiki/spectrometry-activities) and the [Spectrometry Sampling](/wiki/spectrometry-sampling) guide.

##Databases

First, let's start with some already available spectral databases, many of which may be **very** difficult to search or use, but which can be used as a basis for identification. Perhaps some could eventually be imported into Spectral Workbench.

* http://daihassan.tripod.com/id22.html
* http://www.ftirsearch.com/default2.htm (and [usage instructions](/notes/warren/2-18-2013/spectraonlinecom-spectrum-searching))
* NIST database: http://physics.nist.gov/PhysRefData/ASD/lines_form.html (atomic emission spectra)
* [HITRAN database](http://hitran.iao.ru/molecule) ([posted by warren](http://publiclaboratory.org/notes/warren/12-10-2010/using-hitran-database-spectral-analysis))
* http://nautilus.fis.uc.pt/st2.5/index-en.html ([posted by b.williams](http://publiclaboratory.org/notes/bwilliams/10-1-2012/specta-reference-libaray))
* ASTER (JPL/NASA) library for remote-sensing (satellite-collected) spectra of surface materials like asphalt or granite: http://speclib.jpl.nasa.gov/ ([online copy here](http://archive.publiclab.org/aster-spectral-library/)) (but mostly in the thermal range, so not very useful for the Public Lab spectrometer)
* http://webmineral.com/help/FlameTest.shtml - no line data, just images. But they can be uploaded for comparison -- they are cited to a 1906 publication by Brush & Penfield, so are out of copyright.

##Compiled research

Some of the below papers describe other types of spectroscopy such as mid-infrared (MIR) or Fourier-transform infrared (FTIR) and the data they present will not be compatible/comparable with that which we gather in the 400-900nm range. But their methodologies may be a useful reference for those looking to reach similar results in the range our instruments can detect.

For each use case below, there might be several approaches to analysis. Read more about different kinds of spectrometry such as fluorescence, absorption, and flame emission spectrometry here: [Spectral Analysis Techniques](/wiki/spectral-analysis-techniques)

###Household products

* [Laundry detergent](https://spectralworkbench.org/tag/detergent) (for dyes)
* Read over some [published research on how to do this](/notes/joshmc/4-28-2012/setup-uv-testing-specrtrometer) by [JoshMC](/profile/joshmc)

###Metals and soil

* Use tag "[soil](https://spectralworkbench.org/tag/soil)"
* [Sodium, aluminum, barium and mercury in soil](http://blog.makezine.com/laboratory-54-examine-the-spectrosc/) (Makezine.com)
* Method for spectrophotometric determination of amenable cyanide:
http://www.epa.gov/osw/hazard/testmethods/sw846/pdfs/9014.pdf
  * http://www.saimm.co.za/Journal/v083n01p011.pdf - "The most successful of these methods is the variation proposed by Epstein3, which involves the oxidation of cyanide to cyanogen chloride with chloramine-T. The cyanogen chloride is then reacted with pyridine containing pyrazolones, and the blue colour produced is measured at 630 nm. This method is sensitive, and can be used in acid, neutral, or slightly alkaline media."

**Atomic emission spectra databases:**

* [HITRAN database](http://hitran.iao.ru/molecule) ([posted by warren](http://publiclaboratory.org/notes/warren/12-10-2010/using-hitran-database-spectral-analysis))
* http://nautilus.fis.uc.pt/st2.5/index-en.html ([posted by b.williams](http://publiclaboratory.org/notes/bwilliams/10-1-2012/specta-reference-libaray))

* Oil/coal contamination
  * laser fluorescence: 
    * http://publiclaboratory.org/notes/warren/7-18-2012/fluorescence-oil-spill-residue-diverse-spectrometer-use
    * http://publiclaboratory.org/notes/warren/7-26-2012/oil-residue-preparation-spectroscopy
  * Tag: https://spectralworkbench.org/tag/oilspill

###Beer/brewing

* Use tag "[beer](https://spectralworkbench.org/tag/beer)"
* http://publiclaboratory.org/notes/warren/8-28-2012/spectral-yeast-tests-mystic-brewery
* [Quantifying ethanol content of beer using interpretive near-infrared spectroscopy](http://www.mendeley.com/research/quantifying-ethanol-content-beer-using-interpretive-near-infrared-spectroscopy/)
* [Applications of Vibrational Spectroscopy in Brewing](http://onlinelibrary.wiley.com/doi/10.1002/0470027320.s6502/abstract) (may be behind paywall)
* [Rapid Determination of Bitterness in Beer 
Using Fluorescence Spectroscopy 
and Chemometrics](http://www.skotrat.com/go/default/?LinkServID=5D45FB60-A023-B7AC-6BD7F79FC2F655CE&showMeta=0)

###Wine & grapes

* Use tag "[wine](https://spectralworkbench.org/tag/wine)"
* http://publiclaboratory.org/notes/warren/1-19-2012/wine-spectroscopy-adam-hasler
* [UV-VIS Spectroscopy of Tannins and Phenols in Red Wine](http://www.globalspec.com/reference/6563/UV-VIS-Spectroscopy-of-Tannins-and-Phenols-in-Red-Wine)
* [Vintage year determination of bottled Chinese rice wine by VIS-NIR spectroscopy](http://www.ncbi.nlm.nih.gov/pubmed/17995801)
* [Near infrared spectroscopy as a rapid tool to measure volatile aroma compounds in Riesling wine: Possibilities and limits](http://era.deedi.qld.gov.au/992/)

###Coffee

* Use tag "[coffee](https://spectralworkbench.org/tag/coffee)"
* http://publiclaboratory.org/notes/warren/8-29-2012/testing-coffee-spectra-toscaninis
* [Discrimination of Arabica and Robusta in Instant Coffee by Fourier Transform Infrared Spectroscopy and Chemometrics](http://www.mendeley.com/research/discrimination-arabica-robusta-instant-coffee-fourier-transform-infrared-spectroscopy-chemometrics-1/)
* [Discrimination of organic coffee via Fourier transform infrared-photoacoustic spectroscopy](http://www.mendeley.com/research/discrimination-organic-coffee-via-fourier-transform-infrared-photoacoustic-spectroscopy/)
* [Determination of caffeine in decaffeinated coffee by NIR 
spectroscopy](http://www.camo.com/downloads/resources/application_notes/decaffeinated_coffee_NIR_spectroscopy.pdf)

###Coral/Aquariums/Grow lights

* GiulianoM's work on [coral reef lighting](http://www.atlantareefclub.org/forums/showthread.php?s=3ff4c2efe002de643743d2ccbd4d6b49&t=66297&page=5) with custom LEDs
  * he references [this article on the same topic at AdvancedAquarist](http://www.advancedaquarist.com/2012/3/aafeature?utm_source=nivoslider&utm_medium=slider&utm_campaign=clickthru)
* Mediamatic's work on [measuring grow lights](http://mediamatic.net/319662/en/led-growing-light-analyses) in aquaponics

###Agricultural uses

* [Spectral analysis of nitrogen levels based on visible-light spectroscopy](http://www.csir.co.za/enews/2012_july/16.html)
* Crops, grains, fruits, vegetables, beverages, fats, oils, dairy, eggs, etc etc. [in near-infrared spectroscopy](https://docs.google.com/viewer?a=v&q=cache:nOmy0bzlX8AJ:plantsci.missouri.edu/roberts/NIRmonograph.pdf+&hl=en&gl=us&pid=bl&srcid=ADGEESgSOr3uhxdMsfYxrIchmC9K9H0leBfGOyw8t94Xa_Ft6CU3mDXECwjaICznsEIPBrmpsH-hzONA5cngKDSFUs-SvfWaZqI2xLgs7_aFzcMdqw7DA8KLwUbTaZub3FyhdAWAFQjR&sig=AHIEtbSLVnHpiRhKBKdDxNmBDB2PgWIG9w)
* [predicting N, OM, and pH in soil with near-infrared spectroscopy](http://spie.org/documents/Newsroom/Imported/164/2006040164.pdf) (however, uses up to 2500nm)

###DNA/RNA

* [DIYBio discussion](https://groups.google.com/forum/?fromgroups=#!topic/diybio/2N5UG7HzRYg)

###Urine 

###Astronomy


###Food Contamination Detection

* [NIR Spectroscopy for Detection and Quantification of Adulterants in Fresh and Thawed Minced Beef Using Linear and Non-linear Models](http://cigr.ageng2012.org/images/fotosg/tabla_137_C1778.pdf) (detection of pork, fat, offal)

* [THE ADVANCEMENT OF SPECTROSCOPIC SENSORS/CHEMOMETRIC ANALYSIS/BIOBASED PRODUCTS FOR QUALITY ASSESSMENT OF FIBER, GRAIN, AND FOOD COMMODITIES](http://www.ars.usda.gov/research/publications/publications.htm?seq_no_115=249599) (detection of soy)

* [The development of near infrared (NIR) spectroscopy calibrations for the prediction of wheat and flour quality](http://www.hgca.com/cms_publications.output/2/2/Publications/Final%20project%20reports/The%20development%20of%20near%20infrared%20(NIR)%20spectroscopy%20calibrations%20for%20the%20prediction%20of%20wheat%20and%20flour%20quality.mspx?fn=show&pubcon=345) (detection of wheat gluten?)
