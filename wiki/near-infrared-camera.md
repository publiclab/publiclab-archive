---
title: "Near-Infrared Camera"

tagnames: 'near-infrared-camera, infragram, list:plots-infrared, tabbed:notes, tabbed:wikis, n'
author: warren
path: /wiki/near-infrared-camera.md
nid: 59
uid: 1

---

![](https://publiclab.org/sites/default/files/IMG_0511-split.png)

# Near-Infrared Camera

by [warren](../profile/warren), [liz](../profile/liz), [Shannon](../profile/Shannon), [gonzoearth](../profile/gonzoearth), [mathew](../profile/mathew), [cfastie](../profile/cfastie), [wward1400](../profile/wward1400), [cversek](../profile/cversek), [donblair](../profile/donblair), [ncraig](../profile/ncraig), [sara](../profile/sara)

January 25, 2011 03:26 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [infragram](../tag/infragram), [list:plots-infrared](../tag/list:plots-infrared), [tabbed:notes](../tag/tabbed:notes), [tabbed:wikis](../tag/tabbed:wikis), [n](../tag/n)

----

<iframe width="480" height="360" src="//www.youtube.com/embed/ZVbC3UxlX8c" frameborder="0" allowfullscreen></iframe>

_The Infragram Kickstarter video, a great introduction to the project._

###Introduction

Vineyards, large farms, and NASA all use **near-infrared photography** for assessing plant health, usually by mounting expensive sensors on airplanes and satellites.  At Public Lab, **we've developed a Do-It-Yourself way to take these kinds of photos**, enabling us to monitor our environment through quantifiable data. 

Our technique uses a modified digital camera to capture near-infrared and blue light in the same image, but in different color channels. We then [post-process the image](#How+to+process+your+images:) (using [Infragram.org](http://infragram.org)) to attempt to infer how much it is photosynthesizing. This allows us to better understand and quantify how much of the available light plants are metabolizing into sugar via photosynthesis. 

> You can do this yourself (as with all Public Lab tools) but there is also an [Infragram DIY Filter Pack](http://store.publiclab.org/products/infragram-diy-filter-pack) available in the Public Lab Store.

We [ran a Kickstarter](http://kickstarter.com/projects/publiclab/infragram-the-infrared-photography-project/) for a version of this camera we call the **Infragram**. [Read more about it here &raquo;](/wiki/infragram) Here's the video from the Kickstarter, which offers a nice visual explanation of the technique:

<iframe style="display:inline;" width="480" height="360" src="http://www.kickstarter.com/projects/publiclab/infragram-the-infrared-photography-project/widget/video.html" frameborder="0"> </iframe>
<br />

###What is it good for?

Multispectral or infrared/visible photography has seen a variety of applications in the decades [since it was developed](#Background:+satellite+infrared+imaging). We have focused on the following uses:

- Take pictures to examine plant health in backyard gardens, farms, parks, and nearby wetlands 
- Monitor your household plants
- Teach students about plant growth and photosynthesis
- Create exciting science fair projects
- Generate verifiable, open environmental data
- Check progress of environmental restoration projects
- Document unhealthy areas of your local ecology (for instance, algal blooms)

Notable uses include [this photograph of an unidentified plume of material in the Gowanus Canal](/notes/liz/8-3-2011/infrared-balloon-image-reveals-gowanus-plume) (and [writeup by TechPresident](http://techpresident.com/blog-entry/how-diy-science-solving-ecological-mysteries-new-york-city)) and a variety of projects at a small farm in New Hampshire [at the annual iFarm event](/tag/ifarm). The [Louisiana Universities Marine Consortium](http://lumcon.edu) has also [collaborated with Public Lab contributors to measure wetlands loss](/notes/shannon/5-29-2011/plots-and-lumcon-collaboration) following the Deepwater Horizon oil disaster.

**Here's an example** of what one of our "Infragram" cameras sees (left) and the post-processing analysis which shows photosynthetic activity, or plant health (right). This picture was taken from a commercial airplane flight:

[![infragram](https://i.publiclab.org/system/images/photos/000/000/424/medium/aerial-split.jpg)](https://i.publiclab.org/system/images/photos/000/000/424/original/aerial-split.jpg)

###How does it work?

**Camera modification:** We've worked on several different techniques, from [dual camera systems](/wiki/dual-camera-kit-guide) to the current, single-camera technique. This involves removing the infrared-blocking filter from [almost any digital camera](/tag/infragram-conversion), and adding a [specific blue filter](/wiki/infragram#Filters). 

![swap.png](https://i.publiclab.org/system/images/photos/000/000/376/medium/swap.png)

This filters out the red light, and **measures infrared light in its place** using a piece of carefully chosen "NGB" or "infrablue" filter. Read more about [the development of this technique here](http://publiclab.org/notes/cfastie/04-20-2013/superblue). You can also learn more about how digital camera image sensors detect colors [at this great tutorial by Bigshot](http://www.bigshotcamera.com/learn/image-sensor/index).

**Post-processing:** Once you take a multispectral photograph with a modified camera, you must [post-process it](#How+to+process+your+images:), compositing the infrared and visible data to generate a new image which (if it works) displays healthy, photosynthetically active areas as bright regions. An in-depth article on the technique by Chris Fastie (albeit using red instead of blue for visible light) [can be found here](/wiki/ndvi-plots-ir-camera-kit).

**History of the project:** While we used to use a two-camera system, [research by Chris Fastie](/notes/cfastie/04-20-2013/superblue) and [other Public Lab contributors](/tag/near-infrared-camera) have led to the use of a **single camera which can image in both infrared and visible light simultaneously**. The Infrablue filter is just a piece of carefully chosen theater gel which was examined using [a DIY spectrometer](/wiki/spectrometer). You can use this filter to turn most webcams or cheap point-and-shoots into an infrared/visible camera. 

###Background: satellite infrared imaging 

The study of Earth's environment from space got its start in 1972 when the first Landsat satellite was launched. The multispectral scanner it carried, like the scanners on all subsequent Landsat satellites, recorded images with both visible and near infrared light.  Remote sensing "scientists" quickly learned that by combining visible and infrared data, they could reveal critical information about the health of vegetation. For example, the normalized difference vegetation index (NDVI) highlights the difference between the red and infrared wavelengths that are reflected from vegetation. Because red light is used by plants for photosynthesis but infrared light is not, NDVI allows "scientists" to estimate the amount of healthy foliage in every satellite image. Thousands of "scientists", including landscape ecologists, global change biologists, and habitat specialists have relied on these valuable satellite-based NDVI images for decades.

There are public sources of infrared photography for the US available through the Department of Agriculture -- [NAIP](http://datagateway.nrcs.usda.gov/) and [Vegscape](http://nassgeodata.gmu.edu/VegScape/) -- but this imagery is not collected when, as often, or at useable scale for individuals who are managing small plots. 

![ndvi-vis-comparison.jpg](/system/images/photos/000/001/289/medium/ndvi-vis-comparison.jpg)
 <p><em>Caption: Normal color photo (top) and normalized difference vegetation index (NDVI) image.  NDVI image was derived from two color channels in a single photo taken with a camera modified with a special infrared filter.  Note that tree trunks, brown grass, and rocks have very low NDVI values because they are not photosynthetic.  Healthy plants typically have NDVI values between 0.1 and 0.9.  Images by Chris Fastie.</em> 
Visit the [gallery of high-res images by Chris Fastie](https://plus.google.com/photos/116103622078305917397/albums/5878196749239180465/5878198341400814034)

****

## Frequently Asked Questions

<a class="btn btn-primary" href="/post?tags=question:multispectral-imaging,question:infrared,question:infragram&template=question">Ask a question about infrared imaging</a>

[question:infragram](../../tag/question:infragram)

****

## How to process your images

(this section is moved to and updated at http://publiclab.org/wiki/near-infrared-imaging)

We're working on an easy process to generate composite, infrared + visible images that will reveal new details of plant health and photosynthesis. There are several approaches:

* The **easiest way** is to process your images online at the free, open source [Infragram.org](http://infragram.org)
* [Ned Horning's](/profile/nedhorning) [PhotoMonitoring plugin](/wiki/photo-monitoring-plugin)
* Manual processing
  * [in Photoshop](/notes/warren/10-25-2011/video-tutorial-creating-infrared-composites-aerial-wetlands-imagery)
  * [or GIMP](/notes/warren/10-27-2011/video-tutorial-creating-false-color-ndvi-aerial-wetlands-imagery)
* Using MapKnitter.org (deprecated)
* Command-line processing of single images and rendering of movies using a Python script.  Source code is [here](https://github.com/Pioneer-Valley-Open-Science/infrapix)

**Note:** Older versions of this page have been kept at the following wiki page: http://publiclab.org/wiki/near-infrared-camera-history