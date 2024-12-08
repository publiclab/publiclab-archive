---
title: Laser-cut the Desktop Spectrometry Kit v3 box
tagnames: spectrometer, kits, laser-cut, spectrometry, dsk, desktop-spectrometry-kit, upgrade:spectrometry, seeks:builds, laser-cutting, ponoko, replication:13560
author: warren
path: /notes/warren/02-15-2017/laser-cut-the-desktop-spectrometry-kit-v3-box.md
nid: 13931
uid: 1

---

# Laser-cut the Desktop Spectrometry Kit v3 box

by [warren](../profile/warren) February 15, 2017 20:43

February 15, 2017 20:43 | Tags: [spectrometer](../tag/spectrometer), [kits](../tag/kits), [laser-cut](../tag/laser-cut), [spectrometry](../tag/spectrometry), [dsk](../tag/dsk), [desktop-spectrometry-kit](../tag/desktop-spectrometry-kit), [upgrade:spectrometry](../tag/upgrade:spectrometry), [seeks:builds](../tag/seeks:builds), [laser-cutting](../tag/laser-cutting), [ponoko](../tag/ponoko), [replication:13560](../tag/replication:13560)

In doing some tests with the [Desktop Spectrometry Kit 3.0](https://publiclab.org/wiki/desktop-spectrometry-kit-3-0), I sent a test print to [Ponoko.com](http://Ponoko.com) -- a site that does mail-order laser cutting. I adjusted the design files to the colors they use to indicate cuts versus score lines (cuts that don't go all the way through, and act as creases to fold on).

[https://github.com/publiclab/spectrometer3/blob/master/production/lasercut-ponoko-15x15.svg](https://github.com/publiclab/spectrometer3/blob/master/production/lasercut-ponoko-15x15.svg) (note that this isn't full scale -- read on)

This is a work in progress, but it arrived, printed on the 15x15" square size (linked to above), but I messed up the scale, so it's a bit small. It would probably work fine as a spectrometer, but wouldn't fit the boards we're ordering, so I'll have to make changes:

![image description](https://publiclab.org/system/images/photos/000/019/563/large/tmp_6326-IMG_20170215_151107_667-1472221870.jpg)

## Issues

  
**Scale**: I need to adjust the size so it prints at the same size as the standard kit. Oddly Ponoko's size for their standard black paperboard is 15x15, not the more usual 12x24". This means we won't be able to do it on Ponoko's service at the full size, but I should be able to lay it out for 12x24 for most laser cutters.

  
**Scores**: on this one, most folds were fine, but the ones shown in the lead image are folded much further -- 180 degrees instead of 90\. So I think reinforcing them with tape OR doing a different kind of seam, like a dotted seam, would be best.

I know @pablo has lasercut this before -- have other folks attempted this? Any tips or design files to share?

  
**Update: **looks like these files won't fit all on a single 12x24" sheet -- see:

[  
](https://github.com/publiclab/spectrometer3/blob/master/spec-box-bottom.svg)

- [https://github.com/publiclab/spectrometer3/blob/master/spec-box-bottom.svg](https://github.com/publiclab/spectrometer3/blob/master/spec-box-bottom.svg)
- [https://github.com/publiclab/spectrometer3/blob/master/spec-box-top%2Bangles.svg](https://github.com/publiclab/spectrometer3/blob/master/spec-box-top%2Bangles.svg)

  
That's too bad! It'll have to be printed on two separate sheets for many laser printers.