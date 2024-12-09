---
title: 'Video Infragram'
tagnames: near-infrared-camera, infrared, infragram, question:infragram, answered, question:infrared, n, question:multispectral-imaging, multispectral-imaging, question:general, first-time-poster
author: jfd
path: /notes/jfd/12-14-2016/video-infragram.md
nid: 13783
uid: 499882

---

# Video Infragram

by [jfd](../profile/jfd) December 14, 2016 08:37

December 14, 2016 08:37 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [infrared](../tag/infrared), [infragram](../tag/infragram), [question:infragram](../tag/question:infragram), [answered](../tag/answered), [question:infrared](../tag/question:infrared), [n](../tag/n), [question:multispectral-imaging](../tag/question:multispectral-imaging), [multispectral-imaging](../tag/multispectral-imaging), [question:general](../tag/question:general), [first-time-poster](../tag/first-time-poster)

----

### C implementation of Infragram for realtime image processing
We would like to process images in realtime - e.g. at least a 30FPS framerate at HD resolutions. I'm looking for a C implementation of Infragram which could run with some DSP modifications on a 1Ghz+ microprocessor. Worst case, I plan to simply port the JS to C if that has not been done already. 

###Background story

I've developed a camera system based on Raspberry Pi which we are using for aerial and atmospheric videography and research using experimental rockets and drones. It's basically running raspivid and audio capture for offline muxing into MP4. 
No big deal, other than the flexibility to develop custom algorithms and now that the base HW setup and SW load has been tested it's a good baseline.

Using a Pi-Zero camera system is about $5 (Pi) +$15 (Cam) +$5 (Lipo) +$5 (PiZero Lipo) + $5 (SD-Card 16MB). At $30 it is cheaper than the Mobius camera and allows a much more flexible firmware to be developed. 

I've recently modified this system with a 5Ghz RF Transmitter for use in drones or live telemetry and plan to build a modified camera sensor to conduct agricultural research in Central Valley CA. 

Has anyone already done a C implementation? Happy to share any of our findings and/or port of the same. 

For more info see here:
https://www.raspberrypi.org/blog/rocket-man/
http://realflightsystems.com/wordpress/?page_id=722

Thank you and best regards
-James

 



