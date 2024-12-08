---
title: Hydrogen Sulfide Detection
tagnames: hydrogen-sulfide, h2s, parent:hydrogen-sulfide, h2s-overview
author: gretchengehrke
path: /wiki/hydrogen-sulfide-detection.md
nid: 15055
uid: 430549

---

# Hydrogen Sulfide Detection

by [gretchengehrke](../profile/gretchengehrke), [warren](../profile/warren)

October 16, 2017 16:14 | Tags: [hydrogen-sulfide](../tag/hydrogen-sulfide), [h2s](../tag/h2s), [parent:hydrogen-sulfide](../tag/parent:hydrogen-sulfide), [h2s-overview](../tag/h2s-overview)

Hydrogen sulfide can be measured a variety of methods due to sulfur’s versatile chemistry. Sulfur has five oxidation states (-2, 0, +2, +4, +6) and readily forms gaseous, aqueous, and solid compounds at room temperature and pressure, which can be effectively manipulated in laboratory settings. Regulatory agencies use multi-phase laboratory-based methods for high sensitivity and selectivity for hydrogen sulfide, but routine workplace monitoring mostly use near-real-time sensors that operate on the basis of a single sulfur reaction. This wiki is an organizing page to list and compare various methods for detecting and measuring hydrogen sulfide, including regulatory, workplace monitoring, and DIY methods. 

## Questions

[questions:hydrogen-sulfide-detection]
****

