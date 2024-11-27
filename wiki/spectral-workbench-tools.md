---
nid: 12286
title: Spectral Workbench Tools
path: public/static/wiki/spectral-workbench-tools.md
uid: 1
tagnames: fluorescence,spectral-workbench,transmittance,parent:spectral-workbench,wishlist
---

# Spectral Workbench Tools

This is list of the tools available in Spectral Workbench 2. Most of these generate an Operation, and have a corresponding entry in [the Spectral Workbench Operations page](/wiki/spectral-workbench-operations).

Watch this video about using various tool panes:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Y6RZ-egosn0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

****

##Versioning

####Fork this spectrum

Makes a copy of the displayed spectrum, but owned by you (if it's not already). Use this if you need to use someone else's data, but want to modify it first. Or, if one of your own spectra is locked to changes due to being used elsewhere (learn how this can happen [on the Snapshots page](/wiki/spectral-workbench-snapshots)), you can just fork the spectrum and make your changes on the copy. 

****

##Data processing and display

####Calibrate

You'll notice that many other spectra on the site have a scale showing "nm" or nanometer units on the horizontal axis. To get scaled data, you must calibrate your spectrometer. There are several kinds of calibration but here we're talking about wavelength calibration, which allows your spectrometer to display a wavelength value for any color of light it sees. Luckily, this is easy -- to learn how, see the [Spectral Workbench Calibration page](/wiki/spectral-workbench-calibration).

####Copy calibration

Once you have a calibration, you can use that to calibrate all of the spectra after that calibration. To do this, you **copy** that calibration by selecting it with this tool. Learn more at https://publiclab.org/wiki/spectral-workbench-calibration#Copying+calibrations

You shouldn't re-use a calibration for too long; redoing your calibration (any time you move your spectrometer, or before each set of tests, for example) fairly regularly is a good idea to ensure your device doesn't drift out of calibration over time.

####Subtract spectrum

This tool subtracts each wavelength of one spectrum from the same wavelength of another. It's useful if, for example, you record a baseline spectrum with no sample, then record a second with a sample. Then you can subtract the baseline from the later spectrum, and see the change between the two. 

####Limit wavelength range

If your data is only good (or interesting) within a certain range of wavelengths, you can use this tool to display only that range. Public Lab spectromters, for example, typically only display high quality data in the visual range, from about 400-750 nanometers. If you've removed the near infrared blocking filter from your webcam, you might get data higher -- perhaps up to 1000nm. 

####Smooth

This is a rolling-average smoothing tool, which simply blurs each data point with higher and lower wavelength data to smooth the graph line. It is **not** the same as a time-average, which averages the same pixel over time to reduce noise. 

###Transform

The Transform tool runs a JavaScript math expression on each data point (i.e. each pixel) of a spectrum. For example, if you enter the expression `R+B`, it will take the values of the red (`R`) and blue (`B`) data for each pixel, sum them, and the result will be used for the graph line at that wavelength. `Math.round(R)`, by contrast, will round the red (`R`) channel, and `Math.pow(G,2)` will square the value of the green (`G`) channel. For a full listing of JavaScript math functions, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math.

The terms you have available to include in your expressions are:

* `R`, `G`, `B` for red, green and blue, respectively, as an intensity percentage from 0-1
* `A` for the average of red, green, and blue (the default graph line)
* `X` for the wavelength (the graphed x-value)
* `Y` for the average (the graphed y-value)
* `i` for the index of the pixel, counting from the left edge of the graph
* Advanced: `P` is the pixel object itself

####Blend

The Blend tool is very similar to the [Transform tool](#Transform), but also incorporates data from a second spectrum. This is very powerful; you can blend two spectra in almost any manner you like. `R1*R2`, for example, would multiply the red channels of the two spectra. 

The terms you have available to include in your expressions are:

* `R1`, `G1`, `B1` for red, green and blue of your original spectrum, respectively
* `R2`, `G2`, `B2` for red, green and blue of the blended-in spectrum, respectively
* `A1` and `A2` for the average of red, green, and blue (the default graph line) of your original spectrum and the blended-in spectrum, respectively
* `X` for the wavelength of the original spectrum (the graphed x-value)
* `Y` for the average of the original spectrum (the graphed y-value)
* `i` for the index of the pixel, counting from the left edge of the graph
* Advanced: `P` is the pixel object itself

****

##Comparison & Sets

####Compare

The compare tool temporarily displays the selected spectrum, overlaid on the graph, for comparison. You can remove it again in the Comparisons tab, which will appear when you use the compare tool.

The compare tool can be used repeatedly to overlay multiple spectra. 

You can save all current comparisons, plus the original spectrum, by clicking "Save as set" in the Comparisons tab.

####Find similar

The find similar tool uses the database-wide spectral matching system [developed by @sreyanth in 2013](/notes/Sreyanth/09-14-2013/finding-closest-match-spectra-from-the-database-gsoc-final-post), but displays the results in a pane; any result may be [added as a comparison](#Compare) by clicking `Apply`. 

****

##Data extraction

####Set new cross-section

Cross sectioning sets the row of pixels, counting the number of pixels from top edge, used to generate the graph. The default for any spectrum is the top row of pixels -- the equivalent of `crossSection:0`, whereas `crossSection:20` would measure the brightness of each pixel in the 21st row down from the top (since we begin counting at 0). Please read [this section about what the cross section represents](/wiki/spectral-workbench-calibration#Video+cross+section+vs+Image+cross+section), as it may vary based on how you are capturing.

####Flip image

Manually flips the spectrum image horizontally. This can be necessary if your spectrometer webcam is installed backwards, which would place the red end of the spectrum (with higher wavelengths) to the left, instead of to the right, as is the standard in Spectral Workbench. 

Note that you can calibrate a reversed spectrum without flipping it manually, and this can affect later calibrations. Manually flipping an image -- especially a calibration -- may cause you trouble later, as you may have to manually flip any image you wish to combine with this data, to get it to match. It's far easier to make your spectrometer's hardware match the "blue at left" standard of Spectral Workbench.

****

#Wishlist

Please add features here that you'd like to see in upcoming versions of Spectral Workbench. Email plots-dev@googlegroups.com as well so we know!