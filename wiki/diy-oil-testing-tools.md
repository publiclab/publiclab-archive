---
title: DIY Oil Testing Tools
tagnames: spectrometer, oil-testing-kit, draft
author: warren
path: /wiki/diy-oil-testing-tools.md
nid: 12663
uid: 1

---

# DIY Oil Testing Tools

by [warren](../profile/warren)

February 05, 2016 23:12 | Tags: [spectrometer](../tag/spectrometer), [oil-testing-kit](../tag/oil-testing-kit), [draft](../tag/draft)

<div class="alert alert-info">This is Part III of <a href="/wiki/diy-oil-testing">DIY Oil Testing: Progress toward community oil pollution analysis</a></div>


# III. Tools and Methods: hardware, software, instructions and challenges


##Software introduction


Public Lab's [DIY spectrometry kit](/wiki/spectrometer) plugs in with USB, and connects to the web-based app Spectral Workbench, where you can collect scans and do analysis. As part of the Homebrew Sensing Project, we've extensively rewritten and upgraded Spectral Workbench to make the analysis easier.

While data collected using Spectral Workbench may be downloaded and analyzed with the software of your choice (MATLAB, for example), we've worked to add powerful and flexible analysis features which may enable people to do not only oil comparisons, but a wide range of analyses, without needing to know how to program or to own or be familiar with programs like MATLAB. In particular, the new [Operations system](/wiki/spectral-workbench-operations) enables tracked changes to a saved spectrum, so that it's easy to see what's been done to process or adjust data, as well as easy to replicate a set of operations on multiple spectra.

You can read more about Spectral Workbench and how to use it on its wiki page:

https://publiclab.org/wiki/spectral-workbench 

****

![Spectral Workbench](https://i.publiclab.org/system/images/photos/000/014/052/large/Screenshot_2016-02-03_at_3.15.07_PM.png)

_Spectral Workbench 2: spectrum analysis interface_

****

###Software procedures

The tests we did for the Oil Testing Kit Beta Program were to determine **if different types of known oil samples could be distinguished**: both similar oils like varying weights of motor oil (5W20, 20W50, and 80W90), diesel fuel, and samples of crude oil. We diluted these until they were similar in opacity, illuminated them with a 405nm "Blu-Ray" laser, and measured the fluorescence they produced. The basic steps were as follows:

1. place mineral oil baseline in sample container in Oil Testing Kit attachment and illuminate with laser
2. adjust brightness to 25-75% ([with no clipping]()) with attenuator strip and save spectrum
3. place diluted oil sample in sample container in Oil Testing Kit attachment and illuminate with laser
4. adjust brightness to 25-75% ([with no clipping]()) with attenuator strip and save spectrum
5. repeat steps 3 & 4 for each different sample, and for best results, repeat scans of each sample multiple times
6. consistently tag and title all spectra you wish to compare, and add them to a set
7. use the "equalize height" and/or "equalize area" tools to compare curve shapes after adjusting for overall brightness

A more detailed description of the procedure [can be found here](https://publiclab.org/wiki/oil-testing-kit#Oil+Testing+Kit+Beta+procedure).

****

![Oil Testing Kit](https://i.publiclab.org/system/images/photos/000/011/271/large/IMG_20150521_145931_2.jpg)

_The Beta Oil Testing Kit design_

##Hardware

In sync with the development of the Oil Testing Kit, Public Lab’s Desktop Spectrometry Kit was redesigned using a primarily cardstock-based folding design, which interlocked with the alpha and beta versions of the Oil Testing Kit, also of cardstock. Building around a pen-shaped laser pointer and a standard laboratory cuvette (see [sample containers](/wiki/diy-oil-testing-questions#Cuvettes)), the two made it easier to align a laser beam with the optical slit of the spectrometer, and included a sliding tab “attenuator” to dim the laser light. 

Following the Oil Testing Kit Beta program (see [Beta program](/wiki/diy-oil-testing-community#The+Beta+Program)), feedback we collected from members included the need for:

* greater rigidity in both the spectrometer and the OTK
* a height change to better align the laser -- or a means to adjust the height
* an easier way to turn on the laser while interacting with the software
* an easier way to dim/brighten the UV light

As of January 2016, a number of these are being incorporated into a followup iteration which incorporates a dimming dial, a more compact and stable frame, and a more rigid attachment to the spectrometer body. Follow further developments at https://publiclab.org/tag/oil-testing-kit 



****

Continue to [Data and Action](/wiki/diy-oil-testing-advocacy), part IV of this document.