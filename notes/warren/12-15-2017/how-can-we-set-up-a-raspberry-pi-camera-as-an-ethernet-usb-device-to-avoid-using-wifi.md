---
nid: 15376
title: How can we set up a Raspberry Pi camera as an ethernet USB device to avoid using WiFi 
path: public/static/notes/warren/12-15-2017/how-can-we-set-up-a-raspberry-pi-camera-as-an-ethernet-usb-device-to-avoid-using-wifi.md
uid: 1
tagnames: raspberry-pi,pi-camera,question:raspberry-pi,microscopes,question:pi-camera,raspberry-pi-infragram,question:raspberry-pi-infragram,raspberry-pi-spectrometer,question:raspberry-pi-spectrometer,basic-microscope,question:lego-spectrometer,lego-spectrometer,question:basic-microscope-challenge,basic-microscope-challenge
---

# How can we set up a Raspberry Pi camera as an ethernet USB device to avoid using WiFi 

Configuring WiFi can be an extra step that's just one more possible point of failure when using a #raspberry-pi as a camera (see #pi-camera). This is covered in this activity:

https://publiclab.org/notes/partsandcrafts/12-03-2017/setting-up-the-raspberry-pi-camera-for-wireless-streaming

Instead of getting it on the same WiFi network, @wmacfarl suggested configuring it as an ethernet "linux gadget". Where's some documentation on how to do this, and would it make it as simple as plugging the Raspberry Pi into your laptop or phone with a USB cable and navigating to `http://raspberrypi.local`?