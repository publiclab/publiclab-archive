---
title: "Potentiostat"\ntagnames: 'potentiostat, cheapstat, water, tool, list:plots-waterquality, method, chemicals, location:blurred, zoom:3, lat:-20, lon:-40, place:brazil'
author: donblair
path: /wiki/potentiostat.md
nid: 7466
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/010/439/original/DSCN0874.JPG)

# Potentiostat

by [dwheeler](../profile/dwheeler), [liz](../profile/liz), [warren](../profile/warren), [JSummers](../profile/JSummers), [mathew](../profile/mathew), [donblair](../profile/donblair), [cversek](../profile/cversek)

May 12, 2013 18:13 | Tags: [potentiostat](../tag/potentiostat), [cheapstat](../tag/cheapstat), [water](../tag/water), [tool](../tag/tool), [list:plots-waterquality](../tag/list:plots-waterquality), [method](../tag/method), [chemicals](../tag/chemicals), [location:blurred](../tag/location:blurred), [zoom:3](../tag/zoom:3), [lat:-20](../tag/lat:-20), [lon:-40](../tag/lon:-40), [place:brazil](../tag/place:brazil)

----

_For measuring electrochemically active compounds and microbes in water._

[![potentiostat_cell.png](https://i.publiclab.org/system/images/photos/000/001/407/medium/potentiostat_cell.png)](https://i.publiclab.org/system/images/photos/000/001/407/original/potentiostat_cell.png)

### Join the Discussion
on the [Public Lab water quality list](https://groups.google.com/forum/#!forum/plots-waterquality)

### Background

**Links to other Public Lab Electrochemistry wiki's / research notes**

The design, construction, and operation of a low cost, open-source potentiostat (the WheeStat) has been described in a number of Public Lab wikis and research notes.  Links to some of these pages are provided here:
WheeStat user's [manual](http://publiclab.org/wiki/wheestat-user-s-manual).
A wiki describing how to determine metal ion concentrations [electrochemically]((http://publiclab.org/wiki/detection-of-metals-in-water-with-the-wheestat).
A site where you can purchase a WheeStat kit from [Public Lab](http://store.publiclab.org/collections/new-kits/products/wheestat-potentiostat).
Instructions for assembling the WheeStat [kit](http://publiclab.org/notes/JSummers/08-07-2014/wheestat-kit-assembly).
Making / purchasing low cost [electrodes](http://publiclab.org/notes/JSummers/01-09-2014/potentiostat-notes-5-how-to-make-low-cost-electrodes).


**Potentiostats** can be used to test for electrochemically active compounds and microbes in solution, and thus have applications in many areas such as environmental monitoring, food and drug testing.  Most commercially-available potentiostats are very expensive ($1000 is on the “cheap” side). There have been several initiatives in the last decade that have focused on designing cheaper alternatives; and when investigating technologies related to water quality assessment.  Our aim here is to build on these efforts, and leverage the expertise of the open hardware community in order to build accessible, and capable, devices. Possible applications include: 

- **Tracking heavy metal concentrations in waterways.** Various industrial processes used in the US and abroad can lead to the contamination of water with heavy metals that are dangerous to humans, like mercury and arsenic. An inexpensive, battery-powered potentiostat -- communicating over the cellular network, perhaps, or merely recording locally to an SD card -- might be able to track relative fluctuations in the concentrations of these metals, making monitoring these contaminants easier. 
**Limitations of electrochemical techniques:**  In order to detect and quantify a chemical species by electrochemical methods, that species has to undergo electron transfer at a voltage that is accessible under the solution conditions being employed.  One major limitation to measuring metal species in water is due to oxidation / reductions of water itself.   The oxidation of water (to give O2 and H+) limits how positive the voltage can be applied in water.  Similarly, reduction to H2 and OH- limits how negative the voltage can be.  The voltage limits will depend on things like the choice of electrode used and the pH of the solution.  Still, there are a number of metals that can be quantified in water.  Mendham, et al,  (p 564, referenced below) list the following fifteen specific metals as having been determined by voltammetry:
     - antimony        arsenic         bismuth         cadmium         copper         gallium    
     - germanium         gold         indium         lead         mercury          silver     
     - thallium         tin         zinc

- **A low-cost ‘field lab’ for evaluating water samples.** An inexpensive potentiostat, when used according to the proper protocols, might be used to indicate absolute concentrations of heavy metals in water. This could allow citizens and organizations who can’t afford to send water samples to an expensive, bonded laboratory to do their own testing -- particularly relevant in a developing-world context.

- **Education.** Electrochemistry is an important part of many high school, college, and graduate chemistry curricula; an inexpensive potentiostat could render these curricula more accessible to educational institutions that don’t have the budget for the more expensive commercial versions.

- **Research.** Making an easily-hackable, programmable, and extensible potentiostat platform, based on a widely-used and well-supported technologies like the Arduino and the Raspberry Pi, could allow for novel electrochemistry applications in the laboratory; when a device that once cost $2000 and didn’t “play nice” with other hardware and software suddenly becomes available for under $200, and can be integrated with easy-to-use, open source software and hardware, researchers will dream up new approaches to open research problems -- and higher-throughput approaches in already-established research areas.

### Details
Typically, electrochemical experiments utilize three electrodes, the Working Electrode (WE), Reference Electrode (RE) and Counter Electrode (CE).  A research note reviewing some electrodes and describing how to build a set for little cash is provided [here](http://publiclab.org/notes/JSummers/01-09-2014/potentiostat-notes-5-how-to-make-low-cost-electrodes).  A **potentiostat** is a three terminal analog feedback control circuit that maintains a pre-determined voltage between the WE and RE by sourcing current from the CE.  A rough schematic for a potentiostat is provided below:
[![adder_potentiostat.png](https://i.publiclab.org/system/images/photos/000/001/406/medium/adder_potentiostat.png)](https://i.publiclab.org/system/images/photos/000/001/406/original/adder_potentiostat.png)
   The CE and WE are made of electrochemically inert conductive materials (we are using graphite, like from pencils, but platinum and gold are popular).   The RE is designed to have a well-defined and stable electrochemical potential.   By hooking up a power source the energy of electrons in the working electrode can raised and lowered with respect to the reference (and also with respect to compounds in solution).  When the energies of electrons in the WE are high enough, they can transfer onto certain chemical species,  reducing them.  For example, Cu2+ ions can be reduced to Cu+ ions, or to copper metal.  Alternatively, when the voltage of the WE is sufficiently positive it can pull electrons off of certain chemicals, oxidizing them.  The opposite of the above reactions can be used as an example; Cu+ ion can be oxidized to Cu2+ ion - the voltages (w.r.t. the RE) and currents at which reductions and oxidations happen can be measured, revealing information about the energies and concentrations of the analytes. 
[![potentiostat_cell.png](https://i.publiclab.org/system/images/photos/000/001/407/medium/potentiostat_cell.png)](https://i.publiclab.org/system/images/photos/000/001/407/original/potentiostat_cell.png)

The above "Adder Potentiostat" schematic was adapted from chapter 15 of Electrochemical Methods by Bard and Faulkner (reference below).



### Work updates

- **8/5/2013**:  Craig Versek of PVOS has been building off a fully-fledged, open potentiostat design by Jack Summers.  Craig is aiming to implement programmable current ranges.    In this design, a CMOS analog multiplexer will switch out one of 5 standard current sense resistors (with room for 8 total), which are trimmer rheostats tuned to 250, 2.5k 25.0k 250k and 2.50M Ohms well within 0.5% margin of error. 
- **1/8/2014**:  Smoky Mountain Scientific (Ben Hickman and Jack Summers' lab group) have published research notes describing an open source potentiostat they call the WheeStat.  The history of the WheeStat program is described [here](http://publiclab.org/notes/JSummers/11-02-2013/potentiostat-notes-1-wheestat-history).  The WheeStat software is described [here](http://publiclab.org/notes/JSummers/12-20-2013/potentiostat-software) and is available for download [here](https://github.com/SmokyMountainScientific/WheeStat5_0).  A description of fabricating the board is provided [here](http://publiclab.org/notes/JSummers/12-30-2013/potentiostat-notes-3-wheestat-5-1-fabrication) and copies of the board can be ordered from [OSHPark.com](http://oshpark.com/shared_projects/yepeXPFo).


### Uses

- Assess arsenic, cyanide, other contaminants / toxins in water
- Educational
- Identifying toxins / ingredients in foodstuffs

### Development

- [olm-pstat](https://github.com/p-v-o-s/olm-pstat) - repository for the PLOTS/[PVOS](http://www.pvos.org/) Open Lab Monitor potentiostat peripheral

### References

- [CheapStat](https://doi.org/10.1371/journal.pone.0023783)
- [Cornell U Potentiostat](http://people.ece.cornell.edu/land/courses/ece4760/)
- [Potentiostat Software on Github](https://github.com/p-v-o-s/olm-pstat)
- Gopinath, A. V., and Russell, D., "An Inexpensive Field Portable Programmable Potentiostat", Chem Educator, 2006. pp 23-28.
- Inamdar, S. N., Bhat, M. A., Haram, S. K., "Construction of Ag/AgCl Reference Electrode from Used Felt-Tipped Pen Barrel for Undergraduate Laboratory", J. Chem. Ed., 2009, 86, 355.
- Mendham, J., Denney, R. C., Barnes, J. D., Thomas, M. J. K., Vogel's textbook of Quantitative Chemical Analysis, 6th ed., 2000, Prentice Hall, Harlow, England
- Bard, Allen J., and Faulkner, Larry R. Electrochemical Instrumentation. Electrochemical Methods: Fundamentals and Applications, 2nd ed. John Wiley & Sons, Inc., 2001. pp. 632-658
- Nice wikipedia description of what a potentiostat is [here](http://en.wikipedia.org/wiki/Potentiostat).
- A basic description of potentiostat architectures can be found at http://www.consultrsr.com/resources/pstats/design.htm
- Yee, S., Chang, O. K., "A Simple Junction for Reference Electrodes", J. Chem. Ed., 1988, 65, 129
- Thanks to Jack Summers,  Benjamin Hickman, Craig Versek, Ian Walls, Jake Wheeler, and Todd Crosby

<a href="https://i.publiclab.org/system/images/photos/000/001/409/original/OHS2013_potentiostat_poster.svg"><i class="icon icon-file"></i> OHS2013_potentiostat_poster.svg</a>


<a href="https://i.publiclab.org/system/images/photos/000/001/410/original/OHS2013_potentiostat_poster.pdf"><i class="icon icon-file"></i> OHS2013_potentiostat_poster.pdf</a>