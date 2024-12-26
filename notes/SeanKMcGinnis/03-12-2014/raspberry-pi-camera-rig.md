---
title: "Raspberry Pi Camera Rig"\ntagnames: 'balloon-mapping, near-infrared-camera, photo-rig, raspberry-pi, activity:photo-rig, raspberry-pi-cameras, activity:raspberry-pi, activity:raspberry-pi-infragram, activity:pi-camera'
author: seankmcginnis
path: /notes/SeanKMcGinnis/03-12-2014/raspberry-pi-camera-rig.md
nid: 10166
uid: 552

---

![](https://publiclab.org/public/system/images/photos/000/003/221/original/DSC02109.JPG)

# Raspberry Pi Camera Rig

by [seankmcginnis](../profile/seankmcginnis) | March 12, 2014 22:31

March 12, 2014 22:31 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [photo-rig](../tag/photo-rig), [raspberry-pi](../tag/raspberry-pi), [activity:photo-rig](../tag/activity:photo-rig), [raspberry-pi-cameras](../tag/raspberry-pi-cameras), [activity:raspberry-pi](../tag/activity:raspberry-pi), [activity:raspberry-pi-infragram](../tag/activity:raspberry-pi-infragram), [activity:pi-camera](../tag/activity:pi-camera)

----

I have been playing with the Raspberry Pi for a while now and I thought it was about time to document what I have been working on. The following steps will take you from getting a brand new Raspberry Pi to having a camera rig to take images of whatever you are looking to monitor.

Parts & Components
------

The following is a list of components you can purchase and build the unit I document here. I had a few of the components, but have provided links to them so you can get an estimate of what you might need.

As a note: I did not include a monitor/display, keyboard and mouse, but you'll need them for obvious reasons. 

[Raspberry Pi Basic Starter Kit](http://www.amazon.com/gp/product/B00D2CN730/ref=oh_details_o00_s00_i00?ie=UTF8&psc=1) - This had all of the components I needed to get started including:

* Raspberry Pi B (_I have used a Raspberry Pi A, but the extra memory of the B makes for a more robust platform_)
* Wifi adapter
* Plastic case with enough holes to easily allow the camera ribbon to come out without any additional cutting of the case

[Raspberry Pi Noir Camera Board](http://www.adafruit.com/products/1567)
[Class 10 SD Card 4GB minimum](http://www.amazon.com/SanDisk-Ultra-Class-Memory-SDSDU-008G-U46/dp/B00812K4V4/ref=sr_1_8?ie=UTF8&qid=1394647472&sr=8-8&keywords=8+gb+sd+card) - I already had a 16GB card from my other cameras, but this will give you enough space to store a lot of images (_if you are going to write them to the SD card_)
SD Card Case - use the one your SD card came with. It is going to be used as the case for the camera

Since the Raspberry Pi only has two USB ports, another helpful thing is a USB hub to allow you to plug all of your USB devices in at once.

Configuring the SD Card and Operating System
------ 

### Format the Card
There are some slight differences between the steps for Windows, Mac and Linux OS's. The notes detailed below are primarily for a Windows OS. I will try and give links for other OS's when appropriate, but please reference the [Raspberry Pi Quick Start Guide](http://www.raspberrypi.org/wp-content/uploads/2012/04/quick-start-guide-v2_1.pdf) if you are using another OS.

1. Download and install the SD Association SD Card Formatter
  * [Windows](https://www.sdcard.org/downloads/formatter_4/eula_windows/)
  * [Mac](https://www.sdcard.org/downloads/formatter_4/eula_mac/)
  * For Linux, use _gparted_ and format the SD card as FAT
2. Follow the instructions as detailed in the [Raspberry Pi Quick Start Guide](http://www.raspberrypi.org/wp-content/uploads/2012/04/quick-start-guide-v2_1.pdf) for your specific OS

### Download the NOOBS package from Raspberry Pi
NOOBS stands for *New Out Of the Box Software*. It is a pre-bundled package of all the common Raspberry Pi operating systems and configuration. On initial load, it walks you through the steps of installing and configuring the OS.

1. Download [NOOBS](http://www.raspberrypi.org/downloads) from the Raspberry Pi site
2. Extract the compressed file to the SD card
3. Insert the SD card into your Raspberry Pi
4. Connect the Raspberry Pi to a display, keyboard and mouse
5. Power the Raspberry Pi up

![Raspberry Pi booting up](https://dl.dropboxusercontent.com/u/7495250/PiCamera/DSC02102.JPG "Let's make the magic happen!")
This shot shows the basic components plugged into the Raspberry Pi:

Left Side - SD Card and Micro USB Power Supply
Bottom - HDMI cable to the monitor
Right Side - USB hub connected to keyboard and mouse

### Choose the OS and let it install

1. Choose Raspian from the list of available OS's and click 'i'
2. Let the machine run through the installation and configuration process, it may take a few minutes
3. When the installation process completes, a dialog box will open notifying you the process is complete. Click 'Ok' and the device will reboot.
4. The first screen that will come up after the reboot is the _raspi-config_ screen. This is where we can configure the Raspberry Pi. For now, just navigate to *<Finish>* and press enter. This will take you to a black screen and a command prompt.

### Configure the Wifi Connection
We are going to have to download and install a any updates and few python packages, so we'll need to connect to the internet. 

*Before starting this step, make sure you have the necessary credentials to get on a wifi connection*

1. Insert the USB Wifi Adapter into a USB port (_either on the device or in the USB hub if you are using one_). This forces a reboot, so be patient and let the device recycle.
2. Before we can start making any changes to the application, we are going to have to log in. The default log in credentials for Raspian are:
*User name:* pi
*Password:* raspberry
3. After you log in, the command prompt will appear, type: *startx*. This will launch a graphical user interface (GUI) for you to wok with. It will also provide us with a simple tool to configure the Wifi adapter so we can connect to the internet.
4. Double clicking on the 'Wifi Config' icon on the desktop will launch a dialog box to guide us through the process of selecting and configuring our Wifi adapater.

![Wifi Config Icon](https://dl.dropboxusercontent.com/u/7495250/PiCamera/wifi-icon.png)
5. Choose the appropriate adapter from the adapter drop down list

![Select Adapter](https://dl.dropboxusercontent.com/u/7495250/PiCamera/choose-adapter.png)
6. Click the 'Manage Networks' tab and click the 'Scan' button to discover available networks

![Manage Networks](https://dl.dropboxusercontent.com/u/7495250/PiCamera/manage-networks.png)
7. All of the available networks will show up on a list, double click the one you want to connect to.

![Available Networks](https://dl.dropboxusercontent.com/u/7495250/PiCamera/available-networks.png)
8. Select the Authentication method (_if any_) and enter the appropriate keys to authenticate onto the network. When all of the information is entered, click add.
![Network Credentials](https://dl.dropboxusercontent.com/u/7495250/PiCamera/encryption.png)
9. The 'Scan results' dialog will show the network highlighted. Click 'Close'.
![Network Connected](https://dl.dropboxusercontent.com/u/7495250/PiCamera/network-connected.png)
10. Click the 'Current Status' tab to see the network connection information. It is also a good idea to write down your IP address to make it easier to communicate with the device via SSH.
![Current Status](https://dl.dropboxusercontent.com/u/7495250/PiCamera/connected.png)

### Update the Device and Enable the Camera
You'll want to update the device to make sure you have the most current versions of everything running.

1. Double click the 'LX-Terminal' icon to launch a command prompt
![LXTerminal](https://dl.dropboxusercontent.com/u/7495250/PiCamera/LXTerminal.png)

2. From the command line, run the following commands to get the most recent updates and then install and configure them:
  * sudo apt-get update
  * sudo apt-get upgrade
  
3. Next we'll access the Pi configuration settings to enable the camera. From the command line enter:
  * sudo raspi-config
![raspi-config](https://dl.dropboxusercontent.com/u/7495250/PiCamera/raspi-config.png)

4. Use the arrow buttons to navigate to the 'Enable Camera' option and click 'Enter'
![Enable the camera](https://dl.dropboxusercontent.com/u/7495250/PiCamera/enable-camera.png)

5. Select 'Enable' and click 'Enter'
![We're almost there!!!](https://dl.dropboxusercontent.com/u/7495250/PiCamera/enable-support.png)

6. Select 'Finish' from the menu and click 'Enter'
![Just a little more...](https://dl.dropboxusercontent.com/u/7495250/PiCamera/camera-finished.png)

7. Select 'Yes' and click 'Enter' to reboot the device.
![Time for another reboot](https://dl.dropboxusercontent.com/u/7495250/PiCamera/camera-reboot.png)

### Install the Camera
*NOTE:* The camera is very sensitive to static electricity, so please discharge yourself by touching a grounded object before removing the camera from the anti-static bag.

When installing the camera, here are a couple tricks I learned to make it easier to install the camera:
* Disconnect all of the peripherals from the board
* Keep the protective lens sticker on the lens so it doesn't get scratched
* Make sure you route the ribbon through the top of the case before inserting the ribbon into the connector so you won't have to pull it apart.
![Everything ready for installation](https://dl.dropboxusercontent.com/u/7495250/PiCamera/DSC02104.JPG)

To install the camera:
1. lift the plastic lock on the connector between the HDMI port and the Ethernet port (_Ethernet port is on the B and B+ models_).
![Connector](https://dl.dropboxusercontent.com/u/7495250/PiCamera/DSC02103.JPG)
2. Slide the ribbon into the connector and lightly push the plastic lock back down to secure the ribbon in place.![Camera installed](https://dl.dropboxusercontent.com/u/7495250/PiCamera/DSC02105.JPG)
3. Now put the rest of the Pi in the case and close it up
![Case closed](https://dl.dropboxusercontent.com/u/7495250/PiCamera/DSC02114.JPG)
4. I couldn't find a case, so I made one out of the SD card's case. I carefully cut out a square for the lens to poke through and to let the ribbon out the side. Put heavy duty velcro on the bottom to secure it to the lid of the Pi's case.
![Cheapy camera enclosure](https://dl.dropboxusercontent.com/u/7495250/PiCamera/DSC02108.JPG) 
5. In true balloon mapping fashion, I used a rubber band to help control the ribbon from flopping around
![Flopping is a very technical term](https://dl.dropboxusercontent.com/u/7495250/PiCamera/DSC02113.JPG)

### Let's Test the Camera

1. Reconnect all of your peripherals, boot the Pi back up and enter your credentials to log into the device.
2. From the command prompt enter: raspistill -o image.jpg
![raspistill](https://dl.dropboxusercontent.com/u/7495250/PiCamera/raspisitill.png)
This will take one image and save it in your home directory as image.jpg. HEre is the sample image I took:
![That's one ugly mug](https://dl.dropboxusercontent.com/u/7495250/PiCamera/image.jpg "That's one ugly mug!!!")
It is pretty simple and it did prove one thing, the camera is working (_and my beard is getting bushy_).

### Capture a Series of Images

In a balloon or kite rig, you'll want the camera to take pictures at a set interval. [Picamera](http://picamera.readthedocs.org/) is a Python interface to the Raspberry Pi camera module.

Install the correct module for your Python installation
[Install documentation for Python 2.7+](http://picamera.readthedocs.org/en/release-1.2/install2.html)
[Install documentation for Python 3.2+](http://picamera.readthedocs.org/en/release-1.2/install3.html)

I shared a sample you can use to get started capturing time lapse images immediately when run will take an image at a set interval and save it to the directory you declare with a meaningful file name. You can access the code [here](https://github.com/SeanKMcGinnis/raspberry-pi-camera/blob/master/picamera-time-lapse.py).

I will be putting am putting more code samples on Github as I finish them. 

### General Considerations
* Changing the OS password, I am just a paranoid person when it comes to system security. If you are communicating on open or public networks, it would be wise to change the default password

### Next Steps
* Building a better rig to mount the Pi and camera in
* Testing with different batteries to estimate time extent
* Streaming a feed from the Raspberry Pi to the Internet
* Building a better camera housing to use the blue filter

### References
[Raspberry Pi Quick Start Guide](http://www.raspberrypi.org/wp-content/uploads/2012/04/quick-start-guide-v2_1.pdf)

[Introduction to NOOBS](http://www.raspberrypi.org/archives/4100)

[New Out Of Box Software (NOOBS) Download](http://www.raspberrypi.org/downloads)

[Raspberry Pi Camera Introduction](http://www.raspberrypi.org/camera)

[Pi Camera Python Library Documentation](http://picamera.readthedocs.org/en/release-1.2/recipes1.html)