---
nid: 10476
title: PLab's WebCam (Non)Linearity
path: public/static/notes/stoft/05-17-2014/plab-s-webcam-non-linearity.md
uid: 54025
tagnames: spectrometer,quantitative,linearity,intensity
---

# PLab's WebCam (Non)Linearity

We all know that when looking at the spectrometer's color band, and the associated spectral response curve that the curve moves up as the light source gets brighter. However, it is not obvious whether or not the measured value increases by the same percentage, or ratio, as the light intensity from the source. So, how do we find out?

**Options**

1 - We could use a variable light source -- but it is very difficult and expensive to create a known intensity this way. (Simple dimmers are very non-linear.)

2 - We could insert neutral density filters of known attenuation ('darkness') which would change the light intensity -- but again those are expensive and hard to find.

3 - We could simply insert a series of different apertures (openings in a baffle) between the light source and the webcam -- and then measure the physical size of the aperture and calculate the area. Since the amount of light is directly proportional to the aperture area, we have a simple, cheap but fairly accurate variable intensity light source.

**Implementation**

The source used was a broadband Solux halogen bulb with diffuser and the 'aperture/baffle' was simply cut from heavy black paper. It was important to have only a single variable (the aperture) so the light source, baffle,  slit, diffraction grating and webcam remained in a fixed position. It should also be noted that in this configuration, the webcam is operating at maximum sensitivity but that camera 'gain' is static -- it is not changing because most of the field is close to black so there is very little total light entering the webcam.

**Results**

The main plot above shows the following:

1 - The webcam response is actually fairly linear -- meaning that if you double the light intensity, the image pixel value also roughly doubles. This is good in that the spectrum curves that users view are not terribly inaccurate.

2 - While the silicon sensor inside the webcam is totally linear, the camera's electronics and internal firmware attempt to compensate to make the image response more suitable to that of the human eye. This effect can be seen where the Green plot line deviates from the idealized 'straight-line linear' response plotted in black.

3 - The measured response (Green) data is taken from the 'center' of the Green region of the spectral response band produced by the halogen light. Because of the webcam's 'RGGB' bayer filter, the camera is more sensitive to green light, just like the human eye. Red and Blue have similar curves but are more difficult to measure because of over-exposure in the green.

4 - SpectralWorkbench software could be modified to approximate this non-linear curve as this correction would be the same for every PLab webcam (of the same type). A simple sine-wave approximation looks to be an easy first-order solution.

5 - Finally, using this simple correction would also benefit HDR algorithms in helping them minimize projection errors.

