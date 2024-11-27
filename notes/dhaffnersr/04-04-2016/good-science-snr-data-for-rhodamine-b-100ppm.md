---
nid: 12916
title: Good Science SNR data for Rhodamine B 100ppm
path: public/static/notes/dhaffnersr/04-04-2016/good-science-snr-data-for-rhodamine-b-100ppm.md
uid: 461120
tagnames: 
---

# Good Science SNR data for Rhodamine B 100ppm

This research note is directly related to my previous one on the effects of slit width on SNR.

I was a little too general in my displayed values for rhodamine b, I should have explained that I was merely demonstrating in a general manner what effects happen when using different slit width's in relation to SNR. I'm going to get down and dirty for this one, using only the slit width that I am currently using which is 0.18mm, the only value left unchanged is detector noise (I could have metered the camera and got all the values since it is difficult to locate the specs on this camera, so I just left that value at default...we are just going to have to live with it.)

Note* I used a 30sec time window because I cannot account for the cameras response time and associated electronic equipment, so my reasoning is by doing this I may reduce errors by reducing internal signal drift. (or as we call it in the engineering world-internal component noise.)

Here is a more detailed look at the data for Rhodamine B at 100ppm:
[![snr_data_rhod_b_4_apr4.png](//i.publiclab.org/system/images/photos/000/015/342/large/snr_data_rhod_b_4_apr4.png)](//i.publiclab.org/system/images/photos/000/015/342/original/snr_data_rhod_b_4_apr4.png)


[![snr_data_explanation_apr4.png](//i.publiclab.org/system/images/photos/000/015/343/large/snr_data_explanation_apr4.png)](//i.publiclab.org/system/images/photos/000/015/343/original/snr_data_explanation_apr4.png)

This is how I determine the flicker factor for my sample(analyte.)
[![electron_volts_rhod_b_final_apr4.png](//i.publiclab.org/system/images/photos/000/015/344/large/electron_volts_rhod_b_final_apr4.png)](//i.publiclab.org/system/images/photos/000/015/344/original/electron_volts_rhod_b_final_apr4.png)

Below are references for calculations used and other pertinent information related to this work:

Analyte:
a substance whose chemical constituents are being identified and measured.
As analyte concentration becomes lower and lower and approaches zero, PP0 and any noise on P0 limits the ability to determine concentration.  Equation 1-4 below shows that the absorbance becomes noisy as the concentration approaches zero, or as PP0.
	 
http://assets.newport.com/webdocuments-en/images/light_sources.pdf  OPTICAL RADIATION TERMINOLOGY AND UNITS
Spectral radiance in wavelength of a surface, denoted Le,Ω,λ, is defined as
 
where λ is the wavelength.

Beer's Lambert Law is an idealization. 
There are limitations to the law.  Some of those are the following:
1. Beer's law assumes no solute-solute interactions, in other words it requires relatively low analyte concentration (<0.01 M).
2. Beer's law assumes no significant change in the refractive index as concentration of the analyte is changed.
3. There can be no apparent chemical deviations, when an analyte associates dissociates or react with the solvent creating another chemical species.
4.  Instrumental limitations include increased uncertainty in the detector measuring the intensity of transmitted light as the absorption of the sample approaches 2. Remember an Absorption of 1 means 10% of the light is being transmitted, an absorption of 2 means 1% of the light is being transmitted, an absorption of 3 means 0.1% of the light is being transmitted.  You are asking a lot of an instrument to precisely determine the small fraction of light making it to the detector as the absorption gets large. 
It is limitation #4 that is primarily going to hinder you from precisely measuring  concentrations at large absorptions.  It has nothing to do with linearity, but everything to do with the precision of your instrument.

Source- https://www.researchgate.net/post/Why_it_is_necessary_to_follow_Beer_Lamberts_law_in_UV-vis_spectroscopy

In any instrument one has different types of noises such as Johnson Noise, Shot Noise, Source Flicker Noise, Amplifier Noise. If we add up all the errors associated with these noises and plot a graph of %error vs Absorbance, then lowest error can be observed in the range 0.2<A<0.9. This happens to be optimum range for absorbance measurements.

There are other reasons also as mentioned earlier. Non-linearity in the absorbance vs concen curve can come from both sample and instrument.
Instrumental parameters which give rise to non-linearity are Slit width, Polychromaticity and Stray light.

Sample parameters are higher concentration, mixture of species,  some times pH can also cause non-linearity (depending on the wavelength where absorbance is being measured) in Absorbance vs Concentration curve.

There is no single reason for non-linearity but many reasons. If all the sample parameters and instrumental parameters, as mentioned above, are taken care off then it will be limited by the detector as pointed out already by Prof. Hansen (point no. 4).



