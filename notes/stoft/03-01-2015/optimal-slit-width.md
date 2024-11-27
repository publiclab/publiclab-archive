---
nid: 11646
title: Optimal Slit Width
path: public/static/notes/stoft/03-01-2015/optimal-slit-width.md
uid: 54025
tagnames: spectrometer,slit,slit-width
---

# Optimal Slit Width

The PLab spectrometers use a thin slit to provide pseudo-collimated light which has been effective at displaying reasonably good detail for sources like the CFL. The CFL spectra contains several known wavelength emissions and is therefore convenient for calibration. However, there has remained the question of what is the "best" slit width; where "narrower" is assumed better. A number of users have also experimented with slit widths and even constructed mechanically-variable slits -- a difficult task.

**Results**
The PLab 3.0 Kit conveniently includes a sampling of slits widths as precision, high-constrast photographic film images which provide an opportunity to test theories concerning the effect of slit width on measurement resolution. Below are the plotted results from three spectral lines of a CFL source.

**405nm - The shortest visible Hg CFL wavelength:**
[![P3U-405nm.gif](https://i.publiclab.org/system/images/photos/000/009/132/medium/P3U-405nm.gif)](https://i.publiclab.org/system/images/photos/000/009/132/original/P3U-405nm.gif)

**435nm - The tallest single blue Hg CFL wavelength:**
[![P3U-435nm.gif](https://i.publiclab.org/system/images/photos/000/009/134/medium/P3U-435nm.gif)](https://i.publiclab.org/system/images/photos/000/009/134/original/P3U-435nm.gif)

**611nm - The tallest single red Europium CFL wavelength:**
[![P3U-611nm.gif](https://i.publiclab.org/system/images/photos/000/009/135/medium/P3U-611nm.gif)](https://i.publiclab.org/system/images/photos/000/009/135/original/P3U-611nm.gif)

**Notice the following:**

- As expected, slit width does affect the intensity at the camera
- The 0.09mm slit does have slightly higher resolution; a factor of 2x at best
- There is little to no resolution difference between 0.12mm and 0.18mm
- With the 0.09mm slit, at 435nm the resolution is also limited by the peak being defined by only 4 pixels -- effectively the Nyquist minimum sample rate
- The PLab3 FWHM limit is 2nm for SWB and 1nm for direct 1600pix image data

**FWHM**
This acronym stands for Full-Width-Half-Maximum which refers to calculating the bandwidth resolution by observing the "width" of a single, narrow spectral line at an intensity value equal to 50% of its peak height value. FWHM is a common measure of spectrometer resolution. For example, the 435 Hg (mercury) line of a CFL has a precise wavelength of 435.833nm and, because that specific wavelength comes from the atomic emission of Hg, that line is 1) very precise, 2) very stable and 3) has a real FWHM of near zero (or at least < 0.02nm). This means that whatever "width" the PLab spectrometer detects is due entirely to the resolution limits of the PLab spectrometer hardware.

**Measurement Conditions:**
The above data was extracted directly from the 1600x1200 image data of the Sanm webcam using a PLab 3.0 Kit with Upgrade (http://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype) with a 14W CFL source located about 6 ft away. The spectrometer was mounted in a vise so that all spectra had the same image location (within 10 pixels) and the orientation was precisely the same for all slit width test data. The image data was extracted using Matlab and 3 pixel lines of image data were averaged to assure there were no image transient anomalies None of the RGB channels had saturated.

**Conclusions:**
If the light source is bright, using the narrowest (0.09mm) slit will provide the best resolution from the 1600pix image data. However, if using SWB, which down-samples the Sanm image data to less than 50%, then the 0.09mm slit will not improve the resolution. The resolution, using the 0.09mm slit with direct 1600pix image data, is at best, 1nm. Using SWB, the limit is no better then 4nm because of data down-sampling. In addition, the resolution can be worse because of other factors such as noise, instability and the light source being too close to the spectrometer. If you cannot differentiate the double-peak at the green 546nm line, your resolution will likely be greater than 5nm or possibly worse.
