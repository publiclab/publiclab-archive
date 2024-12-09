---
title: 'Set up a Mobius Action Cam for timelapse '
tagnames: infrared, photo-monitoring, infragram, timelapse, mobius-actioncam, mobius, infragram-point-shoot, mobius-action-cam, mini-kite-kit, mini-balloon-kit, activity:timelapse, activity:photo-monitoring, multispectral-imaging, activity:mobius, activity:mini-balloon-kit, activity:mini-kite-kit, activity:mobius-action-cam, activity:infragram-point-shoot, near-infrared-photography
author: warren
path: /notes/warren/10-23-2017/set-up-a-mobius-action-cam-for-timelapse.md
nid: 15083
uid: 1

---

# Set up a Mobius Action Cam for timelapse 

by [warren](../profile/warren) October 23, 2017 18:08

October 23, 2017 18:08 | Tags: [infrared](../tag/infrared), [photo-monitoring](../tag/photo-monitoring), [infragram](../tag/infragram), [timelapse](../tag/timelapse), [mobius-actioncam](../tag/mobius-actioncam), [mobius](../tag/mobius), [infragram-point-shoot](../tag/infragram-point-shoot), [mobius-action-cam](../tag/mobius-action-cam), [mini-kite-kit](../tag/mini-kite-kit), [mini-balloon-kit](../tag/mini-balloon-kit), [activity:timelapse](../tag/activity:timelapse), [activity:photo-monitoring](../tag/activity:photo-monitoring), [multispectral-imaging](../tag/multispectral-imaging), [activity:mobius](../tag/activity:mobius), [activity:mini-balloon-kit](../tag/activity:mini-balloon-kit), [activity:mini-kite-kit](../tag/activity:mini-kite-kit), [activity:mobius-action-cam](../tag/activity:mobius-action-cam), [activity:infragram-point-shoot](../tag/activity:infragram-point-shoot), [near-infrared-photography](../tag/near-infrared-photography)

----

The Mobius Action Cam is used in the [Infragram Point & Shoot](/wiki/infragram-point-shoot), and also for lightweight aerial photography such as in the [Mini Kite Kit](/wiki/mini-kite-kit) and [Mini Balloon Kit](/wiki/mini-kite-kit). It can also be used for [timelapse](/wiki/timelapse) [photo monitoring](/wiki/photo-monitoring) of any kind; this activity shows how to set it up. These instructions are based on a post by @abdul.

### Software

Manually setting the config file is not hard, but there are now also programs to guide you through the process automatically, (thanks to @cfastie and @patcoyle for [finding these](https://publiclab.org/questions/patcoyle/11-08-2014/initial-results-and-timelapse-mode-issue-pl-mobius-infragram-point-and-shoot#answer-0-comment-10723)!)

[https://www.mobius-actioncam.com/downloads-info/](https://www.mobius-actioncam.com/downloads-info/)

If you're going to do it yourself manually, read on!

---------

To upload a new config file (SYSCFG.TXT) onto the Mobius camera, [follow the instructions here](https://publiclab.org/notes/warren/10-23-2017/change-the-white-balance-or-other-configuration-on-a-mobius-camera).

---------

To set the camera to Timelapse mode, you'll need to follow the above instructions for uploading a custom config file; you can use this one to have a 2-second timelapse, or tweak the `Set Time Lapse Shooting` line for an interval you prefer: [__ SYSCFG.TXT](https://i.publiclab.org/system/images/photos/000/005/225/original/SYSCFG.TXT)

To start timelapse mode:

1. Turn on the camera
2. Press **M** twice to enter Photo Mode
3. Press the shutter button (__) to start the timer, and look for the blinking red light:

[![timelapse.png](https://i.publiclab.org/system/images/photos/000/005/384/medium/timelapse.png)](https://i.publiclab.org/system/images/photos/000/005/384/original/timelapse.png)

_(Artwork based on: [http://publiclab.org/notes/mathew/05-10-2014/illustrating-infragram-point-shoot-instructions](http://publiclab.org/notes/mathew/05-10-2014/illustrating-infragram-point-shoot-instructions))_