---
nid: 8261
title: Continuing difficulties with infrablue in cheaper CMOS cameras
path: public/static/notes/warren/06-18-2013/continuing-difficulties-with-infrablue-in-cheaper-cmos-cameras.md
uid: 1
tagnames: near-infrared-camera,ndvi,infrared,infragram,infrablue,tests,infragram-conversion
---

# Continuing difficulties with infrablue in cheaper CMOS cameras

I'm in charge of sourcing more compact and cheaper cameras for the Infragram Point & Shoot, and have been experiencing trouble with the images I'm able to take with modified cheaper cameras. It seems like the blue channel is leaking infrared -- something we haven't seen in the Canon cameras we've been converting. I think we'll figure out a way around this but wanted to share my results so far.

##My attempt and results

Here is an image taken with the most recent (otherwise very promising!) sample camera:

![9077620142_60d6ecd2ec_o.jpg](https://i.publiclab.org/system/images/photos/000/000/528/medium/9077620142_60d6ecd2ec_o.jpg)

It looks OK, but when you look at each color channel (see lead image, at top), you notice that vegetation shows up white in the blue channel, where it's supposed to be absorbing (dark). 

Also see that when you upload it to http://infrapix.pvos.org (the current Infragram software prototype) you get not very good differentiation in the generated NDVI, which makes sense if the blue channel is leaking ([see actual images here](http://infrapix.pvos.org/show/9077620142_2af6aa6002_b.jpg)): 

![Screen_Shot_2013-06-18_at_11.18.19_AM.png](https://i.publiclab.org/system/images/photos/000/000/532/large/Screen_Shot_2013-06-18_at_11.18.19_AM.png)

I tried using the Curves function in Photoshop to identify a neutral grey, essentially post-white-balancing. That resulted in this more familiar looking image (better yellows):

![post-color-balanced.jpg](https://i.publiclab.org/system/images/photos/000/000/533/medium/post-color-balanced.jpg)

Which, [run through the Infragram software](http://infrapix.pvos.org/show/Screen_Shot_2013-06-18_at_11.29.28_AM.png), wasn't much better:

![Screen_Shot_2013-06-18_at_11.32.52_AM.png](https://i.publiclab.org/system/images/photos/000/000/534/large/Screen_Shot_2013-06-18_at_11.32.52_AM.png)

##Questions and next steps

Just to look at the differences, I ran up a couple "diff" images between channels. If there's enough differentiation, we can still do this with a modified Infrablue algorithm, because even with channel mixing, you can probably pick out the differences quantitatively (i.e. Blue+IR will still be different than Red+IR). 

Here is (contrast stretched so you can see details, which is why it looks fuzzy) the Red channel minus the Blue channel:

![Screen_Shot_2013-06-18_at_11.16.09_AM.png](https://i.publiclab.org/system/images/photos/000/000/529/medium/Screen_Shot_2013-06-18_at_11.16.09_AM.png)

And here is Red minus Green: 

![Screen_Shot_2013-06-18_at_11.24.21_AM.png](https://i.publiclab.org/system/images/photos/000/000/531/medium/Screen_Shot_2013-06-18_at_11.24.21_AM.png)

There are differences, but perhaps some more advanced subtraction/addition would be needed to pull out useful data, and that means the dynamic range of our resulting infrablue NDVI images will be much lower. I'm hoping we can figure out another solution. The issue seems to be mainly that the blue channel of the Bayer filter passes infrared, where in our Canons that is not true.

The options seem to be:

* select a camera with a different Bayer filter which doesn't pass infrared
* do some channel math to extract meaning from these images anyways
* try to invent some sort of additional filter to get a clean blue channel...?