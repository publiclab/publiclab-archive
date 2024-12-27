---
title: ""Cool" Riffle Data - with holes!"

tagnames: 'riffle-beta'
author: pdhixenbaugh
path: /notes/pdhixenbaugh/07-09-2016/cool-riffle-data-with-holes.md
nid: 13276
uid: 459085

---

![](https://publiclab.org/public/system/images/photos/000/016/939/original/IMG_20160625_161315987_1_.jpg)

# "Cool" Riffle Data - with holes!

by [pdhixenbaugh](../../../profile/pdhixenbaugh) | July 09, 2016 23:14

July 09, 2016 23:14 | Tags: [riffle-beta](../tag/riffle-beta)

----

###Setting the scene:

I am writing from the Catskills mountains of NY where the streams are cold and full of trout. Environmental groups work to protect the streams and could use a Riffle. But can it stand up to the temperatures? 

###What I did
* Loaded Don Blair’s temp logging sketch onto the riffle
* Put the Riffle into a walk in cooler, which is kept below 40 degrees Celsius, and left it for a week.
* Learned to use LibreOffice Calc to import the data and graph it vs time. (learning curve for open source software without using the internet is very steep. Took lots of experimentation, which I can write up later if it is needed).
* Solved one headache by importing .csv datafile into Calc using column 1 as Y-M-D
* Added column headers to the datafile
* Converted deg C to deg F just for fun (and to show the owner of the walk-in cooler the temperatures)
* Created Chart (scatter temp vs date/time)

###What I noticed
* Awesome data! Get it here: [http://paste.ubuntu.com/18927255/](http://paste.ubuntu.com/18927255/)
* Weird discontinuities. The data starts and stops with blank intervals in between. I know for a fact that one of the kitchen workers knocked over the riffle at one point and it was sitting on the ground, but I don’t know if that was the cause.
* I don’t know how to interpret the last two columns of the datafile, and just guessed – what do they tell me, and can we include those things in a user manual?

(I’m listening to the bubbling brook and a red tailed hawk as I write this.)

###Questions and suggestions for the future:
* Include a quick guide to what the blinking light codes mean for any arduino sketch.
* What are technical data values used for? (Voltage…)
* Would it be possible to include data headers – or document reason why they’re not there?
* Data Analysis: are there better ways to graph multi-day data over time?
* Future hardware: Could it be possible to buy a spare battery and an external battery charger? That way you could keep the riffle in place and swap out the batteries.

###Why I'm interested
I think it would be really cool to get this in the hands of water quality and environmental professionals who could use dataloggers to capture more complete stream data than they currently can. Even temperature data by itself is incredibly useful in predicting where trout will be able to survive in a changing climate.

