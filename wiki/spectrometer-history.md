---
nid: 10691
title: Spectrometer History
path: public/static/wiki/spectrometer-history.md
uid: 4
tagnames: spectrometer,parent:spectrometry
---

# Spectrometer History

Here is a history of public lab spectrometer research ideas up to the present.  There is really no analysis here, just a catalog. 

###Theory

#####relationships between spectrometer components

[dhaffner's notes on slit width and its effects on the appearance of spectra are well thought out-- but over my head](/notes/dhaffner/3-6-2012/notes-method-estimate-slit-width-plots-type-spectrometers-using-reference-at)
[![convolution05_0.gif](https://i.publiclab.org/system/images/photos/000/005/273/medium/convolution05_0.gif)](https://i.publiclab.org/system/images/photos/000/005/273/original/convolution05_0.gif)

[cfastie's](/profile/cfastie) also investigated [slit width and the relationship between the distance between the slit and the grating](/notes/cfastie/2-5-2013/grating-angle) to produce some charts on the relationship.

<iframe width="560" height="315" src="//www.youtube.com/embed/TsAuPoEp9RU" frameborder="0" allowfullscreen></iframe>

#####Comparing Spectra

Warren [found](/notes/warren/3-2-2011/spectral-comparison-tutorial-amateur-astronomers) some open source software for normalizing the intensity of spectra. Its called [VSpec](http://www.astrosurf.com/vdesnoux/tutorial2.html).

###Sampling techniques

#####UV Fluorescence
[the beginnings of UV Fluorescence research are Warren's](/notes/warren/5-25-2011/excerpts-using-uv-and-ir-oil-slick-identification), and Alex McCarthy picked up on warren's research and provided a number of peer-reviewed papers on the subject of [UV Spectroscopy](/notes/alex-mccarthy/4-8-2011/spectrometry-urop-4811-update).

[ELECTRONIC SPECTROSCOPY OF MEDIUM-SIZED POLYCYCLIC AROMATIC HYDROCARBONS, M. Steglich et al. 2010 ApJ 712 L16](http://iopscience.iop.org/2041-8205/712/1/L16/article;jsessionid=5044E02CBE466C3D79F880086B514794.c3)

[Analysis of Crude Petroleum Oils Using Fluorescence Spectroscopy, Reviews in Fluorescence, Geddes, Chris D., Lakowicz, Joseph R. 2005](http://link.springer.com/chapter/10.1007%2F0-387-23690-2_8)

[Near-Real Time UV Fluorescence Technique for Characterization of PAHs in Marine Sediment, NFESC TDS-2075-ENV, 2000](costperformance.org/monitoring/pdf/uvfluorescence_2.pdf)

[What is Crude Oil, Turner Designs](http://www.turnerdesigns.com/t2/doc/appnotes/S-0079.pdf)

Alex McCarthy also began doing [UV fluorescence on laundry detergents](/notes/alex-mccarthy/4-16-2011/spectrometry-urop-41611-update).  [JoshMC's note on UV fluorescence was a replication and expansion of Alex's research](/notes/joshmc/4-28-2012/setup-uv-testing-specrtrometer)

In the end of 2013 warren succeeded in[ demonstrating some fluorescence of crude oil](/warren/11-08-2013/fluorescence-of-bp-oil-with-uv-laser-success) using a 405nm laser, and [we put together a kit](/notes/mathew/02-22-2014/20-oil-testing-kits-draft-1). 

#####Raman Spectroscopy
[Dusjagr](/profile/dusjagr) has posted about [Raman spectroscopy on Public Lab](/notes/dusjagr/04-28-2013/raman-spectroscopy) and in more extensivelly at [Hackteria](//hackteria.org/wiki/index.php/DIY_spectroscopy#Raman_Spectroscopy).  Dusjagr points out several peer-reviewed papers and resources.

[Developing Tools for Undergraduate Spectroscopy: An Inexpensive Visible Light Spectrometer, Vanderveen et al. J. Chem. Educ., 2013, 90 (7), pp 894–899](//pubs.acs.org/doi/abs/10.1021/ed300396x?journalCode=jceda8)

[Raman spectroscopy for the undergraduate physical and analytical laboratories, Douglas B. Galloway et al. J. Chem. Educ., 1992, 69 (1), p 79](//pubs.acs.org/doi/abs/10.1021/ed069p79?journalCode=jceda8)

[Inexpensive Raman Spectrometer for Undergraduate and Graduate Experiments and Research, Christian Mohr  et al., J. Chem. Educ., 2010, 87 (3), pp 326–330](http://pubs.acs.org/doi/abs/10.1021/ed800081t?journalCode=jceda8)

[Raman Spectroscopy on ScienceMadness Forums](http://www.sciencemadness.org/talk/viewthread.php?tid=23422)


###Calibration

calibration with a fluorescent bulb's mercury lines is [fine for linear calibration of spectra](/notes/stoft/05-17-2014/plab-s-webcam-non-linearity) as shown by [stoft](/profile/stoft), but intensity calibration requires further research.

#####intensity calibration
An extensive and ongoing discussion about intensity calibration was [started by tomh in 2012](/notes/tomh/9-19-2012/intensity-calibration). [straylight](/profile/straylight) suggested this paper on calibration with tungsten bulbs.

[ABSOLUTE OPTICAL CALIBRATION USING A SIMPLE TUNGSTEN LIGHT
BULB EXPERIMENT, M. J. Kosch et al. Communication Systems, Lancaster University](http://eprints.lancs.ac.uk/6736/1/inproc_326.pdf)


###Construction

#####Early Sketches
Jeff [Warren](/profile/warren) kicked off the spectrometry project as a means to do oil identification, and [the beginnings](/notes/warren/5-25-2011/excerpts-using-uv-and-ir-oil-slick-identification) of our contemporary UV fluorescence kit can be seen in his late 2010-early 2011 notes along with research to determine if [hydrocarbon identification](http://publiclab.org/notes/warren/12-10-2010/methane-absorption-band-around-1100nm) would be possible with low cost [CMOS](http://publiclab.org/notes/warren/12-12-2010/can-we-use-back-illuminated-cmos-video-cameras-uv-imaging), or [CCD](http://publiclab.org/notes/warren/12-12-2010/front-illumination-ccds-used-digital-cameras-dont-perform-well-uv) -based hacked devices.

[Alex McCarthy](profile/Alex-McCarthy)'s early 2011 research was instrumental to our contemporary spectrometer designs, and the rudiments of the fold-up spectrometer [can be seen in their designs.](/notes/alex-mccarthy/4-8-2011/spectrometry-urop-4811-update). [2](/notes/alex-mccarthy/4-16-2011/spectrometry-urop-41611-update). 

[![Alex McCarthy's first spectrometer design](https://publiclab.org/sites/default/files/imagecache/default/PD%20vs%20PL.png)](https://publiclab.org/sites/default/files/imagecache/default/PD%20vs%20PL.png)

An interesting direction explored by Alex was [using a DVD as a reflective grating](/notes/alex-mccarthy/5-9-2011/spectrometry-urop-5911-update) instead of a transmission grating.

[![Alex McCarthy's reflectance spectrometer](https://publiclab.org/sites/default/files/imagecache/default/100_0396.JPG)](https://publiclab.org/sites/default/files/imagecache/default/100_0396.JPG)

to [quote](/notes/alex-mccarthy/5-9-2011/spectrometry-urop-5911-update): "Aside from not filtering UV light, the reflective grating spectrometer seemed to have a few other advantages: Because the light source was not in the line of sight of the camera, there was little or no glare in the spectrum."

Alex helped produce the our [first guide to building a spectrometer](/notes/warren/4-29-2011/draft-revised-spectrometer-guide-alex-mccarthy).

#####heating up

After originating the spectrometry project and a year after starting to play with CD spectrometers [warren](/profile/warren) posted a tutorial that really kicked off community research.[Warren's awesome VHS box spectrometer](http://publiclab.org/notes/warren/11-30-2011/video-tutorial-build-10-usb-visible-light-spectrometer), which he based on a series of cool educational workshops, such as this [solar physics lab from NOAA](http://www.swpc.noaa.gov/Curric_7-12/Activity_1.pdf) and [Simon Quellen Field's Scitoys spectrometer build](http://sci-toys.com/scitoys/scitoys/light/cd_spectroscope/spectroscope.html). There are many tutorials on CD/DVD spectrometers out there, these are just two of the better examples.
<iframe width="420" height="315" src="//www.youtube.com/embed/IA5BTD-aelo" frameborder="0" allowfullscreen></iframe>

[Kosamari's](/profile/kosamari) [spectrometer in a box](/notes/kosamari/11-14-2012/spectrometer-cellphone-box) uses a pvc 't' connector to block light getting in with the cables entering the box.

[![Kosamari's spectrometer in a box](https://farm9.staticflickr.com/8209/8185453779_feb2c30bbe.jpg)](https://farm9.staticflickr.com/8209/8185453779_feb2c30bbe.jpg)

#####second generation designs
In order to make the spectrometer play nicely with add-ons and attachments, warren settled on a [type LB conduit box](/notes/warren/10-12-2012/diy-spectrometry-kit-paper-insert-prototype) as a better housing.

[![warren's LB conduit prototype](//publiclab.org/sites/default/files/imagecache/default/IMG_0914.JPG)](//publiclab.org/sites/default/files/imagecache/default/IMG_0914.JPG).

This model depended on the easy to mount and rectangular Syba camera.  When that camera went out of production in 2013, [mathew modified the design to use a "gumstick"](/notes/mathew/3-18-2013/sanm-camera-board-spectrometer-kit) camera, the standard size of usb webcam found in laptops, right above the screen.  This required the introduction of a 45 degree wooden block, and is a[ desktop spectrometer 2.5](/wiki/dsk).

[![Screen_Shot_2014-07-14_at_4.42.56_PM.png](https://i.publiclab.org/system/images/photos/000/005/290/medium/Screen_Shot_2014-07-14_at_4.42.56_PM.png)](https://i.publiclab.org/system/images/photos/000/005/290/original/Screen_Shot_2014-07-14_at_4.42.56_PM.png)

[cfastie's](/profile/cfastie) design for [Ebert](http://publiclab.org/notes/cfastie/2-19-2013/ebert), a spectral attachment to a point & shoot, with some expanded dimensions for improved resolution:
[![Ebert the spectrometer](//publiclab.org/sites/default/files/EbertPlan.jpg)](//publiclab.org/sites/default/files/EbertPlan.jpg)

cfastie also had [a great series of mods](/notes/cfastie/2-5-2013/grating-angle) for mounting a fold-up spectrometer to an iphone. 

<iframe width="560" height="315" src="//www.youtube.com/embed/AW3EpXxJBYo" frameborder="0" allowfullscreen></iframe>

Homechemist has an interest in fluorescence and raman spectroscopy and created a reflectance spectrometer similar to Alex McCarthy's, [only enclosed in a box.](/notes/homechemist/08-30-2013/homemade-spectometer-for-sample-absorstion-analysys-and-a-type-of-ramman-spectroscopy)  homechemist used two built-in lasers for calibration and fluorescence testing:

[![homechemists fluorescence spectrometer](//i.publiclab.org/system/images/photos/000/001/343/medium/DSC_2842.jpg)](//i.publiclab.org/system/images/photos/000/001/343/medium/DSC_2842.jpg)

[![homechemist's spectrometer](//i.publiclab.org/system/images/photos/000/001/339/medium/PROTOTIPO.jpg)](//i.publiclab.org/system/images/photos/000/001/339/medium/PROTOTIPO.jpg)

[Suiris](/profile/suiris) built [a spectrometer](http://publiclab.org/notes/Suiris/08-03-2013/new-spectrometer-build-and-cfl-lines-but-why-so-many) from a wooden box and put the camera on a magnetic mount so that it could be moved around from outside of the box:

[![suiris spectrometer](//publiclab.org/system/images/photos/000/001/047/medium/IMG_0030.JPG)](//publiclab.org/system/images/photos/000/001/047/medium/IMG_0030.JPG)

This spectrometer was very similar to [stoft](/profile/stoft)'s [all-magnet spectrometer](/notes/stoft/05-03-2013/spectrometer-focus).  Stoft also suggests that the best means of setting focus is to bottom out a lens and then move it a set number of turns.  

[![stoft's spectrometer](//i.publiclab.org/system/images/photos/000/000/168/medium/ProtoBench.jpg)](//i.publiclab.org/system/images/photos/000/000/168/medium/ProtoBench.jpg)

#####collimation slits/smartphone spectrometer
For most of the spectrometer's history, we've used hand or laser cut paper as the slit.  Some people have followed the NOAA instructions to create [razor blade slits](http://www.swpc.noaa.gov/Curric_7-12/Activity_1.pdf).  Stoft saw the slit as a means to achieve some level of intensity calibration and to use high dynamic range (HDR) techniques to get more precise measurements.  He began [printing his own slits on acetate](/notes/stoft/5-25-2013/hdr-search-high-er-dynamic-range) using a laser printer, as an [alternative to lens filters that attenuate light](notes/stoft/05-14-2013/in-search-of-spectrometer-attenuators).  There are a lot of [advantages to hdr](/notes/stoft/03-09-2014/hdr2-using-over-exposure-to-your-advantage), as stoft has pointed out.  His printed slits didn't return very good results, though.  Still, it was an interesting concept, and warren mentioned it to [mathew](/profile/mathew) who went and [printed slits using photoprinting](/notes/mathew/09-25-2013/photo-printed-collimation-slit-for-the-backpack-spectrometer), whereby silver nitrate is deposited on acetate.  This technique was integrated into the [smartphone spectrometer](http://publiclab.org/wiki/smartphone-spectrometer) for its clarity.  That slit is .09mm in thickness, a thickness which is [debated for the amount of light it passes](/notes/warren/07-05-2014/spectrometer-slit-width-thoughts).

[![stoft's spectrometer](//i.publiclab.org/system/images/photos/000/003/308/original/IMG_1053.JPG)](//i.publiclab.org/system/images/photos/000/003/308/original/IMG_1053.JPG)

##### beginnings of a third generation
Ideas

[RTegelbeckers wanted a box that was flatter](/notes/RTegelbeckers/02-25-2014/3d-printed-body-for-diy-spectrometry-kit), and easier to put together (after he 3d printed it).  

[![RTegelbeckers 3D printed spectrometer](//i.publiclab.org/system/images/photos/000/003/035/medium/Re-design_x-ray.jpg)](//i.publiclab.org/system/images/photos/000/003/035/medium/Re-design_x-ray.jpg)

Holding samples in the right place is a big demand for a new spectrometer, [Dusjagr](/profile/dusjagr [re-made the fold-up](/notes/dusjagr/04-29-2013/redesign-of-the-foldable-mini-spectro-to-hold-a-cuvette) to have a cuvette holder.

Warren and cfastie envisioned [a 3D printed cuvette holder](/notes/cfastie/02-25-2014/mobile-cuvette-holder).

[![Warren's cuvette holder](//i.publiclab.org/system/images/photos/000/003/022/medium/SNOWFEST-339-26a.jpg)](//i.publiclab.org/system/images/photos/000/003/022/medium/SNOWFEST-339-26a.jpg).  
Mathew made [a pattern for cutting the spectrometer box](/notes/mathew/03-14-2014/oil-fluorescence-testing-station-from-a-spectrometer-box) to accomplish a similar task.

Warren has also thought about [a dropper holder for testing coffee](/notes/warren/08-08-2013/design-for-coffee-spectrometer).  And a [fold up spectrometer](/notes/warren/07-05-2014/oil-testing-spectrometry-workshop-at-fab-10) that is of a similar shape for cuvettes.

[![warren's fold-up](//i.publiclab.org/system/images/photos/000/005/141/medium/IMG_20140704_175642.jpg)](//i.publiclab.org/system/images/photos/000/005/141/medium/IMG_20140704_175642.jpg)

This idea of using droplets instead of cuvettes is a very contemporary idea, similar to a "nanodrop" commercial spectrometer.  [Gaudi made this DIY version](//publiclab.org/notes/gaudi/04-03-2014/diy-micro-volume-spectrophotometer).  There are a variety of out-of-patent methods of using droplets that mathew put in gaudi's comments.

[Donblair](/profile/donblair)'s openlux might be [a good standard light source.](/notes/donblair/04-07-2014/open-lux).  [Silverhammer is also interested.](/wiki/portable-spectrometer-with-light-source-development).

[![silverhammer's spectrometer](//i.publiclab.org/system/images/photos/000/003/350/original/2014-03-19_23.18.03.jpg)](//i.publiclab.org/system/images/photos/000/003/350/original/2014-03-19_23.18.03.jpg)


###Analysis & Activities
Things I found, not complete ideas. 

Smoothing out spectra was [proposed by philippg](/notes/philippg/07-18-2013/enhancing-sensitivity-of-diy-spectrometers) and [implemented by warren](/notes/warren/10-09-2013/trying-to-detect-emission-lines-in-flare-spectra-from-chalmette).  Philippg is attempting to [measure phytoplankton](http://publiclab.org/notes/philippg/07-10-2013/water-quality-measurements-with-optical-spectroscopy) and also needs intensity calibration

[Measuring adulterated olive oil](/notes/ygzstc/04-30-2014/detection-of-olive-oil-adulteration-with-peanut-oil-using-visual-light-spectroscopy)

[Investigating Beer's Law](/notes/akjeff91/3-28-2013/does-coffee-obey-beers-law-spectrometric-investigation)****