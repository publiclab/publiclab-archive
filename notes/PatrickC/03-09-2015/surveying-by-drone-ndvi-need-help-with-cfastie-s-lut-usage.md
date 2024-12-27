---
title: "Surveying by Drone, Need help with Cfastie's .lut Usage"

tagnames: 'mapping, drone, college, shasta'
author: PatrickC
path: /notes/PatrickC/03-09-2015/surveying-by-drone-ndvi-need-help-with-cfastie-s-lut-usage.md
nid: 11663
uid: 431386

cids: 11308,11310

---

![](https://publiclab.org/public/system/images/photos/000/009/223/original/IB_5_color_scale.jpg)

# Surveying by Drone, Need help with Cfastie's .lut Usage

by [PatrickC](../../../profile/PatrickC) | March 09, 2015 04:13

March 09, 2015 04:13 | Tags: [mapping](../tag/mapping), [drone](../tag/drone), [college](../tag/college), [shasta](../tag/shasta)

----

[![with_mobius.jpg](https://i.publiclab.org/system/images/photos/000/009/224/medium/with_mobius.jpg)](https://i.publiclab.org/system/images/photos/000/009/224/original/with_mobius.jpg)

Tri-copter drone with forward looking Mobius' on pan servo.


[![ground.jpg](https://i.publiclab.org/system/images/photos/000/009/230/medium/ground.jpg)](https://i.publiclab.org/system/images/photos/000/009/230/original/ground.jpg)




[![Under1.jpg](https://i.publiclab.org/system/images/photos/000/009/231/medium/Under1.jpg)](https://i.publiclab.org/system/images/photos/000/009/231/original/Under1.jpg)


[![water_flight_shasta.jpg](https://i.publiclab.org/system/images/photos/000/009/225/medium/water_flight_shasta.jpg)](https://i.publiclab.org/system/images/photos/000/009/225/original/water_flight_shasta.jpg)

Flight over the Shasta College natural life science ponds. Dipping a tethered instrument. (This was scary.)


[![me_and_blue.jpg](https://i.publiclab.org/system/images/photos/000/009/228/medium/me_and_blue.jpg)](https://i.publiclab.org/system/images/photos/000/009/228/original/me_and_blue.jpg) 

Here is a high altitude pic from a hillside with a good range of plant types, and myself visible too.


[![3_pic.jpg](https://i.publiclab.org/system/images/photos/000/009/226/medium/3_pic.jpg)](https://i.publiclab.org/system/images/photos/000/009/226/original/3_pic.jpg)

Here is a composition of the images from the drone.


[![NDVI.jpg](https://i.publiclab.org/system/images/photos/000/009/227/medium/NDVI.jpg)](https://i.publiclab.org/system/images/photos/000/009/227/original/NDVI.jpg)

Here, cfastie's wonderful work, using a special .lut file.

At one point I was able to figure out how to convert from the blue pics to the false color seen in the top most pic, about 2 months ago. But now I cant remember, and I've been desperately trying for 4 hours now using GIMP. I didnt see any specific instructions for those of us new to this.

Id like to have a button for button, click for click tutorial for everyone.

Im attempting GIMP and ImageJ right now, but in ImageJ im not sure how to get the new .lut in the tools with the existing .luts.

i found this...   http://imagej.1557.x6.nabble.com/LUT-td3703281.html



##**Useful Links:**

http://publiclab.org/wiki/ndvi-gradients

http://rsbweb.nih.gov/ij/docs/guide/146-28.html#toc-Subsection-28


##**I may have figured it out:**

First, go into your program files (the installed ones, not the icon one), open ImageJ's files.
then, youll see several folders, one named " luts ", in this folder paste cfasties' or other .luts from public lab. Next, close and restart the ImageJ program. Now, open the desired pic, then click "Image" then "type" then select "8-bit". Finnally, press your chosen .lut  



[![me_and_blue_NDVI.jpg](https://i.publiclab.org/system/images/photos/000/009/229/medium/me_and_blue_NDVI.jpg)](https://i.publiclab.org/system/images/photos/000/009/229/original/me_and_blue_NDVI.jpg)

In the above pic, i think i took the pics when the hillside wasnt fully lit by the sun. I of course keep the sun at the machines back, but i dont know what settings would be best for the mobius cameras.
[
http://publiclab.org/notes/cfastie/04-24-2014/mobius-white-balance
](http://publiclab.org/notes/cfastie/04-24-2014/mobius-white-balance)
