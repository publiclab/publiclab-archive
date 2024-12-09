---
title: Filter Based Monitoring of Particulate Matter
tagnames: air-quality, dust, silica, pm, filters, filtration, parent:pm-monitoring, method, air-filters
author: mathew
path: /wiki/filter-based-monitoring-of-particulate-matter.md
nid: 12687
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/024/040/original/Screenshot_2018-03-13_at_4.13.10_PM.png)

# Filter Based Monitoring of Particulate Matter

by [warren](../profile/warren), [mathew](../profile/mathew), [stevie](../profile/stevie)

February 15, 2016 00:59 | Tags: [air-quality](../tag/air-quality), [dust](../tag/dust), [silica](../tag/silica), [pm](../tag/pm), [filters](../tag/filters), [filtration](../tag/filtration), [parent:pm-monitoring](../tag/parent:pm-monitoring), [method](../tag/method), [air-filters](../tag/air-filters)

----

## Filter-based PM monitors

Collecting particulate matter (PM) on a filter for analysis is the oldest and best understood method of measuring particle pollution. Filter-based PM monitors form the basis of US-based [PM regulations](/wiki/pm-monitoring-regulations), and filter based samplers are written directly into the US Code of Federal Regulations.

### How filter measurements work

PM is expressed as a mass concentration; that is, the mass of particles in a given volume of air, usually in micrograms (millionths of a gram) per cubic meter of air (μg/m^3). All expressions of PM mass concentration refer back to filter-based PM measurements, and PM monitors that aren’t filter-based usually apply a correction factor to bring their readings in line with [Federal Reference Methods](/wiki/pm-monitoring-regulations#The+Federal+Reference+Methods:). Some [optical monitors](/wiki/optical-pm) also have a filter-based system in-line to generate a more accurate correction. 

### How measurements are calculated

To determine mass concentrations, a known volume of air is pumped through a filter of a known mass for a specific time period, after which point the filter is weighed.  The mass concentration mass equals the mass of filter after sampling minus the mass of the filter before sampling divided by the total volume of air. This process is referred to by the jargon term ’gravimetric analysis.’ 

### What are particles made of?

Further analysis of collected PM may be conducted to identify the makeup of the PM, a process called ‘speciation.’ Usually, the filter is dissolved and the remaining material analyzed with  X-ray spectrometry or mass spectrometry.


****

## Questions

[filter-pm](../../tag/question:filter-pm)

****

## Components of a Filter-based PM monitor

A contemporary filter-based PM monitor consists of three components,  an impactor, a filter, and a precise pump.   The impactor sorts particles by size so only the desired fraction of airborne particles are collected, the filter collects the sorted particles, and the pump draws a precise volume of air at a consistent speed.

![anatomy of FRM](https://i.publiclab.org/system/images/photos/000/014/333/original/PM10-FRM.png)

#### Sorting particle sizes with impactors

An **impactor** is a momentum-based particle sorter— the airstream makes a turn, and large particles’ momentum prevents them from making the turn, and so they impact a collection surface. Small particles stay "entrained" in the airstream and get caught in the filter.   Often the impaction plate is coated in oil to capture particles and prevent them from bouncing and passing beyond the plate. 

![impactor illustration](https://i.publiclab.org/system/images/photos/000/014/330/original/impactor.png)

While impactor-sorted particles are often described as being of a specific diameter or smaller (i.e. PM10, 10um or smaller particles), impactors sort particles based on their ‘mass-mean aerodynamic diameter,’ not their actual diameter.  The particles that pass by an impactor fly through the air as if they were idealized spheres of an assumed density derived from the mean density of airborne particles. 

An impactor does not provide a hard cutoff at a specific particle size.  The particles passing through a PM10 impactor have a median size of 10um. 50% of particles are below 10um and 50% above.  The cutoff is usually fairly sharp above 10um, and an impactor is described as having a specific ‘sharpness.’  An impactor’s cutoff is dependent on the speed of the air flowing through it, and precise flow control at the pump is vital to proper impactor function. 

![cutpoint vs sharpness](https://i.publiclab.org/system/images/photos/000/014/326/original/cutpoint_vs_sharpness.png)

There are a variety of impactor designs based on this principle, from the plate-based system illustrated here to cyclone impactors similar to those found in bagless vacuum cleaners to ‘dichotomous virtual impactors’ that provide two different size-sorted particle ranges, but they all work on the same momentum-based sorting principles, and can be described and compared based on their sharpness. 

#### Filters

A variety of filter media are used depending on the analysis method applied to the filter.  For instance, while fiberglass filters are often used in gravimetrically calibrated measurements, often PVC filters are used when the filter must be dissolved for speciation analysis. 

#### Pumps

For an impactor to work properly air must be pulled through it at a consistent speed, measured in volume per unit time, usually liters per minute, or L/m.  Keeping a consistent pumping speed  can be challenging.  Air pressure, humidity and variations in power can all effect pump performance as can the temperature of both the air and of the pump components.   Pressure can change rapidly outside as wind speed changes.  Pumps are coupled with control systems that actively monitor some or all of these factors, often in parallel with the airspeed through the pump, and adjust accordingly.  The details of most pumps’ control systems are proprietary.

****

## Common filter-based PM-monitoring systems

At present there are no open hardware designs for filter-based systems.  Several proprietary systems are available. 

#### EPA Federal Reference Methods

[EPA Federal Reference Methods (FRMs)](/wiki/pm-monitoring-regulations#The+Federal+Reference+Methods:) for PM10 and PM2.5 are filter-based. They draw one cubic meter of air per hour through their filters.  Read more in [PM Monitoring Regulations.](https://publiclab.org/wiki/pm-monitoring-regulations)  FRMs cost between $20-60,000.  

#### MiniVol

The [MiniVol](/minivol) costs around $2000, and is a lower volume (mini Volume) and more portable filter-based system manufactured by [Airmetrics](http://www.airmetrics.com/products/minivol/). While not a federal reference method, several states recognize data from the MiniVol.  It comes with interchangable impactors for PM2.5 and PM10, and can be used to produce 24-hour averages by gravimetric methods. Public Lab has two MiniVols available for loan.

Global Community Monitor has had limited success in using the MiniVol. [Read more about Global Community Monitor's experience](/notes/liz/10-01-2015/when-100-000-is-not-enough-how-citizen-data-could-relate-to-government-regulation)

[Learn More about the MiniVol and how to deploy it](/wiki/minivol)

****
 
#### Hybrid Filter/Optical systems

Dusttrak and Dusttrak II by TSI, and the [PDR-1500](/wiki/pdr-1500) by Thermofisher are filter-based systems with the addition of an [optical PM monitoring system](/wiki/optical-pm). 

They provide real-time readings that are calibrated against a gravimetrically analyzed 24-hour average from their filters. The Dustrak II and PDR-1500 are [Federal Equivalent Methods](https://publiclab.org/wiki/pm-monitoring-regulations#Federal+Equivalent+Methods) used by the EPA to read momentary spikes in PM.  Since optical monitors measure [water droplets and 'wet' particles](/wiki/pm#Droplet+Formation) rather than a ‘dry’ particulate matter on the filter, filter-based calibrations are crucial to improving their accuracy.