##Regulatory Methods for Measuring Hydrogen Sulfide
The Occupational Safety and Health Administration (OSHA), which [regulates workplace exposure to hydrogen sulfide](https://publiclab.org/wiki/hydrogen-sulfide-regulations#Occupational+exposure+regulations) uses air grab samples where hydrogen sulfide sorbs onto or reacts with chemicals in the sampling apparatus. Then, in the laboratory, sulfur is released through oxidation, and the sulfate ion that is produced is analyzed through ion chromatography and conductivity measurements. The OSHA standard method for this is [OSHA Method 1008](https://www.osha.gov/dts/sltc/methods/validated/1008/1008.pdf); OSHA’s scientific research counterpart the National Institute for Occupational Safety and Health (NIOSH) uses a similar method, [NIOSH Method 6013](https://www.epa.gov/sites/production/files/2015-07/documents/niosh-6013.pdf). 

The Environmental Protection Agency (EPA) [minimally regulates hydrogen sulfide emissions](https://publiclab.org/wiki/hydrogen-sulfide-regulations#Environmental+regulations). Rather than an air grab sample, the EPA uses several aliquots from in-line sampling. The compounds in the sample stream are separated by gas chromatography, and then the hydrogen sulfide is measured by dimerizing to S2 gas, exciting it, and then monitoring the relaxation emissions at a specific wavelength (394 nm). The EPA has been using this method, [EPA Method 15](https://www.epa.gov/sites/production/files/2016-06/documents/m-15.pdf), for decades. 

A rough comparison of these three regulatory methods is below: 

Method Name | Agency | Sample Type | Analysis | Detection
_ | _ | _ | _ | _ 
Method 1008 | OSHA | grab | IC | > 0.5 ppm 
Method 6013 | NIOSH | grab | IC | 0.6-14 ppm 
Method 15 | EPA | in-line | FPD | > 0.5 ppmv


##Hydrogen Sulfide Workplace Monitoring Methods
Routine workplace monitoring methods for hydrogen sulfide generally have much less information available about them due to the proprietary nature of most equipment. However, most fall into two general categories: colorimetric reactions that can be visually discerned, and electrochemical sensors. 

###Colorimetric Measurements
The Safety Equipment Institute (SEI) is a third-party organization that certifies a variety of testing and protective equipment. [OSHA recommends two instruments for on-site workplace sampling](https://www.osha.gov/dts/chemicalsampling/data/CH_246800.html) that have been SEI certified for hydrogen sulfide measurement (see Gas Detector Tubes under “Products and Standards” at http://www.seinet.org/index.htm. The two tubes recommended are manufactured by Gastec and by Matheson-Kitagawa. The [Gastec hydrogen sulfide detection tubes](https://www.gastec.co.jp/files/user/asset/pdf/en/detector_tube/4LL.pdf) and the [Matheson-Kitagawa hydrogen sulfide detection tubes](https://store.mathesongas.com/content/120SB_1.pdf) operate on the same principle reaction. In each, the hydrogen sulfide reacts with lead acetate coated beads, producing a brown lead sulfide compound (and acetic acid). The tubes change color from white to brown as lead sulfide is formed. Both products’ range from less than 1 ppm to more than 100 ppm, are shelf-stable for 3 years, and cost less than $15 per tube ([$143.00 for a 10-pack of Gastec](https://www.grainger.com/product/GASTEC-Glass-Detector-Tube-3YXW1), [$66.40 for a 10-pack of Matheson-Kitagawa](https://store.mathesongas.com/gas-detector-tubes-hydrogen-sulfide/)).

Another workplace colorimetric hydrogen sulfide monitor is a passive sampler by Morphix Technologies. This [SafeAir(™) passive sampler for hydrogen sulfide](https://www.morphtec.com/file/image/382015-SafeAirH2S-021117.pdf) doesn’t state its underlying chemistry like the Gastec and Matheson-Kitagawa tubes do, unfortunately. The manufacturer’s product information claims there are no known interferences and that the minimum detection limit is 0.25 ppm over 8 hours, and detection range of 0.25 to 2 ppm.  Rather than recording a progressive concentration of hydrogen sulfide, this badge changes color upon reaching a threshold sulfide concentration, so only indicates if the ambient hydrogen sulfide is higher or lower than that threshold value. These badges are very inexpensive, costing $160.65 for a pack of 50. 

A method published by ASTM International (previously the American Society for Testing and Materials), a large international non-profit organization that develops standards and methods, also utilizes the principles of a colorimetric reaction. However, this [ASTM Method D4323](ftp://185.72.26.245/Astm/2/01/Section%2011/ASTM1103/PDF/D4323.pdf) offers substantially more sensitivity, ranging from 1 ppbv to 3000 ppbv, because it measures a difference in reflectivity rather than quantifying a color change: Method D4323 introduces an air sample to a chamber with lead acetate impregnated tape, and measures the change in reflectivity as lead sulfide is formed. The price of this apparatus isn’t readily available, but would require a semi-permanent installment rather than a handheld or easily portable sensor. 

###Electrochemical Measurements 
The other main type of workplace monitoring methods for hydrogen sulfide is using electrochemical sensors. These sensors are significantly more expensive than the visual colorimetric badges and tubes, but are also much more precise. A widely used and well-documented tool for monitoring hydrogen sulfide is the [Jerome sensor](https://www.azic.com/wp-content/uploads/2014/12/700-0037-Jerome-631-X-Hydrogen-Sulfide-Analyzer-Users-Manual.pdf). The Jerome sensor is handheld and offers measurements within 30 seconds of sampling, with a detection range of 3 ppb to 50 ppm. The Jerome sensor monitors the electrical resistance through a gold film inside it. Hydrogen sulfide will react with the gold film to form gold sulfide, which is less conductive than pure gold. The sensor registers that change in resistance, which is related to the proportion of gold sulfide, related to the concentration of hydrogen sulfide in the sampled air. Unfortunately, the Jerome sensor does cost several thousand dollars. They can be rented for $100 per day (or better rates for a week or month) [from a company called Peterson Environmental](http://www.petersonenvironmental.com/mercury-vapor-analyzer-431x-pricing.html). 

Other companies sell electrochemical hydrogen sulfide sensors other than the Jerome sensor, but most do not provide adequate information to describe how the sensor works, so we have not included them in this discussion. 

Information about other types of devices for monitoring hydrogen sulfide can be found on pages 33-34 (39-40 of pdf) of this EPA document: [https://nepis.epa.gov/Adobe/PDF/P100NG53.pdf](https://nepis.epa.gov/Adobe/PDF/P100NG53.pdf).  

##Do-It-Yourself Methods 
Hydrogen sulfide is often a concern in areas near oil and gas fields, concentrated animal feeding operations, sewage treatment plants, paper mills, landfills, and elsewhere. Due to negative effects of hydrogen sulfide, ranging from a significant nuisance odor to having lethal consequences, many people are interested in inexpensive ways to monitor hydrogen sulfide concentrations in ambient air. In Public Lab, community members have worked on developing a variety of more affordable methods to monitor hydrogen sulfide, two with field deployments of at least a week, and one with an air grab-sample with laboratory analysis. 

###Field Deployment Methods 
Hydrogen sulfide is highly corrosive due to sulfur’s unique chemistry. Two methods people have been working to develop utilize this corrosiveness by monitoring discoloration due to the formation of a metal-sulfide complex. In these methods, the sampling materials are deployed for at least a week, during which time hydrogen sulfide in the air reacts with the sampling material (copper or silver halide photo paper, depending on the method). The samples are then assessed for their discoloration, related to the concentration of sulfide in the air. 

####Copper Sheet Method 
The [copper sheet method](https://publiclab.org/wiki/hydrogen-sulfide-copper-pipe) is an inexpensive, highly accessible way to monitor hydrogen sulfide in ambient air. The method involves exposing a clean copper sheet to air, and assessing the extent of black copper sulfide that forms on the surface of the copper. Currently, the rates of reaction between hydrogen sulfide and the copper, the influence of other chemicals such as oxygen and sulfur dioxide, and detection limits of the method are not yet known. Please see the wiki for more information and for information about how you can get involved in helping to further develop this method! 

####Photo Paper Method 
The [silver halide photo paper method](https://publiclab.org/wiki/hydrogen-sulfide-sensor) operates by a similar principle, that the silver chloride will react with the hydrogen sulfide in air to form a brown silver sulfide. In this method, photo paper is prepared in a DIY dark room, placed in light-tight containers, and then deployed in the field, with the containers shielding the photo paper from light but offering free exchange with air. After a week, or a month, the containers are recovered, sealed, the photo paper fixed in a dark room, and then assessed for the extent of brown silver halide that has developed. Currently, work is being conducted to determine reaction rates between the photo paper and sulfur-based corrosive compounds including hydrogen sulfide. Please see the wiki for more information and to find out ways to get involved! 

###Laboratory Methods 
####Anodic Stripping Voltammetry
Many airborne chemical measurements are made by collecting a “grab sample” (please see [here](https://publiclab.org/wiki/start-enviro-monitor-study#Types+of+Samples) for more information about different types of sampling) and then analyzing that sample in the laboratory. One laboratory method in development for analyzing hydrogen sulfide at relatively low cost is through anodic strippingn voltammetry (ASV) using a [DIY potentiostat](https://publiclab.org/wiki/potentiostat). The [low-cost ASV method for hydrogen sulfide determination](https://publiclab.org/notes/JSummers/03-10-2014/quantifying-airborne-hydrogen-sulfide) involves introducing air into a copper solution and monitoring the cupric oxide formed, returning the solution, and then introducing hydrogen sulfide into the system and comparing the cuprous oxide (Cu2O) and the cuprous sulfide (Cu2S) that form. This method is still in development with key questions remaining about the quantitative relationship between hydrogen sulfide concentration in air and cuprous sulfide formation, validation with likely interferences, and laboratory safety in terms of generating hydrogen sulfide with non-toxic and non-flammable precursors. Development is currently on pause with the primary method developers, but it would be *wonderful* if YOU wanted to get involved and take this method to the next step! 
