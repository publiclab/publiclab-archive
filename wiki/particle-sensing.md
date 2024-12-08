---
title: Particle Sensing
tagnames: indoor-air-quality-mapping, particulate-sensing, agriculture, air-quality, fracking, tool, dust, particulates, particulate, pm, method, oil-and-gas, parent:air-quality, particulate-sensing-overview, questions:dust-sampling
author: mathew
path: /wiki/particle-sensing.md
nid: 10319
uid: 4

---

# Particle Sensing

by [warren](../profile/warren), [liz](../profile/liz), [DavidMack](../profile/DavidMack), [mathew](../profile/mathew), [JSummers](../profile/JSummers), [amysoyka](../profile/amysoyka)

April 16, 2014 02:40 | Tags: [indoor-air-quality-mapping](../tag/indoor-air-quality-mapping), [particulate-sensing](../tag/particulate-sensing), [agriculture](../tag/agriculture), [air-quality](../tag/air-quality), [fracking](../tag/fracking), [tool](../tag/tool), [dust](../tag/dust), [particulates](../tag/particulates), [particulate](../tag/particulate), [pm](../tag/pm), [method](../tag/method), [oil-and-gas](../tag/oil-and-gas), [parent:air-quality](../tag/parent:air-quality), [particulate-sensing-overview](../tag/particulate-sensing-overview), [questions:dust-sampling](../tag/questions:dust-sampling)

**Particle Sensing** is the act of detecting dust in the air, and characterizing that dust and its potential health effects on those who may breathe it.

_(Above photo: A man wearing a mask walks past the skyline of Singapore's business district Credit: Reuters/Edgar Su)_

Why are we concerned about particles? because humans now make more dust than any natural process on earth.

[![Screen_Shot_2014-04-16_at_11.49.08_PM.png](https://i.publiclab.org/system/images/photos/000/003/698/medium/Screen_Shot_2014-04-16_at_11.49.08_PM.png)](https://i.publiclab.org/system/images/photos/000/003/698/original/Screen_Shot_2014-04-16_at_11.49.08_PM.png)

From [EPA/600/R-95/115](http://ofmpub.epa.gov/eims/eimscomm.getfile?p_download_id=4608)

There are four major factors necessary to determining what particles are in the air and addressing the source, particle concentration, particle size, particle type, and particle source. Different particle sensing strategies are useful in determining these factors.

### 1. Particle Concentration
Particle concentration is the density of particles in the air.  This is usually expressed as mass per volume, i.e. micrograms or milligrams per cubic meter, expressed μg/m3 or mg/m3.

### 2. Particle Size
Particles are measured in micrometers (millionths of a meter, or μm), but when talking about particle sizes, the literature speaks of __idealized particles__.  Shorthand, such as 'PM10' meaning, particulate matter less than or equal to 10μm in diameter.  but by diameter, the literature means "mass median aerodynamic diameter" which is a way of saying particles that fall through the air at the same rate as a perfect sphere of 10μm.

[David Mack](publiclab.org/profile/DavidMack) [clarifies](http://publiclab.org/notes/Schroyer/06-26-2014/broadcast-dust-readings-from-a-smartphone#c94340) with summaries of the regulations for PM10 and PM2.5 via [EPA 40 CFR Part 50](http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title40/40cfr50_main_02.tpl) as summarized in [Air Quality Criteria for Particulate Matter (Final Report, April 1996)](http://cfpub.epa.gov/ncea/cfm/recordisplay.cfm?deid=2832):

"The 50% cut point refers to the EFFICIENCY at which particles are removed by the selective inlet at the given size. So for PM10, the inlet removes 50% of particles at 10 microns but above 10 microns the removal efficiency increases and below 10 microns removal efficiency declines. Thus the resultant fraction is not a normal distribution (e.g. 50% above and 50% below) but a skewed distribution (see graph below). Also, the rate at which removal efficiency changes is referred to as the cut point SHARPNESS."

[![pm.jpg](https://i.publiclab.org/system/images/photos/000/005/166/medium/pm.jpg)](https://i.publiclab.org/system/images/photos/000/005/166/original/pm.jpg)

### 3. Particle Type
This can be conducted with a microscope for crystals, and using lab techniques for other types of particles.  Mass spectrometry and x-ray spectrometry may also be used.

### 4. Particle Source
Usually directional and time-stamped data from multiple points are needed to extrapolate source, along with an understanding of particle type.

Researchers speak of two types of emissions that have a blurry line between them, 'process stream' emissions and 'fugitive emissions.' Process stream emissions are inherent to a process, like ash from a fire, and fugitive emissions are ancillary, like the dust kicked up bringing wood to a fire [[EPA 3-2](http://ofmpub.epa.gov/eims/eimscomm.getfile?p_download_id=4608)].

****

## Particles of Concern

There are a lot of problematic dust particles.  Generally speaking, particles smaller than 10μm get lodged in the lungs.  But shape, material, and the sharpness of the particles matters.  For instance, recently broken particles are sharper and more dangerous than dust that's been blowing around a while and been rounded out. 

[Silica](/wiki/silica) is currently a Public Lab monitoring project. For silica, particles smaller than 5μm are considered the most dangerous.

*The family of chemicals that make up Particulate Matter are subdivided into the different regulated pollutants:*

[![full-graphic.png](https://i.publiclab.org/system/images/photos/000/005/042/medium/full-graphic.png)](https://i.publiclab.org/system/images/photos/000/005/042/original/full-graphic.png)

From [PowerMag/PM2.5: More Than Just Dust](http://www.powermag.com/blog/pm2-5-more-than-just-dust/)

****

## Strategies and Sensors

### Electronic sensors

Most electronic sensors are essentially a light that gets interrupted by a particle, with a camera or other optical sensor watching.

See more about air quality sensors on the [Air Sensors page](/air-sensors). There are several sensors available for particle sensing; see more in the questions below:

[questions:air-sensors]

****

## Dust sampling

[questions:dust-sampling]

### Sticky Pads

Essentially tape, sticky pads have the advantage of capturing a record of actual particles that can be analyzed later.  They can be scanned and digitized for standardized readings. More can be found on the [Sustainable Aggregates ](http://www.sustainableaggregates.com/sourcesofaggregates/landbased/dust/dust_monitoring.htm) website.

****

### EPA Test Methods

EPA approved instruments are designated as either a Federal Reference Method (FRM) or Federal Equivalent Methods (FEM).  For PM testing, the FRM is typically a manual test method whereby PM is collected on a filter for 24-hours (daily).  The mass is determined by gravimetric analysis (weighing the filter before and after sample collection) and the sample volume is calculated based on the air flow rate multiplied by the sample duration.  Then the mass concentration (typically in microgram per cubic meter, ug/m3) is calculated as the mass collected divided by the sample volume.

The FEMs for PM utilize detectors capable of real time reporting.  The air sample volume is usually determined by air flow rate and duration akin to the FRM.  However, the mass may be measured by the [beta ray attenuation method (BAM)](http://www.metone.com/particulate.php) or [tapered element oscillation method (TEOM)](http://www.thermoscientific.com/en/product/1405-teom-continuous-ambient-particulate-monitor.html). 

The complete list of approved instruments for NAAQS evaluating is provided on the EPA [Ambient Monitoring Technology Information Center (AMTIC) web site](http://www.epa.gov/ttn/amtic/criteria.html)



