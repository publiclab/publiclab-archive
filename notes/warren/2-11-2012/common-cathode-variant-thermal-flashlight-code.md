---
nid: 780
title: Common cathode variant of Thermal Flashlight code
path: public/static/notes/warren/2-11-2012/common-cathode-variant-thermal-flashlight-code.md
uid: 1
tagnames: thermal-photography,thermal-flashlight,led,response:625,activity:thermal-flashlight
---

# Common cathode variant of Thermal Flashlight code

For [Thermal Flashlights](/tool/thermal-photography), if your LED is not turning on, you may have the inverse type, where the shared longer pin actually needs to be connected to negative, not positive (or vice versa).

For LEDs that are **common cathode** instead of **common anode**, you have to connect the common (longer) lead to the ground (GND) instead of to 3v, and you have to change the following lines in the code on 138-141:

<code>//set each component to a integer value between 0 and 255
int red=constrain(255-(int)255\*r,0,255);
int green=constrain(255-(int)255\*g,0,255);
int blue=constrain(255-(int)255\*b,0,255);</code>

Basically, I made it scale from 255-0 instead of 0-255; formerly, these lines were:

<code>//set each component to a integer value between 0 and 255
int red=constrain((int)255\*r,0,255);
int green=constrain((int)255\*g,0,255);
int blue=constrain((int)255\*b,0,255);</code>

A complete alternate version is here: 

<script src="https://gist.github.com/1805793.js"> </script>