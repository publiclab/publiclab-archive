---
nid: 16411
title: Use Image Sequencer for NDVI plant analysis with 2 images
path: public/static/notes/warren/05-30-2018/use-image-sequencer-for-ndvi-plant-analysis-with-2-images.md
uid: 1
tagnames: near-infrared-camera,video,remote-sensing,ndvi,infrared,nasa,infragram,photosynthesis,infrared-photography,activity:multispectral-imaging,activity:infragram,multispectral-imaging,activity:image-analysis,aren,image-sequencer,activity:image-sequencer,activity:aren,activity:nasa
---

# Use Image Sequencer for NDVI plant analysis with 2 images

This tutorial shows how to use [Image Sequencer](/image-sequencer) to take two DIY multispectral images (one infrared, one visible light) and composite them [into an NDVI image](/ndvi).

Made with support from the #AREN project at NASA.

[Image Sequencer](/image-sequencer) is an online tool for image processing -- based on the idea of a storyboard. Each modification makes a new copy of the image, resulting in a series of images showing each step. It is designed for use in browsers, as well as on the Raspberry Pi.

By doing NDVI analysis in Image Sequencer (although it is still under development), you can see each step separately, and re-use the whole sequence of steps on different images. To try this yourself, use the link below, and the test images from the comments section of this post: [https://publiclab.org/notes/warren/12-24-2010/ndvi-test-lima-peru](https://publiclab.org/notes/warren/12-24-2010/ndvi-test-lima-peru)

## Image Sequencer workflow

#### [https://publiclab.github.io/image-sequencer/examples/#steps=import-image,blend,ndvi,colormap](https://publiclab.github.io/image-sequencer/examples/#steps=import-image,blend,ndvi,colormap)

## Video tutorial

If you have your own 2-image multispectral photos to try with this process, share them in the comments below. Since Image Sequencer is still under development, there are [plenty of planned improvements](https://github.com/publiclab/image-sequencer/issues), but @tech4gt, @ccpandhare and I would love your input and ideas for refining and improving it!
<iframe width="853" height="480" src="https://www.youtube.com/embed/RHaiVjPPvMc" frameborder="0" allowfullscreen=""></iframe>

### Example images

To practice, and to confirm that you get the same results, go through the steps in the sequence above using these example images:

Visible:

[![san-martin-visible.jpg](/i/25043?size=medium)](/i/25043)

Infrared:

[![san-martin-infrared.jpg](/i/25042?size=medium)](/i/25042)

### Example output

If you go through the above steps, you should get an image like this after the "blend" step, which displays infrared in the blue channel, and visible light in the red channel:

[![san-martin-rgn.jpg](/i/25070.jpg?size=medium)](/i/25070)
  
After the **NDVI** step, you'll see this image, where NDVI values of `-1` are black, and NDVI of `1` are white:

[![san-martin-is-ndvi.jpg](/i/25047?size=medium)](/i/25047)

The final step should colormap it with the default colormap, resulting in an image like this:

[![san-martin-is-colormap.jpg](/i/25048?size=medium)](/i/25048)