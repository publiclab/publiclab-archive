---
title: "sandbox-presenting-data"

tagnames: ''
author: bhamster
path: /wiki/sandbox-presenting-data.md
nid: 27449
uid: 664477
cids: 
---

# sandbox-presenting-data

by [bhamster](/profile/bhamster)

August 09, 2021 23:11 | Tags: 

----

_this page is a work in progress!_

What can we do with environmental data to understand it and communicate with it? 

There are some first things we can do with data to get an idea of what’s happening, like plotting a sensor measurement against time. Then there are ways we can ultimately present environmental data so that it communicates something meaningful, spurs advocacy, and [avoids reducing real environmental harms to a data point](https://publiclab.org/notes/warren/07-01-2014/reimagining-the-data-lifecycle).  

Data visualizations like graphs, charts, maps, art, and other interactive media can tell a story. We can also use [non-visual ways](https://publiclab.org/notes/lilybui/10-16-2014/visualizing-riffle-ito-data#Why+I), like sound and touch.

We’re collecting resources below on kinds of environmental data and ways to present it--please add to this page to improve it and make it more helpful! Creative ideas that go beyond trend lines or bar graphs are super welcome and appreciated!

<hr style="height:5px;border-width:0;color:gray;background-color:gray">

## Kinds of environmental data you might have

Environmental data can come in many forms depending on how and where you collect it. Here are some common examples:

### Measurements from sensors

+ Data collected **continuously over time** from a sensor that stays in one place. 
     + _Example_: an air quality monitor placed outside your home that measures particulate matter concentrations every 10 seconds 24 hours a day
     + _Data you’ll have_: date/time, environmental measurements. Potentially lots of data if the sensor is capturing data frequently.

<br>

+ Data collected **intermittently** (at certain times of the day) at a single location or at several different locations
     + _Example_: a portable water quality sensor taken to different locations along a stream every morning for several months 
     + _Data you’ll have_: date/time, environmental measurements, location (maybe noted manually, separate from the sensor data).

<br>

### Measurements from collected samples

+ **[Grab samples](https://publiclab.org/notes/kgradow1/05-30-2020/whole-air-sampling)** 
     + _Example_: an air bucket monitor taken to a landfill site soon after nearby residents report strong odors. The monitor collects an air sample at a specific location and time and is analyzed in a lab.
     + _Data you’ll have_: environmental measurements for a sample, reported from the testing lab. Each sample measurement is associated with a sampling location and time (or, an average measurement if you’ve mixed samples from different locations and times).

If you haven’t started collecting data yet, check out some guidance on [designing an environmental study](https://publiclab.org/wiki/start-enviro-monitor-study)---the design step is where you figure out where and when to collect data based on the specific questions you have about a local concern. There’s also more information on sampled data and continuous monitoring data in the “[Types of Samples](https://publiclab.org/wiki/start-enviro-monitor-study#Types+of+Samples)” section.

<hr>

## Ways to present environmental data

### Scatter plots and trend lines

Shows how individual data points change against another kind of measure (called a variable). Often, this can be how something you measured in your environment changes over time. 

If you have continuous data, plotting it against time is one of the first things you can do to start understanding the data.


<img style="width: 20%; height: 20%" src="https://publiclab.org/i/44600.jpg" alt="scatter plot icon">

_<small>[Flaticon](http://www.flaticon.com) from [Freepik](https://www.freepik.com)</small>_

<br>

_Example 1._ <br>

Scatter plot showing particulate matter (PM2.5) concentrations measured by an air quality sensor in an apartment building. Each black dot is an individual measurement. The PM concentrations spike during a fireworks celebration. Data from @LESBreathe.

<img style="width: 80%; height: 80%" src="https://publiclab.org/i/44595.jpg" alt="LESBreathe_PM25_July4">

_<small>Air quality data from @LESBreathe</small>_

<br>

_Example 2._ <br>
A 2-day average trendline showing dissolved oxygen (DO) in treated wastewater, measured by a sensor. The DO goes up and down throughout the day, spiking when air is injected into the water and decreasing as sewage-cleaning bacteria use it up.

<img style="width: 80%; height: 80%" src="https://publiclab.org/i/44516.jpg" alt="ORP DO sensor measurements">

_<small>Dissolved oxygen (DO) and redox potential (ORP) sensor data from treated wastewater, by @jesseslone in this comment</small>_

<br>

_More examples_

+ [Pollutants before and after shelter in place](https://www.elichens.com/blog-posts/2020/6/15/impact-of-covid-19-on-air-quality-in-san-francisco)
+ Time series does not have to be linear! Here is an [example visualizing Jakarta’s air quality](https://public.tableau.com/app/profile/rangga.rahadian/viz/JKTAQI/Dashboard1) in the form of a calendar

**Trends with respect to measures other than time**

+ See “Effect of City Size on Air Pollution” chart from [American Pollution](https://jamesbudarz.com/2018/07/30/american-pollution/)

<br>

### Bar graphs

Shows how measurements vary among different categories

<img style="width: 20%; height: 20%" src="https://publiclab.org/i/44667.jpg" alt="bar graph icon">

_<small>[Flaticon](http://www.flaticon.com) from [Dinosoftlabs](https://www.flaticon.com/authors/dinosoftlabs)</small>_

_Example 1._


<br>

### Maps

Shows how measurements vary by location. Mapping can help you show geographic patterns in data, such as pollution hotspots, or how pollution moves across space.

_Example 1._ <br>
A map of soil test results from around a pond neighboring a salvage yard. Data for each heavy metal detected is shown on the map as a number times the health standard for that metal (e.g., 2x higher than the standard). From [Workshop guide: Mapping soil data](https://publiclab.org/notes/kgradow1/12-31-2020/workshop-guide-mapping-data) by @kgradow1, adapted from [Statistics for Action Air Quality](https://sfa.terc.edu/materials/activities.html) ["Mapping Data"](https://sfa.terc.edu/materials/pdfs/mapping_data.pdf) and generously shared with permission. 

<img style="width: 50%; height: 50%" src="https://publiclab.org/i/42230.jpg" alt="SfA mapping soil data">

_<small>Map of Hobbs Pond with color-coded samples for each chemical found in the soil</small>_

<br>

_More examples_:

+ [Mapping the waste stream of Southern California](https://publiclab.org/wiki/mapping-the-waste-stream-of-southern-california)
+ Check out examples from this wiki page on [using maps for community organizing and advocacy](https://publiclab.org/wiki/advocacy-with-maps#Using+your+maps+and+aerial+images)
+ [Storymap: Visualizing Violations of Environmental Justice Spatial Inequalities of Health and Pollution Exposure in Southwest Detroit](https://storymaps.arcgis.com/stories/66cb46d9eb394990adfa5ceef4a48bbd)
+ Tree equity map: [example from Seattle, WA](https://treeequityscore.org/map/#11/47.6148/-122.3284) 

<br>

### Additional ways to present data

+ Using [emojis](http://datacanvas.org/project/emojicity/) to communicate air quality scores
+ Correlating [sky color](https://crimson-to-salmon.interactivethings.io/) to air quality

Audio

Others?

<hr>

## Tools for data visualization and presentation

+ [REal TIme Geospatial Data Viewer (RETIGO)](https://www.epa.gov/hesc/real-time-geospatial-data-viewer-retigo): "a free, web-based tool that can be used to explore environmental data that you have collected either stationary or in motion (e.g., air quality sensors added to a bike)," from the US EPA.
+ https://publiclab.org/notes/warren/02-17-2017/environmental-data-management-analysis-tools

<hr>

## More resources on understanding and presenting data

+ [Statistics for Action activities](https://sfa.terc.edu/materials/activities.html)
+ [Rstudio Talk: The Glamour of Graphics](https://www.rstudio.com/resources/rstudioconf-2020/the-glamour-of-graphics/): A talk at the 2020 RStudio conference covering design principles to make charts more persuasive and more accurately perceived.
 