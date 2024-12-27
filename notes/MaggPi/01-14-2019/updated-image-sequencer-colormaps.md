---
title: " Updated Image Sequencer Colormaps!"

tagnames: 'ndvi, colormap, code, barnstar:basic, fastie, fastiecolormap, soc, aren, gsoc-2018, soc-2018, image-sequencer'
author: MaggPi
path: /notes/MaggPi/01-14-2019/updated-image-sequencer-colormaps.md
nid: 18117
uid: 501996
cids: 21729,21730,22082,22083,22085,22086,22087,22181,23809
---

![](https://publiclab.org/public/system/images/photos/000/028/815/original/Slide1.JPG)

#  Updated Image Sequencer Colormaps!

by [MaggPi](/profile/MaggPi) | January 14, 2019 22:23

January 14, 2019 22:23 | Tags: [ndvi](/tag/ndvi), [colormap](/tag/colormap), [code](/tag/code), [barnstar:basic](/tag/barnstar:basic), [fastie](/tag/fastie), [fastiecolormap](/tag/fastiecolormap), [soc](/tag/soc), [aren](/tag/aren), [gsoc-2018](/tag/gsoc-2018), [soc-2018](/tag/soc-2018), [image-sequencer](/tag/image-sequencer)

----

**Abstract:** The note describes eight colormaps available in Public Lab’s Image Sequencer online analysis tool.  Colormap applications, Image Sequencer processing steps and a NDVI colormap comparison are discussed and demonstrated.     

**Introduction:** 

- Image sequencer is an online tool for image processing and is available at http://sequencer.publiclab.org/examples/#steps=
- Colormaps (re)color or transform an image to help visualize different aspects of the scene.  The colormaps discussed in this note are designed primarily to assist in analyzing Normalized Difference Vegetation Index (NDVI) images but they can also be used for other types of applications.
- This note concentrates on Image Sequencer colormaps but there have also been many other updates since the tool was introduced in 2017.  More information on Image sequencer is available at: https://github.com/publiclab/image-sequencer
- NDVI colormaps can be used to calibrate NDVI scenes or help separate one crop from another.  All of the Image Sequencer NDVI colormaps scale reflective light from the plant from a -1 (left) to +1 (right) value.  Information on how to apply NDVI and colormaps is available at: https://publiclab.org/wiki/ndvi and 
https://publiclab.org/notes/cfastie/08-26-2014/new-ndvi-colormap. 


 - Note that http://infragram.org/sandbox/ also provides colormaps but does not contain many of the advanced features available with Image Sequencer.    
 

**Image Sequencer Colormaps**

The picture below depicts the Image Sequencer colormaps. The names associated with the colormaps describe the major color pattern or origin.   


![image description][1]    



**NDVI Colormap applications**

Selecting a NDVI colormap for a given application depends on the situation.   The default (blutotred) setting is often used since it permits comparison with NDVI images available on Public Lab.   Other colormaps may be useful for calibration, monitoring plant health or distinguishing different crops.  The chart below lists colormaps with their typical application.   


![image description][2]


**Image Sequencer Colormap Example**


The rest of this note describes how colormaps can be used with Image Sequencer to process NDVI measurments.  The picture below shows how Image Sequencer commands can be used to display colormaps.  (This is a brief introduction to Image Sequencer if  you’re not familiar with how to input sequence commands.)        

 1. Load image sequencer at:
    http://sequencer.publiclab.org/examples/#steps=
 2. Find ‘Select a new module to add to your sequence’ and click on the ‘more modules’. Select ‘Gradient’ from the drop down menu.   This will create a gradient image that is black on the left side and transitions to white on the right side.    Select ‘Add step’ to enter the sequence step. 
 3.   Select the next step by selecting ‘colormap’ form the drop down menu.  Select ‘Add step’ to enter the sequence step. 
 4.  The ‘default’ colormap should now be visible. Select other colormaps by ‘Name of the Colormap’ menu and pressing the ‘Apply’ box. 

   



![image description][3]





**NDVI Reference Data**

Now that we know how to enter processing steps into Image Sequencer, the next thing we need is some NDVI data to analyze.   This note uses imagery observations from the Ikonos satellite over Idaho as a NDVI reference image:  https://wiki.landscapetoolbox.org/doku.php/remote_sensing_methods:normalized_difference_vegetation_index     The Ikonos Idaho image was selected because the reference provides true color, near infrared (NIR),  ‘red’ band and NDVI processed imagery.  




![image description][4]

**Image Sequencer NDVI** 

The Image Sequence processing steps used to process NDVI images are shown below.   Steps include: 1) Choose file  #1 (NIR image), 2)Choose file #2 (Red band image), 3)blend, 4) NDVI (red), 5) Colormap (greyscale).  Comparing the Image Sequencer NDVI image against the published Ikonos Idaho NDVI  image shows that the images do not have the same level of detail.   Since the Ikonos Idaho NDVI images are scaled for 0 to 1 and the Image Sequencer image from -1 to 1, additional processing is needed to compare the images.  An additional step (contrast enhancement) was added to the Image Sequencer NDVI images to show that both NDVI processing methods provide similar results.





![image description][5]

**Adding Colorbars to Colormaps**

Before we show examples of different ‘colomaps’ it is necessary to add ‘colorbars’ to the images. Colorbars provide a reference display or key that describe how the reflection values change across the colormap.  It’s good practice to always include a colorbar in every NDVI picture so others can interpret the NDVI color scale.  Fortunately, Image Sequencer provides an easy way to add colorbars via the ‘colorbar’ command (see picture below).  Colorbar is composed of 4 separate steps  (gradient,colormap, crop, overlay) but is a single entry from the Image Sequencer drop down menu.   For this research note, all colorbars have a range from -1 to 1 and are positioned on top of the NDVI image.  




![image description][6]     

**NDVI Colormap Comparison**


In order to show how different colormaps visualize a NDVI image, Image Sequencer was used to display all eight colormaps/colorbars using the same Ikonos Idaho satellite dataset.
The images (see below) were created by changing the colormap/colorbar selection while keeping the other parts of the image processing sequence the same.   This ‘back and forth’ method of swapping parameters demonstrates Image Sequencer processing versatility as an image optimization tool.    Factors that influence colormap selection include:

- calibration - matching known reference measurements 
- subjective image appearance -  making certain details ’pop’ for emphasis     
- consistency -  permit comparison with prior measurements or other  sensor data 
- display limitations – black/white display, colorblind,   etc 
- additional processing –   measure color features by computer vision techniques





![image description][7]

In conclusion, this research note demonstrates eight colormaps for use with the Image Sequencer online processing tool.  Satellite data was used to compare how the different colormaps picture the same NDVI data collection.   As discussed above, colormap choice is application dependent.  Image Sequencer provides a way to quickly display and analyze the different color settings.   Have fun with it!

**Working notes:** 

Different programs were used to generate and display colorbars.   Code examples are at:  https://publiclab.org/notes/tech4gt/08-09-2018/gsoc-2018-work-on-image-sequencer.   Image Sequencer colormap feature is at: image-sequencer/src/modules/Colormap/Colormap.js


 

  [1]: /i/28816.jpg "Slide1.JPG"
  [2]: /i/28817.jpg "Slide2.JPG"
  [3]: /i/28818.jpg "Slide3.JPG"
  [4]: /i/28819.jpg "Slide4.JPG"
  [5]: /i/28820.jpg "Slide5.JPG"
  [6]: /i/28821.jpg "Slide6.JPG"
  [7]: /i/28822.jpg "Slide7.JPG"