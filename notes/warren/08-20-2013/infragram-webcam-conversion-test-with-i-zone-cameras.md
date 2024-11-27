---
nid: 9040
title: Infragram webcam conversion test with I Zone cameras
path: public/static/notes/warren/08-20-2013/infragram-webcam-conversion-test-with-i-zone-cameras.md
uid: 1
tagnames: near-infrared-camera,kickstarter,webcam,infragram,infragram-conversion
---

# Infragram webcam conversion test with I Zone cameras

[Ongoing tests of candidates](/tag/infragram-conversion) for the [Infragram Webcam](http://kickstarter.com/projects/publiclab/infragram-the-infrared-photography-project) have gone relatively poorly to date, but over the weekend I received a number of samples from [I Zone Technologies](http://www.cgtzone.com/) and while I was initially a bit intimidated at the prospect of converting them, I Zone staff helpfully recommended that the best way to remove the filters was to unscrew the lenses, even though they were inside auto-focus mechanisms (see above). The models I dealt with were the UMBMU and the UM2CU, 5 and 2 megapixels, respectively. They are TINY.

I used a VERY fine pair of tweezers with an angle, held the indentations in the plastic surrounding the lens, and rotated the circuit board around it, holding the lens still.

![IMG_0219.JPG](/system/images/photos/000/001/241/medium/IMG_0219.JPG)

Amazinglly this worked for both cameras, and I didn't have to resort to [melting the glue and removing the whole autofocus assembly](http://www.eigenimaging.com/diy). Instead the lenses came out without too much trouble, although I occasionally squeezed the tweezers too much and sent it flying across the desk. 

![IMG_0224.JPG](/system/images/photos/000/001/242/medium/IMG_0224.JPG)

The harder part was removing the filter, which was recessed on both models. I ended up cracking it carefully with a knife and picking out the parts, blowing it clean. They won't have to do this at the factory :-)

![IMG_0226.JPG](/system/images/photos/000/001/243/medium/IMG_0226.JPG)

The converted camera with an external infrablue (Rosco #2007) filter:

![IMG_0228.JPG](/system/images/photos/000/001/244/medium/IMG_0228.JPG)

Here's the higher-resolution UMBMU: 

![IMG_0229.JPG](/system/images/photos/000/001/245/medium/IMG_0229.JPG)

###Imaging test results

Whoops! I almost forgot to post the results of the images. I really need a better test setup but the UMBMU seemed to do quite well (click to see full results): 

[![Screen_Shot_2013-08-20_at_2.08.19_PM.png](/system/images/photos/000/001/246/original/Screen_Shot_2013-08-20_at_2.08.19_PM.png)](http://infragram.org/show/umbmu-lo.jpg)

[![Screen_Shot_2013-08-20_at_2.08.33_PM.png](/system/images/photos/000/001/247/original/Screen_Shot_2013-08-20_at_2.08.33_PM.png)](http://infragram.org/show/umbmu-hi.jpg)

[![Screen_Shot_2013-08-20_at_2.10.01_PM.png](/system/images/photos/000/001/248/original/Screen_Shot_2013-08-20_at_2.10.01_PM.png)](http://infragram.org/show/Photo_on_8-20-13_at_1.18_PM_2.jpg)

And I think we can improve these, but here are the UM2CU 2 megapixel results: 

[![Screen_Shot_2013-08-20_at_2.11.21_PM.png](/system/images/photos/000/001/249/original/Screen_Shot_2013-08-20_at_2.11.21_PM.png)](http://infragram.org/show/um2cu-filter.jpg)

That last one clearly has poor white balance, and is detecting a *lot* of blue light. I'm going to try messing with it in [Infragram Sandbox](http://infragram.org/static/sandbox/) to see if I can draw out some better results. 

Long story short, not 100% but MUCH better than any of the previous cameras I'd tested. I now feel much more confident about the webcam edition!

###Update: Infragram Sandbox results

Actually this worked pretty well; I used the [Infragrammar equation](/wiki/infragram-sandbox#Infragrammar) `(R-B/2)/(R+B/2)*3` which just halved the blue channel and generated NDVI, then tripled the results. It's a bit garbled but does seem to clearly differentiate vegetation from the background. This may necessitate more testing but seems promising.

![Screen_Shot_2013-08-20_at_2.17.16_PM.png](/system/images/photos/000/001/250/original/Screen_Shot_2013-08-20_at_2.17.16_PM.png)
