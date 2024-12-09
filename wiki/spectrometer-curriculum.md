---
title: 'Spectrometer Curriculum'
tagnames: spectrometer, education, curriculum
author: PeterDavidowicz
path: /wiki/spectrometer-curriculum.md
nid: 8899
uid: 169614

---

# Spectrometer Curriculum

by [bicwood](../profile/bicwood), [warren](../profile/warren), [DavidB](../profile/DavidB), [stoft](../profile/stoft), [PeterDavidowicz](../profile/PeterDavidowicz)

July 16, 2013 22:07 | Tags: [spectrometer](../tag/spectrometer), [education](../tag/education), [curriculum](../tag/curriculum)

----

<div class="alert">This page is still under active development and may be incomplete; please help to bring it to completion!</div>

###What is a Spectrometer and How Does it Work

Welcome to this introduction about the science behind PublicLab's DIY Spectrometer Project and to the science of spectrometry in general. Since attempting to describe the entire depth and breadth of these topics is far beyond the scope of these pages, this material is organized progressively to allow the reader to enter the text at their individual comfort level. For those with advanced interests, it is hoped that the related reference links at the end will be of benefit. Please keep in mind that this is, hopefully, a "living document" and a "work in progress", to which many have, and will, contribute. Many thanks to all.

If you'd like to try applying some of these concepts, take a look at the [Spectrometry Activities page](/wiki/spectrometry-activities)

##First, some basic concepts ...

###Energy

We live in a world of mass (our physical environment) and energy (visible light, heat, radio waves, sound and all its other forms). The human body can expend energy (to run, play and get up in the morning) and can detect energy in the form of ultraviolet light (when we tan, or sunburn), visible light (the colors of the rainbow) and infrared (as heat), sound waves (speech, music, etc.) and pressure (sense of touch) but not radio waves, x-rays, cosmic rays and the like. All of these are forms of energy which are transmitted through vibrations. The difference between them is how fast the vibrations cycle; their frequency in number of cycles per second.

![EMSpectrum.jpg](/system/images/photos/000/001/019/medium/EMSpectrum.jpg)
( Image credit: Wikipedia )

###Frequency

