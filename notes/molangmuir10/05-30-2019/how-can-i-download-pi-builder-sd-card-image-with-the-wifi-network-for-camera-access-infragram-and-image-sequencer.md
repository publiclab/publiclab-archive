---
title: How can I download pi-builder SD card image with the WIFI network for camera access, Infragram and Image Sequencer?
tagnames: pi-builder, question:pi-builder
author: molangmuir10
path: /notes/molangmuir10/05-30-2019/how-can-i-download-pi-builder-sd-card-image-with-the-wifi-network-for-camera-access-infragram-and-image-sequencer.md
nid: 19577
uid: 589023

---

# How can I download pi-builder SD card image with the WIFI network for camera access, Infragram and Image Sequencer?

by [molangmuir10](../profile/molangmuir10) May 30, 2019 12:18

May 30, 2019 12:18 | Tags: [pi-builder](../tag/pi-builder), [question:pi-builder](../tag/question:pi-builder)

----

***UPDATE!! This worked it just took a very long time for the wifi to connect! (About 25mins)***





I followed the link to the public lab pi builder site. I then followed the download link to GitHub: https://github.com/publiclab/pi-builder/pull/53.

![Step 1][1]

I followed jywarren's download instructions through to gitlab. (I have never used gitlab before so this is probably where I went wrong!)

![Step 2][2]

![Step 3][3]

I downloaded the artifacts zip entitled 'camera_web' which gave me a zip file and an img.zip.sha256 file.

![Step 4][4]

I unzipped the other and used belenaEtcher to flash these onto my SD card.

![Step 5][5]

  [1]: /i/32597.png "Screenshot_2019-05-30_at_12.37.32.png"
  [2]: /i/32598.png "step.png"
  [3]: /i/32599.png "Screenshot_2019-05-30_at_12.35.07.png"
  [4]: /i/32600.png "Screenshot_2019-05-30_at_12.34.52.png"
  [5]: /i/32601.png "Screenshot_2019-05-30_at_12.38.01.png"

I waited 10 mins from plugging in my raspi for the network but nothing showed.
I've attached screenshots of my process - any ideas where I've gone wrong?