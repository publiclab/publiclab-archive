---
title: Particle Electron
tagnames: cellular, web, data, datalogger, riffle, logger, sensor, 3g, data-logging, riffle-examples, data-logger, datalogger-option
author: kinasmith
path: /notes/kinasmith/09-09-2016/particle-electron.md
nid: 13436
uid: 445906

---

![](https://publiclab.org/public/system/images/photos/000/017/999/original/IMG_20160909_120416.jpg)

# Particle Electron

by [kinasmith](../profile/kinasmith) September 09, 2016 23:23

September 09, 2016 23:23 | Tags: [cellular](../tag/cellular), [web](../tag/web), [data](../tag/data), [datalogger](../tag/datalogger), [riffle](../tag/riffle), [logger](../tag/logger), [sensor](../tag/sensor), [3g](../tag/3g), [data-logging](../tag/data-logging), [riffle-examples](../tag/riffle-examples), [data-logger](../tag/data-logger), [datalogger-option](../tag/datalogger-option)

----

###New Hardware, yay
I just got my hands on one of the [Particle Electron](https://www.particle.io/) prototyping kits. The Particle Electron is a cellular 3g (yes, actually 3g) prototyping board which speaks the Arduino language and talks to the internet over a cellular data connection. It is however, categorically different from all the other cellular solutions for capable hobbyists. 

###How is it different?
It comes with an SIM Card, and Particle is an MVNO (Mobile Virtual Network Operator), which means you pay for your cell service through Particle, not through another provider. Which means it's cheap, and it's designed for Machine 2 Machine (M2M) communication, but you're also stuck within the Particle ecosystem. I'm not sure if this is a good or a bad thing yet. Particle has a complete backend built for this device including integration into all sorts of web stuff. You can hook it up to [IFTTT](http://ifttt.com/) (If This Than That) without any trouble at all and there is a whole interface built for setting Web Hooks to interact with various API's. I got set up posting data to [ThingSpeak.com](https://thingspeak.com/) in an afternoon. In fact....if you want to see what the temp and humidity of where I am right now...

#[You Can](https://thingspeak.com/channels/157245)

From what I've read it looks like doing normal TCP and requests outside of their web hook interface is pretty straight forward. There is some talk about how using their web hooks reduces data usage, which I will believe. 

###The weird things
There is no offline IDE. They have a tweaked version of Atom for a desktop IDE, but it has to send the code to their servers to compile it. It seems like the system was designed to have the code flashed to the device across the device's network connection (which doesn't make sense using cellular, due to data usage). Sending code to the device requires use of the command line (as far as I can tell), and the documentation is...while in depth, lacking some important details....for example, it was never mentioned that I should update the firmware on my device. I found that bit of info buried in the forms when my code wasn't running because I was compiling it for the most recent firmware version online. The documentation for more advanced things, like setting up Web Hooks using JSON, is a little weak.  

###Power
The next thing I'll work out is power consumption and techniques for power saving for longer term remote monitoring applications. I'm logging battery voltage with temp/humidity at the link above, if you want to look. Seems good so far. It's sending a data chunk every 60 seconds. It also has built in functions for battery voltage/charge state and Time, which is super nice. 

###Code
If you want, is [in this Gist](https://gist.github.com/kinasmith/8d05b6c99757d162fdcf53140f8ec6bd).