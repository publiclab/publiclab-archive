---
nid: 19620
title: Build a simple aerial photo rig for a Raspberry Pi camera
path: public/static/notes/warren/06-05-2019/build-a-simple-aerial-photo-rig-for-a-raspberry-pi-camera.md
uid: 1
tagnames: balloon-mapping,kite-mapping,raspberry-pi,aerial-mapping,pi-camera,aren,activity:pi-camera,pi-builder,infragram-pi,community-atlas,activity:infragram-pi,activity:pi-camera-setup,pin:activity:infragram-pi,pin:activity:pi-camera
---

# Build a simple aerial photo rig for a Raspberry Pi camera

Folks have been using Raspberry Pi Zero boards with cameras as aerial photography setups more and more recently. Our #pi-builder software has made getting started really easy - just put in the card, plug in the camera and battery, and it starts up a WiFi network; you can start a timelapse by connecting to it from a smartphone or laptop. 

  
Get one of these cameras here: [https://store.publiclab.org/collections/diy-infrared-photography/](https://store.publiclab.org/collections/diy-infrared-photography/)

  
But what's the best way to suspend the camera from a kite or balloon? Well, "best" means different things to different people, but I am often looking for:

  
- cheap
- very portable (letter-sized, flat packing even!)
- easy to make/assemble
- wind stabilizing (so it doesn't spin)
- modifiable (so it can keep evolving and improving!)

I've started using Coroplast to make simple "fin" type rigs which are smaller than a letter-sized sheet of paper, store flat, and are pretty lightweight. They're not perfect, but I'm hoping people run with this idea to refine it a bit with the above goals in mind.

  
Here are the steps; start by taking a roughly 10x7 inch sheet (could be a bit bigger even -- letter sized is a good reference) and tracing a U shape around the Pi camera. 

  
![image description](/i/32710.jpg "IMG_20190530_172851.jpg")

  
Cut the shape out and slice halfway through the Coroplast (i.e. through only one layer) on one side, so you can bend a "shelf" down as shown below. 

  
![image description](/i/32711.jpg "IMG_20190530_173009.jpg")

  
Put adhesive velcro on the bottom of the Pi camera and on the bottom side of the "shelf":

  
![image description](/i/32712.jpg "IMG_20190530_173039.jpg")

  
Attach the Pi with the cable ports facing outwards.

  
![image description](/i/32713.jpg "IMG_20190530_173134.jpg")

  
**OPTIONAL:** Use scissors to poke a hole under it (don't cut yourself!) and use a zip tie to fix the Pi in place. Don't cover the ports or the camera!

  
![image description](/i/32714.jpg "IMG_20190530_173257.jpg")

  
Now, use double-sided tape or velcro to attach the battery (we use these really nice flat batteries) but be sure the power plug reaches the Pi!

  
![image description](/i/32715.jpg "IMG_20190530_173417.jpg")

  
Now in the upper left corner, make 2 holes about 1 inch from the edge and 1 inch apart, vertically. Slide 2 zip ties through the holes and use them to trap a small carabiner against the edge of the Coroplast sheet as shown:

  
![image description](/i/32716.jpg "IMG_20190530_173550.jpg")

![image description](/i/32717.jpg "IMG_20190530_173641.jpg")

  
I leave a keychain ring on there because I often use a fishing swivel on there to let it spin freely; the swivel won't usually fit onto the carabiner directly though. 

  
![image description](/i/32718.jpg "IMG_20190530_173826.jpg")

  
Now you're ready to fly! With #pi-builder, the camera turns on and is ready to be put in Timelapse mode (over WiFi) when you plug it in. 

  
As shown in the top image, this makes the camera tilted a bit. I'm not sure if it's a problem, but you could try angling the "shelf" in the opposite direction from the carabiner to compensate. 

  
If you use this, please tell me how it goes!