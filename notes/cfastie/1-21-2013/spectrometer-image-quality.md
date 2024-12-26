---
title: "Spectral image quality"\ntagnames: 'spectrometer, vermont, fold-up-mini-spectrometer, slit-width'
author: cfastie
path: /notes/cfastie/1-21-2013/spectrometer-image-quality.md
nid: 5663
uid: 554

---

![](https://publiclab.org/sites/default/files/D40CFLCUSG.jpg)

# Spectral image quality

by [cfastie](../profile/cfastie) | January 21, 2013 16:30

January 21, 2013 16:30 | Tags: [spectrometer](../tag/spectrometer), [vermont](../tag/vermont), [fold-up-mini-spectrometer](../tag/fold-up-mini-spectrometer), [slit-width](../tag/slit-width)

----

<em>Image above: Close up of some terbium and europium emission peaks in the spectrum of a compact fluorescent lamp photographed with a Nikon D40 DSLR. Terbium and europium compounds are commonly included in the phosphors lining the inside of fluorescent tubes. The overlain spectrograph is the red channel extracted by Spectral Workbench.  The flattened top of the tall peak indicates that the red channel was overexposed preventing precise assignment of a wavelength to that emission peak.</em>

<strong>Introduction</strong>

The PLOTS spectrometer is designed to stream video from a webcam or smart phone to Spectral Workbench which makes it easy to transfer the data and analyze it.  But I don't have a good webcam or Android phone (streaming does not work on iPhones yet), so I have been capturing still photos and hoping that they provide crisper images and maybe better data.  Spectral Workbench allows still photos of spectra to be uploaded, which works well.

My spectrometer is a little different from the standard PLOTS model because I made changes to all three of its components.  I made the entrance slit narrower by about half (about 0.2 mm), I used 1000 lines per mm diffraction grating film instead of a piece of DVD, and I used various cameras instead of the webcam that the PLOTS desktop model shipped with. But the basic design is the same: I make photographic images of the spectra created when a thin band of light passes through a transmission diffraction grating.

I hope to make a new version of the spectrometer that is portable like the smart phone version, but uses a point and shoot camera to capture still photos of the spectra. To use it I will have to do the extra steps of transferring the photos to a computer, cropping them, and uploading them to Spectral Workbench, but the subsequent analysis will be the same. 

<strong>Methods</strong>

To figure out which camera to use for my spectrometer, I tested seven different ones, three of which I use for aerial mapping photography. I tested one webcam (Microsoft LifeCam VX6000), but not the one that comes with the PLOTS spectrometer, which I think is better than mine.  I tested two smart phones and one real camera, a Nikon DSLR with a good macro lens.  I captured an image of the spectrum of a compact fluorescent lamp trying to get the crispest image possible with good detail of faint spectral features, but without overexposing the bright peaks.  I tried different combinations of light sensitivity (ISO), zoom level, f stop, shutter speed, and white balance.  My tests were not very scientific because my setup did not allow me to maintain the exact same spectrum displayed by the spectrometer while I switched the cameras one by one. So the images below vary in part because the spectrum itself varied or because the exposure varied, but the differences are still revealing.  I took many photos with each camera, and the best ones are below.

<div class="caption center"> <a href="https://www.flickr.com/photos/chrisfastie/8402686620/" title="spectra7 by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8467/8402686620_7fae44b3eb_c.jpg" width="555" height="800" alt="spectra7">
</a><p></p>
Part of the spectrum of a compact fluorescent lamp taken by seven different cameras.</div>

<strong>Results</strong>

<em>Sensor size.</em>  An obvious result is that better cameras take better photos of spectra, and much of the difference is probably related to the size of the camera's sensor.  Larger sensors are more sensitive to light, and the spectra we are trying to photograph are dim.  Cameras with small sensors, like webcams, smart phones, and low end Canon Powershots, do not perform well with low-light subjects. They can capture images of dim spectra, but the images are grainy, and the black areas are not very black.  This introduces background noise into the spectral data. The grainiest of the images was taken by the iPhone 4 which reported it was using ISO 1000, a fast setting that guarantees poor quality.  There was no way to force the iPhone to use a slower ISO setting, but even if there was that would have required the shutter to be slower or the aperture to be bigger, and both were already at their limit.  So the low sensitivity of smaller sensors affects image quality in multiple ways -- it requires high ISO which increases graininess and it forces the camera to use a slow shutter speed and sometimes the widest aperture (f stop) both of which can degrade image quality.  There is a big difference in sensor size (and sensitivity) among the cameras tested and this probably explains a lot of the differences among images.
 
<div class="caption center"> <a href="https://www.flickr.com/photos/chrisfastie/8402686378/" title="Sensors5aa by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8327/8402686378_5cc1bf29c3.jpg" width="750" height="336" alt="Sensors5aa"> </a><p></p>
Sensor size for the cameras I tested. I don't know the sensor size for my webcam, but it is probably the tiny 1/4" type. Image quality and low-light performance are generally a function of sensor size.  The figure is (probably) not actual size.</div>

<em>Exposure.</em>  Another problem with cheaper cameras is that there is limited control over exposure.  It is important to expose well for the bright parts of the spectrum.  If they are overexposed this truncates the peaks and makes determining their exact wavelength impossible (see topmost image).  Left to its own devices a camera's automatic exposure will average the scene of bright spectral lines on a black field and overexpose the peaks.  DSLRs and the better Canon Powershots have a true manual mode so you can get exactly the exposure you want, but most Powershots, phone cameras, and webcams rely solely on automatic exposure. CHDK running on a cheap Powershot allows complete control, and some smart phone apps at least let you expose for a selected part of the image. 

<div class="caption center">
<a href="https://www.flickr.com/photos/chrisfastie/8402464747/" title="table7 by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8364/8402464747_8d8e20c086.jpg" width="500" height="342" alt="table7"></a></div>

<em>Dynamic range.</em>  Even if you get a good exposure, cameras with small sensors will have a hard time recording detail in both the brightest and faintest peaks.  Dynamic range increases with sensor size and quality, so better cameras will be able to avoid overexposing (and truncating) the brightest peaks while simultaneously recording the faintest peaks which are lost in the dark background in images from other cameras.  In any one camera, dynamic range decreases at higher ISO speeds, so: A smaller sensor leads to low sensitivity, which leads to high ISO, which leads to graininess AND lost bright and dim details.  A feature of many recent cameras, including phones and Powershots, is HDR or high dynamic range.  This feature takes multiple photos at different exposures and blends them into one image preserving the brightest and dimmest parts of the scene.  Especially if the spectrometer is held rock steady, this can improve the range of peaks recorded in a spectrum. However, the relative brightness of spectral peaks is important data when identifying the composition of a material, and HDR modifies the natural relationship among peaks in ways that might compromise interpretation.

<strong>Conclusions</strong>

The Canon Powershot S95, my best Powershot, has good dynamic range and complete manual control of exposure and focus. I would rather use a cheaper Powershot because then I would be willing to open it up and remove the infrared block filter. That would allow recording spectral peaks in the near infrared region and extend the scientific usefulness of the spectrometer. But that makes the camera useless for regular photography.  I don't want to do this surgery on my S95, but I also don't want to accept the lack of manual control in a lesser camera.  So I will build the spectrometer around the S95 to ensure the best spectral resolution in the visible range, but maybe have a modified Canon A810 handy in case infrared peaks are needed to identify something.  I think it should be possible to make these two cameras interchangeable in the new spectrometer.