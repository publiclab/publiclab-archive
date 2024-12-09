---
title: Infrafilters
tagnames: near-infrared-camera, nir, vermont, photoshop, infragram, rosco, infrablue, infragram-filters
author: cfastie
path: /notes/cfastie/05-27-2013/infrafilters.md
nid: 7933
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/416/original/WheatNBG.jpg)

# Infrafilters

by [cfastie](../profile/cfastie) May 27, 2013 20:03

May 27, 2013 20:03 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nir](../tag/nir), [vermont](../tag/vermont), [photoshop](../tag/photoshop), [infragram](../tag/infragram), [rosco](../tag/rosco), [infrablue](../tag/infrablue), [infragram-filters](../tag/infragram-filters)

----

<em>Image above: An infrablue photo (Infragram prototype) and a false color infrared look-alike image made from it. Instead of NRG (near-infrared, red, green) this images displays NBG (near-infrared, blue, green).</em>

A web application is being developed by the Public Lab community to manipulate, store, and share the images produced by the [Infragram Kickstarter](http://www.kickstarter.com/projects/publiclab/infragram-the-infrared-photography-project) cameras. Some versions of the Infragram camera might do all the processing offline, but it will also be possible to upload the photos from the camera and have them transformed into heat maps of plant activity ([NDVI](http://publiclab.org/wiki/near-infrared-camera)) or classic [black & white infrared images](http://publiclab.org/notes/cfastie/05-09-2013/invisible-light).

It might also be possible to do some fine tuning of these images. For example, the pure infrared (NIR) images from the Infragram are a little dull, but it is easy to punch them up. The pure infrared images are monochrome images made from just the red channel of Infragram photos which records mostly infrared light. A dull image often has few pixels that are really bright or really dark. This can be fixed by stretching the histogram (making the brightest pixels brighter and the darkest darker). It might be good to have the option to do this to the NIR images. This could be like applying a "filter" at Instagram, and is therefore strangely appropriate.



![LRProscoNIR.jpg](https://i.publiclab.org/system/images/photos/000/000/414/medium/LRProscoNIR.jpg)
<p></p><em>A photo from a Powershot A810 with Rosco 2007 filter (left), and the red channel of that photo which includes mostly near infrared information (center). On the right, the image with the near infrared channel has had its histogram stretched (auto levels) in Photoshop.</em>


It is also possible to explore the information in these photos by displaying the infrared data in different ways. The infrared data is in the red channel of infrablue photos (photos taken with an Infragram prototype with a blue filter which passes infrared light), and the green and blue channels have more or less normal color information.  By changing the color used to display each channel, some interesting effects are possible.  Below is one of Jeff's infrablue photos with two standard channel switches applied. Using the channel mixer in Photoshop, I switched the red channel with the green or blue channel.  This just displays whatever was in the red channel as either green or blue. I also did two other things to make these images. I stretched the histogram to make it snappier (auto levels), and I increased the saturation to make it more intense. These adjustments could be combined into an "infrafilter" so users could try them out on their images. The lower right image has had some more arbitrary channel mixing and other manipulations done in ways I can't quite reconstruct but I really like the effect. An advanced sandbox at the web app could allow users to try this sort of manipulation with the raw Infragram photos. 



![FP_IMG_3358chan.jpg](https://i.publiclab.org/system/images/photos/000/000/415/large/FP_IMG_3358chan.jpg)
<p></p><em>An infrablue photo taken with a Powershot A495 with Rosco 2007 blue filter (upper left) and the information in that photo displayed three different ways. The red channel (with the near-infrared data) has been switched with the green (upper right) or blue (lower left) channel. The lower right image has had more involved channel switching and other adjustments made.</em>


Another "infrafilter" might allow users to make false color infrared "satellite" images out of Infragrams.  A standard way to display infrared aerial images of vegetation is called NRG because instead of displaying red, green, and blue (RGB) data, near-infrared, red, and green (NRG) data are displayed. Infrablue photos do not include any information about the red light in the scene (near-infrared data is recorded in the red channel), so it is not possible to make real NRG images.  But by switching the blue and green channels, an NBG image with some similar properties can be produced. To make the NBG images below, I did four things to an infrablue image in Photoshop:  stretch the histogram (auto levels), switch the blue and green channels (channel mixer), adjust the hue to a  color typical of NRG images (hue/saturation), and adjust the saturation (hue/saturation) until it looked right. The resemblance to real NRG images varies depending on the original infrablue photo, so maybe a few different filters will be required. It remains to be seen whether these NBG images will be as useful as NRG in revealing vegetation patterns. 




![LRPNRGNBG.jpg](https://i.publiclab.org/system/images/photos/000/000/417/large/LRPNRGNBG.jpg)
<p></p><em>A normal color photo (upper left) and a false color infrared (NRG) image made from it and a second photo from an infrared camera. Below is an infrablue photo from a Powershot A810 with Rosco 2007 filter (lower left) and a fake false color infrared (NBG) image made by swapping the green and blue channels in that photo (lower right).</em>



![MCOFnrgNBG.jpg](https://i.publiclab.org/system/images/photos/000/000/418/medium/MCOFnrgNBG.jpg)
<p></p><em>A false color infrared (NRG) image made from photos from two cameras (left), and a fake false color infrared (NBG) image made from the three channels in an infrablue photo (right).</em>

Below are four NBG images of Jeff's infrablue photos from his [airline window seat.](http://publiclab.org/notes/warren/05-27-2013/infragram-test-photos-from-a-plane-window)

![IMG_0021_DtoB_NBG.jpg](https://i.publiclab.org/system/images/photos/000/000/419/medium/IMG_0021_DtoB_NBG.jpg)<p></p>
![IMG_0023_DtoB_NBG.jpg](https://i.publiclab.org/system/images/photos/000/000/420/medium/IMG_0023_DtoB_NBG.jpg)<p></p>
![IMG_0024_DtoB_NBG.jpg](https://i.publiclab.org/system/images/photos/000/000/421/medium/IMG_0024_DtoB_NBG.jpg)<p></p>
![IMG_0019_DtoB_NBG.jpg](https://i.publiclab.org/system/images/photos/000/000/422/medium/IMG_0019_DtoB_NBG.jpg)<p></p>
