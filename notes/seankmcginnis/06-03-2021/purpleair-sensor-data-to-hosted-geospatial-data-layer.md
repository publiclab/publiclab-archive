---
nid: 26746
title: PurpleAir Sensor Data to Hosted Geospatial Data Layer
path: public/static/notes/seankmcginnis/06-03-2021/purpleair-sensor-data-to-hosted-geospatial-data-layer.md
uid: 552
tagnames: mapping,air-quality,geospatial,barnstar:basic,purpleair,air-quality-monitoring,presenting-data,air-quality-data
---

# PurpleAir Sensor Data to Hosted Geospatial Data Layer

A topic of conversation in the [Organizing and Maps](https://publiclab.org/wiki/open-call) phone calls has been how to utilize data being collected by [PurpleAir Real-time Air Quality Monitoring](https://www2.purpleair.com/) sensors as groups are starting to deploy them as part of their initiatives.

<iframe width="800" height="600" frameborder="0" src="//seankmcg.maps.arcgis.com/apps/Embed/index.html?webmap=a191a9b8c4c2437685cb6aff19fdbcad&amp;extent=-128.9154,-58.7226,130.7136,62.0215&amp;zoom=true&amp;previewImage=false&amp;scale=true&amp;disable_scroll=true&amp;theme=light"></iframe>

PurpleAir has a documented [](https://api.purpleair.com/)[](https://api.purpleair.com/)[RESTful Application Programming Interface (API)](https://api.purpleair.com/ "https://api.purpleair.com/") that a user can get programmatic access to sensor data. I have written a sample Python Notebook that is scheduled to run every fifteen minutes which calls PurpleAir's API and loads the data into a hosted feature layer.

By putting it into the [hosted feature layer,](https://seankmcg.maps.arcgis.com/home/item.html?id=b328aba8660e4d5288adc853d7ab2eae) it becomes accessible in multiple service and file formats, including:

- [GeoService](https://services3.arcgis.com/1hU3oWHpfxDtHCOF/arcgis/rest/services/PurpleAir_Air_Quality_Monitoring_Sensors_View/FeatureServer)
- [Web Feature Service](https://dservices3.arcgis.com/1hU3oWHpfxDtHCOF/arcgis/services/PurpleAir_Air_Quality_Monitoring_Sensors_WFS/WFSServer?service=wfs&request=getcapabilities)
- Shapefile
- CSV
- KML
- XLS
- File Geodatabase
- GeoJSON

I have published the Python Notebook to [GitHub](https://github.com/SeanKMcGinnis/PurpleAir-AirQualitySensors) for anyone interested in running the service or seeing how the data is being brought in from the PurpleAir API. Before running the script in your environment, there are a few dependencies:

- Get an API key from PurpleAir
- Modify the destination where the data is being written. I am using ArcGIS Online to store the feature layers, but your destination or file format may differ

### Enhancement Opportunities

As we iterate through the sensors, we can check for certain threshold or average values. When we encounter a value of concern, the script can send a push notification or text message using something like [Amazon Simple Notification Service](https://aws.amazon.com/sns/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc "https://aws.amazon.com/sns/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc")