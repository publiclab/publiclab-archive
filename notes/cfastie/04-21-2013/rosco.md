---
title: Rosco!
tagnames: near-infrared-camera, nrg, ndvi, nir, vermont, infrared, white-balance, infragram, plant-health, development, superblue, rosco, vegetation, infrablue, infragram-filters
author: cfastie
path: /notes/cfastie/04-21-2013/rosco.md
nid: 6953
uid: 554

---

# Rosco!

by [cfastie](../profile/cfastie) April 21, 2013 18:57

April 21, 2013 18:57 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nrg](../tag/nrg), [ndvi](../tag/ndvi), [nir](../tag/nir), [vermont](../tag/vermont), [infrared](../tag/infrared), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [plant-health](../tag/plant-health), [development](../tag/development), [superblue](../tag/superblue), [rosco](../tag/rosco), [vegetation](../tag/vegetation), [infrablue](../tag/infrablue), [infragram-filters](../tag/infragram-filters)

<em>Image above: Flowers of trailing arbutus (dark) and plants of hair cap moss (light) in a detail from a grayscale NDVI image</em> 

When LifePixel converts a camera to Superblue by replacing the IR block filter (presumably with a Schott BG3 filter), they also load a custom white balance preset. When photos are taken with this preset, the blue and red channels can be used to produce a plant health index similar to the Normalized Difference Vegetation Index (NDVI). Without this preset, the proportion of blue light (in the blue channel) and infrared light (in the red channel) is skewed and produces less meaningful NDVI values.  This preset tells the camera whether to make relative adjustments in the intensity of the red, blue, or green channels for each pixel in the scene. The difference between the intensity of blue and infrared light captured is the basis of the calculation of an NDVI value for each pixel, so this adjustment is probably critical.

I don't know how LifePixel determines the proper white balance preset. My Canon A810 with the internal IR block filter removed and a piece of Rosco #2007 VS Blue filter in front of the lens takes [blue or purplish photos with any of its standard white balance presets](http://publiclab.org/notes/cfastie/04-20-2013/superblue). But when I point the camera at just about anything and make a custom white balance preset, the photos look a lot like those from the LifePixel Superblue camera.  NDVI values computed as (IR - red)/(IR + red) will always be between -1 and +1.  The white balance setting can affect where in this range the NDVI values for healthy plants fall. So for NDVI results to be comparable to those used in the remote sensing community, this setting probably has to be correct.

If photos are captured in RAW format, the white balance can be set afterwards, but you would have to know what setting to use. My Canon A810 does not record RAW format, although CHDK could add that functionality with a substantial increase in file size and post processing labor.  Even if RAW is not captured, the white balance can be adjusted to some degree afterwards. But the easiest way to set white balance is to point the camera at the proper color and save a custom preset. The question is: What color do you use?

![RoscoVis-201335838.jpg](https://i.publiclab.org/system/images/photos/000/000/106/medium/RoscoVis-201335838.jpg)
<p><em>Rosco, a Canon Powershot A810 with the internal IR block filter removed and a piece of Rosco #2007 VS Blue polyester filter taped in front of the lens. The dark blue paper was used to custom white balance the camera.</em></p>

I noticed that in the blue channel of the LifePixel photos plants were darker than in the blue channel of Rosco's photos.  So on a whim, I used a piece of very blue origami paper to set a custom white balance preset in the Rosco A810. Below are some of the photos I took. I also captured the same scene with the LifePixel converted Superblue G11, and with an unmodified camera. The first scene is a close up of trailing arbutus (<em>Epigaea repens</em>) one of the earliest native plants to bloom around here. This scene exploits an important advantage of the single camera NDVI approach -- extreme close ups are possible because there is no parallax error. The live leaves in the Rosco photo were a slightly duller yellow than in the LifePixel Superblue photo, and the Rosco NDVI image was shifted more to the green end of the NDVI color scale. After adjusting the Rosco photo's (not the NDVI image's) white balance with Lightroom's "Temp" slider to -10 and reprocessing it through Ned's ImageJ plugin, the NDVI image was very close to the LifePixel image.  (The setting of -10 is more or less equivalent to making the white balance 10% cooler. For RAW files, you can set the absolute temperature in degrees Kelvin. To photographers, "cooler" means bluer, and "warmer" means more red, but to physicists, it's the other way around.  If you are not sure who to believe, just remember who took **<em>50 years</em>** to find the Higgs boson.)

![Arbutus.jpg](https://i.publiclab.org/system/images/photos/000/000/107/large/Arbutus.jpg)
<p><em>Top row: Normal true color, LifePixel Superblue photo, and derived NDVI. Bottom row: Rosco photo, derived NDVI, and derived NDVI after adjusting the white balance temperature.</em></p>

In general there is good discrimination in these NDVI images of photosynthetic and non-photosynthetic material. Most of the leaves that are green in the RGB photo are green in the false-color NDVI images. The flowers, which contain no chlorophyll, have low NDVI values (purple), as does the Cheshire quartzite in the foreground. Live green plant material normally has NDVI values between 0.1 and 0.9, and that appears be the case in the final NDVI images.

![PetrViewSuBl.jpg](https://i.publiclab.org/system/images/photos/000/000/108/large/PetrViewSuBl.jpg)
<p><em>Normal true color photo, LifePixel Superblue photo, and derived NDVI image.</em></p>

The second scene has some young pine trees and some barely green ground cover. The LifePixel Superblue NDVI does a fairly good job discriminating the trees and most of the other green plants (above).  I included images of the grayscale version of the Rosco NDVI images (below). This is a reminder that NDVI is a calculated value between -1 and +1 for each pixel. Higher values have more difference between infrared light and photosynthetically active light (red or blue) and generally indicate more photosynthetically active biomass. An arbitrary color table is applied to these values to highlight certain ranges, typically values between 0.1 and 0.9 which usually indicate green plant material. 

![PetrPondRosco.jpg](https://i.publiclab.org/system/images/photos/000/000/109/large/PetrPondRosco.jpg)
<p><em>Results from Rosco. Top row: Photo from camera, derived NDVI grayscale, derived NDVI false color. Bottom row: Same as above but after the white balance temperature was adjusted by -10.</em></p>

After applying the same -10% temperature adjustment to the photo from the Rosco camera, the false color NDVI image is very close to the LifePixel image. This is a very good indication that the Rosco filter could produce reliable NDVI results with consistent white balance calibration. It was very cloudy and gray that day, so I will have to confirm these results today in the bright sun.  

Although it appears that the Rosco filter might be a workable substitute for a Schott BG3 filter, an important step will be to compare this result to NDVI produced with two cameras. When a dedicated IR camera has a good IR pass filter, the IR data used to compute NDVI will not be contaminated with visible light. Similarly, an unmodified camera with a standard IR block filter will have little IR light in any channel. So the two camera approach could provide different, and possible more reliable, NDVI values. Another advantage of the two camera approach is that each pair of photos can produce not only NDVI but also NRG (false color infrared) and normal true color images. The one camera approach provides only NDVI.

I have 475 square inches of Rosco #2007 VS Blue polyester filter. If anybody wants a piece, send me an address. (But I'm not sure this website allows directly contacting registered users, Jeff?)