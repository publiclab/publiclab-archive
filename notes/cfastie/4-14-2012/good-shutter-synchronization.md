---
title: Good shutter synchronization
tagnames: balloon-mapping, near-infrared-camera, kite-mapping, triggering, chdk, synchrony
author: cfastie
path: /notes/cfastie/4-14-2012/good-shutter-synchronization.md
nid: 1676
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/546/original/timtstb-20120410-119-48.jpg)

# Good shutter synchronization

by [cfastie](../profile/cfastie) April 14, 2012 15:16

April 14, 2012 15:16 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [kite-mapping](../tag/kite-mapping), [triggering](../tag/triggering), [chdk](../tag/chdk), [synchrony](../tag/synchrony)

----

I found a <a href="http://download.cnet.com/XNote-Timer/3000-2350_4-10912167.html?tag=mncol;2">stopwatch program with two decimal places</a> and tried the fancy synchronizing functions in CHDK.  These functions worked great and allowed the shutter releases of the two cameras to be synchronized within about 1/100 of a second.  For making paired visible/IR air photos, this should be good enough!

In the CHDK menu, under Miscellaneous Stuff/Remote Parameters, I turned on <strong>Enable Remote</strong>, <strong>Enable Synchable Remote</strong>, and <strong>Enable Synch</strong>.  Everything else was as described in an <a href="http://publiclaboratory.org/notes/cfastie/4-10-2012/almost-synchronous-shutters">earlier note</a> except no script was running on the camera.  In addition, I have turned off “Review” in the camera menu so the photos do not display on the LCD as they are taken (this can interfere with scripts or very short intervals, but may not be critical in this case). 
 
The AuRiCo controller was set on a five second interval, which resulted in photos being taken every 10 seconds.  This is apparently because the synching feature of CHDK uses the first signal to get ready to take the photo (focus, exposure, anything other auto stuff, etc) and then takes the photo on the second signal.  This approach produces very good synchronization.  In this case it required that the focus and exposure be locked five seconds before the photos were taken.  This is not ideal, but most of the time scene brightness and altitude of aerial photos will not change fast enough to make that a problem. Ideally, the timer would have two intervals, e.g., after 8 seconds the camera gets ready, then 2 seconds later it shoots.  Is it possible to set the 555 timer device that Jeffrey designed to do that?
