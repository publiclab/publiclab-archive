---
title: "GSoC proposal: LEL 2.0 and work on Leaflet-Blurred projects ."\ntagnames: 'software, gsoc, soc, response:13975, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, response:18440, lat:28.599514, lon:77.053754'
author: sagarpreet
path: /notes/sagarpreet/03-09-2019/gsoc-proposal-lel-2-0-and-work-on-leaflet-blurred-projects.md
nid: 18500
uid: 516343

---

![](https://publiclab.org/public/system/images/photos/000/031/110/original/LEL1.0.png)

# GSoC proposal: LEL 2.0 and work on Leaflet-Blurred projects .

by [sagarpreet](../profile/sagarpreet) | March 09, 2019 06:02

March 09, 2019 06:02 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals), [response:18440](../tag/response:18440), [lat:28.599514](../tag/lat:28.599514), [lon:77.053754](../tag/lon:77.053754)

----

## About me

Name : Sagarpreet Chadha

Github : [https://github.com/sagarpreet-chadha](https://github.com/sagarpreet-chadha)

LinkedIn : [https://www.linkedin.com/in/sagarpreet-chadha-786378125/](https://www.linkedin.com/in/sagarpreet-chadha-786378125/)

Affiliation : Delhi Technological University , India

Location : Delhi , India

Email : [chadha.sagarpreet97@gmail.com](mailto:chadha.sagarpreet97@gmail.com)

Project Title : LEL 2.0 and work on Leaflet-Blurred Projects .

Gitter : sagarpreet-chadha

Portfolio : [https://sagarpreet-chadha.github.io/](https://sagarpreet-chadha.github.io/)

I am in my Final year studying Computer Science Engineering
(BTech) from Delhi Technological University , India . Originally I am
from a small village in **Punjab** , India but currently living in **Delhi** , India to complete my studies .

---------

## Project description

### Abstract/summary (<20 words):

I would be working on the issues described in planning issue of \*\*LEL \*\*(leaflet-environmental-layers) : [https://github.com/publiclab/leaflet-environmental-layers/issues/134](https://github.com/publiclab/leaflet-environmental-layers/issues/134) .

Also working simultaneously on **LBL** (leaflet-blurred-location) , **LBLD** (leaflet-blurred-location-display) and the new upcoming **blurred-location** project .

### Problems :

**Problem #1 : Architecture Problem**

Currently the code has a lot of redundant code , Most of the layers have the same code in their JS files .
When we add new layer , we are using the same code again with minor changes in the code like changing sourceURL , markersURL and the API\_parsing function .
Although the architecture is good as of now , but it is not scalable and maintainable .

**Solution #1 : Using One-for-All Architecture**

Let's make a generic common module which would be fully tested having all the functions implemented to add new layer .
This module will be very flexible and existing layers like :
Mapknitter Layer
SkyTruth Layer
Fractracker Layer
PurpleLayer Layer
Toxic Layer
will be implemented by :

![image description](/i/30173.png "Screenshot_2019-03-14_at_5.54.45_PM.png")

The architecture would be similar to that of PL.Editor where we have a generic module and all other modules are implementing that module .
Also the new architecture will make sure that any new contributor while working on new layer will have to work on one single file only and not take care of the entire system .
---\> Advantage :

```
1.) Maintainable 

2.) Easy to review new layers 

3.) Easily Testable 

4.) Less lines of code 
```

---------

**Problem #2 : Personal User-defined Layer**

Although we have many amazing dynamic layers implemented , but their API URL is fixed .
Many people on Stackoverflow and Github have asked how to add custom layers . Currently there is no library which allows users to add their own custom layer .

**Solution #2 : Add Custom Layer module**

We have already implemented similar feature in LBLD to add custom API with custom parsing function .![image description](/i/31107.png "Screenshot_2019-04-05_at_12.49.58_PM.png")![image description](/i/31108.png "Screenshot_2019-04-05_at_12.50.03_PM.png")

---------

**Problem #3 : Lack of Contributors**

Currently there are a very few people working on LEL .

**Solution #3 : Let's build a community !**

![image description](/i/30174.png "Screenshot_2019-03-14_at_6.31.48_PM.png")

I feel LEL has the potential to welcome many new first-time contributors .
Let's make the documentation of how to add a new layer so easy and well structured that a new contributor can start work immediately .
I will be working on making new well-defined first-timer-only issues during the course of the summer , describing each step of the process concisely .
Also let's complete this checklist on Github :

![image description](/i/30175.png "Screenshot_2019-03-14_at_6.32.27_PM.png")

---------

**Problem #4 : Segregate UI code**

Currently all the UI code is in the index.html .
Also we have not provided any provision to add Layers button on the map in the library .
To add the Layers button , one needs to understand additional code .

**Solution #4 : Build UI module**

Let's make a provision in the library to automatically give the end user the layers button .
I will implement a UI module for this purpose with function :

![image description](/i/30176.png "Screenshot_2019-03-14_at_6.57.18_PM.png")

---------

**Problem #5 : Testing**

We do not have any tests yet . I will be focussing majorly on testing the generic module first and then UI module part .
Then moving on to testing individual layers .
Also after implementations of this new tests , we can request first-timer contributors to write tests as well when they implement new layer module .

I have experience with using grunt-contrib-jasmine library and have implemented  
testing in LBLD and blurred-location projects of Public Lab .![image description](/i/31109.png "Screenshot_2019-04-05_at_12.49.58_PM.png")

---------

### Timeline/milestones

I would be working first on the structural issues .
Then moving to the UI issues and finally the testing part .
I would be following this planning issue :
[https://github.com/publiclab/leaflet-environmental-layers/issues/134](https://github.com/publiclab/leaflet-environmental-layers/issues/134 "https://github.com/publiclab/leaflet-environmental-layers/issues/134")

• **27th May to 23rd June: Working on the structural changes :**

- Week 1 and 2 :
- 1.) Consolidation and standardisation of all layers
- 2.) Reduction of redundant layer code
- 3.) Code to make adding new layers of a generic type easier
- Week 3 and 4 :
- 1.) improved layer management system with bounding boxes + zooms from layer
metadata (including #117)
- 2.) layer metadata -- description, source, docs for each, relevant bounding box and
zoom levels, version, in a single file. Maybe rate limits too if we know them .

• **24th June to 28th June: Evaluations
• 29th June to 21st July: UI Work**

- Week 1 and 2 :
- 1.) UI for highlighting new layers in current viewport as you drag/zoom #133
- 2.) improved popup content, like thumbnail images if they exist: #112
- 3.) unique-id based layer toggling in URL hash - related to #33
- 4.) standardisation of per-item popover UI (image, description, source, toggle, link)
- 5.) legends for some layers (#103)
- Week 3 :
- 1.) examples for how to enable/disable layers from javascript (i.e. from a separate
button or checkbox for example)
- 2.) examples for how to open the map at a given location and zoom level using URL
hashes: [https://github.com/mlevans/leaflet-hash](https://github.com/mlevans/leaflet-hash "https://github.com/mlevans/leaflet-hash")
- 3.) search for a location to recenter upon with a button and autocomplete
geocoder (like at [https://github.com/publiclab/leaflet-blurred-location](https://github.com/publiclab/leaflet-blurred-location "https://github.com/publiclab/leaflet-blurred-location"))
- 4.) minimal 'dots' ui #123 .

• **22nd July to 26th July: Evaluations**

• **27th July to 25th August** :

1.) Testing

