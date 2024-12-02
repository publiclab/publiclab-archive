---
nid: 9980
title: Thermal flashlight Visualight shield
path: public/static/notes/warren/01-25-2014/thermal-flashlight-visualight-shield.md
uid: 1
tagnames: thermal-photography,thermal-flashlight,visualight,pcb,response:9784,upverter,circuit,upgrade:thermal-flashlight
---

# Thermal flashlight Visualight shield

###What I want to do

In the comments of this post, we've been exploring how to make an expansion to the open source [Visualight](http://visualight.org) board to make it into a thermal flashlight. I had a rough Fritzing schematic but wanted to make a full board we could order with a bill of parts. Here's the original Fritzing diagram I made:

![fritzing](https://i.publiclab.org/system/images/photos/000/002/411/medium/Screen_Shot_2013-12-13_at_4.45.37_PM.png)

###My attempt and results

I tried to make it in Upverter, which allows schematics and board files to be made online. I've never done this before but thought someone else might be able to fix my messy attempts. 

https://upverter.com/jywarren/2de9afbe97ada5b1/Thermal-Visualight-shield/

The lead image is the unfinished PCB layout, and here's the schematic:

[![Screen_Shot_2014-01-25_at_1.29.34_PM.png](https://i.publiclab.org/system/images/photos/000/002/658/medium/Screen_Shot_2014-01-25_at_1.29.34_PM.png)](https://i.publiclab.org/system/images/photos/000/002/658/original/Screen_Shot_2014-01-25_at_1.29.34_PM.png)

In the PCB (printed circuit board) layout, I tried to keep things compact, but unless I'm mistaken, we'll need a jumper or a double sided board with a single trace connecting the 2nd from bottom header pin to the top of the capacitor, where I've left a little mark. You can compare to the Fritzing sketch to see what I mean.

For reference, here are the hardware files for the Visualight: https://github.com/lpercifield/visualight/releases/tag/Hardware

###Questions and next steps

I hope someone who knows how to use Upverter or something can help out... I'm also not sure if I've spec'ed the parts right or if the spacing of the header pins I've chosen matches those of the Visualight. I'm just new to this. 

But we're so close, and at a quantity of 100, this seems to cost less than a dollar per piece for the board ($0.69) and the parts should cost <$10. Assembly, I don't know, but probably not much. The Visualight board at cost might be <$20, then batteries and such. This is looking feasible!