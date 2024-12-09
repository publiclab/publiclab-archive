---
title: 'Change the white balance (or other configuration) on a Mobius camera'
tagnames: ndvi, infrared, white-balance, infragram, mobius-actioncam, mobius, infragram-point-shoot, mobius-action-cam, multispectral-imaging, activity:mobius, activity:mobius-action-cam, activity:infragram-point-shoot, near-infrared-photography, infragram-white-balance, activity:white-balance
author: warren
path: /notes/warren/10-23-2017/change-the-white-balance-or-other-configuration-on-a-mobius-camera.md
nid: 15082
uid: 1

---

# Change the white balance (or other configuration) on a Mobius camera

by [warren](../profile/warren) October 23, 2017 18:03

October 23, 2017 18:03 | Tags: [ndvi](../tag/ndvi), [infrared](../tag/infrared), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [mobius-actioncam](../tag/mobius-actioncam), [mobius](../tag/mobius), [infragram-point-shoot](../tag/infragram-point-shoot), [mobius-action-cam](../tag/mobius-action-cam), [multispectral-imaging](../tag/multispectral-imaging), [activity:mobius](../tag/activity:mobius), [activity:mobius-action-cam](../tag/activity:mobius-action-cam), [activity:infragram-point-shoot](../tag/activity:infragram-point-shoot), [near-infrared-photography](../tag/near-infrared-photography), [infragram-white-balance](../tag/infragram-white-balance), [activity:white-balance](../tag/activity:white-balance)

----

This is part of the documentation of the [Infragram Point & Shoot](/wiki/infragram-point-shoot) but also applies to any Mobius Action Cam settings you want to change.

### White balance

One step you need to take to set up this camera is to configure the **white balance**; otherwise, your images will be flooded with infrared and will look pinkish -- and the NDVI post-processing steps (see [NDVI](/wiki/ndvi)) and https://publiclab.org/notes/warren/10-20-2017/getting-started-with-infrared-photography-on-infragram-orgthis activity won't work.

Images should look roughly like the "GOOD" example below -- vegetation should appear generally **pastel blue**. An incorrectly white-balanced image such as the "BAD" example below may appear with an overall reddish tint. This means the camera probably has not accepted your config file, possibly due to misformatting or incorrect uploading.

[![good-bad.png](https://i.publiclab.org/system/images/photos/000/005/383/medium/good-bad.png)](https://i.publiclab.org/system/images/photos/000/005/383/original/good-bad.png)

### Software

Manually setting the config file is not hard, but there are now also programs to guide you through the process automatically, (thanks to @cfastie and @patcoyle for [finding these](https://publiclab.org/questions/patcoyle/11-08-2014/initial-results-and-timelapse-mode-issue-pl-mobius-infragram-point-and-shoot#answer-0-comment-10723)!)

[https://www.mobius-actioncam.com/downloads-info/](https://www.mobius-actioncam.com/downloads-info/)

If you're going to do it yourself manually, read on!

---------

### Installing config file

If your camera did not ship with a config file or you are using a new SD card, **follow these steps to get your Infragram Point & Shoot to take properly white-balanced images**, necessary for post processing at [Infragram.org](http://infragram.org). This is also relevant for anyone who has a Mobius Action Cam and wants to script or customize its settings.

The config file may also be used to set up **Timelapse Mode** -- see the [Infragram Point & Shoot activities for timelapse setup](/wiki/infragram-point-shoot#Activities).

Note: The white balance setting in the config file should be "7" but occasionally we've found that some cameras require an "8" -- if you have trouble, please leave a comment here or [post a question](/wiki/infragram-point-shoot#Questions).

![modes](https://i.publiclab.org/system/images/photos/000/005/381/large/modes.png)

_Artwork based on [this note](http://publiclab.org/notes/mathew/05-10-2014/illustrating-infragram-point-shoot-instructions) by @mathew_

### Config steps

1. GENERATE A FRESH CONFIG FILE FROM YOUR CAMERA: turn the camera on with the "Power" button _while_ also pressing "Mode" until the red light blinks 3 times (5-6 secons) to generate a config
2. DOWNLOAD IT OFF THE CAMERA: plug it in via USB and wait for the disk to appear
3. MODIFY OR REPLACE IT: replace the generated config file with this one in the home directory: [__ SYSCFG.TXT](https://i.publiclab.org/system/images/photos/000/005/385/original/SYSCFG.TXT) or [__ SYSCFG.TXT](https://i.publiclab.org/system/images/photos/000/005/225/original/SYSCFG.TXT) for a 2-second timelapse mode.
4. UPLOAD IT TO THE CAMERA: repeat step 1; turn on the camera while pressing "Mode" (M) button and hold for a few seconds until the red light blinks 3 times.

---------

### Different white balance settings

There's a [good question](https://publiclab.org/questions/abdul/10-28-2016/what-is-the-ideal-white-balance-for-the-infragam-point-and-shoot) posted by @abdul on what settings are the best for doing NDVI ( #ndvi) and while the above config file should work, there may be better settings to use; please post feedback in the that question and we can update the config file here accordingly if we find a clear improvement in a different configuration!

---------

### Manually changing the config file

At step 3, you can alternatively, you can also edit the file yourself.

If you choose to edit it yourself, you can do so first by changing the default mode of the camera at the top of the document. Where the text reads `Default Mode =[0]` change the 0 for a 2 -- Mode 2 is picture mode.

Next, scroll down to the paragraph that begins, "Enable Manual AE Lock or AWB Lock." In this paragraph you will find a line that begins `White Balance =[0]` and again, you can change the white balance to 5, 6, or 7, which are all custom white balance 1, 2 and 3 respectively. Lower down, you can see the area where you set the custom white balance by changing the gain values for red, green, and blue.

Community members have found ([discuss this here](https://publiclab.org/questions/abdul/10-28-2016/what-is-the-ideal-white-balance-for-the-infragam-point-and-shoot)) that values of about `250` for red gain, about `500` for green gain, and about `900` for blue gain are ideal.

Set the gain values in your custom white balance, and don't forget to set the white balance to the your new custom value.

From here, you can save your work and continue!

Place the SD card back in the camera and this time hold BOTH the power button and the mode button until the LED flashes red. You will have to hold the two buttons for notably longer than you had to hold the power button last time, as long as 7 seconds, before the LED begins to flash red.

These files are not extremely complicated and can be manipulated by you at any time. If you find a configuration that is more optimal than ours, please [post a response here](https://publiclab.org/questions/abdul/10-28-2016/what-is-the-ideal-white-balance-for-the-infragam-point-and-shoot). We rely on community members like you to help improve these tools!