---
title: Thermal fishing bob
tagnames: thermal-fishing-bob, parent:thermal-photography
author: warren
path: /wiki/thermal-fishing-bob.md
nid: 632
uid: 1

---

# Thermal fishing bob

by [warren](../profile/warren), [donblair](../profile/donblair), [liz](../profile/liz)

December 13, 2011 17:23 | Tags: [thermal-fishing-bob](../tag/thermal-fishing-bob), [parent:thermal-photography](../tag/parent:thermal-photography)

This variation on the [thermal flashlight](/tool/thermal-camera) uses a cheaper **thermistor** instead of a non-contact IR thermometer ($20), but can only detect the temperature of things the sensor is literally **touching**.

## Questions

[questions:thermal-fishing-bob]


## Activities

[activities:thermal-fishing-bob]

****

The circuit looks like this:

<a href="https://www.flickr.com/photos/jeffreywarren/6506021589/" title="Thermal fishing bob circuit in Fritzing by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7143/6506021589_dfdcee435e.jpg" width="500" height="313" alt="Thermal fishing bob circuit in Fritzing"></a>

Read here for build instructions by Sophia (RISD), using a thermocouple taken from a cheap medical digital thermometer: http://publiclaboratory.org/notes/sobers/11-28-2011/temperature-sensor-led-light

