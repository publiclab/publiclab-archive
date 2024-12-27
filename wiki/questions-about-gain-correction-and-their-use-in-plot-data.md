---
title: "Questions About Gain Correction and their use in Plot Data"

tagnames: ''
author: dhaffnersr
path: /wiki/questions-about-gain-correction-and-their-use-in-plot-data.md
nid: 13246
uid: 461120
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/016/810/original/solux_50w_3500k_june_26.png)

# Questions About Gain Correction and their use in Plot Data

by [dhaffnersr](/profile/dhaffnersr), [stoft](/profile/stoft)

June 27, 2016 15:06 | Tags: 

----

I want to start by explaning a few things about how my thought process works, I need to do this first so it puts the rest of my research in context. I had a stroke several years ago, brought on by a cardiac arrest episode I had back in 2009, I have been implanted with a pacemaker/difibrillator. I am very fortunate that I am a Veteran and get all my medical care at the VA hospital, well the stroke didn't help but I recovered from that also, the only long term side effect from that is, I have a short term memory problem that I have to work at diligently every day on, so I have to keep a log book of my day's events that I feel are important so I do not forget.

This includes much of my research, that is why I have log books especially designated just for that. I feel that its important for me to divulge this kind of very personal information because it not only helps me mentally, but hopefully will bring a little clarity to some of my remarks. So engaging in this type of work to me is very much like an athlete rebuilding himself after a severe accident, I would just ask for a little forgiveness and patience.

So I am having trouble understanding how to apply gain correction as it pertains to data processing of spectra? I have re-read all of Dave @Stoft work on the subject and I understand the concept of it but not how to apply it when I am processing data in spekwin. The help files in spekwin32 are very limited in their scope of explanation and Dr.Menges is not always available to ask these kind of questions.

So I downloaded the actual solar spectrum from the National Weather Center and I will post the link also, I produced a plot with my Solux 50W lamp, the solar spectrum and my latest CFL calibration, the plot is elow and this is were I do not know how to proceed from there?


[![ALL_3_spectrums_solar_solux_and_cfl_june_27.png](//i.publiclab.org/system/images/photos/000/016/811/large/ALL_3_spectrums_solar_solux_and_cfl_june_27.png)](//i.publiclab.org/system/images/photos/000/016/811/original/ALL_3_spectrums_solar_solux_and_cfl_june_27.png)

Here is the link, scroll to the bottom of the page to download the xls file:

http://www.pveducation.org/pvcdrom/appendices/standard-solar-spectra

-@dhaffnersr

**Comment #1**

Step 1: Obtain a 4700K Solux which 1) has a much more uniform spectral response (flatter, smoother, less dynamic range over 400-800nm) than the 3500K and 2) has measured spectral data for use in performing gain correction. Then .......

Step 2: Measure that 4700K Solux with the spectrometer while keeping the peak RGB just shy of clipping for the best SNR.

Step 3: The idealized relative linear gain correction is then the ratio of the (PLab Measured data (from Step 2)) and the (Solux 4700K data from Step 1). This could be computed just once in a spreadsheet.

This obtains the theoretical gain correction which then requires some limitations at the spectral ends where the correction value "blows up" because the errors get large due to camera sensitivity falling to near zero.

-@stoft

hey Dave, ok, now from step 1 aside from getting the 4700k lamp itself, when your talking about that it has measured spectral data are you saying that it comes with the lamp or is on their website and after capturing the data from the 4700k solux, that then I subtract that spectrum from the data from step1?

Did that make sense?

-@dhaffnersr

**Note 1:**
Solux does provide the [10nm increment spectral data](http://www.solux.net/ies_files/SoLux%20Spectral%20Data.xls.pdf) which, since it is a relatively "smooth" curve, can be interpolated quite accurately. The PLab measured data will, obviously, be different.

**Comment 2:**

1) Find the peak value of the PLab Solux data and then scale all Solux data so as to match that value at that wavelength (the Solux and PLab data will now match at a single wavelength -- this point has a RELATIVE gain correction of 1.0 .

2) For all other wavelengths, calculate the ratio between the curves to get the correction. [i.e. if a Solux data point is at 1.2 and the PLab data value for that same wavelength is 1.0, then the multiplicative correction is 1.2/1.0=1.2 .... meaning the PLab camera is not sensitive enough at that wavelength so the value must be multiplied by 1.2 to correct what is measured from the Solux lamp by the PLab device to get the true value (to match the ideal Solux spectral curve). Repeat for all wavelengths (see Note 4).

3) Since the Solux data (and light output) is not characterized with high precision at 0.1nm increments, the resulting correction curve needs to be smoothed -- small variations are generally meaningless in terms of correction. So the final output of this process should be a smooth curve over the usable BW and, if done accurately, should only need to be acquired once for a specific PLab device -- as that device's sensitivity curve will not change over time.

4) Note: It is likely that the correction curve will produce extreme values beyond the 400-650nm band where the camera sensitivity drops to near zero so the correction will have to be band-limited. [In my code, I implemented a cosine-based correction function for the band edges to make the correction algorithm well-behaved -- though I still ignored corrected data outside of 400-650nm.]

-@stoft

Ok, now some things are making a lot more sense as far as spekwin goes, I can perform multiplication and division on the x and y axis, but again the help files assume that I am already an expert at this. I figured out how it works though, so is this correct, can I do the calculations with both plots on the screen, or do I have to do it on excel?