2.) Documentation

3.) Making PR template

4.) Making awesome first-timers-only issue .

### Needs

All the resources I will be requiring are on the internet . And I would
of course require the guidance of my mentor.

### Experience

I have been part of PublicLab for approximately 2 years now . I had the privilege to work on LEL the previous summer under GSoC program . I also have worked on various other projects of PublicLab including plots2 , LBL , LBLD , BL , LEL and PL.Editor .

---------

### Teamwork

Throughout my academic career , I have been consistently praised as
focused by my professors and peers . While working on academic and
extracurricular projects , I have developed proven leadership ,
technical , and teamwork skills .
I like to work in a team and have developed various projects with my
college mates .
Also as i am a regular hackathon participant , i have the experience of
working in a team .

---------

### Passion

Belonging from a place having fresh air , pure water and green
environment , and currently living in one of the most polluted city in
the world - Delhi , Yes Public Lab interests me a lot and i wish to be
the part of the PublicLab family for a very long time .

As Larry Page once said- _"If you're changing the world, you're working on important things. You're excited to get up in the morning ."_

### Cheers to Contributors and to people using LEL :P

There is increase in people contributing to LEL on github . Also the number of stars on github has also increased .

There is sudden increase in weekly downloads of LEL on NPM as well :

[![Screenshot_2018-12-20_at_12.02.26_PM.png](https://publiclab.org/i/28461)](https://publiclab.org/i/28461)

---------

### Commitment

_I can assure you that if i get selected to work with Public Lab
this summer , I will definitely try my level best to make this project
successful and will love to continue working with Public Lab even after
the summer ._

_  
_

_I would like to thank @warren , @stevie , @liz and PL community for constant support and help ._

**THANK YOU ALL !**

_Sagarpreet Chadha_

__