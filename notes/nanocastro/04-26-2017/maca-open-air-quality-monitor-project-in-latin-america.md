---
title: "MACA - Open AQ monitor - Second prototype"\ntagnames: 'arduino, air-quality, monitoring, dustduino, dust, pm, barnstar:basic, particles, gas-sensor, shinyei, ozone, south-america, activity:shinyei, activity:dustduino, activity:particulate-monitoring, replication:9818, particulate-matter, metal-oxide, latinamerica, carbon-monoxide, nitrogen-dioxide, argentina, activity:dust, activity:ozone, air-sensors, activity:maca, maca'
author: nanocastro
path: /notes/nanocastro/04-26-2017/maca-open-air-quality-monitor-project-in-latin-america.md
nid: 14139
uid: 506212

---

![](https://publiclab.org/public/system/images/photos/000/024/946/original/abierto.jpg)

# MACA - Open AQ monitor - Second prototype

by [nanocastro](../profile/nanocastro) | April 26, 2017 21:04

April 26, 2017 21:04 | Tags: [arduino](../tag/arduino), [air-quality](../tag/air-quality), [monitoring](../tag/monitoring), [dustduino](../tag/dustduino), [dust](../tag/dust), [pm](../tag/pm), [barnstar:basic](../tag/barnstar:basic), [particles](../tag/particles), [gas-sensor](../tag/gas-sensor), [shinyei](../tag/shinyei), [ozone](../tag/ozone), [south-america](../tag/south-america), [activity:shinyei](../tag/activity:shinyei), [activity:dustduino](../tag/activity:dustduino), [activity:particulate-monitoring](../tag/activity:particulate-monitoring), [replication:9818](../tag/replication:9818), [particulate-matter](../tag/particulate-matter), [metal-oxide](../tag/metal-oxide), [latinamerica](../tag/latinamerica), [carbon-monoxide](../tag/carbon-monoxide), [nitrogen-dioxide](../tag/nitrogen-dioxide), [argentina](../tag/argentina), [activity:dust](../tag/activity:dust), [activity:ozone](../tag/activity:ozone), [air-sensors](../tag/air-sensors), [activity:maca](../tag/activity:maca), [maca](../tag/maca)

----

# What is MACA?

The MACA Open Air Quality Monitor project (Monitor Abierto de Calidad del Aire in spanish) started a few years ago in Mendoza, Argentina to tackle some problems related to local air pollution monitoring (no public data, high costs of reference instruments, etc, etc) by developing an open, small and low cost air quality monitoring station.You can find more info about the MACA project in our [wiki](http://www.monitorabierto.wikidot.com/).

# What are we doing?

Our [](http://monitorabierto.wikidot.com/desarrollo:prototipo1)[first prototype](http://monitorabierto.wikidot.com/desarrollo:prototipo1) was capable of measuring ozone and it worked ok as a proof of concept. Now we are working at [LabFD](http://www.frm.utn.edu.ar/labfd) on the calibration of a second prototype that combines an optical particle detector and metal oxide gas sensors for CO, NO2 and O3 (MICS-e2v). It's a remix and adaptation of previous citizen air quality monitors (AQ Egg, Smartcitizen, Dustduino and Airbeam). It is based on an Arduino Mega 2560\.

### Second prototype

This second version is still a work in process. We designed and assembled the first version and we are now working on the calibration of the sensors. Below a description of this prototype.

#### Gas sensors

A general survey and a lot of resources of different gas sensors and sensor boxes for air quality monitoring can be found at [Snuffle](http://www.snuffle.org/doku.php?id=start).We chose metal oxide (MOx) gas sensors due to its really low cost compared to electrochemical sensors and because we can remix with/from previous open source monitors that use this kind of sensors (AQ Egg, Smartzitizen, AirCasting, EveryAware).

The MOx sensors consist of a sensing layer, composed of a metal oxide, generally SnO2, that is heated by a heater structure. When chemicals are absorbed on its surface, its electrical resistance change. Ozone and NO2 are oxidising gases and cause an increase of the sensing resistance. On the contrary, reducing gases (CO, VOC) cause the resistance to decrease.

Metal oxide sensors generally show temperature dependence and cross-sensitivity to other trace gases. They are also sensitive to fluctuations of relative humidity and show baseline drift with time. Using MOx sensors quantitatively requires that a model be developed which not only characterizes the relationship between sensor resistance and gas concentration, but also includes the impacts of these other variables and sensor characteristics.

All the sensors used are [MICS](http://www.snuffle.org/doku.php?id=sgx_sensortech_mics_series) and were purchased from [SGX Sensortech Limited (fromerly e2v)](https://www.cdiweb.com/ParametricSearch.aspx?Refinement=/_/N-1xc&No=0&Nrpp=25&Nr=AND%28p_portal_id:1,obsolete:0,p_manuf_id:364,p_product_family_id:5%29).

List of sensors![image description](https://publiclab.org/system/images/photos/000/020/207/large/gas_sensors.jpg "gas_sensors.jpg")

They are all through hole mounting but there seem that are no longer produced by this manufacture, only SMD mounting sensors. The MICS-OZ-47 used in the first prototype is no longer available. All sensors are exposed like in a passive sampler, that is, in a vertical tube with the MICS suspended near open end.![image description](/i/24954.jpg "d2e65152-19bd-47ec-af3b-61e212ec498d.jpg")

![image description](/i/24952.jpg "IMG_20171025_112940686.jpg")

More details about MOx sensors can be found at:

- Fine, George F.; Cavanagh, Leon M.; Afonja, Ayo; Binions, Russell. 2010\. "Metal Oxide Semi-Conductor Gas Sensors in Environmental Monitoring." Sensors 10, no. 6: 5469-5502\.
- G. Eranna. 2011\. "Metal Oxide Nanostructures as Gas Sensing Devices". CRC Press, Boca Raton, FL,316 pp.,ISBN 978-1-4398-6340-4\.

Some other references were MICS sensors are used and evaluated

- Piedrahita, R., Xiang, Y., Masson, N., Ortega, J., Collier, A., Jiang, Y., Li, K., Dick, R. P., Lv, Q., Hannigan, M., and Shang, L. 2014\. "The next generation of low-cost personal air quality sensors for quantitative exposure monitoring". Atmos. Meas. Tech., 7, 3325-3336, doi:10.5194/amt-7-3325-2014, 2014\.
- Spinelle et al. 2015, "Field calibration of a cluster of low-cost available sensors for air quality monitoring. Part A: Ozone and nitrogen dioxide". Sensors and Actuators B: Chemical, 215, 249-257\.
- Spinelle et al. 2017\. "Field calibration of a cluster of low-cost commercially available sensors for air quality monitoring. Part B: NO, CO and CO2". Sensors and Actuators B: Chemical, 238, Pages 706-715, ISSN 0925-4005,
- Air Quality Sensor Performance Evaluation Center ([AQ-SPEC](http://www.aqmd.gov/aq-spec/home)) by California's SC-AQMD

# 

#### Particles sensor

We are using the Shinyei PPD42NS, the same sensor used in the Dustduino. The are other really interesting [](http://aqicn.org/sensor/)[laser based particles sensors](http://aqicn.org/sensor/) and open source monitors like [](http://rutian.github.io/projects/mypart/)[](http://rutian.github.io/projects/mypart/)[MyPart](http://rutian.github.io/projects/mypart/) but we chose it because is the most documented and easier to get PM optical sensor. The are a lot of comments and [](https://publiclab.org/wiki/dustduino)[Research Notes](https://publiclab.org/wiki/dustduino) about this sensor.

Some of the known issues about the Shinyei:

- From LPO to concentration [pcs/0.01cf]. This has been done by [](http://www.howmuchsnow.com/arduino/airquality/grovedust/)[fitting a cubic](http://www.howmuchsnow.com/arduino/airquality/grovedust/) polynomial curve to the digitized Spec Sheet characteristic curve of Cigarrette smoke vs LPO.
- In order to read both outputs of the sensor simultaneously (P1 and P2) [](https://jordifonollosa.wordpress.com/2016/01/21/air-quality-monitoring-system-with-particle-sensors-and-arduino-boards/)[interruption](https://jordifonollosa.wordpress.com/2016/01/21/air-quality-monitoring-system-with-particle-sensors-and-arduino-boards/) routines are needed.
- Conversion to mass concentration (ug/m3) is done by making [](https://github.com/dustduino/DustDuinoSerial/blob/master/DustDuinoSerial/DustDuinoSerial.ino)[assumptions](https://github.com/dustduino/DustDuinoSerial/blob/master/DustDuinoSerial/DustDuinoSerial.ino) about PM10 and PM2.5 shape, size, and density.
- There is an intrinsic limitation to the use of optical techniques as proxies for gravimetric measurements. When a difference in measured values is observed, one cannot be certain whether it is attributable to a difference in the total mass, size distribution, or optical properties -- or some combination of all three -- of the measured aerosols ([](http://www.atmos-meas-tech.net/7/1121/2014/amt-7-1121-2014.html)[Holstius et al., 2014](http://www.atmos-meas-tech.net/7/1121/2014/amt-7-1121-2014.html))
- The window in the front of the sensor must be [](http://www.davidholstius.com/2012/06/12/this-side-up/)[closed](http://www.davidholstius.com/2012/06/12/this-side-up/)!
- Response improvement of the sensor can be achieved by [](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/)[connecting a fan](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/) and by incrementing the integration time of the reading.

We designed a shield and a fan duct that can be 3D printed and attached to the front of the Shinyei in order to close the front window of the sensor and to increase response by increasing the airflow across the sensor.

![image description](https://publiclab.org/system/images/photos/000/020/206/large/2017-04-26_16.49.09.jpg "2017-04-26_16.49.09.jpg")![image description](/i/24955.jpg "IMG_20171025_093124216.jpg")

#### 

#### Temperature and relative humidity

We are using the widely known and documented DHT22\.

#### Communications and data logging

A bluetooth shield is mounted on the Arduino to retrieve data from the sensors and to log data on an SD card
![image description](/i/24956.png "Screenshot_20171025-100849small.png")

#### Documentation

The ongoing documentation about hardware and firmware can be consulted on [Github](https://github.com/nanocastro/Repo_maca).

# Ongoing work

- We are working on the calibration after a monitoring campaing of almost 1 month of 2 prototypes along with reference instruments. You can find the ongoing process and the raw data on the Github repo.
- Check the [wiki](https://publiclab.org/wiki/maca) for updates and more info

All comments and suggestions are welcomed.

Thanks for reading.