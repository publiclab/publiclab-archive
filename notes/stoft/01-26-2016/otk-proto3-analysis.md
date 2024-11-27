---
nid: 12618
title: OTK Proto3 Analysis
path: public/static/notes/stoft/01-26-2016/otk-proto3-analysis.md
uid: 54025
tagnames: spectrometer,oil,laser,oil-testing-kit,barnstar:empiricism,otk,otkbeta,dilution,wow,response:12593,grading-oils
---

# OTK Proto3 Analysis

**Preface**

In my previous Research Note 'OTK Proto3' ( https://publiclab.org/notes/stoft/01-19-2016/otk-proto3 ) I described the construction, validation, measurements and related observations for a new Proto3 OTK. With the device and matlab interface running, I proceeded with some measurements looking at hardware performance. As I continued updating the note, it became obvious that the OTK Proto3 measurement topic required it's own space simply due to the length of the note original Note. So, some of the relevant material contained in that note has been moved here.

**Abstract**

The OTK, which is based on the detection technique of using visual-spectrum UV fluorescence, has limitations because the fluorescence spectra of many PAH compounds are broad and so overlap. The OTK is also limited in PAH detection sensitivity by the 5 mW intensity of the 405nm UV pocket laser light and is limited in differentiation of materials containing PAH compounds by the webcam's 400-650nm detection bandwidth. This note explores the boundaries of those limits and describes one method of extracting and displaying information contained within OTK Proto3 measurement data from a small set of samples. This technique might be improved by increasing the number of reference samples. Note; Additional testing below has shown that EVO is not an ideal carrier, especially for low concentrations.

**Disclaimers**

[ Disclaimer: I'm an engineer, not a chemist, so I welcome additional observations and knowledge from those with a deeper understanding of the chemistry. The following simply represents my technical interpretation of OTK experimental results and the variety of information available online. ]

[ Disclaimer: The Public Lab "ND Crude" sample provided with the OTK may, or may not, actually be North Dakota crude oil. Some OTK 'crude oil' samples come from a "[hair preparation product](https://www.baar.com/Merchant2/merchant.mvc?Screen=PROD&Product_Code=9670)" which is claimed by that site to be "pure Pennsylvania crude oil without processing" but the provenance is unknown. The non-scientific evidence is only that it does smell like oil. If those samples are Pennsylvanian crude, it is certainly not North Dakota crude as some sample bottles are labeled in Public Lab kits, and the 'hair treatment' scam is selling the substance at $7,200 / barrel. Therefore, ALL references to ND Crude in this note are references ONLY to the label on the bottle provided with the OTK. At this time, I have no further information on its provenance. ]

**Extracting Measurement Parameters**

**1) Curve Peaks**

Considering the possibility of identifying the type of oil contaminant suggests the need to find spectral curve features to measure. Since the curve "peaks" are often noisy, the curve data is averaged and then equal-value nm points on that curve above and below the numerical 'peak' are found. The "peak" is taken as the nm point mid-way between these two values.

[![OTKP3_FIND_PEAK.gif](//i.publiclab.org/system/images/photos/000/013/859/medium/OTKP3_FIND_PEAK.gif)](//i.publiclab.org/system/images/photos/000/013/859/original/OTKP3_FIND_PEAK.gif)

All peak-detection methods have errors based on the assumptions about the meaning of the peak's noise and distortion. For broad peaks, this method is easy to code, has been reasonably consistent and is less a function of noise than simply finding the max value. Yes, CFL spectral curve peaks are easier to acquire. Sometimes using curve averaged data is more consistent.

**2) Curve Centroids**

Another simple measure is to calculate the centroid of each curve. The 2D centroid can be thought of in terms of "weighing" the curve on a balance where the centroid is the (nm) point of the curve where each side has the same "weight". This wavelength might give a measure of the predominant fluorescence which is not "distorted" by the visually subjective measure of where the curve peak appears to be located. Below is a plot of the centroids of the five (5) sample oil types:

[![OTKP3_5-OILS_CENTROIDS.gif](//i.publiclab.org/system/images/photos/000/013/830/medium/OTKP3_5-OILS_CENTROIDS.gif)](//i.publiclab.org/system/images/photos/000/013/830/original/OTKP3_5-OILS_CENTROIDS.gif)

Notice that there does appear to be some correlation. The list of oils is roughly in order of decreasing density and the vertical lines (of the same color) show an associated monotonic decrease in wavelength. It appears this means that as the oil molecules become "lighter" the majority fluorescence wavelength moves toward the UV. However, the actual mechanism is likely more complex -- eg. lighter oils may contain more related chemical compounds of types that fluoresce. Even so, this is an interesting correlation worth more observation.

However, an obvious cross-check is to observe the effects of dilution on the centroid which is easy by using various data from the 80W-90 dilution tests above:

[![OTKP3_80W_DIL_CENT_1.gif](//i.publiclab.org/system/images/photos/000/013/831/medium/OTKP3_80W_DIL_CENT_1.gif)](//i.publiclab.org/system/images/photos/000/013/831/original/OTKP3_80W_DIL_CENT_1.gif)

Note that the fluorescence intensity varies with the dilution of 80W-90 in EVO but so does the centroid of the spectral peak. Since a range of dilutions from 1/1000 to 1/2 were observed (and 1/200 to 1/2 plotted above), that dilution as a percentage can be plotted against the peak center and centroid wavelengths:

[![OTKP3_80W_DIL_CENT_2.gif](//i.publiclab.org/system/images/photos/000/013/832/medium/OTKP3_80W_DIL_CENT_2.gif)](//i.publiclab.org/system/images/photos/000/013/832/original/OTKP3_80W_DIL_CENT_2.gif)

The above plot contains an anomaly (probably just noise) and the curve is not linear but the relationship between 80W concentration in EVO and the associated fluorescence peak wavelength is clear.

Unfortunately, it appears that both oil "weight" and "concentration" affect the fluorescence peak wavelength. Some additional relationship needs to be uncovered to provide better correlation to oil type which is independent of dilution.

[ Note: The asymmetry of the broad fluorescence peak is an artifact of the peak's center location (~470nm) which is closer to the 400nm end than the 650nm end of the usable webcam bandwidth. This causes the "tail-end" of the curve at the 400nm end to effectively be cut off. As a result, the centroid is found by limiting the bounds of the calculation to the -6dB (25% of peak) either side of a curve peak's maximum level. ]

**3) Oil Type vs Spectral Peak**

Continuing this thought experiment, the following graphic was found on the SEOS web site. I shows the fluorescence spectra of a number of oil types when stimulated by 308nm UV laser light. The first thing to realize is that the OTK is only able to detect the central 400-650nm band -- which is primarily why the spectral curve shapes shown here look so different.

[![OTKP3_OIL_IN_WATER.gif](//i.publiclab.org/system/images/photos/000/013/833/medium/OTKP3_OIL_IN_WATER.gif)](//i.publiclab.org/system/images/photos/000/013/833/original/OTKP3_OIL_IN_WATER.gif)

Notice that the UV-side (shorter wavelengths) of the curves will be "rolled-off" by the webcam's 400nm limit. However, the webcam's 650nm limit may allow the extraction of more information about oil type; i.e. perhaps the concentration of PAHs, and thereby, more information about oil 'weight' or type.

Another interesting plot from the web [Source: The Milan Unit of IENI  (Institute for ENergetics and Interphases)] is shown below. Note that the 400-650nm detection band of the webcam indicates that the OTK will primarily be detecting fluorescence from PAH compounds with molecular weights greater than the common solvent benzene.

[![OTKP3_PAH_VS_WAVELENGTH.gif](//i.publiclab.org/system/images/photos/000/013/834/medium/OTKP3_PAH_VS_WAVELENGTH.gif)](//i.publiclab.org/system/images/photos/000/013/834/original/OTKP3_PAH_VS_WAVELENGTH.gif)

Looking closer, one of the higher concentration (4.36 ug/ml) PAH compounds listed for used motor oil is Fluoranthene. With a density of 1.25x water we might guess at a concentration of ~3.5 ppm. While low, the published spectrum from a 288nm UV excitation source provides an interesting example:

[![OTKP3_FLUORANTHENE.gif](//i.publiclab.org/system/images/photos/000/013/835/medium/OTKP3_FLUORANTHENE.gif)](//i.publiclab.org/system/images/photos/000/013/835/original/OTKP3_FLUORANTHENE.gif)

The plot results from analysis by a gas chromatography so there is obviously much more detail than provided by an OTK. What the plot shows is that the fluorescence spectra of individual PAH compounds found in oil (and there is a long list of them) will easily obscure the details of each other. This means that the only data which can be extracted from the OTK spectra will be the average of many PAH compounds (most of which will be large molecules) and can only suggest a general shift between lighter and heavier PAH compounds as the predominant indicator of the primary contaminant type.

**4) Crude Oil Spectra**

Each oil type appears to have its own unique "spectral signature" features yet since different oil types (including motor oils, etc.) can have similar features. This means that while each oil has its own spectra, it is not so easy to translate a spectra back to an oil type. The following plot from HyperVolatility.com shows the overall scale of crude oil in terms of weight vs sulfur content. It does not relate the data to fluorescence spectra but it does put measuring "crude oil" in perspective.

[![OTKP3_CRUDE_OIL_GRADES.gif](//i.publiclab.org/system/images/photos/000/013/838/medium/OTKP3_CRUDE_OIL_GRADES.gif)](//i.publiclab.org/system/images/photos/000/013/838/original/OTKP3_CRUDE_OIL_GRADES.gif)

Going back to the fluorescence measurement, the following plot shows fluorescence spectra for various weight for Light (left) and Medium(right) North Sea crude oil:

[![OTKP3_CRUDE_OIL_LT_VS_MED.gif](//i.publiclab.org/system/images/photos/000/013/837/medium/OTKP3_CRUDE_OIL_LT_VS_MED.gif)](//i.publiclab.org/system/images/photos/000/013/837/original/OTKP3_CRUDE_OIL_LT_VS_MED.gif)

While the differences are relatively small, there are some visible correlations. 1) Medium crude tends to have more high-carbon PAH compounds (the "bulge" on the right side of the curve on the right) and 2) Light crude tends to have relatively few high-carbon PAH compounds no matter the oil weight. While these are generalizations, they may be useful.

**OTK Proto3 Spectra Analysis**

Now, understanding just a bit more about the many relationships between oils and UV fluorescence spectra, can any of these correlations be used as a basis for indicating the chemical type from the OTK spectral data?

First, consider the dynamic range of "signal intensity" associated with each sample type; 90 weight motor oil has a very strong signature relative to auto diesel.

[![OTKP3_10PCT_6TYPES_FIXED_SCALED.gif](//i.publiclab.org/system/images/photos/000/013/839/medium/OTKP3_10PCT_6TYPES_FIXED_SCALED.gif)](//i.publiclab.org/system/images/photos/000/013/839/original/OTKP3_10PCT_6TYPES_FIXED_SCALED.gif)

In the above plot, all chemicals have been diluted to 10% but to be able to display a measurable signature, the fluorescence light was attenuated at #160 for 90 weight oil and #00 for diesel. (The attenuation numbers fall roughly in the ramge from 0-255 as a range from clear to black as inkjet sheet film.) As this demonstrates, the dynamic range is very high; which also means the detect ability will also be compound type-dependent.

So, leaving this sensitivity issue aside so as to reduce the variables, the focus becomes analyzing spectral curve shapes. To do this, each of these samples, and the selectable attenuation, were adjusted to minimize the measurement dynamic range. ( This means that large signals are attenuated to better match with weak signals. There is no dilution so as to avoid that orthogonal issue [see below]) In addition, the resulting curves were all normalized to the same peak intensity -- which was declared to be a unitless value of 100 for plotting and analysis. The result is shown below:

[![OTKP3_6-SAMPLE_SPECTRA.gif](//i.publiclab.org/system/images/photos/000/013/842/medium/OTKP3_6-SAMPLE_SPECTRA.gif)](//i.publiclab.org/system/images/photos/000/013/842/original/OTKP3_6-SAMPLE_SPECTRA.gif)

By adjusting concentrations and attenuation, the noise has been reduced sufficiently to perform run-length averaging before extracting curve parameters.

The chosen parameters of interest include: curve peak nm, curve centroid nm and curve -6dB bandwidth (wavelengths at ~25% of peak). Now the challenge is to find a way to easily plot the combined effect and give meaning to the results. After a number of data plotting experiments, the following plot developed:

[![OTKP3_6-SAMPLE_ANALYSIS.gif](//i.publiclab.org/system/images/photos/000/013/843/medium/OTKP3_6-SAMPLE_ANALYSIS.gif)](//i.publiclab.org/system/images/photos/000/013/843/original/OTKP3_6-SAMPLE_ANALYSIS.gif)

All plot values are based on using the 80W-90 spectra as a 'center reference'. This oil sample was selected because 1) it has a strong signature, 2) it's spectra is roughly in the middle of the spectra of the other samples and 3) its spectra is relatively symmetrical about the peak. Also, all plot values are difference values from this reference, not absolute values. (Note: The colors of this plot and the previous plot both reference the same oil types.)

- The 'X' axis plots the curve peak nm, relative to the 80W-90 reference

- The 'Y' axis plots the curve centroid nm, relative to the 80W-90 reference

- The relative size of each color square is made linearly related to the -6dB bandwidth of the associated curve

- The lower-left corner of the plot will tend to have "lighter" oils and the upper-right corner of the plot will tend to have "heavier" oils

[ NOTE: The Yellow plot is not an oil -- it is a diluted sample of TideHD laundry detergent. It has a very strong signature and although it it appears at the "Light" end of the plot, its OTK Proto3 UV fluorescence spectra is not very different from Diesel oil. It is a valuable sample to include simply because it provides a sanity check on assumptions when looking at the spectra. ]

The thought behind this final plot was to demonstrates two ideas:

1) Oil type analysis is very, very difficult

2) There might be some value in measuring a wider range of UV-detectable contaminants which might "fill-out" this plot and provide some basis for allowing OTK spectra to "suggest" possible candidates for the contaminant which has been detected.

**Dilution Effects**

While the above plots show some promise, it is always necessary to keep pushing the boundaries of a theory and look for exceptions. In the prior Research Note 'OTK Proto3' ( https://publiclab.org/notes/stoft/01-19-2016/otk-proto3 ) I showed an example of the effects of dilution on the Fluorescence spectra. That same dilution data is shown below, except that all of the curves are auto-scaled to normalize the peak value:

[![OTKP3_80W-90-DIL_SPECTRA.gif](//i.publiclab.org/system/images/photos/000/013/860/medium/OTKP3_80W-90-DIL_SPECTRA.gif)](//i.publiclab.org/system/images/photos/000/013/860/original/OTKP3_80W-90-DIL_SPECTRA.gif)

That data is then re-plotted in the same analysis format to observe the Peak vs Centroid vs Bandwidth effects of dilution:

[![OTKP3_80W-90-DIL_ANALYSIS.gif](//i.publiclab.org/system/images/photos/000/013/861/medium/OTKP3_80W-90-DIL_ANALYSIS.gif)](//i.publiclab.org/system/images/photos/000/013/861/original/OTKP3_80W-90-DIL_ANALYSIS.gif)

The hopeful trend is that the four points are monotonic; as the 80W-90 oils is diluted, the spectra always shifts in the same direction. The difficulty is that this data suggests a strong dependency on concentration which is not well understood and which makes it harder to identify the difference between the molecular weight of the PAH compounds present in the sample and the oil type. One thought is that dilution of 80W-90 in EVO actually affects the chemistry which results in a shift in the PAH concentrations; but that's just a guess.

**Opacity**

It's always good to keep testing the boundaries so here's a look at the light filtration effects through the cuvettes and EVO as a carrier. (This uses a broadband Solux 4700K halogen bulb passing light through the cuvette; not using the OTK's UV laser as with the other measurements shown here.) The plot below shows (Black) a Solux source with no cuvette, (Red) shows a cuvette with water, and (Lt Blue) a cuvette with EVO:

[![OTKP3_SOLUX_EVO_FILTER.gif](//i.publiclab.org/system/images/photos/000/013/887/medium/OTKP3_SOLUX_EVO_FILTER.gif)](//i.publiclab.org/system/images/photos/000/013/887/original/OTKP3_SOLUX_EVO_FILTER.gif)

Clearly, the cuvette and water have relatively no effect on the light path but the EVO does filter the spectrum, resulting in ~3dB attenuation at 500nm. This was not anticipated and so it appears that EVO is not an ideal medium -- but it was an easy material to use. However, it is likely that for observing UV fluorescence glow from within the cuvette, this effect would not be as serious.

The next plot looks at the effects of dilution for the purpose of observing any wavelength shifts which might be related to concentration. The biggest effect is simply attenuation when the concentration is high. ( Yes, there is a testing gap from 2% to 100% as those samples were not pre-mixed at the time. The only impact is knowing where the attenuation becomes significant; which is of less importance to this observation. )

[![OTKP3_SOLUX_EVO_DILUTE-80W-90.gif](//i.publiclab.org/system/images/photos/000/013/888/medium/OTKP3_SOLUX_EVO_DILUTE-80W-90.gif)](//i.publiclab.org/system/images/photos/000/013/888/original/OTKP3_SOLUX_EVO_DILUTE-80W-90.gif)

The interesting thing to notice is that the 80W-90 oil, even at low concentrations, seems to provide some improvement in terms of the high-pass filtering effect as the attenuation is not so pronounced at 500nm.

[ Note: A separate project to identify the best candidate for a carrier fluid for testing low concentrations, where the carrier has no to minimal effect on the transmission spectra should be done. While observing fluorescence from within the fluid in the cuvette is not the same as passing a light source through, there is likely still some filtering effects from the fluid composition. They should be identified to ensure their impacts are limited or characterized. ]

**Detection Threshold**

The general issue of measuring oil as a contaminant begs the question of measurement sensitivity; the limits of detectability. It was shown above that EVO spectra does not display any measurable fluorescence so is used for dilution of the 80W-90 oil. One drop of the 80W-90 "contaminant oil" was added to in increasing volume of EVO. The results are plotted below:

[![OTKP3_80W_DETECT_LIMIT_NO-ATTEN.gif](//i.publiclab.org/system/images/photos/000/013/836/medium/OTKP3_80W_DETECT_LIMIT_NO-ATTEN.gif)](//i.publiclab.org/system/images/photos/000/013/836/original/OTKP3_80W_DETECT_LIMIT_NO-ATTEN.gif)

Note that with all of the plotted spectra, no attenuation was used so these observations are intended to show the threshold of detectability of the 80W-90 sample, given the Beta OTK's 5mW 405nm UV pocket laser. The last plot, in Green, is visually just above the noise floor in the 425-475nm band which is the approximate peak of the 80W-90 spectral response for higher concentrations. Clearly, a 1:1000 dilution ratio for 80W-90 represents the detectability threshold under these ideal conditions.

[ NOTE: It should be clear from the previous measurements designed to analyze the type of compound being detected, that the detection threshold should be expected to be quite different for each of the oil and other contaminant types.]

**Conclusions**

- A simple 1:1 relationship between any single measurement parameter (like spectral peak wavelength) and oil type does not appear to exist -- because other characteristics of the fluorescent "peak" also change.

- From both online information, and OTK measurements, there does appear to be a rough correlation between the molecular size of PAH compounds and the wavelength of that compound's fluorescent spectral energy. ( Very generally, "narrow" peaks toward the UV tend to correlates with "lighter" oils and "more broad" peaks toward longer wavelengths tend to correlate with "heavier" oils.

- The OTK detectable range of wavelengths very roughly correlates with the PAH compounds classified by "carbon weight": C22 - C40.

- Combining observable curve parameters can shed a little light on some of the relationships between oil type, PAH content and UV fluorescence spectra.

- There does appear to be a shift in the peak center fluorescence wavelength which is related to the dilution ratio (in addition to the strength of the signal). If it were exclusively attenuation, I'd expect the peak nm to remain the same. Perhaps it is related to optical filtering of the spectra ( assuming such an effect is essentially "rolling-off" the lower wavelengths [a High-Pass filter])?

- The use of EVO as a carrier medium appears less than ideal as it causes some high-pass filtering effects on the signals which, especially for low concentrations, will likely have a negative effect on accurate observation of PAH fluorescence spectral data at the shorter wavelengths. However, this effect may be limited for observing fluorescent glow coming from within the cuvette.

- While the Solux gain-correction is useful, more work is needed to make it easier to provide accurate correction data.

- Adding more "reference" sample spectral data might provide better guesses about the nature of an unknown sample with detectable UV fluorescence.

