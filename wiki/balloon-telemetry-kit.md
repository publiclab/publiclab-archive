---
title: "Balloon Telemetry Kit"

tagnames: 'balloon-mapping, arduino, balloon-telemetry-kit, telemetry, photo-rig, mining, urban-planning, fracking, tool, land-use, industry, method, land-change'
author: lpercifield
path: /wiki/balloon-telemetry-kit.md
nid: 60
uid: 20

---

![](https://publiclab.org/sites/default/files/IMG_0650 copy.jpg)

# Balloon Telemetry Kit

by [mathew](../profile/mathew), [warren](../profile/warren), [balrog](../profile/balrog), [liz](../profile/liz), [lpercifield](../profile/lpercifield)

January 25, 2011 18:35 | Tags: [balloon-mapping](../tag/balloon-mapping), [arduino](../tag/arduino), [balloon-telemetry-kit](../tag/balloon-telemetry-kit), [telemetry](../tag/telemetry), [photo-rig](../tag/photo-rig), [mining](../tag/mining), [urban-planning](../tag/urban-planning), [fracking](../tag/fracking), [tool](../tag/tool), [land-use](../tag/land-use), [industry](../tag/industry), [method](../tag/method), [land-change](../tag/land-change)

----

This kit was created as a means to improve the georeferencing of images captured using <a href="http://publiclaboratory.org/tool/balloon-mapping">balloon mapping</a>. This kit is based around the open-source Arduino mircocontroller. Utilizing a GPS receiver, barometric sensor, three-axis accelerometer and data logger, this module allows for the synchronization of data with images captured from a Canon camera running the <a href="http://chdk.wikia.com/wiki/CHDK">CHDK</a>. By utilizing the USB remote function of the CHDK software the camera can be triggered in sync with the logging of the sensor data. 

Along with the georeferencing capabilities, this kit captures the position of the camera in relation to the ground plane. This is done by capturing the x/y rotation of the camera with the accelerometer.

Parts List:
<a href="http://www.sparkfun.com/products/9269">ADXL335 Accelerometer</a>
<a href="http://www.sparkfun.com/products/8161">Barometric Pressure Sensor - SCP1000 </a>
<a href="http://www.sparkfun.com/products/9530">OpenLog data logger</a>
<a href="http://www.sparkfun.com/products/7914">Arduino Proto Shield</a>
<a href="http://www.adafruit.com/index.php?main_page=product_info&cPath=35&products_id=272">GPS Module</a>
<a href="http://www.sparkfun.com/products/9950">Arduino Board</a>

Sample log data:
lat,long,Date(yyyy-mm-dd),Time(hh:mm:ss:cc),alt(m),course,speed(knots),speed(mph),speed(mps),speed(kmph),pressure(Pa),baroAlt(m),xAxis(deg),yAxis(deg)
40.76892,-73.94951,2011-1-21,21:43:15:0,39.50,227.29,0.00,0.00,0.00,0.00,100297.75,85.86,-57,-80 

Arduino code available <a href="http://lpimaging.net/plots/BalloonGPSscp1000.zip">here</a>

Here is a quick test of <a href="https://www.flickr.com/photos/lpimaging/sets/72157625782364459/">image rectification</a> using the accelerometer data. 

This picture shows some data (GPS elevation, barometric altimeter) being transmitted live from the module over the Passaic River to the laptop, November 13, 2010:
<a href="https://www.flickr.com/photos/lizbarry/5175878856/" title="a high point by lizbarry, on Flickr"><img src="http://farm5.static.flickr.com/4130/5175878856_01ba979133.jpg" width="500" height="333" alt="a high point"></a>

We are considering using <a href="http://www.6000km.org/2010/09/05/geotagging-the-ruhr-the-method/">this method</a> to write this information into the EXIF for each image.

<hr />

Comments from mailing list:

Great idea for balloon and kite mappers, having a single small device to hang there would come extremely useful. When I needed to log GPS data for a flight recently I needed two bulky devices: the camera, and the GPS, and they weren't synchronized.  The CHDK synchronization is a very promising way to do that.  And with the arduino pins accessible the device can probably be easily extended with further sensors is necessary.  (It feels still slightly redundant that we can't have the camera on the same board, wouldn't that be great?  But technically image processing is a whole another step higher than arduino, and CCD sensors are difficult to get hang of)

Looking forward to see the telemetry kit in use!

My only doubt is about the reliability of accelerometer measurements on a flying object.  Attitude estimation is going to be difficult due to the amount of movement and non-gravity acceleration.  One solution to this would be to include a 3-axis gyro in addition to the accelerometer.  Sensor sets composed of a gyro and an accelerometer can give quite reliable results by compensating for each other's error characteristics.  The compensation involves some maths, but it can be executed on an Arduino board and there are several successful projects using this methods.  MultiWii is one example, where a $20 set of popular Nintendo Wii controllers can be used as an arduino-compatible tiny sensor board.  It's similar to the sparkfun ADXL board but contains gyroscopes and MultiWii provides an arduino library for calculating attitude using kalman filters.
-- balrog