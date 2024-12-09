---
title: DIY Indoor Air Quality Remediation
tagnames: remediation, air-quality, air, prototype, bacteria, indoor, wherewebreathe, first-time-poster, plant-air-purifier-prototypes
author: nshapiro
path: /notes/nshapiro/10-20-2014/diy-indoor-air-quality-remediation.md
nid: 11282
uid: 380298

---

![](https://publiclab.org/public/system/images/photos/000/007/560/original/photo_1.JPG)

# DIY Indoor Air Quality Remediation

by [nshapiro](../profile/nshapiro) October 20, 2014 23:44

October 20, 2014 23:44 | Tags: [remediation](../tag/remediation), [air-quality](../tag/air-quality), [air](../tag/air), [prototype](../tag/prototype), [bacteria](../tag/bacteria), [indoor](../tag/indoor), [wherewebreathe](../tag/wherewebreathe), [first-time-poster](../tag/first-time-poster), [plant-air-purifier-prototypes](../tag/plant-air-purifier-prototypes)

----

Indoor air is routinely more polluted than the air of corresponding outdoor environments. This is partly because polluted outdoor air seeps inside, but the major contributors to poor indoor air quality are often the construction materials of the built environment itself, which slowly off-gas a host of volatile organic compounds.

What I want to do is start a design conversation about how to best remediate contaminated indoor atmospheres in the ongoing present while we work towards reducing the source of domestic chemical contaminants in the future. This work is taking place within Public Lab’s Where We Breathe project, which will be launched in the near future. 


###Background 

Domestic chemical ecologies have both many toxicant sources and many toxicant sinks. I’m going to focus on formaldehyde because it is the most common and also most toxicologically understood indoor air pollutant. Formaldehyde slowly and silently off gasses from engineered woods, carpets, and permanent press clothing. Some of these silent emissions waft out open windows. Others are absorbed by human bodies or the bodies of companion species. Others still are metabolized by decorative indoor plants and the microbes that inhabit their roots. Rather than begin this conversation with the introduction of a mechanical air filter I think it would be useful to think about how the formaldehyde sinks that already exist within domestic chemical ecologies can be elaborated in order to scrub toxins from the air. 

[Dr. Bill Wolverton](http://www.wolvertonenvironmental.com/air.htm) has been working on these issues for several decades and inspired much of the research to this end in North America and Asia. His research, first at NASA and later as an independent consultant, demonstrates that common houseplants bear the capacity to metabolize a broad array of indoor pollutants. Without an impeller of some sort, the shortcoming of houseplants is that their toxicant scrubbing potential is limited to air that intermingles with their leaves, roots, potting medium and microbes in their rhizosphere. Meaning that we would need to have plants in biodome-like proportions in order for our indoor air to be continually cleaned. Dr. Wolverton’s solution to this diffusion limitation is to place a fan in the base of a plant pot to pull air down across the plant and the bacteria that thrives among its root system. This simple addition, Dr. Wolverton states, can increase a plant’s remediation capacity by 100 times.  His work has been commercialized and a $229 dollar [Plant Air Purifier](http://www.plantairpurifier.com/) is available in the US.  The makers of another phytoremediation kit, [Andrea](http://www.amazon.com/ss/customer-reviews/B002P8NZ1Q/ref=cm_cr_dp_see_all_btm?_encoding=UTF8&ref_=cm_cr_dp_see_all_btm&showViewpoints=1&sortBy=bySubmissionDateDescending) ($200), claim that their device can increases plant air scrubbing efficiency by more than 1000 times. 

In 2010, Consumer Reports [found](http://www.consumerreports.org/cro/magazine-archive/2010/september/appliances/best-air-purifier/natural-air-purifier/index.htm) that the air cleaning potential of the Andrea air filter was dramatically overstated and that the lead author of a study that was cited on their now defunct website was misrepresented as an endorsement when they actually found that Andrea “did not perform well.” Investigating where remediation starts and the hype begins will be important for the development of this kit. Although I have never handled either phyto-filtration system, the logic behind the fan placement of the Plant Air Filter at the base of the plant appears to be superior to the highly stylized Andrea, which has a rear mounted fan that only directly blows air over the above ground portion of the plant.  

###Phytoremediation 

In the first stage of the Where We Breathe project we are focusing on the residents of manufactured homes, which often fall within the low to modest income range. For those who reside in manufactured homes, which harbor on average up to 4 times the ambient formaldehyde of conventional homes, the price points of these bio-filters is prohibitively expensive—even Plant Air Purifier’s soon to be launched $100 model is too costly for the population with whom we are working (a $40 formaldehyde test is often outside their budget).  How can we make an effective remediation kit that will be more readily affordable but is also effective? 

As a start, the low cost formaldehyde monitoring method that we are working with (and a note will be posted shortly!) utilizes an inexpensive aquarium pump to pull air through a reactive material. We convert the pump into a vacuum by inverting the diaphragm. Since we will likely be shipping this vacuum all over the country to do testing it's a great starting point for the design of a low cost kit. 

Drawing inspiration from Dr. Wolverton's work, my idea is to 3-D print a plastic pot insert that can be placed in the bottom of whatever pot the remediator has around so that their pot can be connected to the vacuum and air can be circulated across the root system.  The plastic insert would be placed in the middle of the pot and the pump tubing would escape out the drainage whole and go back to the vacuum. The design utilized hydroclture because it allows air to move more easily through the system, is easier to maintain for those without green thumbs, and would be less likely than potting soil to introduce fungi into domestic air space. In addition to the plastic pot insert we would need to have a plastic straw with a bit of green tape at the top which could indicate optimum water levels, a bit of 4/6mm aquarium airline tubing, and a hydroculture substrate like GrowStone.


[![photo_2.JPG](https://i.publiclab.org/system/images/photos/000/007/558/medium/photo_2.JPG)](https://i.publiclab.org/system/images/photos/000/007/558/original/photo_2.JPG)



Additional features needed:
•	A way to ensure a solid water seal at the base.
•	Some small props to place the pot on so the airline won’t get crimped as it exits the pot.
•	I’m not sure how resilient the pump is to moisture so we may need a humidity removing filter before the air goes into the pump. 

Next steps:
•	Develop a 3D model of the insert. Print and test prototype.
•       Develop repository of what plant species remove what toxins most effectively. 


###Microbial Degradation

Thinking through this system got me thinking about a more speculative but also potentially more affordable/transportable version of bio-remediation. A [study](http://journal.ashspublications.org/content/133/4/521.abstract) by Kim et al. in 2008 demonstrated that the root system and microbes metabolize just as much formaldehyde as does the above ground portion of the plant during the day, but at night the below-ground formaldehyde scrubbing is 11 times more effective than the above ground portions of the plants.  Perhaps we could skip the plant and go straight to the microbial degradation? We could culture the bacteria off of the roots of the plants that are most efficient at metabolizing formaldehyde at night and then maintain a bacterial broth that air is percolated through. In this way the air-scrubbing medium could literally be contagious like a sourdough starter and a “mother” culture could be circulated while offshoot brews would be cultivated before passing the mother on.  This kit could easily be under $10.

[![photo_1.JPG](https://i.publiclab.org/system/images/photos/000/007/559/medium/photo_1.JPG)](https://i.publiclab.org/system/images/photos/000/007/559/original/photo_1.JPG)

After making this sketch I found a [study](http://www.sciencedirect.com/science/article/pii/S0360132312001552) from a lab in china that executed a similar plan.  They used _Pseudomonas putida_, a common bacteria used in soil remediation that is safe for humans, to create a bacterial filter for degrading formaldehyde. They found that a formaldehyde reduction efficiency of 90 percent could be reached when the bacteria was fed nutrients at 50 ml m−3 h−1  but could be up to 97 percent efficient at 482 ml m−3 h−1. So we could think about a nutrient drip system to add to this—I would assume we would shoot for somewhere around the 50 ml m−3 h−1 as we would achieve a higher total formaldehyde removal with a given set of nutrients. We could also add a UV light module at the top for the germophobes. ☺

Next steps:
•	Either purchase some [pricey](http://www.atcc.org/Search_Results.aspx?dsNav=Ntk:PrimarySearch%7CPseudomonas+putida%7C3%7C,Ny:True,Ro:0,N:1000552&searchTerms=Pseudomonas+putida&redir=1) _P. putida_ online or have some donated by a lab.
•	Or we could attempt to cultivate the bacteria that we find on the roots of the plants we find to have the most effective nocturnal formaldehyde reduction. 
•	In an ideal world we would try both of the above to compare them.
•	Develop a database of the bacteria that best destroys different common indoor pollutants. Bacteria are also differently suited to metabolize toxicants at different levels (with some bacteria having multiple pathways of degradation of a single chemical based on the concentration of the chemical). With that knowledge, specific bacteria could be blended to better scrub specific pollutants and specific pollutant levels from the air. 



