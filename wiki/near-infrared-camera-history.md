---
title: "Near Infrared Camera history"

tagnames: 'near-infrared-camera, ndvi, infragram'
author: liz
path: /wiki/near-infrared-camera-history.md
nid: 7660
uid: 7

---

# Near Infrared Camera history

by [warren](../profile/warren), [liz](../profile/liz)

May 17, 2013 19:01 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infragram](../tag/infragram)

----

<div class="alert">This page needs revision</div>

###Infrared cameras for vegetation analysis

Infrared photography can help assess a plant's health, and has been used on satellites and planes for agricultural and ecological assessment, mainly by vineyards, large farms and large-scale (read: expensive) research projects. There are public sources of infrared photography for the US available through the Department of Agriculture -- [NAIP](http://datagateway.nrcs.usda.gov/) and [Vegscape](http://nassgeodata.gmu.edu/VegScape/) -- but this imagery is not collected when, as often, or at useable scale for individuals who are managing particular places. By creating a low-cost camera and working with farmers and environmental activists, we hope to explore grassroots uses for this kind of technology. What could farmers or activists do with leaf-scale, plant-scale, lot-scale, and field-scale data on plant health if the equipment costs as little as $10 or $35?

![](https://i.publiclab.org/system/images/photos/000/000/308/medium/Screen_Shot_2013-05-15_at_12.44.07_PM.png)

Screenshot from [2011-09-10-colorado-boulder-foothills-community-park-NRG](http://archive.publiclaboratory.org/boulder/2011-09-10-colorado-boulder-foothills-community-park/tms-nrg/googlemaps.html). See how clearly plants are identifiable from bare earth, or pavement. The unique colors in this photo will be explained below. Keep reading to learn about the unique colors in this photo.

###Plants and infrared

We've been modifying cheap cameras to photograph in infrared (IR). The sensors in common digital cameras are sensitive to infrared, but come with a filter that blocks these wavelengths so that the photos look "normal" to us. Removing that filter allows us to pickup information in IR, and in that way begin to "see the invisible life of plants."

![](http://farm6.static.flickr.com/5292/5416397210_1d4d0ecd9a.jpg)

See, plants use visible light (mainly blue and red light) as 'food' -- not so much green light, which is why they reflect green away, and look green to our eyes. They also happen to reflect near infrared light (which is just beyond red light, but not visible to the human eye). This is because they chemically cannot convert infrared into usable food, and so they just bounce away to stay cool. The above image shows what colors of light plants absorb vs. reflect away.

![](http://farm5.static.flickr.com/4095/5412520298_edc64e6e55.jpg)

By using this unique property of plants, plus our ability to take near-infrared photos we can create composite images which highlight where plants are and how much they are photosynthesizing.

(note: this video was made when people were still putting the film negative on the outside of the camera lens. To put the film negative directly inside the camera, once you have the infrared filter removed, put your cut film negative where the filter was, replace the rubber gasket and continue with the steps in the video for reassembling.)

<iframe width="480" height="390" src="https://www.youtube.com/embed/XFOHWaL7XsM" frameborder="0" allowfullscreen></iframe>

NDVI example: 

<a href="https://www.flickr.com/photos/jeffreywarren/5288138022/" title="Plaza San Martin, visible-infrared-NDVI by jeferonix, on Flickr"><img src="http://farm6.static.flickr.com/5206/5288138022_312eca176a.jpg" width="500" height="133" alt="Plaza San Martin, visible-infrared-NDVI" /></a>

NRG example:

<iframe style="border:none;" width="500" height="375" src="http://archive.publiclaboratory.org/leaflet/?tms=http://archive.publiclaboratory.org/boulder/2011-09-10-colorado-boulder-foothills-community-park/tms-nrg/&lon=-105.28688564299999&lat=40.0548629969&zoom=19"></iframe>

##How to take infrared and visible photographs##

By putting both an infrared-pass filter and an infrared-block filter on the same camera, you can get both infrared and visible light with one photograph... though the areas don't overlap. This means you can get such imagery from the air using [balloon mapping](/tool/balloon-mapping), while only risking one camera. Another alternative is to use a [stereo camera](/tool/stereo-camera) system like the one being developed by the [New York City chapter](/place/new-york-city).

<a href="https://www.flickr.com/photos/jeffreywarren/5331230956/" title="Our bifocal infrared/visible filter by jeferonix, on Flickr"><img src="http://farm6.static.flickr.com/5170/5331230956_ae6aae5123.jpg" width="500" height="375" alt="Our bifocal infrared/visible filter" /></a>

<a href="https://www.flickr.com/photos/jeffreywarren/5335020092/" title="Visible/infrared of a tree from above, with bifocal filter by jeferonix, on Flickr"><img src="http://farm6.static.flickr.com/5169/5335020092_35982b1231.jpg" width="500" height="375" alt="Visible/infrared of a tree from above, with bifocal filter" /></a>

##Using Photoshop to do vegetation analysis with your pictures##

You can use Adobe Photoshop (or GIMP, for an open-source, free alternative) to composite an infrared and visible image to do vegetation/photosynthesis analysis. The example photos were taken from an airplane window by Stewart Long. For a more comprehensive description of this process, and alternative means to do this analysis, see the [infrared vegetation analysis activity](/wiki/infrared-vegetation-analysis-activity).

<object width="480" height="390"><param name="movie" value="https://www.youtube.com/v/Sfic43qRHqk?fs=1&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/Sfic43qRHqk?fs=1&amp;hl=en_US" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="390"></embed></object>

###Using MapKnitter to make infrared/visible composites###

If you captured infrared and visible pictures from a balloon or kite, you can stitch them into a map using mapknitter.org. Mapknitter supports [compsiting](/wiki/mapknitter-multispectral). It looks something like this, so far:

<a href="https://www.flickr.com/photos/jeffreywarren/6248601504/" title="MapKnitter infrared stitching over another MapKnitter TMS export by jeferonix, on Flickr"><img src="http://farm7.static.flickr.com/6046/6248601504_6ff65c5471.jpg" width="500" height="340" alt="MapKnitter infrared stitching over another MapKnitter TMS export"></a>