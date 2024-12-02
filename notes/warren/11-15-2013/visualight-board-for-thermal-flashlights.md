---
nid: 9784
title: Visualight board for Thermal Flashlights
path: public/static/notes/warren/11-15-2013/visualight-board-for-thermal-flashlights.md
uid: 1
tagnames: thermal-photography,arduino,thermal-flashlight,led,visualight,activity:thermal-flashlight,upgrade:thermal-flashlight
---

# Visualight board for Thermal Flashlights

###What I want to do

Leif Percifield's [Visualight](http://blog.visualight.org) is an affordable Arduino-compatible USB-stick with a powerful RGB LED on it -- perfect for a thermal flashlight! So I jumped into just getting the colors to change. I'll try something with the Melexis infrared sensor later, but Leif left i2c pins open specifically so that we at Public Lab could connect such sensors! It's also [open source](https://github.com/lpercifield/visualight). Leif is the best.

###My attempt and results

I made this Arduino sketch: https://gist.github.com/jywarren/7488213

<script src="https://gist.github.com/jywarren/7488213.js"></script>

It just blinks each LED in succession; real simple.

###Questions and next steps

Next up: connecting a power source (just a 2 AA battery USB power source) and the IR sensor. This thing is so compact, it'll fit nicely into a tube or other enclosure. 