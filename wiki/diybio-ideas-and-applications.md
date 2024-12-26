---
title: "DIYBIO Ideas and Applications"\ntagnames: 'spectrometer, diybio, igem'
author: donblair
path: /wiki/diybio-ideas-and-applications.md
nid: 7408
uid: 43651

---

# DIYBIO Ideas and Applications

by [briandegger](../profile/briandegger), [donblair](../profile/donblair)

May 10, 2013 15:23 | Tags: [spectrometer](../tag/spectrometer), [diybio](../tag/diybio), [igem](../tag/igem)

----

A page for collecting resources and ideas related to do-it-your-self, civic / citizen / grassroots science approaches to biology research.

## General Imaging

Question: "If you could set up a device that cost around $100 (cheap webcam, filter, Rasbperry Pi, power cable, ethernet cable, SD card) that would capture visible and near-infrared wavelengths (and perhaps some UV, too), and it could visually monitor e.g. a petri dish in the lab, capturing the spectrum every X minutes (storing it on the SD card, or putting it online)  ... what might that be used for?"

* Growth of a protein product over time
* If you were culturing cells in a flask and they had a unique absorbance spectra and if the intensity of an OD could correlate to confluency then you could set up a monitor to alert you when your cells are ready to be passaged to another flask
* Similar to number 2, except use it to establish a growth curve for your cell/tissue cultures
* An IGEM team made some bacteria a while back which that smelled like bananas in the presence of arsenic. How about instead of producing a smell, produce a product that has a very specific emission under white light. Spectrometer picks up this emission then sound alarm bells, start recording data, etc etc.
* Find a protein (or another indicator) that has affinity for heavy metals and wont denature in the medium your trying to measure (ie blood urine, etc). Take a baseline reading, of urine for example, that will be your blank. Then add the protein (or other indicator). Subtract your blank and use the OD spectra of that protein (or exitation/emission) to detect metals ---or other compounds (drugs, toxins, etc).

## Flow cytometry

Basically you have a number of antibodies that bind to specific proteins. These antibodies then have a fluorophore conjugated to them that have specific exititation/emission spectra. Stains and the excitation-emission spectrum of the molecules themselves can also be used. The flow cytometer is designed so each drop should (but not always the case) each contain one cell. You analyze the resulting data to see how many cells contain X compound, Y compound, Z compound, what cells are in your sample, how many cells etc.

If you had a heterogeneous mixture of cells you wouldn't be able to tell how many cells contain protein X over Y, etc, count them, nor see what different cell types are in your sample. However, if you had a homogeneous mixture of cells that started from a single colony (lets say we are using bacteria for the moment) you would be able to tell if they contain certain proteins or compounds just by going into a dark room and using a flashlight and LEDs calibrated to emit your excitation frequency, as you mentioned. You could actually roughly determine how many cells contained a certain compound. If you used a microscope with a hemacytometer (and your light emitted the frequency you needed for excitation) then you could count your cells of interest, establish a ratio of cells containing the compound your interested in, and statistically determine how many cells in your sample contain protein x,y,z, etc. Though, I just now realized I've just described fluorescence microscopy. But maybe there is potential here for creating a really cheap fluorescence microscope - they're not exactly [cheap](https://www.google.com/search?q=fluoresence+microscope&aq=f&oq=fluoresence+microscope&aqs=chrome.0.57j0l3j60.5484j0&sourceid=chrome&ie=UTF-8#q=fluorescence+microscope&source=lnms&tbm=shop&sa=X&ei=WX-EUYHxMqOWiAKixYAY&ved=0CAwQ_AUoAw&bav=on.2,or.r_cp.r_qf.&bvm=bv.45960087,d.cGE&fp=8bcec0c6f29b8c8d&biw=1317&bih=656).


## Spectroscopy 

- Quantifying DNA and determining protein contamination
- Colorimetric assays
- Identification of compounds - requires purification
- Raman Spectroscopy http://en.wikipedia.org/wiki/Raman_spectroscopy

I've only ever used spectroscopy to quantify DNA and determine protein contamination. I've also used it for colorimetric assays. However, I'm sure there are a very wide range of uses for spectroscopy that I'm not aware of or haven't thought about. One thing that might be useful for me to generate some more interest in my group is if I could report back to people, in laymens terms, why spectroscopy is useful and important. Generally when I've used spectroscopy to identify the quantity of some compound I have used samples that have been purified and only contains that single compound as an extra component over my blank. In the case of investigating DNA vs Protein in my sample it has gone through a DNA purification process where "ideally" the sample should contain DNA with maybe trace amounts of proteins.


## Research questions

* Can spectroscopy be used to identify compounds in a sample  (tap water, lake, river, resevoir water, etc) when you don't know what compounds it might contain?
* Difficultly in identifying whats in a sample since the optical densities/transmittance of each compound would interfere with the transmission and absorbance of others.
* Cheap setup for GFP analysis? What is required re: filters, LEDs, webcam sensors, for various GFP systems?

## Groups / Resources

- DIYBio PDX in Portland, Oregon
- LA BioHackers in LA, California
- Genspace in Brooklyn, New York
- Hackteria in many places
- AlphaOneLabs
- DIYbio NCL 