I want to show you what the windows look like that I have to work with in spekwin, I'm sure it is completely different in Matlab but this first one is how I bring up the window for loading the Lamp spectrum;


[![load_corrctn_curve_pic.png](//i.publiclab.org/system/images/photos/000/016/812/large/load_corrctn_curve_pic.png)](//i.publiclab.org/system/images/photos/000/016/812/original/load_corrctn_curve_pic.png)

The next 1 is just the window for bringing it up, although I can also calculate excitation spectra when I input excitation wavelength.


[![load_corrctn_curve_pic_2.png](//i.publiclab.org/system/images/photos/000/016/813/large/load_corrctn_curve_pic_2.png)](//i.publiclab.org/system/images/photos/000/016/813/original/load_corrctn_curve_pic_2.png)

And this next one, this is what I would use to do the correction on the spectra's right? It lets me do it right on screen, that's why I was asking.


[![load_corrctn_curve_pic_3.png](//i.publiclab.org/system/images/photos/000/016/814/large/load_corrctn_curve_pic_3.png)](//i.publiclab.org/system/images/photos/000/016/814/original/load_corrctn_curve_pic_3.png)

So my next step is purchasing the 4700k lamp itself from Solux.

-@dhaffnersr

**Comment 3:**

It might be possible with that software; I just don't know. The steps need to be taken SEQUENTIALLY: 1) measure Solux light, 2) load Solux reference and scale to make the values match at the measured peak, 3) bandwidth limit (eg 400-650nm), 4) Calc the ratio and smooth, 5) save result as the gain-correction curve (which is multiplied against future measurements).

-@stoft

Thanks dave for the exact steps, that's exactly what I needed, it makes sense, as soon as I get the bulb I will try it, I didn't realize that the bulb is a 12v type, no problem I think I can use an old fiber optic Xmas tree power supply, the bulb hopefully will fit in the socket.

-@dhaffnersr

**Note 1:**

Check the specs; 12V MR-16 halogen bulbs require significant current (5A) and a stable supply (constant intensity); halogen Class 2 supplies are available. [ [Amazon: Solux 4700K](https://www.amazon.com/18003-Daylight-Halogen-Degree-Kelvin/dp/B0002GS4OG/ref=sr_1_1?s=hi&ie=UTF8&qid=1467136896&sr=1-1&keywords=MR16+4700k+halogen) ] 

-@stoft

I just check out the amazon link, excellent, thanks Dave. Yes, I checked the Xmas tree display and it will not work, so I either build one or better yet, buy one. Your right, I probably better buy one for the stable power supply.

Also, the X and Y constant windows on spekwin are the ones for creating the gain correction, I was playing around with it and I was able to manipulate the x and y values on a cfl plot I had.

-@dhaffnersr

 @stoft hey Dave, well I finally got the Solux 4700K with the 12vdc transformer that comes with it, I paid the extra money and ordered everything from Solux directly from their website ( bulb and everything.) I preformed two scans one with an exposure time of 5 minutes and another at 10 minutes, I figured that was good warm up time for the lamp.

I then took my scan and divided it by the Solux reference data and this is what I got for a gain correction:


[![Plab_scan_Solux_4700K_gain_corrected_july_07.png](//i.publiclab.org/system/images/photos/000/016/896/large/Plab_scan_Solux_4700K_gain_corrected_july_07.png)](//i.publiclab.org/system/images/photos/000/016/896/original/Plab_scan_Solux_4700K_gain_corrected_july_07.png)

Let me know what you think, thanks.

@stoft hey Dave, I re-did the solux gain correction and took a little more time with it, there was some slight clipping around the blue band so here is the new graph:


[![Plab_scan_Solux_master_reference_gain_crrtcd_july_08_4700K.png](//i.publiclab.org/system/images/photos/000/016/907/large/Plab_scan_Solux_master_reference_gain_crrtcd_july_08_4700K.png)](//i.publiclab.org/system/images/photos/000/016/907/original/Plab_scan_Solux_master_reference_gain_crrtcd_july_08_4700K.png)

@stoft I redid my master reference with the Solux lamp, I downloaded the data from your solux original txt file and re-divided it with my solux lamp spectrum and got a much better and accurate spectrum that I'm happy with.


[![Plab_scan_Solux_master_reference_gain_crrtcd_july_08_4700K.png](//i.publiclab.org/system/images/photos/000/016/941/large/Plab_scan_Solux_master_reference_gain_crrtcd_july_08_4700K.png)](//i.publiclab.org/system/images/photos/000/016/941/original/Plab_scan_Solux_master_reference_gain_crrtcd_july_08_4700K.png)

 @stoft here is a comparison of my spectrum and yours:


[![solux4700KGCal_300-800nm_gain_correction_june26.png](//i.publiclab.org/system/images/photos/000/016/942/large/solux4700KGCal_300-800nm_gain_correction_june26.png)](//i.publiclab.org/system/images/photos/000/016/942/original/solux4700KGCal_300-800nm_gain_correction_june26.png)

@stoft Yet again, I triple checked my data and found error in my division, so I once again redid the spectrum over and this looks better:


[![solux4700KGCal_300-800nm_gain_correction_june26.png](//i.publiclab.org/system/images/photos/000/016/971/large/solux4700KGCal_300-800nm_gain_correction_june26.png)](//i.publiclab.org/system/images/photos/000/016/971/original/solux4700KGCal_300-800nm_gain_correction_june26.png)





