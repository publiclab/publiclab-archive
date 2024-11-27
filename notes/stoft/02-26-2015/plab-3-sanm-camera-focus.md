---
nid: 11642
title: PLab 3 Sanm Camera Focus
path: public/static/notes/stoft/02-26-2015/plab-3-sanm-camera-focus.md
uid: 54025
tagnames: spectrometer,webcam,focus,barnstar:empiricism,spec-3
---

# PLab 3 Sanm Camera Focus

There has been continuing discussion about PLab spectrometer camera focus since poor focus can add error. I have recommended that the camera should be focused on the slit, as opposed to infinity or any other value, because the slit forms the simulation of collimated light and, in practicality, forms the "object" being photographed. However, webcam optics are somewhat limited.

I decided to perform a visual graphics check of the PLab 3.0 SanmTech camera as part of my work on a PLab 3 upgrade prototype (http://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype). The hypothesis, that the depth of field (DOF) would make exact focus difficult, was only part of the problem. Below is a mosaic containing a number of equal-area-cropped PLab 3 Sanm camera images, taken of the same target, at 2-inch distance increments. The target is scalable and has more resolution than the camera to make observing detail more obvious.

[![Sanm1600x1200x24-FocusTest4x6.jpg](https://i.publiclab.org/system/images/photos/000/009/105/medium/Sanm1600x1200x24-FocusTest4x6.jpg)](https://i.publiclab.org/system/images/photos/000/009/105/original/Sanm1600x1200x24-FocusTest4x6.jpg)

[ Note: This image file was down-sampled from the original so as to limit the upload file size for posting here.]

Notice the following:

- At short distances, the lens is clearly not focused for that distance

- At the longest distances the image is fuzzy; because of the added distance

- The "best" focus is roughly 8-10 inches but still remains a bit "fuzzy"

- Near the best focus, the change in detail is not dramatic even over a distance change of 2 inches -- this suggests focus sensitivity is low

- None of the image graphics are very sharp -- likely due to he webcam lens, which is probably made of polycarbonate plastic

- Images remain fuzzy even though the camera physical aperture is only ~1.5mm diameter (the region of least distortion) while the lens is 5mm diameter.

- The depth of focus (DOF) is very broad so attempting to re-focus within even an inch would be difficult

**Conclusions:**
Webcam lenses make for fuzzy images, even when "in focus" but the DOF is so broad the spectrometer is not very sensitive to the slit-camera distance. So, focus distance is important, but better focus alone will not provide significant improvement over what the present PLab spectrometer designs provide (assuming proper construction and setup).

