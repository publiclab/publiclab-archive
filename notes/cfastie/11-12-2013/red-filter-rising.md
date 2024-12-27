---
title: "Red Filter Rising"

tagnames: 'near-infrared-camera, nrg, vermont, infrared, conversion, filter, infragram, list:plots-infrared, infrablue, bg3, wratten25a, response:9744, scattering, nbn, nnr, super-red'
author: cfastie
path: /notes/cfastie/11-12-2013/red-filter-rising.md
nid: 9769
uid: 554
cids: 7528,7531,7554,7556,7581,7584,7983,7989,8150,8152,8153,11611,11612,11626,12071
---

![](https://publiclab.org/public/system/images/photos/000/002/194/original/2200W25A-272-25NNR.jpg)

# Red Filter Rising

by [cfastie](/profile/cfastie) | November 12, 2013 02:00

November 12, 2013 02:00 | Tags: [near-infrared-camera](/tag/near-infrared-camera), [nrg](/tag/nrg), [vermont](/tag/vermont), [infrared](/tag/infrared), [conversion](/tag/conversion), [filter](/tag/filter), [infragram](/tag/infragram), [list:plots-infrared](/tag/list:plots-infrared), [infrablue](/tag/infrablue), [bg3](/tag/bg3), [wratten25a](/tag/wratten25a), [response:9744](/tag/response:9744), [scattering](/tag/scattering), [nbn](/tag/nbn), [nnr](/tag/nnr), [super-red](/tag/super-red)

----

*Image above: False color infrared version of a landscape scene taken with a modified Canon A2200 with a Wratten 25A filter. The red and blue channels have been swapped, so instead of displaying RGB in the R, G, and B channels, this image displays NNR in the R, G, and B channels.*  
.

It looks like Ned is really on to something with the [switch to a red filter instead of the infrablue filter](http://publiclab.org/notes/nedhorning/11-01-2013/why-a-red-filter-should-work-well-for-ndvi). I now have two Canon A2200 cameras, one with an internally installed glass BG3 infrablue filter and the other with an internal Wratten 25A gel filter instead of the original IR block filters. The results from the two cameras are quite distinct and seem promising for the red Wratten 25A. This has prompted me to try to figure out how these two filters affect the wavelengths being recorded by the cameras, and how false color infrared images can be made from the recorded data.  
.

[![BG3_W25A_curve2k.jpg](https://i.publiclab.org/system/images/photos/000/002/196/large/BG3_W25A_curve2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/196/original/BG3_W25A_curve2k.jpg)  
*Transmission curves for the Schott BG3 (infrablue) filter and the Wratten 25A (red) filter. The BG3 filter blocks most red and green light, allowing near infrared (NIR) to be captured in the camera's red and green channels. The Wratten 25A filter blocks almost all green and blue light allowing NIR to be captured in the green and blue channels.*  
.  
In addition to the transmission graphs in the figure above, the sensitivity of the three color channels to different wavelengths determines what these cameras record.  The spectral sensitivity depicted in the graph below is determined by the red, green, or blue Bayer filters over each pixel on the sensor.  
.  

[![NikonD200_SpectralResponseCCD.jpg](https://i.publiclab.org/system/images/photos/000/002/202/medium/NikonD200_SpectralResponseCCD.jpg)](https://i.publiclab.org/system/images/photos/000/002/202/original/NikonD200_SpectralResponseCCD.jpg)  
*Spectral sensitivities of a digital camera with the IR block filter removed. Each of the three color channels (colored curves) captures some NIR light and also some visible light from outside the standard range of its color. For example, the red channel captures some blue, green, and NIR light in addition to red. Each camera model or family will have different response curves, but this example might be generally representative.*  
.  

The filters I installed allow only one of the camera's three color channels to capture visible light more or less normally. With the BG3 filter, the blue channel captures visible blue light, although it also captures a considerable amount of NIR, and the green and red channels capture mostly NIR.  With the Wratten 25A, the red channel captures visible red light and some NIR, the green channel capture mostly NIR, and the blue channel captures almost pure NIR, the only case where this is true.  
.  

*Table below: Colors of light captured in the red, green, and blue channels of digital cameras when unmodified or when modified with a BG3 or Wratten 25A filter. Each channel captures one predominant color and also varying amounts of other colors. The blue channel in the camera with the Wratten 25A filter may capture the purest band, with mostly NIR light.*
[![ChannelCaptureTable.JPG](https://i.publiclab.org/system/images/photos/000/002/198/large/ChannelCaptureTable.JPG)](https://i.publiclab.org/system/images/photos/000/002/198/original/ChannelCaptureTable.JPG)  
.  

A standard way to highlight plants with near infrared information is to make a false color infrared image. Only three color bands can be displayed in a color image (e.g., jpeg), so NIR, red, and green are used and blue is left out. The NIR data is displayed as red, the red data is displayed as green, and the green data is displayed as blue. Living plants stand out as red in these unrealistic images because foliage reflects almost all NIR light and few other natural surfaces do.  
.  

*Table below: The colors displayed in each color channel in false color infrared images. The traditional method for satellite images (NRG) uses NIR, red, and green data. Only one visible light channel is captured by either of my modified infrared cameras, so a different combination of channels is required to simulate a false color infrared image. Both of these combinations include two channels that contain mostly NIR light. The pluses indicate that additional wavelengths are displayed in that channel.*  
[![NNNtable.JPG](https://i.publiclab.org/system/images/photos/000/002/200/large/NNNtable.JPG)](https://i.publiclab.org/system/images/photos/000/002/200/original/NNNtable.JPG)  
.  

After swapping the channels so the bands listed above are displayed in those channels, the color balance can be adjusted so the result resembles traditional false color infrared images (NRG). I have been doing this with infrablue photos made with Rosco filters and with a BG3 filter and calling them NBG. I think they should be called NBN, and the related versions from Wratten 25A cameras should be called NNR. The first attempts with photos from a Wratten 25A camera are below. These appear to be much better simulations of traditional NRG images. These images are also superior because there is more detail in the distance due to reduced atmospheric scattering of red light compared to blue.  
.  

[![BigVal2panR_B.jpg](https://i.publiclab.org/system/images/photos/000/002/203/large/BigVal2panR_B.jpg)](https://i.publiclab.org/system/images/photos/000/002/203/original/BigVal2panR_B.jpg)  
*Photos from the two modified A2200 cameras. The camera with a Wratten 25A filter was custom white balanced on a piece of red origami paper under a partly cloudy sky. The camera with the BG3 filter was white balanced on a piece of blue origami paper under blue sky. Shutter speed was slow for these shots (1/20 or 1/25 second), so comparing focus or foreground crispness is not meaningful, but less distant haze in the upper photo results from using red light instead of blue.*  
.  


[![BigVal2panNNN.jpg](https://i.publiclab.org/system/images/photos/000/002/204/large/BigVal2panNNN.jpg)](https://i.publiclab.org/system/images/photos/000/002/204/original/BigVal2panNNN.jpg)  
*False color infrared images from the photos above.  These were made following the channel swapping protocol in the table above. Although motion blur could differ between the images due to slow shutter speed, the better color and contrast in the upper image is due to reduced atmospheric scattering and maybe also to a more pure NIR channel.*  
.  
When a Wratten 25A filter or other red filter is used, the camera or photo or process should not be called infrablue.  How about super-red?





