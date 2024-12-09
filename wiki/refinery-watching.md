---
title: Refinery Watching
tagnames: spectrometer, particulate-sensing, industrial-monitoring, flame-spectroscopy, photo-monitoring, refinery, air-quality, flare, tool, ioby, industry, method, chemicals, oil-and-gas, parent:photo-monitoring
author: danbeavers
path: /wiki/refinery-watching.md
nid: 9827
uid: 51

---

![](https://publiclab.org/public/system/images/photos/000/002/323/original/Shell_Norco_flare_1_.jpg)

# Refinery Watching

by [warren](../profile/warren), [danbeavers](../profile/danbeavers)

November 25, 2013 21:51 | Tags: [spectrometer](../tag/spectrometer), [particulate-sensing](../tag/particulate-sensing), [industrial-monitoring](../tag/industrial-monitoring), [flame-spectroscopy](../tag/flame-spectroscopy), [photo-monitoring](../tag/photo-monitoring), [refinery](../tag/refinery), [air-quality](../tag/air-quality), [flare](../tag/flare), [tool](../tag/tool), [ioby](../tag/ioby), [industry](../tag/industry), [method](../tag/method), [chemicals](../tag/chemicals), [oil-and-gas](../tag/oil-and-gas), [parent:photo-monitoring](../tag/parent:photo-monitoring)

----

###What we want to do

We are setting up 24/7 observation stations to monitor gas refinery flares.  This is a pilot program for a DIY observation station that is cheap, easy to construct, reasonably reliable, and produces usable data. 

<div class="well"><p><b>Please consider donating to fund development of our flare monitoring prototypes and tests by selecting the Donate button on the top of this page!</b></p>
</div>

[![chalmette_1_.jpg](https://i.publiclab.org/system/images/photos/000/002/553/medium/chalmette_1_.jpg)](https://i.publiclab.org/system/images/photos/000/002/553/original/chalmette_1_.jpg)

###Why we are doing this

Do you drive by a refinery and wonder why that big flare is burning?  What would you think if you were startled by what sounds like a jet landing in your yard and then you looked out the window to see a huge flame billowing black smoke?  You would probably have health concerns and wonder how well the Department of Environmental Quality (DEQ) was doing their job.

Our objective is not to shut down refineries.  We generally find the products they produce useful if not necessary.  We want to make sure the refineries are working in the best interest of the health of the citizens and that DEQ is enforcing the regulations.  The self reporting that the refineries do and the DEQ monitoring process appears to be lacking due to numerous causes.  This project will empower the average citizen to have a say that will be hard to ignore.

###Scenarios

* The first location is on a covered porch so it is protected from the weather and does not have to look thru a window.  Power is readily available.  Internet is not available since there is no phone line to the structure.  Cell coverage is good.
* The second location will be inside looking thru a window at one flare. 


[![8059478028_f204b0164f_k.jpg](https://i.publiclab.org/system/images/photos/000/005/498/large/8059478028_f204b0164f_k.jpg)](https://i.publiclab.org/system/images/photos/000/005/498/original/8059478028_f204b0164f_k.jpg)

_Photo by @donblair - pointing a DIY spectrometer from the roof of a building._

###Equipment List

We would like you to help with an equipment list, sources, and prices.  The first scenario should take more equipment while the second should be a subset of the first.  

* **WIFI cell hot spot**  It should have WiFi and an e-net port.  It should be about $50/month for one year.  
* **RaspberryPI**  Processor for the data capture and transmission.  Are there real security concerns connecting this to the Internet?
* **PIcam**
* **Low resolution thermal imaging sensor and interface**  I am thinking of the [16 pixel MEMS](http://www.onlinecomponents.com/omron-electronics-d6t44l06.html?p=44683242) device.  This could be used to determine when to take a picture/spectrum along with general temperature measurements.
* **Two [spectrometers](/wiki/spectrometer)**  There are 2 flares visible from the location.
* **Particle sensor**  A port of the [DustDuino](http://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino) to RPi?
* **USB powered hub**   RPi has low power on the USB port.

The following can probably be lumped together.

* misc. cables
* power supplies
* misc. mounting hardware: a [desk vise](http://www.amazon.com/PanaVise-Model-201-Junior-Miniature/dp/B000B61D22/) ($27)
* web Storage
* software

###Questions and next steps

We need to raise the money to fund the project.  You can help by going to the [ioby](https://ioby.org/project/refinery-flare-monitoring) page and making a contribution.

###Related Information

[Flare Spectrometer proposal in Shreveport and Meraux Louisiana](http://publiclab.org/notes/AndyZ/11-22-2013/flare-spectrometer-proposal-in-shreveport-and-meraux-louisiana)

[Spectrometry group e-mail "Refinery watching in Louisiana"](https://groups.google.com/forum/#!topic/plots-spectrometry/VgBpsU3d52I)

[Air Quality group e-mail "Refinery watching in Louisiana"](https://groups.google.com/forum/#!topic/plots-airquality/VgBpsU3d52I)

[Gulfcoast group e-mail "Refinery watching in Louisiana"](https://groups.google.com/forum/#!topic/plots-gulfcoast/VgBpsU3d52I)

[Public Lab ioby projects](http://publiclab.org/ioby)

###Alerts

Via the excellent [SkyTruth Alerts](http://alerts.skytruth.org/), near Meraux and Chalmette ([subscribe to alert feed](http://alerts.skytruth.org/rss?l=29.8779,-90.0037,29.9746,-89.8836#rss)):

<iframe width="100%" height="650" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://alerts.skytruth.org/embed?l=29.8779,-90.0037,29.9746,-89.8836"></iframe>