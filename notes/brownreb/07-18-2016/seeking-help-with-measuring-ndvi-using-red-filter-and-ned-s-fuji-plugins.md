---
nid: 13297
title: Seeking help with measuring NDVI using red filter and Ned's Fuji plugins
path: public/static/notes/brownreb/07-18-2016/seeking-help-with-measuring-ndvi-using-red-filter-and-ned-s-fuji-plugins.md
uid: 484208
tagnames: 
---

# Seeking help with measuring NDVI using red filter and Ned's Fuji plugins

Hi Folks,
I modified a Canon Powershot SD850IS using the red filter from the Public Lab kit. I am using the camera to take pictures of melon plants, with the goal of measuring relative NDVI between plants. All images are taken at essentially the same time (within a 1-hour timespan) and all plants are in the same field.

I am analyzing the images in Fuji using Ned's plugins. However, I am not getting the results I expected. Specifically, much of the plant foliage is showing up as gray, even though it is visually green and healthy. This is worse when I use a grey card to set the white balance on the camera. Here are some pictures so you can see what I am getting.
[![IMG_0001.JPG](//i.publiclab.org/system/images/photos/000/017/117/large/IMG_0001.JPG)](//i.publiclab.org/system/images/photos/000/017/117/original/IMG_0001.JPG)
This is an original image, taken without setting the white balance.

<a href="//i.publiclab.org/system/images/photos/000/017/118/original/Color_Index.tif"><i class="fa fa-file"></i> Color_Index.tif</a>
This is the same image after processing. I used the default settings except for setting the red channel to red, and the IR channel to blue because I have a red filter. As you can see, the foliage in full sun is registering as not photosynthetically active.

<a href="//i.publiclab.org/system/images/photos/000/017/119/original/ndviImage.tif"><i class="fa fa-file"></i> ndviImage.tif</a>

Here's the NDVI image for the same photo.


<a href="//i.publiclab.org/system/images/photos/000/017/120/original/DVI_color_index.tif"><i class="fa fa-file"></i> DVI_color_index.tif</a>

THis is the same image, analyzed with the plug-in in DVI mode, rather than NDVI mode.

<a href="//i.publiclab.org/system/images/photos/000/017/121/original/Color_Index_bands_reversed.tif"><i class="fa fa-file"></i> Color_Index_bands_reversed.tif</a>
Here is the same image, processed using NDVI with the IR in the red, and the red in the blue (still with the red filter)

Based on these results, I am thinking that the problem is either that the NIR levels are so high in full sun that the camera sensors are over-saturating, or that I am getting a lot of NIR in the visual channel. However, I am wondering what those of you with more experience think. Also, what should I do about it?

Other questions:
My plastic photo grey card shows up yellow in the NDVI images, suggesting that it is reflecting quite a bit of NIR. Suggestions for a better way to control the white balance on my modded camera?

Ultimately, my goal is to generate a single value for each image that summarizes the plant health, so I can run statistics to compare between treatments. Anyone have suggestions for the best way to do this in Fuji? I have used SigmaScan for similar analyses in the past, where I selected pixels based on color, and then counted them. Is it possible to select by color in Fuji? Even more important, can this process be scripted?

THanks in advance for your help.
Rebecca

