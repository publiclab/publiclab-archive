---
nid: 6653
title: Multispectral DeFelice
path: public/static/notes/cfastie/4-3-2013/multispectral-defelice.md
uid: 554
tagnames: gulf-coast,near-infrared-camera,kite-mapping,nrg,ndvi,vegetation-mapping,louisiana,lumcon,cocodrie-la,cfastie,plant-health,gigapan
---

# Multispectral DeFelice

<em>Image above: NDVI image of part of the front yard at the LUMCON DeFelice Marine Center in Cocodrie, Louisiana.</em> 

Caterina has video footage of Scott describing the yellowish appearance of autumn Spartina marsh in false-color infrared aerial photos.  She was looking for an aerial image to illustrate this, but I had never processed all the photos from the big kite flight around the DeFelice Marine Center in Cocodrie, Louisiana.  This was the perfect excuse not to work on my taxes, so I fired up [Ned’s ImageJ plugin](http://publiclaboratory.org/notes/nedhorning/7-6-2012/photo-monitoring-plugin-imagejfiji) and fed it the 650 photo pairs from the Public Lab infrared camera rig I [flew on November 3, 2012](http://publiclaboratory.org/notes/cfastie/11-14-2012/lumcon-lawn).  The plugin worked magically after referring to the manual to remind myself of a few crucial spells.  

I tried several combinations of color channels for computing normalized difference vegetation index (NDVI) and settled on using the blue channel from the normal camera for the red band and the red channel from the IR camera for the infrared band.  The color table that I used to display the NDVI values is one that Ned made to be friendly to those with red-green colorblindness. Dark green is the highest value which represents the greatest amount of photosynthetically active biomass. White is the least amount of plant biomass, and purple is non-photsynthetic stuff, like soil, water, wood, and dead plants.

The poster below has the normal true color image, the false color infrared image, and the NDVI image of part of the front yard at the LUMCON facility. The true color and false color images are 23-24 images stitched in Microsoft ICE, and the NDVI image is 8 images stitched in ICE and five more added in photoshop. ICE had a harder time finding control points in the NDVI images. [Update: Embeds from gigapan.com don't display anymore. See it here: http://www.gigapan.com/gigapans/126829]

<iframe src="https://www.gigapan.com/gigapans/126829/snapshots/324980,324981,324982/iframe/flash.html?height=500" frameborder="0" height="600" scrolling="no" width="100%"></iframe>

These maps will have to be done again by hand in Photoshop to get the best georectification.  The area in this scene is only about 20% of the area covered during the flight, so I have a lot of aligning to do.

I used the defaults in the plugin except for:  Affine, nir(g+b)vis(g-b), jpeg, the channels for NDVI, and the lut.
