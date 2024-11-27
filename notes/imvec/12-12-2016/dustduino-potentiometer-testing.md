---
nid: 13775
title: Dustduino potentiometer testing
path: public/static/notes/imvec/12-12-2016/dustduino-potentiometer-testing.md
uid: 495038
tagnames: arduino,calibration,particulate-sensing,barcelona,spain,air-quality,activity,dustduino,dust,pm,open-air,dust-monitoring,espana,validation,shinyei,colocation,dust-sensing,activity:dustduino,replication:9818,particulate-matter,activity:validation,activity:colocation
---

# Dustduino potentiometer testing

###What we want to do
We want to verify what resistance value (position of the potentiometers) is needed to measure PM10 and PM2.5 particles using Shinyei PPD42.</br>

###Our attempt and results
We've set up two Shinyei PPD42 sensors toghether inside a black plastic box using two different arduinos and two raspberry pi's as datalogers.</br>
We've used the [SerialDuino code](https://github.com/dustduino/dustduinoserial/archive/master.zip) changing the sample time to 3600000 (one hour).</br>
We've collected 96 hours of data (hourly measurements) of wich the first 48 hours the potentiometers were in "factory position". We didn't touch them.</br>
The next 48 hours we put the potentiometers to zero and continued collecting data.</br>
You can check the data here: [stationA](https://pads.imaxinaria.org/p/stationA) - [stationB](https://pads.imaxinaria.org/p/stationB)
The main thing we've found out is that in "factory position" the sensors give different outputs. After this results (48h) we decided to turn the potentiometers to zero on both sensors and both potentiometers.</br>
Results look more similar in between the two sensors but values are very very low in relation to the nearest public station.</br>

###Questions and next steps
Find out the value that the potentiometers might have to measure accurately in relation to public and certified air quality stations.</br>
We'll be testing several set ups next weeks, deploying some devices close to  the Poble Nou station in the city of Barcelona.</br>
https://fair.to/TQGm3

Does anyone know the operational resistance values? We changed them not testing the value out of the box.</br>
Anyone having a Dustduino working at home can use a multimeter to check the value of the potentiometers out of the box?</br>

###Why we're interested
We've found that the potentiometers come set up differently from factory and give different outputs.</br>


