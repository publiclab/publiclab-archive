---
title: 'Jelly Belly'
tagnames: spectrometer, mobile-phone-camera, fold-up-mini-spectrometer, spectrometer-calibration
author: cfastie
path: /notes/cfastie/1-9-2013/jelly-belly.md
nid: 5493
uid: 554

---

![](https://publiclab.org/sites/default/files/jellybelly-20130107-4898.jpg)

# Jelly Belly

by [cfastie](../profile/cfastie) January 09, 2013 16:28

January 09, 2013 16:28 | Tags: [spectrometer](../tag/spectrometer), [mobile-phone-camera](../tag/mobile-phone-camera), [fold-up-mini-spectrometer](../tag/fold-up-mini-spectrometer), [spectrometer-calibration](../tag/spectrometer-calibration)

----

Over the holidays Galen and I were treated to dinner at the Waybury Inn in East Middlebury by our generous visiting cousins.  This local landmark was made famous in the 1980s when an exterior shot was used in the opening credits of <em>Newhart</em>, a TV sitcom starring Bob Newhart.  That day we had finished constructing our [Public Labs fold-up spectrometers]( http://publiclaboratory.org/notes/cfastie/1-4-2013/foldup-spectrometer-iphone), and Galen was able to tell from our table which lamps in the dining room were incandescent and which were compact fluorescent. This was remarkable in part because it did not result in the maître d' asking us to leave.  

On the way home, we stopped at the other East Middlebury landmark, Middlebury Sweets, which states in its publicity that it is the largest candy store in Vermont, presumably because it is the largest candy store in Vermont. They were closed but we were drawn by the glow of the fabulous Jelly Belly neon sign in their window. 

<div class="caption center"> <a href="https://www.flickr.com/photos/chrisfastie/8364906662/" title="The red tube and neon by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8218/8364906662_02c8915b33.jpg" width="500" height="228" alt="The red tube and neon"></a><p></p>
Spectral image from the red tube in the neon sign (top) registered with a schematic of the emission peaks of neon. The green and yellow peaks are missing from our spectrum.</div>

The sign has two colors, and we captured still images of spectra of both discharge tubes with the iPhone4 spectrometers.  The red tube had only red spectral peaks, and it was easy to learn that they matched the pattern of peaks in the emission spectrum of neon.  This was not a surprise, but we are still not sure why the yellow and green peaks that should also be present in neon's spectrum are missing from our images. 

<div class="caption center"> <a href="https://www.flickr.com/photos/chrisfastie/8364976800/" title="Spectrographs of the red tube and neon by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8329/8364976800_50915a61c0.jpg" width="500" height="484" alt="Spectrographs of the red tube and neon"></a><p></p>
Spectrograph of the red tube in the sign from Spectral Workbench (gray) registered with the spectral peaks of neon. Several peaks, including a very bright yellow peak (far left) are missing from our spectrum. A bright peak at the far right is in the near infrared and is invisible to the iPhone camera.</div>


Our best hypothesis is that <strong><em>neon red</em></strong> is nice, but it is not <strong><em>Jelly Belly red</em></strong>.  Re-creating Jelly Belly's branded color required filtering out the green parts of the neon light, so colored or coated glass was used to make the discharge tube.  Another hypothesis is that the argon between the double panes of the low-E windows we were shooting through absorbed the green part of the spectrum.  We will have to return when they are open and shoot from the inside and also ask to see the sign when it is turned off.

<div class="caption center"> <a href="https://www.flickr.com/photos/chrisfastie/8363842915/" title="The yellow tube and compact fluorescent bulb by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8238/8363842915_f84ac091b2.jpg" width="500" height="123" alt="The yellow tube and compact fluorescent bulb"></a><p></p>
The spectrum of the yellow tube matches several peaks of the familiar spectrum of compact fluorescent lamps (CFL) but is missing all three blue peaks.</div>

The yellow tube presented a similar result.  The spectrum we captured was immediately recognizable as the green to red mercury/terbium/europium peaks from a fluorescent bulb.  But the three characteristic blue peaks (which are also from mercury and terbium) were absent. So we hypothesize that the yellow tube is a standard fluorescent bulb made with yellow glass or coated with something that absorbs blue. The blue emissions are being produced inside but filtered out (absorbed) by the glass to produce the branded Jelly Belly yellow.

<div class="caption center"> <a href="https://www.flickr.com/photos/chrisfastie/8364905628/" title="Our concclusion by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8325/8364905628_568dc4b965.jpg" width="500" height="333" alt="Our conclusion"></a><p></p>
We think the red tubes are neon discharge tubes made from red glass, and the yellow tubes are fluorescent tubes made from yellow glass.</div>

Thanks very much to Jeff and Tom for adding a new feature to Spectral Workbench that allows any spectrum (including uploaded images) to be calibrated if you know the wavelengths of two of the peaks. You can learn more about using the Spectral Workbench API to do this here:
http://publiclaboratory.org/wiki/spectral-workbench-api
For some additional information about the API and to see the spectra we captured: 
https://spectralworkbench.org/analyze/spectrum/2740
https://spectralworkbench.org/analyze/spectrum/2750

Get your own: http://shop.breadpig.com/products/mini-fold-up-spectrometer
 