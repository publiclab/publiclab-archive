---
title: Mapping Biodiversity Hotspots - Shannon Entropy Applied to Pixel Space (Case Study: Cape Cod, MA)
tagnames: mapping, ecology, biodiversity, diversidad
author: podolsky
path: /notes/podolsky/08-14-2015/mapping-biodiversity-hotspots-shannon-index-applied-to-pixel-space-case-study-cape-cod-ma.md
nid: 12144
uid: 447732

---

![](https://publiclab.org/public/system/images/photos/000/011/121/original/Screen_Shot_2015-08-14_at_6.14.29_PM.jpg)

# Mapping Biodiversity Hotspots - Shannon Entropy Applied to Pixel Space (Case Study: Cape Cod, MA)

by [podolsky](../profile/podolsky) August 14, 2015 22:41

August 14, 2015 22:41 | Tags: [mapping](../tag/mapping), [ecology](../tag/ecology), [biodiversity](../tag/biodiversity), [diversidad](../tag/diversidad)

----

I developed Diversidad Software to quickly scan earth imagery (from planes, satellites, drones etc.) and find the areas of the image that have the highest spectral diversity. To find areas of maximum spectral heterogeneity, I use the same Shannon "diversity index" that ecologists use on species assemblages. But in my case I treat the pixels as species.

Here is an example on Cape Cod, MA: This is the raw SPOT Image for the Cape:
[![Screen_Shot_2015-08-14_at_6.14.13_PM.jpg](https://i.publiclab.org/system/images/photos/000/011/124/medium/Screen_Shot_2015-08-14_at_6.14.13_PM.jpg)](https://i.publiclab.org/system/images/photos/000/011/124/original/Screen_Shot_2015-08-14_at_6.14.13_PM.jpg)

Next, I filter the entire image and calculate the H' and H'max for every pixel in the image and convert that to a gray scale image where dark gray areas are high heterogeneity and light gray areas are low. Here is that image with the red polygons showing the areas of the image that achieved 60% or better of the maximum possible spectral diversity (by taking H'/H' Max • 100):
[![Screen_Shot_2015-08-14_at_6.15.09_PM.jpg](https://i.publiclab.org/system/images/photos/000/011/125/medium/Screen_Shot_2015-08-14_at_6.15.09_PM.jpg)](https://i.publiclab.org/system/images/photos/000/011/125/original/Screen_Shot_2015-08-14_at_6.15.09_PM.jpg)

Finally, to see where these areas of highest spectral diversity are found within the original image I merge the two results yielding this image final product:

[![Screen_Shot_2015-08-14_at_6.14.29_PM.jpg](https://i.publiclab.org/system/images/photos/000/011/126/medium/Screen_Shot_2015-08-14_at_6.14.29_PM.jpg)](https://i.publiclab.org/system/images/photos/000/011/126/original/Screen_Shot_2015-08-14_at_6.14.29_PM.jpg)

**Note**: that most of the areas identified are in the coastal zone - and that is where the biological diversity is highest too. When one goes to these red areas and conducts a survey for most any taxa, the biodiversity within these polygons are significantly higher than it is outside of these polygons. The whole process can takes less than 1minute for several million acres (depending upon image resolution) and thereby provides a low cost, first-cut assessment of biodiversity hotspots.

**Note2**: the images shown here have been down sampled considerably from the original to allow easing posting here. Send me a message if you would like to examine the full res images.

**Disclaimer**: While areas of high biodiversity are a conservation priority there are many important species found in areas of high spectral homogeneity as well - just not as many of them.