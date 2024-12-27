---
title: "Public Lab 'Open Water Hackathon' @ Amherst College"

tagnames: 'amherst, pvos, event, massachusetts, sensors, visualization, hackathon, water-quality, water, umass-amherst'
author: donblair
path: /notes/donblair/01-22-2014/public-lab-open-water-hackathon-amherst-college.md
nid: 9964
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/002/604/original/hackThumb.png)

# Public Lab 'Open Water Hackathon' @ Amherst College

by [donblair](../../../profile/donblair) | January 22, 2014 23:16

January 22, 2014 23:16 | Tags: [amherst](../tag/amherst), [pvos](../tag/pvos), [event](../tag/event), [massachusetts](../tag/massachusetts), [sensors](../tag/sensors), [visualization](../tag/visualization), [hackathon](../tag/hackathon), [water-quality](../tag/water-quality), [water](../tag/water), [umass-amherst](../tag/umass-amherst)

----

On Monday, Jan 20th, several folks got together at Amherst College for an "Open Water Hackathon" as part of the Martin Luther King Day of Service ... and we rocked it!  

The event was organized by [Andy Anderson](https://www.amherst.edu/people/facstaff/aanderson) with a lot of support from [Mary Martin](http://www.eos.unh.edu/Faculty/mem); four heroic Amherst College students put in a day-long programming effort to develop a prototype for storing and visualizing water quality data in support of Public Lab's [recent water quality efforts](http://publiclab.org/wiki/mystic-river):

- [Henry Laney](http://www.linkedin.com/profile/view?id=264156444&authType=NAME_SEARCH&authToken=eH0I&locale=en_US&srchid=149584381390431198377&srchindex=1&srchtotal=5&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A149584381390431198377%2CVSRPtargetId%3A264156444%2CVSRPcmpt%3Aprimary) 
- [Thais Correia](http://www.linkedin.com/in/tcorreia16)
- [Aashish Karki](http://www.linkedin.com/profile/view?id=276491815&authType=NAME_SEARCH&authToken=VzYD&locale=en_US&srchid=149584381390431281448&srchindex=1&srchtotal=7&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A149584381390431281448%2CVSRPtargetId%3A276491815%2CVSRPcmpt%3Aprimary), and 
- [Daniel Park](http://www.linkedin.com/pub/daniel-park/61/708/58)

We began the day with a brief introduction to [Public Lab's water quality project in the Mystic River watershed, and Amherst, MA](http://publiclab.org/wiki/mystic-river), and the [Hubbard Brook Ecosystem study](http://hubbardbrook.org/).  The main idea was to develop a prototype system for storing and visualizing some of the Hubbard Brook hydrology data -- this could be of use at Hubbard Brook, and also as a way of beginning to visualize data that might come from Public Lab's DIY [water quality sensors](http://publiclab.org/notes/donblair/01-14-2014/first-wireless-transmission-mchck-to-mchck).  We quickly broke the overall project down into some sub-goals, and broke into associated teams:

- Import data into MongoDB and pull it back out into a Web application (Thais, Henry)
- Display data with D3: time-series graph/Cubism.js (Aashish)
- Display data with D3: map, with time variation (Andy)
- Web page framework: here’s our data! (Daniel)
- Conversion between JSON and csv,tsv for download and upload

We got down to work, full of coffee and pastries and pizza:

[![hack1.png](https://i.publiclab.org/system/images/photos/000/002/605/medium/hack1.png)](https://i.publiclab.org/system/images/photos/000/002/605/original/hack1.png)

Thais and Henry at the whiteboard:
[![IMG_0007.JPG](https://i.publiclab.org/system/images/photos/000/002/606/medium/IMG_0007.JPG)](https://i.publiclab.org/system/images/photos/000/002/606/original/IMG_0007.JPG)

One early goal was to develop a way of visualizing data from several sensors on one page, in a way that made it easy to see correlations across them. Mike Bostock's [Cubism.js library](http://bost.ocks.org/mike/cubism/intro/) seemed like a good fit for this; his [demo stock price visualization](http://bost.ocks.org/mike/cubism/intro/demo-stocks.html) is really neat:  

[![demo-random.png](https://i.publiclab.org/system/images/photos/000/002/608/medium/demo-random.png)](https://i.publiclab.org/system/images/photos/000/002/608/original/demo-random.png)

We worked hard at trying to grok the various parts of the project.  We were able to plot some of the Hubbard Brook data in D3:

[![d3hubbard.png](https://i.publiclab.org/system/images/photos/000/002/607/medium/d3hubbard.png)](https://i.publiclab.org/system/images/photos/000/002/607/original/d3hubbard.png)

The code we generated is in a Github repository, here:
https://github.com/Pioneer-Valley-Open-Science/open-water

And the notes we generated on the various pieces of the project were [posted in an Google Doc](https://docs.google.com/document/d/1MPl10mY8wnfplwmVSIPDVCF6Q2Hx-4qoilzyxS9-nvc/edit).

We're hoping to continue this work as the semester progresses. Thanks to everyone who participated -- lots of good coding fun!

[![hackathon3.png](https://i.publiclab.org/system/images/photos/000/002/609/medium/hackathon3.png)](https://i.publiclab.org/system/images/photos/000/002/609/original/hackathon3.png)
