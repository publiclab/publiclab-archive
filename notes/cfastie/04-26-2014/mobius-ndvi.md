---
title: Mobius NDVI
tagnames: near-infrared-camera, ndvi, vermont, infrared, white-balance, infragram, mobius-actioncam, wratten25a, super-red, mobius, msetup, response:10353, activity:multispectral-imaging, activity:infragram
author: cfastie
path: /notes/cfastie/04-26-2014/mobius-ndvi.md
nid: 10369
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/003/868/original/Setup-15anno.jpg)

# Mobius NDVI

by [cfastie](../profile/cfastie) April 26, 2014 14:33

April 26, 2014 14:33 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [vermont](../tag/vermont), [infrared](../tag/infrared), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [mobius-actioncam](../tag/mobius-actioncam), [wratten25a](../tag/wratten25a), [super-red](../tag/super-red), [mobius](../tag/mobius), [msetup](../tag/msetup), [response:10353](../tag/response:10353), [activity:multispectral-imaging](../tag/activity:multispectral-imaging), [activity:infragram](../tag/activity:infragram)

----

*Above: It should be pretty easy for a DIY NDVI image to differentiate between things in this scene that are green plants and things that are not.*

In my quest to get good NDVI images from an Infragram-modified Mobius ActionCam, I previously found [white balance settings that produced photos with color histograms like the ones for good Infragrams](http://publiclab.org/notes/cfastie/04-24-2014/mobius-white-balance) taken by Infragram-modified Powershots. I used the program [mSetup on Windows](http://www.mytempfiles.info/mobius/) to install the white balance settings on the Mobius via USB (Mac and Android solutions are also on that page). Yesterday I took a series of test photos to see if those white balance settings produced useful photos. 

[![5Cameras-23-2anno.jpg](https://i.publiclab.org/system/images/photos/000/003/869/medium/5Cameras-23-2anno.jpg)](https://i.publiclab.org/system/images/photos/000/003/869/original/5Cameras-23-2anno.jpg)  
*I took photos of the test scene in the topmost image with these five cameras. The four PowerShots have internal filters and the Mobius has no internal IR filter but has a holder for filters in front of the lens. All cameras have plates for easy attachment to a Manfroto tripod.*  
.  
The dual camera system with an unmodified A495 and a pure near-infrared A495 generally produce the best DIY NDVI images I have seen. So that result is presented below as the benchmark. Ned's Fiji plugin was used to align the two photos and compute NRG and NDVI values for each pixel after stretching both histograms (parameter=2). This stretch parameter, and the same color table, were used on all of the NDVI images below, and no other adjustments were made on any of the photos or NDVI images.  
.  

[![Dual4pan.jpg](https://i.publiclab.org/system/images/photos/000/003/870/medium/Dual4pan.jpg)](https://i.publiclab.org/system/images/photos/000/003/870/original/Dual4pan.jpg)  
*Photos from an unmodified A495 (top left), a pure NIR A495 with Wratten 87 filter (top right), and a false color infrared image (NRG) and Normalized Difference Vegetation Index image (NDVI) derived from those two photos. Green plants are well differentiated from non-plants in the NDVI image. This is a high resolution image, right click to enlarge in new tab.*  
.  
The Infragram-modified PowerShot A2200 with Wratten 25A filter produced an NDVI image that differentiated plant and non-plant about as well as the dual camera system. This camera was white balanced on red origami paper in full sun, and was used in the [calibration of the white balance settings](http://publiclab.org/notes/cfastie/04-24-2014/mobius-white-balance) for the Mobius.  
.  

[![Wratten25_CCD-426-2-lt2k.jpg](https://i.publiclab.org/system/images/photos/000/003/874/medium/Wratten25_CCD-426-2-lt2k.jpg)](https://i.publiclab.org/system/images/photos/000/003/874/original/Wratten25_CCD-426-2-lt2k.jpg)  
*Super-red Infragram photo from a Canon A2200 and the NDVI image derived from that single photo.*  
.  
The Infragram-modified PowerShot A2200 with glass BG3 filter also produced an NDVI image very similar to the one from the dual camera system. This camera was white balanced on blue origami paper under blue sky in the shade, and was used in the [calibration of the white balance settings](http://publiclab.org/notes/cfastie/04-24-2014/mobius-white-balance) for the Mobius.  The BG3 filter is similar to the Rosco 2007 filter.  
.  

[![BG3_CCD-2-drk2Pan2k.jpg](https://i.publiclab.org/system/images/photos/000/003/875/medium/BG3_CCD-2-drk2Pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/003/875/original/BG3_CCD-2-drk2Pan2k.jpg)  
*Infrablue Infragram photo from a Canon A2200 and the NDVI image derived from that single photo.*  
.  
The Mobius camera with Wratten 25A filter produced an NDVI image that differentiated plant and non-plant about as well as the Powershot Infragram cameras. The white balance setting for the Mobius was the one [determined empirically by comparison with histograms](http://publiclab.org/notes/cfastie/04-24-2014/mobius-white-balance) of the PowerShot Infragrams. This setting is: red 310, green 500, blue 700.  
.  

[![Mob_Wrt25A-6anno.jpg](https://i.publiclab.org/system/images/photos/000/003/876/medium/Mob_Wrt25A-6anno.jpg)](https://i.publiclab.org/system/images/photos/000/003/876/original/Mob_Wrt25A-6anno.jpg)  
*Infrablue photo from the Mobius ActionCam with Wratten 25a filter and the NDVI image derived from that single photo. The Mobius has a a much wider lens than the PowerShots, so these images are cropped for comparison.*  
.  

The Mobius camera with Rosco 2007 filter produced an NDVI image that was quite meaningless. The white balance setting for the Mobius was the one [determined empirically by comparison with histograms](http://publiclab.org/notes/cfastie/04-24-2014/mobius-white-balance) of the PowerShot Infragrams. This setting is: red 690, green 500, blue 240.  The NDVI image sort of differentiates between plant and non-plant, but NDVI values are consistently higher for non-plants than for plants, which seems to be a serious flaw. I don't yet understand what's happening here, but the process of determining white balance settings that worked for the red filter gave very different results for the blue filter.  
.  

[![Mob_2007_690500240anno.jpg](https://i.publiclab.org/system/images/photos/000/003/877/medium/Mob_2007_690500240anno.jpg)](https://i.publiclab.org/system/images/photos/000/003/877/original/Mob_2007_690500240anno.jpg)  
*Infrablue photo from the Mobius ActionCam with Rosco 2007 filter and the NDVI image derived from that single photo. The Mobius has a a much wider lens than the PowerShots, so these images are cropped for comparison.*  
.  

I tried several combinations of white balance settings and also tried a Wratten 47B filter (not shown), but did not find a combination that produced useful NDVI images. I also have not come up with a hypothesis to explain the failure of a blue filter to produce usable NDVI information when a red filter works very well.  
.  

[![Mob_2007_NDVI4pan2k.jpg](https://i.publiclab.org/system/images/photos/000/003/878/medium/Mob_2007_NDVI4pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/003/878/original/Mob_2007_NDVI4pan2k.jpg)  
*NDVI images with different white balance settings in the Rosco 2007 Mobius ActionCam. NDVI values for non-plants are generally higher than for plants. The lower right image has this pattern somewhat reversed and is the best version I have produced.*  
.  
It might be possible to find settings that produce somewhat better results with a blue filter. But a red filter seems to work well, and there are [other important reasons to use a red filter instead of blue](http://publiclab.org/tag/red-vs-blue).  So the next task is to find a red filter that is less expensive than antique Kodak Wratten 25A gelatin (Rosco Fire, please).  
.  

[![mSetupParam.JPG](https://i.publiclab.org/system/images/photos/000/003/879/medium/mSetupParam.JPG)](https://i.publiclab.org/system/images/photos/000/003/879/original/mSetupParam.JPG)  
*A screen capture from mSetup. These are the Mobius settings I used with the Wratten 25A filter.*


