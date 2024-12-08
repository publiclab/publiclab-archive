---
title: Proofmode + Open Camera
tagnames: photography, spain, android, reporting, photo-monitoring, metadata, eu, visual-monitoring, site-survey, activity:site-survey, violation-reporting, image-gathering, verifcation, pgp, openpgp, sha256, guardian-project, proofmode, spill-reporting
author: imvec
path: /notes/imvec/02-20-2018/proofmode-open-camera.md
nid: 15786
uid: 495038

---

# Proofmode + Open Camera

by [imvec](../profile/imvec) February 20, 2018 12:24

February 20, 2018 12:24 | Tags: [photography](../tag/photography), [spain](../tag/spain), [android](../tag/android), [reporting](../tag/reporting), [photo-monitoring](../tag/photo-monitoring), [metadata](../tag/metadata), [eu](../tag/eu), [visual-monitoring](../tag/visual-monitoring), [site-survey](../tag/site-survey), [activity:site-survey](../tag/activity:site-survey), [violation-reporting](../tag/violation-reporting), [image-gathering](../tag/image-gathering), [verifcation](../tag/verifcation), [pgp](../tag/pgp), [openpgp](../tag/openpgp), [sha256](../tag/sha256), [guardian-project](../tag/guardian-project), [proofmode](../tag/proofmode), [spill-reporting](../tag/spill-reporting)

###What we want to do
Add verifiability to the pictures and videos obtained in the course of an environmental investigation using mobile phones and the combination of two apps: Proofmode and Open Camera

###Proofmode
[Guardian Project](https://guardianproject.info) and [Witness](https://witness.org) have developed Proofmode, an Android only application to increase the verifiability of the images obtained using mobile phones.
On the technical front, what the app is doing is automatically generating an OpenPGP key for this installed instance of the app itself, and using that to automatically sign all photos and videos at time of capture. A sha256 hash is also generated, and combined with a snapshot of all available device sensor data, such as GPS location, wifi and mobile networks, altitude,  device language, hardware type, and more. This is also signed, and stored with the media. All of this happens with no noticeable impact on battery life or performance, every time the user takes a photo or video.

- [**Download**](https://play.google.com/store/apps/details?id=org.witness.proofmode)

###Open Camera
Open Cámera is an Android only app developed by Mark Harman that has some technical features that help us to increase the verifiability of our images. 
The app can make use of the Android2API, enabling a mobile phone to capture images in RAW format. The RAW/DNG format is considered nowadays the "negative" of a digital picture. The interesting thing is that RAW format pictures are not modifiable. Every modification we make to the file using a RAW developing software like Darktable, UFraw or Lightroom is registered in a .xml sidecar file. The result is always having the original shoot.
Toghether with this feature you can shoot jpg+raw combined pictures, geotag, stamp... a great camera for your mobile phone, free and open source.

- [**Download on F-droid**](https://f-droid.org/packages/net.sourceforge.opencamera)
- [**Download on Gplay**](https://play.google.com/store/apps/details?id=net.sourceforge.opencamera&hl=en)

###Combining both apps
So, using open camera to take RAW format pictures and having the Proofmode running on the background gives us RAW format pictures, signed with an OpenPGP key, with it's bits counted with a sha256 hash and all our mobile phone's sensors data added to the pictures as metadata.
This is not the final solution to the question of verifiability but certainly adds some layers of it to our investigations.

###Next Steps
Make a step by step guide of the Open Camera features.