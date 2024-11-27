---
nid: 9934
title: Mystic River
path: public/static/wiki/mystic-river.md
uid: 43651
tagnames: somerville-massachusetts,boston,pvos,conductivity,ioby,mystic-river,style:nobanner
---

# Mystic River

_Main image above is by Suzanne McDaniel, and was taken at Island End River in Chelsea, MA, part of the Mystic River watershed.  Suzanne's photo was one of the winners of the [MyRWA photo contest](http://mysticriver.org/photo-contest/)._

<div class="well"><p><b>Please consider donating to fund development of our water quality prototypes and workshops before our Feb 14th deadline!</b></p>
<br />
<p><a class="btn-large btn-primary" href="https://ioby.org/project/mystic-river-open-water">Support this work now &raquo;</a></p>
</div>

### Background

The [Mystic River](http://mysticriver.org) in Massachusetts flows from the Mystic Lakes in Winchester and Arlington, through Medford, Somerville, Everett, Charlestown and Chelsea, and into Boston Harbor, and has supported a long history of economic progress in one of the most densely populated urban areas of New England. Today, the Mystic faces serious water quality problems, shared by urban water bodies around the world: pollution from leaky sewer pipes, waste disposal sites; excessive nutrients and discharges of raw sewage; fuel hydrocarbons; and road salt. Portions of the watershed often fail to meet state bacteria standards for swimming and boating, and its Alewife Brook subwatershed is one of the most contaminated water bodies in Boston. The Mystic River watershed received a ‘D’ from the US EPA on its [2012 water quality report card](http://www.epa.gov/mysticriver/reportcards.html).

Several organizations are engaged in water monitoring projects for the Mystic, but the high cost and ‘closed data’ nature of current technology severely limits the scope of current efforts, and makes data sharing difficult. 

The Public Lab community, by designing a low-cost, ‘open source’ water quality monitor that is easy to build and maintain, hopes to greatly expand the scope of current monitoring efforts, and to **enable communities to develop their own grassroots monitoring networks. 
**

This page is a description of Public Lab's efforts to develop low-cost open hardware tools for assessing water quality in the [Mystic River watershed](http://mysticriver.org). 


### Water Quality Monitor Prototypes

Our main focus at first is on developing open hardware alternatives to the current most common water quality monitoring sensors, which measure **temperature**, **conductivity**, and **water depth**.  

- Tracking **temperature** over time at several locations along a river allows researchers to detect unusual trends in river water temperature -- this might help locate pollution sources along the river, and helps assess whether the water temperature is amenable to fish.

- **Conductivity** is a useful measure for a variety of water quality issues, including excess salinity (usuall due to road salt), dissolved solids, and other sources of water pollution.  

- Measuring **water depth** along with these other parameters allows researchers to correlate temperature and conductivity with storm events -- helping to determine the relative contribution of stormwater runoff and combined sewer overflow events to changes in river water quality. 

Our initial goal is to develop open source, low-cost dataloggers that measure these various parameters over time, storing data on board the datalogger, with batteries that last for several months.  Volunteers will then build and deploy these sensors at various locations in the watershed, and go out to collect data from them (using laptops) months afterwards, submitting the data to an online data repository.

We'll be collaborating with MyRWA and Plymouth State, who already have citizen science volunteer networks who have been using a similar approach, but who previously needed to rely on much more expensive devices with encrypted data formats. This low-cost, open approach will allow the volunteer community to collaboratively build, maintain, and improve the sensor technology they'll be using, and share the resultant data among themselves as well as with researchers and water resource managers.

We're currently basing our data logger prototype on an open source hardware project:  the "[mchck](https://mchck.org/)" -- an inexpensive, low-power microcontroller design with on-board flash memory, and 'real time clock'.  This means that it can function as a low-cost, long-lasting datalogger.

Our fork of the mchck project is [here](https://github.com/bgamari/mchck), with datalogger functionality implemented [here](https://github.com/bgamari/data-logger).

The "water quality shield" we're developing for the mchck will include hardware for measuring conductivity, temperature, and water depth is [here](https://github.com/bgamari/water-quality). 

Here are some nice D3 libraries that [might be useful](https://github.com/mbostock/d3/wiki/Gallery). 

### STE(A)M Curricula

As we develop a water quality open hardware platform, our hope is to incorporate this same technology in middle school and high school environmental science programs.  We've partnered with Plymouth State and the Amherst Middle School to explore the best ways of doing this.  The Amherst Middle School has already developed water quality curricula that involved deploying sensors in the Fort River in Amherst, MA, but the proprietary, encrypted data nature of the sensors they were using made progress difficult.  We'll be leveraging the curriculum materials they've already built in order to develop online, open source water quality curricula that educators everywhere can contribute to and share.  The focus will be developing a comprehensive STEAM approach -- Science, Technology, Arts, and Mathematics -- of the sort pioneered by RISD; allowing students to design their own visualizations and interpretations of the environmental data that they collect themselves.  

### Online Visualization of Water Quality Data

We're going to be working with Patrick Herron, Mark Green, Jeff walker, and Mary Martin to find accessible and compelling ways of displaying water quality data online.  

- For use in prototyping our online visualization system, Mary Martin has provided a link to real-time river depth and precipitation informationfrom the [Hubbard Brook Ecosystem Study](http://hubbardbrook.org/) in New Hampshire. Their current visualization is [here](http://hbrsensor.sr.unh.edu/demo/graphs/HBRrealtime_streamV3.html).

- Patrick Herron has provided a dataset that is a single sensor reading from a polluted waterway on the Alewife Brook, here: <a href="https://i.publiclab.org/system/images/photos/000/002/567/original/ALB006.txt"><i class="icon icon-file"></i> ALB006.txt</a>

- Jeff Walker has already developed [code for visualizing streamflow csv data using D3](http://phd.walkerjeff.com/talks/20131105/baseflow.html), based on a D3 [reusable chart pattern](http://bost.ocks.org/mike/chart/).

### Development

[![pic1.png](https://i.publiclab.org/system/images/photos/000/002/522/medium/pic1.png)](https://i.publiclab.org/system/images/photos/000/002/522/original/pic1.png)

[![pic2.png](https://i.publiclab.org/system/images/photos/000/002/525/medium/pic2.png)](https://i.publiclab.org/system/images/photos/000/002/525/original/pic2.png)

[![pic3.png](https://i.publiclab.org/system/images/photos/000/002/524/medium/pic3.png)](https://i.publiclab.org/system/images/photos/000/002/524/original/pic3.png)

[![pic4.png](https://i.publiclab.org/system/images/photos/000/002/523/medium/pic4.png)](https://i.publiclab.org/system/images/photos/000/002/523/original/pic4.png)

[![pic5.png](https://i.publiclab.org/system/images/photos/000/002/521/medium/pic5.png)](https://i.publiclab.org/system/images/photos/000/002/521/original/pic5.png)

[![pic6.png](https://i.publiclab.org/system/images/photos/000/002/534/medium/pic6.png)](https://i.publiclab.org/system/images/photos/000/002/534/original/pic6.png)

[![plug1.png](https://i.publiclab.org/system/images/photos/000/002/581/medium/plug1.png)](https://i.publiclab.org/system/images/photos/000/002/581/original/plug1.png)

[![crossSection.png](https://i.publiclab.org/system/images/photos/000/002/585/medium/crossSection.png)](https://i.publiclab.org/system/images/photos/000/002/585/original/crossSection.png)

Above: a design for a 3D printable plug that will nicely contain the sensor electronics, and hold the conductivity wires in place.

[![capsuleS.png](https://i.publiclab.org/system/images/photos/000/002/631/medium/capsuleS.png)](https://i.publiclab.org/system/images/photos/000/002/631/original/capsuleS.png)

Above: the first version of a 3D printed enclosure, which connects to a common PVC screw cap for a waterproof seal.

#### Update: Amherst College Martin Luther King Day of Service Mini-Hackathon!  

We got together and prototyped some visualization / data analysis software for the water quality project.  Check out our progress [here](http://publiclab.org/notes/donblair/01-22-2014/public-lab-open-water-hackathon-amherst-college)!

[![hackThumb.png](https://i.publiclab.org/system/images/photos/000/002/611/medium/hackThumb.png)](https://i.publiclab.org/system/images/photos/000/002/611/original/hackThumb.png)

[![d3hubbard.png](https://i.publiclab.org/system/images/photos/000/002/632/medium/d3hubbard.png)](https://i.publiclab.org/system/images/photos/000/002/632/original/d3hubbard.png)

- Google Doc for [MiniHackathon Notes](https://docs.google.com/document/d/1MPl10mY8wnfplwmVSIPDVCF6Q2Hx-4qoilzyxS9-nvc/edit)

### References

- "Effects of road salt and Phragmites australis invasion on the vegetation of a Western Massachusetts calcareous lake-basin fen" -- [paper](http://bit.ly/K9hK81)
- [Powerpoint presentation](http://www.iappo.org/pdf/IAPPO07_RoadSalt.pdf) on the effects of road salt.