The graphic above shows the relationships between frequency, wavelength and the type of energy defined within the electromagnetic spectrum. The tiny fraction of that spectrum which spans the visible, and near-visible, light is of particular interest because vision is so important to our lives and this range of light frequency, from ultraviolet through infrared is called the visible spectrum. While ultraviolet light energy has a higher frequency than infrared light, all light travels at the same speed in a vacuum (~300,000,000 meters/sec if you're curious). Yes, the speed of light changes when it enters glass but we'll save that thought for later.

_[ Tech Note: Light energy is referenced both as a particle (photon) and a wave (no mass) and both have meaning but in different contexts. For discussions about light colors, wavelengths and spectrometers, we will refer to light as a wave. ]_

###Wavelength

Since light energy travels at a fixed speed but is also vibrating at some frequency, the distance from one ripple of an energy wave to the next is directly related to the frequency. When you toss a pebble in a pond, you can see the ripples of energy from the pebble and you can see the distance between them which remain roughly the same as they move. For simplicity, if we assume ripples in a pond always travel at the same speed, like the speed of light as a constant, the closer the ripples are together the higher the frequency. This means that we can talk about either the frequency or the wavelength of light energy as they are directly related.

_[ Tech Note: Frequency(f), wavelength(lamda) and velocity(c) are related by the expression     f * Lamda = c.  Frequency has units of oscillations per unit time.  The number of oscillations is a count, a pure number with no units.  Time is usually measured in seconds  so the units of frequency are  /s (per second).  The units of wavelength are length or distance, usually measured in meters(m) so the units of lamda are meters(m).  Multiplying the two together produces units of  m/s, which are units of velocity.]_

###Human Vision

Our eyes detect only the visible light spectrum; from the deep reds just above infrared to the deep violets just below ultraviolet. Most of us can detect red from blue (except for those with some color deficiency) and we can detect various shades of colors and some color intensity. However, we are not very adept at measuring color or color intensities. In fact, our brains are part of our visual system and we can easily be fooled into seeing colors which are not really there. Ah, but what if we could! That could be fun and now you can -- indirectly -- using a spectrometer.

###Spectrometers

A spectrometer in its simplest form is just an optical device, like a prism, which separates light into separate wavelengths (by frequency) so the amount of light energy at each frequency can be observed -- the light's spectrum. You have probably seen the rainbow colors (visible spectrum) produced by a prism, a sun-catcher or a diamond ring. All of these are primitive spectrometers. What they lack is control over the direction of the incident light and the means to measure and record the energy across the spectrum they display. So, how do they work?

###Refraction

Light travels in straight lines within a medium of constant density. Light from your flashlight shines in a straight "beam" until it hits an object or travels through some material other than the air around you. However, if light shines through air (very low density) and then through water (high density) the direction changes. Refraction is this change in direction of a "ray" of light resulting from the light wave transitioning between different densities at an angle other then 90 degrees (i.e. not shining your flashlight directly towards a window, but at and angle). You've seen this "bending" effect when you look into a pool of water or look at a spoon in a glass of water; objects appear "bent" or even "disjointed". When light enters glass, from air, the density of glass is much higher than air so the light refracts and the change in angle of the path of light. If the light then exits the glass, back into air, and exits at the same angle as it entered, the direction of the light will return to it's original angle.

![Refraction-3.jpg](/system/images/photos/000/001/020/medium/Refraction-3.jpg)
( Image credit: Wikipedia )

_[ Tech Note: Refraction is a result of a decrease in the phase velocity of the light when it enters glass which is why a lens is able to focus light. ]_

What makes the concept of refraction important to the concept of spectrum is that the angle of bending is dependent on the color (frequency or wavelength). Since white light (like light from the sun) contains a wide spectrum of colors, we see light shining through a prism or sun-catcher "split" into a rainbow of colors.

_[ Tech Note: The shorter wavelength light (blue, violet and ultraviolet) refracts more than longer wavelength light (yellow, red and infrared) when transitioning from low density (air) to high density (glass). If the "entrance angle" is not the same as the "exit angle" (i.e. a prism shape instead of a flat piece of glass), both the entrance transition and the exit transition bend the light in the same direction and at equal angular change. ]_

This also explains why such a rainbow of color appears so brilliant in sunlight but rather "dull" by comparison from a desk lamp; the spectra are not the same and sunlight contains many more colors (a much wider spectrum).

###Diffraction

Another method of separating light waves into separate wavelengths for observation is diffraction. Instead of bending light by changing the density through which the light travels, the nature of light as a wave can be exploited. A very thin, flat sheet of material constructed with a set of reflective lines and transparent spaces is called a diffraction grating or phase grating. The result of a ray of white light striking a diffraction grating is similar to the effect of a prism in that they both produce a rainbow spectrum. However, diffraction gratings have the advantage of being physically thin and often inexpensive. In fact, the PublicLab spectrometers use an inner layer of a common DVD disk as a diffraction grating because of the narrow spacing of the DVD "lines" which are imprinted there; designed to store digital data. ( A DVD is not ideal because the lines are not straight; they are designed in an arc. However, such a small area from the "outer rings" of a DVD are used for the PublicLab Spectrometer, that this error can be ignored in this practical, yet inexpensive, measurement device. )

![Refraction-5.jpg](/system/images/photos/000/001/067/medium/Refraction-5.jpg)
( Image credit: communicatescience.com )

The Left graphic below shows the difference between diffraction and refraction. Note that diffraction produces a symmetrical pair of spectra plus the original non-diffracted light in the same direction at the source (0-deg). Note also that the prism refraction angle is higher for UV light while the diffraction angle is lower for UV light.

The Right graphic shows how light waves add and cancel from the effect of the lines and spaces of a diffraction grating. The angle of diffraction where the waves add is in direct proportion to the wavelength of the light passing through the spaces.

![Diffraction-3.jpg](/system/images/photos/000/001/021/medium/Diffraction-3.jpg)
( Image credit: Wikipedia )

_[ Tech Note: To understand this concept, imagine a "narrow beam of light" where the light "ray" is a wave; traveling at the speed of light with the length of each wave directly related to the color of that light. Also imagine that the light wave is like a flat sheet when it hits an object; called a planar wave. Now imagine this "flat wavefront" hitting a flat object like a mirror. What happens? Simple, the light wave bounces off. What happens if there's a tiny hole in the mirror? Some of the light gets through but it changes from a "flat" wavefront to a "spherical" wavefront but there is still no diffraction. So, what if there were two tiny holes very close together? Each would let some light through and each would have a "spherical" wavefront, but the two wavefronts would combine (interfere) depending on the spacing between the two holes. At some angles, relative to the original light ray, the waves would "add" and at other angles the waves would "subtract". This is called an interference pattern. If, instead of holes, narrow slits are constructed so there are many, many wavefronts interacting, the result is called diffraction. ]_

_[ Tech Note: Diffraction gratings are constructed in two forms; 1) reflection and 2) Transmission. The lines (with clear space of equal width between) of the inner layer of a DVD are made of a reflective material so the DVD performs both as a reflective and a transmission grating. The DIY PublicLab Spectrometer uses the DVD material only as a transmission diffraction grating. ]_

