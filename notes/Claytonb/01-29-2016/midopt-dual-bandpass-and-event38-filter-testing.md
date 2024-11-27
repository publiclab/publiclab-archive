---
nid: 12636
title: MidOpt Dual Bandpass and Event38 filter testing
path: public/static/notes/Claytonb/01-29-2016/midopt-dual-bandpass-and-event38-filter-testing.md
uid: 460246
tagnames: ndvi,infrared,filter,infragram,plant-health,dualband,midopt,response:12442,first-time-poster
---

# MidOpt Dual Bandpass and Event38 filter testing

 I recently had Jason Dougherty with Midwest Optical Systems ([MidOpt](http://midopt.com/filters/dual-bandpass/)) send me some of their new Dual Bandpass filters and wanted to share some of the results and get any input. My application is in crop imaging and NDVI processing. I have been using the Event38 NGB filter ([Event38](https://event38.com/product/custom-ngb-filter-glass-for-diy-camera-conversion/)) which is a cutoff filter that filters out the red light and passes near infrared instead. The blue and green channels collect their light respectively along with NIR. It has a very wide color band. The Dual Bandpass filters have a much narrower bands and are centered at specified wavelengths with the visible channel collecting NIR as well. These are two different types of filters but I thought I would compare them with each other. The MidOpt DB 475/850 more closely matches the Event38 filter in terms of band usage.
The filters are mounted internally in Canon S100’s in place of the original IR filter. The Event38 filter size is 8.9X7.9X0.5 mm and the MidOpt filters are 8.9X7.9X1 mm. Both filters are thicker than the factory IR filter. The sensor screws are backed out approximately ¾ turn each from the factory position after replacing the factory IR filter and then fine adjusted in order to correct focus.
These are uncalibrated images all taken with f/4, Exp 1/1000, ISO 100. White balance for the Event 38 and DB 475/850 are set with the camera’s cloudy setting and the DB 660/850 white balance is set  with a piece of red construction paper in the shade.
The next step is to compare calibrated images with targets of known reflectance values using Ned Horning's calibration plugin for ImageJ/Fiji ([Neds Plugin](https://publiclab.org/notes/nedhorning/07-22-2015/introducing-the-calibration-plugin-for-imagej-fiji)) 

**MidOpt DB475/850 transmission graph,JPEG, and separate channels with NDVI channel comparison**

[![475-850_Transmission_Graph.png](//i.publiclab.org/system/images/photos/000/013/974/medium/475-850_Transmission_Graph.png)](//i.publiclab.org/system/images/photos/000/013/974/original/475-850_Transmission_Graph.png)

JPEG


[![475-850_jpeg.JPG](//i.publiclab.org/system/images/photos/000/013/977/medium/475-850_jpeg.JPG)](//i.publiclab.org/system/images/photos/000/013/977/original/475-850_jpeg.JPG)

DB475/850 Blue Channel



[![475-850_jpeg.JPG_(blue).jpg](//i.publiclab.org/system/images/photos/000/013/985/medium/475-850_jpeg.JPG_%28blue%29.jpg)](//i.publiclab.org/system/images/photos/000/013/985/original/475-850_jpeg.JPG_%28blue%29.jpg)



DB475/850 Green Channel



[![475-850_jpeg.JPG_(green).jpg](//i.publiclab.org/system/images/photos/000/013/986/medium/475-850_jpeg.JPG_%28green%29.jpg)](//i.publiclab.org/system/images/photos/000/013/986/original/475-850_jpeg.JPG_%28green%29.jpg)



DB475/850 Red Channel



[![475-850_jpeg.JPG_(red).jpg](//i.publiclab.org/system/images/photos/000/013/987/medium/475-850_jpeg.JPG_%28red%29.jpg)](//i.publiclab.org/system/images/photos/000/013/987/original/475-850_jpeg.JPG_%28red%29.jpg)


DB475/850 VIS blue NIR red


[![475-850_VIS_Red_NIR_Blue.jpg](//i.publiclab.org/system/images/photos/000/013/991/medium/475-850_VIS_Red_NIR_Blue.jpg)](//i.publiclab.org/system/images/photos/000/013/991/original/475-850_VIS_Red_NIR_Blue.jpg)


DB475/850 VIS green NIR red


[![475-850_VIS_Red_NIR_Green.jpg](//i.publiclab.org/system/images/photos/000/013/992/medium/475-850_VIS_Red_NIR_Green.jpg)](//i.publiclab.org/system/images/photos/000/013/992/original/475-850_VIS_Red_NIR_Green.jpg)






**Event38 transmission graph, JPEG, and separate channels with NDVI channel comparison**


[![Event38_Transmission_Graph.jpg](//i.publiclab.org/system/images/photos/000/013/981/medium/Event38_Transmission_Graph.jpg)](//i.publiclab.org/system/images/photos/000/013/981/original/Event38_Transmission_Graph.jpg)

JPEG


[![Event38IMG_7925.JPG](//i.publiclab.org/system/images/photos/000/013/982/medium/Event38IMG_7925.JPG)](//i.publiclab.org/system/images/photos/000/013/982/original/Event38IMG_7925.JPG)

Event38 Blue Channel



[![Event38IMG_7925.JPG_(blue).jpg](//i.publiclab.org/system/images/photos/000/013/988/medium/Event38IMG_7925.JPG_%28blue%29.jpg)](//i.publiclab.org/system/images/photos/000/013/988/original/Event38IMG_7925.JPG_%28blue%29.jpg)



Event38 Green Channel



[![Event38IMG_7925.JPG_(green).jpg](//i.publiclab.org/system/images/photos/000/013/989/medium/Event38IMG_7925.JPG_%28green%29.jpg)](//i.publiclab.org/system/images/photos/000/013/989/original/Event38IMG_7925.JPG_%28green%29.jpg)

Event38 Red Channel


[![Event38IMG_7925.JPG_(red).jpg](//i.publiclab.org/system/images/photos/000/013/990/medium/Event38IMG_7925.JPG_%28red%29.jpg)](//i.publiclab.org/system/images/photos/000/013/990/original/Event38IMG_7925.JPG_%28red%29.jpg)

Event38 VIS green NIR red


[![Event38VIS_Blue_NIR_Green.jpg](//i.publiclab.org/system/images/photos/000/013/993/medium/Event38VIS_Blue_NIR_Green.jpg)](//i.publiclab.org/system/images/photos/000/013/993/original/Event38VIS_Blue_NIR_Green.jpg)

Event38 VIS blue NIR red


[![Event38VIS_Blue_NIR_Red.jpg](//i.publiclab.org/system/images/photos/000/013/994/medium/Event38VIS_Blue_NIR_Red.jpg)](//i.publiclab.org/system/images/photos/000/013/994/original/Event38VIS_Blue_NIR_Red.jpg)


**MidOpt DB660/850 transmission graph, JPEG, and separate channels with NDVI channel comparison**


[![660-850_Transmission_Graph.png](//i.publiclab.org/system/images/photos/000/013/995/medium/660-850_Transmission_Graph.png)](//i.publiclab.org/system/images/photos/000/013/995/original/660-850_Transmission_Graph.png)


JPEG


[![660-850_jpeg.JPG](//i.publiclab.org/system/images/photos/000/013/996/medium/660-850_jpeg.JPG)](//i.publiclab.org/system/images/photos/000/013/996/original/660-850_jpeg.JPG)

DB660/850 Blue Channel


[![660-850_jpeg.JPG_(blue).jpg](//i.publiclab.org/system/images/photos/000/013/997/medium/660-850_jpeg.JPG_%28blue%29.jpg)](//i.publiclab.org/system/images/photos/000/013/997/original/660-850_jpeg.JPG_%28blue%29.jpg)

DB660/850 Green Channel


[![660-850_jpeg.JPG_(green).jpg](//i.publiclab.org/system/images/photos/000/013/998/medium/660-850_jpeg.JPG_%28green%29.jpg)](//i.publiclab.org/system/images/photos/000/013/998/original/660-850_jpeg.JPG_%28green%29.jpg)

DB660/850 Red Channel


[![660-850_jpeg.JPG_(red).jpg](//i.publiclab.org/system/images/photos/000/013/999/medium/660-850_jpeg.JPG_%28red%29.jpg)](//i.publiclab.org/system/images/photos/000/013/999/original/660-850_jpeg.JPG_%28red%29.jpg)

DB660/850 VIS red NIR blue


[![660-850_VIS_Blue_NIR_Red.jpg](//i.publiclab.org/system/images/photos/000/014/000/medium/660-850_VIS_Blue_NIR_Red.jpg)](//i.publiclab.org/system/images/photos/000/014/000/original/660-850_VIS_Blue_NIR_Red.jpg)

DB660/850 VIS red NIR green


[![660-850_VIS_Green_NIR_Red.jpg](//i.publiclab.org/system/images/photos/000/014/001/medium/660-850_VIS_Green_NIR_Red.jpg)](//i.publiclab.org/system/images/photos/000/014/001/original/660-850_VIS_Green_NIR_Red.jpg)

















































