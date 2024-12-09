---
title: passive-pm
tagnames: parent:pm
author: mathew
path: /wiki/passive-pm.md
nid: 12563
uid: 4

---

# passive-pm

by [stevie](../profile/stevie), [mathew](../profile/mathew)

January 05, 2016 22:52 | Tags: [parent:pm](../tag/parent:pm)

----

###Introduction
A passive particle monitor measures particles without the use of mechanical or electrical systems, depending instead on natural wind-blown deposition of particles on a collection surface.  Passive particle monitoring is frequently used for qualitative "nuisance dust" measurements, and more recently to extrapolate [airborne PM concentrations](https://publiclab.org/wiki/pm) and the direction dust comes from.

Passive monitoring promises to be less expensive and more robust than active monitors' mechanical and electrical components, but comes with a different set of challenges.  Public Lab is investigating one [promising passive monitor](/wiki/sem-stub-pm) as a tool for measuring airborne PM concentrations.  [Read more in Public Lab PM tool development.](/wiki/pm-dev)

###Advantages and Disadvantages

**Advantages** | **Disadvantages** 
--------------------|---------------------
low cost (less than $100 devices) | deployed for 3-7 days, low temporal resolution
deployed without electricity | not real-time (results must be analyzed after collection)
simple setup and calibration | analysis can be labor intensive or expensive
actual particles are collected | particle speciation is limited by method and cost
can generate airborne particle concentrations | no way to extrapolate to airborne concentrations of speciated particles
may correlate well with [Federal Reference Methods](https://publiclab.org/wiki/pm-monitoring-regulations#The+Federal+Reference+Methods:) | not an officially recognized method
electret methods are particle-specific | electret methods are particle-specific

###Devices

####[SEM Stub Monitors](/wiki/SEM-stub-pm)

In field testing, these samplers have been demonstrated to vary (CV) only 11.6% from [Federal Reference Methods](https://publiclab.org/wiki/pm-monitoring-regulations#The+Federal+Reference+Methods:), when measuring course particulates (PM10-2.5), making this the most precise published passive particle monitor design (Ott, Cyrs, & Peters, 2008).  Public Lab is evaluating the deployment of this technology.  [Read More](/wiki/SEM-stub-pm)

Developed originally for indoor dust monitoring at the University of North Carolina by Jeff Wagner and David Leith, this tiny monitor (in the middle of the housing, below) consists of a fine mesh cap over top of a Scanning Electron Microscopy (SEM) pin stub, a small aluminum object that looks like a pin.  Thomas Peters and Darrin Ott at the University of Iowa added a wind-and-rain housing so the monitors can be used outside.  They also added a glass microscope slide cover on top of the stub, allowing lower-cost analysis with a standard visible-light microscope. 

[![Amber Wise removing a stub cover](//i.publiclab.org/system/images/photos/000/012/171/original/IMG_20151020_175427.jpg)](//i.publiclab.org/system/images/photos/000/012/171/original/IMG_20151020_175427.jpg)

[![IMG_20151015_120027-trim.png](//i.publiclab.org/system/images/photos/000/013/521/medium/IMG_20151015_120027-trim.png)](//i.publiclab.org/system/images/photos/000/013/521/original/IMG_20151015_120027-trim.png)

Analysis is performed in [ImageJ](http://fiji.sc/Fiji). roughly:

[![Analysis Steps](//i.publiclab.org/system/images/photos/000/011/635/original/imagejsteps.jpg)](//i.publiclab.org/system/images/photos/000/011/635/original/imagejsteps.jpg)

[Read More](/wiki/SEM-stub-pm)

Citation: 
Darrin K. Ott, William Cyrs, Thomas M. Peters, Passive measurement of coarse particulate matter, PM10-2.5, Aerosol Science 39:156 – 167, 2008

###Sticky Pad Monitors

Developed to track 'nuisance dust,'(i.e. any visible dust blowing onto properties adjacent from a dust producing industrial operation), sticky pads are pieces of tape that collect wind-blown dust.  No system for speciating particles or correlating particle accumulations with airborne concentrations has been developed, however, sticky pads are the only dust monitoring system that records the direction dust came from.

The most advanced system, developed at the University of Leeds and spun off into the [DustScan](http://www.dustscan.co.uk/) company, uses two sticky pads-- a cylindrical pad used to track the direction dust comes from, and an upward-facing sticky pad to track total dust.  The devices are made from standard sizes of ABS drainage pipe and commercially available tape. 

[![DustScan Sticky Pads](//i.publiclab.org/system/images/photos/000/004/526/original/Screen_Shot_2014-06-04_at_8.20.00_PM.png)](//i.publiclab.org/system/images/photos/000/004/526/original/Screen_Shot_2014-06-04_at_8.20.00_PM.png)

For analysis, sticky pads are scanned at low resolution, and the relative darkness or lightness (albedo) is measured by software to quantify dust accumulation. 

[Read More](/notes/mathew/06-05-2014/the-development-of-stickypad-monitoring)

###Other Passive Monitors

####Vinzents Passive monitor
A small dual-sticky pad system designed for indoor use only, with one pad facing up and the other one horizontal.  This system uses a similar deposition model as SEM stub monitors, and analysis can be performed using optical microscopy.

See: 
Vinzents, PS. A Passive Personal Dust Monitor. Annals of Occupational Hygiene, 40: 261-80, 1996.

Schneider et al. Passive Sampler Used for Simultaneous Measurement of Breathing Zone Size Distribution, Inhalable Dust Concentration and other Size Fractions Involving Large Particles, Annals of Occupational Hygiene, 46:187-195, 2002.

####Exposed Filter Systems

####Ferm Passive Monitor
Martin Ferm has developed two different monitors:
1) a series of vertical strings less than 1mm in diameter collect particles from all directions for analysis with mass spectrometry, not investigated because of the expense of analysis.
2) a polypropylene container with an exposed filter, for mass spectrometry.

See:
Fern, Martin, Development and Test of a Passive Sampler for Fine Particles, Swedish Environmental Research Institute, 2010.

####Einstein–Lioy Deposition Sampler
A similar arrangement to the Ferm monitor, with four exposed 37mm filters for mass spectrometry analysis.

See:
Einstein et al, Design and Validation of a Passive Deposition Sampler, Journal of Environ Monitoring 2012 September ; 14(9): 2411–2420

####Brown Electret Sampler
A system with an 'electret,' or semi-permanent charged material, filter.  Requires expensive analytical chemistry methods.

See:
Brown, R. C., Hemingway, M. A., Wake, D., and Thompson, J. . Field Trials of an Electret-Based Passive Dust Sampler in Metal Processing Industries, Ann. Occup. Hyg. 39:603– 622. 1995

####Personal Aeroallergen Sampler (PAAS)
Unknown operation, couldn't get the article. Support open science.  

Yamamoto et al. A passive sampler for airborne coarse particles  Journal of Aerosol Science Volume 37, Issue 11, November 2006, Pages 1442–1454