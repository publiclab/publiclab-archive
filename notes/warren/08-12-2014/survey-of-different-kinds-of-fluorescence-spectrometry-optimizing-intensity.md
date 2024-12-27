---
title: "Survey of different kinds of fluorescence spectrometry, optimizing intensity"

tagnames: 'spectrometer, fluorescence, pesticides, literature, response:8955, oil-testing-kit, intensity, lifs, sfs, response:10997'
author: warren
path: /notes/warren/08-12-2014/survey-of-different-kinds-of-fluorescence-spectrometry-optimizing-intensity.md
nid: 11039
uid: 1
cids: 9926,9927,9929,9930,9931,9932,9941,9969,9970,9972,9973,9974,9975
---

![](https://publiclab.org/public/system/images/photos/000/006/222/original/elfrida.png)

# Survey of different kinds of fluorescence spectrometry, optimizing intensity

by [warren](/profile/warren) | August 12, 2014 13:58

August 12, 2014 13:58 | Tags: [spectrometer](/tag/spectrometer), [fluorescence](/tag/fluorescence), [pesticides](/tag/pesticides), [literature](/tag/literature), [response:8955](/tag/response:8955), [oil-testing-kit](/tag/oil-testing-kit), [intensity](/tag/intensity), [lifs](/tag/lifs), [sfs](/tag/sfs), [response:10997](/tag/response:10997)

----

###Jargon

Learning more about different types of fluorescence spectroscopy -- a common type for oil analysis being (Synchronous) Scanning Fluorescence Spectroscopy (a real mouthful) or SFS, which involves illuminating the sample with monochromatic light at ~5-20 nanometers shorter wavelength than where you're reading it. The light source and sensor both move up (or down?) the wavelength scale at a fixed distance, hence "synchronous scanning".

I believe the type we're doing is called LIFS, or laser induced
fluorescence spectrometry. I'll be looking at LIFS literature more to see what we can learn despite the intense jargon!

There's also three dimensional excitation-
emission matrix (EEM) spectroscopy, apparently also a form of fluorescence spectroscopy. All three, according to Elfrida Carstea in "Fluorescence Spectroscopy as a Potential Tool for In-Situ Monitoring of Dissolved Organic Matter in Surface Water Systems", can be used "to estimate water pollution and to probe the composition of DOM in watersheds." DOM apparently means Dissolved Organic Matter. Interesting! We're looking for oils, but good to know -- both as a possible future alternative use and as a possible false positive if there is organic matter in our samples.

###Data types

Each type of spectroscopy outputs a different sort of graph; the type we're using (laser induced fluorescence spectroscopy) has a characteristic spike where the laser light is read, because it's so bright. You can see that in a) in the below diagram, from the Carstea paper:

[![types-spec.png](https://i.publiclab.org/system/images/photos/000/006/221/large/types-spec.png)](https://i.publiclab.org/system/images/photos/000/006/221/original/types-spec.png)

Synchronous scanning fluorescence, in b), lacks the spike because the light is never emitted at the same wavelength as light's being measured -- it's always just 5-20 nm out of "view". 

Total synchronous fluorescence is 2d, I believe because it measures an entire spectrum for each narrow wavelength of light that's used to illuminate the sample. So you light it up with 400, 405, 410nm, and take a whole spectrum each time. Lots of data! We haven't used monochromators (which are like a reverse spectrometer and can *generate* any color of light) so we haven't tried this. It sounds like a lot of work, but building a monochromator wouldn't be hard.

###Fluorescence intensity

Sometimes it's tough to know what's "common knowledge" among practitioners -- Carstea mentions that:

> The fluorescence response is highly affected by solution temperature,
composition, concentration, pH and salinity.

Whoa -- we've never tried cooling or heating samples -- we should definitely try it. And adding an acid. And Carstea indicates later that it's *low* temperature that increases intensity. 

###Citations

Carstea, Elfrida M. "Fluorescence Spectroscopy as a Potential Tool for in-situ Monitoring of Dissolved Organic Matter in Surface Water Systems." Water Pollution 1 (2012). http://scholar.google.com/scholar?cluster=1158389149894948890&hl=en&as_sdt=0,22