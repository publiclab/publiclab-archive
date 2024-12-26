---
title: "Low-cost passive aerosol monitors"\ntagnames: 'air-quality, dust, particulates, silica, frac-sand, pm, particle-sensing, particle-monitoring, fracsand, passive-particle-monitors, passive-pm, parent:frac-sand'
author: mathew
path: /notes/mathew/08-21-2014/low-cost-passive-aerosol-monitors.md
nid: 11071
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/006/376/original/Screen_Shot_2014-08-21_at_12.10.22_PM.png)

# Low-cost passive aerosol monitors

by [mathew](../profile/mathew) | August 21, 2014 23:33

August 21, 2014 23:33 | Tags: [air-quality](../tag/air-quality), [dust](../tag/dust), [particulates](../tag/particulates), [silica](../tag/silica), [frac-sand](../tag/frac-sand), [pm](../tag/pm), [particle-sensing](../tag/particle-sensing), [particle-monitoring](../tag/particle-monitoring), [fracsand](../tag/fracsand), [passive-particle-monitors](../tag/passive-particle-monitors), [passive-pm](../tag/passive-pm), [parent:frac-sand](../tag/parent:frac-sand)

----

###What I want to do
Summarize the literature on low-cost passive particle monitors tha can produce data expressible as concentrations by air volume, the kind of [data required to take action by the EPA](/wiki/particle-sensing).

