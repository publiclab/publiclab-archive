---
title: '3-camera housing photos and test KAP session'
tagnames: balloon-telemetry-kit, telemetry, camera-triggering, iphone-intervalometer, photo-rig
author: patcoyle
path: /notes/patcoyle/3-31-2012/3-camera-housing-photos-and-test-kap-session.md
nid: 1588
uid: 77

---

# 3-camera housing photos and test KAP session

by [patcoyle](../profile/patcoyle) April 01, 2012 03:27

April 01, 2012 03:27 | Tags: [balloon-telemetry-kit](../tag/balloon-telemetry-kit), [telemetry](../tag/telemetry), [camera-triggering](../tag/camera-triggering), [iphone-intervalometer](../tag/iphone-intervalometer), [photo-rig](../tag/photo-rig)

----

I've wanted to try to fly a smart phone with gps and other sensor data acquisition capability along with a visible and IR camera to be able to post-process the gps and other sensor data to  match it to the images taken with the other cameras by time-stamp. 

<img src="https://www.flickr.com/photos/coylepdc/6887621342/" alt="3-camera housing" />

The rig and cameras weighs about 700 grams.

Photos of a juice and water bottle housing, cameras and first test KAP flight are at: 
https://www.flickr.com/photos/coylepdc/sets/72157629712202091/

On this quick test, I didn't activate the Canon A490 IR (modified by Jeff Warren) or Canon A1200 ($59.99 at Fry's recently). Just flew them in place to see how overall rig behaved. I started Sensor Data on an older iPhone and tried to use Intercam app to take photos, but didn't get it going properly. xSensor app also captures sensor data (free and a paid version are available).

On this IPhone 3, running iOS 4.2.1, Sensor Data captured: Timestamp, Accel_X, Accel_Y, Accel_Z, Lat, Long	LocAccuracy, Course, Speed and Altitude. 

My iPhone4s also captures Roll, Pitch, Yaw, GravAcc_X, GravAcc_Y, GravAcc_Z, UserAcc_X, UserAcc_Y, UserAcc_Z, RotRate_X, RotRate_Y, RotRate_Z, MagHeading, TrueHeading, HeadingAccuracy.

I don't know what all of this could be used for, but the Roll, Pitch, Yaw and gps data could be post-processed and and matched by time-stamp to the images taken with the other cameras. (Since I first posted this, I've checked out iPhone intervalometer Apps like Intercam and Fototimer which don't capture gps info in the photos, and CameraSharp, which does. However, I've learned more about iPhone iOS constraints on what can run in the background and it appears the sensor data apps will not, at least at first pass through exchanges with developers and looking at the developer guides. However some gps apps which provide location data to user continuously are allowed to run in the background.)

Winds at the surface were 15mph  with gusts, so needed to add second fuzzy tail to get Sutton FF 16 to stabilize.

Initial results were good, the maximum altitude recorded was 196.564884 meters or about 645 feet.Google Earth shows ground elevation there at about 530 feet, for max flight above ground of about 115 feet (37.668814, -121.75666).

This approach should enable use of the smart phones along with a pair of cameras to get the gps data and, with newer phones, yaw, pitch and roll that sites like Pix4D can exploit in their processing.