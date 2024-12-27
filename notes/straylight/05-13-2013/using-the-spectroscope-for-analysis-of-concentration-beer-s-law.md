---
title: "Using the Spectroscope for Analysis of Concentration (Beer's Law)"

tagnames: 'spectrometer, education, curriculum, classroom, beers-law, concentration, sensitivity, quantitative, response:6566, response:6587, activity:spectrometry, time:3h, difficulty:medium, beer-lambert-law, category:test-limits, activity:education, activity:spectrometry-sampling, activity:classroom'
author: straylight
path: /notes/straylight/05-13-2013/using-the-spectroscope-for-analysis-of-concentration-beer-s-law.md
nid: 7475
uid: 43047

---

![](https://publiclab.org/public/system/images/photos/000/000/246/original/P5080044s.jpg)

# Using the Spectroscope for Analysis of Concentration (Beer's Law)

by [straylight](../../../profile/straylight) | May 13, 2013 02:59

May 13, 2013 02:59 | Tags: [spectrometer](../tag/spectrometer), [education](../tag/education), [curriculum](../tag/curriculum), [classroom](../tag/classroom), [beers-law](../tag/beers-law), [concentration](../tag/concentration), [sensitivity](../tag/sensitivity), [quantitative](../tag/quantitative), [response:6566](../tag/response:6566), [response:6587](../tag/response:6587), [activity:spectrometry](../tag/activity:spectrometry), [time:3h](../tag/time:3h), [difficulty:medium](../tag/difficulty:medium), [beer-lambert-law](../tag/beer-lambert-law), [category:test-limits](../tag/category:test-limits), [activity:education](../tag/activity:education), [activity:spectrometry-sampling](../tag/activity:spectrometry-sampling), [activity:classroom](../tag/activity:classroom)

----

##Introduction

This research note is a walk through of how to use the PLOTS designed spectroscope and the spectral workbench software to determine the concentration of an unknown sample. The procedure requires that you have samples of the same solution of known concentrations. This procedure uses what is commonly called "Beer's Law", which states that the absorbance of a solution is proportional to its concentration. If we have some samples of known concentration, we can use those to determine the concentration of an unknown.

The process is carried out at a specific wavelength which the solution is known to absorb. A green solution (for example the nickel nitrate shown in the main image) is transmitting green light, so green would not be a suitable choice for examining absorbance. The difficulties of choosing different wavelengths to examine absorbance are described later.

##Experimental Arrangement

The spectroscope is first calibrated using the normal CFL (mercury) wavelengths. The calibration is then saved. It is important not to alter the spectroscope arrangement once calibration has been done, otherwise the observations will not be comparable.. 

A broadband light source, such as a halogen lamp, is then used to illuminate the spectroscope. The spectroscope should be arranged so that the colour channels (Red, Green and Blue) are not being saturated. This can be achieved by pointing the spectroscope slightly away from the halogen lamp or, if available, use a dimmer to control the brightness of the lamp. A good, reasonably flat spectrum is desired. The halogen spectrum is then calibrated using the saved CFL calibration.

![P5080042s.jpg](https://i.publiclab.org/system/images/photos/000/000/214/medium/P5080042s.jpg)

Simple desktop halogen light (10W) illuminating a sample held in front of the spectroscope

The baseline measurement must now be obtained. This is the transmittance of a sample containing none of the chemical or substance. in other words, a zero percent solution. Distilled water is placed in the cuvette in front of the slit of the spectrometer and the spectrum saved. It is important to use this zero percent solution as the baseline, as it includes any absorbance by the cuvette and the water in the cuvette. Typically, the baseline with have a slightly lower intensity curve than the halogen by itself, although the difference will be very small.

![P5080028.JPG](https://i.publiclab.org/system/images/photos/000/000/244/medium/P5080028.JPG)

Rudimentary arrangement. Note the small support taped to the underside of the spectroscope, underneath the slit, for holding the cuvettes. I took care not to alter the position of the lamp or the spectroscope once a baseline had been established

![blob](https://i.publiclab.org/system/images/photos/000/000/217/medium/blob)

The baseline spectrum from the halogen lamp, passing through the cuvette filled with distilled water.

Solutions of the sample you wish to analyse are now examined. For the purposes of this research note, I used 5 (nickel nitrate) and 6 (red food colouring) samples in order to demonstrate the Beer's Law relationship. These samples have a known concentration, whether this is a relative concentration or an absolute concentration is dependent on the purposes of the investigation. In my case, I used a known concentration of 1.0M nickel nitrate and an approximate mixture of red food colouring which I designated "full dose" or the 1.0 mix.

![P5080039s.jpg](https://i.publiclab.org/system/images/photos/000/000/215/medium/P5080039s.jpg)

Nickel nitrate solutons (0.1, 0.3, 0.5, 0.7 and 1M) and the red food colouring solutions 

Each sample is placed in the cuvette (after appropriate rinsing procedures) and the spectrum recorded. It is vital that the spectroscope and halogen arrangement is not disturbed, any changes in the intensity of the light being recorded that are due to alterations will invalidate the experiment. The intensity of the spectra should reduce as a result of the solution and nothing else.

![P5080032.JPG](https://i.publiclab.org/system/images/photos/000/000/216/medium/P5080032.JPG)

The cuvette, holding a 0.7M solution of nickel nitrate. The cuvettes are laboratory grade plastic which are relatively cheap. They have two plain sides and two sides with corrugations. In use, the cuvette is held by the corrugated sides and light passed through the smooth or plain sides. Care is usually taken to ensure fingerprints are not left on the cuvette. It would be possible to use an alternate arrangement, such as a square glass bottle for measuring the spectra, but it is important that the light passes through the same depth of solution in order to be able to compare readings.

Save each spectra and calibrate it against the same CFL calibration used at the start of the experiment. 

##Selecting the Abosrbance Wavelength

The wavelength for measuring the absorbance must now be selected. A suitable wavelength should show a good reduction in intensity across the range of concentrations being measured. This is not always easy, but generally the absorbance wavelength will **not** be the same colour as the solution. It is useful to examine the spectra to select a suitable wavelength.

This can be done simply by adding your captured spectra to a set. Use the first (baseline) spectra to create a set and note the identity of the set from the http address. Then go through and add the other spectra of the samples to this set identifier in spectral workbench.

Spectral workbench will now display all of the spectra in the set overlaid on the same graph. I have taken a similar graph from a spreadsheet to show the intensity curves.

 ![blob](https://i.publiclab.org/system/images/photos/000/000/221/medium/blob)

This looks confusing, but it is showing the intensity of the light transmitted by the samples across the whole spectrum, in this case I have cropped the graph to show between 460 and 640nm, as this is the useful visible light region. You will note that the curves get progressively lower as the concentration increases. This graph also shows the CFL calibration spectra for completeness, it is the spiked curve with peaks at the mercury lines.

Usually, only two solutions of known concentration are tested in order to determine the linear relationship between absorbance and concentration. In this experiment several known samples were tested, so the graph looks rather cluttered.

An observation of the graph suggests that a good spread of absorbance is occurring around 600 to 625 nm. So a wavelength in this range is selected. I have chosen 600nm

It is possible to use spectral workbench to determine the aborbance by hovering the mouse on the appropriate wavelength and reading the intensity. The absorbance is calculated by subtracting the intensity of the sample from the intensity of the baseline. 

I chose to calculate absorbance by downloading the spectra in CSV format and selecting the values manually. I then had a spreadsheet calculate the absorbance values:

**Intensity and absorbance at wavelength 600.597 nm**	
	
![blob](https://i.publiclab.org/system/images/photos/000/000/223/medium/blob)

This data produced the following graph:

![blob](https://i.publiclab.org/system/images/photos/000/000/225/medium/blob)

The graph is remarkably linear and supports Beer's Law nicely.

Selecting other wavelengths produced the following graphs:


![blob](https://i.publiclab.org/system/images/photos/000/000/242/medium/blob)

625 nm absorbance

![blob](https://i.publiclab.org/system/images/photos/000/000/228/medium/blob)

580nm aborbance

The 580nm absorbance graph is not as useful as the 600nm or 620nm graphs as there is less absorbance at this wavelength and errors in the intensity will create large amounts of scatter. This illustrates the importance of selecting a good wavelength.

##Red Food Colouring Data

The red food colouring data displays two additional problems which are worth noting:

![blob](https://i.publiclab.org/system/images/photos/000/000/230/medium/blob)

absorbance graph at 590nm. Above 0.5 concentration, the solution is absorbing almost all of the light at 590nm, so flatlines. This is obviously not useful for trying to analyse concentrations above 0.5. 

![blob](https://i.publiclab.org/system/images/photos/000/000/232/medium/blob)

at 600nm, Absorbance is greater and a wider range of concentrations can be analysed. 

Since the food colouring is allowing red light through, moving into the red region of the spectrum is getting closer to the transmittance of the food colouring and this effect is shown below.

![blob](https://i.publiclab.org/system/images/photos/000/000/234/medium/blob)

At 620nm, we are into the red area and the absorbance is quite low.

![blob](https://i.publiclab.org/system/images/photos/000/000/236/medium/blob)

visually it looks like this, at 0.1 concentration shown above, the bandwidth is quite wide, but centered in the red. 

![blob](https://i.publiclab.org/system/images/photos/000/000/239/medium/blob)

at 0.5 concentration, shown above, the food colouring is transmitting only the red component.

##Determining the Concentration of an Unknown Sample

Once the linear Beer's Law relationship has been established, it is a simple matter to measure the absorbance of a solution at the same wavelength and interpolate the graph.

There are however some constraints to what is possible. The unknown solution must the same chemical as the samples that were used to establish the calibration. It is not possible, for example, to determine the concentration of red food colouring from the nickel nitrate concentration vs absorbance line. 

##Discussion

This was my first attempt at extracting absorbance and concentration data experimentally. I ran into problems using the online capture interface for spectral workbench and had to work around the calibration issues by working with the csv files directly. This is not as difficult as it might appear and allows the spreadsheet to do all of the hard work.

My spectra sets can be found here:

https://spectralworkbench.org/sets/show/401
(nickel nitrate)

https://spectralworkbench.org/sets/show/402
(red food colouring)

The spectral workbench hiccups can be seen in the inverted wavelength axes for some, but not all of the data. This problem has subsequently been resolved.

My data is also very noisy, with lots of spikes and other anomalies. This is possibly because I didn't conduct the readings in darkness, but left the flouro lights on ! This was evident as the noise at the CFL wavelengths which have possibly entered the spectroscope, sneaking in behind he cuvette as the CFLs were overhead. 

I should also stress that my spectroscope is fairly basic, Uses a $5 webcam and the slit arrangement has not been finessed for resolution. 

It is important not to over saturate the camera and to disable any automatic white balance or exposure features your camera might have. 

This analysis has shown me that if wavelengths are chosen judiciously, the PLOTS spectroscope and spectral workbench are excellent tools for concentration measurements. I have compared the results to that obtained with other apparatus designed to be used in an educational setting and found similar amounts of random errors. There are educational benefits to using spectral workbench and manually extracting the data and the concept of absorbance is highlighted using this method. 

![P5080035.JPG](https://i.publiclab.org/system/images/photos/000/000/245/medium/P5080035.JPG)

quick and easy arrangement on the front bench of my science classroom. I would tie everything down a bit more securely for serious work !

stu




