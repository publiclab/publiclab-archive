---
title: "First flight of the SkyPod"\ntagnames: 'kite-mapping, arduino, kite-aerial-photography, kap, gps, saturnv, skyshield, half-spherical, eos_m, autodesk, skypod, bme280, ublox, skypod-gps-logger, activity:skypod-gps-logger'
author: cfastie
path: /notes/cfastie/06-18-2017/first-flight-of-the-skypod.md
nid: 14551
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/020/815/original/SalCmSch_20170611-9585.JPG)

# First flight of the SkyPod

by [cfastie](../profile/cfastie) | June 18, 2017 22:56

June 18, 2017 22:56 | Tags: [kite-mapping](../tag/kite-mapping), [arduino](../tag/arduino), [kite-aerial-photography](../tag/kite-aerial-photography), [kap](../tag/kap), [gps](../tag/gps), [saturnv](../tag/saturnv), [skyshield](../tag/skyshield), [half-spherical](../tag/half-spherical), [eos_m](../tag/eos_m), [autodesk](../tag/autodesk), [skypod](../tag/skypod), [bme280](../tag/bme280), [ublox](../tag/ublox), [skypod-gps-logger](../tag/skypod-gps-logger), [activity:skypod-gps-logger](../tag/activity:skypod-gps-logger)

----

_Above: The SkyPod mounted on a Saturn V Rig. The SkyPod includes a GPS module and antenna, Arduino Nano, microSD card, and a sensor to read barometric pressure and temperature. The 3D printed pod was designed in Autodesk Fusion 360. The blue PCB is part of the SkyShield which operates the pan/tilt/shoot Saturn V Rig._

I completed development of the [SkyPod](https://publiclab.org/tag/skypod) two months ago. The SkyPod is an Arduino based GPS logger intended to fly on a kite or balloon rig. I did lots of testing with the SkyPod but never got a chance to fly it. That's partly because I wanted to fly it with a new kite and wanted to fly over some visually and topographically interesting place (to make a structure from motion model). That over-constrained the acceptable conditions so last weekend I conceded and flew with another kite over a boring place.

[![SalCmSch_20170611-9565.JPG](https://publiclab.org/system/images/photos/000/020/816/medium/SalCmSch_20170611-9565.JPG)](https://publiclab.org/system/images/photos/000/020/816/original/SalCmSch_20170611-9565.JPG)  
_Above: This is the heaviest and most complex payload I have ever flown. The Saturn V Rig carried a [Canon EOS M](https://publiclab.org/tag/eos_m) and a Mobius ActionCam to take video (see video below). The sensor bay of the SkyPod carried a BME280 barometric pressure, temperature, and humidity sensor. The rig weighed two pounds (0.9 kg)._

[![SalCmSch_20170611-9541.JPG](https://publiclab.org/system/images/photos/000/020/817/large/SalCmSch_20170611-9541.JPG)](https://publiclab.org/system/images/photos/000/020/817/original/SalCmSch_20170611-9541.JPG)  
_Above: The Levitation Delta had no problem lifting the rig in 15 mph winds. I had never flown a SkyPod or Mobius, and had not done any KAP for six months. I have only used the EOS M for KAP three other times. So I assumed there was zero chance that I was going to make all this gear work correctly. I was right._

[![SalCmSch_20170611-9570.JPG](https://publiclab.org/system/images/photos/000/020/818/medium/SalCmSch_20170611-9570.JPG)](https://publiclab.org/system/images/photos/000/020/818/original/SalCmSch_20170611-9570.JPG)  
_Above: The sensor bay on the SkyPod is open at the back and has a vent on the side. I taped over the vent and stuffed a cotton ball in the back door to keep the wind from creating noise in the sensor data. That was a little too much protection, and the temperature data have a long lag as conditions change outside the pod. Next time I'll let some more air in._

[![SalCmSch_inset.jpg](https://publiclab.org/system/images/photos/000/020/819/medium/SalCmSch_inset.jpg)](https://publiclab.org/system/images/photos/000/020/819/original/SalCmSch_inset.jpg)  
_Above: It's a pleasure to fly the EOS M which has much better image quality than a good Canon PowerShot. But I failed to check all the camera settings and sent it up on automatic exposure and focus instead of Tv and MF (shutter priority and manual focus at infinity). That can be a terminal mistake, but it was cloudless with a blazing sun so the shutter speeds were high (but varied between 1/320 and 1/1600 sec.). The auto focus allowed zero photos to be taken at the uppermost tilt angle where the scene was almost all blue sky and impossible to focus on. Photos from the next tilt angle always included the horizon so I was able to stitch a complete panorama of the scene. I was very lucky._

[![SkyPoddata.PNG](https://publiclab.org/system/images/photos/000/020/820/large/SkyPoddata.PNG)](https://publiclab.org/system/images/photos/000/020/820/original/SkyPoddata.PNG)  
_Above: The flight lasted about 45 minutes and the SkyPod was saving data every four to five seconds. So 570 data entries with GPS (lat, lon, alt), pressure, temperature, and humidity values were collected. I was surprised to see the good alignment of the GPS elevation data and the altitude computed from barometric pressure. Earthbound tests convinced me that the GPS elevation data were unreliable, but maybe a clear view of the sky (and all the satellites) allowed the GPS to return better data._

[![SCS9718_29o29Nps3k.jpg](https://publiclab.org/system/images/photos/000/020/821/large/SCS9718_29o29Nps3k.jpg)](https://publiclab.org/system/images/photos/000/020/821/original/SCS9718_29o29Nps3k.jpg)  
_Above: Stereographic projection of a 360° panorama stitched from 28 photos. Although very little sky was included in the captured photos (due to the autofocus failure) I used the "Auto complete" feature in MS ICE to make fake sky to fill the frame._

[![GEfieldview2pan.jpg](https://publiclab.org/system/images/photos/000/020/822/medium/GEfieldview2pan.jpg)](https://publiclab.org/system/images/photos/000/020/822/original/GEfieldview2pan.jpg)  
_Above: Although this is not the most interesting KAP subject, it does have a story. In the last six months, this field was returned to row crops after decades of neglect. This involved the removal of pre Civil War stone walls which created paddocks probably in the 1840s when most of Vermont's forests were cleared for sheep grazing. I think it is illegal in my town to disturb any stone wall, but maybe dairy farmers have a permanent waiver. Or maybe these guys are busted._

<iframe width="853" height="480" src="https://www.youtube.com/embed/K68ZmdibQu8?rel=0" frameborder="0" allowfullscreen></iframe>  
*Above: A three minute video of a very warm KAP session during which very good luck prevented the complete failure that my very poor decisions should have caused.*

Kits to build a Saturn V Rig and SkyShield autoKAP controller are available at the [Public Lab Store](https://publiclab.myshopify.com/collections/aerial-camera-mounts). These kits and a kit to build a SkyPod GPS logger are available at the [KAPtery](http://kaptery.com/).

[Here is the sketch running on the SkyPod](https://publiclab.org/system/images/photos/000/020/830/original/SkyPod_BME.txt).