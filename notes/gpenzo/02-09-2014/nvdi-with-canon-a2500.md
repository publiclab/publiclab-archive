---
nid: 10024
title: NVDI with canon a2500
path: public/static/notes/gpenzo/02-09-2014/nvdi-with-canon-a2500.md
uid: 420719
tagnames: balloon-mapping,near-infrared-camera,kite-mapping,nrg,ndvi,infrared,infragram,infrablue,first-time-poster
---

# NVDI with canon a2500

###What I want to do
My goal is to make nvdi images of farmland. Hopefully the quality will be good enough to help farmers locate plant stress in the field. I think the best quality NDVI images will be made with two cameras.
I'm using two canon a2500 cameras. The reason for a2500: the cheapiest canon camera i could buy.

###My attempt and results
Usual steps for the camera remove: IR filter.
It is difficult to get a watter 85A filter arround here. So I use a massa 850 nm IR filter.

Original Visible picture:

[![CRW_0042_VIS.jpg](https://i.publiclab.org/system/images/photos/000/002/854/medium/CRW_0042_VIS.jpg)](https://i.publiclab.org/system/images/photos/000/002/854/original/CRW_0042_VIS.jpg)

850nm filtered image:

[![CRW_0042_IR.jpg](https://i.publiclab.org/system/images/photos/000/002/859/medium/CRW_0042_IR.jpg)](https://i.publiclab.org/system/images/photos/000/002/859/original/CRW_0042_IR.jpg)

processed with Ned Horning Fiji tool, float:

[![CRW_0042_NDVI_Float.jpg](https://i.publiclab.org/system/images/photos/000/002/857/medium/CRW_0042_NDVI_Float.jpg)](https://i.publiclab.org/system/images/photos/000/002/857/original/CRW_0042_NDVI_Float.jpg)

color float:

[![CRW_0042_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/002/858/medium/CRW_0042_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/002/858/original/CRW_0042_NDVI_Color.jpg)

suggested  cfastie lut:

[![NDVIBlu2Redt.jpg](https://i.publiclab.org/system/images/photos/000/002/860/medium/NDVIBlu2Redt.jpg)](https://i.publiclab.org/system/images/photos/000/002/860/original/NDVIBlu2Redt.jpg)

[![CRW_0042_NDVI_float_B2R.jpg](https://i.publiclab.org/system/images/photos/000/002/861/medium/CRW_0042_NDVI_float_B2R.jpg)](https://i.publiclab.org/system/images/photos/000/002/861/original/CRW_0042_NDVI_float_B2R.jpg)




The result looks good even I had to hold the two cameras in my hand,
these pictures are not with the rig below.

Setup of two cameras.

[![P1000399.JPG](https://i.publiclab.org/system/images/photos/000/003/058/medium/P1000399.JPG)](https://i.publiclab.org/system/images/photos/000/003/058/original/P1000399.JPG)


[![P1000400.JPG](https://i.publiclab.org/system/images/photos/000/003/059/medium/P1000400.JPG)](https://i.publiclab.org/system/images/photos/000/003/059/original/P1000400.JPG)

###Questions and next steps
These pictures where taken without changing any exposure setting ofthe camera. For now chdk was only installed for the raw camera capability.
I'm wondering if I should take pictured with shutter speed and focal lenght locked for both camera. 
Or should I leave the cameras to decide what to do by them self.







Next steps:
+ test with 750 nm IR filter
+ test with locked shutter speed and focallenght for both camera using chdk
+ Modify my bixler2 drone to support both cameras with battery.

###Why I'm interested
Our most important daily life thing is food and water. I think we need to find ways to help farmers get the best yeild they can while using resources where they are needed, water , firtilizer, pesticide.
If you look how much area a farmer needs to cover,  a bit of help is needed.

