---
title: How to visualize your location-based data in QGIS
tagnames: mapping, air-quality, gis, barnstar:basic, data-visualization, activity:new, activity:gis, activity:mapping, research-curation-fellows, presenting-data, activity:presenting-data, air-quality-data, data-visualization-tool, activity:air-quality-data, data-viz
author: laurel_mire
path: /notes/laurel_mire/12-03-2021/how-to-visualize-your-location-based-data-in-qgis.md
nid: 28330
uid: 759178

---

# How to visualize your location-based data in QGIS

by [laurel_mire](../profile/laurel_mire) December 03, 2021 22:43

December 03, 2021 22:43 | Tags: [mapping](../tag/mapping), [air-quality](../tag/air-quality), [gis](../tag/gis), [barnstar:basic](../tag/barnstar:basic), [data-visualization](../tag/data-visualization), [activity:new](../tag/activity:new), [activity:gis](../tag/activity:gis), [activity:mapping](../tag/activity:mapping), [research-curation-fellows](../tag/research-curation-fellows), [presenting-data](../tag/presenting-data), [activity:presenting-data](../tag/activity:presenting-data), [air-quality-data](../tag/air-quality-data), [data-visualization-tool](../tag/data-visualization-tool), [activity:air-quality-data](../tag/activity:air-quality-data), [data-viz](../tag/data-viz)

*Lead image courtesy of [Nathan Woodrow][1] [CC BY 2.0][2]*

**Do you have data you want to display on a map? Is this data associated with a location (for example, organized by county, city, or country) but you don’t have exact coordinates? Check out the activity below to easily get your data on the map!**

## Purpose
This activity introduces some basic functionality of the open-source GIS software **QGIS**. If you’re new to GIS, check out this [QGIS Introduction document][3] from Duke University’s library for more info and common procedures in GIS software. 

This activity shares step-by-step instructions to visualize your location-based data using a process called a “table join”. This process adds your own data to an existing GIS file that has coordinates and visualizes it all on a map. This activity will bring your data to life and illustrate spatial trends that may go unseen in a spreadsheet.

## Materials Needed
This activity uses the open-source GIS software QGIS which can be downloaded for free [here][4] by Windows, Mac, Linux, BSD, & Android users.

## Can this activity work for my data?
The steps below work for the following situation:

 + Your data is in a spreadsheet format (.csv, comma separated values)
 + Each data point has a unique location that is recorded in its own column within the spreadsheet *(see highlighted portion of spreadsheet below)*
     + For example, this activity uses air quality data for the United States organized by county. Although data was originally recorded at monitor sites, these point-based measurements have been generalized to give an idea of the air quality for the entire county each monitor is in. This dataset from the EPA is called “Annual AQI By County 2021” and can be found under “Annual Summary Data” [here][5]. 

->![Example of a spreadsheet with a unique location recorded for each data point in a column][6]<-

 + Each data point’s location corresponds to a well-known “geographical entity”, such as census blocks, cities, counties, countries, etc.
     + *Note: If your data doesn’t align perfectly with an established geographical entity, consider generalizing your data to such an entity. For example, if you have soil contamination data from houses across your city, you can generalize each point to its city block.*


## Step 1: Open & explore QGIS

<br>
 1. Top menu bar: lots of useful buttons that can be learned as needed

  + Some immediately useful buttons are: Save ![][7] , zoom in & out ![][8] , and New Project ![][9]
 
<br>
 2. Left: catalog

  + Browser--- local computer files
  + Layers--- data layers actually on your map; rearrange what layer is on top/bottom by dragging up or down

<br>
 3. Bottom: coordinates of your cursor, scale, projection ![][10]

  + When you first open QGIS, the coordinates and scale will be blank since there is no basemap.
  + To see these features work, add the OpenStreetMaps layer that comes with QGIS.
     + In the catalog, find the OpenStreetMaps layer and double click to add it to your map ![][11]
     + Now, move your cursor across the map and zoom in and out to see the coordinates and scale change ![][12]

<br>
4. Right: Layer Styling

  + This tab will become very useful once you have data layers on your map.
  + You can change what data your map displays, how the data is visualized, and tinker with countless styling options


## Step 2: Add your data

