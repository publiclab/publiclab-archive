---
nid: 10291
title: Mobius Action Cam Infragram tests
path: public/static/notes/warren/04-10-2014/mobius-action-cam-infragram-tests.md
uid: 1
tagnames: near-infrared-camera,ndvi,infragram,infragram-sandbox,mobius-actioncam,response:9293,response:9302,response:9325,response:9296
---

# Mobius Action Cam Infragram tests

###What I want to do

Based on [an ongoing discussion](/notes/cfastie/09-06-2013/mobius-stripped#c8621) about whether the Mobius Action Cam (a ~70 gram 5-megapixel camera) can be used to take [Infragram photos](/wiki/infragram), [Mathew Lippincott](/profile/mathew) modified one and took some test photos, comparing each to a photo from the well-documented [Infragram Webcam](http://store.publiclab.org/products/infragram-webcam). 

###Early failure

The earlier discussion seemed to suggest that typical NDVI processing does not work, in part because the Mobius test image was **brighter** in the visible channel than the supposed infrared channel, due to infrared leakage in all three color bands. 

###An alternative approach

However, further investigation with the [Infragram Sandbox tool](http://infragram.org) seemed to show that although there was leakage, a custom index **could** be used to identify differentiation between the channels which, similarly to NDVI, correlates with the presence of plants. 

###My attempt and results

Mathew sent me his test photos, chosen for different conditions as well as examples of "non-vegetation on a background of vegetation" and "vegetation on a background of non-vegetation", similar to the [comprehensive tests](/notes/warren/09-13-2013/leaffest-infragram-camboard-batch-tests) done [at LEAFFEST last fall](/notes/warren/09-08-2013/infragram-webcam-test-raw-images).

Here are the raw images, for three different scenes. I've chosen to use the Rosco 2007 filter, as it seemed to return better results. The order is webcam, then Mobius:

[![webcam_moss.png](https://i.publiclab.org/system/images/photos/000/003/590/medium/webcam_moss.png)](https://i.publiclab.org/system/images/photos/000/003/590/original/webcam_moss.png) [![mobius_moss2007.png](https://i.publiclab.org/system/images/photos/000/003/588/medium/mobius_moss2007.png)](https://i.publiclab.org/system/images/photos/000/003/588/original/mobius_moss2007.png)

[![webcam_table.png](https://i.publiclab.org/system/images/photos/000/003/591/medium/webcam_table.png)](https://i.publiclab.org/system/images/photos/000/003/591/original/webcam_table.png) [![mobius2007_table.png](https://i.publiclab.org/system/images/photos/000/003/587/medium/mobius2007_table.png)](https://i.publiclab.org/system/images/photos/000/003/587/original/mobius2007_table.png)

[![webcam_play.png](https://i.publiclab.org/system/images/photos/000/003/592/medium/webcam_play.png)](https://i.publiclab.org/system/images/photos/000/003/592/original/webcam_play.png) [![mobius_play2007.png](https://i.publiclab.org/system/images/photos/000/003/589/medium/mobius_play2007.png)](https://i.publiclab.org/system/images/photos/000/003/589/original/mobius_play2007.png)

I fiddled around with the indices for a while before I found something that seemed consistent and clear between the two cameras. It's very close to NDVI, but has an additive and a multiplicative term which set where it begins and ends on the HSV color wheel. I'd like to standardize it, but the only one I really varied was the additive one, which should set the plant/nonplant "threshold". 

<p class="alert">A basic math error had caused trouble with this section! But with some modifications, the technique seems to still be valid. You can see the original <a href="/wiki/mobius-infragram-erroneous">erroneous images and equations here</a>.</p>

HSV example: H: `(R-B)/(R+B)*-4`, S: 1, V: 1

In the above example, there is no additive value, and the multiplicative is the "/-4". The additive value shifts the scale around the color wheel, while the multiplicative boosts the amount of the color wheel used to represent the data. Once we improve color mapping, this will be a lot simpler... anyways:

Here are the processed images, again with webcam first, Mobius second:

`H:0.3-(R-B)/(R+B)*3` for webcam, `-(R-B)/(R+B)*4` for Mobius:

[![2014-04-10T21_02_07.892Z.jpg](https://i.publiclab.org/system/images/photos/000/003/607/medium/2014-04-10T21_02_07.892Z.jpg)](https://i.publiclab.org/system/images/photos/000/003/607/original/2014-04-10T21_02_07.892Z.jpg) 
[![2014-04-10T21_04_14.282Z.jpg](https://i.publiclab.org/system/images/photos/000/003/608/medium/2014-04-10T21_04_14.282Z.jpg)](https://i.publiclab.org/system/images/photos/000/003/608/original/2014-04-10T21_04_14.282Z.jpg)

`H:0.35-((R-B)/(R+B)*3)` for webcam, `-(R-B)/(R+B)*4` for Mobius:

[![2014-04-10T21_08_02.010Z.jpg](https://i.publiclab.org/system/images/photos/000/003/609/medium/2014-04-10T21_08_02.010Z.jpg)](https://i.publiclab.org/system/images/photos/000/003/609/original/2014-04-10T21_08_02.010Z.jpg) 
[![2014-04-10T21_09_43.822Z.jpg](https://i.publiclab.org/system/images/photos/000/003/610/medium/2014-04-10T21_09_43.822Z.jpg)](https://i.publiclab.org/system/images/photos/000/003/610/original/2014-04-10T21_09_43.822Z.jpg)

`H:0.3-((R-B)/(R+B)*2)` for webcam, `-((R-B)/(R+B)*3)` for Mobius: 

[![2014-04-10T21_14_15.360Z.jpg](https://i.publiclab.org/system/images/photos/000/003/612/medium/2014-04-10T21_14_15.360Z.jpg)](https://i.publiclab.org/system/images/photos/000/003/612/original/2014-04-10T21_14_15.360Z.jpg) 
[![2014-04-10T21_18_33.110Z.jpg](https://i.publiclab.org/system/images/photos/000/003/613/medium/2014-04-10T21_18_33.110Z.jpg)](https://i.publiclab.org/system/images/photos/000/003/613/original/2014-04-10T21_18_33.110Z.jpg)

**Note:** After the corrections from Chris, the images aren't AS alike as before. Discuss. 

Finally, here are all three Infragram Webcam images in "conventional" NDVI, unscaled: 

[![2014-04-10T15_39_03.413Z.png](https://i.publiclab.org/system/images/photos/000/003/599/medium/2014-04-10T15_39_03.413Z.png)](https://i.publiclab.org/system/images/photos/000/003/599/original/2014-04-10T15_39_03.413Z.png) [![2014-04-10T15_39_21.324Z.png](https://i.publiclab.org/system/images/photos/000/003/600/medium/2014-04-10T15_39_21.324Z.png)](https://i.publiclab.org/system/images/photos/000/003/600/original/2014-04-10T15_39_21.324Z.png) [![2014-04-10T15_39_46.563Z.png](https://i.publiclab.org/system/images/photos/000/003/601/medium/2014-04-10T15_39_46.563Z.png)](https://i.publiclab.org/system/images/photos/000/003/601/original/2014-04-10T15_39_46.563Z.png)

###Questions and next steps

The differentiation I see here looks good to me, in that the things I see that "should" be alive and productive are read that way with relatively few false positives (sky, book). I'm happy that we're back to using something very close to NDVI again; I wonder why that didn't work on earlier examples, and perhaps it's related to very bright sunlight causing overexposure or clipping? 

To me, the biggest question remaining is how much we "give up" by allowing the NDVI to be brightness-corrected, which is essentially what I'm doing with these images. They still display useful information if they are not stretched, but you really see more detail if they are. The zero threshold which is supposed to distinguish living from non-living is kind of thrown out here, but is that simply a reflection of how we aren't able to control relative exposure between color channels anyways? Is this really much different from choosing a more "aggressive" and customized color lookup table (LUT)?

Please pick all my assumptions apart and tell me what you think!

**Update:** here are all the links to the Infragram.org images:

http://infragram.org/i/5346bf2efc2b47243300126b?src=1397139537416_webcam_moss.png&mode=infragrammar_hsv&h=.5-(R-B/B+R)/2&s=1&v=1

http://infragram.org/i/5346bf2efc2b47243300126c?src=1397139570918_mobius_moss2007.png&mode=infragrammar_hsv&h=.5-(R-B/B+R)/2&s=1&v=1

http://infragram.org/i/5346bf44fc2b47243300126d?src=1397138774505_webcam_table.png&mode=infragrammar_hsv&h=.4-(R-B/R+B)/2&s=1&v=1

http://infragram.org/i/5346bf44fc2b47243300126e?src=1397139236894_mobius2007_table.png&mode=infragrammar_hsv&h=.4-(R-B/B+R)/2&s=1&v=1

http://infragram.org/i/5346bf5cfc2b472433001270?src=1397139293931_webcam_play.png&mode=infragrammar_hsv&h=.5-(R-B/B+R)/2&s=1&v=1

http://infragram.org/i/5346bf55fc2b47243300126f?src=1397139256469_mobius_play2007.png&mode=infragrammar_hsv&h=.4-(R-B/B+R)/2&s=1&v=1