I was pointed to these low-cost monitors by [Tom Peters](//www.public-health.uiowa.edu/people/thomas-peters/) of the University of Iowa, whose team worked on developing and characterizing such monitors in the late 2000's.  The original design can be traced to Jeff Wagner's PhD research at the University of North Carolina Chapel Hill.  Jeff now works with the [RJ Lee Group](//www.rjlg.com/expertise/particle-characterization/) on monitoring using this method.

My main interests are two-fold-- the design and cost of the sampler, and its correspondence with dichotomous samplers that use active pumps and filters and are certified as a [Federal Reference Method (FRM)](/wiki/particle-sensing)

##The Passive Sampler
This sampler is attractive for several reasons; its cheap, it works out doors, its been correlated with FRM methods, and has the option of either using Scanning Electron Microscopy for particle speciation (identification) or a less expensive visual light microscopy and automated analysis in ImageJ for particle size determination [7]


####The original design  
[Via [9]](//www.epa.gov/ttnamti1/files/2009conference/Watkins.pdf#page=2&zoom=auto,41,20):

[![Screen_Shot_2014-08-21_at_1.59.43_PM.png](https://i.publiclab.org/system/images/photos/000/006/372/medium/Screen_Shot_2014-08-21_at_1.59.43_PM.png)](https://i.publiclab.org/system/images/photos/000/006/372/original/Screen_Shot_2014-08-21_at_1.59.43_PM.png)


[![Screen_Shot_2014-08-21_at_1.59.34_PM.png](https://i.publiclab.org/system/images/photos/000/006/371/medium/Screen_Shot_2014-08-21_at_1.59.34_PM.png)](https://i.publiclab.org/system/images/photos/000/006/371/original/Screen_Shot_2014-08-21_at_1.59.34_PM.png)


From [2]:
[![Screen_Shot_2014-08-21_at_12.10.22_PM.png](https://i.publiclab.org/system/images/photos/000/006/365/medium/Screen_Shot_2014-08-21_at_12.10.22_PM.png)](https://i.publiclab.org/system/images/photos/000/006/365/original/Screen_Shot_2014-08-21_at_12.10.22_PM.png)

The mesh is stainless steel, with a conical section "160µm (top diameter) and 225µm (bottom diameter) has been selected for general use (Buckbee-Mears, St. Paul, Inc.) However, a range of mesh sizes is commercially available and can be selected with respect to the sampling application." [188, 3]

The collection area is 1.2 mm deep and 6.8 mm in diameter, with a "smooth aluminum tape" for the collection surface, no more detail is specified [196, 4].  It appears to just be a metal surface, without adhesive, so while based on passive deposition it is not a [sticky pad](/notes/mathew/06-05-2014/the-development-of-stickypad-monitoring).  As later tests involved a "carbon tab" "sputter coated" with gold [[634, 5]](//www.unc.edu/courses/2006spring/envr/116l/001/AIHAJ%2064%20630-639%20%282003%29%20Wagner%20and%20Macher.pdf).  Ott, Cyrs, and Peters used "A 12-mm-diameter cover glass (Catalog #12-545-80, Fisher Scientific, Pittsburgh, PA)" cleaned with "antistatic laboratory wipes (Model #34155, Kimberly Clark, Dallas, TX)" as their collection substrate, "held within 1 cm above a polonium-210 strip (Catalog #1U200, Amstat Industries, Glenview, IL) to neutralize any static charge." [157, 7].

In wind tunnel tests up to 5m/s, relative humidity and wind speed did not substantially effect measurements in a way that cannot be corrected, however windspeed data was needed. In relation to the impactor tests, the passive monitor was determined to have 18.1% variation for PM2.5 and 32.2% variation for PM10 [200, 4].  All tests on the passive samplers were done with Scanning Electron Microscopy (SEM).

[![Screen_Shot_2014-08-21_at_12.41.29_PM.png](https://i.publiclab.org/system/images/photos/000/006/367/medium/Screen_Shot_2014-08-21_at_12.41.29_PM.png)](https://i.publiclab.org/system/images/photos/000/006/367/original/Screen_Shot_2014-08-21_at_12.41.29_PM.png)

deposition [3]
[![Screen_Shot_2014-08-21_at_12.20.43_PM.png](https://i.publiclab.org/system/images/photos/000/006/366/medium/Screen_Shot_2014-08-21_at_12.20.43_PM.png)](https://i.publiclab.org/system/images/photos/000/006/366/original/Screen_Shot_2014-08-21_at_12.20.43_PM.png)

Early testing by Wagner, et al. demonstrated that there was a high correlation between results from the passive sampler and impactor sampling in indoor environments [2, 4]. The wind tunnel used is described in [4].  Windy environments would require wind speed measurements to correct against.

####Enclosures for outdoor operation

Thomas Peters and his team were interested in using passive monitors for outdoor testing that would obviate the need for wind speed data. They developed a housing [[6]](//www.tandfonline.com/doi/pdf/10.1080/02786820802054236) and rigorously tested it in relation to optical and filter-based dichotomous samplers in wind tunnels and field tests [6, 7, 8].

six different housings were tested in wind tunnels before field verification. From [[6]:](//www.tandfonline.com/doi/pdf/10.1080/02786820802054236)
[![Screen_Shot_2014-08-21_at_3.15.30_PM.png](https://i.publiclab.org/system/images/photos/000/006/373/medium/Screen_Shot_2014-08-21_at_3.15.30_PM.png)](https://i.publiclab.org/system/images/photos/000/006/373/original/Screen_Shot_2014-08-21_at_3.15.30_PM.png)

Design A, the flat plates, had the best performance.

[![Screen_Shot_2014-08-21_at_3.22.10_PM.png](https://i.publiclab.org/system/images/photos/000/006/374/medium/Screen_Shot_2014-08-21_at_3.22.10_PM.png)](https://i.publiclab.org/system/images/photos/000/006/374/original/Screen_Shot_2014-08-21_at_3.22.10_PM.png)

Wagner adapted a version of this flat plate system [10]:

[![Screen_Shot_2014-08-21_at_4.01.31_PM.png](https://i.publiclab.org/system/images/photos/000/006/375/medium/Screen_Shot_2014-08-21_at_4.01.31_PM.png)](https://i.publiclab.org/system/images/photos/000/006/375/original/Screen_Shot_2014-08-21_at_4.01.31_PM.png)



##Correspondence with Dichotomous sampler data
From [7] "The coefficient of variation (CV) of PM10.2.5 measured with collocated passive samplers was 20.1% in laboratory tests and 11.6% in field tests." [156, 7]  However, "The somewhat worse precision identified in laboratory tests (20%) was attributed to spatial heterogeneity of particles in the test section of the wind tunnel. Thus, precision measured in the field tests is probably a better estimate of method precision than that measured in the laboratory. " [166, 7]  Improved results vs wind tunnel tests in [4] are attributed to an order of magnitude increate in partcle count (100 to 1300 per sample), aided by automated analysis.

Sampling was biased positive for PM2.5 in relation to dichotomous samplers, but the 28.8% CV is systematically biased, and may be a result of the particle density calculations.  Scanning Elctron Microscopy may improve the results and move the passive samples within the acceptability criterion of the EPA... 

"The data quality objective of the U.S. EPA for the operational precision of PM2.5 monitoring is a CV of 10% or lower (Protection of Environment, 2006, 40 CFR Part 58 Appendix A). Our study shows that 39% of the data pairs for PM2.5 and 36% of the data pairs for PM10-2.5 meet this objective. Precision improves as concentration increases; the percentage of pairs that meet the EPA objective increases to 52% for PM2.5 concentrations greater than 5 µg/m3, and to 40% for PM10-2.5 concentrations greater than 20 µg/m3. Further, 74% of PM2.5 concentrations greater than 5 µg/m3 and 60% of PM10-2.5 concentrations greater than 20 µg/m3 meet the less restrictive CV objective of 15% or lower as specified by the U.S. EPA for measurement uncertainty of PM10-2.5." [12]

###Bibliography

1. Wagner, Jeff. Passive Aerosol Sampling. PhD Thesis. UNC Chapel Hill (2000).

2. Jeff Wagner and David Leith. Field tests of a passive aerosol sampler Aerosol Science 32  33-48 (2001)

3. Jeff Wagner and David Leith. Passive Aerosol Sampler. Part I: Principle of Operation. Aerosol Science and Technology 34: 186– 192 (2001)

4. Jeff Wagner and David Leith. Passive Aerosol Sampler. Part II: Wind Tunnel Experiments. Aerosol Science and Technology 34: 193– 201 (2001)

5. [Jeff Wagner and Janet M. Macher. Comparison of a Passive Aerosol Sampler to Size-Selective Pump Samplers in Indoor Environments. AIHA Journal 64 630–639 (2003)](//www.unc.edu/courses/2006spring/envr/116l/001/AIHAJ%2064%20630-639%20%282003%29%20Wagner%20and%20Macher.pdf)

6. [Darrin K. Ott & Thomas M. Peters. A Shelter to Protect a Passive Sampler for Coarse Particulate Matter, PM10 - 2.5. Aerosol Science and Technology 42:4, 299-309 (2008)](//www.tandfonline.com/doi/pdf/10.1080/02786820802054236)

7. Darrin K. Ott, William Cyrs, Thomas M. Peters. Passive measurement of coarse particulate matter, PM10-2.5. Aerosol Science 39 156 – 167 (2008)

8. Darrin K. Ott, Naresh Kumar, Thomas M. Peters. Passive sampling to capture spatial variability in PM10–2.5. Atmospheric Environment 42  746–756 (2008)

9. [R Willis, G Norris, T Watkins, E Sawvel, D Boysen, N Kumar, T Peters, G Casuccio. Characterization of Coarse PM Using Passive Samplers. National Ambient Air Monitoring Conference (2009)](//www.epa.gov/ttnamti1/files/2009conference/Watkins.pdf#page=2&zoom=auto,41,20)

10. Jeff Wagner, Kinnery Naik-Patel, Stephen Wall, Martha Harnly. Measurement of ambient particulate matter concentrations and particle types near agricultural burns using electron microscopy and passive samplers. Atmospheric Environment 54 260-271 (2012)

11. Peters, Grassian et al. Single-Particle SEM-EDX Analysis of Iron-Containing Coarse Particulate Matter in an Urban Environment: Sources and Distribution of Iron within Cleveland, Ohio. Environmental Science and Technology 46 4331−4339 (2012)

12. Maiko Arashiro and David Leith. Precision of PM measurements with the UNC passive aerosol sampler. Journal of Aerosol Science 57 181–184 (2013)

13. Jeff Wagner and Gary Casuccio. Spectral imaging and passive sampling to investigate particle sources in urban desert regions.  Environmental Science: Processes & Impacts 16 1745 (2014)