<br>
 1. Browser > C:/> find your file

  + My file is named “annual_aqi_by_county_2021.csv” and has the following file path ![][13]

<br>
 2. Double click your file to add it to your map

  + Your dataset should appear in the Layers tab and look something like this 
![][14]

->Because your data is just a .csv file, nothing new will appear on the map. The ![][15] icon indicates this is just a table, NOT a true “layer” as it has no spatial component to tie it to the map<-

<br>
 3. Examine your data file in QGIS

  + Right click file in Layers > Open Attribute Table
  + In GIS, columns in an attribute table are called “fields” and rows hold “features”, each an individual spatial entity (such as a point, line, or polygon).
  + Find a field (or column) that holds a unique geographical location for each feature. 
     + My data is organized by county, so the “County” field holds the name of the county within the US within which the data point was collected.
     + *Note: It is important that this field is unique for each feature. In other words, there is only one entry for each county.*


## Step 3: Find a GIS file of the same geographical entity as your data

<br>
 1. **Shapefiles (.shp)** are a very common vector spatial data format. A shapefile is actually a cluster of files, so don’t forget to “unzip” your shapefile after downloading.

  + *Note: When searching for GIS data, it’s a great rule of thumb to add “shapefile” to the end of your search and look for the file type .shp*

<br>
 2. For the US, the Census Bureau has a set of GIS data called [“TIGER/Line Shapefiles”][16] with lots of different options

  + Here are a few shapefiles from the TIGER/Line set that may be useful: [US Counties][17], [Census Tracts by State][18], [US ZIP Codes][19], [US States and Equivalencies][20] 


## Step 4: Add your new shapefile to your map

<br>
 1. Go to Layer (top menu bar) > Add Layer > Add Vector Layer > Browser
![][21]

  + Find your shapefile (.shp) and double click
->![image description][22]<-

  + If your new shapefile isn’t showing up, hit the refresh button ![][23]

<br>
 2. Examine the shapefile

  + You should now have a new layer visible on the map. Mine looks like this 
->![][24]<-

*Note: Now that we have something on the map, you can remove the OpenStreetMaps layer by right clicking on it in the Layers tab and clicking “Remove Layer…” and OK*

  + In the Layers tab on the left, right click your file > Open Attribute Table
  + Examine your shapefile and find the field (or column) that holds the same geographic entities as your original dataset
     + *Note: This field does not have to have the same name in both Attribute Tables. For example, in the US Counties shapefile, the field “NAME” holds the name of each county. This field matches the “County” field from my original dataset*
->![][25]<-

## Step 5: Join your dataset to a shapefile by a matching unique identifier in a "table join"

<br>
 1. In GIS software, a “table join” is the process of appending the fields of one table to those of another through an attribute or field common to both tables”

<br>
 2. Right click on your shapefile in the Layers tab > Properties > Joins > Add new join ![image description][26]

<br>
 3. Choose your dataset from the dropdown menu as the “Join layer”

<br>
 4. Select your matching fields. The “Join field” will be from your dataset and the “Target field” will be from the shapefile.

->![][27]<-

<br>
 5. Click OK > Apply > OK and then you can close out of the Layers Properties window

## Step 6: Verify your table join worked

 <br>
 1. Open your shapefile attribute table. You should now have all the fields from your original dataset attribute table present in your shapefile (they will all have the name of your dataset table preceding the original field name).
![][28]

## Step 7: Display your data on the map

<br>
 1. Now that your data is joined to a shapefile, it can appear on the map!

<br>
 2. You can display your data in the Layer Styling tab on the right.

  + Change “Single Symbol” to “Categorized”
  + From the “Value” dropdown menu, choose what data (or what field) you want to visualize on the map
  + Select your color ramp & click “Classify” at the bottom of the tab

->![][29]

Tinker around with the styling options to get an idea of all the different ways to display your data! Different styling options can help highlight different pieces of your data and show trends you haven’t seen before.<- 

<br>
 3. You should now see your data on the map! Mine looks like this
![][30]

## Optional: Make a layout

<br>
 1. If or when you decide you want to share or save your mapped data, you can create a Layout and save it as an image file. This is like taking a screenshot of your map and fixing it up so that others can see.

  + Find more info on map layouts [here][31]

<br>
 2. On the top menu bar, go to Project > New Print Layout > Name your layout

