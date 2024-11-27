---
nid: 11317
title: DIY Formaldehyde Test Kit
path: public/static/notes/nshapiro/11-03-2014/diy-formaldehyde-test-kit.md
uid: 380298
tagnames: air-quality,air,prototype,barnstar:empiricism,formaldehyde,wherewebreathe,barnstar:excessive-enthusiasm,gas,low-cost,meter,canary-database,indoor-air-quality,hcho,seeks:replications,time:3h,difficulty:medium,category:build,status:in-progress,activity:open-air
---

# DIY Formaldehyde Test Kit

Note: this system has been found to have some cross-reactivity when other VOCs are present that might artificially inflate results. This method is can be a good general indicator of your formaldehyde exposure but as it requires individuals to buy a box of tests its not recommended for those that are interested in a single low-cost test. For more information on cross contamination see this research note: https://publiclab.org/notes/gretchengehrke/10-07-2015/formaldehyde-measurement-testing-public-lab-s-kit-with-doh-s-equipment  

  
\###What I want to do

I am in pursuit of an inexpensive means of testing formaldehyde levels down to very low levels. The most common way that formaldehyde is inexpensively measured is by way of a [passive sampler](http://www.acsbadge.com/formaldehyde.shtml) ($39 plus shipping both ways) that is placed in a room for 24 hours and then sent to a lab of analysis. This advantages of such a method are that they have no moving parts, are very easy to use, they can detect formaldehyde down to 3 parts per billion, and the results are produced by an accredited lab. The disadvantages are that the samples can become contaminated in during shipment back to the lab, they demand extended sampling time, and rely on black-boxed expertise and expensive instrumentation.

Much of the cost is a result of the expensive lab equipment and expert analysis. Fifty or so dollars (including shipping) can feel prohibitively expensive for those in precarious financial situations, which are the populations that face the wost exposures due to poor housing conditions. Consequently the interests of environmental justice and open science both point towards a method that avoids the costs and other shortcomings of the send-it-to-the-lab paradigm.

Last year a paper was published in the journal\_ Indoor Air\_ that outlined a very low cost testing method. In their study they conducted 70 formaldehyde tests for approximately $500, which yields an average cost of $7.14 per test. The sampling method utilizes a colorimetric detection tube and a hacked aquarium pump as a vacuum. In the study they validated both the readings of the formaldehyde tubes and the flow rate of the pump. The paper is available [here](http://onlinelibrary.wiley.com/doi/10.1111/ina.12024/abstract) and the citation is below.

Dannemiller, Karen C., Johnna S. Murphy, Sherry L. Dixon, Kelly G. Pennell, Eric M. Suuberg, David E. Jacobs, and Megan Sandel. "Formaldehyde Concentrations in Household Air of Asthma Patients Determined Using Colorimetric Detector Tubes." Indoor Air 23, no. 4 (2013): 285--94\. doi:10.1111/ina.12024\.

The lead author, Karen Dannemiller, has been very helpful in talking me through how to modify the aquarium pump and how to monitor the flow rate of the air flowing through the system. Every morning before they would conduct their testing they would measure the flow rate with a [$1000 flow meter](http://www.apbuck.com/shop/item.aspx?itemid=19). Karen recommend the less expensive flow meter that I use below but also cautioned that perhaps a more accurate flow meter should be used to double check the values of each meter.

\###My attempt and results

I used the following in my attempt:

1. 1 Kitagawa 710 Formaldehyde tube [(1 box of 20 tubes costs $129 + shipping)](http://www.komyokk.co.jp/pdata/tpdf/710_1.pdf).
2. 1 VWR FLOW METER ACR 2IN.1-1LPM [($74.62 + shipping)](https://us.vwr.com/store/catalog/product.jsp?catalog_number=97004-792).
3. 1 Tetra 77855 Whisper Air Pump, 100-Gallon [($19.22)](http://www.amazon.com/Tetra-77855-Whisper-Pump-100-Gallon/dp/B000A0PYQK).
4. 2 small segments of ordinary aquarium airline pump (very inexpensive).
5. 2 1/8-27 MPT to airline conversion valves [($4 for two)](http://www.drsfostersmith.com/product/prod_display.cfm?c=3578+3669+8046+8165&pcatid=8165).

(Note: this technique will also likely work with the [740](http://www.komyokk.co.jp/pdata/tpdf/740_1.pdf) NO2 tube, just dial the air flow down to 200 ml per minute and run for 20 minutes as opposed to 30 at 300 ml/min for formaldehyde.)

The first step is to reverse the diaphragm in the pump to convert it to a vacuum. Open up the four Philips head screws on the belly of the pump. Lift up, rotate 180 degrees, and then replace the diaphragm as indicated in the below GIF.

[![output_ra01xV.gif](https://i.publiclab.org/system/images/photos/000/010/602/original/output_ra01xV-loop.gif)](https://i.publiclab.org/system/images/photos/000/010/602/original/output_ra01xV-loop.gif)

Attach a small segment of airline tubing from the pump to the top of the flow meter (which you have equipped with the conversion valves at both openings) and then attach another small section of tubing to the bottom of the flow meter. You will have three points where you can adjust the flow rate (the meter, and both conversion valves). Open all valves to their most open--while still sealed--position. Once you've started the pump, use the large valve on the flow meter to regulate the flow rate down to .3 liters per minute (or 300 ml per minute).

[![FullSizeRender.jpg](https://i.publiclab.org/system/images/photos/000/007/696/medium/FullSizeRender.jpg)](https://i.publiclab.org/system/images/photos/000/007/696/original/FullSizeRender.jpg)

Using the heart-shaped scoring stone included with the tubes, score and then crack off both ends of the tube so that airline tubing can snugly attach. Attach the tubing so that the "HCHO -\>" arrow is pointing in the direction that air is flowing (ie towards the pump). Set an alarm for 30 minutes (don't just look at the clock and hope you will remember). Place the kit on a level surface at least three feet above the floor and plug the pump in and start your timer.

After 30 minutes turn off the pump and inspect the length of stain by eye and take a photo of the tube in medium light with a black background. The reagent in the tube will begin with a yellowish waxy color and will discolor to pink to indicate the level.

[![FullSizeRender_4.jpg](https://i.publiclab.org/system/images/photos/000/007/697/medium/FullSizeRender_4.jpg)](https://i.publiclab.org/system/images/photos/000/007/697/original/FullSizeRender_4.jpg)

In my preliminary test of a room that had been renovated 20 years ago, in a old somewhat drafty house, I found .01 ppm or 10 ppb. The thermostat was set to 69 degrees F, which corresponds to 20.56 degrees C, which gives us an actual formaldehyde concentration of \*\*9.85 ppb. \*\* Which is about average for a US conventional home.

[![FullSizeRender_2.jpg](https://i.publiclab.org/system/images/photos/000/007/698/medium/FullSizeRender_2.jpg)](https://i.publiclab.org/system/images/photos/000/007/698/original/FullSizeRender_2.jpg)

This test cost over $230\. But over the course of the entire box of 20 tubes the average test price will drop down to $12.10 (+ the shipping costs of all the parts) and as we continue to use the flow meter and pump for many boxes of tube the average cost will continue to drop. This method becomes very cheap if a large number of tests are required as each formaldehyde tube, which is the only one-time-use part of the system, costs $6.45\. Setting up a system to share the pump and flow meter will make this method readily affordable and concerned people will be able to take four tests of their home at different times of day (to understand the dramatic oscillation of formaldehyde in a home due to temp and humidity changes) for the same cost as a single formaldehyde badge. Results from this method are immediately available, whereas the results from the badge are delayed by 2-3 days of shipping and 2 days of analysis.

This method only requires a short duration of testing and doesn't require external lab analysis (which adds the possibility of contamination during return shipments). The detection limit is 5ppb which is 2 ppb higher than the badge method described above. Both detection detection limits (the lowest concentration that the kit can detect) are below the ATSDR Minimum Response Level for chronic (greater than 1 year) formaldehyde inhalation, which is of 8ppb (.[pdf](http://www.atsdr.cdc.gov/toxprofiles/tp111.pdf)), and therefore seem to be able to document formaldehyde down to a concentration that is not likely to cause any non-cancerous health effects in humans. I would suspect that this level is lower for companion species, but the [Canary Database ](http://canarydatabase.org/browse/exposure/?l=F) doesn't have any entries for formaldehyde.

You can see how your sample compares to various regulatory standards by entering your findings into the report generator at [http://www.myairsample.org/](http://www.myairsample.org/)

\###Questions and next steps

If you do find elevated levels of formaldehyde, then you could think about remediating you air. We've begun development of our remediation kits [here](http://publiclab.org/notes/nshapiro/10-20-2014/diy-indoor-air-quality-remediation). Longer term solutions include identifying the source(s) and removing them which may be very costly and the sources may be the very structure of the home itself in the form of pressed woods.

1. Obtain many aquarium pumps and access to a high quality digital flow meter to validate each analog flow meter. Testing the decline in pump performance over time across a number of pumps could allow us to predict the pump flow rate depending on duration of use and allow us to not need a flow meter, which would decrease the cost of each kit.
2. Figure out the best means of demonstrating the length of stain in a photograph (background color, lighting and smart phone camera). Maybe an index card with time, place, temperature data fields on it so all the meta data would be in the image?
3. Develop a Fahrenheit temperature correction table. Or just encourage the thermostat to be set to 68 degrees F so that no temperature corrections need to be done.
4. I propped my first test tube up on the meter-to-pump airline so as to sample the air above and not the air directly on the sampling surface, but because of vibrations the tube moved around a lot and needed to be monitored and rearranged a couple times. How can we develop a simple stand so that the tube can be securely vertical so as to not be drawing air across a potentially formaldehyde emitting surface? This could be as simple as a rubber band to old the tube in place.
5. We will be further workshopping this kit and performing multiple tests this Friday and Saturday in Boone, NC. Further refinements and observations will be posted soon.

\###Why I'm interested

I have been studying residential formaldehyde exposure for the past five years and am the lead researcher of the Public Lab Where We Breathe project that focuses on domestic chemical contamination and mitigation.