![in-bottle](https://publiclab.org/sites/default/files/imagecache/default/DSC05653crop.jpg)

Here is one, assembled: 

<a href="https://www.flickr.com/photos/jeffreywarren/6481893499/" title="Thermal fishing bob by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7168/6481893499_faf99159dc_m.jpg" width="240" height="180" alt="Thermal fishing bob"></a><a href="https://www.flickr.com/photos/jeffreywarren/6481893795/" title="Thermal fishing bob by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7175/6481893795_1f149371ab_m.jpg" width="240" height="180" alt="Thermal fishing bob"></a>

### Concept

The idea is to put this in a waterproof container with the the thermistor poking through the outside (but not letting water in) and to "cast" this into a waterway while taking a long-exposure photograph. This will create a "light painting" where the colors describe the temperature of the water at that location. Eymund Diegel has been doing some good sketches of this, focusing on a version where you drag the package around on the bottom of the canal, but the light is on the surface of the water (this will allow mapping of bottom temperatures, but will require more waterproofing).

![eymund-sketch](https://publiclab.org/sites/default/files/imagecache/default/6481808803_73d35d279c_b.jpeg)

<a href="https://www.flickr.com/photos/publiclaboratory/6481806353/" title="Eymund's thermal fishing sketches by publiclaboratory, on Flickr"><img src="https://farm8.staticflickr.com/7146/6481806353_29434c1fe6_z.jpg" width="480" height="640" alt="Eymund's thermal fishing sketches"></a>

****

(The following was copied from [the thermal photography page](/wiki/thermal-photography) and should probably be [posted as an activity](/post?tags=activity:thermal-fishing-bob&title=Build a DIY "thermal fishing bob").

The thermal fishing bob project develops a DIY technology to visualize changes in water temperature, which can [indicate water pollution via industrial sources](http://www.publiclab.org/notes/Sara/06-13-2014/successful-thermal-fishing-bob-test-mapping-the-kendall-power-plant-thermal-plume) or [sewage](http://publiclab.org/notes/liz/1-15-2012/go-scum-update) 

The fishing bob is designed simply enough that anyone can build it and its components can be easily obtained from Home Depot and Radio Shack. 


### Project Goals:

To produce a cheaply made, easy to use piece of technology to track temperature changes in water. And to produce a product that can be easily altered to suit many innovative needs.

### Research URL’s:

First iteration of the Thermal Fishing Bob developed in Sara Wylie’s class at RISD: http://publiclab.org/wiki/thermal-fishing-bob

Second iteration of the Thermal Fishing Bob developed at 2014 Barnraising: http://www.publiclab.org/wiki/thermal-fishing-bob-barnraising
http://www.publiclab.org/wiki/thermal-fishing-bob-plots-boston-toolshed-raising

First long exposure pictures with the fishing bob:
http://publiclab.org/wiki/thermal-fishing-bob-plots-boston-toolshed-raising
http://publiclab.org/notes/Sara/04-23-2014/successful-thermal-fishing-bob-maps

[First Field test of the Fishing Bob](http://www.publiclab.org/notes/Sara/06-13-2014/successful-thermal-fishing-bob-test-mapping-the-kendall-power-plant-thermal-plume)

[Research Notes on development workshops MIT](http://www.publiclab.org/notes/kgrevera/05-05-2015/thermal-fishing-bob-development-workshop)

[Barnraising](http://publiclab.org/notes/Kaya9804/06-09-2014/thermal-fishing-bob-presentation-from-the-ne-barnraising)

[Northeastern University](http://publiclab.org/notes/Sara/05-23-2014/making-pedagogy-reflections-on-northeastern-university-thermal-fishing-bob-workshops)

[Research notes on towing the tool](http://www.publiclab.org/notes/kgrevera/05-04-2015/first-prototype-of-kayak-towable-thermal-fishing-bob-rig)

[Next steps on developing the tool](http://www.publiclab.org/notes/warren/06-07-2014/idea-for-5-analog-thermal-fishing-bob)

### Building Your Own

#### How To Guide

<a href="https://i.publiclab.org/system/images/photos/000/009/868/original/ThermalBobHowTo.pdf"><i class="icon icon-file"></i> ThermalBobHowTo.pdf</a>

The fishing bob’s tech is sealed within a waterproofed translucent container, a Koolaid mix container will do, with only the thermistor poking out the bottom (sealed around the edges with hot glue). The fishing bob is then wrapped in foam so that it floats, attached to a reel so it can be pulled, and dropped in the water. The thermistor reads changes in temperature and the LED within the fishing bob causes the fishing bob to change color in accordance with the temperature. The readings are recorded on the Arduino inside, which can then be read once it is plugged into a computer. 

While the fishing bob is being dragged across the water long exposure photos are being taken to create a “light painting” of the temperature gradient. One neat way to make these long exposure images is to use [glowdoodle](http://scripts.mit.edu/~eric_r/glowdoodle/index.php) from MIT.
 
### Materials

* translucent plastic containers that can be easily sealed for waterproofing such as a takeout soup container or Koolaid mix container
* 9 wires
* [thermistor](http://www.ebay.com/itm/NTC-10K-Ohm-1-3950-Thermistor-temperature-sensor-Waterproof-Probe-1m-Wire/261482445927?_trksid=p2141725.c100338.m3726&_trkparms=aid%3D222007%26algo%3DSIC.MBE%26ao%3D1%26asc%3D20141212152715%26meid%3Dd02e3321ac8a4f8d8d620c6fd1da0b8d%26pid%3D100338%26rk%3D6%26rkt%3D30%26sd%3D381128772508)
* [breadboard](http://www.amazon.com/BB400-Solderless-Plug-BreadBoard-tie-points/dp/B0040Z1ERO)
* [Arduino Uno](http://www.radioshack.com/arduino-uno-rev-3/2760128.html#.VVJ0uM6QbzI)
* [3 Color LED](https://www.sparkfun.com/products/10820)
* 9V batteries and holder
* [2 100 Ohm resistors](http://www.radioshack.com/100-ohm-1-4w-5-carbon-film-resistor-pk-5/2711311.html#start=7) 
* [1 180 Ohm resistor](http://www.radioshack.com/nte-1w118---res-1w-180-ohm-2%25/55078227.html#start=60&q=180%2BOhm%2Bresistor&sz=12)
* [1 10k resistor](http://www.radioshack.com/10k-ohm-1-4-watt-carbon-film-resistor-5-pack/2711335.html#q=10k%2BOhm%2Bresistor&start=1)
* hot glue gun
* packing tape
* wire strippers
* scissors
* small flathead screwdriver
* foam
* fishing/kite reel
* [Arduino to USB cord](http://www.monoprice.com/Product?p_id=5437&catargetid=320013720000066114&cadevice=c&kpid=105437&gclid=CjwKEAjwycaqBRCSorjE7ZewsmUSJABWzM54gRwfNJvfzTWdwXIImL5ZM5oj9_hCbUt6G_2YYRCpehoCzADw_wcB)
* computer

### Thermal Fishing Bob Arduino Sketch

http://publiclab.org/wiki/thermal-fishing-bob-barnraising

### Next Steps:

I am currently working with Sara Wylie on a project to make the thermal fishing bob towable behind a kayak. In previous testing the fishing bobs tended to submerge and become water damaged so we are working on a prototype that would be set into a floatation device. One concept is to wrap two fishing bobs in foam and set them into the legholes of a child’s floatie, duct taping them into place. The first test was successful, the fishing bobs stayed in place above the water and there was no noticeable water damage. A second idea is to attach three fishing bobs to a foam sled/boogie board with thermistors of differing lengths to take a 3D image of the thermal gradient. This idea has yet to be tested. A third idea is to utilize ideas from the coqui to transform the thermal fishing bob into a conductivity fishing bob. This idea is still in the brainstorming stage, but we will be building a prototype soon.

### Images

[![Untitled.png](https://i.publiclab.org/system/images/photos/000/009/869/medium/Untitled.png)](https://i.publiclab.org/system/images/photos/000/009/869/original/Untitled.png)

Thermal plume along the Charles River


[![Screen_Shot_2015-05-05_at_8.32.34_AM.png](https://i.publiclab.org/system/images/photos/000/009/871/medium/Screen_Shot_2015-05-05_at_8.32.34_AM.png)](https://i.publiclab.org/system/images/photos/000/009/871/original/Screen_Shot_2015-05-05_at_8.32.34_AM.png)

Fishing bob made at MIT workshop from a soda cup


[![Screen_Shot_2015-05-22_at_7.20.43_PM.png](https://i.publiclab.org/system/images/photos/000/009/982/medium/Screen_Shot_2015-05-22_at_7.20.43_PM.png)](https://i.publiclab.org/system/images/photos/000/009/982/original/Screen_Shot_2015-05-22_at_7.20.43_PM.png)


Thermal fishing bob circuit


[![Untitled3.png](https://i.publiclab.org/system/images/photos/000/009/873/medium/Untitled3.png)](https://i.publiclab.org/system/images/photos/000/009/873/original/Untitled3.png)

Fishing bobs ready to go


[![Screen_Shot_2015-05-12_at_5.59.31_PM.png](https://i.publiclab.org/system/images/photos/000/009/875/medium/Screen_Shot_2015-05-12_at_5.59.31_PM.png)](https://i.publiclab.org/system/images/photos/000/009/875/original/Screen_Shot_2015-05-12_at_5.59.31_PM.png)

Fishing bob being lowered into the river


[![Screen_Shot_2015-05-12_at_6.00.36_PM.png](https://i.publiclab.org/system/images/photos/000/009/876/medium/Screen_Shot_2015-05-12_at_6.00.36_PM.png)](https://i.publiclab.org/system/images/photos/000/009/876/original/Screen_Shot_2015-05-12_at_6.00.36_PM.png)



[![Screen_Shot_2015-05-04_at_4.44.30_PM.png](https://i.publiclab.org/system/images/photos/000/009/877/medium/Screen_Shot_2015-05-04_at_4.44.30_PM.png)](https://i.publiclab.org/system/images/photos/000/009/877/original/Screen_Shot_2015-05-04_at_4.44.30_PM.png)

First prototype of towable fishing bob

****

### Arduino code

<script src="https://gist.github.com/1447863.js"> </script>

### Updated Arduino code from 2013 Barnraising

<script src="https://gist.github.com/dwblair/7277807.js"></script>