**Next, let's explore a practical device ....**

###Digital Spectrometers

Digital cameras, including computer webcams, contain a silicon imaging sensor chip which converts light energy to electrical voltages and then to digital data which can be recorded and analyzed by computer. By passing light through a diffraction grating, the light can be separated into its spectrum and a digital camera, like a webcam, can convert that spectrum into computer data. This is what the PublicLab Spectrometer devices are designed to do. They let you indirectly "see" the light spectrum from ultraviolet through infrared and measure the energy at each wavelength -- something more than what your eyes are able to do. However, there is one more required element; light from the source must be directed in a narrow, parallel "beam" at the diffraction grating.

###The Slit

The PublicLab spectrometer, like many spectrometers, is contained within a black enclosure with light only entering through a narrow slit. The slit is a simple and inexpensive method to simulate collimated light; light traveling in parallel lines from a source. Light from the sun, filtered through the leaves of a tree, produces reasonably parallel "collimated" light because the sun appears quite small in the sky. If a light source for the spectrometer is some distance away and must pass through a very narrow slit, then that light will also be reasonably "collimated". However, it is not perfect, so the lens of the webcam is adjusted to focus on the slit. Keeping the slit very narrow (~0.010 inches) improves the resolution (detail) of the webcam output spectrum but there is also less light -- it is a trade-off, but narrow slits are generally beneficial.

###DIY Spectrometer System

Putting all these concepts and physical elements together provides the plan for constructing a practical, yet inexpensive, spectrometer. Let's take a simplistic look at the device from the perspective of a light-ray coming from some source (like a light bulb).

1 - The light source is relatively "small and far away" with light going in all directions
2 - A little bit of the light strikes the slit so just a "thin beam" will reach the camera
3 - The inside surfaces of the spectrometer are non-reflective black to reduce stray light
4 - The light from the slit strikes the chip of DVD, which is mounted at an angle
5 - The DVD diffracts the light into it's spectrum - each color is a different angle
6 - The DVD is mounted to the camera's lens to shine the spectrum into the camera
7 - The DVD/Camera angle is set to provide the rainbow spread across the camera image
8 - The camera image is read by computer software to collect the spectrum data
9 - The camera image data has 3 sets -- Red, Green and Blue
10 - The Red, Green and Blue is converted by software into a final intensity spectrum

_[ Tech Note: The "length" of the slit determines how "wide" the spectral band appears in the camera image. Looking at the camera image (UV to the left and IR to the right) the longer the slit the wider (top to bottom in the camera image) the spectral image. Actually, the slit need be only about 1/4-inch long as only the center of the spectral band is measured. ]_

_[ Tech Note: The "width" of the slit must be very narrow. If the slit width were large, the spectral image would have very low resolution (i.e. "smearing" of spectral peaks). Using sharp edges, slits with only 1/4 mm (0.010-in) are possible and do improve the resolution of spectral lines like from a CFL. ]_

_[ Tech Note: The light from the slit strikes the diffraction grating at an angle in the PublicLab device. A spectrometer can be built where the light strikes the grating "head on" (at 90-deg) and the spectral colors exit at an angle. However, it is convenient to mount the DVD sliver directly to the camera and let the light stick the DVD at an angle instead. The range of wavelength are then nicely spread across the image chip. ]_

###Light Spectrum

Every light source has its own spectrum even though the spectrum from separate light sources of the same type can be extremely similar. This similarity is extremely useful as it allows many users to compare and calibrate their own device so the spectral data they collect can be compared.

Remembering that the spectral colors from light are "spread" across the camera image, it is easy to understand that the position of the light from each color is at a unique position within the image. Given the mechanical construction of the PublicLab Spectrometer, the ultraviolet end of the spectrum appears to the "left" and the infrared end of the spectrum appears to the "right" within the image. Also remembering that digital images are formed as a 2-dimensional array of pixels (single points of light; each with a Red, Green and Blue intensity value). It is easy to now understand that each DIY Spectrometer has a fixed association between its image pixels and the spectral colors (wavelengths).

###Converting Rainbows to Plots

Now that we know the camera image can capture the rainbow of spectral colors produced by the light source spectrum and the diffraction process, this "rainbow image" must be converted to spectrum data; a plot of light intensity vs wavelength. We also now know that the spectrum colors, with their respective intensities, are spread across the webcam image and there is, therefore, a direct association between image pixels (left to right) and wavelength which results from the diffraction effect. Computer software can read individual pixels from the 640 (wide) x 480 (high) array of pixels which form a single image. Assuming the 'rainbow' created by the DVD diffraction is aligned horizontally within the image, we need only read out one horizontal line in the middle of the rainbow to get all 3 RGB spectral data curves.

