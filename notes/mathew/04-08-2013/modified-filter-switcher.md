---
title: "Modified Filter Switcher"\ntagnames: 'near-infrared-camera, infrared-camera, filter-switcher'
author: mathew
path: /notes/mathew/04-08-2013/modified-filter-switcher.md
nid: 6717
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/000/030/original/fruitbowlhalf.jpg)

# Modified Filter Switcher

by [mathew](../profile/mathew) | April 08, 2013 03:45

April 08, 2013 03:45 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [infrared-camera](../tag/infrared-camera), [filter-switcher](../tag/filter-switcher)

----

##The modification##
it was really easy to open up the [Leopard Imaging LI-IR650](https://www.leopardimaging.com/Accessories.html)  [filter switcher](/notes/mathew/3-12-2013/ir-filter-switchers) with a tiny philips screwdriver.  Inside was a glass IR-CUT filter and a clear piece of glass.  I broke out the clear glass and cut a piece of developed film to fit in its place.  The developed film stays in without any glue.
<a href="https://www.flickr.com/photos/14397636@N07/8630366788/" title="modding filter switcher with IR pass filter by mathew.lippincott, on Flickr"><img src="https://farm9.staticflickr.com/8114/8630366788_cf101988c7_z.jpg" width="640" height="480" alt="modding filter switcher with IR pass filter"></a>

<a href="https://www.flickr.com/photos/14397636@N07/8630365332/" title="modding filter switcher with IR pass filter by mathew.lippincott, on Flickr"><img src="https://farm9.staticflickr.com/8112/8630365332_7b748ff2b0_z.jpg" width="640" height="480" alt="modding filter switcher with IR pass filter"></a>

<a href="https://www.flickr.com/photos/14397636@N07/8630363968/" title="modding filter switcher with IR pass filter by mathew.lippincott, on Flickr"><img src="https://farm9.staticflickr.com/8522/8630363968_0cb6ecf587_z.jpg" width="640" height="480" alt="modding filter switcher with IR pass filter"></a>

##My Results##
This filter switcher is designed to switch at 12v, and works applying +12v or -12v briefly.  It switches so fast that I wasn't able to catch it mid-switch at 30fps.

<iframe width="420" height="315" src="https://www.youtube.com/embed/6llYPOeW8Xs" frameborder="0" allowfullscreen></iframe>

The filters aren't matched in density, so the camera has to spend some time re-adjusting its auto settings, but the filter switcher is more successful than I imagined.

##Questions and next steps##
#####Researching Filter Glass #####
I'd like to spec matched filters with equal density so that the camera can switch faster.  Alternatively, getting full control of the camera in software so that the settings can be switched with the filters, but I think that's less elegant and likely to be camera-specific. 
#####Connecting to a microcontroller#####
I have to look at the simplest circuit to allow the filter to be controlled with a microcontroller. I'll probably start with four diodes, but there is likely an IC that will do it cheaper.