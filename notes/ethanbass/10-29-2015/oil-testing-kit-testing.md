---
nid: 12344
title: Oil testing kit: Testing
path: public/static/notes/ethanbass/10-29-2015/oil-testing-kit-testing.md
uid: 46902
tagnames: spectrometer,oil-testing-kit,barnstar:basic,oil-testing-kit-beta
---

# Oil testing kit: Testing

###What I want to do

I wanted to see if I could use the oil testing kit to fulfill its goal of reliably distinguishing between different grades of oil.

###My attempt and results

When my spectrometer is placed flat on the table facing the opening of the oil testing kit, the alignment does not produce a reading. My first, quick and dirty solution was to wedge a pipette under the front of the spectrometer to adjust the angle of its interface with the cuvette holder. I used this method for all of the data I gathered on October 23rd, but I became concerned that the instability of the angle was adversely impacting my results. After some experimentation, I designed a simple platform for the spectrometer, made out of paper, which succeeded in improving the alignment. I determined the proper height for the stand based on trial and error. Yagiz has just pointed out to me [a different solution](http://publiclab.org/notes/ygzstc/08-19-2015/some-suggestions-for-spectrometer-v3-0-and-oil-testing-kit-otk-attachment) to this problem.

[![paper_platform.jpg](https://i.publiclab.org/system/images/photos/000/012/222/medium/paper_platform.jpg)](https://i.publiclab.org/system/images/photos/000/012/222/original/paper_platform.jpg)
spectrometer propped up on paper platform to improve slit alignment 


####A. Documenting known samples:



[![crude_oil.jpg](https://i.publiclab.org/system/images/photos/000/012/211/medium/crude_oil.jpg)](https://i.publiclab.org/system/images/photos/000/012/211/original/crude_oil.jpg)
(https://spectralworkbench.org/sets/2672), crude oil spectra



[![diesel_oil.jpg](https://i.publiclab.org/system/images/photos/000/012/212/medium/diesel_oil.jpg)](https://i.publiclab.org/system/images/photos/000/012/212/original/diesel_oil.jpg)
(https://spectralworkbench.org/sets/2673), diesel oil spectra

[![diesel_and_crude_crop.jpg](https://i.publiclab.org/system/images/photos/000/012/210/medium/diesel_and_crude_crop.jpg)](https://i.publiclab.org/system/images/photos/000/012/210/original/diesel_and_crude_crop.jpg)
(https://spectralworkbench.org/sets/2685), a direct comparison between diesel and crude highlights the differences between their fluorescence profiles. Diesel has one large peak at 475 nm whereas crude has a much broader distribution, with several peaks spread out from 480-530 nm and an additional red peak at 580-590 nm. 

[![marpol_diesel_and_marpol_crude.jpg](https://i.publiclab.org/system/images/photos/000/012/201/medium/marpol_diesel_and_marpol_crude.jpg)](https://i.publiclab.org/system/images/photos/000/012/201/original/marpol_diesel_and_marpol_crude.jpg)
This is a figure from [Hengstermann and Reuter, 1990](http://las.physik.uni-oldenburg.de/publications/paper/ao291990.pdf), comparing emission spectra from diesel and crude oil. I was excited to see that the shapes of the spectra are a good match for my results! According to the [LIF literature](http://publiclab.org/notes/mathew/09-17-2014/laser-pointers-and-the-lif-literature), it is to be expected that the wavelengths of the fluorescence emission spectrum will vary according to the wavelength of the excitation source that is used (in this case, our excitation source is a 405 nm blue-ray laser). However, we see here that the shapes of the fluorescence emission spectra are consistent with the results published in the literature. 


[![diesel_oil_RGB.jpg](https://i.publiclab.org/system/images/photos/000/012/213/medium/diesel_oil_RGB.jpg)](https://i.publiclab.org/system/images/photos/000/012/213/original/diesel_oil_RGB.jpg)
[![crude_oil_RGB.jpg](https://i.publiclab.org/system/images/photos/000/012/214/medium/crude_oil_RGB.jpg)](https://i.publiclab.org/system/images/photos/000/012/214/original/crude_oil_RGB.jpg)
The additional red peak of the crude oil (bottom) pops out even more in RGB mode.


[![80w90.jpg](https://i.publiclab.org/system/images/photos/000/012/194/medium/80w90.jpg)](https://i.publiclab.org/system/images/photos/000/012/194/original/80w90.jpg)
[![80w90_RGB.jpg](https://i.publiclab.org/system/images/photos/000/012/195/medium/80w90_RGB.jpg)](https://i.publiclab.org/system/images/photos/000/012/195/original/80w90_RGB.jpg)
(https://spectralworkbench.org/sets/2674), 80w-90 spectra on the top with RGB mode on the bottom



[![80w90_and_crude.jpg](https://i.publiclab.org/system/images/photos/000/012/215/medium/80w90_and_crude.jpg)](https://i.publiclab.org/system/images/photos/000/012/215/original/80w90_and_crude.jpg)
(https://spectralworkbench.org/sets/2686), comparison of 80w-90 with crude oil. The distributions here are much closer. The biggest difference I see is the strong red peak for crude oil at ~580 nm which does not show up as strongly in the 80w-90 spectra.

[![20w50.jpg](https://i.publiclab.org/system/images/photos/000/012/196/medium/20w50.jpg)](https://i.publiclab.org/system/images/photos/000/012/196/original/20w50.jpg)
[![20w50_rgb.jpg](https://i.publiclab.org/system/images/photos/000/012/197/medium/20w50_rgb.jpg)](https://i.publiclab.org/system/images/photos/000/012/197/original/20w50_rgb.jpg)
(https://spectralworkbench.org/sets/2676), spectra for 20w-50



[![20w50_and_80w90.jpg](https://i.publiclab.org/system/images/photos/000/012/217/medium/20w50_and_80w90.jpg)](https://i.publiclab.org/system/images/photos/000/012/217/original/20w50_and_80w90.jpg)
(https://spectralworkbench.org/sets/2689), comparison of 20w-50 and 80w-90 -- 80w-90 appears to have a broader distribution with more emissions from 500-550 nm whereas 20w-50 has most of its emissions from 470-515 nm.

[![5w30_area_equalization.jpg](https://i.publiclab.org/system/images/photos/000/012/198/medium/5w30_area_equalization.jpg)](https://i.publiclab.org/system/images/photos/000/012/198/original/5w30_area_equalization.jpg)
(https://spectralworkbench.org/sets/2675), 5w-30 had by far the weakest signal, resulting in this squashed looking graph when I tried to use area equalization.

[![5w30_height_equalization__sub_s4.jpg](https://i.publiclab.org/system/images/photos/000/012/199/medium/5w30_height_equalization__sub_s4.jpg)](https://i.publiclab.org/system/images/photos/000/012/199/original/5w30_height_equalization__sub_s4.jpg)
The height equalization macro yielded a much better looking graph for 5w-30. I'm still a bit suspicious of this data because of the weak signal. I plan to test some dilutions of the sample to see if the signal strength can be improved.

####B. Investigating unknown samples:

All of the unknowns gave me fairly weak fluorescence compared to the rest of the oil samples (though not as weak as 5w-20).


[![unknown_25.png](https://i.publiclab.org/system/images/photos/000/012/203/medium/unknown_25.png)](https://i.publiclab.org/system/images/photos/000/012/203/original/unknown_25.png)
(https://spectralworkbench.org/sets/2679), unknown 25


[![unknown_29.png](https://i.publiclab.org/system/images/photos/000/012/220/medium/unknown_29.png)](https://i.publiclab.org/system/images/photos/000/012/220/original/unknown_29.png)
(https://spectralworkbench.org/sets/2678), unknown 29

[![unknown_93.png](https://i.publiclab.org/system/images/photos/000/012/205/medium/unknown_93.png)](https://i.publiclab.org/system/images/photos/000/012/205/original/unknown_93.png)
(https://spectralworkbench.org/sets/2680), unknown 93

[![unknown_25r1-3_comparison.jpg](https://i.publiclab.org/system/images/photos/000/012/208/medium/unknown_25r1-3_comparison.jpg)](https://i.publiclab.org/system/images/photos/000/012/208/original/unknown_25r1-3_comparison.jpg)
The fluorescence emission profile of unknown 25 matches most closely with 20w-50




[![unknown_29r1-3_comparison.jpg](https://i.publiclab.org/system/images/photos/000/012/221/medium/unknown_29r1-3_comparison.jpg)](https://i.publiclab.org/system/images/photos/000/012/221/original/unknown_29r1-3_comparison.jpg)
The emission profile of unknown 29 is slightly to the left of unknown 25. It falls between the spectra of 20w-50 and diesel fuel.

[![80w90_and_crude_with_unknown_93.jpg](https://i.publiclab.org/system/images/photos/000/012/206/medium/80w90_and_crude_with_unknown_93.jpg)](https://i.publiclab.org/system/images/photos/000/012/206/original/80w90_and_crude_with_unknown_93.jpg)
Unknown 93 shows good segregation with 80w-90.


[![unknown_93r1-3_comparison.jpg](https://i.publiclab.org/system/images/photos/000/012/207/medium/unknown_93r1-3_comparison.jpg)](https://i.publiclab.org/system/images/photos/000/012/207/original/unknown_93r1-3_comparison.jpg)
Also, here (the green line is 80w-90 and the three lines clustered around it are the 3 captures of unknown 93).

###Questions and next steps

I want to test dilutions of the samples to see if some of the spectra can be improved by making dilutions and, most importantly, whether the shapes of the spectra stay consistent for each sample when they are diluted.