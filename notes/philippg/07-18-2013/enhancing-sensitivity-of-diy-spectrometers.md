---
title: "Enhancing Sensitivity of DIY Spectrometers"

tagnames: 'spectrometer, water-quality, sensitivity, smoothing'
author: philippg
path: /notes/philippg/07-18-2013/enhancing-sensitivity-of-diy-spectrometers.md
nid: 8906
uid: 121462
cids: 6338,6339,6342,6431,7210
---

![](https://publiclab.org/public/system/images/photos/000/000/839/original/averaging.png)

# Enhancing Sensitivity of DIY Spectrometers

by [philippg](/profile/philippg) | July 18, 2013 20:41

July 18, 2013 20:41 | Tags: [spectrometer](/tag/spectrometer), [water-quality](/tag/water-quality), [sensitivity](/tag/sensitivity), [smoothing](/tag/smoothing)

----

##What I want to do
In a [previous post](http://publiclab.org/notes/philippg/07-10-2013/water-quality-measurements-with-optical-spectroscopy) about water quality measurements with DIY spectrometers, I stated that sensor sensitivity will be one of the challenges to face. The spectral workbench software, as realized at the moment, uses a single row of the webcam video stream to create spectra. I proposed two things:

1) to average over a few lines of the picture
2) to average over time / increase exposure time

##My attempt and results
The workbench software seemed to intimidating, so I wrote a little python script that demonstrates how averaging over space and time can help increase the signal to noise ratio. The script is available on [github](https://github.com/philippgr/DIYspectro) if you want to give it a try yourself. I haven't got the spectrometer here at the moment, but to show you some results I ran the script on my webcam, facing the ceiling. 

Here's the part of the webcam-stream evaluated to generate a spectrum (RGB channels are binned together, the colors encode intensity):
![averaging.png](https://i.publiclab.org/system/images/photos/000/000/837/medium/averaging.png)
Due to the averaging the noise level went down significantly. 

I applied different methods to extract the actual spectrum from the greyscale/intensity pics:

![spectrum.png](https://i.publiclab.org/system/images/photos/000/000/836/medium/spectrum.png)

Same, but zoomed in a bit:

![spectrum_zoomed.png](https://i.publiclab.org/system/images/photos/000/000/838/medium/spectrum_zoomed.png)

##Questions and next steps
I'll test this these days with the spectrometer attached, but I don't see any issues arising. Here, I used 100 frames (25fps * 4 secs) for the average. If the sample is really dim, why not expose half a minute or longer. The only restriction is probably memory, as the raw data is stored in a numpy-array. I'd definitely recommend to include this in the spectral workbench software. 

Next step for me will be to apply this procedure for measuring typically very low intensity water spectra. These can be used to determine [water quality](http://www.oceanopticsbook.info/view/overview_of_optical_oceanography/introduction).

## Amendment
Finally, I'm back to my office and the spectrometer. Here's a daylight spectrum, cloudy sky, with some trees on the side. The spectrum is not calibrated whatsoever, but looks smooth and as expected. 

![daylight_cloudy_with_tree.png](https://i.publiclab.org/system/images/photos/000/000/847/medium/daylight_cloudy_with_tree.png)

![daylight_cloudy_with_tree_spectrum.png](https://i.publiclab.org/system/images/photos/000/000/845/medium/daylight_cloudy_with_tree_spectrum.png)

![daylight_cloudy_with_tree_spectrum_zoom.png](https://i.publiclab.org/system/images/photos/000/000/846/medium/daylight_cloudy_with_tree_spectrum_zoom.png)




