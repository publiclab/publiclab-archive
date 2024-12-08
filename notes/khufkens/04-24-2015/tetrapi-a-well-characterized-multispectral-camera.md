---
title: TetraPi: a well characterized multispectral camera
tagnames: ndvi, multispectral, mapping, raspberry-pi, camera, vegetation, barnstar:basic, barnstar:excessive-enthusiasm, tetrapi, imaging, pri, activity:raspberry-pi-infragram, activity:pi-camera
author: khufkens
path: /notes/khufkens/04-24-2015/tetrapi-a-well-characterized-multispectral-camera.md
nid: 11767
uid: 438931

---

# TetraPi: a well characterized multispectral camera

by [khufkens](../profile/khufkens) April 24, 2015 15:54

April 24, 2015 15:54 | Tags: [ndvi](../tag/ndvi), [multispectral](../tag/multispectral), [mapping](../tag/mapping), [raspberry-pi](../tag/raspberry-pi), [camera](../tag/camera), [vegetation](../tag/vegetation), [barnstar:basic](../tag/barnstar:basic), [barnstar:excessive-enthusiasm](../tag/barnstar:excessive-enthusiasm), [tetrapi](../tag/tetrapi), [imaging](../tag/imaging), [pri](../tag/pri), [activity:raspberry-pi-infragram](../tag/activity:raspberry-pi-infragram), [activity:pi-camera](../tag/activity:pi-camera)

> Democratizing multispectral imaging

### Motivation and goals

Many of the projects on the Public Lab deal with infragrams, NDVI or NRG images to measure vegetation health. Although the images produced do discriminate between healthy and diseased or stressed vegetation, the imageging pipeline is not well characterized. Furthermore, commercial companies offering well defined multipsectral cameras (> 2 channels) do this at a steep price tag (~$5000).

Both the lack of a of a well characterized image sensor, which makes quantitative research impossible (by using inverse modeling using amongst others [PROSAIL](http://teledetection.ipgp.jussieu.fr/prosail/) or [DART](http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=609073)) and lowering the price of an inherently simple device which should be accessible to everyone made me start this project.

For my concept two conditions need to be met:

1. Designing a multispectral camera based upon a raspberry pi and a raspberry pi multiplexer, and writing the necessary software.
2. Characterize the raspberry pi imaging sensor; extract the spectral response curves and set those free on the web.


### 1. TetraPi: a multispectral raspberry pi 

#### Hardware

Designing the housing, either as a sled design to be mounted in a standard outdoor security camera housing and a fully independent camera has been fairly straightforward. Below you see the design of a camera sled which fits a VITEK security camera housing, as well as the stand alone / mobile version.

![mobile](https://farm8.staticflickr.com/7637/17066772778_2ae22e6d0d_z_d.jpg)

![static](https://farm8.staticflickr.com/7588/17252775952_067d3a9b03_z_d.jpg)

Both designs are largely finished and might need some cosmetic updates, but by and large these designs work. Features include a provision for four raspberry pi cameras (NOIR or RGB) and a filter holder which accomodates 1" dielectric filters as produced by for example [Thorlabs](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=1001). This modular design allows for simulateous acquisition of for example a photochemical reflectance index (PRI), a true normalized difference vegetation index (NDVI), as well as a standard RGB image. Multiplexing the cameras is taken care of by an [IVMECH raspberry pi shield](http://www.ivmech.com/magaza/en/ivmech-m-2/ivport-raspberry-pi-camera-module-multiplexer-p-90) multiplexer. 

##### envisioned mobile camera features

* four channel camera [finished]
* adaptable filters (1" dielectric filters) [finished]
* 12-24VDC battery operated [ubec ordered]
* local and remote (cable) trigger [3 mm jack connection in place, push button installed]
* ad-hoc wifi access to upload images directly to a laptop [software issue]

##### envisioned static camera features

* four channel camera [finished]
* adaptable filters (1" dielectric filters) [finished]
* 12-24VDC  Power-over-Ethernet (PoE) or battery operated [ubec ordered]
* UPS feature using [awaiting the pijuice shield]
* ad-hoc wifi access to upload images directly to a laptop for remote sites [software issue]
* wired and wireless time lapse image acquisition and uploads, for on the grid location [todo]

Operation of the mobile version is still dependent on a tripod to ensure a proper exposure. The mobile version will use a ubec to step down an external 12-24VDC source to 5V needed by the pi, alternatively it can be hooked up directly to the 5V output of for example a drone. The plywood design should make the whole setup not overly heavy. The current mobile version weighs in at < 250 gr, and there is room to cut back the size of the housing (probably ending up around 200 gr without a battery). There is also still room to shrink the design, but for convenience reasons I keep it larger as it makes it easier to work on the system.

##### CAD designs

The drawings of both cameras can be found here:

* The mobile camera ( [FreeCAD](https://www.dropbox.com/s/nbthtlakxpkmb44/tetracam_mobile.FCStd?dl=0) / DXF)
* The sled design ( [FreeCAD](https://www.dropbox.com/s/msc0u2ptkbmno0f/tetracam.FCStd?dl=0) / DXF)

All designs are based upon 3 and 9 mm plywood or acrylic. For environmental reasons I try to minimize plastics as much as possible. The mobile version has no fixed power socket yet as I still have to decide on the size.

##### Budget

###### mobile version

* Raspberry pi B+ 			: $30
* 4 * raspberry pi camera 	: $120
* 16GB micro SD card 		: $10
* USB wifi adapter			: $10
* 5V ubec				: $10   
* camera multiplexer		: $96
* real time clock			: $10
* small electronics			: $4
* plywood housing			: $5
* screws / stand offs		: < $4	

Total: ~$300

###### static version

* Raspberry pi B+ 			: $30
* pijuice battery pack UPS	: $41
* 4 * raspberry pi camera 	: $120
* 16GB micro SD card	 	: $10
* USB wifi adapter			: $10
* 5V ubec				: $10   
* camera multiplexer		: $96
* outdoor housing			: $25
* plywood housing			: $5

Total: ~$350

###### Note:

I do not include the dielectric filters in the price as these are somewhat optional and run at $100 a piece. The prices listed above also indicate a full system, meaning 4 cameras where this might exceed the need of some people.

A complete system would run for less than $800 dollar (or 1/5 of a commercial system - in hardware cost). A NDVI system using one filter would set you back $400. Alternatively, a photochemical reflectance index (PRI) system (2 filters) will cost you a little south of $500.

#### Software

Little progress has been made on this part. I have some script which I can recycle from my PhenoPi project but I'm still waiting on the multiplexer and until it's arrival little can be done from a software development point of view.

### 2. Characterizing the OmniVision OV5647 imaging sensor

Inverse modelling of either the standard RGB signal or derived spectral features is based upon a thorough knowledge of the spectral response of a camera. The spectral response of a camera is defined as the wavelength dependent sensitivity of a given sensor channel (RGB).

For reasons unknown most imaging sensors do not come with this information. However, this spectral response can be measured using a monochromator (a rare piece of equipment) or if one knows the spectral response of your source light and the wavelength dependent characteristics of a diffraction grating.

Using both the a known well characterized light source (measured with a spectrometer) and a well characterized grating, it should be possible to back out the spectral response of the raspberry pi camera. A research note on this topic can be found [here](http://publiclab.org/notes/khufkens/04-25-2015/the-accidental-raspberry-pi-spectrometer).

Blog post on this topic can be found on [my personal website](www.khufkens.com) and will trickle through to the research notes as well.