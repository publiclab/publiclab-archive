---
title: Comments and questions on NDVI
tagnames: near-infrared-camera, ndvi, infragram, wratten25a, first-time-poster
author: radialmind
path: /notes/radialmind/02-08-2014/comments-and-questions-on-ndvi.md
nid: 10021
uid: 170347

---

# Comments and questions on NDVI

by [radialmind](../profile/radialmind) February 08, 2014 12:54

February 08, 2014 12:54 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infragram](../tag/infragram), [wratten25a](../tag/wratten25a), [first-time-poster](../tag/first-time-poster)

###What I want to do
I have converted a Canon Powershot ELPH 300 HS to use a wratten25A filter and I'm trying out, taking some photographs from vegetation places here and there. I'm evaluating how well these results fit my expectations and I notice some interesting results.

###My attempt and results
Here's two photos of a place in Brazil. It has a pool, stone tile area, wooden crossings, vegetation, plants, flowers and some shadows. I calibrated the white balance on a red surface in 4/8 cloud cover, not in bright sunlight.

[![IMG_0117.JPG](https://i.publiclab.org/system/images/photos/000/002/836/medium/IMG_0117.JPG)](https://i.publiclab.org/system/images/photos/000/002/836/original/IMG_0117.JPG)

[![IMG_0117-ndvi.jpg](https://i.publiclab.org/system/images/photos/000/002/835/medium/IMG_0117-ndvi.jpg)](https://i.publiclab.org/system/images/photos/000/002/835/original/IMG_0117-ndvi.jpg)

###Questions and next steps
I especially notice a very high correlation of high NDVI values in shadowy areas, which could indicate that the radiation of NIR vs. VIS light is not linear. Because of the formula of (NIR-VIS)/(NIR+VIS) and assuming that NIR == 1, then it's clear that when VIS approximates 0 (towards shadowy areas), you'd expect a higher NDVI. In the results of the images above you can clearly see how strong this correlation works out in practice. 

The next question is then why this occurs.

1. Is my white balance still off?  Should I find a better surface to calibrate against which is also directly sunlit? 
2. Does NIR bounce around more than VIS light?
3. Is the sensor oversensitive to NIR?

Another interesting observation is that even at night I'm getting consistent 'blues' on the sensor, especially when I aim the camera at wooden parts like a wooden dresser over here, a wooden railing and so on. At night I wouldn't expect a lot of NIR light to enter the camera, so I'm wondering if I need to do something special to get better results. 

It also seems to have a strong correlation with green items that come out very blue, like a green towel hanging around here.

###Why I'm interested
Obviously modified cameras need to demonstrate results where there is a strong correlation between reflected VIS/NIR light in such a way that it doesn't have such strong correlations with the shadow. So I need to find out what's still wrong in the setup. Could still be the white balance, could also be some other settings in the camera. Any help is appreciated.
