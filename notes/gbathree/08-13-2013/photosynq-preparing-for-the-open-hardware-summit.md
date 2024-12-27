---
title: "Photosynq - Preparing for the Open Hardware Summit"

tagnames: 'open-hardware, photosynthesis, photosynq, ohs, open-hardware-summit'
author: gbathree
path: /notes/gbathree/08-13-2013/photosynq-preparing-for-the-open-hardware-summit.md
nid: 8997
uid: 53164

cids: 6625,6729,6731

---

![](https://publiclab.org/public/system/images/photos/000/001/125/original/IMG_20130813_144209.jpg)

# Photosynq - Preparing for the Open Hardware Summit

by [gbathree](../../../profile/gbathree) | August 13, 2013 19:18

August 13, 2013 19:18 | Tags: [open-hardware](../tag/open-hardware), [photosynthesis](../tag/photosynthesis), [photosynq](../tag/photosynq), [ohs](../tag/ohs), [open-hardware-summit](../tag/open-hardware-summit)

----

The Open Hardware Summit is coming up on September 6th at MIT, and we will be presenting our first working beta unit...

... if we get it done on time :)

There's so much to do!!! Robert and I are working on the Photosynq device itself - Robert has one iteration of the board finished with lessons learned and are working on the next iteration which we hope to have in next week.  I'm working on creating the case, which is tricky because we need tight tolerances on the location of the detector, LEDs and light guide, yet we also need the ability to 'clamp' a leaf in front of the detector, and (ideally) the whole design should be easy to assemble, and 3d printable and/or laser cutterable (if that's a word).  For hinges, I'm using standard alligator clips for the hinges and it works pretty darn well!  The first design is ugly but basically functional (yes, the board is not populated... we were just using it for layout) - here's some pictures.

Venturit is working to finish the website and database using Ruby on Rails (similar to Spectral Workbench from Public Labs), so we can store, display, and analyze the data through the web.  They're also creating an API to communicate with the app.  They are rocking it out and expect to be done on time.

We handing off a bluetooth enabled prototype to Talia this week, so she can get her app to talk to our device.  We're using Bluesmirf Silver from Sparkfun for the moment, though we'll go with a cheaper bluetooth unit in the long term.  We can already communicate with the device using a smartphone using Blueterm, but that's just a serial communication and doesn't look very pretty.

And finally, we need some good experiments to run for the initial beta and to show off the unit at OHS...  I put down a few ideas from various folks at the wiki under the heading "Educational Modules" - if you've got any other thoughts feel free to send me an email.

If you're going to OHS please stop by and check us out - hope to see you then!