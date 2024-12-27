---
title: "Temperature Sensor / LED light"

tagnames: 'thermal-fishing-bob'
author: sobers
path: /notes/sobers/11-28-2011/temperature-sensor-led-light.md
nid: 594
uid: 371

cids: 370

---

![](https://publiclab.org/sites/default/files/DSC05653crop.jpg)

# Temperature Sensor / LED light

by [sobers](../../../profile/sobers) | November 28, 2011 23:36

November 28, 2011 23:36 | Tags: [thermal-fishing-bob](../tag/thermal-fishing-bob)

----

Materials:
1. Cheap Digital Thermometer
2. Arduino
3. RGB LED
4. Resistor (for RGB LED to not burn out)
5. 9v Battery (or another power source for the arduino)

<img src="https://publiclab.org/sites/default/files/DSC05649.JPG" alt="Digital Thermometer Parts" width="600px"/>

Taking a digital thermometer from a convenience store (CVS), we extracted the metal and two wires used to read your temperature when sick. 

To do this we used a dremel (or any other small drill) to carefully take apart the tip of the thermometer from the body. Be careful as the wires are very thin and small.

<b><u>(All images are available to download / or see at full size at the bottom of this page.)</b></u><br><br>

<img src="https://publiclab.org/sites/default/files/DSC05663.JPG" alt="Thermometer Part + Additional Wiring" width="600px"/>
Next we took the thermometer part and soldered each end to a thicker hookup wire. We taped down the thermometer and thin wire to a piece of cardboard to give it more structure (so that the wires would not fall apart on us). Using any sturdy material will do for this.

<img src="https://publiclab.org/sites/default/files/DSC05660.JPG" alt="Sensor & Breadboard hookup 1" width="600px"/>

<img src="https://publiclab.org/sites/default/files/DSC05662.JPG" alt="Sensor & Breadboard hookup 2" width="600px"/>

Here are general images of the wiring we did, hooking it up to an Arduino UNO. See the code (below & in the attachment "fishing.zip") for which pin = which connection.

<img src="https://publiclab.org/sites/default/files/DSC05665.JPG" alt="Sensor & Breadboard hookup 3" width="600px"/>

<script src="https://gist.github.com/1447863.js"> </script>

The arduino code is from a few different sources (see below for our compilation):
Reading the thermistor, simple code:
http://arduino.cc/playground/ComponentLib/Thermistor2

and

Arduino RGB LED HSV "Color Wheel"
http://eduardofv.com/read_post/179-Arduino-RGB-LED-HSV-Color-Wheel-