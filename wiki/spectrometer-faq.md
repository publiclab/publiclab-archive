---
title: "Spectrometer FAQ"

tagnames: 'spectrometer, documentation, help, faq, absorption-spectrometry'
author: warren
path: /wiki/spectrometer-faq.md
nid: 243
uid: 1

---

# Spectrometer FAQ

by [Tark](../profile/Tark), [rdwill](../profile/rdwill), [BrentNewhall](../profile/BrentNewhall), [warren](../profile/warren)

May 17, 2011 23:19 | Tags: [spectrometer](../tag/spectrometer), [documentation](../tag/documentation), [help](../tag/help), [faq](../tag/faq), [absorption-spectrometry](../tag/absorption-spectrometry)

----

#FAQ#

Answers to some common questions about building, designing, & using a spectrometer. Also see:

* [Spectral Workbench Usage](/wiki/spectral-workbench-usage)
* [Spectral Workbench Help](/wiki/spectral-workbench-help)

----

##General questions

###My DVD-R is compromised (see above). Can I use a CD-R instead?###

On a CD the track pitch is 1.6 microns or 625 lines per mm.
A 3.95GB DVD-R has a track pitch of 0.8 microns or 1,250 lines per mm.
A 4.7GB DVD-R has a track pitch of 0.74 microns or 1,351 lines per mm.

So a DVD-R acts as a diffraction grating with 1,351 lines per mm and a CD-R woud have about half that. The lower line density on a CD-R means that the dispersion angle is lower - about 25.3 degrees, compared to about 64.8 for a DVD-R. This means that the spectrum would appear at different position in the camera field of view and may not even be within the field of view, if a CD is used.

###Do I calibrate against a CFL bulb then switch to a halogen bulb for taking spectrums?###

Yes, the CFL is only for wavelength (spectral) calibration, not intensity. So you can do it often just in case your device is "drifting" but it's not necessary for different containers or sample types.

###Are the spectrums taken by different people really comparable?###

> What if everyone has different setups from light source to model of camera to manufacturer of the DVD used for the diffraction grating?

We need to figure this out. One reason to do a big kit order as in the Kickstarter is to give everyone the same hardware. But I hope that as we get better at exposure calibration this will be less of a problem.

###Can you use a still camera with [Spectral Workbench](https://spectralworkbench.org) instead of a webcam?###

Yes but you have to manually upload the image, and sometimes crop it too. It's a bit slower, but you can then do long exposures, which makes for MUCH better sensitivity.

###How do I take spectra of very dim light?

See the above question -- use a still camera like an SLR with a long exposure capability. This may require a [foldable spectrometer](/wiki/foldable-spec) or a custom design to fit the camera.

###What camera should I use to build my own?###

> I have a Logitech 640x480 webcam -- should I upgrade to a 720p or 1080p webcam?

Any USB webcam will do -- HD is preferable and the higher resolution the better, but a good quality 640x480 is usable. We use [SYBA brand HD webcams](http://www.amazon.com/Syba-SY-CAM63014-Webcam-Laptop-Microphone/dp/B004BDOR8I/ref=sr_1_9?s=electronics&ie=UTF8&qid=1347478148&sr=1-9&keywords=syba+webcam) in the kits. Bigger sensors are better, as are ones good in low-light. (see above 2 questions)

###Why a dimmable light? Doesn't that mess up quantitative results?###

Some samples need a higher amount of light because they're just too opaque. We definitely need a way to quantify this. I was thinking something like HDR photography, or something. Mainly it's challenging because the webcams often do auto-exposure compensation and we have to [disable that](http://publiclaboratory.org/wiki/spectral-workbench-usage).  

###UV -- is this a better method than visible light?###

> Do you see clearer lines? Do materials absorb UV "better" than other wavelengths? Is there some particle-level difference in how light is absorbed?

The difference is that for poly aromatic hydrocarbons (and some other contaminants) there isn't a lot of well-known spectral identifying features (like absorbance lines) in the visible or near-infrared range. There's good literature about *fluorescence* spectroscopy, though, which is where UV light excites the material to actually glow, sometimes in the visible range. So for oil contamination, we're focusing on UV-fluorescence instead of visible light or infrared spectroscopy. Read more here: http://publiclaboratory.org/wiki/uv-spectrometry

###What's "wavenumber" vs "wavelength"?

Wavenumber is the inverse of wavelength, and some scientists prefer it (depending on what their background is -- as a general rule, chemists use wavenumbers while physicists and engineers use wavelength).  The wavenumber is simply the number of waves per centimeter, with the units listed as inverse centimeters. Wikipedia has a kind of esoteric but detailed explanation: http://en.wikipedia.org/wiki/wavenumber 

###Reflectance vs. absorption -- what's the difference?###

When light reflects off a material and into your spectrometer, it only interacts with the top layer of atoms or so. With transmission spectroscopy, light passes *through* the material, interacting with anywhere between a few microns and (with a liquid sample) a few centimeters of material before entering your instrument. There's just more sample to absorb light.

###Is "intensity" just the same as "brightness"?###

> I.e. what do we see from looking at the peaks that we don't see from just looking at the image itself?

The graph of intensity is easier to compare against another spectrum, as it's quantitative. It's also turning your perception of brightness into some numbers which you could use to automatically match with another spectrum from our library of spectra. But sometimes I do feel like you can visually pick out bright or dark lines with the naked eye much better. 

###Why do some spectra have distinct lines, and some don't?

> I think what I'm supposed to be looking for are absorption lines -- but it seems like with spectra of many materials it's hard to get the kind of clear lines you get with gas tubes (say, in pictures on the internet).  If not lines, what's useful to see here?

This is where the graphs can help. If you can see a generally brighter region between a sample and control spectra, there's a broadband absorption. But that may not carry a lot of very specific information. With the pancetta samples, we could say, it's just blocking a lot of UV. Meaning it'd be a good sunscreen ;-)

###When I see dark lines in the CFL spectra, am I seeing absorption lines?

_Or am I just seeing the lack of emitted wavelengths?   (and if so, am I looking at "emission lines" as the converse of "absorption lines," and does that even make sense when I'm looking at a full spectrum light?)_

The CFL spectra are actually from fluorescence, hence "fluorescent light". So you're looking at the brightness lines where light is produced, not the missing dark lines where it's absorbed. Yes, you're right, it's kind of the inverse.

###What if I get a black image with a little smear of white light?

The DVD-R is probably compromised. To make a new piece: find a new blank DVD-R, cut it in half (it will shatter along the cut), then pull one half apart and cut a small square out of that.

###What do I do if I only get a spectrum along the top of the image?

Open SpectralWorkbench, then click the Configure button on the left-hand side of the interface. Move the Sample Row Height slider so that only that spectral part of the image is highlighted; ignore the black part. Then click the Back button.

----

##Assembly Questions##

###The blue LED in the Desktop kit is interfering with the image. What can I do?###

> Use a left over piece of the black paper to make a partition between the LED and the lens. Cut it to size and friction will keep it in place.

###I can't turn the lens, what gives?###

> Make sure you are grabbing the lens at the top. There is a serrated ring at the base of the camera, which looks like it might turn. It does not. That is not what you want. The lens itself is above that. **Heating the lens** with a hair dryer or a halogen desk lamp can also loosen the adhesive, but be careful!

----

##Unanswered questions -- aka research challenges!##



If you can answer 'em, move them up to the top section!