<br>
 3. Add Item>Add map ![][32]

  + Click your cursor on the corner of the layout and drag diagonally down until your map is your desired size.

<br>
 4. There are a few things every map should have:

  + Add a Legend ![][33]
  + Add a Scale Bar ![][34]
  + Add North Arrow ![][35]
  + Add a Title ![][36]

<br>
 5. When you’re happy with your map, export it as an image file

  + In the top menu bar of the Layout window, find Layout > Export As Image

## Wrap Up
Congratulations! You’ve now put your data on the map and successfully navigated GIS software! There are countless ways to visualize your data and display it on a map layout---check out the resources below to keep tinkering and keep learning. Have other GIS and QGIS tutorials, tips, or questions? Join the conversation by commenting below :)

## Resources
  + Where to get data:
     + [https://guides.library.duke.edu/gisdata][37]
     + [https://www.census.gov/cgi-bin/geo/shapefiles/index.php][38]

  + General GIS & QGIS resources:
     + The Open Source Geospatial Foundation: [https://www.osgeo.org/resources/][39]
     + EPA’s EJScreen tool: [https://ejscreen.epa.gov/mapper/][40]
     + [QGIS 3 for Absolute Beginners][41] 

  [1]: https://search.creativecommons.org/photos/44e29889-663a-4979-b198-6aefdcee3431
  [2]: https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=rich
  [3]: https://guides.library.duke.edu/QGIS/GettingStarted
  [4]: https://www.qgis.org/en/site/forusers/download.html
  [5]: https://aqs.epa.gov/aqsweb/airdata/download_files.html
  [6]: /i/45141.png "SpreadsheetExample.PNG"
  [7]: /i/45143.png "Save.PNG"
  [8]: /i/45144.png "zoom.PNG"
  [9]: /i/45145.png "NewProject.PNG"
  [10]: /i/45147.png "projection.PNG"
  [11]: /i/45146.png "OpenStreetMaps.PNG"
  [12]: /i/45148.png "CoordinateScale.PNG"
  [13]: /i/45149.png "AddAQI.PNG"
  [14]: /i/45150.png "AQILayer.PNG"
  [15]: /i/45151.png "Table.PNG"
  [16]: https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html
  [17]: https://catalog.data.gov/dataset/tiger-line-shapefile-2019-nation-u-s-current-county-and-equivalent-national-shapefile
  [18]: https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2021&layergroup=Census%20Tracts
  [19]: https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2021&layergroup=ZIP%20Code%20Tabulation%20Areas
  [20]: https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2021&layergroup=States%20%28and%20equivalent%29
  [21]: /i/45153.png "Screenshot_(4).png"
  [22]: /i/45154.png "OpenUSCounties.PNG"
  [23]: /i/45155.png "Refresh.PNG"
  [24]: /i/45156.png "USCountiesOnMap.PNG"
  [25]: /i/45157.png "Match.PNG"
  [26]: /i/45159.png "JoinPlus.PNG"
  [27]: /i/45158.png "Join.PNG"
  [28]: /i/45160.png "JoinedTable.PNG"
  [29]: /i/45161.png "Symbology.PNG"
  [30]: /i/45162.png "AQIMap.PNG"
  [31]: https://guides.library.duke.edu/QGIS/Print
  [32]: /i/45171.png "NewMap.PNG"
  [33]: /i/45172.png "Legend2.PNG"
  [34]: /i/45173.png "Scale2.PNG"
  [35]: /i/45174.png "NorthArrow2.PNG"
  [36]: /i/45175.png "Title2.PNG"
  [37]: https://guides.library.duke.edu/gisdata
  [38]: https://www.census.gov/cgi-bin/geo/shapefiles/index.php
  [39]: https://www.osgeo.org/resources/
  [40]: https://ejscreen.epa.gov/mapper/
  [41]: https://www.bing.com/videos/search?q=youtube%20QGIS%20beginner&qpvt=youtube%20QGIS%20beginner&view=detail&mid=473F302214CECB12C7BA473F302214CECB12C7BA&&FORM=VRDGAR&ru=/videos/search?q=youtube%2bQGIS%2bbeginner&qpvt=youtube%2bQGIS%2bbeginner&FORM=VDRE