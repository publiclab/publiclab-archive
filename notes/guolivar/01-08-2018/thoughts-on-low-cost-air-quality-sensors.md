---
title: "Thoughts on Low Cost air quality sensors"

tagnames: 'air-quality, sensors, dustduino, dust, pm, barnstar:basic, humidity, new-zealand, particulate-matter, air-sensors, purpleair, pm2.5, pm10, plantower, purple-air, pms5003, response:15458, air-sensor-eval'
author: guolivar
path: /notes/guolivar/01-08-2018/thoughts-on-low-cost-air-quality-sensors.md
nid: 15483
uid: 424197

cids: 18147,18166,19869,21002,21377,21461,21833,21835,21836,23576,23639,23832

---

# Thoughts on Low Cost air quality sensors

by [guolivar](../../../profile/guolivar) | January 08, 2018 23:27

January 08, 2018 23:27 | Tags: [air-quality](../tag/air-quality), [sensors](../tag/sensors), [dustduino](../tag/dustduino), [dust](../tag/dust), [pm](../tag/pm), [barnstar:basic](../tag/barnstar:basic), [humidity](../tag/humidity), [new-zealand](../tag/new-zealand), [particulate-matter](../tag/particulate-matter), [air-sensors](../tag/air-sensors), [purpleair](../tag/purpleair), [pm2.5](../tag/pm2.5), [pm10](../tag/pm10), [plantower](../tag/plantower), [purple-air](../tag/purple-air), [pms5003](../tag/pms5003), [response:15458](../tag/response:15458), [air-sensor-eval](../tag/air-sensor-eval)

----

