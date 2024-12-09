---
title: 'Silica'
tagnames: particulate-sensing, sand, air-quality, fracking, silica, frac-sand
author: mathew
path: /wiki/silica.md
nid: 10317
uid: 4

---

# Silica

by [mathew](../profile/mathew)

April 16, 2014 01:02 | Tags: [particulate-sensing](../tag/particulate-sensing), [sand](../tag/sand), [air-quality](../tag/air-quality), [fracking](../tag/fracking), [silica](../tag/silica), [frac-sand](../tag/frac-sand)

----

_this page is outdated, please see [Silica Monitoring](/wiki/silica-monitoring)._

##the concern
This subsection and its citations are derived from L. J. Bhagia's Non-occupational exposure to silica dust, Indian Journal of Occupational & Environmental Medicine 2012 Sep-Dec; 16(3): 95–100, [available through the NIH](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3683189/)

Silica is a ubiquitous mineral-- most sand is silica-- found in abundance almost everywhere.  It has long been known to cause respiratory problems when people are exposed to large quantities, and industrial sources of silica pollution are particularly problematic, and yet not well understood outside of the study of occupational health.

Most industrial silica is in the form of the crystal quartz. Freshly crushed quartz particles are sharper and more dangerous than aged quartz [[1](http://ofmpub.epa.gov/eims/eimscomm.getfile?p_download_id=4608),2,3].  The most dangerous particles are those smaller than 5μm in diameter, and while quartz is tough and hard to break into sizes smaller than 10μm, industrial processes can produce an abundance of sub 5μm particles [4,5].

##Silica Sites of Concern: Frac Sand
We're interested in [monitoring particles](/wiki/particle-sensing) of silica, especially around sand mining operations, which have increased to support the fracking industry, a program [supported by the 11th Hour Project](/notes/Shannon/02-18-2014/public-lab-receives-support-from-the-11th-hour-project-for-a-silica-monitoring-pilot-program).  You can follow and join in the latest research at Public Lab [here](/tag/silica).

Wisconsin is the source of most frac sand, and new mines are opening rapidly. Political pressure has increased the Wisconsin Department of Natural Resources to step up efforts at monitoring particulate matter.  Monitoring stations have increased from zero monitors in 2011 [[6](http://dnr.wi.gov/files/PDF/pubs/am/AM407.pdf)] to 13 industrial monitors in 2014, many provided by the industry in question [[7](http://www.wisconsinwatch.org/2013/10/06/frac-sand-health-fears-rise-as-mining-booms-in-wisconsin/)].  Currently only this DNR program and [Dr. Crispin Pierce’s team](http://www.uwec.edu/Watershed/enph/silica) at the University of Wisconsin Eau Claire are monitoring silica PM [[8](“Silica Research” UW Eau Claire. http://www.uwec.edu/Watershed/enph/silica &  http://people.uwec.edu/piercech/InitialPM.pdf)].  Dr. Pierce’s team uses both real-time monitoring equipment that costs several thousand dollars and laboratory tests by the Wisconsin State Lab of Hygiene. While laudable, the scale and range of PM sources make it unlikely that these efforts will produce representative PM data for either the complex exposure dynamics around individual mining sites, let alone over the more than 100 frac sand mining sites in Wisconsin. 

##Monitoring Challenges
Measuring industrial silica contamination is difficult, because silica particles would have to be distinguished from other particles, and categorized by size to find the dangerous particles (≤5 μg).  As the EPA says:
"Ambient levels are not well quantified for crystalline silica, principally because existing measurement methods, although capable of distinguishing crystalline silica (e.g., X-ray diffraction), were not designed to deal with the large amounts of nonsilica particles in ambient air." [[EPA 1-2, ](http://ofmpub.epa.gov/eims/eimscomm.getfile?p_download_id=4608))]

Distinguishing the sources of industrial silica from natural sources of silica, other particulates, and tracing them to their point of origin will be difficult.  Complicating this, we can expect three major sources of silica dust from frac sand mining-- dust from excavating and crushing sand, dust from excavation vehicles on unpaved work sites, and dust from work vehicles on paved worksites (EPA 3-3), largely derived from unpaved areas (EPA 3-7). Sand laid for traction on winter ice may account for some roadway emissions (EPA 3-8), and there may also be a minor contribution from silicate ceramics in brake pads of trucks (EPA 3-7).

##Monitoring Strategies

###Linking PM10 to local geology
The EPA's suggested strategy is to use an algorithm to link PM10 measurements (all particles roughly 10μg in diameter or less) to site-specific conditions such as the % silica measured using other tests.  

Some [particulate sensors](/wiki/particle-sensing) could do the PM10 measurements, but characterizing background dust sounds like a hard thing to do and not very diffinitive. Also, The EPA in the very same paper indicates that PM10 cannot be easily correlated to the parent source, because the fracturing of quartz can differ from other constituent minerals, and by the process involved (3-26).

Site specific conditions would most likely be determined through lab testing of filter media from respirable dust cyclones using X-ray diffraction to the NIOSH Method 7500 [EPA, Appendix 1-A].  But that method looks inherently expensive, involving turning the filter into a plasma and driving it through silver filter membranes, and then, of course, come X-rays.

### Polarized Microscopy
Quartz particles are easily identifiable through counting them on a microscope through a polarized filter [EPA ,Appendix 1-A].  This is a manual method, but this seems very promising as something automatable using machine vision, potentially coupled with [sticky pads.](/wiki/particle-sensing)

###Infrared 
Need to look here:
Pandurangi, R. S.; Seehra, M. S.; Razzaboni, B. L.; Bolsaitis, P. (1990) Surface and bulk infrared modes of crystalline and amorphous silica particles: a study of the relation of surface structure to cytotoxicity of respirable silica. Environ. Health Perspect. 86: 327-336.

####Citations

1. U. S. Environmental Protection Agency. [Ambient levels and noncancer health effects of inhaled crystalline and Amorphous silica: Health issue assessment.](http://ofmpub.epa.gov/eims/eimscomm.getfile?p_download_id=4608) Triangle Park: US EPA; 1996. EPA/600/R-95/115: Chapter 1.

2. Vallyathan V. Generation of oxygen radicals by minerals and its correlation to cytotoxicity. Environ Health Perspect. 1994;102(Suppl 10):111–5. [PMC free article] [PubMed]

3. Vallyathan V, Shi XL, Dalal NS, Irr W, Castrinova V. Generation of free radicals from freshly fractured silica dust. Potential role in acute silica-induced lung injury. Am Rev Respir Dis. 1988;138:1213–9. [PubMed]

4. Bhagia LJ, Parikh DJ, Saiyed HN. Ambient silica monitoring in vicinity of agate industry, Khambhat, India. Indian J Occup Hyg Safety. 2007;1:6–10.

5. Bhagia LJ, Sadhu HG, Parikh DJ, Karnik AB, Saiyed HN. Prevention, Control and Treatment of Silicosis and Silico-Tuberculosis in Agate Industry Report submitted by National Institute of Occupational Health, Ahmedabad to Indian Council of Medical Research and the Ministry of Health and Family welfare, Government of India. 2004

6. Page 2, [“Report to the Natural Resources Board: Silica Study”.  2011: Wisconsin DNR, AM-40.](http://dnr.wi.gov/files/PDF/pubs/am/AM407.pdf)

7.  “Frac sand health fears rise as mining booms in Wisconsin.” October 06, 2013: Wisconsin Center for Investigative Journalism. http://www.wisconsinwatch.org/2013/10/06/frac-sand-health-fears-rise-as-mining-booms-in-wisconsin/

8. “Silica Research” UW Eau Claire. http://www.uwec.edu/Watershed/enph/silica &  http://people.uwec.edu/piercech/InitialPM.pdf

9. Pandurangi, R. S.; Seehra, M. S.; Razzaboni, B. L.; Bolsaitis, P. (1990) Surface and bulk infrared modes of crystalline and amorphous silica particles: a study of the relation of surface structure to cytotoxicity of respirable silica. Environ. Health Perspect. 86: 327-336.