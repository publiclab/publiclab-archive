---
title: Growing & Sustaining the Public Lab Software Development Community
tagnames: community-metrics, grassrootsmappingforum, style:fancy, with:jeff, software-development, gmf-7, with:btbonval, with:justinmanley, software-outreach
author: mollydanielsson
path: /wiki/growing-sustaining-the-public-lab-software-development-community.md
nid: 11789
uid: 1259

---

![](https://publiclab.org/public/system/images/photos/000/009/812/original/browse-data-color.jpg)

# Growing & Sustaining the Public Lab Software Development Community

by [mollydanielsson](../profile/mollydanielsson)

May 06, 2015 01:24 | Tags: [community-metrics](../tag/community-metrics), [grassrootsmappingforum](../tag/grassrootsmappingforum), [style:fancy](../tag/style:fancy), [with:jeff](../tag/with:jeff), [software-development](../tag/software-development), [gmf-7](../tag/gmf-7), [with:btbonval](../tag/with:btbonval), [with:justinmanley](../tag/with:justinmanley), [software-outreach](../tag/software-outreach)

----

 by Justin Manley, Bryan Bonvallet, Jeff Warren, and Molly Danielsson

Published May 2015 [Grassroots Mapping Forum #7.](http://publiclab.org/forum)
[Order online.](http://store.publiclab.org/products/grassroots-mapping-forum-issue-7)

_Justin Manley is an undergraduate student at the University of Chicago. He worked on MapKnitter as part of Google Summer of Code in 2014 and has continued to work on open source mapping projects related to Public Lab’s mission, including Leaflet.DistortableImage and Leaflet.Toolbar._

_Bryan Bonvallet is an independent web services contractor and Public Lab organizer based in Florida._

_Jeff Warren is founder of Grassroots Mapping and co-founder of Public Lab, and is currently the only on-staff developer for Public Lab software. He is able to devote approximately one quarter of his time toward coding work._ 

_Molly Danielsson is the director of [Recode](www.recodenow.org), a nonprofit dedicated to ensuring access to innovative solutions for building and development._

Public Lab has produced several open source software projects (MapKnitter, Infragram, and Spectral Workbench, to name a few of the most widely used) that power much of the grassroots scientific research that is central to Public Lab’s mission. “Open source” means that something can be modified because its design is publicly available. Public Lab is committed to creating tools for environmental investigation that are inexpensive and replicable, so others can “open the hood” for each of these tools and modify them as necessary; therefore, all of Public Lab’s software (and hardware) is open source. Despite the importance of open source software to the core of Public Lab’s environmental investigations, there is only a small cadre of people working under the hood on Public Lab software. Since open source software projects, including Public Lab’s, often rely on volunteer contributions, they need their own community outreach strategy to recruit contributors and encourage software development practices that will make the software more reliable, easier to maintain, less buggy, and longer-lived.

[![public_lab_software_chart.jpg](https://i.publiclab.org/system/images/photos/000/009/823/large/public_lab_software_chart.jpg)](https://i.publiclab.org/system/images/photos/000/009/823/original/public_lab_software_chart.jpg)

As of April 2015, the main Public Lab mailing list has over 3,600 members, while the developers mailing list has fewer than 90 members. The developers mailing list, while small, has already grown by 70% in membership since it started just two years ago. There are about five or fewer people contributing to MapKnitter, Spectral Workbench, and Infragram each. Additionally, many of these (few) contributors are committed to multiple projects. Since Justin Manley’s December 2014 research post about increasing community outreach for Public Lab’s development community, there has been a 30% increase in the developer mailing list and more staff time dedicated to making these codebases more accessible to newcomers. 

Addressing the quantity of contributors is a start, but for an open source code project to fly smoothly, argued Manley in his post, it needs to establish guidelines and a culture to encourage quality code contributions, which may in turn make it easier for new contributors to get involved. Public Lab has not yet set any formal coding conventions. Coding conventions and style guides for programming are what grammar and style guides are for writing (code is after all just written text addressed to a machine, not a human). Code can work even if it’s messy—just like the statement “Me hongry!” may get you a slice of pizza, even if it annoys the person who handed you that slice. Everyone’s code style is different depending on how they learned to code and their personal preferences, which is why it’s so important for a group to agree on a style in order to effectively collaborate. When groups like Public Lab are open, clean code and clear practices are even more important since volunteers will be joining and leaving projects and need a way to get up to speed before they can contribute.

Public Lab’s first software project, MapKnitter, was rushed to release to allow people in the Gulf of Mexico to create photo maps of the oil gushing out of BP’s Deepwater Horizon oil rig in April 2010. MapKnitter allows users to stitch photos together to create spatially accurate maps. As news of the disaster’s severity spread and outrage about limited access to information simmered locally, three of Public Lab’s future co-founders, Shannon Dosemagen, Stewart Long, and Jeff Warren, convened in the Gulf Coast with a plan to use helium balloons, kites, and inexpensive digital cameras to loft “community satellites” over the disaster. MapKnitter was used to stitch these photos together to provide high-resolution images of what was happening. In some ways MapKnitter represents the “worst-case scenario” of an open source software project: a project whose original intentions are completely absent from its current feature set. In addition, much of MapKnitter was written during a relative crisis—the BP oil release disaster. There wasn’t an explicit choice made to write code without establishing a style guide, nor to forgo developing a testing suite; these situations were due to a chronic under supply of contributor time, which is why at this five-year anniversary it’s a great time to reflect on what can be done to expand the developer community.

Investing in infrastructure isn’t a problem unique to Public Lab; as comedian John Oliver recently said in his rant about our collective neglect to repair existing infrastructure, “We only seem to talk about infrastructure when something tragic happens.” In the US there are 70,000 bridges that have been deemed structurally deficient, yet aren’t slated for major repairs anytime soon. It’s unlikely Public Lab’s software infrastructure will create fatalities, but we can be proactive and invest in paid development time, guidelines for participation, and developing community outreach strategies.

Getting people to volunteer on open source software might sound like trying to hire a new IT director without offering a salary or benefits. However, it is possible, and many open source software projects are created and run solely by unpaid contributors. There are three major factors for attracting open source assistance:

1. Visibility: Are people aware of the project?

2. Passion: Is the project worthy of devoting one’s time? Are there yields that the contributors can make immediate use of?

3. Learning Curve: How much effort is required to get involved with the project?

For question 1, that’s a matter of getting the word out that help is needed, and we are increasingly presenting such requests at open source software events and venues. However, actually convincing people that this work is worth their time is another question. Most people who learn about Public Lab enough to pay attention are the kind of people who would be passionate about Public Lab in the first place. However, for a variety of reasons, the Public Lab community has a very low proportion of software developers in its membership. The Google Summer of Code (GSoC) program attracts student developers who need experience and get exactly that. The problem is that such developers are not necessarily passionate about the project (question 2), so there is not always follow-through after the GSoC program ends. As an exception, noted earlier, Justin Manley is one of a few GSoC participants who has chosen to stay involved in Public Lab.

For question 2, we often see that open source projects that help programmers and software engineers tend to receive the bulk of attention. For example, GCC (GNU Compiler Collection) and LLVM (LLVM Compiler Infrastructure) are great examples open source projects which serve developers, as seed libraries serve gardeners, rather than consumers of food. Developers are volunteering to make seed libraries because they want to use those seeds, they are able to grow and save those seeds, and can’t sit around waiting for someone else to save the seeds they want. Since the Public Lab community tends to attract a community with a very small proportion of people with programming skills, even if they want tools and resources, they aren’t necessarily well-equipped to help on the software side. Some non-technical folks in the community have been learning to program and to use tools like GitHub, and that is great!

[![github-social-coding.jpg](https://i.publiclab.org/system/images/photos/000/009/824/medium/github-social-coding.jpg)](https://i.publiclab.org/system/images/photos/000/009/824/original/github-social-coding.jpg)

** GitHub** is a platform (built on the open source code tracking system git) that allows people to work together to create code (and other projects!) including discussing, managing, and reviewing issues related to the code. Currently, the Agrarian Trust is using GitHub for their work creating legal contracts between farmers and landowners.

As Bryan Bonvallet points out, the development community might not be small because of the software organization itself, but rather because the people with strong software skills just don’t care enough about the cause. Regardless, lowering the barrier to entry reduces the need for that passion (although it is unlikely to breed long-term engagement).
One possible way that the learning curve might be addressed is by making virtual machine images, which carry the development environment [making it easy to download and run the program that allows people to contribute to the software] and documentation [making it easy to learn how to read and contribute]. Documentation is helpful, but even the best instructions aren’t enough if the user has to spend four hours getting the software bootstrapped [set up and running on their machine], especially if they don’t use the same operating system or architecture as the project was written on. Automating rote tasks is the whole point of computers; even people who enjoy working with computers want to have lengthy tasks automated.

 The learning curve can also be addressed by developing accessible guidelines for contributors, a project Manley has initiated with his aforementioned research note in December 2014. Public Lab already had an introduction page at for new developers at publiclab.org/wiki/developers to help new developers learn about Public Lab software and connect with our small developer community— but that page is relatively sparse. Manley has gone the next step by proposing the first ever Public Lab Contributors Guide. The goal is to create a technical guide for collaborating within the Public Lab community on software. To a non-developer this might not register as a turning point in the Public Lab project, but it’s huge deal: it’s one of the first instances of a community member stepping up to lead recruitment strategies for the Public Lab development community. This web page is a starting place for compiling a list of development guidelines and best practices, which we see as a critical part of growing the Public Lab software development community.
The hope is that not only will guidelines make it easier for newcomers to join the projects, but they will improve the quality of the code developed.  In the world of open source software development, two of the main indicators that developers often look at to get a sense of the integrity of an open source project: (1) prominently published contributor guidelines following standard conventions, and (2) a codebase conforming to those guidelines. These aspects are important both to attract experienced developers and to welcome and support newcomers.

##Questions Moving Forward

_Should Public Lab release general-purpose libraries to attract more developers [free seed libraries to attract gardeners]?_

Re-usable, generalized libraries that are widely used by the open source community at large will raise Public Lab’s profile in the open source software community and pique the interest of serious developers who are looking to get involved. A library is a set of features which have been bundled into a reusable module. These libraries are like standardized components in a bicycle—the same component might work for many bikes. For example, all Public Lab sites use the Bootstrap library to achieve a consistent look and feel for buttons and menus, and Spectral Workbench uses a library called Flot to generate graphs. We didn’t have to write those features from scratch, and can share the burden of maintaining and improving those features with developers from other projects who use the same libraries. 
Since projects like MapKnitter were started, some of the libraries we used have been abandoned by the broader FOSS (Free and Open Source Software) community in favor of newer, more efficient or powerful libraries—so it’s important to stay abreast of changes in the field. Likewise, Public Lab contributors have recently created several general-purpose libraries (Leaflet.Illustrate and Leaflet.DistortableImage) that have been developed in service of Public Lab projects and could be used by others. Are there features in other projects–Infragram, Spectral Workbench–that might be drawn out and developed as a standalone library for others? The hope is that by creating more modular, re-usable components, we will share their development and maintenance costs with contributors to other open source projects. 

It will take time to create a Contributors Guide and even more time to cultivate a dedicated community to update existing code to match the new best practices found in such a guide. Since Public Lab is focused on making environmental monitoring tools more accessible, it will be important to address whether it’s possible to make a guide for contributors that serves non-technical and technical community members alike. Is it too early to add non-technical content to the Contributors Guide (i.e., What is Git? What is GitHub?)? 

##What forms might non-technical engagement take?

 Not everyone has to contribute to the codebase; contributing to Public Lab is also about empowering non-code-savvy users to give feedback and report problems with the software. For example, we could encourage non-technical folks to create a GitHub account and post bug reports on GitHub issues rather than sending it to the Web Working Group’s web@publiclab.org address, because GitHub is the virtual desk from which many open source developers work on code, and work is more likely to get done when it’s on top of your desk. GitHub is a great place to compile feedback and discussions about a bug or feature request. GitHub’s project management platform will track who’s doing what to address incoming bug reports, whereas email threads can get lost.

In addition to hosting workshops on hardware tools like kite-mapping and spectrometry, perhaps we should every now and then host or co-host workshops with other groups focused on getting people set up with GitHub and other open source software. We could also have further discussions about how we might reach outside of the Public Lab community to engage technical people. 

There are always people in the world who want to do something about environmental problems but have a gap between their understanding of the issues and the technical knowledge to convey that unique knowledge to others. What’s important here at Public Lab is that we’re trying to create a community, a culture, and a toolset to shrink that gap every day.

##What should the engagement goals be?

Make it easier for technical folks to make high-quality contributions to the code. 
Make it easier for maintainers to accept contributions from the community.
Engage non-technical community members with the Public Lab codebase.
Encourage software development best practices that will make Public Lab software more reliable, easier to maintain, less buggy, and longer-lived.




