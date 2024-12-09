---
title: 'Classification'
tagnames: wetlands, aerial-photography, wetlands-restoration, mines
author: warren
path: /wiki/classification.md
nid: 675
uid: 1

---

# Classification

by [eustatic](../profile/eustatic), [adam-griffith](../profile/adam-griffith), [warren](../profile/warren)

January 03, 2012 22:03 | Tags: [wetlands](../tag/wetlands), [aerial-photography](../tag/aerial-photography), [wetlands-restoration](../tag/wetlands-restoration), [mines](../tag/mines)

----

<a href="https://www.flickr.com/photos/worldworldworld/4918161225/" title="how much oil hit the coast ? by cesarharada.com, on Flickr"><img src="https://farm5.staticflickr.com/4074/4918161225_ac11e4ffa4.jpg" width="500" height="156" alt="how much oil hit the coast ?"></a>

Classification refers to categorizing or classifying parts of an image into different types, for example **pavement**, **water**, **soil** and **sand**. It often relies on examining an image pixel by pixel and using color or shape information to decide which "class" is the best match. The result is often an image such as this one, which is colored by class:

<img width="500px" src="https://publiclab.org/sites/default/files/USCB_GeniePro_Classification.jpg" />

If classification can be automated, using for example the software program [GeniePro](http://geniepro.lanl.gov/), large numbers of photos or large maps can be colored by class, helping to quantify for example "how much wetlands?", "how much oil?" or "how much _Spartina alterniflora?_"

###Spectral classification###

Using the ratios of Red, Green, and Blue (and possibly Near-infrared), _spectral classification_ attempts to categorize regions of an image by land type.

Read more in [this post by Adam Griffith and students at University of South Carolina - Beaufort](http://publiclaboratory.org/notes/adam-griffith/9-10-2011/students-map-campus-university-south-carolina-beaufort-south)

##Open source classification software##

* [Spring](http://www.dpi.inpe.br/spring/) - desktop app, not super user-friendly (see [a tree canopy project using SPRING](http://depts.washington.edu/rsgalwrk/canopy/) by Diane Styers)
* [Clashifier](http://github.com/jywarren/clashifier) - web service, in planning stage, not functional

##Human, or "Cognitive" Classification##
Human Beings have generally been better than machines at classification, although computing power has changed the situation.

In situations, such as on the US Gulf Coast, where programmers and computing power is not available,  though, the older techniques are still useful--even a handful of volunteers can work through thousands of images quickly. 

There is a problem of creating a framework for different people to describe to one another their logic for classification. For each class, we call the meta information whereby a person can justify the classification a signature. 

 This signature development process is still useful for communicating to programmers how to create automated classifications, should those programmers become available. 

Here is a Signature Development Worksheet for situations where advocates need to create a classification workflow for volunteer classifiers.

[Public Copy 2018 GRN Signature Development Assessment Summary for Aerial Photo Classification](https://docs.google.com/spreadsheets/d/1PgQ22RGVAKrYsI9OuSGQaGHOgprskS2jycPgQAuPm3A/edit#gid=143327483)

For each class, develop one Signature in a worksheet. 

See this [post about abandoned mines in Louisiana wetlands ](https://publiclab.org/notes/eustatic/03-11-2022/signature-development-for-aerial-photo-classification-louisiana-wetland-forest-mine-reclamation-project)as an example. 

This process is also useful for education and advocacy, as the process can galvanize support for protecting the land. 

Such is the case for the [Land Loss Lookout project](https://publiclab.org/wiki/openhour-archive#October+5:+Applying+Aerial+Imagery+and+Community+Mapping+-+Lessons+from+the+Land+Loss+Lookout+Project).

Algorithms, after all, cannot vote. The experience of looking and classifying can change a voter's mind. 
