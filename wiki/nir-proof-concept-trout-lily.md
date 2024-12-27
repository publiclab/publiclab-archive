---
title: "NIR proof of concept: Trout Lily"

tagnames: 'near-infrared-camera, vermont'
author: cfastie
path: /wiki/nir-proof-concept-trout-lily.md
nid: 1815
uid: 554

---

# NIR proof of concept: Trout Lily

by [cfastie](../profile/cfastie)

April 27, 2012 16:53 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [vermont](../tag/vermont)

----

I watched the two essential videos that Jeffrey Warren made about post processing near-infrared and visible images to highlight patterns in vegetation and tried to recreate the magic.  The first video is about rectifying two images in Photoshop: http://youtu.be/pv6xB0y-rX4.  I used this technique to align a NIR image taken with a PLOTS modified Canon A495 camera on top of a regular image of the same scene.  The scene is some Trout Lilies in the woods.  The second video is about using GIMP to display combinations of the NIR and visible color data to show enhanced patterns of vegetation health and productivity: http://youtu.be/-nNnWEHNO_w.  Below are examples of four different ways to highlight patterns of photosynthetically active plant biomass using images from the [PLOTS visible/IR camera tool]( /wiki/dual-camera-kit-guide).

It should be possible to do all of this image work with one or the other of the two programs Jeff uses in the videos, but I haven’t figured out how, so I used Photoshop for the rectifying and GIMP for the analysis just as he does (the obstacle with the analysis is that I can’t figure out how to do division in Photoshop).

I did one important thing different from the second video. In calculating NDVI, Jeff added or subtracted the value of visible light from the value of NIR light. Instead of using all visible light (sum of the red, blue, and green channels), I used only visible red light to more closely mimic the way NDVI is calculated from satellite data.

<div class="caption left"><a href="https://www.flickr.com/photos/52862669@N08/6972660674/" title="ERAM_visA by Chris Fastie, on Flickr"><img src="https://farm8.staticflickr.com/7091/6972660674_c8c3c0a21a_n.jpg" width="320" height="240" alt="ERAM_visA"></a>
A normal image of Trout Lily with no infrared data. Taken with an unmodified camera.
</div>
<div class="caption left">
<a href="https://www.flickr.com/photos/52862669@N08/7118938811/" title="ERAM_NIR by Chris Fastie, on Flickr"><img src="https://farm8.staticflickr.com/7185/7118938811_dac5935dce_n.jpg" width="320" height="240" alt="ERAM_NIR"></a>
A photo from the PLOTS modified Canon Powershot A495 camera.  Visible light is blocked by a filter which replaced the infrared blocking filter in the camera. All three color channels (which are all near-infrared data) are combined and used as NIR data in the images below.
</div>

<div class="caption left">
<a href="https://www.flickr.com/photos/52862669@N08/6972660778/" title="ERAM_NRGa by Chris Fastie, on Flickr"><img src="https://farm8.staticflickr.com/7202/6972660778_da62005e3a_n.jpg" width="320" height="240" alt="ERAM_NRGa"></a>
NRG false color infrared. The red channel displays near infrared data instead of visible red data. No blue data are displayed. This is a common way to depict scenes using near infrared satellite data.
</div>
<div class="caption left">
<a href="https://www.flickr.com/photos/52862669@N08/7118829619/" title="ERAM_NIRforG2a by Chris Fastie, on Flickr"><img src="https://farm8.staticflickr.com/7135/7118829619_24d27edf00_n.jpg" width="320" height="240" alt="ERAM_NIRforG2a"></a>The green color displayed is the near infrared light.  This is similar to the normal scene except that NIR replaces green, so there are no green data displayed.  This looks sort of like a normal image because both NIR and green are mostly reflected from plant foliage.</div>
<div class="caption left">
<a href="https://www.flickr.com/photos/52862669@N08/7118739921/" title="ERAM_NDVI_GSbA by Chris Fastie, on Flickr"><img src="https://farm8.staticflickr.com/7105/7118739921_6a95f112de_n.jpg" width="320" height="240" alt="ERAM_NDVI_GSbA"></a>
NDVI with the highest NDVI values represented by the lightest tones. NDVI uses the difference between visible red light (which healthy plants absorb) and near infrared light (which healthy plants reflect) to highlight the areas in a scene where the most photosynthetically active biomass is. 

</div>
<div class="caption left">
<a href="https://www.flickr.com/photos/52862669@N08/6972661142/" title="ERAM_NDVI_p-rA by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8002/6972661142_e8980cc70b_n.jpg" width="320" height="240" alt="ERAM_NDVI_p-rA"></a>
NDVI with the highest NDVI values represented by the hottest colors. From cool to hot: blue, green, yellow, orange, red.  Many small red artifacts are present where there are no live plants. This is probably due to poor rectification of the normal and NIR images, but there are several possible causes of erroneous results in NDVI images.  
</div>