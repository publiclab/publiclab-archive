---
title: "Public Lab NorCal Meetup Fort Mason San Francisco CA"\ntagnames: 'near-infrared-camera, kite-mapping, ndvi, dual-camera, uav, kap, norcal, event, replication:14022'
author: patcoyle
path: /notes/patcoyle/5-6-2013/public-lab-norcal-meetup-fort-mason-san-francisco-ca-0.md
nid: 7266
uid: 77

---

![](https://publiclab.org/sites/default/files/P1070627.JPG)

# Public Lab NorCal Meetup Fort Mason San Francisco CA

by [patcoyle](../profile/patcoyle) | May 07, 2013 01:22

May 07, 2013 01:22 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [kite-mapping](../tag/kite-mapping), [ndvi](../tag/ndvi), [dual-camera](../tag/dual-camera), [uav](../tag/uav), [kap](../tag/kap), [norcal](../tag/norcal), [event](../tag/event), [replication:14022](../tag/replication:14022)

----

Stewart Long suggested we meet in the parking lot in front of the hostel at Fort Mason as we did last time, 37.805285 -122.427918  MacArthur Ave, Golden Gate National Recreation Area, San Francisco, CA 94109.

We settled on 10-10:30. There is space around that area to set up gear. We did two mapping scenarios; 1) Visible and NIR imaging of community garden; 2) We built from the flight that we did last time and mapped  towards the Embarcadero from this meeting spot. Last time we mapped to the west towards the Presidio. 

Stewart got a pretty nice set of fairly low altitude (most under 70 m) visible and nir images. Jeff  Warren had suggested we try to fly over an ag site to be able to get a mutispectral example, perhaps for the planned R-Pi dual camera Kickstarter. 

Stewart put the images at:
http://archive.publiclaboratory.org/california/2013-05-04-california-san-francisco-fort-mason-community-garden/raw/

I had trouble with the visible zip file, but found and used this as workaround:
http://www.downthemall.net/howto/features/

I looked at the EXIF data (used BR's EXIFextractor on Windows) and the images and determined where the images were synched (412 images in both cases). The interval stayed close to the nominal 5 seconds the <a href="http://publiclaboratory.org/notes/patcoyle/1-30-2013/chdk-usb-remote-shutter-digispark-sketch">Digispark Arduino </a>is programmed to wait after two short 100 msec pulses.I haven't checked the CHDK settings on the A1200s and documented them to see if they "fix" the trouble I've had with synching.

However, I have not been able to get Ned Horning's ImageJ tool to run on Windows or Macs for a while. Complaints about version of Java, etc. But I have not had the cycles to dig into it. So, Chris Fastie ran it on the one of the image pairs in Stewart's visible map and output NDVI and NRG images of the community garden for an interesting result and nice example.The images are not perfectly aligned, but these registered. ( The A1200s flew in <a href="http://publiclaboratory.org/notes/patcoyle/2-23-2013/prototype-juice-bottle-bottom-dual-camera-rig">juice bottle-bottom dual rig </a>and could have benefited from more care in aligning them).

<a href="https://mapknitter.org/map/search?q=2013-05-04-california-san-francisco-fort-mason">Stewart's visible and NIR maps of the community garden, NDVI and NRG maps processed by Chris Fastie, using Ned Horning's ImageJ tool, and a quick ICE stitch of the other flight</a>

Pat Coyle worked on the <a href="https://mapknitter.org/map/search?q=fort+mason">imagery from the last flight</a> 

Here is <a href="https://www.flickr.com/photos/coylepdc/8707790645/">one of several high altitude images</a> that include the community garden. The SX260HS got over 900 before battery ran out.

<a href="http://flic.kr/s/aHsjEZ7fdm">Ground-based photos</a> 

<a href="https://www.youtube.com/playlist?list=PL7StLcBQy0_cYuTAxMXJi4gt9mtRUoDvR">playlist of videos</a> 



