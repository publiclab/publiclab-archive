---
nid: 7917
title: HDR: In search of High-er Dynamic Range
path: public/static/notes/stoft/5-25-2013/hdr-search-high-er-dynamic-range.md
uid: 54025
tagnames: spectrometer,calibration,hdr,attenuation
---

# HDR: In search of High-er Dynamic Range

<strong>Abstract</strong>

By adapting the DSLR photography concept of HDR to the webcam spectrometer, plot results show that the signal detection range can be increased and that measurement capabilities are probably improved as well.

<strong>Background</strong>

While searching for means of making absorption measurements using the Syba webcam spectrometer, I've found a number issues:
- Since over 95% of the image area is intentionally dark, the webcam's auto-exposure runs at maximum sensitivity (noisy but relatively stable)
- Maximum exposure means maximum dark noise (noise limits dynamic range)
- The webcam image data is limited to 8-bit resolution (normally 0-255) except that these jpeg images actually limit at 248
- The camera's Bayer filters have overlapping RGGB sensitivity (with higher green sensitivity) which is not uniform over the displayed visible wavelength

The result is that with CFL wavelength calibration alone, the intensity plots are completely uncalibrated. In addition, the diffracted light from the slit plus the DVD diffraction grating also has a wavelength dependent response. An example (from Edmund Scientific) is shown below. The lowest curve, at 1200 lines/mm is, is closest to that provided by a DVD at 1350 lines/mm. Onviously, it's not uniform with wavelength.

<img src="https://publiclab.org/sites/default/files/GtatingEfficiency_0.jpg" alt="GratingEffiency" />

In a previous research note: <a href="http://publiclab.org/notes/stoft/05-14-2013/in-search-of-spectrometer-measurement-and-calibration">http://publiclab.org/notes/stoft/05-14-2013/in-search-of-spectrometer-measurement-and-calibration</a> I attempted to perform an amplitude calibration using a broadband Solux 4700K lamp which has a published output intensity curve. While the calculation was relatively straightforward, the large dynamics of the resulting calibration curve suggests the system sensitivity errors are too large to be eliminated by calibration alone.

<strong>Possible Root Cause</strong>

The most severe issue appears to be a limited dynamic range; how much signal amplitude variation can be successfully detected between the noise floor and saturation at the top. Clearly, just looking at typical signals and noise, most plots show that this range is minimal. The easiest way to see this effect is when attempting to adjust the spectrometer to acquire the largest possible signal that is not saturated (clipping) in the RGB color plots. It can be a very touchy setup and saturation distorts the spectral intensity plot and gives false information. So, what to do?

<strong>High-er Dynamic Range</strong>

Digital photography has a complex but very effective technique called HDR (High Dynamic Range) in which (for stationary scenes) 3 images are taken very quickly with the first underexposed and the last overexposed by about 2 f-stops. The spectrometer does not have the luxury of 16-bit depth imager chip nor the extremely low noise of most DSLRs. However, with some compromises, it is possible to make the dynamic range "High-er" than it's present default.

<strong>Just 2 Scans</strong>

For now, I've only found means of using two spectra, not three like the traditional HDR concept, to enhance the signal. However, the only additional tool required is any means of broadband attenuation. I described a very cheap and simple solution here: <a href="http://publiclab.org/notes/stoft/05-14-2013/in-search-of-spectrometer-attenuators">http://publiclab.org/notes/stoft/05-14-2013/in-search-of-spectrometer-attenuators</a>.

<strong>Three Steps</strong>

1) A first spectra is taken with attenuation in place such that all three RGB curves fall below saturation thus limiting errors in the curve shape by not "clipping" and thus losing data from the start. (Note that the webcam exhibits "soft clipping" near saturation. This is an artifact of the JPG DCT algorithm and makes for nicer images but is more difficult for performing HDR.)

2) The second spectra is taken with some, or all, of the attenuation removed such that some saturation is allowed. However, some easily recognized feature (like a "smooth bump" in the curve of one of the 3 RGB curves) which can be easily identified, is required to not saturate to allow tracking the effective amplitude change.

3) The two plots are then auto-magically combined in software to produce a new set of three RGB curves -- from which a new intensity plot can be extracted. The simplified concept is that the "flat tops" of the saturated curves are replaced with data from the unsaturated curves.

Why is this ok to do? Well, this method relies primarily on three assumptions:

1) that the intensity change caused by the broadband attenuator is relatively linear
2) that the webcam sensitivity is relatively linear with input light level
3) the spectra is not changing.

Is the system guaranteed linear? No, but measurements suggest that non-linearity is a much smaller factor than the dynamic range limitation. The proof of the pudding is in the plots so let's look at the HDR sequence. (For simplicity, "Standard" refers to non-HDR.)

HDR Pass 1: An unsaturated RGB plot of a Solux 4700K lamp

<img src="https://publiclab.org/sites/default/files/SoluxHDR-Pass1.jpg" alt="SoluxHDR-Pass1" />

HDR Pass 2: Saturation by removing attenuation

<img src="https://publiclab.org/sites/default/files/SoluxHDR-Pass2.jpg" alt="SoluxHDR-Pass2" />

HDR Merge: Pass 1 and 2 data into a single RGB curve set.

<img src="https://publiclab.org/sites/default/files/SoluxHDR-Merged.jpg" alt="SoluxHDR-Merged" />

Notice that 1) the max intensity is now at a higher value but w/o clipping and 2) the algorithm still needs a bit of tuning as a few transients remain in the merged curves.

<strong>HDR and Calibration</strong>

The RGB plots are generally converted to an intensity vs wavelength spectral response plot. Below are two such plots, both of which include amplitude calibration based on the Solux 4700K lamp as a broadband reference.

Standard measurement with Solux-Cal:

<img src="https://publiclab.org/sites/default/files/Solux-One-Cal.jpg" alt="Solux-One-Cal" />

HDR measurement with Solux-Cal:

<img src="https://publiclab.org/sites/default/files/Solux-HDR-Cal.jpg" alt="Solux-HDR-Cal" />

Which is right? Well, both obviously have error and I've not yet found reasonable (low cost) means to verify against a better standard. However, my assumption is that the first plot (the "standard") measured value curve appears to be limited because of dynamic range; i.e., too much of the signal is buried in the noise.

<strong>CFL Comparison</strong>

As a check, I measured the CFL Cal source to look for these same differences. The most important thing to notice is that the relative intensities of the spectral lines changed significantly -- the peak/background ratio is more like what one would expect from a CFL. Again, my assumption is that having greater dynamic range keeps noise from destroying the measurement since the merge is a linear operation.

The "Standard" Cal

<img src="https://publiclab.org/sites/default/files/CFL-One-Cal.jpg" alt="CFL-One-Cal" />

The HDR-based Cal

<img src="https://publiclab.org/sites/default/files/CFL-HDR-Cal_0.jpg" alt="CFL-HDR-Cal" />

As a final reference, here's the plot of the same CFL as used only for the wavelength calibration step. It did not use the Solux based amplitude calibration or HDR processing.

<img src="https://publiclab.org/sites/default/files/CFL-Cal.jpg" alt="CFL-Cal" />

The HDR algorithm is still a protoype which needs tuning, but I'm encouraged by several things: 1) Taking the data is relatively simple and semi-automated, 2) the merge process can be made automatic and 3) the concept of HDR shows indications of improving the quality of measurement data from this spectrometer design.

Cheers,
Dave
