---
title: Microscope build for Barnraising 2017
tagnames: barnraising, hackteria, microscopes, barnraising-2017, location:blurred, replication:15094, lat:29, lon:-90, place:cocodrie-la, with:wmacfarl
author: kgradow1
path: /notes/kgradow1/11-04-2017/prototype-build-for-barnraising-2017.md
nid: 15151
uid: 297929

---

# Microscope build for Barnraising 2017

by [kgradow1](../profile/kgradow1) November 04, 2017 17:10

November 04, 2017 17:10 | Tags: [barnraising](../tag/barnraising), [hackteria](../tag/hackteria), [microscopes](../tag/microscopes), [barnraising-2017](../tag/barnraising-2017), [location:blurred](../tag/location:blurred), [replication:15094](../tag/replication:15094), [lat:29](../tag/lat:29), [lon:-90](../tag/lon:-90), [place:cocodrie-la](../tag/place:cocodrie-la), [with:wmacfarl](../tag/with:wmacfarl)

# What we did:

Will adapted the stage he built last week at the Fab Lab to work with a 40mm objective and the Raspberry Pi Zero.

This is more proof of concept than replication, but it totally worked!

# What we did:

This version uses the Raspberry Pi Zero which is wifi enabled. That's lucky, because we came to the Barnraising with a bunch of Raspberry Pi cameras and no periperhals (mice, keyboards, monitors) to set them up! Will spent the morning mirroring the Raspberry Pi to his computer so we could use it to see the output from the camera.

![image description](https://publiclab.org/system/images/photos/000/022/192/large/microscope_technician.jpg "microscope_technician.jpg")

![image description](https://publiclab.org/system/images/photos/000/022/188/large/this_is_a_microscope_with_labels.jpg "this_is_a_microscope_with_labels.jpg")

# Setup and Materials\*\*Light source: \*\*3 mm white LEDS connected in parallel and glued to a popsicle stick.

![image description](https://publiclab.org/system/images/photos/000/022/193/large/IMG_20171104_082653.jpg "IMG_20171104_082653.jpg")

Optics assembly: 40 mm microscope objective connected to a Raspberry Pi camera (lens removed). For this version, we're using a Rasperry Pi zero, which is smaller, more portable, and wifi enabled. The objective is connected to the camera using a 3D printed Open Flexure adapter, available [here](https://github.com/rwb27/openflexure_microscope/tree/master/stl) (here is an example, printed for a [60 mm tube](https://github.com/rwb27/openflexure_microscope/blob/master/stl/optics_rms_60mm_d16f20_singlet_pd35.stl))

![image description](https://publiclab.org/system/images/photos/000/022/194/large/IMG_20171104_082728.jpg "IMG_20171104_082728.jpg")

\*\*Attaching the slide: \*\*We took our slide and positioned it over the lens and just taped it down to the board. This is obviously not a great solution, but when you're operating at high magnification, even very small movements will shake your sample and make it hard to focus. I mostly included this picture so you can see what the inverted scope looks like from the top.

![image description](https://publiclab.org/system/images/photos/000/022/195/large/IMG_20171104_082710.jpg "IMG_20171104_082710.jpg")

# What you can see:

We used a [.01 mm calibration ruler.](http://www.amscope.com/microscope-stage-calibration-slide-for-usb-camera-0-01mm-stage-micrometer.html?gclid=Cj0KCQjwyvXPBRD-ARIsAIeQeoEyRDZIPBIF0UAmqh85iHz0_qrcGYa7y1IcE6JEGj9vD02R8GMPNEMaAseHEALw_wcB) Each tick is 10 microns, or one hundredth of a millimeter.

![image description](https://publiclab.org/system/images/photos/000/022/189/large/IMG_20171104_082828.jpg "IMG_20171104_082828.jpg")

![image description](https://publiclab.org/system/images/photos/000/022/190/large/IMG_20171103_200920.jpg "IMG_20171103_200920.jpg")

![image description](https://publiclab.org/system/images/photos/000/022/191/large/micrometer.jpg "micrometer.jpg")