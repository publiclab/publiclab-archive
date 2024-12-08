---
title: Rock Tripe Slab
tagnames: ndvi, infragram, gigapan, rock-tripe, lichen
author: cfastie
path: /notes/cfastie/06-11-2013/rock-tripe-slab.md
nid: 8159
uid: 554

---

# Rock Tripe Slab

by [cfastie](../profile/cfastie) June 11, 2013 00:48

June 11, 2013 00:48 | Tags: [ndvi](../tag/ndvi), [infragram](../tag/infragram), [gigapan](../tag/gigapan), [rock-tripe](../tag/rock-tripe), [lichen](../tag/lichen)

<em>Image above: Rock tripe (Umbilicaria sp.) and other foliose and crustose lichens cover a tenth of a hectare of the steep face of Rock Tripe Slab (previously known as "That big ledge up there").  Three cameras contributed to these images. Two cameras were required for both images along the dextral diagonal, one camera each for the images on the sinistral diagonal.</em> 

The Rock Tripe Slab overlook is a mile and a half from our house, but the third of a mile of steep bushwacking at the end took us as long as the rest of the walk. I had three cameras with me: a near-infrared Powershot A495, an infrablue Powershot A810, and an unmodified Powershot S95. I took overlapping handheld shots with each camera and stitched together panoramas in Microsoft ICE.

A dual camera infrared system allows you to make normal (RGB) images, pure near-infrared (NIR) images, false color infrared (NRG) images, and NDVI images. If multiple images need to be aligned into maps, the alignment process must be repeated for each spectral version of the map. That can mean multiple sessions in MapKnitter or Photoshop, which is time-consuming for big maps. The same is true when using programs to automatically stitch panoramas – each spectral version must be done independently. And NDVI images usually will not stitch together automatically, so they always have to be aligned by hand. 

A single camera infrablue system can avoid some of this repeated alignment and stitching. Microsoft ICE stitched together 20 infrablue photos to make the two row by 10 column panorama from Rock Tripe Slab.  ICE output a big jpeg and I opened it in Photoshop and then Fiji.  This huge infrablue image has everything required to make NIR, NDVI, and NBG. In Photoshop I switched the blue and green channels to make a false color IR image (NBG), and in Fiji I ran Ned’s plugin to make NDVI.  No more aligning or stitching was required! I could have also isolated the red channel to make a classic NIR image, but instead I used the photos I took with an A495 with a Wratten 87 filter and made a more pure NIR image. 

Ned mentioned that tiff files can have more than three color channels. This could come in very handy. If you align the pairs of normal and NIR photos from a dual camera system, you could then transfer an NIR channel from the IR photo to the RGB photo and save as four channel tiff.  Then when those images are aligned into a map or panorama, they could be saved as a big four channel tiff.  That single image could be used to make additional versions of the map or panorama in NIR, NRG, and NDVI without any additional alignment. Will this work in Mapknitter? Will any stitching programs handle four channel image files?

<iframe src="https://www.gigapan.com/gigapans/132058/snapshots/337290,337289,337288,337287,337286,337285/options/fullscreen/iframe/flash.html?height=800" frameborder="0" height="960" scrolling="no" width="100%"></iframe>