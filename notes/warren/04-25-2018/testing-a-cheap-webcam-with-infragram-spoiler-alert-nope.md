---
nid: 16212
title: Testing a cheap webcam with Infragram - spoiler alert: nope
path: public/static/notes/warren/04-25-2018/testing-a-cheap-webcam-with-infragram-spoiler-alert-nope.md
uid: 1
tagnames: kits,webcam,infragram,infragram-conversion,lens,red-filter,infragram-webcam,aren,activity:infrared-camera-conversion,infrared-camera-conversion,ndvi:,infragram-testing,m12,negative-result
---

# Testing a cheap webcam with Infragram - spoiler alert: nope

We've started shipping some really cheap new webcams with our introductory kits -- the imagery is not great, but we really want to ensure there's an affordable starting point, so we're offering nicer cameras at higher prices. We're doing this with the [Lego spectrometer](/lego) and our new [Basic Microscope Kit](/microscopes), I wanted to see if it was possible with [the Infragram project](/infragram). So I gave it a try, removing the lens and substituting a lens with a red filter (turns out these webcams do use an M12 lens mount, of the same kind [posted about](https://publiclab.org/notes/MaggPi/04-08-2018/raspberry-pi-microscope-close-up-lens-system) by @MaggPi).

  
Here's a plant in the lobby - you can see it reflecting some blue. No white balance, but some 

  
![image description](https://publiclab.org/system/images/photos/000/024/744/large/2018-04-25-163820.jpg "2018-04-25-163820.jpg")

  
So, over to Infragram.org and I got, using default "red filter and default colormap" -- the below image. Not good; very little highlighting of these otherwise healthy plants. It is indoor but in relatively bright "rainy day" reflected sunlight.

  
![image description](https://publiclab.org/system/images/photos/000/024/745/large/download.png "download.png")

  
It also didn't really work when I boosted the value using this instead of the standard #ndvi: \`((B-R)/(B+R)+.7)\`:

  
![image description](https://publiclab.org/system/images/photos/000/024/746/large/download2.png "download2.png")

  
So, my conclusion is that this webcam doesn't work too well for this. Maybe on a very bright sunny day it'll be worth another try... 

  
You have to report failures too, or someone else will be doomed to repeat them! :-)