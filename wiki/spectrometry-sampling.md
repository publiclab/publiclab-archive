---
title: "Spectrometry Sampling"

tagnames: 'spectrometer, sampling, spectrometry-sampling, parent:sampling, sample-collection'
author: warren
path: /wiki/spectrometry-sampling.md
nid: 9403
uid: 1
cids: 
---

# Spectrometry Sampling

by [warren](/profile/warren), [OpenSourceScience](/profile/OpenSourceScience)

October 05, 2013 21:18 | Tags: [spectrometer](/tag/spectrometer), [sampling](/tag/sampling), [spectrometry-sampling](/tag/spectrometry-sampling), [parent:sampling](/tag/parent:sampling), [sample-collection](/tag/sample-collection)

----

**How do you test liquid or solid samples with your [DIY Spectrometer](/wiki/spectrometer)?** Read about ways to prepare and scan samples here, and [read about different tests you can do with your spectrometer](/wiki/spectrometry-activities).

## Questions

[spectrometry-sampling](/tag/question:spectrometry-sampling)

****

## Sample containers

What do you store liquid samples in? A good sample container has flat sides, so you can shine lights (and lasers) through it without lots of reflections. 

There are lots of different [affordable test tubes on Amazon](https://www.amazon.com/s/?field-keywords=test%20tubes), but they're mostly round. Flat-sided test tubes are often called **cuvettes** and are specifically for spectrometry. 

It's also good to have the light travel through a consistent amount of the sample -- many cuvettes (traditional spectrometry sample containers) are 1cm x 1cm, so the light always goes through 1cm of the sample.

[![dropper.jpg](https://i.publiclab.org/system/images/photos/000/001/730/medium/dropper.jpg)](https://i.publiclab.org/system/images/photos/000/001/730/original/dropper.jpg) [![Cuvette_with_penny.jpg](https://i.publiclab.org/system/images/photos/000/001/731/medium/Cuvette_with_penny.jpg)](https://i.publiclab.org/system/images/photos/000/001/731/original/Cuvette_with_penny.jpg)

_A square-sided bottle, left, and a cuvette, right (photo from [Wikipedia](http://simple.wikipedia.org/wiki/Cuvette))._

Unfortunately, we've found that cuvettes with plastic stoppers will leak when filled with oil and not kept upright (for example if you travel with them). A really nice source of completely sealable rectangular 1/4 oz glass jars which are pretty perfect for sampling can be found for $3.50 for a ten-pack here (see image below of 2 on top of a flashlight): 

http://www.sciplus.com/p/WHITCAP-BOTTLE_48212

**Other sample container options**

* $20 (w/ shipping) 100x plastic (polystyrene) cuvettes: http://www.amazon.com/Cuvette-Polystyrene-Macro-2-5Ml-4-5Ml/dp/B008H5XJ9E/ (no caps)
* $9 100x cuvette caps: http://www.amazon.com/Azzota-A920-Cuvettes-Caps-100/dp/B005YOJPLC/
* $22 Quartz cuvette (transparent in farther UV range): http://www.amazon.com/Quartz-Cuvette-standard-10mm-spectrometer/dp/B00DWXFIS6/

****

## Water sampling

Water is usually very clear in small amounts -- even murky water in a small container will look pretty transparent. That makes it hard to measure with spectrometry unless you shine light through a *lot* of it. But some tests have been done -- see this example of a scan of water from the Charles River before and after 7 days of settling, by [Jeff Hecht](https://spectralworkbench.org/sets/show/330):

[![charles-river.png](https://i.publiclab.org/system/images/photos/000/001/732/large/charles-river.png)](https://spectralworkbench.org/sets/show/330)

****

## Oil sampling

However, most research in Public Lab to date has focused on oil spectroscopy -- attempting to identify petroleum residue in sediments. 

[![IMG_20140722_230007_2.jpg](https://i.publiclab.org/system/images/photos/000/005/452/large/IMG_20140722_230007_2.jpg)](https://i.publiclab.org/system/images/photos/000/005/452/original/IMG_20140722_230007_2.jpg)

To identify oil contamination, we [have been attempting](/tag/fluorescence) to illuminate oil samples with UV flashlights and green lasers, which can make some oils fluoresce, or glow, as pictured above.

The basics of sample preparation for oil identification are still being refined, but our best practices to date can be found on the [Oil Testing Kit page](/wiki/oil-testing-kit)

****

[![Flame spectroscopy](https://i.publiclab.org/system/images/photos/000/001/634/medium/IMG_1794.JPG)](https://i.publiclab.org/system/images/photos/000/001/634/original/IMG_1794.JPG)

_Burning potato chips to measure the sodium emission spectrum from the NaCl (salt)._

## Flame spectroscopy

Another type of spectrometry which involves measuring the light of a flame and can detect specific elements (not molecules) as they emit light at very specific "peaks" -- narrow wavelength bands. Besides flames, these "emission lines" can be produced by exposing gases or sometimes liquids to UV light, lasers, or electric fields (as in a fluorescent bulb). The fluorescent bulb spectrum [you get when calibrating](/wiki/spectral-workbench-calibration) is an example of a mercury emission spectrum.

Emission lines are produced by atoms, not whole molecules (the latter produce absorption lines, which we might still be able to detect since we have the flame -- a good broad-spectrum light source -- but that is just a theory at this point). So sulfur and carbon are possible targets, but we won't be able to distinguish CO2 from CO. 

**Basic setup:** For a more complete description, please read about the "flare spectroscopy activity" below, however, the basic setup involves simply pointing a spectrometer at a flame (which can be difficult to line up if the flame is far away), and later comparing any peaks to known peak locations of looked-for elements. We are compiling a collection of such known elements by importing "idealized" spectra from the NIST database, a process which you can [read more about here](/notes/warren/08-13-2013/importing-spectra-from-nist-and-webmineral-com-to-spectral-workbench). 

Read more about flame spectroscopy:

- [Flare spectroscopy activity](/wiki/flare-spectroscopy-activity) (with description of experimental setup)
- Flare spectroscopy research: [http://publiclab.org/tag/flare](http://publiclab.org/tag/flare)
- A report from user [straylight](/profile/straylight) on a classroom activity involving [measuring different elements in a bunsen burner flame](/notes/straylight/10-14-2012/classroom-flame-spectroscopy)
- A listing of imported emission spectra of elements from the NIST database so far: [https://spectralworkbench.org/tag/nist](https://spectralworkbench.org/tag/nist)

---------

### Activities

[spectrometry-sampling](/tag/activity:spectrometry-sampling)