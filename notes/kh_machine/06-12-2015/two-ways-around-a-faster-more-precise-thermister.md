---
nid: 11977
title: Two Ways Around a Faster, More Precise Thermister
path: public/static/notes/kh_machine/06-12-2015/two-ways-around-a-faster-more-precise-thermister.md
uid: 443618
tagnames: water-quality,thermal-fishing-bob
---

# Two Ways Around a Faster, More Precise Thermister

###Potential Problems
During the recent Thermal Fishing Bob Workshop (Northeastern U), two potential problems were discussed:
* The thermister is slow to update.
* The LED color system for the bob is too granular.

###Suggestions
* Instead of creating a faster update on the thermister, multiple thermisters could register the termperature at different times. For example, if the current thermister updates every five seconds and you need an update every second, you can use five thermisters, and have them update in serial fashion.
* At the workshop, one person mentioned that having the LED color change when the water got cold or hot did not provide detailed enough information for rigorous water quality data. However, if you set the threshold points (where there are color changes) to numbers that represent temperatures that are acknowledged as dangerously high or low (given the other information about the water source), you can still gather really useful data without the added precision. 

###Questions and next steps
* The obvious issue/concern about multiple thermisters is the potential high costs. However, a potential benefit is the redundancy, in the case of the failure of one (or more) of the thermisters. The next step here would be an analysis of tradeoff costs between a faster thermister and multiple slow thermisters.
* If you use a threshold model, it is important to pick the appropriate numbers given the water source. What would be alarming low temperatures in one body of water would be normal in another. This adds a cost, both for the information required to determine those numbers and to program the sensor accordingly. Again the question is one of cost comparison between more precise data (that can be used in multiple ways) and more granular data that requires local information and a bit of programming.