---
title: More dock data!
tagnames: thermal-fishing, riffle, riffle-examples
author: lperovich
path: /notes/lperovich/08-30-2015/more-dock-data.md
nid: 12186
uid: 443410

---

# More dock data!

by [lperovich](../profile/lperovich) August 30, 2015 18:10

August 30, 2015 18:10 | Tags: [thermal-fishing](../tag/thermal-fishing), [riffle](../tag/riffle), [riffle-examples](../tag/riffle-examples)

After the success of the first deployment (@sara, @donblair), I repackaged the thermal fishing bob for a longer even more real test.  

I moved the electronics to the actual housing I plan to use, waterproofed it (tape & epoxy) and left it in the water by the MIT dock for 24 hours.


[![8.28.15.jpg](https://i.publiclab.org/system/images/photos/000/011/341/medium/8.28.15.jpg)](https://i.publiclab.org/system/images/photos/000/011/341/original/8.28.15.jpg)




Everything survived!  The waterproofing held, the battery lasted, and no unexpected failures surfaced.  Exciting step in the right direction.

Here are plots of the full data and the in-the-water data:


[![dockTest8.29.15.jpg](https://i.publiclab.org/system/images/photos/000/011/339/medium/dockTest8.29.15.jpg)](https://i.publiclab.org/system/images/photos/000/011/339/original/dockTest8.29.15.jpg)


[![dockTest8.29.15Zoom.jpg](https://i.publiclab.org/system/images/photos/000/011/340/medium/dockTest8.29.15Zoom.jpg)](https://i.publiclab.org/system/images/photos/000/011/340/original/dockTest8.29.15Zoom.jpg)



**A few points for consideration in the next version:**

I taped weights on the sensors as a last minute attempt at getting full sensor depth. The tape was gone when I checked on the bob about 3 hours in--time to go for a more robust weighting scheme.

You can see holes and banding in the sensor data--similar to the last test, but more.  It looks like the sensor/code is misinterpreting select values.  Digging in, in seems like we're dropping some zero after the decimal point.  That is:
26.0625 becomes 26.625
27.0625 becomes 27.625
28.0625 becomes 28.625
etc

I bet this is caused by a mistake in the Arduino code.  The whole number and decimal number parts of the value are originally interpreted separately then put back together.  The leading zero of the decimal part is probably dropped in the process.  I'll have to dig in more to fix this up!

I'd love to test the new design in a more active space--is it still waterproof when it's towed behind a boat?  When it's in turbulent water?  
