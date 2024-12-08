---
title: Datalogger part 2a; Generating a signal, amplifying it, and displaying the data.
tagnames: datalogger, response:10288, activity:data-logging
author: JSummers
path: /notes/JSummers/09-25-2014/datalogger-part-2a-generating-a-signal-amplifying-it-and-displaying-the-data.md
nid: 11190
uid: 304279

---

# Datalogger part 2a; Generating a signal, amplifying it, and displaying the data.

by [JSummers](../profile/JSummers) September 25, 2014 21:20

September 25, 2014 21:20 | Tags: [datalogger](../tag/datalogger), [response:10288](../tag/response:10288), [activity:data-logging](../tag/activity:data-logging)

###What I want to do
I just finished writing a research note (found [here](http://publiclab.org/notes/JSummers/09-23-2014/datalogger-part-2b-simpler-hardware-some-observations-about-ion-selective-electrodes-and-ram)) bashing an earlier research note on an amplifying data logger (found [here](http://publiclab.org/notes/JSummers/04-09-2014/datalogger-part-2-hardware-design)) and it occurred to me  that I had never written up the results on the early logger, and that some rather nice (and perhaps useful) things had come out of the work.  This note is intended to put those results forward for people's consideration.
###My attempt and results
The datalogger in question was designed to accept voltage inputs via british telecom analog (BTA) plugs, amplify the signal, read the amplified signal, convert to the amplified voltage to a digital signal which could then be read and displayed on a computer.  While the original plan (to read voltages from Vernier pH probes) was not successful, we did manage to develop hardware and software for measuring and amplifying voltages that might be useful to other people for other applications. 
To get this working, we plugged Vernier voltage probes  into the two BTA connectors and used the "hot" lead to measure incoming voltages.  The voltage probes are just connectors that allow you to hook the low voltage read and ground connections of the BTA connectors to something via alligator clips.  They are found [here](http://www.vernier.com/products/sensors/voltage-probes/vp-bta/).  The general setup is shown in the figure below.


[![Picture_49.jpg](https://i.publiclab.org/system/images/photos/000/007/034/medium/Picture_49.jpg)](https://i.publiclab.org/system/images/photos/000/007/034/original/Picture_49.jpg)
## Signal generation:
In order to measure voltages, one needs voltages to measure.  Further, it would be nice if these voltages could be varied in a controllable and predictable way so that you can tell that what you are measuring is really what you think it is.  We chose to generate voltage wave forms using one LaunchPad microcontroller board (the upside down one with the tape on it in the figure above) and read them using the datalogger that incorporated a second LaunchPad (the right side up apparatus).   Wave forms with the general formula below were outputted as pwm signals from the generator microcontroller :
  v(output1) = A sin(Bt) sin(Ct)
  v(output2) = D sin(Dt) cos(Et)
The pwm signals were smoothed out using first order low pass filters with a single resistor / capacitor each (can be seen in the figure).  While we could have incorporated signal generation and data logging into a single microcontroller, that somehow seemed like cheating (and would have resulted in unnecessarily complicated code).
##Amplifying datalogger GUI
The voltages measured by the datalogger are amplified, converted to digital signals, and  displayed on our graphic user interface (see Main Image, above).  The GUI allows the user to specify which channel(s) to read (A, B, or both), how often to read, and what the amplifier gain should be for each channel.  Data can either be logged in a continuous mode  or over a discrete, specified time frame.  Data from each channel can be displayed independently, or overlayed, as shown.   In addition, the user can opt to overlay subsequent traces by clicking the "overlay" button.  Data can be saved between runs as CSV files, and of course there is a run/stop button.
The wave forms in the figure above had the same basic amplitude.  The red data looks bigger because it was amplified more than the blue data.
###Questions and next steps
I think this is all pretty spiffy, but I don't quite know what the application for it will be.  I guess I need to put it on my GitHub page.
##Links to code on GitHub:
Updated, 11/24/2014.  The printed circuit board is available as a [shared file](https://oshpark.com/shared_projects) from OSH Park.  These are archived chronologically and it was shared on 11/21/2014.  Eagle files for making the shield (or BoosterPack) are [here](https://github.com/SmokyMountainScientific/DataLogger2Eagle/tree/DataLogger2EagleFiles).  Please note that my freeware version of Eagle frequently does not have the integrated circuits that I use and that, therefore, the IC values in the schematic are not necessarily correct.  For the correct IC values, please refer to the bill of materials found [here](http://publiclab.org/notes/JSummers/04-09-2014/datalogger-part-2-hardware-design).  Note that the Vernier BTA connectors are not really needed.  You could just as easily attach wires to the board with alligator clips.
Energia code for programming the Tiva C LaunchPad microcontroller board that does the data logging is [here](https://github.com/WheeSci/dataLogger_2).  This instrument uses a non-standard library for SPI communications to set the potentiometer that determines amplifications.  You will need to download the altSPI.h and altSPI.cpp files from [here](https://github.com/SmokyMountainScientific/altSPI) and put them in the libraries file inside your sketchbook. 
Energia code for the microcontroller board that generates the signal that is read by the datalogger is [here](https://github.com/SmokyMountainScientific/SignalGeneratorA).
Processing code for the graphic user interface is [here](https://github.com/SmokyMountainScientific/DataLogger2_GUI).

###Why I'm interested
It just interests me, ok?  Why do I have to have a reason?