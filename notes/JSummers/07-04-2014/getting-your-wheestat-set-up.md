---
nid: 10658
title: Getting your WheeStat set up.
path: public/static/notes/JSummers/07-04-2014/getting-your-wheestat-set-up.md
uid: 304279
tagnames: hydrogen-sulfide-sensing,water-quality,potentiostat,wheestat
---

# Getting your WheeStat set up.

###What I want to do
This research note is intended to explain how to setup a WheeStat potentiostat.
###Stuff you need to do:
**Install Drivers:**  The WheeStat is based on the Stellaris or Tiva microcontroller development board from Texas Instruments.  The first thing you will need to do is download and install drivers. Of course, you will need the drivers that are compatible with your operating system.  Texas Instruments only provides drivers that are compatible with windows and that is all that I have direct experience with.  ****Drivers for Windows:****  Windows drivers for the In-Circuit-Debug-Interface (ICDI) can be downloaded from this web page found [here](http://www.ti.com/tool/stellaris_icdi_drivers).  At the same web page is a link to instructions for installing the drivers on windows machines.  I recommend you print out the instructions and have them handy when installing the drivers.  
****Problems with Windows 8**** I was recently informed that there are issues loading the TI drivers on computers running Windows 8.  A user named Randy told me of his problems and how he overcame them in the following;  "_Ends up that Windows 8.1 has a requirement for all drivers to be signed.  Here is a way to reset that on this web site:
https://learn.sparkfun.com/tutorials/disabling-driver-signature-on-windows-8

Note that I was not able to get to the restart section in recovery in Windows 8.1 and had to go to a command prompt and use :  shutdown /r /o
This forced it to go to the section where I could enter Trouble shooting and then deactivate the driver signature requirement.  After the normal tripple reboot that seems to be part of the Windows world; all the drivers loaded.  I noticed on the search that the Arduino community is also experiences this problem._"
If you are having troubles with Windows8.1, there are some further suggestions under the "Hacking the WheeStat GUI" section, below.
****Drivers for the Mac ****  As described above, TI does not have Tiva drivers on their web page for Mac or Linux.  I have seen postings on web forums where people talk about using the LaunchPad with the Mac but despite my searching, I have not seen a description of how the drivers were installed, until now.  When I brought this issue up with PublicLab's Mathew, he responded that _"it was actually really straightforward-- after i decided to ignore TI's instructions--  I downloaded the Mac version of Energia and it automatically asked if I wanted to install the driver afterwords."_  OK, so that doesn't sound too bad.
****Drivers for Linux ****  I am in contact with a guy named Daniel who was able to get the WheeStat working on a Raspberry Pi.    He wrote: _“About drivers for linux, it's actually quite easy to setup. In any ubuntu based environment you only have to install a few packages for the msp430 processor and you're good to go (they are easily installed using apt-get). After you connect the wheestat it becomes available within a serial port (usually /dev/ttyACM0) and doing the rest is quite straight forward. ”_
The msp430 was a less advanced, earlier version of the LaunchPad.  If you would like me to ask Daniel for more information, just leave a comment below.  
**Install GUI Application Files**  You should be able to get this software from our GitHub page ([here](https://github.com/WheeSci).  You will need the application file (.exe) and the folders containing the source code, the libraries, and the data files (all found [here](https://github.com/SmokyMountainScientific/WheeStat5_4_2/tree/master/application.windows32)).  These will all need to be in one folder on your computer.  Please note that the GUI and the microcontroller code work together and an earlier version of one may not work with a later version of the other.  The current version of the GUI (WheeStat5_4_2) works with the current version of the microcontroller code (WheeStat5_4b) and not with earlier software versions.
**Get or Make Electrodes**  We have a research note [here](http://publiclab.org/notes/JSummers/01-09-2014/potentiostat-notes-5-how-to-make-low-cost-electrodes) describing how to make electrodes at low cost.  If you want to do metal ion analysis at very low concentrations, I think you will need to invest in a higher quality working electrode.  When we need to detect low concentrations of metals, we use something called "glassy carbon" as our working electrode and work in acidic solutions.  When working in acid, the cheap graphite rods appear to undergo a reaction that interferes with the analysis.  The cheapest source of glassy carbon electrodes that I have found is CH Instruments. At the time I wrote this, you could get an appropriate electrode for $88 from found [here](http://www.chinstruments.com/accessories.shtml).  
###Stuff you don't necessarily need to do:
****Loading Energia code onto the microcontroller****  Before you do anything else, plug the USB cable from the WheeStat into your computer.  Sometimes it takes a while for a computer to identify the appropriate drivers.
While we envision shipping kits with the code already programmed into the microcontroller, there will be cases where someone might like to re-install, update, or just plain hack the code.  For those events, you will need to download the Energia program from www.enerrgia.nu and get the Energia source code.  If you buy a kit from us, it should come with a usb memory stick that has the source code.  If you don't have this, you can download the code from our GitHub site, [here](https://github.com/SmokyMountainScientific).  As of July 9, 2014, the most recent version was WheeStat5_4b, which can be found [here](https://github.com/SmokyMountainScientific/WheeStat5_4b_Energia).  The program is comprised of ten files (filename.ino) that all need to be in a folder with the name "WheeStat5_4b".
When you open the Energia program, the top left corner of the window should look like this:

[![upperLeftCorner.png](https://i.publiclab.org/system/images/photos/000/005/129/medium/upperLeftCorner.png)](https://i.publiclab.org/system/images/photos/000/005/129/original/upperLeftCorner.png)

Going to the File dropdown, select open, then navigate around until you fine the file "WheeStat5_4a" and open it.  You should see something like the figure below.  Notice that the figure has a number of tabs, including WheeStat5_4a, DiffPulse, Open_Circuit, etc.  If all the tabs don't show up, write me a comment (below) and I will figure out what went wrong and let you know how to fix it.

[![EnergiaWheeStatScreenshot1.png](https://i.publiclab.org/system/images/photos/000/005/130/medium/EnergiaWheeStatScreenshot1.png)](https://i.publiclab.org/system/images/photos/000/005/130/original/EnergiaWheeStatScreenshot1.png)

If everything is OK, you should be able to compile the program by clicking on the red button with the check mark at the top of the window. Unfortunately, it did not compile and there is a list of error messages at the bottom of the window.  The first thing to look at is the lower corner of the Energia window.  It should look something like this:

[![EnergiaBoardSpec.png](https://i.publiclab.org/system/images/photos/000/005/132/medium/EnergiaBoardSpec.png)](https://i.publiclab.org/system/images/photos/000/005/132/original/EnergiaBoardSpec.png)

If it says something like "LaunchPad w/ msp430..." instead of "StellarPad w/lm4f ..." then you are set up on the wrong microcontroller.  Go to the "Tools" dropdown, click on "Board" and select "StellarPad w/ lm4f ...".  That should change the text in the bottom right.

Now, when you click on the check button, you will get a new list of error messages. Prominent among these are references to something called "altSPI".  You got these error messages because you did not download the altSPI folder into your Sketchbook.  OK, so first of all you need to figure out where your Sketchbook is located on your computer.  From the Energia window, under the File tab, clicking on "Preferences" will open this dialog box:

[![EnergiaPreferences.png](https://i.publiclab.org/system/images/photos/000/005/131/medium/EnergiaPreferences.png)](https://i.publiclab.org/system/images/photos/000/005/131/original/EnergiaPreferences.png)

Notice that the first line tells you where the Sketchbook is located.  Now open a window and find the Sketchbook.  Inside the Sketchbook there should be a folder called "libraries".  If there isn't one there, make one.  Inside the libraries folder, make a folder called altSPI.  Inside that folder, you need the following files; altSPI.h and altSPI.cpp.  Go back to the GitHub site ([here](https://github.com/SmokyMountainScientific)) and click on the altSPI link.  You will find the files you need there.  Once you have these files installed, you should be able to compile the microcontroller code for the WheeStat.
To upload the source code to the microcontroller, you first need to establish communications.  Under the "Tools" dropdown, select Serial Port.  There should be at least one com port to select.  If there is more than one, unplug your WheeStat and see which com port goes away.  Once selected, you should see the port specified on the lower right corner of the Energia window.  To upload the code, click on the button next to the check button, it is the one with the arrow pointing to the right.  

##Hacking the WheeStat GUI:
To modify the user interface you will need to download the program Processing from www.processing.org.  You will also need to download a couple of libraries (gicentreUtils and controlP5a).  These need to be in the libraries folder in your Processing sketchbook.  You can download the libraries from [here](http://www.gicentre.net/software/#/utils/ ) and [here](http://www.sojamo.de/libraries/controlP5/), respectively.  These files should be unzipped and placed into a folder titled "libraries" inside the processing folder.  It is kind of important that your files are structured the way Processing expects to see them.  On my computer it goes C:\Users\Summers\Documents\Processing\libraries .  Inside the libraries folder there should be folders called controlP5 and gicentreUtils.  
Once you have this setup, open Processing and use it to open the GUI source code.  As of January 2015, the most recent version is WheeStat5_4_2.pde.  If you bought a WheeStat kit, the source code should be on a flash drive that came with the kit.  Otherwise, the most recent version should be on our GitHub site.  Once you have the source code open, you should be able to run the program by clicking on the "play" triangle icon on the Processing GUI.  To generate an application (.exe) file, go to File and select Export Application.  This will open a dialog box that allows you to select to create Windows, Mac, or Linux applications.  When you execute the command, it will generate a new file in your source code file that contains the executable application file.
Randy tells me that the following are necessary to get jar files to run when using Windows 8.1:
"4.  Open notepad and create a new file in the same folder as the .exe you want it to run.  Type in the command:
"C:\Program Files\Java\jre1.8.0_25\bin\javaw.exe" -Djava.ext.dirs=lib -Djava.library.path=lib WheeStat5_4'

I got this idea from postings on:
forum.processing.org/two/discussion/780/why-execute-not-run-processing-2-1/p1

(Note: make sure you use your own path to the javaw.exe file.  I included the "" around it because there is a space in the path name).

5. Save this file with a .bat extension using "save as" and make sure you click to use "all files".  Note pad will default to txt file and the bat will not run.  Make sure you put it in the same folder as the .exe you want it to run.

6.  Double click on the bat file and "Bob's your uncle" the program runs."
 
Let me know if you have troubles.

****Calibration of the WheeStat:****   Batch to batch variation in electronic components introduces some error in measured current values.  These errors may be compensated for by adjusting certain parameters in the WheeStat code.  We should stress that this step is not necessary for routine use, since absolute numbers are not generally reported for currents. To calibrate the potentiostat, you will need to download make a series of measurements, enter your results into the source code, and upload the modified code to your instrument. 

Instructions to calibrate the instrument follow.  Attach the green and red leads to one side of a resistor (Rtest) and the black lead to the other side.  Set the values of the ‘current gain and current offset’ in the GUI to 0 and select ‘ramp’ from the mode dropdown.  If the instrument is functioning ‘ideally’, then running a ramp experiment should give a straight line that runs through the origin (0 current, 0 mV) and both should have a slope equal to 1/Rtest. In short, Ohm's Law requires that the two data sets should overlap, regardless of the gain setting.  Typical behavior of an instrument that is out of calibration is presented in the figure below.   The noisier of the two was recorded with a gain value of 2, while the other was recorded with a gain of 10.  While both show linear behavior, their slopes and intercept values are incorrect.  This deviation will be greatest at the extremes of the allowed current gain settings (close to either 0 or 30).  
[![calibration1.png](https://i.publiclab.org/system/images/photos/000/005/128/medium/calibration1.png)](https://i.publiclab.org/system/images/photos/000/005/128/original/calibration1.png)
The data sets do not overlap because resistance values assumed by the software are inaccurate.  The difference in the slopes of the two plots can be corrected by adjusting the value of the resW parameter on line 23 of the Energia code.  It will look something like this: 

[![resWlocation.png](https://i.publiclab.org/system/images/photos/000/005/133/medium/resWlocation.png)](https://i.publiclab.org/system/images/photos/000/005/133/original/resWlocation.png)
Change the value (1.2 in this case) to a larger value, say 2.0.   Close the GUI, upload the modified Energia code to your instrument, re-start the GUI and record another set of voltammagrams with the gain set, first at 10 and then at 2, as described above.   If the slope of the voltammagram with gain =  2 more closely resembles that with gain = 10, then you have gone in the correct direction.  If not, then try again with decreased value of resW.  Continue this process until the two voltammagrams give parallel lines.  
Minor differences in intercept can be adjusted using the "corr" parameter.  Once the data sets are co-linear, the absolute slope  is adjusted to equal 1/Rtest by changing "res6".  The absolute slope of your data can be determined in a spreadsheet program such as excel.   To get the data into a spreadsheet, save it as "filename.csv".  This will allow you to open the file with excel.
 


###More than you ever wanted to know:
Current amplification is determined by setting resistance values on digital potentiometers in the WheeStat.  The ‘current gain’ value from the GUI determines the resistance values that are loaded for any given experiment.  Accepted values for gain parameter can range from 0 to 30.  If a value greater than 30 is entered, the value is reset to 30 in the GUI program.  Negative values are reset to zero.  Incrementing the gain results in an increase in amplification of approximately 1 dB.   Calculated values of amplification as a function of gain value are presented in Figure _.  The trend line in this figure presents the equation:
	Amplification = 700*10(gain/10)
Calculated amplifications for each gain value are presented as open diamonds.  This calculation assumes ideal behavior of the 50 Kohm linear potentiometers  and 10 Kohm resistor.  We note that batch-to-batch deviations from nominal resistance values are reported to be as high as 20% by electronic component manufacturers.
Due to large amplifications of uncertainties in offset voltages, greatest accuracy in measuring current values will be obtained with offset set to zero.  

[![gainGraph.png](https://i.publiclab.org/system/images/photos/000/005/136/medium/gainGraph.png)](https://i.publiclab.org/system/images/photos/000/005/136/original/gainGraph.png)

***Theory:***  The current passed (i) is related to the measured output voltage (Vout), the offset voltage (Voff), instrument voltage (vcc) and three resistances (R4, R5, R6) according to the equation: 
	I = (R5 / (R4*R6)) * {Vout – Voff*(1 + R6/R5) + vcc*(R6/(2*R5))}
Of the above variables, vcc and R6 can be measured with your multimeter.  Values of R4 and R5 are determined by the ‘current gain’ parameter from the GUI.   R6 can be measured when the instrument is not receiving power from your computer.  The value of vcc is measured when the power is applied.  
 

The slope of the ramp should be determined by three resistors, R4, R5, and res6, with R4 and R5 being variable resistors determined by the gain value:
     Slope =   R4*res6 / R5
     R4 = resPot * (128-N0)/128 + resW
     R5 = resPot * N1/128 + resW
Since the value of resW is much less than resPot (75 ohms versus 50 Kohms), the former does not usually contribute significantly to values of either R4 or R5 (Exceptions arise at the two extremes of amplification, when either N0 = 128 or N1 = 0).  For the usual case, amplification is determined by:
	Slope = (128-N0)*res6 / N1
Notice that since resPot appears in both the numerator and denominator, it does not show up in the equation.  Thus, we have opted to use the nominal value of resPot provided by the component manufacturer, 50 Kohm.  Values of N0 and N1 for each value of ‘current gain’ are presented in Table 1, below.

[![gainTable.png](https://i.publiclab.org/system/images/photos/000/005/134/medium/gainTable.png)](https://i.publiclab.org/system/images/photos/000/005/134/original/gainTable.png)

###Questions and next steps
Let me know if you have questions.
###Why I'm interested
just tryin' to get it out there.