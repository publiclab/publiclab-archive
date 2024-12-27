---
title: "NRG images of cover crop trials"

tagnames: 'balloon-mapping, near-infrared-camera, 3d, nrg, nir, farmhack, agriculture, farm, sfm, ifarm'
author: cfastie
path: /notes/cfastie/6-3-2012/nrg-images-cover-crop-trials.md
nid: 2311
uid: 554

---

![](https://publiclab.org/sites/default/files/snapNRG.jpg)

# NRG images of cover crop trials

by [cfastie](../../../profile/cfastie) | June 04, 2012 00:47

June 04, 2012 00:47 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [3d](../tag/3d), [nrg](../tag/nrg), [nir](../tag/nir), [farmhack](../tag/farmhack), [agriculture](../tag/agriculture), [farm](../tag/farm), [sfm](../tag/sfm), [ifarm](../tag/ifarm)

----

I used [Ned Horning’s ImageJ macro]( http://publiclaboratory.org/notes/nedhorning/5-31-2012/registering-and-processing-photos-acquired-two-cameras) to produce false color infrared (NRG) images from 108 of the pairs of near infrared (NIR) and visible photos taken on the [balloon flight over the agricultural field trials in New Hampshire]( http://publiclaboratory.org/notes/cfastie/5-29-2012/lee-nh-plotsfarmhack-meetup) in May.  NRG images highlight vegetation by displaying the NIR data as red, the Red data as green, and the Green data as blue, and are a common way to present satellite images of earth.  It’s sort of a parlor trick, but in this case it really helps to distinguish a single species in the cover crop plots.  Hairy vetch was planted in all the plots in September, but established well only in the plots treated with high carbon wood ash.  Hairy vetch is a distinct light pink color in these images, and the plots treated with wood ash are very easy to pick out.  It will probably be possible to estimate percent cover of hairy vetch in all the plots from these images.  Ideally, a classification routine could be trained to recognize the hairy vetch visual signature, but the pattern is so distinct that you could just outline the putative hairy vetch areas by hand and have a GIS program compute the area.

I submitted the 108 NRG images to Hypr3D and it only used [20 of them in a structure from motion model]( http://www.hypr3d.com/models/4fcb843b310f580001000017).  I might be able to extend the coverage some, but another program may be required. The [earlier visible light models]( http://www.hypr3d.com/models/4fc6910e74dbfb0001000091) did a better job including the entire study area because many of the photos were taken at a greater altitude and included larger areas of the field, and also because the NRG images are less sharp due to the registration of two photos (NIR and visible) and Hypr3D was not able to find their proper alignment.  The smaller area in this NRG model (just the eastern end of the plots) seems to have better 3D fidelity than the visible light model (the flat paths are almost flat).   

<iframe width="700" height="600" src="http://www.hypr3d.com/models/4fcb843b310f580001000017/embedded_viewer"></iframe>

We are still refining the workflow for this activity, but here is a rundown of some of the settings and steps taken to produce this model.

1. Format, partition, and install CHDK on 16GB SD cards for both cameras.
2. Visible light camera settings: Program mode, ISO 100, Infinity focus mode
3. NIR camera settings: Program mode, ISO 400, Infinity focus mode
4. CHDK settings, both cameras: Enable remote, Enable synchronous remote, Capture RAW, Shutter priority at 1/640 second.
5. Shutters triggered by the MK111 timer set to send pulses every 8 seconds (cameras shoot in synchrony every 16 seconds)
6. Radio control of shutters was attempted, but triggering was intermittent probably because I sent signals too quickly (it takes several seconds to save the RAW data [~17MB per photo])
7. Batch convert RAW files to tiff using RAWTherapee.
8. Use Ned’s ImageJ macro to register pairs of NIR and visible photos and output NDVI and NRG images.
9. Transfer EXIF data from jpg files to corresponding tiff files using ExifTool.
10. Downsample NRG tiff files to 1500 pixels across and output jpgs at 60% quality for Hypr3D.
11. Quit and have a beer when only 20 of the 108 images are used in the 3D model.

This cumbersome process was followed because we wanted to avoid jpeg lossy compression until the photos had been registered and used to compute NDVI.  That led to capturing RAW files which are huge, slow, must be converted, don’t have EXIF headers, and are a pain.  Pat Coyle has experimented with CHDK’s DNG files which at least have EXIF data. I’ll try that next.  (Hint: If you are thinking of trying this at home, considering using cameras that save RAW files natively.)