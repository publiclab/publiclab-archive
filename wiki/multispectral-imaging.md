---
title: "Multispectral imaging"

tagnames: 'agriculture, list:plots-infrared, urban-planning, tool, land-use, activities:multispectral-imaging, upgrades:multispectral-imaging, method, land-change'
author: liz
path: /wiki/multispectral-imaging.md
nid: 13341
uid: 7
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/018/462/original/IMG_0511-split.png)

# Multispectral imaging

by [warren](/profile/warren), [liz](/profile/liz)

August 08, 2016 20:15 | Tags: [agriculture](/tag/agriculture), [list:plots-infrared](/tag/list:plots-infrared), [urban-planning](/tag/urban-planning), [tool](/tag/tool), [land-use](/tag/land-use), [activities:multispectral-imaging](/tag/activities:multispectral-imaging), [upgrades:multispectral-imaging](/tag/upgrades:multispectral-imaging), [method](/tag/method), [land-change](/tag/land-change)

----

The Public Lab near infrared imaging project is an open source community effort to modify consumer cameras to capture near infrared imagery for a range of purposes, including plant health. All open or accessible near infrared imaging hardware and software efforts are welcome here! 

**Join in by:**

* Reading about goals and asking great questions
* Converting a camera using one of our starter kits
* Trying (and critiquing) our community-made how-to guides
* Posting your own how-to guides and mods
* Building on others’ work; hack and remix the kits to refine and expand them
* (proposed?) Submit your improvements for inclusion in an upcoming starter kit release or add-on
* (proposed?) Serve on a Research Review Group for a 3 month period

## Activities

This is a list of community-generated guides for specific applications using your near-infrared imaging setup (either a camera you converted yourself with a filter pack, a ready-made near-infrared camera, or double camera setup). Some may be more reproduced -- or reproducible -- than others. Try them out to build your skills, and help improve them by leaving comments. Together, we can repeat and refine the activities into experiments.

[multispectral-imaging](/tag/activity:multispectral-imaging)

<a href="/post?tags=activity:multispectral-imaging&title=How%20to%20do%20X" class="btn btn-primary">Add your guide here</a> <a href="/post?tags=request:experiment,question:multispectral-imaging,page:near-infrared-imaging&template=question&title=How%20do%20I...&redirect=question" class="btn btn-primary">Request a guide</a>

_Guides should include a materials list and a step-by-step construction guide with photo documentation. See an example._

****

## Hardware Mods

Have you added to your starter kit, improved it, or redesigned it? Show others how to take it to the next level by posting a build guide here:

[upgrades:multispectral-imaging]

<a href="/post?tags=upgrade:multispectral-imaging&title=How%20to%20do%20X" class="btn btn-primary">Add your hardware modification here</a> <a href="/post?tags=request:modification,page:near-infrared-imaging&template=question&title=How%20do%20I...&redirect=question" class="btn btn-primary">Request a hardware modification</a>

_Upgrades should include a parts list and a step-by-step construction guide with photo documentation. See an example._

****

## Builds

There’s a lot going on in open source near-infrared imaging -- if you’ve developed another open source design you’d like to show others how to construct, post it here!

* Rasberry Pi NoIR
* X
* XX

****

## Choosing a tool / Starter Kits

The question to start with is whether you can capture all the channels you need for your research question with a single converted camera or whether you should use a dual camera rig with one converted camera and one unconverted. That choice plays out in terms of what filter (blue or red) to use for converting your camera. 

Public Lab’s Kits initiative offers several starter kits, one with the basic components and instructions for converting your own digital camera to capture near-infrared imagery and a second option -- a readymade lightweight near-infrared camera. The point of the kits is to lower the barrier to capturing your own near-infrared imagery.

* **The Infragram filter pack** is our least expensive way to get started with near-infrared imaging, but it does require an afternoon and some technical work to perform the camera conversion yourself. ... etc etc etc

**[Visit the Infragram DIY filter pack]()**

* **The Infragram point and shoot** is a Mobius camera that we worked with a factory to modify.  ... etc etc etc

**[Visit the Infragram Point&Shoot page](/wiki/infragram-point-shoot)**

****

## Processing near-infrared imagery

Once you take a multispectral photograph with a modified camera, you must post-process it, compositing the infrared and visible data to generate a new image which (if it works) displays healthy, photosynthetically active areas as bright regions. In-depth articles on the technique by Chris Fastie can be found here: 

* https://publiclab.org/wiki/ndvi
* https://publiclab.org/wiki/ndvi-plots-ir-kit


****

## Software

How to process your images: we're working on an easy process to generate composite, infrared + visible images that will reveal new details of plant health and photosynthesis. There are several approaches:

* The **easiest way** is to process your images online at the free, open source [Infragram.org](http://infragram.org)
* [Ned Horning's](/profile/nedhorning) [PhotoMonitoring plugin](/wiki/photo-monitoring-plugin)
* Manual processing
  * [in Photoshop](/notes/warren/10-25-2011/video-tutorial-creating-infrared-composites-aerial-wetlands-imagery)
  * [or GIMP](/notes/warren/10-27-2011/video-tutorial-creating-false-color-ndvi-aerial-wetlands-imagery)
* Command-line processing of single images and rendering of movies using a Python script: Source code is [here](https://github.com/Pioneer-Valley-Open-Science/infrapix) and here: [here](https://github.com/publiclab/infrapix)
* For those who use the webcam and have a Python interpreter, there are some image processing codes available at [Python Webcam Codes](/wiki/python-webcam-codes)
* Using MapKnitter.org (deprecated)

****

## Comparison to standard tools 

Infrared imagery for agricultural and ecological assessment is usually captured from satellites and planes, and the information is used mainly by large farms, vineyards, and academic research projects. For example, see this illustrated [PDF, page 210](http://www.beckshybrids.com/Portals/0/SiteContent/Literature/PFR%20Book%202010%20optimized%20small.pdf) from a commercial imagery provider who has been studying the usefulness of infrared imagery and has quotes from farmers who make use of it. There are public sources of infrared photography for the US available through the Department of Agriculture -- [NAIP](http://datagateway.nrcs.usda.gov/) and [Vegscape](http://nassgeodata.gmu.edu/VegScape/) -- but this imagery is not collected when, as often, or at useable scale for individuals who are managing small plots. 

****

## Frequently Asked Questions

<a class="btn btn-primary" href="/post?tags=multispectral-imaging,question:multispectral-imaging&template=question">Ask a question about multispectral-imaging</a> <a class="btn btn-default" href="https://publiclab.org/subscribe/tag/question:multispectral-imaging">Get notified of new questions and help out</a> 

[question:multispectral-imaging](/tag/question:multispectral-imaging)
