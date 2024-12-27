---
title: "(Draft, don't look) Meta-Riffle: Researching how to build Electronic Circuits with the Riffle"

tagnames: 'draft'
author: pdhixenbaugh
path: /notes/pdhixenbaugh/09-15-2016/draft-don-t-look-meta-riffle-researching-how-to-build-electronic-circuits-with-the-riffle.md
nid: 13448
uid: 459085

---

![](https://publiclab.org/public/system/images/photos/000/018/049/original/breadboardpins.png)

# (Draft, don't look) Meta-Riffle: Researching how to build Electronic Circuits with the Riffle

by [pdhixenbaugh](../../../profile/pdhixenbaugh) | September 15, 2016 04:32

September 15, 2016 04:32 | Tags: [draft](../tag/draft)

----

Draft -- may contain stream of consciousness -- not ready for primetime, but feel free to look at the work in progress.

###What I want to do
- gather resources for programming the riffle
- learn where resources for the riffle are located
- build a breadboard circuit that lights up an LED
- share the discovery and learning process

The Riffle-beta came with two protoboards - designed to help make use of the 14 pin-outs that the Riffle has to make circuits with. Now I'm not an electronics expert compared with other public lab posters, but I have an introductory knowledge of Ohm's law (Voltage == Current * Resistance) and basic circuit-building, so let's give it a shot. This research note hopes to document the learning process for anyone else who may go through a similar learning process.

Eventually I'd like to build some simple circuits to measure conductivity on a tabletop, to get a handle on calibration and data handling, and eventually, some hardier circuits for a long deployment. But walk before you can swim, right? So how about *any* circuit? 

My goal: to light up an LED I found lying around, and measure the voltage at different points on the circuit.

Step zero: has anyone already done this in a research note? Looking at the [search results for "Riffle"](https://publiclab.org/search/riffle) doesn't show anything exactly like this, but there are people doing similar work, like @rebeccah and the conductivity circuit. Maybe I can look at what they're doing. (In my first note, I learned how to make the riffle blink at different rates, and measure RTC temperatures by looking at sketches/codes linked to in @kinasmith and @donblair's research notes.)

The first step -- where can I find documentation on the riffle?
My first stop is at the [Riffle Wiki](https://publiclab.org/wiki/riffle). As it stands currently, this contains links to the "Hardware and Software Development on Github." These are maintained by @donblair. While there are a whole bunch of people writing cutting edge sketches for the Riffle, these official repositories contain the tested and accepted code.

From the wiki:
> # Hardware and Software Development on Github
> 
> - [Openwaterproject](https://github.com/OpenWaterProject) -- the main organization on github
> - [riffle_328](https://github.com/OpenWaterProject/riffle_328) -- hardware designs, instructions and software for getting started with the Riffle_328 datalogger
> - [riffle_328-conductivity](https://github.com/OpenWaterProject/riffle_328-conductivity) -- Design considerations around conductivity
> - [riffle_328-depth](https://github.com/OpenWaterProject/riffle_328-depth) -- Depth measurement circuit prototype
> - [riffle_328-turbidity](https://github.com/OpenWaterProject/riffle_328-depth) -- Turbidity sensor prototype
>  - [riffle_328-thermistor](https://github.com/OpenWaterProject/riffle_328-thermistor) -- Connecting a thermistor to a Riffle
>  - [riffle_328-i2c](https://github.com/OpenWaterProject/rriffle_328-depth) -- Connecting i2c sensors to a Riffle
> - [riffle_328-one-wire](https://github.com/OpenWaterProject/rriffle_328-one-wire) -- Connecting one-wire sensors to a Riffle


Looking in these repositories yields some great information. The first one, "[Openwaterproject](https://github.com/OpenWaterProject)"" is the umbrella containing all the repositories of information about the riffle, and it's interesting to see all the work being done with it.

Next is [riffle_328](https://github.com/OpenWaterProject/riffle_328). This is a great one, with an exellent readme geared toward introducing anyone to the riffle. I found two labeled pictures of the riffle's pinouts as well -- one here and one nested in a folder [here](https://github.com/OpenWaterProject/riffle_328/blob/master/pics/drawing.svg). The labels "top of board" and "bottom of board" are important to get oriented. There's no full explanation about what each label means, but the important ones I recognize, like VBAT, GND, "D" (digital pins) "A" (analog pins), SCL & SDA (for I2C-type sensors) and 3V3 (provides regulated 3.3 V at some low current. What the current is, I don't know, but I've seen @bhickman boost the current using op-amps in his circuits.) I am sure that as I get more knowledgeable about the Riffle's uses, I'll learn more about the other specialized uses for the pinouts on the left side. 

I also like this picture (taken from the thermsistor repository) as it shows more graphically the pinouts with respect to the orientation of the top and bottom of the board. (Can the photo be automatically resized with the upload photo tool? I'll try again - it was having trouble uploading.)

![Protoboard diagram with orientation more clearly visible](https://github.com/OpenWaterProject/riffle_328-thermistor/raw/master/pics/thermistor_proto.png "thermistor_proto.png") 

Moving on! How does one with no prior arduino experience use these pinouts? And are the pinouts labeled the right way?

The first 30 protoboards sent out have the 2x7 pinouts [labeled in the wrong order](https://groups.google.com/forum/#!topic/plots-waterquality/k_kE7pXJp-8). The labeling will be fixed in the next run, but in the meantime, go by the pictures online (or just mentally swap the columns).

NEXT! How to write sketches to make use of the pinouts, and where to find that information? (HINT: I asked Don, and he hinted to look at the sketches in the 'low power' repository...) 
--To Be Continuted

(Also -- I don't know how to use an LED without burning it out -- but maybe this will help: https://learn.sparkfun.com/tutorials/light-emitting-diodes-leds)



###My attempt and results

###Questions and next steps
* Somewhere early on, I stumbled upon the riffle wiki, but now when I search "riffle", it doesn't come up. I don't remember where I first found it. I think the wiki should be pretty easy to find especially if there's information on it that will help people get started.

###Why I'm interested