_[ Tech Note: By using a webcam, a series of image frames can be acquired. This allows averaging a grouping of several pixel "lines" over several image frames which will help smooth the noise and produce more repeatable results. ]_

Webcams are normally used to capture computer user's live images in color so every camera image pixel will have three (3) intensity values; one each for Red, Green and Blue (aka. RGB). Optical RGB filters plus camera electronics send this data, one image frame at a time, to the computer via a USB cable. If the source light contains blue, the Blue filter will easily pass that color and the blue value for that pixel will show a high intensity value. However, the Green filter will pass only a little of the blue light and the Red filter may pass none at all. So, each of the 3 RGB channels from the camera produces an intensity profile which is modified by a color filter.

_[ Tech Note: Digital camera imaging chips can only detect grey; they just respond to total, broadband light intensity. The RGB filter provides color detection. The camera contains an RGB optical mask known as the Bayer Filter. It is a repeating set of RGGB filters for repeating groups of 4 (2x2) pixels. A software algorithm (demosaiscing), in the camera, combines this data to estimate the RGB values for each pixel. The response curve for each RGB filter is designed to simulate the color response of the cone cells in the human eye. Since Green is the most sensitive wavelength for the eye, there are 2 Green filtered pixels for every group of 4; the other two are Red and Blue. ]_

_[ Tech Note: By reading the RGB values from a sequence of pixels (eg. a 'horizontal' row from the middle of the spectral rainbow image) and connecting the dots, a plot of Red, Green or Blue filtered intensity vs pixel (which can be calibrated to wavelength) can be created. For every pixel (wavelength) the RGB values can be combined mathematically to create a new plot of spectral intensity vs wavelength -- the final output data of the spectrometer. Typically the mean value (R+G+B)/3 value is calculated at the spectral intensity although it is only an approximation based on the assumption that the RGB filters are uniform bell-shaped functions symmetrically positioned in center wavelength. The overlap between the filter curves is not ideal so there are 'ripples' in the data but since the DIY spectrometer is not a precision laboratory device, they can be forgiven. There are more significant issues to address. ]_

The graphic below shows the camera's image of the DVD's diffraction pattern from a CFL bulb. Horizontal lines of RGB pixel values from that image are combined to show the spectral plot of that CLF source. Note that although the camera image background looks black, it really isn't; it's just very dark. However, the residual noise level, clearly visible at either end of the plot, shows that the signal is not zero.

![CFL-1.jpg](/system/images/photos/000/001/069/medium/CFL-1.jpg)
( Image credit: Stoft )

_[ Tech Note: The camera output is in the JPEG image format which, when combined with the Bayer filter, gives only an approximation of the RGB intensities for each pixel. The resulting errors for the PublicLab Spectrometer have been discussed in great length but it is best to keep these errors in perspective. 1) Imaging devices which do not have a Beyer filter are expensive and much more complex to use. 2) The errors in the demosaiscing algorithm, which extract per-pixel RGB from the groups of 4 pixels with RGGB filtering, are small compared with errors from noise and low dynamic range. Yes, linear array sensors with 12-bit resolution and no Beyer filter provide much better results, but can be cost prohibitive for the DIY community. Severely "clipped" RGB data, when saved, is essentially useless and so is a much bigger issue than JPEG related errors. ]_

###NO Clipping!

The spectrometer is easily overloaded; i.e. it is easy to provide too much light and overexpose the camera. Like overexposed photos, the spectral data "washes out" to maximum value; a form of distortion called "clipping". Clipping is bad because the measured intensity is limited to a maximum value and therefore cannot provide the true intensity of the spectra within that sub-range of wavelengths.

_[ Tech Note: The Syba webcam has 8-bit technology which means each pixel can provide a numeric value (R, G or B) of 0 to 255. In reality, the Syba camera appears to have an internal limit of only 245. ]_

When observing the R, G and B channel data, it is necessary to set the light level so that none of the RGB data will clip. Otherwise, the resulting spectral plot data will be incorrect. It is easy to spot clipping because one or all of the RGB plots will "flat-top" on one or more peaks -- the plot line will look like it was "cut off". It is also important that the light level be high enough to ensure the RGB plot data uses the whole intensity range.

