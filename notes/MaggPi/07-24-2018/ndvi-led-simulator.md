---
title: "NDVI LED Simulator"

tagnames: 'raspberry-pi, colormap, ndvi-calibrate, raspberry-pi-cameras, question:image-sequencer, noir'
author: MaggPi
path: /notes/MaggPi/07-24-2018/ndvi-led-simulator.md
nid: 16777
uid: 501996
cids: 20214,20234,20898
---

![](https://publiclab.org/public/system/images/photos/000/025/859/original/ndvi2.png)

# NDVI LED Simulator

by [MaggPi](/profile/MaggPi) | July 24, 2018 05:58

July 24, 2018 05:58 | Tags: [raspberry-pi](/tag/raspberry-pi), [colormap](/tag/colormap), [ndvi-calibrate](/tag/ndvi-calibrate), [raspberry-pi-cameras](/tag/raspberry-pi-cameras), [question:image-sequencer](/tag/question:image-sequencer), [noir](/tag/noir)

----

This note proposes a Light Emitting Diode (LED) simulator that would assist in the collection and analysis
of normalized difference vegetation index (NDVI) images. A prototype simulator  and a NIR/red vs NIR/white light NDVI comparison example is described.

**Introduction**

The [packaging of color filters in Raspberry Pi NoIR cameras](https://www.raspberrypi.org/blog/whats-that-blue-thing-doing-here/), [Infragram
starter kits ](https://publiclab.myshopify.com/collections/diy-infrared-photography) and the development of open
source image [processing software](https://publiclab.github.io/image-sequencer/examples/#steps=.) has provided increase access to DIY NDVI
remote sensing technology. While these
tools are easy to use, NDVI applications are often faced with challenges that
frustrate successful NDVI data analysis. These challenges include correct selection of multiple
camera and processing settings, variable lighting/atmospheric conditions,
changes in vegetation over time, inexperienced users, and  images limited by optical distortions. The note proposes a general purpose NDVI light
simulator that can be used to test different techniques/camera designs and help
reduce the challenges associated with multispectral DIY remote sensing. 

**Potential NDVI LED simulator applications:** 

--Demonstration of image collection/processing
pipeline before field trials

--Permit real time NDVI measurements for
classroom demonstrations

--Provide feedback for optimization of camera
or processing features. 

--Identify impact of lighting dynamic range on
NDVI images. 

--Ability to demonstrate NDVI indoors, at night
and independent of season 

--Consistent color reference with [LANDSAT 8](https://landsat.usgs.gov/landsat-8) data

--Practice calibration techniques required for
NDVI analysis

--Create high resolution NDVI images

**NDVI LED simulator design concept:**

--Lighting:
The lighting approach consists of LED strip lights that mimic LANDSAT 8 spectral
properties (see picture below). In
particular, LEDs that produce light in band 4 (640-670nm) and band 5
(850-880nm) [https://landsat.usgs.gov/spectral-characteristics-viewer](https://landsat.usgs.gov/spectral-characteristics-viewer). LEDs are also considered safer (cool to the
touch) than other infrared light sources.




![image description][1]

--Test Materials: A mixture of photographic reference objects
mixed with green vegetation samples. The
concept is to use well known color
reference targets for immediate visible light analysis and conduct
additional measurements which would update their NIR (near infrared) spectral characteristics. The goal is to extend the range of
commercial products to enable NDVI analysis.
In addition, other calibration options could also be included: [https://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration](https://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration) 

--Software Processing: Processing via Spectral
Workbench. [https://publiclab.org/wiki/image-sequencer](https://publiclab.org/wiki/image-sequencer). 

**Prototype NDVI simulator:**

The design consists of a horizontal wooden board that is laced with different wavelength LED strips. The LED strips were selected to match Red/
NIR Landsat spectral bands as well as to permit evaluation of different NDVI camera designs (NRG/NRB). Picture below describes the wooden board mounted over imaging objects (left) and a close up of the LED
strips (right). Holes in the center of the board permit a camera to view objects directly below. 




![image description][2]


Imaging objects (pictured below) were selected to illustrate a wide range of spatial and spectral properties:

-5 dollar US bill -- NIR counterfeit markings provide example of high NIR reflectivity

-Roscolux color filters - Red (19), Orange (21), Yellow (10), Green (89), Blue (83), Indigo(59), Violet
  (54).    Spectral transmission graphs at [http://us.rosco.com/en/mycolor](http://us.rosco.com/en/mycolor)

-Resolution test target 

-[CameraTrax
24 color card](https://www.cameratrax.com/index1.php)

-Vivitar 2,4,8
Neutral Density (ND) filters over green and blue filters -- use to study impact
of different light levels on NDVI ratio. 

-Green leaf samples






![image description][3]


**NDVI LED simulator demonstration** 

Combined with the
Public Lab's image-sequencer, the NDVI LED simulator permits rapid evaluation
of different NDVI imaging scenarios.
Example below is a comparison study of NIR/wht vs NIR/red NDVI images
taken with a Raspberry Pi NoIR camera (AUTO settings). The comparison begins by taking a NIR, red
and wht picture of the same objects.
The picture below shows the NIR/wht light processing steps with
different colormaps. 









![image description][4]


NIR/red NDVI
processing is shown below. Two
noticeable differences can be observed.
The first is that the Raspberry Pi camera lens shading correction is not
adjusted for red only lighting, The
second is that the colormaps display bright red (purple for fastie) indicating NDVI
ratios near 1\. My interpretation is
that the red scene (and auto camera settings) provides higher red signal levels
(creating higher NDVI ratios) that are near the red peak in colormap
displays. Future tests should consider
reducing the red gain which might also help correct the lens shading
problem. 







![image description][5]


**Final thoughts**: 

The prototype NDVI
LED simulator can be adapted for different imaging systems as needed. For example, other Landsat 8 bands could be
matched or UV LEDS could be added. 

A major limitation is
the lack of (low cost) calibrated NIR objects.
It would be great if we could pick a few targets and crowd source
measurements.

Please provide any
comments on how to improve the prototype or make recommendations on alternative
designs. 

Simulators are like
training wheels and should not be considered
a replacement for NDVI outdoor collection (ideally with calibrated
reference targets). 

**Related Posts/Info:**

Calibration discussion:
https://publiclab.org/notes/nedhorning/06-30-2015/automating-ndvi-calibration

Colormap discussion
https://publiclab.org/notes/cfastie/08-26-2014/new-ndvi-colormap

Red/blue filter discussion

[https://publiclab.org/wiki/infragram-filters](https://publiclab.org/wiki/infragram-filters)

Color balance
discussion

[https://publiclab.org/wiki/infrablue-white-balance](https://publiclab.org/wiki/infrablue-white-balance)

Raspberry Pi
NoIR imaging 

https://publiclab.org/notes/MaggPi/06-02-2018/raspberry-pi-camera-visible-and-noir-v2-picamera-effects-demos

CameraTrax spectrum
card (similar to [Macbeth Chart](https://en.wikipedia.org/wiki/ColorChecker))
(paper below provides some reflectance
data)

[https://www.researchgate.net/publication/260153816\_A\_hyperspectral\_imager\_based\_on\_a\_Fabry-Perot\_interferometer\_with\_dielectric\_mirrors?\_sg=7pNzyrQrlvqsgecI3CyY2j29Y1OR9Gr\_rY\_ZReJxbftNw6aR5oPdGqJQcTJTwD5XqeLfXnmJmQ](https://www.researchgate.net/publication/260153816_A_hyperspectral_imager_based_on_a_Fabry-Perot_interferometer_with_dielectric_mirrors?_sg=7pNzyrQrlvqsgecI3CyY2j29Y1OR9Gr_rY_ZReJxbftNw6aR5oPdGqJQcTJTwD5XqeLfXnmJmQ)

[@warren](https://publiclab.org/profile/warren), [@icarito](https://publiclab.org/profile/icarito), [@amirberAgain](https://publiclab.org/profile/amirberAgain), [@tech4gt](https://publiclab.org/profile/tech4gt)

  [1]: /i/25860.jpg "Slide1.JPG"
  [2]: /i/25861.jpg "Slide2.JPG"
  [3]: /i/25862.jpg "Slide3.JPG"
  [4]: /i/25863.jpg "Slide4.JPG"
  [5]: /i/25864.jpg "Slide5.JPG"