---
title: Newtown Creek CAG meeting at EPA
tagnames: new-york-city, newtown-creek, epa, pah, qgis
author: liz
path: /notes/liz/02-25-2014/natural-resource-trustees-of-newtown-creek.md
nid: 10064
uid: 7

---

# Newtown Creek CAG meeting at EPA

by [liz](../profile/liz) February 25, 2014 15:55

February 25, 2014 15:55 | Tags: [new-york-city](../tag/new-york-city), [newtown-creek](../tag/newtown-creek), [epa](../tag/epa), [pah](../tag/pah), [qgis](../tag/qgis)

###What I want to do

Explain the regulatory landscape around Newtown Creek Superfund site, and present how to use their database software "Query Manager" to access the combined datasets compiled by the Trustees. 

###Agencies involved in Newtown Creek:  

**NOAA, USFWS, NYSDEC** are all "Trustees of ecological and human use of Newtown Creek". They pool their data (in Query Manager) in order to manage public environmental resources. 

http://www.darrp.noaa.gov/northeast/newtown_creek/index.html

http://www.fws.gov/northeast/nyfo/ec/Newtown.htm

###What is Query Manager?

It helps you find out what chemical is where and how much of it. 

Query Manager is an application you can use on desktop (http://response.restoration.noaa.gov/querymanager) and web (http://querymanager.orr.noaa.gov/P/).
it's both a **database** compiled and standardized from multiple sources, and an **application** that allows you to query chemical records, visualize them on maps in the system and  export out for future use in Google Earth, ArcGIS, (QGIS), ERMA, MarPLOT.

###What can Query Manager Query?

[![Screen_Shot_2014-02-25_at_11.09.17_AM.png](https://i.publiclab.org/system/images/photos/000/003/031/medium/Screen_Shot_2014-02-25_at_11.09.17_AM.png)](https://i.publiclab.org/system/images/photos/000/003/031/original/Screen_Shot_2014-02-25_at_11.09.17_AM.png)

* sediment chemistry (surface)
* sediment chemistry (subsurface)
* tissue chemistry
* sediment bioassay
* water chemistry

###How To with screenshots

Follow the tutorials: http://response.restoration.noaa.gov/environmental-restoration/environmental-assessment-tools/query-manager-marplot-data-maps.html

Query Manager and MarPLOT kind of work together. One shows you the tables of data, the other puts them on the map. NB these are windows programs but can run on mac through something called winebottle that will make a dummy C: drive that Query Manager and MarPLOT will use. 

[![Screen_Shot_2014-02-25_at_2.26.17_PM.png](https://i.publiclab.org/system/images/photos/000/003/038/medium/Screen_Shot_2014-02-25_at_2.26.17_PM.png)](https://i.publiclab.org/system/images/photos/000/003/038/original/Screen_Shot_2014-02-25_at_2.26.17_PM.png)

You should also save the data there. _NB - there is also data available for Louisiana, and sediment surveys by watershed available nationwide. _

[![Screen_Shot_2014-02-25_at_2.27.40_PM.png](https://i.publiclab.org/system/images/photos/000/003/039/medium/Screen_Shot_2014-02-25_at_2.27.40_PM.png)](https://i.publiclab.org/system/images/photos/000/003/039/original/Screen_Shot_2014-02-25_at_2.27.40_PM.png)

(Which is "NY / NJ Harbor (formerly Newark Bay)" in this case: 

[![Screen_Shot_2014-02-25_at_2.28.16_PM.png](https://i.publiclab.org/system/images/photos/000/003/040/medium/Screen_Shot_2014-02-25_at_2.28.16_PM.png)](https://i.publiclab.org/system/images/photos/000/003/040/original/Screen_Shot_2014-02-25_at_2.28.16_PM.png)

Once you are set up: 

* choose all Newtown Creek studies

[![Screen_Shot_2014-02-25_at_10.59.13_AM.png](https://i.publiclab.org/system/images/photos/000/003/032/medium/Screen_Shot_2014-02-25_at_10.59.13_AM.png)](https://i.publiclab.org/system/images/photos/000/003/032/original/Screen_Shot_2014-02-25_at_10.59.13_AM.png)

* choose a query

[![Screen_Shot_2014-02-25_at_11.19.28_AM.png](https://i.publiclab.org/system/images/photos/000/003/033/medium/Screen_Shot_2014-02-25_at_11.19.28_AM.png)](https://i.publiclab.org/system/images/photos/000/003/033/original/Screen_Shot_2014-02-25_at_11.19.28_AM.png)

* Get more specific

[![Screen_Shot_2014-02-25_at_11.19.53_AM.png](https://i.publiclab.org/system/images/photos/000/003/037/medium/Screen_Shot_2014-02-25_at_11.19.53_AM.png)](https://i.publiclab.org/system/images/photos/000/003/037/original/Screen_Shot_2014-02-25_at_11.19.53_AM.png)

* Choose how to deal with chemicals with "below-detection-limits" levels see NOAA's guide to ERL/ERM: http://archive.orr.noaa.gov/type_subtopic_entry.php?RECORD_KEY(entry_subtopic_type)=entry_id,subtopic_id,type_id&entry_id(entry_subtopic_type)=89&subtopic_id(entry_subtopic_type)=5&type_id(entry_subtopic_type)=2

[![Screen_Shot_2014-02-25_at_2.35.43_PM.png](https://i.publiclab.org/system/images/photos/000/003/041/medium/Screen_Shot_2014-02-25_at_2.35.43_PM.png)](https://i.publiclab.org/system/images/photos/000/003/041/original/Screen_Shot_2014-02-25_at_2.35.43_PM.png)

* It shows you low and high concentration ranges for the chemical you chose:

[![Screen_Shot_2014-02-25_at_2.40.58_PM.png](https://i.publiclab.org/system/images/photos/000/003/043/medium/Screen_Shot_2014-02-25_at_2.40.58_PM.png)](https://i.publiclab.org/system/images/photos/000/003/043/original/Screen_Shot_2014-02-25_at_2.40.58_PM.png)


* In Query Manager, the table will be shown to you. To look at it on the map, use the MARPLOT menu --> Show Selected On Map 

[![Screen_Shot_2014-02-25_at_2.44.38_PM.png](https://i.publiclab.org/system/images/photos/000/003/044/medium/Screen_Shot_2014-02-25_at_2.44.38_PM.png)](https://i.publiclab.org/system/images/photos/000/003/044/original/Screen_Shot_2014-02-25_at_2.44.38_PM.png)

* Look at the map with legend, see if you recognize where the highest concentrations are in your neighborhood! _Hint: National Grid_. 

[![Screen_Shot_2014-02-25_at_2.44.13_PM.png](https://i.publiclab.org/system/images/photos/000/003/045/medium/Screen_Shot_2014-02-25_at_2.44.13_PM.png)](https://i.publiclab.org/system/images/photos/000/003/045/original/Screen_Shot_2014-02-25_at_2.44.13_PM.png)

* Export stuff

[![Screen_Shot_2014-02-25_at_11.21.44_AM.png](https://i.publiclab.org/system/images/photos/000/003/034/medium/Screen_Shot_2014-02-25_at_11.21.44_AM.png)](https://i.publiclab.org/system/images/photos/000/003/034/original/Screen_Shot_2014-02-25_at_11.21.44_AM.png)


[![Screen_Shot_2014-02-25_at_2.52.57_PM.png](https://i.publiclab.org/system/images/photos/000/003/046/medium/Screen_Shot_2014-02-25_at_2.52.57_PM.png)](https://i.publiclab.org/system/images/photos/000/003/046/original/Screen_Shot_2014-02-25_at_2.52.57_PM.png)



###Larger Issue

What is the interaction between the Clean Water Act and the Superfund Statute? An issue highlighted by Gowanus Canal's superfund cleanup because of the CSO issues that lag behind the cleanup and re-pollute the site over 5-7 years. Judith Enck working in DC to sync these programs. 

Judith Enck says: The old way of doing public interaction is "DAD": "Decide, Announce, Defend". 
_This is not your DAD's superfund site!_ We want to get your input _first_. 
Region 2 has the highest concentration of superfund sites in the country, yet we are just getting started. Gowanus, Newtown Creek, and the proposed WOLF Alport site with radioactive material under a number of businesses in Queens. We may hear as early as next month whether it gets listed. 

Judith Enck distributed a printed report called "Keeping Raw Sewage & Contaminated Storm Water Out of the Public's Water" and referred to President Obama's Climate Action Plan on whitehouse.gov. 

###Another online data viewer: 

ERMA: Environmental Response Management Application

[![Screen_Shot_2014-02-25_at_3.45.39_PM.png](https://i.publiclab.org/system/images/photos/000/003/048/medium/Screen_Shot_2014-02-25_at_3.45.39_PM.png)](https://i.publiclab.org/system/images/photos/000/003/048/original/Screen_Shot_2014-02-25_at_3.45.39_PM.png)

https://www.erma.unh.edu/

https://www.erma.unh.edu/atlantic/erma.html (used by emergency responders, with live weather satellite data!)
