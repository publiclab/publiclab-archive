---
nid: 14177
title: Dual NDVI Ultra Probe Unit
path: public/static/notes/cfastie/05-11-2017/dual-ndvi-ultra-probe-unit.md
uid: 554
tagnames: arduino,ndvi,data-logging,arduino-nano,nano-data-logger,16x2_lcd,response:14160,tsl2561,activity:nano-data-logger
---

# Dual NDVI Ultra Probe Unit

*Above: The Dual NDVI Ultra Probe Unit is powered by a Nano Logger (enhanced by an array of beryllium spheres) and is ready for field action.*

The TSL2561 is a common luminosity sensor. It measures how bright it is and reports in units that relate to the brightness that people perceive (lux). Like all CMOS sensors, this one is sensitive to near infrared light as well as visible light. The sensor leverages this by reporting separate values for both near infrared and for the entire (full spectrum) range it is sensitive to.

[![tsl2561SR.JPG](https://publiclab.org/system/images/photos/000/020/406/medium/tsl2561SR.JPG)](https://publiclab.org/system/images/photos/000/020/406/original/tsl2561SR.JPG)  
*Above: The spectral response of the TSL2561 sensor. Channel 1 is mostly near infrared and channel 0 is the full range, but if you subtract 1 from 0 you can get a mostly visible light result.*

[![Nanolog_20170509-8817.JPG](https://publiclab.org/system/images/photos/000/020/407/medium/Nanolog_20170509-8817.JPG)](https://publiclab.org/system/images/photos/000/020/407/original/Nanolog_20170509-8817.JPG)  
*Above: The TSL2561 CMOS sensor on this breakout board is the little thing above the printed name. This is an I2C sensor board.*

[![nanolog_20170508-8600.JPG](https://publiclab.org/system/images/photos/000/020/408/medium/nanolog_20170508-8600.JPG)](https://publiclab.org/system/images/photos/000/020/408/original/nanolog_20170508-8600.JPG)  
*Above: I rigged up two of these sensors with the Nano Logger to see what kind of NDVI information it could provide. NDVI (normalized difference vegetation index) exploits the high reflectance of near IR from healthy foliage. The tubes are to blinker the sensors so I could control what light was impacting them. I use two sensors to try different blinkering and aiming arrangements -- both were reporting the same data.*

[![nanolog_20170508-8628.JPG](https://publiclab.org/system/images/photos/000/020/409/medium/nanolog_20170508-8628.JPG)](https://publiclab.org/system/images/photos/000/020/409/original/nanolog_20170508-8628.JPG)  
*Above: The Nano Logger was powered by six AA batteries. These will run it for a day or two, and I only needed an hour or two for this testing.*

[![Nanolog_20170509-8687.JPG](https://publiclab.org/system/images/photos/000/020/410/medium/Nanolog_20170509-8687.JPG)](https://publiclab.org/system/images/photos/000/020/410/original/Nanolog_20170509-8687.JPG)  
*Above: The sketch on the Nano was saving lots of data to microSD card every six seconds and also displaying some of it live on an LCD. The sketch computed NDVI with a crude formula so I could get an idea of how reasonable the results were.*

[![Nanolog_20170509-8727.JPG](https://publiclab.org/system/images/photos/000/020/411/medium/Nanolog_20170509-8727.JPG)](https://publiclab.org/system/images/photos/000/020/411/original/Nanolog_20170509-8727.JPG)  
*Above: I walked around holding the Ultra Probe Unit pointed at some vegetation for a minute or two. This is winter rye.*

[![Nanolog_20170509-8738.JPG](https://publiclab.org/system/images/photos/000/020/412/medium/Nanolog_20170509-8738.JPG)](https://publiclab.org/system/images/photos/000/020/412/original/Nanolog_20170509-8738.JPG)  
*Above: The Unit is analysing ostrich ferns.*

[![Nanolog_20170509-8718.JPG](https://publiclab.org/system/images/photos/000/020/413/medium/Nanolog_20170509-8718.JPG)](https://publiclab.org/system/images/photos/000/020/413/original/Nanolog_20170509-8718.JPG)  
*Above: The Unit is collecting information about the forest understory.*

[![NDVIXL.JPG](https://publiclab.org/system/images/photos/000/020/414/large/NDVIXL.JPG)](https://publiclab.org/system/images/photos/000/020/414/original/NDVIXL.JPG)  
*Above: Some of the NDVI results seemed to be reasonable. One would expect the forest understory to be less photosynthetically active than the lawn or winter rye this time of year. The two bars for each vegetation type are the two sensors. They were deployed a little differently, so the difference between the two in each pair does not mean much. The bars are the mean for about a dozen readings and the error bars are ± 1 SE.*

[![Nanolog_20170509-8744.JPG](https://publiclab.org/system/images/photos/000/020/415/medium/Nanolog_20170509-8744.JPG)](https://publiclab.org/system/images/photos/000/020/415/original/Nanolog_20170509-8744.JPG)  
*Above: The Nano Logger is at left. The live display of computed NDVI was handy. Walking around in the woods with this thing tends to confirm any doubts you might be having about the life choices you have made.*

Although some of the results looked good, I noticed that when the clouds parted the relationship between visible and infrared light changed. The sensor is known to have a non-linear response to varying brightness, and the library I used corrects for this when it computes lux values. But the infrared data it reports are not corrected, so the NDVI values that were computed on the fly got silly when the sun came out. 

The Nano Logger saved all the raw data, so I could try to apply the correction, but the datasheet has a very messy case-wise algorithm for this so I have not figured it all out yet.

My original goal was not to make a portable NDVI Ultra Probe Unit, but to install the sensors permanently pointed at different types of vegetation and let them record NDVI results as spring progresses. The Probe Unit was just a testing tool to see what kind of results I could get. My original plan might still work but it will take some effort to apply the calibration information (which could be done after the Nano Logger collects all the raw data). Here is the working sketch I was using: 
<a href="https://publiclab.org/system/images/photos/000/020/416/original/Deek_LCD2NDVI.txt"><i class="fa fa-file"></i> Deek_LCD2NDVI.txt</a>

I got carried away ordering duplicate neato stuff on eBay, so I have put together a few kits of the Nano Logger and various optional sensors and related things. These can be purchased at the [KAPtery's new Data Logging section](http://kaptery.com/products/?f=category&id=39). I am still working on documentation for the kits, but if you have any questions about them post them in the comments for [one of my notes here](https://publiclab.org/tag/nano-data-logger).














 