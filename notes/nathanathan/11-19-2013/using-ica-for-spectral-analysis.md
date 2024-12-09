---
title: Using ICA for spectral analysis
tagnames: spectrography, first-time-poster
author: nathanathan
path: /notes/nathanathan/11-19-2013/using-ica-for-spectral-analysis.md
nid: 9809
uid: 365600

---

![](https://publiclab.org/public/system/images/photos/000/002/270/original/Untitled_drawing.png)

# Using ICA for spectral analysis

by [nathanathan](../profile/nathanathan) November 19, 2013 10:03

November 19, 2013 10:03 | Tags: [spectrography](../tag/spectrography), [first-time-poster](../tag/first-time-poster)

----

I've read a bit about some statistical analysis tools (in particular [ICA](https://en.wikipedia.org/wiki/Independent_component_analysis) and PCA) that seem like they could be applied to spectral analysis. The goal would be to devise an algorithm that returns the the relative emission/absorption of every known element and chemical compound in a spectrum.

Mathematically, I think this is something like finding solutions to c * A = m where A is a matrix where each row is a known spectrum, c is the vector we want to determine that contains the relative concentration of each spectrum, and m is the values of the measured spectrum as a vector.

This requires a database that contains the isolated spectrum of every element and chemical compound. It seems like by combining these spectra it should be possible to determine the chemical composition. However, I'm not sure if such a thing exists. Perhaps there is a way to filter or process the data from spectral workbench to find isolated spectra for individual chemicals.

Another problem is that there may be different chemicals or combinations of chemicals that have the same spectra. (Are there individual chemicals that have matching spectra?) Perhaps this could be surmounted by offering users a way to rule out solutions by choosing between different compositions.

I'm looking for links to similar work (I'm betting someone has thought of this before), and I'm also looking for comments on whether this seems horribly naive and what other issues I'm missing.

### Update 1:

According to [this wikipedia article](https://en.wikipedia.org/wiki/Absorption_spectroscopy) different spectra may be needed to calculate the emission and absorption of an element. Emission can occur only at the absorption frequencies but the intensities are different.

There are multiple techniques for determining an element's emission and absorption spectrum. I'm a spectography newbie so I have some questions about them, such as:

1. Can one use reflected light from an every day light source to determine emission and absorption? For example, is it possible to determine the chemical composition of, say, a key on my keyboard, just by pointing a spectrometer at it while a bright light is shining on it? Some information about the light source probably needs to be determined, perhaps this could be accomplished by taking a spectograph with a mirror (or maybe something that diffuses light more) placed in front of the keyboard. Furthermore, accommodating the light source may cause problems when doing ICA since all the components are dependent on the light source, but perhaps this can be overcome by multiplying all the reference spectra by the relative magnitude of the light-source spectrum.
2. Does the experimental set-ups yield fundamentally different spectra? For example, does using a hotter flame or more intense radiation produce an emission spectrum without any emission frequencies?

My mathematical formulation is flawed because it doesn't factor in noise.

I posted my question "Are there individual chemicals that have matching spectra?" [on the chemistry stack exchange](http://chemistry.stackexchange.com/questions/6994/are-there-any-molecules-with-the-same-spectrum). The answer is yes! [Chiral molecules](https://en.wikipedia.org/wiki/Chirality) which are mirror images of each-other will have the same spectrum, although using polarized light it is possible to tell them apart.