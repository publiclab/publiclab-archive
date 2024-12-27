---
title: "Prepare an SD card for a Raspberry Pi camera from scratch"

tagnames: 'raspberry-pi, with:kgradow1, microscope, pi-camera, microscopes, activity:microscopes, raspberry-pi-infragram, activity:raspberry-pi-infragram, with:wmacfarl, raspberry-pi-spectrometer, activity:raspberry-pi-spectrometer, activity:pi-camera, with:bmela, activity:basic-microscope, activity:lego-spectrometer, series:basic-microscope, response:15289, with:partsandcrafts'
author: warren
path: /notes/warren/04-20-2018/prepare-an-sd-card-for-a-raspberry-pi-camera-from-scratch.md
nid: 16180
uid: 1

cids: 20100,20101,20146,24255,24286,24288,24294

---

![](https://publiclab.org/public/system/images/photos/000/024/673/original/SD_card.jpg)

# Prepare an SD card for a Raspberry Pi camera from scratch

by [warren](../../../profile/warren) | April 20, 2018 17:26

April 20, 2018 17:26 | Tags: [raspberry-pi](../tag/raspberry-pi), [with:kgradow1](../tag/with:kgradow1), [microscope](../tag/microscope), [pi-camera](../tag/pi-camera), [microscopes](../tag/microscopes), [activity:microscopes](../tag/activity:microscopes), [raspberry-pi-infragram](../tag/raspberry-pi-infragram), [activity:raspberry-pi-infragram](../tag/activity:raspberry-pi-infragram), [with:wmacfarl](../tag/with:wmacfarl), [raspberry-pi-spectrometer](../tag/raspberry-pi-spectrometer), [activity:raspberry-pi-spectrometer](../tag/activity:raspberry-pi-spectrometer), [activity:pi-camera](../tag/activity:pi-camera), [with:bmela](../tag/with:bmela), [activity:basic-microscope](../tag/activity:basic-microscope), [activity:lego-spectrometer](../tag/activity:lego-spectrometer), [series:basic-microscope](../tag/series:basic-microscope), [response:15289](../tag/response:15289), [with:partsandcrafts](../tag/with:partsandcrafts)

----

In a perfect world, our Raspberry Pi Zero W would hook up to the camera, connect to the wifi, and the seamlessly know to send streaming image data to [http://raspberrypi.local](http://raspberrypi.local/). It'd be almost as easy as plugging in a webcam (something we're [aiming for here](https://publiclab.org/questions/warren/12-15-2017/how-can-we-set-up-a-raspberry-pi-camera-as-an-ethernet-usb-device-to-avoid-using-wifi))!

**Update:** You can now [download ready-to-use camera software on our Pi Builder page](/pi-builder)

> This activity covers the background steps (as documented by @partsandcrafts) that lead to having **a ready-made SD card image, as mentioned in [this activity](https://publiclab.org/notes/partsandcrafts/12-03-2017/setting-up-the-raspberry-pi-camera-for-wireless-streaming)**[](https://publiclab.org/notes/partsandcrafts/12-03-2017/setting-up-the-raspberry-pi-camera-for-wireless-streaming). If you use the prepared image in that activity, you can skip all the steps in this activity -- they're already done! This just shows how we did it.

If you just plug in your Pi and go to that website, nothing will happen. Before we get started, though, we'll need to do the following things:

1. Install the operating system on the Raspberry Pi
2. Give the Raspberry Pi access to the network
3. Enable the camera on the Raspberry Pi
4. Install RPICam Interface, which sends streaming image data to [http://raspberrypi.local](http://raspberrypi.local/) (which we will access to view the pictures)

Look at this diagram to see how it'll work:

![image description](https://publiclab.org/system/images/photos/000/022/751/large/raspicam_zero_network_setup_2.jpg "raspicam_zero_network_setup_2.jpg")

In a workshop or classroom setting, microscope users can be given a pre-flashed SD card with the appropriate software installed and will only need to edit a single configuration file to provide their wifi credentials.

This is admittedly a somewhat daunting task for many casual computer-users, but it can be explained in a step-by-step manner pretty easily (and could possibly be made easier by having a piece of software prompt the user for their credentials and generate the file automatically).

For now, you'll need to edit the file directly to give the Pi access to your wifi network.

Once the wifi credentials are set up and the Raspberry Pi is booted, users can open up a web browser on any computer on the same network, visit [http://raspberrypi.local](http://raspberrypi.local/) and see something like this:

![image description](https://publiclab.org/system/images/photos/000/022/754/large/IMG_20171125_221612.jpg "IMG_20171125_221612.jpg")

If you are doing this from scratch, you will need to install an operating system on your Pi, set up wifi/networking, enable the camera, and install RPi Cam Web Interface -- [https://elinux.org/RPi-Cam-Web-Interface](https://elinux.org/RPi-Cam-Web-Interface) -- the software we use for streaming images.

**Note:** the Public Lab Kits Initiative plans to offer pre-flashed SD cards soon.

### Steps

1\. Installing an Operating System.

First you want to download a copy of the Raspberry PI operating system -- Raspbian. You can get that from the Raspberry Pi website -- [https://www.raspberrypi.org/downloads/raspbian/](https://www.raspberrypi.org/downloads/raspbian/)

For this setup we can use Raspbian Stretch Lite (which is smaller and has no desktop software and saves more room on the SD card for pictures and videos.

Download the .iso file, write it to a microSD card using a tool like etcher -- [https://etcher.io/](https://etcher.io/)

2\. Set up Networking

After the image is burned to the SD card we will need to make two changes to it before putting it in the Raspberry Pi and booting it up. We need to set up our wifi credentials so that the Pi can connect to your local network, and we need to enable SSH -- a tool that will allows us to log in to the Pi remotely from another computer so we can finish the set up.

To do both of these things I followed this tutorial -- [https://core-electronics.com.au/tutorials/raspberry-pi-zerow-headless-wifi-setup.html](https://core-electronics.com.au/tutorials/raspberry-pi-zerow-headless-wifi-setup.html) -- but found that the wpa\_supplicant.conf file they provided did not work for me.

The file I have been using looks like this, but the process is otherwise the same:

```

ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev

update_config=1

network={

ssid=“SSID_NAME”

psk=“PASSWORD”

}
```

3\. Enable Camera

To enable the camera and set up the software you will need to connect to your Raspberry Pi over ssh. As described in the tutorial linked to above. Once logged in you will type the command:

sudo raspi-config

The option for enabling the camera is in the "interfacing options." You want to select it and enable the camera, then reboot.

4\. Install Streaming Software

The software we use to stream images from the camera is called RPi Web Cam Interface. It can be found here -- [https://elinux.org/RPi-Cam-Web-Interface](https://elinux.org/RPi-Cam-Web-Interface) -- along with instructions for how to install it. I used all default options in my install process.

Once it's set up you should be able to go to [http://raspberrypi.local/html/](http://raspberrypi.local/html/) and see what your camera sees.