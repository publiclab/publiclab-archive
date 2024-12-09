---
title: Research Documentation
tagnames: 
author: gretchengehrke
path: /wiki/research-documentation.md
nid: 12935
uid: 430549

---

# Research Documentation

by [stoft](../profile/stoft), [mathew](../profile/mathew), [gretchengehrke](../profile/gretchengehrke)

April 07, 2016 20:21 | Tags: 

----

**Abstract**

This wiki page [a work in progress] describes best practices for documenting research with the goal of enabling others to understand that work and to reproduce experiments / results, and assess the data resulting from that research. The contents have, by design, been structured and written based on those same standards so that hopefully the reader will have an implicit understanding of the concepts.

**Disclaimers**

This document is intended to be a collaborative effort, drawing on the expertise of many contributors. Because the goal is accuracy and adherence to sound scientific methods, not all perspectives may survive the peer-review process.

**Overview**

In general, scientific research should be well documented. The process does not dictate the document timeline but it does require accuracy and sufficient detail for others to clearly understand and duplicate that research (assuming they have the skills and resources available.) The final document should include 1)  an Abstract, 2) a discussion of measurements, materials, procedures, observations and techniques, 3) details about the data, accuracy, resolution, etc., 4) interpretation and analysis of the observations and data which includes ownership of it's limitations and 5) discussion of conclusions which have been proven by the observations.

When any or all of these basic fundamentals are missing or lacking in detail or scope, the author is effectively asking the reader to take what they say on the basis of assumption, not the scientific method based on facts and observable measurements. Resolving such omissions can be resolved either by clarification and added detail / data or by retraction until additional work can be performed which supports the prior assumption.

**Abstracts**

Abstracts should generally be just a short paragraph, at the top of the document, and should quickly outline 1) the focus of the work, 2) the reason for the work, 3) the nature of the experiments and observations and 4) a broad hint at the conclusions derived from that work.

**Methods, Procedures and Protocols**

Methods, procedures and protocols describe the processes used by the author to perform the experiments which directly relate to the research being described. A method is the more general description of performing a task; eg. assembling kites from paper, dowels, glue and string. A procedure is more specific to the sequence of events and the expected result; eg. the cut, fold and glue sequence for paper, wood and string to make a box kits. A protocol is a strict definition of a procedure which, if followed precisely, will produce the same results (within given tolerances) every time; eg. the exact same kite design, shape, size and aerodynamic properties every time.

All three can be used, even within the same research, but it is best to be clear on which is being described by choosing the terminology carefully; for example, never call a method a protocol.

**Materials**

Within this context, the term 'Materials' must reference anything and everything from chemicals, to plastics, to optics, to lasers and LEDs to electronics and even data. In short, materials is just the large umbrella of the components which are often combined in the process of creating or observing something new. While chemicals, plastics and LEDs seem obvious, data may appear out of place. However, data often represents the result of combining physical materials under some other circumstance, to be re-applied to the new research; eg. calibration data of a reference light source.

The importance of discussing "Materials" is in understanding the impact of how the materials influence the results of the research which is being described. All materials can, in one way or another, be described by specifications. Without specifications, the research results will be questionable at best.

**Specifications**

Specifications (specs) describe the nature of a "material" which, in turn, helps describe how that material will interact with other materials. If you don't know the specs of your chemical sample and you don't know the specs of your sample container, the container might dissolve and leave you with a mess. If you don't know the specs of your UV LED and then try to power it from your laptop USB port, you might damage your laptop.

However, besides just the potential for damage, not knowing and not reporting the material specs (at least where applicable) places your work and your conclusions in question. For example, if your results show a 10% rise in river water temperature but you don't know, and report, that your thermal detector has a +/- 10% drift with battery voltage, your conclusion that the river is warming could be completely wrong. In addition, without properly reporting and handling specs, your work may negatively impact the work of others who rely on your results.

**Measurements**

The topic of measurements is integral to the topic of specifications. Measurements are simply the recording of what a detection device is reporting -- raw data in many instances. However, raw data alone is not sufficient to achieve a meaningful measurement of some parameter. A meaningful measurement is only achieved by including the measurement devices specifications and by performing the measurement either at a time or over a time period which can be validated as representing the parameter you are attempting to observe. Such a measurement also requires that the device performing the measurement is not influencing the parameter you are trying to measure.

For example, if you use an analog (mercury) thermometer to measure your finger's temperature but only apply the thermometer for 3 seconds, you would get an incorrect result. 1) the thermometer (at a lower temperature) will slightly chill your skin's temperature (the measurement device affects what it is measuring -- in the short term in this case) and 2) an anlog thermometer takes more than 3 seconds to come to equilibrium and provide an accurate reading. Even after several minutes, the mass of the thermometer may still be removing heat from your skin and still give you an incorrect reading. Ok, yes, the solution is to use a new digital, non-contact, thermometer; but you get the idea.

**Resolution, Precision and Accuracy**

Despite being common terms, these are not interchangeable. Resolution is simply a measure of the smallest variation that is detectable. A digital temperature reading of 68.43 has a resolution of 0.01 deg. Precision is a measure of how repeatable the measurement is (assuming what is being measured is stable). If measuring the same object with a digital thermometer 10 times results in readings of 68.33 to 68.53, we could say (loosely, it's actually more complicated than this) the thermometer has +/- 0.1 deg precision. Accuracy is the measure of how close the average measurement is to the real value as determined by a reference standard. If the digital thermometer, measuring 68.43 deg is measuring a reference which is known to be 70.00 deg, then the accuracy of the digital thermometer is in error by 1.67 deg -- which might show the thermometer was out of spec if its rated accuracy was 1 deg.

All of this is important because analyzing and reporting of raw data with 0.001 resolution with 0.1 accuracy, as if it had 0.001 accuracy, would clearly be misleading and is often the cause of "signals" being reported as real when they are only noise.

**Linearity**

Many measurement devices (voltmeters, thermometers, etc. ) provide linear measurements where the reported value doubles as the signal being measured doubles. However, sometimes they are not perfect and so that 1:1 relationship can have an error which varies related to the signal level. Most commercial measurement devices will publish their linearity if that error is greater than near zero or could become significant relative to other errors. It is important to be aware that these types of errors do exist and, in some cases, are significant relative to the measurement.

**Data**

Data can take may forms; digital measurements, hand recorded readings from a device, categorized observations over time, etc. However, no matter the type, it is always necessary to document the nature of the data, it's resolution, precision, accuracy, frequency and circumstances under which it was taken. Otherwise, the value of that data can become useless at best and damaging at worst.

**Analysis**

The analysis of observations and result data is much harder to characterize in terms of following a list of rules but easier to describe in terms of the scientific process. Analysis begins by asking if the experiment, the procedures and the measurements are logical, repeatable and based on facts, not assumptions. All the digital processing and computer data gathering is for naught if the data is suggesting total nonsense. If so, stop and re-think the experiments.

Even if the process and results appear plausible, never stop questioning the results until you can (independently if possible) rule out all other possible causes beyond the cause-effect relationship you suspect may exist. Being fooled by data telling us what we were hoping, and / or expecting to see, is a very common event.

**Conclusions**

Conclusions are the means for synthesizing new insight and meaning out of the analysis of the project data and experience. It is not a space for speculation -- except to a very limited extent and only if that conjecture is solidly based on the data and directly related work. Conclusions can include both cause-effect relationships and the absence of proposed cause-effect relationships.

The first conclusion for this document, is that while it is possible to describe all of this to the reader, it is also likely that the reader will learn much more during the process of applying these guidelines.

The second conclusion, is that much more needs to be written to make this document a significant resource for Public Labs.



