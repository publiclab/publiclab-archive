---
nid: 12052
title: Earth and Sky
path: public/static/notes/cfastie/07-12-2015/earth-and-sky.md
uid: 554
tagnames: kite-aerial-photography,alaska,kap,autokap,kaptery,saturnv,skyshield,half-spherical,response:12032
---

# Earth and Sky

A SkyShield autoKAP controller can instruct a Saturn V KAP rig to take photos in all directions including upwards at about a 45° angle and straight down. Stitching all of these photos together into a panorama can be a challenge because the sky is usually a lot brighter than the ground. With the camera set on an autoexposure mode (I usually use shutter priority), each photo will be properly exposed, sort of.  
.  
[![Camp_480.jpg](https://i.publiclab.org/system/images/photos/000/010/645/medium/Camp_480.jpg)](https://i.publiclab.org/system/images/photos/000/010/645/original/Camp_480.jpg)  
*If the photo includes all sky, the camera will usually do a good job choosing settings for a proper exposure.*  
.   
[![Camp_084.jpg](https://i.publiclab.org/system/images/photos/000/010/646/medium/Camp_084.jpg)](https://i.publiclab.org/system/images/photos/000/010/646/original/Camp_084.jpg)   
*If the photo includes all ground, the camera will usually do a good job choosing settings for a proper exposure. This view is along the terminal moraine of an ice sheet that extended south from the Alaska Range and sat at this position for thousands of years. The lower terrain to the left (north) was covered by ice which deposited glacial till and outwash in front of it. The Denali Highway was built along this moraine in the 1950s (upper right).*  
.  
If the camera is pointed so the frame is filled with either all sky or all ground, the camera can usually select settings for a good exposure. The major exception is when a fast shutter speed is locked in with shutter priority (Tv) and the aperture cannot open enough to let in sufficient light (at the ISO selected). In that case all of the photos of the ground might be underexposed (too dark).  

When the frame includes half sky and half ground, all or part of the photo might be poorly exposed. Typically one will be close enough, but the other will not. If the ground part is underexposed, it will be hard to make a seamless stitch with overlapping photos that are properly exposed.   
.  
[![Camp_665.jpg](https://i.publiclab.org/system/images/photos/000/010/647/medium/Camp_665.jpg)](https://i.publiclab.org/system/images/photos/000/010/647/original/Camp_665.jpg)   
*The camera made a good exposure of the sky, but underexposed the ground. The Alaska Range is in the distance. Everything between here and there was under a glacier 20,000 years ago.*  
.  
[![Camp_511.jpg](https://i.publiclab.org/system/images/photos/000/010/648/medium/Camp_511.jpg)](https://i.publiclab.org/system/images/photos/000/010/648/original/Camp_511.jpg)  
*The camera made an acceptable exposure of the ground, but overexposed the sky. Our campsite (center) is on a mound of gravelly material deposited as the glacier began its retreat.*   
.   
A Saturn V flight I made near my campsite along the Denali Highway illustrates a worst case of this situation. The sky was loaded with handsome clouds which provided plenty of detail for stitching the sky photos with each other. The sky was also very bright, but the ground was not illuminated with much direct sunlight. That made the difference between sky and ground really high. 

The exposure settings I choose (ISO 125, Tv at 1/800 seconds) barely allowed the ground to be properly exposed, and most ground photos were at maximum aperture (f/2) and were still a tad underexposed. It is easy to brighten these (Lightroom, Photoshop, etc.), but then they are very much brighter than the lower half of photos which include both sky and ground. It is also possible to brighten the lower part of those photos, but that requires masking the photo so the sky part is not washed out. 

For the Photosynth panorama embedded here, nine photos of the ground were brightened and eight photos split by the horizon were manually masked so the ground part could be lightened. This worked okay, but there are still exposure anomalies along the horizon. The horizon in this type of panorama stitched by Microsoft ICE is usually messy with stitching offsets, so the exposure problems just add to the messiness.  
.  
<iframe frameborder="0" src="https://photosynth.net/embed.aspx?cid=8ab997ab-2bee-48ea-b33b-9c92f7356e43&delayLoad=true&slideShowPlaying=false" width="800" height="500"></iframe>   
*Viewing the embedded panorama in Google Chrome does not work as well as in all other browsers I have tested. Let me know (comment below) if you have a different experience (or know a workaround).*  
.   
The lesson seems to be that including lots of sky in half-spherical panoramas is a challenge. First, the sky has to have clouds in all directions or the stitching software will not have anything to work with to make matches. Second, if the sky is much brighter than the ground, and especially if the ground is underexposed, some of the photos might require post processing before stitching to equalize the brightness of all the ground portions. 

The cause of this problem is the limited dynamic range of the camera. Nature has a much broader range of brightness than the camera can capture. The camera's range probably decreases as ISO is increased, so raising the ISO from 80 to 125 for this flight might have exacerbated the problem (but the shutter speed would have had to be slower at ISO 80). Bracketing each photo and combining multiple exposures into one high-dynamic-range image is not an option when the camera is swaying from a kite line. Capturing RAW images would maximize the quality of the photos after post-processing, but not reduce the need for it. So there is not an easy solution to this problem. 

Clouds are usually moving, so when the goal is to include the cloudy sky in a panorama, it helps to capture sky photos quickly so the clouds don’t move much and make stitching problematical. That is the strategy of most of the standard modes in the current versions of the SkyShield sketch. The camera pans the entire 360° arc, and then tilts and repeats. Other modes do the tilt positions consecutively and then pan over one position, and these might have application is other situations. 

There are a few beta test units of the Saturn V Rig and assembled SkyShield autoKAP controller [for sale at the KAPtery](http://kaptery.com/product/saturn-v-rig-beta-2). Later this week there might also be kits available of the full release version of the SkyShield (v. 2.3). The first kits of SkyShield 2.3 are reserved for the current beta testers who have posted research notes about their experiences. These will be heavily discounted, especially for those (Pat) who have provided lots of feedback (limited time offer, so get posting!).   

###Flight notes:  

Camera:  

- Model: PowerShot S100
- ISO: 125
- Shutter speed: 1/800 second (Tv)
- Focus: manual on infinity
- Focal length: 24mm (eq.)

SkyShield:

- Version: 2.0 (4-switch DIP)
- Sketch: version 2.05
- Mode: Mode 0 (slower version of mode with 4 tilt angles, 8 pan positions at and above the horizon, 6 below the horizon, and 3 at nadir, 25 photos per cycle)
- Customization: The nadir tilt angle was changed from 20 to 11 so the camera was pointed straight down. The uppermost tilt angle was changed from 127 to 124 because otherwise the Picavet cross was included in some photos.  

Flight:  

- Kite: 9 foot Levitation Delta
- Duration: 37 minutes
- Photos taken: 727