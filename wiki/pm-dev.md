---
title: 'Passive Particulate Tool Development'
tagnames: parent:pm
author: mathew
path: /wiki/pm-dev.md
nid: 12689
uid: 4

---

# Passive Particulate Tool Development

by [warren](../profile/warren), [mathew](../profile/mathew), [stevie](../profile/stevie), [gretchengehrke](../profile/gretchengehrke)

February 15, 2016 06:28 | Tags: [parent:pm](../tag/parent:pm)

----

We have two different technologies in development: alert systems built around [optical PM monitors](/wiki/optical-pm) with [Open Pipe Kit](http://openpipekit.github.io/), and [passive PM monitors](/wiki/passive-pm) to meet EPA’s proposed [supplementary monitoring](https://publiclab.org/wiki/pm-monitoring#Proposed+EPA+precision+categories+for+citizen+monitoring) goals for citizen science. 

## Verifying Passive PM monitors

Our goals are to check the correspondence between the [passive PM monitors](/wiki/sem-stub-pm) we’re replicating and other PM measurement tools.  Our short-term goal is to replicate a a correspondence to a [Federal Reference Method](https://publiclab.org/wiki/pm-monitoring-regulations#The+Federal+Reference+Methods:) of +/-20% with a stretch goal of reaching +/-10%.

This can be achieved by co-locating the monitors with [FRM monitors](/wiki/pm-monitoring-regulations) at one of the ~900 EPA certified test stations across the US.  @GretchenGehrke has tentative plans to do so in North Carolina. We will build up to this test with calibration testing at Public Lab and Chicago State (CSU).

### Problem Definition

Material choices in the manufacture of passive monitors can change the particles that are captured.  Some materials can generate a static charge that may attract and repel particles depending on the particles’ size and charge.  Our goal is that home DIYers, secondary schools, and universities could potentially replicate our tools and techniques making small quantities of monitors.  We have picked materials as close as possible to the literature while also in line with the expected production capabilities of target users.

We have built monitors to the specifications given in the literature, substituting 3D printed ABS for the cap and laser-cut acrylic for the housing. The original monitors were made on a CNC machine and cut from stainless steel, with an aluminum housing.  CNC-ing services for stainless steel are prohibitively expensive, and less available to us, to DIYers, and to future universities or secondary schools that may use this monitoring methodology. Therefore, we had caps milled out of aluminum.

We need to test:

1. the consistency of low-run production units, comparing data from monitors of the same materials in the same location.
2. the effects of material choice on particle count, comparing the data from monitors of of different materials in the same location.
3. the correspondence between our monitors and reference measurements. 
 
Towards that end, we're formulating a series of questions using the new Q&A system:

## Questions

<a class="btn btn-primary" href="/post?tags=pm,passive-pm,question:pm,question:passive-pm,dust,particle-monitoring">Ask a question about passive-pm</a>

[question:passive-pm](../../tag/question:passive-pm)

****

#### Internal testing:

We’ll calibrate our SEM and Visible Light microscopy with NIST-certified spheres of a known size, following Ott et al.  so we can test the same image analysis on two different imaging and hardware configurations:

	* SEM:
		- Acrylic body & graphite & carbon tape stub	
		- Aluminum body & graphite & carbon tape stub
	* Visible Light Microscopy:
		- Acrylic body and aluminum & glass stub
		- Aluminum body & aluminum & glass stub

We will then collect data on several 7-day co-deployments of passive PM monitors against our own reference instruments for PM10-2.5.  We will get a reference reading for PM10-2.5 by collecting PM10 without gravimetric calibration using a Dylos 1100 monitor, and PM2.5 data with a 24-hour gravimetric calibration using a PDR-1500 with a PM2.5 impactor and filter.  This data will be transmitted and collected with [Open Pipe Kit](http://openpipekit.github.io/), and the filters analyzed at [Chester LabNET](http://www.chesterlab.net/) in Tigard, OR.

#### Co-located testing:

When we are confident in our optical monitors, we will send either the aluminum or acrylic passive PM monitors (based on the performance of each in our internal testing) to an EPA FRM monitoring station at the primary EPA air quality research and development facility, in North Carolina. 

#### Next Steps at CSU

@AmberWise, @Damarquis, and @Pagyebo at Chicago State will be:

* comparing co-located visible light samples and SEM samples taken in Chicago
* verifying ImageJ counts against manual particle counts
* examining the accuracy of thresholding in ImageJ using samples taken in Wisconsin
* Imaging samples located at Public Lab for comparison to DYLOS & PDR-1500 concentrations
* Imaging samples from FRM colocation. 

#### Analysis Automation

The analysis protocol we are using in [ImageJ should be scripted](http://fiji.sc/Scripting) so that the data tables for our [spreadsheet](https://docs.google.com/spreadsheets/d/1xSVT9lxary0zZhhEqhrX3hsdIb4shbYhaOJx_RWhESg/edit#gid=939071620) are automatically generated.

#### Imaging Automation

As we verify the viability of our analysis, we also should look at options for low-cost automation of the microscopy.  This can be conducted with either an automated slide stage or SEM microscope automation.  Automated SEM services are available for ~$100 a sample from the RJ Lee Group. It may also be possible  Automated slide stages for visible light microscopy are commercially available, but several thousands of dollars. Two open source automated microscope projects exist:

* [Oxford Open Lab Tools microscope](http://openlabtools.eng.cam.ac.uk/Instruments/Microscope/): ~$900 in parts plus assembly and 3D printing

* [Open Flexure Microscope](http://www.docubricks.com/projects/openflexure-microscope) a paper on it is available in ['A one-piece 3D printed flexure translation stage for open-source microscopy' James P. Sharkey et. al." AIP Review of Scientific Instruments 87. ](http://scitation.aip.org/content/aip/journal/rsi/87/2/10.1063/1.4941068)  Based on flexing plastic parts instead of gearing, this design is a promising direction for a precision scope that can be 3D printed. 

* [Trend Africa](http://trendinafrica.org/) [3D printed microscope](http://www.thingiverse.com/thing:385308): price unknown, but includes less expensive optics and more 3D printing


#### Silica Speciation with Passive monitors

Speciation can be useful for an indication of a pollutant’s presence, but might not provide an accurate count of speciated particles, as ~300 particles are needed in a sample to obtain an accurate reading (Ott et al. 2008).  

It is possible to differentiate between crystalline and amorphous silica, which have different health outcomes, using scanning electron microscopy (SEM). Currently respirable crystalline silica, but not respirable amorphous silica, is listed as a [hazardous air pollutant in six states](https://publiclab.org/wiki/silica-monitoring#Exposure+Monitoring) and is regulated for [occupational exposure](https://www.osha.gov/silica/).  The SEM at Chicago State, like many in academic labs, is capable of some automation of X-ray diffraction and SEM. 

It may be possible to speciate silica with polarized light microscopy -- a technique frequently used for identifying silica in lung tissue.  

[![Yale Rosen S78-866 Silicosis - Polarized light, via Flickr, licensed CC](//i.publiclab.org/system/images/photos/000/014/301/medium/7462024074_69ff835908_o.jpg)](https://www.flickr.com/photos/pulmonary_pathology/7462024074/in/photostream/)

The 'bifringent silicate crystals' in this image is visible as red dots among silicosis fibrules.

Citation:
Darrin K. Ott, William Cyrs, Thomas M. Peters. Passive measurement of coarse particulate matter, PM10-2.5. Aerosol Science 39 156 – 167 (2008)


## Optical Monitoring, Alerts, and Visual Observation

#### Goals
Alerts of potentially high PM concentrations, based on real-time optical sensors, serve to assist community members two ways: (1) understanding in real-time when their health may be at risk, and (2) identifying situations when violations are likely to be [observed visually](/wiki/visual-pm).

Following the release (January 2016) of [Open Pipe Kit’s](http://openpipekit.github.io/index.html#!README.md) latest stable version with email and text message alert systems, it is ready to be integrated with existing [optical monitors](/wiki/optical-pm).  Continued improvement in open source optical monitor hardware makes these a viable option for community use. 

####Next Steps

We will reach out to the [PetCokeAlerts](http://petcokealerts.org/) team and the Public Lab Chicago chapter to see how their existing wind-speed based alerts system could work with visual observation and reporting.
