---
title: Optical Monitoring of Particulate Matter
tagnames: arduino, air-quality, pm, parent:pm-monitoring, method, optical-pm, air-sensors, parent:air-quality
author: mathew
path: /wiki/optical-monitoring-of-particulate-matter.md
nid: 12627
uid: 4

---

# Optical Monitoring of Particulate Matter

by [stevie](../profile/stevie), [warren](../profile/warren), [mathew](../profile/mathew), [liz](../profile/liz)

January 27, 2016 19:50 | Tags: [arduino](../tag/arduino), [air-quality](../tag/air-quality), [pm](../tag/pm), [parent:pm-monitoring](../tag/parent:pm-monitoring), [method](../tag/method), [optical-pm](../tag/optical-pm), [air-sensors](../tag/air-sensors), [parent:air-quality](../tag/parent:air-quality)

Optical PM monitoring of [Particulate Matter](/wiki/pm) (PM) is an attempt to measure the diameter of particles in flight. Optical monitors are a low-cost way to get real-time data about particles in the air. They are an automated, electronic version of the effect seen in a darkened room by light glinting off of dust in a sunbeam. 

### Comparisons

A number of comparison tests of commercially available sensors have been performed or are underway. Please add to this list if you know of other comparative evaluations.

* **[SouthCoast AQMD's Air Quality Sensor Performance Evaluation Center](http://www.aqmd.gov/aq-spec/evaluations#&MainContent_C001_Col00=2)**
* **[AQICN: Air Quality sensors experiments on the World Air Quality Index project](http://aqicn.org/sensor/)**
* **[EPA Evaluation of Field Deployed Low Cost PM Sensors](https://cfpub.epa.gov/si/si_public_record_Report.cfm?dirEntryId=297517)**

## Questions

[questions:optical-pm]

****

### How optical particle sensors work

A sensor and a beam of light sit at an angle to each other. As a particle passes in front of the light, some light is reflected towards the sensor. The sensor registers a pulse for as long as the particle reflects light to the sensor.  If the air is moving at a consistent speed, the length of this pulse can be used to estimate the particle’s diameter. 

[Read more in-depth in this illustrated post](/n/10406) by @DonBlair.

[![figB1.png](https://i.publiclab.org/system/images/photos/000/009/765/medium/figB1.png)](https://i.publiclab.org/system/images/photos/000/009/765/original/figB1.png)

The sensor registers a pulse for as long as the particle reflects light to the sensor: 

[![figF1.png](https://i.publiclab.org/system/images/photos/000/009/766/medium/figF1.png)](https://i.publiclab.org/system/images/photos/000/009/766/original/figF1.png)

With an estimate of particle diameter and an estimate of average particle density, airborne concentrations of PM can be extrapolated.  These estimates are somewhat imperfect, as accounting for particle density and the estimating and accounting for the quantity of [water in droplet mode particles](/wiki/pm#Droplets) is not straightforward. Both of these issues complicate the process of correlating optical PM measurements to [regulatory monitoring](PM-monitoring-regulations).

****

### Issues with optical particulate data


#### Humidity and optical PM measurements

Optical monitors detect [droplets](/wiki/pm#Droplets) and [dust](/wiki/pm#Dust), and [droplets are often ‘wet,’](/wiki/pm#Droplets) having absorbed water in the humidity.  

![illustration of ‘wet’ mode from /wiki/pm](https://i.publiclab.org/system/images/photos/000/014/319/original/CORRECTillustrative3-peak-droplet-humidity.png)

Humidity measurements are frequently used to correct for the expected effects of humidity on droplets.  These corrections are based on assumptions about the percentage of dust that is in a droplet mode and succeptable to wetting, and the percentage that is dust.

#### Variable particle density

Most low-cost optical monitors assume a standard particle density based on a ‘test dust,’ such as the standard “Arizona Road Dust,” now [ISO 12103-1:1997](http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=27059).  [Read more on the history of test dust in this article from Powder Technology.](http://www.powdertechnologyinc.com/test-dust-contaminants/test-dust-history/)

Some more expensive optical monitors combine and optical monitor with a [filter-based PM monitor.](/wiki/filter-pm) The filter is weighed (‘gravimetric analysis’) before and after sampling to create a calibration factor for particle density.


#### Emulating PM2.5 & PM10 impactors with correction equations

[PM regulatory standards](/PM-monitoring-regulations) are technology-based, meaning that measurements of PM10 must be related back to the results from a specific PM10 monitor.  While optical monitors can set a ‘sharp’ cutoff of particles, filter-based Federal Regulatory Methods depend on the mechanical sorting of an ‘impactor’, which has a less sharp cutoff.

![illustration of sharpness from /wiki/pm](https://i.publiclab.org/system/images/photos/000/014/326/original/cutpoint_vs_sharpness.png)

The sharpness of regulatory impactors can be simulated by calculations detailed by [Hinds 1999](ftp://ftp.cdc.gov/pub/Documents/OEL/02.%20Kuempel/References/Hinds_1999-Aerosol%20technology.pdf) page 255:

The average mass concentration is discrete integral of the individual particle’s contribution to mass concentration, multiplied by a curve for respirable PM10 and PM2.5.

[![pm10.jpg](https://i.publiclab.org/system/images/photos/000/011/471/medium/pm10.jpg)](https://i.publiclab.org/system/images/photos/000/011/471/original/pm10.jpg)

**Values of Ei** |  
--------------------|---------------------
E = 0.9585—(0.00408 x projectedDiameter^2) | for projectedDiameter <15μm 
E = 0 | for projectedDiameter > 15μm 

**E for PM 2.5:**

PM2. 5 = [1 + exp((3.233 x projectedDiameter) - 9.495)^-3.368

****

### Available Optical PM monitors & sensors

#### Filter-calibrated Optical Monitors

Both Dusttrak and [pDR-1500](/wiki/pdr-1500) have a [filter for "gravimetric analysis"](/wiki/filter-pm) (weighing the quantity of dust collected) as an additional calibration.  

Currently there are only proprietary commercial services available for reading commercial sensors, such as [Netronix, which costs around $100/month.](http://www.tsi.com/Landing-Pages/Cloud-Data-Management-System.aspx)

****

#### Low cost and open source Optical Monitors

Here we will examine four in-development projects using almost identical sensors ([Shinyei PPD42NS](/notes/Willie/04-01-2014/field-testing-the-shenyei-pm-sensor), [Syhitech DSM501A](/notes/chrisbartley/04-15-2014/speck-particle-monitor), [Shinyei PPD60PV](http://www.shinyei.co.jp/STC/optical/main_ppd60pv_e.html) ) and a low-cost commercial competitor with a similar design, the [Dylos](http://publiclab.org/notes/mathew/06-12-2014/diy-dust-monitoring-dylos-in-wisconsin).  

Current efforts to correlate low-cost sensors with commercial reference sensors, and each other are available. [AQICN’s effort appears the most comprehensive](http://aqicn.org/sensor//)
Others include:
[AirBeam](http://www.takingspace.org/airbeam-technical-specifications-operation-performance/), [Sonoma Tech](http://makezine.com/2014/05/31/air-quality-sensors-how-good-is-good-enough/), [Gao et al. 2015](http://www.sciencedirect.com/science/article/pii/S0269749115000160),
[Holstus et al 2014](http://www.atmos-meas-tech-discuss.net/7/605/2014/amtd-7-605-2014.pdf), [Purple Air](https://www.purpleair.com).  Thanks to @Willie for many of those links.

Here is a little background information from the EPA on their take of some of these technologies:
<iframe width="560" height="315" src="https://www.youtube.com/embed/nnD8BbuCsdw" frameborder="0" allowfullscreen></iframe>

### Airflow strategies

Passive airflow:
a system that doesn't actively control for airflow, either using natural or thermal convection to drive particulates through.

Active airflow:
The use of a fan or pump to control and/or meter airflow through a sensor.

###The Purple Air
The Purple air tool has become more widely used as a means for monitoring particulate matter on a community level. The benefits of this tool in relation to other sensor based tools are that it is on the low cost side, it is weather proof (unlike the dylos), it has versions that allows users to have data directly uploaded to the internet, and other versions that also store data in the device itself.  The Purple Air tool is also supported through an online mapping tool that allows people to see each individual Purple Air monitors reporting [on a map](https://www.purpleair.com/map?opt=1/mAQI/a10/cC0#1/9.6/-30). Here is a link to more information on the [Purple Air](https://publiclab.org/wiki/purpleair). 

### Dylos DC1100
by [Dylos](http://dylosproducts.com/ornodcproair.html) [my previous notes](/notes/mathew/06-12-2014/diy-dust-monitoring-dylos-in-wisconsin)

[![Screen_Shot_2014-06-11_at_4.12.58_PM.png](https://i.publiclab.org/system/images/photos/000/009/768/medium/Screen_Shot_2014-06-11_at_4.12.58_PM.png)](https://i.publiclab.org/system/images/photos/000/009/768/original/Screen_Shot_2014-06-11_at_4.12.58_PM.png)

The Dylos uses a small fan. A great teardown is here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/v25owuUboxI" frameborder="0" allowfullscreen></iframe>

[questions:dylos]

****

### Speck 

by Carnegie Mellon’s [CREATELab](https://www.specksensor.com/), [my previous notes.](/notes/mathew/06-04-2014/two-weeks-with-a-speck)

the Speck uses a small fan:

[![14155445079_6657caf3aa_b.jpg](https://i.publiclab.org/system/images/photos/000/009/769/medium/14155445079_6657caf3aa_b.jpg)](https://i.publiclab.org/system/images/photos/000/009/769/original/14155445079_6657caf3aa_b.jpg)

hooked up to their open source [fluxtream](/notes/mathew/06-05-2014/using-fluxtream-to-look-at-speck-data) platform and designed for home use, it's being used by the [Southwest Pennsylvania Environmental Health Project.](http://www.environmentalhealthproject.org/health/air/)

[questions:speck]

****

### Airbeam

developed by the [HabitatMap](http://aircasting.org/), it is designed to hook to an android device.  It is [open source hardware](https://github.com/cloudformdesign/Airbeam) and uses a small fan.

[![photo-original.jpg](https://i.publiclab.org/system/images/photos/000/009/770/medium/photo-original.jpg)](https://i.publiclab.org/system/images/photos/000/009/770/original/photo-original.jpg)

[questions:airbeam]

****

### Dustduino

[in development](/tag/dustduino) by @schroyer and @willie
passive airflow via a convection current, it sends data to [xively](https://xively.com/)

[![dustduino_proto_2_desk.jpg](https://i.publiclab.org/system/images/photos/000/009/771/medium/dustduino_proto_2_desk.jpg)](https://i.publiclab.org/system/images/photos/000/009/771/original/dustduino_proto_2_desk.jpg)

[![ShinyeiPPD42NS_Insides_Labeled_600.jpg](https://i.publiclab.org/system/images/photos/000/009/772/medium/ShinyeiPPD42NS_Insides_Labeled_600.jpg)](https://i.publiclab.org/system/images/photos/000/009/772/original/ShinyeiPPD42NS_Insides_Labeled_600.jpg)

[questions:dustduino]

****

### Other platforms

[ManyLabs](https://www.manylabs.org/docs/project/airQualityStation/)

[clAIRity](http://clairity.mit.edu/site/html/howitworks.html)

[Pickle Jr.](http://indiaairquality.com/2014/12/14/building-pickle-jr-the-low-cost-networked-pm2-5-monitor-part-2/)

****

### Also see

#### [Public Lab Development of PM Monitors](/wiki/pm-dev)
#### [Open Pipe Kit for connecting optical monitors and setting up alerts](http://openpipekit.org)

