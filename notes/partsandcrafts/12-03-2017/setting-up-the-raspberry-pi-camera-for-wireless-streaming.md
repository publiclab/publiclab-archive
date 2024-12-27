---
title: "Setting up the Raspberry Pi Camera for Wireless Streaming"

tagnames: 'raspberry-pi, barnstar:basic, with:kgradow1, with:warren, microscope, pi-camera, microscopes, activity:microscopes, raspberry-pi-infragram, activity:raspberry-pi-infragram, with:wmacfarl, raspberry-pi-spectrometer, activity:raspberry-pi-spectrometer, activity:pi-camera, with:bmela, activity:basic-microscope, activity:lego-spectrometer, series:basic-microscope'
author: partsandcrafts
path: /notes/partsandcrafts/12-03-2017/setting-up-the-raspberry-pi-camera-for-wireless-streaming.md
nid: 15289
uid: 66014

---

![](https://publiclab.org/public/system/images/photos/000/022/756/original/seeing_stuff.jpg)

# Setting up the Raspberry Pi Camera for Wireless Streaming

by [partsandcrafts](../../../profile/partsandcrafts) | December 03, 2017 02:55

December 03, 2017 02:55 | Tags: [raspberry-pi](../tag/raspberry-pi), [barnstar:basic](../tag/barnstar:basic), [with:kgradow1](../tag/with:kgradow1), [with:warren](../tag/with:warren), [microscope](../tag/microscope), [pi-camera](../tag/pi-camera), [microscopes](../tag/microscopes), [activity:microscopes](../tag/activity:microscopes), [raspberry-pi-infragram](../tag/raspberry-pi-infragram), [activity:raspberry-pi-infragram](../tag/activity:raspberry-pi-infragram), [with:wmacfarl](../tag/with:wmacfarl), [raspberry-pi-spectrometer](../tag/raspberry-pi-spectrometer), [activity:raspberry-pi-spectrometer](../tag/activity:raspberry-pi-spectrometer), [activity:pi-camera](../tag/activity:pi-camera), [with:bmela](../tag/with:bmela), [activity:basic-microscope](../tag/activity:basic-microscope), [activity:lego-spectrometer](../tag/activity:lego-spectrometer), [series:basic-microscope](../tag/series:basic-microscope)

----

The [Raspberry Pi Zero](https://www.amazon.com/s/?ie=UTF8&keywords=raspberry-pi%20zero) is an amazingly powerful and cheap device, and since it behaves more or less like the kinds of desktop computers most people are familiar with it is, in a lot of ways, relatively user-friendly. Here we'll show you how to set it up with the Raspberry Pi Camera module (v1 or v2) and connect to it to take photographs from your laptop.

(For a full overview of this project, go to [Raspberry Pi Microscope Build](https://publiclab.org/notes/partsandcrafts/11-26-2017/building-a-raspberry-pi-microscope).)

**Update:** You can now [download ready-to-use camera software on our Pi Builder page](/pi-builder)

The biggest hurdle that I've found for actually succeeding in doing anything with the Raspberry Pi is actually just getting it plugged in and turned on and attached to some kind of keyboard and display. This is how you'd use it in the traditional way, with all the cables:

![image description](https://publiclab.org/system/images/photos/000/022/749/large/old_raspberry_pi_setup.jpg "old_raspberry_pi_setup.jpg")

If you don't have **exactly the right set of peripherals and cords and dongles getting the Pi up and running can feel extremely daunting**, and getting all of the required components, if you don't happen to have them lying around, quickly adds up and stops being cheap.

![image description](https://publiclab.org/system/images/photos/000/022/750/large/bunch_of_monitors.jpg "bunch_of_monitors.jpg")

_Above: three separate monitors plus a LOT of cables._

Instead, and because of these two factors -- the difficulty that I've seen people outside of tech/computer hobbyists circles have setting up the Raspberry Pi, and the additional cost of getting all of the required components from scratch, I wanted **a way for people to use the Raspberry Pi camera as a digital camera without really having to interact with the Raspberry Pi as a computer**.

The solution I've come up with is to use the **Raspberry Pi Zero W** over your local WiFi network, so any computer on your WiFi network can see through the camera using a web browser. The whole camera interface is available on a web page, as long as you're on the same WiFi network. (**IMPORTANT:** We're using the Raspberry Pi Zero W, not the regular Raspberry Pi Zero, which does not have WiFi built in.)

# How We've Set It Up

![image description](https://publiclab.org/system/images/photos/000/022/746/large/raspicam_zero_network_setup_1.jpg "raspicam_zero_network_setup_1.jpg")

In a perfect world, our Raspberry Pi Zero W would hook up to the camera, connect to the wifi, and then seamlessly know to display a live image on a website.

If you just plug in your Pi and go to [http://raspberrypi.local](http://raspberrypi.local), nothing will happen. Before we get started, we'll need to:

1. Install the operating system on the Raspberry Pi's SD card
2. Set up the WiFi info on the card
3. Plug everything in and start it up

![image description](https://publiclab.org/system/images/photos/000/022/753/large/SD_card.jpg "SD_card.jpg")

# Prepare the SD card

Following [these steps](https://publiclab.org/notes/warren/04-20-2018/prepare-an-sd-card-for-a-raspberry-pi-camera-from-scratch), we have prepared an SD card image with the software already set up. You can get this disk image here:

[](https://archive.org/details/raspbian_preload.img)

> [https://archive.org/details/raspbian\_preload.img](https://archive.org/details/raspbian_preload.img)

Download it (it's very big -- ~8 gigabytes!) and write it to your microSD card using Etcher -- [https://etcher.io/](https://etcher.io/)

In a workshop or classroom setting, microscope users can be given a pre-flashed SD card with the appropriate software installed and will only need to **edit a single text file to provide their WiFi login and password**. This is admittedly a somewhat daunting task for many casual computer-users, but it can be explained in a step-by-step manner pretty easily.

# Set up the WiFi

You'll be connecting to the microscope over WiFi, so it needs to be connected to your network first.

Once you've written the SD card it will probably show up as two different drives on your computer. If you're using Windows you will see a "boot" partition (in my case, E:) and then an unreadable partition with a file system that Windows does not understand (in my case F:). Windows will throw some errors about this second partition and say that you need to reformat this second partition to use it. Ignore these errors.

If you open up the "boot" partition you'll see a file called "**wpa\_supplicant.conf**" Open it in any text editor and you'll see something like this:

![image description](https://publiclab.org/system/images/photos/000/022/755/large/boot_window.png "boot_window.png")

The only thing you need to do is replace "**SSID\_NAME**" with your wifi network's SSID (the name of the network as it is displayed when you try to connect to it) and "**PASSWORD**" with your network's password.

If there's no password on your WiFi network, see the comments for how to set this file up.

After you make these changes, **save the file and eject the SD card**.

(If you've done this once and want to change the WiFi information, you may find that the file has disappeared. Download a new file here: [wpa\_supplicant.conf](https://gist.github.com/jywarren/c1d8f94a378098043272242de1234a60))

# Plug it in and start it up!

Now you're ready to boot it up. Put the SD card in your Raspberry Pi and plug it in with the USB power cable where you see the circular power symbol (not the USB port, which looks similar!).

It will take a little while to boot, but after it does you should be able to visit [http://raspberrypi.local](http://raspberrypi.local) on your laptop's web browser and -- connected wirelessly to the camera -- see a live image.

![image description](https://publiclab.org/system/images/photos/000/022/754/large/IMG_20171125_221612.jpg "IMG_20171125_221612.jpg")

Note for Windows Users

If you are using Windows, your computer might not be configured to find the Raspberry Pi on your network using the **[http://raspberrypi.local](http://raspberrypi.local)** address. Newer updates of Windows 10 seem to support this feature, but older Windows installations may not.

The simplest way to enable this functionality is to install Apple's Bonjour print services, either the older version 2.02 as a standalone program -- [https://support.apple.com/kb/dl999?locale=en\_US](https://support.apple.com/kb/dl999?locale=en_US) -- or the newest version, bundled with iTunes -- [https://www.apple.com/itunes/download/](https://www.apple.com/itunes/download/) (although it may seem strange, the utility comes with iTunes!)

More information is available here -- [https://learn.adafruit.com/bonjour-zeroconf-networking-for-windows-and-linux/overview](https://learn.adafruit.com/bonjour-zeroconf-networking-for-windows-and-linux/overview)