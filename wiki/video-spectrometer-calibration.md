---
title: "Video spectrometer calibration"

tagnames: ''
author: warren
path: /wiki/video-spectrometer-calibration.md
nid: 573
uid: 1

---

# Video spectrometer calibration

by [warren](../profile/warren)

November 20, 2011 15:00 | Tags: 

----

We're developing several approaches to calibrating your video spectrometer. 

##Compact Fluorescent bulbs##

Feel free to reorganize this text, i just copied it from peoples' emails:

(copied from Dave Haffner's email)

> The CFL spectra seems like a good bet for doing spectral calibration of some sort. I think we just need to standardize the make and model. Looks like there is some significant differences in the spectrum of just a few bulks this person bought at the store http://web.ncf.ca/jim/misc/cfl/

> It would be worth a survey to find a bulb model that is useful for this task spectra-wise, and one the manufacturer can share a decent spectrum for in their specs. Of course cheap and widely available is important too. 

> It also occured to me that once we find a good bulb, we could that THE BULB into a lab and measure it's spectrum precisely. Then this spectrum could be used as a reference to calibrate the instruments.  

> We can do the wavelength registration with a reference spectrum because we just need to match up the peaks, and perhaps use just one channel at a time to do something quantitative with the intensity of the spectra.  But to get the benefit of a wider spectral range (as wide as the camera permits) all at once, I think we need to figure out how to combine the bands,  at least to the first order.   Getting a known bulb into the lab would be a good way to get a sense of how to mix the channels. We could also use sunlight, I think.

(Monty Montgomery contributes:)

> I would think the easiest calibrations (the one everyone has access to without buying anything) would be to calibrate the nm scale from one of the two lower mercury lines that are same on every CFL bulb and the 'D' line off a low pressure sodium streetlamp. From there, intensity across the spectrum could be calibrated off ~ any tungsten halogen lamp which follows black body close enough for government work.

(Jeff:)

Alex McCarthy found this listing on Wikipedia months ago which we've used before: http://publiclaboratory.org/notes/warren/7-28-2011/live-spectral-analysis-code-good-resolution. The wikipedia page states:

> "Spectrum with peaks labelled taken with an Ocean Optics HR2000 spectrometer [1] of ambient light provided by fluorescent lamps. Spectrum taken by me (apparently en:user:Deglr6328). The spectrometer appears to be about ~.6 to .8 nm off judging from the location of known peaks. Interpretation of spectral peaks has been done using the NIST database of spectra for mercury [2], a paper on the photoluminescent properties of Eu:Y2O3 [3], also here [4] and here[5], and an article on fluorescent light phosphors [6]. This spectrum is not calibrated for intensity."

###Developing a spectral library of calibrated bulb spectra###

* marking/tagging some as "calibrated" if they've been tested on other equipment?

###Notes from Mon Nov 21 hacking###

* Mercury lines should be stable but europium and terbium etc may vary even within a specific bulb product line...
* 1st order 375 nm band shows up at 750 nm in the 2nd order, so anything above there may be infected
  * (doubled/tripled width doesn't yield more resolution)
  * europium and terbium are excited by the UV mercury lines at 185nm and 254nm; 254 will have a 2nd order double at the position of 508nm and 3rd order triple at 555nm.

