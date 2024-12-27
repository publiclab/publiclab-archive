---
title: "PLab-3 Proto Slit Upgrade"

tagnames: 'spectrometer, spectrometry, desktop-spectrometer, upgrade:spectrometry, upgrade:dssk, seeks:builds'
author: stoft
path: /notes/stoft/10-03-2016/plab-3-proto-slit-upgrade.md
nid: 13515
uid: 54025
cids: 15592,15593,15611,15693,15696
---

![](https://publiclab.org/public/system/images/photos/000/018/253/original/Slit-11.jpg)

# PLab-3 Proto Slit Upgrade

by [stoft](/profile/stoft) | October 03, 2016 06:44

October 03, 2016 06:44 | Tags: [spectrometer](/tag/spectrometer), [spectrometry](/tag/spectrometry), [desktop-spectrometer](/tag/desktop-spectrometer), [upgrade:spectrometry](/tag/upgrade:spectrometry), [upgrade:dssk](/tag/upgrade:dssk), [seeks:builds](/tag/seeks:builds)

----

**Abstract**

The [PLab-3 Upgrade Proto](https://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype) spectrometer has three optical components; the slit, the diffraction grating and the camera/sensor. While professional spectrometers often include additional optics to collimate the light from the source, with care, the PLab simplified design, with only a slit, can still provide usable results.

A well-formed slit approximates a point source so given some distance between slit and camera, with camera properly focused, spectrometer resolution is optimized. While the film-based slits are convenient, because the slit width is photographically controlled, the film slits are not without optical defects.

As the slit width drops (to improve resolution) the photographic "blurring" at the edges becomes a larger percentage of the "gap" and thus greater defects of this optical device. The ideal optical slit is formed by empty space between two very sharp edges. Here is a simple way to build an "air-gap" slit with well defined, controlled, parallel edges.

**Update** (20161018)

Science is an evolutionary process. Above, I noted that the slit is an optical component and, as such, it is important to the measurement of diffraction. However it is also important to identify the degree to which the precision of the slit affects the quality or accuracy of the final spectral measurement. Initial comparative tests using a SANM CM-020 (original PLab-3 camera, 1600 pix) and 0.12mm slit (film and blade versions) show only a very slight improvement with the blades. This suggests: 1) a film slit has reasonable performance with a simple webcam and tiny lens, 2) building an accurate blade slit with good performance is not very difficult (as is shown here), 3) at about 0.5 nm/pix spectral data sampling of that SANM camera, blades do not provide substantial performance improvement over a film-based slit and so 4) the spectrometer resolution limits mostly lay with other design factors. However, ongoing work at higher resolutions may provide additional performance details to further clarify slit performance.

[![Plot0p12FilmBlade.jpg](https://publiclab.org/system/images/photos/000/018/523/large/Plot0p12FilmBlade.jpg)](https://publiclab.org/system/images/photos/000/018/523/original/Plot0p12FilmBlade.jpg)


**Instructions**

This method is based on the wood part design on my previous PLab-3 Upgrade Prototype parts but could easily be adapted. Start with a "divider" which is just a 1.5x2.0x0.25 block with a 1/2-in hole positioned inline with the optical path.

[![Slit-01.jpg](//i.publiclab.org/system/images/photos/000/018/240/large/Slit-01.jpg)](//i.publiclab.org/system/images/photos/000/018/240/original/Slit-01.jpg)

Next, cleanly cut the block in half, mid-line of the hole. (A block w/o hole could be used; just  cut in half and then cut a notch in both parts for the light path.) What is important is that the cut is clean and straight (I used a table saw); sand flat if needed but the two parts should mate smoothly. I then used 2 layers of double-stick tape to adapt to single-edged safety utility razor blades. Tape the same side of each block either side of the hole.

[![Slit-02.jpg](//i.publiclab.org/system/images/photos/000/018/241/large/Slit-02.jpg)](//i.publiclab.org/system/images/photos/000/018/241/original/Slit-02.jpg)

With the block vertical against a flat surface (hole down) and one razor blade parallel with sharp edge against the same surface, attache the blade to the block.

**[ Note: Doing this accurately means that the "mating surface" of each block half will be perfectly aligned and perfectly parallel. ]**

[![Slit-03.jpg](//i.publiclab.org/system/images/photos/000/018/242/large/Slit-03.jpg)](//i.publiclab.org/system/images/photos/000/018/242/original/Slit-03.jpg)

[![Slit-04.jpg](//i.publiclab.org/system/images/photos/000/018/243/large/Slit-04.jpg)](//i.publiclab.org/system/images/photos/000/018/243/original/Slit-04.jpg)

Now add one layer of double-stick tape to the block edge of only one of the blocks. This tape will re-attach the two blocks together again.

**[ Note: Because of the previous alignment of the razor blade edges to the surface of the block edge, the thickness of the tape will set the spacing of the blade edges -- thus automatically forming a very parallel slit. ]**

[![Slit-05.jpg](//i.publiclab.org/system/images/photos/000/018/244/large/Slit-05.jpg)](//i.publiclab.org/system/images/photos/000/018/244/original/Slit-05.jpg)

Lay the blocks on the blade sides and stick them together.

[![Slit-06.jpg](//i.publiclab.org/system/images/photos/000/018/245/large/Slit-06.jpg)](//i.publiclab.org/system/images/photos/000/018/245/original/Slit-06.jpg)

[![Slit-07.jpg](//i.publiclab.org/system/images/photos/000/018/246/large/Slit-07.jpg)](//i.publiclab.org/system/images/photos/000/018/246/original/Slit-07.jpg)

[![Slit-08.jpg](//i.publiclab.org/system/images/photos/000/018/247/large/Slit-08.jpg)](//i.publiclab.org/system/images/photos/000/018/247/original/Slit-08.jpg)

[![Slit-09.jpg](//i.publiclab.org/system/images/photos/000/018/248/large/Slit-09.jpg)](//i.publiclab.org/system/images/photos/000/018/248/original/Slit-09.jpg)

Glue the assembly to the support board of the spectrometer.

[![Slit-10.jpg](//i.publiclab.org/system/images/photos/000/018/249/large/Slit-10.jpg)](//i.publiclab.org/system/images/photos/000/018/249/original/Slit-10.jpg)

[![Slit-11.jpg](//i.publiclab.org/system/images/photos/000/018/250/large/Slit-11.jpg)](//i.publiclab.org/system/images/photos/000/018/250/original/Slit-11.jpg)

Add some black paper to reduce reflections and any stray light paths around the blades.

[![Slit-12.jpg](//i.publiclab.org/system/images/photos/000/018/251/large/Slit-12.jpg)](//i.publiclab.org/system/images/photos/000/018/251/original/Slit-12.jpg)

Add more black paper to reduce reflections and then a black paper cover.

[![Slit-13.jpg](//i.publiclab.org/system/images/photos/000/018/252/large/Slit-13.jpg)](//i.publiclab.org/system/images/photos/000/018/252/original/Slit-13.jpg)

