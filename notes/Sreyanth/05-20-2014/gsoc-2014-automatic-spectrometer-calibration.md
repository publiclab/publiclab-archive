---
title: "GSoC 2014 - Automatic Spectrometer Calibration"

tagnames: 'spectralworkbench, gsoc, gsoc-2014, gsoc2014, response:10103, location:blurred, lat:-30, lon:140, zoom:4'
author: Sreyanth
path: /notes/Sreyanth/05-20-2014/gsoc-2014-automatic-spectrometer-calibration.md
nid: 10491
uid: 96713

---

![](https://publiclab.org/public/system/images/photos/000/004/331/original/SWB_LOGO.png)

# GSoC 2014 - Automatic Spectrometer Calibration

by [Sreyanth](../../../profile/Sreyanth) | May 20, 2014 17:29

May 20, 2014 17:29 | Tags: [spectralworkbench](../tag/spectralworkbench), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014), [gsoc2014](../tag/gsoc2014), [response:10103](../tag/response:10103), [location:blurred](../tag/location:blurred), [lat:-30](../tag/lat:-30), [lon:140](../tag/lon:140), [zoom:4](../tag/zoom:4)

----

##Introduction

My GSoC project this year deals with enhancing the awesome SpectralWorkbench support automatic spectrometer calibration, improving the macros module and developing a self-contained offline SWB.

A detailed proposal of my project is found [here](http://www.google-melange.com/gsoc/proposal/public/google/gsoc2014/sreyanth/5769773166100480). 
The initial discussions we did can be seen [here](http://publiclab.org/notes/Sreyanth/03-04-2014/automatic-spectrometer-calibration-and-offline-swb-gsoc-2014-proposal).

My local repo of SWB: [https://github.com/Sreyanth/spectral-workbench](https://github.com/Sreyanth/spectral-workbench)

An up-to date SWB can be cloned from: [https://github.com/publiclab/spectral-workbench](https://github.com/publiclab/spectral-workbench) 
and from: [https://github.com/jywarren/spectral-workbench](https://github.com/jywarren/spectral-workbench)


##What happened till date?

I have setup the Desktop Spectrometry Kit (more details about the kit [here](http://publiclab.org/wiki/dsk)) and tried capturing the spectrums. My trials can be viewed on my [profile](https://spectralworkbench.org/profile/sreyanth). I have compared my captures with the existing CFL spectrums and am quite convinced that my project is going to be of great help to the community (given that the quality of my spectrums is poor and difficult to calibrate manually).

I have also forked the latest version of SWB and am working on modularizing the SWB.


##What happens next?

_This note is only concerned about the automatic spectrometer calibration. There would be other 'progress notes' about macros module development and the offline SWB as well._

I am modularizing the SWB (most of the codebase is already modularized, but some extra modularization is required for smoother transition into the offline SWB development). Also, the common code for both the online and offline versions can be dealt with ease.

After this, I would implement a brute force method to auto-locate the spectral band and start my work on automatic calibration (including auto-recognition of CFL). I assume that [Pascal](http://publiclab.org/profile/pascalw)'s work will concentrate on auto-locating the spectral band, extracting the full-band RGB, correcting for curvature, HDR to extract data from clipped regions and produce a quality spectral response. (view his proposal [here](http://publiclab.org/notes/PascalW/03-11-2014/gsoc-proposal-spectralworkbench))


##Have suggestions?
Any suggestions are always welcome. Either contact me directly, or my mentors Jeff and Dave. Alternatively, you can mail to plots-gsoc@googlegroups.com with the subject: "GSoC 2014 - Automatic Spectrometer Calibration - Suggestions". Also, you can simply comment on this note. :-)