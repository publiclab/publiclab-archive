---
nid: 9312
title: Spectra of Sparkfun Multicolor LED kit
path: public/static/notes/warren/09-10-2013/spectra-of-sparkfun-multicolor-led-kit.md
uid: 1
tagnames: spectrometer,leaffest,smartphone-spectrometer,leaffest2013,sparkfun,leds
---

# Spectra of Sparkfun Multicolor LED kit

<iframe width='100%' height='200px' border='0' src='https://spectralworkbench.org/sets/embed/566'></iframe>

This dataset has some failings, however -- I was unable to record the spectra at the same horizontal location on the spectrometer each time due to the setup being a little... haphazard. So the curvature of the spectra will introduce some error. Still, all of the peaks were wider than the calibration peaks, and so at the very least this can give us a bottom limit for the bandwidth for each LED:

https://spectralworkbench.org/analyze/spectrum/12106

I.e. if the calibration peaks are narrower than the LEDs, then it's not just because the spectrometer was out of focus -- the LEDs really don't have that narrow of a bandwidth:

<iframe width='100%' height='300px' border='0' src='https://spectralworkbench.org/spectra/embed/12106'></iframe>