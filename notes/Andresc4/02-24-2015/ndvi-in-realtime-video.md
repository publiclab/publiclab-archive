---
title: "NDVI in realtime video"\ntagnames: 'ndvi, infrared, question:ndvi, ndvi-arg, argiculture'
author: andresc4
path: /notes/Andresc4/02-24-2015/ndvi-in-realtime-video.md
nid: 11633
uid: 328260

---

![](https://publiclab.org/public/system/images/photos/000/009/073/original/uploaddd.jpg)

# NDVI in realtime video

by [andresc4](../profile/andresc4) | February 24, 2015 16:37

February 24, 2015 16:37 | Tags: [ndvi](../tag/ndvi), [infrared](../tag/infrared), [question:ndvi](../tag/question:ndvi), [ndvi-arg](../tag/ndvi-arg), [argiculture](../tag/argiculture)

----

### What I want to Do: 
Hi, I want to get a NDVI video in realtime from a UAV, either by using a small Pcduino+linux software + and 2 webcams + composite video out + vtx  
or by using 2 cameras and 2 vtx , 2 rx and 2 capure cards on the ground.


### What I did already:
At the moment what I did is the software ( shader ) that does the math computing on the GPU using VVVV.... I did it with help of a friend caller "colorsound" on the vvvv forums, he is a real genius :).  We were able to do it realtime with pictures (jpeg files ) and we were able to change values in realtime and it worked just fine, at this point it was the same as doing it with photoshop, We need to manualy align the pictures,,, that something that we miss from Fiji.

I realised that using 2 cameras will be too much for a small hexacopter, so we want to move to the 1 camera option, and here is my problem... I cant get it to work with 1 camera. At the momento we have 2 canon a2300 , one with Ir filter another one without Ir filter

We have a Wratten 25A Red filter, a Rosco 2007 Blue Filter, and a KenkoS054.2 58Ya2 Yellow Filter... with 2 cameras we were using the Rosco2007 and the RGB camera + Fiji.

We also have some pictures from a Runco x100 that is carring with Ricoh modiffied camera without IR filter + Yellow filter ( thats a 25.000USS uav ). I want to get the same result on my canon camera without ir + yellow filter.
With that picture from that camera, my new code is working. The shader looks like this


float4 PS1(vs2ps In): COLOR
{
    float4 ndiv = tex2D(Samp, In.TexCd);
	ndiv=( (ndiv.b-ndiv.r)/(ndiv.b+ndiv.r) * contraste) + brillo  ;
    return ndiv;
}

Where ndvi.b is the blue chanel, ndvi.r is the red chanel , and "contraste" and "brillo" are 2 external values that I can change at any point, basicaly is contrast and brigthnes... at any given picture, I can change those values to get the best (grayscale) output,,, and once i have that output i run nother shader that multiply each pixel value to a color, so i can get any lua table that we are used to.

This is working just fine with that picture, and If i do the same with a webcam it will work also

### Examples and files:
Here I leave an example of the proceses

https://www.dropbox.com/s/h3oc99jxww10ztx/uploaddd.jpg?dl=0

And here there is a folder with 4 pictures taken with each of the 3 filters that I have, and each of them in the 4 white balance modes of my camera, total 12 pictures,  https://www.dropbox.com/sh/2w1z0t76utipyo4/AABMn6iJoNMCTsw8LXTaNw9oa?dl=0

### What I need to continue:
What I need is to know with aproach is the best for 1 camera only,,, and what is the formula for the NDVI with one camera. At this point I'm verry confused and any help will be wellcome

