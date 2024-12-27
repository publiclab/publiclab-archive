---
title: "Smart sensor board for electrochemical gas sensors (basic info)"

tagnames: 'air-quality, barnstar:basic, sensor, nerds-for-nature, gas-sensor, electrochemical-sensor, echem328, data-logging, air-sensors'
author: kensanfran
path: /notes/kensanfran/11-04-2014/smart-sensor-board-for-electrochemical-gas-sensors-basic-info.md
nid: 11318
uid: 430796

---

![](https://publiclab.org/public/system/images/photos/000/007/715/original/echem328a_back_anglelogo.png)

# Smart sensor board for electrochemical gas sensors (basic info)

by [kensanfran](../../../profile/kensanfran) | November 04, 2014 09:53

November 04, 2014 09:53 | Tags: [air-quality](../tag/air-quality), [barnstar:basic](../tag/barnstar:basic), [sensor](../tag/sensor), [nerds-for-nature](../tag/nerds-for-nature), [gas-sensor](../tag/gas-sensor), [electrochemical-sensor](../tag/electrochemical-sensor), [echem328](../tag/echem328), [data-logging](../tag/data-logging), [air-sensors](../tag/air-sensors)

----

###Introduction

In my first [Research Note](http://publiclab.org/notes/kensanfran/11-02-2014/smart-sensor-board-for-electrochemical-gas-sensors-intro) I introduced a new smart sensor module for detecting toxic gases and explained some background of the project. Now I'll start to get into the details of the design, and introduce the bigger picture of how these might be used effectively in the real world. 

I've dubbed this new board the **echem328**. It is an iteration of previous prototype designs as I discussed in the intro, but it is also inspired by other modular smart sensor designs, for example this [MIT “Stack” project for wireless sensing applications](http://resenv.media.mit.edu/Stack/).  I've also directly borrowed the concept of the Smart Transducer Interface Module (STIM) from [IEEE Standard 1451](http://en.wikipedia.org/wiki/IEEE_1451) which describes "a set of open, common, network-independent communication interfaces for connecting transducers (sensors or actuators) to microprocessors, instrumentation systems, and control/field networks" and uses Transducer Electronic Data Sheet" (TEDS) format to store sensor calibration data. 

###Design Philosophy
The echem328 is based on Arduino open-source hardware and software environments, but takes on a new more integrated physical form factor that is also stackable and easily included in all sorts of embedded systems using a variety of standard interface protocols. Beyond it's fundamental echem sensor interface, the echem328 is also designed to perform a range of remote sensing and data logging functions and is highly modifiable and programmable. The circuit board has many options selectable by jumper installation or software modification. 

Reducing component and board cost _per se_ was not a primary consideration during circuit design. Rather, I focused on overall value, reliability, and flexibility. For example, the circuit board is a four-layer high-density affair (expensive!) but  the internal power and ground planes allow a smaller overall system footprint while ensuring lower noise and EMI.

On the other hand, it is anticipated that after some field experience with these circuits, a “devolved” or “evolved” or perhaps even “minimum viable” version of this circuitry will find definition, targeted towards a specific application that will make another iteration worthwhile. In the mean time, this platform should serve as a solid development platform for evaluating these various options, and for gaining valuable experience in a variety of field trials so that future circuit refinements are based on convincing, real-world performance data.


###Calibration
The general idea is that the module not only is smart (has a local microcontroller) it also knows intimate detail about the particular sensor on the board as well as error sources and temperature offsets in the module's own circuitry, which is "metadata" stored in local non-volatile memory. More than that, it has the remaining pieces of the software puzzle (error correction algorithms, previous calibration history, other system and sensor diagnostics, command parser and scheduler) to receive commands, decode sensor signals, and transmit accurate sensor readings over a serial communications interface in predefined scientific units (typically parts per million or billion concentration). 

Alternately, in a format closer to the traditional IEEE1451 style, this all of this calibration metadata would be transmitted along with the raw data so that final computations can be performed on the system's host processor. This can be a "chatty" way of doing things, but I think there is potential to effectively store this metadata in the "cloud" and do the data processing there as well (IEEE 1451 calls this a "virtual TEDS"). 

Another part of my exercise has been building up various DIY calibration rigs using pre-mixed cal gases and valves and flow sensors and mass flow controllers and so on. The general idea is to have the calibration rig talk to the sensor board to perform various auto-calibration routines. Yes, the Alphasense sensors are calibrated to within 1% at the factory, but as I mentioned it's never that simple. For example the AFE chip's TIA feedback resistors have a tolerance of 5%. Ooops! So that's another thing to do, figure out how to precisely characterize the board itself and collect metadata that can (mostly) subtract these errors back out of the signal. This and many other calibration topics deserve a whole other discussion which I'll save for future Research Notes. 

###Communications
In either case, the ultimate goal is some sort of plug-and-play interchangeable sensor pod that can also be modified to each system's needs via software changes and specialized backpack interface boards. USB? RS-232? Bluetooth? RS-485? SDI-12? WiFi? I2C? GSM? There’s never room or budget to include them all. 

[![echem328_revx_side_pins.png](https://i.publiclab.org/system/images/photos/000/007/705/medium/echem328_revx_side_pins.png)](https://i.publiclab.org/system/images/photos/000/007/705/original/echem328_revx_side_pins.png)
  * A 3D side view with the sensor interface connector on the left projecting down to mate with a stacked sensor board, remaining connectors are aimed upwards for mating with a bakPAK or other custom expansion or prototype board -- CAD image by Ken McGary *  

My answer -- if you need something beyond a simple TTL serial type control link, put the actual electrical and physical interface on another, simpler, low-cost plugin board, which I dub a bakPAK. I'm planning to develop a whole library of bakPAKs for common and uncommon interface protocols, and will soon provide easy-to-use CAD templates so that you can roll your own.

[![STIM_GROVE_BAKPAK_concept1_3D_8_13_14.png](https://i.publiclab.org/system/images/photos/000/007/704/medium/STIM_GROVE_BAKPAK_concept1_3D_8_13_14.png)](https://i.publiclab.org/system/images/photos/000/007/704/original/STIM_GROVE_BAKPAK_concept1_3D_8_13_14.png)  * Conceptual design for a Grove connector bakPAK board - CAD image by Ken McGary *


###Form Factor
The **echem328** is designed to hold an echem sensor in a socket directly on the back side of the board. This universal echem pad layout allows most known 3 and 4-pin electrochemical sensors to be plugged into a socket soldered directly to the module, for minimum electrical noise pickup and a compact footprint. 

[![echemX_328a_back.png](https://i.publiclab.org/system/images/photos/000/007/706/medium/echemX_328a_back.png)](https://i.publiclab.org/system/images/photos/000/007/706/original/echemX_328a_back.png)
  * Bottom side of echem328 board showing universal echem sensor socket pads -- CAD image by Ken McGary *   

The board has four layers (internal power and ground planes) and is 1.75” square with rounded corners. The board diagonal is 2.35” so it will fit inside many common outdoor junction boxes or even short lengths of pipe. I have several variations in mind of a DIY enclosure scheme in this direction. The square form factor allows these to be stacked in X or Y to fit a few different manifold ideas I’m working on. 

All connectors on the board use 0.1” spaced pins, and even the corner mounting holes are on the same layout, so standard 0.1” grid protoboard can be used to build interface and sensor boards that will easily stack with this core module.


[![echem328_reva_mech.png](https://i.publiclab.org/system/images/photos/000/007/707/medium/echem328_reva_mech.png)](https://i.publiclab.org/system/images/photos/000/007/707/original/echem328_reva_mech.png)  * echem328 board dimensions *  

The corner holes are spaced so that the board can be mounted with four standard .25" dia  round or hex standoffs without obstructing or harming any board components or traces. The current layout provides .125” through-hole clearance, more than enough for a 4-40 screw and barely enough for an M3 metric screw. 

###Connectors
A 10-pin expansion port (PX) allows for debug, user interface, or other custom functions, and includes two spare digital pins, four analog input pins that can also be regular digital I/O pins. Two uncommitted LEDs for connecting to whatever signals you want to monitor. PX also includes an optional jumper from board VREF to the MCU’s AREF input.

[![echem328_pic2_crop.JPG](https://i.publiclab.org/system/images/photos/000/007/708/medium/echem328_pic2_crop.JPG)](https://i.publiclab.org/system/images/photos/000/007/708/original/echem328_pic2_crop.JPG)  * A prototype echem328 on the bench with attached FTDI Friend serial to USB adapter -- photo by Ken McGary *  


A 20-pin I/O port (PBUS) includes UART, SPI, and I2C signals and two interrupts which can be jumpered to A/D and real-time clock alert signals. Several smaller signal groupings and standard pinouts are included within this bigger connector:

 + The left 2x3 pins (1-6) form a standard Arduino In-System Programming (ISP) connection including main SPI signals. This is typically only used once to load the Arduino bootloader but can also be used to upload MCU code directly using another development environment.
 + Even-numbered pins 6-16 form a standard “FTDI Friend” serial connection for USB, Bluetooth, and other UART-based protocol adapters.
 + MCU interrupts INT0 and INT1 are at PBUS pins 20 and 18 respectively. These pins can alternately be used as spare digital I/O pins (D2/3).


[![echem328x_photo_backbench.JPG](https://i.publiclab.org/system/images/photos/000/007/709/medium/echem328x_photo_backbench.JPG)](https://i.publiclab.org/system/images/photos/000/007/709/original/echem328x_photo_backbench.JPG)  * echem328 prototype on the back porch sending data to a laptop via an AdaFruit EZLink Bluetooth adapter -- photo by Ken McGary *  

The PAI connector provides AFE output signals lined up across from A/D input signals, so that for many applications straight-across jumpers are used But if circuit modifications are desired then these and some related sensor signals as well as power, ground and reference are available here. Also, the raw sensor signals are available on a 6-pin single row connector. This can be used during circuit debug or to locate a sensor external to the board (not generally advised due to noise pickup issues).

[![echem328_revx_front_functioncodes.png](https://i.publiclab.org/system/images/photos/000/007/710/medium/echem328_revx_front_functioncodes.png)](https://i.publiclab.org/system/images/photos/000/007/710/original/echem328_revx_front_functioncodes.png)  * Board function and connector layout -- CAD image by Ken  McGary *  

###Microcontroller
To keep up with all of this activity, the **echem328** uses the ubiquitous Atmel ATMega328P-A, same as used in the Arduino Uno board and countless Arduino clones and variations (thus the module name). If there is another MCU in your system that could do the basic job of talking to the AFE and keeping track of calibration data, then this board can be used _sans_ MCU as an I2C “breakout board”. However, in general the calibration data is best kept with the sensor itself, and the incremental cost of the MCU and related components is typically not prohibitive.  A local MCU also lets this act as an autonomous device. For example, a battery and a bluetooth stick or SD card backpack board with the echem328 in a little DIY container could be hung from a telephone pole for a few weeks to log traffic pollution in a suspected hotspot -- that sort of thing.

As for which particular processor to use, I flip-flopped among several options before finally falling back to the trusty, if boring and memory-stingy '328. A previous version almost used a 32u4 _a la_  Arduino Leonardo. I think the '1284 is conceptually a pretty cool chip for this sort of thing, and of course the new whiz-bang ARM Cortex processors leave these all in the dust feature-wise. But consider:

 + The Arduino code base and libraries still have their roots in the '328/Mega2560 world and other features using the newer processors often require more fiddling with arcane include files, use of buggier beta-version compilers, and so on. 
 + A lot of well-documented work has been done over the years to develop very [low-power remote computing techniques with the '328 family](http://www.gammon.com.au/forum/?id=11497).
 + As a consumer USB can be a pretty nifty interface but as a DIY circuit developer it can be [a real pain to work with](https://www.sparkyswidgets.com/leophi-v2-and-arduino-ide/), and [Vendor and Product ID codes don't come cheap](http://www.oshwa.org/2013/11/19/new-faq-on-usb-vendor-id-and-product-id/).
 + I anticipate that this module will most often be integrated into a bigger system that is also performing other tasks (weather station, etc.) and so this doesn't need to be a screamer of an MCU. And in fact, slower clock and signal speeds are arguably better here as we are mixing analog and digital in the same small space -- noise should be lower with a simpleton like the '328.

The echem328 MCU does include 1KB of EEPROM which can be used for storing rudimentary calibration data. For more extensive calibration metadata or for logging sensor data between network updates, more memory is required and so a serial EEPROM device can be included on the board (up to 128Kx8)There's also a spot for a battery-backed DS1339 Real-Time Clock (RTC) to schedule self-tests and log various calibration and sampling data with accurate timestamps.



###Taking Some Data
OK, that's plenty of circuit wonkery for now, I'll get into more circuit analysis in a future post. Now let's get a taste for what this thing can do in the real world! 

[![pipe_sniffer_1.jpg](https://i.publiclab.org/system/images/photos/000/007/711/medium/pipe_sniffer_1.jpg)](https://i.publiclab.org/system/images/photos/000/007/711/original/pipe_sniffer_1.jpg)  * A quickie "pipe sniffer" enclosure for echem328 field testing -- photo by Ken McGary *  

I've rigged up a simple "drain pipe sniffer" that will accept the sensor board in one end, powered by a 9V battery and covered by a teflon-impregnated fiber to keep out dust and liquids and to help moderate airflow across the sensor. As the sensor can be sensitive to barometric pressure extremes, airflow changes can have an impact on readings.


[![pipe_sniffer_2.jpg](https://i.publiclab.org/system/images/photos/000/007/712/medium/pipe_sniffer_2.jpg)](https://i.publiclab.org/system/images/photos/000/007/712/original/pipe_sniffer_2.jpg)


These early tests don't show highly "accurate" data as it was collected before all of my calibration contraptions are in place. However, gain and offest values are certainly within a few percent of target. So these charts should show some idea of the basic performance this circuit is capable of, and how it might be applied to a variety of research problems.

The top chart shows CO readings from a bike ride along Alemany Blvd here in San Francisco, which mostly parallels the 280 freeway. The sensor was placed sensor-side up in the water-bottle pouch on the side of my backpack. So you see groups of cars passing, as well as the last two big humps which are crossing a pedestrian bridge across the freeway to a small park, and then after a few minutes , crossing back over with the sensor on the downwind side rather than upwind so numbers are slightly offset but the profile is similar. The first big peak at 0.6 ppm is actually me exiting through my garage which seems to carry some residual CO.


[![typical_co-b4_signals_rev2.png](https://i.publiclab.org/system/images/photos/000/007/713/medium/typical_co-b4_signals_rev2.png)](https://i.publiclab.org/system/images/photos/000/007/713/original/typical_co-b4_signals_rev2.png)

The bottom chart shows a quick car ride to a nearby neighborhood. I put sensor in the cup holder between the two front seats. The first little rise is starting the car with the windows closed, then the big spike is when I open the car door and get out to push the garage door close button -- a bunch of exhaust clearly filled up the car. Then I drove for a couple of minutes with windows up (gee, is it stuffy in here?), then rolled them down a couple of minutes later so you see levels drop and then dissipate. There's a small bump again up to almost 0.5 ppm as I crossed over the 280 freeway. Since 5 - 10 ppm is the "[range of increase in average outdoor CO found associated with a significant increase in heart disease deaths and hospital admissions for congestive heart failure](http://www.coheadquarters.com/ZerotoMillion1.htm)" and 9ppm is the US EPA 8-hour exposure limit for CO, if you're in your car a lot or if you have heart conditions you might consider that the outside air is probably healthier than the inside air....

I'll show more real-world data in future Research notes but this gives you a flavor of what's possible. Of course once we get this thing running smoothly there are all sorts of stationary air quality monitoring applications as well. Even UAV and other robotics-based sensing applications are in the planning stages thanks to a few other collaborators. Stay tuned!


Thanks for reading,
Ken
