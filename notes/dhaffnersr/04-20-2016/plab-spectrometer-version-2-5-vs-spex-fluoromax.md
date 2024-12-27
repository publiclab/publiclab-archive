---
title: "Plab spectrometer version 2.5 vs Spex FluoroMax"

tagnames: ''
author: dhaffnersr
path: /notes/dhaffnersr/04-20-2016/plab-spectrometer-version-2-5-vs-spex-fluoromax.md
nid: 13006
uid: 461120

cids: 14445

---

![](https://publiclab.org/public/system/images/photos/000/015/678/original/eosin_y_apr20.JPG)

# Plab spectrometer version 2.5 vs Spex FluoroMax

by [dhaffnersr](../../../profile/dhaffnersr) | April 20, 2016 10:58

April 20, 2016 10:58 | Tags: 

----

Sample preparation:
3 cuvettes used, 2 for sample dilutions and 1 for the blank (solvent.) I then filled cuvette # 1 with 1 drop of eosin y and the second cuvette with 2 drops of eosin y. I then filled each cuvette with 2/3 ethanol and mixed (put the cap on and hold it tight and shake a few times)

I prepared 1 more cuvette as a blank, and filled it 2/3 with ethanol, (this blank will be used for both the 532nm laser samples and the 1W Uv LED samples.)
Each scan lasts 30 seconds, I do this to let the camera focus and the signal to settle down a bit.

Warning- if using a laser source of more than 10mW, do not exceed 60 seconds (trust me) you might “cook” the sample and quench fluorescence!

ALWAYS WEAR EYE PROTECTION WHEN DEALING WITH ANY LASER LIGHT

Processing software used for raw data editing: Spekwin32

Cuvettes used - BrandTech 759150 Plastic 1.5ml UV-Transparent Disposable Semi-Micro UV-Cuvette, Individually Wrapped (Pack of 100-cost $65.45) (made in Germany)

Spectrometer specifications: 2.5 (build version 3)
•	Slit width – 0.09mm
•	Slit length – 12mm
•	DVD grating 8.5 gigabyte – ruling density = .36mm = 2770 lines/mm
•	Width of DVD piece – 17.9mm
•	JDEPC-ov04 camera
•	Distance from slit to camera = 48mm
•	Detector bandwidth = 1 (bandwidth is proportional to slit width.)- Resolution of >2.5nm 
•	Ref: http://www.analiticaweb.com.br/newsletter/02/AN51721_UV.pdf

Spectrometer used- Plab version 2.5 (build3/my upgrades) (avg cost$60.00) 

Excitation source -    
•	532nm green laser (Aries series 20mW)
•	1W Uv LED (410nm)	

Sample 1 – 1 drop eosin y in ethanol/95 %( 200 proof)
Sample 2 – 2 drops eosin y in ethanol/95 %(200 proof)
Eosin y – 1 % aqueous solution


[![final_plot_for_eosin_y_study_apr19.png](//i.publiclab.org/system/images/photos/000/015/679/large/final_plot_for_eosin_y_study_apr19.png)](//i.publiclab.org/system/images/photos/000/015/679/original/final_plot_for_eosin_y_study_apr19.png)

References:
http://omlc.org/spectra/PhotochemCAD/html/061.html  - eosin y in ethanol /using a  Spex FluoroMax (avg cost $25,000.00) specs for this equipment can be found here: http://www.horiba.com/fileadmin/uploads/Scientific/Documents/Fluorescence/FluoroMax_Plus_Final-LoRes.pdf

Observations from this study:

First observation I noticed is the peak for the laser at the lowest concentration (1 drop of eosin y,) is 550nm for sample#2, the peak for the Spex fluoromax are 542nm. This is because the Spex fluoromax has a resolution factor of 0.5nm and several other factors that are explained in the reference I have provided, so I have a resolution problem of +9nm.

Sample#3 has a +10nm difference at 552nm, so data errors start to rise with concentration levels, the basic standard for analytical chemistry is 6 samples for a 95 % confidence error rate in concentration levels, but I was more concerned in this study with hardware data repeatability, also at this time, I do not have the proper lab equipment to precisely measure to the micro millilitre as of yet. (I will soon.) This ability to measure sample dilutions will greatly improve my ability for more accurate results.

Now for the 1W Uv LED samples, although the peaks appear to be similar at peak wavelengths and intensity levels, concentration data are different, you will notice for the laser scans that sample S2 has a concentration of 0.91712 mol/l and S3 has 0.98302 mol/l, now compare that to the LED samples S4 and S5, S4-0.99875 and S5-0.99499. 

I am trying to figure out why there is such a difference in concentration, both sample cuvettes were used in both scans, so there is no possibility of sample concentration mix up. Now for the Uv LED, there is an 141nm time delay from excitation to emission of the sample, and eosin y has an excitation wavelength of 490nm in ethanol, so could there be an explaination somewhere between using the laser wavelength or the LED wavelength?


