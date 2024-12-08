---
title: Presenting Environmental Data
tagnames: method, environmental-data, data-visualization, presenting-data, air-quality-data
author: bhamster
path: /wiki/presenting-data.md
nid: 27567
uid: 664477

---

# Presenting Environmental Data

by [bhamster](../profile/bhamster), [laurel_mire](../profile/laurel_mire)

August 16, 2021 20:37 | Tags: [method](../tag/method), [environmental-data](../tag/environmental-data), [data-visualization](../tag/data-visualization), [presenting-data](../tag/presenting-data), [air-quality-data](../tag/air-quality-data)

What can we do with environmental data to understand it and communicate with it? 

There are some first things we can do with data to get an idea of what’s happening, like plotting a sensor measurement against time. Then there are ways we can ultimately present environmental data so that it communicates something meaningful, spurs advocacy, and [avoids reducing real environmental harms to a data point](https://publiclab.org/notes/warren/07-01-2014/reimagining-the-data-lifecycle).  

Data visualizations like graphs, charts, maps, art, and other interactive media can tell a story. We can also use [non-visual ways](https://publiclab.org/notes/lilybui/10-16-2014/visualizing-riffle-ito-data#Why+I), like sound and touch.

We’re collecting resources below on kinds of environmental data and ways to present it--please add to this page to improve it and make it more helpful! Creative ideas that go beyond trend lines or bar graphs are super welcome and appreciated!

<hr style="height:5px;border-width:0;color:gray;background-color:gray">


## Questions about presenting data

Questions tagged with `question:presenting-data` will appear here

[questions:presenting-data]

<br>

## Activities about presenting data

Activity posts tagged with `activity:presenting-data` will appear here

[notes:activity:presenting-data]

<hr>

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

<br>

### More forms of environmental data 

+ Visual observations
+ [Odor logs](https://publiclab.org/tag/odor)
+ Oral histories

The air quality data wiki also has a section with [examples of different kinds of data](https://publiclab.org/wiki/air-quality-data#Different+kinds+of+air+quality+data)

<br>

If you haven’t started collecting data yet, check out some guidance on [designing an environmental study](https://publiclab.org/wiki/start-enviro-monitor-study)---the design step is where you figure out where and when to collect data based on the specific questions you have about a local concern. There’s also more information on sampled data and continuous monitoring data in the “[Types of Samples](https://publiclab.org/wiki/start-enviro-monitor-study#Types+of+Samples)” section.

<hr>

## Ways to present environmental data

### Scatter plots and line graphs

Shows how individual data points change against another kind of measure. With environmental data, line graphs often plot how something you measured in your environment changes over time. 


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

### Histograms

Made by dividing data into several non-overlapping bins of the same size (x axis) and counting the number of values that fall into each bin (y axis). Histograms look like bar graphs but display numerical data rather than categorical data. Histograms are favorable because they are easy to interpret. However, you cannot distinguish between variables if they fall into the same bin, sacrificing the “true values” to see the overall distribution of data.


[![Histogram2.PNG](/i/45125)](/i/45125?s=o)

<br>

### Smooth Density Plots

Similar to a histogram with very small bins and a curve that runs through the top of each bar. With a bin size of 1, the y axis of a smooth density plot displays the proportion of values within that bin. Unlike a histogram, frequency (or density) is computed and displayed on the y axis rather than count. Smooth density plots are useful for ease of comparison between two different distributions or data sets.


[![SmoothDensityPlot.PNG](/i/45127)](/i/45127?s=o)

<br>

### Boxplots

Aka box and whisker plots, provide a 5 number summary of your data. Whiskers show the range of data with a box split along the quantiles (or 25th, 50th, and 75th percentiles). Outliers are shown as individual points outside of the range whisker. 

[![Boxplots.PNG](/i/45129)](/i/45129?s=o)

<br>

### Maps and aerial images

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

### Infographics

Combine images, text, and numbers to present information.

_Example 1._ <br>
A graphic about [logging complex odors](https://publiclab.org/notes/sarasage/10-29-2021/logging-complex-odors), by @sarasage.

<img style="width: 70%; height: 70%" src="https://storage.googleapis.com/publiclab-production/public/system/images/photos/000/044/999/original/Wheel_of_Misfortune.jpg" alt="infographic of 6 base odors">

_<small>Image: Infographic about complex odors, from [this post ](https://publiclab.org/notes/sarasage/10-29-2021/logging-complex-odors)by @sarasage</small>_

<br>

### Additional ways to present data

**More data visualization**

+ Using [emojis](http://datacanvas.org/project/emojicity/) to communicate air quality scores
+ Correlating [sky color](https://crimson-to-salmon.interactivethings.io/) to air quality

**Audio**

+ [Riffle-ito Rhapsody: More Data Auralization/Sonification](https://publiclab.org/notes/lilybui/11-27-2014/riffle-ito-rhapsody-more-data-auralization-sonification) by @lilybui
+ The [Coqui](https://publiclab.org/wiki/coqui), a device that presents sensor information as an audible tone


<hr>

## Tools for data visualization and presentation

[notes:grid:data-visualization-tool]

<br>

<hr>

## More resources on understanding and presenting data

### Wikis

[wikis:presenting-data]

<br>

+ [Statistics for Action activities](https://sfa.terc.edu/materials/activities.html): a rich collection of resources on understanding and communicating with environmental data for community organizers. 
     + [Finding newsworthy data](https://sfa.terc.edu/materials/pdfs/finding_newsworthy_data.pdf) 
     + [Communicating with numbers](https://sfa.terc.edu/materials/pdfs/communicating_with_numbers.pdf)
     + [Memorable graphs](https://sfa.terc.edu/materials/pdfs/memorable_graphs.pdf)
+ [Rstudio Talk: The Glamour of Graphics](https://www.rstudio.com/resources/rstudioconf-2020/the-glamour-of-graphics/): A talk at the 2020 RStudio conference covering design principles to make charts more persuasive and more accurately perceived.
+ [Environmental data visualisation for non-scientific contexts: Literature review and design framework](https://www.sciencedirect.com/science/article/pii/S1364815216305990), a paper by Sam Grainger, Feng Mao, and Wouter Buytaert. 2016. _Environmental Modelling & Software_, 85: 299-318
+ [Hands-On Data Visualization: Interactive Storytelling from Spreadsheets to Code](https://handsondataviz.org/). Open-access web edition, by Jack Dougherty and Ilya Ilyankou.

[Also see more resources on the air quality data wiki here
](https://publiclab.org/wiki/air-quality-data#Further+reading+and+resources) 