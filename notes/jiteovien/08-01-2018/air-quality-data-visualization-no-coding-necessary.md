---
title: "Air Quality Data Visualization: No Coding Necessary"

tagnames: 'providence, air-quality, sensors, visualization, data, dustduino, northeast, low, cost, location:blurred, data-visualization, collocation, lat:41.8, lon:-71.4, place:ri-02905-united-states, air-quality-data'
author: jiteovien
path: /notes/jiteovien/08-01-2018/air-quality-data-visualization-no-coding-necessary.md
nid: 16826
uid: 540008

cids: 20252,20253,20262,31332

---

![](https://publiclab.org/public/system/images/photos/000/026/007/original/aqi_image.png)

# Air Quality Data Visualization: No Coding Necessary

by [jiteovien](../../../profile/jiteovien) | August 01, 2018 21:46

August 01, 2018 21:46 | Tags: [providence](../tag/providence), [air-quality](../tag/air-quality), [sensors](../tag/sensors), [visualization](../tag/visualization), [data](../tag/data), [dustduino](../tag/dustduino), [northeast](../tag/northeast), [low](../tag/low), [cost](../tag/cost), [location:blurred](../tag/location:blurred), [data-visualization](../tag/data-visualization), [collocation](../tag/collocation), [lat:41.8](../tag/lat:41.8), [lon:-71.4](../tag/lon:-71.4), [place:ri-02905-united-states](../tag/place:ri-02905-united-states), [air-quality-data](../tag/air-quality-data)

----

Hello! I posted a couple of weeks ago about the Low Cost Air Quality Sensor Calibration project that I am working on this summer with Public Lab.

  
As a brief summary of the project, I aim to:

  
1. Collocate three Dustduino sensors with a Federal Reference monitor in Providence Rhode Island. 
2. Develop calibration equations for the three sensors/implement methods to increase robustness of data
3. I then want to use the calibrated sensors to monitor the air quality in the area of Lower South Providence. 
4. My main deliverable will be a detailed step by step for conducting and evaluating this type of work.

Why? 

Reason 1: There are a lot of published articles on calibration methods for this class of low cost sensors. However, they are often chalked up with technical jargon. I don't think that what I am doing is brand new but I just want to walk through the process myself so I can write about it in a hopefully more approachable way for community scientists. 

Reason 2: The Lower South Providence area neighbor three of the largest industrial sites in Providence. This area also, coincidentally (or not so coincidentally) has the largest percentage of Hispanic and Black people in all of Providence. For reference, Lower South Providence is only 5% white. Providence, as a city, is 37% ([source](https://statisticalatlas.com/neighborhood/Rhode-Island/Providence/Lower-South-Providence/Race-and-Ethnicity)).

  
How far have I gotten?

- I've built 3 Dustduino sensors and am 3D printing plastic enclosures for each of them. Photos to come later

- I've met with the RI Department of Environmental Management to discuss their monitoring practices, collocation, and learn [how to access air quality data](https://www.epa.gov/outdoor-air-quality-data/air-data-tile-plot) from anywhere (in the EPA's monitoring network) United States

and, (the reason for this post)

- I've become acquainted with a programming-free tool for data visualization, [Tableau](https://www.tableau.com/), that I am a huge fan of now! I've seen other people in the Public Lab Community use Tableau but i wanted to make this post as a special shoutout to Tableau Public (the free version) and show y'all what I've used it for thus far.

  
Using the air quality data that i downloaded from the EPA website, I was able to generate some cool visuals of the Providence-Warwick Monitoring Network for 2018\. I am not trying to show any particularly interesting trend here. Just trying out Tableau's visualization power!

  
**_The fully interactive visuals\* can be found [here](https://public.tableau.com/profile/ufu1835#!/vizhome/PM2_5DatafromRIDEM_0/AQI?publish=yes)_[](https://public.tableau.com/profile/ufu1835#!/vizhome/PM2_5DatafromRIDEM_0/AQI?publish=yes) **_****but I've included some screenshots below! Check it out!_ 

  
\*Note: For the AQI scale, I have only included 0-90 which corresponds to "Good" to "Moderately polluted" on the [Air Quality Index scale](http://www.airveda.com/blog/Understanding-Particulate-Matter-and-Its-Associated-Health-Impact?seo_data=%5Bobject%20Object%5D). I've done this just to more clearly show the respective air quality for different monitoring sites but in general, Providence has good air quality.

\*\*The EPA has a lag of several months before data is publicly available which explains why some months are missing for certain sites, and why it only goes up to May

  
![image description](/i/26004.png "Screen_Shot_2018-08-01_at_4.54.55_PM.png")

  
You can also hover over the dots to get specific data values.

  
![image description](/i/26006.png "Screen_Shot_2018-08-01_at_5.32.41_PM.png")

  
What's next? Collocation with the Dustduino sensors!