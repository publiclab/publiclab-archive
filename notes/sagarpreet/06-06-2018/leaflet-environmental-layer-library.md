---
title: Leaflet Environmental Layers Library
tagnames: mapping, gsoc, pollution, leaflet, skytruth, barnstar:basic, weather, alerts, odor, soc, lon:77, gsoc-2018, soc-2018, tri, odor-logging, odor-mapping, geographic, toxic-release-inventory, justicemap, skytruth-alerts, leaflet-environmental-layers, lat:17
author: sagarpreet
path: /notes/sagarpreet/06-06-2018/leaflet-environmental-layer-library.md
nid: 16437
uid: 516343

---

# Leaflet Environmental Layers Library

by [sagarpreet](../profile/sagarpreet) June 06, 2018 10:49

June 06, 2018 10:49 | Tags: [mapping](../tag/mapping), [gsoc](../tag/gsoc), [pollution](../tag/pollution), [leaflet](../tag/leaflet), [skytruth](../tag/skytruth), [barnstar:basic](../tag/barnstar:basic), [weather](../tag/weather), [alerts](../tag/alerts), [odor](../tag/odor), [soc](../tag/soc), [lon:77](../tag/lon:77), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [tri](../tag/tri), [odor-logging](../tag/odor-logging), [odor-mapping](../tag/odor-mapping), [geographic](../tag/geographic), [toxic-release-inventory](../tag/toxic-release-inventory), [justicemap](../tag/justicemap), [skytruth-alerts](../tag/skytruth-alerts), [leaflet-environmental-layers](../tag/leaflet-environmental-layers), [lat:17](../tag/lat:17)

This library is a made upon the very popular [LeafletJS Library](https://leafletjs.com/) and using this we can choose combinations of layers to display on map .
Each layers gives some environment - related information on map in form of small markers . Each marker on clicking shows pop-up with detailed information .

The **demo** of this library is  : [publiclab.github.io/leaflet-environmental-layers](https://publiclab.github.io/leaflet-environmental-layers/example/mapSimple.html)

The **Github link** to code repository is : [github.com/publiclab/leaflet-environmental-layers](https://github.com/publiclab/leaflet-environmental-layers)

### How to choose Layers on map : 

There is a button on top-right most corner on map which allows to select layers : 

[![Screen_Shot_2018-06-06_at_3.17.32_PM.png](/i/25113)](/i/25113)

The following layers exists : 

[![Screen_Shot_2018-06-06_at_3.18.47_PM.png](/i/25114)](/i/25114)


The detailed information about each layer is given below : 

### 1.) SkyTruth : 

SkyTruth Alerts delivers real-time updates about environmental incidents in your back yard (or whatever part of the world you know and love).

The small red markers corresponds to each **incident** . As you will scroll through the map more dots will appear automatically .

More information about SkyTruth Alerts can be [found here](https://alerts.skytruth.org/) .


[![Screen_Shot_2018-06-06_at_3.22.51_PM.png](/i/25115)](/i/25115)

### 2.) Odor Report Layer : 

_To facilitate monitoring of bad odor events through the collection of data using a written odor log and an online map._

This layers shows **bad odor events** . One can explore and keep track of bad odor events in their vicinity and can also share reports , more information can be [found here](https://publiclab.org/wiki/odor) .

You can add bad odor event yourself here : [https://odorlog.ushahidi.io/views/map](https://odorlog.ushahidi.io/views/map)

[![Screen_Shot_2018-06-06_at_3.37.45_PM.png](/i/25116)](/i/25116)

### 3.) Toxic Release Layer : 

_The Toxics Release Inventory (TRI) Search retrieves data from the TRI database in Envirofacts._

This layer allows access to basic facility information, all forms submitted to EPA since 1987, aggregate chemical release data for all years reported . The results display any facility that has reported from 1987 to present, even though the facility may or may not have submitted TRI data in the most recent reporting year. 

More information can be [found here .](https://www.epa.gov/enviro/tri-search)


[![Screen_Shot_2018-06-06_at_3.49.26_PM.png](/i/25117)](/i/25117)

### 4.) Justice Map Layer : 

This layer helps to visualize race and income data for your community , county and country . 

**Example of multi-race layer : **


[![Screen_Shot_2018-06-06_at_4.24.05_PM.png](/i/25131)](/i/25131)



**INCOME Layer Scale :**  

[![Screen_Shot_2018-06-06_at_3.55.09_PM.png](/i/25118)](/i/25118)

**American-Indian Layer Scale :**


[![Screen_Shot_2018-06-06_at_3.57.08_PM.png](/i/25119)](/i/25119)

**Asian Layer Scale : **


[![Screen_Shot_2018-06-06_at_3.58.08_PM.png](/i/25120)](/i/25120)

**Hispanic Layer Scale : **


[![Screen_Shot_2018-06-06_at_4.00.14_PM.png](/i/25121)](/i/25121)

**Multi-racial Layer Scale :**


[![Screen_Shot_2018-06-06_at_4.01.14_PM.png](/i/25122)](/i/25122)

**Non-White Layer Scale : **


[![Screen_Shot_2018-06-06_at_4.01.49_PM.png](/i/25123)](/i/25123)

**White Layer Scale : **


[![Screen_Shot_2018-06-06_at_4.02.24_PM.png](/i/25124)](/i/25124)

**Plurality Group Layer Scale : **


[![Screen_Shot_2018-06-06_at_4.02.42_PM.png](/i/25125)](/i/25125)


### 5.) Openweathermap Layers : 

We can visualize the cloud coverage , precipation , rain , snow , pressure , temperature , and wind using this layer . 

**Cloud Layer :**

[![Screen_Shot_2018-06-06_at_4.14.44_PM.png](/i/25126)](/i/25126)

**Pressure Contour Layer : **


[![Screen_Shot_2018-06-06_at_4.37.54_PM.png](/i/25132)](/i/25132)



There are two real time layers as well -
 **Cities** , which shows the real time value of Humitidy , Wind , Pressure , Temperature and wind direction of more than 200,000 cities . 







[![Screen_Shot_2018-06-06_at_4.17.44_PM.png](/i/25128)](/i/25128)




**Windrose** , which shows the real time direction of wind on map .



[![Screen_Shot_2018-06-06_at_4.18.34_PM.png](/i/25129)](/i/25129)




# About Project : 

This project is created as a part of Google Summer of Code program by [Sagarpreet Chadha](http://github.com/sagarpreet-chadha) . 

**Mentors for this project :**

• Stevie Lewis
 
• jywarren

• Bronwen Densmore

If you have any suggestions or any doubts regarding the use of this library , kindly open an issue [here](https://github.com/publiclab/leaflet-environmental-layers/issues) . 

### Thank you 





 
