---
title: 'NDVI with a key chain camera to use with a mini-drone - Second steps'
tagnames: ndvi, ir, plugin, infragram, camera, photomonitoring, index, sandox, with
author: azaelb
path: /notes/azaelb/04-27-2015/ndvi-with-a-key-chain-camera-to-use-with-a-mini-drone-second-steps.md
nid: 11772
uid: 319070

---

![](https://publiclab.org/public/system/images/photos/000/009/707/original/Screenshot_RB.jpg)

# NDVI with a key chain camera to use with a mini-drone - Second steps

by [azaelb](../profile/azaelb) April 27, 2015 04:24

April 27, 2015 04:24 | Tags: [ndvi](../tag/ndvi), [ir](../tag/ir), [plugin](../tag/plugin), [infragram](../tag/infragram), [camera](../tag/camera), [photomonitoring](../tag/photomonitoring), [index](../tag/index), [sandox](../tag/sandox), [with](../tag/with)

----

In a former note titled [NDVI with a key chain camera to use with a mini-drone - First steps](http://publiclab.org/notes/azaelb/04-11-2015/ndvi-with-a-key-chain-camera-from-a-mini-drone-first-steps) we discussed the modification of a mini 1080p camera to take IR pictures using either the Blue filter or the Red filter from the DYI Plan Analysis Filter Kit.
We took the two pictures above, the left one with the Red filter and the right one with the Blue filter.
Next step was to process the images for NDVI color indexed images. We tried to process them with the Infragram Sandbox and with the Fiji/ImageJ with the PhotoMonitoring plugin. Here are the results.

##**Analysis with Infragram Sandbox**

We proceeded to upload the images above to Infragram Sandbox, infragram.org, to see what the NDVI images will look like.
First we tried to understand how the Sandbox work, as there are two versions: Standard and Legacy. _Legacy_ version indicates that works with infrablue filters, while the _Standard_ allows to work with both, Blue or Red filters. There is a video on the _Legacy_ version but no direct instructions on how to use the _Standard_ (perhaps someone can fill in here).
The Legacy version gave us in the first result a color index scale. The Standard version does not seem to give us a color index scale.
Using the Standard version and letting the default setup, this is the result for the IR image taken with the Red filter:

[![DefaultRed.jpg](https://i.publiclab.org/system/images/photos/000/009/710/medium/DefaultRed.jpg)](https://i.publiclab.org/system/images/photos/000/009/710/original/DefaultRed.jpg)

Under same conditions this was the result for the IR image taken with Blue filter:
[![DefaultBlue.jpg](https://i.publiclab.org/system/images/photos/000/009/711/medium/DefaultBlue.jpg)](https://i.publiclab.org/system/images/photos/000/009/711/original/DefaultBlue.jpg)

Changing the setup to HSV and writing in the boxes 1 and 5 respectively, the result for each case was:
[![DefaultHSV1-5.jpg](https://i.publiclab.org/system/images/photos/000/009/712/medium/DefaultHSV1-5.jpg)](https://i.publiclab.org/system/images/photos/000/009/712/original/DefaultHSV1-5.jpg)

[![DefaultHSV1-5.jpg](https://i.publiclab.org/system/images/photos/000/009/713/medium/DefaultHSV1-5.jpg)](https://i.publiclab.org/system/images/photos/000/009/713/original/DefaultHSV1-5.jpg)

Using the last setting was possible to distinguish the wall and the street with different index than the grass at the center and bushes and trees to the right and the top left.

##**Analysis with Fiji/ImageJ and PhotoMonitoring Plugin**

Using the Fiji/ImageJ and PhotoMonitoring Plugin with the images above in the default mode gave us a result not quite that of Infragram Sandbox.

[![FijiDefaultRed.jpg](https://i.publiclab.org/system/images/photos/000/009/714/medium/FijiDefaultRed.jpg)](https://i.publiclab.org/system/images/photos/000/009/714/original/FijiDefaultRed.jpg)

[![FijiDefaultBlue.jpg](https://i.publiclab.org/system/images/photos/000/009/715/medium/FijiDefaultBlue.jpg)](https://i.publiclab.org/system/images/photos/000/009/715/original/FijiDefaultBlue.jpg)

##**Brief Discussion**

Features seen in Infragram Sandbox results are not quite distinguished as in the results found using Fiji/PhotoMonitoring, although one may be to infer the difference in response from the wall to the left and the grass and bushes to the center and right respectively. There is another roof and wall to the right's end, too. Anyway, it seems that the many options in Fiji/PhotoMonitoring allows to bring more details of the subject.  In our case the subject -a close courtyard- is too close to infer difference features since most of the vegetation is similar in condition.

It seems from first view that the IR camera with the Red filter seems to bring up more detailed differences in the field of view corresponding to the presence or not of vegetation.

We will continue to review all literature here about experiences on Infagram Sandbox and with Fiji/PhotoMonitoring Plugin.

Comments regarding our Second Steps are welcome, especially in the appropriate use of Infragram Sandbox in the Standard mode and of Fiji with PhotoMonitoring plugin. 

We really want to understand the tools and their results and how can we really infer vegetation health information.  We will do more studies now using the mini drone being flown over a wide field of about two hectares, to see what results we can come up.

- azaelb




