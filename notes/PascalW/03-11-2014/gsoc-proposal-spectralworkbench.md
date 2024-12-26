---
title: "GSoC Proposal SpectralWorkbench"\ntagnames: 'spectrometer, calibration, image-processing, spectralworkbench, neon, gsoc, hdr, gsoc-2014, germany, first-time-poster'
author: PascalW
path: /notes/PascalW/03-11-2014/gsoc-proposal-spectralworkbench.md
nid: 10160
uid: 148271

---

![](https://publiclab.org/public/system/images/photos/000/003/210/original/exposures.jpg)

# GSoC Proposal SpectralWorkbench

by [PascalW](../profile/PascalW) | March 11, 2014 19:50

March 11, 2014 19:50 | Tags: [spectrometer](../tag/spectrometer), [calibration](../tag/calibration), [image-processing](../tag/image-processing), [spectralworkbench](../tag/spectralworkbench), [neon](../tag/neon), [gsoc](../tag/gsoc), [hdr](../tag/hdr), [gsoc-2014](../tag/gsoc-2014), [germany](../tag/germany), [first-time-poster](../tag/first-time-poster)

----

###GsoC Proposal

**Name:** Pascal Winkelmann

**E-Mail:** <button type="button" onclick="alert('E-Mail: ' + 'pas' + 'cal.' + 'winkel' + 'mann' + '@l' +'ive.d'+'e')">Click!</button> (anti spam)

**Affiliation:** LMU Munich (Chemistry and Biochemistry)

**Location:** Munich, Germany

**Projects I want to work on:** SpectralWorkbench

### Why I'm interested

As a Chemist I deal with spectroscopy every day and know of its importance! Before I went to university I often experienced the lag of spectroscopy tools for amateurs, which was frustrating to say the least. I was working on my own spectrometers and spectrometer software when I came across this project a while back and I've stopped the development of my software for now since I think my time might be better spend if I contribute to the SpectralWorbench.

**Commitment:**
I do not have any other major commitments for the coming summer and can devote my full attention to this great project.

**Abstract:**
The SpectralWorkbench provides a simple to use capture and analysing tool for vis spectroscopy. But the Software hasn't reached the limits of what is possible in amateur spectroscopy. There are some basic features and many advanced features missing that could make the SpectralWorkbench a great choice over commercial software. Some of the features may be: 
- Auto calibration of spectra
- Auto detection of sampling row
- hdr support
- DSLR raw support
- proper processing of uploaded images
- …

###Experience 
I have good experience with many programming languages, primarily Mathematica, Matlab, Java, JavaScript, perl, and bash. I'm currently learning Ruby on Rails while I work through the code of SW to get a good overview and found it to be very intuitive. 

I've been working on my own spectrometer software a while back and have thus some good understanding of the problems and solutions associated with the development of such software. There are some examples of possible improvements to SW attached to this proposal that should show that I have the necessary experience and often even code ready to improve on the current implementation of SW. 
I'm pretty flexible with the topic and since I have code developed for many of the topics I could get things done quickly. I would appreciate you input on the importance of all the projects.

I would consider myself an expert in image processing which is a major advantage for the work on this project.

I have worked through the code on the repository for the past weeks so I'm already pretty familiar with the current status and ready to start programming.

**Teamwork:** I have good experience with programming in small groups of about 3 people and the github work flow. I'm comfortable with reading and reviewing other people's code.

###Timeline: 
This greatly depends on the project you want me to work on. As said, I'm very flexible and would like to work on the topics that are considered to be most important.

###Particular Projects I would like to work on
Since I've been working on my own spectrometer software I have plenty of code to address some of the open problems of SW and I would like to present some of them in the following part.

####HDR Spectrum from Multiple Exposures:

**The Problem:**
The dynamic range of consumer cameras is fairly limited and often not sufficient to capture emission spectra without considerable loss in detail. Very strong features get clipped while weak features aren't integrated long enough to be detected.

**What I want to do:**
To overcome this issue I want to implement an algorithm to generate a hdr spectrum from multiple single exposures. 

**My attempt and results:**
A set of images at different, known exposures form the basis to the calculation of a hdr image.
I used the neon spectrum as an example where the use of a high dynamic range approach can greatly improve the quality of the final spectrum.


[![exposures.jpg](https://i.publiclab.org/system/images/photos/000/003/211/medium/exposures.jpg)](https://i.publiclab.org/system/images/photos/000/003/211/original/exposures.jpg)


I stated with recording a set of Neon spectra at different exposures. Five spectra are more then enough for the purpose and 3 would have probably been OK as well. It is easy to see, that the red and yellow lines are properly exposed in the fist images while they are blown out in the images at the bottom. There is no single image where all parts of the spectrum are properly exposed.

Constructing a hdr image from a set of images is equivalent to recovering the real radiance at each pixel of the sensor plane. This information can not be recovered from a single image since the response of the ccd sensor isn't linear over the available dynamic range. This behaviour is not totally due to the functionality of the sensor but also due to the post processing of the captured raw data inside the camera.

The non-linear response function of the sensor can be recovered from a set of aligned images which were taken at different, known exposure. With this function the radiance map and thus the hdr image can be recovered as well.

The following two images show the resulting hdr spectrum (bottom, logarithmically tone mapped) compared to the middle exposure of the captured set (top).


[![img2_comp.jpg](https://i.publiclab.org/system/images/photos/000/003/212/medium/img2_comp.jpg)](https://i.publiclab.org/system/images/photos/000/003/212/original/img2_comp.jpg)
[![hdrGraph2.jpg](https://i.publiclab.org/system/images/photos/000/003/213/medium/hdrGraph2.jpg)](https://i.publiclab.org/system/images/photos/000/003/213/original/hdrGraph2.jpg)


**Questions and next steps:**
Jeff and Dave did some tests with photoprinted stepped slits in a previous research note. (http://publiclab.org/notes/warren/09-25-2013/stepped-slit-tests)
Since photo printing also allows to vary print transparency, a slit could be designed which eliminates the need to take several exposures separately. 

This approach can not only provide spectra with a much higher dynamic range but also greatly reduce the general problems with overexposure that many people seem to have.

####Processing of uploaded Images

**What I want to do:**
I noticed that uploaded images that are not captured with the interface of SW are just get averaged to get the corresponding spectrum. This often leads to worse spectra then necessary, especially because many people use curved cd gratings. I would like to introduce some post processing for the uploaded images to improve the quality of the extracted spectra. 

**My attempt and results:**
To illustrate the idea I put a little demo together:
The following images show the comparison between a simple averaged spectrum and the spectrum of the post processed image. The implemented algorithm is simple, fast and based on autocorrelation.
A serious implementation could improve the quality of the shown demo!

[![autocorrelation_demo_combined.JPG](https://i.publiclab.org/system/images/photos/000/003/214/medium/autocorrelation_demo_combined.JPG)](https://i.publiclab.org/system/images/photos/000/003/214/original/autocorrelation_demo_combined.JPG)

[![autocorrelation_demo_graph.jpg](https://i.publiclab.org/system/images/photos/000/003/215/medium/autocorrelation_demo_graph.jpg)](https://i.publiclab.org/system/images/photos/000/003/215/original/autocorrelation_demo_graph.jpg)

(Input Spectrum blue, Output Spectrum red)

**Questions and next steps:**
There are many more improvements that can be made like croping. 


####Auto Detection of Sample Row

While studying the code I came across the unimplemented function to detect the sample row automatically and I played around with it. Here is the result:

[![12_sharpness.jpeg](https://i.publiclab.org/system/images/photos/000/003/216/original/12_sharpness.jpeg)](https://i.publiclab.org/system/images/photos/000/003/216/original/12_sharpness.jpeg)

The algorithm tries to find the best sample row based on local contrast and vertical frequency content in every sample line. The algorithm resembles sharpness detection methods used by digital cameras.

####Auto calibration

Many, if not the majority of the spectra archived on the PublicLab webpage aren't properly calibrated. This is a big problem since uncalibrated spectra can't be compared reliably. 

**What I want to do:**
I've worked on project where feature detection and pattern matching played a important role. The development of appropriate calibration functions shouldn't be to difficult considering the one dimensional nature of the problem. I don't have examples for this topic yet but might get around to add some here in the future.

Most common calibration spectra could be included in this method. (CFL, Neon, Laserlines,..)
