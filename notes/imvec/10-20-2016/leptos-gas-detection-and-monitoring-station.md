---
title: "Leptos: gas detection and monitoring station"

tagnames: 'arduino, barcelona, spain, air-quality, espana, gas-sensor, air-monitoring, activity:open-air, gas-monitoring, grove, first-time-poster'
author: imvec
path: /notes/imvec/10-20-2016/leptos-gas-detection-and-monitoring-station.md
nid: 13630
uid: 495038
cids: 15706,15707
---

![](https://publiclab.org/public/system/images/photos/000/018/493/original/LeptosSteps001.JPG)

# Leptos: gas detection and monitoring station

by [imvec](/profile/imvec) | October 20, 2016 13:14

October 20, 2016 13:14 | Tags: [arduino](/tag/arduino), [barcelona](/tag/barcelona), [spain](/tag/spain), [air-quality](/tag/air-quality), [espana](/tag/espana), [gas-sensor](/tag/gas-sensor), [air-monitoring](/tag/air-monitoring), [activity:open-air](/tag/activity:open-air), [gas-monitoring](/tag/gas-monitoring), [grove](/tag/grove), [first-time-poster](/tag/first-time-poster)

----

###What's Leptos
Leptos is a project in development for the construction of a gas detection and monitoring station to be deployed in the field for long periods of time. It will be equipped with MQ-2 sensors for the detection and monitoring of lethal gases, a PPD42 sensor to measure PM10 and PM2.5 solid particles in suspension and a BME280 of temperature-humidity - barometer. Leptos station is thought to be located in the vicinity of highly contaminated areas and carry out monitoring in real time of lethal gases and solid suspended particles. It will be connected to the I.M.V.E.C. online platform via Wifi or GPRS connection. 


###Components version 0.1
· Arduino Uno R3 (https://fair.to/8CVoC) 
· Grove Shield V.2 (https://fair.to/mgY3) 
· MQ2 gas sensor (https://fair.to/8tgLd) 
· SHINYEI PPD42 dust sensor (https://fair.to/xEXbf) 
· BME280 temperature/humidity/pressure (https://fair.to/dYywG) 
· 0.96" OLED screen (https://fair.to/Cr2A4) 
· Data logger (https://fair.to/S3IHR) 
· 5V battery (https://fair.to/xTufW) 
· SD memory card


###Assembling instructions
Check the manual at [https://imvec.tech/leptos](https://imvec.tech/leptos)


###Source code
The code is based on "Precise Air Quality Monitoring System" by _Idee_ & "DustDuino", you can find it here:
[https://gitlab.com/imvec/leptos/tree/master/0.1](https://gitlab.com/imvec/leptos/tree/master/0.1)


###Using it
Version 0.1 is usefull now just to detect "presences" of the gases and view them in the OLED screen.Also data is stored in a text file inside the SD card.


###Next steps
1- Work with Barcelona University to calibrate the MQ-2 gas sensor and stablish the deviation margins in relation to a professional Drägger gas detector.
2- Test and comparison between MQ-2 gas sensor and the Grove Multichannel Gas Sensor (https://fair.to/PLPyd).
3- Wifi and GPRS connectivity to pipe the collected data to an online public platform.







