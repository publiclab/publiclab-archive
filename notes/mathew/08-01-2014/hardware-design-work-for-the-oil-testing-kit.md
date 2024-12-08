---
title: Hardware design work for the Oil Testing Kit
tagnames: spectrometer, kits, fluorescence, desktop-spectrometer, oil-testing-kit, with:warren, with:stevie
author: mathew
path: /notes/mathew/08-01-2014/hardware-design-work-for-the-oil-testing-kit.md
nid: 11006
uid: 4

---

# Hardware design work for the Oil Testing Kit

by [mathew](../profile/mathew) August 01, 2014 21:44

August 01, 2014 21:44 | Tags: [spectrometer](../tag/spectrometer), [kits](../tag/kits), [fluorescence](../tag/fluorescence), [desktop-spectrometer](../tag/desktop-spectrometer), [oil-testing-kit](../tag/oil-testing-kit), [with:warren](../tag/with:warren), [with:stevie](../tag/with:stevie)

A hardware sketch of our favorite configuration is above.
_This is a jointly authored research note.
_
@mathew, @stevie, and @warren worked on Thursday on a design for the Oil Testing Kit, which could eventually replace the Desktop Spectrometry Kit. This was based on previous work by @mathew and @warren, but culminated in some great new ideas. 

###Main goals

**Our main goals were:**

* reducing # of, or simplifying assembly steps
* adding a sample chamber
* adding UV light source
* simplifying alignment of the light source with the sample and slit
* improving rigidity/weatherproofness/robustness

**We also want to try:**

* increasing moddability (for power users)
* maintaining or lowering cost of materials (vs. $40 kit)
* lowering weight (which should be easy by dropping the aluminum conduit box)
* combining best of foldable and desktop spectrometers
* reducing light leaks
* improving stability of phone attachment
* accommodating different camera positions
* unify smartphone and desktop kits in some or all features.

With @mathew pushing for a rigid "optical bench" style board where the slit, grating, and camera could be precisely and firmly positioned and affixed, we brainstormed using 

* a routed channel and screw mounts,  
* a peg board and small right angle aluminum struts pre-drilled,
* a measured grid and instructions printed on it.
* mini binder clips to affix bits of right-angle aluminum struts onto a small platform.

These last two ideas, a measured, printed grid with instructions printed on it for attaching right-angle struts with clips was our favorite. Binder clips are not ideal, but pretty close to what we want.  We like the idea that as a flexible platform it not only accomodates modifications in the "optical bench" style-- it invites them. 

[![IMG_20140801_140640.jpg](https://i.publiclab.org/system/images/photos/000/005/718/medium/IMG_20140801_140640.jpg)](https://i.publiclab.org/system/images/photos/000/005/718/original/IMG_20140801_140640.jpg)[![IMG_20140801_140654.jpg](https://i.publiclab.org/system/images/photos/000/005/723/medium/IMG_20140801_140654.jpg)](https://i.publiclab.org/system/images/photos/000/005/723/original/IMG_20140801_140654.jpg)

In past designs, the laser was stuck in a hole next to the sample, so it was impossible to position consistently. Since getting it aligned is a big problem for getting enough light to the webcam, we'd like to fix it completely inside the box, and align it precisely at the best height.  to capture the most light, we believe it should be parallel to the slit.

###Parts
This is a draft -- and we're working to reduce the # of parts and simplify construction.

* **bench** - rigid (poplar, basswood, masonite?) sheet on which to clip all optical pieces
* **frame** - folded chipboard insert which holds the whole system together and provides key geometries
* **baffle** or **envelope** - to block light from the outside, matte black paper
* **case** or **box** - structural, relatively weatherproof, backpack-proof

[![IMG_20140801_140640.jpg](https://i.publiclab.org/system/images/photos/000/005/779/medium/IMG_20140801_140640.jpg)](https://i.publiclab.org/system/images/photos/000/005/779/original/IMG_20140801_140640.jpg)[![IMG_20140801_140632.jpg](https://i.publiclab.org/system/images/photos/000/005/783/medium/IMG_20140801_140632.jpg)](https://i.publiclab.org/system/images/photos/000/005/783/original/IMG_20140801_140632.jpg)

[![IMG_20140801_140825.jpg](https://i.publiclab.org/system/images/photos/000/005/785/medium/IMG_20140801_140825.jpg)](https://i.publiclab.org/system/images/photos/000/005/785/original/IMG_20140801_140825.jpg)[![IMG_20140801_162734.jpg](https://i.publiclab.org/system/images/photos/000/005/800/medium/IMG_20140801_162734.jpg)](https://i.publiclab.org/system/images/photos/000/005/800/original/IMG_20140801_162734.jpg)[![IMG_20140801_162748.jpg](https://i.publiclab.org/system/images/photos/000/005/801/medium/IMG_20140801_162748.jpg)](https://i.publiclab.org/system/images/photos/000/005/801/original/IMG_20140801_162748.jpg)


We're thinking about building the light-blocking housing into the spectrometer box.  The box becomes a kind of 'sandbox' for setting up a lab setup.  Two different strategies arose for the light baffle-- attached to the box, and free standing.  We're split on the idea of a folding baffle, and will try a few strategies. Do we fully encase the skeleton or build it into the box?

###Holding Lasers

Riffing on a support, the idea of a fold-up support that locks in place at the right height appears good.  We'd like to fit the laser entirely within the box. 

[![IMG_20140801_140632.jpg](https://i.publiclab.org/system/images/photos/000/005/803/medium/IMG_20140801_140632.jpg)](https://i.publiclab.org/system/images/photos/000/005/803/original/IMG_20140801_140632.jpg)[![IMG_20140801_140751.jpg](https://i.publiclab.org/system/images/photos/000/005/804/medium/IMG_20140801_140751.jpg)](https://i.publiclab.org/system/images/photos/000/005/804/original/IMG_20140801_140751.jpg)

[![IMG_20140801_140816.jpg](https://i.publiclab.org/system/images/photos/000/005/806/medium/IMG_20140801_140816.jpg)](https://i.publiclab.org/system/images/photos/000/005/806/original/IMG_20140801_140816.jpg)[![IMG_20140801_140751.jpg](https://i.publiclab.org/system/images/photos/000/005/805/medium/IMG_20140801_140751.jpg)](https://i.publiclab.org/system/images/photos/000/005/805/original/IMG_20140801_140751.jpg)



####Earlier
Previously, @mathew & Jeff brainstormed and prototyped a 'skeleton and baffle'  designs:

<a href="https://www.flickr.com/photos/14397636@N07/14571776941" title="Sketching a new spectrometer kit by mathew  lippincott, on Flickr"><img src="https://farm6.staticflickr.com/5537/14571776941_53af1c0316.jpg" width="370" height="500" alt="Sketching a new spectrometer kit"></a><a href="https://www.flickr.com/photos/14397636@N07/14388710637" title="Sketching a new spectrometer kit by mathew  lippincott, on Flickr"><img src="https://farm6.staticflickr.com/5584/14388710637_baf35b7143.jpg" width="370" height="500" alt="Sketching a new spectrometer kit"></a>

@warren riffed on the same idea [with a foldable inside and a sampling station.](/notes/warren/07-05-2014/oil-testing-spectrometry-workshop-at-fab-10)

[![IMG_20140704_175642.jpg](https://i.publiclab.org/system/images/photos/000/005/141/original/IMG_20140704_175642.jpg)](https://i.publiclab.org/system/images/photos/000/005/141/original/IMG_20140704_175642.jpg)