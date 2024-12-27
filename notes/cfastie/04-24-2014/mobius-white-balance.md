---
title: "Mobius white balance"

tagnames: 'near-infrared-camera, ndvi, infrared, white-balance, infragram, histogram, led, mobius-actioncam, frosted-globe, response:10345, great-photos, mobius'
author: cfastie
path: /notes/cfastie/04-24-2014/mobius-white-balance.md
nid: 10353
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/003/842/original/MobTest-408-24CU.jpg)

# Mobius white balance

by [cfastie](../../../profile/cfastie) | April 24, 2014 04:47

April 24, 2014 04:47 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [histogram](../tag/histogram), [led](../tag/led), [mobius-actioncam](../tag/mobius-actioncam), [frosted-globe](../tag/frosted-globe), [response:10345](../tag/response:10345), [great-photos](../tag/great-photos), [mobius](../tag/mobius)

----

*Above: Wratten 25A Infragram of *Hedwigia ciliata* taken with a [modified Mobius ActionCam](http://publiclab.org/notes/cfastie/04-22-2014/mobius-ir-conversion) and [Filter-O-Matic](http://publiclab.org/notes/cfastie/04-18-2014/mobius-filter-o-matic).*  

**Previously on *Mobius NIR*:**

This [research note from several days ago](http://publiclab.org/notes/cfastie/04-17-2014/mobius-and-nir) demonstrated that a Canon PowerShot and the Mobius ActionCam made different assignments of near infrared light to the three color channels.

This [research note from yesterday](http://publiclab.org/notes/cfastie/04-23-2014/nir-and-white-balance) demonstrated that the assignment of NIR light to the R, G, and B, color channels by a PowerShot could be dramatically altered by custom white balance settings. 

[Earlier research notes](http://publiclab.org/tag/white-balance) have demonstrated that CCD PowerShots converted to Infragram cameras can be fooled into producing photos that make meaningful NDVI images if wildly artificial custom white-balance procedures are performed on them first. Much less work has been done with CMOS-based cameras except for webcams and other similar cameras which generally do not allow custom white balance.

A new player on the CMOS scene, the Mobius ActionCam may shake things up because it allows custom white balance settings. Unlike PowerShots which allow you to point the camera at any surface and push a button to create a white balance setting, the Mobius allows you to enter any value (100-999) for each of the three color channels (R,G,B). 


[![FS-A810-Mob-850nmHist.jpg](https://i.publiclab.org/system/images/photos/000/003/845/medium/FS-A810-Mob-850nmHist.jpg)](https://i.publiclab.org/system/images/photos/000/003/845/original/FS-A810-Mob-850nmHist.jpg)  
*Canon PowerShots (e.g., the A810, upper) and the Mobius ActionCam (bottom) have built-in white balance presets. The "Sunny" presets in these cameras produce different results, and none of the built-in presets allows Infragram modified versions of either camera to produce photos which make meaningful NDVI images. The photos above are full spectrum (the IR block filter is removed and no filter replaced it), and the only illumination is from a single 850 nm LED.  Producing NDVI from a photo with a histogram like the Mobius one (bottom) with the visible light channel (blue) brighter than the NIR channel (red) yields all negative NDVI values, so fail.*

The earlier work referred to above identified particular white balance settings that resulted in meaningful NDVI images. For example, in infrablue Infragrams (e.g., with a Rosco 2007 filter) these settings rearranged the color histogram so that much more light was assigned to the red channel, which was then used as a source of information about infrared light. Much less light was assigned to the blue channel, which was used to represent visible light. It is very difficult to produce meaningful NDVI images without altering the histogram in this way.  It appears that the custom white balance capability of the Mobius ActionCam will allow modified cameras to capture photos with histograms suitable for making meaningful NDVI images.  
.

[![A810-Mob-850nm-FullSpect-2007WB.jpg](https://i.publiclab.org/system/images/photos/000/003/844/medium/A810-Mob-850nm-FullSpect-2007WB.jpg)](https://i.publiclab.org/system/images/photos/000/003/844/original/A810-Mob-850nm-FullSpect-2007WB.jpg)  
*Photos of an infrared field taken with full spectrum cameras (no IR filters). Top: Histogram of a photo from a modified Canon A810 with the standard infrablue (Rosco 2007) custom white balance setting. The golden color and the pattern of the histogram are typical of photos that produce meaningful NDVI images. Bottom: Histogram of a photo from a modified Mobius ActionCam with carefully selected values for R, G, and B entered in the custom white balance interface. These values were selected in order to reproduce the histogram of the Canon A810 photo.*
.  

[![A810-MobWr25FS850nm.jpg](https://i.publiclab.org/system/images/photos/000/003/843/medium/A810-MobWr25FS850nm.jpg)](https://i.publiclab.org/system/images/photos/000/003/843/original/A810-MobWr25FS850nm.jpg)  
*Photos of an infrared field taken with full spectrum cameras (no IR filters). Top: Histogram of a photo from a modified Canon A810 with the standard super-red (Wratten 25A) custom white balance setting. The blue color and the pattern of the histogram are typical of photos that produce meaningful NDVI images. Bottom: Histogram of a photo from a modified Mobius ActionCam with carefully selected values for R, G, and B entered in the custom white balance interface. These values were selected in order to reproduce the histogram of the Canon A810 photo.*  
  

The white balance settings for the Mobius camera must be entered using a computer or Android device connected via USB. You can [find the appropriate software here](http://www.mytempfiles.info/mobius/index.html). The values for R, G, and B used for the photos above were determined by trial and error to demonstrate that a particular histogram can be reproduced. The photos above involve only a narrow band of NIR light, and are not taken with infragram filters in place. I have not yet used these particular white balance settings to take Infragram photos of plants, but I took a few photos with similar settings and the results were promising (see top image). 

I had [concluded earlier that the Mobius ActionCam could not produce good NDVI images](http://publiclab.org/notes/cfastie/09-06-2013/mobius-stripped) because too much infrared light was being captured in all the color channels. It is possible that the auto white balance algorithm was just assigning lots of light to the blue channel, and that the suspected contamination with infrared light was not such  a big issue. I'm not really sure what the issue was, but I now have some confidence that with an appropriate filter and white balance values these cameras can make photos that produce meaningful NDVI images. We will presently learn just how meaningful.