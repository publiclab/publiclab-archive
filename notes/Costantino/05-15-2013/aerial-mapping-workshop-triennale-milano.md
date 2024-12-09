---
title: Aerial Mapping workshop Triennale Milano
tagnames: balloon-mapping, android, event, baloon-mapping, milano, milan, italy, replication:14022
author: Costantino
path: /notes/Costantino/05-15-2013/aerial-mapping-workshop-triennale-milano.md
nid: 7577
uid: 53682

---

![](https://publiclab.org/public/system/images/photos/000/000/285/original/wefab_mapping_web_s.jpg)

# Aerial Mapping workshop Triennale Milano

by [Costantino](../profile/Costantino) May 15, 2013 12:23

May 15, 2013 12:23 | Tags: [balloon-mapping](../tag/balloon-mapping), [android](../tag/android), [event](../tag/event), [baloon-mapping](../tag/baloon-mapping), [milano](../tag/milano), [milan](../tag/milan), [italy](../tag/italy), [replication:14022](../tag/replication:14022)

----

##Event details
[Wefab](http://wefab.it/) organized a 2-day workshop of DIY Aerial Mapping to introduce to participants some theory and practice around this topic. 
Thanks to http://www.digicult.it/ http://www.connectingcultures.info/ !

The workshop took place on the 14th and 15th of May: on the first day we introduced some background history of ballon photography and then presented some results of the tests held in the previous days. We had a test on the terrace of the Design Museum and then planned the mapping for the day after. On the second day we met in the defined location and sent the ballon up in the air three times.

**An italian version of this content is** [here](http://wefab.it/events/report-grassroot-mapping-workshop-in-triennale-a-milano/)

**All the row data collected (pic, gps track) are** [here](https://www.dropbox.com/sh/gczwi1e1nr9y7oh/EljGvFW6S0)

**Photo Album on G+ [day1](https://plus.google.com/u/0/photos/105456748206073195959/albums/5878207174513461857) , [day2](https://plus.google.com/u/0/photos/105456748206073195959/albums/5878211084118726129)**

###When
May 14-15 2013

###Where
Triennale Design Museum
Milano, Italia

###What
DIY Aerial Mapping Workshop
[http://wefab.it/news/mappiamo-il-territorio-dallalto-workshop-in-triennale/](http://wefab.it/news/mappiamo-il-territorio-dallalto-workshop-in-triennale/)

We've chosen to shoot in the Parco del Portello in Milan. 
http://www.openstreetmap.org/?lat=45.48748&lon=9.14429&zoom=17&layers=M

This choice was made for several reasons:
- The place is easily accessible by public and private transport (to carry a balloon and helium gas cylinder).
- It is a large free space, close to some major urban transformations in the city of Milan (Portello area, area Citylife).
- Also this area has been the subject of a recent urban redevelopment project, and aerial photographs found online still represent the preliminary works.
- There are some hills which provide a base higher than surroundings.

The meteorological conditions were not favorable, the day was cloudy and windy. Shortly after finishing the third flight it started to rain.

###Who
- Marco Mancuso @digicult
- Zoe Romano @zoescope
- Costantino Bongiorno @costantino
- Sabina Barcucci @sabinacuccibar
- Ilaria Vanni 
- Alessandro Musetta 
- Marco Ferrara 
- Valeria Piva
- Yulya Besplemennova @hihickster

##How

### material list:
- [Rope Dacron](http://www.pm-store.it/cavi/357-cavo-dacron.html) 100Lb 500m - 31eur
- [Winch big](http://www.pm-store.it/avvolgicavi/318-verricello-pm.html) - 45 eur
- [Yoyo](http://www.pm-store.it/avvolgicavi/388-yoyo-premier.html) 25cm - 14 eur
- 1 Carabiner
- [Elastic Bands](http://shop.buffetti.it/elastici-a-fettuccia-misura-o-120-x-8-mm-1.html) - 1 eur
- Plastic Bottle 5lt ; We found this big bottle in an italian mall (Esselunga) that's big enough to contain the smartphone.
- [Helium](http://www.newballoonstore.com/) (less than 40 liters) We could inflate the balloon 3 times - 120 eur (+ 200 eur deposit)
- [Baloon](http://www.newballoonstore.com/) 140cm diameter - 18 eur We lifted in total 1.2 kg 

![IMG_20130515_151558.jpg](https://i.publiclab.org/system/images/photos/000/000/303/medium/IMG_20130515_151558.jpg)

![IMG_20130515_151905.jpg](https://i.publiclab.org/system/images/photos/000/000/305/medium/IMG_20130515_151905.jpg)

### Android Software 
We used a quite old smartphone [Htc desire](http://en.wikipedia.org/wiki/HTC_Desire) 
***Pro:***
light, Gps on board, Geo tagged pictures
***Cons:***
2 Mpixel pictures, poor photo quality

[Tina Time-lapse](https://play.google.com/store/apps/details?id=com.tina.time_lapse)
Time-lapse pic application. Works in background and can geotag pictures.
It seems have some problem n the exiff data. We take pic every 4 sec.

![tina01.jpg](https://i.publiclab.org/system/images/photos/000/000/310/medium/tina01.jpg)

[Open GPS Tracker](https://play.google.com/store/apps/details?id=nl.sogeti.android.gpstracker)
An application that can track your GPS locations. Can share though GPX, KMZ.

![tracker01.jpg](https://i.publiclab.org/system/images/photos/000/000/311/medium/tracker01.jpg)



**Further development:**
We talk a little about an Adroid application made using [Processing](http://processing.org/)  and this library https://code.google.com/p/ketai/ to access the Android hardware.
The app could basically work as the telemetry kit http://publiclab.org/wiki/balloon-telemetry-kit
The app runs on the phone and on a pc. The phone takes pic and store the data on boad. On the pc the user could start and stop the taking pictures process and pull some live data from the phone (via 3g or wi-fi)

***The features*** 

phone side:

- take picture with data embedded (time and data, Gps, compass, 
- store data in the memory card
- send 

pc side:

- control panel to start and stop time-lapse
- live data from the phone (gps position, gps altitde, compass, roll and pitch
- pull live picture from 3g connection 


### Map knitter
The platform doesn't enable highly sophisticated image processing: the possible transformations are rotation, scaling and deformation, but only approximate and gestural (non-numeric or through snap); the zoom level is limited to a size that does not allow an exact positioning for small photos, there is no management system for the order of photos (each photo added covers earlier), and the use of transparency is not optimal for the comparison between the images, the map does not handle the alpha channel of images.

The used procedure was to pre-assemble selected images in a photo editing software using as a reference the snapshot of Google Maps and upload the composed image to MapKnitting.

https://mapknitter.org/map/view/parco-del-portello

### Gps Track on Wikiloc
http://it.wikiloc.com/wikiloc/view.do?id=4489891

![Screen_Shot_2013-05-15_at_18.39.50.png](https://i.publiclab.org/system/images/photos/000/000/307/medium/Screen_Shot_2013-05-15_at_18.39.50.png)


###Next application:
counter mapping
sociological, anthropological research
collect data for Information Technology System / Smart City Apps
collect informations for decision support and public policy making

### More pictures

**on G+ [day1](https://plus.google.com/u/0/photos/105456748206073195959/albums/5878207174513461857) , [day2](https://plus.google.com/u/0/photos/105456748206073195959/albums/5878211084118726129)**

![tt_img_00279.jpg](https://i.publiclab.org/system/images/photos/000/000/302/medium/tt_img_00279.jpg)

![tt_img_00308.jpg](https://i.publiclab.org/system/images/photos/000/000/309/medium/tt_img_00308.jpg)