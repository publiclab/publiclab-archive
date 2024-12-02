---
nid: 16660
title: Lego spectrometer - Publiclab design
path: public/static/notes/lach_myers/07-08-2018/lego-spectrometer-publiclab-design.md
uid: 425849
tagnames: spectrometer,spectrometry,fluorescence,raspberry-pi,lego,raspberry-pi-spectrometer,lego-spectrometer,response:15360,replication:15360
---

# Lego spectrometer - Publiclab design

Sorry about the ridiculous thumbnail - I assumed it would be reduced!

I used the instructions provided for the build phase.I raided the (grown-up)
kids Lego(tm) trove for the pieces and now have a tasteful red and black
Lego(tm) spectrometer.  
![image description](/i/25512.jpg "P1020358a.jpg")

- I have a set of Publiclab
acetate collimation slits, and I'm currently using a 0.12mm slit which
is the second narrowest in the set.
- I had a mini/phone paper spectrometer, so I cannibalised that for a
Grating mount and liner. The liner is a necessary part, as I noticed a
good deal of flare when testing (with an LED torch).

Hardware: Raspberry pi zero wifi version and the v2 (8M pixel) picamera.  
Software:
Raspbian Stretch - updated regularly - using the Core-electronics and
Publiclab install notes, and RPi Cam Control v6.4.21, via a direct HTML
interface. I have changed the default settings very little - just a
90degree rotation and turning on titles. I will try out the cedarlodge
GUI when I organise a usb mouse/keyboard combo.

Below is an image for the CFL calibration test. I'm reasonably pleased at this result.

However, the image looks a little out of focus, and I would like to improve this - would a longer body (more Lego(TM)) help?

![image description](/i/25511.jpg "Clipboard02.jpg")Followed