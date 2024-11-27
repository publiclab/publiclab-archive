---
nid: 7543
title: Artichoke filter search
path: public/static/notes/cfastie/05-14-2013/artichoke-filter-search.md
uid: 554
tagnames: near-infrared-camera,ndvi,infragram,rosco,infrablue,infragram-filters,gigapan
---

# Artichoke filter search

Mathew captured the same photo of artichoke plants with several different blue Rosco filters in front of the lens. All of these filters pass colors at the blue end of the spectrum and also in the infrared, but block most of the red visible wavelengths.  He used a Canon Powershot SX100 IS with the infrared block filter removed. White balance was set to auto, so there might have been variation in white balance among the shots through different filters. I downloaded 1064x768 versions of eight of his photos and used Ned's ImageJ plugin to make NDVI images for each one. NDVI was scaled between -1 and +1 and no stretching was done. Then I used Adobe Lightroom to do a custom white balance on each photo by using the eye dropper tool and trying to click on the same medium gray (pink) spot on each photo. Then I made NDVI images from the new photos. All NDVI images used the blue channel as visible light and the red channel as infrared light, so NDVI=(red-blue)/(red+blue).

<iframe src="https://www.gigapan.com/gigapans/129899/options/nosnapshots,hidetitle,fullscreen/iframe/flash.html?height=600" frameborder="0" height="625" scrolling="no" width="100%"></iframe>

Some of the NDVI images do a good job discriminating between plants and non-plants, the most important function of the index. There is not much variation in NDVI values within the plant parts of the images, so it was hard to make the plants look very interesting in NDVI, or to distinguish different parts of plants or different kinds of plants. All of the NDVI images display the common artifact of higher NDVI values in the shadows among the plants.

Performing an automatic white balance on the original images in Lightroom did not alter them very much. I tried scaling NDVI differently when the images were made (e.g., 0 to +1, -1 to +1.5, -1.4 to 0.5) and that resulted in dramatic differences in the appearance of the NDVI images, but there seemed to be no additional information in those images. I tried a few different color lookup tables for displaying the NDVI values, and the one presented here is called 16_colors.lut.

It would be good to repeat this comparison on different scenes, especially ones with a few different types of plants. It would also be good to do this comparison with white balance on a constant setting (e.g., sunny or cloudy), and to repeat each photo using a custom white balance which was done in the camera using a medium gray surface (or any surface) as target. Another good experiment would be possible if the white balance card was visible in each photo.

