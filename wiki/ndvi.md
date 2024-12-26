---
title: "NDVI and NRG"\ntagnames: 'near-infrared-camera, ndvi, agriculture'
author: warren
path: /wiki/ndvi.md
nid: 66
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/021/769/original/5415783801_3c5e6bde95_o.png)

# NDVI and NRG

by [warren](../profile/warren), [bhamster](../profile/bhamster), [stevie](../profile/stevie), [cfastie](../profile/cfastie), [mariakatosvich](../profile/mariakatosvich), [liz](../profile/liz), [gonzoearth](../profile/gonzoearth)

January 28, 2011 17:06 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [agriculture](../tag/agriculture)

----

NDVI stands for "Normalized Difference Vegetation Index". NRG stands for "Near-infrared / Red / Green". NDVI and NRG are both ways to visualize the amounts of infrared and other wavelengths of light reflected from vegetation. Because both these methods compare ratios of blue and red light absorbed versus green and IR light reflected, they can be used to evaluate the health of vegetation. It's a snapshot of how much photosynthesis is happening. This is helpful in assessing vegetative health or stress. (Read more here: https://www.agronomy.org/publications/jeq/articles/36/3/832) 

## Do-It-Yourself

These techniques for vegetation analysis were developed for satellite imagery, but at Public Lab, we've been working a lot on capturing infrared imagery using our DIY [near-infrared camera](/wiki/near-infrared-camera) setup, and combining it with visible bands to produce NDVI images such as the one above.

## What these images mean

What exactly are these images we're trying to make? What do they tell us about vegetation, and why? These diagrams should help to understand what it is we're doing and why these are good ways to analyze plant life.

## The NDVI equation


[![NDVI_is_eq.jpg](/i/44723)](/i/44723)

**NDVI = (Near Infrared - Red)/(Near Infrared + Red)**

<br>

NDVI is a ratio which tries to emphasize photosynthesis while filtering out sun glare. The above equation is run for every pixel, using source data from an infrared photo and a visible light photo, like this pair:

[![5390895115_c9d4d38fec_o.jpg](https://publiclab.org/system/images/photos/000/021/771/large/5390895115_c9d4d38fec_o.jpg)](https://publiclab.org/system/images/photos/000/021/771/original/5390895115_c9d4d38fec_o.jpg)

The result can be false-colored to make the high-photosynthesis areas more clear, and used to examine where plants are and how healthy they are.

[![PetVISNDVIcomp.png](https://publiclab.org/system/images/photos/000/021/770/large/PetVISNDVIcomp.png)](https://publiclab.org/system/images/photos/000/021/770/original/PetVISNDVIcomp.png)

_Figure above: Normal color photo (right) and normalized difference vegetation index (NDVI) image (left). NDVI image was derived from two color channels in a single photo taken with a camera modified with a special infrared filter. Note that tree trunks, brown grass, and rocks have very low NDVI values because they are not photosynthetic. Healthy plants typically have NDVI values between 0.1 and 0.9. --
 @cfastie_

### Activities

Here are a range of activities you can do to produce and interpret your own NDVI imagery, whether downloaded from a satellite imagery provider or [collected yourself using a DIY technique](/wiki/multispectral-imaging)

[ndvi](../../tag/activity:ndvi)

****

![IMG_0511-split.png](https://i.publiclab.org/system/images/photos/000/000/279/medium/IMG_0511-split.png)

![infrared-combination.png](https://i.publiclab.org/system/images/photos/000/000/278/medium/infrared-combination.png)

Most DIY converted cameras today (those from Public Lab) use RGN instead of NRG, so the blue channel represents infrared instead of the red channel. That looks like this:


[![rgn-split.png](/i/45468)](/i/45468?s=o)



****

## NRG imagery

Some people are also interested in producing NRG imagery (like the below image), where `Near-Infrared, Red, and Green` are used to compose a picture instead of the usual `Red, Green, and Blue`. 


[![5415783775_502f79ac8c_o.png](/i/25064)](/i/25064)



This diagram explains the swapping, which allows us to 'see' infrared as if it were a normal color:

[![5396083368_40528d3da2_o.png](/i/25063)](/i/25063)

**In NRG images, the deeper and clearer the red color, the denser and healthier the vegetation (more or less).**

### Questions

[ndvi](../../tag/question:ndvi)

### Other examples of DIY NDVI imaging

From around the internet:

Begin watching at 2 minutes to see the resulting imagery: 
<iframe width="560" height="315" src="https://www.youtube.com/embed/Lkn8CbNDPN0?t=2m" frameborder="0" allowfullscreen></iframe>

*This topic is part of the [Grassroots Mapping Curriculum](/wiki/mapping-curriculum) series.*

****

[![5416397210_5e3be40cf5_o.png](/i/25066)](/i/25066)

[![5412520298_93873f36d0_o.png](/i/25065)](/i/25065)

