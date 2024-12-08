---
title: using soap bubbles for pump calibration
tagnames: calibration, air-quality, h2s, formaldehyde, open-air, openair, pump, indoor-air-quality, vacuum
author: mathew
path: /notes/mathew/06-04-2015/using-soap-bubbles-for-pump-calibration.md
nid: 11949
uid: 4

---

# using soap bubbles for pump calibration

by [mathew](../profile/mathew) June 04, 2015 01:32

June 04, 2015 01:32 | Tags: [calibration](../tag/calibration), [air-quality](../tag/air-quality), [h2s](../tag/h2s), [formaldehyde](../tag/formaldehyde), [open-air](../tag/open-air), [openair](../tag/openair), [pump](../tag/pump), [indoor-air-quality](../tag/indoor-air-quality), [vacuum](../tag/vacuum)

###What I want to do
I want to see if @davidmack's [suggestion](/notes/nshapiro/11-03-2014/diy-formaldehyde-test-kit#c10686) that a graduated cylinder with a soap bubble traveling along it can be used to calibrate the flow rate of a pump.

###My results
My goal is to set a DIY formaldeyhide testing kit to 0.3L/minute of airflow. I chose a 250ml graduated cylinder, with the intent of watching the bubble traverse 200ml of its height in 40 seconds. I drilled a 3/8" hole in the base of the graduated cylinder and screwed in a threaded 1/8" brass barbed fitting, first to tap some threads in the cylinder, and then a second time with some teflon tape around the threads to seal the threads.  I didn't use aquarium sealant as @davidmack suggested because the graduated cylinder is polypropylene and glues won't stick to it readily.  to test the airtightness I filled the cylinder with water and waited a few minutes to see if there were any leaks. 

[![IMG_20150603_162840.jpg](https://i.publiclab.org/system/images/photos/000/010/199/medium/IMG_20150603_162840.jpg)](https://i.publiclab.org/system/images/photos/000/010/199/original/IMG_20150603_162840.jpg)

I then filled a tray with an unmeasured mixture of a lot of dish soap and water. This bubble solution was terrible and wouldn't hold a bubble. I then googled "bubble solution" and made a mixture of 1/4 cup soap, 1/2 cup water, and a teaspoon of sugar, and of course forgot to save where I got that recipe.  

I found that it was important to evenly coat the inside of the cylinder with bubble solution, otherwise the bubble in the cylinder didn't move straight down, and would get hung up on the walls and become lop-sided.  I mitigated this situation by dipping some newsprint in the bubble solution and putting it down the tube at a few different points.  I then let the bubble solution settle to the bottom of the cylinder and poured it out.   This process needed to be repeated every half hour or so.

[![IMG_20150603_150759.jpg](https://i.publiclab.org/system/images/photos/000/010/205/medium/IMG_20150603_150759.jpg)](https://i.publiclab.org/system/images/photos/000/010/205/original/IMG_20150603_150759.jpg)

###Running a test

I opened a formaldehyde tube and put it into the  system and drew air into the cylinder, through the tube, and into the pump, the configuration that @nshapiro [laid out.](/notes/nshapiro/11-03-2014/diy-formaldehyde-test-kit)

[![IMG_20150603_144331-2.jpg](https://i.publiclab.org/system/images/photos/000/010/203/medium/IMG_20150603_144331-2.jpg)](https://i.publiclab.org/system/images/photos/000/010/203/original/IMG_20150603_144331-2.jpg)

[![IMG_20150603_154542.jpg](https://i.publiclab.org/system/images/photos/000/010/204/medium/IMG_20150603_154542.jpg)](https://i.publiclab.org/system/images/photos/000/010/204/original/IMG_20150603_154542.jpg)
(these images credit:@warren)

To prepare the cylinder I dip the top of the cylinder in bubble solution, and then draw a little air into it until the bubble is into the cylindrical part of the graduated cylinder, turn the air pump off, and wait for the bubble to settle into a flat shape.  This is an important step to get a flat bubble.

[![IMG_20150603_154838-2.jpg](https://i.publiclab.org/system/images/photos/000/010/200/medium/IMG_20150603_154838-2.jpg)](https://i.publiclab.org/system/images/photos/000/010/200/original/IMG_20150603_154838-2.jpg)

[![IMG_20150603_154420-2.jpg](https://i.publiclab.org/system/images/photos/000/010/201/medium/IMG_20150603_154420-2.jpg)](https://i.publiclab.org/system/images/photos/000/010/201/original/IMG_20150603_154420-2.jpg)

I always give the bubble some travel distance above the mark I'm measuring from so the pump has time to warm up.  Then I start the pump and wait for the bubble to hit the mark I'm measuring from, start a stopwatch, and stop it when the bubble gets to the second mark.  With the 250ml graduated cylinder, these two points are at 250ml and 50ml.  I didn't put in a dropout, or a sealed chamber with a break in the line to prevent bubbles from entering the test line, as @davidmack [suggested](/notes/nshapiro/11-03-2014/diy-formaldehyde-test-kit#c10686).  I just turned the pump off before it got to the inlet and then popped the bubble with a stick.

###Sources of error

My different measurements of the same flow setup have a 300ms (milliseconds) range.   For instance, 39.98 seconds and 39.65 seconds. were the high and low of 5 different trials.  Given that human response time is somewhere between 100-500ms, this 300ms range is inevitable.  In a 40-second time trial, it introduces roughly 1% variability.

Other sources of variability are that the graduated cylinder is only marked to 2ml accuracy, and is rated for its current volume at 20 degrees Celsius.  I conducted these tests at 22 degrees.  Also, the extra fitting for the cylinder may cause some changes in airflow.

###Conclusions
The bubble method seems to work pretty well!  Next week I'll have a high-precision NIST-traceable pump to compare it to, and will therefore have a better understanding of its accuracy.   While not the fastest means of measuring, I was able to tweak a small flow control valve, and over about 25 tests and an hour of testing, I set the pump to the 300ml/minute flow rate I sought, to within a few percentage points of accuracy. 