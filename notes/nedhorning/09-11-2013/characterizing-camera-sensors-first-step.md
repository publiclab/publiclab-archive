---
title: "Characterizing camera sensors – first step"

tagnames: 'near-infrared-camera, vermont, infrared, leaffest, infragram, leaffest2013, leds'
author: nedhorning
path: /notes/nedhorning/09-11-2013/characterizing-camera-sensors-first-step.md
nid: 9314
uid: 133

---

![](https://publiclab.org/public/system/images/photos/000/001/482/original/DonLEDs.JPG)

# Characterizing camera sensors – first step

by [nedhorning](../../../profile/nedhorning) | September 11, 2013 14:49

September 11, 2013 14:49 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [vermont](../tag/vermont), [infrared](../tag/infrared), [leaffest](../tag/leaffest), [infragram](../tag/infragram), [leaffest2013](../tag/leaffest2013), [leds](../tag/leds)

----

One of the tasks at LEAFFEST ([http://publiclab.org/notes/cfastie/08-29-2013/l-e-a-f-f-e-s-t-2013](http://publiclab.org/notes/cfastie/08-29-2013/l-e-a-f-f-e-s-t-2013)) was to develop some methods for characterizing Infrablue and other near-infrared 
(NIR) cameras to better understand how different wavelengths of light are being recorded by the camera sensor. 

The problem stems from the fact that the cameras we modify to acquire NIR imagery were designed to record visible light and record that light as separate layers or bands so an image with layers representing reflected red, green and blue light can be created. When we add NIR capabilities we are changing that design by restricting some colors (wavelengths of visible light) and allowing NIR light to hit the camera's sensor. Understanding which wavelengths are recorded in which channel in the camera would help us determine which camera/filter combinations are “best” for vegetation studies and how we can process the images to create special products, like NDVI, that provide information about vegetation productivity. 

Up until this point people have been taking pictures and then trying to guess how to combine different bands to create nice looking and informative images. The Infragram sandbox ([http://infragram.org/static/sandbox/](http://infragram.org/static/sandbox/)) is an excellent tool for that. This approach is a lot of fun but a more deliberate attempt at characterizing cameras would likely provide more useful information that could be used to create guidance on how to use specific camera/filter combinations to maximize information content. 

We decided to start with a simple setup using LEDs which emit a well documented narrow band of light (see figure 1). A NIR LED was also used although we do not have its specifications. Jeff Warren recently posted a research note about the band bands emitted by LEDs (http://publiclab.org/notes/warren/09-10-2013/spectra-of-sparkfun-multicolor-led-kit) which indicates that the specifications might be a little optimistic in their wavelength characterization but that needs more research. The LED test platform is displayed in figure 2. The setup involved setting a camera about two feet from the LED in a dark room and then taking a photo of each LED. 


[![LED_Specs.jpg](https://i.publiclab.org/system/images/photos/000/001/486/medium/LED_Specs.jpg)](https://i.publiclab.org/system/images/photos/000/001/486/original/LED_Specs.jpg)




The results from the first test were less than ideal since the images saturated the sensor around the LEDs since the camera was looking directly at the illuminated LED. Even with an unmodified Canon G11 the sensor was saturated in all color channels (red, green, blue) at the center of the LED. In future trials we will use a more diffuse light source like reflected light off a white piece of paper. White paper might not reflect all wavelengths of light equally but it's probably good enough for this test. 

Even with the poor results a few interesting observations were made. First off, even when the camera is recording a “pure” color of light, for example green, a good deal of light is also recorded in the blue and red channels (figure 3). Also, a camera modified with a piece of film to record only NIR light leaks a significant amount of visible light onto the sensor. That's not a big surprise since you can see some light if you look through the film. More testing should provide information about the significance of this effect and which channels are least affected. 

The next step is to characterize the different infragram webcam candidates to help select a good one. With some of the better NIR cameras we can also investigate further characterization so we can record radiance (the physical measurement of light intensity) with the cameras which would be very interesting if it's possible. This would require access to a lab with special equipment. A good description of the process required for thorough characterization of a digital camera (Spectral Characterization of a Digital Still Camera’s NIR Modiﬁcation to Enhance Archaeological Observation) can be found here: ([http://www.academia.edu/423603/Spectral_Characterization_of_a_Digital_Still_Cameras_NIR_Modification_to_Enhance_Archaeological_Observation](http://www.academia.edu/423603/Spectral_Characterization_of_a_Digital_Still_Cameras_NIR_Modification_to_Enhance_Archaeological_Observation)) but you need and Academia.edu account to download it.
[![DonLEDs.JPG](https://i.publiclab.org/system/images/photos/000/001/484/medium/DonLEDs.JPG)](https://i.publiclab.org/system/images/photos/000/001/484/original/DonLEDs.JPG)


[![GreenLED_G11AllLayers.jpg](https://i.publiclab.org/system/images/photos/000/001/485/medium/GreenLED_G11AllLayers.jpg)](https://i.publiclab.org/system/images/photos/000/001/485/original/GreenLED_G11AllLayers.jpg)

