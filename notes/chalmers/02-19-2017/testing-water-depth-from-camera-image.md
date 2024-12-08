---
title: Testing - water depth from camera image
tagnames: stormwater, seeks:replications, activity:timelapse, activity:stormwater, activity:site-survey
author: chalmers
path: /notes/chalmers/02-19-2017/testing-water-depth-from-camera-image.md
nid: 13942
uid: 503143

---

# Testing - water depth from camera image

by [chalmers](../profile/chalmers) February 19, 2017 18:42

February 19, 2017 18:42 | Tags: [stormwater](../tag/stormwater), [seeks:replications](../tag/seeks:replications), [activity:timelapse](../tag/activity:timelapse), [activity:stormwater](../tag/activity:stormwater), [activity:site-survey](../tag/activity:site-survey)

Introduction summary:

Is it be possible to derive the water depth using images from cameras? One potential source for  camera images might be security cameras. The ProjectNOLA security network includes over 1300 high definition security cameras. An ideal solution would be to have image processing software running on a water-depth monitoring computer that would be hosted at the ProjectNOLA site for privacy and security reasons. No effort has been taken to contact ProjectNOLA as this is only a proof-of-concept idea. The computer would periodically determine the water depth based on an image processing comparison between a newly captured image and a stored dry day reference image. The water elevation values would be collected in a database and replicated as a service for other uses.


Proof-of-concept test:

1. Produce a scale for deployment within a public street view.
2. Setup a camera for acquiring an image of the scale.
3. Capture a dry weather condition image for a base reference.
4. Capture a number of wet condition images for comparison.
5. Compare each of wet condition images with the base reference image to derive water-depth.


1. The following scale was printed and temporarily attached vertically to the curb across the street within the cameras view (not accurate scale or format on this PublicLab post):
| | | | | | |
0123456

The idea was to use an Optical Character Reconition font, in this case OCR-A font size 96 point at roughly 1 inch spacing and simply read and identify the lowest number as in the following examples:


[![scaleObstruction.png](https://publiclab.org/system/images/photos/000/019/597/large/scaleObstruction.png)](https://publiclab.org/system/images/photos/000/019/597/original/scaleObstruction.png)

2. For a test run during the storm on 7Feb2017 an old GoPro Hero2 was setup in the window approximately 57 feet across from the scale.

3. At 10:02am a dry reference photo was captured.

4. At 10:42am the first wet street was captured followed by a number of others as the rain continued. During this period a tornado warning alert was issued so things were erratic as far as the capture cycle was concerned.

5. Compare reference photo with wet captured photos. This was when the realization that the resolution of the camera was inadequate for the distance between the camera and the scale. The image was pixelated to the point were character recognition would not be possible as seen in the following:

[![carScale.png](https://publiclab.org/system/images/photos/000/019/598/large/carScale.png)](https://publiclab.org/system/images/photos/000/019/598/original/carScale.png)


[![wetDryImage.png](https://publiclab.org/system/images/photos/000/019/599/large/wetDryImage.png)](https://publiclab.org/system/images/photos/000/019/599/original/wetDryImage.png)



From the above enlarged montage you can see that the original printed scale is obscured by the rain water. Roughly one quarter of the scale missing gives a water-depth of approximately 1.6 inches.

Conclusion:

It seems likely that a scheme could be devised to collect water-depth from camera images. There may be issues with low light conditions. Someone skilled in current image processing methods should be able to develop a process to collect reasonably accurate water-depths. By using know object sizes within the view frame it is possible that a number of reference marker points could be set in the reference image. Setting up this way would eliminate the need for a site visit to place a reference scale object. For a sea-level offset it would be necessary to set a surveyed reference point within the cameras view.
