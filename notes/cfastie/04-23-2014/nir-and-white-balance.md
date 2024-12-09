---
title: NIR and white balance
tagnames: near-infrared-camera, ndvi, infrared, white-balance, infragram, histogram, led, mobius-actioncam, frosted-globe, response:10324, mobius
author: cfastie
path: /notes/cfastie/04-23-2014/nir-and-white-balance.md
nid: 10345
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/003/799/original/MobTest-387-2.jpg)

# NIR and white balance

by [cfastie](../profile/cfastie) April 23, 2014 02:59

April 23, 2014 02:59 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [histogram](../tag/histogram), [led](../tag/led), [mobius-actioncam](../tag/mobius-actioncam), [frosted-globe](../tag/frosted-globe), [response:10324](../tag/response:10324), [mobius](../tag/mobius)

----

*Above: An LED which emits only near infrared light around 850 nm photographed under normal room lighting with a camera with no IR block filter. The purplish color is how the camera records the NIR light.*  

I have been taking lots of photos of infrared LEDs with different cameras modified in various ways in order to figure out the best way to use the Mobius ActionCam to make plant health images. The photos here are taken with a Canon PowerShot A810, not the Mobius. This A810 had its IR block filter removed and nothing installed in its place, so it is a "full spectrum" camera -- it records all visible and NIR wavelengths (about 400 to 1000 nm). I modified the Mobius in the same way, and I'm trying to understand how these photos help me interpret the Mobius photos, and I think the following interpretations have helped, but I need to organize these thoughts before I make sense of the Mobius results. 

All the photos below (with histograms) are:

- Taken with a Canon A810
- Taken in a dark room with a single 850 nm (near IR) LED as the only illumination
- Taken from the outside of a white frosted glass globe with the LED on the inside

Two things differ among these photos:

- The white balance setting of the A810
- The filter through which the photo was taken

[![BG3_W25A_W87curve.jpg](https://i.publiclab.org/system/images/photos/000/003/814/medium/BG3_W25A_W87curve.jpg)](https://i.publiclab.org/system/images/photos/000/003/814/original/BG3_W25A_W87curve.jpg)  
*I photographed through three different filters which pass very different parts of the spectrum. I used a Rosco 2007 which is not included (I don't have a good curve for it) but the BG3 filter is similar.*  

So the four photos below record only ~850 nm light. The Canon A810 was set to use its standard "Sunny" white balance preset. Each photo was taken through a different filter (or no filter). Don't study the histograms too carefully, because the answer is that they are all the same.  Regardless of the filter used, the proportion of light assigned to the red, green, and blue channels is the same. Minor shifts to the right or left are due to different exposures among photos, but in each photo there is just about the same amount of light assigned to the red channel compared to the blue channel (the red histogram is very slightly to the right of the blue).  Although the three filters are distinct, the photos are similar because the filters all transmit NIR light, which is the only light involved in these photos. The hardware and software in the camera are assigning different amounts of this light to the three channels. The goal is to learn something about how the camera does that.

[![4Filter-A810-850nmHist.jpg](https://i.publiclab.org/system/images/photos/000/003/816/medium/4Filter-A810-850nmHist.jpg)](https://i.publiclab.org/system/images/photos/000/003/816/original/4Filter-A810-850nmHist.jpg)  
*Histograms of four photos of a field of ~850 nm near infrared light taken by a Canon A810 with no IR block filter, but with three different filters in front of the lens. The A810 used the standard "Sunny" white balance preset. Histograms are for the area of the photo in the marquee.*  

The two photos below are made the same way I have made hundreds of Infragram photos. With a filter in front of the lens, a custom white balance was done while filling the frame with a brightly colored piece of origami paper. White balance for the Rosco 2007 filter used blue paper under blue sky in the shade, and for the Wratten 25A a piece of red paper in sunlight was used. I then took photos of the same frosted globe illuminated only by the same 850 nm LED. So the only thing different from the equivalent photo above is the white balance setting of the camera. The photos have the characteristic golden or blue hues of infrablue or super-red Infragrams, and the histograms are dramatically different from the ones above.


[![A810-850nm-2007vsWr25.jpg](https://i.publiclab.org/system/images/photos/000/003/819/medium/A810-850nm-2007vsWr25.jpg)](https://i.publiclab.org/system/images/photos/000/003/819/original/A810-850nm-2007vsWr25.jpg)   
*Histograms of two photos taken using standard Infragram filters and custom white balance procedures. The custom white balance (WB) and the photography were done with the appropriate filter in front of the lens of the full spectrum A810. Only ~850 nm light illuminates the field.*  

In either photo, the histograms for the red and blue channels are no longer similar. The custom white balance procedure has intentionally exaggerated the amount of light assigned to the channel intended for use as an NIR channel (red for Rosco 2007 and blue for Wratten 25A). The white balance procedure has also diminished the brightness of the blue (Rosco 2007) or red (Wratten 25A) channels which are used as the source of visible light information in NDVI computations. In this test, those channels have recorded only NIR light, but not very much of it. In actual use, much visible light will also be recorded in those channels. 

[![A810-850nm-FullSpect-Wr25vs2007.jpg](https://i.publiclab.org/system/images/photos/000/003/817/medium/A810-850nm-FullSpect-Wr25vs2007.jpg)](https://i.publiclab.org/system/images/photos/000/003/817/original/A810-850nm-FullSpect-Wr25vs2007.jpg)  
*Histograms of photos of an NIR field taken with the Canon A810 which was custom white balanced as in the photos above, but these photos were taken without the filters in front of the lens.*  

To reinforce the importance of the white balance setting in determining the histogram, I also photographed the 850 nm NIR field without the filters in front of the lens. The histograms are indistinguishable from the ones above which used the filters. That is because both filters transmit most NIR light, so removing them does not change anything when the only light is NIR.  In both sets of histograms above, the ones with custom white balance using the Wratten 25A filter have greater separation of the red and blue channels compared to the Rosco 2007 photos. I think this is a consistent effect and may be one reason that NDVI computed from super-red Infragrams is easier to interpret than NDVI from infrablue Infragrams. 

[![RGBvs850nm.jpg](https://i.publiclab.org/system/images/photos/000/003/818/medium/RGBvs850nm.jpg)](https://i.publiclab.org/system/images/photos/000/003/818/original/RGBvs850nm.jpg)  
*The Wratten 25A filter photographed in fluorescent light with a normal camera (left) and with only ~850 nm light with the full spectrum A810 which had been white balanced using the Wratten filter (right). As with all of the filters used here, the Wratten 25A is mostly transparent to NIR light. (The arrow sticker is to assist the auto focusing.)*

So that was a good refresher about how white balance dramatically alters the proportion of NIR light recorded in the blue and red channels in CCD cameras. Now I have to apply that knowledge to similar results from the Mobius camera which has a CMOS sensor. 

