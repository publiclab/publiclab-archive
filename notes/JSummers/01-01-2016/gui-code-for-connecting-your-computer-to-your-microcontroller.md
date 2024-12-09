---
title: ' GUI code for connecting your computer to your microcontroller.'
tagnames: processing, datalogger, interface, microcontroller, graphic, user, graphic-user-interface, response:11822
author: JSummers
path: /notes/JSummers/01-01-2016/gui-code-for-connecting-your-computer-to-your-microcontroller.md
nid: 12554
uid: 304279

---

![](https://publiclab.org/public/system/images/photos/000/013/487/original/GUI-1.png)

#  GUI code for connecting your computer to your microcontroller.

by [JSummers](../profile/JSummers) January 01, 2016 20:27

January 01, 2016 20:27 | Tags: [processing](../tag/processing), [datalogger](../tag/datalogger), [interface](../tag/interface), [microcontroller](../tag/microcontroller), [graphic](../tag/graphic), [user](../tag/user), [graphic-user-interface](../tag/graphic-user-interface), [response:11822](../tag/response:11822)

----

###What I want to do:
This research note is one in a series that is intended to help people start writing code for graphic user interfaces (GUIs) to control and communicate with their microcontrollers.  We use the program "Processing" to write our GUIs.  The rest of the series can be accessed from links on this [wiki page](https://publiclab.org/wiki/creating-graphic-user-interfaces-guis). 

###My attempt and results
This note discusses example code that establishes communications between a GUI on your computer and a microcontroller.  The intent is to provide simple modules that can be incorporated into more complex microcontroller and GUI codes. I will not present all of the code in this research note but it can be downloaded from the GitHub page [here](https://github.com/SmokyMountainScientific/comSearch). I think it would be most illustrative to get the code and run it before reading this text. Most of the code I copied from my former student [Ben](https://publiclab.org/profile/bhickman), but from time to time I made some contributions myself.  
From the GitHub page [here](https://github.com/SmokyMountainScientific/comSearch), click on the download Zip button then unzip the files.  There will be two types of files: microcontroller code files written in Energia (ending in .ino) and GUI files written in Processing (ending in .pde).  The .ino files need to be in a folder called 'comPortConnectE' inside your Energia sketch folder.  The .pde files need to be in a folder called 'comSearchP' inside your Processing sketch folder

##microcontroller code.
 The figure below shows a screenshot of the Energia IDE 
(Interactive Development Environment) with the comPortConnectE program loaded.  See how much it looks like Arduino?  
[![setupRun_Simple.png](//i.publiclab.org/system/images/photos/000/013/488/medium/setupRun_Simple.png)](//i.publiclab.org/system/images/photos/000/013/488/original/setupRun_Simple.png)

You will notice that there are two tabs, one called comPortConnectE and another called setupRun. 
All of the code in the comPortConnectE tab is below.  Pretty simple sketch. All we do in the setup is begin serial communications and define the RED_LED pin as an output.
 
    void setup()
    {
    Serial.begin(9600); 
    pinMode (RED_LED,OUTPUT);
    }
    void loop()
    {
    setupRun();  
    }
 The purpose of the output pin is just to blink a led so that we know the microcontroller hears the GUI.  The only thing in the main loop of the program is a function call for setupRun.  The setupRun function is defined in the setupRun tab.  It is useful to have setupRun in a separate tab because this puts it in a separate program that you will be able to incorporate into any other program you want to write.
So what is in the setupRun tab?  The setupRun function of course!   See figure above.

The setupRun function starts by defining a boolean (can be true or false) called wait and setting its value to 'true'.  It then sets up a while loop where the program will stay until the value of wait is changed to 'false'. While it is in the loop, it is basically just listening to it's serial port waiting to hear the star character.  If it hears anything else, it just sits and waits. Once it does hear a star, it responds by transmitting the '&' character and then blinks the led and exits the while loop.  The two way signalling between the GUI (transmitting the '*') and the microcontroller (responding by transmitting the '&') is the basic handshake.  There is nothing particularly magical about these two characters. They were picked pretty much at random but they need to be coordinated.  The GUI needs to know what to expect from the microcontroller and vice versa.  
##GUI code:
A minimal GUI for connecting to the microcontroller is shown in the figure below.

[![GUI-1.png](//i.publiclab.org/system/images/photos/000/013/489/medium/GUI-1.png)](//i.publiclab.org/system/images/photos/000/013/489/original/GUI-1.png)

It is basically a rectangle with a button and a line of text.   When the program starts up, it looks for the microcontroller.  If the microcontroller is not found, it displays the text above.  If it does find the microcontroller, it connects to it and displays a line of text that indicates it is connected and on which communications port.  
While the GUI is pretty simple as these things go, the code is significantly more complex than the microcontroller code. The GUI code has three tabs; comSearchP, comPort, and events.   All of the following parameters are defined in the main tab, comSearchP: The rectangle has an x dimension, a y dimension and a background color, the button has both dimensions a position in x and y, color and a label. The line of text can be one of a variety of character strings.  It has a defined font, color and position.    For clarity, lets skip much of the early declarations and just consider the setup and draw loops:

    void setup() {
    size(300, 100);
    setupComButton();      // defined in Com_Port tab
    connect();           // defined in Com_Port tab
    }             
    void draw() {
    background(bkgnd);    
    stroke(255);
    textFont(font);
    text(comStatTxt, 65, 25);
    }

The comPort tab contains the code for the setupComButton() and connect() functions.  The setupComButton function initializes the button  and is pretty straightforwards.  It uses code from a library called controlP5 that you download and put in your libraries folder. More discussion of the library can be found at the GUI wiki, [here](https://publiclab.org/wiki/creating-graphic-user-interfaces-guis).
The connect() function contains the bulk of what the program does.  In addition to being called in the setup loop, the connect() function is also called when the button is pressed.
The connect() function first disconnects the GUI from any existing serial communications device, then makes a list of all com ports available and queries each by transmitting the star character to the port. The GUI then listens for the '&' character to be transmitted back.  If the port does not respond by transmitting the '&' character, the GUI disconnects from that com port and moves on to the next one.  If it does hear the '&' character, it changes the character string for the text to indicate which com port it is attached to. 
 
###Questions and next steps
The next step is to describe how information is transferred to the microcontroller from the GUI and how data is transferred in the opposite direction.

###Why I'm interested
I have not found much available information on writing GUIs and I think a need exists.