---
title: "Raspberry Pi as Marine Traffic Radar"

tagnames: 'gulf-coast, software, transportation, open-water, pi, traffic, raspberry, rtl-sdr, ship_tracking, defined, radio, sdr, activity:transportation'
author: ajawitz
path: /notes/ajawitz/06-11-2015/raspberry-pi-as-marine-traffic-radar.md
nid: 11970
uid: 294634
cids: 11982,11985
---

![](https://publiclab.org/public/system/images/photos/000/010/313/original/RPISDR.jpg)

# Raspberry Pi as Marine Traffic Radar

by [ajawitz](/profile/ajawitz) | June 11, 2015 05:08

June 11, 2015 05:08 | Tags: [gulf-coast](/tag/gulf-coast), [software](/tag/software), [transportation](/tag/transportation), [open-water](/tag/open-water), [pi](/tag/pi), [traffic](/tag/traffic), [raspberry](/tag/raspberry), [rtl-sdr](/tag/rtl-sdr), [ship_tracking](/tag/ship_tracking), [defined](/tag/defined), [radio](/tag/radio), [sdr](/tag/sdr), [activity:transportation](/tag/activity:transportation)

----

###What I want to do
  I want to monitor and log commercial marine traffic using a Raspberry Pi as a "Software Defined Radio" with a low-cost digital tuner called the RTL-SDR.  If successful, such a device could be deployed in locations such as the Gulf Coast in order to provide a comprehensive database of vessel locations which can be cross-referenced with data from other environmental sensors.

###Why I'm Interested
  My inspiration for this project came from the following story about a hactivist who was using an identical setup albeit one configured to track airplanes instead of ships..


  From http://www.rtl-sdr.com/monitoring-fbi-surveillance-aircraft-with-ads-b-and-an-rtl-sdr/

    After reading an article by the Washington Post about FBI surveillance aircraft spotted in the air after the West Baltimore riots, John Wiseman decided to look for more information about these aircraft. Fortunately, John had on his hands a database of about 2 months of ADS-B data that was collected by his continuously running RTL-SDR + BeagleBone Black ADS-B decoder set up.
    From reports on the internet John found out that FBI aircraft squawked with 4414 or 4415 codes, and used call signs like JENNA or JENA. With this information John decided to take a look through his ADS-B logs to see if if he could find anything similar. Out of 15,000 aircraft he had tracked, he found 9 aircraft in his logs that matched the criteria, and saw that they did exhibit suspicious behaviour such as circling over LA for hours at a time. Then by looking up their FAA records of the tail numbers of the suspicious aircraft, he was able to discover that these aircraft where licensed to companies with names like NG Research, OBR Leasing, Aerographics Inc. and PXW Services which are suspected Department of Justice front companies.

. The story above dramatically illustrates the importance of the relationship between open data and the means through which the data was collected.  There are any number of aircraft-tracking websites such as [FlightAware](https://flightaware.com/) that most assume would include the same information.  Yet, someone who doesn't want to be tracked (in this case, the FBI contractor but it easily could be a company engaged in illegal ocean dumping etc...) would find ample opportunity to alter the data presented by such a service.  Furthermore, as many airplane and marine tracking services operate on the "freemium" model, the type of in-depth analytics performed in the example would likely only be available for a substantial fee.  By tracking the transmissions himself, he gets the raw details of every transmission within range.  Thanks to the availability of low-cost,Open Source tools like the Beaglebone Black and Raspberry Pi, such sophisticated capabilities are now possible for the average individual.
  A ship tracking setup nearly identical as the one outlined above can be deployed to support existing PLOTs campaigns in say... the Gulf Coast? Or even the Gulf of Maine where data collected from Open Water sensors can be cross referenced with a database of tracked ship positions picked up by the monitoring station.  The data can then be used to correlate the sensor readings to individual vessels who were in the area.  Such data would be considerably more reliable then if it were collected from outside sources.

 
####AIS and Ship Tracking
  AIS stands for "[Automatic Information System](http://en.wikipedia.org/wiki/Automatic_Identification_System)" and has emerged as the global standard for maritime position reporting.  Since 2004 all vessels over 300 tons as well as commercial passenger vessels have been required to carry an AIS transponder.  More signficantly, [new US Coast Guard regulations](http://uscgportsupply.com/) slated to go into effect in March 2016 will require_ virtually any commercial vessel _operating in U.S. waters to actively transmit an AIS signal.  As such data is considered public domain, this will significantly enhance efforts such as environmental enforcement.  However, the collection of such data is anything but consistent.

[![Screenshot.png](https://i.publiclab.org/system/images/photos/000/010/314/medium/Screenshot.png)](https://i.publiclab.org/system/images/photos/000/010/314/original/Screenshot.png)


  While some larger shipping carriers use satellite-based fleet tracking services, the vast majority of AIS transmissions are captured by land-based receivers.  Online data services such as MarineTraffic.com rely on a network of amateur radio operators in a manner akin to the network of weather stations connected to wunderground.com.  Most of these services will provide the station equipment to a volunteer free of charge if they are based in an area without coverage at that time.  The equipment consists of a receiver, and a closed-source IP Box that sends the data directly to their servers. In exchange, the operators are usually given access to the "premium" features of the service, but they have no access to the actual data they are collecting.  Alternately, a station operator can purchase the equipment themselves but a commercial AIS receiver alone normally costs about $500.  Not including the software configuration, antenna etc...

 ####Enter Software Defined Radio!
  If it seems like this scenario has all the ingredients of a massive DIY disruption then your hunch is correct!  It turns out that AIS ship tracking is but one of a host applications that can be mastered through techniques based on _Software Defined Radio_.
  According to http://www.rtl-sdr.com/about-rtl-sdr/

    Radio components such as modulators, demodulators and amplifiers are traditionally implemented in hardware components. The advent of modern computing allows most of these traditionally hardware based components to be implemented into software instead. Hence, the software defined radio. This enables easy signal processing and thus cheap wide band scanner radios to be produced.

  Specifically, the key piece of hardware is a $20 USB dongle called the RTL-SDR.  Explained in detail in the site linked above-

    RTL-SDR is a very cheap software defined radio that uses a DVB-T TV tuner dongle based on the RTL2832U chipset. With the combined efforts of Antti Palosaari, Eric Fry and Osmocom it was found that the signal I/Q data could be accessed directly, which allowed the DVB-T TV tuner to be converted into a wideband software defined radio via a new software driver.
    Essentially, this means that a cheap $20 TV tuner USB dongle with the RTL2832U chip can be used as a computer based radio scanner. This sort of scanner capability would have cost hundreds or even thousands of dollars just a few years ago. The RTL-SDR is also often referred to as RTL2832U, DVB-T SDR, RTL dongle or the “$20 Software Defined Radio”.

[![RPISDR.jpg](https://i.publiclab.org/system/images/photos/000/010/315/medium/RPISDR.jpg)](https://i.publiclab.org/system/images/photos/000/010/315/original/RPISDR.jpg)


 The range of applications that can be accomplished using this cheap $20 dongle with the SDR technique is simply staggering.  From its most popular use as a [cheap ground-based aircraft radar](http://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/) to more "black hat" hacks like[ decoding GSM-cell phone airwaves](http://www.rtl-sdr.com/rtl-sdr-tutorial-analyzing-gsm-with-airprobe-and-wireshark/) hackers are continually devising new capabilities that normally require thousands if not millions of dollars worth of equipment.  Other capabilities may be of significant interest to the citizen science community and might well deserve a dedicated wiki if interest is sufficient.  A brief listing could include[ radio astronomy](http://www.rtl-sdr.com/rtl-sdr-for-budget-radio-astronomy/),[ receiving data from weather balloons](http://www.rtl-sdr.com/receiving-weather-balloon-data-with-rtl-sdr/), and even methods of receiving and decoding real-time satellite imagery from both[ russian](http://www.rtl-sdr.com/rtl-sdr-tutorial-decoding-meteor-m2-weather-satellite-images-in-real-time-with-an-rtl-sdr/) and [US (NOAA)](http://www.rtl-sdr.com/rtl-sdr-tutorial-decoding-meteor-m2-weather-satellite-images-in-real-time-with-an-rtl-sdr/) spacecraft.  Excellent tutorials with step by step instructions for these projects and many more can all be found at http://www.rtl-sdr.com/.  For the purposes of this documentation however, I will stick to ship tracking...

###My attempt and results
  The original tutorial that introduced the concept of using an RTL-SDR for ship tracking is still the most thorough in my opinion and can be found at-http://www.rtl-sdr.com/rtl-sdr-tutorial-cheap-ais-ship-tracking/.  Following these instructions, I was receiving and plotting local ship traffic from my living room in about an hour!  
 The Windows-based workflow includes an SDR decoder called[ SDR# ](http://sdrsharp.com/), a method of translating the analog signal through the PC sound card called "audio piping", which was accomplished through a program called [VB-Cable](http://vb-audio.pagesperso-orange.fr/Cable/) and a mapping-navigation program that can read the translated input called [ShipPlotter](http://www.coaa.co.uk/shipplotter.htm).

The method has its limitations however. The major one, the fact that it requires a Windows PC entailed a certain degree of soul searching from a Linux partisan like myself...  also means the method will be of limited use in a remote monitoring situation where the program would need to run continuously.  Such a situation calls for an embedded system like a Raspberry Pi. 
 Also, the method is only capable of receiving one VHF channel at a time, and because AIS trasmit over two channels, it means there would inevitably be some lost data. Finally, even though I was picking up transmissions right from the comfort of my couch, it became obvious that a suitable VHF antenna would be required.
###Questions and next steps
####Linux and Raspberry Pi
  Luckily,[ a Linux version of the workflow](http://www.oz9aec.net/index.php/gnu-radio-blog/482-a-2-channel-ais-receiver-using-rtl-sdr-and-gnuais) does exist and it even provides a way to receive both channels.  Unluckily, this requires [GNURadio](http://gnuradio.org/redmine/projects/gnuradio/wiki) which is one of those byzantine, unwieldy "experts only" programs that takes for granted its primary end-user will have a background in some obscure skillset (in this case short wave radio enthusiasts...).  So replicating the successful Windows workflow in Linux has turned out to be something of a challenge...  With that said, there is even a [ready-made image for the Raspberry Pi]( http://garethhayes.net/gnu-radio-for-raspberry-pi/) that supposedly includes all the GNURadio drivers already. Even the "plug and play" version of GNURadio however has a steep learning curve and the AIS module, called [gr-ais](https://github.com/bistromath/gr-ais) must be installed manually.
####Antenna
  The original AIS tutorial on RTL-SDR.com includes excellent instructions for building a DIY "Coaxial-colinear" antenna by soldering pieces of standard coaxial able in alternating polarities.  I'm looking forward to this part as I have plenty of confidence in my soldering skills at least... A directional YAGI antenna may prove to be a better choice in my particular setting, but information on how to create or modify a Yagi to receive in the 162Mhz range has been difficult to come by.

 In any case, the RTL-SDR dongle requires an adapter to fit on any standard antenna extension and while the RTL-SDR blog sells [a custom adapter kit on Amazo](http://www.amazon.com/gp/product/B00RF17866?psc=1&redirect=true&ref_=oh_aui_detailpage_o04_s00)n it ships from Germany apparently and won't arrive till who knows when...  
  Thanks to a wonderful [tutorial on Adafruit](https://learn.adafruit.com/freq-show-raspberry-pi-rtl-sdr-scanner/overview) however, I've been able to test the signal using their Frequency Finder script on the Raspberry Pi with a TfT Touch Screen.

[![SwitchMode.jpg](https://i.publiclab.org/system/images/photos/000/010/316/medium/SwitchMode.jpg)](https://i.publiclab.org/system/images/photos/000/010/316/original/SwitchMode.jpg)

  Because of the peculiarities of the Maine coastline, setting up an antenna with a proper Field of View is important.  Luckily, the long, jagged peninsula I live on gives me the choice of two different directions.  The following image (annotated from a panorama taken from a kite) shows the FOV for each location from a bird's eye view-

[![annotatedpan.png](https://i.publiclab.org/system/images/photos/000/010/392/medium/annotatedpan.png)](https://i.publiclab.org/system/images/photos/000/010/392/original/annotatedpan.png)


 The same annotation can be seen in this aerial view-


[![CascoBay.png](https://i.publiclab.org/system/images/photos/000/010/393/medium/CascoBay.png)](https://i.publiclab.org/system/images/photos/000/010/393/original/CascoBay.png)


  Note that line-of-sight is interrupted towards due east, but the most direct line is SouthEast towards the Port of Portland.  As this is also where the most commercial vessel activity will be centered, it makes the most sense to focus in this area.  That will require a directional anetnna however, though I only have an omnidirectional antenna at present.

###Alternative=dAISy
  Apparently a cost-competitive alternative to the RTL-SDR AIS receiver is a little OSHW board called the [dAISy](https://www.tindie.com/products/astuder/daisy-ais-receiver/) which sells on www.tindie.com for $50.  For $30 more than the cost of an RTL-SDR you avoid a lot of hassle compiling drivers etc... In theory it should even be possible to do away with the Raspberry Pi altogether by replacing it with the $7 ESP2866 wifi transceiver [as this hacker did](http://forum.43oh.com/topic/4833-potm-daisy-a-simple-ais-receiver/page-8#entry65941)!  Having tasted the Kool-Aid of the magical ESP2866 wifi chip myself, I can guarantee such a project is not for the feint at heart.  Unless you have every AT Command commited to memory...  Nevertheless, its always good to see the OSHW community moving away from the "hacked commercial product" model to the "For Us By Us" model.  
 The dAISy is supposedly on backorder until June 15th so I'll definitely try to pick one up if I get the chance.  If it works as advertised then it'll free up my RTL-SDR for other things!

