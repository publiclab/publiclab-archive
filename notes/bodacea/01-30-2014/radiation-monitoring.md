---
title: Radiation Monitoring
tagnames: radiation, first-time-poster
author: bodacea
path: /notes/bodacea/01-30-2014/radiation-monitoring.md
nid: 9989
uid: 648

---

# Radiation Monitoring

by [bodacea](../profile/bodacea) January 30, 2014 17:41

January 30, 2014 17:41 | Tags: [radiation](../tag/radiation), [first-time-poster](../tag/first-time-poster)

###What I want to do

Understand how publically-available and potentially-buildable radiation sensors map to radiation stories and concerns. 

###My attempt and results

First, the issues:

* Fukushima. 
* Lakeland, Florida - phosphate-mining waste, elevated levels of radium-226 in the soil ([article](http://www.nti.org/gsn/article/epa-abandons-major-radiation-cleanup-florida-despite-cancer-concerns/?mgs1=4198exvAp3))
* Monitoring timed released from US radiation plants... I read about this during Fukoshima, but can't find the link

And the numbers: 

* EPA permitted radiation levels (and [EPA page on health effects](http://www.epa.gov/radiation/understand/health_effects.html))
* US nuclear power industry guide levels
* [BlackCat notes on typical radiation sources and levels](http://www.blackcatsystems.com/GM/safe_radiation.html)
* MIT article: [radiation: how much is considered safe for humans? ](web.mit.edu/newsoffice/1994/safe-0105.html)
* Survivalist article: [How bad is bad?](http://modernsurvivalblog.com/nuclear/radiation-geiger-counter-the-radiation-network/)

Then the available Geiger counters: 

* eGeigie
* [AdaFruit geiger counter kit](www.adafruit.com/products/483?gclid=CIev19e-prwCFS7xOgodmmIAmg) - not for 'serious' use.
* [Sparkfun kit](https://www.sparkfun.com/products/11345) - educational use only
<a href="https://i.publiclab.org/system/images/photos/000/002/689/original/blob"><i class="icon icon-file"></i> blob</a>
* [Amazon offerings, including Radex](www.amazon.com/s/?ie=UTF8&keywords=geiger+counter&tag=googhydr-20&index=aps&hvadid=35235271561&hvpos=1t1&hvexid=&hvnetw=g&hvrand=1315083993521648321&hvpone=&hvptwo=&hvqmt=b&hvdev=c&ref=pd_sl_4yde8q11ky_b) 
* "[build your own Geiger counter](http://www.imagesco.com/articles/geiger/build_your_own_geiger_counter.html)" article and [MakeZine page](makezine.com/projects/make-29/geiger-counter/)
* [Pocket Geiger] (http://www.radiation-watch.org)
* RadiationNetwork.com also publish a list of compatible Geiger counters on their website

So I'm learning that there are several 'educational' radiation detection kits, and that even some of those (e.g. the SparkFun one) are subject to US export controls - which is worth knowing if you're building them for use outside the USA. 

And active maps and data feeds: 

* [RadiationNetwork](http://radiationnetwork.com/) - monitoring worldwide, but mainly across the USA
* [USGS map of background gamma radiation](http://energy.cr.usgs.gov/radon/usagamma.gif)
* [Safecast API](https://api.safecast.org/en-US/measurements) - datafeeds from eGeigies etc around the world.

###Questions and next steps

The Lakeland article mentions EPA doing an aerial radiation survey. I wonder if that could be feasibly done by public participation?

Issues for radiation monitoring include personal safety, e.g. going to places that are probably contaminated.  What types of precautions need to be taken?  Should this be done at all (although if there are people living in these areas, people going there is a moot point).  And are there already registers or maps of former phosphate mining areas? 

###Why I'm interested

I started reading this article: [EPA abandons major radiation cleanup in Florida, despite cancer concerns](http://www.nti.org/gsn/article/epa-abandons-major-radiation-cleanup-florida-despite-cancer-concerns/?mgs1=4198exvAp3) (Global Security Newswire, 28th Jan 2014) and wondered how well the android-compatible geiger counter on my desk could be used by local people to measure their radiation risk.  I also wanted somewhere to put readings and notes that have lying around about crowdsourced radiation monitoring.

(Ps. Radiation symbol by OCAL: don't know where to put the attribution for it)