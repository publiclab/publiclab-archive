---
title: Testing and Calibrating Your Microscope
tagnames: raspberry-pi, with:kgradow1, with:warren, microscope, raspberry-pi-cameras, activity:microscope, with:wmacfarl, with:bmela, activity:basic-microscope, series:basic-microscope, activity:community-microscope-usage, pin:activity:community-microscope-usage
author: partsandcrafts
path: /notes/partsandcrafts/02-26-2018/5-testing-and-calibrating-your-microscope.md
nid: 15818
uid: 66014

---

# Testing and Calibrating Your Microscope

by [partsandcrafts](../profile/partsandcrafts) February 26, 2018 17:55

February 26, 2018 17:55 | Tags: [raspberry-pi](../tag/raspberry-pi), [with:kgradow1](../tag/with:kgradow1), [with:warren](../tag/with:warren), [microscope](../tag/microscope), [raspberry-pi-cameras](../tag/raspberry-pi-cameras), [activity:microscope](../tag/activity:microscope), [with:wmacfarl](../tag/with:wmacfarl), [with:bmela](../tag/with:bmela), [activity:basic-microscope](../tag/activity:basic-microscope), [series:basic-microscope](../tag/series:basic-microscope), [activity:community-microscope-usage](../tag/activity:community-microscope-usage), [pin:activity:community-microscope-usage](../tag/pin:activity:community-microscope-usage)

# Why do we need to calibrate our microscope?

Our goal is to look at dust particles and attempt to identify them by size and shape. In order to do that we'll need to know the actual size of things that we're displaying on our microscope.

  
# How do we do it?

To calibrate our microscope we will use a device called a stage micrometer. A stage micrometer is a tiny ruler mounted on a slide. Our ruler is 1 mm across and is divided into 100 ticks. The distance between each tick is 10 microns.

