---
title: "Intended Purposes for Different Tools and Techniques"

tagnames: 'evidence, standards, data, evaluation, barnstar:basic, with:shannon, with:warren, with:donblair, certification'
author: gretchengehrke
path: /notes/gretchengehrke/10-07-2015/intended-purposes-for-different-tools-and-techniques.md
nid: 12275
uid: 430549

cids: 12667,12668,12669,12677,12682,16566

---

![](https://publiclab.org/public/system/images/photos/000/011/807/original/undefined)

# Intended Purposes for Different Tools and Techniques

by [gretchengehrke](../../../profile/gretchengehrke) | October 07, 2015 13:30

October 07, 2015 13:30 | Tags: [evidence](../tag/evidence), [standards](../tag/standards), [data](../tag/data), [evaluation](../tag/evaluation), [barnstar:basic](../tag/barnstar:basic), [with:shannon](../tag/with:shannon), [with:warren](../tag/with:warren), [with:donblair](../tag/with:donblair), [certification](../tag/certification)

----

##Technique Strata 

_(Note: have a better name for this? Please suggest it!)_

Environmental data can be used for a variety of purposes, and those purposes have different requirements for the data quality (e.g. accuracy and precision) of a study.  Tools and techniques can have different maximal performances, making them useful for studies with different types of objectives.  For example, a qualitative technique should not be used in a study investigating whether or not an area is in compliance with specific air quality standards, but it could be useful in monitoring for a marked aberration above a generally consistent background concentration.  

We want to make sure it is clear what the peak performance of each tool (and primary technique) is intended to be in order to sort out in what kinds of studies they will be useful.  Thus, we are conceptualizing a "Technique Strata."  We have a lot of questions, especially in regards to determining the best use-case scenarios, who labels tools (or techniques) at different strata, and communicating intended uses and tool strata. 

To kick off this conversation, we have put together a table (found at the bottom of this research note) of different types of research agenda and an estimation of their requisite data quality.  Our table is similar to that suggested by a team of EPA researchers, found on pages 33-40 of the EPA 2014 Air Sensor Guidebook ([http://cfpub.epa.gov/si/si_public_record_report.cfm?dirEntryId=277996&simpleSearch=1&searchAll=air+sensor+guidebook)](http://cfpub.epa.gov/si/si_public_record_report.cfm?dirEntryId=277996&simpleSearch=1&searchAll=air+sensor+guidebook)), but is more tailored to the kinds of projects that are more common in Public Lab.  For example, we don’t currently have environmental monitoring projects whose expressed purpose is hot spot identification, but we do have projects that are building an alert system for when a threshold value (for particulate matter, conductivity, turbidity, etc) has been reached.  This is a generalized table, and will expand with new kinds of explorations, such as potential new research in personal exposure monitoring.  


##Important Questions 

Here are some big questions for discussion:

1. Who designates tool levels or strata?  
2. How do we communicate when different techniques, using the same tool, have different levels of possible data quality?  
3. How rigorous do the pre-label tests need to be in order to figure out the appropriate stratus for a tool or technique? 
4. Where should the open community critique and discussion about tool/technique claims live?  
5. Should there be a sort of “certification committee” for different tools?  
6. Do we need to develop trust inside or outside of Public Lab for these tool and technique designations?  
7. Should there be a “Discussion on status” link or warning on tool wiki pages and in the online store, and a disclaimer about the limits of a tool’s potential data quality?  
8. Should there be a direct label of “Intended for X” on each tool?  

Please comment with your thoughts.  


Stratus | Estimated Precision * | Sample Size | Remarks 
---------------|---------------|---------------|---------------
Contextual indicator | +/- 50% | small | This is mostly to ascertain presence/absence or a general idea of the parameter in question, but is not quantitative, and is mostly used for educational purposes.
Threshold Alert | +/- 30% | sufficient to observe background and aberration from background | This technique should include a calibration, but perhaps not with every measurement, and may not include sample replicates etc.
Quantitative Indicator | +/- 15-20% | sufficient to observe patterns and aberrations | This technique includes quantitative calibration, assessment of accuracy and precision, includes data quality assurance and quality control (QA/QC) parameters including sample replicates and blanks, etc
Regulatory Recognition | dependent upon the federal reference method (FRM), usually +/- 10% | dependent upon the federal reference method (FRM), usually large | This technique adheres to federal standards, or produces data quality sufficient to be officially recognized by certain regulating authorities. This stratus has the strictest data quality objectives.

* Precision means the replicability of a measurement.  For studies that are trying to document when an abnormal event occurs, the exactitude of the measurement is less important than demonstrating that it is different from the normal condition.  For studies that are trying to demonstrate smaller variations in values, such as in a geographic canvassing, measurements may need to be more precise in order to observe differences in true values. 

