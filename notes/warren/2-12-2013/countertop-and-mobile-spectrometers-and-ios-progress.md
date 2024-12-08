---
title: Countertop and Mobile Spectrometers and iOS progress
tagnames: spectrometer, kickstarter, dsk, ios, mobile, mobile-spectrometer, backpack
author: warren
path: /notes/warren/2-12-2013/countertop-and-mobile-spectrometers-and-ios-progress.md
nid: 5962
uid: 1

---

# Countertop and Mobile Spectrometers and iOS progress

by [warren](../profile/warren) February 12, 2013 22:45

February 12, 2013 22:45 | Tags: [spectrometer](../tag/spectrometer), [kickstarter](../tag/kickstarter), [dsk](../tag/dsk), [ios](../tag/ios), [mobile](../tag/mobile), [mobile-spectrometer](../tag/mobile-spectrometer), [backpack](../tag/backpack)

[Reposted from Kickstarter](http://www.kickstarter.com/projects/jywarren/public-lab-diy-spectrometry-kit/posts/404240)

February is here, and soon so will the last few rewards! I know all of you who haven't gotten your rewards are eager to hear an update, so here goes:

###Countertop Spectrometers

I've been working with Cort from Somerville to source and spec these all out and we believe we are on schedule to have them assembled and shipped by the end of February (knock on wood). We are working hard to be sure that they are durable, precise, and nice to look at and use. [You can see some of our prototypes here.](http://publiclaboratory.org/notes/cbreuer/2-2-2013/prototype-countertop-spectrometer-builtworks)

<img src="https://farm9.staticflickr.com/8186/8430078745_60cfb80937.jpg" />

###Backpack, or Mobile Spectrometers

Brad Dudenhoffer and I have been working together on the injection moldable "backpack spectrometer" for your smartphones. We're now calling it the "Mobile Spectrometer" and progress has been fast and exciting. Below you can see a 3d printed version which we made on Shapeways.com (for ~$50 -- we'll be releasing it soon too for purchase on Shapeways) and as you can see it looks gorgeous. Very Star Trek! Brad has been flexing his 3D modeling skills to make it injection moldable and we are optimistic about the timeline. Read more about Brad's work -- and get involved in the design process -- [at his recent post on the Public Lab site](http://publiclaboratory.org/notes/braddudenhoffer/2-11-2013/evolution-plots-smartphone-spectrometer-0).

We will post more as soon as we know details but we'll be working with Protomold.com.


<a href="https://www.flickr.com/photos/jeffreywarren/8446841043/" title="3D printed spectrometer attachment by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8079/8446841043_cc53a7c999.jpg" width="500" height="375" alt="3D printed spectrometer attachment"></a>

<img width="500" src="https://lh4.googleusercontent.com/-CywQk-ahe0c/URcl70BP_GI/AAAAAAAABeU/L8HY7u6-eKk/s1368/PLOTS_mold_130209.png" />


###Steampunk spectrometers & iOS update

Photos coming soon of the steampunk specs (we found an imaging chamber that reminds us of Iron Man... or is it Wild Wild West?) but we know you're also eager to hear about the iOS native port of the software. Using PhoneGap/Apache Cordova and Adobe's PhoneGap Build, we've released the very first (and decidedly NONFUNCTIONAL) [test build of our iOS/Android native app](https://build.phonegap.com/apps/298136/share) (iOS only works on registered devices, as per Apple's rules). Our goal is to release a still-photo version first, followed later by a live video version, which will involve some lower-level Objective C coding.

If you are interested in collaborating on the iOS build, which is open source, please get in touch! Specifically we need to begin accessing the live video feed without queueing the video "widget" -- a challenge on iOS. Source code is currently here:

https://github.com/jywarren/spectral-workbench-mobile/

Please post here or to [the spectrometry mailing list](https://groups.google.com/group/plots-spectrometry) with questions!