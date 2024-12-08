---
title: Sky Camera
tagnames: balloon-mapping, kite-mapping, camera-triggering, android, kap, gsoc, gsoc-2013, skycam, gsoc-2014
author: warren
path: /wiki/sky-camera.md
nid: 9322
uid: 1

---

# Sky Camera

by [mercyorangi](../profile/mercyorangi), [warren](../profile/warren), [Mohit](../profile/Mohit)

September 12, 2013 21:38 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [camera-triggering](../tag/camera-triggering), [android](../tag/android), [kap](../tag/kap), [gsoc](../tag/gsoc), [gsoc-2013](../tag/gsoc-2013), [skycam](../tag/skycam), [gsoc-2014](../tag/gsoc-2014)

[![IMG_20130912_190456.jpg](https://i.publiclab.org/system/images/photos/000/001/540/medium/IMG_20130912_190456.jpg)](https://i.publiclab.org/system/images/photos/000/001/540/original/IMG_20130912_190456.jpg) [![sky-cam.png](https://i.publiclab.org/system/images/photos/000/002/316/thumb/sky-cam.png)](https://i.publiclab.org/system/images/photos/000/002/316/original/sky-cam.png)

Sky Camera is a prototype Android app (updated now) for attaching to a balloon or kite for taking pictures at a set interval. It was developed by [Mohit Meena](/profile/mohit) as part of the [2013 Google Summer of Code program with Public Lab](/wiki/gsoc-2013). 


It has the following features:

* Android 2.3.3 is supported now.
* Android 3 is required at minimum.
* custom intervalometer to take pictures every X seconds (from 7 seconds up)
* image stability detection to take pictures only when the camera is not moving too much
* auto-emailing to send low-res versions of the photos to the given email address while in the air, over the cell data connection
* auto-emailing of latitude/longitude
* some camera settings adjustments

The comprehensive User Guide can be found here: (http://publiclab.org/notes/mercyorangi/08-16-2014/sky-cam-user-guide)


Planned features include:

* "beep" pulse on interval to [synchronize with hi-res cameras](/notes/patcoyle/1-30-2013/chdk-usb-remote-shutter-digispark-sketch)
* more compatibility with more phones
* more links to MapKnitter and other Public Lab resources
* low power mode which disables the screen
* more features listed here: https://github.com/publiclab/sky-camera/issues/

You can find the latest version (for android 3.0 or above) here: https://github.com/mercyorangi/sky-camera/blob/branch2/bin/Sky%20Cam.apk

For android 2.3.3, Latest version can be found here: https://github.com/mohit216/Sky-Camera-Android-2.3.3/blob/master/bin/SkyCamera.apk

And the full open source repository (for android 3.0 or above) here: https://github.com/mercyorangi/sky-camera/tree/branch2

and for (for android 2.3.3):
https://github.com/mohit216/Sky-Camera-Android-2.3.3  

[![IMG_20130912_225658.jpg](https://i.publiclab.org/system/images/photos/000/001/542/medium/IMG_20130912_225658.jpg)](https://i.publiclab.org/system/images/photos/000/001/542/original/IMG_20130912_225658.jpg)

