---
nid: 9717
title: Why a red filter should work well for NDVI
path: public/static/notes/nedhorning/11-01-2013/why-a-red-filter-should-work-well-for-ndvi.md
uid: 133
tagnames: ndvi,calibration,infrared,infragram,wratten25a,super-red,red-vs-blue
---

# Why a red filter should work well for NDVI

In my recent research note comparing NDVI images created using blue and red filters (http://publiclab.org/notes/nedhorning/10-30-2013/red-vs-blue-filters-for-ndvi) I noted that reflected red wavelengths of light likely have more useful information for detecting differences in plant vigor or health when compared with blue light. In addition to the images in that research note I wanted to explain the logic behind the improved NDVI performance when a red filter is used in place of a blue filter. In this note I'll use spectral reflectance curves to illustrate why there is greater contrast in NDVI when using a red filter. 

##What is a spectral reflectance curve?
A spectral reflectance curve provides information about the intensity of different colors of light reflected from a surface of an object. When plotted as a graph we can see how reflectance varies  across a range of wavelengths for different materials. Scientists use this information to identify different materials. For example, geologists have libraries of spectral reflectance curves for hundreds of different minerals and by measuring spectral reflectance of a sample collected in the field they are able to identify the different minerals in the sample. 

Spectral reflectance curves typically have wavelength on the x-axis and percent reflectance on the y axis. Percent reflectance is simply the percentage of energy (light) for a particular wavelength that is reflected off of a sample divided by the intensity of energy for that wavelength that illuminated the sample. In other words it's the outgoing energy divided by the incoming energy for a given wavelength. 

You can see reflectance curves of different materials and how they related to different satellite images using this interactive: http://biodiversityinformatics.amnh.org/tool.php?content_id=145. 

Below are a few reflectance curves for different materials. The circles represent the approximate part of the curve that is being recorded by the blue channel in a camera with a blue filter (leftmost circle ~450 nm), a red channel in a camera with a red filter (center circle ~650 nm) and the channel that records NIR (rightmost circle ~850 nm). One thing to keep in mind is that the circles represent a relatively small range of wavelengths and the wavelengths of light recorded by a single band in a photograph will be much broader. I expect the red circles are close to the center of the wavebands of a photo and it probably roughly represents what is recorded by the camera. 


[![greenGrassReflectanceCircles.png](https://i.publiclab.org/system/images/photos/000/002/098/medium/greenGrassReflectanceCircles.png)](https://i.publiclab.org/system/images/photos/000/002/098/original/greenGrassReflectanceCircles.png)
**Reflectance curve for green lawn grass**
<p> </p>
<p> </p>

[![dryGrassReflectanceCircle.png](https://i.publiclab.org/system/images/photos/000/002/099/medium/dryGrassReflectanceCircle.png)](https://i.publiclab.org/system/images/photos/000/002/099/original/dryGrassReflectanceCircle.png)
**Reflectance curve for dry grass**
<p> </p>
<p> </p>

[![tarPaperReflectanceCircles.png](https://i.publiclab.org/system/images/photos/000/002/100/medium/tarPaperReflectanceCircles.png)](https://i.publiclab.org/system/images/photos/000/002/100/original/tarPaperReflectanceCircles.png)
**Reflectance curve for tar paper**
<p> </p>
<p> </p>

[![pineBoardReflectanceCircles.png](https://i.publiclab.org/system/images/photos/000/002/101/medium/pineBoardReflectanceCircles.png)](https://i.publiclab.org/system/images/photos/000/002/101/original/pineBoardReflectanceCircles.png)
**Reflectance curve for pine wood**
<p> </p>
<p> </p>

##Why is this important?
Although the reflectance curves for these materials could change from one sample to the next the general shape of the graphs are typical for these materials. For example, the maximum reflectance for different species of grass can vary significantly but the basic shape of the graph with the little bump at 550 nm and the steep curve from roughly 700 nm- 750 nm is typical of nearly all healthy green vegetation. 

When you look at the spectral curve for green grass you can see that the difference in reflectance between blue (the circle furthest to the left) and NIR and the difference between red (the circle in the middle) and NIR is roughly the same. Therefore one would expect the same or similar NDVI value regardless if a blue or red filter was used. The NDVI calculated using the blue band was 0.85 and for the red band 0.82. This realization is probably why the use of blue filter cameras to create NDVI has increased in popularity.  

Now look at the curve for dry grass. Since the circle for blue and red wavelengths are not at the same level or reflectance the NDVI values will be quite different. The reflectance of dry grass in the blue band hasn't changed that much but the reflectance in the red band has increased considerably. The NIR reflectance has decreased. The NDVI for dry grass when using the blue band is 0.47 and when using the red band it is 0.15. In both cases the NDVI for dry grass is less than the NDVI for green grass but when we use the red band the difference is much greater which will result in an NDVI image with greater contrast between healthy and unhealthy vegetation. When using remotely sensed data to detect or monitor healthy vegetation contrast is important and we should do what we can to maximize it. 

##Other notes of interest
This green grass curve highlights a common misconception that green vegetation reflects a lot of green and NIR light. As you can see only about 10% of the green light is being reflected and I certainly don't consider 10% to be "a lot". Grass looks green to us simple because it reflects more green light than blue or red and our eyes are particularly sensitive to green light. It's not because if reflects a lot of green light.

These curves are made up of hundreds of points and each point is a measurement that was made from a spectrometer. When we take a photo using our blue or red filter cameras the curve we would get is just a straight line since we only have two points – on for NIR and another for either red or blue wavelengths. If we use the dual-camera NIR setup we get 4 bands (red, green, blue, and NIR) which can help in identifying features based on their spectral properties. There are image sensors called hyperspectral sensors or imaging spectrometers capable of recording hundreds of very narrow bands but those are very expensive. It was interesting to see the Adafruit website recently mention that adding a blue filter will turn your camera into a hyperspectral imager (http://www.adafruit.com/products/1567#Description).

Although it's not evident from reflectance curves another problem relying on blue light to record NDVI is that blue wavelengths of light are more easily scattered than the longer red wavelengths. Chris Fastie highlighted that fact in one of his recent research notes: http://publiclab.org/notes/cfastie/10-23-2013/ord-sfo. Images recorded using red light will be clearer than images recorded using blue light. The intensity of this effect depends on the types and amounts of particulates in the atmosphere as well as the distance between the camera and the target but it can be a problem with kite and balloon aerial photography especially if the camera is looking at an oblique angle. 

##Potential drawback using red filters
One issue that has not been discussed so far is leakage of “undesirable” wavelengths of light into the photo bands. With the red filter we can be fairly confident that the blue channel contains primarily NIR light since nearly all of the blue and green light is removed by the red filter. The red band, on the other hand, records red light but also a good deal of NIR light that "leaks" in. This is because both the red Wratten 25A filter that I inserted in the camera and the red filter that is part of the Bayer filter (http://en.wikipedia.org/wiki/Bayer_filter) allow NIR light to pass. A similar problem occurs with the blue filter but it is somewhat worse when we use a red filter. This is a potential drawback to using a red filter. I'm looking into ways to effectively remove NIR light impacts from the red band but my initial thinking is that if the bands are calibrated properly the impact of NIR light leakage will be minimal in most cases. Much on the leakage impact is removed through the calibration process. I'll try to post a research note explaining light leakage and possible ways to deal with it in the not too distant future. 


##Where to browse reflectance spectra
If you are interested in browsing reflectance spectra I have a few URLs below of libraries that allow you to view graphs and download data. It's interesting to notice the blue and  red reflectance properties of different materials. 

Vegetation Spectral Library: http://spectrallibrary.utep.edu/
Site has ~ 235 spectra from the field. The have photos of the cover type and ASCII data with radiance (incoming light) and irradiance (reflected light). To calculate percent reflectance divide irradiance by radiance

ASTER Spectral Library - Version 2.0: http://speclib.jpl.nasa.gov/
Only 4 vegetation typs are available [Dry grass, grass, conifer, deciduous) but it has spectral from 84 man-made materials. Data file only has percent reflectance. It includes data from includes data from three other spectral libraries: the Johns Hopkins University (JHU) Spectral Library the Jet Propulsion Laboratory (JPL) Spectral Library, and the United States Geological Survey (USGS - Reston) Spectral Library.

Spectral Library Project by the Joint Fire Science Program: http://www.frames.gov/partner-sites/assessing-burn-severity/spectral/
Spectral libraries with data for green (photosynthetic) vegetation, non-photosynthetic vegetation, soil and/or rock, and char and/or ash for three different regions (Western Montana, Interior Alaska, and Southern California). Data includes photos of cover type, ASCII file of percent reflectance. 

USGS Spectral Library: http://speclab.cr.usgs.gov/spectral-lib.html
This is a comprehensive set of libraries. 