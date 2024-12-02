---
nid: 1548
title: Thermal Torch Code
path: public/static/notes/drdbw/3-27-2012/thermal-torch-code.md
uid: 706
tagnames: thermal-photography,first-time-poster
---

# Thermal Torch Code

This is the coding I have written for the thermal torch / thermal photography project - http://publiclaboratory.org/tool/thermal-photography

The circuit is simply the one shown at - http://publiclaboratory.org/notes/warren/12-12-2011/circuit-diagram-simple-thermal-flashlight - all I have done is change the program uploaded to the Arduino Uno board.  Also note that I have the LED on pins 9, 10 and 11 (which is different from the previous link) and all temperatures are in degrees Celsius.

This colour scale for the temperatures is based on the sinebow colour wheel, which is discussed here http://basecase.org/env/on-rainbows

The code currently requires you to specify the lower and upper temperatures (20 and 30oC in this example) before you upload it, which is then mapped onto the colour wheel from 300o to -30o (purple to pink).  Which essentials means that the same colour scale is used and mapped onto the temperature range that you specify in the code.

Code:
<script src="https://gist.github.com/2223213.js?file=Thermal%20Torch%20Sinebow"></script>