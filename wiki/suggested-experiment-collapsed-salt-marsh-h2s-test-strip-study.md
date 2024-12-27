---
title: "Suggested Experiment for Collapsed Salt Marsh H2S Test Strip Study"

tagnames: 'hydrogen-sulfide-sensing, hydrogen-sulfide, h2s, parent:hydrogen-sulfide-sensing'
author: deepwinter
path: /wiki/suggested-experiment-collapsed-salt-marsh-h2s-test-strip-study.md
nid: 2757
uid: 808

---

# Suggested Experiment for Collapsed Salt Marsh H2S Test Strip Study

by [liz](../profile/liz), [deepwinter](../profile/deepwinter)

July 11, 2012 18:45 | Tags: [hydrogen-sulfide-sensing](../tag/hydrogen-sulfide-sensing), [hydrogen-sulfide](../tag/hydrogen-sulfide), [h2s](../tag/h2s), [parent:hydrogen-sulfide-sensing](../tag/parent:hydrogen-sulfide-sensing)

----

Experimental Objectives:
Measure H2S concentration in a collapsed salt marsh located in the San Francisco bay.

Secondary Objectives:
s1) Explore making test strip canister designs more reusable by comparing results from two different test strip exposure and isolation designs.  A few ideas in a comment here: http://publiclaboratory.org/notes/megan/4-2-2012/container-testing-photopaper-test-strips-2  Right now the best candidate is to use a tight fitting, wide rubber band to cover pre-drilled holes in black plastic canisters.

s2) Test the use of the Rhus system for geo-location test strip and draeger tube placement.

s3) Develop and test custom image processing software, to be installed on a smart phone.

s4) Develop and test automatic correlation of test strip and dreager tub data, using a custom software library deployed on a smart phone.

s5) Visualize data on a map, together with balloon mapping images gathered from the test site.


Experimental Plan:

A location constituting a collapsed salt march shall be selected in the San Francisco bay with the assistance of an expert at a location University (Stanford, Berkeley, or Davis).  Two sets of 12 canisters will be prepared.  Set (a), those provided by Public Labs, will be unchanged.  Set (b) will be made by taking the original canisters provided by Public Labs and pre-drilling 12 quarter inch holes around the base of the canister, and then covering these holes with a tight fitting wide rubber band.  The test strips will be isolated from air while the holes are being drilled, and then returned to the sealed canisters once the rubber fanned is applied.  A set of 12 3' PVC pipes will be obtained, and each canister in set (a) will be attached to the top of one PVC pipe using zip ties and duct tape.  These canisters will be attached upside-down, and a strip of tape will be placed over the lid to ensure it does not fall off.  Each canister will have a unique id number written on its label.

A version of the Rhus software will be configured for the experiment and installed on a smartphone.  This deployment will have a custom field for each datapoint to record it's unique id number.   A corresponding website will also be deployed to display geo-tagged locations as they are recorded.  

At the testing site, the PVC pipes will be arranged in an approximate 3x4 grid with 6' of distance (?) between each instrument.  When placing each pipe, a canister from set (b) will have its rubber band removed and shall be attached to the pipe with this rubber band.  The canister from set (a) will have its lid taken off, and a strip of tape placed over its open end.  After placing the pipe, a photo of the location will be taken with Rhus, and the unique ids of the canisters at this location entered.  Draeger tubes will be placed at some locations, using a methodology still to be decided.  Draeger tub locations will also be recorded with Rhus.  This location and subsequent locations will also be recorded with a dedicated GPS unit, to explore the accuracy of smartphone GPS.

The instruments will be left in their locations for at least 48 hours, and not to exceed 96 hours.  The exact timing of each exposure will be recorded with Rhus as well.

After the exposure time is complete, all instruments will be collected.  At each placement location, the cap of the set (a) canister will be placed back on the tube and it will be removed from the pipe.  The set (b) canister will have it's rubber band placed snuggly back over its pre-drilled holes.  Both canisters are placed in a collection bag for later development.  Collection will be recorded by adding another picture to Rhus, with canister ids.  Since Rhus timestamps every entry, it will also provide the exact exposure time per location.  Draeger tubes will also be collected, and their readings recorded at this time.

The test strips shall be fixed using the method described by Gonzales (http://publiclaboratory.org/notes/sara/5-21-2012/excellent-geoscience-fieldtest-photostrip-h2s-detection) .  After exposure, a photo of the test strip will be taken with a custom plugin to Rhus.  This plugin will have a white balancing capability.  First, a photo of a stock white card will be taken in the current ambient light.  Then, a photo of the of the test strip will be taken against the white card, and this this original image without color correction will be store.  Another copy of the image will be white corrected against the white photo.  Custom digital image processing will then determine a rank value for the test strip by adding values from the R, G, and B channels of each pixel in the photo, and then averaging this value over all pixels.  Ranks will be recorded for both original and white corrected images.  A third set of images will also be processed to rank values, using the manual photoshop eyedropper method described by Gonzales.

Rank values per image will be correlated to draeger tube values to convert ranks to PPM readings.  The following process assumes that photographic paper responds linearly to H2S concentration.  1) Correlate draeger tubes to test strips that were at the same location.  2) Plot a line between these values and use this to interpolate PPM values to all test strip rank values.  This process will performed for all three test strip rank value data sets.

Data for all three sets of rank values for both sets of test strips ( a and b ) will be visualized as a heat map on a balloon map of the area, with heat map color values corresponding to correlated PPMs.  Results will be analyzed and interpreted to evaluate H2S patterns in the area of study and experiment methodology.


Outstanding Questions:
How far apart should instruments in the grid be?  6'?  12'?
Is a grid the right layout?
What is the best placement for Draeger tubes ?
How many draeger tubers per experiment?
Are draeger tube readings recorded in the field?