![](https://lh3.googleusercontent.com/Vol_jzBoCx6cQYQDgm4e8HW_f1gqu1lImbuNDSGgn2NyoMvF5r-eHTTOLk_5wfF0f7mgqeoG0nXl_0Ksgf3wZq2MUZuh17kihxpANA3-ospPseO_OmRQzMhVHstc84Iqo1KiZat8)

We got the cheapest one we could get from Amazon -- [https://smile.amazon.com/OMAX-0-01mm-Microscope-Calibration-Micrometer/dp/B00FG89F0M?sa-no-redirect=1](https://smile.amazon.com/OMAX-0-01mm-Microscope-Calibration-Micrometer/dp/B00FG89F0M?sa-no-redirect=1)

We will get the micrometer into focus, take some pictures of it through the microscope and then do some simple analysis of the images to figure out the resolution (pixels per micron) of the resulting image.

  
# Calibrate Your Microscope

### 1\. Center micrometer on sample stage above objective lens

If you look closely at the stage micrometer you can see a slide cover in the middle. Under that slide cover is another circle about half of the radius of the slide cover itself, and inside of that circle is what appears to be a barely-visible horizontal line.

![](https://lh4.googleusercontent.com/38fB2I9rQSnyZYiXdtlBSRO1pavRM5VtpuuzXT9ExUWy0p7HWwu06PasGh3ENC8LP_UebQrWzb2q-33WX7DmIzsINLLVoGL_h4t3fpGyQq7jVVfbw9-B3_D3shKL5_Glg2E1AN93)

That horizontal line that you can barely see is the ruler portion of the micrometer. It actually consists of a series of vertical lines 10 um apart.

Reverse the slide. Flip your slide upside down so that the slide-cover side is closest to the objective lens. The slide will appear backwards to you because you are looking at it from above but the microscope is looking at it from below.

Line up the slide with the objective. Do your best to place the tiny line of the micrometer-ruler directly above the aperture of the objective lens. We are using a 40x objective lens for this process and we recommend that you get used to focusing with the 40x lens before trying to use the 100x, which views a much smaller area with a much smaller aperture and is much harder to focus and find images with.

![](https://lh3.googleusercontent.com/fnjIF345rlSgXfAT7PABvCxtMba3laRP8KNRTrJBBfkBW1Ye1l8o9-yT3k-XKMKS2dc_9GiXUv3mcGzZWx_Qy1ULHiCK_Tib5uVHt8A5CmxHX65GilPPKbc5V6TW8f5mSMraIk_y)

Once you've done this, clip the slide in place. We are using a binder clip to hold it down on one side. Clipping the sample on one side only allows us to more easily nudge it to view different regions.

![](https://lh6.googleusercontent.com/xT5fVhyTrmWOhZy_qWoi6zyZXUnaM5MGejKttdaErqi_bXdpFELCuQkOIB9lznVrgnaGrBhNntc8rbINtuaakIexgCj-_XwWV1sn-9F--3cXz3ehKPuufrFmtbs4z2aWzrQE7O7z)

## 2\. Light the sample

Place the light so that it is shining directly down through the slide into the opening of the microscope lens. Plug the microscope in, turn it on, and look at the image by going to [http://raspberrypi.local](http://raspberrypi.local) in your web browser. You should see a blurry kind of nothingness.

![](https://lh4.googleusercontent.com/n2MLQgkX9rO6ud-9Kr72xFtgvlE-7phiZEZd9Cyz9NLdslbhY84ARKSsmIU_6sdiZiEtYgWbDlxoWb3L3g4fYOgWsNk3s-0R8XCOs3QkNDr2Qzsx7XCPZfGyYc6kNC9v8PZwyoU9)

A poorly-illuminated image will look like this:

![](https://lh6.googleusercontent.com/fgr7UjQJQtfNVzjet61o47IPsfTxKgsleSJsksM3uOBQTY_U0-YTOBYue2JGgjnbxXOpzBe3W2L-Tw4V7sln6f7DGyiUEhMf5_0diWl1T0K1pcBEy87U8IUpHIAeTzn5YuxGmT2R)

A well-illuminated image will look like this:

![](https://lh3.googleusercontent.com/FPZ9qTHaCBB8T69Gyxo1HJee1sabViy61zCS9nP6xOVz7_qQHUpZXaKlhEpPfkGPYGEqbUCw7Bumx47kjaQbaIF4qcYwJP2M7AX1ev67P4t4ihKpLUUfkBtwJDjxCxoOwG4be5K6)

## 3\. Bring the image into focus

By turning the carriage-bolt you can move the stage slightly up and down to bring the image into focus. Start by bringing it down as far as possible so that the objective tip is actually touching the slide, then begin to bring it up again.

You will want to steady the stage with your other hand as you focus.

![](https://lh6.googleusercontent.com/TYdvNA3YN3CV2t68L5JqLkIc-1dMMAi-Tr-P4cdGjk1wBMg6ujoaZNpuWCruHbl9CFZBu6LbPu75aPytCSiCFU1mJeQfeImG5DuO-pgXKUyxjYI_X328Yk6a1hqUqC_GHfuF7Sn0)

This is an animated gif of a video of me focusing the camera on the micrometer and then nudging it a bit to get it into focus before focusing again and taking a picture.

![](https://lh6.googleusercontent.com/zPWCBy7EnyEwH5AaRc2NAeumZquBDGPckZnlYncDDz5dDsSsGPOo201YcUoUMx0AucO_cqTagrVcDi0Nsy4iByIl2brXGW9ZSWQxlgOPCr_VjBs83txbGbVpUjeeB4DEvBFpPZeT)

Make sure that your light is shining straight down on the sample. Some problems that look like they are focusing problems are actually illumination problems because if the light is shining at an angle it will kind of "smear" the image in a direction across the sensor.

These two images were taken with the same focus, but slightly moved lighting.![image description](https://publiclab.org/system/images/photos/000/023/736/large/Screen_Shot_2018-02-27_at_11.12.13_AM.png "Screen_Shot_2018-02-27_at_11.12.13_AM.png")

## 4\. Download images

To take a picture, click on the "record image" button. To take a video use the "record video start" button. To download images that you have saved click on the "download videos and images" button which will take you to a library of your recorded images.

![](https://lh6.googleusercontent.com/UvfBGH3yvZHeG7sCkvAiUBrVzfzmCe1B3HlJfZCV2uCXWS0L7EKBUnl6XhxdqVsa4qvmiQ88UBgksoSBCrZDbc8FBHCoLkCE_QK5Ctp2PgrtWpBogEXPC84V4w01Ms_XnZCpOiqH)

1. Analyze them

Once we have a good image, we can download it and see what our resolution is. I am going to look at this image:

![](https://lh6.googleusercontent.com/V3bPXNsss_GS_PkQG0CB_Nx4eBuitSZVJynHdw_Kz--7_hToFStSOGylb9xACTZPhqgjXfzAr6gxSNuzRwAtCe-rSZNEEdGZzzNH5nEI8Fi_Iph4ppJs3RsFRfAGBseC2R6MDh_e)

There are a few things to note about this image. First of all, there is a large amount of dust and debris on the sensor of the Raspberry Pi camera. These marks are present on all of our pictures. This is not a surprise -- I have been using this camera in lots of different microscope examples and taking it apart and putting it back together a lot. I will want to get a new camera to use for and take better care of once we have a solid design.

This image is pretty straight, but I'm going to rotate it slight so that the gradations are aligned with the bounding box of the image. This is probably not required for the rought calibration that we're doing, but it will look nicer and make it easier to count pixels. You can rotate it in almost any image editor. I used Windows Photo Viewer and rotated it 2 degrees to get the following:

![](https://lh4.googleusercontent.com/kn8xH-njrgTRK7bnVYFwaJFWcW5qXAkn0NlBEpw2RnlqzehXCtF0Z9h_mMm3YM3RgMKy20Z24pkZYtgaR4_MpE6coB-b5ewgYSMvF5eeVGCn4m-a2y4nMJWQ1kOUo_jrL-o4gGYb)

Now we can count how many lines are on the image. There are 26\. Examining the image properties, I see that it is 2497 pixels across.

![](https://lh5.googleusercontent.com/wdQku0r3mom7SlPukx-kjkG0L1IRCpy7ZaODoBBGvlwvzpZMOvy7pRrYkb2dbpRJn7iyRPqJ0h558CmJaLmdHlJSPjQ3HVwkNZtPyRjVh-VxN5J_HkTGJBtQqQpmfr32XWCxMsFY)

Since each mark is 10um, we know we have a bit more than 260um displayed on a bit less than 2500 pixels, so we get an image of just over 10 pixels per micron.

We still don't know what the smallest possible thing we can see is (for instance, would a .1 micron sphere be visible as a single pixel?), but this is still a very useful rough estimate of what we're seeing.

Repeating the process with the 100x objective, we get:

![](https://lh3.googleusercontent.com/UrqleSXXa6dxCew90y41QUwJqlT2rAH6LVHnBYvzbNFubE3AUO5ap09yJjSQaIjX3PWa-9mgqidRLtQIIO8ZUYwXYiVbFuymZC5tga9vBWvpr8BKsp_4Lip2EoE_65jOW-7BIIId)

Which is about 100 um for 2500 pixels, or about 25 pixels per micron.