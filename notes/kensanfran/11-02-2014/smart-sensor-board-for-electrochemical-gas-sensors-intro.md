---
title: "Smart sensor board for electrochemical gas sensors (intro)"

tagnames: 'air-quality, air, monitoring, barnstar:empiricism, gas, sensor, electrochemical, nerds-for-nature, gas-sensor, electrochemical-sensor, echem328, data-logging, air-sensors, kentucky, first-time-poster'
author: kensanfran
path: /notes/kensanfran/11-02-2014/smart-sensor-board-for-electrochemical-gas-sensors-intro.md
nid: 11315
uid: 430796

cids: 10681,10685,10687,10692,13689,14132

---

![](https://publiclab.org/public/system/images/photos/000/007/691/original/echemX_328a_front.png)

# Smart sensor board for electrochemical gas sensors (intro)

by [kensanfran](../../../profile/kensanfran) | November 02, 2014 09:38

November 02, 2014 09:38 | Tags: [air-quality](../tag/air-quality), [air](../tag/air), [monitoring](../tag/monitoring), [barnstar:empiricism](../tag/barnstar:empiricism), [gas](../tag/gas), [sensor](../tag/sensor), [electrochemical](../tag/electrochemical), [nerds-for-nature](../tag/nerds-for-nature), [gas-sensor](../tag/gas-sensor), [electrochemical-sensor](../tag/electrochemical-sensor), [echem328](../tag/echem328), [data-logging](../tag/data-logging), [air-sensors](../tag/air-sensors), [kentucky](../tag/kentucky), [first-time-poster](../tag/first-time-poster)

----

###A smarter way to use electrochemical gas sensors
Perhaps the most promising near-term technology for accurately detecting many atmospheric pollutant gases within modest cost, power, and size constraints is the [electrochemical sensor cell](http://en.wikipedia.org/wiki/Electrochemical_gas_sensor). Recent "echem" sensors from [Alphasense](http://www.alphasense.com/index.php/air/) in particular (-A4 and -B4 models, for example see [CO-B4 datasheet](http://www.alphasense.com/WEB1213/wp-content/uploads/2014/10/COB4.pdf)) provide:
 
 + impressively low noise and sensitivity down to the very low ppb range
 + low cross-sensitivities to other gas species
 + ridiculously linear response across a wide detection range
 + 1% gain accuracy from the factory
 + built-in temperature compensation mechanism that provides an offset error signal on a fourth "Aux" pin 

All for less than $100 per unit in volume. Sounds fantastic, right? These are specs that usually match up with a $$$$ benchtop gas analyzer. Except...


####How do you get a good signal out of this thing?
And here's the rub. It turns out to be somewhat tricky to actually achieve those specs in a real-world circuit. Not impossible, but it takes a fair amount of analog-type thinking and careful design considerations to make sure various noise and calibration error sources don't creep in and ruin all those sparkly numbers on the sensor's datasheet. I'll get into error budgets and noise sources in future Research Notes, but it's not hard to imagine that any attempt to measure parts per billion of anything requires a perhaps fanatical attention to these sorts of details. 

And the sensors turn out to have something of their own personalities as well. Depending on their deployed environment, they may drift in gain and offset over time and temperature, and since they are typically gel-filled electrolytes exposed to air, they can dry out or become more saturated depending on moisture content in atmosphere. Oh well, here we are in the real world, what happened to that shiny datasheet again?

####But can't I just buy a circuit board?


[![alphasenseISB_bottom.JPG](https://i.publiclab.org/system/images/photos/000/007/685/medium/alphasenseISB_bottom.JPG)](https://i.publiclab.org/system/images/photos/000/007/685/original/alphasenseISB_bottom.JPG)   
*Alphasense ISB board with sensor underneath -- photo by Ken McGary*   


Well, yes, you can. Alphasense sells a high-performance analog board called the [ISB (Individual Sensor Board, ~$150USD)](http://www.alphasense.com/WEB1213/wp-content/uploads/2014/02/ISB.pdf) that takes full advantage of the B4 sensors. I've been evaluating one here for a while now and it's clearly a well-designed circuit. For example, it includes cleverly placed pin sockets on the blank backside to keep the sensor's noise-sensitive high-impedance lines as short as possible. If you're doing heavy-duty research in the low-ppb regions, you may want some of these in your toolbox. 


[![24hour_COchart_2_2_14_big.png](https://i.publiclab.org/system/images/photos/000/007/692/medium/24hour_COchart_2_2_14_big.png)](https://i.publiclab.org/system/images/photos/000/007/692/original/24hour_COchart_2_2_14_big.png)  
  * An early test recording with the CO-B4/ISB combination shows the ability to sense small changes in carbon monoxide concentration due to heating and ventilation system cycling and other house activities - graph by Ken McGary *  


Alphasense also makes a line of [2- to 4-sensor "AFE" boards](http://www.alphasense.com/WEB1213/wp-content/uploads/2013/11/3-way-AFE.pdf) for their smaller and not quite so sensitive (or expensive) A4 sensors. I'm sure these work great, too, though I haven't tried them. 

However, both of these boards have a number of idiosynchrocies for the DIYer and citizen scientist:

 + they are all analog-only, and still require at least good 12-bit if not 16-bit or better analog conversion for use in a digital system
 + the ISB requires an oddball 6V +/- 0.1V power supply
 + ISB and AFE boards are specifically customized and tuned at the factory for each particular sensor model's bias and gain requirements, and must be returned to the factory ($$) for mods or recalibration 

To my knowledge (and I've been looking) there aren't any other ready-made board options out there for Alphasense or any other brand of echem sensor. The basic circuit required is a classic potentiostat arrangement, which is nothing much new under the sun -- "clamp" a cell's voltage (keep both "Working" and "Reference" electrodes at the same potential) by controlling the current on a third "Counter" electrode. The current required to keep the cell's specifically-formulated chemistry in balance indicates the amount of reduction or oxidation and thus the level of sensed gas. There are a handful of app notes floating around from several vendors about how to do this properly, and Analog Devices among others does sell an evaluation circuit that is meant for echem cells, however these have similar quirks to the Alphasense units and are tricky to integrate into DIY systems.

####[Nature Nerds](http://nerdsfornature.org/) (and Texas Instruments) to the rescue!
I've been collaborating for over a year now with another Nature Nerd [Shaun Houlihan](http://www.hedlabs.com/) (who created some very helpful prototypes) and Peter Sand and Elliot Dicus with [Manylabs](https://www.manylabs.org/) (who are providing much-appreciated software and other development support) and a handful of other Nature Nerds to try and understand some of the problems with and advantages of these sensors. Shaun actually showed up at his very first Nerds for Nature meeting last year with his initial prototype echem board already in hand -- a cute little PIC-based gizmo with built-in bluetooth link that is still an inspiration for future echem form factors. 


[![shaun_echem_pic_board.jpg](https://i.publiclab.org/system/images/photos/000/007/687/medium/shaun_echem_pic_board.jpg)](https://i.publiclab.org/system/images/photos/000/007/687/original/shaun_echem_pic_board.jpg)  
* Shaun's PIC-based, BLE-enabled echem sensor board -- photo by Shaun Houlihan *  


However, a desire to have the Analog Front End chip on a more generally accessible platform like Arduino or Raspberry Pi led to a second prototype by Shaun in collaboration with our growing Air Quality group, a keep-it-simple breakout board with just the AFE, a fancy yet reasonably-priced 12/16-bit A/D converter (the [ADS1115](http://www.ti.com/lit/ds/symlink/ads1115.pdf) from TI), and a few supporting parts. This proved remarkably handy in getting some confidence in the performance of the AFE part, and our ability to extract useful sensor data from it (more about [this clever TI chip](http://www.ti.com/lit/ds/symlink/lmp91000.pdf) in the next Research Note).


[![hedlab_air_sensor_pcb_pic_on_keyboard_cropblur.jpg](https://i.publiclab.org/system/images/photos/000/007/688/medium/hedlab_air_sensor_pcb_pic_on_keyboard_cropblur.jpg)](https://i.publiclab.org/system/images/photos/000/007/688/original/hedlab_air_sensor_pcb_pic_on_keyboard_cropblur.jpg)
 * Shaun's echem AFE breakout board -- photo by Ken McGary *  



I've also been doing my own sensor circuit homework and have iterated through a few CAD versions of this new design. The main design goal was to integrate a complete smart sensor system in one small module, with all of the circuitry on one side of the board and the sensor on the other. Why dedicate all of that silicon to one little sensor? 

Well, the limitation of the breakout board approach comes down to one word, really, calibration. Since so many sensor and circuit subtleties can affect data quality, it became clear that what was really needed was a complete processor and datalogger system dedicated to each individual sensor. When these are integrated into commercial embedded systems, they are cocooned in an environment that provides for the very specific calibration requirements the application demands. For us folks building a system from scratch, well, that's no help at all. Again, there's a lot more detail to delve into here, so stay tuned.

[![echem_32_4_15_2014_front1.png](https://i.publiclab.org/system/images/photos/000/007/689/medium/echem_32_4_15_2014_front1.png)](https://i.publiclab.org/system/images/photos/000/007/689/original/echem_32_4_15_2014_front1.png)
  * An earlier concept for the smart echem board used an Atmel 32u4 processor with built-in USB port -- CAD image by Ken McGary *  


So that's the background, I'll show some initial real world data and detailed info on the circuit and project in upcoming Research Notes. We are about to deploy a few dozen of these as part of a [community air quality monitoring project in Louisville, KY](http://science.creativecommons.org/sensoredcity/), and before long we'll have a small batch available for purchase and are looking for savvy citizen scientists and resourceful researchers and motivated makers to help us give the design a thorough shakedown. And of course I hope to see all kinds of amazing applications being shared here on Public Lab as we bring this project up to speed and some of you start tinkering with them.

Thanks for reading,
Ken

