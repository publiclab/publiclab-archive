---
title: 'Dual Camera Kit Software'
tagnames: near-infrared-camera
author: warren
path: /wiki/dual-camera-kit-software.md
nid: 1764
uid: 1

---

# Dual Camera Kit Software

by [cfastie](../profile/cfastie), [warren](../profile/warren)

April 24, 2012 17:47 | Tags: [near-infrared-camera](../tag/near-infrared-camera)

----

###Installing and using CHDK###

This is part of the <a href="http://publiclaboratory.org/wiki/dual-camera-kit-guide">NIR camera wiki</a>.

* Much of the information below applies best to Canon Powershots released before 2011 and versions of CHDK released before 2013. To install recent versions CHDK or SDM on any Powershot, refer to [Dave Mitchell's great resources.](http://www.zenoshrdlu.com/kapstuff/zchdkstuff.html)
* There is lots of information at the CHDK wiki and the "CHDK for Dummies" site: http://chdk.wikia.com/wiki/CHDK_for_Dummies
* A CHDK FAQ is here: http://chdk.wikia.com/wiki/FAQ

Follow these steps to prepare an SD memory card for each camera so that temporary firmware is loaded to your cameras after they are turned on.  This firmware provides several useful enhancements including the ability to trigger the cameras remotely via the USB port.

In this process CHDK (Canon Hack Development Kit) is installed on the camera's SD card.  It loads each time the camera is turned on, and does not change the camera permanently.

To turn on a camera with CHDK installed on a bootable SD card, hold down the power button until the camera starts.  Just pressing the button once starts the camera in Preview mode and prevents switching to record mode (where you can take photos).

###Choosing an SD card###

* On the A495, 4GB cards are easier because larger cards must be partitioned to use more than 4GB while running CHDK. (On Powershots released after 2010, CHDK can work on larger unpartitioned cards.) 
* 4GB cards are $5-10 online or a little more at a local store.
* Cards must be "SDHC"
* For multiple long mapping flights in one day, more than one 4GB SD card per camera might be needed.

###Installing CHDK on the SD cards###

* The firmware version on the Kickstarter A495 cameras should be "1.00F." The matching CHDK  file **a495-100f-1.0.0-1820-full_BETA.zip** is available at http://mighty-hoernsche.de.  This file will be downloaded automatically if you follow one of the procedures below. 
* To get the appropriate file for other cameras, download and unzip the program [**STICK**](http://zenoshrdlu.com/stick/stick.html).  Follow the instructions at that page.

###Installing CHDK using a PC. (For more current procedures, refer to [Dave Mitchell's page](http://www.zenoshrdlu.com/kapstuff/zchdkstuff.html))###
* For 4 GB SD cards <a href="http://youtu.be/k8OiOCYMiNU">see this video (below) with step by step instructions</a>, or follow the instructions here: http://chdk.wikia.com/wiki/CHDK_For_Newbies_-_How_To_Install
* These procedures involve using the handy program called CardTricks: http://chdk.wikia.com/wiki/CardTricks.

<iframe width="560" height="315" src="https://www.youtube.com/embed/k8OiOCYMiNU?rel=0" frameborder="0" allowfullscreen></iframe>


* **//The following might be outdated. Use [STICK](http://zenoshrdlu.com/stick/stick.html) for installing CHDK on most cameras//** For 8GB or larger cards download and unzip the program **ACID** http://www.zenoshrdlu.com/acid/acid.html. Run **ACID** (double-click the jar file), drag a photo from the A495 to it, select "Download SDM common files" and "Download CHDK full build," then click "Download CHDK." Unzip common_files.zip and in that new folder find and run SDMinste.exe. This program can partition the card, format each partition, and make the small partition bootable. If needed, use **SDMinste** to swap partitions so the small bootable one is partition 1.  Then copy all the files and folders from the unzipped **a495-100f-1.0.0-1820-full_BETA** folder on your computer into the small bootable partition on the SD card. Remove the card from the reader, lock it with the little slider, and put it in the camera.  To turn on the camera, hold the power button down until the camera starts (just pressing it will turn it on in Preview mode). Photos will be saved to the large partition.  To see those photos on your PC, use the camera (**CHDK/Miscellaneous Stuff**) or **SDMinste** on your computer to swap partitions so the big one is partition 1.  Swap back before returning the card to the camera. If you start the camera and it says "Insufficient space on card" you forgot to swap partitions.  Don't forget this because the card will be useless without a computer (e.g., when you are about to tie the camera to a kite line).  See above where it says 4GB cards are easier;)

###Installing CHDK using a Mac or Linux (For more current procedures, refer to [Dave Mitchell's page](http://www.zenoshrdlu.com/kapstuff/zchdkstuff.html))###

* The program [ACID](http://www.zenoshrdlu.com/acid/acid.html) is available for OSX and Ubunto Linux.  **ACID** can determine which version of CHDK you need and download it. The instructions above should work on Macs to get and use **SDMinst** to install CHDK on an SD card.

* **ACID** and **SDMInst** for OSX can also be downloaded here: http://www.zenoshrdlu.com/clickpansdm/sdminst.html

*  You might have to run this command in the Mac terminal on the files in the SD card to make them executable as outlined here: http://chdk.wikia.com/wiki/FAQ/Mac#Still_Having_Trouble.3F:

    cd /Volumes/CANON_DC
    xattr -d com.apple.quarantine DISKBOOT.BIN PS.FI2

* Would videos of these installation procedures help?

###Some useful CHDK settings to start with (Some of the following no longer applies to recent releases of CHDK)###

*CHDK Main Menu*
To enter the CHDK main menu on a Canon A495, press the PLAY button on the back of the camera, then press the MENU button. To exit CHDK, press the PLAY button. On some other cameras, the buttons used are different.

*Enable Remote*
To allow remote shutter release via the USB port, you must enable remote operation. In the CHDK Main Menu select **Miscellaneous Stuff/Remote Parameters/Enable Remote**. 

*Synchronous Shutter Release*
To precisely synchronize the shutter releases of two cameras connected to a timer or switch, you must enable synchronous remote in CHDK. In the CHDK menu, under **Miscellaneous Stuff/Remote Parameters**, turn on **Enable Remote**, **Enable Synchable Remote**, and **Enable Synch**.

With this setting, CHDK uses the first signal from the timer to get ready to take the photo (focus, exposure, any other auto stuff) and then takes the photo on the second signal. So the camera shoots on every other signal, and a timer must be set accordingly.

*Shutter Priority* -- The Canon A495 does not have this option, but CHDK adds it.  It allows the camera to set the exposure automatically while keeping the shutter speed high and constant (thus reducing blur).  On sunny days, setting the shutter speed at 1/800 second is suggested (the IR camera will require more light and maybe a slower shutter speed, but adjusting ISO or f/stop can keep shutter speed high and help reduce motion blur).  To enable shutter priority in the CHDK menu, select **Extra Photo Operations/Disable Overides** = OFF, then **Overide Shutter Speed** = 1/800 (or whatever), then **Value Factor**=1. Generally you should deselect or turn OFF everything else on that menu page.