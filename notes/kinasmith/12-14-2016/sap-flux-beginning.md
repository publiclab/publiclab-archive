---
title: Sap Flux Beginning
tagnames: alaska, tree, sensor-networks, sensor, sapflux, circuits
author: kinasmith
path: /notes/kinasmith/12-14-2016/sap-flux-beginning.md
nid: 13782
uid: 445906

---

# Sap Flux Beginning

by [kinasmith](../profile/kinasmith) December 14, 2016 02:02

December 14, 2016 02:02 | Tags: [alaska](../tag/alaska), [tree](../tag/tree), [sensor-networks](../tag/sensor-networks), [sensor](../tag/sensor), [sapflux](../tag/sapflux), [circuits](../tag/circuits)

###Background

I'm working on a project helping to build some new tools to measure how trees (focusing on Birch) use water in the boreal forest in Alaska. The [Dendrometer's](https://publiclab.org/notes/kinasmith/09-09-2016/dendrometers) that I briefly described earlier is part of this system. The goal is to have a standalone family of devices which will measure and record the sap flow, water content, and circumference of 10 birch trees, in addition to the soil moisture, soil temperature, relative humidity, air temperature, and rainfall of the immediate area. With this data we hope to figure out how birch trees use water during the year, and how they will respond to the changing climate. More information about this is available in the paper published in Nature, [Deciduous trees are a large and overlooked sink for snowmelt water in the boreal forest](http://www.nature.com/articles/srep29504).


###Sapflux Theory

I'm working on replicating the sensing technique described in the paper, [Sapflow+: a four-needle heat-pulse sap flow sensor enabling nonempirical sap flux density and water content measurements](http://onlinelibrary.wiley.com/doi/10.1111/j.1469-8137.2012.04237.x/abstract), published in New Phytologist in 2012. This sapflux method uses heat pulses, where a heater and temperature sensors are installed in line with the direction of sap flow in a tree. The heater releases pulses of heat into the xylem (sapwood) of the tree and the temperature is measured upstream and downstream and axially (around the tree, sidways) of the heater. I'm not 100% clear on the physics of it, but depending on how fast the heat pulse arrives at each sensor, and the peak temperature at each sensor, the sap flow rate can be calculated as well as the moisture content of the wood. There is a lot of relatively complex math involved, which I don't pretend to understand, but thankfully that isn't my responsibility.

###The Hardware

To make this happen, there are a number of design challenges. The sensors and heater have to very small. They are installed in the xylem by drilling small holes into the tree. The larger to holes, the more damage to the tree, and the larger the effect to the sap flow in the area that you're trying to measure. The temperature sensors and heater must fit inside of 19 gauge needles, which are inserted into the tree. I'm making [Thermocouples](https://www.youtube.com/watch?v=Xp7ZNAc9Fis), from 0.005" dia thermocouple wire with a little [Capacitive discharge welder](https://publiclab.org/notes/kinasmith/07-12-2016/capacitive-discharge-welder) I made for this purpose. The heater is 10 ohms of [Constantan](http://www.omega.com/pptst/TFIR_CH_CI_CC_CY_AL.html) wire doubled over inside a needle. I'm using a [MAX31856](https://www.maximintegrated.com/en/products/analog/sensors-and-sensor-interface/MAX31856.html) thermocouple amplifier for each temp. sensor (3 in all), which have a 0.07degC resolution. This is important because the heat pulses which are being measured are typically 1degC or less of temperature change. 
Each sensor transmits its data wirelessly to a central logger and will be powered via a 2 watt solar panel and a lithium battery. I'm using the HopeRF RFM69HCW radios for communication. The ones I used for the dendrometers, which are increasing in popularity as Adafruit begins to market them and include them in hardware. The solar charger is pulled almost exactly from [Adafruit's Lithium ion solar charger board](https://learn.adafruit.com/usb-dc-and-solar-lipoly-charger/using-the-charger?view=all#design-notes). The heater driver is a high current boost-regulator capable of outputting 650mA at 6.5 volts, needed because the heater is 10 ohms and the battery will never have enough voltage to push 650mA through the wire.

###Housing

I'm working on the housing design now, and have a two part design which can accommodate for partial encapsulation of the PCB. I've had some circuit failures in the past due to water contamination and am looking for workable solutions to that issue. 

###Next Steps

The PCB design is complete to the best of my knowledge and I'll be ordering a test batch soon to see if all this stuff actually works. This is by far the most complex thing I've designed so far, and I have minimal amount of faith that it will actually work. But there is time to fix my mistakes, it's currently about -30F up here, so the trees aren't going to be moving anything liquid for quite some time.

###Help

I would like to get a handle on how the math works for this process, so if anyone is handy with large differential equations...(I think that's what they are?, take a look at [the paper](http://onlinelibrary.wiley.com/doi/10.1111/j.1469-8137.2012.04237.x/abstract) if you want....) please let me know!

Also if anyone who does circuit design wanted to take a look at my design and see if there are any glaringly obvious faults, that would be greatly appreciated. All the design files are on [github/kinasmith](https://github.com/kinasmith/), this board are the files [sap-flux-v10](https://github.com/kinasmith/UAF/tree/master/sap-flux/hardware/pcb).

###Pictures!
The version 1 housing installed on a test stump, waiting on PCB to test fitting, etc.
[![IMG_20161207_113455.jpg](https://publiclab.org/system/images/photos/000/019/040/large/IMG_20161207_113455.jpg)](https://publiclab.org/system/images/photos/000/019/040/original/IMG_20161207_113455.jpg)

It has a lid that slides over it and secures with two screws. Solar power goes in the bottom. Hopefully waterproof to rain that obeys gravity. 
[![IMG_20161207_113431.jpg](https://publiclab.org/system/images/photos/000/019/041/large/IMG_20161207_113431.jpg)](https://publiclab.org/system/images/photos/000/019/041/original/IMG_20161207_113431.jpg)

The 4 needles are inserted into the xylem of the tree into holes that are drilled for them, 7mm apart.
[![IMG_20161207_113532.jpg](https://publiclab.org/system/images/photos/000/019/042/large/IMG_20161207_113532.jpg)](https://publiclab.org/system/images/photos/000/019/042/original/IMG_20161207_113532.jpg)

The proto board I built as part of my test rig to test feasibility. Those 4 larger IC's are the thermocouple amplifiers. The wire in the foreground is one of the thermocouples not installed into a needle. 
[![IMG_20161207_113412.jpg](https://publiclab.org/system/images/photos/000/019/043/large/IMG_20161207_113412.jpg)](https://publiclab.org/system/images/photos/000/019/043/original/IMG_20161207_113412.jpg)

The boost regulator protoboard I made to test it. First time soldering a DFN part to a home-made circuit board. It worked better than expected. 
[![IMG_20161121_154306_HDR.jpg](https://publiclab.org/system/images/photos/000/019/045/large/IMG_20161121_154306_HDR.jpg)](https://publiclab.org/system/images/photos/000/019/045/original/IMG_20161121_154306_HDR.jpg)


These are graphs of single heat pulse the test rig of a cut-off round of birch in my shop. The upstream sensor is below the heater, the downstream sensor is above the heater, and the 'side' sensor is beside the heater. Time is in minutes from the start of the pulse as 0. 

[![Rplot.png](https://publiclab.org/system/images/photos/000/019/044/large/Rplot.png)](https://publiclab.org/system/images/photos/000/019/044/original/Rplot.png)