This was prompted by a [question by warren](https://publiclab.org/questions/warren/01-04-2018/how-good-is-the-purpleair-sensor-and-what-does-it-detect) that asked about the PurpleAir sensors and how their measurements relate to more _traditional_ air quality measurements.

I'm and air quality scientist and I've been working with "low-cost" sensors for a few years in New Zealand (check out my team's project on [community-based air quality measurements](https://cona-rangiora.blogspot.co.nz/)) so I'll try to be systematic ...

## PurpleAir

The PurpleAir originally had a PMS1003 particle sensor from Plantower ([Product Page](http://www.plantower.com/en/content/?106.html)) and I _believe_ that the version two (PA-II) uses 2 PMS5003 sensors ([Product Page](http://www.plantower.com/en/content/?108.html)). The main difference between the 1003 and 5003 is the path that the air follows inside the sensor (which accounts for the difference in size). The electronics inside are the same and they have the same output of PM1, PM2.5, PM10 and particle counts per 100ml of particles larger than 300nm, 500nm, 1micron, 2.5micron, 5micrion and 10micron.

Both sensors use a laser beam and measure the amount of scatter that the particles going through the beam generate. That light "pulse" is analysed to **estimate** the size of the particles and then that information is used to **estimate** the mass concentrations (PM1, PM2.5 and PM10). I'll come back in a minute to why I use **estimate**.

The units come calibrated from the manufacturer and, as far as I can tell, PurpleAir doesn't perform any correction/calibration/quality-assurance to the data that's used "as-is".

Now, with the "background" out of the way I'll go into the questions.

## How well do these relate to:

### health effects

This is not a simple question. Virtually all of the current standards for air quality in terms of particles are based on measurements made a few decades back when the best we could do was to capture particles in a filter and weigh them. So the first measurements were of "total suspended particles" or TSP but quickly we realised that we could do better and select only those that actually make it pass our nose and we moved to measure PM10 by placing a "size separator" before the filter so that only particles smaller than 10micron were captured in those filters. Those PM10 measurements showed a relationship with adverse acute health effects (irritation, coughing, asthma attacks) so we moved to regulate PM10\. Then the question was **what about PM10 is causing those effects?** and as the datasets grew, associations with chronic effects were found (increased risks of cancer, heart attack, asthma ... ).

As we moved further figuring out what about particles make us sick we measured the chemical composition (surely, what the particles are made of have an effect), the surface area of the particles (if things are on the surface, they will be in direct contact with our respiratory system), number of particles (as our immune system is "cell" based, maybe the number of particles at some point overwhelms our defences and the effects are more evident) and long story short, all of those relate to health effects in different but significant ways.

So, to your specific question, as the PurpleAir reports PM1, PM2.5 and PM10 it will relate to the "classic" health effects both acute and chronic but the link is not fully understood in a mechanical sense in that we know that our macrophages try to attach particles that make it to the alveoli in our lungs activating our immune response and we also know that small particles can make it through the membranes and end up in our blood stream which _could_ reduce its oxygen carrying capacity but we don't know yet the full mechanism of those responses. This is different from, say, CO that we know binds to the haemoglobin replacing the oxygen in the red blood cells causing asphyxia.

### regulated air quality measurements

This is less complex but not really simple either. The regulatory measurements of particles in the air have to satisfy a number of requirements. First is they need to relate to the regulatory standards so that if you have a standard for PM2.5 then you measure PM2.5\. Depending on where in the world you are, there will be regulations for PM10 and PM2.5\. In some places they are starting to regulate "Ultrafine Particles" number concentration but they're not there yet.

So, as the PurpleAir reports PM1, PM2.5 and PM10, they will be expected to "correlate" with standard measurements. However, remember the **estimate** point from above? well, here is where it gets interesting.

PM10 (and PM2.5) are NOT different pollutants but rather 2 "properties" of the air (all particles smaller than 2.5microns are also smaller than 10microns and therefore PM10\>PM2.5 everywhere, all the time) and, for regulatory purposes, they are very strictly defined.

Their definition comes from the years when we could only capture particles in filters so the "gold standard" for PM10 is a filter based measurement (HiVol if you're interested see [here](https://www.qld.gov.au/environment/pollution/monitoring/air-pollution/samplers)) and anything else is an **estimate**. Some estimates are closely related to the standard and others are more "derivative". For instance, the Beta-Gauges are instruments that capture particles in a tape and have a beam of beta particles going through the tape and measure the absorption of radiation by the captured particles which is directly related to the mass of particles in that filter. Another method is the TEOM (see [here](https://www.qld.gov.au/environment/pollution/monitoring/air-pollution/oscillating-microbalance) for a detailed description) which uses the changes in the oscillation frequency of a filter which is directly related to the mass load.

All the "laser based" particle sensors use scatter. The Plantower sensors claim to be particle "counters" but that is not strictly true as they can't ensure that through the laser beam the particles go "one-by-one" (there are other, much more expensive, instruments that do that but they use a complex airflow to ensure that you only have 1 particle in front of their beam at any time) but what they do is what's called "pulse analysis" to estimate how many particles were there and how big they were. Those much more expensive instruments use that too when the concentrations go so high that they can't ensure they're looking at 1 particle. So, what the Plantower sensors really measure is the continually changing intensity of the scattering of the laser beam but many particles going through its chamber all the time. Then, the really clever part of this sensor is that it takes that changing intensity and "decomposes" it into estimates of what the number of particles of different sizes would be so that they scatter the way they did. That gives the number concentration channels for the Plantower. To get the PM1, PM2.5 and PM10 outputs the sensor does another calculation that involves some guesses about the density of the particles (their composition) and their shape (they're not all spheres!) to calculate the mass of particles of the different sizes.
Now, what does that mean for any given deployment?

It depends, I have found that the Plantower factory calibration does a pretty good job for wood smoke dominated aerosols but not that great for traffic dominated aerosols. At the moment I'm testing their response to "natural" sources (sea salt, dust/sand, etc) as I'm preparing an article reporting on what we've learned about these units.

## What are the pros/cons?

### Pro

Unit price is a BIG pro for this things. A standard instrument that would report similar metrics as the Plantower sensors but is "standard compliant" would set you back at least US$20'000 compared to the ~$20 that you can get them from AliExpress. The added cost for the PurpleAir is the communications part and that's the second big plus of these things. They report data nearly real time and the data is available in an open platform.
Another benefit is that since they're comparatively small, they can be deployed very quickly and almost anywhere you have power and WiFi, allowing for high density and pervasive measurements.

### Cons

The most obvious one is the fact that they require power and WiFi to work so you won't be able to put them _anywhere_ and that can be limiting in some cases because either power or WiFi are not available exactly where you want to put them.
The second issue is less obvious but potentially more serious. As they are now, there is no effort put in them to calibrate/correct them beyond what they came with from the manufacturer and if you don't have any "standard" to compare the instruments against you'll always have questions about how accurate they really are (as I said before, in my experience they compare REALLY well with PM2.5 in woodsmoke dominated places but less so in traffic dominated areas). Also, there is no information (yet) on long-term reliability of these units. We know that optic instruments can deteriorate if the optic elements degrade (lenses getting dirty, photo-sensors ageing) but we don't have information yet of their performance on the field for long enough to quantify that. In my case, I've used PM3003 (a sibling of the PMS5003) for 2 years and haven't seen anything "dramatic" but I'm at the moment going through our data to see if there is anything more subtle that hints to how long can these things be out before needing replacement.

The third point is about "ancillary data". In my case, I ALWAYS put temperature and relative humidity sensors together with the particle ones because they help me understand the measurements. Some sensors (Shinyey, Sharp) do change their response based on ambient conditions but so far I haven't found the Plantowers to suffer from that but again, I'm currently performing some "high humidity" tests to understand whether that has an effect or not.

## Summary

The PurpleAir devices are great (a colleague in British Columbia has one) and they work as advertised but they are not _perfect_ instruments and the low-cost in the device hides the cost of higher accuracy, resolution and reliability.

Reach out if you have more questions/comments and If you want to check out what my group is up to, see:

- [https://www.niwa.co.nz/atmosphere/programme-overview/atmospheric-environment-health-and-society](https://www.niwa.co.nz/atmosphere/programme-overview/atmospheric-environment-health-and-society)
- [https://www.niwa.co.nz/atmosphere/research-projects/CommunityObservationNetworksforAir](https://www.niwa.co.nz/atmosphere/research-projects/CommunityObservationNetworksforAir)
- [https://www.niwa.co.nz/atmosphere/research-projects/pacman](https://www.niwa.co.nz/atmosphere/research-projects/pacman)
- [https://cona-rangiora.blogspot.co.nz/2017/04/are-new-odins-any-good.html](https://cona-rangiora.blogspot.co.nz/2017/04/are-new-odins-any-good.html)