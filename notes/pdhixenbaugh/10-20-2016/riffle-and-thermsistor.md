---
title: "Riffle and Thermsistor"

tagnames: 'riffle, riffle-beta, activity:riffle, thermsistor'
author: pdhixenbaugh
path: /notes/pdhixenbaugh/10-20-2016/riffle-and-thermsistor.md
nid: 13629
uid: 459085

cids: 17844

---

![](https://publiclab.org/public/system/images/photos/000/018/490/original/riffle___thermsistor.png)

# Riffle and Thermsistor

by [pdhixenbaugh](../../../profile/pdhixenbaugh) | October 20, 2016 00:03

October 20, 2016 00:03 | Tags: [riffle](../tag/riffle), [riffle-beta](../tag/riffle-beta), [activity:riffle](../tag/activity:riffle), [thermsistor](../tag/thermsistor)

----

###What I want to do
Trial and Documentation Test for using a thermsistor with the Riffle. The documentation I am following is here: https://github.com/OpenWaterProject/riffle_328-thermistor.
For a more step-by-step look at using the riffle documentation, see the previous note for the [one-wire sensor](https://publiclab.org/notes/pdhixenbaugh/10-13-2016/testing-riffle-documentation-1wire).

### Building the Circuit

I built it like this so I could easily remove the Riffle from the breadboard before loading the code onto the riffle (as a precaution in case having things attached to riffle pins doesn't let things upload properly the first time). *Spoiler alert:* Turns out I didn't need to remove anything to upload.


[![IMG_20161019_193128.jpg](https://publiclab.org/system/images/photos/000/018/489/large/IMG_20161019_193128.jpg)](https://publiclab.org/system/images/photos/000/018/489/original/IMG_20161019_193128.jpg)

### Uploading the code and troubleshooting / debugging

I already had all the necessary libraries, so I didn't copy over the libraries as the documentation suggested. (Maybe it could be changed to read "Copy all of the libraries labeled in the "libraries" folder to the "libraries" folder in your Arduino IDE "sketchbook" folder, **unless they are already present.**"

Maybe "Then, upload the "riffle_thermistor.ino" code onto the Riffle, choosing "Arduino UNO" as the board type. " could link to Riffle upload tips and tricks (including switch direction to USB/lith, troubleshoot by disconnecting all wires and batteries, etc.)

** Problem with computer not recognizing the riffle. Light comes up, but computer doesn't detect it. Going to try with a different usb cable / other tricks. *A different USB cable fixed it*

***Problem Uploading - beyond my skill level. Compiler found an error with a line of code: 'sensors' was not declared in this scope."

I asked on plots-waterquality and publiclaboratory discussion lists, and thanks to Bob Steven's attention to detail, decided to comment out references to DallasTemperature and OneWire libraries, as they might not be needed here. Submitted pull request to suggest these changes to the code: https://github.com/OpenWaterProject/riffle_328-thermistor/pull/1.

***Next Error: 
`
"avrdude: no programmer has been specified on the command line or the config file
         Specify a programmer using the -c option and try again"
`

I tried looking around in the IDE, but a google search lead me to [this thread](https://forum.arduino.cc/index.php?topic=400338.0), hinting that this is a bug in my version of the IDE, 1.6.8. So I updated to the current version, v.1.6.12

This upgraded fine and the code functions! But does it respond to changes in temperature correctly?

### Temperature trials

At room temperature

    Now: 1476962467 Alarm Set for: 1476962482
    Battery Voltage is: 4.71 Volts.
    Average analog reading 492.00
    Thermistor resistance 9265.54
    Temperature 26.73 *C
    RTC Temp is: 25.25 C.
    SD Card Initializing...Success
    File Opening...Success
    SD Card Written. Sleeping for 15 seconds.


[![IMG_20161020_112834.jpg](https://publiclab.org/system/images/photos/000/018/515/large/IMG_20161020_112834.jpg)](https://publiclab.org/system/images/photos/000/018/515/original/IMG_20161020_112834.jpg)


And in cold water (I'm expecting it to approach 0 *C, since the ice and water should be in equilibrium at this phase change). The temperature decreases, but doesn't get there.


    Now: 1476962902 Alarm Set for: 1476962917
    Battery Voltage is: 4.73 Volts.
    Average analog reading 534.80
    Thermistor resistance 10954.53
    Temperature 22.96 *C
    RTC Temp is: 25.00 C.
    SD Card Initializing...Success
    File Opening...Success
    SD Card Written. Sleeping for 15 seconds.




Hot water? Checking the operational temperature of the thermistor to make sure I don't accidentally break it. I found this

[![IMG_20161020_113813.jpg](https://publiclab.org/system/images/photos/000/018/516/large/IMG_20161020_113813.jpg)](https://publiclab.org/system/images/photos/000/018/516/original/IMG_20161020_113813.jpg)


`Note that even though the thermistor can go up to 125°C the cable itself maxes out at 105°C so this thermistor is not good for measuring very very hot liquids`

It doesn't necessarily say it will break at high temp, but certainly max out. I don't want to risk it, so I'm using hot water that's just slightly hotter than lukewarm.

The Thermistor definitely jumps up:

    Now: 1476963427 Alarm Set for: 1476963442 // cold water
    Battery Voltage is: 4.73 Volts.
    Average analog reading 534.40
    Thermistor resistance 10937.37
    Temperature 23.00 *C
    RTC Temp is: 25.00 C.
    SD Card Initializing...Success
    File Opening...Success
    SD Card Written. Sleeping for 15 seconds.
    ---------------------------------
    Now: 1476963442 Alarm Set for: 1476963457 // hot water
    Battery Voltage is: 4.56 Volts.
    Average analog reading 519.20
    Thermistor resistance 10305.68
    Temperature 24.32 *C
    RTC Temp is: 25.25 C.
    SD Card Initializing...Success
    File Opening...Success
    SD Card Written. Sleeping for 15 seconds.

So it looks like the resistor is responding to temperature in the right direction, but is not calibrated correctly to give accurate temperatures. Needs to both reflect a 1*C change as a 1*C change, and record ice water at 0*C. I need a better setup, including an independently reliable thermometer to check this.

###Questions and next steps
* Submit pull request fixing the code *[(done)](https://github.com/OpenWaterProject/riffle_328-thermistor/pull/1)*
* Troubleshoot to get accurate temperatures, and include this in documentation. Should documentation refer to a specific thermsistor with parameters in place, or prompt user to input values, maybe by not compiling if they do not?
* Could each data file be named something different? Like thermdata.csv, so they don't append to each other during testing? Or is it better as data.csv?
* **Thought**: I already have my serial monitor set correctly to 9600 baud rate, but will complete newbies have set it up this way? Maybe documentation needs to link back to something like riffle-getting-started at the end for information on how to use the serial monitor
* ToDo eventually: look at the data file and plot the data

###Why I'm interested
Polish up the code and documentation to make it user-friendly
**Quick aside:** I've been using notepad++ to quickly format code blocks as code by Find/Replace `"^"` with "&nbsp;&nbsp;&nbsp;&nbsp;". This finds every new line and adds four spaces. (I couldn't figure out how to format this in a way that looks nice).