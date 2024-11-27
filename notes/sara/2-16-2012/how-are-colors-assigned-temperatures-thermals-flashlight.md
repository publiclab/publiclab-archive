---
nid: 794
title: How are colors assigned to temperatures with the thermal flashlight?O
path: public/static/notes/sara/2-16-2012/how-are-colors-assigned-temperatures-thermals-flashlight.md
uid: 8
tagnames: 
---

# How are colors assigned to temperatures with the thermal flashlight?O

One problem frequently being encountered with the thermal flashlight is understanding how colors of light are assigned to particular temperatures. This is particularly confusing because the process of color mapping depends on weather one is working with a common cathode or common anode three color led. 

The aspect of the code that controls color mapping reads:

  int hue = map(state,0,255,0,(360.00*0.60)); // not the whole color wheel
 
This function maps input to the arduino from the sensor (a value between 0 to 255) to a corresponding value on the color wheel. The color wheel has values from 0 (red) to 360 (red). Because we want our colors to move from red to green to blue, we only want to select the portion of the color wheel that contains those colors. If we used the whole color wheel then the lowest temperature in the range measured by the sensor and the highest temperature measured by the sensor would both result in red colored light. To avoid this problem we constrain the range of colors that values from the sensor can be mapped to. The value 0 sets the upper limit for color to red. The value (360.00*0.60) or 216 sets the lower limit for the color range to blue.

http://dba.med.sc.edu/price/irf/Adobe_tg/models/images/hsl_top.JPG