---
nid: 18106
title: What causes spectrum distortion?
path: public/static/notes/nathanathan/01-12-2019/what-causes-spectrum-distortion.md
uid: 365600
tagnames: spectrometer,distortion,hyperspectral,question:spectrometry
---

# What causes spectrum distortion?

The spectrums I am able to produce with the public lab smart phone spectrometer have an arc to them that causes problems when doing hyperspectral imaging. I am trying to figure out the optics that cause the arc in order to correct for it. Here is an example:

![image description](/i/28752.png "vlcsnap.png")

  
  
I believe I have figured out part of the cause. The diagram here shows why light of the same frequency appears lower on the imaging plane further from the center of the image:![image description](/i/28751.jpg "Spectrometer_Distortion.jpg")

Essentially light with the same wave length is diffracted up at the same angle towards the camera, and since light from the sides of the image has further to travel it will overshoot the focal point if it originates from the same height on the diffraction grating.  

  
However, the vertical lines of varying intensity on the spectrum appear to be pointing inward, and I have not been able to determine the cause. My diagram only accounts for warping in the y-axis. I thought it might be lens distortion, but when I photograph vertical lines from a few mm away I don't see that much distortion. The diffraction grating itself is not perfectly flat, so I'm wondering if that could be the cause. It is also possible that the gratings themselves have some built in arc. Is anyone able to shed some light on this phenomenon?