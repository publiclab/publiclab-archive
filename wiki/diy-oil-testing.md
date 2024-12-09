---
title: 'DIY Oil Testing'
tagnames: spectrometer, spectrometry, oil-testing-kit, draft, pipeline-monitoring, parent:pipeline
author: warren
path: /wiki/diy-oil-testing.md
nid: 12629
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/014/238/original/oil-samples.jpg)

# DIY Oil Testing

by [warren](../profile/warren)

January 28, 2016 16:16 | Tags: [spectrometer](../tag/spectrometer), [spectrometry](../tag/spectrometry), [oil-testing-kit](../tag/oil-testing-kit), [draft](../tag/draft), [pipeline-monitoring](../tag/pipeline-monitoring), [parent:pipeline](../tag/parent:pipeline)

----

#Progress toward community oil pollution analysis

##Introduction


As one of the core initiatives of Public Lab's Homebrew Sensing Project, the Oil Testing Kit is an effort to address one of the original challenges Public Lab faced after its founding during the Deepwater Horizon oil disaster -- that of identifying oil pollutants after a spill.                                                                                    

Public Lab believes that the co-development of tools and methods by and with people who directly face pollution is key to developing accessible and appropriate solutions. In that light, we've strived in this project to build open collaborations, to engage partners involved in oil pollution response, and to prototype and pilot a process which addresses local needs and remains legible and open to participation, from problem identification through field testing. To varying degrees, we have succeeded at some of these aims and not succeeded at others, and here we intend to document the project so that others may build on what we've done.                                                       

****

##Contents

We've compiled this collection of writing in order to present an overview of the Oil Testing Kit program, synthesizing four main topics; follow these links to read each:

1. [Questions, Motivations, & Best Practices](/wiki/diy-oil-testing-questions)
2. [Working with community](/wiki/diy-oil-testing-community) - including notes on community and online outreach strategies, workshops and resources
    * [Workshops overview](/wiki/oil-testing-workshops)
    * [Workshop 1: Design an experiment](/wiki/oil-testing-workshop-design-an-experiment)
    * [Workshop 2: Build a spectrometer](/wiki/oil-testing-workshop-build-a-spectrometer)
    * [Workshop 3: Calibration and scanning](/wiki/oil-testing-workshop-calibration-and-scanning)
    * [Workshop 4: Analyzing and sharing](/wiki/oil-testing-workshop-analyzing-and-sharing)
3. [Tools and Methods](/wiki/diy-oil-testing-tools) - hardware, software, instructions and challenges
4. [Data and Action](/wiki/diy-oil-testing-advocacy) - community oil testing and advocacy

****

Through the Homebrew Sensing Project and in this report, we have attempted to address community needs and site-specific environmental issues with affordable, co-designed, open source tools, and to collect data which provide compelling information about key questions regarding pollution. Over two years, we've had opportunity to try different strategies, to succeed and fail, to regroup and redesign.


****

[![5408216464_627acfd49e_o.jpg](//i.publiclab.org/system/images/photos/000/013/929/large/5408216464_627acfd49e_o.jpg)](//i.publiclab.org/system/images/photos/000/013/929/original/5408216464_627acfd49e_o.jpg)

_Image by Shannon Dosemagen (@shannon)_

##History

Public Lab was founded just after the Deepwater Horizon oil disaster, and many of the tools we are developing focus on oil pollution and its effects. As one of the earliest, but longest-term projects we chose to focus on, Do-It-Yourself spectrometry has also been one of our most popular, with thousands of people constructing and using their own from various kits and instructions since 2010. 

While the open source approach to tool design resulted in wide adoption, it did not produce a lot of interest in the specific problem of identifying or distinguishing oil pollutants. With this in mind, we set out to launch a new project in 2013-4 to launch a more focused -- but still open and collaborative -- effort to distinguish oil pollutants. We chose to explore using ultraviolet fluorescence: the principle that different oils fluoresce different colors, measureable by a spectrometer, when illuminated with ultraviolet light. This involved a series of progressively more difficult challenges, which we will discuss in this document.

[![workshop](https://i.publiclab.org/system/images/photos/000/005/793/large/20140731_182846.jpg)](https://i.publiclab.org/system/images/photos/000/005/793/original/20140731_182846.jpg)


##Who is this document for?

We’re writing this for multiple audiences, who have varied interests and experiences with oil and spectrometry. We’re hoping that everyone finds information useful to them within this document and that the case studies, event models, and analysis on our process will be helpful to anyone who seeks to:

* join and further Public Lab’s oil testing program
* understand the history and current state of the Oil Testing Kit
* conduct experiments using DIY spectroscopy
* develop their own community technology development project 
* advocate for accessible oil testing 

In this document we’ve tried to keep the technical language to a minimum, and have included a glossary for some potentially unfamiliar terms. 


##Project goals

* pilot DIY differentiation of oil pollution samples (using UV fluorescence)
* refine and simplify DIY spectrometer construction
* develop and test  DIY sample collection and analysis methods
* improve software for easy analysis of samples
* prototype open and collaborative patterns for technology/methods development
* create and refine community engagement models for such development 
* develop a tool to assist people in narrating their experience with oil 

Our more specific goals as we conclude this program include:

* assess DIY fluorescence spectrometry open hardware kit design
* evaluate DIY fluorescence spectrometry analysis methods