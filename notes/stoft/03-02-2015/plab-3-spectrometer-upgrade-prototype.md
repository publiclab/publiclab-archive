---
title: 'PLab 3 Spectrometer Upgrade Prototype'
tagnames: spectrometer, barnstar:basic, spec-3, upgrade:spectrometry, upgrade:dssk, www.runsupplies.com, www.bitsnano.com
author: stoft
path: /notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype.md
nid: 11649
uid: 54025

---

![](https://publiclab.org/public/system/images/photos/000/009/106/original/P3U-2.jpg)

# PLab 3 Spectrometer Upgrade Prototype

by [stoft](../profile/stoft) March 02, 2015 09:23

March 02, 2015 09:23 | Tags: [spectrometer](../tag/spectrometer), [barnstar:basic](../tag/barnstar:basic), [spec-3](../tag/spec-3), [upgrade:spectrometry](../tag/upgrade:spectrometry), [upgrade:dssk](../tag/upgrade:dssk), [www.runsupplies.com](../tag/www.runsupplies.com), [www.bitsnano.com](../tag/www.bitsnano.com)

----

**Abstract**

Even though the ink is barely dry on the new manuals for the PLab 3.0 Spectrometer Kit, I'd like to propose an upgrade. Simple changes to the existing design can significantly improve the spectrometer's performance as is shown in the plots below.

**References**

[Spectrometer Stability](https://publiclab.org/notes/stoft/04-14-2016/spectrometer-stability)

[Spectrometer Noise](https://publiclab.org/notes/stoft/04-16-2016/spectrometer-noise)

[Spectrometer Time Filter](https://publiclab.org/notes/stoft/04-17-2016/spectrometer-time-filter)

[Spectrometer Noise Solution?](https://publiclab.org/notes/stoft/04-20-2016/spectrometer-noise-solution)

[Spectrometer Peak-Hold](https://publiclab.org/notes/stoft/04-22-2016/spectrometer-peak-hold)

[Spectrometer DVD-Alignment Auto-Correction](https://publiclab.org/notes/stoft/04-26-2016/spectrometer-dvd-alignment-auto-correction)

**Design**

The plot below compares the before-and-after upgrade of a CFL spectral response:

[![CFL_3vsUpgrade.gif](https://i.publiclab.org/system/images/photos/000/009/115/medium/CFL_3vsUpgrade.gif)](https://i.publiclab.org/system/images/photos/000/009/115/original/CFL_3vsUpgrade.gif)

Note the improved sharpness of the peaks and the added detail in the 575-630nm region which shows actual spectral information, not just added noise; while the background noise remains low.

[![CFL_435nmRez.gif](https://i.publiclab.org/system/images/photos/000/009/113/medium/CFL_435nmRez.gif)](https://i.publiclab.org/system/images/photos/000/009/113/original/CFL_435nmRez.gif)

This next plot shows a close-up of the 435nm Hg peak from a CFL. You can clearly see the improved resolution between the existing Vers 3.0, the 3.0-upgrade proto and extracting camera data at full 1600pix camera image resolution. (SoftwareWorkBench (SWB) will require an update to take advantage of this last improvement.) The FWHM value is the measure of the peak's Full Width at Half the Maximum of the peak's height. It is a common measure of resolution bandwidth for spectrometers.

[![CFL_545nmRez.gif](https://i.publiclab.org/system/images/photos/000/009/114/medium/CFL_545nmRez.gif)](https://i.publiclab.org/system/images/photos/000/009/114/original/CFL_545nmRez.gif)

The above plot shows a close-up of the 545nm double Hg peak from the same CFL spectra. While a FWHM value is not a meaningful measure in this case, the sharpness of the peaks and the more clearly defined double-peak give support to the improvement shown by the 435nm peak.

**Investigation:**
The folks at Public Labs (@Matthew, @Warren, et.al.) have designed some very clever origami which provides a low-cost, more streamlined and light-tight enclosure. The kit was fairly quick to assemble and the system immediately produced spectra using SWB on release 35 of Firefox. However, I was unable to obtain the well-defined CFL spectra I'd expected; prompting the following questions:

1 - Is the new Sanm camera focus an issue?
2 - How does the new slit design affect performance?
3 - What is the impact of the new grating / camera optical configuration?
4 - Does the longer baseline and construction leave options for improvement?

[Note: I addressed question #1 and #2 separately; here: http://publiclab.org/notes/stoft/02-26-2015/plab-3-sanm-camera-focus and here: http://publiclab.org/notes/stoft/03-01-2015/optimal-slit-width ]

The answer to question #3 came from writing some Matlab code to analyze the optical path, diffraction angles and camera aperture; the details of which are described below. The answer to question #4 came from observing the mechanics of the kit's construction; a lack of mechanical rigidity of the optical path from slit to grating to camera. While precise positioning of those components is not required, spectral stability and performance is VERY sensitive to any CHANGE in that positioning. The camera and DVD grating are mounted separately using Velcro and the slit is slid into the paper housing which is NOT attached to the base.

**Prototype:**
Remember that laboratory optical benches and commercial spectrometers are constructed on/with metal "base plates" because critical distances related to measuring light are so very small. So, the initial challenge was to find a simple, low-cost method to "hard-mount" all components to a common, rigid platform.

[![P3Upgrade-1.jpg](https://i.publiclab.org/system/images/photos/000/009/140/medium/P3Upgrade-1.jpg)](https://i.publiclab.org/system/images/photos/000/009/140/original/P3Upgrade-1.jpg)

The photo above shows a new configuration prototype and SWB plots below confirm an associated performance improvement.

[![SWB-CFL_3vsUpgrade.gif](https://i.publiclab.org/system/images/photos/000/009/116/medium/SWB-CFL_3vsUpgrade.gif)](https://i.publiclab.org/system/images/photos/000/009/116/original/SWB-CFL_3vsUpgrade.gif)

The construction is simple and the material cost is low. I used some Maple stock I had available which I trimmed to lengths of 1.5x0.25 stock and then cut to size and purpose. The important elements are glued to the base. The one flexible element is a "foam spring" which firmly holds the replaceable slit-elements. A rough sketch of the design is provided below.

[![Sketch-1.gif](https://i.publiclab.org/system/images/photos/000/009/119/medium/Sketch-1.gif)](https://i.publiclab.org/system/images/photos/000/009/119/original/Sketch-1.gif)


**Additional Details:**
For those that are interested, the following should help explain my observations and design choices.

**Optical Path:**
I wrote some Matlab code to create a graphic to visualize the optics. It calculates the theoretical rays of light from source, through the slit, through the DVD diffraction grating and then imaged by the webcam. ( I did not include the webcam lens optics as I don't have the specs but the focal length and approximate image sensor area are known -- so, for simplicity, I assumed an ideal lens and simply plotted ray extensions to the image plane.)

First, consider the graphic below which I believe approximates the PLab 3.0 design

[![RayTrace-25Deg.gif](https://i.publiclab.org/system/images/photos/000/009/142/medium/RayTrace-25Deg.gif)](https://i.publiclab.org/system/images/photos/000/009/142/original/RayTrace-25Deg.gif)

Notice that the grating incident angle is 25 deg from the grating normal so the exit light path bends another 20 deg at 524nm. Note also that the diffraction pattern is not symmetrical about the camera lens normal (the axis of the camera). This means the dispersion (the rate of change in pixel distance between diffracted wavelengths) is no longer linear and that adds difficulty to performing wavelength calibration with a CFL as the errors are magnified. (Read more about CFL Cal issues here: http://publiclab.org/notes/stoft/03-02-2015/cfl-cal-error-explained) Finally, notice that the diffracted light could quickly get 'cut-off' by the physical aperture so one end of the spectrum might not fully expose the camera sensor. This shows there are limits which can quickly restrict the positioning of grating and camera and downsides to asymmetry.


**DVD Grating:**
Many contributors, including myself, have tried to describe the origins of the mountings angles for the DVD grating and the camera optics. Hopefully, these diagram will help clarify the numbers behind the construction. Grating diffraction angles, which determine the exit angle for a given wavelength, are a function of the grating line dimensions, wavelength and incident angle.

There are two basic approaches to grating angle selection. The simplest to visualize is the grating mounted perpendicular to the light from the slit. Diffraction then forms two spectra; one above and one below that line. The spectrometer uses only one of these. The other method, and the one used here, is to direct the incident light at an angle to the grating and then the exit path from the grating will be perpendicular to the grating. The angular change is the same for either case.

Consider the symmetrical design:

[![RayTrace-45Deg.gif](https://i.publiclab.org/system/images/photos/000/009/141/medium/RayTrace-45Deg.gif)](https://i.publiclab.org/system/images/photos/000/009/141/original/RayTrace-45Deg.gif)

**Symmetry:**
If symmetry is assumed, then the remaining adjustment is the distance between grating and lens -- increasing the spacing widens the spectrum in the camera image but that adjustment range is only a few mm. For simplicity, I just try to leave a 1mm gap to avoid touching the grating against the lens housing. By mounting the polycarbonate-backed DVD grating at 45 deg, and importantly, mounting the camera at 90 deg to the grating, the spectrum will be closely "centered" within the camera's field of view. This keeps the dispersion linear (spectral line position change vs wavelength) and provides more leeway in the mounting distance between the grating and the lens (without the aperture cutting off either end of the spectrum).

[ Note: Symmetry is important to CFL calibration as discussed here: http://publiclab.org/notes/stoft/03-02-2015/cfl-cal-error-explained ]

The diffraction angle for Mode 1 (the lowest diffraction angle) is calculated as the arcsin( ((M*L)/d)-sin(IA) ) where M=mode (1 here), L=wavelength, d=grating spacing and IA=incident angle of the light to the grating. If the light from the slit is assumed to have an incident angle of 45-deg, Then the diffracted light at 524nm would exit the grating at 0-deg -- i.e. perpendicular to the grating. For the range of 395-650nm the light would exit at +/- 10-deg so the camera should be oriented on this 0-deg perpendicular to the grating to keep the spectra centered and symmetrical.

[ Note: The grating on a DVD is not floating in space and the physical material that supports the grating is part of the optical path. The index of refraction (IoR) for polycarbonate DVD material is about 1.55. The light from the slit is bent by the DVD's IoR at both sides so the end effect is only a small shift in position of the exit light path, not the diffraction angle, so can be ignored.]

**Camera Aperture:**
The webcam's physical aperture is only about 1.5mm (even though the lens is ~5mm diameter -- only the center is used to reduce distortion). This means the grating must be placed within a couple mm of the camera or else the ends of the spectra will be blocked by the aperture. This is why the DVD grating needed to be mounted directly to the webcam housing in version 1.

**The Slit:**
The slit is an easy way to increase the percentage of light reaching the diffraction grating which is collimated -- a parallel beam. However, a slit only offers an approximation of collimation and the exit light is far less parallel than a laser pointer. While using a slit is "pretty good", the real question is "how good?" and what are the implications.

[ Note: For more detail about the impact of slit width on spectral resolution look here: http://publiclab.org/notes/stoft/03-01-2015/optimal-slit-width ]

**Mechanical Sensitivity:**
The PLab 3.0 design nicely adds more distance between slit and DVD-Camera (about 200mm), which is good, and by placing the light source at some distance (across the room) from the spectrometer, the light exiting the slit will better approximate a parallel beam of collimated light. However, it's still not totally parallel and most light sources (like CFLs) are not point sources. This means that because the slit has some width, the light will spread a little before it reaches the grating. This causes some error because it effectively produces variation in the incidence angle of the light hitting the grating which will cause a variable position in the spectral line position on the camera image sensor. The result is some amount of "smearing" of the spectral information -- i.e. sharp spectral peaks won't be as sharp and the system resolution will be reduced. (In the graphic above, I used a wide 1mm slit; but only to demonstrate the potential impact of the slit and to calculate sensitivity.)

With slits as narrow as 0.09mm, this issue can be minimized. However, if the slit changes mechanical position, relative to the grating, then the spectral lines will also shift -- I call this "slit sensitivity" which I estimate at about 1.4 mils/pixel (or 12 mils/nm for 1600pix resolution). Slit sensitivity is a very significant source of error which means the slit must be mounted rigidly with respect to the grating and camera.

[![LineSpectra.gif](https://i.publiclab.org/system/images/photos/000/009/107/medium/LineSpectra.gif)](https://i.publiclab.org/system/images/photos/000/009/107/original/LineSpectra.gif)

The above Matlab plot was generated by stepping between discrete 2nm increments in wavelength and then calculating the affect of the slit's collimation error (or equivalent mechanical position noise). With zero error, the plot would have been just single spectral lines; one for every 2nm. The program arbitrarily superimposed Gaussian noise with a bandwidth equal to the slit-induced error to simulate the creating of a "smeared" spectrum resulting from slit "noise". This allowed calculating the sensitivity of the slit's mechanical position on the detected spectrum. If the slit moves due to mechanical change (like vibration) that will easily result in significant spectral errors. The theoretical numbers suggest that vibration can easily degrade a spectrum and that while measuring a source, the slit must not move more than a few thousandths of an inch (12 mils/nm sensitivity).
