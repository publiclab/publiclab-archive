---
title: Dual Camera Kit Guide
tagnames: near-infrared-camera, infrared, dual-camera, photo-rig
author: warren
path: /wiki/dual-camera-kit-guide.md
nid: 1758
uid: 1

---

# Dual Camera Kit Guide

by [cfastie](../profile/cfastie), [mathew](../profile/mathew), [warren](../profile/warren)

April 23, 2012 18:14 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [infrared](../tag/infrared), [dual-camera](../tag/dual-camera), [photo-rig](../tag/photo-rig)

<a href="https://www.flickr.com/photos/jeffreywarren/7110924837/" title="Dual camera kit by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7057/7110924837_557b834762.jpg" width="500" height="375" alt="Dual camera kit"></a>

This page will host instructions on assembling and using the **infrared/visible dual camera kit** as distributed through the [Balloon Mapping Kit Kickstarter project]().

<div class="notification">

<p>This page is under construction and will not be complete until mappers report their early experiences with the equipment.  Please <a href="mailto:publiclaboratory@googlegroups.com">get in touch on the mailing list</a> if you want to contribute your knowledge here.</p><p><b>If you have trouble, the best place to ask for help is <a href="mailto:publiclaboratory@googlegroups.com">the main mailing list</a></b></p>

</div>

###Introduction###

* [How this works, why we do it -- theory and science](/wiki/ndvi-plots-ir-camera-kit)
* What it's useful for
  * [A proof of concept using the PLOTS modified A495 camera]( /wiki/nir-proof-concept-trout-lily)
  * Case study: [Gowanus Canal plume identification](/notes/liz/8-3-2011/infrared-balloon-image-reveals-gowanus-plume) and [great TechPresident.com followup article](http://techpresident.com/blog-entry/how-diy-science-solving-ecological-mysteries-new-york-city)
  * Case study: Sunol Agpark (write-up coming soon)
* How far we've gotten, and things to try and/or improve: [how to contribute](/wiki/near-infrared-camera-status)

###Construction###

* **The dual camera rig:** [Assemble the camera bracket](/wiki/t-bracket-dual-camera-rig) (this will be updated soon for the excellent new knurled bolts)
  * Putting the T rig inside a big soda bottle, or other techniques to protect the cameras.  (we need to experiment and figure out the best way to do this)
  * Attaching the timer and batteries. (see [this photo](/notes/warren/4-25-2012/555-trigger-housing-tests-dual-cam-kit) for an early attempt)
  * Use the camera strap as a safety landyard.
* **Protective enclosure:** Build a case from a 1 gallon [Tropicana juice jug](/wiki/juice-jug-rig), a variation on the [PET-bottle rig](/wiki/pet-bottle-rig).
* **Simple shutter release:** [Trigger both cameras separately](/wiki/camera-trigger) with rubber bands; photos won't be matched but will likely overlap a lot (Example 1: [IR](https://mapknitter.org/map/view/2011-7-31-brooklyn-gowanus-ir) & [VIS](https://mapknitter.org/map/view/2011-7-31-brooklyn-gowanus-vis))
* **Advanced "synchronous shutter" triggering** - more work but good for getting matched IR and visible photos
  * **Hardware for synchronous shutter release:** [Assemble the electronics](/wiki/dual-camera-kit-electronics)
     * Assembling the 555 timer circuit
     * Preparing USB cables
     * Preparing batteries and battery holders
  * **Enhanced firmware to enable USB triggering and synchronous shutter release**
     * [Install and configure CHDK](/wiki/dual-camera-kit-software)

###Using your kit###

* Someone should post a quick video runthrough of setting the cameras up "in the field", turning them on and closing the bottle enclosure. It could be simulated indoors on a hanging string?
* **Using the Canon A495 cameras:** [Configuring the camera menus](/wiki/canon-a495-tips)
* Do a [test flight](/wiki/dual-camera-kit-test-flight) and [post your results](/note/add) to share with others and help troubleshoot!

###Processing the images###

* The most powerful way to process VIS/NIR pairs is with [Ned Horning's Photomonitoring plugin for Fiji.](https://github.com/nedhorning/PhotoMonitoringPlugin)
* Try the Photoshop/GIMP technique as demonstrated in the [NRG tutorial video](http://publiclaboratory.org/notes/warren/10-25-2011/video-tutorial-creating-infrared-composites-aerial-wetlands-imagery) and the [NDVI tutorial video](http://publiclaboratory.org/notes/warren/10-27-2011/video-tutorial-creating-false-color-ndvi-aerial-wetlands-imagery)
* Watch the video screencast at the top of [MapKnitter.org](https://mapknitter.org) for an intro to stitching your images together into a map.
  * Completed maps can be composited in Photoshop/GIMP or using experimental MapKnitter feature (link/video coming soon)
* Brainstorm better techniques

###Interpretation###

* [Interpreting infrared images](/wiki/interpreting-infrared-images)

Attached is the "introduction" document which shipped with each kit (also [editable in Google Docs](https://docs.google.com/document/d/1e1KjDyDtP8Ws3yteFOgraxhen-MEVXOL2dFsRdZNXZY/edit)). For help, please contact the mailing list -- either [register on Public Laboratory](/join) or email publiclaboratory@googlegroups.com.