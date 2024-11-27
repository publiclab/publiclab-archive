---
nid: 9828
title: Cryptogams
path: public/static/notes/cfastie/11-27-2013/cryptogams.md
uid: 554
tagnames: near-infrared-camera,nrg,vermont,infrared,a2200,filter,infragram,list:plots-infrared,infrablue,bg3,wratten25a,nbn,nnr,super-red,response:9824
---

# Cryptogams

*Image above: Wratten 25A infrared image of moss branches in front of a mat of liverwort.*  
.  
 
There are no longer many green plants around here for testing Infragram cameras, but here are some images of ferns, mosses, liverworts, and lichens. The cameras used were two Powershot A2200s with the IR block filters replaced with either a gel Wratten 25A red filter or a glass Schott BG3 blue filter. The cameras were custom white balanced on red or blue origami paper. False color IR images were made in Photoshop and adjusted to be as similar as possible. NDVI images were made in Fiji by stretching the histograms of both the IR and visible light channel (parameter = 1). The NDVI images from the BG3 camera had 20 or 25 subtracted from the DNs to bring them close to the range of the Wratten NDVI images.  
.  


[![CryptoRGB-284-4ps2k.jpg](https://i.publiclab.org/system/images/photos/000/002/337/medium/CryptoRGB-284-4ps2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/337/original/CryptoRGB-284-4ps2k.jpg)  
*Young Christmas fern (Polystichum acrostichoides, center) with moss (mostly Dicranum flagellare, right) and fruticose lichen (Stereocaulon, left).*  
.  
  
[![Fern6pan2k.jpg](https://i.publiclab.org/system/images/photos/000/002/338/large/Fern6pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/338/original/Fern6pan2k.jpg)  
*Photo from camera (left), false color IR (middle), and NDVI image (right) from a Powershot A2200 with a Wratten 25A filter (top) or Schott BG3 filter (bottom).*  
.  
The most striking thing about the multispectral images above is that the BG3 filter does a much better job than the Wratten filter at discriminating between lichen and moss, especially in the RBG image. This must be because the BG3 images use blue for the visible light channel, and there is a lot of blue being reflected from the lichen. This could be because the algal symbiont in the lichen is a blue-green alga like *Nostoc*. *Nostoc* is a common symbiont in lichens and has unusual photosynthetic pigments like phycocyanin and allophycocyanin which absorb mostly at the red end of the spectrum. This makes the lichens appear bluish to us and makes them appear bright in the BG3 images. When the reflectance of both blue light and NIR light is high, NDVI is low and contrasts with the higher NDVI of moss (which will have high NIR but lower blue reflectance).  
.  
[![CryptoRGB-284-5ps2k.jpg](https://i.publiclab.org/system/images/photos/000/002/335/medium/CryptoRGB-284-5ps2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/335/original/CryptoRGB-284-5ps2k.jpg)  
*A boulder covered with lichen and moss. The whitish area is crustose lichen covering the surface of the boulder. The dark moss is Dicranum cf. fulvum, and the lighter moss is Thuidium delicatulum*.  
.  

[![Rock6pan2k.jpg](https://i.publiclab.org/system/images/photos/000/002/336/large/Rock6pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/336/original/Rock6pan2k.jpg)  
*Photo from camera (left), false color IR (middle), and NDVI image (right) from a Powershot A2200 with a Wratten 25A filter (top) or Schott BG3 filter (bottom).*  
.  
As in the first set of images, in this set (above) the BG3 filter does a much better job differentiating lichen and moss. Typically, the false color IR images from the BG3 camera have a pinkish hue even for surfaces that are not green plants, but the lichen is distinctly not pink in this BG3 RBG image. Similarly, in the BG3 NDVI images there is better separation (on the color key) between the colors assigned to moss and lichen compared to the Wratten NDVI image. This is another example that is consistent with the idea that the common blue-green alga *Nostoc* is present in the lichen and is absorbing mostly at the red end of the spectrum. 

Note that the red handle of the pocket knife is better differentiated from moss in the Wratten images.  
.  


[![CryptoRGB-284-14ps2k.jpg](https://i.publiclab.org/system/images/photos/000/002/333/medium/CryptoRGB-284-14ps2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/333/original/CryptoRGB-284-14ps2k.jpg)  
*Fallen log with moss (mostly Thuidium delicatulum) growing over a reddish mat of foliose liverwort  (Frullania cf. eboracensis). Some snow is on top of the log.*  
.  

[![Frull6pan2k.jpg](https://i.publiclab.org/system/images/photos/000/002/334/large/Frull6pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/334/original/Frull6pan2k.jpg)  
*Photo from camera (left), false color IR (middle), and NDVI image (right) from a Powershot A2200 with a Wratten 25A filter (top) or Schott BG3 filter (bottom).*  
.  
There are no lichens in this scene (above), but the reddish *Frullania* liverwort obviously contains different photosynthetic pigments than the green moss. These pigments reflect a lot of red and must be absorbing at the blue end of the spectrum like a lot of reddish leaves do. So in the visible range, the red *Frullania* should look bright to the Wratten camera (which uses the red channel for visible light) and should look dark to the BG3 camera (which uses the blue channel for visible light). So the Wratten image should have lower NDVI for *Frullania* (little difference between reflected red and NIR) than moss (green moss reflects NIR but absorbs red). That's not what happened. In the Wratten NDVI image *Frullania* has higher NDVI than moss. 

Also according to my impeccable logic, the BG3 NDVI image, which compares reflected blue visible light (should be low for *Frullania*) with reflected NIR (should be high for *Frullania*), should have high values for *Frullania* compared to moss. That's not what happened. Moss has higher NDVI than *Frullania*. 

So I really don't have any idea why this last set of images looks the way it does.





