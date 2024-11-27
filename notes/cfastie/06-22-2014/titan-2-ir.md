---
nid: 10602
title: Titan 2 IR
path: public/static/notes/cfastie/06-22-2014/titan-2-ir.md
uid: 554
tagnames: balloon-mapping,near-infrared-camera,kite-mapping,ndvi,vermont,infrared,kap,infragram,3d-printing,gigapan,makerbot,northeast,response:10523,titan,ndvi-ag,category:field-test
---

# Titan 2 IR

Once again I have been remiss in field testing the aerial camera rigs that I have been designing and building. The [Titan 2 Rig](http://www.kaptery.com/products/?f=product&id=28&name=Titan-2-Rig-Kit) has been available at the KAPtery for five months, but I flew it for the first time last week. Everything performed as expected, and the custom rig I flew is now for sale at the [KAPtery](http://kaptery.com). This package includes the Titan 2 dual camera rig, a Picavet suspension, two cameras (normal and IR), and electronics to trigger the cameras in synchrony.  
.  
[![MCOFTitan-477-40.jpg](https://i.publiclab.org/system/images/photos/000/004/922/medium/MCOFTitan-477-40.jpg)](https://i.publiclab.org/system/images/photos/000/004/922/original/MCOFTitan-477-40.jpg)[![MCOFTitan-477-120.jpg](https://i.publiclab.org/system/images/photos/000/004/923/medium/MCOFTitan-477-120.jpg)](https://i.publiclab.org/system/images/photos/000/004/923/original/MCOFTitan-477-120.jpg)  
*The Titan 2 Rig with two PowerShot A590s and timer under a Picavet suspension.*  
.  
The flight was over the Middlebury College Organic Farm in Vermont on a windy afternoon. A Sutton Flowform 16 kite easily lofted the rig for a one hour flight while more than 500 pairs of RGB and infrared photos were captured. It was very sunny, so on both cameras I set the ISO at its slowest speed (80) and the locked the shutter speed at 1/800 second. The Canon A590 has a built-in shutter priority mode, so the exposure of each shot was set automatically by adjusting the aperture.  The A590 also has real manual focus, so I locked focus on infinity.  
.   
[![MOG-474-132_4pan2k.jpg](https://i.publiclab.org/system/images/photos/000/004/924/medium/MOG-474-132_4pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/004/924/original/MOG-474-132_4pan2k.jpg)  
*One of the many visible/infrared photo pairs from the flight (top, from normal RGB and NIR converted cameras), and a false color IR image (NRG) and normalized difference vegetation index (NDVI) image made from the photo pair.*  
.  
The IR modified A590 is a full spectrum camera because I removed the internal IR block filter without replacing it with anything. The A590 has a removable ring which reveals a bayonet mount for a filter tube. I attached a filter tube to each camera, and threaded a 720 nm optical glass infrared filter onto the tube of the full spectrum camera. This filter blocks most visible light so all three channels in photos from this camera are NIR images. The filter passes some visible light which allowed the exposure settings to be the same as for the unmodified camera. I could have used a more pure NIR filter, but then a slower shutter speed or higher ISO would have been required.  
.  
The MK111 timer was set to trigger both cameras every six seconds. The MK111 allows both the interval between 5 volt pulses and the length of the pulse to be set. This is good because while the old version of CHDK responded just to the pulse interval, shooting on alternate pulses, the newest version gets ready to shoot when the pulse starts and shoots when the pulse ends (this is the trick that allows precise synchrony). The MK111 can work with either version of CHDK. I installed the new version of CHDK on the SD cards in both cameras.  
.  
<iframe src="https://www.gigapan.com/gigapans/157312/snapshots/399760,399762,399763/options/fullscreen,showcaptions/iframe/flash.html?height=400" frameborder="0" height="560" scrolling="no" width="100%"></iframe>   
*Above: Full resolution map of the organic farm embedded from gigapan.com. If this does not display, you can see it here: https://www.gigapan.com/gigapans/157312.*
 
I used Ned Horning's Fiji plugin to match the pairs of visible and NIR photos and make false color IR and NDVI images from each pair. Then I used Microsoft ICE to stitch together about 30 or 40 of the lower altitude images into mosaics. This was done three times: for RGB, NRG, and NDVI. ICE was able to stitch the RGB and NRG images easily, but I had to do the NDVI images in two steps and then patch the two parts together in Photoshop. There was no ground control applied to the stitching process, so these "maps" are somewhat distorted representations of geography.  
.  
All the camera and camera rig gear used on this flight is part of the Titan 2 IR Rig package ([like these](http://www.kaptery.com/products/?f=category&id=23)) for sale at the KAPtery for $279. It includes the Titan 2 Rig, Picavet, cameras, SD cards, filter tubes, filter, and shutter trigger electronics. The gear for sale is exactly what we flew at the organic farm and what appears in these photos, so everything is assembled and tested. Batteries not included.  
.  
[![MCOFTitan-477.jpg](https://i.publiclab.org/system/images/photos/000/004/926/medium/MCOFTitan-477.jpg)](https://i.publiclab.org/system/images/photos/000/004/926/original/MCOFTitan-477.jpg)  




