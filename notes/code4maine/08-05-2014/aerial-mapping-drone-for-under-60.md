---
title: "Aerial Mapping Drone for Under $60? "

tagnames: 'grassrootsmapping, barnstar:basic'
author: ajawitz
path: /notes/code4maine/08-05-2014/aerial-mapping-drone-for-under-60.md
nid: 11015
uid: 294634

cids: 9774,9777,9784,9795,9842,9845,9847,9912,9913,9917,9918,9920,9921,9924,9995,10363,10550,10568,10609,11518,11629,11630,12422,12473,15217

---

![](https://publiclab.org/public/system/images/photos/000/006/928/original/FlyingWing.jpg)

# Aerial Mapping Drone for Under $60? 

by [ajawitz](../../../profile/ajawitz) | August 05, 2014 16:31

August 05, 2014 16:31 | Tags: [grassrootsmapping](../tag/grassrootsmapping), [barnstar:basic](../tag/barnstar:basic)

----

[![wing.jpg](https://i.publiclab.org/system/images/photos/000/006/938/medium/wing.jpg)](https://i.publiclab.org/system/images/photos/000/006/938/original/wing.jpg)



##What I want to do
I want to build a very low-cost, programmable, UAV that can be used for the purposes of grassroots mapping and citizen-driven research.

.  The build must meet the following criteria

* The up-front cost of major components must be under $100 
* Must be accessible to non-experts and oriented towards producing quality research
* Must be capable of semi-autonomous flight following a pre-plotted course
* Must be able to accommodate cameras currently used in other aerial photography configurations
* Electronic components must be reusable in other applications (e.g Arduino) and specialized hobbyist components kept to a minimum
* Must be built using easily obtainable materials
* Electronics firmware and Mission Planner must be open source

##Why I'm interested

Whether used by farmers to monitor the health of their crops, environmental researchers to collect water temperature data or even archaeologists to view soil patterns from the air, unmanned aerial platforms are gradually becoming essential civilian research tools. Even so, for the vast majority of people around the world, autonomous aerial vehicles represent either scary military killing machines, or expensive toys for rich people. While citizen-scientists, grassroots researchers, humanitarian activists etc…​ have grown to recognize the enormous potential of having access to such technology, the dominant perception is still that it can only be achieved at significant expense. After-all, simple economic logic dictates that technological capability is directly proportional to monetary investment (in other words 'you get what you pay for'). It would seem a reasonable expectation then, that a flying robot capable of autonomously navigating a precise flight plan while deploying an assortment of 3D mapping cameras and sensors, would require significant monetary investment. 
This might have been the case in the past, but thanks to a unique process of open source development, it is very much possible to have an aerial mapping vehicle with considerable capabilities for less than $200!!! More than that, it should be possible to build almost the entire aircraft out of relatively common, off-the-shelf components and free (as in "beer") software!

Yet its possible that the complexity of such achievements have actually made it more difficult for non-experts to take advantage of such enormous potential without becoming drone hobbyists themselves.  Effective documentation written for non-experts (or rather people who might be experts in other fields...) is therefore necessary for the technology to reach its full potential.



###Aerial Mapping
In contrast to non-powered grassroots mapping platforms likes Kites and Balloons the flight path of a DIY Drone can be pre-programmed which would result in a more precise and consistent image layout. 
At present, various commercial models like the impressive [X8-M](https://store.3drobotics.com/products/x8-m) or the [Aero-M](https://store.3drobotics.com/products/aero-m?taxon_id=32) by 3DRobotics 
 have been specially designed for the emerging aerial mapping market and can be up and flying for roughly $5500. While this is barely a fraction of what a military vehicle would cost (even one of comparable size and capability) the price tag is still far beyond the range of most students, researchers, citizen scientists etc…​

##Design Considerations

###Anatomy of a DIY Drone
Whether fixed-wing and multirotor, most "diy drone' configurations share some very basic components.  The following "Anatomy of a DIY Drone" graphic outlines some of the most basic components shared by most diy drones currently.  Fixed-wing models differ in the fact that they require only one motors+ESC each.  


[![BlueDroneGraphic.png](https://i.publiclab.org/system/images/photos/000/011/338/medium/BlueDroneGraphic.png)](https://i.publiclab.org/system/images/photos/000/011/338/original/BlueDroneGraphic.png)

A detailed explanation of each component highlighted in the graphic can be found at- https://cribstone.github.io/humblehacker/2015/08/11/DIY-Drone-Basics.html

###Fixed Wing or Rotor?
 As can be observed in the two commercial models mentioned earlier, the most popular configurations for aerial mapping are fixed wing aircraft and multirotors.  Like their full-sized counterparts, each layout will have certain advantages and disadvantages which must be considered in the context of the task it will be performing.  Each situation will be different, but some basic pro and cons of each are outlined in the following-

####Fixed Wing Pros

* Requires only one motor (+speed controller)
* Structural materials can be inexpensive foam
* Covers greater distances, for longer, with less energy requirements
* Much less expensive overall

####Fixed Wing Cons

* Must be continuously moving (not good for focusing on precise fixed points)
* Flight Mechanics much more challenging for beginners
* Lower payload carrying capacity
* Less stable for cameras
* Less support in Open Source Autopilots (usually requires custom settings)
* Less documentation and support online

####Multirotor Pros

* Takes more precise pictures/measurements on a fixed point
* Higher payload capacity
* Camera's can be mounted on pan/tilt gimbal
* Much easier for beginners to fly
* More Autopilot features (Return to Home, auto hover etc...)
* Default configuration in most open source autopilots (requires less customization)
* More support and documentation

####Multirotor Cons

* More motors (+controller) = more $ (e.g quadrotor =4x more than fixed wing)
* Structural materials generally more expensive than foam, harder to DIY (aluminum, carbon, etc..)
* Requires more power (bigger battery) for less flight time
* More Expensive Overall

With affordability as a key project parameter and the fact that aerial mapping generally requires broad area coverage, a fixed wing aircraft seemed the obvious choice when I first began this project.  However, I soon discovered it was much more difficult to find online documentation for fixed wing aircraft then it was for a quadcopter setup.  Seeing as online documentation remains my primary resource, this turned out to make the fixed wing setup much more of a challenge than I expected.

As a result, I decided to build a quadcopter first as a testing bed for the various open source components I would later use on the fixed wing build.  The quadcopter build will also be used to evaluate various sensors like the LidarLITE while the fixed wing version is still in development.  While closely related to this project, I have been documenting it seperately in order to maintain the original focus of the low cost drone.  it can be found at-

https://cribstone.github.io/humblehacker/2015/07/18/Low-Cost-Quadcopter-Build-for-DIY-Mapping.html


[![Quadannotated.png](https://i.publiclab.org/system/images/photos/000/011/337/medium/Quadannotated.png)](https://i.publiclab.org/system/images/photos/000/011/337/original/Quadannotated.png)


###The Uber-DIY Build
Using the quadrotor as my testbed, I've been able to find ways to build almost every component, other than the brushless motors, using off-the-shelf components and significantly cutting the cost in the process.

As of the present, my ultimate "UBER-DIY ULTRA CHEAP DRONE" will include the following components-

* DIY Naze32 Flight Controller (STM32 dev board and GY-86 IMU)
* DIY Transmitter/Base Station (Arduino Mega2560 flashed with OpenTX in a recycled Spektrum Dx5e case
* DIY 433Mhz RX/TX (Arduino Nano+RF Module running OpenLRSng)
* DIY Electronic Speed Control (well this is probably a little extreme but who knows?)
* DIY Foam Flying Wing Airframe

For a more detailed explanation of these components see- https://cribstone.github.io/humblehacker/2015/08/13/The-DIY-Drone-Toolbox.html


The expectation of such an ambitious project is not so much for beginners to go out and build a 100% DIY UAV right away, but rather to demonstrate how certain components can be built from scratch if need be. Furthermore, one can imagine the documentation for each component requires a good deal of detail for which it would be impossible to fit into a single research note.  Therefore, this research note will serve more as a summary, while links will be provided to more detailed documents for each step of the process.

###The Flying Wing 
Flying Wings are often used for Aerial Photography, especially in the agricultural sector as with [this company in North Dakota](http://www.prairiebizmag.com/event/article/id/15187/).  A wing even makes a guest appearance on [an episode of the PBS series "History Detectives"](http://www.pbs.org/opb/historydetectives/video/2365281276/) (appearing at the 25:30 mark) when they map the location of a wrecked Civil War steamboat.  

With everything considered, I chose a flying wing design as the most cost-effective aerial mapping platform,


##Build Log

###The Airframe
My current flying wing build combines design elements from two popular build types.  The first method outlined in [this Youtube video](http://youtu.be/R_Zh5n46Gy0) utilizes a simple method known as the [Kline-Fogelman Airfoil](http://en.wikipedia.org/wiki/Kline%E2%80%93Fogleman_airfoil) by layering pieces of foam board found in any dollar store, while the other method, known as the [WallyWing](http://www.acesim.com/rc/construct0.html) utilizes premolded wings and fuselage from a $10 foam glider toy.
  
[![Wally.jpg](https://i.publiclab.org/system/images/photos/000/006/929/medium/Wally.jpg)](https://i.publiclab.org/system/images/photos/000/006/929/original/Wally.jpg)


 I used almost exactly the same electronics as shown in the first video-
18A ESC 
1300 kV Emax 2822 from HeadsUpRC
1300mah 30C DBY-Power Lipo Battery

  I even used the exact same propellor, which turned out to be a smart choice as it easily could've required additional adapters etc... if I had chosen otherwise.

  The result is an especially strong airframe with a broad wing area and a perfectly tapered leading edge.  Additional structural elements like steel rods and carbon fiber tape add structural reinforcement and bring the cost of base materials to roughly $25.

##The Pilot
As impressive as the flying wing airframe is in of itself, its potential as something truly useful comes down to its electronics.

###Brief History of Autopilot/Flight Controllers

Until somewhat recently, the development of DIY UAVs mirrored closely the popularity of the Arduino microcontroller board. Microcontrollers (MCUs) have existed for years in hobbyist/electrical engineer circles as a means of converting  analog signals into digital data and vice versa.  Arduino changed the game by creating a simplified programming method that could be accessible to virtually anyone regardless of expertise in programming or electrical engineering. The 8bit Arduino MCU made it possible for the two pioneering open source projects, known as [MultiWii]( http://www.multiwii.com/) and [Ardupilot](http://ardupilot.com/) through which most modern DIY UAVs are derived.  

Of the two original autopilots, MultiWii tended to be more oriented towards manual "sport" flying while Ardupilot was oriented more towards automatic flight controls.  This distinction has become less defined as more autopilot features have been added to MultiWii and its more derivatives.  There is one distinction that has only intensified as MultiWii evolved into 32bit Platforms such as [Cleanflight](http://cleanflight.com/) and Ardupilot evolved into [APM ](http://planner2.ardupilot.com/)and later [Pixhawk](https://store.3drobotics.com/products/3dr-pixhawk/?utm_source=google&utm_medium=cpc&utm_term=branded&utm_campaign=branded&gclid=Cj0KEQjwvJqvBRCL77m2-uKczsIBEiQAkx8VjIqvfsoqyfSDX2rscxRMGXSRJ8Myw8_xnzkqbmERSGYaAjdE8P8HAQ),..  The Pixhawk and other Ardupilot derivatives or significantly more expensive!  For example, the standalone Pixhawk flight controller currently retails at $199, whereas a MultiWii derivative known as the [Flip32+](http://www.readytoflyquads.com/the-flip32-187), which has roughly similar capabilities is currently sold for $27.

### The Original Multiwii Build
Such an extreme price difference was a major factor behind why I ultimately chose Multiwii when I first began this project.  But it wasn't the only factor...  The other factor is hinted at in its name...  In its original incarnation, MultiWii allowed users to program vehicles with high performance, navigation capabilities using nothing more than an Arduino board and Nintendo Wii remote!  

The Wii Motion Plus was an additional plug-in component to the Wii Remote that contained three gyroscopes capable of detecting altitude.  Until recently, buying these gyros individually would be cost-prohibitive, but by buying them in bulk, Nintendo was able to sell the manufactured product for less than the cost of the individual sensor.
[![WMP.jpg](https://i.publiclab.org/system/images/photos/000/006/165/medium/WMP.jpg)](https://i.publiclab.org/system/images/photos/000/006/165/original/WMP.jpg)

Extracted from their housings the usable components can be connected to each other like this-


[![WMP_NK_wiring1.jpg](https://i.publiclab.org/system/images/photos/000/006/162/medium/WMP_NK_wiring1.jpg)](https://i.publiclab.org/system/images/photos/000/006/162/original/WMP_NK_wiring1.jpg)

And connected to an Arduino like this-

[![triwii_arduino_wii2.jpg](https://i.publiclab.org/system/images/photos/000/006/163/medium/triwii_arduino_wii2.jpg)](https://i.publiclab.org/system/images/photos/000/006/163/original/triwii_arduino_wii2.jpg)

The fact that the platform was created around this very simple premise has ensured it retained this DIY emphasis even as more advanced, integrated units like the [NanoWii](http://www.hobbyking.com/hobbyking/store/__22322__multiwii_nanowii_atmega32u4_micro_flight_controller_usb_gyro_acc.html) have advanced beyond the original hack.

####The Updated DIY Build
##8Bit vs 32Bit?
  The project was rapidly nearing completion when I hit a major stumbling block...  It became increasingly clear that I would either have to sacrifice the capability for autonomous flight via GPS or upgrade from an 8Bit Arduino-based system to a more capable 32Bit system.  Considering the goal of this project is to design a low cost vehicle that can be used by Citizen Scientists rather than RC airplane hobbyists, I decided that autonomous flight is too important to sacrifice. While various hacks have been developed to add GPS navigation capabilities to 8bit flight controllers by converting the serial TX to an i2C signal, the hacks have seen few updates since 2012. Ultimately, it has become clear that overall development for 8Bit firmware platforms like Multiwii is slowing down while 32Bit forks such as [Cleanflight](http://cleanflight.com/) are attracting more contributions every day. Ultimately, this was the determining factor behind the switch to 32Bit as such considerations are of utmost importance for open source projects. _NOTE: For a more detailed comparison of 8bit and 32bit MCUs see-https://cribstone.github.io/humblehacker/2015/08/13/The-DIY-Drone-Toolbox.html_

###Naze32
   Unfortunately, there are no 32Bit equivalents of the Arduino Pro Mini, and the only 32Bit hardware currently supported by the Arduino platform, the Arduino "DUE", is far too unwieldy to use as a flight controller.  An increasingly popular Flight Controller called the [Naze32](http://abusemark.com/store/index.php?main_page=product_info&products_id=30) was developed for a version of MultiWii that was adapted for use on 32bit boards.  At less than $30, the "all-in-one" flight controller is comparable in price to the original "NanoWii" board I began the project with. Various Naze32 clones like the Flip32+ pictured below can be found for roughly $30.


[![Flip32_.jpg](https://i.publiclab.org/system/images/photos/000/011/427/medium/Flip32_.jpg)](https://i.publiclab.org/system/images/photos/000/011/427/original/Flip32_.jpg)



 Luckily, like the original Multiwii, it is possible to build a DIY Naze32 at an even lower cost!  As of the present, this will be my primary flight controller build.  An overview of this process is written below but a detailed post on the build can be found at- https://cribstone.github.io/humblehacker/2015/08/28/A-DIY-Flight-Controller.html

STM32
 Unlike the 8bit ATMega microcontrollers manufactured by ATMEL, the Naze32 and many other new FCs are based on a family ARM-Cortex chips called the [STM32](http://www.st.com/web/en/catalog/mmc/FM141/SC1169?sc=stm32).  
The STM32 can be purchased in any number of [evaluation kit](http://www.digikey.com/product-highlights/us/en/stmicroelectronics-stm32-kits/1495?WT.srch=1&mkwid=s0m93fQDD&pcrid=62954086515&pkw=_cat:tools&pmt=b&pdv=c)s in a form resembling an Arduino. 

[![STM32solo.png](https://i.publiclab.org/system/images/photos/000/011/428/medium/STM32solo.png)](https://i.publiclab.org/system/images/photos/000/011/428/original/STM32solo.png)

 However, support for programming these boards using the popular Arduino IDE is only in early stages as of Arduino 1.6.0.. This has proven to be a major challenge, as the chief advantage of the Arduino IDE is in its ease of use and accessibility for non-programmers.  While the STM32 has[ its own programming utility](http://www.st.com/web/en/catalog/tools/PF257525), it is far more technical than a non-expert would be accustomed to.  
  I have attempted to address some of these problems through a more detailed walkthrough which can accessed here- https://cribstone.github.io/humblehacker/2015/08/28/A-DIY-Flight-Controller.html
Alternately, the step by step tutorial that I used can be found here- [http://www.rcgroups.com/forums/showthread.php?t=2154329](http://www.rcgroups.com/forums/showthread.php?t=2154329).

  A DIY Naze32 needs only the following components-

  
  *An STM32 development board such as[ this one](http://www.banggood.com/ARM-Cortex-M3-STM32F103C8T6-STM32-Minimum-System-Development-Board-p-920184.html?currency=USD&createTmp=1&utm_source=google&utm_medium=shopping&utm_content=saul&utm_campaign=Electronic-xie-us&gclid=CjwKEAjwvbGqBRCs3eH4o5C74CYSJAB3TODsEyHQvZ4NQDNd4ugS2jTNIUNLgCtkmA5JTuyRhEAfphoCpjTw_wcB) available for roughly $6!


[![STM32solo.png](https://i.publiclab.org/system/images/photos/000/011/429/medium/STM32solo.png)](https://i.publiclab.org/system/images/photos/000/011/429/original/STM32solo.png)




  

A BMP085/BMP180 Barometric Pressure Sensor- [$2.75](http://www.banggood.com/BMP180-Digital-Barometric-Pressure-Sensor-Module-Board-p-930690.html?currency=USD&createTmp=1&utm_source=google&utm_medium=shopping&utm_content=saul&utm_campaign=Electronic-xie-us&gclid=CjwKEAjwvbGqBRCs3eH4o5C74CYSJAB3TODsu39JkKiBs9b6g_WUoq8CNB6OwL-4A1G778iOG_mt-hoC6evw_wcB)

[![BMP085.png](https://i.publiclab.org/system/images/photos/000/011/433/medium/BMP085.png)](https://i.publiclab.org/system/images/photos/000/011/433/original/BMP085.png)


 

*MPU6050 Accelerometer/Gyroscope (used in earlier NanoWii version)

[![MPU6050.png](https://i.publiclab.org/system/images/photos/000/011/434/medium/MPU6050.png)](https://i.publiclab.org/system/images/photos/000/011/434/original/MPU6050.png)




 

 *HMC5883L Compass/Magnetometer [$1.68](http://www.banggood.com/GY-273-HMC5883L-3-Axis-Electronic-Compass-Magnetic-Sensor-Module-p-964014.html?currency=USD&createTmp=1&utm_source=google&utm_medium=shopping&utm_content=saul&utm_campaign=Electronic-xie-us&gclid=CjwKEAjwvbGqBRCs3eH4o5C74CYSJAB3TODsvxlK02Fd2wpWQijGcK97RSAE3-rDgp6R_mdBOxo5UhoCpZrw_wcB)

[![HMC5883L.png](https://i.publiclab.org/system/images/photos/000/011/435/medium/HMC5883L.png)](https://i.publiclab.org/system/images/photos/000/011/435/original/HMC5883L.png)




 Alternately, a "10DOF IMU" like the[ GY-80](http://www.dx.com/p/gy-80-bmp085-9-axis-magnetic-acceleration-gyroscope-module-for-arduino-145912#.VU0Q5vlViko) or a [GY-86](http://www.ebay.com/itm/like/191600135686?ul_noapp=true&chn=ps&lpid=82) combines all of the above-mentioned sensors into an integrated unit.

The following graphic illustrates illustrates a DOIY Naze32 with connections to a GY-86 module.

[![GY-86Naze32nojtag.png](https://i.publiclab.org/system/images/photos/000/011/426/medium/GY-86Naze32nojtag.png)](https://i.publiclab.org/system/images/photos/000/011/426/original/GY-86Naze32nojtag.png)

###Programming
While Multiwii is intended for Arduino-based hardware, a 32Bit fork of the original MW firmware called [Baseflight](https://github.com/multiwii/baseflight) has become a  standard on its own accord.  A great advantage to _Baseflight_, and another derivative called[ _Cleanflight_](http://cleanflight.com/) is in its accessible interface via a web app.  
  Nevertheless, the fact that I would be starting from scratch compelled me to test with a "factory" produced Naze32 before attempting the DIY method outlined above. Once I got the board, I found both Baseflight and Cleanflight to be as easy as launching the webapp via the Chrome Browser, selecting the correct firmware for my board and flashing it.  Additional sensors like GPS, Bluetooth etc... can all be configured directly from the GUI  A command line interface is also available for custom functions. As much as I loved the DIY nature of the old Arduino/Processing driven MultiWii Gui, the webapp interface is a major improvement.  Furthermore, it smoothes over a lot of compatibility issues arising from different versions of MW.  

  While Baseflight is the default firmware for the Naze32, I quickly found Cleanflight to have better support for GPS navigation, and for new features in general. It should be noted however, that the Naze32 was originally more oriented towards RC enthusiasts who preferred manual controls over GPS navigation.  Therefore, features like Mission Plotting etc... are only recently making their way into the code base. It also resulted in my having to buy a new transmitter that could support "CPPM Mode" as a standard transmitter use the serial 
port required for the GPS to function properly.

####Programming the DIY Naze32
The DIY Naze32 build requires an additional programming step, outlined in details on the [DIY Flight Controller post](https://cribstone.github.io/humblehacker/2015/08/28/A-DIY-Flight-Controller.html).  Basically, a Baseflight/Cleanflight HEX file must be flashed using the [STElectronics Flash Loader utility](http://www.st.com/web/en/catalog/tools/PF257525).  The procedure can be tricky as bootloader mode can only be triggered when the two jumpers are in the right position.  The above-mentioned post includes detailed visuals to help in this process.

Once Baseflight/Cleanflight has been flashed to the board, and the sensors have been connected, it should function as well as any Naze32 Flight Controller!

####GPS (Update 5/15)
 One would hope that starting from scratch on a 32Bit platform would make adding a GPS easy...  Not quite...  Due to the recent addition of GPS navigation to Cleanflight, there is still precious little information concerning issues like the proper baud and refresh rate and how to configure the NMEA coordinates.  Furthermore, I will still be using the Adafruit Ultimate GPS module (aka MTK3339) and most available information appears to favor other modules like the UBlox.  I've found it to be especially difficult to change the default baud rate from 9600, though OTOH I can't seem to confirm whether a faster rate is even needed...

##The Build Process
As mentioned previously, the design is similar to a basic KfM2 Zephyr Wing only it uses premolded wings from a toy glider for the leading edge where the original design calls for a piece of 1 inch pink foam insulation.
  I accomplished this by cutting out the main structure in dollar store foam, while using plastic pins and glue to bring the two wing halves together at a 30 degree angle.

[![IMG_20140831_145746.jpg](https://i.publiclab.org/system/images/photos/000/006/930/medium/IMG_20140831_145746.jpg)](https://i.publiclab.org/system/images/photos/000/006/930/original/IMG_20140831_145746.jpg)

 The thin bottom board was reinforced with thin steel rods and popsicle sticks on the edges where ailerons are attached.

With the two pieces glued together, I then used the tailfins from the toy glider as the stabilizer fins and added ailerons made of balsa wood and a piece of plastic covering.  Slots were cut about two inches from center on both sides for servos which control the flaps through thin steel pushrods and plastic control horns on the flaps.
  
[![Airframe.jpg](https://i.publiclab.org/system/images/photos/000/006/931/medium/Airframe.jpg)](https://i.publiclab.org/system/images/photos/000/006/931/original/Airframe.jpg)

Additional structural reinforcement was added by applying carbon fiber strips with fast-drying epoxy.  I can't stress enough how amazing carbon tape is!  For little more than $7 you get incredible strength with neglibile weight difference!

[![IMG_20140905_175518.jpg](https://i.publiclab.org/system/images/photos/000/006/932/medium/IMG_20140905_175518.jpg)](https://i.publiclab.org/system/images/photos/000/006/932/original/IMG_20140905_175518.jpg)

Mesh hinge tape and Vinyl marking tape provide the final covering layer.

##Camera/Electronics Housing
 By far the most challenging aspect of the design was how to incorporate a space for the camera and electronics that stays shut while in flight but also allows for easy removal and/or adjustment on the ground.
  I did this by cutting the glider fuselage into two halves for which the bottom half would house the camera and the top half would house the electronics.  
 
  The top half was taped on one side to form a hinge, while a velcro strap wraps around to secure both halves of the fuselage while in flight.
[![Electronics.jpg](https://i.publiclab.org/system/images/photos/000/006/935/medium/Electronics.jpg)](https://i.publiclab.org/system/images/photos/000/006/935/original/Electronics.jpg)

###Old Electronics Layout (deprecated)
  For the flight testing/prototyping phase (or Pro Micro etc...) I used a miniature, ATMega32u4 microcontroller called the [Lil'Nardo](http://myownduino.com/pages/store/lil-nardo/) because its open headers don't require soldering connections directly and allow for rapid reconfiguration.  However, this did take up more space and requires a separate sensor board through which the power, transmitter, servos and sensors would be routed before connecting to the controller through standard jumper wires.

[![MultiWingSensorBoard_bb.png](https://i.publiclab.org/system/images/photos/000/007/716/medium/MultiWingSensorBoard_bb.png)](https://i.publiclab.org/system/images/photos/000/007/716/original/MultiWingSensorBoard_bb.png)




##Camera 
  The camera housing was created by cutting a section out of the bottom fuselage and hinged and secured with the velcro strap.
[![CameraHousing.jpg](https://i.publiclab.org/system/images/photos/000/006/933/medium/CameraHousing.jpg)](https://i.publiclab.org/system/images/photos/000/006/933/original/CameraHousing.jpg)

  The Mobius Action Cam can then fit into the housing with its lens detached and fitted to an opening in the bottom of the aircraft.


[![CameraLens.jpg](https://i.publiclab.org/system/images/photos/000/006/934/medium/CameraLens.jpg)](https://i.publiclab.org/system/images/photos/000/006/934/original/CameraLens.jpg)



###Transmitter
While many options exist for viewing and controlling live camera feeds from UAVs, It seems that the vast majority of camera+flying wing information is oriented towards a First Person View or "FPV" setup.  FPV usually involves a front facing camera transmitting real-time wireless video to a "pilot" wearing a headset similar to the old "virtual reality" goggles.  The pilot can thus control his vehicle as if he's flying himself. With the cost of FPV equipment getting cheaper and cheaper, this method is fast becoming one of the most popular means of RC control.  Unfortunately, at least in my view, it has very little relevance to the field of aerial photography.  Though, there might be great potential for mapping using live video feeds, I can't think of any use for FPV goggles, as I would want to include as many other people as possible.  
Nevertheless, after doing some research on wireless video transmission, I was happy to discover that I already have most of the pieces required!  
 Using the Mobius Video Out adapter cords, I connected a RX5808 Receiver to a cheap analog mini monitor (used for RV rear-view cams) by soldering some header pins and the antenna on a piece of perfboard

[![VideoRX.jpg](https://i.publiclab.org/system/images/photos/000/006/209/medium/VideoRX.jpg)](https://i.publiclab.org/system/images/photos/000/006/209/original/VideoRX.jpg)

The tiny transmitter will be connected to the camera via the USB adapter.  The only issue left to resolve is whether or not the Mobius battery will be enough to power the TX or if I have to connected to the main battery or add a new one.

[![VideoTX.jpg](https://i.publiclab.org/system/images/photos/000/006/210/medium/VideoTX.jpg)](https://i.publiclab.org/system/images/photos/000/006/210/original/VideoTX.jpg)


####LIDAR
  A new research note exploring options for a low-cost LIDAR sensor has been posted at http://publiclab.org/notes/code4maine/09-28-2014/options-for-low-cost-lidar.  Such a capability would allow for 3D scanning and open up limitless possibilities!

####TESTQUAD (Updated 11/15/14)
While it may seem counterintuitive, I actually found it to be much easier to first test the firmware, motors, esc etc... in a quadrotor configuration as there is far more documentation for Quads than for fixed or delta wings.  Also, once flight testing commences in full, the quad can takeoff and land in a much smaller space then the wing.
So with most of the design/build tasks completed on the wing, I've been using the quad build for the in-depth programming, tweaking, trimming, crashing activity that every build must go through.
As of 11/15/14, I'm happy to report that I have successfully attached the motors, esc, FC electronics to the frame, programmed the firmware, connected the receiver/transmitter, calibrated the ESCs, and tested the motors! (https://i.publiclab.org/system/images/photos/000/007/932/medium/Quad.jpg)](https://i.publiclab.org/system/images/photos/000/007/932/original/Quad.jpg)



###Outcomes
While proving to be by far the most challenging project I have yet attempted, I believe I have already made a very strong case that a programmable unmanned aerial vehicle can indeed be constructed for aerial mapping purposes at very low cost!
Already, discussions have begun with various environmental groups about how such a low-cost tool could be deployed to supplement costly overflights to monitor the health of Eelgrass ecosystems in Casco Bay, Maine.

[![MultiWingSensorBoard_bb.png](https://i.publiclab.org/system/images/photos/000/007/717/medium/MultiWingSensorBoard_bb.png)](https://i.publiclab.org/system/images/photos/000/007/717/original/MultiWingSensorBoard_bb.png)********