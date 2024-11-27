---
nid: 12610
title: Gather and analyze long term solar and wind data for my locale
path: public/static/notes/wjw/01-25-2016/gather-and-analyze-long-term-solar-and-wind-data-for-my-locale.md
uid: 462290
tagnames: arduino,wisconsin,wind,monitoring,weather,solar,activity:arduino,activity:weather,activity:wind,activity:solar
---

# Gather and analyze long term solar and wind data for my locale

###What I want to do
There is some good data regarding wind and solar provided by various organizations via the web.  However, getting data for an area that is really local is not so simple.  When the topography is like that of the South Western Driftless area in WI, (Grant County) making a decision about whether and how much solar and wind might be worth installing on a given site boils down to measuring at that site.  Hills and valleys and the way they are arranged can have an impact on determining what is, or is not feasible to invest in.

I decided that I needed a plan, and that I was not going to be satisfied with that plan unless I had good data from right on site.  So what I want to do (and have been doing) is building a simple, inexpensive and reliable way to gather data, analyse it, and hopefully disseminate it as well as make use of it for myself.

Site deployment will take place in March or April.


###My attempt and results
I assembled a basic monitoring station which tracks wind speed, wind direction, rain accumulation, rain rate and temperature.  Thus far it works pretty well on the home lab bench.  I use a Raspberry Pi with an XBee S1 as my central gathering point.  My sensors were obtained from SwitchDoc labs and Adafruit.  The sensor array is connected to a Pro Trinket (arduino) which also uses an XBee S1 to send collected data to the RPI every 15 seconds.  The sensor array is powered by a couple of LiPo batteries which are charged through a charge controller (also from Adafruit) from a 6v 2watt solar panel.  Data received from the arduino to the RPI is stored in a SQLite database after being parsed by a simple Perl script that runs as a daemon on the RPI, reads the data from the XBee and stores it in said data base.  Thus far(on the test bench) things work pretty well.  I intend to add humidity and barometric monitors as well as they are very inexpensive. 
###Questions and next steps
I have placed some reasonable documentation on Github (https://github.com/wjwieland/weatherrack2) and would be glad to have anyone interested take a look.  My main concern is with power generation.  Solar panels, charge controllers and batteries are not my strong point, so any input would be appreciated.  Additionally, I would be more than happy to share what I have learned thus far if someone out there is interested in doing this type of project.  

###Why I'm interested
My families farm is small, 234 acres.  After some years of growing crops conventionally and being rather unsatisfied with the results, it was time to make a change.  We will be allowing the soil to recover from the beating it takes from fertilizers, pesticides and herbicides.  As such, there will not be much income, so finding ways to make the farm sustainable while it recovers is important.  Of course one can't just let things sit.  There are fences and buildings to maintain along with equipment.  Some land maintenance is also required.  All of this takes energy in one form or another.  Along with all this is the conclusion that I have drawn that the small family farm must not die.  Technology can and does provide for alternatives to the ever growing factory farm.  There are efficiencies on a small farm which will never be matched on the larger farms.  But we have to learn about them.  To do so, we need to measure things differently or with a different goal in mind than we have had for the last 40 years.  This project is one of many that I have in mind.  It is just a start, but that is fine.  

So in general terms, that is why I am interested in this project.  I think more folks might also be if they sat down and thought about it for a bit.  

I am also interested in finding out about wind and solar systems from folks that have them installed.  In particular, small systems.  
