---
title: How can I reduce ambient light inside the Desktop Spectrometry Starter Kit?
tagnames: spectrometer, spectrometry, question:spectrometry, answered, baseline, question:dssk, ambient-light, request:activity
author: warren
path: /notes/warren/09-19-2016/how-can-i-reduce-ambient-light-inside-the-desktop-spectrometry-starter-kit.md
nid: 13461
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/018/071/original/IMG_20150521_144640-2.jpg)

# How can I reduce ambient light inside the Desktop Spectrometry Starter Kit?

by [warren](../profile/warren) September 19, 2016 13:14

September 19, 2016 13:14 | Tags: [spectrometer](../tag/spectrometer), [spectrometry](../tag/spectrometry), [question:spectrometry](../tag/question:spectrometry), [answered](../tag/answered), [baseline](../tag/baseline), [question:dssk](../tag/question:dssk), [ambient-light](../tag/ambient-light), [request:activity](../tag/request:activity)

----

Especially with the [new stability upgrades being explored][1], I wanted to look at different ways to reduce reflected and ambient light leaking and into and reflecting around the inside of the spectrometer box, because that makes high baseline noise when we capture spectra.

(Note that this is not a question about [noise over time][2], like where a pixel can vary in brightness randomly -- a separate issue.)

I've seen a bunch of different solutions for basically darkening and better sealing the box, and wanted to explore which work best (easiest/cheapest/simplest/darkest), especially for the above upgrade, which is currently shown in bare wood (not black).

- **Lining with black paper/cloth:** (see below image by @stoft) be aware that not all black colored material is absorbent in the infrared range too! Some are reflective.
- **Ink:** sumi ink, india ink, matte paint -- could suffer same problem as above)
- **Baffles:** paper "gates" which narrow the field of view to reduce "incident" light (see block with hole in below image)

  
![image description][3]

## Other solutions?

Is baseline light sometimes related to camera temperature? If it helpful to use the spectrometer in a cold room?

Another approach is to subtract out the baseline light in software, using a "blank" spectrum (covering the front slit) to read in just the baseline light. This is a little more complex, but [explored here][4] (read the comments especially). 

  
I know other folks have tried lots of techniques, so please post them here and we can compare/contrast. Thanks!

[1]: https://publiclab.org/notes/stoft/09-16-2016/stability-upgrade-mockup-for-plab-spectrometer-3-0#c15410
[2]: https://publiclab.org/notes/stoft/04-16-2016/spectrometer-noise
[3]: https://i.publiclab.org/system/images/photos/000/009/106/original/P3U-2.jpg
[4]: https://publiclab.org/notes/warren/02-05-2016/noise-removal-test-in-spectral-workbench-2