---
title: "Multi parameter analysis using a DIY Spectrometer"

tagnames: 'spectrometer, flame-spectroscopy, barnstar:basic, nitrate, colorimetry, sodium, colorimeter, aquaponics, photometer, potassium, nitrates, activity:spectrometry, nitrogen, first-time-poster, activity:nitrogen, activity:nitrates, activity:spectrometry-usage'
author: Frikkie
path: /notes/Frikkie/03-05-2015/multi-parameter-analysis-using-a-diy-spectrometer.md
nid: 11655
uid: 435693

---

![](https://publiclab.org/public/system/images/photos/000/009/175/original/FLAME_EMISION_SETUP.png)

# Multi parameter analysis using a DIY Spectrometer

by [Frikkie](../../../profile/Frikkie) | March 05, 2015 11:30

March 05, 2015 11:30 | Tags: [spectrometer](../tag/spectrometer), [flame-spectroscopy](../tag/flame-spectroscopy), [barnstar:basic](../tag/barnstar:basic), [nitrate](../tag/nitrate), [colorimetry](../tag/colorimetry), [sodium](../tag/sodium), [colorimeter](../tag/colorimeter), [aquaponics](../tag/aquaponics), [photometer](../tag/photometer), [potassium](../tag/potassium), [nitrates](../tag/nitrates), [activity:spectrometry](../tag/activity:spectrometry), [nitrogen](../tag/nitrogen), [first-time-poster](../tag/first-time-poster), [activity:nitrogen](../tag/activity:nitrogen), [activity:nitrates](../tag/activity:nitrates), [activity:spectrometry-usage](../tag/activity:spectrometry-usage)

----

<p>A colorimeter, flame photometer and conductivity meter all in one.</p>


<p>A few years back I got fascinated with aquaponic food production. After coming to realize the importance of being able to measure various chemical parameters frequently if one wish to successfully operate an aquaponic system, whether it be on small scale or commercial I started looking into ways of setting up my own water testing laboratory at home. I have a fair background in basic analytical chemistry and have been working in analytical laboratories most of my career. I am well aware of the technologies available to fulfill this need but from my point of view it was way too expensive. After finding this website and a few others I realized that a whole new world of opportunities have opened up to me. I am really thankful for the many contributions many people made over here. I hope that what I have to present here will be useful to others.</p>

<p>Details:</p>

<p>The spectrometer</p>

<p>I build my spectrometer using the very cheap Microsoft LiveCam VX800 with its IR filter removed. It really can’t compete with any of the HD cameras but it is fine for the applications that I will describe here.</p>
   
<p>Colorimetric Analysis</p>

<p>For colorimetric analysis the spectrometer is setup in the usual way. Light from a LED or other source of light is passed through the sample and the absorbance is measured. I have done some experimentation with the analysis of nitrites in water using the Griess reagent and the analysis of phosphate using the ascorbate- molybdate method. I found the following to be rather important: When developing your own colorimetric methods you must be able to control the intensity of the light source and you should preferably use video software that will give you control over camera’s setting such as gamma, intensity and gain. I power my LED’s from an adjustable power supply and use a simple pot to adjust the intensity. I have also been using Debut video software which is free for personal use.</p>
  
<p>Flame Emission</p>

<p>The analysis of potassium and sodium is achieved by combining the DIY spectrometer with a DIY nebulizer and gas burner build from mostly hardware store materials. The spectrometer is pointed to the flame and the intensities of spectral lines for potassium and sodium can be measured.</p>

<p>Nebulizer and Burner Design</p> 


[![DIY_NEB___BURNER.jpg](https://i.publiclab.org/system/images/photos/000/009/206/medium/DIY_NEB___BURNER.jpg)](https://i.publiclab.org/system/images/photos/000/009/206/original/DIY_NEB___BURNER.jpg)



<p>Electrical Conductivity</p>
 
<p>The DIY electrical conductivity meter is a simple 555 IC oscillator (6.8KHz, 53% cycle) The output pulse is connected in series with a DIY conductivity electrode and an LED. The brightness of the LED will depend on the electrical conductivity of the measured solution. The DIY spectrometer is then used to measure the brightness of the LED. By measuring multiple conductivity standards a calibration cure can be obtained. To obtain some flexibility in term of calibration range I will simply manipulate the supply voltage of the oscillator – for example on low conductivity sample I will supply a higher voltage to the oscillator thus getting the LED to be brighter and so forth.</p> 

<p>The Circuit</p>








[![OSCILLATOR.jpg](https://i.publiclab.org/system/images/photos/000/009/209/medium/OSCILLATOR.jpg)](https://i.publiclab.org/system/images/photos/000/009/209/original/OSCILLATOR.jpg)














<p>Data Handling</p>

<p>To allow quick measurement I created an, excel based tool using some “very basic” visual basic programming (This was rather difficult as I am not a programmer) This tool allow me to quickly perform calibrations and direct measurement of standards and samples. I Hope I can pass this on to anyone who might be able to develop this further for the Public Lab community. It is far from perfect and full of bugs but I believe it can serve as a blueprint of the type of “software” that is needed for DIY analysis. I will explain how to use this tool a video.</p>


<p>The Excel Tool (Don't rename this file, if you do the macro's wont work)
</p>

<a href="https://i.publiclab.org/system/images/photos/000/009/157/original/SPECTRA_MEASURE_1.0.xlsm"><i class="icon icon-file"></i> SPECTRA_MEASURE_1.0.xlsm</a>




<p>Example Video's</p>
<p>I apologize for the large file size, I don’t have tool to compress my video’s</p>

<a href="https://i.publiclab.org/system/images/photos/000/009/158/original/(Video1)_Nitrate_calibration_and_analysis.wmv"><i class="icon icon-file"></i> (Video1)_Nitrate_calibration_and_analysis.wmv</a>


<a href="https://i.publiclab.org/system/images/photos/000/009/159/original/(Video2)Electrical_conductivity.wmv"><i class="icon icon-file"></i> (Video2)Electrical_conductivity.wmv</a>


<a href="https://i.publiclab.org/system/images/photos/000/009/160/original/(Video3)_Flame_emmision.wmv"><i class="icon icon-file"></i> (Video3)_Flame_emmision.wmv</a>




<p>General Notes</p> 
<p>Linearity of the colorimetric methods is exceptional. With conductivity and flame emission measurements I tend to work with non-linear calibration cures that still display good coloration between standards.</p>  



<p>NOTE: IF YOU EVER ATTEMPT TO INVESTIGATE FLAME EMISSION TECHNIQUES YOU DO SO AT YOUR OWN RISK. THIS IS DANGEROUS. I HAVE HAD FLASHBACKS ON MORE THAN ONE OCCASION. ONE RESULTED IN A BROKEN WINDOW. THERE ARE SPECIAL TECHNIQUES IN IGNITING AND ADJUSTING THE FLAME AND I WILL NOT BE DISCUSSING THIS HERE. IF YOU EVER ATTEMPT THIS FIND AN OLD ATOMIC ABSORPTION OR FLAME PHOTOMETER MANUAL AND READ UP ON THIS. ALWAYS HAVE SOME SORT OF A SHIELD BETWEEN THE BURNER AND YOUR SELF.</p>  



 
<p>The inside of my DIY spectrometer</p>

[![DIY_SPECTROMETER_TOP_VIEW.png](https://i.publiclab.org/system/images/photos/000/009/161/medium/DIY_SPECTROMETER_TOP_VIEW.png)](https://i.publiclab.org/system/images/photos/000/009/161/original/DIY_SPECTROMETER_TOP_VIEW.png)



<p>Spectrum of a white LED light. The red dot indicate the “Sweet spot” for nitrite analysis. The pink colour developed in the sample absorbs strongly at this position. This is around 530nm.</p>

[![WHITE_LED_SPECTRA.png](https://i.publiclab.org/system/images/photos/000/009/162/medium/WHITE_LED_SPECTRA.png)](https://i.publiclab.org/system/images/photos/000/009/162/original/WHITE_LED_SPECTRA.png)


<p>White LED on a LEGO block. Piece of plastic glued into position in front of the LED to act as a diffuser. LEGO block are great to fix component that must be interchangeable.</p>

[![WHITE_LED.png](https://i.publiclab.org/system/images/photos/000/009/163/medium/WHITE_LED.png)](https://i.publiclab.org/system/images/photos/000/009/163/original/WHITE_LED.png)


<p>Calibration data for Nitrite Standards</p>

[![NITRITE_CALIBRATION_DATA.png](https://i.publiclab.org/system/images/photos/000/009/164/medium/NITRITE_CALIBRATION_DATA.png)](https://i.publiclab.org/system/images/photos/000/009/164/original/NITRITE_CALIBRATION_DATA.png)






<p>Analysis of potassium and sodium in progress.</p>

[![FLAME_EMISION_SETUP.png](https://i.publiclab.org/system/images/photos/000/009/165/medium/FLAME_EMISION_SETUP.png)](https://i.publiclab.org/system/images/photos/000/009/165/original/FLAME_EMISION_SETUP.png)


<p>Spectral lines for sodium and potassium</p>
 
[![Na___K_EMISION.png](https://i.publiclab.org/system/images/photos/000/009/166/medium/Na___K_EMISION.png)](https://i.publiclab.org/system/images/photos/000/009/166/original/Na___K_EMISION.png)




<p>The Nebulizer.</p>

<p>Air flow is supplied from a compressor from a small medical nebulizer. This is a cross flow type, made from a 50ml plastic sample vial. The cross flow tips are 2 disposable 1ml pipette tips. The airflow from the horizontal tip passing over the vertical tip (Sample entry) provides suction on this tip and therefor no sample pump is needed. A small size tubing for sample introduction is glued in to the vertical tip</p>


[![DIY_NEBULIZER.png](https://i.publiclab.org/system/images/photos/000/009/167/medium/DIY_NEBULIZER.png)](https://i.publiclab.org/system/images/photos/000/009/167/original/DIY_NEBULIZER.png)

<p>Nebulizer producing a fine mist.</p>

[![NEBULIZER.png](https://i.publiclab.org/system/images/photos/000/009/168/medium/NEBULIZER.png)](https://i.publiclab.org/system/images/photos/000/009/168/original/NEBULIZER.png)



<p>The burner was made from standard pluming fittings and a thick walled aluminium tube.</p>

[![BURNER.png](https://i.publiclab.org/system/images/photos/000/009/169/medium/BURNER.png)](https://i.publiclab.org/system/images/photos/000/009/169/original/BURNER.png)


<p>Burner Flame</p>
 
[![ADJUSTED_FLAME.png](https://i.publiclab.org/system/images/photos/000/009/170/medium/ADJUSTED_FLAME.png)](https://i.publiclab.org/system/images/photos/000/009/170/original/ADJUSTED_FLAME.png)



<p>Analysis data of sodium in my tap water. Non-linear curve</p>
 
[![SODIUM_IN_TAP_WATER_DATA.png](https://i.publiclab.org/system/images/photos/000/009/171/medium/SODIUM_IN_TAP_WATER_DATA.png)](https://i.publiclab.org/system/images/photos/000/009/171/original/SODIUM_IN_TAP_WATER_DATA.png)


<p>Oscillator circuit for conductivity measurements</p>

[![OSCILLATOR_CIRCUIT.png](https://i.publiclab.org/system/images/photos/000/009/172/medium/OSCILLATOR_CIRCUIT.png)](https://i.publiclab.org/system/images/photos/000/009/172/original/OSCILLATOR_CIRCUIT.png)



<p>Improvised conductivity electrode</p>

[![DIY_EC_ELECTRODE.png](https://i.publiclab.org/system/images/photos/000/009/173/medium/DIY_EC_ELECTRODE.png)](https://i.publiclab.org/system/images/photos/000/009/173/original/DIY_EC_ELECTRODE.png)

[![Untitled.png](https://i.publiclab.org/system/images/photos/000/009/174/medium/Untitled.png)](https://i.publiclab.org/system/images/photos/000/009/174/original/Untitled.png)





<p>In Future I will be experimenting on the colorimetric analysis of Ammonia, Nitrate and Turbidimetric methods for Sulphate, Chloride and Calcium.</p>




