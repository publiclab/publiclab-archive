---
title: "White balance"\ntagnames: 'near-infrared-camera, vermont, white-balance, infragram, infrablue, response:8018, response:8196'
author: cfastie
path: /notes/cfastie/06-17-2013/white-balance.md
nid: 8224
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/517/original/18WBsurface.jpg)

# White balance

by [cfastie](../profile/cfastie) | June 17, 2013 03:31

June 17, 2013 03:31 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [vermont](../tag/vermont), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [response:8018](../tag/response:8018), [response:8196](../tag/response:8196)

----

<em>Image above: Some of the surfaces I used to custom white balance the infrablue SX120</em>

There have been a lot of dull infrablue photos showing up around here. Not uninteresting, just not very colorful (e.g., [here](http://publiclab.org/notes/wward1400/06-14-2013/infragram-tidepooling) and [here](http://publiclab.org/notes/warren/06-02-2013/ndvi-difficulties-with-infrablue-filter)). A Canon SX120 arrived from Ebayland on Friday, and by Saturday its IR block filter was removed and a piece of Rosco #2008 filter taped to the front of the lens. Every photo I took with it was dull compared to the ones taken with the Canon A810 with Rosco #2007 filter. I had done a custom white balance on the new SX120 while pointing it at grass instead of a piece of blue paper as I had done with the A810.  So today I did a custom white balance with 20 different surfaces, including eight colors of origami paper. I took photos of grass and other plants with each custom white balance. 


![12panelHistos2k.jpg](https://i.publiclab.org/system/images/photos/000/000/518/large/12panelHistos2k.jpg)
<p></p><em>Twelve of the white balance surfaces. Inset histograms are for the infrablue photos of grass (mown lawn) taken after the custom white balance on that surface. Panels are ordered from greatest separation of red and blue curves (upper left) to least separation (lower right).</em>

Doing a white balance with certain colors allows the camera to produce colorful (yellow-orange) photos of plants. The histograms of these infrablue photos of plants shows good separation of the red and blue curves, and these photos generally produce easily interpretable NDVI images. Using other colors for white balancing produces grayer infrablue photos of plants. As you know from the [histogram video]( http://publiclab.org/notes/cfastie/06-13-2013/histograms) the pixels in gray images have the same value for red, green, and blue, so the three curves coincide.  Grayish infrablue photos produce NDVI images with little dynamic range because most pixels have similar red and blue values and therefore produce similar NDVI values. 

![4paneltomatndviZero4.jpg](https://i.publiclab.org/system/images/photos/000/000/519/large/4paneltomatndviZero4.jpg)<p></p>
![SXinfra2tilloWB.jpg](https://i.publiclab.org/system/images/photos/000/000/520/large/SXinfra2tilloWB.jpg)
<p></p><em>Top: Infrablue photos following white balance on grass. The histogram of all or part of that photo is at left. Note the minimal separation of the red and blue curves. The derived NDVI shows excellent discrimination between plant and non-plant only because I edited the applied color table to highlight that threshold. There is little variation in NDVI value for plant surfaces.
Lower: Infrablue photo following white balance on blue paper. The histogram of a leaf surface in that photo is at left. Note the good separation of the red and blue curves. The derived NDVI has a great range of values for both plant and non-plant surfaces. Color table is NDVIBlu2RedBW.lut.</em>

The most lively infrablue photos I made today followed white balancing on deep blue origami paper. Purple, red, yellow, and gray surfaces produced dull infrablue photos. Grass is not a good choice. The blue origami paper is the one I used to white balance the Canon A810 with a Rosco #2007 filter. That produces even more colorful infrablue photos than the Canon SX120 with #2008 filter. I will have to switch filters to learn whether the camera or the filter is responsible. Any wagers? I had high hopes for the 2008 filter because its published spectral response indicates that less red and very little green light is transmitted. So the red channel should be purer infrared. The red channel with a 2007 filter will be contaminated with more visible red and green wavelengths.

![3Paneltestsx120-201338706.jpg](https://i.publiclab.org/system/images/photos/000/000/521/large/3Paneltestsx120-201338706.jpg)<p></p>
![SX120BlueBalyard.jpg](https://i.publiclab.org/system/images/photos/000/000/522/large/SX120BlueBalyard.jpg)
<p></p><em>Top: Infrablue photo following white balance on grass.  The histogram of the non-sky portion of that photo is at left. Note the minimal separation of the red and blue curves.  The isolated red channel, which should be mostly NIR, shows typical characteristics of NIR photos. The derived NDVI shows acceptable discrimination between plant and non-plant after I edited the applied color table to highlight that threshold. There is little variation in NDVI value for plant surfaces.
Lower: Infrablue photo following white balance on blue paper with the histogram of the foreground lawn in that photo. Note the good separation of the red and blue curves. The derived NDVI has a much greater range of values for both plant and non-plant surfaces. Color table is NDVIBlu2RedBW.lut.</em>

![_2008.jpg](https://i.publiclab.org/system/images/photos/000/000/523/medium/_2008.jpg)
<p></p><em>Spectral response of the Rosco #2008 filter. Some red light between 700 and 740 nm is transmitted.</em>

