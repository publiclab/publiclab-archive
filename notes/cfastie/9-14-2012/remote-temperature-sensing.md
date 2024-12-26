---
title: "Remote temperature sensing"\ntagnames: 'balloon-mapping, kite-mapping, hydrogen-sulfide-sensing, as220, temperature, leaffest, jeenode, h2s, compost, data-logging, cosm'
author: cfastie
path: /notes/cfastie/9-14-2012/remote-temperature-sensing.md
nid: 3822
uid: 554

---

![](https://publiclab.org/sites/default/files/JeeNodeComposta.jpg)

# Remote temperature sensing

by [cfastie](../profile/cfastie) | September 14, 2012 22:28

September 14, 2012 22:28 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [hydrogen-sulfide-sensing](../tag/hydrogen-sulfide-sensing), [as220](../tag/as220), [temperature](../tag/temperature), [leaffest](../tag/leaffest), [jeenode](../tag/jeenode), [h2s](../tag/h2s), [compost](../tag/compost), [data-logging](../tag/data-logging), [cosm](../tag/cosm)

----

When I went public with my [home compost pile]( http://fastie.net/?p=1776) four days ago, I sort of challenged the participants of next week’s [LEAFFEST]( http://publiclaboratory.org/notes/cfastie/9-5-2012/l-e-f-f-e-s-t) to rescue me from my 25 year old thermometer device that I use to monitor the temperature inside the pile.  The [Pioneer Valley Open Science]( https://github.com/Pioneer-Valley-Open-Science/pioneer-valley-open-science.github.com/wiki) crowd was up to the challenge and already has a prototype which could beam temperature data from four locations in the pile direct to my PC 300 feet away.  There it could automatically update a graph maybe at [cosm.com](https://cosm.com/).  This a better solution, although it has been a pleasure walking over to the garden first thing and last thing every day this week to check the temperature.  Venus and Jupiter were brilliant as the crescent Moon was rising at dawn, and it was clear enough in the evening to adjust the sundial gnomon by making sure it was pointed exactly at the North Star.  That might be a bit more connecting to the cosmos than I really need. 

Here is a shopping list for Don Blair's prototype that he deftly illustrates above. The total cost will be about $100:

* [JeeNode]( http://shop.moderndevice.com/products/jeenode-kit) ($23)
* [JeeLink]( http://shop.moderndevice.com/products/jeelink-module-fully-assembled) ($37)
* [AA Power Board for JeeNode](http://shop.moderndevice.com/products/jeelabs-aa-power-board) ($16)
* [Thermistor]( http://www.redfishsensors.com/index.php/rsbr-3k-teflon.html) ($3 x 4)
* A 3 kOhm resistor for each sensor. Will cost pennies.
* A waterproof case for the JeeNode like the [Otterbox](http://www.adafruit.com/products/340) ($10)

It might be obvious to some that the sensor side of this wireless setup (the JeeNode and battery) is sufficiently small and lightweight to ride nicely on a kite or balloon camera rig.  It could carry temperature, humidity, H2S, and barometric pressure sensors and describe the air column. It might not be necessary to beam the data live, so it could be saved to a memory card on board. This would require slightly different hardware, which of course is also available, because there are now inexpensive tiny computers and sensors that will do just about any kind of remote control and sensing you can think of.  Some of these devices could be programmed to take every other photo after zooming in a bit for more detail, or alert the people on the ground that the camera is no longer shooting. 

These are some of the topics we plan to spend the weekend of September 22 and 23 thinking about and trying out.   If you would like to join us, [sign up here for LEAFFEST](https://docs.google.com/spreadsheet/viewform?formkey=dFlJZmc2bmJUdUoyQ3pjUzk5V2J5NWc6MQ#gid=0) in the next few days so we know when you are coming. 

Below is the time course of temperature at the center of my compost pile. This is a live graph and will update whenever I walk out to the garden and report additional readings. Someday, maybe this will happen automatically, and I can just stay inside.

<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"//docs.google.com/spreadsheet/tq?key=0ApRLDm8W39oxdEVOMWxfdnVWR2FLeWZUNnk4VmlLRXc&transpose=0&headers=1&range=A1%3AC99&gid=0&pub=1","options":{"vAxes":[{"titleTextStyle":{"bold":true,"color":"#222","italic":false,"fontSize":"13"},"useFormatFromData":true,"title":"Temperature (\u00b0F)","minValue":50,"viewWindowMode":"explicit","textStyle":{"color":"#222","fontSize":"13"},"viewWindow":{"min":50,"max":155},"maxValue":155},{"useFormatFromData":true,"viewWindowMode":"pretty","viewWindow":{}}],"series":{"0":{"pointSize":7},"1":{"pointSize":2}},"curveType":"function","booleanRole":"certainty","title":"Compost pile center temperature","animation":{"duration":0},"legend":"top","lineWidth":2,"hAxis":{"titleTextStyle":{"bold":true,"color":"#222","italic":false,"fontSize":"13"},"useFormatFromData":true,"title":"Time","viewWindowMode":"pretty","viewWindow":{}},"width":530,"height":480},"state":{},"chartType":"LineChart","chartName":"Chart 1"} </script>
