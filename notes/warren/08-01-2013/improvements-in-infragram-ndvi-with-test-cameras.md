---
nid: 8950
title: Improvements in Infragram NDVI with test cameras
path: public/static/notes/warren/08-01-2013/improvements-in-infragram-ndvi-with-test-cameras.md
uid: 1
tagnames: near-infrared-camera,ndvi,infrared,infragram,infrablue,tests,response:8261,infragram-conversion,annazubkova2009jem
---

# Improvements in Infragram NDVI with test cameras

I'd had [a lot of trouble](/notes/warren/06-18-2013/continuing-difficulties-with-infrablue-in-cheaper-cmos-cameras) getting good [infragram](/wiki/infragram) photos due to the blue channels leaking a lot of infrared light, meaning that the red and blue channels we compare to measure chlorophyll were not well differentiated. [Chris Fastie](/profile/cfastie) posted some great notes about how histograms can be used to assess how differentiated channels are, on a whole-image basis, which is not the same as per-pixel, but is a good rough gauge. (i.e. red and blue could have similar histograms but not share any pixels, and it'd still be well differentiated, but this is not super likely)

![normal.png](/system/images/photos/000/000/991/medium/normal.png)

Anyhow... I noticed that even with the blue-light-leaking infragram photos I was taking with a more affordable point & shoot (same as in the post above, about trouble with infragram photography), there was a different amount of red and blue (see the histogram in the main image -- the red peak is a bit more intense). This was already a different result than before, and I think it may be due to the very diffuse light I was taking photos in. So perhaps these more affordable cameras can work in some circumstances... the [infrapix](http://infrapix.pvos.org) web app output what seems to be a reasonable separation of foliage from non-veg:

[![normal-output.png](/system/images/photos/000/000/987/medium/normal-output.png)](http://infrapix.pvos.org/show/normal-1.png)

However, I also noticed that when I increased the saturation of the original image (in a basic image editing program), the histogram showed markedly clearer separation of red and blue. Of course, it's not creating new information, but it's just exaggerating the small difference I'd seen earlier. 

![saturated-2.png](/system/images/photos/000/000/986/medium/saturated-2.png)

Just to try it out, I ran that through Infrapix as well:

[![infrapix-saturated.png](/system/images/photos/000/000/988/medium/infrapix-saturated.png)](http://infrapix.pvos.org/show/saturated-1.png)

While it doesn't seem clearly **better**, it was an interesting result, but it highlighted one more thing -- the Infrapix app seems to have a sliding scale as to what is represented as an NDVI value of 0... whoops! Well, I'm sure that'll be resolved soon. 

There's a lot here. For one, it seems the white balance and/or exposure is quite variable on these affordable point & shoots, dramatically affecting whether you can see useful results. Second, 'increasing saturation' may help to amplify tough-to-distinguish differentiation. Third, we need to standardize how we generate color maps. But take a look at the lead image, generated with a $29 camera! Promising.