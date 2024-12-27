---
title: "Attempt at Quantitative Analysis for Desktop Spectrometer "

tagnames: 'spectrometer, analysis, spectralworkbench, centre_college, beers-law, quantitative, activity:spectrometry, activity:dsk'
author: ben.alley43
path: /notes/benalley43/3-27-2013/attempt-quantitative-analysis-desktop-spectrometer.md
nid: 6566
uid: 50894

---

# Attempt at Quantitative Analysis for Desktop Spectrometer 

by [ben.alley43](../../../profile/ben.alley43) | March 28, 2013 00:46

March 28, 2013 00:46 | Tags: [spectrometer](../tag/spectrometer), [analysis](../tag/analysis), [spectralworkbench](../tag/spectralworkbench), [centre_college](../tag/centre_college), [beers-law](../tag/beers-law), [quantitative](../tag/quantitative), [activity:spectrometry](../tag/activity:spectrometry), [activity:dsk](../tag/activity:dsk)

----

<strong>Motivation</strong>
Quantitative analysis is a major application of UV-Visible spectroscopy. Specifically, one can determine the concentration of dilute colored compounds in solution by measuring the amount of light a solution absorbs. The correlation between concentration and absorbance is known as Beer's law and follows the equation

A = ebc

where A is the measured absorbance, b is the path length of the absorbing solution (in cm), c is the concentration of the colored compound in solution (in mol/L), and e is an empirically determined constant. We thought it would be interesting to see whether the spectral workbench could be used to collect quantitative data.
<strong>
Method</strong>
We set up the spectral workbench spectrometer following a procedure described elsewhere on this website (http://publiclaboratory.org/wiki/dsk). After doing that, we used aluminum tape to make a 1cm wide by 2cm/tall mask over the opening in the spectrometer where light is incident on the paper slit. We then made solutions of various concentration of an absorbing species. This involved mixing 1)a variable amount of methyl red indicator, 2) 6 drops of 0.1M HCl, and 3) diluting to 10mL total volume in volumetric flasks. We put these solutions in 1cm quartz sample cuvettes. We then took transmission measurements at the wavelength where the absorber absorbed most strongly using the online software (https://spectralworkbench.org/). The source was a CFL lamp pointed at the spectrometer. The results of these experiments are listed below in this note and compared with the results expected by Beer’s Law.

<strong>List of Materials</strong>
Public Lab Store Spectrometry Kit
Computer
Aluminum tape
Quartz Sample Cuvettes
Methyl red indicator dye
0.1M HCl
Dropper
10mL volumetric flasks
Incandescent Lamp

<strong>Results and Commentary</strong>
The results are listed in format {percent concentration of methyl red}, {absorbance} .
0.025, 1.12
0.01, 0.20
0.05, 0.82
0.1, 1.00
0.15, 1.20
0.2, 0.60

As can easily be seen, these data are not even remotely linear. Does this condemn the use of the spectral workbench for quantitative analysis? Perhaps not. I think the blame for this non-linearity resides in other parts of the experiment. It turns out that the absorbances of indicators such as methyl red are intimately related to pH. In the experiment, I just added enough acid to make the solution look a certain color. There is actually a wide range of absorbances when something looks a certain color. Since I did not control pH very carefully (added a few drops to each solution), control of the concentration of indicator that actually absorbed at the given wavelength was not very good. Therefore, this experiment would need to be repeated with more precise control of pH. Preferably, I would use a simpler dye without a pH dependence. 
	
Another issue with this setup is the use of materials that are not readily available, such as quartz cuvettes, volumetric flasks, 0.1M HCl, and an indicator as the absorbing compound. Using a different dye (such as food coloring) in the experiment would eliminate the need for the acid and the indicator. Volumetric flasks could easily be replaced by measuring cups in the real world. Quartz cuvettes are probably the biggest issue, and I just used them because they were readily available in my college’s lab. There are a few possibilities for replacement. I think a water bottle with a square edge (such as Fiji bottles) would work well although the long path length would mean that only extremely dilute solutions could be used. Another possibility is plastic sandwich bags suspended such that the path length is controllable. Let me know if you have any questions or comments.
