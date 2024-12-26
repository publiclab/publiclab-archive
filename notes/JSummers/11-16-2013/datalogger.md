---
title: "DataLogger"\ntagnames: 'arduino, potentiostat, datalogger, logging, launchpad, data-logging'
author: JSummers
path: /notes/JSummers/11-16-2013/datalogger.md
nid: 9790
uid: 304279

---

![](https://publiclab.org/public/system/images/photos/000/002/246/original/datalog3.jpg)

# DataLogger

by [JSummers](../profile/JSummers) | November 16, 2013 19:05

November 16, 2013 19:05 | Tags: [arduino](../tag/arduino), [potentiostat](../tag/potentiostat), [datalogger](../tag/datalogger), [logging](../tag/logging), [launchpad](../tag/launchpad), [data-logging](../tag/data-logging)

----

###What I want to do
I want a simple graphic user interface (GUI) to log data with Arduino / LaunchPad type microcontroller boards.  
###My attempt and results
To start, you need data to log.  Since I want to log data from analog sensors, I wrote a quick Energia sketch for a LaunchPad that ramps a pwm output up then down and then turns off (this code and the code for the GUI are at https://github.com/SmokyMountainScientific/DataLogger).  The pwm output on pin 1.6 is turned into an analog signal using a resister and capacitor and is read on pin 1.0 (as shown below). 
[![datalogSource.JPG](https://i.publiclab.org/system/images/photos/000/002/247/medium/datalogSource.JPG)](https://i.publiclab.org/system/images/photos/000/002/247/original/datalogSource.JPG)
That was pretty easy.  The sketch waits for a command from the serial comm port and then ramps voltage up and down, reading the output and logging the data to the serial port.  The GUI is a little more complicated and I still dont have it running exactly the way I want it.  The GUI was written in Processing and is mostly derived from code written by Ben Hickman for our potentiostat project.  There is a problem, however, in that newer versions of Processing software are not compatible with some of the libraries used in the GUI and I have not yet figured out how to make the data display in real time.
So here is what is working:
Com port selection works well.  There is a dropdown list that allows you to select the com port that your board is on.  The figure below shows the GUI as it comes up, but with the dropdown list pulled down.  Once you select a comport and click on the connect button, you can start your experiment by clicking on the start run button. 
[![datalog1.jpg](https://i.publiclab.org/system/images/photos/000/002/248/medium/datalog1.jpg)](https://i.publiclab.org/system/images/photos/000/002/248/original/datalog1.jpg)
After the run is over, a graph of the data is displayed, as shown in the main image.  The data can be written to a file on your computer by clicking the save run button and specifying a path and file name once a dialog box pops up.
As I said earlier, though, I have not yet figured out how to make the graph update during the experiment.
###Questions and next steps
I need to figure out how to get the graph to update in real time.  The source code is available at the GitHub site and any recommendations as to how to fix this would be gratefully appreciated.  The problem is in the program DataLogGraph_1_2/DataLogGraph_1_2.pde.  There is a "lineChart.draw" command at line 225 that is supposed to update the graph in real time but does not do anything.  At the end of the file (line 239), there is another "lineChart.draw" command that displays the data after the experiment is finished.  If I move the latter command up one line the graph fails to display.  That move puts it into a loop started at line 256:
             if (run == true) { 
Once we have this issue settled, my plan is to merge the data logging GUI with our syringe pump control GUI.  At that point, it will be pretty simple to incorporate the pH electrode amplifier (figure below) to do automated titrations.
[![pH_amp.JPG](https://i.publiclab.org/system/images/photos/000/002/249/medium/pH_amp.JPG)](https://i.publiclab.org/system/images/photos/000/002/249/original/pH_amp.JPG)

