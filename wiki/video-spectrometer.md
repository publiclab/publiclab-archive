---
nid: 521
title: Video Spectrometer
path: public/static/wiki/video-spectrometer.md
uid: 1
tagnames: spectrometer
---

# Video Spectrometer

<a href="https://www.flickr.com/photos/jeffreywarren/7890162542/" title="Spectral analysis of coffee at Toscanini's by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8437/7890162542_d8784fea8d.jpg" width="500" height="375" alt="Spectral analysis of coffee at Toscanini's"></a>

This spectrometer is made with a black card inserts inside a 1" PVC or aluminum conduit box, and uses an HD USB webcam. This allows the user to view the spectrum in real-time, rather than taking a photo and analyzing it later. See a full bill of materials here:

* [List of materials](/wiki/spectrometer-materials) (currently somewhat messy)
* [Most recent assembly pics](http://publiclaboratory.org/notes/warren/10-12-2012/diy-spectrometry-kit-paper-insert-prototype)

This hardware design is released under the CERN Open Hardware License 1.1.

##Specs##

(these are approximated but we should soon post a page with calibration information)

* around 400-900nm, maybe wider
* 5-10nm spectral resolution
* 20-30 samples per second
* around $20 in materials, drops to around $10 if you use a really cheap webcam
* approx. 1 hour construction time
* web-based, open-source capture/analysis software at: https://spectralworkbench.org

<a href="https://spectralworkbench.org" title="Spectral Workbench new interface by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8434/7876264252_9004126f5b.jpg" width="500" height="304" alt="Spectral Workbench new interface"></a>

##Goals##

Our early goals are to:

* Identify a contaminant in a sample, like Polycyclic Aromatic Hydrocarbons -- like [naphthalene, anthracene and tetracene](http://publiclaboratory.org/notes/warren/8-5-2011/uv-visible-spectral-features-benzine-and-some-pahs). Tetracene has absorption bands well into the visible range.
* Identify a plant species by its spectrum. (see [this helpful paper by Zomer et al](https://publiclab.org/sites/default/files/Zomer_2009.PDF)) Or perhaps a mineral, using the [ASTER spectral library](http://archive.publiclaboratory.org/aster-spectral-library/)
* Try to identify something in a smokestack plume, like a refinery plume

##How to build your own##

Instructions on building your spectrometer can be found here:

###[Video Spectrometer Construction &raquo;](/wiki/video-spectrometer-construction)###