_[ Tech Note: Dynamic Range is limited for the Syba webcam because it only has 8-bit intensity resolution. The top of the range is limited by a value of 245 and by the user's ability to set the highest RGB peak to just less than clipping. The bottom of the range is limited by background noise -- mostly a result of stray light leaking into the device. If the noise were high, like 25 counts, and the max peak were only 200, the dynamic range can be estimated as 20 x Log10( 200 / 50 ) = 12 dB. The '50' represents a weak signal which is only 2x the noise -- just barely measurable. Compared with laboratory equipment, 12 dB significantly limits the measurement capability of weak signals. ]_

###Peaks, Hills and Valleys

So, how do we 'read' a spectral plot? A narrow peak represents light with significantly more energy concentrated at, or around, a single color wavelength. Laser light is emitted at only one, single, very stable, repeatable wavelength and can provide a single reference wavelength. A CFL has several narrow "spikes", or "lines" in its spectrum which are common and the same in most CFLs. Since we know which wavelengths are emitted by a CFL, they are a useful light source for calibrating the pixel-to-wavelength relationship of the PublicLab spectrometer.

_[ Tech Note: Single spectral lines are a result of the transitions between specific energy levels at an atomic scale and thereby have specific emission frequencies. The sharp spectral lines of a CFL therefore result from elements and compounds within the CFL which are made to ionize. (EG: Hg at 404.6nm, Turbium at 453.5nm and Europium at 611.0nm.) At a larger scale, while we think of the solar spectrum as continuous, it actually consists of separate spectral lines; each a result of atomic scale energy properties. This also explains why the solar spectrum has "holes" in it -- wavelengths where no light is emitted. However, most of these "holes" are very narrow and thus difficult to detect with simple DIY devices. ]_

With broad-band light sources, like an incandescent or halogen bulb, a DIY spectrometer will show a relatively smooth curve instead of sharp spectral lines. However, the broad spectrum of the sun does not actually produce light at all visible frequencies as there are "holes" at specific wavelengths (see the image below). However, simple devices like the Public Lab device do not have the resolution to detect most of them.

![SolarSprectrumFromNOAO.jpg](/system/images/photos/000/001/109/medium/SolarSprectrumFromNOAO.jpg)
( Image credit: NOAO )

The absence of spectral lines or the attenuation of energy within a spectral region can also be of interest. Wavelength which display little intensity can result from either the absence of those wavelengths or from the absorption of those wavelengths. For example, the light from the sun is broadband as we know from looking at a rainbow. But sunlight shining on a red sheet of paper will have very little blue or green as those wavelengths are being absorbed by the red paper.

###Relative Spectra / Attenuation

As referenced, a Spectrometer can observe a number of conditions: single spectral emission lines, broadband light sources, missing or attenuated spectral lines and relative changes in spectral intensity over the band. Pointing the Spectrometer at a light source can tell you the colors emitted by that source. The concept is to capturing a spectral curve of a broadband light to use as a reference, and then observe only changes to that spectrum. When a substance is placed between the same light and the spectrometer, the light absorbed by that substance can be measured. This measurement of change also applies to reflected light; as with colored paper which absorbs all colors except one. When measuring absorption, it is important that the only change is the addition of the sample to be measured. The light source and the spectrometer alignment must be stable and remain unchanged.


[....Editing to be continued..... -Dave ]

.
.

.

.

###Technical References

The Electromagnetic Spectrum:
http://en.wikipedia.org/wiki/Electromagnetic_spectrum

Refraction:
http://en.wikipedia.org/wiki/Refraction

Diffraction:
http://en.wikipedia.org/wiki/Diffraction

Diffraction Grating:
http://en.wikipedia.org/wiki/Diffraction_grating
.
.
Flame Spectra of some mineral elements:
http://webmineral.com/help/FlameTest.shtml

.
.
.

http://en.wikipedia.org/wiki/Photon

http://en.wikipedia.org/wiki/Fluorescence_spectroscopy

http://en.wikipedia.org/wiki/Absorption_spectroscopy

Rayleigh scattering in the sun and atmosphere.

http://en.wikipedia.org/wiki/Rayleigh_scattering

http://en.wikipedia.org/wiki/Optics

http://en.wikipedia.org/wiki/Lens_(optics))

http://en.wikipedia.org/wiki/Refraction

http://en.wikipedia.org/wiki/Dispersion_(optics))

http://en.wikipedia.org/wiki/Fraunhofer_lines

http://en.wikipedia.org/wiki/Chromism

http://en.wikipedia.org/wiki/Chromaticity_diagram

http://en.wikipedia.org/wiki/Image_sensor

http://en.wikipedia.org/wiki/Bayer_filter

http://en.wikipedia.org/wiki/Exposure_(photography)