---
title: "Lincoln Peak Vineyard"

tagnames: 'near-infrared-camera, kite-mapping, ndvi, nir, vineyard'
author: cfastie
path: /notes/cfastie/6-13-2012/lincoln-peak-vineyard.md
nid: 2472
uid: 554
cids: 894,1682,1685
---

![](https://publiclab.org/sites/default/files/LPV-0547.jpg)

# Lincoln Peak Vineyard

by [cfastie](/profile/cfastie) | June 13, 2012 18:45

June 13, 2012 18:45 | Tags: [near-infrared-camera](/tag/near-infrared-camera), [kite-mapping](/tag/kite-mapping), [ndvi](/tag/ndvi), [nir](/tag/nir), [vineyard](/tag/vineyard)

----

A 10 to 15 mph south wind over the [Lincoln Peak Vineyard](http://www.lincolnpeakvineyard.com/) in New Haven, Vermont made it easy for the Levitation Delta kite to loft the PLOTS NIR/VIS camera pair on Monday.  The MK111 timer was signaling to shoot every 16 seconds and the A495 cameras captured more than 300 synchronous jpeg pairs.  When I pulled it down after two hours to see if everything was still working, the timer battery was dead (sad), but it had stopped just 4 minutes earlier (happy), so both the endurance testing and the mapping flight were successful (whew). The batteries running the MK111 timer (2x 4LR44 6v) had previously taken more than 100 photos, so they triggered the cameras about 450 times before dying. UPDATE: Subsequent use of this type of battery provided [far worse results](http://publiclaboratory.org/notes/cfastie/7-3-2012/timer-battery-disappoints) so I [modified the timer to use less power](http://publiclaboratory.org/notes/cfastie/7-12-2012/shutter-timer-upgrade).

I used the newest version of Ned Horning’s [ImageJ macro](https://github.com/nedhorning/RegisterPhotos) to register the visible/infrared pairs of photos and output NRG and NDVI images for 266 pairs.  There are some anomalies in the results that Ned is investigating now.  Some of the registration of visible and NIR photos was not perfect, maybe because the parallel rows of arbors confused the algorithms, or maybe because I shot jpegs instead of RAW.  It seems that some of the hottest areas in the NDVI images, the areas that presumably have the most active photosynthesis, are in shadows.  That might be an anomaly associated with the particular spectral bands that are being captured by the cameras and used to compute NDVI. There is still much to learn about producing and interpreting these output images.

I tried to stitch a few dozen of the regular photos in Microsoft ICE, but results were poor.  So I submitted 146 of the visible light photos to Hypr3D. Those photos were first resampled to 1500 pixels across.  Hypr3D used every one of them in a [3D model of a large portion of the vineyard](http://www.hypr3d.com/models/4fd78f5ed573de0001000007).  Encouraged by that I added 65 more photos and submitted again. Each of these submissions took about five hours to process.  Only 183 out of the 211 were used in the second model, so it does not cover as much of the vineyard as I had hoped. There are a few additional photos which might extend the coverage some so I might try again. The current model is below.

<iframe width="800" height="800" src="http://www.hypr3d.com/models/4fd7e1326a56490001000031/embedded_viewer"></iframe>

UPDATE: 43 of the photos have been [aligned in MapKnitter](https://mapknitter.org/map/view/lincoln-peak-vineyard).

Some notes on the flight.
Camera settings: Exposure compensation = 0, Infinity focus mode, full quality JPG. For unmodified A495 -- ISO 80, for NIR A495 -- ISO 200.
CHDK settings for both cameras: Enable remote and synchronous remote, Shutter speed priority at 1/800 second.
Although the camera determined aperture for each photo, every photo was taken at f/3 (all the way open) indicating that there was just enough light for these settings.
Synchronous shutter triggering by MK111 timer sending pulses every eight seconds and shooting in sync on every other pulse.